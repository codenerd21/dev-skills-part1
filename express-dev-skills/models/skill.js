//Data Resource

const skills = [
  {
    name: 'HTML',
    description:  'Markup language used to describe structure of a web page.',
    experience: '3 months'
  },
  {
    name: 'CSS',
    description:  'Stylesheet language used to style HTML displayed in a webpage.',
    experience: '3 months'
  },
  {
    name: 'JavaScript',
    description: 'Programming language used to make dynamic webpages and add interactivity.',
    experience: '2 months'
  },
  {
    name: 'Node.js and Express',
    description: 'Run time environment that uses modules like Express to create a server and execute JS outside of a web browser.',
    experience: '1 week'
  },
  {
    name: 'Mongoose',
    description: 'Node package that allows you to perform CRUD operations on a MongoDB database.',
    experience: '1 week'
  }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
}

function deleteOne(id) {
  skills.splice(id, 1);
}

function create(skill) {
  skills.push(skill);
} 

function getAll(){
  return skills;
}

function getOne(id){
  return skills[id - 1];
}


