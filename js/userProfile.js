var prof=JSON.parse(localStorage.getItem("record"));
document.getElementById('profName').innerHTML=prof.username;
document.getElementById('profMobile').innerHTML=prof.phone;
document.getElementById('profEmail').innerHTML=prof.email;
document.getElementById('profPlan').innerHTML=prof.plan;
document.getElementById('profPassword').innerHTML=prof.password;

let imgProf = document.getElementById('output');
imgProf.src = localStorage.getItem('image');
 function updatePic(){

}


function updatePlan(){
 var updatePlan= document.querySelector('input[type=radio]:checked').value;
var record=JSON.parse(localStorage.record);
record.plan=updatePlan;
localStorage.setItem("record",JSON.stringify(record));
alert("Plan Updated to "+updatePlan);
window.location.reload(true);
}

function updatePassword(){
        var updatePass=document.getElementById('newPassword').value;
        var oldPass=document.getElementById('oldPassword').value;
       var record=JSON.parse(localStorage.record);
       if(oldPass == record.password) {
       record.password=updatePass;
       localStorage.setItem("record",JSON.stringify(record));
       alert("Changed Password Succesfully");
       window.location.reload(true);
}else{
        alert("wrong password");
}
       
}