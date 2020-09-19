import React, { useState, useEffect } from 'react'
import SectionHeader from './section-header'
import Input from './input'
import Btn from './button'
import styles from './LandingPage.module.css'
// import { searchRestaurants } from 'components/cheat-sheets/api-call/api'
import Zoomato from 'components/cheat-sheets/api-call/api'
import RestaurantCard from './restaurant-card'

function LandingPage() {

    const [query,setQuery] = useState('');
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const searchRestaurantsFromCity = async () => {
            const restaurants = await Zoomato.searchRestaurants(1);
            setRestaurants(restaurants);
        };
    
        searchRestaurantsFromCity();
        
    }, [])

    const search = () => {
        const searchRestaurantsFromCity = async () => {
            const restaurants = await Zoomato.searchRestaurants(query);
            setRestaurants(restaurants);
            setQuery('');
        };
    
        searchRestaurantsFromCity();
    }

    return (
        <div className={`${styles.landingPage} min-h-screen flex flex-col items-center pt-20 text-white`}>
            <SectionHeader header="GoZomato" />
            
            <div className="flex items-center">
                <Input value={query} placeholder="City ID" onChange={e => setQuery(e.target.value)} />
                <Btn text="Load" onClick={search} />
            </div>
            <div className="landingPage__restaurants flex flex-wrap justify-around px-5 lg:px-10 mt-10">
                {
                    restaurants?.map(restaurant => <RestaurantCard key={restaurant.restaurant.id} city={restaurant.restaurant.location.city} image={restaurant.restaurant.featured_image} name={restaurant.restaurant.name} cuisines={restaurant.restaurant.cuisines} cost={restaurant.restaurant.average_cost_for_two} currency={restaurant.restaurant.currency} rating={restaurant.restaurant.user_rating.aggregate_rating} />)
                }
            </div>
        </div>
    )
}

export default LandingPage
