#### Phaser.Game 配置type
- 给游戏使用的渲染环境
- 属性值可以是Phaser.CANVAS, Phaser.WEBGL, Phaser.AUTO.
- Phaser.AUTO为推荐值，表示自动尝试使用WebGL.如果浏览器设备不支持，它将回退为Canvas.


#### scene.preload 用于加载资源
- 他将调用Phaser的Loader(加载器)，Phaser启动时会自动找到这个函数，并加载里面定义好的所有资源。

#### setOrigin 设置原点
- setOrigin(0,0) 
- this.add.image(0, 0, 'sky').setOrigin(0, 0)把图像的绘制定位点重置在左上角。

#### 顺序
- 游戏对象的显示顺序与你生成它们的顺序一致。