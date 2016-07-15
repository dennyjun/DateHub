import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Popup from './Popup' ;
import { Link } from 'react-router';
import Main from './Main';
import Notification from './Notification';

// Need to add an import for the location of the dates/events themselves
// import events from './events'
// See below for format of each event
/*
{
    'title': 'Meeting',
    'start': new Date(2015, 3, 12, 10, 30, 0, 0),
    'end': new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
}
*/

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

// Calendar: uses react big calendar api
// Each date will be clickable to show the date list. Each date will have concise info about dates on that day.

export default class Calendar extends Component {
  constructor(props){
    super(props);

    this.state = { 
      current: "",
      open: false,
      notificationOpen: false
    };
  }

  open(selectedEvent) {
    this.setState({
      current: selectedEvent,
      open: true,
      notificationOpen: false
    });
  }

  notificationOpen(selectedEvent) {
    this.setState({
      notificationOpen: true,
      open: false
    });
  }

  render() {
    return (
      <div>
        <Link to='/api/dates'>Date List!</Link>
        <div style={{ height: 500 }}>
          <BigCalendar
            selectable
            events={this.props.events}
            defaultView='month'
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date()}
            onSelectEvent={event => this.open(event)}
          />
          <Popup value={this.state} />
        </div>
        <button onClick={this.notificationOpen.bind(this)}>
          Open Notifications!
        </button>
        <Notification value={this.state}/>
      </div>
    );
  }
}

