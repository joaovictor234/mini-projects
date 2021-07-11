var codigos = 'A121B12112C12212F12G01';
let exp = /[A-Za-z]\d+/g
let codigoExtraido = codigos.match(exp)
console.log(codigoExtraido)