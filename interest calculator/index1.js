function calculate(){
    const totalamount=document.getElementById("total-amount");
    const principleinput=document.getElementById("principal");
    const rateinput=document.getElementById("rate");
    const yearsinput=document.getElementById("years");
    
    let principal=Number(principleinput.value);
    let rate=Number(rateinput.value);
    let years=Number(yearsinput.value);
    if(principal<0 || isNaN(principal)){
        principal=0;
        principaleinput.value=0;
    }
    if(rate<0 || isNaN(rate)){
        rate=0;
        rateinput.value=0;
    }
    if(years<0 || isNaN(rate)){
        years=0;
        rateinput.value=0;
    }



    const result=principal * Math.pow((1+rate/1),1*years)
    totalamount.textContent=result.toLocaleString(undefined,{style:"currency",currency:"INR"});




}