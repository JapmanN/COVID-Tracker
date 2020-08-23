# COVID-19 Tracker

> A simple web application that tracks the number of Coronavirus cases globally. 

The user can filter viewing by all-time cases or today's cases when they first load up the application. Furthermore, the user can also view the rankings of each country and view each country's confirmed cases, active cases, critical cases, deaths, and recoveries.

Click the link to see the application in action.

## Project Screenshots

***Header/First-glance:***

![Screenshot of header](https://github.com/JapmanN/COVID-Tracker/blob/master/public/assets/screenshots/header_pic.PNG?raw=true)

***Table showing each country's metrics:***

![Screenshot of table showing each country's metrics](https://github.com/JapmanN/COVID-Tracker/blob/master/public/assets/screenshots/table_pic.PNG?raw=true)

***Note:*** all data used for the table and metrics is sourced from https://disease.sh. They use data from  [Johns Hopkins University](https://github.com/CSSEGISandData/COVID-19), the [New York Times](https://github.com/nytimes/covid-19-data), [Worldometers](https://www.worldometers.info/coronavirus/), and [Apple reports](https://github.com/ActiveConclusion/COVID19_mobility) to give comprehensive access to view the data.

    api.settings({
	    baseUrl: 'https://disease.sh'
    });

## Local installation and setup instructions

Clone this repository by using the `git clone` command in your terminal. 

The *baseUrl* from which the data is sourced from can be changed to 'https://api.caw.sh'  or  'https://corona.lmao.ninja'.

Use `npm install` to install `node_modules` and all of the packages within it. 

Use the `node app.js` command in the terminal and open [http://localhost:3000/](http://localhost:3000/) to view it in your browser

> You will need `node` and `npm` installed on your machine before you do these steps.

## Technologies Used

The application was built using the following technologies:

|	Technologies Used      |            Type             
|--------------------------|-----------------------------|
|HTML, CSS, and JavaScript |`Front-end languages`        |
|Node.js, Express.js       |`Back-end`                   |
|Bootstrap                 |`Front-end framework`        |
|Novelcovid NPM package    |`Wrapper for COVID-19 data`  |
|EJS (embedded JavaScript) |`HTML markup in JavaScript`  |
|Heroku                    |`Cloud Deployment Platform`  |