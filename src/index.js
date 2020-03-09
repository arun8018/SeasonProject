import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, longitude: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    return (
      <div>
        Latitude :{this.state.latitude}
        <br></br>
        Longitude :{this.state.longitude}
        <br></br>
        Error:{this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
