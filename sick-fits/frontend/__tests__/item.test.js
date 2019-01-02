import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

/* 
  this is a bit brittle, if any aspect of our components are changed these test 
  will all be failing.. 
  in comes SnapShot testing!

*/

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool Item',
  price: 4000,
  description: 'This item is really cool!',
  image: 'dog.jpg',
  largeImage: 'DOGG.jpg',
};

describe('<Item />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  // const wrapper = shallow(<ItemComponent item={fakeItem} />);
  // it('renders the image properly', () => {
  //   const img = wrapper.find('img');
  //   // console.log('>>>>>>>>', img.props());
  //   expect(img.props().src).toBe(fakeItem.image);
  //   expect(img.props().alt).toBe(fakeItem.title);
  // });

  // it('renders the pricetag and title', () => {
  //   const priceTag = wrapper.find('PriceTag');
  //   // console.log(PriceTag.children().text());
  //   // console.log(wrapper.debug());
  //   expect(priceTag.children().text()).toBe('$50');
  //   expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
  // });

  // it('renders out the buttons properly', () => {
  //   // console.log(wrapper.debug());
  //   const buttonList = wrapper.find('.buttonList');
  //   console.log('>>>>>>', buttonList.debug());
  //   expect(buttonList.children()).toHaveLength(3);
  //   expect(buttonList.find('Link')).toHaveLength(1); // the following 2 test the same thing
  //   expect(buttonList.find('Link').exists()).toBe(true);
  //   expect(buttonList.find('Link')).toBeTruthy();
  //   expect(buttonList.find('AddToCart').exists()).toBe(true);
  //   expect(buttonList.find('DeleteItem').exists()).toBe(true);
  // });
});
