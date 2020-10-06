import React from 'react';
import '../App.css';

const Home = () => (
  <>
    <header className="App-header">
      <h1>Welcome to the Beach Journal!</h1>
    </header>

    <p>
      This is an app that I built as my final project at Flatiron School.
      It allows you to write and save information about your favorite beaches and/or beaches that you wish to visit.
      As the name of the app implies, you can also use it as a journal whenever you visit a beach.
    </p>
    <p>
      If this is your first time using the app, you will first need to create a new beach by clicking on the "New Beach" button and filling out the form.
      On that "New Beach" form, you can fill out some general information about it (name, description, location, etc).
      You can also add Attractions to it, such as wildlife, restaurants, shops, and points of interest.
      Once you have submitted the form, you can visit that beach by clicking on the "View Beach" button.
      You can view a list of all of the beaches you made by clicking on "Your Saved Beaches".
    </p>
    <p>
      Once you have created a beach, you can create a journal entry for it by clicking on the "New Journal Entry" button on that beach's page.
      Every journal entry needs a date and the entry text itself, but you can also give it a title and a list of topics. 
      You also have the option of deleting any of your journal entries; just click on its "Delete Journal Entry" button.
    </p>
    <p>
      At this time, you cannot edit your beaches and journal entries or delete a beach.
      These features will be added in a future version of the Beach Journal, along with login/logout functionality.
    </p>
  </>
);

export default Home;