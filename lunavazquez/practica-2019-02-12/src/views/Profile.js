import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

function Profile(props) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    firebase.initializeApp({
      apiKey: 'AIzaSyAMSFK6Z09Il-sj3MBYU7_XRYG2QWrR8X0',
      authDomain: 'netflix-9aa50.firebaseapp.com',
      databaseURL: 'https://netflix-9aa50.firebaseio.com',
      projectId: 'netflix-9aa50',
      storageBucket: 'netflix-9aa50.appspot.com',
      messagingSenderId: '842632186195',
      appId: '1:842632186195:web:9675f06f678805edafb9a6',
      measurementId: 'G-TC3Y6PSKMW',
    });
  }, []);

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const registerId = new Date().getTime();
    firebase
      .database()
      .ref(`users/${registerId}`)
      .set({ name }, (error) => {
        if (error) return console.log(error);
        props.history.push('/');
      });
  };

  return (
    <div className="col-md-6 offset-md-3">
      {showModal && (
        <div className="customModal">
          <div className="userForm">
            <i className="material-icons fright" onClick={() => setShowModal(!showModal)}>
              close
            </i>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Nombre</label>
                <input
                  type="text"
                  value={name}
                  className="form-control"
                  placeholder="Ingresa tu nombre"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </form>
          </div>
        </div>
      )}
      <h1>¿Quién quiere ver Netflix?</h1>
      <div className="card" style={{ width: '18rem' }}>
        <img
          src="https://occ-0-659-987.1.nflxso.net/art/2746b/2b0d1d50d501cd7d3755e9ec8198946cb9d2746b.png"
          className="card-img-top"
          alt="Adri"
        />
        <div className="card-body">
          <p className="card-text">Mextli</p>
        </div>
      </div>
      <i className="material-icons iconPlus" onClick={() => setShowModal(!showModal)}>
        control_point
      </i>
    </div>
  );
}

export default Profile;
