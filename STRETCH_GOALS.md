## Stretch goals/ideas for the frontend

**My BIG stretch goal** is to change this into a Beach Blog that lets users not only save information and journal entries for beaches, but also share them with others and comment on them.
To that end, it might be a good idea to separate the BlogPost from the JournalEntry (and in that case, I should remove the title and topics from the JournalEntry and add them to the BlogPost).

Move the components for Location, Beach, and JournalEntry into their own sub-directories.

Implement user login/logout, authorization/authentication, and TDD.
If I want to add user signup/login, should I use JWT? If so, these should help:
https://instruction.learn.co/student/video_lectures#/463  (This is the video to start with, if I want to add user signup/login - React Redux GlobeTrotter App Part 3.)
https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/  (This may help with authentication/authorization, too.)

Intro to TDD: https://www.youtube.com/watch?v=VN_7gmn68no&feature=youtu.be

I should consider using the PureComponent later on. See https://github.com/learn-co-curriculum/react-types-of-components and https://reactjs.org/docs/react-api.html#reactpurecomponent. It sounds like I should look into hooks later on, as well.

Other routes I could make: beaches/:beach_id/journal_entries, beaches/:beach_id/ journal_entries /:entry_id, beaches/:beach_id/ journal_entries /:entry_id/edit
I could also make a route that shows ALL journal entries, sorted by beach (/journal_entries).

The Beach page should have an Edit button that links to /beaches/:beach_id/edit. That could also go on the BeachesPage next to each Beach link.

Each journal entry on the beach page could display a link to its corresponding JournalEntry page (/beaches/:beach_id/journal_entries/:entry_id). The Beach page would then have an EntryCard that has the name, date, (possibly) topics, and first paragraph of the entry.
On the JournalEntry page, I would have an “Edit” button that goes to /beaches/:beach_id/journal_entries/:entry_id/edit.
Later, I could add “Delete” buttons to the JournalEntries and BeachPages (deleting a BeachPage would also delete its corresponding JournalEntries, so I’d need to account for that in Rails).

I should remember to use defaultProps when needed.

Add a frontend and backend validation: Don't save a new beach to a location if that location already has a beach. I may need to make a special case when saving Locations: USA, United States, America, and United States of America should be the same country in a Location.
Maybe make the states and country into <select> lists (maybe not for state, as that limits it to Canada and USA, pretty much).

Change the user input for a Location's state to be either titleized or all caps (if using abbreviations).

I could have a page for all of the saved Locations, each Location having links to its beaches.

Allow users to add maps of their beaches (maybe have them provide the link, and I’d create the `<iframe>` element for that map).

Also, use this for testing JS and React: https://jestjs.io/

I think I want to display the newest beaches first, so that the user doesn't have to keep scrolling down to see the new beach they create. Same with the journal entries.

Make the Saved Beaches button a <select> list that links to all or one of them.
When the user clicks their choice, the "Saved Beaches" button will still show up dark blue...maybe.
Should it still say "Saved Beaches", or have the name of the selected beach?

Make a `<select>` list of Attraction categories to choose from, while allowing users to write their own.
Attraction categories and names should be auto-titleized before saving. 
Depending on the Attraction, it could have a date, food, pricing, etc.
Attraction category ideas:
  - Lodging
  - Events
  - Food (restaurants, bakeries, etc.)
  - Points of Interest
  - Shops
  - Popular activities (maybe this should be an Attraction category instead of a Beach attribute)
  - Weather
  - Tide table
  - Other

Here's how I can do something like that: https://stackoverflow.com/questions/42316604/how-to-implement-a-dynamic-form-with-controlled-components-in-reactjs

Attractions with a category of "Other" should be displayed last.

Maybe give each Attraction a Location/address.
I could let the user associate their journal entries with one or more Attractions.

Beach attribute ideas:
  - Beach website 
  - Photos, each with the following attributes:
    - URL
    - Date
    -	Location
    -	Caption
  -	Likes/Dislikes
  -	Favorite Beach? (You can have more than one – default is No)

For normalizing data:
Maybe use json-api-normalizer instead; that may be easier. See https://github.com/yury-dymov/json-api-normalizer. However, this will require me to change my backend serializers and frontend state, reducers, etc. again. Or, use Normalized Reducer, Redux ORM, or Redux Toolkit's entity adapter.

On the frontend side, I would want to validate against duplicate attractions, journal entries, beaches, etc. I would compare their values with state values. I could also add uniqueness validations on the front and backend, to prevent users from creating the same Attractions and journal entries on the same Beach.

