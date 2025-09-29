const mailSender = require("../utils/mailSender");
const { contactMessage } = require("../mail/templates/recievemail");
const Message = require("../model/message");

exports.sendmail = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, course, message, createdAt } =
      req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return res
        .status(400)
        .json({ success: false, error: "Please provide all required fields" });
    }

    const fullName = `${firstName} ${lastName}`;

    // Build email HTML (from your template)
    const html = contactMessage({
      firstName,
      lastName,
      phone,
      email,
      course,
      message,
      createdAt,
    });

    // Option A: create + save in one go (create returns the saved document)
    const savedMessage = await Message.create({
      firstName,
      lastName,
      phone,
      email,
      course,
      message,
      createdAt,
    });

    // If you prefer Option B (explicit constructor + save), use:
    // const messageDoc = new Message({ firstName, lastName, phone, email, course, message, createdAt });
    // const savedMessage = await messageDoc.save();

    // Send email (await to ensure mail was attempted)
    await mailSender(
      "edutech@maazstertech.in",
      "New Contact Message",
      html,
      fullName
    );

    // Successful response
    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
      data: savedMessage, // optional, remove if you don't want to return DB doc
    });
  } catch (error) {
    console.error("sendmail error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
