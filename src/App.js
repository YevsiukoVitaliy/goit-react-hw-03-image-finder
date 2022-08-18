import React, { Component } from 'react';
import css from './app.module.css';
import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import { imageAPI } from 'imageAPI/imageAPI';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    page: 1,
    gallery: [],
    search: '',
    isLoader: false,
    error: null,
    show: false,
    id: '',
  };

  showModal = e => {
    this.setState({
      show: !this.state.show,
    });
    this.setState({ id: e });
  };

  escFunction = event => {
    if (this.state.show) {
      if (event.keyCode === 27) {
        this.setState({ show: !this.state.show });
      }
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction);
  }

  componentDidUpdate(p, s) {
    const { search, page } = this.state;

    if (s.page !== page && page !== 1) {
      this.fetchImages(search, page);
    }
  }
  fetchImages = (search, page) => {
    try {
      imageAPI(search, page).then(({ hits }) => {
        this.setState(prev => ({
          gallery: [...prev.gallery, ...hits],
          isLoader: false,
        }));
      });
    } catch (error) {
      this.setState({ error: error.imageAPI });
      console.log('error', error.imageAPI);
    } finally {
      this.setState({ isLoader: true });
    }
  };
  handleMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleSubmit = search => {
    this.setState({
      search,
      page: 1,
      gallery: [],
    });
    if (search !== '') {
      this.fetchImages(search, 1);
    }
  };

  render() {
    const { handleSubmit, handleMore, escFunction, showModal } = this;
    const { gallery, search, isLoader, show, id } = this.state;

    return (
      <div className={css.App}>
        <Searchbar
          search={search}
          gallery={gallery}
          handleSubmit={handleSubmit}
        />
        <ImageGallery showModal={showModal} gallery={gallery} show={show} />

        {isLoader && <Loader />}
        {gallery.length !== 0 && <Button handleMore={handleMore} />}

        <Modal
          escFunction={escFunction}
          showModal={showModal}
          gallery={gallery}
          id={id}
          show={show}
        />
      </div>
    );
  }
}
App.propTypes = {
  handleSubmit: PropTypes.func,
  handleMore: PropTypes.func,
  escFunction: PropTypes.func,
  show: PropTypes.func,
  state: PropTypes.shape({
    gallery: PropTypes.array,
    search: PropTypes.string,
    isLoader: PropTypes.bool,
    show: PropTypes.bool,
    id: PropTypes.string,
  }),
};
export default App;
