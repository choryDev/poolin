import React from 'react';

class FooterComponent extends React.Component {
  render() {
    const { children } = this.props;
    
    return (
      <footer className="py-6" id="footer-main">
        <div className="container">
          <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-6">
              <div className="copyright text-center text-xl-left text-muted">
                &copy; 2019 <a href="index.html" className="font-weight-bold ml-1" target="_blank">enLight works</a>
              </div>
            </div>
            {children}
          </div>
        </div>
      </footer>
    )
  }
};
export default FooterComponent;