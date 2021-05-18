# PlanEat


## Installation & Usage

### Installation

-   Clone or download the repo using `git clone --recurse-submodules <repo>` (this clones the client and server submodules too)

### Usage

-   Navigate to the root directory of this repository
-   Client side:
        -   cd into `client`
        -   run `npm install`
        -   run `npm run dev`
        Webpage should start up automatically on localhost:8080/
-   Server side:
        -   cd into `server`
        -   run `pipenv shell`
        -   run `pipenv install`
        -   run `pipenv run dev`
        Flask API will be running on localhost:5000/
-   Database:


## Technologies

-   Client side: React, HTML, CSS 
    -   Dependencies: react, react-redux, react-router-dom, react-dom
-   Server side: Python
    -   Dependencies:  flask, flask-CORS, gunicorn

## Process

-   Brainstormed different ideas for our food & drink related app
-   Designed the basic idea of our user interface using Figma
-   Used the GitHub project board to split up the required tasks and assign to team members
-   Set up the file structure using git submodules, initialised database and configured the docker containers/script files


## Wins & Challenges

### Wins

-   Good git flow and communication between team members to avoid conflicts

### Challenges

-   Coming up with ideas for our app which would be feasible in the given timeframe
-   Difficulties with sending and retrieving information with a Python backend and React frontend (e.g. when implementing authentication)
-   Deploying an app with an api connected to Mongo database

## Bugs

-   

## Future Features

-   Users can like and comment on the community submitted recipes

## Licence

-   MIT

## Collaborators

[@roselynle](https://github.com/roselynle), [@pearlhamilton](https://github.com/pearlhamilton), [@JamesWheadon](https://github.com/jameswheadon)
