// 전역 변수 선언
let currentInput = '0';  // 현재 입력된 값
let previousInput = '';  // 이전 값
let operation = null;    // 현재 연산자
let shouldResetScreen = false;  // 화면을 리셋해야 하는지 여부

// 디스플레이 업데이트 함수
function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput;
}

// 입력 값 삭제 버튼 기능
function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    shouldResetScreen = false;
    updateDisplay();
}

// JS-1: 숫자 입력 함수 구현
function appendNumber(number) {
    // 여기에 코드 작성
   if (shouldResetScreen) {
    currentInput = "0";     
    shouldResetScreen = false;
  }
  if (currentInput === "0") {
    currentInput = number.toString(); 
  } else {
    currentInput += number; 
  }
  updateDisplay();
}

// JS-2: 연산자 입력 함수 구현
function appendOperator(op) {
    // 여기에 코드 작성
    if(!shouldResetScreen && currentInput !== null){
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    shouldResetScreen = true;
}

// JS-3: 계산 함수 구현
function calculate() {
    // 여기에 코드 작성
    let result;
    if(operation === null || previousInput === '') return;
    let previous = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    if(operation === '+'){
        result = previous + current;
    }else if(operation === '-'){
        result = previous - current;
    }else if(operation === '*'){
        result = previous * current;
    }else if(operation === '/'){
        if(current === '0'){
            alert('0으로는 나눌수가 없어요!');
        }else{
            result = previous / current;
        }
    }
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    shouldResetScreen = true;
    updateDisplay();
}

// JS-4: 소수점 추가 함수 구현 (도전 과제)
function appendDecimal() {
    // 여기에 코드 작성
    if(shouldResetScreen){
        currentInput = '0';
        shouldResetScreen = false;
    }
    if(!currentInput.includes('.')){
        currentInput += '.';
    }
    updateDisplay();
}

// 초기 디스플레이 설정
updateDisplay();
