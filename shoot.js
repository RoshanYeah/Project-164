AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootPaintballs();
  },
  shootPaintballs: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        var bullet = document.createElement("a-entity");

        // var colours = ["red","blue","purple","green"]
        // var pick = Math.random(colours)

        var colors = parseInt(Math.random()*8+1)

        bullet.setAttribute("material", {
          opacity: 1,
          transparent: true,
          src: "./images/paint-splash-0"+colors+".png"
        })

        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.1,
        });

        bullet.setAttribute("scale",{
          x:2.5,
          y:2.5,
          z:2.5
        })

        // bullet.setAttribute("material", "color", pick);

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x+0.4,
          y: pos.y-0.1,
          z: pos.z,
        });

        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js Vector
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        //set the velocity and it's direction
        bullet.setAttribute("velocity", direction.multiplyScalar(-10));

        var scene = document.querySelector("#scene");

        //set the bullet as the dynamic entity
        bullet.setAttribute("dynamic-body", {
          shape: "sphere",
          mass: "0",
        });

        //add the collide event listener to the bullet
        bullet.addEventListener("collide", this.removeBullet);

        scene.appendChild(bullet);
      }
    });
  },
  removeBullet: function (e) {
    //bullet element
    var element = e.detail.target.el;
    //element which is hit
    var elementHit = e.detail.body.el;
    if (elementHit.id.includes("box") || elementHit.id.includes("plane")) {
      //remove event listener
      element.removeEventListener("collide", this.removeBullet);
      //remove the bullets from the scene
      var scene = document.querySelector("#scene");
      var colors = parseInt(Math.random()*8+1)
      elementHit.setAttribute("material", {
        src: "./images/paint-splash-0"+colors+".png",
      })
      scene.removeChild(element);
    }
  },
});

