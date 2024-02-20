export const mockData = [
  {
    title: 'Apple',
    description: 'Experience the crisp sweetness of fresh apples.',
    price: 1.5,
  },
  {
    title: 'Banana',
    description: 'Fuel your day with our potassium-packed bananas.',
    price: 1.8,
  },
  {
    title: 'Orange',
    description: 'Unleash a burst of citrus delight in every bite.',
    price: 1.4,
  },
  {
    title: 'Carrot',
    description: 'Indulge in the crunchiness of nutrient-rich carrots.',
    price: 1.6,
  },
  {
    title: 'Broccoli',
    description: 'Elevate your health with our versatile broccoli.',
    price: 1.9,
  },
  {
    title: 'Grapes',
    description: 'Savor the sweetness of our bountiful grape clusters.',
    price: 1.5,
  },
  {
    title: 'Tomato',
    description: 'Add flavor to your dishes with our juicy tomatoes.',
    price: 1.2,
  },
  {
    title: 'Spinach',
    description: 'Revitalize your meals with our iron-packed spinach.',
    price: 1.1,
  },
  {
    title: 'Strawberry',
    description: 'Delight in the sweetness of succulent strawberries.',
    price: 1.3,
  },
  {
    title: 'Cucumber',
    description: 'Stay refreshed with the crispness of our cucumbers.',
    price: 0.5,
  },
  {
    title: 'Kiwi',
    description: 'Boost your day with the vitamin C richness of kiwi.',
    price: 2.5,
  },
  {
    title: 'Avocado',
    description: 'Savor the creamy goodness of nutrient-dense avocados.',
    price: 3.5,
  },
  {
    title: 'Pineapple',
    description: 'Escape to the tropics with our sweet pineapples.',
    price: 4.5,
  },
  {
    title: 'Bell Pepper',
    description: 'Color your meals with the crunch of bell peppers.',
    price: 2.5,
  },
  {
    title: 'Watermelon',
    description: 'Quench your thirst with the juicy freshness of watermelon.',
    price: 9.5,
  },
  {
    title: 'Cherry',
    description: 'Indulge in the sweetness of plump, red cherries.',
    price: 5.5,
  },
  {
    title: 'Zucchini',
    description: 'Transform your recipes with the versatility of zucchini.',
    price: 1.2,
  },
  {
    title: 'Blueberry',
    description: 'Enjoy a burst of antioxidants with our blueberries.',
    price: 1.3,
  },
  {
    title: 'Potato',
    description: 'Ignite your culinary creativity with our versatile potatoes.',
    price: 1.8,
  },
  {
    title: 'Lettuce',
    description: 'Create vibrant salads with our crisp and fresh lettuce.',
    price: 2.4,
  },
];

function getRandomInt() {
  let min = 1;
  let max = 11;

  min = Math.ceil(min);
  max = Math.floor(max);

  let generatedNumber = Math.floor(Math.random() * (max - min) + min);

  // return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusiv

  console.log('randomNumber= ', generatedNumber);

  return generatedNumber;
}

export default mockData;
