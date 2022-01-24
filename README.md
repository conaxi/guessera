# Guessera

![Svelte](https://img.shields.io/badge/Svelte-black?style=flat-square&logo=Svelte)
![Typescript](https://img.shields.io/badge/Typescript-black?style=flat-square&logo=Typescript)
![Three](https://img.shields.io/badge/Three-black?style=flat-square&logo=three.js)
![Express](https://img.shields.io/badge/Express-black?style=flat-square&logo=Express)
![Postgres](https://img.shields.io/badge/Postgres-black?style=flat-square&logo=PostgreSQL)

A fun and interactive geography game!

## Our goal

Geography is often taught in a very theorical manner, forcing students to learn a list of countries by heart. This project aims to offer an interactive alternative, where they can learn by having fun and experiencing things firsthand.

## Guide

### How does it work ?

After clicking play on the homepage, you will start a game session. On this new window you will find a globe and a form. Your goal is to find which country out the 4 form options is the one pinned on the globe. The progress bar on top shows how many questions are left. Once that bar is filled, your score will be shown and you will be redirected to the homepage once again.

## Features

- Interactive 3D model of the Earth
- Database with all countries
- Responsive & sleek UI
- Entirely dockerized

## Upcoming / Planned

- Points to any position on the Earth given spherical coordinates
- Leaderboard
- Login System
- Advanced displaying information on Earth
- Automatic animations between location markers

## Installation

- Clone this repo
- Fill the .env file
- Run everything
  ```
  docker compose up -d --build
  ```
- Create the country table and populate it using the SQL scripts in ./database.
- The website is   available at _localhost:8080_