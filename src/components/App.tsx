import * as React from 'react';
import '../css/App.css';
import GridTable from './GridTable'
import GridMap from './GridMap'
import {Location} from './Location';
import {NUMBER_OF_CLOSEST_LOCATIONS} from '../constants'

interface AppProps {
  locationArray: Array<Location>
}

interface AppState {
  inputValue: string,
  inputValueX: number,
  inputValueY: number,
  locationsToShow: Array<Location>,
  isSearchedResults: boolean,
  inputHasError: boolean,
  inputErrorMessage: string,
  resultsMessage: string
}

/**
 * Receive input values and tell the page what to show
 */
class App extends React.Component<AppProps, AppState> {

  constructor(props: any) {
    super(props);

    this.props = {
      locationArray: []
    }

    this.state = {
      inputValue: '',
      inputValueX: NaN,
      inputValueY: NaN,
      locationsToShow: [],
      isSearchedResults: false,
      inputHasError: false,
      inputErrorMessage: '',
      resultsMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
  }

  /**
   * @desc Load locations when this component will mount
   */
  componentWillMount() {
    this.setState({
      locationsToShow: this.props.locationArray,
      resultsMessage: 'There are currently ' + this.props.locationArray.length + ' events in the neighborhood.'
    });
  }

  /**
   * @desc Update the inputValue from the input form
   * @param {any} - event of input form
   * @return {}
  */
  handleChange(event: any) {
    this.setState({
      inputValue: event.target.value
    });
  }

  /**
   * @desc Search the locations for the input coordinate 
   * and display the closest event to the input coordinate if it meets the requirement
   * @param {any} - event of input form
   * @return {}
  */
  handleSearch(event: any) {
    // console.log('Input coordinate: ' + this.state.inputValue);
    var inputValue = this.state.inputValue;
    var inputValues = inputValue.split(',');

    this.setState({
      inputHasError: false,
      inputErrorMessage: ""
    });

    var hasError = false;

    if(inputValues){
      if(inputValues.length == 2){
          var inputValueX = inputValues[0];
          var inputValueY = inputValues[1];

          if(isInteger(inputValueX)&&isInteger(inputValueY)){
            var inputX = parseInt(inputValueX, 10); 
            var inputY = parseInt(inputValueY, 10); 

            if((inputX>=-10 && inputX<=10) && (inputY >=-10 && inputY <=10)){
              // Input value is valid
              // Get the closest locations
              this.setState({
                inputValueX: inputX,
                inputValueY: inputY,
                locationsToShow: getClosestLocations(inputX, inputY, this.props.locationArray),
                isSearchedResults: true,
                resultsMessage: 'Here are the closest events from ('+ inputX + ',' + inputY + ').'
              });
            }else{
              // coordinate outside the scope
              hasError = true;
            }
          }else{
            // Input values contain non-interger(s)
            hasError = true;
          }
      }else{
        // More than one comma in the input
        hasError = true;
      }
    }else{
      // Input value is not valid
      hasError = true;
    }

    // Update the error message if there is error
    if(hasError){
      this.setState({
        inputHasError: true,
        inputErrorMessage: "(Error: Please input the right format of coordinate: x,y , where x and y are integer and both within [-10,10].)",
        locationsToShow: [],
        resultsMessage: "Sorry, there is no event to display."
      });
    }else{
      // do nothing
    }

    event.preventDefault();
  }

  /**
   * @desc Clear the input value and reset the displayed locations to the original sets
   * @param {}
   * @return {}
  */
  handleClearInput(){
    this.setState({
      inputValue: '',
      inputValueX: NaN,
      inputValueY: NaN,
      locationsToShow: this.props.locationArray,
      isSearchedResults: false,
      inputHasError: false,
      inputErrorMessage: "",
      resultsMessage: 'There are currently ' + this.props.locationArray.length + ' events in the neighborhood.'
    });
  }

  render() {
    let {inputValue, inputValueX, inputValueY, locationsToShow, isSearchedResults, inputHasError, inputErrorMessage, resultsMessage} = this.state

    return (
      <div className="App">

        <div className="SearchInput">
          <form onSubmit={this.handleSearch}>
            <label>
              <h2>Search for a location</h2>
              <p>The location coodinate x,y should be integers and both within [-10,10].</p>
              <input type="text" value={inputValue} onChange={this.handleChange} placeholder="e.g. 4,2"/>
            </label>
            <input type="submit" value="Search" />
            {(inputValue.length >0) ? <button onClick={this.handleClearInput}>Clear input</button> : ''}
          </form>
          <p style={{color: "lightsalmon", visibility: !{inputHasError}}}> {inputErrorMessage} </p>
        </div>
        
        <div className="Results">
          <h4 style={{textAlign: "center"}}>{resultsMessage}</h4>
          <GridMap locations={locationsToShow} isSearchedResults={isSearchedResults} inputValueX={inputValueX} inputValueY={inputValueY}/>
          <GridTable locations={locationsToShow} isSearchedResults={isSearchedResults} inputValueX={inputValueX} inputValueY={inputValueY}/>
        </div>
      </div>
    );
  }
}

export default App;

// helper functions

/**
 * @desc Get the closest locations which have events to the input coodinates
 * @param {number} - inputX: x of input coodinates 
 * @param {number} - inputY: y of input coodinates 
 * @param {Array<Location>} - locations: all the locations which have events
 * @return {Array<Location>} - At most five closet locations to the input coordinates.
*/
function getClosestLocations(inputX: number, inputY: number, locations: Array<Location> ){
  var closestLocations = [];

  // Sort the locations in ascending order of the distances away the input coordinates
  locations.sort(function(locationA, locationB){
    return locationA.getDistance(inputX, inputY) - locationB.getDistance(inputX, inputY);
  });

  // Get at most five of the closet locations
  for(var i=0; i<NUMBER_OF_CLOSEST_LOCATIONS && i<locations.length; i++){
    closestLocations.push(locations[i]);
  }

  return closestLocations;
}

/**
 * @desc Check if an input string is an interger
 * @param {string} - value: input string 
 * @return {boolean} - True if the string is an integer, otherwise, false.
*/
function isInteger(value: string) {
    var n = Math.floor(Number(value));
    return String(n) === value;
}