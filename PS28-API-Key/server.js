const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// In-memory store for demo (no DB needed to understand the middleware concept)
const VALID_API_KEY = "MY_SECRET_KEY_2026";
const sensitiveData = [
  {
    id: 1,
    name: "Admin User",
    secretInfo: "Revenue: ₹50,00,000",
  },
  {
    id: 2,
    name: "Finance Team",
    secretInfo: "Budget Allocation: ₹10,00,000",
  },
];

// API Key Middleware (PS28 core requirement)
function apiKeyMiddleware(req, res, next) {
  const key = req.headers["x-api-key"];
  if (!key)
    return res
      .status(401)
      .json({
        error: "API key missing. Add x-api-key header.",
      });
  if (key !== VALID_API_KEY)
    return res
      .status(403)
      .json({ error: "Invalid API key." });
  next(); // Key is valid — proceed to route handler
}

// Public route — no auth needed
app.get("/", (req, res) =>
  res.json({
    msg: "Public endpoint. Use x-api-key header to access /secure-data",
  }),
);

// Protected route — requires valid API key in header
app.get("/secure-data", apiKeyMiddleware, (req, res) =>
  res.json({ success: true, data: sensitiveData }),
);

app.listen(3004, () =>
  console.log(
    "PS28 Server on http://localhost:3004\nUse API key: " +
      VALID_API_KEY,
  ),
);
