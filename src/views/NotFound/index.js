import React from 'react';
import '../NotFound/style.css';
import { Link } from 'react-router-dom';

function NotFound() {
  // Karena body itu bagian dari Element styling nya ga bisa disatukan dengan module
  // body itu terdefined otomatis dan untuk mengatur nya gunakan DOM
  // Contoh seperi di UseEffect dibawah.
  React.useEffect(() => {
    document.body.style.background = 'linear-gradient(90deg, rgba(48, 16, 255, 1) 0%,rgba(100, 115, 255, 1) 100%)';
    document.body.style.padding = '0';
    document.body.style.margin = '0';
    document.body.style.boxSizing = 'border-box';

    return () => {
      document.body.style.backgroundColor = 'transparent';
    };
  });


  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops, The Page you are looking for can&apos;t be found!</h2>
        <Link to="/">
          <span className="arrow" />
          Return To Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
