const response = [
    {
        name: 'Decadent Week in Cape Town',
        image: 'cape-town.jpg',
        dateFrom: '2019-10-13T00:00:00.000Z',
        dateTo: '2019-10-18T00:00:00.000Z',
        guests: 4,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Relax in Maui',
        image: 'bali.jpg',
        dateFrom: '2019-10-25T00:00:00.000Z',
        dateTo: '2019-10-27T00:00:00.000Z',
        guests: 2,
        category: 'relaxing',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Weekend in Vegas',
        image: 'vegas.jpg',
        dateFrom: '2020-05-07T00:00:00.000Z',
        dateTo: '2020-05-10T00:00:00.000Z',
        guests: 2,
        category: 'weekend break',
        copy:
            'Next level vexillologist taiyaki migas cloud bread post-ironic. Offal selvage gastropub bitters.'
    },
    {
        name: 'Hiking in the Peaks',
        image: 'peaks.jpg',
        dateFrom: '2020-07-06T00:00:00.000Z',
        dateTo: '2020-07-10T00:00:00.000Z',
        guests: 2,
        category: 'adventure',
        copy: 'Helvetica umami selvage. Locavore gluten-free tacos, small batch banh mi shoreditch.'
    },
    {
        name: 'Relaxing in Punta Cana',
        image: 'puntacana.jpg',
        dateFrom: '2020-08-07T00:00:00.000Z',
        dateTo: '2020-08-09T00:00:00.000Z',
        guests: 2,
        category: 'weekend break',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Weekend at an Ice Hotel',
        image: 'icehotel.jpg',
        dateFrom: '2020-01-14T00:00:00.000Z',
        dateTo: '2020-01-16T00:00:00.000Z',
        guests: 4,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Best of Rio de Janeiro',
        image: 'rio.jpg',
        dateFrom: '2020-01-14T00:00:00.000Z',
        dateTo: '2020-01-21T00:00:00.000Z',
        guests: 3,
        category: 'weekend break',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Midsummer in Helsinki',
        image: 'helsinki.jpg',
        dateFrom: '2020-06-19T00:00:00.000Z',
        dateTo: '2020-06-21T00:00:00.000Z',
        guests: 2,
        category: 'weekend break',
        copy:
            'Next level vexillologist taiyaki migas cloud bread post-ironic. Offal selvage gastropub bitters.'
    },
    {
        name: 'Gardens of Damyang',
        image: 'korea.jpg',
        dateFrom: '2020-05-22T00:00:00.000Z',
        dateTo: '2020-05-30T00:00:00.000Z',
        guests: 2,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'India',
        image: 'india.jpg',
        dateFrom: '2019-12-02T00:00:00.000Z',
        dateTo: '2020-02-09T00:00:00.000Z',
        guests: 1,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'A Weekend in Vancouver',
        image: 'vancouver.jpg',
        dateFrom: '2019-10-05T00:00:00.000Z',
        dateTo: '2019-10-08T00:00:00.000Z',
        guests: 2,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Antwerpen',
        image: 'antwerpen.jpg',
        dateFrom: '2020-03-02T00:00:00.000Z',
        dateTo: '2020-03-04T00:00:00.000Z',
        guests: 2,
        category: 'weekend trip',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Decadent Week in Cape Town',
        image: 'cape-town.jpg',
        dateFrom: '2019-10-13T00:00:00.000Z',
        dateTo: '2019-10-18T00:00:00.000Z',
        guests: 4,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'A Weekend in Boston',
        image: 'boston.jpg',
        dateFrom: '2019-10-04T00:00:00.000Z',
        dateTo: '2019-10-06T00:00:00.000Z',
        guests: 3,
        category: 'family, weekend break',
        copy: 'Take a Duck Boat ride, shop at Faneuil Hall, or maybe hit up a Bruins game.'
    },
    {
        name: ' Amazing Week in Bali',
        image: 'bali.jpg',
        dateFrom: '2019-10-16T00:00:00.000Z',
        dateTo: '2019-10-22T00:00:00.000Z',
        guests: 4,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'The Atlanta Experience',
        image: 'atlanta.jpg',
        dateFrom: '2019-10-24T00:00:00.000Z',
        dateTo: '2019-10-27T00:00:00.000Z',
        guests: 2,
        category: 'long weekend',
        copy:
            'Enjoy one the greatest gems of the south, Atlanta, GA, for a spooky Halloween weekend.'
    },
    {
        name: 'Sculpture Park',
        image: 'sculpturePark.jpg',
        dateFrom: '2019-10-27T00:00:00.000Z',
        dateTo: '2019-09-03T00:00:00.000Z',
        guests: 1,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Meeting Ancestors at Serra da Capivara National Park',
        image: 'serraDaCapivara.jpg',
        dateFrom: '2019-10-16T00:00:00.000Z',
        dateTo: '2019-10-30T00:00:00.000Z',
        guests: 4,
        category: 'World Heritage Site',
        copy:
            'Meet the largest and oldest concentration of prehistoric sites in the Americas. Sítio do Meio has many prehistoric paintings.'
    },
    {
        name: 'Pittsburgh',
        image: '',
        dateFrom: '2019-12-15T00:00:00.000Z',
        dateTo: '2019-12-18T00:00:00.000Z',
        guests: 1,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Legoland Germany',
        image: 'legoland.jpg',
        dateFrom: '2019-10-06T00:00:00.000Z',
        dateTo: '2019-10-20T00:00:00.000Z',
        guests: 4,
        category: 'family',
        copy:
            'Teamwork of the whole family is required – this is the only chance to frustrate the plans of the villainous pharaoh…'
    },
    {
        name: 'Weekend in Vegas',
        image: 'vegas.jpg',
        dateFrom: '2020-05-07T00:00:00.000Z',
        dateTo: '2020-05-10T00:00:00.000Z',
        guests: 2,
        category: 'weekend break',
        copy:
            'Next level vexillologist taiyaki migas cloud bread post-ironic. Offal selvage gastropub bitters.'
    },
    {
        name: 'Hiking in the Peaks',
        image: 'peaks.jpg',
        dateFrom: '2020-07-06T00:00:00.000Z',
        dateTo: '2020-07-10T00:00:00.000Z',
        guests: 2,
        category: 'adventure',
        copy: 'Helvetica umami selvage. Locavore gluten-free tacos, small batch banh mi shoreditch.'
    },
    {
        name: 'Family Day Out',
        image: 'cliff.jpg',
        dateFrom: '2020-02-12T00:00:00.000Z',
        dateTo: '2020-02-15T00:00:00.000Z',
        guests: 4,
        category: 'family',
        copy: 'Air plant tattooed schlitz pinterest heirloom. Knausgaard gastropub chartreuse.'
    },
    {
        name: 'Relaxing in Punta Cana',
        image: 'puntacana.jpg',
        dateFrom: '2020-08-07T00:00:00.000Z',
        dateTo: '2020-08-09T00:00:00.000Z',
        guests: 2,
        category: 'weekend break',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Celebration in New York',
        image: 'newyork.jpeg',
        dateFrom: '2020-12-07T00:00:00.000Z',
        dateTo: '2020-12-09T00:00:00.000Z',
        guests: 2,
        category: 'celebration',
        copy: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.'
    },
    {
        name: 'Tettegouche State Park',
        image: 'tettegouche.jpg',
        dateFrom: '2019-09-28T00:00:00.000Z',
        dateTo: '2019-09-28T00:00:00.000Z',
        guests: 1,
        category: 'State Park',
        copy:
            'Meet the largest and oldest concentration of prehistoric sites in the Americas. Sítio do Meio has many prehistoric paintings.'
    },
    {
        name: 'Vacay in Mauritius',
        image: 'mauritius.jpg',
        dateFrom: '2019-10-13T00:00:00.000Z',
        dateTo: '2019-10-18T00:00:00.000Z',
        guests: 4,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Japan Adventure',
        image: 'japan.jpg',
        dateFrom: '2019-10-08T00:00:00.000Z',
        dateTo: '2019-10-14T00:00:00.000Z',
        guests: 5,
        category: 'Adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Meeting Florianopolis',
        image: 'florianopolis.jpg',
        dateFrom: '2019-10-16T00:00:00.000Z',
        dateTo: '2019-10-30T00:00:00.000Z',
        guests: 4,
        category: 'weekend trip',
        copy:
            'is the capital and second largest city of the state of Santa Catarina, in the South region of Brazil. The city encompasses Santa Catarina Island and surrounding small islands, as well as part of the mainland'
    },
    {
        name: 'Weekend in Moscow',
        image: 'moscow.jpg',
        dateFrom: '2019-10-18T00:00:00.000Z',
        dateTo: '2019-10-21T00:00:00.000Z',
        guests: 2,
        category: 'weekend break',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Weekend in Mon Cham',
        image: 'moncham.jpg',
        dateFrom: '2019-11-14T00:00:00.000Z',
        dateTo: '2019-11-16T00:00:00.000Z',
        guests: 5,
        category: 'weekend trip',
        copy: 'Mon Cham sits on top of a small mountain'
    },
    {
        name: 'Trecking in Kasol',
        image: 'trek.jpg',
        dateFrom: '2019-10-24T00:00:00.000Z',
        dateTo: '2019-10-26T00:00:00.000Z',
        guests: 5,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Spa Day at the Blue Lagoon in Iceland',
        image: 'iceland.jpg',
        dateFrom: '2020-10-03T00:00:00.000Z',
        dateTo: '2020-10-10T00:00:00.000Z',
        guests: 4,
        category: 'family',
        copy:
            "Argentina's capital, Buenos Aires is the second largest urban area in South America, full of great tourist attractions, museums, restaurants."
    },
    {
        name: 'Weeked in Japan',
        image: 'shirakawago.jpg',
        dateFrom: '2019-12-28T00:00:00.000Z',
        dateTo: '2020-01-02T00:00:00.000Z',
        guests: 5,
        category: 'family',
        copy:
            'Shirakawa is a mountain village located in far northern Gifu Prefecture, bordering Ishikawa Prefecture and Toyama Prefecture on the Ryōhaku Mountains.'
    },
    {

        name: 'Adventure in Ponta Negra - Rio Grande do Norte',
        image: 'pontanegra.jpg',
        dateFrom: '2019-10-10T00:00:00.000Z',
        dateTo: '2019-11-10T00:00:00.000Z',
        guests: 5,
        category: 'adventure',
        copy:
            'Ponta Negra  is a beach and neighborhood located in the Brazilian city of Natal, the capital of the state of Rio Grande do Norte. Located in the extreme south of the beach is the Morro do Careca, a large dune and a landmark of the city.'
    },
  {
        name: 'Empire State Building',
        image: 'empire-state-building.jpeg',
        dateFrom: '2019-11-14T00:00:00.000Z',
        dateTo: '2019-11-15T00:00:00.000Z',
        guests: 2,
        category: 'family',
        copy:
            'The Empire State Building has an amazing observation deck to look past New York and into Northern New Jersey while admiring all the surrondings that the concrete jungle has to offer.'
    },
    {
      name: 'A Week In Cancun',
      image: 'Cancun.jpg',
      dateFrom: '2020-05-01T00:00:00.000Z',
      dateTo: '2020-05-07T00:00:00.000Z',
      guests: 2,
      category: 'adventure',
      copy:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    }
]

export default response
