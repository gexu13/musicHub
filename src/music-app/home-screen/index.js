import React, { useState, useEffect } from "react";
import Nav from "../navigation/nav";
import { Container, Row } from "react-bootstrap";
import SearchInput from "../search-screen/search";
import AlbumCard from "./album-card";

const client_id = "7ef9e2995db44a4ea55eb166ca757f66";
const client_secret = "86c419e8c2cf4763892ff8de340ef70d";

function Home() {
  const [token, setToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const authOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
      body: "grant_type=client_credentials",
    };

    fetch("https://accounts.spotify.com/api/token", authOptions)
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;
        setToken(accessToken);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  async function search(searchInput) {
    console.log("searching " + searchInput);

    var artistParam = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
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

  return (
    <div className="flex flex-col">
      <Nav />
      <Container>
        <h2 className="font-bold text-2xl">Home</h2>
        <SearchInput onSearch={search} />
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map((album, index) => (
            <AlbumCard key={index} album={album} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
