import React from 'react';
import './About.css'; 
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <h1 className="about-heading"> About This Application</h1>
                <p className="about-paragraph">
                    Welcome to the Google Books Search App! This application allows users to search for books using the{' '}
                    <a 
                        href="https://developers.google.com/books" 
                        className="about-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Google Books API
                    </a>. 
                    With a simple search, you can explore a wide collection of books, view details such as titles and authors, 
                    and enhance your reading list.
                </p>
                <p className="about-paragraph">
                    <strong>Features:</strong>
                </p>
                <ul className="about-list">
                    <li>Search for books by title, author, or keywords.</li>
                    <li>View detailed information about each book.</li>
                    <li>Minimalistic and user-friendly design.</li>
                </ul>
                <p className="about-paragraph">
                    This project was built using modern web technologies like React.js, leveraging external APIs to provide a seamless user experience.
                </p>
               
            </div>
            
         <Footer />  
        </div>
        
        
    );
};

export default AboutPage;
