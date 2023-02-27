 let calculation = document.getElementById("calculation");
function inputValue(value) {
    calculation.value += value;
}

 function clearAll()
 {
     calculation.value = "";
 }
function result()
{
    let result = eval(calculation.value);
    calculation.value = result;
}
