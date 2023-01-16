# Weather-Journal-
simple website where user types the zipcode of any city, and how's he feeling, then he gets a log at lower box, stating the city's temperature, the current date, alongside the user's input

using openweather api, we get info about a city's temp, which we push alongside the users input, with the current date into an object, which we send to local server (using post route), that we already setup with node express. then we query the data back and attach it to selectors to show up on the user's end
