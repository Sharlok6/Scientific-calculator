function dis(val){
    const display= document.getElementById('display');
    display.value += val;
}
function solve(){
    const display = document.getElementById('display');
    let x=display.value;
    let y=eval(x);
    display.value=y;
}
function del(){
    const display=document.getElementById('display');
    display.value ='';
}
function x2(){
    const display = document.getElementById('display');
    display.value = Math.pow(display.value,2);
}
function x3(){
    const display = document.getElementById('display');
    display.value = Math.pow(display.value,3);
}
function sqrt(){
    const display= document.getElementById('display');
    display.value = Math.sqrt(display.value);
}
function cubert(){
    const display= document.getElementById('display');
    display.value = Math.cbrt(display.value);
}
function sin(){
    const display = document.getElementById('display');
    display.value=Math.sin(display.value*(Math.PI/180));
}
function cos(){
    const display = document.getElementById('display');
    display.value=Math.cos(display.value*(Math.PI/180));
}
function tan(){
    const display = document.getElementById('display');
    display.value=Math.tan(display.value*(Math.PI/180));
}
function asin(){
    const display = document.getElementById('display');
    display.value=Math.asin(display.value);
}
function acos(){
    const display = document.getElementById('display');
    display.value=Math.acos(display.value);
}
function atan(){
    const display = document.getElementById('display');
    display.value=Math.atan(display.value);
}
function asinh(){
    const display = document.getElementById('display');
    display.value=Math.asinh(display.value);
}
function acosh(){
    const display = document.getElementById('display');
    display.value=Math.acosh(display.value);
}
function atanh(){
    const display = document.getElementById('display');
    display.value=Math.atanh(display.value);
}
function ln(){
    const display = document.getElementById('display');
    display.value=Math.log(display.value);
}
function log(){
    const display = document.getElementById('display');
    display.value=Math.log10(display.value);
}
function exp(){
    const display = document.getElementById('display');
    display.value=Math.exp(display.value);
}
function exp_10(){
    const display = document.getElementById('display');
    display.value=Math.pow(10,display.value);
}
function factorial(){
    const display = document.getElementById('display');
    if(display.value=='0'||display.value=='1'){
        display.value=1;
        return display.value;
    }
    else if(display.value % 1==0){
        var i;
        for(i=display.value-1;i>0;i--){
            display.value *=i;
        }
        return display.value;
    }
}
function rem(){
    const display = document.getElementById('display');
    display.value= display.value+'%';
}
function inverse(){
    const display = document.getElementById('display');
    display.value=1/display.value;
    return display.value;
}
function backSpace(){
    const display=document.getElementById('display');
    display.value = display.value.slice(0,-1);

}