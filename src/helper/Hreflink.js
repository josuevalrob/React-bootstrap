import React from 'react';
import { Link } from 'react-router-dom';

function Href(props) {
  return <Link className={props.classLink} to={props.pathLink}>{props.name}</Link>;
}
export default Href
