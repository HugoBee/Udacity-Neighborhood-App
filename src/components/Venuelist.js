import React, {Component} from "react";
import Listitem from './Listitem';


export default class Venuelist extends Component {
  render() {
    return (
      <ol className="venueList">
        {this.props.venues && this.props.venues.map((venue,idx) => <Listitem key={idx} {...venue} handleListItemClick={this.props.handleListItemClick} /> )}
      </ol>
  )
  }
}
