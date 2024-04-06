from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = []


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json() 

    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    user = {'username': username, 'password': password, 'email': email}

    if any(user['username'] == username for user in users):
        return jsonify({'message': 'Username already exists'}), 400

    users.append(user)

    return jsonify({'message': 'Signup successful'}), 200

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get('username')
    password = data.get('password')

    for user in users:
        if user['username'] == username and user['password'] == password:
            return jsonify({'message': 'Login successful'}), 200

    return jsonify({'message': 'Invalid username or password'}), 401




if __name__ == '__main__':
    app.run(debug=True)