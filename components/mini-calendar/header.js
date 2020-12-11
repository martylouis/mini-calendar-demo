const Header = () => {
  return (
    <header className="ba-mc__header">
      <h2 className="ba-mc__heading">
        <a href="#">Schedule</a>
      </h2>
      <div className="ba-mc__nav">
        <h4 className="ba-mc__nav_date">November 2020</h4>
        <div className="ba-mc__nav_buttons">
          <button className="ba-mc__nav_button prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16">
              <path id="path" d="M346.555,64l-6.326-7.381a.952.952,0,0,1,0-1.238L346.555,48,348,49.238,342.2,56,348,62.762Z" transform="translate(-340 -48)" />
            </svg>
          </button>
          <button className="ba-mc__nav_button next">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16">
              <path id="path" d="M5.445,96l6.326,7.381a.952.952,0,0,1,0,1.238L5.445,112,4,110.762,9.8,104,4,97.238Z" transform="translate(-4 -96)" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
