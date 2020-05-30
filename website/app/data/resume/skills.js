// TODO: Add skills, Change up order of skills, Adjust competency, and Add some categories

const skills = [{
  title: 'Javascript',
  competency: 4,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'Node.JS',
  competency: 4,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Swift',
  competency: 5,
  category: ['Mobile Development', 'Languages'],
},
{
  title: 'Java',
  competency: 5,
  category: ['Mobile Development', 'Languages'],
},
{
  title: 'Objective-C',
  competency: 2,
  category: ['Mobile Development', 'Languages'],
},
{
  title: 'Kotlin',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'React',
  competency: 4,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'React Native',
  competency: 5,
  category: ['Mobile Development', 'Javascript'],
},

{
  title: 'Bash',
  competency: 2,
  category: ['Tools', 'Languages'],
},
{
  title: 'Amazon Web Services',
  competency: 2,
  category: ['Web Development', 'Tools'],
},
{
  title: 'Heroku',
  competency: 2,
  category: ['Web Development', 'Tools'],
},
{
  title: 'MongoDB',
  competency: 3,
  category: ['Web Development', 'Databases'],
},
{
  title: 'PostgreSQL/SQLite3/SQL',
  competency: 2,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'Redis',
  competency: 2,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Express.JS',
  competency: 2,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Flask',
  competency: 1,
  category: ['Web Development', 'Python'],
},
{
  title: 'Git',
  competency: 5,
  category: ['Tools'],
},
{
  title: 'Google Cloud Compute',
  competency: 2,
  category: ['Tools', 'Web Development'],
},
{
  title: 'Numpy',
  competency: 1,
  category: ['Data Science', 'Python'],
},
{
  title: 'Tensorflow + Keras',
  competency: 2,
  category: ['Data Science', 'Python'],
},
{
  title: 'Jupyter',
  competency: 3,
  category: ['Data Science', 'Python'],
},
{
  title: 'Typescript',
  competency: 4,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'HTML + CSS',
  competency: 3,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Python',
  competency: 5,
  category: ['Languages', 'Python'],
},
{
  title: 'C++',
  competency: 2,
  category: ['Languages'],
},
{
  title: 'R',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'Data Visualization',
  competency: 3,
  category: ['Data Science', 'Javascript'],
},
{
  title: 'GraphQL',
  competency: 2,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Pandas',
  competency: 2,
  category: [ 'Data Science', 'Python'],
},
{
  title: 'Matplotlib',
  competency: 2,
  category: [ 'Data Science', 'Python'],
},
{
  title: 'Scikit-Learn',
  competency: 2,
  category: [ 'Data Science', 'Python'],
},
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
