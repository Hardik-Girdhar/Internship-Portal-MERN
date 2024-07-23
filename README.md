# Internship-Portal-MERN
## Overview

This project is a job opportunities portal that allows users to register, log in, and apply for job opportunities. It implements user authentication using JSON Web Tokens (JWT) and provides a seamless experience for both logged-in and logged-out users. The portal consists of three main pages: Login & Registration, Opportunities, and Dashboard. The application is built using MongoDB for the database and is deployed on a cloud platform for accessibility.

## Features
### Login & Registration Page

User authentication using JWT for secure registration, login, and logout functionalities.

Securely store user credentials and session information.

### Opportunities Page

Viewable by both logged-in and logged-out users.

Only logged-in users can apply for opportunities.

Logged-out users are redirected to the login page when attempting to apply.

Opportunities are fetched from opportunities.json and stored in a local database.

Each opportunity contains:

Profile name

Company name

Stipend

Location

Duration

Start date

Logged-in users can see their applied opportunities.

### Dashboard Page

Allows users to add personal details such as name, age, date of birth, image, and other information.

Personal details are visible to the user on their dashboard.

## Database
Utilizes MongoDB to store user information and opportunities data.

## Deployment

Deployed on a cloud platform such as Heroku or AWS to make the application accessible online.

## Constraints

Prioritize functionality over advanced features or extensive styling.
Ensure code quality and readability.
