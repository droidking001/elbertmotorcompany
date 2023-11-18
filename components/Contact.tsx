import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>Contact</span> Us
      </h1>
      <div className="row">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.253867269828!2d-91.00037158387195!3d38.55096437489333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d94ebc4559198d%3A0xc709ebd6941d937b!2s351%20Fulton%20St%2C%20Washington%2C%20MO%2063090!5e0!3m2!1sen!2sus!4v1675353930846!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form action="mail.php" method="post">
          <h3>Get in touch</h3>
          <input type="text" name="name" placeholder="Name" className="box" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="box"
          />
          <input
            type="tel"
            name="number"
            placeholder="Number"
            className="box"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="box"
            cols={30}
            rows={10}
          ></textarea>
          <input type="submit" value="Send message" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
