export const Footer = () => {
  return (
    <div className="sub-color">
      <footer
        className="container d-flex flex-wrap 
                justify-content-between align-items-center py-5 sub-color"
      >
        <p className="col-md-4 mb-0 text-white">© BDH Company, Inc</p>
        <ul className="nav navbar-dark col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Search Books
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
