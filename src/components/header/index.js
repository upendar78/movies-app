import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

const Header = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
      // Implement your search functionality here
      // Fetch movies based on the searchQuery
      // Display search results
      console.log('Search query:', searchQuery);
    };
    // eslint-disable-next-line 
    {/*const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    }
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Redirect to the search page with the search s
        
    }
*/}

  return (
    <nav >
      <div className='nav-container'>
      <Link className='each-item left'  to="/movies/popular">
      
      MovieDb
      </Link>
      <ul className='unorder-list'>
      
        <li >
          <Link className='each-item' to="/movies/popular">Popular</Link>
        </li>
        <li>
          <Link className='each-item' to="movies/top_rated">Top Rated</Link>
        </li>
        <li>
          <Link className='each-item' to="movies/upcoming">Upcoming</Link>
        </li>
        <li>
          <input
            type="text"
            placeholder="Movie Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='serch-btn' onClick={handleSearch}>Search</button>
        </li>
       {/*  <form onSubmit={handleSearchSubmit}>
                <input 
                    type="text" 
                    placeholder="Movie Name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    
                />
                <button className='serch-btn' type="submit">Search</button>
            </form>
        */}
      </ul>
      </div>
    </nav>
  );
};

export default Header;
