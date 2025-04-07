

//Create a database university and a collection named students. Insert multiple student document with field- name, age, department, and grades.

use university

db.createCollection("students")

 
//A query to display all students who are in the Computer Science department.
db.students.find({department:"Computer Science"})
 
// Write a query to update the grades of a students named Alice by adding a new subject programming with a grades of 93
db.students.updateOne({name:"Alice"},{$set:{"grades.programming":93}})
 

// Write a query to increment the age of all students by 1.
db.students.updateMany({},{$inc:{age:1}})
 
 
// Write a query to delete all students who are 23 year old.
db.students.deleteMany({age:23})
 
// Write a query to create a index on the name field of the students collections.
db.students.createIndex({name:1})
 
// Write an aggregation query to group students by their department and calculate the average age in each department.
db.students.aggregate([{$group:{_id: "$department",averageAge:{$avg:"$age"}}}])
 
//  Write a query to find all students who have scored more than 90 in any subject.
db.students.find({$or:[{"grades.math":{$gt:90}},{"grades.english":{$gt:90}},{"grades.programming":{$gt:90}}]})
 
// Write a query to delete all students who are 23 years old.
db.students.deleteMany({age:{$eq:23}})
 
// How can you retrieve only the name and department fields for all students, excluding the _id field?
db.students.find({},{name:1,department:1,_id:0})
 