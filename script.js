function verify() {
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = window.document.querySelector('input#anoTxt').value
  var sexo = window.document.querySelector('input#sex')
  var res = window.document.querySelector('div#res')
  if (fAno.lenght == 0 || fAno > ano) {
    window.alert('[ERRO]Preencha os dados corretamente.')
  } else {
    var fSex = window.document.getElementsByName('radSex')
    var idade = ano - fAno
    var genero = ''
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fSex[0].checked) {
      genero = 'Masculino'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebeHomem.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'jovemHomem.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'adulto.png')
      } else {
        img.setAttribute('src', 'idoso.png')
      }
    } else if (fSex[1].checked) {
      genero = 'Feminino'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebeMulher.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'jovemmulher.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'adulta.png')
      } else {
        img.setAttribute('src', 'idosa.png')
      }
    }
    res.innerHTML = `Sexo é ${genero} e idade é ${idade}`
    res.appendChild(img)
  }
}
