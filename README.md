# My Podcasts APP - Single Page Application

***

Web application for managing podcasts from itunes. The following tools, languages and techniques were integrated into the code base:
* React - UI Library
* Redux - Redux Toolkit
* Redux - Thunks
* Typescript - a supersert of javascript for managing types
* React router dom - library for managing routing as SPA
* SASSY (SCSS) - a lightweight version of SASS - a CSS preprocessor
* Jest - testing framework
* React Testing Library - testing framework for react apps.
* Webpack - tool for deploying react web apps.
* eslint - tool for managing code convention.
* BEM (Block Element Modified) - a technique to classify CSS elements.
* OOCSS - oriented-object CSS - a technique to organize CSS files and elements.

***

This APP retrieves information from
**https://itunes.apple.com/search?media=podcast&limit=100&country=US&term=sasha**
in replacement of https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json
due to unknown issues

***

**How to install all its dependecies:** 
1. Open a terminal
2. Go to the root folder
3. Type **yarn install**

**How to use it:** 
* Deploy and run the app in development mode: 
1. Open a terminal
2. Go to the root folder
3. Type **yarn build:dev**

(this only generates a webpack server with non-optimized files and resources)


* Deploy the app in production mode: 
1. Open a terminal
2. Go to the root folder
3. Type **yarn build:prod**

(this only generates the necessary optimized files and resources for possible deployment)


***

**How to run unit tests:**
1. Open a terminal
2. Go to the root folder
3. Type **yarn test**
3. (with coverage) Type **yarn test:coverage**


***

**How to run check warnings and erros by ESlint:**
1. Open a terminal
2. Go to the root folder
3. Type **yarn lint**

***

**Author:** Juan Carlos De Jesus.
https://www.linkedin.com/in/juan-carlos-de-jesus-67602a71/

