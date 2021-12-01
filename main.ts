basic.forever(function () {
    serial.writeLine("")
    serial.writeNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(500)
})
