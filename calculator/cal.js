let inputbar=document.querySelector("input")

let expresstion=" "

function clicki(x)
{
    expresstion=expresstion+x;
    inputbar.value=expresstion
}
function equali()
{
    expresstion=eval(expresstion);
    inputbar.value=expresstion
}
function erasei()
{
    expresstion=" ";
    inputbar.value=expresstion
}