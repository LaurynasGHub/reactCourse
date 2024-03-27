//rfce
import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';

//components
import AdminUser from '../AdminUser/AdminUser';
import { faL } from '@fortawesome/free-solid-svg-icons';

function LogInButton() {
  const [user, setUser] = useState('user');
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //   const [validated, setValidated] = useState('');

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

  const handleClose = () => {
    setUsername('');
    setPassword('');
    // setValidated(false);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();

    setLogIn(true);

    const form = e.currentTarger;
    // if (!form.checkValidality()) return;

    console.log(username, password);
  };

  //   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <>
          <div className="user" onHide={handleClose} onClick={handleShow}>
            {user.username[0]}
          </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Body className="offCanvas-body">
              {!logIn ? (
                // <button onClick={handleLogIn}>Admin Log In</button>
                <form className="p-2">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    onClick={handleLogIn}
                    type="submit"
                    className="btn my-3 btn-primary"
                  >
                    Submit
                  </button>
                </form>
              ) : null}
              {logIn ? <AdminUser /> : null}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
}

export default LogInButton;
