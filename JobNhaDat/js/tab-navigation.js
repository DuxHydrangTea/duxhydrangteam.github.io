const tabButtons = document.querySelectorAll(".tabs-list button");
// console.log(tabButtons)
const tabs = document.querySelectorAll(".change-info-container");


tabButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       
        let btnTabName = btn.getAttribute('tab-button');
        tabs.forEach((tab)=>{
            if(tab.getAttribute('tab')===btnTabName){
                tab.classList.remove('hidden');
            }
            else{
                tab.classList.add('hidden');
            }
        })
        tabButtons.forEach((b)=>{
            if(btnTabName === b.getAttribute('tab-button')){
                b.classList.add('active-tab')
            }
            else{
                b.classList.remove('active-tab')
            }
        })

    })
    
})