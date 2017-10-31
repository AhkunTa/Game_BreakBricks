/**
 * Created by Administrator on 2017/10/17 0017.
 */
var Scene =function (game) {

    var s={
        game:game,

    };

    //初始化
    var paddle = Paddle(game);
    var ball = Ball(game);
    var blocks = loadLevel(game,1);
    var score =0;

    game.registerAction('a',function(){
        paddle.moveLeft();
    });
    game.registerAction('d',function(){
        paddle.moveRight();
    });
    game.registerAction('f',function(){
        ball.fire();
    });

    s.draw =function () {
        //背景
        game.context.fillStyle = '#555';
        game.context.fillRect(0,0,400,300);
        game.drawImage(paddle);
        game.drawImage(ball);

        //draw blocks
        for(var i=0;i<blocks.length;i++){
            var block = blocks[i];
            if(block.alive){
                game.drawImage(block);
            }
        }
        game.context.fillStyle = '#fff';
        game.context.fillText('Score: '+score,10,280);
    };

    s.update =function () {
        if( window.paused){
            return
        }
        if(ball.y >= 300)
        {
            // game over
            var end = SceneEnd(game);
            game.replaceScene(end);
            // return

        }
        ball.move();
        //判断是否相撞
        if(paddle.collide(ball)){
            ball.rebound();
        }

        //判断 ball和 blocks 相撞
        for(var i=0;i<blocks.length;i++){
            var block = blocks[i];
            if(block.collide(ball)){
                block.kill();
                ball.rebound();
                score +=100 ;
            }
        }
    };

    var enableDrag =false;
    //鼠标移动事件
    game.canvas.addEventListener('mousedown',function (event) {
        var x =event.offsetX;
        var y =event.offsetY;
        if(ball.hasPoint(x,y)){
            enableDrag = true;
        }


    });
    game.canvas.addEventListener('mousemove',function (event) {
        var x =event.offsetX;
        var y =event.offsetY;
        if(enableDrag){
            ball.x = x;
            ball.y = y;
            // log(x,y,'move');
        }

    });
    game.canvas.addEventListener('mouseup',function (event) {
        var x =event.offsetX;
        var y =event.offsetY;
        enableDrag =false;
    });

    return s;
};