import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1><p>Take a look at my <a href='https://www.linkedin.com/in/felipe-sousa-bezerra/'> Linked</a></p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><p>Academia Europea Language School Coordinator, passionate about leadership and software development.<br>Currently exploring the world of web development, learning Javascript, Angular, React, Next, Vue, Node, HTML, CSS, jQuery, Bootstrap, Webpack, Gulp, and MySQL. <br>With a team of nearly 600 teachers at Academia Europea, I am constantly enhancing my problem-solving, management, and communication skills. <br>Additionally, I am dedicated to applying my passion for technology to create innovative tools and solutions for the Academia.</p>");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});