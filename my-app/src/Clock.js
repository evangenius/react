import React, { Component } from 'react';
// import './App.css';

class Clock extends Component {
  render() {
    // 普通的 JavaScript
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    // JSX 內嵌 JavaScript
    // const element = (
    //   <h1>
    //     Hello, {formatName(user)}!
    //   </h1>
    // );
    return (
      <h1>
        Hello, {formatName(user)}!
      </h1>
    );
  }
}

export default Clock;
