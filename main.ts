input.onButtonPressed(Button.AB, function () {
    if (input.lightLevel() > 200) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
