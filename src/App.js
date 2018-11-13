import React, { Component } from 'react';
import './App.scss';
import Map from './components/Map';
import FoursquareAPI from "./API/";
import Sidebar from "./components/Sidebar";

class App extends Component {
  constructor() {
    super();
      this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom: 12,
      updateSuperState: obj => {
        this.setState(obj);
      }
    };
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
  });
    this.setState({ markers: Object.assign(this.state.markers, markers)});
  };

  handleMarkerClick = marker => {
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers, marker)});
    const venue = this.state.venues.find(venue => venue.id === marker.id);

    FoursquareAPI.getVenueDetails(marker.id).then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({ venues: Object.assign(this.state.venues, newVenue)});
    });
  };

  handleListItemClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
    console.log(venue);
  }

  componentDidMount() {
    FoursquareAPI.search({
      near:"Chicago,IL",
      query:"arcade bar",
      limit: 6
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
          id: venue.id
        };
      });
      this.setState({ venues, center, markers });
     console.log(results);
      });
    }

  render() {
    return (
      <main>
      <header id="title">
        <h1>Neighborhood Map</h1>
        <h2>This map shows Arcade Bars in Chicago, IL</h2>
      </header>
      <section>
        <div className="App">
            <Sidebar {...this.state} handleListItemClick={this.handleListItemClick} />
            <Map {...this.state} handleMarkerClick={this.handleMarkerClick} />

          </div>
      </section>
    </main>
    );
  }
}

export default App;
