import React from 'react'
import styles from './RestaurantCard.module.css'

function RestaurantCard({city, image, name, cuisines, cost, currency, rating}) {
    return (
        <div className={`${styles.restaurantCard} border mb-10 relative`}>
            <div className={`${styles.restaurantCard__city} py-1 px-2 absolute top-0 left-0`}>{city}</div>
            <img src={image} alt={name} className={styles.restaurantCard__image} />
            <div className={`${styles.restaurantCard__description} border-t-2 border-white p-2`}>
                <div className="restaurantCard__row1 flex justify-between">
                    <span className="font-bold mr-2">{name}</span>
                    <span className="font-bold">{currency} {cost}</span>
                </div>
                <div className="restaurantCard__row2 flex justify-between items-center mt-5">
                    <span className="font-bold mr-2">{cuisines}</span>
                    <span className="bg-white rounded-full p-1 text-blue-700 font-bold">{rating}</span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard
