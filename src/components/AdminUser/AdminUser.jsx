//rfce
import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './adminUser.scss';

//components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faEnvelope,
  faPhoneVolume,
  faUser,
  faLocationDot,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';

function AdminUser() {
  const [user, setUser] = useState('user');
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(true);

  let endpoint = 'https://jsonplaceholder.typicode.com/users/1';

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(endpoint);

        if (!response.ok) throw new Error('Something went wrong');

        const data = await response.json();

        console.log(data);

        setUser(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [endpoint]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <>
          {/* <div className="user" onClick={handleShow}>
            {user.username[0]}
          </div> */}
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header className="offCanvas-header" closeButton>
              <FontAwesomeIcon icon={faUser} size="2x" />
              <Offcanvas.Title className="kontaktiniaiDuomenys">
                {'Admin page'}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offCanvas-body">
              {/* <p>Welcome!</p> */}
              <div className="adresoInfo">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {user.address.city}
                </p>
                <p>
                  <FontAwesomeIcon icon={faHouse} />
                  {user.address.street}
                </p>
              </div>

              <div className="kontaktiniaiDuomenys">
                <p className="contactInfo">
                  <FontAwesomeIcon icon={faAddressCard} />
                  Contact info
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  {user.email}
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhoneVolume} />
                  {user.phone}
                </p>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}

export default AdminUser;
