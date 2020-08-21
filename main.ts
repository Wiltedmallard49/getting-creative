sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.setPosition(randint(0, 150), randint(0, 110))
    counter = counter - 1
    info.startCountdown(counter)
    info.changeScoreBy(1)
    if (info.score() >= 100) {
        game.over(true, effects.confetti)
    }
})
let counter = 0
let mySprite2: Sprite = null
music.playMelody("C G C D E G E D ", 120)
game.splash("Burger Chase")
scene.setBackgroundColor(7)
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
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite)
mySprite2.setPosition(randint(0, 150), randint(0, 120))
scene.setBackgroundColor(7)
effects.clouds.startScreenEffect()
info.startCountdown(120)
counter = 105
music.setVolume(10)
