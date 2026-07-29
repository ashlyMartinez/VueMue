import caricature_cigar from "../assets/images/man_with_cigar.jpg"
import camille from "../assets/images/camille.jpg"
import sunrise from "../assets/images/impression_sunrise.webp"
import water_lilies from "../assets/images/water_lilies.jpg"
import water_lilies_UV from "../assets/images/water_lilies_UV.jpg"

//import frogs_insects_pond from "./assets/sounds/frogs_insects_pond.wav"
//import man_smoking_cigar from "./assets/sounds/man_smoking_cigar.mp3"
//import ocean from "./assets/sounds/ocean.wav"
//import pond_water from "./assets/sounds/pond_water.ogg"
//import romantic from "./assets/sounds/romantic.wav"



const paintings = [
    {
        "id": 1,
        "imageURL": caricature_cigar,
        "title": "Caricature of a Man with a Big Cigar",
        "artist": "Claude Monet",
        "date": "1855/56",
        "alt_text": "",
        //"sound": man_smoking_cigar,
        "description": "",
        "width": 843,
        "height": 1320,
        "fun_facts": ["Monet started as a caricaturist at age 15", 
            "The loose and line-work seen in his impressionist paintings later are are peeking through in early sketches he developed"]
    },
    {
        "id": 2,
        "imageURL": water_lilies,
        "title": "Water Lilies",
        "artist": "Claude Monet",
        "date": "1906",
        "alt_text": "",
       // "sound": pond_water,
        "description": "",
        "width": 843,
        "height": 810,
        "fun_facts": ["There are over 250 paintings in the series", 
            "Monet planted the water lilies in his garden. The city told him to uproot the plants because they could poison the river waters (exotic species), but he ignored them"]
    },
    {
        "id": 3,
        "imageURL": camille,
        "title": "The Woman in the Green Dress (Camille)",
        "artist": "Claude Monet",
        "date": "1866",
        "alt_text": "",
        //"sound": romantic,
        "description": "",
        "width": 750,
        "height": 1105,
        "fun_facts": ["Camille, Monet's first wife was his muse", 
            "It is said that while Camille was ill, Monet started having an affair with Alice, whom he would marry after Camille's death",
            "Alice was jealous of Camille, she made Monet destroy all letters/pictures of her. There remains one last known portrait of Camille"
        ]
    },
    {
        "id": 4,
        "imageURL": sunrise,
        "title": "Impression, Sunrise",
        "artist": "Claude Monet",
        "date": "1872",
        "alt_text": "",
        //"sound": ocean,
        "description": "",
        "width": 620,
        "height": 477,
        "fun_facts": ["Impressionism, the art style, is named after this painting",
            "Monet is considered the father of impressionism. This style received a lot of critique at the time of its development, since it was seen as messy and unfinished"
        ]
    },
    {
        "id": 5,
        "imageURL": water_lilies_UV,
        "title": "Water Lilies",
        "artist": "Claude Monet",
        "date": "1915-1926",
        "alt_text": "",
        //"sound": frogs_insects_pond,
        "description": "",
        "width": 1024,
        "height": 473,
        "fun_facts": ["Monet developed cataracts, affecting his eyesight and his ability to paint",
            "Critics said his impressionist style was due to his deteriorating eyesight, not skill",
            "Monet underwent a very risky surgery remove the cataracts - he only did one because the surgery had caused loss of vision in others",
            "After the surgery, it was said he could see in the UV light spectrum - this water lilies painting is more blue and purple, the colors a bee would see them in"
        ]
    },
];


export default paintings;