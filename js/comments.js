const container = document.querySelector('.Newcomment');

const renderComments = async()=>{
    let uri =' http://localhost:3000/Comments';

    const res = await fetch(uri);
    const comments = await res.json();
    console.log(comments);

    // let template = '';
    // comments.forEach(comments => {
    //     template += `
    //     <div class="comments">
    //     <h2>${comments.body}</h2>
    //     <p>${comments.body}</p>
    //     `
    // })
    // container.innerHTML = template; 
}

window.addEventListener('DOMContentLoaded',() => renderComments());



const form = document.querySelector('add-comment');

const createComment = async(e) =>{
    e.preventDefault();

    const doc ={
        body:form.body.value
    }

    await fetch('http://localhost:3000/Comments',{
        method:'POST',
        body:JSON.stringify(doc),
        headers:{'Content-Type':'application/json'}
    });
}

form.addEventListener('submit',createPost);
