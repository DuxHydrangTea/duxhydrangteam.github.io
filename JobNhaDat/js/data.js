class Notification{
    constructor(id, functionName, content,status,notificationAt){
        this.id = id;
        this.functionName = functionName;
        this.content = content;
        this.status = status;
        this.notificationAt = notificationAt;
    }
}

var x1 = new Notification(1,'Đăng ký tài khoản', 'Thành viên Zim Nguyễn vừa đăng ký tài khoản mới',0, '21-09-2024 10:10:41')
var x2 = new Notification(2,'Đăng ký tài khoản', 'Thành viên Zim Nguyễn vừa đăng ký tài khoản mới',1, '21-09-2024 10:10:41')
var x3 = new Notification(3,'Đăng ký tài khoản', 'Thành viên Zim Nguyễn vừa đăng ký tài khoản mới',0, '21-09-2024 10:10:41')
var x4 = new Notification(4,'Đăng ký tài khoản', 'Thành viên Zim Nguyễn vừa đăng ký tài khoản mới',1, '21-09-2024 10:10:41')

listNoti =[
    x1,x2,x3,x4
]


const tBody = document.querySelector('#table-data tbody')

listNoti.forEach(element => {
    tBody.innerHTML += `<tr class="table-data-item">
                            <td>
                                <input type="checkbox" name="id" value="1" />
                            </td>
                            <td>
                                <span>1</span>
                            </td>
                            <td>
                                <span>#${element.id}</span>
                            </td>
                            <td><span>${element.functionName}</span></td>
                            <td>
                                <span>${element.content}</span>
                            </td>
                            <td><span class="${element.status? 'saw' : 'have-not-seen'}">${element.status? 'Đã xem' : 'Chưa xem'}</span></td>
                            <td><span>${element.notificationAt}</span></td>
                            <td>
                                <button class="action-button see-detail hover-darker">
                                    <i class="fa-regular fa-eye"></i>
                                </button>
                                <button class="action-button reset hover-darker">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>`
});

function updateData(){

}