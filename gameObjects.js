AFRAME.registerComponent("wall",{
  schema:{
    height:{type:'number',default:3},
    width:{type:'number',default:7},
  },
  init: function () {

    const wallPositions = [  
      [8.24437, 1.25, -16.52437],
      [10.21506, 1.25, -5],
      [-11.38094, 1.25, -20.66105],
      [-22.38153, 1.25, -14.23461],
      [-2.32225, 1.25, -17.62905],
      [11.94046, 1.25, -13.53126],
      [-18.75634, 1.25, -5],
      [-8.81825, 1.25, -5],
      [0.73118, 1.25, -5],
      [19.55681, 1.25, -5.44811],
      [-5.9715, 3.07167, -36.51578],
      [11.96826, 1.25, -23.76773],
      [-5.67949, 1.25, -25.52097],
      [-16.3989, 1.25, -14.04311],
      [-22.07391, 1.25, -26.45369],
      [13.32084, 6.4801, -36.49324],
      [20.94055, 3.2736, -30.76395]
    ];

    const walls = [  
       [0, 45, 0],
      [0, 0, 0],
      [0, -45, 0],
      [0, 80, 0],
      [0, 45, 0],
      [0, -45, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [-70, -90, 0],
      [0, -45, 0],
      [0, 45, 0],
      [0, -45, 0],
      [0, 0, 0],
      [-90, 0, 0],
    ];

    


    for (var i = 0; i < 17; i++) {
      var box = document.createElement("a-entity");

      //Update the position variables values from the array values.
      posX = wallPositions[i[0]] ;
      posY = wallPositions[i[1]];
      posZ = wallPositions[i[2]];

      roX = walls[i[0]]
      roY = walls[i[1]]
      roZ = walls[i[2]]

      position = { x: posX, y: posY, z: posZ };
      rotation = {x: roX, y: roY, z: roZ}
      
      box.setAttribute("id", "plane" + i);
      
      box.setAttribute("position", position);
      box.setAttribute("rotation", rotation)

      box.setAttribute("geometry", {
        primitive: "plane",
        height: this.data.height,
        width: this.data.width,
      });

      box.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(box);
    }
  },
  // createBoxes:function(){
  //   for(i=0;i<=10;i++){
  //     var boxEl = document.createElement("a-entity")

  //     boxEl.setAttribute("id","boxEl"+i)

  //     var posX = Math.random()*30-10
  //     var posY = 1.5
  //     var posZ = Math.random()*-10-5
  //     var ranY = Math.random()*-45+45
  //     boxEl.setAttribute("position",{x:posX,y:posY,z:posZ})

  //     boxEl.setAttribute("rotation",{x:0,y:ranY,z:0})

  //     // boxEl.setAttribute("material",{
  //     //   src:"./images/wall.png"
  //     // })

  //     boxEl.setAttribute("geometry",{
  //       primitive:"plane",
  //       height:this.data.height,
  //       width:this.data.width
  //     })
  //     boxEl.setAttribute("static-body",{})
  //     var scene = document.querySelector("#scene")

  //     scene.appendChild(boxEl)
  //   }
  // }
})