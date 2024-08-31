input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . # # #
        . . # # .
        . # # . .
        . # # . .
        # . . . .
        `)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . # . #
        # # # # .
        # # # . .
        # # # # .
        . . # . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(randint(1, 20))
})
input.onButtonPressed(Button.B, function () {
    if (Math.randomBoolean()) {
        basic.showString("Si")
    } else {
        basic.showString("No")
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # . . . #
        # # # # #
        `)
    basic.pause(200)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # . # . #
        . . # . .
        # # # # #
        # . . . #
        `)
    basic.pause(300)
    basic.showIcon(IconNames.Ghost)
    basic.pause(800)
    basic.showIcon(IconNames.Cow)
    basic.pause(1400)
    basic.clearScreen()
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (randint(0, 1) == 0) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
