const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

var objects;
var objectsCallBack = function () {
    objects = document.querySelectorAll('.date');
    objects.forEach(function (object) {
        object.addEventListener('click',clickCallback);
    })};
var clickCallback = function(event) {
    if (event.currentTarget.classList.contains("inactive")) {
        if (event.currentTarget.textContent>7){
            alert("Você clicou em: " + event.currentTarget.textContent 
                +" de "+ new Date(currentDate.getFullYear(),currentDate.getMonth()-1,event.currentTarget.textContent).
                toLocaleString('default',{month: 'long', year: 'numeric'}));
        }else{
            alert("Você clicou em: " + event.currentTarget.textContent 
                +" de "+ new Date(currentDate.getFullYear(),currentDate.getMonth()+1,event.currentTarget.textContent).
                toLocaleString('default',{month: 'long', year: 'numeric'}));
        }
    }else{
        alert("Você clicou em: " + event.currentTarget.textContent 
                +" de "+ currentDate.toLocaleString
                ('default',{month: 'long', year: 'numeric'}));
    }
    }
    

let yearElement = document.getElementById('yearSearch');
let monthElement = document.getElementById('monthSearch');

let currentDate =  new Date();

const updateCalendar = () =>{
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear,currentMonth,0);
    const lastDay = new Date(currentYear,currentMonth + 1,0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString
    ('default',{month: 'long', year: 'numeric'});

    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    console.log(lastDay);
    console.log(lastDayIndex);
    for(let i = firstDayIndex; i>=0; i--){
        const prevDate = new Date(currentYear,currentMonth,
        0 - i);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;

    }

    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear,currentMonth,i);
        const activeClass = date.toDateString() === new Date().
        toDateString() ? 'active' : '';
        datesHTML+=`<div class="date ${activeClass}">${i}</div>`;
    }

    for (let i = 1; i < 7 - lastDayIndex; i++) {
        // console.log(lastDayIndex);
        // console.log(lastDay);
        const nextDate = new Date(currentYear,currentMonth+1,
        i);
        console.log(nextDate,i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }
 
    datesElement.innerHTML = datesHTML;
    clickEnventDate();
}

prevBtn.addEventListener('click', ()=>{
    currentDate.setMonth(currentDate.getMonth()-1);
    updateCalendar();
})

nextBtn.addEventListener('click', ()=>{
    currentDate.setMonth(currentDate.getMonth()+1);
    updateCalendar();
})

updateCalendar();

function setDate() {
    var year = parseInt(yearElement.value);
    var month = parseInt(monthElement.value);

    if (!isNaN(year) && !isNaN(month)) {
        if ((year>=1900 && year<275760) && (month>0 && month<13)) {
            currentDate = new Date(year,month-1,1);
            updateCalendar();
        }else{
            yearElement.classList.add("error");
            monthElement.classList.add("error");
                setTimeout(()=>{
                    yearElement.classList.remove("error");
                    monthElement.classList.remove("error");
                },500)
        }
    }else{
        yearElement.classList.add("error");
        monthElement.classList.add("error");
            setTimeout(()=>{
                    yearElement.classList.remove("error");
                    monthElement.classList.remove("error");
                },500)
    }
}

function cleanDate(){
    currentDate = new Date();
    yearElement.value = '';
    monthElement.value = '';
    updateCalendar();
}

function clickEnventDate() {
    if (objects!= null) {
        objects.forEach(function(object){
            object.removeEventListener('click',clickCallback);
        })
    }
    
    objects = document.querySelectorAll('.date');
    objects.forEach(function (object) {
        object.addEventListener('click',clickCallback);
    });
}


