import Phaser from 'phaser'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
}

let game = new Phaser.Game(config)


function preload() {
  this.load.spritesheet('diamonds', 'assets/diamonds32x24x5.png', {frameWidth: 32, frameHeight: 24})
}
let group;
let tween;
let circle;
let geomPoint;
let center = {x: 400, y: 300};
let container;
let rotateSpeed = 0.02;
let x = 0;
let y = 0;

let move = 0
function create() {
  // this.add.sprite(center.x, center.y, 'diamonds', 1)
  // container = this.add.container(600, 300)
  // const text =  this.add.text(-25, -50, 'Phaser')
  // const diamond1 = this.add.sprite(0, 0, 'diamonds', 1);
  //       diamond1.setScale(2)

  //       const diamond2 = this.add.sprite(15, 0, 'diamonds', 2);
  //       diamond2.setScale(2)

  //       const diamond3 = this.add.sprite(-15, 0, 'diamonds', 3);
  //       diamond3.setScale(2)

  //       container.add([diamond1, diamond2, diamond3, text])
  // group = this.add.group({
  //   key: 'diamonds',
  //   frame: [0,1,2,3,4],
  //   frameQuantity: 15,
  //   // active: false,
  // })
  // Phaser.Actions.GridAlign(group.getChildren(), {
  //   width: 7,
  //   height: 100,
  //   cellWidth: 32,
  //   cellHeight: 32,
  //   x: 50,
  //   y: 50,
  // })

  // Phaser.Actions.AlignTo(group.getChildren(), Phaser.Display.Align.LEFT_CENTER, 100, 100)

  // circle = new Phaser.Geom.Circle(400, 300, 220)
  // group = this.add.group({key: 'diamonds', frame: [0,2,4], repeat: 1})
  // Phaser.Actions.PlaceOnCircle(group.getChildren(), circle);
  // tween = this.tweens.addCounter({
  //   from: 200,
  //   to: 100,
  //   duration: 3000,
  //   delay: 2000,
  //   ease: 'Sine.easeInOut',
  //   repeat: -1,
  //   yoyo: true
  // })
  // group = this.add.group()
  // for(let i = 0; i < 256; i++) {
  //   group.create(Phaser.Math.Between(200, 600), Phaser.Math.Between(100, 500), 'diamonds', Phaser.Math.Between(0, 4))
  // }
  // geomPoint = new Phaser.Geom.Point(400, 300)
  // this.input.on('pointermove', function(pointer) {
  //   geomPoint.setTo(pointer.x, pointer.y)
  // })
  // this.input.on('pointerdown', function() {
  //   if (rotateSpeed > 0) {
  //       rotateSpeed = 0
  //   } else {
  //       rotateSpeed = 0.02
  //   }
  // });
  group = this.add.group({key: 'diamonds', frameQuantity: 128})
  this.input.on('pointermove', function(pointer) {
    this.x = pointer.x;
    this.y = pointer.y
  })
  // Phaser.Actions.SetAlpha(group.getChildren(), 0, 1/50)
}

function update(time, delta) {
  // console.log(time, delta)
  move += delta
  if(move > 6) {
    move = 0
    Phaser.Actions.ShiftPosition(group.getChildren(), x, y)
  }
  // console.log(group.getChildren())
  // Phaser.Actions.RotateAroundDistance([container], center, rotateSpeed, 250)
  // const angleDeg = Math.atan2(container.y - center.y, container.x - center.x) * 180 / Math.PI;
  // container.angle = angleDeg+90
}