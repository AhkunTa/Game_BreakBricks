/**
 * Created by Administrator on 2017/10/16 0016.
 */
var Ggame = function(fps,images,runCallback){

    var g ={
        scene: null,
        actions: {},
        keydowns:{},
        images:{}
    };


    var canvas = document.querySelector('#id-canvas');
    var context =canvas.getContext('2d');

    g.canvas =canvas;
    g.context =context;

    g.drawImage = function (gImage) {

        g.context.drawImage(gImage.image, gImage.x, gImage.y);
    };


    window.addEventListener('keydown',function (event) {
        g.keydowns[event.key] =true;
    });

    window.addEventListener('keyup',function (event) {
        g.keydowns[event.key] =false;
    });

    //update
    g.update =function () {
        g.scene.update();
    };
    g.draw =function () {
        g.scene.draw();
    };

    g.registerAction =function (key,callback) {
        g.actions[key]=callback;
    };

    window.fps =20;


    var runloop = function (){


        var actions =Object.keys(g.actions);
        for (var i=0;i<actions.length;i++){
            var key =actions [i];
            if(g.keydowns[key]){
                //按键按下 调用注册的action
                g.actions[key]();
            }

        }
        // update
        g.update();
        //clear canvas
        context.clearRect(0,0,canvas.width,canvas.height);
        //draw
        g.draw();

        setTimeout(function () {
            runloop();
        },1000/window.fps)

    };

    var loads =[];
    //预先载入图片
    var names = Object.keys(images);
    for (var i=0;i<names.length;i++){
        let name =names[i];
        var path = images[name];
        let img = new Image();
        img.src =path;
        img.onload = function (){
            g.images[name] = img;
            //图片载入成功之后调用run
            loads.push(1);
            // console.log('load images');
            // log('load images',loads.length , names.length);
            if(loads.length == names.length){
                g.start();
            }
        }
    }

    g.imageByName = function (name){
        var img =g.images[name];
        var image ={
          w:img.width,
          h:img.height,
          image:img
      };
        return image;

    };


    g.runWithScene =function (scene) {
        g.scene = scene;
        setTimeout(function(){
            runloop();
        },1000/fps);
    };

    g.replaceScene = function (scene){
        g.scene =scene ;
    };
    
    g.start = function (){
        runCallback(g);

    };

    return g;
};