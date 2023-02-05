import Nav from 'react-bootstrap/Nav';

// type Props = {}

const Header = () => {
  return (
    <Nav
      activeKey='/home'
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href='/home'>Home</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
