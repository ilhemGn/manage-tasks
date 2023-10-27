/*Importation de framework express, des modeles et configuration de bdd*/
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', async (req, res) => {
  const tasks = await db.task.findAll();
  res.render('index', { tasks });
});
/*l'ajout d'une tache*/
app.post('/add', async (req, res) => {
  await db.task.create({ description: req.body.description });
  res.redirect('/');
});
/*suppression d'une tache*/
app.post('/delete/:taskId', async (req, res) => {
    const taskId = req.params.taskId;

    try {
	await db.task.destroy({
	    where: { id: taskId }
	});

        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la suppression de la tâche');
    }
});

/*Demarrage du serveur*/
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});

