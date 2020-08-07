const { google } = require("googleapis")
const {JWT} = require('google-auth-library');

require('dotenv').config()

const newClient = new google.auth.JWT(
  process.env.REACT_APP_CLIENT_EMAIL,
  null,
  process.env.REACT_APP_PRIVATE_KEY,
  ['https://www.googleapis.com/auth/calendar'],
  "contact@mkmstudio.fr"
);

const calendar = google.calendar({
    version: 'v3',
    project: process.env.REACT_APP_PROJECT_NUMBER,
    auth: newClient
  });

exports.handler = async (event, context) => {
  const { email, card } = JSON.parse(event.body)

  try {
    const upCal = await calendar.events.update({
        calendarId: process.env.REACT_APP_CALENDAR_ID,
        eventId : card.id,
        resource : {
          end : card.end,
          start : card.start,
          attendees : [...(card.attendees||[]),{email}]
        }

        // maxResults: 10,
        // singleEvents: true,
        // orderBy: 'startTime',
      });
    console.log(upCal)
  } catch (e) {
    console.log(e)
  }


  return {
    statusCode: 200,
    body : JSON.stringify({res : ''})
  }
  // const upCal = await calendar.events.update({
  //     calendarId: process.env.CALENDAR_ID,
  //     eventId : varà récupérer,
  //     timeMin: (new Date()).toISOString(),
  //     maxResults: 10,
  //     singleEvents: true,
  //     orderBy: 'startTime',
  //   });
  //
  //
  // return {
  //   statusCode: 200,
  //   body : JSON.stringify({res : faireProut()})
  // }
}
