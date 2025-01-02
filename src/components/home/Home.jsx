import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import FeaturedProduct from './features/FeaturedProduct';

const Home = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [searchResultHeader, setSearchResultHeader] = useState('');
    const navigate = useNavigate();

    const quotes = [
        "A room without books is like a body without a soul. — Marcus Tullius Cicero",
        "Books are a uniquely portable magic. — Stephen King",
        "The only thing you absolutely have to know is the location of the library. — Albert Einstein",
        "So many books, so little time. — Frank Zappa",
        "Reading is a discount ticket to everywhere. — Mary Schmich",
        "A good book is an event in my life. — Stendhal",
        "The greatest gift is a passion for reading. — Elizabeth Hardwick",
        "Books are mirrors: you only see in them what you already have inside you. — Carlos Ruiz Zafón",
        "There is no friend as loyal as a book. — Ernest Hemingway",
        "We read to know we are not alone. — C.S. Lewis",
        "Books can be dangerous. The best ones should be labeled ‘This could change your life.’ — Helen Exley",
        "I have always imagined that Paradise will be a kind of library. — Jorge Luis Borges",
        "A book is a dream that you hold in your hand. — Neil Gaiman",
        "The world was hers for the reading. — Betty Smith",
        "Good friends, good books, and a sleepy conscience: this is the ideal life. — Mark Twain",
    ];

    const fetchBooks = async (searchQuery) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&maxResults=20`
            );
            const data = await response.json();

            if (data.items) {
                setBooks(data.items);
                setError('');
                setSearchResultHeader('Search Results');
            } else {
                setBooks([]);
                setError('No books found. Try a different search query.');
                setSearchResultHeader('');
            }
        } catch (err) {
            setError('Failed to fetch books. Please try again later.');
            setSearchResultHeader('');
            console.error(err);
        }
    };

    const handleSearch = () => {
        if (query.trim()) {
            fetchBooks(query.trim());
        } else {
            setError('Please enter a search term.');
            setBooks([]);
            setSearchResultHeader('');
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prevIndex) => (prevIndex + 3) % quotes.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [quotes.length]);

    const goToDetailsPage = (book) => {
        navigate(`/book/${book.id}`, { state: { book } });
    };

    return (
        <div>
            <Navbar />
            <div className="home-container">
                <div className="home-header">
                    <h1 className="home-heading">Discover Your Next Favourite Book</h1>
                    <p className="home-subheading">
                        Search millions of books and get inspired by timeless quotes.
                    </p>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search for books..."
                            className="search-input"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                        />
                        <button className="search-button" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>

                {error && <p className="error-message">{error}</p>}
                <div className="book-details">
                    {searchResultHeader && <p className="search-header">{searchResultHeader}</p>}
                    <div className="books-container">
                        {books.map((book) => (
                            <div
                                key={book.id}
                                className="book-card"
                                onClick={() => goToDetailsPage(book)}
                            >
                                <img
                                    src={
                                        book.volumeInfo.imageLinks?.thumbnail ||
                                        'https://via.placeholder.com/128x195?text=No+Image'
                                    }
                                    alt={book.volumeInfo.title || 'Book Cover'}
                                    className="book-image"
                                />
                                <div className="book-details">
                                    <p className="book-title">
                                        {book.volumeInfo.title || 'Untitled'}
                                    </p>
                                    <p className="book-author">
                                        {book.volumeInfo.authors
                                            ? book.volumeInfo.authors.join(', ')
                                            : 'Unknown Author'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <FeaturedProduct />
                <div className="quote-display-container">
                    <h2 className="quote-heading">Quotes of the Day</h2>
                    <div className="quotes-display">
                        {quotes.slice(quoteIndex, quoteIndex + 3).map((quote, index) => (
                            <div key={index} className="quote-item">
                                <p>{quote}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
