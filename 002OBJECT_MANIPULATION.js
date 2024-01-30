// 002 OBJECT MANIPULATION

const students = [
    {name:'Alice',score:85},
    {name:'Bob',score:60},
    {name:'Charlie',score:92},
    {name:'David',score:75},
]
   
function getHighScores(studentRecord,Marks){
    let studentNames =[];
    studentRecord.forEach((dataEntry)=>{
        if(dataEntry.score>Marks){
            studentNames.push(dataEntry.name);
        }
        
    });
    return studentNames;
}
console.log(getHighScores(students,70));

// MY output :- PS C:\Users\HP\Javascript> node "c:\Users\HP\Javascript\JS_ASSIGNMENT\Programs.js"
//[ 'Alice', 'Charlie', 'David' ]

