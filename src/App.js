// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'; 
// import Header from './components/Header/Header';
// import ClinicCarousel from './components/Carousel/Carousel';
// import Hospitals from './components/Hospitals/Hospitals';
// import Appointments from './components/Appoinments/Appoinments';
// import Speciality from './components/Speciality/Speciality';
// import MiniNavbar from './components/MiniNavbar/MiniNavbar';
// import Procedures from './components/Procedures/Procedures';
// import ProHealth from './components/ProHealth/ProHealth';
// import ConsultOnline from './components/Appoinments/ConsultOnline';
// import PatientCare from './components/PatientCare/PatientCare';
// import FooterAppointments from './components/FooterAppointments/FooterAppointments';
// import Footer from './components/Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.css';
// import ViewRecords from './components/Appoinments/ViewRecords';

// function App() {
//   useEffect(() => {
//     document.title = 'Digital Healthcare';
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Main layout for general pages */}
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Speciality />} />
//           <Route path="/speciality" element={<Speciality />} />
//           <Route path="/procedures" element={<Procedures />} />
//           <Route path="/prohealth" element={<ProHealth />} />
//         </Route>
        
//         {/* Separate page layout for Consult Online */}
//         <Route path="/consult-online" element={<ConsultOnline />} />
//         <Route path="/view-record" element={<ViewRecords />}/>
//       </Routes>
//     </Router>
//   );
// }

// // Main layout for pages with shared Header, Carousel, Footer, etc.
// const MainLayout = () => (
//   <>
    
//     <Header />
//     <ClinicCarousel />
//     <Appointments />
//     <MiniNavbar />
//     <br />
//     <Outlet />
//     <br />
//     <PatientCare />
    
//     <Footer />
//   </>
// );


// export default App;


// DEFECTED CODE
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';                          
import ClinicCarousel from './components/Carousel/Carousel';
import Hospitals from './components/Hospitals/Hospitals';
import Appointments from './components/Appoinments/Appoinments';
import Speciality from './components/Speciality/Speciality';
import MiniNavbar from './components/MiniNavbar/MiniNavbar';
import Procedures from './components/Procedures/Procedures';
import ProHealth from './components/ProHealth/ProHealth';
import ConsultOnline from './components/Appoinments/ConsultOnline';
import Footer from './components/Footer/Footer';
import PatientSignIn from './components/PatientSignIn/PatientSignIn'; // Add your sign-in component
import ViewRecords from './components/Appoinments/ViewRecords';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  useEffect(() => {
    document.title = 'Digital Healthcare';
  }, []);

  return (
    <Router>
      <Routes>
        {/* Route for the sign-in page */}
        <Route path="/" element={<PatientSignIn />} />

        {/* Main home layout after sign-in */}
        <Route path="/home" element={<MainLayout />} />
        
        {/* Separate page for Consult Online */}
        <Route path="/consult-online" element={<ConsultOnline />} />
        <Route path="/view-record" element={<ViewRecords />} />
      </Routes>
    </Router>
  );
}

// Main layout for pages with shared Header, Carousel, Footer, etc.
const MainLayout = () => (
  <>
    <Header />
    <ClinicCarousel />
    <Appointments />
    <MiniNavbar />
    <br />
    <Speciality />
    <br />
<<<<<<< HEAD
=======
    <PatientCare />
    {/* <Hospitals/> */}
    
    {/* <FooterAppointments /> */}
>>>>>>> 9baeb2454cd031ed958a973275f6150a374516aa
    <Footer />
  </>
);

export default App;


