import './App.css';
import Homepage from './components/NoScroll';
import About from './Screens/About';
import { getAuth } from "firebase/auth";
import ReservationsPage from './Screens/ReservationsPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Contactus from './Screens/Contactus';
import ComingSoon from "./Screens/ComingSoon";
import Sections from './components/Sections';
import ConfirmationPage from './Screens/ConfirmationPage';
import Login from "./components/Login"
import NvSections from './Screens/NvSections';
import Faqs from "./Screens/FaqsComponent"
import SectionPage from './Screens/SectionPage';
import sectionData from './dataPoint/sectionData';
import Gallery from './components/Gallery_';
import Blog from './Screens/Blog';
import FoodMenu from './Screens/FoodMenu';
import Favicon from 'react-favicon'; 
import NvLogo from './imgs/nvLogo1.png'
import ViewPost from './components/ViewPost';
 
function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyB8UQ3KUtxBTEw9QwOQ38rAwVT7hePby4k",
    authDomain: "nonivie-51296.firebaseapp.com",
    projectId: "nonivie-51296",
    storageBucket: "nonivie-51296.appspot.com",
    messagingSenderId: "971121217588",
    appId: "1:971121217588:web:90e8b2f696a97e2a323a61",
    measurementId: "G-0KT86GEKSZ",
    databaseURL: "https://nonivie-51296-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);



firebase.initializeApp(firebaseConfig);


  return (
    

    <Router>
    <div className="App">
      <Favicon url={NvLogo}/>
   <Routes>
    <Route path='*' element={<Homepage/>}/>
    <Route path='/coming-soon' element={<ComingSoon/>}/>
    <Route path='/about-us' element={<About/>}/>
    <Route path='/contact-us' element={<Contactus/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/old-reservations" element={<Sections/>}/>
    <Route path="/reservations/:sectionId" element={<ReservationsPage section={sectionData}/>}/>
    <Route path="/post/:postId" element={<ViewPost/>}/>
    <Route path='/membership' element={<ComingSoon/>}/>
    <Route path='/confirmation' element={<ConfirmationPage/>}/>
    <Route path="/bookings" element={<NvSections section={sectionData}/>} />
    <Route path="/faqs"  element={<Faqs/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='menu' element={<FoodMenu/>}/>
    <Route path='/section-page/:sectionId' element={<SectionPage section={sectionData}/>}/>
   </Routes>
    </div>
    </Router>
  );
}

export default App;
