// Hàm xử lý sự kiện click của button "Nhận mã số may mắn"
function checkPhoneNumber() {
 // Gọi hàm checkPhoneNumber() trong file Java
 var phoneNumber = document.getElementById("phone_number").value;
 var luckyNumber = Java.call("main.CheckPhoneNumber", phoneNumber);

 // Hiển thị mã số may mắn
 document.getElementById("lucky_number").innerHTML = luckyNumber;

 // Kiểm tra mã số may mắn
 if (phoneNumber.match(/^01234567891$/) || phoneNumber.match(/^0123456789$/)) {
  document.getElementById("lucky_number").innerHTML = "Mã số may mắn của bạn là " + luckyNumber;
 } else {
  document.getElementById("lucky_number").innerHTML = "Xin lỗi bạn không có trong danh sách khách mời, liên hệ ông Tống Nhật Minh 0858881398 để làm thủ tục check in";
 }

 // Thêm thông tin về thời gian check-in
 document.getElementById("time_check_in").innerHTML = "Thời gian check-in: 8h30 - 9h30";
}