Render 404 pages for invalid routes and/or beach id's that don't correspond to a saved beach. That or redirect with an error message.
This article may help: https://ui.dev/react-router-v4-handling-404-pages/
It wouldn't hurt to have Back buttons.
Maybe use a beach icon in the tab at the top of my app page (i.e. not the default React symbol used in the index.html file).

I can still return a 404 or something similar for a bad request on the backend, but I should do the validating from the frontend, too.
That way, I don't need to re-render a page, just display an error message on it.
So, maybe set an errorMessage state on that form?

Prevent the "redirect" and "errorMessage" attributes from being submitted to the backend (Rails ignores it, but other backends may not).
Return an error message on the backend if something doesn't save, then catch it on the frontend.

Redirect to the new component after creating it. To do this, maybe I could map the NewBeachesPage's state to props, then have a <Switch> and <Route>s for the new component and for the "New Beach" form?
What I don't know is how to get the new component or which component should redirect to it.

If I need to have a value in state that indicates whether submission was successful or not,
then maybe I could somehow submit that data without that specific key/value pair of the form's state.

Also, I don't know how to display an error message (like for invalid/blank input) without using a Hook, which requires a functional component, which the NewBeachPage is NOT.

These resources may help: https://stackoverflow.com/questions/51317154/only-render-a-react-component-when-i-on-submit-from-a-form
https://dev.to/cesareferrari/how-to-display-error-messages-in-a-react-application-3g48
https://github.com/salsita/redux-form-actions/issues/2
https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router
https://reactrouter.com/web/api/Redirect
https://stackoverflow.com/questions/52609884/react-router-redirect-after-submitting-a-form-using-the-input-value
https://dev.to/projectescape/programmatic-navigation-in-react-3p1l#:~:text=import%20%7B%20Redirect%20%7D%20from%20%22react,the%20state%20of%20the%20component.&text=Whenever%20you%20want%20to%20redirect,rendering%20the%20component.
https://medium.com/@anneeb/redirecting-in-react-4de5e517354a

Other resources that may help: https://github.com/ReactTraining/history/blob/master/docs/api-reference.md#history.replace
https://github.com/ReactTraining/history/blob/master/docs/navigation.md
https://github.com/ReactTraining/history/blob/master/docs/api-reference.md
https://github.com/ReactTraining/history/tree/master/docs
https://reactrouter.com/web/api/history

Update: I could set a new value in state: newBeach. Then, use that in mapStateToProps and redirect to it.
It's technically a bit redundant, but for my purposes it should work.
But that may cause the app to re-render and/or redirect when it shouldn't, possibly even causing an infinite loop! I think in order to redirect to the newest beach properly, I'd need to change the beachesReducer's beaches from a hash into an array, and grab the last one.

Related note: This was INCREDIBLY helpful when figuring out how to render a success message; I needed to use render() to pass route props to the BeachesContainer for it to work:
https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component

Stretch goal for the controllers (and corresponding fetch requests): Add edge cases for when the data doesn't save.

Maybe I could have a button on each BeachCard or Beach page that says "View Journal Entries for this Beach".

Change the JournalEntry's date attribute into three: day, month, year. They should all be required.

Would it make more sense to have a New Journal Entry page? If there are no beaches, then the form for the user's first journal entry should also include the New Beach form.
If there is at least one beach, the user can either choose a beach from a select list, or add a new beach and make a journal entry for it. That would make more sense.

