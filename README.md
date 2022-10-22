# Novulum challenge

Create a responsive slider in React.
In this project I was given a mockup and a ticket with a set of defined tasks to complete. I built the project closely to the mockup but with a few design changes that I incorporated to try and be more appealing. To accomplish this task I utilized create-react-app along with pure CSS without any packages to help with styling.

# Application speed

- On desktop, PageSpeed Insights reports a score of 99.
- On mobile, PageSpeed Insights reports a score of 95.

# Challenges

- I wanted to quickly incorporate pagination to allow more than three items to be desplayed, but the API does not allow this in a logical way. I could have requested a larger and larger list of items and manually sliced them, but this would have been a poorly optimized solution.
- The images take forever to load, causing a bit of pop-in adjustment of the layout when they load.
- Creating app responsiveness for mobile and tablet.

# Solutions

- I decided not to add pagination due to API limitations.
- I would have statically stored the images and used more optimized formats and sizes to reduce load time.
- I was very pleased with the end result of the style of the mobile product view.

# Time Limitations

- Due to time limitations, the stars are only reflective of a rounded version of each products rating, ie. 4/5 instead of 4.7/5 stars filled in.
- If this project had a longer time estimation I would have also added in pagination.
- Lack of cohesive internal styling. There is no internal style defined (CSS variables, theme, global style).
