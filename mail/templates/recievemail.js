
exports.contactMessage = ({
  firstName,
  lastName,
  phone,
  email,
  course,
  message,
  createdAt,

}) => {
  const fullName = `${firstName} ${lastName}`;
  let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Contact Message - Maazster</title>
    <style>
      body,table,td,a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
      table,td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
      img { -ms-interpolation-mode:bicubic; }
      body {
        background-color: #f5f7fb;
        margin: 0;
        padding: 20px 12px;
        font-family: "Helvetica Neue", Arial, sans-serif;
        color: #333333;
      }
      .email-wrapper {
        max-width: 680px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 30px rgba(18, 36, 63, 0.08);
      }
      .header {
        background: linear-gradient(90deg,#0f172a,#ffb347 80%);
        color: #ffffff;
        padding: 22px 24px;
        text-align: left;
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .logo { width: 56px; height: 56px; border-radius: 8px; object-fit: contain; background: rgba(255,255,255,0.06); padding: 6px; }
      .brand-name { font-size: 18px; font-weight: 700; letter-spacing: 0.2px; }
      .preheader { display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; }
      .content { padding: 24px; }
      .h1 { font-size: 20px; margin: 0 0 6px 0; color: #0f172a; }
      .lead { margin: 0 0 18px 0; color: #0f172a; font-size: 14px; line-height: 1.5; }
      .card { border: 1px solid #e6eef9; padding: 16px; border-radius: 10px; background: #fbfdff; margin-bottom: 16px; }
      .label { display:block; font-size: 12px; color: #0f172a; margin-bottom: 6px; font-weight:600; }
      .value { font-size: 15px; color: #333333; word-break: break-word; }
      .message-box { white-space: pre-wrap; font-size: 15px; color: #333333; line-height: 1.5; }
      .cta { text-align:center; padding: 18px 0 8px; }
      .btn { display: inline-block; text-decoration: none; background: #ffb347; color: #ffffff; padding: 12px 20px; border-radius: 8px; font-weight: 600; box-shadow: 0 6px 18px rgba(221, 169, 40, 1); }
      .meta { font-size: 13px; color: #94a3b8; text-align:center; padding: 18px 24px 32px; }
      .footer { background: #ffb347; text-align:center; font-size: 12px; color: #ffffff; padding: 14px 18px; }
      a.inline { color: #ffb347; text-decoration: none; font-weight: 600; }
      @media only screen and (max-width:480px) {
        .header { padding: 16px; }
        .content { padding: 16px; }
        .logo { width:48px; height:48px; }
        .h1 { font-size:18px; }
        .btn { padding: 10px 16px; }
      }
    </style>
  </head>
  <body>
    <span class="preheader">New contact message received at Maazster from ${fullName} (${email}).</span>

    <div class="email-wrapper" role="article" aria-roledescription="email">
      <div class="header">
        <img class="logo" src="../assets/logo.png" alt="Maazster logo" />
        <div>
          <div class="brand-name">Maazster</div>
          <div style="font-size:12px; color: rgba(255,255,255,0.85); margin-top:2px;">New contact request received</div>
        </div>
      </div>

      <div class="content">
        <h1 class="h1">You have a new message from the contact form</h1>
        <p class="lead">Review the details below and reply to the sender if required.</p>

        <div class="card"><label class="label">Full Name</label><div class="value">${fullName}</div></div>
        <div class="card"><label class="label">Email</label><div class="value"><a class="inline" href="mailto:${email}">${email}</a></div></div>
        <div class="card"><label class="label">Phone</label><div class="value">${
          phone || "Not provided"
        }</div></div>
        <div class="card"><label class="label">Course</label><div class="value">${
          course || "Not specified"
        }</div></div>
        <div class="card"><label class="label">Message</label><div class="message-box">${message}</div></div>

        <div class="cta">
          <a class="btn" href="mailto:${email}?subject=Re:%20Your%20message%20to%20Maazster">Reply to ${fullName}</a>
        </div>

        <div class="meta">Received:${hours}:${minutes}:${seconds} (Asia/Kolkata)</div>
      </div>

      <div class="footer">
        Need help? Contact <a class="inline" href="mailto:support@skengineering.com">support@skengineering.com</a><br/>
        &copy; ${new Date().getFullYear()} Maazster. All rights reserved.
      </div>
    </div>
  </body>
  </html>`;
};
