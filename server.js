//const http = require('http');

//arquivo apenas para a criação do servidor
const app = require('./src/config/custom-express');

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});



/*const servidor = http.createServer( function(req, resp){
    let html = '';

    if( req.url == '/' ){
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código Teste</h1>
            </body> 
        </html>
        `;
    } else if ( req.url == '/livros' ) {
        html = `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Listagem de livros Teste</h1>
            </body> 
        </html>
        `
    }

    resp.end(html);
}); 

servidor.listen(3000);
console.log('SERVER ON')*/