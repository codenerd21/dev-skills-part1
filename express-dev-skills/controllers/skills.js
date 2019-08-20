const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills')
}

function newSkill(req, res) {
  res.render('skills/new')
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}

function show(req, res) {
  let id = req.params.id;
  res.render('skills/show', {
  skill: Skill.getOne(id)
  });
}





