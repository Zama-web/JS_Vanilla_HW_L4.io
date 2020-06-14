/*
    Задание №4 

    Необходимо реализовать интерфейс, который позволяет в input поле вставлять координаты в json формате и отрисовывать график в canvas элементе. 

    Должна быть возможность двигать график по нажатию на кнопки

*/

let cvsElem             = document.getElementById('cvs');
cvsElem.width           = '600';
cvsElem.height          = '300';
cvsElem.style.boxShadow = '0 0 20px white';

let ctx = cvsElem.getContext('2d');

let data = [
    {
        x: 10,
        y: 20
    },
    {
        x: 40,
        y: 20
    },
    {
        x: 10,
        y: 60
    },
    {
        x: 40,
        y: 60
    },
    {
        x: 50,
        y: 20
    },
    {
        x: 60,
        y: 60
    },

    {
        x: 40,
        y: 40
    },
    {
        x: 60,
        y: 40
    },
    {
        x: 70,
        y: 60
    },

    {
        x: 80,
        y: 20
    },
    {
        x: 85,
        y: 40
    },
    {
        x: 90,
        y: 20
    },
    {
        x: 100,
        y: 60
    },
    {
        x: 110,
        y: 20
    },
    {
        x: 120,
        y: 60
    },
    {
        x: 100,
        y: 40
    },
    {
        x: 120,
        y: 40
    },

];

let position = {
    x: 0,
    y: 0
}

function draw(data){
    ctx.clearRect(0, 0, cvsElem.width, cvsElem.height);
    
    // data.sort((p1, p2)=>p1.x-p2.x); // Сортирурем "х" кординату;

    ctx.beginPath();
        for (let point of data) {
            ctx.lineTo(position.x+point.x, position.y+point.y);
        }
    ctx.stroke();
}

draw(data);

let step_ = 10;

window.addEventListener('keydown', function(event) {
    if (event.keyCode == 38) {
        if (position.y-step_ >= 0) {
            position.y -= step_;
        }else{
            position.y = 0
        }
        position.y -=step_;
    }
    else if (event.keyCode == 40) {
        if (position.y+step_ <= cvsElem.height- 70) {
            position.y += step_;
        }else{
            position.y = cvsElem.height- 70
        }
        position.y +=step_;
    }
    else if (event.keyCode == 37) {
        if (position.x-step_ >= 0) {
            position.x -= step_;
        }else{
            position.x = 0
        }
        position.x -=step_;
    }
    else if (event.keyCode == 39) {
        if (position.x+step_ <= cvsElem.width- 130) {
            position.x += step_;
        }else{
            position.x = cvsElem.width - 130
        }
        position.x +=step_;
    }
    draw(data);
}) 

let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let result  = document.getElementById('result');
    let curText = document.getElementById('tx').value;
        console.log(curText); // Вывод данных с textarea в консоль;

    let getTextJsonOb = JSON.parse(curText); // преоброзования строки в объект;
        console.log(getTextJsonOb); // вывод преобрзованного объекта в консоль;
    
    result.innerHTML = `Строка ${JSON.stringify(getTextJsonOb)}`; // преоброзавал в строку и вывели результат в result;
})

/* формат ввода в textarea

    [{"x": 150, "y": 150}]

*/