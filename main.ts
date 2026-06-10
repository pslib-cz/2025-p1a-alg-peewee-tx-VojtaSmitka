radio.setGroup(25)

let gas: number = 0
const opakovani: number = 3
let hodnota: number

let gearIndex: number = 2
const gear: number[] = [40, 60, 100]

basic.showNumber(gearIndex)

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        gas = gear[gearIndex]
    }
    else if (input.buttonIsPressed(Button.B)) {
        gas = -gear[gearIndex]
    }
    else if (input.pinIsPressed(TouchPin.P0)) {
        gearIndex = 0
        basic.showNumber(gearIndex)
    }
    else if (input.pinIsPressed(TouchPin.P1)) {
        gearIndex = 1
        basic.showNumber(gearIndex)
    }
    else if (input.pinIsPressed(TouchPin.P2)) {
        gearIndex = 2
        basic.showNumber(gearIndex)
    }
    else {
        gas = 0
    }

    hodnota = 0
    for (let i = 0; i < opakovani; i++) {
        hodnota += input.rotation(Rotation.Roll)
        basic.pause(5)
    }

    hodnota = hodnota / opakovani

    if (hodnota > 100) {
        hodnota = 100
    }
    else if (hodnota < -100) {
        hodnota = -100
    }

    radio.sendValue("forward", gas)
    radio.sendValue("steer", hodnota)
    basic.pause(10)
})
