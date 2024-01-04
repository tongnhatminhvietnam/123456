function checkLuckyNumber() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var resultLayer = document.getElementById('resultLayer');
    var resultMessage = document.getElementById('resultMessage');

    if (phoneNumber === '01234567891') {
        resultMessage.innerHTML = 'Mã số may mắn của bạn là 1.';
    } else if (phoneNumber === '0123456789') {
        resultMessage.innerHTML = 'Mã số may mắn của bạn là 2.';
    } else if (phoneNumber === '') {
        resultMessage.innerHTML = 'Vui lòng nhập số điện thoại.';
    } else {
        resultMessage.innerHTML = 'Xin lỗi, bạn vui lòng liên hệ anh Nhật Minh để được hỗ trợ.';
    }

    resultLayer.style.display = 'block';
}
