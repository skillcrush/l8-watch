import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Chalkboard extends Component {
  state = {
    chalk: "",
    notes: [],
  };
  updateChalk = (event) => {
    // interrogate the event to update our state
    this.setState({ chalk: event.target.value });
  };
  // this event handler is called when the form is submitted
  updateNotes = (event) => {
    /* submit events cause the browser to refresh the page by 
    default. We don't want that, so we prevent it by calling
    this method on the submit event object: */
    event.preventDefault();
    // start by making a copy of the current notes array
    var newNotes = this.state.notes.slice();
    // add the current chalk message to our copy of the notes array
    newNotes.push(this.state.chalk);
    // update state and rerender with an empty input field
    this.setState({
      chalk: "",
      notes: newNotes,
    });
  };
  render() {
    // map over notes array, creating an li for each note
    const notes = this.state.notes.map((note) => <li>{note}</li>);
    return (
      <div className="App">
        <h1>Chalkboard Notes</h1>
        <form onSubmit={this.updateNotes}>
          <label>
            Add a note:
            <input
              type="text"
              placeholder="Devoting a little time every day builds momentum!"
              value={this.state.chalk}
              onChange={this.updateChalk}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="board">
          <p className="chalk">{this.state.chalk}</p>
        </div>
        <div className="notes">
          <h2>My Notes:</h2>
          <ul className="notes-list">{notes}</ul>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Chalkboard />, rootElement);
