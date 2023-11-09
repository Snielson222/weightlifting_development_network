# Workout Development Network

Check it out live : https://wdn-mwc8.onrender.com/

WDN - Workout Development Network is a loosely based clone of MDN - Mozilla Developer Network. It contains a organized repository of exercises that make it easy for beginners or advanced workout enthusiasts to learn new exercises. Much like MDN does for learning different programming languages.

WDN is built with a Flask/SQLalchemy backend and the frontend rendering is handled with react. Its deployed on Render using a docker container and has full AWS integration for photos.

## Technologies Used

* React

* Redux

* Flask

* SQLAlchemy

* Alembic

* Docker

* Amazon Web Services

* Render

* Postgres

### Plugins Used

* React-Stars
* React-Redux 
* React-Router-Dom
* WTForms
* WTFForms-validators (including separate email validator)
* Boto3 for AWS
* Greenlet
* Gunicorn

### Languages

* JavaScript
* JSX
* Python
* CSS (Plain CSS for all styling)
## ScreenShots

### Home Page With Search

![home_page](https://workout-development-network.s3.us-east-2.amazonaws.com/Screenshot+2023-11-09+at+11.22.46%E2%80%AFAM.png)

### Lower Body Exercises Page From Exercise Drop Down Menu

![lower_body](https://workout-development-network.s3.us-east-2.amazonaws.com/Screenshot+2023-11-09+at+11.29.54%E2%80%AFAM.png)

### User Page

![user_page](https://workout-development-network.s3.us-east-2.amazonaws.com/Screenshot+2023-11-09+at+11.35.46%E2%80%AFAM.png)

### Exercise Page

![exercise_page](https://workout-development-network.s3.us-east-2.amazonaws.com/Screenshot+2023-11-09+at+11.41.33%E2%80%AFAM.png)

### Favorites and Reviews on Exercise Page

![exercise_page_fav](https://workout-development-network.s3.us-east-2.amazonaws.com/Screenshot+2023-11-09+at+11.42.15%E2%80%AFAM.png)


### Mobile View Iphone 12 Pro

![mobile_view](https://workout-development-network.s3.us-east-2.amazonaws.com/Screenshot+2023-11-09+at+11.47.26%E2%80%AFAM.png)

## Features

* Find an exercise organized by lower body, upper body, warm up, beginner, intermediate, or advanced.

* Check out featured or recently posted exercises.

* Create your own exercise to add to the repository and update or delete it as needed.

* Search for an exercise by directly querying the database.

* Favorite or Unfavorite an exercise and have it added to your user page for quick reference.

* Read reviews on exercises you may want to try.

* Post a review with a star rating that you can update or delete.


### Database Schema

![schema](https://workout-development-network.s3.us-east-2.amazonaws.com/Untitled.png)

## Running the Project
* Open up a terminal at the route run pipenv shell then flask run
* Open up a terminal from the react app folder run npm i then npm start
* You will need an ENV file with the proper variables as well as a flaskenv file

## Future Features

* Workout Builder that draws from the exercise repository to make a printable workout for the user.

## Licence

MIT License

Copyright (c) [2023] [Steven Peter Nielson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.