export const PROJECTS = [
  {
    id: 1,
    title: 'IGS ROTI Maps',
    description: {
      short: 'Web tool for visualization of the IGS ROTI Maps product.',
      long: 'Сервис представляет собой приложение для построения и сохранения в БД карт индекса ROTI. Исходники карт предоставляются в открытом доступе службой IGS. Индекс ROTI является информативным параметром для оценки состояния ионосферы Земли на высоких широтах.',
    },
    repo: 'https://github.com/jonathanblade',
    href: 'https://igs-roti.herokuapp.com',
    stack: ['Python', 'FastAPI', 'Vue.js', 'Heroku', 'Vuetify', 'MongoDB\u00A0Atlas', 'GitHub\u00A0Actions'],
  },
  {
    id: 2,
    title: 'OmronJS',
    description: {
      short: 'Node.js wrapper for libomron.',
      long: 'npm-пакет, который представляет собой обёртку через FFI над нативной библиотекой libomron. libomron - это open-source библиотека, написанная на языке С++, которая предназначена для управления тонометрами производства японской компании Omron.',
    },
    repo: 'https://github.com/omronjs',
    href: 'https://github.com/jonathanblade/omronjs',
    stack: ['Node.js', 'Typescript', 'FFI\u00A0N-API', 'GitHub\u00A0Actions'],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: 'Бакалавр',
    start: 2014,
    end: 2018,
    university: 'Иркутский государственный университет',
    faculty: 'физический факультет',
    specialization: {
      code: '03.03.03',
      name: 'Радиофизика',
    },
    program: 'Телекоммуникационные системы и информационные технологии',
    diploma: {
      title: 'Влияние солнечных вспышек на ионосферу Земли в 24-ом цикле солнечной активности',
      href: 'http://eportfolio.isu.ru/download/file/fid/77823',
    },
  },
  {
    id: 2,
    degree: 'Магистр',
    start: 2018,
    end: 2020,
    university: 'Московский государственный университет имени М.В. Ломоносова',
    faculty: 'физический факультет',
    specialization: {
      code: '03.04.02',
      name: 'Физика',
    },
    program: 'Физика атмосферы и околоземного космического пространства',
    diploma: {
      title: 'Оценка точности позиционирования GPS при естественных и искусственных возмущениях ионосферы',
      href: 'https://github.com/jonathanblade/master-diploma',
    },
  },
  {
    id: 3,
    degree: 'Аспирант',
    start: 2020,
    end: null,
    university: 'Московский государственный университет имени М.В. Ломоносова',
    faculty: 'физический факультет',
    specialization: {
      code: '05.06.01',
      name: 'Науки о Земле',
    },
    program: 'Физика атмосферы и гидросферы',
    diploma: {
      title: null,
      href: null,
    },
  },
];

export const CONTACTS = {
  Github: 'https://github.com/jonathanblade',
  Telegram: 'https://t.me/jonathanblade',
  Email: 'mailto:mail@syrovatskiy.tk',
};

export const WORK = [
  {
    id: 1,
    company: 'ИСЗФ СО РАН',
    city: 'Иркутск',
    start: 2017,
    end: 2020,
    position: 'Инженер-программист',
    tasks: ['Обработка и анализ спутниковых данных (Python).'],
  },
  {
    id: 2,
    company: 'ООО «Платформа Качества»',
    city: 'Москва',
    start: 2021,
    end: null,
    position: 'Разработчик',
    tasks: [
      'Разработка API (Python/Rust).',
      'Написание драйверов (Node.js/Typescript).',
      'Работа c indoor навигацией и протоколом bluetooth (BLE, Web Bluetooth API, Bluez DBus API).',
      'Поддержка legacy проектов.',
    ],
  },
];

