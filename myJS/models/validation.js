


var validatorNhanVien = {
  kiemTraRong: function (string, idErr, message) {
    let value = string;

    console.log(value);

    if (value == "Chọn chức vụ") {
      // console.log(value);
      document.getElementById(idErr).innerText = message;
      return false;
    }

    if (value.length > 0) {
      document.getElementById(idErr).innerText = "";
      return true;
    }

    document.getElementById(idErr).innerText = message;
    return false;
  },

  kiemTraNhanVienTonTai: function (accNew, nhanVienArr) {
    var index = nhanVienArr.findIndex((nhanVien) => {
      return nhanVien.taiKhoan === accNew;
    });
    if (index == -1) {
      document.getElementById("tbTKNV").innerText = "";
      return true;
    }
    document.getElementById("tbTKNV").innerText = "Nhan Vien Da Ton Tai";
    return false;
  },

  kiemTraTaiKhoan: function (string, idErr) {
    const accRegex = /^[0-9]{4,6}$/g;
    let isValid = accRegex.test(string);
    if (!isValid) {
      document.getElementById(idErr).innerText = "Tai Khoan Toi Da 4-6 Ky So";
      return false;
    }
    document.getElementById(idErr).innerText = ""
    return true
  },

  kiemTraTen: function (string, idErr) {
    const nameRegex = /^[^\d]+$/;
    let isValid = nameRegex.test(string);
    if (!isValid) {
      document.getElementById(idErr).innerText = "Ten Chi Duoc Chua Ky Tu";
      return false;
    }
    document.getElementById(idErr).innerText = "";
    return true;
  },

  kiemTraEmail: function (string, idErr) {
    var isValidEmail = validator.isEmail(string)
    if (!isValidEmail) {
      document.getElementById(idErr).innerText = "Email Khong Hop Le"
      return false;
    }
    return true;
  },

  kiemTraMatKhau: function (string, idErr) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/
    let isValid = passwordRegex.test(string);
    if (!isValid) {
      document.getElementById(idErr).innerText = "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)"
      return false;
    }
    document.getElementById(idErr).innerText = "";
    return true;
  },
  
  kiemTraGioLam: function (string, idErr) {
    var giolam = parseInt(string);
    console.log("gio lam", value);
    if (giolam >= 80 && giolam <= 200) {
      document.getElementById(idErr).innerText = "";
      return true;
    }
    document.getElementById(idErr).innerText = "Số giờ làm trong tháng 80 - 200 giờ";
    return false;
  }
}



