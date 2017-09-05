const RANGE_OF_X_AXIS = 21; // Requirement: a world that ranges from -10 to +10 (X axis)
const RANGE_OF_Y_AXIS = 21; // Requirement: a world that ranges from -10 to +10 (Y axis)

const MAX_NUMBER_OF_LOCATIONS = 441; // Requirement: Your program should operate in a world that ranges from -10 to +10 (Y axis), and -10 to +10 (X axis), which has 21*21 coordinates.
const MIN_NUMBER_OF_LOCATIONS = 0; // Assumption: The minimum case is there is no location that has an event.

const MAX_NUMBER_OF_TICKETS = 100; // Assumption: the maximum number of tickets for one event is 100.
const MIN_NUMBER_OF_TICKETS = 0; // Requirement: Each event has zero or more tickets.
const MAX_TICKET_PRICE = 1000; // Assumption: the maximum price for one ticket is 1000 US dollars.
const MIN_TICKET_PRICE = 0.01; // Each ticket has a non-zero price.

const NUMBER_OF_CLOSEST_LOCATIONS = 5; // Requirment: Returns a list of the five closest events

export {RANGE_OF_X_AXIS, RANGE_OF_Y_AXIS, MAX_NUMBER_OF_LOCATIONS, MIN_NUMBER_OF_LOCATIONS, MAX_NUMBER_OF_TICKETS, MIN_NUMBER_OF_TICKETS, MAX_TICKET_PRICE, MIN_TICKET_PRICE, NUMBER_OF_CLOSEST_LOCATIONS};