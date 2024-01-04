// Hàm xử lý sự kiện click của button "Nhận mã số may mắn"
function checkPhoneNumber() {
  // Gọi hàm checkPhoneNumber() trong file Java
  var luckyNumber = Java.call("main.CheckPhoneNumber", phoneNumber);

  // Hiển thị mã số may mắn
  document.getElementById("lucky_number").innerHTML = luckyNumber;

  // Hiển thị layer 2
  document.querySelector(".popup").style.display = "block";
}

// Hàm xử lý sự kiện click của button "đóng"
function closePopup() {
  // Ẩn layer 2
  document.querySelector(".popup").style.display = "none";

  // Hiển thị layer 1
  document.querySelector(".container").style.display = "block";
}

// Gắn sự kiện click cho button "Nhận mã số may mắn"
document.getElementById("submit").onclick = checkPhoneNumber;

