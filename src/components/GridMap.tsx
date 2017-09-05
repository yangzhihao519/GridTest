import * as React from 'react';
import '../css/GridMap.css';
import {Location} from './Location';
import {RANGE_OF_X_AXIS, RANGE_OF_Y_AXIS} from '../constants'

export interface Props {
  locations: Array<Location>,
  isSearchedResults: boolean,
  inputValueX: number,
  inputValueY: number
}

/**
 * Show information of locations in a grip view mapped to coordinates
 */
function GridMap({ locations, isSearchedResults, inputValueX, inputValueY }: Props) {
    
    // Generate the HTML code in a loop
    var GridMapHTML = [];

    for(var i = 0; i < RANGE_OF_Y_AXIS; i++) {
        for(var j = 0; j < RANGE_OF_X_AXIS; j++) {

            // Mark the searched coordinate with red border
            var searchedLocationStyle = '';
            if((j-10) == inputValueX && (10-i) == inputValueY){
                searchedLocationStyle = 'grid-item-searched';
            }else{
                // do nothing
            }

            var gridItemID = i*21+j;
            var location = getLocationByID(locations, gridItemID);
            
            if(location){
                // If the location is in the array of locations to show
                // Color this grid with green and show relavent information of the event on this location
                GridMapHTML.push(<div className={"grid-item grid-item-active " + searchedLocationStyle} style={{display:"inline-block"}}>
                    <div className={"grid-item-hover-over"}>
                        <h4>Event {location.event.id}</h4>
                        <p>Location: ({j-10},{10-i})</p>
                        <p>Price from: {location.event.getCheapestTicketPrice()}</p>
                        { isSearchedResults ? (<p style={{visibility:!{isSearchedResults}}}>Distance from ({inputValueX},{inputValueY}): {location.getDistance(inputValueX,inputValueY)}</p>) : ''}
                    </div>
                </div>);
            }else{
                // If the location is not in the array of locations to show
                // Color this grid with gray and show only show the coordinate of this location
                GridMapHTML.push(<div className={"grid-item grid-item-inactive " + searchedLocationStyle} style={{display:"inline-block"}}>
                    <div className={"grid-item-hover-over"}>
                            <p>No event</p>
                            <p>Location:({j-10},{10-i})</p>
                        </div>
                 </div>);
            }
        }
        // Break the row and start a new row
        GridMapHTML.push(<br/>)
    }
  return (
    <div className="grid-map">
        {GridMapHTML}
    </div>
  );
}

export default GridMap;

// helpers

/**
 * @desc Get the location that matches the id from an array of locations
 * @param {Array<Location>} - An array of locations
 * @param {number} - the id to be searched
 * @return {Location} - Location that matches the id if it's found, otherwise, null.
 */
function getLocationByID(locations: Array<Location>, id: number){
    for(let location of locations){
        if(location.id == id){
            return location;
        }else{
            // do nothing
        }
    }

    return null;
}
