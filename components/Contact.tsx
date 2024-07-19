import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <iframe
            className="map w-full h-96 md:h-auto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.253867269828!2d-91.00037158387195!3d38.55096437489333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d94ebc4559198d%3A0xc709ebd6941d937b!2s351%20Fulton%20St%2C%20Washington%2C%20MO%2063090!5e0!3m2!1sen!2sus!4v1675353930846!5m2!1sen!2sus"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>

          <div className="flex flex-col justify-center">
            <form action="mail.php" method="post" className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">Get in touch</h3>
              <div className="mb-8">
                <label className="block mb-4 text-xl md:text-2xl" htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Name" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
              </div>
              <div className="mb-8">
                <label className="block mb-4 text-xl md:text-2xl" htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Email" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
              </div>
              <div className="mb-8">
                <label className="block mb-4 text-xl md:text-2xl" htmlFor="number">Number:</label>
                <input type="tel" id="number" name="number" placeholder="Number" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
              </div>
              <div className="mb-8">
                <label className="block mb-4 text-xl md:text-2xl" htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Message" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" rows={6}></textarea>
              </div>
              <button type="submit" className="btn bg-blue-500 text-white py-4 px-8 rounded-md hover:bg-blue-600 transition duration-200 text-2xl md:text-3xl">Send message</button>
            </form>
  
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
