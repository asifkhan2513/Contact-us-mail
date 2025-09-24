const mailSender = require("../utils/mailSender");
const { contactMessage } = require("../mail/templates/recievemail");
const Message = require("../model/message");

exports.sendmail = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, course, message, createdAt } =
      req.body;
    if (!firstName || !lastName || !email || !message) {
      return res
        .status(400)
        .json({ success: false, error: "Please provide all required fields" });
    }
    const fullName = `${firstName} ${lastName}`;
    const html = contactMessage({
      firstName,
      lastName,
      phone,
      email,
      course,
      message,
      createdAt,
    });

    const newHTMl = Message.create({
      firstName,
      lastName,
      phone,
      email,
      course,
      message,
      createdAt,
    });
    await newHTMl.save();
    // await mailSender("asifkhan251301@gmail.com", "New Contact Message", html);
    await mailSender(
      "avneesh7inox@gmail.com",
      "New Contact Message",
      html,
      fullName
    );

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};
