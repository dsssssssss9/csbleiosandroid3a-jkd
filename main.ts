bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
function Music() {
    music.setBuiltInSpeakerEnabled(false)
    music.setVolume(127)
    if (g_music == 1) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (g_music == 2) {
        SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (g_music == 3) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (g_music == 4) {
        SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (g_music == 13) {
        music.playTone(932, music.beat(BeatFraction.Whole))
    } else if (g_music == 0) {
        music.setVolume(0)
    }
}
function BlueCtrl() {

}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (uartData == "A") {
        g_ctrl = 1
    } else if (uartData == "B") {
        g_ctrl = 2
    } else if (uartData == "C") {
        g_ctrl = 3
    } else if (uartData == "D") {
        g_ctrl = 4
    } else if (uartData == "E") {
        g_ctrl = 5
    } else if (uartData == "F") {
        g_ctrl = 6
    } else if (uartData == "0") {
        g_ctrl = 0
    } else if (uartData == "1") {
        g_music = 1
    } else if (uartData == "2") {
        g_music = 2
    } else if (uartData == "3") {
        g_music = 3
    } else if (uartData == "4") {
        g_music = 4
    } else if (uartData == "5") {
        g_music = 5
    } else if (uartData == "6") {
        g_music = 6
    } else if (uartData == "7") {
        g_music = 7
    } else if (uartData == "8") {
        g_music = 8
    } else if (uartData == "B1") {
        g_music = 9
    } else if (uartData == "B2") {
        g_music = 10
    } else if (uartData == "B3") {
        g_music = 11
    } else if (uartData == "B4") {
        g_music = 12
    } else if (uartData == "B5") {
        g_music = 13
    } else if (uartData == "O") {
        g_music = 0
    } else if (uartData == "G") {
        g_color = 1
    } else if (uartData == "H") {
        g_color = 2
    } else if (uartData == "I") {
        g_color = 3
    } else if (uartData == "J") {
        g_color = 4
    } else if (uartData == "K") {
        g_color = 5
    } else if (uartData == "L") {
        g_color = 6
    } else if (uartData == "M") {
        g_color = 0
    } else if (uartData == "N") {
        g_RGBMode = 1
    } else if (uartData == "P") {
        g_RGBMode = 2
    } else if (uartData == "Q") {
        g_RGBMode = 3
    } else if (uartData == "R") {
        g_RGBMode = 4
    } else if (uartData == "W") {
        g_RGBMode = 0
    } else if (uartData == "S") {
        g_mode = 1
    } else if (uartData == "T") {
        g_mode = 2
    } else if (uartData == "U") {
        g_mode = 3
    } else if (uartData == "V") {
        g_mode = 0
    }
})
let SerialData = ""
let uartData = ""
let g_color = 0
let g_ctrl = 0
let g_mode = 0
let g_music = 0
let g_RGBMode = 0
SuperBit.MotorStopAll()
basic.showIcon(IconNames.Duck)
lcdDisplay.lcdInitIIC()
lcdDisplay.lcdClearAll()
bluetooth.startUartService()
g_color = 0
g_ctrl = 0
g_mode = 0
g_music = 0
g_RGBMode = 0
SuperBit.RGB_Program()
SuperBit.MotorStopAll()
basic.showString("S")
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
basic.forever(function () {
    BlueCtrl()
    Music()
})
// LCD Screen Wiring Colour Code
// 
// Red     ----->     3V
// 
// Black   ----->     GND
// 
// Green   ----->     SCL
// 
// Blue    ----->     SDA
basic.forever(function () {
    SerialData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (SerialData == "A") {
        lcdDisplay.lcdSetBgIamge("fruit.png")
        SuperBit.MotorRunDual(SuperBit.enMotors.M1, 199, SuperBit.enMotors.M2, 199)

    } else if (SerialData == "B") {
        lcdDisplay.lcdSetBgIamge("building.png")
        SuperBit.MotorStopAll()
    }
})



