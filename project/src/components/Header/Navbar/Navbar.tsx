const Navbar = (
  { search, onSearch }:
    { search: string, onSearch: any }
) => {
  return (
    <div>
      <div className="input-icon">
        <input
          type="text"
          placeholder="Buscar..."
          className="form-control"
          value={search}
          onChange={(event) => onSearch(event)}
        />
        <div className="input-icon-addon">
          <span className="ti ti-search"></span>
        </div>
      </div>
      <a>
        Mi portafolio
      </a>
      <a>
        Home
      </a>
    </div>
  );
}

export default Navbar;