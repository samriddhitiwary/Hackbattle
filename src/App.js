import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import ClinicCarousel from './components/Carousel/Carousel';
import Hospitals from './components/Hospitals/Hospitals';
import Appointments from './components/Appoinments/Appoinments';
import Speciality from './components/Speciality/Speciality';
import MiniNavbar from './components/MiniNavbar/MiniNavbar';
import Procedures from './components/Procedures/Procedures';
import ProHealth from './components/ProHealth/ProHealth';
import ConsultOnline from './components/Appoinments/ConsultOnline';
import PatientCare from './components/PatientCare/PatientCare';
import FooterAppointments from './components/FooterAppointments/FooterAppointments';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import ViewRecords from './components/Appoinments/ViewRecords';

function App() {
  useEffect(() => {
    document.title = 'Digital Healthcare';
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main layout for general pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Speciality />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/prohealth" element={<ProHealth />} />
        </Route>
        
        {/* Separate page layout for Consult Online */}
        <Route path="/consult-online" element={<ConsultOnline />} />
        <Route path="/view-record" element={<ViewRecords />}/>
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
    <Outlet /> {/* This renders the child route content, like Speciality, Procedures, etc. */}
    <br />
    <PatientCare />
    {/* <Hospitals/> */}
    
    {/* <FooterAppointments /> */}
    <Footer />
  </>
);

// Separate page layout for the "Consult Online" page
// const ConsultOnlinePage = () => (
//   <>
//     {/* Here, you can customize the layout for the ConsultOnline page */}
//     <ConsultOnline />
//   </>
// );

export default App;