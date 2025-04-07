

//create DataBase & Collection
use student_management


db.createCollection("student")

//insert data value

db.student.insertMany([
    {_id:101,name:"Akshay Kumar",age:21,department:"HR",course:["HTML","CSS"],grade:"C"},
    {_id:102,name:"Salman",age:22,department:"Computer Science",course:["Python","JavaScript"],grade:"D"},
    {_id:103,name:"Shahid",age:20,department:"IT",course:["Database System","PHP"],grade:"B"},
    {_id:104,name:"John",age:23,department:"HR",course:["Java Script","HTML"],grade:"B"},
    {_id:105,name:"Sunil",age:19,department:"IT",course:["PHP","C++"],grade:"A"}])
    
//Retrieve all students who are in the “Computer Science” department.
db.student.find({department:"Computer Science"})

//Retrieve students who have an age is greate then 21.
db.student.find({age:{$gt:21}})

//Retrieve students who are taking the Database System course 
db.student.find({course:"Database System"})

//Retrieve students with a grade “A”.
db.student.find({grade:"A"})

//Update the age of a student with student_id 104 to 21.
db.student.updateOne({_id:102},{$set:{age:21}})


//Add a new course “Machine Learning” to the courses in the “Computer Science” department. 
db.student.updateOne({department:"Computer Science"},{$push:{course:"Machine Learning"}})


//Delete a student record with student_id 105.
db.student.deleteOne({Student_id:105})


//Delete all student who have a grade lower then “C”.
db.student.deleteMany({Grade:{$gt:"C"}})


 
 
