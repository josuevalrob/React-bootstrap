import React from 'react';
import Header from './Header';
import Wrapper from '../helper/helper';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header h1title="Home title" spantitle="Home Sub title"/>
          <Wrapper>
            <h1>I am something inside the home</h1>
          </Wrapper>

      </div>
    );
  }
}


export default Home;
