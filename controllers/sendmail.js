const mailSender = require("../utils/mailSender");
const { contactMessage } = require("../mail/templates/recievemail");

exports.sendmail = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, course, message, createdAt } =
      req.body;
    if (!firstName || !lastName || !email || !message) {
      return res
        .status(400)
        .json({ success: false, error: "Please provide all required fields" });
    }

    const html = contactMessage(
      firstName,
      lastName,
      phone,
      email,
      course,
      message,
      createdAt
    );

    await mailSender("asifkhan251301@gmail.com", "New Contact Message", html);

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};
