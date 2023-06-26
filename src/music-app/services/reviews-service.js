import axios from 'axios';
const Reviews_API = 'http://localhost:4000/api/reviews';

const api = axios.create({ withCredentials: true });

export const createReview = async ({review, albumId}) => {
  const response = await api.post(Reviews_API, {review: review, albumId: albumId});
  return response.data;
}

export const findMyReview = async () => {
  const response = await api.get(`${Reviews_API}/my-reviews`);
  //console.log("response" + response);
  return response.data;
}

export const findReview = async (albumId) => {
  const response = await api.get(`${Reviews_API}?albumId=${albumId}`);
  return response.data;
}

export const findAllReview = async () => {
  const response = await axios.get(`${Reviews_API}/admin/allReviews/all`);
  const reviews= response.data;
  return reviews;
 }

export const deleteReview = async (rid) => {
  const response = await axios.delete(`${Reviews_API}/${rid}`);
  return response.data;
}
export const updateReview = async (newReview) => {
  const response = await api.put(`${Reviews_API}/update/${newReview._id}`, newReview);
  return response.data;
}

export const findReviewByAuthorId = async (uid) => {
  const response = await axios.get(`${Reviews_API}/author/${uid}`);
  return response.data;
}