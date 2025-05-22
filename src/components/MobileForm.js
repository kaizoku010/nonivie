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
import Drinks from "../imgs/abby.jpg"
import SectionImageTest from "../imgs/section_img.png"
import BallersTitles from "../imgs/titles/ballers.png"
import CClub from "../imgs/titles/cc.svg"
import Velvet from "../imgs/titles/val.svg"
import Rasta from "../imgs/rasta.jpg"
import { useParams } from 'react-router-dom'
import Pantheon from "../imgs/titles/sundeck.svg"



function MobileForm(props) {


  const sectionsDataSet = [
    {
        id: 2,
        svg:BallersTitles,
        title: 'Ballerz End.',
        image: SectionImageTest,
        btnText:"Sold Out",
        mainImg:Rasta,    
        tableTypes:["Booths", "cocktail Tables"],
        btnColor:"red",
        amenities:["Ciger And Shisha Services", "Breath taking view of the DJ's Floor", "Bottle Service", "Access To Ballerz End Is Exclusively After Placing A Reservation" ],
        numberOfTables:[1,2,3,4,5,6],
        excerpt: 'Our "Ballerz End" section is now officially SOLD OUT! Thank you to our distinguished guests for embracing the pinnacle of luxury with us. Prepare for an unforgettable night of opulence and enchantment',
        content: ' Step into the lap of luxury at Ballerz End, our most exclusive restaurant section. This opulent space is perfect for those who want to experience the best of the best, with its plush seating, decadent décor, and impeccable service. From the moment you arrive, you will be transported to a world of sophistication and glamour. Our attentive staff will greet you with a glass of champagne and show you to your table, where you will be treated to a feast for the senses. Our menu features the finest cuisine, prepared with the freshest ingredients and presented with artistry. Whether you are in the mood for a succulent steak, a delicate seafood dish, or a decadent dessert, you are sure to find something to your taste.. And of course, no dining experience at Ballerz End is complete without a bottle of the finest champagne. Our sommelier will be happy to help you choose the perfect bottle to pair with your meal. So if you are looking for a truly unforgettable dining experience, Ballerz End is the place for you.',
      },
    // sections data
    {
      id: 22,
      mainImg:Rasta,
      title: 'Pantheon Sun Deck',
      image: Drinks,
      svg:Pantheon,
      numberOfTables:[1,2,3,4,5,6],
      btnText:"Read More",
      tableTypes:["Booths", "cocktail Tables"],
      btnColor:"white",
      numberOfTables:"5",
      amenities:["Ciger","Shisha Services"],
      excerpt: 'We ere thrilled to announce that our exclusive spaces are filling up fast! Join us for an opulent experience, but act quickly. Click below to make your reservations or call us to assist you throughtout the process.',
      content: 'The Pantheon Sundeck is our rooftop restaurant section, offering breathtaking views of the city skyline. This exclusive space is perfect for those who want to experience the best that our restaurant has to offer. The Pantheon Sundeck features private dining areas, a full bar, and a fire pit. Our attentive staff will ensure that you have everything you need to enjoy your dining experience. Our menu features a variety of dishes, from classic favorites like steak and seafood to more innovative options. We also offer a wide selection of wines and cocktails to choose from. Whether you are in the mood for a special occasion dinner or a night out with friends, the Pantheon Sundeck is the perfect place to enjoy a delicious meal and stunning views. We hope you will enjoy our premium, luxurious restaurant sections. We look forward to welcoming you soon.',
    },
    {
      id: 3,
      svg:Velvet,
      numberOfTables:[1,2,3,4,5,6],
      btnColor:"white",
      mainImg:Rasta,
      amenities:["Ciger","Shisha Services"],
        title: 'Valvet Terrace',
       numberOfTables:"8",
       tableTypes:["Booths", "cocktail Tables"],
       btnText:"Read More",
        image: SectionImageTest,
        excerpt: 'Savor the city skyline from the comfort of our plush velvet terrace, offering a breathtaking urban panorama. Be apart of a premium experience 🥂, & We are thrilled to announce that our exclusive spaces are filling up',
        content: 'The Velvet Terrace is our outdoor restaurant section, offering stunning views of the city skyline. This luxurious space is perfect for those who want to enjoy a delicious meal in a sophisticated setting. The Velvet Terrace features plush seating, elegant décor, and impeccable service. Our attentive staff will ensure that you have everything you need to enjoy your dining experience. Our menu features a variety of dishes, from classic favorites like steak and seafood to more innovative options. We also offer a wide selection of wines and cocktails to choose from. Whether you are in the mood for a leisurely lunch or a romantic dinner, the Velvet Terrace is the perfect place to enjoy a delicious meal in a beautiful setting.',
      },


      {
        id: 4,
        svg:CClub,
        mainImg:Rasta,
        btnColor:"white",
          title: 'The Champagne Club',
         numberOfTables:"8",
         numberOfTables:[1,2,3,4,5,6],
         tableTypes:["Booths", "cocktail Tables"],
         btnText:"Read More",
         amenities:["Breath taking view of the DJ's Floor", "Bottle Service", "Access To Ballerz End Is Exclusively After Placing A Reservation" ],
          image: SectionImageTest,
          excerpt: 'Savor the city skyline from the comfort of our plush velvet terrace, offering a breathtaking urban panorama. Be apart of a premium experience 🥂, & We are thrilled to announce that our exclusive spaces are filling up',
          content: 'The Velvet Terrace is our outdoor restaurant section, offering stunning views of the city skyline. This luxurious space is perfect for those who want to enjoy a delicious meal in a sophisticated setting. The Velvet Terrace features plush seating, elegant décor, and impeccable service. Our attentive staff will ensure that you have everything you need to enjoy your dining experience. Our menu features a variety of dishes, from classic favorites like steak and seafood to more innovative options. We also offer a wide selection of wines and cocktails to choose from. Whether you are in the mood for a leisurely lunch or a romantic dinner, the Velvet Terrace is the perfect place to enjoy a delicious meal in a beautiful setting.',
        
      }
  ]

  
const {sectionId} = useParams();
const _sectionId_ = parseInt(sectionId);
console.log("Mobile Passed Data",_sectionId_)

console.log("props passed: ", props.bookings.props);

const sections_ = sectionsDataSet.find(data => data.id === _sectionId_)
console.log("User Data Selected", sections_.title)

  
    //the struggle continues
  const [maxDate, setMaxDate] = useState('');
  // var tableType = props.bookings.bookings;

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
  const [tableType, setTableType] = useState(props.bookings.props||"NO TABLE SELECTED!");
  

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
  // const handleTableChange = (e) => setTableType(e.target.value);

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
              type="text"zind
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
                      className="kim-vibes form-control"
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
          <label style={{marginTop:"20px !important;"}} className='kim-label mar'>
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
        <label style={{marginTop:"20px !important;"}} className='kim-label'>
          Table Choice
          <input
              type="text"
              id="arrival-time"
              name="full-name"
              value={tableType}
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