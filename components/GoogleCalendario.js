
/*{export default function addEventCalendar(){

    let email = document.querySelector("#floatingEmail").value
    let data = document.querySelector("#floatingData").value
    let inicio = document.querySelector("#floatingInicio").value
    let fim = document.querySelector("#floatingInicio").value
    
        const { google } = require('googleapis')
        const { OAuth2 } = google.auth
        const fs = require('fs').promises;
        const path = require('path');
        const process = require('process');
        const {authenticate} = require('@google-cloud/local-auth');

        const SCOPES = ['https://www.googleapis.com/auth/calendar'];

        const oAuth2Client = new OAuth2(
          '4207612718-cuh3kisum94qojba5coijnc8018gv3og.apps.googleusercontent.com',
          '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'
        )

        const event = {
            'summary': 'Evento SIEGE',
            'description': '',
            'start': {
              'dateTime': `${data}:${inicio}`,
              'timeZone': 'America/Sao_Paulo',
            },
            'end': {
              'dateTime': `${data}:${fim}`,
              'timeZone': 'America/Sao_Paulo',
            },
            'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10},
              ],
            },
          };
          
          calendar.events.insert({
            auth: OAuth2,
            calendarId: email,
            resource: event,
          }, function(err, event) {
            if (err) {
              console.log('There was an error contacting the Calendar service: ' + err);
              return;
            }
            console.log('Event created: %s', event.htmlLink);
          });
}}/*




          

        /*var calendar
        
        async function connectWithCredentials(newToken) {
          oAuth2Client.setCredentials({refresh_token: newToken})
          calendar = google.calendar({version: 'v3', auth:  oAuth2Client })
        }

        async function createEvent(newEvent) {
          return new Promise((resolve, reject) => {
        
          const eventStartTime = new Date(newEvent.date_meet)
          const eventEndTime = new Date(newEvent.date_meet)
          eventEndTime.setMinutes(eventEndTime.getMinutes() + 60)
        
          const event = {
            summary: 'Evento SIEGE',
            location: '',
            description: '',
            start: {
              dateTime: `${data}:${inicio}`,
              timeZone: 'America/Sao_Paulo',
            },
            end:{
              dateTime: `${data}:${fim}`,
              timeZone: 'America/Sao_Paulo'
            },

          }
          calendar.freebusy.query({
            resource: {
              timeMin: inicio,
              timeMax: fim,
              timeZone: 'America/Sao_Paulo',
              items: [{ id: 'primary' }],
            },
          },
          async (err, res) => {
            if(err) return console.error('Free Busy Query Error: ', err)
        
            const eventsArr = res.data.calendars.primary.busy
            if(eventsArr.length === 0 ){
                calendar.events.insert(
                  { calendarId: email, conferenceDataVersion: 1, resource: event },
                  function (error, response) {
                    if (error) {
                      console.log("Something went wrong: " + error); // If there is an error, log it to the console
                      return error;
                    }
                    console.log("Event created successfully.")
                    resolve(response.data)
                    return response.data
                  }
                )
        
            }
          })
          })
        }
        
        module.exports = {connectWithCredentials, createEvent}*/





        /*}*/
