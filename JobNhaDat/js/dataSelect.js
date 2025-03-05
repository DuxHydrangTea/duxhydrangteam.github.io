const checkAll = document.getElementById('check-all');
const idList = document.getElementsByName('id')
const multiSelected = document.getElementsByClassName('function-multi-select')[0];
var numberOfChecked =0;
checkAll.addEventListener('change',function(){
    if(checkAll.checked == true){
        idList.forEach((element)=>{
            element.checked = true;
            numberOfChecked = idList.length;
        })
    }
    else{
        idList.forEach((element)=>{
            element.checked = false;
            numberOfChecked = 0;
        })
    }
})

// get count of checked
multiSelected.querySelector('span').innerText =`Đã chọn: ${numberOfChecked}`;


// when any id is checked, block be show
idList.forEach((el)=>{
    el.addEventListener('change',function(){
        if(el.checked){
            multiSelected.classList.remove('hidden')
        }
    });
})


