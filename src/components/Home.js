import React from 'react';
import Header from './Header';
import Wrapper from '../helper/Wrapper';
import PreviewPost from './PreviewPost'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header h1title="Home title" spantitle="Home Sub title"/>
          <Wrapper>
            <PreviewPost />
        </Wrapper>

      </div>
    );
  }
}


export default Home;
