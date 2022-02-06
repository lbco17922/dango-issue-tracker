# Dango Issue Tracker
Personal project by Lionel Cheng.

This project acts as an issue tracking page for the fictitious company "Dango."

Users of Dango products can submit their issues and descriptions of them on this page for developers to see.

Developers at Dango can then view all submitted issues and their descriptions. If they wish, they have the option of adding developer notes for specific issues as well as marking issues as completed/resolved.

This project was built using the MERN stack (MongoDB, Express.js, React, and Node.js) and was meant as practice in creating fullstack applications that implement CRUD operations (Create, Read, Update, and Delete).

## Navigation
### User Page
The user page is the first page you will be greeted with when launching the website. As a user, you can input a title of an issue along with a brief issue description to help the Dango developers better understand. As an example, you could put the title of an issue as "Frame Drops" and the description as "When launching the Calendar app on my DangoPhone, the frames seem to drop significantly! Please fix, Dango team!"
Feel free to add your own issue to test out the application! These could be for the DangoPhone, DangoPods, or DangoVision!
### Developer's Page
Looking at the top of the page (navigation bar), you have the option to click on the "I'm a developer!" button which allows Dango developers to login (legitimate login authentication system not implemented in this project). Once logged in, the view of the website will change to one that instead displays all submitted issues, each contained in an "issue card." Issue cards have two buttons each: More Details and Complete.

### `More Details`
The more details button allows Dango Developers to view the descriptions of an issue more clearly as well as view and update the developer notes associated with said issue.
### `Complete`
The complete button marks an issue as resolved, removing it from view of the developer and deleting it from the issues database.
NOTE: IF YOU PLAN TO TEST THE APPLICATION please don't remove all issue cards.
