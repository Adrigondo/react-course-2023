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
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
          {/* <span className="ti ti-search"></span> */}
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