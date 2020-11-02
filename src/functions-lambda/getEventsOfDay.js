const { google } = require("googleapis")
const {JWT} = require('google-auth-library');


require('dotenv').config()

console.log("Moïra")



const newClient = new google.auth.JWT(
  process.env.REACT_APP_CLIENT_EMAIL,
  null,
  JSON.parse(process.env.REACT_APP_PRIVATE_KEY),
  ['https://www.googleapis.com/auth/calendar'],
  process.env.REACT_APP_CALENDAR_ID
);


const calendar = google.calendar({
    version: 'v3',
    project: process.env.REACT_APP_PROJECT_NUMBER,
    auth: newClient
  });


exports.handler = async(event, context) => {
  const {dateMinFormated, dateMaxFormated} = JSON.parse(event.body)
  console.log(dateMinFormated)
  console.log(new Date(dateMinFormated))
  console.log(new Date(dateMaxFormated))

  const getEvents = await calendar.events.list({
      calendarId: process.env.REACT_APP_CALENDAR_ID,
      timeMin: dateMinFormated,
      timeMax : dateMaxFormated,
      singleEvents: true,
      orderBy: 'startTime',
    });

  return {
    statusCode : 200,
    body : JSON.stringify({infosCalOfDay : getEvents.data.items})
  }
}
