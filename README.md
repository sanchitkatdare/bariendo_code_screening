# Nutrition Tool - Code Screening Exercise

Welcome! This is a collaborative coding exercise where we'll work together to enhance a basic nutrition tool.

**Before the session:** We've added you as a collaborator to this private repository. Please clone it and set it up on your machine before our pairing session. This should take about 10-15 minutes.

## Overview

This is a simple React + Node.js application that allows users to search for foods and view their nutritional information using the USDA FoodData Central database. The basic search functionality is already implemented, and we'll work together to add new features during our pairing session.

## What's Already Built

✅ **Backend (Node.js/Express)**
- Basic Express server with CORS enabled
- `/api/foods/search` endpoint that queries the USDA API
- Simplified response format with essential nutritional data
- Error handling and input validation

✅ **Frontend (React)**
- Home page with navigation
- Search page with search bar
- Food cards displaying:
  - Food name and brand
  - Serving size
  - Key nutrients (energy, protein, fat, carbs)
  - Expandable view for all nutrients and ingredients
- Basic routing with React Router
- Responsive layout with clean styling

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone this repository**

   You should have received an invitation to collaborate on this repository. Once accepted:
   ```bash
   git clone [repository-url-provided-by-bariendo]
   cd bariendo_code_screening
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```
   Or manually:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Set up environment variables (Optional)**
   ```bash
   cd backend
   cp .env.example .env
   ```
   The app will work with the default `DEMO_KEY`, but you can get a free API key at [USDA FoodData Central](https://fdc.nal.usda.gov/api-key-signup.html) for higher rate limits.

### Running the Application

You'll need two terminal windows:

**Terminal 1 - Backend:**
```bash
npm run start-backend
# Server will run on http://localhost:3001
```

**Terminal 2 - Frontend:**
```bash
npm run start-frontend
# App will open at http://localhost:3000
```

The frontend is configured to proxy API requests to the backend automatically.

## Project Structure

```
bariendo_code_screening/
├── backend/
│   ├── server.js           # Express server with USDA API integration
│   ├── package.json
│   └── .env.example        # Environment variables template
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   │   ├── SearchBar.js
│   │   │   ├── FoodList.js
│   │   │   └── FoodCard.js
│   │   ├── pages/          # Page-level components
│   │   │   ├── HomePage.js
│   │   │   └── SearchPage.js
│   │   ├── App.js          # Main app with routing
│   │   └── index.js        # Entry point
│   └── package.json
└── README.md
```

## Pairing Session - Feature Ideas

During our session, we'll work together to implement one or more features. Here are some ideas based on common real-world requirements:

### 🌟 Favorites/Saved Foods
**Product Context:** Users (especially dietitians) want to quickly access frequently searched foods

**Implementation ideas:**
- Add a "favorite" button to food cards
- Store favorites in localStorage or state
- Create a favorites page to view saved foods
- Consider: Should favorites persist across sessions?

### 📊 Meal Planning
**Product Context:** Users want to combine foods into meals and see total nutritional information

**Implementation ideas:**
- Add foods to a meal plan
- Display aggregated nutrition (total calories, protein, etc.)
- Allow multiple meals per day (breakfast, lunch, dinner)
- Consider: How should serving sizes be handled?

### 🎨 Nutritional Visualizations
**Product Context:** Visual representations help users understand nutritional balance

**Implementation ideas:**
- Pie chart for macronutrient distribution
- Bar charts comparing foods
- Visual indicators for daily value percentages
- Consider: Which library (Chart.js, Recharts, D3)?

### 🔍 Advanced Search & Filters
**Product Context:** Users need to narrow down results or find foods with specific properties

**Implementation ideas:**
- Filter by nutritional ranges (e.g., "high protein")
- Sort results by different criteria
- Search within results
- Category filters (breakfast foods, snacks, etc.)
- Consider: Should filtering happen client-side or server-side?

### 📱 Better Mobile Experience
**Product Context:** Many users access nutrition tools on mobile devices

**Implementation ideas:**
- Improve responsive layouts
- Add mobile-friendly interactions
- Consider simplified views for small screens
- Touch-optimized UI elements

### 💡 Nutritional Insights
**Product Context:** Users want to understand what the numbers mean

**Implementation ideas:**
- Daily value percentages
- "High in X" or "Good source of Y" labels
- Comparisons to recommended daily intake
- Consider: Different users have different needs (athletes, dieters, etc.)

### 🤖 AI Nutritional Assistant (Advanced)
**Product Context:** Users have questions about nutrition and dietary choices

**Implementation ideas:**
- Integrate Anthropic API for Q&A
- Context-aware responses based on searched foods
- Dietary advice or recipe suggestions
- Consider: How to present AI-generated content responsibly?

## What We're Looking For

During the pairing session, we'll be interested in seeing:

- **Product thinking**: How do you approach ambiguous requirements? What questions do you ask?
- **Code structure**: How do you organize new features? Component architecture decisions?
- **Communication**: How do you explain your thought process? How do you handle feedback?
- **Problem-solving**: How do you break down features? How do you handle edge cases?

Remember: We're not looking for perfection or completion. We want to see how you work, think, and collaborate!

## USDA API Reference

**Search Endpoint:**
```
GET https://api.nal.usda.gov/fdc/v1/foods/search
```

**Key Parameters:**
- `query`: Search term
- `dataType`: Array of data types (e.g., `["Branded"]`)
- `pageSize`: Number of results (max 200)
- `api_key`: Your API key or "DEMO_KEY"

**Documentation:** https://fdc.nal.usda.gov/api-guide.html

## Questions Before the Session?

Feel free to ask any questions! We want you to feel comfortable and ready to dive in.

Looking forward to working with you!
