/**
 * Created by Administrator on 2017/10/16 0016.
 */
var Paddle = function (game){
    var o = game.imageByName('paddle');
    o.speed =15;
    o.x =100;
    o.y =250;

    o.moveLeft = function (){
        if(o.x<0){
            o.x =12;
        }
        o.x -= o.speed;
    };
    o.moveRight = function (){
        if(o.x+o.w > 400){
            o.x =388 -o.w;
        }
        o.x += o.speed;
    };

    var aInb = function (x,x1,x2) {
        return x >=x1 && x<=x2 ;
    };

    o.collide = function (ball){
        var a = o;
        var b = ball;
        if((a.x >= b.x && b.x + b.w >= a.x)||(b.x >= a.x && a.x +a.w >= b.x)){
            if((a.y >= b.y && b.y + b.h >= a.y)||(b.y >= a.y &&  b.y <= a.y +a.h )){
                return true;
            }
        }
        return false;

        // if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)){
        //     if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
        //         return true
        //     }
        // }
        // return false
    };
    return o;
};
