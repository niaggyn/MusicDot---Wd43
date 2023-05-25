
var $tdTotalCursos = document.querySelector('.js-total-de-cursos')
var $tdTotaldeHoras = document.querySelector('.js-total-de-horas')
var $buttomConfirmar = document.querySelector('js-botao-matricula')

var totalHoras=0
var totalCursos=0

function adicionaCurso (checkbox){
    if(checkbox.checked){
        totalCursos ++
        totalHoras += parseInt (checkbox.value)
    }else{
        totalCursos --
        totalHoras -= parseInt (checkbox.value)
    }
    $tdTotaldeHoras.textContent=totalHoras+'h'
    $tdTotalCursos.textContent=totalCursos+'curso(s)'
}

$buttomConfirmar.onclick = confirmMatriculas

function confirmMatriculas () {
    if(totalCursos ===0 ) {
        alert('Nenhum curso slecionado')
    }else{
        alert('Matricula confirmada nos cursos!')
        window.location.href = index.html
    }
}