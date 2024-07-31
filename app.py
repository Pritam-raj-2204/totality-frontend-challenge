# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['propertyDB']
properties_collection = db['properties']

@app.route('/properties', methods=['GET'])
def get_properties():
    properties = list(properties_collection.find())
    for property in properties:
        property['_id'] = str(property['_id'])  # Convert ObjectId to string
    return jsonify(properties)

@app.route('/properties', methods=['POST'])
def add_property():
    property = request.json
    properties_collection.insert_one(property)
    property['_id'] = str(property['_id'])  # Convert ObjectId to string
    return jsonify(property), 201

if __name__ == '__main__':
    app.run(debug=True)
