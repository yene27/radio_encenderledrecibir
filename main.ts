radio.onReceivedNumber(function (receivedNumber) {
    pins.digitalWritePin(DigitalPin.P0, receivedNumber)
    basic.showNumber(receivedNumber)
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(13)
