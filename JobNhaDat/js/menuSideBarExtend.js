const list_button_menu = document.querySelectorAll('.side-bar-list li');
const list_menu = document.querySelectorAll('.menu-extend');



list_button_menu.forEach((btn)=>{

    btn.addEventListener('mouseover', function(){
        list_menu.forEach((m)=>{
           if(m.getAttribute('target') === btn.getAttribute('menu-target')){
                m.classList.remove('hidden');
           }
           else{
            m.classList.add('hidden');
        
           }
        })
        
    })


})

