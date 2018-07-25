import React from 'react';

const Wrapper = (props) => (
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              {props.children}
            </div>
          </div>
        </div>
)
export default Wrapper
