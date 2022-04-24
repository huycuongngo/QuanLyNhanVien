
class NhanVien {
  constructor(taiKhoan, ten, email, password, ngayLam, luongCoBan, chucVu, gioLam, tongLuong, xepLoai) {
    this.taiKhoan = taiKhoan;
    this.ten = ten;
    this.email = email;
    this.password = password;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = tongLuong();
    this.xepLoai = xepLoai();
  }
}