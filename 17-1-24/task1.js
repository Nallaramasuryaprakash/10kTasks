function generateotp() {

    var digits = '1234567890';
    var otp = ''
    for (i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    console.log(otp);
}

generateotp()
