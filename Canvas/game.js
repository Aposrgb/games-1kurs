let canvas=document.getElementById("game");
let ctx = canvas.getContext('2d');
let gobimg= document.getElementById("goblins.img");
let palmimg= document.getElementById("palm.img");
let boatimg= document.getElementById("boat.img");
let grd= ctx.createLinearGradient(0,0,300,0);
let c = 0;
let sprites= document.getElementById("sprites.png");
let npc1= document.getElementById("npc1.img");
let archer= document.getElementById("archer.img");
let fighter= document.getElementById("fight.img");
let person= document.getElementById("person.png");
let skill= document.getElementById("skills.img");
let k =0;
let dvigX=50, dvigY=32;
let animW = 15;
let animS = 15;
let animD = 15;
let animA = 15;
let animF = 82;
let butt=0;
let nn=0;
let aa =0;
let aaa =0;
let aaaa =0;
let aaaaa =0;
let sqs=0;
let timersa;
let animag=10;
let hg=0;
let skl=0;
let pointkill=0;
let points=document.getElementById("points");
pointkill=localStorage.getItem("points");
if(pointkill==null){
    pointkill=0;
    points.innerText="Очков == " + pointkill;
}
else{
    points.innerText="Прошлые очки == " + pointkill;
}

grd.addColorStop(0,"#c75fe1");
grd.addColorStop(1,"white");
ctx.drawImage(gobimg, 0,0,300, 150);
ctx.fillRect(87, 37, 141, 36); 
ctx.fillStyle = 'green';
ctx.fillRect(90, 40, 135, 30);    
ctx.fillStyle = 'snow';
ctx.font="32px fantasy";
ctx.fillText("Играть", 115, 67);
let event =function mousegame(e){
    if (c==0){
        if(e.pageX >= 465 && e.pageX <=1165 && e.pageY<=455 && e.pageY>=230){
            ctx.fillStyle= 'black';
            ctx.fillRect(83, 34, 151, 44); 
            ctx.fillStyle = 'green';
            ctx.fillRect(86, 38, 145, 36);    
            ctx.fillStyle = grd;
            ctx.font="32px fantasy";
            ctx.fillText("Играть", 115, 67);   
        }
        else{
            ctx.clearRect(0,0,250,380);
            ctx.drawImage(gobimg, 0,0,300, 150);
            ctx.fillStyle= 'black';
            ctx.fillRect(87, 37, 141, 36); 
            ctx.fillStyle = 'green';
            ctx.fillRect(90, 40, 135, 30);    
            ctx.fillStyle = 'snow';
            ctx.font="32px fantasy";
            ctx.fillText("Играть", 115, 67);
        }
    }
    else{
        return;
    }

};
canvas.addEventListener('mousemove', event);
let row=0;
let column=0 ;
let v =0;
canvas.addEventListener('click', function (e){
    if(v>=1){
        return;
    }
    if(e.pageX >= 465 && e.pageX <=1165){
        if(e.pageY<=455 && e.pageY>=230){
            c++;
            ctx.clearRect(0,0,1000,400);
            ground();
            v++;     
        }
    }
});
let o=0;
let sprX=275,sprY=60*21+30;
let timeras;
function timer(){
    return setInterval(waves, 500);
}
let map = new Array();
map = [2,3,4,5,2,7,8,4,4,5,6];
function ground (){
    for(column=1;column<11;column++){
        for(row=0;row<11;row++){
            ctx.drawImage(sprites,map[column]*32,4*32,32,32,column*28+4,row*32,32,32);
        }   
    }
    ctx.drawImage(palmimg, 230,-5,100, 50);
    for(let i=0;i<5;i++){
        ctx.drawImage(sprites,rand(54,57)*32,22*32,32,32,0,i*32,32,32);
    }
    ctx.drawImage(boatimg, 5,-5,100, 50);
    timer();
    monstr();
    canvas.removeEventListener('mousemove', event);
    ctx.drawImage(person,339,60*21+30,30,60,50,32,30,60);
    setTimeout(start,1000);
}
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let r=0;
let timerid;
function start(){
    if(sprX<=0){
        o-=101000;
        message1();
        canvas.addEventListener("click", function (e){
            if(t==0){
                if(r<3){ message1();r++;}
                if(r==3){
                for(column=1;column<11;column++){
                    for(row=0;row<11;row++){
                        ctx.drawImage(sprites,map[column]*32,4*32,32,32,column*28+4,row*32,32,32);
                    }   
                }
                ctx.drawImage(palmimg, 230,-5,100, 50);
                ctx.drawImage(boatimg, 5,-5,100, 50);
                monstr();
                ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
                healthp();
                o+=101000;
            }   
            }
        });
        o++;
        return;
    }
    terrarian();
    ctx.drawImage(palmimg, 230,-5,100, 50);
    ctx.drawImage(boatimg, 5,-5,100, 50);
    monstr();
    ctx.drawImage(person,sprX,sprY,30,60,50,32,30,60);
    sprX-=65;
    setTimeout(start,150);
}
function healthp(){
    return setInterval(hp,0);
}
let hlp=100;
let q =0;
let magics=10;
let grad=ctx.createLinearGradient(33,15,100,2); 
grad.addColorStop(0,'white');
grad.addColorStop(1,'red');
function hp(){
    if(sword==1){
        ctx.strokeStyle="snow";
        ctx.beginPath();
        ctx.moveTo(90, 132);
        ctx.lineTo(140, 132);
        ctx.lineTo(140, 155);
        ctx.lineTo(90, 155);
        ctx.lineTo(90, 132);
        ctx.fillStyle="black";
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle="black";
        ctx.fillStyle=grad;
        ctx.font="18px fantastic";
        ctx.fillText(hlp,90, 147);
        ctx.font="11px fantastic";
        ctx.fillStyle="snow";
        ctx.fillText("HP",117, 147);
        if(hlp>0 && hlp<100){
            setTimeout(heltpn, 30000);
        }
        if(kk==11){
            ctx.beginPath();
            ctx.strokeStyle="snow";
            ctx.fillStyle="black";
            ctx.moveTo(140, 132);
            ctx.lineTo(170, 132);
            ctx.lineTo(170, 155);
            ctx.lineTo(140, 155);
            ctx.fill();
            ctx.stroke();
            ctx.drawImage(skill,0,0,400,400,140,132,30,30);
            if(skl==1){
                timerskil=setInterval(timeskill,1000);
                skl=0;
            }
        } 
        if(hlp<=0){
            location.reload();
        }
    }
}
let timerskil;
function timskill(){
    terrarian();
    if(nn==1){
        path();
    };
    if(hlporc>0 && nn==1 && dv<=54){
        if(dviggY>=dvigY-10 && dviggY<=dvigY+10 && animd>15){
            if(pp==0){
                dvx=dviggX;
                dvy=dviggY+4;
                if(temps==1){
                    ctx.drawImage(archer,animd,60*18+15,60,60,dviggX,dviggY,60,60);
                }
                else{
                    ctx.drawImage(archer,animd,60*20+25,60,60,dviggX,dviggY,60,60);
                }
            }
            
        }
        else{
            ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
        }
        ctx.fillStyle="red";
        ctx.fillText(hlporc, dviggX+12, dviggY+8);
        ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
    }
    if(w==1 && animag==10){
        ctx.drawImage(person,animW,60*8+45,30,60,dvigX,dvigY,30,60);
    }
    else if(a==1 && animag==10){
        ctx.drawImage(person,animA,60*9+45,30,60,dvigX,dvigY,30,60);
    }
    else if(s==1 && animag==10){
        ctx.drawImage(person,animS,60*10+45,30,60,dvigX,dvigY,30,60);
    }
    else if(d==1 && animag==10){
        ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
    }
    if(animag>10){
        if(w==1){
            ctx.drawImage(person,animag,5,50,60,dvigX-5,dvigY-5,50,60);
        }   
        else{
            ctx.drawImage(person,animag,60*2+20,50,60,dvigX-4,dvigY+4,50,60);
        }
    }
    if(hlporc>0 && nn==1){
        ctx.fillStyle="red";
        ctx.fillText(hlporc, dviggX+12, dviggY+8);
    } 
    if(magics>0){
        ctx.fillStyle="snow";
        ctx.fillText(magics,150,125);
    }
}
function timeskill(){
    terrarian();
    if(nn==1){
        path();
    };
    if(w==1 && animag==10){
        ctx.drawImage(person,animW,60*8+45,30,60,dvigX,dvigY,30,60);
    }
    else if(a==1 && animag==10){
        ctx.drawImage(person,animA,60*9+45,30,60,dvigX,dvigY,30,60);
    }
    else if(s==1 && animag==10){
        ctx.drawImage(person,animS,60*10+45,30,60,dvigX,dvigY,30,60);
    }
    else if(d==1 && animag==10){
        ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
    }
    if(animag>10){
        if(w==1){
            ctx.drawImage(person,animag,5,50,60,dvigX-5,dvigY-5,50,60);
        }   
        else{
            ctx.drawImage(person,animag,60*2+20,50,60,dvigX-4,dvigY+4,50,60);
        }
    }
    if(hlporc>0 && nn==1 && dv<=54){
        if(dviggY>=dvigY-10 && dviggY<=dvigY+10 && animd>15){
            if(pp==0){
                dvx=dviggX;
                dvy=dviggY+4;
                if(temps==1){
                    ctx.drawImage(archer,animd,60*18+15,60,60,dviggX,dviggY,60,60);
                }
                else{
                    ctx.drawImage(archer,animd,60*20+25,60,60,dviggX,dviggY,60,60);
                }
            }
            
        }
        else{
            ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
        }
        ctx.fillStyle="red";
        ctx.fillText(hlporc, dviggX+12, dviggY+8);
        ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
    }
    if(magics>0){
        ctx.fillStyle="snow";
        ctx.fillText(magics,150,125);
        magics--;   
        sqs=1;
    }
    else if(magics==0){
        clearInterval(timerskil);
        sqs=0;
    }
}
function heltpn(){
    if(hlp<100){
        hlp++;
        hp();
    }
}
function message1(){
    ctx.fillStyle="yellow";
    ctx.font="15px fantastic";
    ctx.fillText("Для продолжения нажмите на мышь...",35,145);
    if(q==0){
        ctx.font="10px fantastic";
        ctx.strokeStyle = 'snow'; 
        ctx.beginPath();
        ctx.moveTo(85, 38);
        ctx.lineTo(145, 38);
        ctx.lineTo(145, 68);
        ctx.lineTo(90, 68);
        ctx.lineTo(83, 73);
        ctx.lineTo(85, 38);
        ctx.fillStyle="white";
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle="black";
        ctx.fillText("Где я?",90,50);
        q++;
    }
    else if(q==1){
        for(column=1;column<11;column++){
            for(row=0;row<11;row++){
                ctx.drawImage(sprites,map[column]*32,4*32,32,32,column*28+4,row*32,32,32);
            }   
        }
        ctx.font="10px fantastic";
        ctx.drawImage(palmimg, 230,-5,100, 50);
        ctx.drawImage(boatimg, 5,-5,100, 50);
        monstr();
        ctx.strokeStyle = 'snow'; 
        ctx.beginPath();
        ctx.moveTo(85, 38);
        ctx.lineTo(145, 38);
        ctx.lineTo(145, 85);
        ctx.lineTo(85, 85);
        ctx.lineTo(80, 60);
        ctx.fillStyle="white";
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle="black";
        ctx.fillText("Похоже",90,50);
        ctx.fillText("меня",90,60);
        ctx.fillText("скинули в",90,70);
        ctx.fillText("воду",90,80);
        ctx.drawImage(person,animA,60*9+45,30,60,dvigX,dvigY,30,60);
        q++;
    }
    else if(q==2){
        for(column=1;column<11;column++){
            for(row=0;row<11;row++){
                ctx.drawImage(sprites,map[column]*32,4*32,32,32,column*28+4,row*32,32,32);
            }   
        }
        ctx.font="10px fantastic";
        ctx.drawImage(palmimg, 230,-5,100, 50);
        ctx.drawImage(boatimg, 5,-5,100, 50);
        monstr();
        ctx.strokeStyle = 'snow'; 
        ctx.beginPath();
        ctx.moveTo(85, 38);
        ctx.lineTo(145, 38);
        ctx.lineTo(145, 105);
        ctx.lineTo(85, 105);
        ctx.lineTo(80, 74);
        ctx.fillStyle="white";
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle="black";
        ctx.fillText("Кажись",90,50);
        ctx.fillText("замок в",90,60);
        ctx.fillText("правой",90,70);
        ctx.fillText("стороне,",90,80);
        ctx.fillText("мне нужно",90,90);
        ctx.fillText("торопиться",90,100);
        ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
        q++;
    }
}
let t = 0;
function waves() {
    if(t==0){
        for(let i=1;i<5;i++){
            ctx.drawImage(sprites,rand(54,57)*32,22*32,32,32,0,i*32,32,32);
        }
    }
    else{
        return;
    }
    

}
let sword = 0;
function monstr(){
    if(t==0){
        ctx.drawImage(sprites,63*32,23*32,32,32,210,105,32,32);
        ctx.drawImage(sprites,22*32,33*32,32,32,213,100,32,32);
        if(sword==0){
            ctx.drawImage(sprites,5*32,47*32,32,32,190,110,32,32);
        }
        ctx.drawImage(sprites,29*32,75*32,32,32,200,100,32,32);
    }
}

