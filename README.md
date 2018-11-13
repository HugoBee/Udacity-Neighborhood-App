# Neighborhood Map App Project

This is the last project for the Udacity FEND Grow with Google Nanodegree.
We were tasked to create an app that used the Google MAP API and another 3rd party Venues API. I decided to go with the [FourSquare] API (https://developer.foursquare.com/). The map will show locations via markers with a filterable list of those locations and will display an Infobox with data about the venue.


## Instructions

** NOTE: due to limits with the API calls, the map may be greyed out and the infoboxes may not show when map markers are clicked. </br>
** NOTE:  create-react-app was used to create this app, which includes a ServiceWorker to cache items for offline viewing.  It only works when in Production mode.</br>

1. Clone or download the zip file  
2. Navigate to the location you saved it 
3. Open your favorite terminal and open location you just navigated to
4. Install all project dependencies with `npm install`
5. Start the development server with `npm start` (this will launch your default browser and open the app for viewing on port localhost:3000)

## To run the project in production use these instructions
1. npm run build
2. npm install -g serve
3. In build directory: serve -s The app will be hosted at http://localhost:5000
