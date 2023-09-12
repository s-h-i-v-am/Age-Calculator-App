
const day = document.querySelector('.day'), // day input
month = document.querySelector('.month'), // month input
year = document.querySelector('.year'), // year input
errorMsg = document.querySelectorAll('.error-msg'), // Geeting inputs error msg 
arrowBtn = document.querySelector('.divider img'); // arrow btn

const MonthsDay = [31,28,31,30,31,30,31,31,30,31,30,31];

// Day Validation Function

function DayValidate()
{
    if(day.value == '')
    {
        day.classList.remove('active');
        day.classList.add('error');
        errorMsg[0].innerHTML = `This field is required`;
        errorMsg[0].style.display = 'block';
    }
    else
    {
        day.classList.add('active');
        errorMsg[0].style.display = 'none';

        if(Number(day.value) > 31)
        {
            day.classList.remove('active');
            day.classList.add('error');
            errorMsg[0].innerHTML = `Must be a valid date`;
            errorMsg[0].style.display = 'block';
        }
        else
        {
            
        }
    }
}

// Month Validation Function

function MonthValidate()
{
    if(month.value == '')
    {
        month.classList.remove('active');
        month.classList.add('error');
        errorMsg[1].innerHTML = `This field is required`;
        errorMsg[1].style.display = 'block';
        // errorMsg[0].style.display = 'none';
    }
    else
    {
        month.classList.add('active');
        errorMsg[1].style.display = 'none';

        if(Number(month.value) == 0 || Number(month.value)>12)
        {
            month.classList.remove('active');
            month.classList.add('error');
            errorMsg[1].innerHTML = `Must be a valid Month`;
            errorMsg[1].style.display = 'block';
        }
        else
        {
            if(Number(day.value) == 30 || Number(day.value) == 31)
            {
                if(Number(day.value) > MonthsDay[month.value-1])
                {
                    day.classList.remove('active');
                    day.classList.add('error');
                    errorMsg[0].innerHTML = `Must be a valid date`;
                    errorMsg[0].style.display = 'block';
                }
                else
                {
                    day.classList.remove('error');
                    errorMsg[0].style.display = 'none';
                }
            }
        }
    }

    
}

// Year Validation Function

function YearValidate()
{
    const currentDate = new Date();

    let Currentyear = currentDate.getFullYear();

    if(year.value == '')
    {
        year.classList.remove('active');
        year.classList.add('error');
        errorMsg[2].innerHTML = `This field is required`;
        errorMsg[2].style.display = 'block';
    }
    else
    {
        year.classList.add('active');
        errorMsg[2].style.display = 'none';

        if(Number(year.value) > Currentyear)
        {
            year.classList.remove('active');
            year.classList.add('error');
            errorMsg[2].innerHTML = `Must be in the past`;
            errorMsg[2].style.display = 'block';
        }
    }

    
}

let years = document.getElementById('years'),
months = document.getElementById('months'),
days = document.getElementById('days');


function Calculate()
{
   let DOBday = Number(day.value),
   DOBmonth = Number(month.value),
   DOByear = Number(year.value);

   const CurrentDate = new Date();

   let currentday = CurrentDate.getDate(),
   currentmonth = CurrentDate.getMonth() + 1,
   currentyear = CurrentDate.getFullYear();

   // Calculating Year

   let yr;

   yr = currentyear - DOByear;

   if(DOBmonth >= currentmonth)
   {
        yr--;
   }

   // Calculating Month

   let mon;

   if(currentmonth > DOBmonth)
   {
    mon = currentmonth - DOBmonth;

    if(currentday < DOBday)
    {
        mon--;
    }
   }
   else
   {
    mon = DOBmonth - currentmonth;
    if(currentday < DOBday)
    {
        mon++;
    }
    mon = 12 - mon;
   }

   // calculating day

   let da;

   if(DOBday > currentday)
   {
        let remainingDays = MonthsDay[Number(month.value) - 1] - DOBday;
        da = remainingDays + currentday; 
   }
   else
   {
        da = currentday - DOBday;
   }

//    console.log(da,mon,yr);
   years.innerHTML = yr;
   months.innerHTML = mon;
   days.innerHTML = da;
}

arrowBtn.addEventListener('click',function(){

    Calculate();

})