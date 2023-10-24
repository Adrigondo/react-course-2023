import Navbar from "./Navbar/Navbar";

const Header = (
  { children, search, onSearch }:
    { children: JSX.Element, search: string, onSearch: any }
) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        {children}
      </div>
      <Navbar
        search={search}
        onSearch={onSearch} />
    </div>
  );
}

export default Header;