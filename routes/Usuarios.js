const router = require('express').Router();


router.get('/',(req, res) => {
    res.render('Usuarios');
}).post('/', (req, res) => {
    const Nome = req.body.nome;
    const Email = req.body.email;
    const Telefone = req.body.telefone;
    console.log("Nome: " + Nome);
    console.log("Email: " + Email);
    console.log("Telefone: " + Telefone);
    res.redirect('/Sucesso/p?values=' + Nome +"/n"+ Email + "/n" + Telefone + "/n" + "Usuario");
   
})




module.exports = router;
