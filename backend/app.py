# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, UserLog
from carbon_api import estimate_vehicle_emissions  # Import the CO2 calculator

app = Flask(__name__)
CORS(app)

# Config for local SQLite DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///eco.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/')
def hello():
    return "EcoTrack Backend is running!"

@app.route('/log', methods=['POST'])
def log_activity():
    try:
        data = request.get_json()

        # Call Carbon Interface API using input data
        carbon_estimate = estimate_vehicle_emissions(
            distance_mi=data['distance_mi'],
            vehicle_model_id=data['vehicle_model_id']
        )

        log = UserLog(
            activity_type=data['activity_type'],
            description=data['description'],
            carbon_kg=carbon_estimate,
            cost_usd=data['cost_usd']
        )
        db.session.add(log)
        db.session.commit()

        return jsonify({"msg": "Activity logged successfully"}), 200

    except Exception as e:
        print("❌ Error occurred:", e)
        return jsonify({"error": str(e)}), 500

@app.route('/logs', methods=['GET'])
def get_logs():
    logs = UserLog.query.all()
    return jsonify([{
        'id': log.id,
        'activity_type': log.activity_type,
        'description': log.description,
        'carbon_kg': log.carbon_kg,
        'cost_usd': log.cost_usd,
        'timestamp': log.timestamp
    } for log in logs]), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
