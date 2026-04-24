export const PROFILE_MENU = [
  {
    id: "history",
    title: "History of the Ethiopian Empire",
    data: [
      {
        id: "early",
        name: "Early Period",
        icon: require("./fasil.avif")
      },
      {
        id: "medieval",
        name: "Medieval Period",
        icon: require("./history.avif")
      },
      {
        id: "modern",
        name: "Modern Period",
        icon: require("./history.avif")
      }
    ]
  },

  {
    id: "religion",
    title: "Religions of Ethiopia",
    data: [
      {
        id: "orthodox",
        name: "Orthodox Christianity",
        icon: require("./history.avif")
      },
      {
        id: "islam",
        name: "Islam",
        icon: require("./history.avif")
      }
    ]
  },

  {
    id: "festivals",
    title: "Festivals and Holy Days",
    data: [
      {
        id: "timket",
        name: "Timket",
        icon: require("./dressing.avif")
      },
      {
        id: "meskel",
        name: "Meskel",
        icon: require("./dressing.avif")
      }
    ]
  },

  {
    id: "clothing",
    title: "Traditional Clothing",
    data: [
      {
        id: "habesha",
        name: "Habesha Kemis",
        icon: require("./culture.avif")
      }
    ]
  },

  {
    id: "music",
    title: "Music & Dance",
    data: [
      {
        id: "eskista",
        name: "Eskista",
        icon: require("./music.avif")
      }
    ]
  },

  {
    id: "food",
    title: "Cuisine and Culinary Traditions",
    data: [
      {
        id: "injera",
        name: "Injera",
        icon: require("./food.webp")
      }
    ]
  },

  {
    id: "landscapes",
    title: "Mountains and Landscapes",
    data: [
      {
        id: "simien",
        name: "Simien Mountains",
        icon: require("./lalibela.webp")
      }
    ]
  },

  {
    id: "famous",
    title: "Famous People",
    data: [
      {
        id: "menelik",
        name: "Menelik II",
        icon: require("./mimlik.avif")
      }
    ]
  },

  {
    id: "nature",
    title: "Natural Wonders",
    data: [
      {
        id: "blue_nile",
        name: "Blue Nile Falls",
        icon: require("./cultural.avif")
      }
    ]
  }
];


export const WishlistProducts = PROFILE_MENU
  .flatMap(section => section.data)
  .filter(item =>
    ["early", "timket", "eskista"].includes(item.id)
  );