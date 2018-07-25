import React from 'react';

const SimpleWrapper = (props) => (
        <div className="container">
          <div className="row">
            {props.children}
          </div>
        </div>
)

function HeaderContent (props) {
  return (
  <SimpleWrapper>
    <div className="col-lg-8 col-md-10 mx-auto">
      <div className="site-heading">
          <h1>{props.h1title}</h1>
        <span className="subheading">{props.spantitle}</span>
      </div>
    </div>
  </SimpleWrapper>
  )
}

const Overlay = () => (
        <div className="overlay"></div>
);

function Header (props) {
    return (
      <header className="masthead">
        <Overlay />
        <HeaderContent h1title={props.h1title} spantitle={props.spantitle}/>
      </header>
      );
}

export default Header;
