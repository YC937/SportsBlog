import React from 'react';

const InformationPage = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      backgroundColor: '#f0f0f0',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '800px',
      marginBottom: '10px',
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
    navButtonHover: {
      backgroundColor: '#0056b3',
    },
    searchContent: {
      maxWidth: '800px',
      margin: '0 auto',
      marginTop: '50px',
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
    infoBox: {
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      height: '300px',
    },
    comments: {
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div className="nav-left">
            <button style={styles.navButton}>Home</button>
          </div>
          <div className="nav-right">
            <button style={styles.navButton}>ESPN</button>
            <button style={styles.navButton}>Stadiums / Upcoming Games</button>
            <button style={styles.navButton}>Search</button>
            <button style={styles.navButton}>Logout</button>
          </div>
        </nav>
      </header>
      <main>
        <div style={styles.searchContent}>
          <div style={styles.searchTitle}>
            Search for Stadium
          </div>
          <div style={styles.searchBox}>
            {/* Search bar content goes here */}
          </div>
          <div style={styles.infoBox}>
            {/* Stadium name content goes here */}
            <div style={styles.comments}>
              {/* Comments from users go here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InformationPage;
