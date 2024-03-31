import express from "express";
const app = express();



app.get("/", (req, res) => {
    const d = new Date();
    let day = d.getDate();

    let type = "a weekday" ;
    let adv = "it's time to work hard";

    // day = 6;

    if(day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time to have fun";
    }

    res.render("index.ejs",
    {   dayType: type,
        advice: adv,  
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
