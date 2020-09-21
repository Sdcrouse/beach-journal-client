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
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" required />
          </p>
          <p>
            <label htmlFor="description">Description: </label>
            <textarea name="description" id="description" required />
          </p>
          <p>
            <label htmlFor="items_to_bring">What to bring, wear, etc. </label>
            <textarea name="items_to_bring" id="items_to_bring" />
          </p>
          <p>
            <label htmlFor="popular_activities">Popular Activities: </label>
            <textarea name="popular_activities" id="popular_activities" />
          </p>
          <p>
            <input type="submit" value="Create Beach" />
          </p>
        </form>
      </>
    );
  }
}

export default NewBeachPage;