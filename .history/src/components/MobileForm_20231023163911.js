import React, { useState, useEffect } from 'react'
import "./MobileForm.css"
import { getDatabase, ref, push } from 'firebase/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datetime"
import moment from "moment"
import emailjs from "@emailjs/browser"


function MobileForm(props) {


  
    //the struggle continues
  const [maxDate, setMaxDate] = useState('');
  var tableTypeProp = props.bookings.bookings;
  console.log("mannnn...", tableTypeProp)

  useEffect(() => {
    const today = new Date();
    const november17 = new Date('2023-11-17');
    
    // If today is after November 17th, set maxDate to November 17th
    // Otherwise, set maxDate to today's date
    setMaxDate(today > november17 ? formatDate(november17) : formatDate(today));
  }, []);

  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // Pad single-digit month and day with a leading zero
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };
  const customDates =["2023-10-01","2023-10-02","2023-10-03","2023-10-04","2023-10-05","2023-10-06","2023-10-07","2023-10-08","2023-10-09","2023-10-10","2023-10-11","2023-10-12","2023-10-11","2023-10-12","2023-10-13","2023-10-14","2023-10-15","2023-10-16","2023-10-17",
  "2023-10-18","2023-10-19","2023-10-20",
  "2023-10-21","2023-10-22",
  "2023-10-23",,"2023-10-24","2023-10-25"
  ,"2023-10-26","2023-10-27"
  ,"2023-10-28","2023-10-29","2023-10-30","2023-10-31"
  ,"2023-11-01","2023-11-02","2023-11-03","2023-11-04",
  "2023-11-05","2023-11-06","2023-11-07","2023-11-08",
  "2023-11-09","2023-11-10","2023-11-11","2023-11-12",
  "2023-11-13","2023-11-14","2023-11-15","2023-11-16"]

  const disableCustomDate = current => {
    return !customDates.includes(current.format('YYYY-MM-DD'))
  }

  const areas = [
    {
      value: "Cabana", label: "Cabana"
    },
    {
      value: "RoofTop", label: "RoofTop"
    },
    {
      value: "VVIP", label: "VVIP"
    },
  ]

  const navigator = useNavigate();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState("");
  const [resDate, setResDate] = useState(moment())
  const [resTime, setResTime] = useState('')
  const [userPhoneNumber, setPhoneNumber] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState('')
  const [tableType, setTableType] = useState("");
  

  const reservationDate = (selectedDate) =>{
    const formattedDate = moment(selectedDate).format("MMM DD YYYY")
    setResDate(formattedDate)
  }

  // do handle user input in clean way papa
  const handleNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setUserEmail(e.target.value);
  const handleResDateChange = (e) => setResDate(e.target.value);
  const handleTimeChange = (e) => setResTime(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleNumberOfPeopleChange = (e) => setNumberOfPeople(e.target.value);
  const handleTableChange = (e) => setTableType(e.target.value);

  // post content to firebase using front-end only ate!! mwahahahaha
  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationDatabase = getDatabase();
    const newRef = ref(reservationDatabase, "reservations")

    const newReservation = {
      userName,
      userEmail,
      userPhoneNumber,
      resDate,
      resTime,
      tableTypeProp,
      numberOfPeople
    };
    
    if(
      userName.trim() === "" || 
      userEmail.trim() === "" ||
      resDate === "" ||
  
      resTime ==="" ||
      numberOfPeople == ""
      ){
      console.log("Empty", userName) 
      alert("Fields Can't Be Left Empty ")
      return false
    } else if(userName != "") {

      try {
        await push(newRef, newReservation);
        // send user confirmation mail
          sendMail(userEmail)
          //reset input f
        setUserName('');
        setUserEmail('');
        setNumberOfPeople("");
        setResDate("")
        setResTime('')
        setPhoneNumber("");

        navigator("/confirmation")

      } catch (error) {
        console.error(error)
      }
      return true
    }

  }

  const sendMail =(userEmail)=>{
    emailjs.send(
      'service_m5vwn8u',
      'template_5lximrm',
      {
        to_email: userEmail,
        message: "Reservation Confirmation Test",
      }, 
      'KSkFX4Jhh3wpjhiCY'
    )
      .then((response) => {
        console.log("Email has to be sent to", userEmail)
        console.log('Test Email sent:', response);
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  }

  return (
    <div className="mobile-form-holder">
      <form name='nv-form' onSubmit={handleSubmit} className="mobile-form">
        <div className="form-group">
          <label className='kim-label' htmlFor='full-name'>
            Full Name
            <input
              type="text"
              id="full-name"
              name="full-name-mobile"
              value={userName}
              onChange={handleNameChange}
              placeholder=""
              className="form-control-mobile"
            />

          </label>
          <label className='kim-label'>
            Phone Number
            <input
              type="text"
              id="user-phone-number"
              onChange={handlePhoneNumberChange}
              name="full-name"
              value={userPhoneNumber}
              placeholder=""
              className="form-control-mobile"
            />{" "}

          </label>
          <label className='kim-label'>
            User Email
            <input
              type="text"
              id="user-email"
              onChange={handleEmailChange}
              name="full-name"
              value={userEmail}
              placeholder=""
              className="form-control-mobile"
            />{" "}
          </label>


          <label className='kim-label'>
            Pick A Date
            <DatePicker
                      timeFormat={false}
                      isValidDate={disableCustomDate}
                      type="date"
                      showIcon
                      selected={resDate}
                      id="res-date"
                      onChange={reservationDate}
                      name="res-date"
                      value={resDate}
                      placeholder="Pick A Date"
                      className="form-control"
                    />{" "}
            </label>
        </div>

        <div className="form-group">
          {/* <label className='kim-label'>
            Number Of People
            <input
              type="number"
              id="number-people"
              name="full-name"
              onChange={handleNumberOfPeopleChange}
              value={numberOfPeople}
              className="form-control-mobile"
            />{" "}
          </label> */}
 <label  className='kim-label'>
            Number Of People
<select style={{marginBottom:"20px;", marginTop:"10px"}} className='spinnerTwo' name="tables" id="tables"
                      value={numberOfPeople} onChange={handleNumberOfPeopleChange}>
                      <option value="">Number Of People</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                    </label>
          <label style={{mar}} className='kim-label'>
            Arrival Time
            <input
              type="time"
              id="arrival-time"
              name="full-name"
              onChange={handleTimeChange}
              value={resTime}

              className="form-control-mobile"
            />{" "}
          </label>

        </div>
        <label className='kim-label'>
          Table Choice
          <input
              type="text"
              id="arrival-time"
              name="full-name"
              value={tableTypeProp}
              className="form-control-mobile"
            />

        </label>



        <div className="" style={{ marginTop: "20px" }}>
          {" "}
          <button type="submit" className="kim-btn">
            Reserve
          </button>{" "}
        </div>

      </form>
      <div className="bottom text-center mb-5">
      </div>
    </div>
  )
}

export default MobileForm