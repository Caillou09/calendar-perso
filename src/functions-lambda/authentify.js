const { google } = require("googleapis")
const {JWT} = require('google-auth-library');

require('dotenv').config()

console.log("prout")
console.log(process.env.REACT_APP_CALENDAR_ID)

const newClient = new google.auth.JWT(
  process.env.REACT_APP_CLIENT_EMAIL,
  null,
  process.env.REACT_APP_PRIVATE_KEY,
  ['https://www.googleapis.com/auth/calendar']
);



const calendar = google.calendar({
    version: 'v3',
    project: process.env.REACT_APP_PROJECT_NUMBER,
    auth: newClient
  });

exports.handler = async(event, context) => {

  const getCal = await calendar.events.list({
      calendarId: process.env.REACT_APP_CALENDAR_ID,
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

  return {
    statusCode : 200,
    body : JSON.stringify({infosCal : getCal.data.items})
  }
}
