# HRLA Database Review

### Install and run the project:

1. Fork a copy of the project and clone it down to your computer -- https://github.com/jinhwanee93/databases_review.git
2. Run `npm install`
3. Run `npm start` to start the server
4. Start up or download postman: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en

### Tasks:

1. Go to https://www.elephantsql.com/, sign up (it's free), then create a new database instance
2. In your `db_config.js` file, paste the instance url to your sequelize representation

  a. If you want to make your codebase more modular, create a `config.js` file in the root directory exporting the instance url, and importing it to the `db_config.js` file. 

  b. Make sure to gitignore the file IF you are commiting your changes!

3. In `db_config.js`, create a `Users` table 
4. In `db_models.js`, write two functions: 1)Add a user to the database 2) Get all users from the database

### Important:

1. DO NOT PUSH OR COMMIT YOUR CHANGES; IF YOU ARE MAKE SURE TO HAVE A GITIGNORE FILE, HIDING YOUR POSTGRES URL!!!

### Helpful Links:
1. Creating schema: http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html
2. Available data types: http://docs.sequelizejs.com/variable/index.html#static-variable-DataTypes
3. Querying your database: http://docs.sequelizejs.com/en/latest/api/model/
4. Parsing data https://github.com/expressjs/body-parser

### CREDIT:

1. Original content of this review/ original-repo: https://github.com/lmordell/database_review
