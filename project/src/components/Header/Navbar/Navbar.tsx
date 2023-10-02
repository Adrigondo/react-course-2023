const Navbar = () => {
  return (
    <div>
      <div className="input-icon">
        <input
          type="text"
          placeholder="Buscar..."
          className="form-control"
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