function digitalclock(){

const date = new Date();
    console.log(date);

    const hours = date.getHours();
    console.log(hours);

    const minutes = date.getMinutes();
    console.log(minutes);

    const seconds = date.getSeconds();
    console.log(seconds);
    let indianhours;
    if (hours>12){
        indianhours = hours-12;
    }
    else{
        indianhours = hours;
    }

    const hours1 = document.getElementsByClassName('time3');
    console.log(hours1);
    hours1[0].innerHTML = `${indianhours}`
    hours1[1].innerHTML = `${minutes}`
    hours1[2].innerHTML = `${seconds} `

    let am_pm;
    if (hours>12){
        am_pm = "PM";
    }
    else{
        am_pm = "AM";
    }
    let am_pm1 = document.getElementsByClassName('am1');
    am_pm1[0].innerHTML= `${am_pm}`;

}
setInterval(()=>{
    digitalclock();
},1000);
    
    // const minutes1 = document.getElementsByClassName('minutes');
    // minutes1[0].innerHTML = `${minutes} :`
    
    // const seconds1 = document.getElementsByClassName('seconds');
    // seconds1[0].innerHTML = `${seconds} `