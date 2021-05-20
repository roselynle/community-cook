# PlanEat

A food based app that allows users to organise their seven day meal plan. Users are able to get recipe inspiration from the PlanEat community, save it to their favourites, drag and drop these onto their meal plan and send a cumulative list of ingredients to their email. In addition, there is a functionality for users to submit their own recipe with ingredients, instructions and a photo.

## Installation & Usage

### Installation

-   Clone or download the repo using `git clone --recurse-submodules <repo>` (this clones the client and server submodules too)

### Usage

-   Navigate to the root directory of this repository
-   Client side:
    -   cd into `client`
    -   run `npm install`
    -   run `npm run dev`
    -   Webpage should start up automatically on localhost:8080/
-   Server side:
    -   cd into `server`
    -   run `pipenv shell`
    -   run `pipenv install`
    -   run `pipenv run dev`
    -   Flask API will be running on localhost:5000/
-   Database:
    -   Run `bash _scripts/<script name>.sh` to run or close docker containers:
    -   `startDev.sh` - starts up db container
    -   `stop.sh` - closes the container
    -   `teardown.sh` - closes the containers and completely removes volumes

## Technologies

-   Client side: React/Redux, HTML, CSS 
    -   Dependencies: refer to the package.json file within the client folder for the full list of dependencies
-   Server side: Python
    -   Dependencies:  flask, flask-cors, gunicorn, pymongo, flask-mail, dnspython, pytest

## Process

-   Brainstormed different ideas for our food & drink related app
-   Designed the basic idea of our user interface using Figma
-   Used the GitHub project board to split up the required tasks and assign to team members
-   Set up the file structure using git submodules, initialised database and configured the docker containers/script files
-   Created the relevant pages and components for React front end
-   Implemented logic on the backend to retreive and send back relevant information to the front end
-   Testing with pytest and react testing library
-   Debugging and fine tuning our app
-   Deploy server on Heroku and client on Netlify

## Wins & Challenges

### Wins

-   Good git flow and communication between team members to avoid conflicts
-   Protecting the routes which require login
-   Implmenting flask mail wherby users can get a cumulative list of ingredients (shopping list) sent to their email
-   Drag and drop feature to allow users to drag recipes from their favourites and put them on their meal plan

### Challenges

-   Coming up with ideas for our app which would be feasible in the given timeframe
-   Difficulties with sending and retrieving information with a Python backend and React frontend
-   Deploying an app with an API connected to Mongo database
-   Implementing a functionality whereby the save button will switch to unsave if the user has already saved the recipe

## Bugs

-   When creating a recipe, the add ingredients section must be filled out completely with no blanks. Otherwise sending a shopping list to the email will not work

## Future Features

-   Users can like and comment on the community submitted recipes
-   Toggle button to filter recipes for the users specific dietary requirements
-   Meal plans to be tracked and refreshed every 7 days
-   Nutritional information on the recipes

## Licence

-   MIT

## Collaborators

[@roselynle](https://github.com/roselynle), [@pearlhamilton](https://github.com/pearlhamilton), [@JamesWheadon](https://github.com/jameswheadon)
