// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Spring boot',
    competency: 1,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'ReactJS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Angular',
    competency: 3,
    category: ['Javascript'],
  },
  {
    title: 'AngularJS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'PostgreSQL/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'PhotoShop',
    competency: 4,
    category: ['software'],
  },
  {
    title: 'Illustrator',
    competency: 5,
    category: ['software'],
  },
  {
    title: 'Adobe premier pro',
    competency: 5,
    category: ['software'],
  },
  {
    title: 'After effects',
    competency: 4,
    category: ['software'],
  },
  {
    title: 'Adobe InDsign',
    competency: 3,
    category: ['software'],
  },
  {
    title: 'Adobe XD',
    competency: 2,
    category: ['software'],
  },
  {
    title: 'Adobe CH',
    competency: 2,
    category: ['software'],
  },
  {
    title: 'Vegas pro',
    competency: 5,
    category: ['software'],
  },
  {
    title: 'luminar',
    competency: 3,
    category: ['software'],
  },
  {
    title: 'luminar AI',
    competency: 3,
    category: ['software'],
  },
  {
    title: 'StarUML',
    competency: 4,
    category: ['UML'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#000',
  '#000',
  '#000',
  '#000',
  '#000',
  '#000',
  '#000',
  '#000',
  '#000',
  '#000',
  '#000',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
