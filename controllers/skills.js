 // controllers/skills.js

 const Skill = require('../models/skill')

 module.exports = {
    index, 
    show, 
    new: newSkill, 
    create
};

 function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }
 
  function show(req, res) {
    console.log('THIS IS REQ.PARAMS ', req.params)
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id)
    })
  }

  function newSkill(req, res) {
    res.render('skills/new');
  }

  function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
  }