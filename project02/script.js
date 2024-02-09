const concatenarStrings = (birle) => {
    juntaTudotlg = birle.reduce((cmc, fn) => cmc + fn)

    return juntaTudotlg
}

array = ["Olá, ", "Mundo", "!"]
array1 = ["Birle! ", "Não acredito ", "que eu consegui!!!"]
array2 = ["Birle! ", "Birle! ", "Birle! ", "Birle! ", "Birle! ", "Birle! ", "Birle! ", "Birle! ", "Birle! ", "Birle! ", "Birle! "]
console.log(concatenarStrings(array))
console.log(concatenarStrings(array1))
console.log(concatenarStrings(array2))