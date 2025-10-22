const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// USDA API Base URL
const USDA_API_BASE = 'https://api.nal.usda.gov/fdc/v1';
const API_KEY = process.env.USDA_API_KEY || 'DEMO_KEY';

// Example endpoint: Search for foods
app.get('/api/foods/search', async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    const response = await axios.get(`${USDA_API_BASE}/foods/search`, {
      params: {
        query,
        dataType: 'Branded', // Limit to branded foods for simplicity
        pageSize: 25,
        api_key: API_KEY
      }
    });

    // Simplify the response to include only essential data
    const foods = response.data.foods.map(food => ({
      fdcId: food.fdcId,
      description: food.description,
      brandOwner: food.brandOwner,
      ingredients: food.ingredients,
      servingSize: food.servingSize,
      servingSizeUnit: food.servingSizeUnit,
      nutrients: food.foodNutrients?.map(nutrient => ({
        name: nutrient.nutrientName,
        amount: nutrient.value,
        unit: nutrient.unitName
      }))
    }));

    res.json({
      foods,
      totalResults: response.data.totalHits
    });
  } catch (error) {
    console.error('Error fetching from USDA API:', error.message);
    res.status(500).json({
      error: 'Failed to fetch food data',
      message: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Nutrition Tool API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
