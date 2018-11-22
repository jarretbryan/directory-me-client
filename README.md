## Employee Directory

This is an Employee Directory built with a React front end, and a Ruby on Rails backend that renders a JSON API. The front end is styled using Tachyons and styled-components.

[Video Demo](https://youtu.be/NuUiNs8U7ks)

## Backend - 'director-me-api'

The backend is built with Ruby on Rails set up with a PostgreSQL database. The backend renders a JSON API to which the React front end sends fetch requests. To set up, run `$ bundle install`, and while Posgres is running, run:
`$ rake db:create && rake db:schema:load`
then run `$ rake db:seed` to populate the database with dummy data.

The front end expects that the API will run on localhost:4000, so please run
`$ rails s -p 4000`

The API endpoints will be fully visible in JSON format.

## Front End - 'director-me-client'

The front end is built with React as an SPA. It can be started by running `$ npm install` and once that is complete, `$ npm start` where it should start at localhost:3000.

## Notes

I opted not to include Redux as part of the application because I felt the component structure was to simple to necessitate it. I've also omitted routing since I believed it was simple enough as a single page application. As the employee count scaled upwards, routing to enable pagination would be a desirable feature.





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
