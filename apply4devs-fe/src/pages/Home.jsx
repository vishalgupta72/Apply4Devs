import React, { useState, useEffect, useCallback } from "react";
// import { Link } from "react-router-dom";
import Select from "react-select";
import axios from "axios";

const Home = ({searchQuery, setCompanyLength}) => {


  // const companies = [
  //   { name: "Company 1", city: "Mumbai", email: "company1@example.com", phone: "+91 9876543210" },
  //   { name: "Company 2", city: "Delhi", email: "company2@example.com", phone: "+91 9876543211" },
  //   { name: "Company 3", city: "Bangalore", email: "company3@example.com", phone: "+91 9876543212" },
  //   { name: "Company 4", city: "Chennai", email: "company4@example.com", phone: "+91 9876543213" },
  //   { name: "Company 5", city: "Kolkata", email: "company5@example.com", phone: "+91 9876543214" },
  //   { name: "Company 6", city: "Hyderabad", email: "company6@example.com", phone: "+91 9876543215" },
  //   { name: "Company 7", city: "Pune", email: "company7@example.com", phone: "+91 9876543216" },
  //   { name: "Company 8", city: "Ahmedabad", email: "company8@example.com", phone: "+91 9876543217" },
  //   { name: "Company 9", city: "Jaipur", email: "company9@example.com", phone: "+91 9876543218" },
  // ];

  const options = [
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "amritsar", label: "Amritsar" },
    { value: "bangalore", label: "Bangalore" }, // Major IT Hub
    { value: "bhopal", label: "Bhopal" },
    { value: "bhubaneswar", label: "Bhubaneswar" }, // IT Growing City
    { value: "chandigarh", label: "Chandigarh" },
    { value: "chennai", label: "Chennai" }, // Major IT Hub
    { value: "coimbatore", label: "Coimbatore" }, // IT Growing City
    { value: "delhi", label: "Delhi" },
    { value: "gurgaon", label: "Gurgaon" }, // Major IT Hub
    { value: "guwahati", label: "Guwahati" },
    { value: "hyderabad", label: "Hyderabad" }, // Major IT Hub
    { value: "indore", label: "Indore" },
    { value: "jaipur", label: "Jaipur" },
    { value: "jodhpur", label: "Jodhpur" },
    { value: "kanpur", label: "Kanpur" },
    { value: "kolkata", label: "Kolkata" }, // IT Growing City
    { value: "lucknow", label: "Lucknow" },
    { value: "ludhiana", label: "Ludhiana" },
    { value: "madurai", label: "Madurai" },
    { value: "meerut", label: "Meerut" },
    { value: "mumbai", label: "Mumbai" }, // Major IT Hub
    { value: "nagpur", label: "Nagpur" },
    { value: "nashik", label: "Nashik" },
    { value: "noida", label: "Noida" }, // Major IT Hub
    { value: "patna", label: "Patna" },
    { value: "pune", label: "Pune" }, // Major IT Hub
    { value: "rajkot", label: "Rajkot" },
    { value: "surat", label: "Surat" },
    { value: "thiruvananthapuram", label: "Thiruvananthapuram" }, // IT Growing City
    { value: "varanasi", label: "Varanasi" },
    { value: "vijayawada", label: "Vijayawada" },
    { value: "visakhapatnam", label: "Visakhapatnam" } // IT Growing City
  ];
  

  const [selectedCities, setSelectedCities] = useState([]);
  const [companies, setCompanies] = useState([]);

  // get all companies from DB
  const getCompanies = async()=>{
    try {
      let result = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/companies`);
      setCompanies(result.data);
      setCompanyLength(result.data.length);
      // console.log(result.status, result.data);s

      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getCompanies();
  }, [])
  

  return (
    <div className="flex flex-col">
      {/* Top Section */}
      <div className="sm:flex flex-row sm:gap-4 m-4">
        <h1 className="hidden max-[431px]:block max-[431px]:text-xl font-semibold text-center text-neutral-700">{companies.length} companies</h1>
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
              <p className="text-neutral-700 text-sm mt-2">📌 Info: {company.description.length>75 ? company.description.slice(0,75)+"...":company.description}</p>
              <div className="flex justify-end mt-auto">
                <button className="p-2 bg-neutral-900 hover:bg-neutral-700 cursor-pointer text-white rounded-lg mt-4 active:scale-95">
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
