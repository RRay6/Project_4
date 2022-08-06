import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Adeline',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Hello Kitty Steering Wheel Cover',
      slug: 'hello-kitty-steering-wheel-cover',
      category: 'Steering Wheel',
      image: '/images/hello-kitty-steering-wheel.jpg', // 679px x 829px
      price: 45.99,
      countInStock: 10,
      brand: 'Hello Kitty',
      rating: 4.5,
      numReviews: 52,
      description: 'cute cat cover',
    },
    {
      // _id: '2',
      name: 'Hello Kitty Car Seat',
      slug: 'hello-kitty-car-seat',
      category: 'Car Seat',
      image: '/images/hello-kitty-car-seat.jpg',
      price: 210.0,
      countInStock: 0,
      brand: 'Hello Kitty',
      rating: 4.2,
      numReviews: 16,
      description: 'cute cat car seat',
    },
    {
      // _id: '3',
      name: 'Hello Kitty Automatic Shift Knob Gear Stick Cover',
      slug: 'hello-kitty-automatic-shift-knob-gear-stick-cover',
      category: 'Automatic Shift Knob Gear Stick',
      image: '/images/hello-kitty-automatic-shift-knob-gear-stick-cover.jpg',
      price: 12.5,
      countInStock: 32,
      brand: 'Hello Kitty',
      rating: 3.7,
      numReviews: 117,
      description: 'cute cat automatic shift knob gear stick cover',
    },
  ],
};

export default data;
