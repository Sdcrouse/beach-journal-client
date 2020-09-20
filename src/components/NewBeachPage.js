import React, { Component } from 'react';

class NewBeachPage extends Component {
  handleSubmit = event => {
    event.preventDefault();

    console.log("Beach form submitted!");
  }

  render() {
    return (
      <>
        <h1>New Beach</h1>

        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="submit" value="Create Beach" />
          </p>
        </form>
      </>
    );
  }
}

export default NewBeachPage;