import React, {Component} from "react";
import Venuelist from "./Venuelist";

export default class Sidebar extends Component {
  constructor() {
    super();
      this.state = {
      query: ""
    };
  }
  handleFilterVenues = () => {
    if (this.state.query.trim() !== "") {
      const venues = this.props.venues.filter(venue => venue.name.toLowerCase().includes(this.state.query.toLowerCase())
    );
      console.log(venues)
    return venues;
    }
    return this.props.venues;
  };
  handleChange = e => {
    this.setState({ query: e.target.value});
      const markers = this.props.venues.map(venue => {
      const isMatched = venue.name.toLowerCase().includes(e.target.value.toLowerCase());
      const marker = this.props.markers.find(marker => marker.id === venue.id);
        if (isMatched) {
          marker.isVisible = true;
      }
        else {marker.isVisible = false;
      }
      return marker;
    });
    this.props.updateSuperState({markers});
  };

  render() {
    return (
      <div tabIndex="0" role="complementary" aria-label="sidebar venue list" className="sideBar">
            <input type={"search"} id={"search"} placeholder={"Filter Arcade Bars"} onChange={this.handleChange} />
          <Venuelist {...this.props} venues={this.handleFilterVenues()} handleListItemClick={this.props.handleListItemClick} />
      </div>
    );
  }
}
