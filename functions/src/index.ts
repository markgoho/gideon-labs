import * as functions from 'firebase-functions';
import * as rp from 'request-promise-native';
import * as mailgun from 'mailgun-js';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const verifyRecaptcha = functions.https.onRequest(
  async (req: any, res: any) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET');

    const secret = '6LdbEH4UAAAAAG-c6MEKcnokAIBrl332_4Ljlz1_';
    const response = req.query.token;

    const options = {
      method: 'POST',
      uri: `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${response}`,
      resolveWithFullResponse: true,
      json: true
    };

    const { body: verification } = await rp(options);

    res.status(200).send(verification);
  }
);

export const sendContactMessage = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async (snapshot: any) => {
    const domain = 'mg.gideonlabs.com';
    const apiKey = functions.config().mailgun.key;

    const mg = new mailgun({
      apiKey,
      domain
    });

    const {
      contactName,
      message,
      email,
      phone
    } = snapshot.data() as FirebaseFirestore.DocumentData;

    const data: mailgun.messages.SendData = {
      to: 'jag@gideonlabs.com',
      from: 'noreply@mg.gideonlabs.com',
      subject: 'Website Contact Message',
      html: `
        <h1>Message from ${contactName}</h1>
        <p>${message}</p>

        <div>
          Email: ${email} <br/>
          Phone: ${phone}
        </div>
      `
    };

    await mg.messages().send(data);
    return snapshot.ref.update({ sent: true });
  });

export const postForm = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.body.contactName !== undefined) {
    try {
      const today = new Date().toISOString();
      await admin
        .firestore()
        .collection('messages')
        .add({
          ...req.body,
          submitted: today
        });

      return res.status(200).send('Okay');
    } catch (e) {
      return res.status(500).send({ error: e });
    }
  } else {
    return res.status(200).send('Okay');
  }
});
