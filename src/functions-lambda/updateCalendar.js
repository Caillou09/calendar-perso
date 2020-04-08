const { google } = require("googleapis")
const {JWT} = require('google-auth-library');

require('dotenv').config()

exports.handler = async (event, context) => {

  const upCal = await calendar.events.update({
      calendarId: process.env.CALENDAR_ID,
      eventId : varà récupérer,
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });


  return {
    statusCode: 200,
    body : JSON.stringify({res : faireProut()})
  }
}
