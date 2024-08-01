import React from "react";

import Paris from '../assets/travel/paris.jpg';
import Argentina from '../assets/travel/argentina.jpeg';
import Australia from '../assets/travel/australia.jpg';
import UAE from '../assets/travel/uae.jpg';
import Germany from '../assets/travel/germany.jpg';
import Brazil from '../assets/travel/brazil.jpg';
import Poland from '../assets/travel/poland.jpg';
import Philippines from '../assets/travel/ph.jpg';
import Nepal from '../assets/travel/nepal.jpg';
import USA from '../assets/travel/usa.jpg';
import China from '../assets/travel/china.jpg';
import Korea from '../assets/travel/korea.jpg';
import Greece from '../assets/travel/greece.jpg';
import Japan from '../assets/travel/japan.jpg';
import Italy from '../assets/travel/italy.jpg';

import Netherlands from '../assets/travel/netherlands.jpg';
import Russia from '../assets/travel/russia.jpg';
import Norway from '../assets/travel/norway.jpg';
import Spain from '../assets/travel/spain.jpg';
import Thailand from '../assets/travel/thailand.jpg';
import Maldives from '../assets/travel/maldives.jpg';
import Turkey from '../assets/travel/istanbul.jpg';
import Switzerland from '../assets/travel/switzerland.jpg';
import Iceland from '../assets/travel/iceland.jpg';

import JasonStathan from '../assets/travel/people/statham.jpg';
import StephenCurry from '../assets/travel/people/steph.jpg';
import RebeccaFerguson from '../assets/travel/people/fergusson.jpg';
import TheRock from '../assets/travel/people/the-rock.jpg';
import TaylorSwift from '../assets/travel/people/swift.jpg';
import HenryCavill from '../assets/travel/people/henry-cavill.jpg';
import JaysonTatum from '../assets/travel/people/tatum.jpg';
import TomCruise from '../assets/travel/people/tom-cruise.jpg';
import KeanuReeves from '../assets/travel/people/keanu.jpg';
import KlayThompson from '../assets/travel/people/klay.jpg';

import RDJ from '../assets/travel/people/rdj.jpg';
import ChrisHemsworth from '../assets/travel/people/hemsworth.jpg';
import ChrisEvans from '../assets/travel/people/evans.jpg';

const exp = '\"A true dream come true! I had the opportunity to travel to this incredible country and experience everything that the locals have to offer. The culture, food, and people were absolutely fantastic!\"';

