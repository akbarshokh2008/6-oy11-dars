import React, { useEffect, useRef, useState } from "react";
// // import { RingLoader } from "react-spinners";
import Header from "./assets/components/Header";

function App() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [page, setPages] = useState(0);
  const [limit, setLimit] = useState(12);
  const majorRef = useRef();
  const genderRef = useRef();

  useEffect(() => {
    fetch(
      `https://json-api.uz/api/project/11-dars/developers?skip=${page}&limit=${limit}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
        setFiltered(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, limit]);

  function handleSelect(event) {
    event.target.value;
    let copied = [...filtered];
    if (genderRef.current.value) {
      copied = copied.filter((value) => {
        return value.gender === genderRef.current.value;
      });
    }
    if (majorRef.current.value) {
      copied = copied.filter((value) => {
        return value.major === majorRef.current.value;
      });
    }
    setUsers(copied);
  }
  function handleShow(e) {
    e.preventDefault();
    setLimit(limit + limit);
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-24">
        <h1 className="text-2xl text-center font-bold mt-12 text-slate-900">
          Kelajagi buyuklar
        </h1>
        <div className="flex gap-4 justify-end mx-24 my-8">
          <select
            ref={majorRef}
            className="w-52  border rounded-md p-2 "
            onChange={handleSelect}
            name="major"
          >
            <option value="">All Majors</option>
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
            <option value="Information Technology">
              Information Technology
            </option>
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
          <select
            ref={genderRef}
            className="w-52   border rounded-md p-2"
            onChange={handleSelect}
            name="gender"
          >
            <option value="">All Genders </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {/* {<div className=" flex  justify-center"></div>} */}
        <div className="flex flex-wrap gap-4 font-sans ">
          {users.map((user) => (
            <div
              className="border rounded-md p-4 shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-[250px]   "
              key={user.id}
            >
              <h3 className="font-bold">Name: {user.id}</h3>
              <h3 className="font-bold">Name: {user.fullName}</h3>
              <h3>Major: {user.major}</h3>
              <h3>Age: {user.age}</h3>
              <h3>Gender: {user.gender}</h3>
            </div>
          ))}
        </div>
        <button
          className="w-full bg-slate-200 py-4 rounded-xl border mt-10"
          onClick={handleShow}
        >
          Show more 12
        </button>
      </div>
    </div>
  );
}

export default App;
