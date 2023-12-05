import React from "react";
import logo from "../images/Logo .svg";
const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>
            We are a family owned mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
        </div>
        <div>
          <h3>important Links</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <l1>
              <a href="">Login</a>
            </l1>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <ul>
            <li>
              Address: <br /> 123 Towncity , Usa
            </li>
            <li>
              Phone: <br /> +234 806 933 9457
            </li>
            <li>
              Email: <br /> Devjungles001@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>

          <ul>
            <li><a href=""></a>Facebook</li>
            <li><a href="">Instagram</a></li>
            <li><a href=""></a>Twitter</li>
            
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
