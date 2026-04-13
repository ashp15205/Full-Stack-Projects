# PS11 - NoSQL Filter Logic
**Problem:** Filter Insurance Policies from MongoDB based on premium price limit.  
**Stack:** Node.js, MongoDB, Mongoose

## Run
```bash
npm install && node server.js
```

## API Endpoints
| Route | Description |
|-------|-------------|
| `GET /policies` | Get all policies |
| `GET /policies/filter?maxPremium=10000` | Filter by max premium using `$lte` |
| `GET /policies/filter?minPremium=5000&maxPremium=12000` | Range filter |
| `POST /policies` | Add a policy |

## Key Concept
```js
// Mongoose query operators
Policy.find({ premium: { $lte: 10000, $gte: 5000 } })
```
