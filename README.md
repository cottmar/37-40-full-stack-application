## Full-Stack Auth

The Full-Stack Auth application implements a Login/Signup/Logout functionality for a back-end project. I specifically used the Sluggram application, linked below.
 Token persistency, using cookies, and form-validation is also implemented. Recent additions are Profile creation, with an update functionality.
 The user should be able to upload an image to AWS bucket to appear on their profile. The createdon/update use Bearer Auth and is stored in a redux reducer. The application uses React/Redux, as well as Thunk and Reporter Middleware. 

 FRONT-END .env
 NODE_ENV=development
API_URL=http://localhost:3000

BACK-END .env
NODE_ENV=development
PORT=3000
CORS_ORIGINS=http://localhost:8080
MONGODB_URI=mongodb://localhost/testing
AWS_BUCKET=secret
AWS_ACCESS_KEY_ID=secret
AWS_SECRET_ACCESS_KEY=secret

## Architecture

#### backend/
https://github.com/slugbyte/sluggram

* Delete the .git files before pushing to master
  
#### frontend/

src	
  actions	
components	
lib	
reducer	
utils	
main.js	
routes.js

.babelrc 
.eslintignore
.eslintrc.json
.gitignore
package-lock.json
package.json
webpack.common.js
webpack.dev.js .
 

