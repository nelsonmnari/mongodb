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

// Hands- on Three. Courses and mentors with referencing.
db.mentors.insertMany([
    {mentor_id: "M001", name: "Mr Kasongo", speciality: "Wantam"},
    {mentor_id: "M002", name: "Ms. WiggyG", speciality: "Truthful"},
    {mentor_id: "M003", name: "Mr. Dedan", speciality: "AI"}
])

db.courses.insertMany([
    {course_id: "C101", title: "Lyingtology", duration_weeks: 5, mentor_id: "M001"},
    {course_id: "C102", title: "Poet", duration_weeks: 6, mentor_id: "M002"},
    {course_id: "C103", title: "AI for beginners", duration_weeks: 3, mentor_id: "M003" }
])

// Hands-on Four: Connect everything together with enrollments (Analytics).
db.enrollments.insertMany([
    {student_id: "S001", course_id: "C101", status: "in-progress", score: 88},
    {student_id: "S002", course_id: "C102", status: "completed", score: 92},
    {student_id: "S004", course_id: "C101", status: "in-progress", score: 78},
    {student_id: "S005", course_id: "C103", status: "completed", score: 85}

])

// Aggregation: Students per course.
db.enrollments.aggregate([
    { $group: {_id: "$course_id", total_students: { $sum: 1 } } }
])

//Aggregation: Average score per course.
db.enrollments.aggregate([
    { $group: { _id: "$course_id", avg_score: { $avg: "$score" } } }
])

// Aggregation: Students per track.
db.students.aggregate([
    { $group: { _id: "$track", total_students: { $sum: 1 } } }
])

// Aggregation: average age per track.
db.students.aggregate([
    { $group: { _id: "$track", avg_age: { $avg: "$age" } } }
])


// new database.
use salesDB;

db.orders.insertMany([
  { userId: 1, item: "Laptop", price: 1200, quantity: 1, category: "Electronics" },
  { userId: 2, item: "Keyboard", price: 100, quantity: 2, category: "Accessories" },
  { userId: 1, item: "Mouse", price: 25, quantity: 3, category: "Accessories" },
  { userId: 3, item: "Monitor", price: 300, quantity: 1, category: "Electronics" }
]);

//Aggreagtion: Retrieving orders where the price is greater than or equal to 50.
db.orders.aggregate([
  { $match: { price: { $gte: 50 } } }
]);

// Aggregation : Order by user and calculating total spend.
db.orders.aggregate([
  { $group: { _id: "$userId", totalSpent: { $sum: "$price" } } }
]);

// Aggregation: Sorting result by total spend in descending order.
db.orders.aggregate([
  { $group: { _id: "$userId", totalSpent: { $sum: "$price" } } },
  { $sort: { totalSpent: -1 } }
]);

// Aggregation: Calculating total quantity of items sold per category.
db.orders.aggregate([
  { $group: { _id: "$category", totalQuantity: { $sum: "$quantity" } } }
]);

//Aggregation: Filtering electronics items and  calculating the total revenue.
db.orders.aggregate([
  { $match: { category: "Electronics" } },
  { $group: { _id: "$category", totalRevenue: { $sum: { $multiply: [ "$price", "$quantity" ] } } } }
]);