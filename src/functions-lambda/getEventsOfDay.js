const { google } = require("googleapis")
const {JWT} = require('google-auth-library');

require('dotenv').config()

console.log("Moïra")


const privateObj = JSON.parse(process.env.REACT_APP_PRIVATE_KEY)

const newClient = new google.auth.JWT(
  process.env.REACT_APP_CLIENT_EMAIL,
  null,
  privateObj.key,
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
  console.log(date)
  const dateMin = new Date(date).setHours(0,0,0)
  console.log(dateMin)
  const dateMax = new Date(date).setHours(23,59,59)

  const getEvents = await calendar.events.list({
      calendarId: process.env.REACT_APP_CALENDAR_ID,
      timeMin: (new Date(dateMin)).toISOString(),
      timeMax : (new Date(dateMax)).toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

  return {
    statusCode : 200,
    body : JSON.stringify({infosCalOfDay : getEvents.data.items})
  }
}
