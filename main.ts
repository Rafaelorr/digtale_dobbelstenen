input.onButtonPressed(Button.A, function () {
    aantal_dobbelstenen += 1
    basic.showString("aantal")
    basic.showString("" + (aantal_dobbelstenen))
})
input.onGesture(Gesture.Shake, function () {
    rol_resulaat = 0
    for (let index = 0; index < aantal_dobbelstenen; index++) {
        rol_resulaat += randint(1, soort_dobbelsteen)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (soort_dobbelsteen == 2) {
        soort_dobbelsteen = 4
        aantal_dobbelstenen = 1
    } else if (soort_dobbelsteen == 4) {
        soort_dobbelsteen = 6
        aantal_dobbelstenen = 1
    } else if (soort_dobbelsteen == 6) {
        soort_dobbelsteen = 8
        aantal_dobbelstenen = 1
    } else if (soort_dobbelsteen == 8) {
        soort_dobbelsteen = 10
        aantal_dobbelstenen = 1
    } else if (soort_dobbelsteen == 10) {
        soort_dobbelsteen = 12
        aantal_dobbelstenen = 1
    } else if (soort_dobbelsteen == 12) {
        soort_dobbelsteen = 20
        aantal_dobbelstenen = 1
    } else if (soort_dobbelsteen == 20) {
        soort_dobbelsteen = 100
        aantal_dobbelstenen = 1
    } else if (soort_dobbelsteen == 100) {
        soort_dobbelsteen = 2
        aantal_dobbelstenen = 1
    } else {
    	
    }
    basic.showString("soort")
    basic.showString("" + (soort_dobbelsteen))
    basic.showString("aantal")
    basic.showString("" + (aantal_dobbelstenen))
})
input.onButtonPressed(Button.B, function () {
    if (aantal_dobbelstenen == 1) {
    	
    } else {
        aantal_dobbelstenen += -1
    }
    basic.showString("aantal")
    basic.showString("" + (aantal_dobbelstenen))
})
let rol_resulaat = 0
let aantal_dobbelstenen = 0
let soort_dobbelsteen = 0
soort_dobbelsteen = 6
aantal_dobbelstenen = 1
rol_resulaat = 1
basic.forever(function () {
    basic.showString("" + (rol_resulaat))
})
