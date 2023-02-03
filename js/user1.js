

const imgDiv = document.querySelector('.profile-pic');
const img = document.querySelector('#output');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('.-label');
 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});



imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});



file.addEventListener('change', function(){
    
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); 

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
localStorage.setItem("image",reader.result);
    }
});
