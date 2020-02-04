const fs = require('fs');
const chalk  = require('chalk');

const readNote = function(title){
    const data= loadNotes();

    const dupNotes = data.find(resp=>{
        return resp.title === title;
    });
    if(!dupNotes){
       console.log("No note found with the title");
    } 
    else{
        console.log("Title: ",dupNotes.title);
        console.log("Body: ",dupNotes.body);
    }
}

const listNotes = function(){
    const data= loadNotes();
    if(data.length>0){
        console.log(chalk.red("Your notes:"))
        for(let obj of data){
            console.log(chalk.green(obj.title));
        } 
    }
    
}
const addNotes = (title,body) =>{
    const data= loadNotes();

    const dupNotes = data.find(resp=>{
        return resp.title === title;
    })
    if(!dupNotes){
        const note = {
            title:title,
            body:body
        }
        data.push(note);
        saveNotes(data);
    }   
}

const removeNote = (title) =>{
    const data= loadNotes();
    const remNotes = data.filter(resp=>{
        return resp.title != title;
    });    
    if(data.length != remNotes.length){
        console.log("Removing a note");
        saveNotes(remNotes);  
    } 
    else{
        console.log("No data found");
    }
}

const loadNotes=()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = JSON.parse(dataBuffer.toString());
        return dataJson;
    }
    catch(e){
        return [];
    } 
}

const saveNotes=(arr)=>{
    fs.writeFileSync('notes.json',JSON.stringify(arr));
}

module.exports = {
    readNote:readNote,
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes
}