/**
 * Created by Administrator on 2017/10/18 0018.
 */
var SceneStart =function (game) {

    var s={
        game:game

    };

    game.registerAction('f',function () {

        var s =Scene(game);
        game.replaceScene(s);
    });


    s.draw =function () {
        //背景
        game.context.fillStyle = 'black';
        game.context.fillRect(0,0,400,300);
        game.context.fillStyle = '#fff';
        game.context.fillText('Game Start',150,200);
        game.context.fillText('Press F  Start Game',150,220);
    };

    s.update =function () {

    };

    return s;
};