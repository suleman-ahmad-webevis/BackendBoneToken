var categoryEnum = [
  "vetBed",
  "crateCushions",
  "cratesAndCages",
  "carBox",
  "beds",
  "puppyPens",
  "houses",
  "snacks",
  "toys",
  "groomingTables",
  "vehicleRamps",
  "runningMachines",
  "feedingBowls",
  "strollers",
  "baths",
  "dogShowTrolley",
  "dogShowTent",
  "whelpingBoxes",
  "agility",
];
var genderEnum = ["Male", "Female"];
var coatColorEnum = [
  "Black",
  "Black brindle",
  "Black daple",
  "Black and tan",
  "Black and silver",
  "Black sable",
  "White",
  "Yellow",
  "Red",
  "Cream ",
  "Mahogany ",
  " Fawn ",
  "Fawn black mask",
  "Aguty ",
  "Chocolate",
  "Blue",
  "Grey",
  "Silver",
];
var ageEnum = ["Puppy", "Junior", "Adult", "Senior"];
var dogGroupFCIEnum = [
  "Group I",
  "Group II",
  "Group III",
  "Group IV",
  "Group V",
  "Group VI",
  "Group VII",
  "Group VIII",
  "Group IX",
  "Group X",
];
var seasonEnum = ["Summer", "Winter", "Spring", "Autumn"];
var breedEnum = [
  "Affenpinscher",
  "Afghan Hound",
  "Aidi",
  "Airedale Terrier",
  "Akita",
  "Alaskan Malamute",
  "Alpine Dachsbracke",
  "American Cocker Spaniel",
  "American Foxhound",
  "American Staffordshire Terrier",
  "American Water Spaniel",
  "Anglo-Français de Petite Vénerie",
  "Appenzeller Sennenhund",
  "Ariège Pointer",
  "Ariégeois",
  "Artois Hound",
  "Australian Cattle Dog",
  "Australian Kelpie",
  "Australian Shepherd",
  "Australian Silky Terrier",
  "Australian Stumpy Tail Cattle Dog",
  "Australian Terrier",
  "Austrian Black and Tan Hound",
  "Azawakh",
  "Barak hound",
  "Barbet",
  "Basenji",
  "Basset Artésien Normand",
  "Basset Bleu de Gascogne",
  "Basset Fauve de Bretagne",
  "Basset Hound",
  "Bavarian Mountain Hound",
  "Beagle",
  "Beagle-Harrier",
  "Bearded Collie",
  "Beauceron",
  "Bedlington Terrier",
  "Belgian Shepherd",
  "Bergamasco Shepherd",
  "Berger Picard",
  "Bernese Mountain Dog",
  "Bichon Frisé",
  "Billy",
  "Black and Tan Coonhound",
  "Black Norwegian Elkhound",
  "Black Russian Terrier",
  "Bloodhound",
  "Blue Picardy Spaniel",
  "Bohemian Shepherd",
  "Bolognese dog",
  "Border Collie",
  "Border Terrier",
  "Borzoi",
  "Boston Terrier",
  "Bouvier des Ardennes",
  "Bouvier des Flandres",
  "Boxer",
  "Bracco Italiano",
  "Braque d'Auvergne",
  "Braque du Bourbonnais",
  "Braque Français",
  "Braque Saint-Germain",
  "Brazilian Terrier",
  "Briard",
  "Briquet Griffon Vendéen",
  "Brittany",
  "Broholmer",
  "Bucovina Shepherd Dog",
  "Bull Terrier",
  "Bulldog",
  "Bullmastiff",
  "Burgos Pointer",
  "Ca de Bou",
  "Cairn Terrier",
  "Canaan Dog",
  "Canadian Eskimo Dog",
  "Cane Corso",
  "Cão de Gado Transmontano",
  "Carpathian Shepherd Dog",
  "Castro Laboreiro Dog",
  "Catalan Sheepdog",
  "Caucasian Shepherd Dog",
  "Cavalier King Charles Spaniel",
  "Central Asian Shepherd Dog",
  "Český fousek",
  "Cesky Terrier",
  "Chesapeake Bay Retriever",
  "Chien Français Blanc et Noir",
  "Chien Français Blanc et Orange",
  "Chien Français Tricolore",
  "Chihuahua",
  "Chinese Crested Dog",
  "Chow Chow",
  "Cimarrón Uruguayo",
  "Cirneco dell'Etna",
  "Clumber Spaniel",
  "Continental bulldog",
  "Coton de Tulear",
  "Croatian Sheepdog",
  "Curly-coated Retriever",
  "Czechoslovakian Wolfdog",
  "Dalmatian",
  "Dandie Dinmont Terrier",
  "Danish–Swedish Farmdog",
  "Dobermann",
  "Dogo Argentino",
  "Dogue de Bordeaux",
  "Drentse Patrijshond",
  "Drever",
  "Dunker",
  "Dutch Shepherd",
  "East Siberian Laika",
  "English Cocker Spaniel",
  "English Foxhound",
  "English Mastiff",
  "English Setter",
  "English Springer Spaniel",
  "English Toy Terrier",
  "Entlebucher Mountain Dog",
  "Estonian Hound",
  "Estrela Mountain Dog",
  "Eurasier",
  "Field Spaniel",
  "Fila Brasileiro",
  "Finnish Hound",
  "Finnish Lapphund",
  "Finnish Spitz",
  "Flat-coated Retriever",
  "French Bulldog",
  "French Spaniel",
  "Galgo Español",
  "Gascon Saintongeois",
  "German Hound",
  "German Longhaired Pointer",
  "German Pinscher",
  "German Shepherd",
  "German Shorthaired Pointer",
  "German Spaniel",
  "German Spitz",
  "German Wirehaired Pointer",
  "Giant Schnauzer",
  "Glen of Imaal Terrier",
  "Golden Retriever",
  "Gończy Polski",
  "Gordon Setter",
  "Valencian Terrier",
  "Grand Anglo-Français Blanc et Noir",
  "Grand Anglo-Français Blanc et Orange",
  "Grand Anglo-Français Tricolore",
  "Grand Basset Griffon Vendéen",
  "Grand Bleu de Gascogne",
  "Grand Griffon Vendéen",
  "Great Dane",
  "Greater Swiss Mountain Dog",
  "Greek Harehound",
  "Greenland Dog",
  "Greyhound",
  "Griffon Bleu de Gascogne",
  "Griffon Bruxellois",
  "Griffon Fauve de Bretagne",
  "Griffon Nivernais",
  "Halden Hound",
  "Hamiltonstövare",
  "Hanover Hound",
  "Harrier",
  "Havanese dog",
  "Hovawart",
  "Hungarian dog breeds",
  "Hygen Hound",
  "Ibizan Hound",
  "Icelandic Sheepdog",
  "Irish Red and White Setter",
  "Irish Setter",
  "Irish Terrier",
  "Irish Water Spaniel",
  "Irish Wolfhound",
  "Istrian Coarse-haired Hound",
  "Istrian Shorthaired Hound",
  "Italian Greyhound",
  "Jack Russell Terrier",
  "Jagdterrier",
  "Jämthund",
  "Japanese Chin",
  "Japanese Spitz",
  "Japanese Terrier",
  "Kai Ken",
  "Kangal Shepherd Dog",
  "Karelian Bear Dog",
  "Karst Shepherd",
  "Keeshond",
  "Kerry Blue Terrier",
  "King Charles Spaniel",
  "Kintamani",
  "Kishu",
  "Komondor",
  "Kooikerhondje",
  "Korean Jindo",
  "Kromfohrländer",
  "Kuvasz",
  "Labrador Retriever",
  "Lagotto Romagnolo",
  "Lakeland Terrier",
  "Lancashire Heeler",
  "Landseer dog",
  "Lapponian Herder",
  "Large Münsterländer",
  "Leonberger",
  "Lhasa Apso",
  "Löwchen",
  "Magyar agár",
  "Majorca Shepherd Dog",
  "Maltese dog",
  "Manchester Terrier",
  "Maremmano-Abruzzese Sheepdog",
  "Miniature American Shepherd",
  "Miniature Bull Terrier",
  "Miniature Pinscher",
  "Miniature Schnauzer",
  "Montenegrin Mountain Hound",
  "Mudi",
  "Neapolitan Mastiff",
  "Newfoundland dog",
  "Norfolk Terrier",
  "Norrbottenspets",
  "Norwegian Buhund",
  "Norwegian Elkhound",
  "Norwegian Lundehund",
  "Norwich Terrier",
  "Nova Scotia Duck Tolling Retriever",
  "Old Danish Pointer",
  "Old English Sheepdog",
  "Otterhound",
  "Papillon dog",
  "Parson Russell Terrier",
  "Pekingese",
  "Pembroke Welsh Corgi",
  "Peruvian Hairless Dog",
  "Petit Basset Griffon Vendéen",
  "Petit Bleu de Gascogne",
  "Phalène",
  "Pharaoh Hound",
  "Picardy Spaniel",
  "Podenco Canario",
  "Pointer",
  "Poitevin hound",
  "Polish Greyhound",
  "Polish Hound",
  "Polish Lowland Sheepdog",
  "Pomeranian dog",
  "Pont-Audemer Spaniel",
  "Poodle",
  "Porcelaine",
  "Portuguese Podengo",
  "Portuguese Pointer",
  "Portuguese Sheepdog",
  "Portuguese Water Dog",
  "Posavac Hound",
  "Pražský Krysařík",
  "Presa Canario",
  "Pudelpointer",
  "Pug",
  "Puli dog",
  "Pumi dog",
  "Pyrenean Mastiff",
  "Pyrenean Mountain Dog",
  "Pyrenean Sheepdog",
  "Rafeiro do Alentejo",
  "Rastreador Brasileiro",
  "Rhodesian Ridgeback",
  "Romanian Mioritic Shepherd Dog",
  "Rottweiler",
  "Rough Collie",
  "Russkiy Toy",
  "Russo-European Laika",
  "Saarloos wolfdog",
  "Sabueso Español",
  "Saint Miguel Cattle Dog",
  "Saluki",
  "Samoyed dog",
  "Šarplaninac",
  "Schapendoes",
  "Schillerstövar",
  "Schipperke",
  "Schweizer Laufhund",
  "Schweizerischer Niederlaufhund",
  "Scottish Deerhound",
  "Scottish Terrier",
  "Sealyham Terrier",
  "Segugio Italiano",
  "Segugio Maremmano",
  "Serbian Hound",
  "Serbian Tricolour Hound",
  "Shar Pei",
  "Shetland Sheepdog",
  "Shiba Inu",
  "Shih Tzu",
  "Shikoku dog",
  "Siberian Husky",
  "Skye Terrier",
  "Sloughi",
  "Slovak Cuvac",
  "Slovak Rough-haired Pointer",
  "Slovenský kopov",
  "Smaland Hound",
  "Small Münsterländer",
  "Smooth Collie",
  "Smooth Fox Terrier",
  "Soft-coated Wheaten Terrier",
  "South Russian Ovcharka",
  "Spanish Mastiff",
  "Spanish Water Dog",
  "Spinone Italiano",
  "St. Bernard",
  "Stabyhoun",
  "Staffordshire Bull Terrier",
  "Standard Schnauzer",
  "German Roughhaired Pointer",
  "Styrian Coarse-haired Hound",
  "Sussex Spaniel",
  "Swedish Lapphund",
  "Swedish Vallhund",
  "Tatra Shepherd Dog",
  "Thai Bangkaew Dog",
  "Thai Ridgeback",
  "Tibetan Mastiff",
  "Tibetan spaniel",
  "Tibetan Terrier",
  "Tornjak",
  "Tosa",
  "Transylvanian Hound",
  "Tyrolean Hound",
  "Vizsla",
  "Volpino Italiano",
  "Weimaraner",
  "Welsh Springer Spaniel",
  "Welsh Terrier",
  "West Highland White Terrier",
  "West Siberian Laika",
  "Westphalian Dachsbracke",
  "Wetterhoun",
  "Whippet",
  "White Swiss Shepherd Dog",
  "Wire Fox Terrier",
  "Wirehaired Pointing Griffon",
  "Wirehaired Vizsla",
  "Xoloitzcuintle",
  "Yakutian Laika",
  "Yorkshire Terrier",
];

module.exports = {
  categoryEnum,
  genderEnum,
  coatColorEnum,
  ageEnum,
  dogGroupFCIEnum,
  breedEnum,
  seasonEnum,
};