Related idea: Have the "New Journal Entry" button render a form that allows you to choose a beach from a `<select>` list. That way, you don't have to go to a beach page just to create a journal entry for it.
(That's really what I should have done in the first place.)
However, in the event that there are no beaches at all, that link should redirect to the "New Beach" page and let users know that they need to create a beach first. 
Either that, or conditionally render the "New Beach" inputs on that Journal Entry form.

Something to look into: Judging from the console.log() statements that I've been putting in the BeachesContainer, that seems to be getting rendered multiple times when I access the /beaches page.
I don't know why. Put console.log("Beaches: ", this.props.beaches) right under render() to see what I mean.
When I refresh the /beaches page, the beaches object is empty twice, and filled with data six times.
For that matter, at this time the Location Info passed to the BeachCard is undefined 5 times initially.
And each BeachCard seems to get rendered three times.

It wouldn't hurt to use the column-count property, especially when dealing with media queries.
I like the idea of using "fixed" as the value of my background-attachment property. I should use that somewhere in this project.
Same thing with 'background: linear-gradient()'. This example uses a similar color scheme to my Beach Journal app; maybe I should use it: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients#Creating_hard_lines

Use accordion-style CSS: https://www.w3schools.com/howto/howto_js_accordion.asp
CSS idea: Fix the main links to the top of the page at all times, no matter where the user scrolls.

Use one of these fonts in the app: https://www.fontspace.com/category/beach

A good idea, shown here, is to use dummy data before making async requests: https://github.com/Sdcrouse/react-router-nested-routes-code-along-v-000/blob/master/src/containers/App.js 

Additional resources to look into, for future reference:
https://medium.com/better-programming/15-css-tips-guides-and-code-snippets-for-beginners-efde96fb0aee
https://medium.com/swlh/letting-the-user-select-a-subcategory-based-on-its-category-in-a-form-bc786e598dd4

Handy React Resources: 
Intro to React Part 1: https://flatironschool.zoom.us/rec/play/S6nzkKz8PSYRYrrppdx_-CFJvEs9N1-kKjdIaAYKe069R1OzGfVabO9TGi4yFEkDrDdgPYSbJzHPw9-p.VpUJQZv0p9IiDNKj?autoplay=true&startTime=1597878216000
Intro to React Part 2: https://flatironschool.zoom.us/rec/play/MFA2B_KhafAZsSo-CO1IinUNGA2uCIsjfQFtYk52aM05chV-RUKW7oscvgDv2BfjxyQ_CrE6h-Vbob6G.T2cLlGSYYqD4mgpj?autoplay=true&startTime=1597880306000
Intro to React Hooks, Part 1: https://flatironschool.zoom.us/rec/play/RXNV1w5y23cF3c04XbDed-woMEYkCvprrJf5OHGESOzOZlVBuRv0TIoHfS61A21c_bt4QItPB48Xuv1g.AjI1F_pxiaSwW26N?autoplay=true&startTime=1598483037000
Intro to React Hooks, Part 2: https://www.youtube.com/watch?v=I5sL95Yj5lY&feature=youtu.be
React-Redux Simple Authentication (no backend stuff): https://www.youtube.com/watch?v=HYVJcq7Ika8

This is handy to know: https://stackoverflow.com/questions/25797048/how-to-pass-in-a-react-component-into-another-react-component-to-transclude-the

The following resources may help refactor my CSS, if I don't want to rely on React-Bootstrap:
https://www.learn.co/tracks/full-stack-web-development-v8/module-11-css-continued/section-2-page-layout-and-box-styles/creating-column-based-layouts-in-css
https://gridbyexample.com/examples/
https://css-tricks.com/snippets/css/complete-guide-grid/
https://rachelandrew.co.uk/css/cheatsheets/box-alignment
https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout
https://css-tricks.com/fighting-the-space-between-inline-block-elements/
https://webdesign.tutsplus.com/tutorials/quick-tip-building-responsive-layouts-with-floats--cms-25625
https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

CSS modal stuff: https://tympanus.net/Development/ModalWindowEffects/
Header effects: https://tympanus.net/Development/HeaderEffects/

The Grid system may help as well: https://react-bootstrap.github.io/layout/grid/

React-Bootstrap sources:
https://create-react-app.dev/docs/adding-bootstrap/#using-a-custom-theme
https://react-bootstrap.github.io/getting-started/introduction/
This helped with using React-Bootstrap to load an image: https://stackoverflow.com/questions/34582405/react-wont-load-local-images
This looks helpful for custom-coloring buttons: https://stackoverflow.com/questions/50842135/how-to-change-colors-for-a-button-in-react-bootstrap

This helped with overlaying one element on another: https://gist.github.com/petehouston/85dd33210c0764eeae55
As did this: https://stackoverflow.com/questions/44601428/react-js-background-image-properly-displayed-with-words-over-the-top

Note for the future: Apparently, Yarn is much faster than NPM for installing packages. See https://classic.yarnpkg.com/en/ 

Other ideas: Back/forward buttons (see https://github.com/learn-co-curriculum/react-introduction-to-react-router ), user signup/login (with or without FB/Google), allow users to create a JournalEntry when they create a new Beach,...

Interactive map of US Beaches? You click on a state to see beaches, and click on a beach for more info.

See if I can use a beachball image against a white background. Then, use Animate.css to make it bounce or roll in. Either with "bounce" or "rollIn". See https://animate.style/
