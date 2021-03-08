import React from 'react';
import PropTypes from "prop-types";

// function Food(props) {
//   console.log(props.fav); // kimchi

// function Food({ name, picture }) {
//   return <div>
//     <h2> I like {name} </h2>
//     <img src={picture}/>
//   </div> 
// }

// #2.1
// function App() {
//   return (
//     <div>
//       <h1> Hello </h1>
//       <Food fav="kimchi" />
//       food component에 fav라는 이름의 
//       property를 kimchi라는 value로 준거야! 
//       <Food fav="ramen" />
//       <Food fav="pizza" />
//       <Food fav="chicken" />
//     </div>
//   );
// }

// #2.2
// function App() {
//   return (
//     <div>
//       {foodILike.map(dish =>
//         <Food name={dish.name} pic={dish.image} />)}
//     </div>
//   );
// }

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.2
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.0
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};


// #2.3
// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} pic={dish.image} />
//       ))}
//     </div>
//   );
// }

// #2.4 
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;


