import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Header from "./assets/components/Header";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const genderRef = useRef();
  const majorRef = useRef();
  useEffect(() => {
    fetch("https://json-api.uz/api/project/11-dars/developers")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.data);
        setUsers(data.data);
        setFilteredUsers(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleMajor() {
    let copiedDel = [...users];
    copiedDel = copiedDel.filter((item) => {
      return item.major === majorRef.current.value;
    });
    setFilteredUsers(copiedDel);
  }

  return (
    <div className="bg-slate-200">
      <Header />
      <h1 className="text-3xl text-slate-900 text-center py-10 ">
        Kelajagi buyuklar
      </h1>
      <div className="filter-qism flex justify-end container mb-16">
        <select
          ref={genderRef}
          className="py-4 shadow-2xl w-1/4 rounded-xl pl-3"
        >
          <option value="gender">Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <select
          ref={majorRef}
          onChange={handleMajor}
          className="py-4 shadow-2xl w-1/4 rounded-xl pl-3"
        >
          <option value="all">All</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Biology">Biology</option>
          <option value="Engineering">Engineering</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="History">History</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Physics">Physics</option>
          <option value="Economics">Economics</option>
          <option value="English Literature">English Literature</option>
          <option value="Philosophy">Philosophy</option>
          <option value="Political Science">Political Science</option>
          <option value="Sociology">Sociology</option>
          <option value="Environmental Science">Environmental Science</option>
          <option value="Nursing">Nursing</option>
          <option value="Statistics">Statistics</option>
          <option value="Digital Media">Digital Media</option>
          <option value="Linguistics">Linguistics</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Social Work">Social Work</option>
          <option value="Fine Arts">Fine Arts</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Business Administration">
            Business Administration
          </option>
          <option value="Anthropology">Anthropology</option>
          <option value="Public Relations">Public Relations</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Journalism">Journalism</option>
          <option value="Education">Education</option>
          <option value="Dance">Dance</option>
          <option value="Veterinary Science">Veterinary Science</option>
          <option value="Sports Management">Sports Management</option>
          <option value="Forensic Science">Forensic Science</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Film Studies">Film Studies</option>
        </select>
      </div>
      <div className="wrapper grid grid-cols-4 gap-4 container mx-auto px-24">
        {filteredUsers.length > 0 &&
          filteredUsers.map((user) => {
            return (
              <div
                className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md"
                key={user.id}
              >
                <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                  <b>Name: </b>
                  {user.fullName}
                </div>
                <div className="col-span-2 rounded-md">
                  <b>Major: </b>
                  {user.major}
                </div>
                <div className="col-span-2 rounded-md">
                  <b>Gender: </b>
                  {user.gender}
                </div>
                <div className="col-span-2 rounded-md">
                  <b>Age: </b>
                  {user.age}
                </div>
                <div className="col-span-1"></div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
