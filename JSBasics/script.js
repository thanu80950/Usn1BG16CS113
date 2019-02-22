/*
//decision making 
var age=18;
if(age<18){
    console.log("minor");
}else if(age>=18){
    console.log("major");
}

//con?true:false
age>=18?console.log("major"):console.log("minor");
*/
/*
//function
function sachin(firstname,lastname){
    console.log(firstname+'.'+lastname);
}
sachin('swathi','thanu');

//array

var names=["'Tanu's",'shubha','swathi']
console.log(names[2]);
console.log(names.length);

names.push("Shrisairam");
names.unshift("Ramu");
//names.pop();
console.log(names);
*/
/* //trial problem method
var bill1= 124;
var bill2=48;
var bill3=268;
function calculator(bill1,bill2,bill3){
    console.log(bill1+','+bill2+','+bill3);
}
if(bill<50)
{
  console.log("0.2*bill2");
}else if(bill>=50&&bill<=200)
{
   console.log("0.15*bill1");
}
else(bill>200)
{
    console.log("0.1*bill3");
}
var bill=['bill1','bill2','bill3']
console.log("bill"); */

 /*
  var myDetails={
      firstname:'sachin',
      lastname:'srivat',
      dob:1990,
      family:['swathi','shubha'],
      calacge:function(birthyear){
          return 2019-birthyear;
      }
    };

    console.log(myDetails,firstname);
    var z='dob';
    console.myDetails[z];

    myDetails.dob=1990;
    console.log(myDetails);

    //new object

    var shiva=new Object();
    shiva,firstname='swathi';
    console.log(shibva);

    //
    console.log('swathi is ' +myDetails.calcage(1990)+'years old');

  }
*/

var result=[];
var tot_bil=[];
var tip=[];
function cal_rest1(bill){

    if(bill>50){
        reduce=(0.2)*bill;
        result.push(tot_bil);
        total_bill=reduce +bill;
        tot_bil.push(total_bill);
    }
    else if(bill>50 && bill<200){
        reduce=(0.15)*bill;
        result.push(tot_bil);
        total_bill=reduce +bill;
        tot_bil.push(total_bill);
    }
    else{
         reduce=(0.1)*bill;
        result.push(tot_bil);
        total_bill=reduce +bill;
        tot_bil.push(total_bill);
    }
    console.log(tip);
    console.log(tot_bil);
}
cal_rest1(43);
cal_rest1(124);
cal_rest1(268);