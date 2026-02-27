/***********************************************************
 * Objetivo: Arquivo de estrutura de troca de conteudos do Main
 * Autor: Matheus Perez
 * Versão: 1.0
 * Data: 25/02/2026
 * *********************************************************/

//Função para buscar os dados da API

async function buscarDados(){

    try{

        const URL = await fetch('https://lion-school-phbo.onrender.com/alunos')
        const dadosJSON = await URL.json();

        const containerAlunos = document.getElementById('cardAlunos')

        dadosJSON.forEach( item => {

            const card = document.createElement('div')
            card.classList.add('card')


            const img = document.createElement('img')
            img.classList.add('img')
            img.src = item.foto;

            const nome = document.createElement('p')
            nome.textContent = item.nome;

            card.appendChild(img);
            card.appendChild(nome);
            containerAlunos.appendChild(card)

            return containerAlunos
            
         });


         console.log(dadosJSON)

    } 
    catch (error) {
        console.log(error)
        return false
    }
    
};

async function buttonEvent() {
    try{

        var buttonDev = document.getElementById('devButton')
        
        var buttonDev = document.getElementById('redesButton')





    } catch {

    }
 };

buscarDados();


