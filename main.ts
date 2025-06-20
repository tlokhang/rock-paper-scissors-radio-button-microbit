function DISPLAY (num: number) {
    if (num == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            `)
    } else if (num == 2) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            # # # # #
            . # # # .
            `)
    } else if (num == 5) {
        basic.showLeds(`
            # . # . #
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(2000)
}
input.onButtonPressed(Button.A, function () {
    radio.sendValue("other", 0)
    self = 0
    DISPLAY(self)
    basic.showIcon(IconNames.Yes)
})
function win () {
    DISPLAY(other)
    basic.showIcon(IconNames.Happy)
    self = 99
    other = 99
    basic.pause(100)
}
function lose () {
    DISPLAY(other)
    basic.showIcon(IconNames.Sad)
    self = 99
    other = 99
    basic.pause(100)
}
input.onGesture(Gesture.Shake, function () {
    if (self == 99 || other == 99) {
        not_ready()
    } else if (self == other) {
        draw()
    } else if (self == 5 && other == 0) {
        win()
    } else if (self == 5 && other == 2) {
        lose()
    } else if (self == 2 && other == 0) {
        lose()
    } else if (self == 2 && other == 5) {
        win()
    } else if (self == 0 && other == 5) {
        lose()
    } else if (self == 0 && other == 2) {
        win()
    } else {
        not_ready()
    }
})
function draw () {
    basic.showIcon(IconNames.Asleep)
    self = 99
    other = 99
    basic.pause(100)
}
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("other", 5)
    self = 5
    DISPLAY(self)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("other", 2)
    self = 2
    DISPLAY(self)
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedValue(function (name, value) {
    other = value
})
function not_ready () {
    basic.showIcon(IconNames.No)
    basic.pause(100)
}
let other = 0
let self = 0
radio.setGroup(1)
self = 99
other = 99
