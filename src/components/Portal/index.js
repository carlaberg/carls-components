import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = typeof document === 'undefined' ? {} : document.getElementById('modal');

class Portal extends Component {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      modalRoot
    )
  }
}

export default Portal;