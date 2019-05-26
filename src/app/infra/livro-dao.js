class LivroDao{
    //essa classe terá toda funcionalidade do banco de dados (adição, remoção, edição, etc)

    //construtor recebendo a instancia do banco de dados
    constructor(db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os livros');
                    return resolve(resultados);
                }
            )
        })
    };

    adiciona(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO LIVROS (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)
                `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                function(err){

                    if (err){
                        console.log(err);
                        return reject('Não foi possível adicionar o livro!');
                    }

                    resolve();
                }
            )        
        })
    };

    atualiza(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
                `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao,
                    livro.id
                ],
                function(err){
                    if(err){
                        console.log(err);
                        return reject('Não foi possível atualizar o livro!');
                    }

                    resolve();
                }
            )
        })
    };

    remove(id){
        return new Promise((resolve, reject) => {
            this._db.run(`
                DELETE 
                FROM livros WHERE id = ?
                `,
                [
                    id
                ],
                function(err){

                    if(err){
                        console.log(err);
                        return reject('Não foi possível deletar livro!')
                    }

                    return resolve();
                }
            
            )
        })

    };

    buscaPorId(id){
        return new Promise((resolve, reject) => {
            this._db.get(`
                SELECT * FROM
                livros WHERE id = ?
                `,
                [
                    id
                ],
                function(err, livro){
                    if(err){
                        console.log(err);
                        return reject('Não foi possível trazer livro do banco de dados!')
                    }

                    return resolve(livro);
                }
            )
        })
    }

    /*lista(callback){
        this._db.all(
            'SELECT * FROM livros',
            (erro, resultados) => callback(erro, resultados)
        )
    }*/
}

module.exports = LivroDao;