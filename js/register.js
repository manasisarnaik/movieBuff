console.log("majids");

function store(e){
        event.preventDefault();
    
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
        var pass = document.getElementById('password').value;
        var phone = document.getElementById('phone').value;
        var plan=document.querySelector('input[type=radio]:checked').value;
       
        var imgPath = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            localStorage.setItem("image", reader.result);
        }, false);
        
        if (imgPath) {
            reader.readAsDataURL(imgPath);
        }
    
        var user = {
            email: email,
            username: username,
            password: pass,
            phone: phone,
            plan:plan,
       };
        
        var json = JSON.stringify(user);
        localStorage.setItem("record",json);
        console.log("User Added");
        alert("Registration Successful !!!!");
        window.location.href="login.html";
        
    }



