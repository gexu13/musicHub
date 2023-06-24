 import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import AlbumCard from "../album/album-card";

const ArtistHome = () => {

    const {currentUser} = useSelector(state => state.users);
    const token = useSelector((state) => state.apiInfo.token);
    console.log("home" + token);
    const [albums, setAlbums] = useState([]);

    async function search(searchInput) {
        console.log("searching " + searchInput);

        var artistParam = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
        };

        var artistId = await fetch(
            "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
            artistParam
        )
            .then((response) => response.json())
            .then((data) => {
            return data.artists.items[0].id;
        });

        var albumsResponse = await fetch(
        "https://api.spotify.com/v1/artists/" +
            artistId +
            "/albums?include_groups=album&limit=50",
            artistParam
        )
            .then((response) => response.json())
            .then((data) => {
            return data.items;
    });
    setAlbums(albumsResponse);
  }

  useEffect(() => {
    if(currentUser.userType === "ARTIST" && currentUser.stageName){
        search(currentUser.stageName);
    }
    }, []);
    
    return (
        <div>
             <h2 className="font-bold text-2xl mt-2">Artist's Home</h2>
             <Container>
                <Row className="mx-2 row row-cols-4">
                {albums.map((album, index) => (
                    <AlbumCard key={index} album={album} />
                ))}
                </Row>
            </Container>
        </div>
    )
    return (
        <div>
            <h2>artist home</h2>
        </div>
        )
}

export default ArtistHome;

