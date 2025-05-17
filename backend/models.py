# models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
     # example: "transport", "food"
    activity_type = db.Column(db.String(50))
    # example: "Uber to airport"       
    description = db.Column(db.String(200))    
    # estimated CO₂ in kg    
    carbon_kg = db.Column(db.Float)  
    # cost in USD              
    cost_usd = db.Column(db.Float)                
    timestamp = db.Column(db.DateTime, server_default=db.func.now())
