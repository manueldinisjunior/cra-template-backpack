import React, { Component } from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar, { CALENDAR_SELECTION_TYPE } from 'bpk-component-calendar';
import format from 'date-fns/format';
import STYLES from './App.scss';

// Utility function for classnames
const c = className => STYLES[className] || 'UNKNOWN';

// Utility functions for date formatting
const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');

// Days of the week configuration
const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tues', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thur', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  // Handle date selection
  handleDateSelect = date => {
    this.setState({
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: date,
      },
    });
  };

  render() {
    return (
      <div className={c('App')}>
        <header className={c('App__header')}>
          <div className={c('App__header-inner')}>
            <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>
              Reservation Date
            </BpkText>
          </div>
        </header>
        <main className={c('App__main')}>
          <div>
            <BpkCalendar
              id="calendar"
              onDateSelect={this.handleDateSelect}
              formatMonth={formatMonth}
              formatDateFull={formatDateFull}
              daysOfWeek={daysOfWeek}
              weekStartsOn={0}
              changeMonthLabel="Change month"
              nextMonthLabel="Next month"
              previousMonthLabel="Previous month"
              selectionConfiguration={this.state.selectionConfiguration}
            />
          </div>
          <BpkButton onClick={() => alert('It works!')}>Continue</BpkButton>
        </main>
      </div>
    );
  }
}

export default App;
