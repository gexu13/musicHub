import axios from 'axios';
const Bookmarks_API = 'http://localhost:4000/api/bookmarks';

const api = axios.create({ withCredentials: true }); 

export const findMyBookmark = async () => {
  const response = await api.get(`${Bookmarks_API}/my-bookmarks`);
  //console.log("response" + response);
  return response.data;
}

export const deleteBookmark = async (bid) => {
  const response = await api.delete(`${Bookmarks_API}/${bid}`);
  return response.data;
}

export const createBookmark = async (userId, albumId) => {
  const response = await api.post(Bookmarks_API, {userId, albumId});
  return response.data;
};



