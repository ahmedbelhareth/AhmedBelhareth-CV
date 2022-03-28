/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Phone number',
    key: 'number',
    value: '+216 54-504-138',
  },
  {
    label: 'Age',
    key: 'my age',
    value: '17/10/1999',
  },
  {
    label: 'e-mail',
    key: 'my mail',
    value: 'ahmedbelhareth04@gmail.com',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Ahmed Belhareth github',
    key: 'my github',
    value: 'https://github.com/ahmedbelhareth',
  },
];

export default data;
