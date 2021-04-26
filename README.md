# Emoji Coat of Arms

This project was a solo project with the goal of reinforcing learning of React, 
React Router, asynchronous JavaScript, and end-to-end testing with Cypress. To facilitate that process, 
the following tools were utilized, based on a niche audience of people who want to create a Coat of Arms 
using emojis:
  - Personas:  [User1](https://docs.google.com/document/d/1FfGP_ONHQj1KuLpNJjfuMWSpcLQjM6kHzIYmem3p2EQ/edit) 
    and [User2](https://docs.google.com/document/d/1WKIFyyMNWZlh9pHPaF2ak6d5E1qJnwEHo5sBClzWZtA/edit)
  - [Wireframes and inspiration](https://miro.com/app/board/o9J_lOZUZG0=/)
  - [A personal project board of my own creation](https://app.gitkraken.com/glo/board/YFiB_IynhAASRtBW) (something like Kanban, but not quite)
  - [The API I used](https://emoji-api.com/)
  - [The repository](https://github.com/piknikki/emojicoat-of-arms)
  - [The deployed site](https://emojicoat-of-arms.herokuapp.com/)

This app is a fun take on creating a Coat of Arms, for the modern nerd. When you arrive at the root of the 
app, you see a welcoming landing page and are encouraged to Get Started! From there you can navigate to creating a new 
Coat of Arms using the navigation links or the button offered. You can also go to the gallery, where previously made coats will 
be displayed. If you don't have any, there's another encouraging button to get started making some fun. 

Once you do get started, you can search for emojis with search terms. One has been done for you, to get started (using the suggested 
search term of "grin"), showing a handful of emojis to choose from. Use those or perform a search like unicorn or 
heart or otter. You do you!! 

Click on an emoji to put it on your coat. Double click on the chosen emojis if you want to remove one. Reset if you want to 
start over. There's a counter so you know that you can only have 5, and once you do, you see a message inviting you 
to save your creative masterpiece and go to the gallery to see all of your previous magic.

Local storage has been utilized, to save your Coats of Arms so that you can refresh the browser without worrying 
about losing your faves. 

But what if, somehow, you navigated to some weird route that doesn't exist? That's okay! There's a welcoming 404 there, 
to help you get back on the path to creating your best work.

## My work process

For this solo project, I was hoping to reinforce my learning of React, and to create something fun that is also 
nice to interact with. I feel like I accomplished that, even though this application is not mobile responsive (like, at all). 
If I had more time, I would refactor to make it mobile-friendly because I think my audience would definitely want 
to do use the app on their phones. 

Although this was a solo project, I sorely missed being on a team, so I formed a team with other cohort-mates (Jessica and Katie), 
and we kept in close contact for rubber ducking and debugging, as well as feedback about flow and feel of our apps. It 
really helped me to know that I had a team even though I was working strictly independently on my project. None of us 
ended up doing a code review on a PR for each other, but we did walk through code on zoom calls and talk about how 
to improve. 

## Some screen shots and gifs

Making a new Coat of Arms, when there are none made yet:

https://user-images.githubusercontent.com/28355326/116085478-171e5d00-a65c-11eb-89fa-e736acbde2d9.mp4


Refreshing and seeing previously made coat, and seeing 404:

https://user-images.githubusercontent.com/28355326/116085495-1b4a7a80-a65c-11eb-8f13-4374c64fef20.mp4


## Available Scripts

In the project directory, after cloning and running `yarn install` you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run cypress open`

Launches Cypress tests in interactive watch mode.\

