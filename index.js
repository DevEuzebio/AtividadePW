const express = require("express");
const app = express();
const path = require("path");
const port = 3000;



app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/Usuarios", require("./routes/Usuarios"));
app.use("/Produtos", require("./routes/Produtos"));
app.use("/Funcionarios", require("./routes/Funcionarios"));


app.get("/", (req, res) => {
    res.render('index');
}).post("/Page", (req, res) => {
    const Page = req.body.page;
    res.redirect(Page);
});

app.get("/Sucesso/p", (req, res) => {
    var values = req.query.values;
    var values = values.split("/n");
    res.render('Sucesso', {Values: values});
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})


module.exports = app;