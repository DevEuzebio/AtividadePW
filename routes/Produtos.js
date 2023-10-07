const router = require('express').Router();




router.get('/', (req, res) => {
    res.render('Produtos');
}).post('/', (req, res) => {
    const Preco = req.body.preco;
    const Descricao = req.body.descricao;
    const Nome = req.body.nome;
    console.log("Nome: " + Nome);
    console.log("Preco: " + Preco);
    console.log("Descricao: " + Descricao);
    res.redirect('/Sucesso/p?values=' + Nome +"/n"+ Preco + "/n" + Descricao + "/n" + "Produto");
   
});


function CreateForm() {
    var signup_form = forms.create({
        username: fields.string({required: true})
        , password: fields.password({required: true})
        , confirm:  fields.password({
            required: true
            , validators: [validators.matchField('password')]
        })
        , email: fields.email()
    });
    var signup_form_as_html = signup_form.toHTML();
}

module.exports = router;
