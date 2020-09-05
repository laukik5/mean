const express = require("express");
const app = express();
const cors = require("cors");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const funs = require("./funtions");



app.post("/searchbuses", async (req, res) => {
    try {

        let input = req.body;

        let fun1 = await funs.readata(input);

        console.log(fun1);
        res.json({ msg: "data Fetched successfully" }, { fun1 });

        return fun1;
    } catch (err) {
        console.log(err);
    }
});


app.post("/adduser", async (req, res) => {
    try {

        let input = req.body;

        let fun1 = await funs.adduser(input);

        // res.json(fun1);

        res.json({ msg: "sucessfull" });
    } catch (err) {
        console.log(err);
    }
});


app.post("/addlogin", async (req, res) => {
    try {

        let input = req.body;

        let fun1 = await funs.addlogin(input);

        // res.json(fun1);

        res.json({ msg: "sucessfull" });
    } catch (err) {
        console.log(err);
    }
});


app.post("/updatepass", async (req, res) => {
    try {

        let input = req.body;

        let fun1 = await funs.updatepass(input);

        // res.json(fun1);

        res.json({ msg: "sucessfull" });
    } catch (err) {
        console.log(err);
    }
});

app.listen(5000);

