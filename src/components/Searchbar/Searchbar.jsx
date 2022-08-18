import React from 'react';
import css from './searchbar.module.css';

export default class Searchbar extends React.Component {
  state = {
    search: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.search);
  };

  handleChange = evt => {
    this.setState({
      search: evt.target.value,
    });
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;
    return (
      <header className={css.Searchbar}>
        <form onSubmit={handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButtonLabel}>
            <span className={css.SearchFormButton}>Search</span>
          </button>

          <input
            onChange={handleChange}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
          />
        </form>
      </header>
    );
  }
}
