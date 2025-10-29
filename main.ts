input.onButtonPressed(Button.A, function () {
    basic.showNumber(lista[indice])
    indice += 1
    if (indice > 3) {
        basic.showIcon(IconNames.Yes)
        indice = 0
    }
})
let lista: number[] = []
let indice = 0
indice = 0
lista = [
7,
13,
35,
51
]
