input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    qwiicjoystick.clearButtonStatus(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20))
})
radio.setGroup(22)
qwiicjoystick.beimStart(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20))
loops.everyInterval(500, function () {
    radio.sendNumber(qwiicjoystick.readJoystick(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20)))
})
