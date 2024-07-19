import React from 'react'

const CreditApp: React.FC = () => {
  return (
    <div>
        <form action="credit_application.php" method="post" className="bg-white shadow-lg rounded-lg p-8 mt-12 md:mt-0">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">Submit A Credit Application</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="firstname">First Name:</label>
                  <input type="text" id="firstname" name="firstname" placeholder="First Name" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="middlename">Middle Name:</label>
                  <input type="text" id="middlename" name="middlename" placeholder="Middle Name" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="lastname">Last Name:</label>
                  <input type="text" id="lastname" name="lastname" placeholder="Last Name" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="ssn">Social Security Number:</label>
                  <input type="number" id="ssn" name="ssn" placeholder="Social Security Number" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="birthday">Birthday:</label>
                  <input type="text" id="birthday" name="birthday" placeholder="Birthday" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="birthday">Drivers License Number:</label>
                  <input type="text" id="driverslicense" name="driverslicense" placeholder="Drivers License Number" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="birthday">License Issuing State:</label>
                  <input type="text" id="driverslicensestate" name="driverslicensestate" placeholder="License Issuing State" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="streetaddress">Street Address:</label>
                  <input type="text" id="streetaddress" name="streetaddress" placeholder="Street Address" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="city">City:</label>
                  <input type="text" id="city" name="city" placeholder="City" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="state">State:</label>
                  <input type="text" id="state" name="state" placeholder="State" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="zipcode">Zip Code:</label>
                  <input type="number" id="zipcode" name="zipcode" placeholder="Zip Code" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="phonenumber">Phone Number:</label>
                  <input type="tel" id="phonenumber" name="phonenumber" placeholder="Phone Number" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="phonenumber">Pre Tax Income:</label>
                  <input type="text" id="monthlyincome" name="monthlyincome" placeholder="Monthly Income" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="phonenumber">Time At Residence:</label>
                  <input type="text" id="residencetime" name="residencetime" placeholder="Years / Months" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="phonenumber">Current Employment:</label>
                  <input type="text" id="currentemployment" name="currentemployment" placeholder="Name of Company" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="phonenumber">Length of Employment:</label>
                  <input type="text" id="lengthofemployment" name="lengthofemployment" placeholder="Years / Months" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" />
                </div>
                <div className="mb-8">
                  <label className="block mb-4 text-xl md:text-2xl" htmlFor="creditmessage">Comments:</label>
                  <textarea id="creditmessage" name="creditmessage" placeholder="Additional Comments" className="box w-full py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl md:text-3xl" rows={6}></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="btn text-center bg-blue-500 text-white py-4 px-8 rounded-md hover:bg-blue-600 transition duration-200 text-2xl md:text-3xl">
                  Submit Application
                </button>
              </div>            
            </form>
    </div>
  )
}

export default CreditApp   