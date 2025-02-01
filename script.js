let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");

celcius.addEventListener('input', function(){
    cel = parseFloat(celcius.value);
    fah = (9/5 * cel) + 32;
    fahrenheit.value = fah;
})

fahrenheit.addEventListener('input', function(){
    fah = parseFloat(fahrenheit.value);
    cel = (fah - 32) * 5/9;
    celcius.value = cel;
})