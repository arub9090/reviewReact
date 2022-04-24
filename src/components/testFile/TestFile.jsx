import React from "react";
import { useState } from "react";
function TestFile() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
    favLanguage: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({ name: "", email: "", phonenumber: "", favLanguage: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div className="flex flex-row justify-evenly">
          <div>
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              type="text"
              name="name"
              required
              placeholder="Name"
              value={contactInfo.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              type="email"
              name="email"
              placeholder="Email"
              value={contactInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              type="number"
              name="phonenumber"
              placeholder="Phone Number"
              value={contactInfo.phonenumber}
              onChange={handleChange}
            />
          </div>

          <select className="select select-secondary"
           id="favLanguage" 
           value={contactInfo.favLanguage}
           onChange={handleChange}
           name="favLanguage"
           
          >
            <option disabled >
              Pick your favorite language
            </option>
            <option value="">--Choose From this Menu--</option>
            <option value="java">Java</option>
            <option value="go">Go</option>
            <option value="c">C</option>
            <option value="c#">C#</option>
            <option value="c++">C++</option>
            <option value="rust">Rust</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>

          <div>
            <button>Submit Contact</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TestFile;
