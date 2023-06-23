import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import AlbumCard from "../album/album-card";
import SearchInput from "../home-screen/search";
import { useSelector } from "react-redux";

function Search() {
  const token = useSelector((state) => state.apiInfo.token);
  const [albums, setAlbums] = useState([]);

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
    <div className="flex flex-col mt-2">
      <Container>
        <h2 className="font-bold text-2xl">Search</h2>
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

export default Search;
