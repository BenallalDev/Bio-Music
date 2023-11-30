const axios = require('axios');
const express = require('express');
const qs = require('qs');
require('dotenv').config();

const app = express()

let token = process.env.SPOTIFY_ACCESS_TOKEN;
let refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
var cookie = process.env.INSTAGRAM_COOKIE;
let oldBio;
function toBoldText(str) {
	const normalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const boldChars = '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵';
	let boldStr = '';

	for (let i = 0; i < str.length; i++) {
			const index = normalChars.indexOf(str[i]);
			boldStr += index !== -1 ? boldChars[index] : str[i];
	}

	return boldStr;
}

async function refreshAccessToken(refreshToken) {
	try {
		const response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify({
			grant_type: 'refresh_token',
			refresh_token: refreshToken,
			client_id: client_id,
			client_secret: client_secret
		}), {
			headers: { 
				'Content-Type': 'application/x-www-form-urlencoded' 
			}
		});

		const newAccessToken = response.data.access_token;
		token = newAccessToken;
		refreshToken = response.data.refresh_token
	} catch (error) {
		console.error('Error refreshing access token', error);
	}
}

async function getSong() {
	try {
		const { data } = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
			headers: {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json', 
				'Content-Type': 'application/json'
			}
		});

		const bio = `🎵🤖 "Completely automated" 🎛️ \n 🎧 Abdeladim is now listening to: \n` + ' 🔊 "' + data.item.name + '" By ' + data.item.album.artists[0].name + " 🎤";
		if (bio !== oldBio) {
			changeBio(bio);
			oldBio = bio;
		}
	} catch (error) {
		console.log(error);
	}
}

function changeBio(text) {
	axios({
			method: 'post',
			url: 'https://www.instagram.com/api/v1/web/accounts/edit/',
			headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Cookie': decodeURIComponent(cookie),
					'X-CSRFToken': process.env.INSTAGRAM_CSRFTOKEN,
					'X-IG-App-ID': process.env.INSTAGRAM_APP_ID,
					'X-IG-WWW-Claim': process.env.INSTAGRAM_WWW_CLAIM,
					'X-Instagram-AJAX': process.env.INSTAGRAM_AJAX,
					'X-Requested-With': 'XMLHttpRequest'
			},
			data: `biography=${encodeURIComponent(text)}&chaining_enabled=on&email=${process.env.INSTAGRAM_EMAIL}&external_url=&first_name=Abdeladim&phone_number=${process.env.INSTAGRAM_PHONE}&username=4qc_l`
	})
	.then(response => {
			console.log(response.status);
	})
	.catch(error => {
			console.error('Error:', error);
	});
}

refreshAccessToken(refreshToken);
setInterval(() => {
	getSong();
}, 3000);

setInterval(() => {
	refreshAccessToken(refreshToken)
}, (59 * 60 * 1000))


app.get("/", (req, res) => res.send("No pages"));