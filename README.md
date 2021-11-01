
# Project Overview

## Project Links

- [https://github.com/timhgmoon/top-tracks]
- [add your deployment link]()

## Project Description

This app will use the spotify api which can be found here https://developer.spotify.com/documentation/web-api/.  The api will grab top songs from around the world and allow users to choose a song. Selected song will have track name, artist and allow user to play the song through the webpage. 

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 
https://developer.spotify.com/documentation/web-api/

```
{external_urls: {spotify: 'https://open.spotify.com/track/4iJyoBOLtHqaGxP12qzhQI'}
href: "https://api.spotify.com/v1/tracks/4iJyoBOLtHqaGxP12qzhQI"
id: "4iJyoBOLtHqaGxP12qzhQI"
is_local: false
name: "Peaches (feat. Daniel Caesar & Giveon)"
popularity: 92
preview_url: null
track_number: 12
type: "track"
uri: "spotify:track:4iJyoBOLtHqaGxP12qzhQI" }
```
https://melon.danielko.me/api/v1/chart/live

```
{name: 'strawberry moon', artists: '아이유', ranking: 1, songId: '34101563', albumId: '10743453'
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- wireframe: 
  - Desktop View:[https://postimg.cc/k6XrfRhp]
  - Mobile View: [https://postimg.cc/RWRXGp5v]


- React flow: [https://postimg.cc/MfpdCyyh]


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Let user login with spotify
- Render data on page 
- Allow user to interact with the page
- Show list of top tracks
- allow user to play music through web
- About: Describe project
- Responsive design work: flexbox to style list
- deploy on github page

#### PostMVP EXAMPLE

- Styling (background, color scheme)
- Add lyrics of track
- Allow users to get information on artist

## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Login | This will allow users to login |
| WebPlayback | This will show data on selected track |



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Styling | M | 7hrs| tbd | tbd |
| Working with API | H | 10hrs| 10hrs | tbd |
| Listing top tracks | H | 4| tbd | tbd |
| Grabbing selected track | H | 3| tbd | tbd |
| Getting lyrics | M | 5| tbd | tbd |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
   