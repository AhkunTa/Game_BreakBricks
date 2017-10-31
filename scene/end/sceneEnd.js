
var SceneEnd =function (game) {

    var s={
        game:game,

    };
    game.registerAction('f',function () {

        var s = SceneStart(game);
        game.replaceScene(s);
    });

    s.draw =function () {
        //背景
        game.context.fillStyle = 'black';
        game.context.fillRect(0,0,400,300);
        game.context.fillStyle = '#fff';
        game.context.fillText('Game Over',150,200);
        game.context.fillText('Press F Restart',150,220);
    };

    s.update =function () {

    };

    return s;
};