function checkPhoneNumber() {
  var phoneNumber = document.getElementById("phone_number").value;
  if (phoneNumber == "01234567891") {
    document.getElementById("lucky_number").innerHTML = "1";
  } else if (phoneNumber == "0123456789") {
    document.getElementById("lucky_number").innerHTML = "2";
  } else {
    document.getElementById("popup").style.display = "block";
    document.getElementById("lucky_number").innerHTML = "Xin lỗi bạn vui lòng liên hệ anh Nhật Minh sđt 08588813988 để được hỗ trợ";
  }
}

document.getElementById("submit").onclick = function() {
  checkPhoneNumber();
};
function showPopup() {
  document.querySelector(".popup").style.display = "block";
  document.querySelector(".popup").style.zIndex = 2;
}
