import React, { Component } from 'react';
import css from './app.module.css';
import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
// import { render } from '@testing-library/react';
import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;
class App extends Component {
  state = {
    page: 1,
    gallery: [],
    search: '',
    perPage: 4,
  };
  componentDidUpdate(p, s) {
    const { search, page, perPage } = this.state;
    if (s.page !== page || s.search !== search) {
      axios(
        `/?q=${search}&page=${page}&key=29224070-f30117804bd7f83d0be1f5f7a&orientation=horizontal&per_page=${perPage}`
      ).then(res => {
        this.setState(prev => ({
          gallery: [...prev.gallery, ...res.data.hits].flat(),
        }));
      });
    }
  }
  handleMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  handleSubmit = e => {
    this.setState({
      search: e,
      page: 1,
      gallery: [],
    });
  };
  render() {
    const { handleSubmit, handleMore } = this;
    const { gallery, search } = this.state;
    return (
      <div className={css.App}>
        <Searchbar
          search={search}
          gallery={gallery}
          handleSubmit={handleSubmit}
        />
        <ImageGallery gallery={gallery} />
        <Loader />
        {gallery.length !== 0 && <Button handleMore={handleMore} />}
        <Modal />
      </div>
    );
  }
}

export default App;
