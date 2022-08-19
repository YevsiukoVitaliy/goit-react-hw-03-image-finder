import axios from 'axios';

const API_KEY = '29224070-f30117804bd7f83d0be1f5f7a';
axios.defaults.baseURL = `https://pixabay.com/api`;
axios.defaults.params = {
  key: API_KEY,
  orientation: 'horizontal',
};

export const imageAPI = async (search, page, per_page) => {
  const { data } = await axios(
    `/?q=${search}&page=${page}&per_page=${per_page}`
  );
  return data;
};
