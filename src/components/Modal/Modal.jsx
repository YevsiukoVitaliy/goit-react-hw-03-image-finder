import css from './modal.module.css';
import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.escFunction);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.escFunction);
  }

  render() {
    const { show, gallery, id, showModal, escFunction } = this.props;
    if (!show) {
      return null;
    }
    return (
      <div
        onClick={() => {
          showModal();
        }}
        onKeyDown={() => escFunction()}
        className={css.Overlay}
      >
        {gallery
          .filter(item => item.id === id)
          .map(item => (
            <div key={id} className={css.Modal}>
              <img id={item.id} src={item.largeImageURL} alt="" />
            </div>
          ))}
      </div>
    );
  }
}
