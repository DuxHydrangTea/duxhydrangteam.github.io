

function handleClickDropDown(tagButton, tagMenu, update = false){
  const buttonDropDown = document.getElementById(tagButton);
  const menuDropDown = document.getElementById(tagMenu);



  buttonDropDown.addEventListener('click', function(){
      menuDropDown.classList.toggle('hidden');
  })


  
  // document.addEventListener('click', (event) => {
  //   if (!event.target.matches(`#${tagButton}`) && !event.target.matches(`#${tagMenu} *`)) {
  //     menuDropDown.classList.add('hidden');
  //   }
  // });





  //
  //
  //
  if(update)
    updateSelect(tagMenu)

}


function updateSelect(tagMenu){
    var currentIndex = 0;
    const menuSelect = document.querySelectorAll(`#${tagMenu} li`);
    menuSelect[currentIndex].classList.add("selected");
    menuSelect.forEach((liElement, index)=>{
    liElement.addEventListener('click', function (){
        currentIndex = index;
        liElement.classList.add('selected');
        var x =  liElement.getAttribute('value');
        console.log(`data = ${x}`);
        menuSelect.forEach((liElement, index)=>{
            if(index !== currentIndex){
                liElement.classList.remove('selected')
            }
        })
    })
    })
}