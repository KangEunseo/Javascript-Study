
var id = document.querySelector("#id");
var pwd = document.querySelector("#pswd1");
var alertTxt = document.querySelector("#alertTxt");
var pwImg1 = document.querySelector("#pswd1_img1");
var pwd_chk = document.querySelector("#pswd2");
var pwImg2 = document.querySelector("#pswd2_img1");
var userName = document.querySelector("#name");
var year = document.querySelector("#yy");
var month = document.querySelector("#mm");
var day = document.querySelector("#dd");
var gender = document.querySelector("#gender");
var email = document.querySelector("#email");
var phone = document.querySelector("#mobile");

var error_boxes = document.querySelectorAll(".error_next_box");
// [ id, pswd1, pswd2, name, yy, dd, email, mobile ]
var inputs = document.querySelectorAll("input");
var inputIndex;



// 각 압력 요소에 이벤트 연결
id.onblur = chkId;
pwd.onblur = chkPwd;
pwd_chk.onblur = comparePwd;
userName.onblur = chkName;
year.onblur = chkBirth;
month.onblur = chkBirth;
day.onblur = chkBirth;
gender.onblur = chkGender;
email.onblur = chkEmail;
phone.onblur = chkPhone;



// 공백 확인
function chkInput(i){
    if(inputs[i].value.length === 0){
        error_boxes[i].innerHTML = "필수 정보입니다.";
        error_boxes[i].style.color = "red";
        error_boxes[i].style.display = "inline-block";
    }
}

// ID 확인
function chkId() {
    var idPattern = /[a-z0-9_-]{5,20}/;
    inputIndex = 0;

    if(id.value === "") chkInput(inputIndex);
    else if(!idPattern.test(id.value)) {
        error_boxes[0].innerHTML = "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
        error_boxes[0].style.color = "red";
        error_boxes[0].style.display = "inline-block";
    } else {
        error_boxes[0].innerHTML = "멋진 아이디네요!";
        error_boxes[0].style.color = "#2DB400";
        error_boxes[0].style.display = "inline-block";
    }
}

// PWD 확인
function chkPwd() {
    var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
    inputIndex = 1;

    if(pwd.value === "") chkInput(inputIndex);
    else if(!pwPattern.test(pwd.value)) {
        error_boxes[1].innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
        alertTxt.innerHTML = "사용불가";
        error_boxes[1].style.display = "inline-block";
        
        alertTxt.style.display = "inline-block";
        pwImg1.src = "img/m_icon_not_use.png";
    } else {
        error_boxes[1].style.display = "none";
        alertTxt.innerHTML = "안전";
        alertTxt.style.display = "inline-block";
        alertTxt.style.color = "#2DB400";
        pwImg1.src = "img/m_icon_safe.png";
    }
}

// PWD 비교
function comparePwd() {
    inputIndex = 2;

    if(pwd_chk.value === "") chkInput(inputIndex);
    else if(pwd_chk.value === pwd.value) {
        pwImg2.src = "img/m_icon_check_enable.png";
        error_boxes[2].style.display = "none";
    } else {
        pwImg2.src = "img/m_icon_check_disable.png";
        error_boxes[2].innerHTML = "비밀번호가 일치하지 않습니다.";
        error_boxes[2].style.display = "inline-block";
    } 
}

// NAME 확인
function chkName() {
    var namePattern = /[a-zA-Z가-힣]/;
    inputIndex = 3;

    if(userName.value === "") chkInput(inputIndex);
    else if(!namePattern.test(userName.value)) {
        error_boxes[3].innerHTML = "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
        error_boxes[3].style.display = "inline-block";
    } else {
        error_boxes[3].style.display = "none";
    }
}

// BIRTH 확인
function chkBirth() {
    var yearPattern = /[0-9]{4}/;

    if(!yearPattern.test(year.value)) {
        error_boxes[4].innerHTML = "태어난 년도 4자리를 정확하게 입력하세요.";
        error_boxes[4].style.display = "inline-block";
    } else {
        chkMonth();
    }

    function chkMonth() {
        if(month.value === "월") {
            error_boxes[4].innerHTML = "태어난 월을 선택하세요.";
        } else {
            chkDay();
        }
    }

    function chkDay() {
        if(day.value === "") {
            error_boxes[4].innerHTML = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
        } else {
            isBirthRight();
        }
    }
}
function isBirthRight() {
    var datePattern = /\d{1,2}/;
    if(!datePattern.test(day.value) || Number(day.value) < 1 || Number(day.value) > 31) {
        error[4].innerHTML = "생년월일을 다시 확인해주세요.";
    } else {
        chkAge();
    }
}

function chkAge() {
    if(Number(year.value) < 1920) {
        error[4].innerHTML = "정말이세요?";
    } else if(Number(year.value) > new Date().getFullYear()) {
        error[4].innerHTML = "미래에서 오셨군요. ^^";
    } else if(Number(year.value) >= new Date().getFullYear() - 14) {
        error[4].innerHTML = "만 14세 미만의 어린이는 보호자 동의가 필요합니다.";
    } else {
        error[4].style.display = "none";
    }
}

// GENDER 확인
function chkGender() {
    if(gender.value === "성별") {
        error_boxes[5].style.display = "inline-block";
    } else {
        error_boxes[5].style.display = "none";
    }
}

function chkEmail() {
    var emailPattern = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;
    inputIndex = 6;

    if(email.value === "") chkInput(inputIndex);
    else if(!emailPattern.test(email.value)) {
        error_boxes[6].style.display = "inline-block";
    } else {
        error_boxes[6].style.display = "none"; 
    }

}

// PHONE 확인
function chkPhone() {
    var phonePattern = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/;
    inputIndex = 7;

    if(phone.value === "") chkInput(inputIndex);
    else if(!phonePattern.test(phone.value)) {
        error_boxes[7].innerHTML = "형식에 맞지 않는 번호입니다.";
        error_boxes[7].style.display = "inline-block";
    } else {
        error_boxes[7].style.display = "none";
    }

    
}
