# Spotify to Instagram Bio Updater

## Description
This Node.js script automatically refreshes a Spotify access token, fetches the current song playing on a user's Spotify account, and updates the user's Instagram bio with this song information.

The development process involved several key steps:

- **Reverse Engineering**: Understanding the Instagram API's behavior required analyzing network requests and responses. This was crucial for figuring out how to programmatically update the Instagram bio.

- **Spotify API Integration**: The script uses the Spotify Web API to fetch details about the currently playing song. This involved authenticating with Spotify, handling access tokens, and making API requests.

- **Token Management**: The script manages Spotify access tokens, automatically refreshing them as needed. This ensures uninterrupted access to the user's Spotify account data.

- **Instagram Integration**: While not using the official Instagram API, the script mimics the necessary HTTP requests to update the Instagram bio. This part required careful observation of the network requests made during a manual bio update.

- **Scheduling**: The script runs a check at regular intervals to keep the bio updated with the latest song playing on Spotify.

- **Environmental Variables**: To ensure security and ease of configuration, the script uses environmental variables for sensitive information like API keys and user credentials.

This project is an exploration of the capabilities and limits of interacting with third-party APIs and offers a practical example of how different web services can be combined to create new functionalities. It's an illustration of both the creative possibilities and the technical challenges inherent in modern web development.

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
