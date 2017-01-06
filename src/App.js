import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor of parent', props);
  }
  render() {
    return (
      <div>
        hello 
      </div>
    );
  }
}


