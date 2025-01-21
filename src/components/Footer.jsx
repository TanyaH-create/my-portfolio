import React from 'react';

function Footer() {
  return (
    <div className="footer text-white py-4">
   
     <footer className="container text-center">
      <div className="row justify-content-center align-items-center">

          <div className="col-auto">
            <a href="https://github.com/TanyaH-create" target="_blank" rel="noopener noreferrer">
             <img src="/assets/images/github-mark.png" alt="GitHib Logo" className="logo" ></img>
            </a>
          </div>
          <div className="col-auto mx-5">
            <a href="https://www.linkedin.com/in/tanya-hauck-603895278/"    target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/LI-In-Bug.png" alt="Linked In Logo" className="logo" ></img>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://stackoverflow.com/users/29269726/tanyah" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/logo-stackoverflow2.png" alt="Stack Overflow Logo" className="logo"></img>
            </a>
          </div>

      </div>
     </footer>
    </div>
  );
}

export default Footer
