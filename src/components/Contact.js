import React from "react";
import "./Contact.css";


const Contact = () => (
  <section id="contact">
    {/* <h2>Contact</h2> */}
    <div class="cont">
    <div class="con1">
     <h4>Gmail:</h4>
     <p><a href="mailto:nikshepkulli9@gmail.com">nikshepkulli9@gmail.com</a></p>
    </div>
    <div class="con2">
     <h4>Phone Number:</h4>
     <p><a href="tel:+1-203-220-1705">+1-203-220-1705</a></p>
    </div>
    <div class="con3">
     <h4>LinkedIn:</h4>
     <p><a href="https://www.linkedin.com/in/nikshepkulli/">Nikshepkulli</a></p>
    </div>
    <div class="con3">
     <h4>Github:</h4>
     <p><a href="https://github.com/nikshepkulli">Nikshepkulli</a></p>
    </div>
    <div class="con4">
     <h4>Address:</h4>
     <p><a href="https://maps.app.goo.gl/GLsyy1mhuoRJzq9G9">238 Garfield Ave, Jersey City, Nj</a></p>
    </div>
    </div>
  </section>
);

export default Contact;
