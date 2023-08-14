const { Sequelize, DataTypes, Model } = require('sequelize');
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
let cors = require('cors')
app.use(cors())

app.listen(port, () => {
  console.log(`Portfolio app listening on port ${port}`)
})
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const sequelize = new Sequelize('portfolio', 'postgres', 'vika3vika', {
  host: 'localhost',
  dialect: 'postgres'
});

async function createConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
createConnection();


// class Person extends Model {}

// Person.init({
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   address: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   phone: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   primaryKey: true
//   },
// }, {
//    sequelize,
//    modelName: 'Person'
// });

// console.log(Person === sequelize.models.Person);

// Person.sync()


class Skills extends Model {}
Skills.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
}, {
  sequelize, 
  modelName: 'Skills' 
});

console.log(Skills === sequelize.models.Skills);

Skills.sync()

// class Company extends Model {}
// Company.init({
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   workingPeriod: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   website: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   position: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true
//   },
// }, {
//   sequelize, 
//   modelName: 'Company' 
// });

// console.log(Company === sequelize.models.Company);

// Company.sync()

// class Project extends Model {}
// Project.init({
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   imageSrc: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   link: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize, 
//   modelName: 'Project' 
// });

// console.log(Project === sequelize.models.Project);

// Project.sync()

// class Career extends Model {}
// Career.init({
//   workingPeriod: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   position: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize, 
//   modelName: 'Career' 
// });

// console.log(Career === sequelize.models.Career);

// Career.sync()

// class Person2Skill extends Model {}
// Person2Skill.init({
//   yearSince: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   }
// }, {
//   sequelize, 
//   modelName: 'Person2Skill' 
// });
// console.log(Person2Skill === sequelize.models.Person2Skill);
// Person2Skill.sync()


// class Person2Project extends Model {}
// Person2Project.init({
//   projectRole: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize, 
//   modelName: 'Person2Project' 
// });
// console.log(Person2Project === sequelize.models.Person2Project);
// Person2Project.sync()

// Person.belongsToMany(Skills, { through: 'Person2Skills' });
// Skills.belongsToMany(Person, { through: 'Person2Skills' });

// Person.belongsToMany(Company, { through: 'Person2Companies' });
// Company.belongsToMany(Person, { through: 'Person2Companies' });

// Project.belongsToMany(Company, { through: 'Project2Companies' });
// Company.belongsToMany(Project, { through: 'Project2Companies' });

// Project.belongsToMany(Skills, { through: 'Project2Skills' });
// Skills.belongsToMany(Project, { through: 'Project2Skills' });

// Person.belongsToMany(Project, { through: 'Person2Project' });
// Project.belongsToMany(Person, { through: 'Person2Project' });

// Person.belongsToMany(Company, { through: 'Career' });
// Company.belongsToMany(Person, { through: 'Career' });

// Person.belongsToMany(Skills, { through: 'Person2Skill' });
// Skills.belongsToMany(Person, { through: 'Person2Skill' });
// Person.belongsToMany(Project, { through: 'Person2Project' });
// Project.belongsToMany(Person, { through: 'Person2Project' });

// sequelize.sync({force:true})

// let eagle = new Company;
// eagle.name = "Eagle";
// eagle.workingPeriod = "09/2019-04/2022";
// eagle.website = "eagle@hotmail.com";
// eagle.position = "designer"
// eagle.save();

app.get('/', async (req, res) => {
  let skills =  await Skills.findAll()
  res.send(skills)
}) 














