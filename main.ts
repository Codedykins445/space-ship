controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mySprite2.setPosition(79, 61)
    mySprite2.setVelocity(50, 0)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    meteor.destroy()
    mySprite2.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    meteor.destroy()
})
let projectile: Sprite = null
let meteor: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . 2 1 . . . . . . . . . . 
    . . . . 2 1 1 1 . . . . . . . . 
    . . . . 2 1 1 1 . . . . . . . . 
    . . . . 2 2 1 1 . . . . . . . . 
    . . . . . 2 1 1 . . . . . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 9 . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 9 . . 
    . . . . . 2 1 1 . . . . . . . . 
    . . . . 2 2 1 1 . . . . . . . . 
    . . . . 2 1 1 1 . . . . . . . . 
    . . . . 2 1 1 1 . . . . . . . . 
    . . . . 2 1 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
info.setLife(3)
game.onUpdate(function () {
    if (Math.percentChance(1)) {
        meteor = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        meteor.setVelocity(randint(-20, -80), randint(-5, 5))
        meteor.setPosition(160, randint(0, 120))
    }
})
game.onUpdate(function () {
    if (Math.percentChance(10)) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(-20, -100), 0)
        projectile.setPosition(160, randint(0, 120))
    }
})
