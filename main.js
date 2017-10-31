/**
 * Created by Administrator on 2017/10/16 0016.
 */
// var log =console.log.bind(console);

var loadLevel =function (game,n){
    n=n-1;
    var level = levels[n];
    var blocks =[];
    for(var i=0;i<level.length;i++){
        var p =level[i];
        var b =Block(game,p);
        blocks.push(b);
    }
    return blocks;
};



var enableMode = function (game,enable){
    if(!enable){
        return
    }
    window.paused =false;
    window.addEventListener('keydown',function (event) {
        var k=event.key;
        if(k == 'p'){
            paused =!paused;
        }else if('1234567'.includes(k)){
            blocks = loadLevel(game,Number(k));
        }
    });
    //速度控制
    document.querySelector('#id-input-speed').addEventListener('input',function (event) {
        var input =event.target;

        window.fps=Number(input.value);
    })
};

var main = function () {

    var images = {
        ball: 'image/ball.png',
        block: 'image/block.png',
        paddle: 'image/paddle.png'
    };

    // var scene =Scene(game);
    var game = Ggame(30,images,function (g) {
        var s= new SceneStart(g);
        // var s = Scene(g);
        g.runWithScene(s);

    });
    enableMode(game,true);

};
main();