window.onkeyup= function(e){
    if(butt==4 && e.code == 'KeyF'){
        if(sword==1){
            if(aa==1){
                aa=0;
            }
            animF=82;
            timerid=setInterval(punchD,50);
        }
    }
    else if(butt==3 && e.code == 'KeyF'){
        if(sword==1){
            if(aaa==1){
                aaa=0;
            }
            animF=70;
            timerid=setInterval(punchS,50);
        }
    }
    else if(butt==2 && e.code == 'KeyF'){
        if(sword==1){
            if(aaaa==1){
                aaaa=0;
            }
            animF=25;
            timerid=setInterval(punchA,50);
        }
    }
    else if(butt==1 && e.code == 'KeyF'){
        if(sword==1){
            if(aaaaa==1){
                aaaaa=0;
            }
            animF=60;
            timerid=setInterval(punchW,50);
        }
    }
    if(e.code == "KeyX" && kk==11 && sqs==0){
        magics=10;
        animag=10;
        timersa=setInterval(mage, 100);
        sqs=1;
        kk=12;
    }
}

function mage(){
    skl=0;
    terrarian();
    hp();
    if(nn==1){
        path();
    }
    if(animag>=200){
        ctx.beginPath();
        ctx.fillStyle="snow";
        ctx.strokeStyle="blue";
        ctx.moveTo(0,dvigY+20);
        ctx.lineTo(310,dvigY+20);
        ctx.lineTo(310,dvigY+40);
        ctx.lineTo(0,dvigY+40);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle="#c4dafa";
        ctx.moveTo(dvigX-10,dvigY+20);
        ctx.lineTo(dvigX+40,dvigY+20);
        ctx.lineTo(dvigX+40,dvigY+40);
        ctx.lineTo(dvigX-10,dvigY+40);
        ctx.lineTo(dvigX-10,dvigY+20);
        ctx.fill();
        ctx.stroke();
        if(dviggY>=dvigY-10 && dviggY<=dvigY+10 && hg==0 && dv<=50){
            hlporc-=70;
            hg++;
        }
    }
    if(hlporc>0 && nn==1 && dv<=54){
        ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
        ctx.fillStyle="red";
        ctx.fillText(hlporc, dviggX+12, dviggY+8);
        ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
    }
    
    if(animag>=300){
        skl=1;
        terrarian();
        hp()
        
        if(nn==1){
            path();
        };
        if(hlporc>0 && nn==1 && dv<=54){
            ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
            ctx.fillStyle="red";
            ctx.fillText(hlporc, dviggX+12, dviggY+8);
            ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
        }
        animag=10;
        if(w==1){
            ctx.drawImage(person,animW,60*8+45,30,60,dvigX,dvigY,30,60);
        }
        else if(a==1){
            ctx.drawImage(person,animA,60*9+45,30,60,dvigX,dvigY,30,60);
        }
        else if(s==1){
            ctx.drawImage(person,animS,60*10+45,30,60,dvigX,dvigY,30,60);
        }
        else{
            ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
        }
        hg=0;
        sqs=0;
        kk=11;
        clearInterval(timersa);
        return;
    }
    if(w==1){
        ctx.drawImage(person,animag,5,50,60,dvigX-5,dvigY-5,50,60);
        animag+=64;
    }   
    else{
        ctx.drawImage(person,animag,60*2+20,50,60,dvigX-4,dvigY+4,50,60);
        animag+=64;
    }
    
}
let timerr;
let w=0,a=0,s=0,d=0;
window.onkeydown = function (e){
    if(o>=1){
        if(e.code == 'KeyE'){
            console.log(dvigX);
            console.log(dvigY);
            if(sword==0){
                if(dvigX>=165 && dvigX <=215 && dvigY>=64 && dvigY<=95){
                    terrarian();
                    sword=1;
                    monstr();
                    if(t==0){
                        ctx.drawImage(boatimg, 5,-5,100, 50);
                    }
                    ctx.drawImage(person,82,60*33+10,60,60,dvigX,dvigY,60,60);
                    
                }
            }
        }
        if(e.code == 'KeyW'){
            terrarian();
            monstr();
            a=0;
            s=0;
            d=0;
            w=1;
            if(t==0){
                ctx.drawImage(boatimg, 5,-5,100, 50);

            }
            if(hlporc>0 && y1==1){
                ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
                ctx.fillStyle="red";
                ctx.fillText(hlporc, dviggX+12, dviggY+8);
                ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
            }
            ctx.drawImage(person,animW,60*8+45,30,60,dvigX,dvigY,30,60);
            
            butt=1;
            if(animW>=500){
                animW=15;
            }
            animW+=128;
            if(sqs==1){
                timskill();

            }
            wdvig();
        }
        if(e.code == 'KeyS'){
            terrarian();
            monstr();
            a=0;
            s=1;
            d=0;
            w=0;
            if(sqs==1){
                timskill();

            }
            if(t==0){
                ctx.drawImage(boatimg, 5,-5,100, 50);
                
            }
            if(hlporc>0 && y1==1){
                ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
                ctx.fillStyle="red";
                ctx.fillText(hlporc, dviggX+12, dviggY+8);
                ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
            }
            ctx.drawImage(person,animS,60*10+45,30,60,dvigX,dvigY,30,60);
            
            butt=3;
            if(animS>=500){
                animS=15;
            }
            animS+=128;
            sdvig();
        }
        if(dvigY<=0 && e.code =='KeyE' && zk==2){
            if(jj==1){
                return;
            }
            if(dvigX>=110 && dvigX<=145){
                dvigY=100;
                vv=1;
                randground();
                terrarian();
                dvigY=100;
                ctx.drawImage(person,15,60*8+35,30,60,dvigX,dvigY,30,60);
                path();
                jj=1;
                nn=1;
            }
        }
        if(e.code == 'KeyD'){
            if(dv<=146){
                if(dvigY>59){
                    return;
                }
            }
            terrarian();
            monstr();
            a=0;
            s=0;
            d=1;
            w=0;
            if(t==0){
                ctx.drawImage(boatimg, 5,-5,100, 50);
                
            }
            if(hlporc>0 && y1==1){
                ctx.fillStyle="red";
                ctx.fillText(hlporc, dviggX+12, dviggY+8);
            }
            ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
            
            butt=4;
            if(dvigX-5>=140 && dvigX<=140 && dvigY>=60 && dvigY<=90 && nn==1){
                return;
            }
            if(dvigX>=140 && dvigX<=144 && nn==1){
                if(animD>=500){
                    animD=15;
                }
                ll=1;
                we+=2;
                terrarian();
                path();
                if(hlporc>0 && y1==1){
                    ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
                    ctx.fillStyle="red";
                    ctx.fillText(hlporc, dviggX+12, dviggY+8);
                    ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
                }
                ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
                
                hp();
                if(sqs==1){
                    d=1;
                    w=0;
                    timskill();
                }
                if(dv<=50){
                    if(y1==0){
                        y1++;
                        intermon();
                        
                    }
                }
                if(y1>=1){
                    if(dviggX>=140){
                        dviggX-=3;
                        temps=1;
                    }
                }
                animD+=128;
                return;
            }
            if(animD>=500){ 
                animD=15;
            }
            animD+=128;
            if(sqs==1){
                timskill();

            }
            Ddvig();
        }
        if(e.code == 'KeyA'){
            terrarian();
            monstr();
            a=1;
            s=0;
            d=0;
            w=0;
            if(t==0){
                ctx.drawImage(boatimg, 5,-5,100, 50);
                
            }
            if(hlporc>0 && y1==1){
                ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
                ctx.fillStyle="red";
                ctx.fillText(hlporc, dviggX+12, dviggY+8);
                ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
            }
            ctx.drawImage(person,animA,60*9+45,30,60,dvigX,dvigY,30,60);
            
            butt=2;
            if(animA>=500){
                animA=15;
            }
            animA+=128;
            if(sqs==1){
                
                timskill();
            }
            if(t==0){
                ctx.drawImage(palmimg, 230,-5,100, 50);
                    
            }
            if(dvigX>=30 && dvigX<=35 && t==0){
                return;
            }
            Advig();
        }
        if(t==0){
            ctx.drawImage(palmimg, 230,-5,100, 50);
                
        }
        if(y1==1 && hlporc>0){
            ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);

        }
        hp();
    }
}
function intermon(){
    return setInterval(monsters,70);
}
let dviggX=300,dviggY=30;
let animd=15;
let oo =1;
let sc=0;
let y1=0;
let moves=new Array();
for(let p=0;p<=1000;p++){
    moves[p]=rand(0,1);
}
let pl=0;
let temps= rand(0,1);
let dvx,dvy;
let pp=0;
let tim;
let dd;
let vas=0;
function dvg(){
    if (c>=1){
        terrarian();
        path();
        if(w==1 && animag==10){
            ctx.drawImage(person,animW,60*8+45,30,60,dvigX,dvigY,30,60);
        }
        else if(a==1 && animag==10){
            ctx.drawImage(person,animA,60*9+45,30,60,dvigX,dvigY,30,60);
        }
        else if(s==1 && animag==10){
            ctx.drawImage(person,animS,60*10+45,30,60,dvigX,dvigY,30,60);
        }
        else if(d==1 && animag==10){
            ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
        }
        if(animag>10){
            if(w==1){
                ctx.drawImage(person,animag,5,50,60,dvigX-5,dvigY-5,50,60);
            }   
            else{
                ctx.drawImage(person,animag,60*2+20,50,60,dvigX-4,dvigY+4,50,60);
            }
        }
        ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
        if(dvx>=dvigX-15 && dvx<=dvigX+15 && dvy>=dvigY-15 && dvy<=dvigY+15 ){
            hlp-=3;
        }
        if(ff==15){
            dvx+=11;
        }
        else{
            dvx-=11;
        }
        if(dvx<=0 || dvx>=270){
            clearInterval(tim);
            return;
        }
        ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32); 
        if(sqs==1){
            timskill();
        }
        hp();
    }
    
}
let hlporc=100;
function monsters(){
    if(hlporc<=0){
        c=0;
        pointkill++;
        points.innerText="Очков == " + pointkill;
        localStorage.setItem("points", pointkill);
        let sdsd=intermon();
        clearInterval(sdsd);
        contin();
    }
    if (c>=1){
        terrarian();
        path();
        if(w==1 && animag==10){
            ctx.drawImage(person,animW,60*8+45,30,60,dvigX,dvigY,30,60);
        }
        else if(a==1 && animag==10){
            ctx.drawImage(person,animA,60*9+45,30,60,dvigX,dvigY,30,60);
        }
        else if(s==1 && animag==10){
            ctx.drawImage(person,animS,60*10+45,30,60,dvigX,dvigY,30,60);
        }
        else if(d==1 && animag==10){
            ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
        }
        if(animag>10){
            if(w==1){
                ctx.drawImage(person,animag,5,50,60,dvigX-5,dvigY-5,50,60);
            }   
            else{
                ctx.drawImage(person,animag,60*2+20,50,60,dvigX-4,dvigY+4,50,60);
            }
        }
        if(pp==0){
            if(dviggY>=dvigY-10 && dviggY<=dvigY+10){
                dvx=dviggX;
                dvy=dviggY+4;
                if(animd>=500 && temps==1){
                    animd=15;
                    ff=19;
                    pp=1;
                    tim=setInterval(dvg,200);
                }
                else if(animd>=500 && temps==0){
                    animd=15;
                    ff=15;
                    pp=1;
                    tim=setInterval(dvg,200);
                }
                if(temps==1){
                    ctx.drawImage(archer,animd,60*18+15,50,60,dviggX,dviggY,50,60);
                    hp();
                    if(hlporc>0 && nn==1){
                        ctx.fillStyle="red";
                        ctx.fillText(hlporc, dviggX+12, dviggY+8);
                    } 
                    animd+=59.7;
                }
                else{
                    ctx.drawImage(archer,animd,60*20+25,60,60,dviggX,dviggY,60,60);
                    hp();
                    if(hlporc>0 && nn==1){
                        ctx.fillStyle="red";
                        ctx.fillText(hlporc, dviggX+12, dviggY+8);
                    } 
                    animd+=64;
                }
                hp();
            pl=1;
            } 
        }
        if(pl==0){
            dvg();
            if(temps==0){
                dd=11;
                ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
                animd+=64;
                dviggX+=rand(2,4);
                if(dviggX>=270){
                    pp=0;
                    temps=1;
                    if(hlporc>0 && nn==1){
                        ctx.fillStyle="red";
                        ctx.fillText(hlporc, dviggX+12, dviggY+8);
                    } 
                    if(sqs==1){
                        timskill();
                    }
                    return;
                }
                if(animd>=500){
                    animd=15;
                }
            }
            else{
                dd=9;
                ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);
                animd+=64;
                dviggX-=rand(2,4);
                if(dviggX<=0){
                    pp=0;
                    temps=0;
                    if(hlporc>0 && nn==1){
                        ctx.fillStyle="red";
                        ctx.fillText(hlporc, dviggX+12, dviggY+8);
                    } 
                    if(sqs==1){
                        timskill();
                    }
                    return;
                }
                if(animd>=500){
                    animd=15;
                }
            }
            if(dviggX>=dvigX-10 && dviggX<=dvigX-10){
                pp=0;
            }
            if(dviggX==rand(20,50)){
                pp=0;
            }
            if(dviggX==rand(50,70)){
                pp=0;
            }
            if(dviggX==rand(70,90)){
                pp=0;
            }
            if(sc==1000){
                sc=0;
            }
            if(moves[sc]==1){
                sc++;
                if(dviggY<=0){
                    if(hlporc>0 && nn==1){
                        ctx.fillStyle="red";
                        ctx.fillText(hlporc, dviggX+12, dviggY+8);
                    }
                    return;
                }
                else{
                    dviggY-=rand(2,4);
                }
            }
            else{
                sc++;
                if(dviggY>=49 && dviggY<=52){
                    return;
                }
                else{
                    dviggY+=rand(2,4);
                }
            }
        }
        else{
            pl=0;
        }
        hp();
    }
    if(hlporc>0 && nn==1){
        ctx.fillStyle="red";
        ctx.fillText(hlporc, dviggX+12, dviggY+8);
    }
    if(sqs==1){
        timskill();
    }
    
    
}
function spawn(){
    if(w==1 && animag==10){
        ctx.drawImage(person,animW,60*8+45,30,60,dvigX,dvigY,30,60);
    }
    else if(a==1 && animag==10){
        ctx.drawImage(person,animA,60*9+45,30,60,dvigX,dvigY,30,60);
    }
    else if(s==1 && animag==10){
        ctx.drawImage(person,animS,60*10+45,30,60,dvigX,dvigY,30,60);
    }
    else if(d==1 && animag==10){
        ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
    }
    if(animag>10){
        if(w==1){
            ctx.drawImage(person,animag,5,50,60,dvigX-5,dvigY-5,50,60);
        }   
        else{
            ctx.drawImage(person,animag,60*2+20,50,60,dvigX-4,dvigY+4,50,60);
        }
    }
}
let ff=15;
let jj=0;
function wdvig(){
    ll=0;
    if(dvigY<=0){
        return;
    }
    dvigY-=3;
}
let X=210;
function sdvig(){
    ll=0;
    if(jj==1){
        if(dvigY>=48 && dvigY<=52 && dvigX >=X){
            return;
        }
    }
    if(dvigY>=100){
        return;
    }
    dvigY+=3;
}
function Advig(){
    ll=0;
    if(zk==2){
        if(posf<=0){
            if(dvigX>=0){
                dvigX-=3.5;
    
            }
            return;
        }
    }
    
    if(jj==1){
        if(dvigX>=37 && dvigX<=41){
            return;
        }
    }
    if(dvigX<=0){
        return;
    }
    dvigX-=3.5;
}
let ll =0;
let dv=209;
function Ddvig(){
    if(zk==2){
        if(jj==1){
            if(dvigY>=54 && dvigY<=100 && dvigX>=dv && dvigX<=dv+5){
             
                return;
            }
            dvigX+=3.5;
            return;
        }
    }
    
    if(sword==0){
        if(dvigX>=230){
            ctx.fillStyle="yellow";
            ctx.font="15px fantastic";
            ctx.fillText("Для продолжения возьми^те меч",35,145);
            return;
        }
    }
    if(jj==0){
        if(dvigX>=270){
            t=1;
            level1();
            return;
        }
    }
    
    if(zk==2){
        if(dvigX>=250){
            return;
        }
        dvigX+=3.5;
        return;
    }
    if(t==1){
        if(dvigX<=100 && dvigX>=80){
            o=0;
            ctx.drawImage(npc1,animA,60*9+45,30,60,dvnpc1X,dvnpc1Y,30,60);
            timers=setInterval(Dvignpc1,200);
            return;
        }
    }
    dvigX+=3.5;
    
}
let i=0;
let timers;
let dvnpc1X=300,dvnpc1Y=50;
function level1(){
    randground();
    terrarian();
    hp();
    dvigX=0;
}
let zz=0;
function Dvignpc1(){
    terrarian();
    ctx.drawImage(npc1,animA,60*9+45,30,60,dvnpc1X,dvnpc1Y,30,60);
    ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
    hp();
    if(animA>=500){
        animA=15;
        zz++;
    }
    if(zz==2){
        clearInterval(timers);
        cont();
        hp();
        return;
    }
    animA+=64;
    dvnpc1X-=10;
}
function contin(){
    terrarian();
    path();
    if(w==1){
        ctx.drawImage(person,animW,60*8+45,30,60,dvigX,dvigY,30,60);
    }
    else if(a==1){
        ctx.drawImage(person,animA,60*9+45,30,60,dvigX,dvigY,30,60);
    }
    else if(s==1){
        ctx.drawImage(person,animS,60*10+45,30,60,dvigX,dvigY,30,60);
    }
    else{
        ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
    }
    if(sqs==1){
        timskill();
    }
    dviggX=300;
    hlporc=100;
    c=1;
    setTimeout
(intermon,15000);

    
}
let posx=3000,posy=150,posx1=230,posy1=110,posf=40,posr=0;
function path(){
    if(ll==1){
        ctx.beginPath();
        ctx.strokeStyle = 'black'; 
        ctx.moveTo(posr, posr);
        ctx.lineTo(posx, posr);
        ctx.lineTo(posx, 40);
        ctx.lineTo(posf, 40);
        ctx.lineTo(posf, posy);
        ctx.lineTo(posx1, posy);
        ctx.lineTo(posx1, posy1);
        ctx.lineTo(posx, posy1);
        ctx.lineTo(posx, posy);
        ctx.lineTo(0, posy); 
        ctx.fillStyle="black";
        ctx.fill();
        ctx.stroke();
        posx-=1;
        posx1-=1;
        posf-=1;
        X-=1;
        dv-=1;
        if(dv<=-50){
            posx+=1;
            posx1+=1;
            posf+=1;
            X+=1;
        }
        return;
    }
    else if(ll==0){
        ctx.beginPath();
        ctx.strokeStyle = 'black'; 
        ctx.moveTo(posr, posr);
        ctx.lineTo(posx, posr);
        ctx.lineTo(posx, 40);
        ctx.lineTo(posf, 40);
        ctx.lineTo(posf, posy);
        ctx.lineTo(posx1, posy);
        ctx.lineTo(posx1, posy1);
        ctx.lineTo(posx, posy1);
        ctx.lineTo(posx, posy);
        ctx.lineTo(0, posy); 
        ctx.fillStyle="black";
        ctx.fill();
        ctx.stroke();
        return;
    }
    
}
let col;
let ro;
let we=0;
function terrarian(){
    if(vv==1){
        let tmp=0;
        for(column=0;column<11;column++){
            for(row=0;row<11;row++){
                col=column*32-we;
                ro=row*32;
                ctx.drawImage(sprites,randmap[tmp]*32,2*32,32,32,col,ro,32,32);
                tmp++;
                if(we>=50){
                    we=0;
                    randground();
                }
            }   
        }
        if(jj==1){
            path();
        }
        return;
    }
    if(t==0){
        for(column=1;column<11;column++){
            for(row=0;row<11;row++){
                ctx.drawImage(sprites,map[column]*32,4*32,32,32,column*28+4,row*32,32,32);  
            }   
        }
    }
    else{
        let tmp = 0;
        for(column=0;column<11;column++){
            for(row=0;row<11;row++){
                ctx.drawImage(sprites,randmap[tmp]*32,4*32,32,32,column*32,row*32,32,32);
                tmp++;
            }   
        }
        ctx.drawImage(sprites,48*32,10*32,32,32,4*32,0*32,32,32);
    }
}
function punchD(){
   
    if(aa==0){
        terrarian();
        monstr();
        if(t==0){
            ctx.drawImage(palmimg, 230,-5,100, 50);
            ctx.drawImage(boatimg, 5,-5,100, 50);
        }
        if(hlporc>0){
            ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
            ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);         
        }
        if(sqs==1){
            
            d=0;
            timskill();
        }
        ctx.drawImage(person,animF,60*33+5,110,60,dvigX,dvigY,120,60);
        if(animF>=1200){
            if(dvigX<=dviggX && dvigX+60>=dviggX && nn==1){
                hlporc-=10;
            }
            d=1;
            aa=1;
            terrarian();
            monstr();
            if(t==0){
                ctx.drawImage(palmimg, 230,-5,100, 50);
                ctx.drawImage(boatimg, 5,-5,100, 50);
            }
            animF=82;
            spawn();
            clearInterval(timerid);
            return;
        }
        animF+=188;
    }
    hp();
}
function punchS(){
    if(aaa==0){
        terrarian();
        monstr();
        if(t==0){
            ctx.drawImage(palmimg, 230,-5,100, 50);
            ctx.drawImage(boatimg, 5,-5,100, 50);
        }
        if(hlporc>0){
            ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
            ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60); 
        }
        if(sqs==1){
            
            s=0;
 
             
            timskill();
        }
        ctx.drawImage(person,animF,60*29+55,110,80,dvigX,dvigY,110,80);
        if(animF>=1200){
            if(dvigY<=dviggY && dviggX>=dvigX-10 && dviggX<=dvigX+10 && nn==1){
                hlporc-=10;
            }
            aaa=1;
            terrarian();
            monstr();
            s=1;
            if(t==0){
                ctx.drawImage(palmimg, 230,-5,100, 50);
                ctx.drawImage(boatimg, 5,-5,100, 50);
            }
            animF=70;
            
            spawn();
            clearInterval(timerid);
            return;
        }
        animF+=190;
    }
    hp();
}
function punchA(){
    if(aaaa==0){
        terrarian();
        monstr();
        if(t==0){
            ctx.drawImage(palmimg, 230,-5,100, 50);
            ctx.drawImage(boatimg, 5,-5,100, 50);
        }
        if(hlporc>0){
            ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
            ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);        
        }
        if(sqs==1){
            a=0;
          
             
            timskill();
        }
        dvigX-=53;
        dvigY-=10;
        ctx.drawImage(person,animF,60*26+35,110,80,dvigX,dvigY,110,80);
        dvigX+=53;
        dvigY+=10;
        a=1;
        if(animF>=1200){
            if(dvigX>=dviggX && dvigX-60<=dviggXdvigX>=dviggX && dvigX-60<=dviggX && nn==1){
                hlporc-=10;
            }
            dvigX-=53;
            dvigY-=10;
            aaaa=1;
            terrarian();
            monstr();
            if(t==0){
                ctx.drawImage(palmimg, 230,-5,100, 50);
                ctx.drawImage(boatimg, 5,-5,100, 50);
            }
            animF=25;
            clearInterval(timerid);
            dvigX+=53;
            dvigY+=10;
            spawn();
            return;
        }
        animF+=190;
    }
    hp();
}
function punchW(){  
   
    if(aaaaa==0){
        terrarian();
        monstr();
        if(t==0){
            ctx.drawImage(palmimg, 230,-5,100, 50);
            ctx.drawImage(boatimg, 5,-5,100, 50);
        }
        dvigX-=20;
        dvigY-=10;
        if(hlporc>0){
            ctx.drawImage(sprites,ff*32,23*32,32,32,dvx,dvy,32,32);
            ctx.drawImage(archer,animd,60*dd+45,30,60,dviggX,dviggY,30,60);             
        }
        if(sqs==1){
            w=0;  
             
            timskill();
        }
        ctx.drawImage(person,animF,60*23+15,110,80,dvigX,dvigY,110,80);
        dvigX+=20;
        dvigY+=10;
        w=1;
        if(animF>=1200){
            if(dviggX>=dvigX-30 && dviggX<=dvigX+30){
                hlporc-=10;
            }
            
            dvigX-=20;
            dvigY-=10;
            aaaaa=1;
            terrarian();
            monstr();
            if(t==0){
                ctx.drawImage(palmimg, 230,-5,100, 50);
                ctx.drawImage(boatimg, 5,-5,100, 50);
            }
            animF=60;
            
            
            clearInterval(timerid);
            dvigX+=20;
            dvigY+=10;
            spawn();
            return;
        }
        animF+=190;
    }
    hp();
}
let randmap = new Array();
let vv=0;
function randground(){
    let gf;
    let ii=0
    if(vv==1){
        for(let j=0;j<3000;j++){
            gf=rand(38,46);
            let tmp=gf;
            tmp%=2;
            if(tmp==0){
                randmap[ii]=gf;
                ii++;
            }
            else{
                if(gf<46){
                    gf++;
                }
            }
            
            
        }
        return;
    }
    for(let j=0;j<200;j++){
        randmap[j]=rand(2,7);
    }
    let gg=49;
    for(let j=0;j<121;j+=11){
        randmap[j]=gg;
        if(gg>=60){
            gg=49;
        }
        gg+=2;
    }
}
let timerss;
let kk=0;
let zk=0;
function cont(){
    if(kk==0){
        ctx.font="10px fantastic";
        ctx.strokeStyle = 'snow'; 
        ctx.beginPath();
        ctx.moveTo(75, 38);
        ctx.lineTo(145, 38);
        ctx.lineTo(145, 78);
        ctx.lineTo(135, 68);
        ctx.lineTo(75, 68);
        ctx.fillStyle="white";
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle="black";
        ctx.fillText("Здравствуйте",80,50);
        ctx.fillText("принцесса",80,60);
    }
    canvas.addEventListener("click", function (e){
        if(kk==1){
            ctx.font="10px fantastic";
            ctx.strokeStyle = 'snow'; 
            ctx.beginPath();
            ctx.moveTo(80, 38);
            ctx.lineTo(145, 38);
            ctx.lineTo(145, 78);
            ctx.lineTo(135, 68);
            ctx.lineTo(80, 68);
            ctx.fillStyle="white";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fillText("там устроили",80,50);
            ctx.fillText("засаду.",80,60);
            kk++;
        }
        else if(kk==2){
            ctx.font="10px fantastic";
            ctx.strokeStyle = 'snow'; 
            ctx.beginPath();
            ctx.moveTo(80, 38);
            ctx.lineTo(145, 38);
            ctx.lineTo(145, 78);
            ctx.lineTo(135, 68);
            ctx.lineTo(80, 68);
            ctx.fillStyle="white";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fillText("Держите посох",80,50);
            ctx.fillText("в нем есть.",80,60);
            kk++;
        }
        else if(kk==3){
            ctx.font="10px fantastic";
            ctx.strokeStyle = 'snow'; 
            ctx.beginPath();
            ctx.moveTo(80, 38);
            ctx.lineTo(145, 38);
            ctx.lineTo(145, 78);
            ctx.lineTo(135, 68);
            ctx.lineTo(80, 68);
            ctx.fillStyle="white";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fillText("магия,",80,50);
            ctx.fillText("осторожнее",80,60);
            kk++;
        }
        else if(kk==4){
            ctx.font="10px fantastic";
            ctx.strokeStyle = 'snow'; 
            ctx.beginPath();
            ctx.moveTo(80, 38);
            ctx.lineTo(145, 38);
            ctx.lineTo(145, 78);
            ctx.lineTo(135, 68);
            ctx.lineTo(80, 68);
            ctx.fillStyle="white";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fillText("с ней. Мне",80,50);
            ctx.fillText("нужно",80,60);
            kk++;
        }
        else if(kk==5){
            ctx.font="10px fantastic";
            ctx.strokeStyle = 'snow'; 
            ctx.beginPath();
            ctx.moveTo(80, 38);
            ctx.lineTo(145, 38);
            ctx.lineTo(145, 78);
            ctx.lineTo(135, 68);
            ctx.lineTo(80, 68);
            ctx.fillStyle="white";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fillText("спешиться,",80,50);
            ctx.fillText("чтобы помочь",80,60);
            kk++;
        }
        else if(kk==6){
            ctx.font="10px fantastic";
            ctx.strokeStyle = 'snow'; 
            ctx.beginPath();
            ctx.moveTo(80, 38);
            ctx.lineTo(145, 38);
            ctx.lineTo(145, 78);
            ctx.lineTo(135, 68);
            ctx.lineTo(80, 68);
            ctx.fillStyle="white";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fillText("Арториасу и",80,50);
            ctx.fillText("его воинам",80,60);
            kk++;
        }
        else if(kk==7){
            ctx.font="10px fantastic";
            ctx.strokeStyle = 'snow'; 
            ctx.beginPath();
            ctx.moveTo(80, 38);
            ctx.lineTo(145, 38);
            ctx.lineTo(145, 78);
            ctx.lineTo(135, 68);
            ctx.lineTo(80, 68);
            ctx.fillStyle="white";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fillText("вам надо",80,50);
            ctx.fillText("идти через",80,60);
            kk++;
        }
        else if(kk==8){
            ctx.font="10px fantastic";
            ctx.strokeStyle = 'snow'; 
            ctx.beginPath();
            ctx.moveTo(80, 38);
            ctx.lineTo(145, 38);
            ctx.lineTo(145, 78);
            ctx.lineTo(135, 68);
            ctx.lineTo(80, 68);
            ctx.fillStyle="white";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fillText("пещеру, если",80,50);
            ctx.fillText("мы с ними",80,60);
            kk++;
        }
        else if(kk==9){
            ctx.font="10px fantastic";
            ctx.strokeStyle = 'snow'; 
            ctx.beginPath();
            ctx.moveTo(80, 38);
            ctx.lineTo(145, 38);
            ctx.lineTo(145, 78);
            ctx.lineTo(135, 68);
            ctx.lineTo(80, 68);
            ctx.fillStyle="white";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fillText("справимся я",80,50);
            ctx.fillText("вас встречу.",80,60);
            kk++;
        }
        else if(kk==10){
            zk=0;
            timerss=setInterval(move,200);
            kk++;
        }
        else if (kk==0){
            ctx.font="10px fantastic";
            ctx.strokeStyle = 'snow'; 
            ctx.beginPath();
            ctx.moveTo(80, 38);
            ctx.lineTo(145, 38);
            ctx.lineTo(145, 78);
            ctx.lineTo(135, 68);
            ctx.lineTo(80, 68);
            ctx.fillStyle="white";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle="black";
            ctx.fillText("Ваш замок ",80,50);
            ctx.fillText("справо однако..",80,60);
            kk++;
        }
        
    });
}
function move(){
    terrarian();
    ctx.drawImage(npc1,animA,60*11+45,40,60,dvnpc1X,dvnpc1Y,40,60);
    ctx.drawImage(person,animD,60*11+45,30,60,dvigX,dvigY,30,60);
    if(animA>=500){
        animA=15;
        zk++;
    }
    if(zk==2){
        clearInterval(timerss);
        o=1;
        return;
    }
    hp();
    animA+=64;
    dvnpc1X+=10;
}