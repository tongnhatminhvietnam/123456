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

  // Hiển thị layer 1
  document.querySelector(".container").style.display = "block";
}

// Đặt mặc định là hiển thị layer 1
document.querySelector(".container").style.display = "block";

// Chỉnh màu chữ thành màu đen ở trong input text
document.querySelector("#phone_number").style.color = "black";
