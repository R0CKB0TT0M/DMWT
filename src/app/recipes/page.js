import RecipeCarousel from '../recipes/RecipeCarousel';

const mockRecipes = [
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    description: 'Classic Italian dish with rich tomato and meat sauce.',
    image: '/images/spaghetti.jpg',
  },
  {
    id: 2,
    title: 'Vegan Buddha Bowl',
    description: 'Wholesome bowl with grains, veggies, and tahini dressing.',
    image: '/images/buddha-bowl.jpg',
  },
  {
    id: 3,
    title: 'Chicken Tikka Masala',
    description: 'Creamy tomato curry with grilled chicken chunks.',
    image: '/images/tikka.jpg',
  },
];

export default function Home() {
  return <RecipeCarousel recipes={mockRecipes} />;
}
