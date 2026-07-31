const wrapProfile = {
  year: 2026,
  orders: 176,
  spend: '₹96,400',
  topCuisine: 'North Indian',
  favouriteRestaurant: 'The Curry House',
  personality: 'Weeknight Regular',
  pattern: 'Most loyal on Friday nights',
};

const wrapCards = [
  {
    title: 'Total Orders',
    value: String(wrapProfile.orders),
    description: 'orders placed this year',
  },
  {
    title: 'Top Cuisine',
    value: wrapProfile.topCuisine,
    description: 'your most ordered comfort pick',
  },
  {
    title: 'Favourite Spot',
    value: wrapProfile.favouriteRestaurant,
    description: 'restaurant you kept coming back to',
  },
  {
    title: 'Total Spend',
    value: wrapProfile.spend,
    description: 'spent across food delivery this year',
  },
  {
    title: 'Food Personality',
    value: wrapProfile.personality,
    description: 'based on your ordering rhythm',
  },
];

export const foodDeliveryCaseStudy = {
  hero: {
    eyebrow: 'Case Study',
    title: 'Yearly Wraps and Dietary Filters for Food Delivery Apps',
    summary:
      'A product concept focused on two things: making food delivery feel more memorable for frequent users, and making it easier to order safely with dietary needs.',
    meta: [
      'Food delivery',
      'Retention + trust',
      'Product case study',
    ],
  },
  hook:
    'Food delivery apps already collect rich behavior data. Very little of it is turned into a better emotional experience or a faster decision flow.',
  problems: [
    {
      title: 'Low emotional stickiness',
      description:
        'People order for convenience, then leave. The app rarely gives them a reason to come back out of curiosity or delight.',
      accent: 'personal',
    },
    {
      title: 'Slow dietary discovery',
      description:
        'Diet-aware users still spend too long checking menus manually, which adds doubt and increases drop-off.',
      accent: 'dietary',
    },
  ],
  personas: [
    {
      name: 'Riya Mehta',
      role: 'Frequent ordering user',
      summary:
        'Orders several times a week and wants the app to feel more personal than a place to chase discounts.',
      accent: 'personal',
    },
    {
      name: 'Arjun Sharma',
      role: 'Diet-aware user',
      summary:
        'Checks ingredients before ordering and wants lactose-free or diet-friendly meals without extra effort.',
      accent: 'dietary',
    },
  ],
  wrapOverview:
    'Yearly Wrap turns order history into a lightweight personal story. It uses data the app already has and makes repeat behavior feel visible.',
  wrapProfile,
  wrapSteps: [
    {
      id: 'wrap-entry',
      label: 'Home',
      title: 'Show a wrap teaser on the home screen',
      body:
        'The feature appears where the user already is. It feels like a reward, not a campaign.',
    },
    {
      id: 'wrap-story',
      label: 'Stories',
      title: 'Let people move through a few simple story cards',
      body:
        'Each card reveals one stat: top cuisine, favourite restaurant, spend, or ordering pattern.',
    },
    {
      id: 'wrap-share',
      label: 'Share',
      title: 'End with a shareable summary',
      body:
        'Sharing gives the feature social life outside the app and makes the experience more memorable.',
    },
  ],
  filterOverview:
    'Dietary Filters reduce friction for users who need fast, trustworthy options. The value is utility first, not delight first.',
  filterSteps: [
    {
      id: 'menu-search',
      label: 'Browse',
      title: 'Begin from a normal browse experience',
      body:
        'Without help, users still need to open cards one by one and inspect dishes manually.',
    },
    {
      id: 'dietary-filter',
      label: 'Preferences',
      title: 'Expose clear dietary filters up front',
      body:
        'Filters like lactose-free, vegan, gluten-free, and Jain-friendly should be visible before deep browsing starts.',
    },
    {
      id: 'filtered-results',
      label: 'Matches',
      title: 'Update the dish list immediately',
      body:
        'The user should move from search to decision faster, with fewer false options in view.',
    },
  ],
  wrapCards,
  wrapHomeRestaurants: [
    {
      name: 'The Curry House',
      cuisine: 'North Indian',
      rating: '4.5',
      deliveryTime: '25-30 min',
      deliveryFee: '₹29 delivery',
    },
    {
      name: 'Bowl & Co.',
      cuisine: 'Healthy bowls',
      rating: '4.6',
      deliveryTime: '20-25 min',
      deliveryFee: '₹35 delivery',
    },
  ],
  dietaryBrowseRestaurants: [
    {
      name: 'Green Fork',
      cuisine: 'Healthy bowls',
      rating: '4.6',
      deliveryTime: '25-30 min',
      deliveryFee: '₹35 delivery',
      dietaryNote: 'Lactose-free and vegan options',
    },
    {
      name: 'Urban Tadka',
      cuisine: 'North Indian',
      rating: '4.4',
      deliveryTime: '30-35 min',
      deliveryFee: '₹29 delivery',
      dietaryNote: 'Jain-friendly options',
    },
  ],
  dietaryFilters: ['Lactose-free', 'Vegan', 'Gluten-free', 'Jain-friendly'],
  dishes: [
    {
      name: 'Lactose-free Millet Bowl',
      restaurant: 'Healthy Crave',
      tags: ['Lactose-free', 'Gluten-free'],
      blurb: 'High-protein bowl with roasted vegetables and herb dressing.',
    },
    {
      name: 'Vegan Buddha Bowl',
      restaurant: 'Green Fork',
      tags: ['Vegan', 'Gluten-free'],
      blurb: 'Fresh grains, tofu, and greens with sesame dressing.',
    },
    {
      name: 'Jain Pav Bhaji',
      restaurant: 'Urban Tadka',
      tags: ['Jain-friendly'],
      blurb: 'Comfort food adapted for Jain dietary preference.',
    },
    {
      name: 'Margherita Pizza',
      restaurant: 'Osteria',
      tags: [],
      blurb: 'Shown as a standard result when no dietary filter is applied.',
    },
  ],
  metrics: [
    {
      label: 'Monthly active users',
      target: '+15%',
    },
    {
      label: 'Daily active users',
      target: '+10%',
    },
    {
      label: 'Wrap shares',
      target: '50K',
    },
    {
      label: 'Filter adoption',
      target: '8-10%',
    },
    {
      label: 'Search-to-order conversion',
      target: '+10 pts',
    },
    {
      label: 'Menu drop-off rate',
      target: '-20%',
    },
  ],
  rollout: [
    'Log a clean pre-launch baseline for repeat orders, filter usage, and menu exits.',
    'QA wrap data quality and dietary tagging before exposing either surface broadly.',
    'Pilot both concepts with a smaller cohort, then compare behavior against control.',
    'Scale only after engagement, ordering confidence, and conversion all move together.',
  ],
  futureOpportunities: [
    'Turn dietary filters into a saved preference so returning users land in a safer starting state.',
    'Add richer result cards with ingredient highlights, allergen callouts, and restaurant-level trust signals.',
    'Evolve the yearly wrap into lightweight monthly moments instead of a once-a-year surprise only.',
  ],
  learnings: [
    'Utility and delight do not compete here. The strongest concept pair balances emotional retention with practical trust.',
    'The biggest UX win is usually upstream. Surfacing the right filter earlier matters more than polishing a deep menu later.',
    'A concept feels more believable when launch sequencing and success metrics are defined alongside the screens.',
  ],
};
