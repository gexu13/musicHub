import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { BsHeart, BsBookmark, BsBookmarkFill, BsHeartFill } from "react-icons/bs";
import ReviewList from "../reviews/ReviewList";
import ReviewResult from "../user-reviews/reviews-result";
import "./album.css";
import { useDispatch } from 'react-redux';
import { createBookmarkThunk, deleteBookmarkThunk } from "../services/bookmark-thunk";
import { likeAlbum } from "../services/albums-service";
import { useNavigate } from "react-router-dom";
import { findAlbumLikeByUserId, deleteLikedAlbum } from "../services/albums-service";
import { findBookmarkByUserId } from "../services/bookmark-service";

function AlbumDetails() {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.users);
  const { id } = useParams();
  const token = useSelector((state) => state.apiInfo.token);
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [likedAlbum, setLikedAlbum] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.currentUser);
  const [isBookemarked, setIsBookmarked] = useState(false);
  const [myBookmarked, setMyBookmarked] = useState(false);
  const [currentbookmark, setCurrentBookmark] = useState(null);


  console.log(album);
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data);
        setTracks(data.tracks.items);
      });
  }, [id, token]);

  const handleBookmark = () => {
    if (currentUser === null) {
      alert("Please login to like an album");
      navigate("/login");
      return;
    }
    if (isBookemarked === true) {
       dispatch(deleteBookmarkThunk(currentbookmark._id)).then(() => {
        setIsBookmarked(false);
      });
    } else {
      dispatch(createBookmarkThunk({userId: user._id, albumId: id})).then(() => {
        setIsBookmarked(true);
      });      
    }
  };

  const findBookmark = async () => {
    console.log("2223333123123123123");
    const response = await findBookmarkByUserId ({ albumId: id, userId: currentUser._id,});
    // console.log("albumId", id);
    // console.log("userId", currentUser._id);
    console.log("11111111", response);
      if (response === null) {
        setIsBookmarked(false);
        return;
      }
      setIsBookmarked(true);
      setCurrentBookmark(response);
  };



  const likeAlbumHandler = async () => {
    

    if (likedAlbum === false) {
      const response = await likeAlbum(id, {
      name: album.name,
      artist: album.artists[0].name,
      image: album.images[0].url,
      });
      setLikedAlbum(true);
    }
      else {
        const response = await deleteLikedAlbum(id);
          setLikedAlbum(false);
      }
        
  };


  const findAlbumLike = async () => {
    const response = await findAlbumLikeByUserId({
      albumId: id,
      userId: currentUser._id,});
    
      if (response === null) {
        setLikedAlbum(false);
        return;
      }
    setLikedAlbum(true);
  };

  useEffect(() => {
    if (currentUser) {
      findAlbumLike();
      findBookmark();
    }
    
  }, []);




  //console.log(album);
  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <Container>
        <Row>
          <h1>{album.name}</h1>
        </Row>
        <Row>
          <Col md={6}>
            <img src={album.images[0]?.url} alt={album.name} />
          </Col>
          <Col className="right-col" md={6}>
            <div className="album-info">
              <h4>Artist: {album.artists[0].name}</h4>
              <h4>Release Date: {album.release_date}</h4>
              <div>
                <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer"   style={{ textDecoration: 'none'}}><h4>Spotify Album Link</h4></a>
              </div>
              <h4>Total Tracks: {album.total_tracks}</h4>
            </div>
            <div>
              <ul className="list-group mt-4">
                {tracks && tracks.map((track) => (
                  <li className="list-group-item m-0" key={track.id}>
                    <div>
                      <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}}><h5>{track.name}</h5></a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="album-icons">
              { (likedAlbum) ?
                (<button className="mt-0"
                  onClick={likeAlbumHandler}> <BsHeartFill className="heart-icon liked" />
                </button>)
                :
                (<button className="mt-0"
                  onClick={likeAlbumHandler}> <BsHeart className="heart-icon" />
                </button>)
              }
                 {isBookemarked ? (
                  <button className="mt-0">
                    <BsBookmarkFill className="bookmark-icon liked mr-2" onClick={handleBookmark} />
                  </button>
                ) : (
                  <button className="mt-0">
                    <BsBookmark className="bookmark-icon mr-2" onClick={handleBookmark} />
                  </button>
                )}
              </div>

                {/* { !(likeAlbum) && 
                <button className="mt-3"
                  onClick={likeAlbumHandler}> <BsHeart className="heart-icon" />
                </button>
                } 
                { (likeAlbum) && 
                <button className="mt-3"
                  onClick={likeAlbumHandler}> <BsHeartFill className="heart-icon liked" />
                </button>
              } */}
            </div>
            {/*
              <div className="album-icons">
              <BsHeart className="heart-icon" />
              <BsBookmark className="bookmark-icon" />
            </div>*/}
          </Col>
        </Row>
        <Row>
            <div className="review-section">
              <h2>Reviews</h2>
              <ReviewResult />
              <ReviewList />
            </div>
        </Row>
      </Container>
    </div>
  );
}

export default AlbumDetails;
