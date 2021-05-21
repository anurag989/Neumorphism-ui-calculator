const body =  document.getElementsByTagName('body')[0];
const screen = document.getElementsByClassName("screen")[0];
const btns = document.getElementsByClassName("btn");
const toggleBtn = document.getElementsByClassName("switch-container")[0];
let isLight = true;

const reset = () =>{
    screen.innerHTML = "";
}

const compute = () => {
    let result;
    try{
        let exprsn = screen.innerText.replace("x","*");
        result = eval(exprsn);
    }catch(err){
        result = "E R R O R"
    }

    screen.innerText = result;
}

const del = () => {
    let screenText = screen.innerText;
    screen.innerText = screenText.substring(0,screenText.length-1);
}

const initateCalc = () =>{
    reset();
    for (let i=0; i< btns.length; i++){

        btns[i].addEventListener('click', (e) => {
            let val = e.target.innerText;
            switch (val){
                case 'DEL': del(); break;
                case '='  : compute(); break;
                case 'CE' : reset(); break;
                default: screen.innerText += val; break;
            }
        })
    };
}

toggleBtn.addEventListener('click', ()=>{

    if(isLight){
        body.classList.remove("light");
        body.classList.add("dark");
    }else{
        body.classList.remove("dark");
        body.classList.add("light");
    }
    isLight = !isLight;

})

// Code to detect browser version and display message for IE 11 and below.
if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1 || /Edge\/\d./i.test(navigator.userAgent)){
    body.innerText ="This browser is not supported. Works best in Chrome or Firefox.";
}else{
    initateCalc();
}
