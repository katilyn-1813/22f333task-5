let f = 0
let h = 0
input.onButtonPressed(Button.A, function () {
    f = 0
    h = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(f, h)
            basic.pause(200)
            f += 1
        }
        f = 0
        h += 1
    }
})
basic.forever(function () {
	
})
