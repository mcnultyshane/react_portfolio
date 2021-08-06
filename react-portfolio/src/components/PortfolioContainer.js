import React, { useState } from 'react';
import NavTabs from './NavTabs';
// import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />;
    // }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="nav-div">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}