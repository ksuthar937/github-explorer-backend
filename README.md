# Backend Development Assignment: GitHub Explorer (Backend)

A backend service using Node.js and Express.js that interfaces with the GitHub API to fetch and persist user data. 
This service will support operations such as storing user details, identifying mutual followers, searching, updating, and soft deleting records in a database.

## Tech Stack:

Backend Framework: Node.js with Express.js

Database: MongoDB

Other Libraries: dotenv, colors, nodemon

## Features and Endpoints:

GitHub User Data Storage: GET "/save-user/:username" 

Search Functionality: GET "/search-users" 

Mutual Followers as Friends: GET "/find-mutual-followers/:username" 

Soft Delete User Recordse: DELETE "/delete-user/:username" 

Update User Details: PATCH "/update-user/:username" 

List Users with Sorting: GET "/list-users" 
