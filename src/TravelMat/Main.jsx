import React from 'react';
import '../css_styles/Travel.css';
import TravelMatLogo from '../assets/travel/travelmat.png';

import TravelInfo from './TravelInfo';

import PlaceLandmarks from '../assets/travel/place-landmarks.jpg';

import { FaStar } from 'react-icons/fa';

const TravelHeader = () => {
    return (
        <>
            <header className='travel-header'>
                <nav className='travel-nav'>
                    <div className='travel-brand-container'>
                        <img src={TravelMatLogo} alt='Travel Logo' className='travel-logo'/>
                        <h2 className='travel-title'>{TravelInfo.title}</h2>
                    </div>

                    <div className='travel-navigation-container'>
                        <ul className='travel-navigation-items'>
                            {TravelInfo.navigation_items.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <SearchBar />

                <TravelTitleSection />
            </header>
        </>
    )
}

const SearchBar = () => {
    return (
        <div className='travel-search-bar-container'>
            <input type='text' placeholder='Search for a place' className='travel-search-bar'/>
        </div>
    )
}

const TravelTitleSection = () => {
    return (
        <>
            <div className='travel-description-container'>
                <h1 className='travel-description-title'>{TravelInfo.title}</h1>
                <p className='travel-description-text'>
                    {TravelInfo.catchphrase}
                </p>
            </div>
        </>
    )
}

const TravelMainDescriptionSection = () => {
    return (

        <>
            <div className='travel-main-description-container'>
                <div className='travel-places-container'>

                    <h1 className='main-description-heading'>What is TravelMat?</h1>
                    <p className='main-description-text'>
                        {TravelInfo.main_description}
                    </p>
                    {/*{TravelInfo.places.map((place, index) => (
                        <TravelPlaceCard key={index} place={place}/>
                    ))}*/}
                </div>
                <img src={PlaceLandmarks} alt='Place Landmarks' className='place-landmarks' />
            </div>
        </>
        
    )
}

const PlaceSection = () => {
    return (
        <div className='places-section-container'>
            <h1 className='places-heading'>Popular Destinations</h1>

            <div className='travel-places-card-container'>
                {TravelInfo.places.map((place, index) => (
                    <TravelCard key={index} place={place} id='place' />
                ))}
            </div>
        </div>
    )
}
//Destructured prop
const TravelCard = ({ id, place, peopleExp }) => {
    return id === 'place' ? (
        <div className='travel-place-card'>
            <img src={place.image} alt={place.place} className='place-image'/>
            <h2 className='place-name'>{place.place}</h2>
            <p className='place-description'>{place.description}</p>
        </div>
    ) : (
        <div className='people-experience-card'>
            <img src={peopleExp.image} alt={peopleExp.person} className='people-image'/>
            <h2 className='people-name'>
                {peopleExp.person}  
            </h2>
            <p className='people-exp'>
                <span className='people-rating'>
                    {Array.from({ length: peopleExp.rate }).map((_, index) => (
                        <FaStar key={index} size={20} color='red' />
                    ))}
                    
                </span>
            </p>
            <p className='people-exp-description'>{peopleExp.experience}</p>
            
        </div>
    )
}

const PeopleExperience = () => {
    return (
        <div className='people-experience-section-container'>
            <h1 className='people-experience-heading'>People's Experience</h1>

            <div className='people-experience-card-container'>
                {TravelInfo.peopleExperiences.map((people, index) => (
                    <TravelCard key={index} peopleExp={people} id='people' />
                ))}
            </div>
        </div>
    )
}

const NewsLetterSection = () => {
    return (
        <div className='newsletter-section-container'>
            <div className='newsletter-container'>
                <h1 className='newsletter-heading'>Subscribe to Our Newsletter</h1>
                <p className='newsletter-description'>Stay updated with the latest travel guides, tips, and exclusive offers. Our newsletter provides you with the best insights and recommendations for your next adventure. Join our community and never miss out on the most exciting travel destinations.</p>
                <form className='newsletter-form'>
                    <input type='email' placeholder='Enter your email' className='newsletter-input'/>
                    <button type='submit' className='newsletter-submit'>Subscribe</button>
                </form>
            </div>
            
            <img src={TravelMatLogo} alt='Travel Logo' className='newsletter-picture'/>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className='travelmat-footer'>
            <small className='travelmat-copyright'>
                &copy; 2024 TravelMat. All rights reserved.
            </small>
        </footer>
    )
}


const TravelMain = () => {
    return (
        <>
            <TravelHeader />
            
            <TravelMainDescriptionSection />

            <PlaceSection />

            <PeopleExperience />

            <NewsLetterSection />

            <Footer />
            
        </>
    )
}

export default TravelMain;