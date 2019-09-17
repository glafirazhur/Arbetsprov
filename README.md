This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Mondido test assignment
## The task
I want you to build a task tracking application. It is up to you to add any feature that you might enhance this simple application and staple of programming lore. In the words of the regional sales manager,it is my job to overpromise, and it is your duty to over deliver. There are, however, a few requirements for you to follow. See below for instructions. 

## Specification

Below is the basic layout of the application we want you to create. 

### Minimum functionality
Create, display, complete, update, assign and delete tasks. 

### Story points 
Each task should have an assigned complexity index from 0-10

### States
A task can have the following states: 
created, active, completed, onhold and deleted. 

The status can only be changed according to the following rules.
- A task can only be completed after being set to active.
- A task can only become active after being assigned a dev
- A task can only go from onhold to active or deleted 

### Basic layout
The tasks should be presented in columns representing the available states. Deleted tasks should not be presented in a column but rather have a separate view. It should be possible to sort the tasks in a column according to level of complexity, see story points. 

### UI/UX
The designer is on vacation, it is up to you to imagine and construct a neat and customer facing interface. 

## Requirements
All logic must reside in a single HOC component. Use Hooks. All components must be functional components. The application must be deterministic. All components other than the HOC component housing the logic must be stateless at all times. Use Jest to test your components. GIT is to be used at all times, it is essential that we can follow your development process through your commits.  

## Focus
Performance, performance, performance and more performance. Keep it simple, keep it smart, make it fast, make it fun and for [insert deity of choice] don't use libraries. 

## Extra credit
Surprise us.

## Gold star
Make us laugh.

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


