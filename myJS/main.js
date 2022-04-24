
const NHAN_VIEN_LOCAL = "nhanVienLocal";

var nhanVienArr = [];

//render list from local in the first time loading
var jsonArr = localStorage.getItem(NHAN_VIEN_LOCAL);

if (!jsonArr) {
  console.log("error");
} else {
  nhanVienArr = JSON.parse(jsonArr);
  // render bi loi => cách fix bug là không gọi function trong template string
  renderNhanVienArr(nhanVienArr);
}




// reset date in the first time loading
var Reset = () => {
  document.getElementById("formQLNV").reset();
  document.getElementById("tknv").disabled = false;
}


var themNguoiDung = function () {

  var newNhanVien = layThongTinTuForm();

  var accNew = newNhanVien.taiKhoan;

  var isValid = true;

  isValid =
    validatorNhanVien.kiemTraRong(newNhanVien.taiKhoan, "tbTKNV", "Tai Khoan Khong Duoc Rong") &
    validatorNhanVien.kiemTraRong(newNhanVien.ten, "tbTen", "Ten Khong Duoc Rong") &
    validatorNhanVien.kiemTraRong(newNhanVien.email, "tbEmail", "Email Khong Duoc Rong") &
    validatorNhanVien.kiemTraRong(newNhanVien.password, "tbMatKhau", "Mat Khau Khong Duoc Rong") &
    validatorNhanVien.kiemTraRong(newNhanVien.ngayLam, "tbNgay", "Ngay Lam Khong Duoc Rong") &
    validatorNhanVien.kiemTraRong(newNhanVien.luongCoBan, "tbLuongCB", "Luong Khong Duoc Rong") &
    validatorNhanVien.kiemTraRong(newNhanVien.chucVu, "tbChucVu", "Chuc Vu Khong Hop Le") &
    validatorNhanVien.kiemTraRong(newNhanVien.gioLam, "tbGiolam", "Gio Lam Khong Duoc Rong");

  
  isValid = isValid &&
    validatorNhanVien.kiemTraNhanVienTonTai(accNew, nhanVienArr) &&
    validatorNhanVien.kiemTraTaiKhoan(accNew, "tbTKNV") &&
    validatorNhanVien.kiemTraTen(newNhanVien.ten, "tbTen") &&
    validatorNhanVien.kiemTraEmail(newNhanVien.email, "tbEmail") &&
    validatorNhanVien.kiemTraMatKhau(newNhanVien.password, "tbMatKhau");

  if (isValid) {
    nhanVienArr.push(newNhanVien);

    // console.log(nhanVienArr);

    renderNhanVienArr(nhanVienArr);

    // sau khi them Nhan Vien thanh cong thi clear input
    document.getElementById("formQLNV").reset();

    // them nhan vien Local Storage
    setLocalNhanVien(NHAN_VIEN_LOCAL, nhanVienArr);
  } 
};


var kiemTraIndex = (acc) => {
  return nhanVienArr.findIndex((nhanvien) => {
    return nhanvien.taiKhoan === acc;
  })
};


var xoaNhanVien = (acc) => {
  let index = kiemTraIndex(acc);
  if (index !== -1) {
    nhanVienArr.splice(index, 1);
    renderNhanVienArr(nhanVienArr);
    setLocalNhanVien(NHAN_VIEN_LOCAL, nhanVienArr);
  }

};


var suaNhanVien = (acc) => {
  let index = kiemTraIndex(acc);
  console.log()
  if (index !== -1) {
    var nv = nhanVienArr[index]
  }
  document.getElementById("tknv").value = nv.taiKhoan;
  document.getElementById("tknv").disabled = true;
  document.getElementById("name").value = nv.ten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.password;
  document.getElementById("datepicker").value = nv.ngayLam;
  document.getElementById("luongCB").value = nv.luongCoBan;
  document.getElementById("chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLam;
}


var capNhatNhanVien = () => {
  var acc = document.getElementById("tknv").value;
  let index = kiemTraIndex(acc);
  if (index !== -1) {
    var newNhanVien = layThongTinTuForm();

    var isValid = true;

    isValid =
      validatorNhanVien.kiemTraRong(newNhanVien.ten, "tbTen", "Ten Khong Duoc Rong") &
      validatorNhanVien.kiemTraRong(newNhanVien.email, "tbEmail", "Email Khong Duoc Rong") &
      validatorNhanVien.kiemTraRong(newNhanVien.password, "tbMatKhau", "Mat Khau Khong Duoc Rong") &
      validatorNhanVien.kiemTraRong(newNhanVien.ngayLam, "tbNgay", "Ngay Lam Khong Duoc Rong") &
      validatorNhanVien.kiemTraRong(newNhanVien.luongCoBan, "tbLuongCB", "Luong Khong Duoc Rong") &
      validatorNhanVien.kiemTraRong(newNhanVien.chucVu, "tbChucVu", "Chuc Vu Khong Hop Le") &
      validatorNhanVien.kiemTraRong(newNhanVien.gioLam, "tbGiolam", "Gio Lam Khong Duoc Rong");


    isValid = isValid &&
      validatorNhanVien.kiemTraTen(newNhanVien.ten, "tbTen") &&
      validatorNhanVien.kiemTraEmail(newNhanVien.email, "tbEmail") &&
      validatorNhanVien.kiemTraMatKhau(newNhanVien.password, "tbMatKhau");
    
    if (isValid) {
      nhanVienArr[index] = newNhanVien;
      renderNhanVienArr(nhanVienArr);

    
      document.getElementById("formQLNV").reset();
      document.getElementById("tknv").disabled = false;
      setLocalNhanVien(NHAN_VIEN_LOCAL, nhanVienArr);
    }
  }
}


// search nhan vien
var timNhanVien = () => {
  var keyword = document.getElementById("searchName").value.trim();
  
  console.log("xep loai", keyword);

  var arrayResult = nhanVienArr.filter((nv) => {
    return nv.xepLoai.includes(keyword);
  });

  renderNhanVienArr(arrayResult);
}







