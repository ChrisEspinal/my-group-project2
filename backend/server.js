let express = require('express');
let {Sequelize} = require('Sequelize');
const cors =require('cors');
let app =express();


app.use(cors())


app.use(express.json()); 

let server = app.listen(0, () => {
    console.log('Listening', server.address().port)
  })

var sequelize = new Sequelize('postgres://postgres:Pg3600@localhost:3001/postgres');

// Define databases
let DJ = sequelize.define('djs',{
    name: Sequelize.STRING,
    imgURL: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    hotItem: Sequelize.BOOLEAN,
    sale: Sequelize.BOOLEAN,
    quantity: Sequelize.INTEGER,
    description: Sequelize.STRING(1234),
});

DJ.sync()


let lighting = sequelize.define('lighting',{
    name: Sequelize.STRING,
    imgURL: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    hotItem: Sequelize.BOOLEAN,
    sale: Sequelize.BOOLEAN,
    quantity: Sequelize.INTEGER,
    description: Sequelize.STRING,
});

lighting.sync()

let sound = sequelize.define('sound',{
    name: Sequelize.STRING,
    imgURL: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    hotItem: Sequelize.BOOLEAN,
    sale: Sequelize.BOOLEAN,
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

app.get('/shop', async function(request, response){

    let need = await DJ.findAll();
    let need2 = await lighting.findAll();
    let need3 =await sound.findAll();

    response.json({need,need2,need3});
})


// update quantity available for selling based on user 'purchases'
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

let val = true;

if(val === false){

DJ.create({
    name: "American DJ Focus Spot 5Z LED Light",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "Pioneer DJ DDJ-FLX6 4-Channel DJ Controller for Serato DJ Pro and rekordbox dj",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "Denon DJ Prime 4 Professional 4-Channel DJ Controller",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "Reloop ELITE 2-Channel DVS Battle Mixer for Serato DJ Pro",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "Roland DJ-202 Serato DJ Controller",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "Pioneer DJ PLX-500 Direct-Drive Professional Turntable",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "VocoPro KJ-7808RV Pro DJ and Karaoke Mixer",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
})
DJ.create({
    name: "The Singing Machine Groove XL Karaoke Machine",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
DJ.create({
    name: "Odyssey Flite Zone 1200 Turntable Case",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
DJ.create({
    name: 'Odyssey KLP2BLK Stackable Record Utility Case for 12" Vinyl Records and LPs',
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
DJ.create({
    name: "Odyssey FZGS12CDJW Glide Style DJ Coffin Case",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});

// create lighting tuples

lighting.create({
    name: "Blizzard LOOP Moving-head RGBW LED Linear Multi-beam Effect with LED Rings",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "CHAUVET Professional Rogue R3 Spot Moving-Head LED Spotlight",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "Blizzard TOURnado WiMAX 7 RGBAW+L+UV LED Outdoor-Rated PAR Wash Light",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "CHAUVET Professional Ovation P-56VW Variable White LED PAR Light",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "VEI PULSAR XENON STROBE",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "CHAUVET DJ Shocker 2 Warm White COB LED Dual Zone Blinder Light",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "American DJ VF400 400W Fog Machine",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "CHAUVET DJ Hurricane Bubble Haze Machine",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "ETC CS20 20-Fader ColorSource Lighting Console (40-Channel/Device)",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
lighting.create({
    name: "CHAUVET DJ Data Stream 4 DMX-512 Optical Splitter",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});


// beginning of sound tuples

sound.create({
    name: "Shure QLXD124/85 Digital Wireless Combo Microphone System (G50: 470 to 534 MHz)",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "VocoPro UDH-CHOIR-8 Handheld Wireless Microphone Package with Carry Bag Kit (900 MHz Band)",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: 'Electro-Voice ZLX-12BT 12" 2-Way 1000W Powered Loudspeaker Kit with Two Speakers, Stands, Covers, and Cables',
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: 'JBL EON615 Two-Way 15" 1000W Powered Portable PA Speaker with Bluetooth Control',
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "Allen & Heath SQ-5 48-Channel / 36-Bus Digital Mixer with 16+1 Motorized Faders",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "Yamaha MG12XU 12-Input Mixer with Built-In FX and 2-In/2-Out USB Interface",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "MOTU M4 Desktop 4x4 USB Type-C Audio/MIDI Interface",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "Shure SM58-LC Vocal Microphone",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "Shure SM57-LC Handheld Dynamic Microphone Stage Kit",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
sound.create({
    name: "Audio-Technica ATH-M50x Closed-Back Monitor Headphones (Black)",
    imgURL: null,
    price: 0.0,
    quantity: 10,
    description: "Moving Light"
});
}

console.log("Running");

app.listen(3002)