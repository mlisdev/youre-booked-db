## You're Booked! App 
### your a private, web based reading tracker 
---
#### You're Booked! App Background Info
I am a pretty avid reader with a terrible memory. I used to use Goodreads to track what books I had read, when I started reading them, when I finished them, and a quick rating. 
I found the social aspects of Goodreads to be really distracting -- the petty infighting in reviews, the authors constantly shilling their latest book -- and switched to using a locally saved spreadsheet. 
Using a spreadsheet saved to your computer to track your reading is less than ideal because: 
1. You can only use it on your computer, and 
2. It's an enormous spreadsheet with all kinds of data on it and I just keep adding more data fields to it. 

When the second SEI project was building a CRUD application, I knew immediately what I wanted to do -- a private, web based reading tracker! It solves all my issues with the spreadsheet, AND it's mobile. 

What a win! 

--- 

#### YB! Screenshots

Since YB! is an entirely private experience, the login screen presents only the login link. Users will not be able to see other users logs, limiting the amount of distractions (and weird literary infighting) on other social oriented book log websites. 

![Image of You're Booked login page](/img/loginscreen.png)

Once a user logs in, they will at first see an empty page, meaning they haven't logged any books and will have to use the "Add a Book" link. 

When a user clicks the "Add a Book" link, they will be directed to a page to create a new entry in their log. 
![Image of You're Booked login page](/img/addbook.png)

If a user has used YB! before, they will see the books they have entered previously, sorted to have their recently finished books at the top. 

![Image of You're Booked user book page](/img/beforereview.png)

Users also have the ability to add ratings and reviews to their books. There is a link nested in the book entry that brings the user to the "new review" page. 

![Image of You're Booked review page](/img/addreview.png)

After a user enters a review, it renders within the book entry on the main page. 
![Image of You're Booked book page after review](/img/withreview.png)

--- 

#### Technologies Used 
* HTML 
* CSS
* Bulma CSS Framework 
* FontAwesome 
* Javascript 
* Node.JS
* Express 
* Mongoose
* MongoDB 

---

#### Getting Started 
* See my [Trello board here](https://trello.com/b/fQf5dF5z/ga-project-2-youre-booked-reading-tracker)
* [Click here to use YB!](https://youre-booked.herokuapp.com/)
--- 
#### Next Steps (Ice Box)
* I want to add more basic CRUD across the platform, including the ability to edit reviews. 
* I'd like for the platform to include some ability to create data viz using the stats for a user's books -- such as the ability to show a pie chart of how many authors of what gender, or the ability to render quick statistics for a user based on average length of book, average rating, etc.. 
* While I don't like being able to see other's reviews or comments on the books I've read, I know the other people find them valuable. I'd love to add details pages for the books that have been entered that includes the reviews and ratings, possibly without a username or avatar attached. Fully anonymous! 
*  I also want to go in and update my styling at some point. I'm not thrilled with the design, but it was generally what I was looking for. 
*  Also a new logo. This one is bad. 