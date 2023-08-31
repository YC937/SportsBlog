import React from 'react';

const App = () => {
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
    welcomeMessage: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    mainContent: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '800px',
      margin: '0 auto',
      marginTop: '50px',
    },
    potentialGames: {
      flex: '1.5',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      height: '300px',
    },
    commentBox: {
      flex: '1',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      marginLeft: '20px',
      height: '150px',
    },
    commentBoxNotFirst: {
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
        <div style={styles.mainContent}>
          <div style={styles.potentialGames}>
            {/* Potential games content goes here */}
          </div>
          <div style={styles.commentBox}>
            {/* Comment box 1 content goes here */}
          </div>
          <div style={styles.commentBox}>
            {/* Comment box 2 content goes here */}
          </div>
          <div style={styles.commentBox}>
            {/* Comment box 3 content goes here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
