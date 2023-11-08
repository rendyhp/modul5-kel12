import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Game.css";

export default function Game() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const poster = [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      id: 1,
      rate: 4,
      genre: "action-adventure, open world",
      img: "https://source.unsplash.com/720x720?videogame",
    },
    {
      title: "Red Dead Redemption 2",
      id: 2,
      rate: 4,
      genre: "action-adventure, western",
      img: "https://source.unsplash.com/720x720?videogame",
    },
    {
      title: "Grand Theft Auto V",
      id: 3,
      rate: 4,
      genre: "action-adventure, open world",
      img: "https://source.unsplash.com/720x720?videogame",
    },
  ];

  const data = [
    {
      title: "Elden Ring",
      id: 4,
      rate: 4,
      genre: "action role-playing",
      img: "https://source.unsplash.com/720x720?videogame",
    },
    {
      title: "God of War",
      id: 5,
      rate: 4,
      genre: "action-adventure",
      img: "https://source.unsplash.com/720x720?videogame",
    },
    {
      title: "Horizon Forbidden West",
      id: 6,
      rate: 4,
      genre: "action role-playing, open world",
      img: "https://source.unsplash.com/720x720?videogame",
    },
    {
      title: "Death Stranding",
      id: 7,
      rate: 4,
      genre: "action-adventure",
      img: "https://source.unsplash.com/720x720?videogame",
    },
    {
      title: "The Last of Us Part II",
      id: 8,
      rate: 4,
      genre: "action-adventure, survival horror",
      img: "https://source.unsplash.com/720x720?videogame",
    },
    {
      title: "Ghost of Tsushima",
      id: 9,
      rate: 4,
      genre: "action-adventure, open world",
      img: "https://source.unsplash.com/720x720?videogame",
    },
  ];

  return (
    <>
      <p id="games">Top Games</p>
      <div className="containerTop">
        {poster.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            {data.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="games">All Games</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <Link to={`/game/${item.id}`} key={item.id}>
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Link>
              {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
          ))}
        </div>
        <div className="column">
          <p id="games">All Games</p>
          {data.map((item, index) => (
            <Link to={`/game/${item.id}`} key={item.id}>
              <Fragment key={item.id}>
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Fragment>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
