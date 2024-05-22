import Phaser from 'phaser'
import Play from './Scenes/Play'

const config = {
    name: 'app',
    type:Phaser.AUTO,
    width:800,
    height:800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [Play]
}

new Phaser.Game(config)