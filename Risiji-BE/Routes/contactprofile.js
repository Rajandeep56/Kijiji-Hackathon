const express = require("express");
const app = express.Router();
const fs = require("fs");

const fetchContactInfo = () => {
  const filePath = "./data/user-data.json";

  try {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error reading user data:", error);
    return [];
  }
};

app.get('/:id', (req, res) => {
    const { id } = req.params;
    const contactMatch = fetchContactInfo().find((user) => user.userId == id);

    console.log("Contact Match:", contactMatch);
    console.log("Requested ID:", id);
    console.log("All Users:", fetchContactInfo());

    if (!contactMatch) {
        return res.status(404).json({ error: "User not found. Please check and try again" });
    }

    return res.status(200).json(contactMatch);
    
});
app.patch('/:id/incrementTotalReviews', (req, res) => {
    const { id } = req.params;
    const userData = fetchContactInfo();

    const userIndex = userData.findIndex((user) => user.userId == id);

    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found. Please check and try again" });
    }

    userData[userIndex].reviewSummary.summary.totalReviews += 1;

    fs.writeFileSync('./data/user-data.json', JSON.stringify(userData, null, 2));

    return res.status(200).json({ message: "Total reviews incremented successfully", user: userData[userIndex] });
});


module.exports = app;
