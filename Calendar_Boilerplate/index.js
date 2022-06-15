var pre = document.querySelector(".pre");
var next = document.querySelector(".next");
var neb = document.querySelector("#dayN"); 
var sdate = document.querySelector("#sdate")
var cday = document.querySelector("#sday")
var sMY = document.querySelector("#sMY")

var date = new Date(); //현재 시간의 데이터를 가지고 온다. (시간이 바뀐다)
var now = new Date();// 현재 시간의 데이터를 가지고 온다. (시간이 달라지지 않는다.)



function datecreate(){ //달력을 화면에 출력하는 함수
var firstDay = new Date(date.getFullYear(), date.getMonth(),1); //이번달의 1일 계산
var lastDay = new Date(date.getFullYear(), date.getMonth()+1,0); // 이번달의 마지막날 계산
var fdate = firstDay.getDate(); //이번달 시작 일 저장
var fday = firstDay.getDay(); //이번달 시작 요일 저장
var ldate = lastDay.getDate(); //이번달 마지막 일 저장
var newrow = neb.insertRow(); // 새로운 행을 만들어 준다.
var cou = 0; // 카운트 수를 만들어준다.

dayAndyear()
for(var i=0; i<ldate+fday; i++){ // 달력의 칸을 만들어준다 공백날짜 포함 
var newcell = newrow.insertCell();
cou++
if(cou%7===0){ //7번째 마다 행을 새롭게 추가하여 띄어준다.
    var newrow = neb.insertRow();
}
var td = document.querySelectorAll("td"); 
}
for(var i=fday; i<ldate+fday; i++){ // 시작하는 날짜부터 마지막 날까지 반복한다.
    td[i].textContent = fdate; //날짜를 칸마다 대입해준다.
    firstDay.setDate(firstDay.getDate()+1); //날짜를 하루씩 더해준다.
    fdate = firstDay.getDate(); // 더해준 날짜를 fdate에 넣어준다.

    //만약 현재 연도와 월이 캘린더의 연도와 월과 동일하다면 현재 날짜에 노란색 배경을 칠해주고 현재일을 표시해준다.
    if(now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth()){
        td[fday+now.getDate()-1].style.backgroundColor = "yellow";
        td[fday+now.getDate()-1].style.borderRadius = "50%";
        sdate.textContent = fday+now.getDate() // 오늘의 일 계산해주고 화면에 오늘의 일 표시
        checkday() //요일을 계산해준다.
    }
    else{ // 아니라면 1일을 표시해준다.
        sdate.textContent = 1;
        checkday() //요일을 계산해준다.
    }
}
for(var z=0; z<td.length; z++){ // 캘리더의 일을 클릭하는 반복문
    td[z].addEventListener("click", cdate);
}
}
datecreate() // 웹페이지가 열리면 바로 현재의 달의 달력 표시

pre.addEventListener("click", function(){ // 이전달로 가는 함수
    neb.textContent = ""; // 먼저 현재 달의 달력을 지운다 (안지우면 충돌)
    date = new Date(date.getFullYear(), date.getMonth()-1,1); // 캘린더에 표시된 월 에서 -1 을 해준다.
    datecreate(); //달력을 화면에 출력하는 함수 실행
    dayAndyear();// 캘린더의 년도와 월을 표시하는 함수
});

next.addEventListener("click", function(){ // 다음달로 가는 함수
    neb.textContent = ""; // 먼저 현재 달의 달력을 지운다 (안지우면 충돌)
    date = new Date(date.getFullYear(), date.getMonth()+1,1); // 캘린더에 표시된 월 에서 -1 을 해준다.
    datecreate(); //달력을 화면에 출력하는 함수 실행
    dayAndyear();// 캘린더의 년도와 월을 표시하는 함수
});

function cdate(){ //클릭된 일을 화면에 표시하는 함수
    if(Number(this.textContent)>0){ // 캘린더의 월중 앞뒤의 공백을 눌러도 표시되지 않도록 하는 부분 
    var seldate = this.textContent; // 클릭된 화면에 출력한 값을 seldate변수에 저장해준다.
    sdate.textContent = seldate; // seldate변수에 저장된 값을 화면에 출력해준다.
    checkday() // 달라진 일을 확인후 요일을 계산해주는 함수
}
}
function checkday(){ // 요일을 계산해주는 함수
    // 달력의 표시된 년도,월 을가지고오고 일로는 텍스트 화면에 표시된 수를 가지고온다.
    date = new Date(date.getFullYear(), date.getMonth(),Number(sdate.textContent));
    var sday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    cday.textContent = sday[date.getDay()]; // 위에서 만들어진 날짜의 요일을 가지고와 위배열에서 요일을 가지고 온다.
}

function dayAndyear(){ // 캘린더의 년도와 월을 표시하는 함수
    var month = ["JAN", "FED", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
    sMY.textContent = date.getFullYear() + " "+ month[date.getMonth()] // 년도와 위배열에서 해당하는 월을 화면에 표시한다.
}