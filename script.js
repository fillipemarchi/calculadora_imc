let sexform = document.getElementsByName('sexo')



function sexo1() {

    document.body.style.background = '#5c78de'
    document.body.style.color = 'white'

}

function sexo2() {

    document.body.style.background = 'pink'
    document.body.style.color = 'white'


}

function calcular() {



    let nome = document.getElementById('nome')
    let idade = document.getElementById('idade')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let resultado = document.getElementById('resultado')
    let foto = document.getElementById('foto')
    let no = (nome.value)
    let id = Number(idade.value)
    let alt = Number(altura.value)
    let pes = Number(peso.value)
    let calculo = pes / (alt * alt)

    let img = document.createElement('img')
    img.setAttribute('id', 'foto')



    resultado.innerHTML = `Olá ${no}.</br>Seu IMC é de: <strong>${calculo.toFixed(2)}</strong>`


    if (sexform[0].checked) {


        if (calculo < 18.5) {
            img.setAttribute('src', 'habaixo.png')
            descricao.innerHTML = 'Você está abaixo do peso ideal!'
        }
        else if (calculo >= 18.5 && calculo <= 24.9) {
            img.setAttribute('src', 'hnormal.png')
            descricao.innerHTML = 'Você está no seu peso normal!'
        }
        else if (calculo <= 29.9) {
            img.setAttribute('src', 'hacima.png')
            descricao.innerHTML = 'Você está acima do peso!'
        }
        else if (calculo <= 34.9) {
            img.setAttribute('src', 'hobes1.png')
            descricao.innerHTML = 'Você está com Obesidade Grau I.</br><strong>Melhor emagrecer</strong>'
        }
        else if (calculo <= 39.9) {
            img.setAttribute('src', 'hobes2.png')
            descricao.innerHTML = 'Você está com Obesidade Grau II.</br><strong>Comece a se cuidar JÁ!</strong>'
        }
        else if (calculo >= 40) {
            img.setAttribute('src', 'hobes3.png')
            descricao.innerHTML = 'Você está com Obesidade Grau III.</br><strong>CUIDADO.</br> Procure ajuda médica imediatamente!</strong>'
        }
    }
        else if (sexform[1].checked) {

            if (calculo < 18.5) {
                img.setAttribute('src', 'mabaixo.png')
                descricao.innerHTML = 'Você está abaixo do peso ideal!'
            }
            else if (calculo >= 18.5 && calculo <= 24.9) {
                img.setAttribute('src', 'mnormal.png')
                descricao.innerHTML = 'Você está no seu peso normal!'
            }
            else if (calculo >= 25 && calculo <= 29.9) {
                img.setAttribute('src', 'macima.png')
                descricao.innerHTML = 'Você está acima do peso!'
            }
            else if (calculo >= 30 && calculo <= 34.9) {
                img.setAttribute('src', 'mobses1.png')
                descricao.innerHTML = 'Você está com Obesidade Grau I.</br><strong>Melhor emagrecer</strong>'
            }
            else if (calculo >= 35 && calculo <= 39.9) {
                img.setAttribute('src', 'mobses2.png')
                descricao.innerHTML = 'Você está com Obesidade Grau II.</br><strong>Comece a se cuidar JÁ!</strong>'
            }
            else if (calculo >= 40) {
                img.setAttribute('src', 'mobses3.png')
                descricao.innerHTML = 'Você está com Obesidade Grau III.</br><strong>CUIDADO.</br> Procure ajuda médica imediatamente!</strong>'
            }
        }
    
    foto.innerHTML = ''
    foto.appendChild(img)
}