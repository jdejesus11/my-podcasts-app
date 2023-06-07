# My Podcasts APP - Single Page Application

***

Web application for managing podcasts from itunes. The following tools, languages and techniques were integrated into the code base:
* React - UI Library
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
3. **a bunch of typescript errors and warnings could potentially be thrown. The code will be cleaned ASAP**

***


<img width="1486" alt="Captura de Pantalla 2023-05-28 a la(s) 9 20 39 p m" src="https://github.com/jdejesus11/my-podcasts-app/assets/27518362/388a7970-056d-4f16-a1bf-23105974d16b">
_List of podcasts view_


***


<img width="1508" alt="Captura de Pantalla 2023-05-28 a la(s) 9 24 25 p m" src="https://github.com/jdejesus11/my-podcasts-app/assets/27518362/087f7d22-1164-46f4-8f78-7b4f38dc3f40">
_A podcast detail view_


***


<img width="1266" alt="Captura de Pantalla 2023-05-28 a la(s) 9 27 15 p m" src="https://github.com/jdejesus11/my-podcasts-app/assets/27518362/c8f2f83d-0cb0-41cd-935f-9418f7c82fea">
_An episode detail view_


***

Additional information
1. For now, you can filter podcasts ONLY by its title
2. There are episodes whose audio cannot be played.


***

**Author:** Juan Carlos De Jesus.
https://www.linkedin.com/in/juan-carlos-de-jesus-67602a71/
