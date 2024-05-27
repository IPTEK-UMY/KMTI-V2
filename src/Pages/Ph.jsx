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
  <div className="flex-row py-[10rem] px-24">
    <h1 className="text-[3rem]">Ph</h1>
    <h1>Pengurus Harian</h1>
    <hr />
    <div className="py-8 Ph flex justify-center">
      <img src={Phbg} alt="bg-ph" className="w-3/4 " />
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
          <h2 className="text-xl font-bold">Member Name 1</h2>
          <p className="text-md">Description of member 1.</p>
        </div>
      </div>
      <div className="card flex flex-col w-[20rem] items-center p-4 border rounded-lg shadow-lg">
        <img src={mei} alt="mei" className="w-full h-auto mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold">Member Name 2</h2>
          <p className="text-md">Description of member 2.</p>
        </div>
      </div>
      <div className="card flex flex-col w-[20rem] items-center p-4 border rounded-lg shadow-lg">
        <img src={caca} alt="caca" className="w-full h-auto mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold">Member Name 3</h2>
          <p className="text-md">Description of member 3.</p>
        </div>
      </div>
      <div className="card flex flex-col w-[20rem] items-center border rounded-lg shadow-lg">
        <img src={yoga} alt="yoga" className="w-full h-auto mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold">Member Name 4</h2>
          <p className="text-md">Description of member 4.</p>
        </div>
      </div>
      <div className="card flex flex-col w-[20rem] items-center border rounded-lg shadow-lg">
        <img src={amel} alt="amel" className="w-full h-auto mb-4" />
        <div className="text-center">
          <h2 className="text-xl font-bold">Member Name 4</h2>
          <p className="text-md">Description of member 4.</p>
        </div>
      </div>
    </div>
    </div>

    <div className="flex-row py-10">
      <h1 className="text-[3rem]">Proker</h1>
      <hr className="w-[2rem] md:w-[9rem] font-bold mb-4 border-2" />
    </div>

    <div className="flex-col">
      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold text-[2rem]">proker1</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate repellendus esse tenetur voluptas quis necessitatibus autem fugit, velit sit, consequatur labore. Omnis alias quos saepe id vel voluptates? Aliquid!</p>
      </div>

      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold text-[2rem]">proker1</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate repellendus esse tenetur voluptas quis necessitatibus autem fugit, velit sit, consequatur labore. Omnis alias quos saepe id vel voluptates? Aliquid!</p>
      </div>

      <div className="border px-4 py-4 my-6 rounded-xl">
        <h2 className="font-bold text-[2rem]">proker1</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptate repellendus esse tenetur voluptas quis necessitatibus autem fugit, velit sit, consequatur labore. Omnis alias quos saepe id vel voluptates? Aliquid!</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Ph;
