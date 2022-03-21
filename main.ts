input.onButtonPressed(Button.A, function () {
    nUMBER += 0.5
    basic.showNumber(nUMBER)
})
input.onGesture(Gesture.TiltLeft, function () {
    SPRITE.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    nUMBER += -0.5
    basic.showNumber(nUMBER)
})
input.onGesture(Gesture.TiltRight, function () {
    SPRITE.change(LedSpriteProperty.X, 1)
})
let SPRITE: game.LedSprite = null
let nUMBER = 0
basic.showIcon(IconNames.No)
nUMBER = 4
SPRITE = game.createSprite(1, 4)
basic.forever(function () {
	
})
