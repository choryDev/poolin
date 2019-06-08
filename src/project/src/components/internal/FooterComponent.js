import React from 'react';
import { Link } from 'react-router-dom';

class FooterComponent extends React.Component {
  render() {
    const { children,...other} = this.props;

    return (
      <footer className="py-5 footer-auto-bottom" id="footer-main" {...other}>
        <div className="container">
          <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-6">
              <div className="copyright text-center text-xl-left text-muted">
                &copy; 2019 <Link to="#" className="font-weight-bold ml-1" target="_blank">enLight works</Link>
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