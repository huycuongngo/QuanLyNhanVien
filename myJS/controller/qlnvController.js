var layThongTinTuForm = function () {
  var taiKhoan = document.getElementById("tknv").value.trim();
  var ten = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var ngayLam = document.getElementById("datepicker").value.trim();
  var luongCoBan = document.getElementById("luongCB").value.trim();
  var chucVu = document.getElementById("chucvu").value.trim();
  var gioLam = document.getElementById("gioLam").value.trim();

  var tongLuong = () => {
    if (chucVu === "Sếp")
      return luongCoBan * 3;
    else if (chucVu === "Trưởng phòng")
      return luongCoBan * 2;
    else
      return luongCoBan;
  }

  var xepLoai = () => {
    if (gioLam >= 192)
      return "Xuất sắc";
    else if (gioLam >= 176)
      return "Giỏi";
    else if (gioLam >= 160)
      return "Khá";
    else
      return "Trung bình";
  }

  var nv = new NhanVien(taiKhoan, ten, email, password, ngayLam, luongCoBan, chucVu, gioLam, tongLuong, xepLoai);

  return nv;
}



// render
var renderNhanVienArr = (nhanVienArr) => {
  var contentHTML = "";
  for (let i = 0; i < nhanVienArr.length; i++) {
    var nhanVienHienTai = nhanVienArr[i];
    var contentTr = `<tr>
                        <td>${nhanVienHienTai.taiKhoan}</td>
                        <td>${nhanVienHienTai.ten}</td>
                        <td>${nhanVienHienTai.email}</td>
                        <td>${nhanVienHienTai.ngayLam}</td>
                        <td>${nhanVienHienTai.chucVu}</td>
                        <td>${nhanVienHienTai.tongLuong}</td>
                        <td>${nhanVienHienTai.xepLoai}</td>
                        <td>
                          <button onclick="suaNhanVien('${nhanVienHienTai.taiKhoan}')" class="btn btn-success" data-toggle="modal"
									        data-target="#myModal">Sửa</button>
                          <button class="btn btn-danger" onclick="xoaNhanVien('${nhanVienHienTai.taiKhoan}')">Xóa</button>
                        </td>
                      </tr>`

    contentHTML += contentTr
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}


// local storage
var setLocalNhanVien = (nhanVienLocal, nhanVienArr) => {
  let jsonNhanVienArray = JSON.stringify(nhanVienArr);
  localStorage.setItem(nhanVienLocal, jsonNhanVienArray);
};





