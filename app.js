const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');



// const command = process.argv[2];

// console.log(process.argv);
// if(command=="add"){
//     console.log("adding notes");
// }
// else if(command =="remove"){
//     console.log("removing notes");
// }


//customize yargs version
//yargs.version('1.1.0');

//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       notes.addNotes(argv.title,argv.body);
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove the note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){        
        notes.removeNote(argv.title);
    }
})

//Create list command
yargs.command({
    command:'list',
    describe:'List all the notes',
    handler(){
        notes.listNotes();
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})


//console.log(yargs.argv);
//or
yargs.parse();