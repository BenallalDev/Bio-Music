# Spotify to Instagram Bio Updater

## Description
This Node.js script automatically refreshes a Spotify access token, fetches the current song playing on a user's Spotify account, and updates the user's Instagram bio with this song information.

## Setup and Installation

### Prerequisites
- Node.js installed.
- Spotify Developer account with `client_id` and `client_secret`.
- Instagram account credentials.

### Installation
1. Clone the repository.
2. Navigate to the directory and run `npm install` to install dependencies.

### Configuration
Create a `.env` file in the root directory and add the following variables:
```
SPOTIFY_ACCESS_TOKEN=your_spotify_access_token

SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token

SPOTIFY_CLIENT_ID=your_spotify_client_id

SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

INSTAGRAM_COOKIE=your_instagram_cookie

INSTAGRAM_CSRFTOKEN=your_instagram_csrftoken

INSTAGRAM_APP_ID=your_instagram_app_id

INSTAGRAM_WWW_CLAIM=your_instagram_www_claim

INSTAGRAM_AJAX=your_instagram_ajax

INSTAGRAM_EMAIL=your_instagram_email

INSTAGRAM_PHONE=your_instagram_phone
```

### Usage
Run the script with `npm start`. The script will refresh the Spotify token and update the Instagram bio at regular intervals.

## Contributing
Contributions to this project are welcome. Please fork the repository and open a pull request with your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