const TravelInfo = {
    title: 'TravelMat',
    catchphrase: 'Discover the world in the palm of your hands.',
    navigation_items: [
        'Home',
        'About',
        'Help',
        'Contact Us'
    ],

    main_description: "TravelMat is your go-to resource for discovering the best places around the world and the must-visit tourist spots within each destination. Whether you're planning your next vacation or simply dreaming about future travels, TravelMat offers comprehensive guides that cater to all types of travelers. From bustling cities to serene landscapes, historic landmarks to hidden gems, TravelMat provides detailed information to help you explore and experience the wonders of the world. Dive into our expertly curated guides, and let TravelMat be your companion in every adventure.",
    places: [
        {
            place: 'Argentina',
            description: `
                Argentina is a country in South America known for its diverse landscapes, from the Andes mountains to Pampas grasslands to the Patagonian steppe. It's famous for tango music and dance, vibrant cities like Buenos Aires, and its rich cultural heritage. Argentina is also known for its wine and beef
            `,
            image: Argentina
        },
        {
            place: 'Australia',
            description: `
                Australia is a vast country and continent known for its stunning natural wonders, unique wildlife, and vibrant cities like Sydney and Melbourne. Highlights include the Great Barrier Reef, Outback, and iconic landmarks such as the Sydney Opera House and Uluru.
            `,
            image: Australia
        },
        {
            place: 'Brazil',
            description: `
                Brazil, the largest country in South America, is known for its Amazon rainforest, extensive beaches, and vibrant culture. Famous for Carnival, samba music, and soccer, Brazil's major cities include Rio de Janeiro and São Paulo. The country is also known for landmarks like Christ the Redeemer and Iguazu Falls.
            `,
            image: Brazil
        },
        {
            place: 'China',
            description: `
                China is a vast East Asian country with a rich history and diverse culture. Known for ancient wonders like the Great Wall and the Terracotta Army, modern marvels such as Shanghai's skyline, and its rapid economic growth, China is also famous for its cuisine and cultural heritage.
            `,
            image: China
        },
        {
            place: 'Germany',
            description: `
                Germany, located in Central Europe, is known for its history, cultural heritage, and economic prowess. Famous for its castles, beer, and festivals like Oktoberfest, Germany's key cities include Berlin, Munich, and Frankfurt. It also boasts beautiful landscapes, from the Bavarian Alps to the Black Forest.
            `,
            image: Germany
        },
        {
            place: 'Greece',
            description: `
                Greece is a southeastern European country known for its ancient history and cultural contributions. Famous for historic sites like the Acropolis and the Parthenon in Athens, Greece also features stunning islands like Santorini and Mykonos. Greek cuisine and mythology are also globally renowned.
            `,
            image: Greece
        },
        {
            place: 'Iceland',
            description: `
                Iceland is a Nordic island country located in the North Atlantic Ocean. It is known for its stunning natural beauty, including geysers, hot springs, lava fields, glaciers, and waterfalls. Iceland is sparsely populated, with most of its population residing in the capital city of Reykjavik. The country is famous for its geothermal energy, Viking history, and as a filming location for popular TV shows and movies. Icelanders are also known for their rich literary tradition and unique cultural heritage, including Norse mythology and sagas.
            `,
            image: Iceland
        },
        {
            place: 'Turkey',
            description: `
            Turkey is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a smaller portion on the Balkan Peninsula in Southeast Europe. It has a rich history that spans thousands of years, encompassing various civilizations such as the Hittites, Greeks, Romans, Byzantines, and Ottomans. Istanbul, the largest city and former capital, straddles Europe and Asia across the Bosporus Strait, showcasing a blend of Eastern and Western influences.`,
            image: Turkey
        },
        {
            place: 'Italy',
            description: `
            Italy is a European country known for its rich history, art, and cuisine. Home to iconic cities like Rome, Florence, and Venice, Italy boasts landmarks such as the Colosseum, the Vatican, and the Leaning Tower of Pisa. It's also celebrated for its culinary delights, including pasta, pizza, and wine.
            `,
            image: Italy
        },
        {
            place: 'Japan',
            description: `
                Japan, an island nation in East Asia, is known for its blend of traditional and modern culture. Famous for its temples, cherry blossoms, and advanced technology, Japan's major cities include Tokyo, Kyoto, and Osaka. The country is also renowned for its cuisine, including sushi and ramen.
            `,
            image: Japan
        },
        {
            place: 'Korea',
            description: `
            Korea, referring to both South Korea and North Korea, is located on the Korean Peninsula in East Asia. South Korea is known for its high-tech cities, pop culture (K-pop), and historical sites, while North Korea is known for its strict regime and isolated society. South Korea's key city is Seoul.
            `,
            image: Korea
        },
        {
            place: 'Maldives',
            description: `
                The Maldives is a tropical paradise in the Indian Ocean, famous for its crystal-clear waters, white-sand beaches, and luxurious overwater bungalows. It's a popular destination for diving, snorkeling, and relaxing in an idyllic island setting.
            `,
            image: Maldives
        },
        {
            place: 'Nepal',
            description: `
                Nepal is a landlocked country in South Asia known for its mountainous terrain and as the home of Mount Everest. Famous for its trekking routes, vibrant culture, and historic sites, including Lumbini (the birthplace of Buddha), Nepal's capital is Kathmandu.
            `,
            image: Nepal
        },
        {
            place: 'Netherlands',
            description: `
            The Netherlands, or Holland, is a country in Western Europe known for its flat landscape, extensive canal systems, and iconic windmills. Amsterdam, its capital, is renowned for its art museums, historic architecture, and lively cultural scene.
            `,
            image: Netherlands
        },
        {
            place: 'Norway',
            description: `
                Norway is a Scandinavian country known for its stunning natural landscapes, including fjords, mountains, and the Northern Lights. It's renowned for outdoor activities like hiking and skiing, as well as its rich Viking history and modern cities like Oslo and Bergen.`,
            image: Norway
        },
        {
            place: 'Paris',
            description: `
                Paris, the capital of France, is renowned for its art, fashion, gastronomy, 
                and culture. Iconic landmarks include the Eiffel Tower, Notre-Dame Cathedral, 
                and the Louvre Museum. Known as "The City of Light," Paris is also famous 
                for its charming cafes and romantic ambiance.
            `,
            image: Paris
        },
        {
            place: 'Philippines',
            description: `
                The Philippines is an archipelago in Southeast Asia known for its beautiful beaches, tropical climate, and diverse culture. Famous for destinations like Boracay, Palawan, and Cebu, the country has a rich history influenced by Spanish and American colonial periods. The capital city is Manila.
            `,
            image: Philippines
        },
        {
            place: 'Poland',
            description: `
                Poland, located in Central Europe, is known for its medieval architecture, vibrant history, and cultural heritage. Major cities include Warsaw, Krakow, and Gdańsk. Poland is also known for its historic sites such as Auschwitz and the Wieliczka Salt Mine.
            `,
            image: Poland
        },
        {
            place: 'Russia',
            description: `
                Russia is the largest country in the world, spanning Eastern Europe and northern Asia. It's known for its vast landscapes, rich cultural heritage, and historical significance. Key cities include Moscow, with its Red Square and Kremlin, and Saint Petersburg, noted for its cultural and architectural landmarks.`,
            image: Russia
        },
        {
            place: 'Spain',
            description: `
                Spain is a diverse country in southwestern Europe with a rich cultural heritage. It's known for its historic cities like Madrid and Barcelona, vibrant festivals like La Tomatina and Running of the Bulls, and varied landscapes from beaches to mountains.`,
            image: Spain
        },
        {
            place: 'Switzerland',
            description: `Switzerland is a landlocked country in Central Europe known for its mountainous terrain, including the Alps. It's famous for its neutrality, high quality of life, and contributions to finance, as well as for being the home of international organizations like the Red Cross and the UN's European headquarters.`,            
            image: Switzerland

        },
        {
            place: 'Thailand',
            description: `
            Thailand is a Southeast Asian country known for its tropical beaches, ornate temples, and vibrant street life. Bangkok, its capital, is famous for its bustling markets and nightlife, while other areas like Chiang Mai offer cultural experiences and natural beauty.`,
            image: Thailand
        },
        {
            place: 'UAE',
            description: `
                The UAE is a country in the Arabian Peninsula known for its modern cities, luxury shopping, and futuristic architecture. Famous for cities like Dubai and Abu Dhabi, the UAE boasts iconic landmarks such as the Burj Khalifa and the Sheikh Zayed Grand Mosque. It's also a hub for international business and tourism.
            `,
            image: UAE
        },
        {
            place: 'USA',
            description: `
                The United States of America (USA) is a vast and diverse country in North America known for its cultural influence, economic power, and scenic landscapes. Major cities like New York, Los Angeles, and Chicago offer iconic landmarks such as the Statue of Liberty, Hollywood, and Millennium Park. The USA boasts stunning natural wonders, including the Grand Canyon, Yellowstone National Park, and the Rocky Mountains. With its rich history, diverse population, and numerous attractions, the USA offers a multitude of experiences for travelers.            `,
            image: USA
        },
    ],
    peopleExperiences: [
        
        {
            person: 'Chris Hemsworth',
            rate: 5,
            experience: exp,
            image: ChrisHemsworth
        },
        {
            person: 'Chris Evans',
            rate: 5,
            experience: exp,
            image: ChrisEvans
        },
        {
            person: 'Robert Downey Jr.',
            rate: 5,
            experience: exp,
            image: RDJ
        },
        {
            person: 'Dwayne Johnson',
            rate: 5,
            experience: exp,
            image: TheRock
        },
        {
            person: 'Jason Statham',
            rate: 4,
            experience: exp,
            image: JasonStathan        
        },
        {
            person: 'Rebecca Fergusson',
            rate: 4,
            experience: exp,
            image: RebeccaFerguson       
        },
        {
            person: 'Stephen Curry',
            rate: 3,
            experience: exp,
            image: StephenCurry       
        },
        {
            person: 'Klay Thompson',
            rate: 3,
            experience: exp,
            image: KlayThompson        
        },
        {
            person: 'Jayson Tatum',
            rate: 5,
            experience: exp,
            image: JaysonTatum        
        },
        {
            person: 'Keanu Reeves',
            rate: 5,
            experience: exp,
            image: KeanuReeves        
        },
        {
            person: 'Taylor Swift',
            rate: 5,
            experience: exp,
            image: TaylorSwift        
        },
        {
            person: 'Henry Cavill',
            rate: 5,
            experience: exp,
            image: HenryCavill       
        },
        
    ]
    
}

export default TravelInfo;