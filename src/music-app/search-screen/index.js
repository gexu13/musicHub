import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AlbumCard from "../album/album-card";
import SearchInput from "../home-screen/search";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Search() {
  const token = useSelector((state) => state.apiInfo.token);
  const { keyword } = useParams();
  const [searchInput, setSearchInput] = useState(keyword);
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);

  async function search(searchInput) {

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

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      search(searchInput);
      navigate(`/search/${searchInput}`)
    }
  }

  function handleChange(event) {
    setSearchInput(event.target.value);
  }



  useEffect(() => {
    if(keyword){
      setSearchInput(keyword);
      search(searchInput);
    }
  }, [keyword]);

  // console.log("search token" + token);

  return (
    <div className="flex flex-col mt-2">
      <Container>
        <h2 className="font-bold text-2xl">Search</h2>
        {/* <SearchInput onSearch={search} /> */}

        <InputGroup className="mb-3" size="lg">
      <FormControl
        placeholder="search for artist"
        type="input"
        value={searchInput}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
      />
      <Button onClick={() => navigate(`/search/${searchInput}`)}>Search</Button>
    </InputGroup>


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
