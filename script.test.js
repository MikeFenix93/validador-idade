/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test ("valida-idade-maior", function(){
    var maior = validarIdade("18")
    expect(maior).toBe(true)
})

test ("valida-idade-menor", function(){
    var menor = validarIdade("")
    expect(menor).toBe(false)
})
