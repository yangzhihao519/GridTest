Viagogo Coding Challenge
------------------------

This project was developed for the Viagogo Coding Challenge and was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 

## See the online app:

> [https://yangzhihao519.github.io/GridTest/](https://yangzhihao519.github.io/GridTest/)

## Run the app in development mode

Setting up the project,

> run `npm install`

Then, go to the project directory,

>  run `npm run start`

Open 

> [http://localhost:3000](http://localhost:3000) 

to view it in the browser

### Requirements
• Code in any language you like but please provide clear instructions on how we should build & run your code.
• Please use any source control system you like, and send us a link via github or google drive (our email system blocks zip files).
• The first requirement is your code meets the requirements.
• Secondary requirements are whether your code is idiomatic for the language being
coded in, easy to read, and clearly laid out.

### Scenario
• Your program should randomly generate seed data.

> The seed data is generated every time the page is refreshed.

• Your program should operate in a world that ranges from -10 to +10 (Y axis), and -10 to +10 (X axis).
• Your program should assume that each co-ordinate can hold a maximum of one event.
• Each event has a unique numeric identifier (e.g. 1, 2, 3).
• Each event has zero or more tickets.
• Each ticket has a non-zero price, expressed in US Dollars.
• The distance between two points should be computed as the Manhattan distance.

### Instructions
• You are required to write a program which accepts a user location as a pair of co- ordinates, and returns a list of the five closest events, along with the cheapest ticket price for each event.
• Please detail any assumptions you have made.

> Here are the assumptions made:
> 1. When the number of the locations was generated, the minimum case is there is no location that has an event.
> 2. The maximum number of tickets for one event is 100.
> 3. The maximum price for one ticket is 1000 US dollars, and the minimum is 0.01 US dollars.

• How might you change your program if you needed to support multiple events at the same location?

> Currently, each created location has one event. To support multiple
> events at the same location, simply change the definition of the
> Location class by removing "event: Event;" and adding "events: Array<Event>;". 
> And adjust other codes when it come to defining one Location and getting information of the Events in one Location.

• How would you change your program if you were working with a much larger world size?

> 1. Set up backend with database, construct the APIs for retrieving data, processing the request faster for the users;
> 2. Add loading animation when the searching request is processing to keep th users being patient;
> 3. Improve the current algorithms: 1) Algorithm in searching closest locations to a coordinate; 2) Algorithm in sorting the ticket prices;
> 4. Add zoom-in and zoom out functions to the Grid Map of coordinates.


### Example Program Run
Please Input Coordinates: > 4,2
Closest Events to (4,2):
Event 003 - $30.29, Distance 3 
Event 001 - $35.20, Distance 5 
Event 006 - $01.40, Distance 12










