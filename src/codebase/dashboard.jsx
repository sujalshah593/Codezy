import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const statuses = ["Active", "Inactive", "Disabled", "Verified", "Initiated"];
  const genders = ["Male", "Female"];
  const firstNames = [
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Krishna", "Ishaan", "Shaurya",
  "Anaya", "Siya", "Myra", "Aadhya", "Diya", "Pari", "Ira", "Meera", "Anika", "Saanvi",
  "Raj", "Aryan", "Kunal", "Rohan", "Yash", "Tanish", "Dev", "Neel", "Nikhil", "Kabir",
  "Laksh", "Atharv", "Siddharth", "Harsh", "Manav", "Rudra", "Ayaan", "Om", "Darsh", "Pranav",
  "Priya", "Kriti", "Riya", "Sneha", "Pooja", "Nisha", "Isha", "Aanya", "Tanya", "Swara",
  "Alia", "Radhika", "Trisha", "Lavanya", "Divya", "Bhavya", "Khushi", "Natasha", "Simran", "Zoya",
  "Amit", "Rahul", "Suresh", "Vikas", "Rakesh", "Sanjay", "Abhishek", "Vivek", "Deepak", "Nitin",
  "Neha", "Komal", "Anjali", "Preeti", "Ritu", "Payal", "Shruti", "Juhi", "Sonam", "Mira",
  "Advik", "Rehan", "Harshit", "Yuvraj", "Ansh", "Dhruv", "Riaan", "Tanmay", "Ved", "Moksh",
  "Avantika", "Tanvi", "Pihu", "Charvi", "Nandini", "Ishita", "Akshara", "Muskan", "Suhana", "Vanya"
];
const lastNames = [
  "Sharma", "Verma", "Gupta", "Patel", "Mehta", "Rao", "Joshi", "Nair", "Reddy", "Choudhary",
  "Malhotra", "Kapoor", "Agarwal", "Kumar", "Jain", "Mishra", "Tripathi", "Pandey", "Singh", "Thakur",
  "Chopra", "Bansal", "Dwivedi", "Kulkarni", "Iyer", "Naidu", "Shetty", "Desai", "Acharya", "Bhatia",
  "Ghosh", "Mukherjee", "Das", "Sarkar", "Sen", "Roy", "Chatterjee", "Banerjee", "Chakraborty", "Bhattacharya",
  "Kohli", "Khanna", "Saxena", "Nigam", "Pathak", "Tiwari", "Dubey", "Rawat", "Bhatt", "Sinha",
  "Prasad", "Yadav", "Rathore", "Ranganathan", "Balakrishnan", "Menon", "Pillai", "Venkatesh", "Narayanan", "Krishnan",
  "Mohanty", "Patnaik", "Panda", "Behera", "Barik", "Nayak", "Raut", "Kuldeep", "Solanki", "Mahajan",
  "Vora", "Bhansali", "Shah", "Merchant", "Engineer", "Doctor", "Bhave", "Tilak", "Lokhande", "Phadke",
  "Gaikwad", "Chavan", "Jadhav", "Shah", "Deshmukh", "Mhatre", "Kamble", "Waghmare", "More", "Salunkhe",
  "Sable", "Lal", "Chawla", "Bajaj", "Sodhi", "Gill", "Grewal", "Sandhu", "Brar", "Dhillon"
];


const generateUsers = (count = 1000) => {
  return Array.from({ length: count }, (_, index) => {
    const randomName = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    return {
      srno: index + 1,
      name: randomName,
      age: Math.floor(Math.random() * 50) + 18,
      gender: genders[Math.floor(Math.random() * genders.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
    };
  });
};;

 const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(generateUsers());
  }, [])

  const countByStatus = users.reduce((acc, user) => {
    acc[user.status] = (acc[user.status] || 0) + 1;
    return acc;
  }, {});

  const countByGender = users.reduce((acc, user) => {
    acc[user.gender] = (acc[user.gender] || 0) + 1;
    return acc;
  }, {});

  const ageGroups = {
    "18-25": 0,
    "26-35": 0,
    "36-45": 0,
    "46-50": 0,
  };

  users.forEach((user) => {
    if(user.age <=25)ageGroups["18-25"]++;
    else if(user.age <=35)ageGroups["26-35"]++;
    else if(user.age <=45)ageGroups["36-45"]++;
    else ageGroups["46-50"]++;
  });

  const activeInactive = {
    Active: users.filter(user => user.status === "Active").length,
    Inactive: users.filter(user => user.status === "Inactive").length,
  };

  const navigate = useNavigate();
  const handleCVClick = () => {
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 flex justify-center items-center"><mark>Dashboard</mark></h2>
      <button
          onClick={handleCVClick}
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white cursor-pointer font-semibold py-2 px-4 rounded shadow-md transition duration-300"
        >
          ← Back
        </button>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-700 text-white p-4 rounded-xl shadow">
          <h3 className="font-semibold">Status Count</h3>
          {Object.entries(countByStatus).map(([status, count]) => (
            <p key={status}>{status}: {count}</p>
          ))}
        </div>

        <div className="bg-pink-700 text-white p-4 rounded-xl shadow">
          <h3 className="font-semibold">Gender Count</h3>
          {Object.entries(countByGender).map(([gender, count]) => (
            <p key={gender}>{gender}: {count}</p>
          ))}
        </div>

        <div className="bg-green-700 text-white p-4 rounded-xl shadow">
          <h3 className="font-semibold">Age Group</h3>
          {Object.entries(ageGroups).map(([group, count]) => (
            <p key={group}>{group}: {count}</p>
          ))}
        </div>

        <div className="bg-yellow-600 text-white p-4 rounded-xl shadow">
          <h3 className="font-semibold">Active vs Inactive</h3>
          <p>Active: {activeInactive.Active}</p>
          <p>Inactive: {activeInactive.Inactive}</p>
        </div>
      </div>

      {/* User Table */}
      <table className="min-w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border flex justify-center border-gray-300 px-4 py-2">Sr No</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.srno}>
              <td className="border  text-center  border-gray-300 px-4 py-2">{user.srno}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.age}</td>
              <td className="border border-gray-300 px-4 py-2">{user.gender}</td>
              <td className="border border-gray-300 px-4 py-2">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Dashboard;
