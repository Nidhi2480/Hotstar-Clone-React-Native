import starwarslogo from "../assets/movierowdata/starwars.webp"
import blackpantherlogo from "../assets/movierowdata/blackpantherlogo.webp"
import lionkinglogo from "../assets/movierowdata/lionkinglogo.webp"
import mblogo from "../assets/movierowdata/mblogo.webp"
import poster1 from "../assets/movierowdata/starwarsbanner.webp"
import poster2 from "../assets/movierowdata/bp.webp"
import poster3 from "../assets/movierowdata/lion.webp"
import mbposter from "../assets/movierowdata/mb.webp"
import calogo from '../assets/movierowdata/cawslogo.webp'
import cabanner from  '../assets/movierowdata/caws.webp'
import aiwlogo from '../assets/movierowdata/aiwlogo.webp'
import aiwbanner from  '../assets/movierowdata/aiw.webp'
import loganlogo from '../assets/movierowdata/loganlogo.webp'
import loganbanner from  '../assets/movierowdata/logan.webp'

const MoviesData = [
    {
      id:1,
      title: "Star Wars",
      logo: starwarslogo,

      genre: {
        year:"2019",
        length:"2h 22m" ,
        languages: "4 languages",
        ua:"U/A 13+"},
      poster: poster1,
      description: "Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film[a] and quickly became a worldwide pop...",
    },
    {
        id:2,
        title: "Black Panther",
        logo:  blackpantherlogo,

        genre: {
          year:"2018",
          length:"2h 14m" ,
          languages: "4 languages",
          ua:"U/A 13+"},
        poster:poster2,
        description: " Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Stu..",
      },
      {
        id:3,
        title: "Lion King",
        logo: lionkinglogo,

        genre: {
          year:"2019",
          length:"1h 58m" ,
          languages: "4 languages",
          ua:"U/A 7+"},
        poster: poster3,
        description: "The Lion King is a 2019 American musical drama film directed by Jon Favreau, written by Jeff Nathanson, and produced by Walt Disney Pictures and Fairview ..",
      },
      {
        id:4,
        title: "Manjummel Boys",
        logo: mblogo,

        genre: {
          year:"2024",
          length:"2h 15m" ,
          languages: "5 languages",
          ua:"U/A 13+"},
        poster: mbposter,
        description: "Manjummel Boys is a 2024 Indian Malayalam-language survival thriller film written and directed by Chidambaram. It is produced by Soubin Shahir, Babu Shahir and Shawn ... ",
      },
      {
        id:5,
        title: "Captain America",
        logo:calogo ,

        genre: {
          year:"2014",
          length:"2h 15m" ,
          languages: "4 languages",
          ua:"U/A 13+"},
        poster:    cabanner ,
        description: "Captain America: The Winter Soldier is a 2014 American superhero film based on the Marvel Comics character Captain America, produced by Marvel Studios and distributed..",
      },
      {
        id:6,
        title: "Avengers Infinity War",
        logo:aiwlogo ,

        genre: {
          year:"2014",
          length:"2h 15m" ,
          languages: "4 languages",
          ua:"U/A 13+"},
        poster:    aiwbanner ,
        description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt...",
      },
      {
        id:7,
        title: "Logan",
        logo:loganlogo
        ,
        genre: {
          year:"2017",
          length:"2h 17m" ,
          languages: "4 languages",
          ua:"A"},
        poster:  loganbanner ,
        description: "Logan is a 2017 American superhero film starring Hugh Jackman as the titular character. It is the tenth film in the X-Men film series and the third and final installment ...",
      },

   

      

];


export default MoviesData;