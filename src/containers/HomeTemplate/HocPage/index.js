import React from "react";
import Nhanvien from "./Nhanvien";
import Sanpham from "./Sanpham";
import WithCard from "./with-card";

const WrapperCard = WithCard(Sanpham);

export default function HocPage() {
  return (
    <div className="container mt-5">
      {/* <h1>Nhan Vien</h1>
      <Nhanvien /> */}
      <br />
      <h1>San Pham</h1>
      <WrapperCard />
    </div>
  );
}
