input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (true) {
        music.baDing.play()
    }
})
forever(function () {
    light.showAnimation(light.rainbowAnimation, 500)
})
