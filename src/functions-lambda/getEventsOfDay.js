const { google } = require("googleapis")
const {JWT} = require('google-auth-library');

require('dotenv').config()

console.log("Moïra")

const newClient = new google.auth.JWT(
  process.env.REACT_APP_CLIENT_EMAIL,
  null,
  process.env.REACT_APP_PRIVATE_KEY,
  ['https://www.googleapis.com/auth/calendar'],
  process.env.REACT_APP_CALENDAR_ID
);


const calendar = google.calendar({
    version: 'v3',
    project: process.env.REACT_APP_PROJECT_NUMBER,
    auth: newClient
  });


exports.handler = async(event, context) => {
  const date = event.body
  const dateMin = new Date(date).setHours(0,0,0)
  const dateMax = new Date(date).setHours(11,59,59)

  const getCal = await calendar.events.list({
      calendarId: process.env.REACT_APP_CALENDAR_ID,
      timeMin: (new Date(dateMin)).toISOString(),
      timeMax : (new Date(dateMax)).toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

  return {
    statusCode : 200,
    body : JSON.stringify({infosCalOfDay : getCal.data.items})
  }
}
