sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(0, 150), randint(0, 120))
    music.baDing.play()
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
mySprite2.setPosition(randint(0, 150), randint(0, 120))
let mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 f f 5 5 5 5 5 5 f f 5 5 f 
    f 5 5 f f 5 5 5 5 5 5 f f 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 f 5 5 5 5 5 5 5 5 f 5 5 f 
    f 5 5 5 f 5 5 5 5 5 5 f 5 5 5 f 
    f 5 5 5 5 f f f f f f 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite)
music.setVolume(10)
