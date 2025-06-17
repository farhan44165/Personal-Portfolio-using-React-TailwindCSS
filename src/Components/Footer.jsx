import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700 text-white py-6 px-4 pt-12">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left px-5 md:px-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Farhan Fareed</h3>
            <p className="leading-relaxed text-white/80 text-justify">
              Full Stack Developer passionate about creating beautiful,
              functional web applications that make a difference.
            </p>
            <div className="flex justify-center md:justify-start space-x-8 pt-5">
              <a
                href="https://pk.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-sky-700 hover:scale-110 transition duration-500 inline-flex"
              >
                <Linkedin className="text-white" size={20} />
              </a>
              <a
                href="https://github.com/farhan44165"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-sky-700 hover:scale-110 transition duration-500 inline-flex"
              >
                <Github className="text-white" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <div className="leading-relaxed text-white/80 flex flex-col space-y-2">
              <div className="leading-relaxed text-white/80 flex flex-col space-y-2">
                <a
                  href="#home"
                  className="hover:text-white transition-all duration-300 hover:scale-110"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-white transition-all duration-300 hover:scale-110"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="hover:text-white transition-all duration-300 hover:scale-110"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="hover:text-white transition-all duration-300 hover:scale-110"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="hover:text-white transition-all duration-300 hover:scale-110"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Services</h3>
            <div className="leading-relaxed text-white/80 flex flex-col space-y-2">
              <p>Web Development</p>
              <p>Coding</p>
              <p>MS Office</p>
              <p>API Development</p>
              <p>Consulting</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <h3 className="text-white font-semibold">Created By Farhan Fareed</h3>
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} All rights reserved. Built with React
            and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
