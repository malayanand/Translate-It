
# Translate It

This is a simple website that allows users to perform manual translations and store in a db.
This was made as an internship assignment for AI4Bharat, IIT Madras
## Some Key Features
    1. Can create multiple "projects". Each project is a wiki article page 
       which is divided into individual sentences.
    2. All projects are available on the home page in form of clickable
       cards
The backend has been developed on "Django and Django Rest Framework", while meanwhile the frontend has been developed on "ReactJS and 
Chakra UI". The database used here is MySQL.

## Getting started:



### Installation
### Setting up the backend
   
   1. Install all python dependencies
      ```bash
      pip install requirements.txt
      ```
      NOTE: If mysqlclient fails to install, try using the mysqlclient file present in the root directory
      ```bash
         pip install <filename>
      ```

   2. Next make a virutal environment in the root folder
      ```bash
         python -m venv env
      ``` 
      To activate the virtualenv do either of the follow: 
      ```bash
         .\env\Scripts\activate
         or
         source env/Scripts/activate
         
### Setting up the frontend
   1. Install npm package manager
      Navigate to the /frontend folder
      ```bash
         npm i
      ```
      This should install all node dependencies

## Deployment

### Starting the server
```bash
py manage.py makemigrations
py manage.py migrate
```
This will create all the necessary migrations and models.

### Database

   1. Create a new database in MySQL. Name it anything you like.
   2. Next we will need to establish a link to your local MySQL server.
   3. Make a .env file, update the following credentials:

      DB_NAME = <your database name (the one you created)>

      DB_PORT = <your Port number>
      
      DB_USER = <your user (root)>
      
      DB_PASSWORD = <your user password>

For setting up the database, create a superuser
```bash
py manage.py createsuperuser
```
Start the server!!!
```bash
py manage.py runserver
```
### React frontend
Navigate to the /frontend folder and simply run the following command
```bash
npm start
```
This should fire up the frontend!!

After these you should be all set :)

## Authors

- [@malayanand](https://www.github.com/malayanand)

