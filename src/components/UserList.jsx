
import { useState, useEffect } from "react";
import axios from "axios";

import UserCard from "./UserCard";

function UserList() {

  // État des utilisateurs
  const [users, setUsers] = useState([]);

  // État du chargement
  const [loading, setLoading] = useState(true);

  // État des erreurs
  const [error, setError] = useState("");

  // État de la recherche
  const [search, setSearch] = useState("");

  // Récupération des utilisateurs au chargement
  useEffect(() => {

    const fetchUsers = async () => {

      try {

        setLoading(true);
        setError("");

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Stocker les données reçues
        setUsers(response.data);

      } catch (err) {

        console.error("API Error:", err);

        setError(
          "Impossible de récupérer les contacts. Veuillez réessayer."
        );

      } finally {

        setLoading(false);

      }
    };

    fetchUsers();

  }, []);

  // Filtrer les utilisateurs par nom
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="contacts-section">

      {/* En-tête */}
      <div className="section-header">

        <div>
          <h2>My Contacts</h2>
          <p>Manage and discover your contacts</p>
        </div>

        <div className="contact-counter">
          <span>{users.length}</span>
          <small>Total Contacts</small>
        </div>

      </div>

      {/* Barre de recherche */}
      <div className="search-container">

        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search contacts by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="clear-search"
            onClick={() => setSearch("")}
          >
            ✕
          </button>
        )}

      </div>

      {/* État de chargement */}
      {loading && (
        <div className="loading-message">
          <div className="spinner"></div>
          <p>Chargement des contacts…</p>
        </div>
      )}

      {/* État d'erreur */}
      {!loading && error && (
        <div className="error-message">
          <h3>Something went wrong</h3>
          <p>{error}</p>
        </div>
      )}

      {/* Liste des utilisateurs */}
      {!loading && !error && (

        <>
          <div className="results-info">
            {filteredUsers.length} contact(s) affiché(s)
          </div>

          {filteredUsers.length === 0 ? (

            <div className="empty-message">
              <h3>No contacts found</h3>
              <p>Try another name.</p>
            </div>

          ) : (

            <div className="users-grid">

              {filteredUsers.map((user) => (

                <UserCard
                  key={user.id}
                  user={user}
                />

              ))}

            </div>

          )}

        </>

      )}

    </section>
  );
}

export default UserList;
