import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());

      navigate('/login');
      toast.success('Logout successful');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      collapseOnSelect
      className="fixed-top z-10 shadow-lg"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="text-yellow-400  font-bold">
            Odisha Masala
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex flex-col md:flex-row items-center gap-4">
            <LinkContainer to="/cart">
              <Nav.Link className="relative flex items-center text-white hover:text-yellow-400">
                <span className='mx-[10px]' >Cart</span>
                
                <FaShoppingCart className="mr-2 text-xl inline  pl-[5px]" />
                {cartItems.length > 0 && (
                  <Badge
                    pill
                    bg="warning"
                    className="absolute -top-2 -right-3 text-black font-semibold px-2"
                  >
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>

            {userInfo ? (
              <NavDropdown
                title={`Hello👋, ${userInfo.name}`}
                id="username"
                className="text-white"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item className="hover:bg-gray-100">Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler} className="hover:bg-gray-100">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link className="text-white hover:text-yellow-400 flex items-center">
                 
                 <span className='px-[10px]' >Sign In</span> 
                 <FaUser className="mr-2 text-xl inline " />
                </Nav.Link>
              </LinkContainer>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenu" className="text-white">
                <LinkContainer to="/admin/product-list">
                  <NavDropdown.Item className="hover:bg-gray-100">Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/order-list">
                  <NavDropdown.Item className="hover:bg-gray-100">Orders</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/user-list">
                  <NavDropdown.Item className="hover:bg-gray-100">Users</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
