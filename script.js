var tituloTarefas = window.document.querySelector('#titulo')
var dataTarefas = window.document.querySelector('#data')
var horaTarefas = window.document.querySelector('#hora')
var duracaoTarefas = window.document.querySelector('#duracao')
var inputTarefas = window.document.querySelector('.textarea')
var botaoConfirmar = window.document.querySelector('.btn')
var conteudoTarefas = window.document.querySelector('.output-lista')
var items = []
var inputBusca = window.document.querySelector('#busca')
var inputDia = window.document.querySelector('#dia')
var inputMes = window.document.querySelector('#mes')
var inputSemana = window.document.querySelector('#semana')


botaoConfirmar.addEventListener('click', adicionarTarefa)

function adicionarTarefa(){
    if(tituloTarefas.value == '' || dataTarefas.value == '' || horaTarefas.value == '' || duracaoTarefas.value == '' || inputTarefas.value == ''){
        window.alert('Existem campos que não foram preenchidos')
        return
    }

    var itemLista = window.document.createElement('div')
    itemLista.classList.add('itemLista')

    var tituloLista = window.document.createElement('h2')
    tituloLista.classList.add('tituloLista')
    tituloLista.innerHTML = tituloTarefas.value
    

    var dataLista = window.document.createElement('p')
    dataLista.classList.add('dataLista')
    dataLista.innerHTML = '<strong>Data: </strong>' + dataTarefas.value

    var horaLista = window.document.createElement('p')
    horaLista.classList.add('horaLista')
    horaLista.innerHTML = '<strong>Hora: </strong>' + horaTarefas.value

    var duracaoLista = window.document.createElement('p')
    duracaoLista.classList.add('duracaoLista')
    duracaoLista.innerHTML = '<strong>Duração: </strong>' + duracaoTarefas.value + ' minutos'

    var conteudoLista = window.document.createElement('p')
    conteudoLista.classList.add('conteudoLista')
    conteudoLista.innerHTML = inputTarefas.value
    itemLista.appendChild(conteudoLista)

    var informacoesLista = window.document.createElement('div')
    informacoesLista.classList.add('informacoesLista')
    informacoesLista.appendChild(tituloLista)
    informacoesLista.appendChild(dataLista)
    informacoesLista.appendChild(horaLista)
    informacoesLista.appendChild(duracaoLista)
    informacoesLista.appendChild(itemLista)
    conteudoTarefas.appendChild(informacoesLista)
    
  

    tituloTarefas.value = ''
    dataTarefas.value = ''
    horaTarefas.value = ''
    duracaoTarefas.value = ''
    inputTarefas.value = ''


   

    var botoesAcao = window.document.createElement('div')
    botoesAcao.classList.add('botoesAcao')

    var btnEditarTarefa = window.document.createElement('button')
    btnEditarTarefa.classList.add('btnEditarTarefa')
    btnEditarTarefa.innerHTML = '<i class="fas fa-edit"></i>'
    botoesAcao.appendChild(btnEditarTarefa)
    btnEditarTarefa.addEventListener('click', function() {editarTarefa(informacoesLista, btnEditarTarefa)})

    var btnTarefaConcluida = window.document.createElement('button')
    btnTarefaConcluida.classList.add('btnTarefaConcluida')
    btnTarefaConcluida.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    botoesAcao.appendChild(btnTarefaConcluida)
    btnTarefaConcluida.addEventListener('click', function() {riscarTarefa(conteudoLista)})

    var btnExcluirTarefa = window.document.createElement('button')
    btnExcluirTarefa.classList.add('btnExcluirTarefa')
    btnExcluirTarefa.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
    botoesAcao.appendChild(btnExcluirTarefa)
    btnExcluirTarefa.addEventListener('click', function() {excluirTarefa(informacoesLista)})

    itemLista.appendChild(botoesAcao)
}

var primeiroClique = true

