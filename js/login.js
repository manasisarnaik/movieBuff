function check(e){
        event.preventDefault();
 
          var username = document.getElementById("username").value;
          var pass = document.getElementById("password").value;
          localStorage.setItem("nameKey",username);
     
          var user = localStorage.getItem("record");
          var data = JSON.parse(user);
      
     
         if(user == null){
            alert("Enter UserName !!!!");
           
         }else if(username == data.username && pass == data.password){
            alert("Login Successful  !!!!");
             window.location.href="movie-gallery.html";
         }else{
            alert("Enter Correct Password !!!!");
         } 
         
     
     }