import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contact">
    {/* <h2>Contact</h2> */}
    <div className="cont">
      <div className="con1">
        <i className="fa fa-envelope" aria-hidden="true"></i>
        <p><a href="mailto:nikshepkulli9@gmail.com">nikshepkulli9@gmail.com</a></p>
      </div>
      <div className="con2">
      <i class="fa fa-phone" aria-hidden="true"></i>
        <p><a href="tel:+1-203-220-1705">+1-203-220-1705</a></p>
      </div>
      <div className="con3">
      <i class="fab fa-linkedin" aria-hidden="true"></i>
        <p><a href="https://www.linkedin.com/in/nikshepkulli/">Nikshepkulli</a></p>
      </div>
      <div className="con3">
      <i class="fab fa-github" aria-hidden="true"></i>
        <p><a href="https://github.com/nikshepkulli">Nikshepkulli</a></p>
      </div>
      <div className="con4">
      <i class="fa fa-home" aria-hidden="true"></i>
        <p><a href="https://maps.app.goo.gl/GLsyy1mhuoRJzq9G9">238 Garfield Ave, Jersey City, Nj</a></p>
      </div>
    </div>
  </section>
);

export default Contact;
