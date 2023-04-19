
const variants = [
    ['6 месяцев', '1 год', '1,5 года', '2 года'],
    ['3 месяца', '6 месяцев', '9 месяцев', '1 год', '1,5 года', '2 года']
]

const procents = [
    [0.20, 0.22, 0.15, 0.1],
    [0.2, 0.22, 0.23, 0.24, 0.18, 0.15]
]


const months = [
    [6, 12, 18, 24],
    [3, 6, 9, 12, 18, 24]
]


$(function(){
    
$('#Select1').on('change', function(){
    const choosen = $('#Select1').val()
    const list = variants[choosen]
    
$('#Select2 option').remove()
for (let i = 0; i < list.length; i++){
    $('#Select2').append('<option value = ' + i + '>' + list[i] + '</option>')
}})



$(document).on('submit', function(){
	

    const choosen1 = $('#Select1').val()
    const choosen2 = $('#Select2').val()

    const dep = +$('#depositSum').val()
    const month = months[choosen1][choosen2]
    const procent = procents[choosen1][choosen2]
    let result

    if (month > 12){
       result = (dep * procent)  + ((dep + (dep * procent)) * procent * ((month - 12) / 12)) + dep
    }
    else{
    result = (dep * procent * (month / 12)) + dep
    }

  
    conclusion.innerText = `
    Вклад "${$('#Select1 option:selected').text()}" на срок "${month}" месяцев на сумму ${(dep)} руб

    В конце срока вы получите ${(+result)} руб
`
});

})