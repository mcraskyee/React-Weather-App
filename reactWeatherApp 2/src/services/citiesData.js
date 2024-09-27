const cities = [
  // Afghanistan
  "Kabul",
  "Kandahar",
  "Herat",
  "Mazar-i-Sharif",
  // Albania
  "Tirana",
  "Durres",
  "Vlore",
  "Shkoder",
  // Algeria
  "Algiers",
  "Oran",
  "Constantine",
  "Annaba",
  // Andorra
  "Andorra la Vella",
  "Escaldes-Engordany",
  "Encamp",
  "Sant Julia de Loria",
  // Angola
  "Luanda",
  "N'dalatando",
  "Huambo",
  "Lobito",
  // Argentina
  "Buenos Aires",
  "Cordoba",
  "Rosario",
  "Mendoza",
  // Armenia
  "Yerevan",
  "Gyumri",
  "Vanadzor",
  "Hrazdan",
  // Australia
  "Canberra",
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  // Austria
  "Vienna",
  "Graz",
  "Linz",
  "Salzburg",
  // Azerbaijan
  "Baku",
  "Ganja",
  "Sumqayit",
  "Mingachevir",
  // Bahamas
  "Nassau",
  "Freeport",
  "West End",
  "Coopers Town",
  // Bahrain
  "Manama",
  "Riffa",
  "Muharraq",
  "Hamad Town",
  // Bangladesh
  "Dhaka",
  "Chittagong",
  "Khulna",
  "Rajshahi",
  // Barbados
  "Bridgetown",
  "Speightstown",
  "Oistins",
  "Bathsheba",
  // Belarus
  "Minsk",
  "Gomel",
  "Mogilev",
  "Vitebsk",
  // Belgium
  "Brussels",
  "Antwerp",
  "Ghent",
  "Charleroi",
  // Belize
  "Belmopan",
  "Belize City",
  "San Ignacio",
  "Orange Walk Town",
  // Benin
  "Porto-Novo",
  "Cotonou",
  "Parakou",
  "Djougou",
  // Bhutan
  "Thimphu",
  "Phuntsholing",
  "Punakha",
  "Samdrup Jongkhar",
  // Bolivia
  "Sucre",
  "La Paz",
  "Santa Cruz",
  "Cochabamba",
  // Bosnia and Herzegovina
  "Sarajevo",
  "Banja Luka",
  "Tuzla",
  "Zenica",
  // Botswana
  "Gaborone",
  "Francistown",
  "Molepolole",
  "Maun",
  // Brazil
  "Brasilia",
  "Sao Paulo",
  "Rio de Janeiro",
  "Salvador",
  "Fortaleza",
  // Brunei
  "Bandar Seri Begawan",
  "Kuala Belait",
  "Seria",
  "Tutong",
  // Bulgaria
  "Sofia",
  "Plovdiv",
  "Varna",
  "Burgas",
  // Burkina Faso
  "Ouagadougou",
  "Bobo-Dioulasso",
  "Koudougou",
  "Banfora",
  // Burundi
  "Gitega",
  "Bujumbura",
  "Ngozi",
  "Ruyigi",
  // Cabo Verde
  "Praia",
  "Mindelo",
  "Santa Maria",
  "Assomada",
  // Cambodia
  "Phnom Penh",
  "Siem Reap",
  "Battambang",
  "Sihanoukville",
  // Cameroon
  "Yaounde",
  "Douala",
  "Garoua",
  "Bamenda",
  // Canada
  "Ottawa",
  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",
  // Central African Republic
  "Bangui",
  "Bimbo",
  "Berberati",
  "Carnot",
  // Chad
  "N'Djamena",
  "Moundou",
  "Sarh",
  "Abeche",
  // Chile
  "Santiago",
  "Valparaiso",
  "Concepcion",
  "La Serena",
  // China
  "Beijing",
  "Shanghai",
  "Guangzhou",
  "Shenzhen",
  "Chengdu",
  // Colombia
  "Bogota",
  "Medellin",
  "Cali",
  "Barranquilla",
  // Comoros
  "Moroni",
  "Mutsamudu",
  "Fomboni",
  "Domoni",
  // Congo
  "Brazzaville",
  "Pointe-Noire",
  "Dolisie",
  "Nkayi",
  // Costa Rica
  "San Jose",
  "Limon",
  "Alajuela",
  "Heredia",
  // Côte d'Ivoire
  "Yamoussoukro",
  "Abidjan",
  "Bouake",
  "Daloa",
  // Croatia
  "Zagreb",
  "Split",
  "Rijeka",
  "Osijek",
  // Cuba
  "Havana",
  "Santiago de Cuba",
  "Camaguey",
  "Holguin",
  // Cyprus
  "Nicosia",
  "Limassol",
  "Larnaca",
  "Famagusta",
  // Czech Republic
  "Prague",
  "Brno",
  "Ostrava",
  "Plzen",
  // Democratic People's Republic of Korea
  "Pyongyang",
  "Hamhung",
  "Chongjin",
  "Nampo",
  // Democratic Republic of the Congo
  "Kinshasa",
  "Lubumbashi",
  "Mbuji-Mayi",
  "Kisangani",
  // Denmark
  "Copenhagen",
  "Aarhus",
  "Odense",
  "Aalborg",
  // Djibouti
  "Djibouti City",
  "Ali Sabieh",
  "Tadjoura",
  "Obock",
  // Dominica
  "Roseau",
  "Portsmouth",
  "Marigot",
  "Berekua",
  // Dominican Republic
  "Santo Domingo",
  "Santiago",
  "La Romana",
  "San Pedro de Macoris",
  // Ecuador
  "Quito",
  "Guayaquil",
  "Cuenca",
  "Santo Domingo",
  // Egypt
  "Cairo",
  "Alexandria",
  "Giza",
  "Shubra El Kheima",
  "Port Said",
  // El Salvador
  "San Salvador",
  "Santa Ana",
  "San Miguel",
  "Soyapango",
  // Equatorial Guinea
  "Malabo",
  "Bata",
  "Ebebiyin",
  "Aconibe",
  // Eritrea
  "Asmara",
  "Keren",
  "Massawa",
  "Assab",
  // Estonia
  "Tallinn",
  "Tartu",
  "Narva",
  "Parnu",
  // Eswatini
  "Mbabane",
  "Manzini",
  "Big Bend",
  "Malkerns",
  // Ethiopia
  "Addis Ababa",
  "Dire Dawa",
  "Mekelle",
  "Gondar",
  // Fiji
  "Suva",
  "Nadi",
  "Lautoka",
  "Labasa",
  // Finland
  "Helsinki",
  "Espoo",
  "Tampere",
  "Vantaa",
  // France
  "Paris",
  "Marseille",
  "Lyon",
  "Toulouse",
  "Nice",
  // Gabon
  "Libreville",
  "Port-Gentil",
  "Franceville",
  "Oyem",
  // Gambia
  "Banjul",
  "Serekunda",
  "Brikama",
  "Bakau",
  // Georgia
  "Tbilisi",
  "Kutaisi",
  "Batumi",
  "Rustavi",
  // Germany
  "Berlin",
  "Hamburg",
  "Munich",
  "Cologne",
  "Frankfurt",
  // Ghana
  "Accra",
  "Kumasi",
  "Tamale",
  "Takoradi",
  // Greece
  "Athens",
  "Thessaloniki",
  "Patras",
  "Heraklion",
  // Grenada
  "St. George's",
  "Gouyave",
  "Grenville",
  "Victoria",
  // Guatemala
  "Guatemala City",
  "Mixco",
  "Villa Nueva",
  "Quetzaltenango",
  // Guinea
  "Conakry",
  "Nzerekore",
  "Kankan",
  "Kindia",
  // Guinea-Bissau
  "Bissau",
  "Bafata",
  "Gabu",
  "Bissora",
  // Guyana
  "Georgetown",
  "Linden",
  "New Amsterdam",
  "Bartica",
  // Haiti
  "Port-au-Prince",
  "Cap-Haitien",
  "Gonaives",
  "Les Cayes",
  // Honduras
  "Tegucigalpa",
  "San Pedro Sula",
  "Choloma",
  "La Ceiba",
  // Hungary
  "Budapest",
  "Debrecen",
  "Szeged",
  "Miskolc",
  // Iceland
  "Reykjavik",
  "Kópavogur",
  "Hafnarfjordur",
  "Akureyri",
  // India
  "New Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  // Indonesia
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  // Iran
  "Tehran",
  "Mashhad",
  "Isfahan",
  "Karaj",
  // Iraq
  "Baghdad",
  "Basra",
  "Mosul",
  "Erbil",
  // Ireland
  "Dublin",
  "Cork",
  "Limerick",
  "Galway",
  // Israel
  "Jerusalem",
  "Tel Aviv",
  "Haifa",
  "Rishon LeZion",
  // Italy
  "Rome",
  "Milan",
  "Naples",
  "Turin",
  // Jamaica
  "Kingston",
  "Montego Bay",
  "Spanish Town",
  "Portmore",
  // Japan
  "Tokyo",
  "Osaka",
  "Nagoya",
  "Sapporo",
  "Fukuoka",
  // Jordan
  "Amman",
  "Zarqa",
  "Irbid",
  "Russeifa",
  // Kazakhstan
  "Astana",
  "Almaty",
  "Shymkent",
  "Karaganda",
  // Kenya
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  // Kiribati
  "Tarawa",
  "Betio",
  "Bikenibeu",
  "Bairiki",
  // Kuwait
  "Kuwait City",
  "Al Ahmadi",
  "Hawalli",
  "Salmiya",
  // Kyrgyzstan
  "Bishkek",
  "Osh",
  "Jalal-Abad",
  "Karakol",
  // Laos
  "Vientiane",
  "Pakse",
  "Savannakhet",
  "Luang Prabang",
  // Latvia
  "Riga",
  "Daugavpils",
  "Liepaja",
  "Jelgava",
  // Lebanon
  "Beirut",
  "Tripoli",
  "Sidon",
  "Tyre",
  // Lesotho
  "Maseru",
  "Teyateyaneng",
  "Mafeteng",
  "Hlotse",
  // Liberia
  "Monrovia",
  "Gbarnga",
  "Kakata",
  "Bensonville",
  // Libya
  "Tripoli",
  "Benghazi",
  "Misrata",
  "Bayda",
  // Liechtenstein
  "Vaduz",
  "Schaan",
  "Balzers",
  "Triesen",
  // Lithuania
  "Vilnius",
  "Kaunas",
  "Klaipeda",
  "Šiauliai",
  // Luxembourg
  "Luxembourg City",
  "Esch-sur-Alzette",
  "Differdange",
  "Dudelange",
  // Madagascar
  "Antananarivo",
  "Toamasina",
  "Antsirabe",
  "Fianarantsoa",
  // Malawi
  "Lilongwe",
  "Blantyre",
  "Mzuzu",
  "Zomba",
  // Malaysia
  "Kuala Lumpur",
  "George Town",
  "Ipoh",
  "Johor Bahru",
  // Maldives
  "Male",
  "Addu City",
  "Fuvahmulah",
  "Kulhudhuffushi",
  // Mali
  "Bamako",
  "Sikasso",
  "Mopti",
  "Koutiala",
  // Malta
  "Valletta",
  "Birkirkara",
  "Mosta",
  "Qormi",
  // Marshall Islands
  "Majuro",
  "Ebeye",
  "Rongelap",
  "Jaluit",
  // Mauritania
  "Nouakchott",
  "Nouadhibou",
  "Rosso",
  "Kaédi",
  // Mauritius
  "Port Louis",
  "Beau Bassin-Rose Hill",
  "Vacoas-Phoenix",
  "Curepipe",
  // Mexico
  "Mexico City",
  "Guadalajara",
  "Monterrey",
  "Puebla",
  "Tijuana",
  // Micronesia
  "Palikir",
  "Weno",
  "Tofol",
  "Kolonia",
  // Monaco
  "Monaco",
  "Monte Carlo",
  "La Condamine",
  "Fontvieille",
  // Mongolia
  "Ulaanbaatar",
  "Erdenet",
  "Darkhan",
  "Choibalsan",
  // Montenegro
  "Podgorica",
  "Niksic",
  "Herceg Novi",
  "Pljevlja",
  // Morocco
  "Rabat",
  "Casablanca",
  "Fes",
  "Marrakech",
  // Mozambique
  "Maputo",
  "Matola",
  "Beira",
  "Nampula",
  // Myanmar
  "Naypyidaw",
  "Yangon",
  "Mandalay",
  "Mawlamyine",
  // Namibia
  "Windhoek",
  "Rundu",
  "Walvis Bay",
  "Swakopmund",
  // Nauru
  "Yaren",
  "Denigomodu",
  "Aiwo",
  "Anabar",
  // Nepal
  "Kathmandu",
  "Pokhara",
  "Lalitpur",
  "Biratnagar",
  // Netherlands
  "Amsterdam",
  "Rotterdam",
  "The Hague",
  "Utrecht",
  // New Zealand
  "Wellington",
  "Auckland",
  "Christchurch",
  "Hamilton",
  // Nicaragua
  "Managua",
  "Leon",
  "Masaya",
  "Matagalpa",
  // Niger
  "Niamey",
  "Zinder",
  "Maradi",
  "Agadez",
  // Nigeria
  "Abuja",
  "Lagos",
  "Kano",
  "Ibadan",
  // North Macedonia
  "Skopje",
  "Bitola",
  "Kumanovo",
  "Prilep",
  // Norway
  "Oslo",
  "Bergen",
  "Stavanger",
  "Trondheim",
  // Oman
  "Muscat",
  "Salalah",
  "Sohar",
  "Nizwa",
  // Pakistan
  "Islamabad",
  "Karachi",
  "Lahore",
  "Faisalabad",
  // Palau
  "Ngerulmud",
  "Koror",
  "Melekeok",
  "Ngaraard",
  // Panama
  "Panama City",
  "Colon",
  "David",
  "La Chorrera",
  // Papua New Guinea
  "Port Moresby",
  "Lae",
  "Mount Hagen",
  "Madang",
  // Paraguay
  "Asuncion",
  "Ciudad del Este",
  "San Lorenzo",
  "Luque",
  // Peru
  "Lima",
  "Arequipa",
  "Trujillo",
  "Chiclayo",
  // Philippines
  "Manila",
  "Quezon City",
  "Davao City",
  "Cebu City",
  // Poland
  "Warsaw",
  "Krakow",
  "Lodz",
  "Wroclaw",
  // Portugal
  "Lisbon",
  "Porto",
  "Amadora",
  "Braga",
  // Qatar
  "Doha",
  "Al Rayyan",
  "Umm Salal Muhammad",
  "Al Wakrah",
  // Republic of Korea
  "Seoul",
  "Busan",
  "Incheon",
  "Daegu",
  // Republic of Moldova
  "Chisinau",
  "Tiraspol",
  "Balti",
  "Bender",
  // Romania
  "Bucharest",
  "Cluj-Napoca",
  "Timisoara",
  "Iasi",
  // Russia
  "Moscow",
  "Saint Petersburg",
  "Novosibirsk",
  "Yekaterinburg",
  // Rwanda
  "Kigali",
  "Butare",
  "Gitarama",
  "Ruhengeri",
  // Saint Kitts and Nevis
  "Basseterre",
  "Charlestown",
  "Sandy Point Town",
  "Cayon",
  // Saint Lucia
  "Castries",
  "Vieux Fort",
  "Gros Islet",
  "Micoud",
  // Saint Vincent and the Grenadines
  "Kingstown",
  "Georgetown",
  "Barrouallie",
  "Chateaubelair",
  // Samoa
  "Apia",
  "Vaitele",
  "Faleula",
  "Siusega",
  // San Marino
  "San Marino",
  "Serravalle",
  "Borgo Maggiore",
  "Domagnano",
  // São Tomé and Príncipe
  "Sao Tome",
  "Santo Antonio",
  "Neves",
  "Trindade",
  // Saudi Arabia
  "Riyadh",
  "Jeddah",
  "Mecca",
  "Medina",
  // Senegal
  "Dakar",
  "Touba",
  "Thies",
  "Saint-Louis",
  // Serbia
  "Belgrade",
  "Novi Sad",
  "Nis",
  "Kragujevac",
  // Seychelles
  "Victoria",
  "Beau Vallon",
  "Anse Boileau",
  "Anse Royale",
  // Sierra Leone
  "Freetown",
  "Bo",
  "Kenema",
  "Makeni",
  // Singapore
  "Singapore",
  // Slovakia
  "Bratislava",
  "Kosice",
  "Presov",
  "Zilina",
  // Slovenia
  "Ljubljana",
  "Maribor",
  "Celje",
  "Kranj",
  // Solomon Islands
  "Honiara",
  "Gizo",
  "Auki",
  "Kirakira",
  // Somalia
  "Mogadishu",
  "Hargeisa",
  "Bosaso",
  "Baidoa",
  // South Africa
  "Pretoria",
  "Cape Town",
  "Johannesburg",
  "Durban",
  // Spain
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  // Sri Lanka
  "Colombo",
  "Kandy",
  "Galle",
  "Jaffna",
  // Sudan
  "Khartoum",
  "Omdurman",
  "Port Sudan",
  "Kassala",
  // Suriname
  "Paramaribo",
  "Lelydorp",
  "Nieuw Nickerie",
  "Moengo",
  // Sweden
  "Stockholm",
  "Gothenburg",
  "Malmo",
  "Uppsala",
  // Switzerland
  "Bern",
  "Zurich",
  "Geneva",
  "Basel",
  // Syria
  "Damascus",
  "Aleppo",
  "Homs",
  "Latakia",
  // Taiwan
  "Taipei",
  "Kaohsiung",
  "Taichung",
  "Tainan",
  // Tajikistan
  "Dushanbe",
  "Khujand",
  "Bokhtar",
  "Kulob",
  // Tanzania
  "Dodoma",
  "Dar es Salaam",
  "Mwanza",
  "Arusha",
  // Thailand
  "Bangkok",
  "Chiang Mai",
  "Pattaya",
  "Phuket",
  // Togo
  "Lomé",
  "Sokode",
  "Kara",
  "Atakpamé",
  // Tonga
  "Nukuʻalofa",
  "Neiafu",
  "Haveluloto",
  "Vaini",
  // Trinidad and Tobago
  "Port of Spain",
  "San Fernando",
  "Chaguanas",
  "Arima",
  // Tunisia
  "Tunis",
  "Sfax",
  "Sousse",
  "Ettadhamen",
  // Turkey
  "Ankara",
  "Istanbul",
  "Izmir",
  "Bursa",
  // Turkmenistan
  "Ashgabat",
  "Turkmenabat",
  "Dashoguz",
  "Mary",
  // Tuvalu
  "Funafuti",
  "Savave",
  "Tanrake",
  "Asau",
  // Uganda
  "Kampala",
  "Gulu",
  "Lira",
  "Mbarara",
  // Ukraine
  "Kyiv",
  "Kharkiv",
  "Odessa",
  "Dnipro",
  // United Arab Emirates
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Al Ain",
  // United Kingdom
  "London",
  "Birmingham",
  "Manchester",
  "Glasgow",
  // United States
  "Washington, D.C.",
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  // Uruguay
  "Montevideo",
  "Salto",
  "Ciudad de la Costa",
  "Paysandu",
  // Uzbekistan
  "Tashkent",
  "Samarkand",
  "Bukhara",
  "Namangan",
  // Vanuatu
  "Port Vila",
  "Luganville",
  "Norsup",
  "Isangel",
  // Venezuela
  "Caracas",
  "Maracaibo",
  "Valencia",
  "Barquisimeto",
  // Vietnam
  "Hanoi",
  "Ho Chi Minh City",
  "Da Nang",
  "Haiphong",
  // Yemen
  "Sana'a",
  "Aden",
  "Taiz",
  "Al Hudaydah",
  // Zambia
  "Lusaka",
  "Kitwe",
  "Ndola",
  "Kabwe",
  // Zimbabwe
  "Harare",
  "Bulawayo",
  "Chitungwiza",
  "Mutare",
];

export default cities;
