//criando instancia do banco de dados
const db = require('../../config/database');

//letra maiuscula por ser uma referência exata à classe criada
const LivroDao = require('../infra/livro-dao');

//recebendo objeto app de custom-express.js
module.exports = (app) => {
    //rota raiz
    app.get('/', function(req, resp){
        resp.send(
            `
            <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código </h1>
                    </body> 
                </html>
            `
        );
    });

    //rota livros: retorna listagem dos livros no banco de dados
    app.get('/livros', function(req, resp){

        const livroDao = new LivroDao(db);

        livroDao.lista()
            .then(livros =>  resp.marko(
                require('../views/livros/listagem/listagem.marko'),
                {
                    livros
                }
            ))
            .catch(erro => console.log(erro));
        //db.all('SELECT * FROM livros', function(erro, resultados) {
    });

    //rota form livro
    app.get('/livros/form', function(req, resp){
        resp.marko(
            require('../views/livros/form/form.marko'),
            {
                livro: {}
            }
        );
    });

    //rota para o método POST cadastro livro
    app.post('/livros', function(req, resp){
        const livroDao = new LivroDao(db);
        
        //imprimindo informações no corpo da requisição
        console.log(req.body);
        

        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    app.put('/livros', function(req, resp){
        const livroDao = new LivroDao(db);
        
        //imprimindo informações no corpo da requisição
        console.log(req.body);
        

        livroDao.atualiza(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    app.get('/livros/form/:id', function(req, resp){
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.buscaPorId(id)
            .then(livro => 
                resp.marko(
                    require('../views/livros/form/form.marko'),
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro));
    })

    app.delete('/livros/:id', function(req, resp){
        //buscando o id no corpo da requisição
        console.log(req.body);

        const id = req.params.id;

        const livroDao = new LivroDao(db);

        livroDao.remove(id)
            .then(() => resp.status(200).end() )
            .catch( erro => console.log(erro) )
    })
}

