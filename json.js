let anime = [
  {
    name: "Fullmetal Alchemist",
    info: "Elric brothers dealing with consequences of dabbling in alchemy , as they attempted to use human transmutation to revive thier deceased mother. The boys pay a price far greater than they imagined...",
    keyFeatures: "Alchemy, Family ties, Unpredictable",
    genre: "Action",
    language: "English, Japanese",
    seasons: 2,
    debut: "5 April 2009",
    studio: "Bones",
  },

  {
    name: "Attack on Titan",
    info: "Titans are huge creatures with human-like features that live to kill humans. The story follows a trio of friends who join the military regime tasked with fighting Titans. The main protagonist Eren Jaeger vows to destroy every last Titan and reclaim the world.",
    keyFeatures: "Desolate state of humanity, Addictive viewing",
    genre: "Action",
    language: "English, Japanese",
    seasons: 4,
    debut: "7 April 2013",
    studio: "Wit Studio",
  },

  {
    name: "Vinland Saga",
    info: "A young boy named Thorfinn who after watching his father die is forced to join the band of mercenaries who committed the murder. In a strange twist of fate, Thorfinn is mentored by a man named Askeladd, the same man who killed his father. Thorfinn vows to kill Askeladd one day however the two continue to work together.",
    keyFeatures: "Violence and blood, England and Denmark at war, Vikings",
    genre: "Action",
    language: "English, Japanese",
    seasons: 1,
    debut: "8 July 2019",
    studio: "Wit Studio",
  },
];

for (let i = 0; i < anime.length; i++) {
  let name = anime[i].name;
  let info = anime[i].info;
  let keyFeatures = anime[i].keyFeatures;
  let genre = anime[i].genre;
  let language = anime[i].language;
  let seasons = anime[i].seasons;
  let debut = anime[i].debut;
  let studio = anime[i].studio;

  document.write(
    name +
      "<br>" +
      info +
      "<br>" +
      keyFeatures +
      "<br>" +
      genre +
      "<br>" +
      language +
      "<br>" +
      seasons +
      "<br>" +
      debut +
      "<br>" +
      studio
  );
}

/*function sum(input) {
    var total = 0;
    for (let i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
        continue;
      }
      total += input[i];
    }
    return total;
  }
  
  console.log(sum([1, 2, 3]));
  console.log(sum([100, -200, 3]));
  console.log(sum([1, 2, "a", 3]));
  
  function Max(arr) {
      return Math.max.apply(null, arr);
  }
  
  console.log(Max([100, 200, 400]));
  console.log(Max([3, 6, -8, 10]));
  console.log(Max([-200, 100, "b", -325]));
  
  
  function Min(tp) {
    return Math.min.apply(null, tp);
  }
  
  console.log(Min([100, 200, 400]));
  console.log(Min([3, 6, -8, 10]));
  console.log(Min([-200, 100, "b", -325])); */
