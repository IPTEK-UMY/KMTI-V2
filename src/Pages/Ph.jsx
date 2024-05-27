import React from "react";
import Phbg from "../Assets/images-kmti/ph-images/bg-ph.png";
import salman from "../Assets/images-kmti/ph-images/salman.png";
import mei from "../Assets/images-kmti/ph-images/mei.png";
import caca from "../Assets/images-kmti/ph-images/caca.png";
import yoga from "../Assets/images-kmti/ph-images/yoga.png";
import amel from "../Assets/images-kmti/ph-images/amel.png";
import "../components/ph.css";

function Ph() {
  return (
    <>
      <section className="mx-w-full">
  <div className="md:flex-row md:py-[4rem] md:pt-[8rem] pt-[8rem] py-[4rem] px-4 md:px-24">
    <h1 className="text-[3rem]">Ph</h1>
    <h1>Pengurus Harian</h1>
    <hr />
    <div className="py-8 Ph flex justify-center">
      <img src={Phbg} alt="bg-ph" className="md:w-3/4 " />
    </div>
    <hr />
    <div className="flex-row py-10">
      <h1 className="text-[3rem]">Our TEAM</h1>
      <hr className="w-[2rem] md:w-[9rem] font-bold mb-4 border-2" />
    </div>
    <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="card flex flex-col w-[20rem] items-center p-4 border rounded-lg shadow-lg">
        <img src={salman} alt="salman" className="w-full h-auto mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold">Salman firdaus</h2>
          <p className="text-md">ketua himpunan kmti</p>
        </div>
      </div>
      <div className="card flex flex-col w-[20rem] items-center p-4 border rounded-lg shadow-lg">
        <img src={mei} alt="mei" className="w-full h-auto mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold">Mei Tri Cahyani</h2>
          <p className="text-md">sekretaris jendral</p>
        </div>
      </div>
      <div className="card flex flex-col w-[20rem] items-center p-4 border rounded-lg shadow-lg">
        <img src={caca} alt="caca" className="w-full h-auto mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold">Dhiya ulhaq</h2>
          <p className="text-md">Bendahara</p>
        </div>
      </div>
      <div className="card flex flex-col w-[20rem] items-center border rounded-lg shadow-lg">
        <img src={yoga} alt="yoga" className="w-full h-auto mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold">Yoga Prasetya</h2>
          <p className="text-md">wakil ketua kmti</p>
        </div>
      </div>
      <div className="card flex flex-col w-[20rem] items-center border rounded-lg shadow-lg">
        <img src={amel} alt="amel" className="w-full h-auto mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold">Ikhda Amalia</h2>
          <p className="text-md">Sekretaris Utama</p>
        </div>
      </div>
    </div>
    </div>

    <div className="flex-row md:py-10 py-5">
      <h1 className="md:text-[3rem] text-[2rem]">Proker</h1>
      <hr className="w-[4rem] md:w-[9rem] font-bold mb-4 border-2" />
    </div>

    <div className="flex-col">
      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold md:text-[2rem] text-[20px]">Rapat kerja</h2>
      <p>rapat setiap bulan</p>
      </div>

      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold md:text-[2rem] text-[20px]">tri wulan</h2>
      <p>Rapat setiap 3 bulan sekali dan lpj</p>
      </div>

      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold md:text-[2rem] text-[20px]">rapat besar</h2>
      <p>setiap akhir bulan</p>
      </div>

      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold md:text-[2rem] text-[20px]">kongres ketua angkatan 2023</h2>
      <p>minggu kedua di bulan november 2023</p>
      </div>

      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold md:text-[2rem] text-[20px]">kongres pemilihan ketua IT Specta XII</h2>
      <p>minggu kedua di bulan november 2023</p>
      </div>

      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold md:text-[2rem] text-[20px]">IT Specta</h2>
      <p>Januari - Maret 2024</p>
      </div>

      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold md:text-[2rem] text-[20px]">kongres ketua mataf prodi</h2>
      <p>3 bulan sebelum mataf universitas di bulan juni 2022</p>
      </div>

      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold md:text-[2rem] text-[20px]">sinan</h2>
      <p>di minggu bulan agustus 2024</p>
      </div>

      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold text-[2rem]md:text-[2rem] text-[20px]">panitia pelantikan periode 2024/2025</h2>
      <p>di minggu kedua atau ketiga bulan september</p>
      </div>
    </div>
  </div>
</section>
<footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p>&copy; 2024 . All rights reserved.</p>
      </div>
    </footer>

    </>
  );
}

export default Ph;
