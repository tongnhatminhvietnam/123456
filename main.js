function checkPhoneNumber() {
  var phoneNumber = document.getElementById("phone_number").value;

  // Gọi hàm checkPhoneNumber() trong file Java
  var luckyNumber = Java.call("main.CheckPhoneNumber", phoneNumber);

  // Hiển thị mã số may mắn
  document.getElementById("lucky_number").innerHTML = luckyNumber;
}

// Gắn sự kiện click cho button "Nhận mã số may mắn"
document.getElementById("submit").onclick = checkPhoneNumber;

// Hàm hiển thị popup
function showPopup() {
  document.querySelector(".popup").style.display = "block";
  document.querySelector(".popup").style.zIndex = 2;
}

// Hàm xử lý sự kiện click của button "đóng"
function closePopup() {
  // Ẩn layer 2
  document.querySelector(".popup").style.display = "none";
}

// Gắn sự kiện click cho button "đóng"
document.getElementById("close").onclick = closePopup;

