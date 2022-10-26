import React from 'react';
import "./loader.scss";

const Loader = ({ width = "100px", ...rest }) => <span className="loader" style={{ width, height: width, ...rest }} />

export default Loader;
