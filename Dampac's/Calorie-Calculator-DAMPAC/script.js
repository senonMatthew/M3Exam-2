
function find(id){
    return document.getElementById(id);
}



const button = find("btn");
const resetButton = find("reset");
let output = find("result");
let slider = find("duration")
let slidervalue = find("slidervalue");
let activity = find("activity");
let sliderbar = find("slider");



slider.oninput = function() {
    slidervalue.innerHTML = this.value + ' min';
}



function actMenu(){
    if(activity.value != '0'){
        slider.disabled = false;
        sliderbar.style.opacity = 1;
    }else{
        slider.disabled = true;
        slider.value = '0';
        sliderbar.style.opacity = 0.1;
        slidervalue.innerHTML = '';
    }
}



function actCal(){
    let result = find("activity").value * find("duration").value;
        return Math.round(result);
}




function calculate() {
    const male = find("male");
    const female = find("female");
    let age = Math.round(find("age").value);
    let height = Math.round(find("height").value);
    let weight = Math.round(find("weight").value);
    let work = Math.round(find("work").value);
    let maleSum = 10 * weight + 6.25 * height - 5 * age + 5;
    let femaleSum = 10 * weight + 6.25 * height - 5 * age - 161;
    let maleTotal = maleSum + work + actCal();
    let femaleTotal = femaleSum + work + actCal();
    if(age === 0 || height === 0 || weight === 0){
       alert('Did you fill textfields?')
    }else if(male.checked){
        output.innerHTML = 'Your calorie consumption is ' + maleTotal + ' kcal per day.';
    }else if(female.checked){
        output.innerHTML = 'Your calorie consumption is ' + femaleTotal + ' kcal per day.';
    }else if(male.checked == false || female.checked == false){
        alert("No gender selected!");
    }
}



function reset() {
    find("age").value = '';
    find("height").value = '';
    find("weight").value = '';
    find("male").checked = false;
    find("female").checked = false;
    find("work").value = '0';
    activity.value = '0';
    output.innerHTML = '';
    slidervalue.innerHTML = '0 min';
    duration.value = '0';
    slider.disabled = true;
    sliderbar.style.opacity = 0.1;
}



button.onclick = calculate;
resetButton.onclick = reset;
slider.disabled = true;
activity.onchange = actMenu;

