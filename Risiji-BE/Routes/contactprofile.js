const express = require("express");
const app = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


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

  const dummyReview = {
      categoryName: "Electronics",
      dateCreated: Math.floor(Date.now() / 1000),
      direction: "B2S",
      feedbackOptions: [],
      id: uuidv4(), 
      reviewedBy: {
          userName: "Risiji User",
          id: uuidv4(), 
          userImag: null
      },
      score: 5 
  };

  userData[userIndex].reviewContent.push(dummyReview);

  const allScores = userData[userIndex].reviewContent.map(review => review.score);
  const totalReviews = userData[userIndex].reviewSummary.summary.totalReviews;
  console.log(totalReviews, totalReviews)
  const newAverageScore = allScores.reduce((sum, score) => sum + score, 0) / totalReviews;

  userData[userIndex].reviewSummary.summary.sumScore = parseFloat(newAverageScore.toFixed(1));

  const newCredits = calculateCredits(newAverageScore);
  userData[userIndex].credits = newCredits;

  fs.writeFileSync('./data/user-data.json', JSON.stringify(userData, null, 2));

  return res.status(200).json({ message: "Total reviews incremented successfully", user: userData[userIndex] });
});

function calculateCredits(averageScore) {
  if (averageScore >= 3.0 && averageScore < 3.5) {
      return 10;
  } else if (averageScore >= 3.5 && averageScore < 4.8) {
      return 30;
  } else if (averageScore >= 4.8 && averageScore <=5.0) {
      return 50;
  } else {
      return 0; 
  }
}


module.exports = app;
