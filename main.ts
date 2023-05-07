let fenyero = 0
basic.forever(function () {
    fenyero = input.lightLevel()
    led.plotBarGraph(
    fenyero,
    255
    )
    serial.writeValue("fenyero", fenyero)
    basic.pause(100)
})
