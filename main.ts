namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.setPosition(30, 25)
    mySprite2.setPosition(100, 25)
})
info.onLifeZero(function () {
    game.over(false)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001050505050505050505050505050502080009000000000000000000000000070800000009000900090000090009000708000900000000000900090900090007080009000900090000000000000000070800000000000900090009000909000708000900090000000000000000000007080000000900090009000900000009070800090000000000000000000900090708000900090909000900090009000907080000000000000009000000000000070800090900090900000009000909000708000000000000000900090000000007080009000900090000000000090900070800000009000000000009000000000704060606060606060606060606060603`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . . . . . . . . . 2 
2 . . . 2 . 2 . 2 . . 2 . 2 . 2 
2 . 2 . . . . . 2 . 2 2 . 2 . 2 
2 . 2 . 2 . 2 . . . . . . . . 2 
2 . . . . . 2 . 2 . 2 . 2 2 . 2 
2 . 2 . 2 . . . . . . . . . . 2 
2 . . . 2 . 2 . 2 . 2 . . . 2 2 
2 . 2 . . . . . . . . . 2 . 2 2 
2 . 2 . 2 2 2 . 2 . 2 . 2 . 2 2 
2 . . . . . . . 2 . . . . . . 2 
2 . 2 2 . 2 2 . . . 2 . 2 2 . 2 
2 . . . . . . . 2 . 2 . . . . 2 
2 . 2 . 2 . 2 . . . . . 2 2 . 2 
2 . . . 2 . . . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
info.setLife(1)
info.setScore(0)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 8 . . . . . . 
. . . . 8 . . . . 8 . . . . . . 
. . . . 8 . . . . 8 . . . . . . 
. . . . 8 8 8 8 8 8 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . 8 8 8 8 8 8 8 . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . 8 . 8 . . . . . . . 
. . . . . 8 . . . 8 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
mySprite2.follow(mySprite)
tiles.placeOnRandomTile(mySprite, myTiles.tile0)
tiles.placeOnRandomTile(mySprite2, myTiles.tile0)
forever(function () {
    info.changeScoreBy(1)
    pause(5000)
})
