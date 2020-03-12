# MWA - Homework 13 - Angular 03
## Coding Exercise
* Your main `AppModule` has only one service: create a service that has a method `getOnlineData()` that returns an array of JSON objects fetched from [https://randomuser.me/api/?results=10](https://randomuser.me/api/?results=10) and then save the results in `localStorage`. 
* When App starts, it should call `getOnlineData()` to fetch all the online data, stringify it, and save it into the `localStorage`. 
* The service has another method `getCachedData()` that returns an observable with a JSON object reads from `localStorage`.
* Create a featured module called `Users` that is responsible for showing a list of users, your application should only load this module upon navigating via `users` link. 
* Within `Users` module we have two components, both components will retrieve data from `localStorage` using the service you created earlier in `AppModule`
  * `users` component 
  * `userdetails` component 
* When users click on `users/:uuid` you should display `userdetails` child component with full details about the user.
* If a user tried to visit `users/:uuid` page without passing a correct `uuid` param, then your app must redirect them to a friendly error page. (use Guards).  
**Note: Write this exercise with Lazy Loading in mind.**

