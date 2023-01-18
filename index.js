const express = require('express');
const server = express();
const path = require('path');

(async() =>{
    const database = require ('./db');
    const perfil = require('./modelo/perfil');
    const login = require('./js/login');

    try{
        const resultado = await database.sync();
        console.log(resultado);


        const resultadoCreateperfil = await perfil.create({
            nome: 'João',
            sobrenome: 'Silva',
            telefone: '999999999',
            bairro: 'Centro',
            rua: 'Rua 1',
            cep: '99999999',
            estado: 'SP',
            email: 'tarataratra@gmail.com',
            pais: 'Brasil',
            login: 'joao',
            senha: '123'
        })

        const resultadoCreatelogin = await login.create({
            nome: 'João',
            senha: '123'
        })

        console.log(resultadoCreateperfil);
        console.log(resultadoCreatelogin);

    }catch(error){
        console.log(error);
    }
})();

server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/perfil.html'));   
})

server.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/index.html'));
})

server.get('/tarefas', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/tarefas.html'));
})

server.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/register.html'));
})

server.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/login.html'));
})


server.listen(3000)