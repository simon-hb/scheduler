# Interview Scheduler

## Description

Scheduler is my fourth web application that I have made; first one I made using React. It allows users to schedule interviews, edit interviews, and delete interviews. The interviews are with made up teachers and students but it is very easy to imagine scenarios where this application could come in handy! Ex: doctor's office, counsellor, employer, etc. Please feel free to clone the application and try out the neat features yourself:
1. Spots/ timeslots updating
2. Save/ Delete animation
3. Delete confirmation
4. Create, edit, delete interview
5. Switching between days

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Running Cypress End to End Testing

```sh
1. In order to run cypress testing, you must clone the directory from: https://github.com/lighthouse-labs/scheduler-api
2. Then create a database, make get request to http://localhost:8001/api/debug/reset
3. Install cypress and run the test server
4. npm run cypress
(Please message me if you are curious and need assistance to run it. This automated testing will go through the whole user flow of Scheduler and test that everything functions)
```
