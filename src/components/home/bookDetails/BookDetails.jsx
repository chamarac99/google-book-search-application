import React from 'react';
import { useLocation ,Link} from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import './BookDetails.css';

const BookDetails = () => {
    const location = useLocation();
    const book = location.state?.book;

    if (!book) {
        return <p>Book details not found.</p>;
    }

    const {
        title,
        authors,
        description,
        imageLinks,
        publisher,
        publishedDate,
        previewLink,
    } = book.volumeInfo;

    return (
        <div className="book-details-page">
            <Navbar />
            
            <div className="book-details-container">
              <Link to='/'>Back to Home</Link>
                <h1 className="book-title">{title}</h1>
                <div className="book-details">
                    <div className="book-cover-container">
                        <img
                            src={imageLinks?.thumbnail || 'https://via.placeholder.com/128x195?text=No+Image'}
                            alt={title}
                            className="book-cover"
                        />
                    </div>
                    <div className="book-info">
                        <p className="book-info-item"><strong>Author(s):</strong> {authors?.join(', ') || 'Unknown'}</p>
                        <p className="book-info-item"><strong>Publisher:</strong> {publisher || 'Unknown'}</p>
                        <p className="book-info-item"><strong>Published Date:</strong> {publishedDate || 'Unknown'}</p>
                        <p className="book-info-item"><strong>Description:</strong> {description || 'No description available.'}</p>
                        <a
                            href={previewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="book-link"
                        >
                            <span>View More</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookDetails;
