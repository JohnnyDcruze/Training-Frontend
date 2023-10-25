import React, { useState } from "react";
import { Link } from "react-router-dom";

function CustomerDetails() {
  const [name, setCustomerName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmailId] = useState("");
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
 

  function validate(event) {
    event.preventDefault(); 
    let vstatus = true; 

    if (name === "") {
      alert("Name should not be blank");
      vstatus = false;
    } else if (name.length >= 25) {
      alert("Name should be less than 25 characters");
      vstatus = false;
    }

    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge < 18) {
      alert("Age should be a valid number greater than or equal to 18");
      vstatus = false;
    }

    if (phone.length !== 10) {
      alert("Enter a valid phone number");
      vstatus = false;
    }

    if (!email.match(/^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]+\.[a-zA-Z]{2,}$/)) {
      alert("Enter a valid email id");
      vstatus = false;
    }

   
  

    if (vstatus) {
      setNextButtonDisabled(false);
      sessionStorage.setItem('getName', name);
      sessionStorage.setItem('age', age);

      alert("Form submitted successfully");
    }
  }

  return (
    <div>
      <center>
        <b className="titleStyle">CustomerDetails</b>
        <form onSubmit={validate}>
          <label htmlFor="name" className="labelStyle">
            <b>Customer Name:</b>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
            //            value={customerName}
            value={name}
            className="inputStyle"
          />
          <br />
          <label htmlFor="age" className="labelStyle">
          <b>Age:</b>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
            className="inputStyle"
          />
          <br />
          <label htmlFor="address" className="labelStyle">
            <b>Address:</b>
          </label>
          <br />
          <textarea
            rows="5"
            columns="20"
            name="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
            className="textareaStyle"
          ></textarea>
          <br />
          <label htmlFor="phone" className="labelStyle">
            <b>Phone Number:</b>
          </label>
          <br />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phone}
            className="inputStyle"
          />
          <br />
          <label htmlFor="email" className="labelStyle">
            <b>Email id:</b>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
            value={email}
            className="inputStyle"
          />
          <br />
          <input type="submit" value="ADD" className="buttonStyle"  />

          <input type="reset" value="RESET" className="buttonStyle" />
          <br />
          <Link to="/Catalog">
              <button type="button" disabled={nextButtonDisabled}>
                <h3>Next</h3>
            
          </button ></Link>
         
        </form>
      </center>
   
    </div>
  );
}

export default CustomerDetails;
