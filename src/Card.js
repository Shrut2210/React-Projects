import React, { useEffect, useState } from "react";
import App from "./App";
import './Card.css';

const Card = () => {


  const Robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz'
    }
  ];

  const [temp, setTemp] = useState(Robots);

  // useEffect(() => {

    let robo = temp.map((rob) => {
      return (
        <>
          <div className="col-3 mb-3">
            <div class="card shadow-3">
              <img src={`https://robohash.org/${rob.id}`} class="card-img-top img-fluid muImg" alt="..." />
              <div class="card-body content">
                <br />
                <p className="name">{rob.name}</p>
                <p className="uname">{rob.username}</p>
                <p class="card-text mail">{rob.email}</p>
              </div>
            </div>
          </div>
        </>
      )
    })
  // }, [temp])


  return (
    <>
      <App />
      <div className="header m-3 p-3">
        <h1 className="title">
          <span>R </span>
          <span>O </span>
          <span>B </span>
          <span>O </span>
          <span>F </span>
          <span>R </span>
          <span>I </span>
          <span>E </span>
          <span>N </span>
          <span>D </span>
          <span>S </span>
        </h1>

        <br />
        <input type="search" onChange={(e) => {
            if(e.target.value === "") setTemp(Robots);
            else setTemp(temp.filter((x)=> x.name.toLowerCase().includes(e.target.value))) 
          // console.log(robo + " " + e.target.value);
        }}></input>
      </div>
      <br />
      <div className="container">
        <div className="row">
          {robo};
        </div>
      </div>
    </>
  )
}

export default Card;