# Group Calender
Tired of your friends never showing up when you all make plans becuase of some last minute birthday party or family dinner they forgot about. With the new app you can create a group calender with your friends or family that shows exactly when you will be busy and when you will have time to play with the boys. All it takes is for each person to download the app and then they can form a group calender that they all can edit and see at the same time. If someone is going to be busy friday night because of their grandpa's birthday party they can put it on the calender so we can plan another day to meet up. 

## Design

![Mock](GroupCalendar.pdf)

Here is a sequence diagram that shows how to people would interact with the backend to vote.

![Calender event diagram](CalenderServer.png)

## Key features
- Secure login over HTTPS
- Ability to create an event on any day
- Display of current month chosen and events on that month
- Ability to edit and remove events from calender that you made
- Updates new events added in real time
- Events are persistently stored
- Ability for admin to create or delete group calenders
- When adding event you can set a level of certainty that the event will happen based on color

## Technologies
- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for login and one for viewing and editing calender.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, choice display, adding events, display other users events added, backend endpoint calls.
- **3rd Party** - Retrieve the current date and displayed on top of page
- **Service** - Backend service with endpoints for:
  - login
  - retrieving list of events
  - submitting new events
  - retrieving new events made by others
- **DB/Login** - Store users, calenders, and events in database. Register and login users. Credentials securely stored in database. Can't create or edit event unless authenticated.
- **WebSocket** - As each user creates a new event, their events are broadcast to all other users.
- **React** - Application ported to use the React web framework.

## Recent Additions
- **Style** - Added buttons for adding event, login, Github access.
- Three images where added that will auto fill the page depending on the size of the webpage.
- Events will have different colors the user can assign to show the different levels of how confident they are the this event will take place at this time and place.
- Created header for the buttons login and github, and added arrows that allow for cycling through months of the year while staying in the same spot on the page but auto adjusting depending on the size.
- Need to create logic that will allow for adding of events and then auto sort the event to the desired month.
