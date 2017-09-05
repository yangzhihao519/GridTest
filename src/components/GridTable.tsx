import * as React from 'react';
import '../css/GridTable.css';
import {Location} from './Location';

export interface Props {
  locations: Array<Location>,
  isSearchedResults: boolean,
  inputValueX: number,
  inputValueY: number
}

/**
 * Show information of locations in a table view
 */
function GridTable({ locations, isSearchedResults, inputValueX, inputValueY }: Props) {

  return (
    <div className="grid-table">
        <table>
          <tr>
            <th>Event</th>
            <th>Location</th> 
            { isSearchedResults ? <th>Distance from ({inputValueX},{inputValueY})</th> : ''}
            <th>Price from</th>
          </tr>
          {locations.map(function(location, i){
            return <tr>
                <td><h4>Event {location.event.id}</h4></td>
                <td>({location.coordinateX},{location.coordinateY})</td> 
                { isSearchedResults ? <td>{location.getDistance(inputValueX,inputValueY)}</td> : ''}
                <td>
                  <div className={"grid-table-price"}>
                    {location.event.getCheapestTicketPrice()}
                  </div>
                </td>
              </tr>;
          })}
        </table>
    </div>
  );
}

export default GridTable;
