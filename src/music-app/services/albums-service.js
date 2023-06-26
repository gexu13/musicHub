import axios from 'axios';
const Albums_API = 'http://localhost:4000/api/albums';

const api = axios.create({ withCredentials: true });


export const likeAlbum = async (albumId, album) => {
    const response = await api.post(`${Albums_API}/albumId/${albumId}/like`, album);
    return response.data;
};

export const findLikedAlbums = async () => {
    console.log("findLikedAlbums");
    const response = await api.get(`${Albums_API}/user/likes`);
    return response.data;
};
 
export const findLikedAlbumsByUserId = async (userId) => {
    const response = await axios.get(`${Albums_API}/user/${userId}/likes`);
    return response.data;
}

export const findAlbumLikeByUserId = async (idObject) => {
    console.log("idObject", idObject);
    const response = await axios.post(`${Albums_API}/user/currentlike`, idObject);
    console.log("response", response.data);
    return response.data;
}


export const deleteLikedAlbum = async (albumId) => {
    const response = await api.delete(`${Albums_API}/${albumId}/deletelike`);
    return response.data;
}

