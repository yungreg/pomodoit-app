<!--
*todo: use the links for the rubber ducking section
todo: proofread (copy and paste into google doc, and it will do this for you)
todo: include pictures of the website)
 -->
# Introduction to PomoDoIt:
 
Welcome to PomoDoIt! PomoDoIt is an app that uses the Pomodoro Technique for time management to keep you focused & accountable for your time in a way that feels supportive and ideally subtracts from the day to day pressures of managing many things at once.
 
## Project Intention:
**Time Blindness** is a very common feature in people with neurodivergencies that alter executive function like anxiety, adhd, depression, dyslexia or dyscalculia. With my experience over the years dealing with Time Blindness, I’ve devised support systems that I use in my personal life that I realized could be compiled into an app & shared with others who might also benefit from these solutions. PomoDoIt offers a timer and tracking tools to not only help you accomplish your tasks but reclaim your sense of command over your own time, while helping you FEEL accomplished about your accomplishments.
Remember:✨PomoDoIt until it’s PomoDone!✨
 
 
## How I made PomoDoIt:
PomoDoIt was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and styled with Vanilla CSS.
 
 
## How To Run PomoDoIt:
 
<!--
todo: create correct steps to serve.
todo: make sure to
^ASSUMING YOU HAVE THE npm INSTALLED: serve the API first, then the NPM start
 -->
 
### downloads
1. Make sure you have the latest NPM installed. I don’t know if this will work with YARN, so use NPM.
 
2. Make sure you download both the [PomoDoIt project directory](https://github.com/yungreg/pomodoit-app) **AND** the [PomoDoIt API](https://github.com/yungreg/pomodoit-api).
 
3. I would advise to serve the API *before the ReactApp*. After navigating to the API project directory, you can run: `json-server -p 8088 database.json` in the terminal. This should open a tab in your default Browser with the project database. This app was developed in [Google Chrome](https://www.google.com/chrome/), so I suggest using that as your default.
 
### Terminal Commands
#### `npm start`
 
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. A tab should open in your browser automatically upon start.
 
The page will reload when you make changes, but sometimes you need to re-serve the application and API to resolve some rendering issues, so keep that in mind.\
You may also see any lint errors in the console.
 
#### `npm run build`
 
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
 
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
 
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
 
 
## PomoDoIt Intended Usage:

==[Watch this app walkthrough that follows the steps below](https://www.youtube.com/watch?v=A8ErLGWZHAY)==

1. Now that PomooDoIt is launched, you should be presented with this login page.
 
2. If you are registered already, you can log in using the email you used to register. If you aren't registered, hit the register button beneath the login form, and you'll be redirected there to register with your name and email.
 
3. Once logged in, you will see a timer and an input form. I intend for the user to fill in the form to set the intention for that pomodoro block, and **THEN** start the timer. At that point, begin your task. If you need to step away during a session, you can Pause and resume the timer.
 
 4. When you reach the end of the timer, you can then review the intended task(s), and check the checkbox at the bottom if you completed your task(s). Submit your task to your database, and you can then start over.
 
 5. If you'd like to review or edit your saved tasks, tap the MySessions link, and you'll be taken to a list of all of your saved sessions. If you'd like to edit the details of the sessions, you can click the Task Number at the top of each entry, and you'll be able to edit the details. If you'd like to remove the entry, hit the “Delete Session” button on the session you want to delete.
 
6. at any point, you can log out via the Logout link on screen, and be redirected to the Login page.
 
==Thank you for using PomoDoRo! :smile:==
 
## Challenges & Lessons Learned During Production  
 
### Lessons Learned:
1. Plan thrice, code twice. Tools like Trello, Github, & a pomodoro timer (wink wink) help a lot.
 
2. Celebrate your accomplishments *as they happen*. This may seem like wasted time to take 5 minutes after you implement a feature to congratulate yourself somehow, but that encouragement will snowball, and become motivation when you get stuck (which will likely happen).
 
3. This may seem obvious, but make sure to finish the Front-End coursework before starting your capstone. I wasn't able to do so, and started the project and predictably met issues I couldn't solve (specifically promises in fetch calls, Props hooks) in React because I hadn't *fully* completed HoneyRae's Repairs. Once I went back and did that,
 
4. Pace yourself. Try to be reasonable about how much you can get done each day (again, planning). Rest when you need it and stay hydrated.
 
5. Lean on classmates, even those from other cohorts. Their perspectives can help, and yours can potentially help them
Be nice. This is all quite hard, honestly. lol
 
### Challenges
1. Being specific in asking questions. I find it's difficult for people to answer questions they can't understand
 
2. Combining the modular file system, single responsibility principle, and React all together. There's a lot to keep track of.
Rubber Ducking is almost essential.  
 
### Additional Optional Advice:
1. Before asking a question, it helps your teammate for you to gather the following:
- what did you try to solve this issue (so your teammate(s) aren't rehashing solutions that don't work)
- any relevant errors/console logs/Developer Tools messages
 
2. When Picking a Project, pick something you really want to use. This can be a confusing process, and having something you actually want to see come to life will help with motivation when the going inevitably gets tough
 
3. A time saver: create CSS classNames on elements you'll want to style later *as you make them*. That way you won't have to go back and refactor those in when it's time to start designing.
 
4. Use [Rubber Ducking](https://www.parkersoftware.com/blog/rubber-ducking-not-just-a-funny-phrase/#:~:text=Essentially%2C%20 rubber%20ducking%20is%20 about,that%20 won't%20 judge%20you.). I'd say this technique is really underrated if you have trouble keeping all the connected pieces straight in your head. I encourage you to use your own. I use this plushie of [Kisuke Urahara](https://www.entertainmentearth.com/product/bleach-kisuke-plush/gn6978), so it doesn't have to be specifically a duck.
 
 
 
 

