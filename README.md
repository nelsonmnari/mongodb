# MongoDB CRUD with MongoDB Compass

This shows how to perform basic **CRUD operations** using **MongoDB Compass**

## 1. CREATE

1. Open MongoDB Compass and connect to your database.
2. Navigate to your desired **database** > **collection**.
3. Click **"Insert Document"**.
4. Add your data in JSON format, e.g.:
```json
{
 "name": "John",
  "email": "john@example.com",
  "age": 30
}
Click "Insert" to save.

 2. READ
In your collection, you’ll see a list of documents.

Use the filter bar to query, e.g.:


{ "age": { "$gt": 25 } }
Click any document to view details.

 3. UPDATE
Click the pen icon next to a document.

Edit fields directly or add new ones.

Click "Update" to save changes.

Or use a filter + update combo (via Compass UI or shell):

json
Filter: { "name": "John Doe" }
Update: { "$set": { "age": 31 } }

Done!
You've now seen how to:

Create documents

Read/filter data

Update fields
