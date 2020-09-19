import Axios from "axios";

const ROOT_URL = 'https://developers.zomato.com/api/v2.1';

// export const getCities = city =>
//   fetch(`${ROOT_URL}/cities?q=${city}`, {
//     headers: { 'user-key': process.env.REACT_APP_ZOMATO_API_KEY }
//   }).then(res => res.json());

// export const searchRestaurants = cityEntityId =>
//   fetch(`${ROOT_URL}/search?entity_id=${cityEntityId}&entity_type=city`, {
//     headers: { 'user-key': process.env.REACT_APP_ZOMATO_API_KEY }
//   }).then(res => res.json());

// export const searchRestaurants = async cityEntityId => {
//   let data = await Axios({
//     method: 'GET',
//     url: `${ROOT_URL}/search?entity_id=${cityEntityId}&entity_type=city`,
//     headers: {
//       'user-key': process.env.REACT_APP_ZOMATO_API_KEY
//     }
//   })
//     .then(response => response.data.restaurants)
//     .catch(error => error)

//   return data
// }

class Zoomato {
  
   static async searchRestaurants(cityEntityId) {
    let data = await Axios({
      method: 'GET',
      url: `${ROOT_URL}/search?entity_id=${cityEntityId}&entity_type=city`,
      headers: {
        'user-key': process.env.REACT_APP_ZOMATO_API_KEY
      }
    })
      .then(response => response.data.restaurants)
      .catch(error => error)

    return data
  }
}

export default Zoomato;