import React from 'react';
import { Link } from 'react-router-dom';

import Href from '../helper/Hreflink'

class PreviewHeader extends React.Component {
  render () {
    return (
        <Link to="/post.html">
          <h2 className="post-title">
            Man must explore, and this is exploration at its greatest
          </h2>
          <h3 className="post-subtitle">
            Problems look mighty small from 150 miles up
          </h3>
        </Link>
    )
  }
}

class PreviewPost extends React.Component {
  render () {
    return (
      <div className="post-preview">
        <PreviewHeader />
        <p className="post-meta">Posted by
          <Href pathLink="#" name="Start Bootstrap"/>on September 24, 2018 </p>
      </div>
    )
  }
}
export default PreviewPost;
