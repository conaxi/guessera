# Guessera

![Svelte](https://img.shields.io/badge/Svelte-black?style=flat-square&logo=Svelte)
![Typescript](https://img.shields.io/badge/Typescript-black?style=flat-square&logo=Typescript)
![Three](https://img.shields.io/badge/Three-black?style=flat-square&logo=three.js)
![Express](https://img.shields.io/badge/Express-black?style=flat-square&logo=Express)
![Postgres](https://img.shields.io/badge/Postgres-black?style=flat-square&logo=PostgreSQL)

A fun and interactive geography game!

## Our goal

Geography is often taught in a very theorical manner, forcing students to learn by heart a list of countries. This project aims to offer an interactive alternative, where they can learn by having fun and experiencing things firsthand.

## Guide

### How does it work ?

After clicking play on the homepage, you will start a game session. On this new window you will find a globe and a form. Your goal is to find which country out the 4 form options is the one pinned on the globe. The progress bar on top shows how many questions are left. Once that bar is filled, your score will be shown and you will be redirected to the homepage once again.

## Features

- Interactive 3D model of the Earth
- Points to any position on the Earth given spherical coordinates
- Database with all countries
- Responsive & sleek UI

## Upcoming / Planned

- Dockerized API w/ PostgreSQL
- Leaderboard
- Login System
- Advanced displaying information on Earth
- Automatic animations between location markers

## Installation

- Clone this repo
- Run the web app
  ```
  npm i
  npm run dev
  ```
  The website is now available at _localhost:8080_
- Run the api
  ```
  cd guessera-api
  pip install -r requirements.txt
  python api.py
  ```