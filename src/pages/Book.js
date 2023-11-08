import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Book.css";

export default function Book() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const poster = [
    {
      title: 'To Kill a Mockingbird',
      description: 'To Kill a Mockingbird is a novel by Harper Lee, set in the American South during the 1930s. It addresses issues of racism and injustice through the eyes of a young girl named Scout Finch.',
      genre: 'Novel, Coming-of-age',
      img: 'https://source.unsplash.com/720x720?book-cover',
    },
    {
      title: '1984',
      description: '1984 is a dystopian novel by George Orwell, portraying a totalitarian regime where individualism and independent thought are suppressed.',
      genre: 'Dystopian, Political Fiction',
      img: 'https://source.unsplash.com/720x720?book-cover',
    },
    {
      title: 'The Great Gatsby',
      description: 'The Great Gatsby is a novel by F. Scott Fitzgerald, exploring themes of wealth, excess, and the American Dream in the Roaring Twenties.',
      genre: 'Novel, Jazz Age',
      img: 'https://source.unsplash.com/720x720?book-cover',
    },
  ];

  const data = [
    {
      title: "To Kill a Mockingbird",
      id: 1,
      rate: 4.5,
      genre: "Fiction",
      img: 'https://source.unsplash.com/720x720?book-cover',
    },
    {
      title: "1984",
      id: 2,
      rate: 4.2,
      genre: "Science Fiction",
      img: 'https://source.unsplash.com/720x720?book-cover',
    },
    {
      title: "The Great Gatsby",
      id: 3,
      rate: 4.8,
      genre: "Romance",
      img: 'https://source.unsplash.com/720x720?book-cover',
    },
  ];

  return (
    <>
      <p id="books">Top Books</p>
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
          <p id="books">All Books</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <Link to={`/book/${item.id}`} key={item.id}>
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
          <p id="books">All Books</p>
          {data.map((item, index) => (
            <Link to={`/book/${item.id}`} key={item.id}>
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
