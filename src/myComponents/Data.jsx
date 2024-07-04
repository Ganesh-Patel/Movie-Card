const movies = [
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "Jungle Cruise",
      year: "2021",
      actor: "Dwayne Johnson, Emily Blunt",
      duration: "127 min",
      type: "Action, Adventure, Comedy",
      about: "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "Pirates of the Caribbean",
      year: "2003",
      actor: "Johnny Depp, Orlando Bloom",
      duration: "143 min",
      type: "Action, Adventure, Fantasy",
      about: "Blacksmith Will Turner teams up with eccentric pirate 'Captain' Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "The Lion King",
      year: "1994",
      actor: "Matthew Broderick, Jeremy Irons",
      duration: "88 min",
      type: "Animation, Adventure, Drama",
      about: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "Avengers: Endgame",
      year: "2019",
      actor: "Robert Downey Jr., Chris Evans",
      duration: "181 min",
      type: "Action, Adventure, Drama",
      about: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "Inception",
      year: "2010",
      actor: "Leonardo DiCaprio, Joseph Gordon-Levitt",
      duration: "148 min",
      type: "Action, Adventure, Sci-Fi",
      about: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "Titanic",
      year: "1997",
      actor: "Leonardo DiCaprio, Kate Winslet",
      duration: "195 min",
      type: "Drama, Romance",
      about: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "The Dark Knight",
      year: "2008",
      actor: "Christian Bale, Heath Ledger",
      duration: "152 min",
      type: "Action, Crime, Drama",
      about: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "Forrest Gump",
      year: "1994",
      actor: "Tom Hanks, Robin Wright",
      duration: "142 min",
      type: "Drama, Romance",
      about: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "Gladiator",
      year: "2000",
      actor: "Russell Crowe, Joaquin Phoenix",
      duration: "155 min",
      type: "Action, Adventure, Drama",
      about: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "Interstellar",
      year: "2014",
      actor: "Matthew McConaughey, Anne Hathaway",
      duration: "169 min",
      type: "Adventure, Drama, Sci-Fi",
      about: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "The Matrix",
      year: "1999",
      actor: "Keanu Reeves, Laurence Fishburne",
      duration: "136 min",
      type: "Action, Sci-Fi",
      about: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
    },
    {
      bgImg: "https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg",
      movieImg: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      name: "The Godfather",
      year: "1972",
      actor: "Marlon Brando, Al Pacino",
      duration: "175 min",
      type: "Crime, Drama",
      about: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    }
  ];
  
  export default movies;
  