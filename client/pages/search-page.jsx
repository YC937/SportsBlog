import React from 'react';

const SearchPage = () => {
  const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
  },
  nav: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
  },
  navButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    margin: '0 5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  
  welcomeMessage: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  
  mainContent: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
  
  searchContent: {
    maxWidth: '800px',
    textAlign: 'center',
  },
  searchTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  searchBox: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  searchResults: {
    display: 'flex',
    maxWidth: '800px',
    margin: '0 auto',
  },
  resultsBox: {
    flex: '1',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    marginRight: '20px',
    marginBottom: '20px',
    height: '300px',
  },
};

  return (
    <div>
      <header>
        <nav style={styles.nav}>
          <div style={styles.navLeft}>
            <button style={styles.navButton}>Home</button>
          </div>
          <div style={styles.navRight}>
            <button style={styles.navButton}>ESPN</button>
            <button style={styles.navButton}>Stadiums / Upcoming Games</button>
            <button style={styles.navButton}>Search</button>
            <button style={styles.navButton}>Logout</button>
          </div>
        </nav>
        <div style={styles.welcomeMessage}>
          <p>Welcome to SportsSpotter! Please Login or Signup to continue</p>
        </div>
      </header>
      <main>
        <div style={styles.mainContent}>
          <div style={styles.searchContent}>
            <div style={styles.searchTitle}>Search for Stadium</div>
            <div style={styles.searchBox}>
              {/* Search bar content goes here */}
            </div>
            <div style={styles.searchResults}>
              <div style={styles.resultsBox}>
                {/* Stadium names / upcoming games content goes here */}
              </div>
              <div style={styles.resultsBox}>
                {/* Sample calendar content goes here */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};



export default SearchPage;
