// Hands- on One.

use schoolDB;

db.students.insertMany([
    {student_id: "S001" , name: "Joy", age: 21, track: "Web"},
    {student_id: "S002" , name: "Kelvin", age: 19, track: "Python"},
    {student_id: "S003" , name: "Zahara", age: 22, track: "AI"},
    {student_id: "S004" , name: "Brian", age: 23, track: "DevOps"},
    {student_id: "S005" , name: "Lilian", age: 20, track: "MERN"}
])


// Hands- on Two.
/*this will updatte all the documents cause of the empty filter {}*/
db.students.updateMany({}, {
    $set: {
        contact: { email: "user@example.com", phone: "07000245678" },
        emergency_contact: { name: "parent", relation: "mother", phone: "0734567890" }
    }
})

/* this will update only the document with student_id S001 */
db.students.updateOne(
    { student_id: "S001" },
    {
        $set: {
            contact: { email: "joy@gmail.com", phone: "0700123456" },
            emergency_contact: { name: "Joy's Parent", relation: "mother", phone: "0700987654" }
        }
    }
)

// Hands- on Three.
