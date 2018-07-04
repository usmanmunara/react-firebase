import React, { Component } from 'react';
import './App.css';
import { database } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.dataRef = null;
  }
  componentDidMount() {
    this.dataRef = database.ref();
    //.on works on all updates, .off works on componentWillUnmount, .once works once only
    this.dataRef.once('child_added', snapshot => {
      console.log(
        `child added ${snapshot.key} : ${JSON.stringify(snapshot.val())}`
      );
      this.setState({
        data: snapshot.val()
      });
    });
    // using this real time database re-renders the app whenever the data changes.
    //.ref is for finding the node we need in the tree. .ref('/') targets the top root
    //.on is like event listener same as node.js's even emmiter's .on
    //.on('value', ()={.....}) this looks for change in value of the node we are looking for
    // snapshot gets us the snapshot of data when it changes in our current ref/node and snapshot.val() gets us the value of that data.
    /*
    database.ref().on('value', snapshot => {
      this.setState({
        data: snapshot.val()
      });
    }); */
  }

  handleChange = event => {
    const newData = event.target.value;
    this.setState({
      newData
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.dataRef.push(this.state.newData); //.push will push the data in the already set key AMAZINGNEWDATA
    // database
    //   .ref()
    //   .child('AMAZINGNEWDATA')
    //   .set(this.state.newData); .set will set new key of AMAZINGNEWDATA and set the value in it
  };

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
        <form className="App--form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newData}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
