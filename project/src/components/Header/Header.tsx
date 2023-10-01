import Navbar from "./Navbar/Navbar";

const Header = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        {children}
      </div>
      <Navbar />
    </div>
  );
}

export default Header;