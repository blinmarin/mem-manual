
import { Flex } from '@chakra-ui/react'
import './CardsPage.css';
import { Picha } from '../Card/Picha.interface';
import CardItem from '../Card/CardItem';
import Header from '../Header/Header';



let massPich: Array<Picha> = [
  {
    key: 1,
    img_path: 'https://avatars.dzeninfra.ru/get-zen_doc/4569048/pub_61754b0cca7a3f4a9d324490_61754b10563eeb7229ee550f/scale_1200',
    alt: 'Кандибобер',
    title: 'Я прошла афганскую войну'
  },
  {
    key: 2,
    img_path: 'https://telmenews.ru/wp-content/uploads/2023/03/1679580000_Chaplin-rasskazal-o-yuridicheskih-i-finansovyh-riskah-pokupki-staroiy-dachi.png',
    alt: 'Вы кто такие? Я вас не звал.',
    title: 'Вы кто такие? Я вас не звал. Идите нах@й'
  },
  {
    key: 3,
    img_path: 'https://memepedia.ru/wp-content/uploads/2017/04/%D0%BF%D0%BE%D0%B2%D0%B0%D1%80-%D1%81%D0%BF%D1%80%D0%B0%D1%88%D0%B8%D0%B2%D0%B0%D0%B5%D1%82-%D0%BF%D0%BE%D0%B2%D0%B0%D1%80%D0%B0.jpg',
    alt: 'Повар спрашивает повара',
    title: 'Какова твоя профессия'
  },
  {
    key: 4,
    img_path: 'https://memepedia.ru/wp-content/uploads/2020/06/nu-che-tam-s-dengami-prank.jpg',
    alt: 'Ну как там с деньгами?',
    title: 'Ну которые я внес в капитал'
  },
  {
    key: 5,
    img_path: 'https://memepedia.ru/wp-content/uploads/2017/04/%D0%B1%D1%83%D0%B9%D0%BD%D1%8B%D0%B9-%D1%81%D0%BB%D0%B0%D0%B2%D0%B8%D0%BA-%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB.jpg',
    alt: 'Ты чё, дурак что-ли?',
    title: 'Чё те надо у меня дома?'
  },
  {
    key: 6,
    img_path: 'https://sun1-95.userapi.com/s/v1/ig2/TUWK-dsWK_3J2d0NseBAyrA1s4UDU32HaNYLkR84vjH5j8GcgJnLhX7qhDVA45teCVbwMMbxltozX257Dy1qlIKF.jpg?size=396x487&quality=95&crop=441,72,396,487&ava=1',
    alt: 'Зубенко Михаил Петрович',
    title: 'Мафиозник'
  },
  {
    key: 7,
    img_path: 'https://memepedia.ru/wp-content/uploads/2018/03/ebanyy-rot-etogo-kazino.png',
    alt: 'Еб@ный рот этого казино',
    title: 'Ты кто такой, с@ка, чтоб это сделать?'
  },
]



const CardsPage = () => {
  return (
    <div className="CardsPage">
      <Header/>
      <Flex className='flex-wrapper' wrap='wrap' gap='20'>
          {massPich.map(pich => <CardItem key={pich.key} img_path={pich.img_path} alt={pich.alt} title={pich.title}></CardItem>)}
      </Flex>

    </div>
  );
}

export default CardsPage;

// 