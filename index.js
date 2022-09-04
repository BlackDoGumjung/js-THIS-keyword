'use strict'; // 자바스크립트를 엄격하게 사용하고 싶을 때! (strict mode)

console.log(this); // 1. 그냥 쓰거나 일반 함수 안에서 쓰면 {window} <-기본 함수 수납 공간 

function 함수(){
  console.log(this); // 엄격모드에서는 undefined가 됨 (중요하지 않음)
}
함수();

var obj = {
  data : 'kimmy',
  함수 : function(){
    console.log('안녕');
    console.log(this); // 2. 여기에서의 this는 나를 포함하고 있는 오브젝트(=그 함수를 가지고 있는 오브젝트)
  }
}

obj.data; //오브젝트 내 데이터 뽑기
obj.함수(); //오브젝트 내 함수 사용방법

var obj = {
  data: {
    함수 : function(){ //화살표 함수 ()=>{} 라면? this값을 함수 밖에 있던 걸 그대로 씀... 함수(){}로 그냥 써도 됨...
      console.log(this);
    }
  }
}
obj.data.함수(); // {함수:f} 즉 obj.data와 같은 의미!

//자바스크립트를 쓸 때 {} 안에 담는다고 생각하면 됨 -> 이게 {window} 에 보관하는 거임, window라는 오브제그 안에 맹그는 거얍

function 기계(){
  this.이름 = 'choi'; // 3. 여기에서의 뜻은 새로 생성되는 오브젝트 (instance)
  //기계(=오브젝트 생성 기계=constructor) 안에서 쓰면 새로 생성되는 오브젝트
}

var obj = new 기계();
console.log(obj); // 기계(이름:'choi') //오브젝트가 새로 생성됨!

document.getElementById('버튼').addEventListener('click, 
function(e){
  this; //this = e.currentTarget 이벤트가 동작하고 있는 요소 (여기에서는 버튼...)
  //case 1.
  var arr = [1,2,3];
  arr.forEach(function(a){ //arr 만큼 반복해욧 .forEach는 콜백함수를 받음 (forEach라는 함수 안에 함수 들어간 거=> 콜백함수)
  console.log(a); //콘솔창에 a 출력 1,2,3 
  console.log(this); //window 출력됨
}); 
}) 

var obj = {
  names : ['kim', 'lee', 'choi'],
  fn : function(){
    console.log(this); // 이 함수를 보유한 주인 var = obj 가 됨
    obj.names.forEach(function(){ // arrow 함수 쓰면 내부의 this값을 변화시키지 않음! (외부 this값 그대로 재사용하기 땜에 얘도 obj가 돼벌임)
      console.log(this); //일반함수(근본없을 때) => window
    })
  }
}
obj.fn();


function 함수(){
  
}

const 함수 = function(){
  
}
함수();

const 함수 = (a) => {
  //arrow 함수의 장점 함수 만드는 이유 
  //(기능을 축약해서 묶고 싶을 때, 입출력 기계 만들고 싶을 때->파라미터를 넣어서 결과값을 받으란 얘기)
  return a + 10
}
함수(5); // 결과값 15

const 함수 = a => a + 10;  //파라미터가 1개면 ()도 생략... 한 줄이면 {}도 생략 가능
const 함수 = a => console.log(a); // 이렇게 사용!
 함수(5);

[1,2,3,4].forEach(function(a){
  console.log(a);
})
//위의 코드를 변경하면...?
[1,2,3,4].forEach(a => console.log(a));

document.getElementById('버튼').addEventListener('click, 
(e)=>{
  this; // 이 함수 내에서 e.currentTarget을 원하는 거였다면 문제가 생길수도...ㅎ
  //arrow 함수 내의 this는 외부의 this 값을 물려받아 가져오기 땜시 여기에서는 window가 돼벌임!
  // but... 그런 this가 꼭 필요하고 + 화살표 함수도 쓰고 싶다... 하면 e.currentTarget 그냥 쓰면 됨
})


var 오브젝트 = {
  함수 : () => {
    this; // 여기에서도 오브젝트가 아니라... window가 됨 ㅎ
  }
}
오브젝트.함수();
