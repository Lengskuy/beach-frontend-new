<img width="1902" height="860" alt="image" src="https://github.com/user-attachments/assets/232e7873-8c44-43c5-89c3-13311a069e41" />### ✅ Setup Instructions

1. **Dowload the folder ZIP**
2. **Navigate to the frontend directory**
 -cd beach-frontend-new-main
3. **Install dependencies**
 -npm install
 -npm install axios
4. **Run the frontend app**
 -npm run dev  // Make sure localhost:3000 //

🌊 App Overview
This Beach Condition Monitoring App shows real-time beach data like temperature, wave height, crowd level, and safety flags.
The frontend updates automatically every 5 seconds.
You can filter beaches by region or condition.
Built using Vue 3 + Vuetify for the frontend and FastAPI for the backend.

🏗️ Architecture
🔹 Frontend (Vue 3 + Vuetify)
Shows a live dashboard with beach info.
Updates every 5 seconds using a GET request.
Allows filtering by region or condition.

🔹 Backend (FastAPI)
RESTful API built with FastAPI.
Endpoint: GET /beaches returns all beach data.

🔗 How it works
Frontend fetches data from the backend every 5 seconds.
Backend returns the data fetch to frontend and automatically create a beach card.

🔮 Future Improvements
In the future, the app can be enhanced by integrating live sensors to replace simulated data with real-time readings such as temperature, wave height, and crowd levels. It can also include AI-based crowd prediction by analyzing historical trends to estimate busy periods. A notification system could be added, allowing users to receive alerts via push notifications or SMS about dangerous conditions. Map integration (e.g., Google Maps or Leaflet) can provide visual context for beach locations and statuses. Additionally, the app can be improved to fetch condition data directly from a database, enabling easier integration with real-time data sources
