# front-introduction

## Intro

The goal of this project is to get an introduction to front techno used on Face/Face Server.
The instructions to complete this tuto are described below.

## Setup

### Node.js

Install [nodejs v18.16.0 or ulterior](https://nodejs.org/en/download/releases/).

*[nvm](https://github.com/nvm-sh/nvm) can be installed to ease switching between versions on the fly.*

### Node setup

Global packages : [Gulp](https://gulpjs.com/), [Yarn](https://yarnpkg.com/en/)

```shell
npm install -g gulp yarn
```

## Available node scripts

### Install dependencies

```shell
yarn install
```

### Running App

```shell
yarn start
```
### Running Storybooks

```shell
yarn storybook
```
### Running Tests

```shell
yarn test
```

## API to use for this tuto

### Doc

https://developers.themoviedb.org/3/

### API Key

(Check app/constants ;) )

92b418e837b833be308bbfb1fb2aca1e

### Example

https://api.themoviedb.org/3/discover/tv?api_key=92b418e837b833be308bbfb1fb2aca1e&language=en- US&sort_by=popularity.desc&page=1&timezone=America/New_York&include_null_first_air_dates=false

## TODO

- Create a new branch from main
- Add routing for the different pages
- Add aliases when it's possible and relevant
- Use SCSS global variables (eg: to define and use colors, there's a change to make on the body :))
- Add some tests
- Add a storybook
- Use context for setting default language to use, and allow the user to update it (and use a storage solution to keep this choice between sessions)
- Use context for Dependance Injection (eg: for the api utility)
- Use a native state management (eg: to handle changes for the search page for filters, to fetch only once some datas)
- Use React Final Form
- Create a consistent layout (with Header, Footer, nav ?)
- Create a nice interface following the instructions below
### Home Page

Consisted of 2 strates : 

- A showcase of the most popular movie, with an image on the background, the movie title and a link Show details to redirect on detailed informations
- A list of movies (a card with the image, the title and a link show details). This list containes the lasts movies, when we scroll down, display a link Show more to fetch more movies

### Detailed informations

- Image of the movie
- Title
- Actors, producers...
- Genre
- Origin country
- Original title
- Overview

(don't forget navigation, with a back ?)

### Search page

On the top of the page, a form with some data to filters and get a list of films (same as used on the Home Page).
