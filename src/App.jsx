import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-purple via-pink-accent to-white-bg text-text-dark font-poppins">
      <nav className="p-4 flex justify-between items-center bg-dark-purple text-white shadow-md">
        <div className="text-2xl font-bold">Sabrina's - Portfolio</div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <a
              href="#about"
              className="hover:text-pink-accent transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-pink-accent transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-pink-accent transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <header className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-8 text-center bg-dark-purple bg-opacity-80 rounded-b-3xl shadow-xl mx-auto max-w-7xl">
        <div className="relative mb-8 transform hover:scale-105 transition-transform duration-300">
          <img
            src={`${import.meta.env.BASE_URL}profil.png`}
            alt="Profil"
            className="rounded-full w-48 h-48 object-cover border-4 border-pink-accent shadow-2xl"
          />
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
          Hi, I'm <span className="text-pink-accent">Sabrina Qodri Nova</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-light-purple mb-6">
          Tech Enthusiast | FrontEnd Developer
        </h2>
        <p className="max-w-xl text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          Passionate about creating exceptional digital experiences with modern
          technologies. I build scalable web applications and love solving
          complex problems.
        </p>
        <div className="flex space-x-6">
          <a
            href="mailto:sabrinaqodri@gmail.com"
            className="px-8 py-3 bg-pink-accent text-dark-purple font-semibold rounded-full shadow-lg hover:bg-white transition duration-300 transform hover:-translate-y-1"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/sabrinaqodri/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-dark-purple font-semibold rounded-full shadow-lg hover:bg-pink-accent transition duration-300 transform hover:-translate-y-1"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section
        id="about"
        className="py-20 px-8 bg-white-bg text-text-dark text-center"
      >
        <h3 className="text-4xl font-bold text-dark-purple mb-8">About Me</h3>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Saya adalah seorang IT Enthusiast dengan fokus pada pengembangan
          frontend. Saya memiliki ketertarikan yang kuat dalam menciptakan
          antarmuka pengguna yang intuitif dan responsif. Dengan latar belakang
          lulusan S1 - Teknik Informatika Universitas Muhammadiyah Prof. DR.
          HAMKA, saya bersemangat untuk terus belajar dan mengimplementasikan
          solusi inovatif.
        </p>
      </section>

      <section
        id="projects"
        className="py-20 px-8 bg-gradient-to-b from-dark-purple via-pink-accent to-dark-purple text-center"
      >
        <h3 className="text-4xl text-pink-accent font-bold mb-8">
          My Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold mb-3">Project Pertamaku</h4>
            <p className="text-gray-400 mb-4">COOMING SOON</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-accent hover:underline font-medium"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold mb-3">Project Keduaku</h4>
            <p className="text-gray-400 mb-4">COOMING SOON</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-accent hover:underline font-medium"
            >
              View Project
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-semibold mb-3">Project Ketigaku</h4>
            <p className="text-gray-400 mb-4">COOMING SOON</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-accent hover:underline font-medium"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-8 bg-dark-purple text-white text-center"
      >
        <h3 className="text-4xl font-bold mb-8">Contact Me</h3>
        <p className="text-lg mb-6">
          Tertarik untuk berkolaborasi? Mari terhubung!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:sabrinaqodri@gmail.com"
            className="text-white hover:text-pink-accent transition duration-300 text-2xl"
          >
            <i className="fa-solid fa-envelope"></i> sabrinaqodri@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/sabrinaqodri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-accent transition duration-300 text-2xl"
          >
            <i className="fa-brands fa-linkedin"></i>{" "}
            linkedin.com/in/sabrinaqodri/
          </a>
        </div>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </section>

      <footer className="py-6 text-center text-sm bg-dark-purple text-gray-300 border-t border-medium-purple">
        &copy; {new Date().getFullYear()} Sabrina Qodri Nova. All rights
        reserved.
      </footer>
    </div>
  );
}

export default App;
