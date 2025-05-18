# EcoTrack

EcoTrack is a full-stack web application that helps users track their carbon emissions from vehicle trips. The app provides instant feedback on the environmental and financial impact of trips and encourages more sustainable habits.

## Features

- Log vehicle trips with distance, cost, and car model  
- Automatically estimates CO₂ emissions using the Carbon Interface API  
- View dynamic bar charts to visualize your carbon footprint over time  
- Optionally view detailed logs for each trip  
- Minimal, nature-inspired design with calming greens  

## Tech Stack

| Frontend     | Backend     | Tools                |
|--------------|-------------|----------------------|
| React        | Flask       | SQLite               |
| Chart.js     | Flask-CORS  | Carbon Interface API |
| CSS Flexbox  | SQLAlchemy  | Node.js              |


## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/eco-track.git
cd eco-track
```
### 2. Backend setup (Flask + SQLite)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```
Make sure to create a .env file or directly update carbon_api.py with your Carbon Interface API key.

### 3. Frontend setup (React)
```bash
cd frontend
npm install
npm start
```
Your frontend will run on:
http://localhost:3000
Your backend will run on:
http://localhost:5000

### 3. API Key
This project uses the Carbon Interface API. To obtain a free API key:

1. Sign up at Carbon Interface
2. Copy your API key (starts with Bearer )
3. Insert it into your carbon_api.py file like this:

```python
headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}
```

### To-Do / Future Features
- Add user authentication
- Support trip types beyond vehicles (e.g., flights, rail)
- Track carbon offset actions (e.g., tree planting)
- Add a dashboard with lifetime statistics



