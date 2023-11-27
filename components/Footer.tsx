import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="footer bg-light-red py-20">
      <div className="box-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 lg:px-20">
        <div className="box text-center flex-col">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <a href="/" className="link">
            <i className="fas fa-arrow-right mr-2"></i> Home
          </a>
          <a href="/inventory" className="link">
            <i className="fas fa-arrow-right mr-2"></i> Vehicles
          </a>
          <a href="/admin" className="link">
            <i className="fas fa-arrow-right mr-2"></i> Admin
          </a>
          {/* Other quick link items */}
        </div>

        <div className="box text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <a href="tel:636-239-1600" className="link">
            <i className="fas fa-phone mr-2"></i> (636) 239-1600
          </a>
          <a href="tel:636-221-8857" className="link">
            <i className="fas fa-phone mr-2"></i> (636) 221-8857
          </a>
          <a href="mailto:elbertmotorco@gmail.com" className="link">
            <i className="fa fa-envelope"></i> elbertmotorco@gmail.com
          </a>
          <a href="mailto:noah.jelbert@gmail.com" className="link">
            <i className="fa fa-envelope"></i> noah.jelbert@gmail.com
          </a>
          {/* Other contact items */}
        </div>

        <div className="box text-center">
          <h3 className="text-2xl font-bold mb-4">Follow Our Social Media!</h3>
          <a
            href="https://www.facebook.com/profile.php?id=100083162479252&mibextid=LQQJ4d"
            className="link"
          >
            <i className="fab fa-facebook-f mr-2"></i> Facebook
          </a>
          {/* Other social media items */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
