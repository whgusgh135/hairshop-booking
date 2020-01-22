# hairshop-booking

1. 'npm install' to install all libraries
2. 'npm run start-client' to start frontend - https://localhost:3000
3. 'npm run start-server' to run backend api - https://localhost:3001/

4. To setup database on dev environment: 
    - create a database in mlab
    - add database user in that database
    - with that database user info, figure out your MongoDB URI ie. mongodb://<dbuser>:<dbpassword>@ds119171.mlab.com:19171/<dbname>
    - (you can find this URI on mlab)
    - create a dev.js file on server/config folder
    - write exports.DB_URI = "your MongoDB URI";
    - You are good to go :D

5. To compile scss
    - 'npm run run:sass' to build css from scss
    - 'npm run compile:sass' to build compiled css from scss
    - 'npm run prefix:css' to build css with prefix properties to work with last 10 versions of browsers from compiled css
    - 'npm run compress:css' to build compressed css from prefixed css
    - 'npm run build:css' to run all css build function all together to give final css
