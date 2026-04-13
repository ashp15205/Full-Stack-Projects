# PS23 - Soft Delete System
**Problem:** Express API where deleting only sets `isActive: false`. Toggle view between Active and Archived.  
**Stack:** Node.js, Express, MongoDB, Mongoose

## Run
```bash
npm install && node server.js
```

## Key Concept
```js
// Soft delete: update flag, don't remove document
Record.findByIdAndUpdate(id, { isActive: false, deletedAt: new Date() })

// Restore
Record.findByIdAndUpdate(id, { isActive: true, deletedAt: null })

// Filter active / archived
Record.find({ isActive: true })   // active
Record.find({ isActive: false })  // archived
```
