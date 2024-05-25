import '../components/home.css'
import React, { useState, useEffect } from 'react';
import sky from '../Assets/Images/Home-Images/sky.png';
import moon from '../Assets/Images/Home-Images/moon.png';
import water from '../Assets/Images/Home-Images/water.png';
import center from '../Assets/Images/Home-Images/center-city.png';
import right from '../Assets/Images/Home-Images/right-city.png';
import left from '../Assets/Images/Home-Images/left-city.png';
import train from '../Assets/Images/Home-Images/train.png';
import rail from '../Assets/Images/Home-Images/rail.png';
import hiilleft from '../Assets/Images/Home-Images/hill-left-1.png';
import hillright from '../Assets/Images/Home-Images/hill-right-1.png';
import kmtibg from '../Assets/images-kmti/kmti-bg.png';
import ph from '../Assets/Images/divisi/ph.png';
import kastrad from '../Assets/Images/divisi/kastrad 2.png';
import humas from '../Assets/Images/divisi/humas 1.png';
import iptek from '../Assets/Images/divisi/iptek ds 1.png';
import medpro from '../Assets/Images/divisi/medpro 1.png';
import kwu from '../Assets/Images/divisi/kwu 1.png';
import kh from '../Assets/Images/divisi/kerohanian 1.png';
import sbo from '../Assets/Images/divisi/sbo 1.png';
import event1 from '../Assets/Images/event/event1.png';
import event2 from '../Assets/Images/event/event2.png';
import event3 from '../Assets/Images/event/event3.png';
import event4 from '../Assets/Images/event/event4.png';
import event5 from '../Assets/Images/event/event5.png';
import event6 from '../Assets/Images/event/event6.png';
import event7 from '../Assets/Images/event/event7.png';
import { MdGroups2 } from "react-icons/md";
import { GrObjectUngroup } from "react-icons/gr";
import { MdOutlineWork } from "react-icons/md";
import { LuAlignEndVertical } from "react-icons/lu";




const Home = () => {
  const [] = useState(false);

  // Function to toggle visibility of navigation list



  useEffect(() => {
    // Memanggil elemen DOM di dalam useEffect untuk memastikan bahwa elemen tersebut sudah ada dalam DOM saat diakses
    let moonElement = document.getElementById('moon');
    let textElement = document.getElementById("text");
    let trainElement = document.getElementById("train");

    const handleScroll = () => {
      let value = window.scrollY;
      if (moonElement) {
        moonElement.style.top = value * 0.3 + "px";
      }
      if  (textElement) {
        textElement.style.top = 80 + value * -0.2 +'%';
      }
      if (trainElement) {
        trainElement.style.left = value * 1.5+ "px" ;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  


  return (
    <>


      <section className="parallax-home" id='home'>
        <img src={sky} alt="" />
        <img src={moon} alt="" id="moon"/>
        <img src={water} alt="" />
        <img src={center} alt="" />
        <img src={right} alt="" />
        <img src={left} alt="" />
        <img src={train} alt="" id="train"/>
        <img src={rail} alt="" />
        <h1 id="text">K M T I website</h1>
        <img src={hiilleft} alt="" />
        <img src={hillright} alt="" />
      </section>
      <section className="about" id="about">
        <div className="info-box">
          <span class="a">A</span>
          <span class="b">B</span>
          <span class="c">O</span>
          <span class="d">U</span>
          <span class="e">T</span>
          
          <span class="f">K</span>
          <span class="g">M</span>
          <span class="h">T</span>
          <span class="i">I</span>
          <div class="flex-col container py-30 my-14 bgkmti">
          <img src={kmtibg} alt="bgkmti" className='object-cover' /> 
          <p>
          Keluarga Mahasiswa Teknologi Informasi atau biasa dikenal dengan KMTI, merupakan organisasi yang berada di dalam Program Studi Teknologi Informasi 
Universitas Muhammadiyah Yogyakarta. KMTI adalah organisasi tunggal dan independen. Dengan nama Keluarga Mahasiswa Teknologi Informasi, KMTI memiliki peran yang sangat penting dalam membangun rasa kekeluargaan serta menghimpun seluruh mahasiswa yang ada di dalam Program Studi Teknologi Informasi UMY. Selain itu, KMTI juga bertanggung jawab untuk menjadi jembatan penghubung antara mahasiswa dengan pimpinan Program Studi Teknologi Informasi UMY. Program Studi Teknologi Informasi
juga termasuk di dalam Fakultas Teknik, maka dari itu KMTI merupakan 
bagian dari Keluarga Mahasiswa Fakultas Teknik atau biasa dikenal dengan KMFT.
          </p>
          </div>
        </div>

      </section>

      <section id='divisi'>
      <div class="container-nav">
        <nav class="oval-navbar">
            <ul>
                <li><a href="#"><GrObjectUngroup /> 60 Anggota Divisi</a></li>
                <li><a href="#"><MdGroups2 /> 9 divisi</a></li>
                <li><a href="#"><MdOutlineWork /> 32 Program Kerja</a></li>
            </ul>
        </nav>
    </div>
      <div class="container-divisi">
        <h3 class="section-title">Our Divisi</h3>
        <div class="gambar-container">
        <div class="gambar">
        <img src={ph} alt="" />
        </div>
        <div class="gambar">
        <img src={kastrad} alt="" />
        </div>
        <div class="gambar">
        <img src={humas} alt="" />
        </div>
        <div class="gambar">
        <img src={iptek} alt="" />
        </div>
        <div class="gambar">
        <img src={medpro} alt="" />
        </div>
        <div class="gambar">
        <img src={kwu} alt="" />
        </div>
        <div class="gambar">
        <img src={kh} alt="" />
        </div>
        <div class="gambar">
        <img src={sbo} alt="" />
        </div>
        </div>
    </div>

    <div className="container-event" id='event'>
      <h2 className="text-center font-bold text-[2rem]">
         O U R  EVENT:
      </h2>
      <div className="card-container">
        <div className="card">
        <img src={event1} alt="" />
        </div>
        <div className="card">
        <img src={event2} alt="" />
        </div>
        <div className="card">
        <img src={event3} alt="" />
        </div>
        <div className="card">
        <img src={event4} alt="" />
        </div>
        <div className="card">
        <img src={event5} alt="" />
        </div>
        <div className="card">
        <img src={event6} alt="" />
        </div>
        <div className="card">
        <img src={event7} alt="" />
        </div>
      </div>
    </div>
      </section>

      <footer className="footer">
    <div className="footer-left">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1696482899447!2d110.36748581432085!3d-7.782395679393118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58417b009bc9%3A0xc49c0b07dfdb7ac5!2sUniversitas%20Muhammadiyah%20Yogyakarta!5e0!3m2!1sen!2sid!4v1646015250406!5m2!1sen!2sid
            " 
            width="300" 
            height="200" 
            style={{ border: "0" }} // Perbaikan disini
            allowfullscreen="" 
            loading="lazy">
        </iframe>
    </div>
    <div className="footer-right">
        <div className="contact-info">
            <h3></h3>© KMTI Periode 23/24, All Rights Reserved
            <p>Alamat</p>
        </div>
        <div className="description">
            <p>Jl. Brawijaya, Geblagan, Tamantirto, Kec. Kasihan,
Kabupaten Bantul, Daerah Istimewa Yogyakarta 55183</p>
        </div>
    </div>
    
</footer>

    </>
  );
};

export default Home;
