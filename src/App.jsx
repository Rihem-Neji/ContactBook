
import UserList from "./components/UserList";

import "./App.css";

function App() {

  return (
    <div className="app">

      {/* Header */}
      <header className="header">

        <div className="header-content">

          <div className="logo">
            <span className="logo-icon">📒</span>

            <h1>
              Contact<span>Book</span>
            </h1>
          </div>

          <p>
            Your personal contact directory
          </p>

        </div>

      </header>

      {/* Main content */}
      <main className="container">

        <div className="welcome-section">

          <div>
            <h2>Welcome to ContactBook</h2>

            <p>
              Find and explore your contacts in one place.
            </p>
          </div>

          <div className="api-status">
            <span className="status-dot"></span>
            API Connected
          </div>

        </div>

        <UserList />

      </main>

      {/* Footer */}
      <footer className="footer">

        <p>
          ContactBook — React, Axios & JSONPlaceholder API
        </p>

      </footer>

    </div>
  );
}

export default App;
