## Description

Simplified application to create a user preference card. This uses local storage to persist data and shadcn-ui + tailwindcss for the UI

## Future Improvements

- UI improvements (better layout system)
- Have rendered multiple images and let the user pick which one he/she likes

## Instructions

1) Sign up for unsplash api key on https://unsplash.com/developers
2) Clone the repository:
`git clone <repo_name> && cd ./<repo_name> && npm install`, this will install all dependencies
3) Create .env file (assuming you are on the root project folder):
`touch .env && echo 'NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=<access_key>' > .env`

## Features

- Debounce mechanism using "lodash/debounce" when user searches for custom topic
- Tap on the image to remove the unsplash recommended image and perform another search