function editarTarefa(informacoesLista, btnEditarTarefa) {
    var tituloLista = informacoesLista.querySelector('.tituloLista')
    var dataLista = informacoesLista.querySelector('.dataLista')
    var horaLista = informacoesLista.querySelector('.horaLista')
    var duracaoLista = informacoesLista.querySelector('.duracaoLista')
    var conteudoLista = informacoesLista.querySelector('.conteudoLista')
   

    if(primeiroClique){
        window.alert('Clique novamente para confirmar as modificações!')
        primeiroClique = false
    }

        
        if (conteudoLista.classList.contains('riscado')) {
            window.alert('Tarefa concluída! Não é mais possível editá-la.')
            return
        }
        

    
    var novoTitulo = document.createElement('input')
    novoTitulo.classList.add('novoTitulo')
    novoTitulo.type = 'text'
    novoTitulo.value = tituloLista.textContent
    tituloLista.parentNode.replaceChild(novoTitulo, tituloLista)

    var novaData = document.createElement('input')
    novaData.classList.add('novaData')
    novaData.type = 'date'
    dataLista.textContent  = '20' + dataLista.textContent.slice(8)
    novaData.value = dataLista.textContent
    dataLista.parentNode.replaceChild(novaData, dataLista)

    var novaHora = document.createElement('input')
    novaHora.classList.add('novaHora')
    novaHora.type = 'time'
    novaHora.value = horaLista.textContent.slice(6)
    horaLista.parentNode.replaceChild(novaHora, horaLista)

    var novaDuracao = document.createElement('input')
    novaDuracao.classList.add('novaDuracao')
    novaDuracao.type = 'number'
    novaDuracao.value = duracaoLista.textContent.slice(9,11).trim()
    duracaoLista.parentNode.replaceChild(novaDuracao, duracaoLista)

    var novoConteudo = document.createElement('input')
    novoConteudo.classList.add('novoConteudo')
    novoConteudo.type = 'text'
    novoConteudo.value = conteudoLista.textContent
    conteudoLista.parentNode.replaceChild(novoConteudo, conteudoLista)

    btnEditarTarefa.addEventListener('click', function(){
        novoTitulo.parentNode.replaceChild(tituloLista, novoTitulo)
        tituloLista.innerHTML = novoTitulo.value

        novaData.parentNode.replaceChild(dataLista, novaData)
        dataLista.innerHTML = '<strong>Data: </strong>' + novaData.value

        novaHora.parentNode.replaceChild(horaLista, novaHora)
        horaLista.innerHTML = '<strong>Hora: </strong>' + novaHora.value

        novaDuracao.parentNode.replaceChild(duracaoLista, novaDuracao)
        duracaoLista.innerHTML = '<strong>Duracao: </strong>' + novaDuracao.value + ' minutos'

        novoConteudo.parentNode.replaceChild(conteudoLista, novoConteudo)
        conteudoLista.innerHTML = novoConteudo.value
    })

}

function riscarTarefa(conteudoLista){
    conteudoLista.style.textDecoration = 'line-through'
    conteudoLista.classList.add('riscado')
}

function excluirTarefa(informacoesLista){
    informacoesLista.remove()
    
}

inputBusca.addEventListener('input', function() {
    var textoBusca = inputBusca.value.toLowerCase()

    var tarefas = document.querySelectorAll('.informacoesLista')

    tarefas.forEach(function(tarefa) {
        var tituloTarefa = tarefa.querySelector('.tituloLista').textContent.toLowerCase()

        if (tituloTarefa.includes(textoBusca)) {
            tarefa.style.display = 'block'
        } 
        else {
            tarefa.style.display = 'none'
        }
    })
})

inputDia.addEventListener('input', function(){
    var tarefas = document.querySelectorAll('.informacoesLista')

    var diaSelecionado = inputDia.value

    if (diaSelecionado == '') {
        tarefas.forEach(function(tarefa){
            tarefa.style.display = 'block'
        }
    )} 
        else {
            tarefas.forEach(function(tarefa){
            var dia = tarefa.querySelector('.dataLista').textContent.slice(-10)

            if(diaSelecionado == dia){
                tarefa.style.display = 'block';
            } else {
                tarefa.style.display = 'none';
            }
        })
    }
})



inputMes.addEventListener('input', function(){
    var tarefas = document.querySelectorAll('.informacoesLista')
    var mesSelecionado = inputMes.value.substring(5)

    if(mesSelecionado == ''){
        tarefas.forEach(function(tarefa){
            tarefa.style.display = 'block'
        })}
        else{
        tarefas.forEach(function(tarefa){
            var mes = new Date(tarefa.querySelector('.dataLista').textContent).getMonth() + 1
            if(mesSelecionado == mes){
                tarefa.style.display = 'block'
            }
            else{
                tarefa.style.display = 'none'
            }
        
        })
    }       
})

inputSemana.addEventListener('input', function() {
    var semanaSelecionada = inputSemana.value

    if (semanaSelecionada) {
        var anoSelecionado = parseInt(semanaSelecionada.substring(0, 4))
        var semanaDoAnoSelecionada = parseInt(semanaSelecionada.substring(6))

        var tarefas = document.querySelectorAll('.informacoesLista')

        tarefas.forEach(function(tarefa) {
            var dataTarefa = new Date(tarefa.querySelector('.dataLista').textContent)
            var anoTarefa = dataTarefa.getFullYear()
            var semanaTarefa = getNumeroSemana(dataTarefa)

            if (anoSelecionado === anoTarefa && semanaDoAnoSelecionada === semanaTarefa) {
                tarefa.style.display = 'block'
            } else {
                tarefa.style.display = 'none'
            }
        })
    } else {
        var todasAsTarefas = document.querySelectorAll('.informacoesLista')
        todasAsTarefas.forEach(function(tarefa) {
            tarefa.style.display = 'block'
        })
    }
})

function getNumeroSemana(data) {
    var primeiroDiaDoAno = new Date(data.getFullYear(), 0, 1)
    var diasDeCompensacao = 1 - primeiroDiaDoAno.getDay()
    var primeiroDiaDaSemana = primeiroDiaDoAno.getDate() + diasDeCompensacao
    var diasPassados = Math.floor((data - primeiroDiaDoAno) / 86400000)
    var numeroSemana = Math.ceil((diasPassados + primeiroDiaDaSemana) / 7)
    return numeroSemana 
}
    




