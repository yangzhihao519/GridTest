import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import {Ticket} from './components/Ticket';
import {Event} from './components/Event';
import {Location} from './components/Location';
import {MAX_NUMBER_OF_LOCATIONS, MIN_NUMBER_OF_LOCATIONS, MAX_NUMBER_OF_TICKETS, MIN_NUMBER_OF_TICKETS, MAX_TICKET_PRICE, MIN_TICKET_PRICE} from './constants';

/**
 * Entry of the program
 * Generate random locations to show on page
 * @author Zhihao Yang <yang_zhihao@live.com>
 */
ReactDOM.render(
  <App locationArray={generateRandomLocations()}/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

/**
 * @desc Generates a random number of locations which contains one event
 * @param {}
 * @return {Array<Location>} - An array of locations
 */
function generateRandomLocations(){
  var locations = [];
  
  // Generate the number of locations which have event
  var numberOfLocations = generateRandomInteger(MIN_NUMBER_OF_LOCATIONS, MAX_NUMBER_OF_LOCATIONS);
  var locationIDArray = genereateRandomNumberArray(numberOfLocations);

  // Load the locations with one event
  for(var i=0; i<numberOfLocations; i++){
    var locationID = locationIDArray[i];
    var coordinateX = -10 + locationID%21;
    var coordinateY = 10 - Math.floor(locationID/21);
    var event = generateRandomEvent(i);
    var location = new Location(locationID, coordinateX, coordinateY, event);
    locations.push(location);
  }

  return locations;
}

/**
 * @desc Generates a event with random number of tickets
 * @param {number} - id
 * @return {Event} - An event
 */
function generateRandomEvent(id: number){
  var tickets = generateRandomTickets();
  var event = new Event(id, tickets);
  return event;
}

/**
 * @desc Generates random number of tickets with random prices
 * @param {}
 * @return {Array<Ticket>} - An array of Tickets
 */
function generateRandomTickets(){
  // Generate a random number for the number of tickets
  var numberOfTicket = generateRandomInteger(MIN_NUMBER_OF_TICKETS, MAX_NUMBER_OF_TICKETS);
  var tickets = [];
  for(var i=0; i<numberOfTicket; i++){
    // Define the price of the ticket
    var ticket = new Ticket(generateRandomDouble(MIN_TICKET_PRICE, MAX_TICKET_PRICE));
    tickets.push(ticket);
  }

  return tickets;
}

/**
 * @desc Generates random integer
 * @param {number} - minimum number
 * @param {number} - maximum number
 * @return {number} - a random integer within min and max
 */
function generateRandomInteger(min: number, max: number){
  return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * @desc Generates random double number with two decimal places
 * @param {number} - minimum number
 * @param {number} - maximum number
 * @return {double} - a random double number within min and max
 */
function generateRandomDouble(min: number, max: number){
  return Math.floor((Math.random()*(max-min+1)+min)*100)/100;
}

/**
 * @desc Generates an array of random exclusive location ids
 * @param {number} - maximum length of the array
 * @return {Array} - an array with exclusive numbers
 */
function genereateRandomNumberArray(maxLength: number){
  var array = [];
  while(array.length < maxLength){
    var randomnumber = Math.floor(Math.random() * MAX_NUMBER_OF_LOCATIONS)
    if(array.indexOf(randomnumber) > -1) continue;
    array[array.length] = randomnumber;
  }

  return array;
}