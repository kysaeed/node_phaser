import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        // アセットのプリロード
        this.load.setBaseURL('https://labs.phaser.io');
        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create() {
        // 背景を追加
        this.add.image(400, 300, 'sky');

        // パーティクルエミッター
        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        // ロゴを追加
        const logo = this.add.image(400, 100, 'logo');

        // パーティクルの発生源をロゴに設定
        particles.startFollow(logo);

        // ロゴをクリック可能に
        logo.setInteractive();

        // クリックでロゴを回転
        this.tweens.add({
            targets: logo,
            y: 500,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }
}

// Phaserの設定
const config = {
    type: Phaser.AUTO,
    parent: 'app',
    width: 800,
    height: 600,
    scene: MainScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

// ゲームインスタンスを作成
window.game = new Phaser.Game(config);