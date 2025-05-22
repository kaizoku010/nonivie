import React, { useState, useEffect } from "react";
import "./NoniVieForm.css";
import { getDatabase, ref, push } from 'firebase/database';
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser"
import 'firebase/compat/database';
import "react-datetime/css/react-datetime.css"
import DatePicker from "react-datetime"
import moment from "moment"


function NonivieForm(props) {

  const [maxDate, setMaxDate] = useState('');
  // const tableType = props.props;

  // console.log("new data", tableType)


  const navigator = useNavigate()

  const customDates = ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04", "2023-10-05", "2023-10-06", "2023-10-07", "2023-10-08", "2023-10-09", "2023-10-10", "2023-10-11", "2023-10-12", "2023-10-11", "2023-10-12", "2023-10-13", "2023-10-14", "2023-10-15", "2023-10-16", "2023-10-17",
    "2023-10-18", "2023-10-19", "2023-10-20",
    "2023-10-21", "2023-10-22",
    "2023-10-23", , "2023-10-24", "2023-10-25"
    , "2023-10-26", "2023-10-27"
    , "2023-10-28", "2023-10-29", "2023-10-30", "2023-10-31"
    , "2023-11-01", "2023-11-02", "2023-11-03", "2023-11-04",
    "2023-11-05", "2023-11-06", "2023-11-07", "2023-11-08",
    "2023-11-09", "2023-11-10", "2023-11-11", "2023-11-12",
    "2023-11-13", "2023-11-14", "2023-11-15", "2023-11-16"]
  const disableCustomDate = current => {
    return !customDates.includes(current.format('YYYY-MM-DD'))
  }

  // where res = reservation/s
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState("");
  const [resDate, setResDate] = useState(moment())
  const [resTime, setResTime] = useState('')
  const [userPhoneNumber, setPhoneNumber] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState('')
  const [tableType, setTableType] = useState(props.props||" NO DATA SELECTED");


  const reservationDate = (selectedDate) =>{
    const formattedDate = moment(selectedDate).format("MMM DD YYYY")
    setResDate(formattedDate)
  }

  // do handle user input in clean way papa
  const handleNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setUserEmail(e.target.value);
  // const handleResDateChange = () => {
  //   const date = new Date(date)
  //     setResDate(date)
  // };
  const handleTimeChange = (e) => setResTime(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleNumberOfPeopleChange = (e) => setNumberOfPeople(e.target.value);

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
      tableType,
      numberOfPeople
    };

console.log("reservation date",resDate)

    if (
      userName.trim() === "" || 
      userEmail.trim() === "" ||
      resDate === "" ||
   
      resTime === "" ||
      numberOfPeople == ""
    ) {
      console.log("Empty", userName)
      alert("Fields Can't Be Left Empty ")
      return false
    } else if (userName != "") {

      try {
        await push(newRef, newReservation);
        // send user confirmation mail
        sendMail(userEmail)
        //reset input fields
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

  const sendMail = (userEmail) => {
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
    <div className="dx-form-container">
      <div className="next-container px-4 py-5 mx-auto">
        <div className="card card0">
          <div className="d-flex flex-lg-row flex-column-reverse">
            <div className="card card1">
              <div className="row justify-content-center my-auto">

                <form onSubmit={handleSubmit} className="col-md-8 col-10 my-5">
                  <div className="row justify-content-center px-3 mb-3">
                  </div>


                  <div className="form-group">
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      value={userName}
                      onChange={handleNameChange}
                      placeholder="Enter Full Name"
                      className="form-control"
                    />{" "}
                    <input
                      type="text"
                      id="user-phone-number"
                      onChange={handlePhoneNumberChange}
                      name="user-phone-number"
                      value={userPhoneNumber}
                      placeholder="Phone Number"
                      className="form-control small-input"
                    />{" "}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="user-email"
                      onChange={handleEmailChange}
                      name="user-email"
                      value={userEmail}
                      placeholder="User Email"
                      className="form-control"
                    />{" "}
                    <DatePicker
                      timeFormat={false}
                      isValidDate={disableCustomDate}
                      type="date"
                      id="res-date"
                      onChange={reservationDate}
                      name="res-date"
                      // min={formatDate(new Date())}
                      // max={maxDate}
                      value={resDate}
                  
                      placeholder="Pick A Date"
                      className="form-control"
                    />{" "}
                  </div>
                  <div className="form-group group2">
                    {/* <input
                      type="text"
                      id="number-people"
                      name="number-people"
                      onChange={handleNumberOfPeopleChange}
                      value={numberOfPeople}
                      placeholder="Number Of People"
                      className="form-control"
                    />{" "} */}

                    <select className='spinnerTwo' name="tables" id="tables"
                      value={numberOfPeople} onChange={handleNumberOfPeopleChange}>
                      <option value="">Number Of People</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                    <input
                      type="time"
                      id="arrival-time"
                      name="arrival-time"
                      onChange={handleTimeChange}
                      value={resTime}
                      placeholder="Select Arrival Time"
                      className="form-control"
                    />{" "}

                  </div>
                  <label>
                  <label className='kim-label'>
          Table Choice
          <input
              type="text"
              id="arrival-time"
              name="full-name"
              value={tableType}
              className="form-control-mobile"
            />

        </label>

                  </label>

                  <div className="row justify-content-center my-3 px-3">
                    {" "}
                    <button style={{ color: "white", cursor:"pointer" }} type="submit" className="btn-block btn-color">
                      Reserve
                    </button>{" "}
                  </div>

                </form>
              </div>
              <div className="bottom text-center mb-5">

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default NonivieForm;
