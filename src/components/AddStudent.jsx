import React from 'react'
import axios from 'axios'
export const AddStudent = ({fetchdata}) => {
    const inisial_state = {
        first_name : "",
        last_name : "",
        email : "",
        gender : "",
        age : "",
        tenth_score : "",
        twelth_score :"",
        preferred_branch : "",
    }
    const [studentdata , setStudentdata] = React.useState(inisial_state);

    const {first_name,last_name,email,gender,age,tenth_score,twelth_score,preferred_branch} = studentdata;


    const handleChange  = (e) =>{
        let{name,value,type,checked} = e.target;

        setStudentdata((prev) => ({
           ...prev,[name] : value
        }))
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
       // console.log(studentdata)
       axios.post("http://localhost:8080/students",studentdata)
       setStudentdata(inisial_state)
       fetchdata()
    }


  return (
    <form className="addstudent" onSubmit={handlesubmit}>
      <div>
        Firstname:
        <input
          type="text"
          name="first_name"
          value={first_name}
          className="first_name"
          placeholder="enter first name"
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          value={last_name}
          className="last_name"
          placeholder="enter last name"
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          value={email}
          className="email"
          placeholder="enter email"
          onChange={handleChange}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={handleChange}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          value={age}
          className="age"
          placeholder="enter age"
          onChange={handleChange}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          value={tenth_score}
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          value={twelth_score}
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={handleChange}
        />{" "}
      </div>
      <div>
      Preferred Branch:
        <select
          value={preferred_branch} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={handleChange}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
