#### this.load.spritesheet
- 表示固定大小的表单，图片中每个图片都具有相同的大小，并且您是使用数字而不是名称来引用这些帧的。

#### Phaser.Actions.GridAlign 
- 网格
- 接受一个gameObject的数组对象。和配置。
```
{
    width: 7, // 放置几列
    height: 100,// 放置几行
    cellWidth: 32,// 每个cell的宽高
    cellHeight: 32,
    x: 50, // 距离左上角的距离
    y: 50,
  }
```

#### Phaser.Geom
- 生成图形，椭圆，圆形，点，三角形等等


#### group.create
- 创建一个新的game object 并且添加它到这个group里面，除非这个group已经满了


#### Phaser.Actions.RotateAroundDistance 这个方式不太理解

#### this.add.container(600, 300)
- 创建一个新的container game object并且添加到scene中

#### Phaser.Actions.SetAlpha(group.getChildren(), 0, 1/50)
- 用第二个参数(value)去，设置game object元素的alpha值. 第三个参数为步长