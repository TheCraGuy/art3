let img;
let a = 0;
let b = 0;
let c = 0;

let d1 =0;
let d2 =0;
let d3 =0;
let d4 =0;
let d5 =0;
let d6 =0;

let t1 =1;
let t2 =7;
let t3 =7;
let t4 =0;
let t5 =1;
let t6 =3;

let n0;
let n1;
let n2;
let n3;
let n4;
let n5;
let n6;
let n7;
let n8;
let n9;

let title = [];
let tit = 6;

let number = [];
let numNo = 1000;

function preload() {
   img = loadImage('images/art3t.png');

}

function setup() {
   createCanvas(756,1008);
   background(0);
   for (let i=0;i<numNo;i++){

   n0=new num();
   n1=new num();
   n2=new num();
   n3=new num();
   n4=new num();
   n5=new num();
   n6=new num();
   n7=new num();
   n8=new num();
   n9=new num();

   number[i] = new num();

   }

}




function draw() {
  background(0,50);
  for(let i = 0; i<number.length; i++){
  number[i].move();
  number[i].show();
 }

 image(img,0,0);
//////////////////////////////
 if(d1<50){
   d1++;
   if(d1 ==50){
     t1++;
     if(t1>3){
       t1=0;}}
 }else{d1=0;}
//////////////////////////////
if(d2<45){
  d2++;
  if(d2 ==45){
    t2++;
    if(t2>9){
      t2=0;}}
}else{d2=0;}
//////////////////////////////
if(d3<40){
  d3++;
  if(d3 ==40){
    t3++;
    if(t3>9){
      t3=0;}}
}else{d3=0;}
//////////////////////////////
if(d4<35){
  d4++;
  if(d4 ==35){
    t4++;
    if(t4>9){
      t4=0;}}
}else{d4=0;}
//////////////////////////////
if(d5<30){
  d5++;
  if(d5 ==30){
    t5++;
    if(t5>9){
      t5=0;}}
}else{d5=0;}
//////////////////////////////
if(d6<25){
  d6++;
  if(d6 ==25){
    t6++;
    if(t6>9){
      t6=0;}}
}else{d6=0;}
//////////////////////////////


fill(0);
textSize(150);

text(t1,138,150);
text(t2,222,150);
text(t3,306,150);
text(t4,390,150);
text(t5,474,150);
text(t6,558,150);

}







class num{
constructor(){
  this.x = random(width);
  this.y = random(400,height);
  this.r = int(random(0,4));
}
move(){
  this.x = this.x +random(-5,5);
  this.y = this.y +random(0,3);
  if(this.x>width){
    this.x=-15;
  }
  if(this.x<-15){
    this.x=width;
  }
  if(this.y>height+30){
    this.y=400;
  }
}


////////////////////////////////////////////
show(){
    if(a<6000){
      a++;
      if(a ==6000){
        b++;
        if(b>9){
          b=0;
        }
      }
    }else{
      a=0;
    }

    c=this.r+b;
    if(c>9){
      c=0;
    }

  fill(255);
  textSize(30);
  text(c,this.x,this.y);

}
}
