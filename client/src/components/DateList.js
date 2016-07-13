import React from 'react';
import Main from './Main';
import { Link } from 'react-router';

//DateList: When a specific date is clicked on calendar, this component will display the list of dates a user will have on that day.

let events = [{name: "Nancy", title: "Date with" + name, location: "Disneyland", start: new Date(2016, 6, 12, 10, 30, 0, 0), end: new Date(2016, 6, 12, 12, 30, 0, 0), notes: "She seems like a nice lady!"}, {name: "Mary-Jane", title: "Date with" + name, location: "Las Vegas", start: new Date(2016, 6, 18, 10, 30, 0, 0), end: new Date(2016, 6, 18, 12, 30, 0, 0), notes: "She seems like a nice lady too"}];

const DateList = React.createClass({
  renderEvent(event, i){
    return (
      <div className="event" key={i}>
        <span>
          <img src="http://i758.photobucket.com/albums/xx223/r0bz0mbie/thumbnail-1.jpg" className="image"/>
          <h2>
            Date with {event.name}
          </h2>
          <p>
            at {event.location}
          </p>
          <p>
            {event.notes}
          </p>
        </span>
      </div>
    );
  },

  render() {
    return (
      <div>
        <Link to='/'>Calendar!</Link>
        <div className="dates">
          {events.map(this.renderEvent)}
        </div>
      </div>
    );
  }
});

export default DateList;