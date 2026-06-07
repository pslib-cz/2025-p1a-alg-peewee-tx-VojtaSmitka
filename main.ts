radio.setGroup(25)
let gas: number = 0
const opakovani: number = 5
let hodnota: number

let gearIndex: number = 1
const gear: number[] = [-30, 40]

basic.showString(`${gearIndex}`)

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        gas = gear[gearIndex]
    }
    else if (input.buttonIsPressed(Button.B)) {
        if (gearIndex < gear.length - 1) {
            gearIndex = gearIndex + 1
            basic.showString(`${gearIndex}`)
            basic.pause(200)
        } else {
            gearIndex = 0

            basic.showString(`${gearIndex}`)
            basic.pause(200)
        }
    }
    else {
        gas = 0
    }

    hodnota = 0
    for (let i = 0; i < opakovani; i++) {
        hodnota += input.rotation(Rotation.Roll)
        basic.pause(10)
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
    basic.pause(20)
})