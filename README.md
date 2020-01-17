# hairshop-booking

1. 'npm install' to install all libraries
2. 'npm run starttt' to start frontend - https://localhost:3000 // TODO: change this script name
3. 'npm start' to run backend api - https://localhost:3001/

4. To setup database on dev environment: 
    - create a database in mlab
    - add database user in that database
    - with that database user info, figure out your MongoDB URI ie. mongodb://<dbuser>:<dbpassword>@ds119171.mlab.com:19171/<dbname>
    - (you can find this URI on mlab)
    - create a dev.js file on server/config folder
    - write exports.DB_URI = "your MongoDB URI";
    - You are good to go :D
