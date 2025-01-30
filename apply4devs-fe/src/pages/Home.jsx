import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Select from "react-select";

const Home = ({searchQuery}) => {

  console.log(searchQuery);


  const companies = [
    { name: "Company 1", city: "Mumbai", email: "company1@example.com", phone: "+91 9876543210" },
    { name: "Company 2", city: "Delhi", email: "company2@example.com", phone: "+91 9876543211" },
    { name: "Company 3", city: "Bangalore", email: "company3@example.com", phone: "+91 9876543212" },
    { name: "Company 4", city: "Chennai", email: "company4@example.com", phone: "+91 9876543213" },
    { name: "Company 5", city: "Kolkata", email: "company5@example.com", phone: "+91 9876543214" },
    { name: "Company 6", city: "Hyderabad", email: "company6@example.com", phone: "+91 9876543215" },
    { name: "Company 7", city: "Pune", email: "company7@example.com", phone: "+91 9876543216" },
    { name: "Company 8", city: "Ahmedabad", email: "company8@example.com", phone: "+91 9876543217" },
    { name: "Company 9", city: "Jaipur", email: "company9@example.com", phone: "+91 9876543218" },
    { name: "Company 10", city: "Lucknow", email: "company10@example.com", phone: "+91 9876543219" },
    { name: "Company 11", city: "Kanpur", email: "company11@example.com", phone: "+91 9876543220" },
    { name: "Company 12", city: "Nagpur", email: "company12@example.com", phone: "+91 9876543221" },
    { name: "Company 13", city: "Indore", email: "company13@example.com", phone: "+91 9876543222" },
    { name: "Company 14", city: "Bhopal", email: "company14@example.com", phone: "+91 9876543223" },
    { name: "Company 15", city: "Chandigarh", email: "company15@example.com", phone: "+91 9876543224" },
    { name: "Company 16", city: "Coimbatore", email: "company16@example.com", phone: "+91 9876543225" },
    { name: "Company 17", city: "Visakhapatnam", email: "company17@example.com", phone: "+91 9876543226" },
    { name: "Company 18", city: "Vijayawada", email: "company18@example.com", phone: "+91 9876543227" },
    { name: "Company 19", city: "Surat", email: "company19@example.com", phone: "+91 9876543228" },
    { name: "Company 20", city: "Rajkot", email: "company20@example.com", phone: "+91 9876543229" },
    { name: "Company 21", city: "Patna", email: "company21@example.com", phone: "+91 9876543230" },
    { name: "Company 22", city: "Ludhiana", email: "company22@example.com", phone: "+91 9876543231" },
    { name: "Company 23", city: "Agra", email: "company23@example.com", phone: "+91 9876543232" },
    { name: "Company 24", city: "Varanasi", email: "company24@example.com", phone: "+91 9876543233" },
    { name: "Company 25", city: "Meerut", email: "company25@example.com", phone: "+91 9876543234" },
    { name: "Company 26", city: "Nashik", email: "company26@example.com", phone: "+91 9876543235" },
    { name: "Company 27", city: "Jodhpur", email: "company27@example.com", phone: "+91 9876543236" },
    { name: "Company 28", city: "Madurai", email: "company28@example.com", phone: "+91 9876543237" },
    { name: "Company 29", city: "Amritsar", email: "company29@example.com", phone: "+91 9876543238" },
    { name: "Company 30", city: "Guwahati", email: "company30@example.com", phone: "+91 9876543239" },
  ];

  const options = [
    { value: "mumbai", label: "Mumbai" },
    { value: "delhi", label: "Delhi" },
    { value: "bangalore", label: "Bangalore" },
    { value: "chennai", label: "Chennai" },
    { value: "kolkata", label: "Kolkata" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "pune", label: "Pune" },
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "jaipur", label: "Jaipur" },
    { value: "lucknow", label: "Lucknow" },
    { value: "kanpur", label: "Kanpur" },
    { value: "nagpur", label: "Nagpur" },
    { value: "indore", label: "Indore" },
    { value: "bhopal", label: "Bhopal" },
    { value: "chandigarh", label: "Chandigarh" },
    { value: "coimbatore", label: "Coimbatore" },
    { value: "visakhapatnam", label: "Visakhapatnam" },
    { value: "vijayawada", label: "Vijayawada" },
    { value: "surat", label: "Surat" },
    { value: "rajkot", label: "Rajkot" },
    { value: "patna", label: "Patna" },
    { value: "ludhiana", label: "Ludhiana" },
    { value: "agra", label: "Agra" },
    { value: "varanasi", label: "Varanasi" },
    { value: "meerut", label: "Meerut" },
    { value: "nashik", label: "Nashik" },
    { value: "jodhpur", label: "Jodhpur" },
    { value: "madurai", label: "Madurai" },
    { value: "amritsar", label: "Amritsar" },
    { value: "guwahati", label: "Guwahati" }
  ];

  const [selectedCities, setSelectedCities] = useState([]);
  

  return (
    <div className="flex flex-col">
      {/* Top Section */}
      <div className="sm:flex flex-row sm:gap-4 m-4">
        <h1 className="hidden max-[431px]:block max-[431px]:text-xl font-semibold text-center text-neutral-700">1000 companies</h1>
        <h1 className="sm:text-xl font-semibold text-neutral-700">Select the City:</h1>

        <div className="sm:w-1/2">
        
          <Select options={options} value={selectedCities} onChange={setSelectedCities} isMulti />
        </div>
      </div>

      {/* Bottom Section */}

      <div className="flex flex-row flex-wrap justify-center">

        {/* company card */}
        {companies.filter((company) => {
            const matchCity = selectedCities.length === 0 || selectedCities.some((city) => city.value === company.city.toLowerCase());
            const matchesSearch = !searchQuery || company.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchCity && matchesSearch;
          }).map((company, index)=>{
          return (
            <div key={index} className="p-4 border border-zinc-300 rounded-lg shadow-md  bg-white max-w-80 m-4">
              <h2 className="text-neutral-700 text-xl font-bold">{company.name}</h2>
              <p className="text-neutral-700 text-sm">📍 City: {company.city}</p>
              <p className="text-neutral-700 text-sm">📧 Email: {company.email}</p>
              <p className="text-neutral-700 text-sm">📞 Phone: {company.phone}</p>
              <p className="text-neutral-700 text-sm mt-2">
                📌 Info: This is a short description about the company and its services.
              </p>
              <div className="flex justify-end mt-auto">
                <button className="p-2 bg-neutral-900 hover:bg-neutral-700 cursor-pointer text-white rounded-lg">
                  View More
                </button>
              </div>
            </div>
          )
        })}


      </div>



    </div>
  );
};

export default Home;
