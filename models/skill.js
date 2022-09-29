  const skills = [
    {id: 125223, skill: 'Problem Solving', done: true},
    {id: 127904, skill: 'Can-Do Confident Attitude', done: true},
    {id: 139608, skill: 'Attention to Detail', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create, 
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
  }
 
  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }