$(document).ready(function(){
    'use strict';       //더 엄격한 문법을 따른다.
    paper.install(window);  //전역 스코프에 Paper.js 를 설치
    paper.setup(document.getElementById('mainCanvas')); //Paper.js를 캔버스에 연결하고 Paper.js가 그림을 그릴 수 있도록 준비

    /* 꽉 채우는 원들 그리기
    var c;
    for(var x=25; x<400; x+=50){
        for(var y=25; y<400; y+=50){
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'red';
        }
    }
    */

    var tool = new Tool();

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    tool.onMouseDown = function(event){
        
        var a = Shape.Circle(event.point, 20);
        a.fillColor = 'green';
        
    }

    paper.view.draw();
});