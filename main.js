function checkPhoneNumber() {
  var phoneNumber = document.getElementById("phone_number").value;

  // Kiểm tra số điện thoại và hiển thị mã số may mắn tương ứng
  if (phoneNumber == "01234567891") {
    document.getElementById("lucky_number").innerHTML = "1";
  } else if (phoneNumber == "0123456789") {
    document.getElementById("lucky_number").innerHTML = "2";
  } else {
    // Hiển thị popup với thông báo hỗ trợ
    showPopup();
    document.getElementById("lucky_number").innerHTML = "Xin lỗi bạn vui lòng liên hệ anh Nhật Minh sđt 08588813988 để được hỗ trợ";
  }
}

// Gắn sự kiện click cho button "Nhận mã số may mắn"
document.getElementById("submit").onclick = function() {
  checkPhoneNumber();
};

// Hàm hiển thị popup
function showPopup() {
  document.querySelector(".popup").style.display = "block";
  document.querySelector(".popup").style.zIndex = 2;
}
