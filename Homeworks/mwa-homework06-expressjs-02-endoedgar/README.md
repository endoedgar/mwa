# MWA Homework06 - Expressjs 02
## Exercise
Create an Express application that implements a Restful Stateless API for an entity called `students` as following:
```javascript
const students = [{id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95}]
```
* Take into consideration that `students` entity is an immutable data structure.
* Write routes for the following CRUD operations and use the proper HTTP verbs (`GET` one and all, `POST`, and `DELETE`).
* Test with `HTTP Client` extension for VSCode.
* Your API accepts and returns `JSON` data.
* Log all requests to a file `access.log` using `morgan` middleware. 
* For your `POST` route, assign a middleware to upload the student's picture into a directory `./assets/pics`, only `.jpg` files should be accepted and picture size should not exceed `3 MB`, files should be renamed to represent Unix timestamps.
* For your `POST` route, assign a custom middleware to verify if a user passes a `JSON` object that contains `id`, `name`, `course` and `grade`, otherwise send back an error.
* Define a middleware to serve all static images of `./picture/*` from `./assets/pics/*`.
* Accept all cross-domain XHR requests using `cors` middleware.  
  
**Note: Add `node_modules` folder to your `.gitignore` file. You should only push your code along with `package.json` and `package-lock.json`**