export const PUBLICATIONS = [
  {
    id: 12,
    title: 'Ionospheric Disturbances and Irregularities During the 25–26 August 2018 Geomagnetic Storm',
    authors:
      'E. Astafyeva, Yu.V. Yasyukevich, B. Maletckii, A. Oinats, A. Vesnin, A.S. Yasyukevich, S. Syrovatskii, N. Guendouz',
    journal: {
      name: 'JGR Space Physics',
      volume: '127',
      number: '1',
    },
    href: 'http://doi.org/10.1029/2021JA029843',
    year: '2021',
    category: 'article',
  },
  {
    id: 11,
    title: 'SIMuRG: System for Ionosphere Monitoring and Research from GNSS',
    authors:
      'Yu.V. Yasyukevich, A.V. Kiselev, I.V. Zhivetiev, I.K. Edemskiy, S.V. Syrovatskii, B.M. Maletckii, A.M. Vesnin',
    journal: {
      name: 'GPS Solutions',
      volume: '24',
    },
    href: 'https://doi.org/10.1007/s10291-020-00983-2',
    year: '2020',
    category: 'article',
  },
  {
    id: 10,
    title:
      'Small-Scale Ionospheric Irregularities of Auroral Origin at Mhref-latitudes during the 22 June 2015 Magnetic Storm and Their Effect on GPS Positioning',
    authors:
      'Yu.V. Yasyukevich, R.V. Vasilyev, K.G. Ratovsky, A.G. Setov, M.V. Globa, S.V. Syrovatskii, A.S. Yasyukevich, A.V. Kiselev, A.M. Vesnin',
    journal: {
      name: 'Remote Sensing',
      volume: '12',
      number: '10',
    },
    href: 'https://doi.org/10.3390/rs12101579',
    year: '2020',
    category: 'article',
  },
  {
    id: 9,
    title: 'Effect of strong geomagnetic storm on GNSS precise point positioning quality',
    authors: 'S.V. Syrovatskii, A.S. Yasyukevich, Yu.V. Yasyukevich',
    journal: {
      name: 'Proceedings of International Conference «Atmosphere, ionosphere, safety»',
    },
    href: 'http://ais2020.ru:1818/AIS%20Proceedings%202020.pdf#page=100',
    year: '2020',
    category: 'proceedings',
  },
  {
    id: 8,
    title: 'Changes in the GNSS precise point positioning accuracy during a strong geomagnetic storm',
    authors: 'A.S. Yasyukevich, S.V. Syrovatskii, Yu.V. Yasyukevich',
    journal: {
      name: 'E3S Web of Conferences',
      volume: '196',
    },
    href: 'https://doi.org/10.1051/e3sconf/202019601001',
    year: '2020',
    category: 'proceedings',
  },
  {
    id: 7,
    title: 'Can we detect X/M/C-class solar flares from global navigation satellite system data?',
    authors: 'S.V. Syrovatskiy, Yu.V. Yasyukevich, I.K. Edemskiy, A.M. Vesnin, S.V. Voeykov, I.V. Zhivetiev',
    journal: {
      name: 'Results in Physics',
      volume: '12',
    },
    href: 'https://doi.org/10.1016/j.rinp.2018.12.069',
    year: '2019',
    category: 'article',
  },
  {
    id: 6,
    title:
      'Точность позиционирования GPS в различных режимах при активном воздействии на ионосферу мощным КВ-излучением нагревного стенда СУРА',
    authors:
      'Ю.В. Ясюкевич, С.В. Сыроватский, А.М. Падохин, В.Л. Фролов, А.М. Веснин, Д.А. Затолокин, Г.А. Курбатов, Р.В. Загретдинов, А.В. Першин, А.С. Ясюкевич',
    journal: {
      name: 'Известия вузов. Радиофизика',
      volume: '62',
      number: '12',
    },
    href: 'https://radiophysics.unn.ru/issues/2019/12/906',
    year: '2019',
    category: 'article',
  },
  {
    id: 5,
    title: 'Влияние солнечных вспышек на ионосферу Земли в 24-ом цикле солнечной активности',
    authors: 'С.В. Сыроватский, Ю.В. Ясюкевич, А.М. Веснин, И.К. Едемский, С.В. Воейков, И.В. Живетьев',
    journal: {
      name: 'Учёные записки Физического факультета МГУ',
    },
    href: 'http://uzmu.phys.msu.ru/abstract/2018/4/1840403',
    year: '2018',
    category: 'article',
  },
  {
    id: 4,
    title: 'GNSS Scintillations in Siberia During 2014-2017',
    authors: 'Yu.V. Yasyukevich, A.M. Vesnin, D.A. Zatolokin, S.V. Syrovatskii, V.V. Demyanov, M.A. Sergeeva',
    journal: {
      name: '2nd URSI Atlantic Radio Science Meeting (AT-RASC)',
    },
    href: 'https://doi.org/10.23919/URSI-AT-RASC.2018.8471413',
    year: '2018',
    category: 'proceedings',
  },
  {
    id: 3,
    title:
      'The 6 September 2017 X‐Class Solar Flares and Their Impacts on the Ionosphere, GNSS, and HF Radio Wave Propagation',
    authors: 'Yu.V. Yasyukevich, E.I. Astafyeva, A.M. Padokhin, V.A. Ivanova, S.V. Syrovatskii, A.V. Podlesnyi',
    journal: {
      name: 'Space Weather',
      volume: '16',
      number: '8',
    },
    href: 'https://doi.org/10.1029/2018SW001932',
    year: '2018',
    category: 'article',
  },
  {
    id: 2,
    title: 'Tool for Creating Maps of GNSS Total Electron Content Variation',
    authors:
      'Yu.V. Yasyukevich, I.V. Zhivetiev, A.V. Kiselev, I.K. Edemskiy, S.V. Syrovatsky, A.S. Shabalin, A.M. Vesnin',
    journal: {
      name: 'Progress in Electromagnetics Research Symposium (PIERS-Toyama)',
    },
    href: 'https://doi.org/10.23919/PIERS.2018.8597604',
    year: '2018',
    category: 'proceedings',
  },
  {
    id: 1,
    title:
      'Измерение мерцаний навигационного сигнала с использованием оборудования Novatel GPStation-6 на средних широтах',
    authors: 'С.В. Сыроватский, Ю.В. Ясюкевич, А.М. Веснин',
    journal: {
      name: 'Труды БШФФ',
    },
    href: 'http://bsfp.iszf.irk.ru/sites/default/files/school/2017/materials_2017/146-148Syrovatskiy.pdf',
    year: '2017',
    category: 'proceedings',
  },
];
