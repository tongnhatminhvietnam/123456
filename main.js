// Hàm xử lý sự kiện click của button "Nhận mã số may mắn"
function checkPhoneNumber() {
 // Gọi hàm checkPhoneNumber() trong file Java
 var phoneNumber = document.getElementById("phone_number").value;
 var luckyNumber = Java.call("main.CheckPhoneNumber", phoneNumber);

 // Hiển thị mã số may mắn
 document.getElementById("lucky_number").innerHTML = luckyNumber;

 // Hiển thị layer 2
 document.querySelector(".popup").style.display = "block";
 document.querySelector(".popup").style.zIndex = 1;

 // Kiểm tra mã số may mắn
 if (phoneNumber.match(/^01234567891$/) || phoneNumber.match(/^0123456789$/)) {
  document.getElementById("lucky_number").innerHTML = "Mã số may mắn của bạn là " + luckyNumber;
 } else {
  document.getElementById("lucky_number").innerHTML = "Xin lỗi bạn không có trong danh sách khách mời, liên hệ ông Tống Nhật Minh 0858881398 để làm thủ tục check in";
 }
}
