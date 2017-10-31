/**
 * Created by Administrator on 2017/10/18 0018.
 */


class GScene{
    constructor(game){
        this.game =game ;
        
    }
    draw(){

    }
    update(){

    }

}

class SceneStart extends  GScene{
    constructor(game){
        super(game);

        game.registerAction('f',function () {

            var s =Scene(game);
            game.replaceScene(s);
        });
    }
    draw(){
        this.game.context.fillStyle = 'black';
        this.game.context.fillRect(0,0,400,300);
        this.game.context.fillStyle = '#fff';
        this.game.context.fillText('Game Start',150,200);
        this.game.context.fillText('Press F  Start Game.',150,220);
    }

}




class SceneEnd extends  GScene{
    constructor(game){
        super(game);
        game.registerAction('f',function () {
            var s =new SceneStart(game);
            game.replaceScene(s);
        });
    }
    
    draw(){
        this.game.context.fillStyle = 'black';
        this.game.context.fillRect(0,0,400,300);
        this.game.context.fillStyle = '#fff';
        this.game.context.fillText('Game Over',150,200);
        this.game.context.fillText('Press F  Restart Game.',150,220);
    }

}