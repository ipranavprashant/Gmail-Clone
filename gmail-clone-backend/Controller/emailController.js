const Email = require("../Model/EmailSchema");
const User = require("../Model/UserSchema");

const createEmail = async (req, res) => {
  try {
    const user = req.id;
    const { sendersaddress, receiversaddress, subject } = req.body;
    const createNewEmail = await Email.create({
      sendersaddress: sendersaddress,
      receiversaddress: receiversaddress,
      subject: subject,
      message: message,
      user: user,
    });

    res.json({ createdNewEmail: createNewEmail });
  } catch (err) {
    console.log("Errors creating the email " + err);
    res.status(500);
  }
};

const fetchAllEmails = async (req, res) => {
  try {
    const emails = await Email.find();
    res.json({ Emails: emails });
  } catch (err) {
    console.log("Errors fetching the emails!");
    res.status(500);
  }
};

const fetchSpecificEmail = async (req, res) => {
  try {
    const emailId = req.params.id;
    const email = await Email.findById(emailId);

    res.json({ "Email Specific to the ID": email });
  } catch (err) {
    console.log("Errors fetching the specific email!");
    res.status(500);
  }
};

// update email feature doesn't exist apparently
/*
const updateEmail = async (req, res) => {
  try {
    const emailId = req.params.id;
    const { title, description, severity, user, status } = req.body.updatedData;

    console.log(emailId);
    const deprecatedEmail = await Email.findByIdAndUpdate(
      { _id: emailId },
      {
        title: title,
        description: description,
        severity: severity,
        user: user,
        status: status,
      }
    );

    const updatedEmail = await Email.findById(emailId);

    console.log(deprecatedEmail, updatedEmail);

    res.json({ deprecatedEmail, updatedEmail });
  } catch (err) {
    console.log("Errors updating the specific email! " + err);
    res.status(500).send("Error updating the email");
  }
};
*/

const deleteEmail = async (req, res) => {
  try {
    const emailId = req.params.id;
    const deletedEmail = await Email.deleteOne({ _id: emailId });

    res.json({ "Deleted Email": deletedEmail });
  } catch (err) {
    console.log("Errors deleting the specific email!");
    res.status(500);
  }
};

const emailsSpecificToAUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) res.sendStatus(401);

    const emails = await Email.find({ user: userId });

    res.json({ Emails: emails });
  } catch (err) {
    console.log("Error fetching user specific emails!");
    res.status(500);
  }
};

module.exports = {
  createEmail: createEmail,
  deleteEmail: deleteEmail,
  updateEmail: updateEmail,
  fetchSpecificEmail: fetchSpecificEmail,
  fetchAllEmails: fetchAllEmails,
  emailsSpecificToAUser: emailsSpecificToAUser,
};
