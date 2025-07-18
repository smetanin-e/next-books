


export const categories = [
    {name: "Хобби, досуг"},
    {name: "История"},
    {name: "Детские книги"},
    {name: "Прочее"},
]

export const subcategories = [
    {name: "Кулинария" , categoryId: 1},
    {name: "Сад и огород", categoryId: 1},
    {name: "Растения", categoryId: 1},
    {name: "Природа и животные", categoryId: 1},

    {name: "Документальная литература", categoryId: 2},
    {name: "Книги о путешествиях", categoryId: 2},
    {name: "Биографии и мемуары", categoryId: 2},
    {name: "Историческая литература", categoryId: 2},

    {name: "Комиксы", categoryId: 3},
    {name: "Сказки", categoryId: 3},
    {name: "Внеклассное чтение", categoryId: 3},
    {name: "Детская фантастика", categoryId: 3},

    {name: "Фэнтези", categoryId: 4},
    {name: "Детективы", categoryId: 4},
    {name: "Рассказы", categoryId: 4},
    {name: "Романы", categoryId: 4},
]



export const tags = [
    {name: "Новинки"},
    {name: "Бестселлеры"},
    {name: "Специальное предложение"}
]

export const ratings = [
    {ONE: 1, TWO: 0, THREE: 4, FOUR:12, FIVE: 65, bookId: 1},
    { bookId: 2},
    {ONE: 2, TWO: 4, THREE: 12, FOUR:64, FIVE: 80, bookId: 3},
    {ONE: 9, TWO: 12, THREE: 86, FOUR:265, FIVE: 389, bookId: 4},
]


export const books = [
    {
    
    imageUrl:
      'https://cv8.litres.ru/pub/c/elektronnaya-kniga/cover_415/4989181-mihail-krechmar-mohnatyy-bog.webp',
    
    title: 'Мохнатый бог',
    author: 'Михаил Кречмар',
    description:
      'Книга «Мохнатый бог» посвящена зверю, который не меньше, чем двуглавый орёл, может претендовать на право помещаться на гербе России, – бурому медведю. Во всём мире наша страна ассоциируется именно с медведем, будь то карикатуры, аллегорические образы или кодовые названия. Медведь для России значит больше, чем для «старой доброй Англии» плющ или дуб, для Испании – вепрь, и вообще любой другой геральдический образ Европы.',
    price: 300,
    categoryId: 1,
    subcategoryId: 4,
    
  },
  {
    imageUrl:
      'https://cv8.litres.ru/pub/c/elektronnaya-kniga/cover_415/15082688-aleksey-cellarius-vasha-sobaka-vospitanie-i-uhod-15082688.webp',
    title: 'Собака. Полное руководство по дрессировке и уходу',
    author: 'Алексей Целлариус',
    description:
      'Эта книга поможет читателям лучше понимать собак – как свою собственную, так и собак других владельцев, и даже бродячих, наладить с ними отношения и научиться ухаживать за ними. Автор – кандидат биологических наук, специалист по поведению животных и «собачник» с многолетним стажем – даст квалифицированные советы по воспитанию, дрессировке, уходу за собакой, и просто расскажет много интересного об этих замечательных животных. Книга будет интересна не только тем, кто имеет или хочет завести собаку, но и всем, кто интересуется животными, их поведением и взаимоотношениями с человеком.',
    price: 600,
    categoryId: 1,
    subcategoryId: 4,
    
    
     
  },
 {
    imageUrl:
      'https://cv4.litres.ru/pub/c/pdf-kniga/cover_415/64072546-mettu-makkonahi-zelenyy-svet-64072546.webp',
    title: 'Зеленый свет',
    author: 'Мэттью Макконахи',
    description:
      'Мэттью МакКонахи – известный голливудский актер, режиссер, сценарист, продюсер. Обладатель премий «Оскар» и «Золотой глобус». Перешагнув пятидесятилетний рубеж, артист решил поделиться с поклонниками еще одним своим талантом, презентовав книгу «Зеленый свет».',
    price: 800,
    categoryId: 2,
    subcategoryId: 7,
    sale: 30,
    
     
  },
  {
    imageUrl:
      'https://cv6.litres.ru/pub/c/elektronnaya-kniga/cover_415/147663-li-kuan-u-iz-tretego-mira-v-pervyy-istoriya-singapura-1965-2000.webp',
    title: 'Из третьего мира – в первый',
    author: 'Ли Куан Ю',
    description:
      'Когда крохотный Сингапур в 1965 году получил независимость, никто не верил, что ему удастся выжить. Каким же образом фактория Великобритании превратилась в процветающую столицу Азиатского региона с лучшим в мире аэропортом, крупнейшей авиалинией, ключевым торговым портом и заняла четвертое место в мире по уровню дохода на душу населения?',
    price: 499,
    categoryId: 2,
    subcategoryId: 5,
    
     
  },
]

