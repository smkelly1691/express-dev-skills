 // controllers/skills.js

 const Skill = require('../models/skill')

 module.exports = {
    index, 
    show, 
    new: newSkill, 
    create, 
    delete: deleteSkill, 
    edit, 
    update
};

 function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'Express Dev Skills',
    });
  };
 
  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Express Skill Show'
    })
  }

  function newSkill(req, res) {
    res.render('skills/new', {
      title: 'New Skills'
    })
  }

  function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

  function edit(req, res) {
    res.render('skills/edit', {
      title: 'Edit Skill',
      skill: Skill.getOne(req.params.id)
    })
  }
  
  function update(req, res) {
    console.log(req)
    Skill.updateOne(req.params.id, req.body.skill)
    res.redirect(`/skills/${req.params.id}`)
  }