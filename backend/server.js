let express = require('express');
let {Sequelize} = require('Sequelize');
const cors =require('cors');
let app =express();


app.use(cors())


app.use(express.json()); 

let server = app.listen(0, () => {
    console.log('Listening', server.address().port)
  })

var sequelize = new Sequelize('postgres://postgres:peekaboo@localhost:5432/postgres');

// Define databases
let DJ = sequelize.define('djs',{
    name: Sequelize.STRING,
    imgURL: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    description: Sequelize.STRING(1234),
});

DJ.sync()


let lighting = sequelize.define('lighting',{
    name: Sequelize.STRING,
    imgURL: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    description: Sequelize.STRING,
});

lighting.sync()

let sound = sequelize.define('sound',{
    name: Sequelize.STRING,
    imgURL: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
    description: Sequelize.STRING,
});

sound.sync()

let Users =sequelize.define('users',{
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
})


// Define functions for password verification
// The first one verifies the password, is now working properly
app.post('/signIn', async function(request,response){
    console.log("Receiving info from Front End")

    let userName = request.body.userName;
    let passWord = request.body.passWord;

    Users.sync()

    let test = await Users.findOne({
        where:{
            username: userName,
            password: passWord
        }
}).then(function(user){
    if(!user){
        response.send(false);
    }else{
        response.send(true);
    }
})
})

// The second one takes in a new login username/password, 
//is also working properly
app.post('/register', function(request, response){

    console.log("We are getting info from Front End")
    let userName = request.body.userName;
    let email = request.body.email;
    let passWord = request.body.passWord;

    console.log(userName);

    console.log("Adding user")
    // console.log(request.body[0].userName);

    Users.sync()

    Users.findOne({
        where:{
            username: userName
        }
    }).then(function(user){
        if(!user){
            Users.create({
                username: userName,
                email: email,
                password: passWord
            })
        }else{
            console.log("User exists")
        }
    })
   
})


// update quantity available for selling based on user clicks
// Might be changed becuasse of redux
app.put('/deejay', async function(request,response){
    DJ.update({
        quantity: request.body.quantity,
    }, {where:{
            name: request.body.name
    }
})
});
app.put('/lighting', async function(request,response){
    lighting.update({
        quantity: request.body.quantity,
    }, {where:{
            name: request.body.name
    }
})
});
app.put('/sound', async function(request,response){
    sound.update({
        quantity: request.body.quantity,
    }, {where:{
            name: request.body.name
    }
})
});


DJ.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "Pioneer DJ DDJ-FLX6 4-Channel DJ Controller for Serato DJ Pro and rekordbox dj",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "Denon DJ Prime 4 Professional 4-Channel DJ Controller",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "Reloop ELITE 2-Channel DVS Battle Mixer for Serato DJ Pro",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "Roland DJ-202 Serato DJ Controller",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "Pioneer DJ PLX-500 Direct-Drive Professional Turntable",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "VocoPro KJ-7808RV Pro DJ and Karaoke Mixer",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "The Singing Machine Groove XL Karaoke Machine",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
DJ.create({
    name: "Odyssey Flite Zone 1200 Turntable Case",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
DJ.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
DJ.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});

lighting.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});

sound.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    quantity: 10,
    description: "Moving Light"
});

console.log("Running");

app.listen(3002)