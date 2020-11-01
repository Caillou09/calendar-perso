const { google } = require("googleapis")
const {JWT} = require('google-auth-library');

require('dotenv').config()

const privateObj = JSON.parse(process.env.REACT_APP_PRIVATE_KEY)

const newClient = new google.auth.JWT(
  process.env.REACT_APP_CLIENT_EMAIL,
  null,
  privateObj.key,
  ['https://www.googleapis.com/auth/calendar'],
  "contact@mkmstudio.fr"
);

const calendar = google.calendar({
    version: 'v3',
    project: process.env.REACT_APP_PROJECT_NUMBER,
    auth: newClient
  });

exports.handler = async (event, context) => {
  const {email, timeDate, timeDateEnd}  = JSON.parse(event.body)
  console.log(timeDate)


  try {
    const createEvent = await calendar.events.insert({
        calendarId: process.env.REACT_APP_CALENDAR_ID,
        sendUpdates : 'all',
        resource : {
          end : {
            dateTime : (new Date(timeDateEnd)).toISOString(),
            timeZone : "Europe/Paris"
          },
          start : {
            dateTime : timeDate,
            timeZone : "Europe/Paris"
          },
          attendees : [{email}]
        }

      });
    console.log(createEvent)
  } catch (e) {
    console.log(e)
  }


  return {
    statusCode: 200,
    body : JSON.stringify({res : 'success'})
  }
}
