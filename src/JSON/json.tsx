import { ICard } from '../types/types'

const cards: ICard[] = [
  {
    id: 1,
    urlImg: '/img/aos-crystal.png',
    title: 'Прокладки ежедневные DISCREET Multiform',
    type: '/img/cardbox.svg',
    size: '15X28.8 г',
    barcode: 4604049297548,
    manufacturer: 'Гэмбл',
    brand: 'DISCREET',
    description:
      'Ежедневные прокладки DISCREET Multiform Air без отдушек подарят вам ощущение свежести и красоты.',
    price: 800,
    counter: 1,
    care: ['Уход за телом'],
  },
  {
    id: 2,
    urlImg: '/img/ariel-gel.png',
    title: 'Крем-мыло DOVE Красота и уход',
    type: '/img/cardbox.svg',
    size: '90г',
    barcode: 460204909756867,
    manufacturer: 'Россия',
    brand: 'DOVE',
    description:
      'Шампунь для волос DOVE Nourishing Secrets «Густые и сильные» с лавандой и розмарином – питательное средство. Волосы выглядят более плотными, сильными и упругими уже после первого применения! Особенное питание DOVE в сочетании с экзотическими натуральными ингредиентами – это настоящий ритуал красоты, бережно отобранный для вас DOVE и доставленный на полочку вашей ванны с любовью и заботой. DOVE не проводит тесты на животных и имеет аккредитацию организации РЕТА.',
    price: 80,
    counter: 1,
    care: ['Уход за телом', 'Уход за руками'],
  },
  {
    id: 3,
    urlImg:
      '/img/aos-crystal.png',
    title: 'Шампунь Dove, Hair Therapy Интенсивное восстановление',
    type: '/img/cardbottle.svg',
    size: '15X28.8 г',
    barcode: 46343404909688,
    manufacturer: 'Россия',
    brand: 'ARIEL',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 55,
    counter: 1,
    care: ['Уход за телом'],
  },
  {
    id: 4,
    urlImg:
      '/img/crem1.png',
    title:
      'Крем-мыло DOVE «Красота и уход»',
    type: '/img/cardbottle.svg',
    size: '15X28.8 г',
    barcode: 46554590975789,
    manufacturer: 'DISCREET',
    brand: 'ARIEL',
    description:
      'Крем-мыло DOVE «Красота и уход», на 1/4 состоящее из увлажняющего крема, питает кожу, делая ее более нежной и сияющей.',
    price: 220,
    counter: 1,
    care: ['Уход за руками', 'Уход за телом'],
  },
  {
    id: 5,
    urlImg:
      '/img/crem2.png',
    title: 'SHAMPOO Шампунь от выпадения и для роста волос',
    type: '/img/cardbottle.svg',
    size: '15X28.8 г',
    barcode: 46040243429998,
    manufacturer: 'SHAMPOO',
    brand: 'RESEDAODOR',
    description:
      'Содержит низкомолекулярные активные компоненты, которые способны за короткое время контракта шампуня с кожей головы оказывать стимулирующее влияние на фолликулы. Воздействует на основную причину андрогенной алопеции: негативное влияние DHT на фолликулы. Восстанавливает микробиом и успокаивает чувствительную кожу головы. Предназначен для комплексного решения проблемы выпадения и ломкости волос.',
    price: 100,
    counter: 1,
    care: ['Уход за телом'],
  },
  {
    id: 6,
    urlImg:
      '/img/crem3.png',
    title: 'Масло для массажа Базовое 1000',
    type: '/img/cardbottle.svg',
    size: '400мл',
    barcode: 460654355748,
    manufacturer: 'Senspa',
    brand: 'Senspa',
    description:
      'Масло для массажа БАЗОВОЕ (без аромата) Базовое массажное масло на 57 % состоит из ценных проростков риса и на 37 % из масла подсолнечника, который славится своими удивительными восстанавливающими и омолаживающими свойствами.',
    price: 100,
    counter: 1,
    care: ['Уход за телом'],
  },
  {
    id: 7,
    urlImg:
      '/img/crem4.png',
    title: 'Масло для массажа Цветы Орхидеи 1000',
    type: '/img/cardbottle.svg',
    size: '450 мл',
    barcode: 4604013213242548,
    manufacturer: 'Senspa',
    brand: 'Senspa',
    description:
      'Массажное масло представляет собой смесь масел из проростков риса, богатого витамином Е, масла австралийского ореха и натурального эфирного масла цветов орхидеи. Подходит для расслабляющего и успокаивающего массажа. Состав: ● Масло проростков риса ● Масло семян подсолнечника ● Масло пальмовое ● Эфирное масло орхидеи',
    price: 342,
    counter: 1,
    care: ['Уход за телом'],
  },
  {
    id: 8,
    urlImg:
      '/img/crem5.png',
    title: 'Масло для массажа Цветы Орхидеи 2000',
    type: '/img/cardbottle.svg',
    size: '450 мл',
    barcode: 4604132133242548,
    manufacturer: 'Senspa',
    brand: 'Senspa',
    description:
      'Массажное масло представляет собой смесь масел из проростков риса, богатого витамином Е, масла австралийского ореха и натурального эфирного масла цветов орхидеи. Подходит для расслабляющего и успокаивающего массажа. Состав: ● Масло проростков риса ● Масло семян подсолнечника ● Масло пальмовое ● Эфирное масло орхидеи',
    price: 234,
    counter: 1,
    care: ['Уход за телом'],
  },
  {
    id: 9,
    urlImg: '/img/crem6.png',
    title: 'Масло для массажа Цветы Орхидеи 2000',
    type: '/img/cardbottle.svg',
    size: '450 мл',
    barcode: 460401233242548,
    manufacturer: 'Senspa',
    brand: 'Senspa',
    description:
      'Массажное масло представляет собой смесь масел из проростков риса, богатого витамином Е, масла австралийского ореха и натурального эфирного масла цветов орхидеи. Подходит для расслабляющего и успокаивающего массажа. Состав: ● Масло проростков риса ● Масло семян подсолнечника ● Масло пальмовое ● Эфирное масло орхидеи',
    price: 240,
    counter: 1,
    care: ['Уход за телом'],
  },
  {
    id: 10,
    urlImg:
      '/img/crem7.png',
    title: 'Соляной скраб для тела Молодость и Свежесть 1000',
    type: '/img/cardbox.svg',
    size: '300г',
    barcode: 460412313242548,
    manufacturer: 'DOVE',
    brand: 'DOVE',
    description:
      'Компания SenSpa соединила отшелушивающие, очищающие и увлажняющие действия в один скраб, теперь Ваша кожа будет выглядеть свежей, чистой и мягкой. ',
    price: 200,
    counter: 1,
    care: ['Уход за телом'],
  },
  {
    id: 11,
    urlImg: '/img/crem8.png',
    title:
      'Масло для массажа Молодость и Свежесть 5000',
    type: '/img/cardbox.svg',
    size: '15X28.8 г',
    barcode: 43240213097548,
    manufacturer: 'Россия',
    brand: 'BOS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 100,
    counter: 1,
    care: [''],
  },
  {
    id: 12,
    urlImg: '/img/crem9.png',
    title:
      'Масло для массажа Свежесть 5000',
    type: '/img/cardbox.svg',
    size: '15X28.8 г',
    barcode: 432404902327548,
    manufacturer: 'DISCREET',
    brand: 'BOS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 100,
    counter: 1,
    care: [''],
  },
  {
    id: 14,
    urlImg:
      '/img/crem10.png',
    title:
      'Масло для массажа Молодость 5000',
    type: '/img/cardbox.svg',
    size: '15X28.8 г',
    barcode: 4324134954648,
    manufacturer: 'DISCREET',
    brand: 'BOS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 10,
    counter: 1,
    care: [''],
  },
  {
    id: 15,
    urlImg:
      '/img/crem11.png',
    title:
      'Масло для массажа ',
    type: '/img/cardbox.svg',
    size: '15X28.8 г',
    barcode: 43241346577548,
    manufacturer: 'DISCREET',
    brand: 'BOS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 10,
    counter: 1,
    care: ['Уход за руками'],
  },
  {
    id: 16,
    urlImg: '/img/ariel-gel.png',
    title:
      'SHAMPOO Шампунь для роста волос',
    type: '/img/cardbox.svg',
    size: '15X28.8 г',
    barcode: 4324165467548,
    manufacturer: 'Россия',
    brand: 'BOS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 10,
    counter: 1,
    care: [''],
  },
  {
    id: 17,
    urlImg:
      '/img/ariel-gel.png',
    title:
      'SHAMPOO Шампунь от выпадения',
    type: '/img/cardbox.svg',
    size: '15X28.8 г',
    barcode: 43242231349048,
    manufacturer: 'DOVE',
    brand: 'BOS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 40,
    counter: 1,
    care: ['Уход за руками'],
  },
  {
    id: 18,
    urlImg: '/img/aos-crystal.png',
    title:
      'SHAMPOO Шампунь ежедневный уход',
    type: '/img/cardbox.svg',
    size: '15X28.8 г',
    barcode: 4324134923437548,
    manufacturer: 'DOVE',
    brand: 'BOS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
    price: 10,
    counter: 1,
    care: ['Уход за руками'],
  },
]

export default cards
