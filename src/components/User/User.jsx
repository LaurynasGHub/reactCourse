import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './user.scss';

function User() {
  const [user, setUser] = useState('user');
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

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
          <div className="user" onClick={handleShow}>
            {user.username[0]}
          </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header className="offCanvas-header" closeButton>
              <Offcanvas.Title>{'Labas, ' + user.username}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offCanvas-body">
              Sveiki atvyke!
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}

export default User;
