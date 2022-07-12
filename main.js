

window.addEventListener('load', () => {

let taskform = document.querySelector("form");

taskform.addEventListener("submit", function(e){

    e.preventDefault();

    const tasks = document.getElementById("task").value;
    const durations = document.getElementById("duration").value;
    if(tasks != "" && durations != ""){
        const div = document.createElement('div');
        div.classList.add('todo-list-item');
        const h2 = document.createElement('h2');
        h2.setAttribute('id', 'taskName');
        h2.textContent = tasks;
        div.appendChild(h2);
        const rightdiv = document.createElement('div');
        rightdiv.classList.add('right-side');
        const p = document.createElement('p')
        p.textContent = durations + " hours";
        rightdiv.appendChild(p);
        const btn1 = document.createElement('button');
        btn1.classList.add('complete')
        const btn2 = document.createElement('button');
        btn2.classList.add('delete')
        btn1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        btn2.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        rightdiv.appendChild(btn1);
        rightdiv.appendChild(btn2);
    
        div.appendChild(rightdiv);
        document.querySelector('.todo-list').appendChild(div);

        btn1.addEventListener("click", function(){
            btn1.innerHTML = '<p class="complete-p">Completed</p>'
        })

        btn2.addEventListener("click", function(){
            document.querySelector('.todo-list').removeChild(div);
        })
    
        document.getElementById("task").value = "";
        document.getElementById("duration").value = "";
    }

    
    

})
})
