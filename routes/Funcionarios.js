const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('Funcionarios');
}).post('/', (req, res) => {
    const Nome = req.body.nome;
    const Cargo = req.body.cargo;
    const Cpf = req.body.cpf;
    const page = "Funcionarios"
    console.log("Nome: " + Nome);
    console.log("Cargo: " + Cargo);
    console.log("Cpf: " + Cpf);
    res.redirect('/Sucesso/p?values=' + Nome +"/n"+ Cargo + "/n" + Cpf + "/n" + page);
})


module.exports = router;
