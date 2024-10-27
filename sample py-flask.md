#!/bin/bash
# Update the package repository
sudo apt-get update -y

# Install Docker
sudo apt-get install -y docker.io

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Create project directory
mkdir -p /home/ubuntu/docker-project/app/templates

# Navigate to project directory
cd /home/ubuntu/docker-project

# Create app.py
cat <<EOF > /home/ubuntu/docker-project/app/app.py
from flask import Flask, render_template, request, redirect
import mysql.connector

app = Flask(__name__)

# Database connection
def get_db_connection():
    return mysql.connector.connect(
        host='db',
        user='root',
        password='example',
        database='testdb'
    )

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    username = request.form['username']
    message = request.form['message']
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO messages (username, message) VALUES (%s, %s)', (username, message))
    conn.commit()
    cursor.close()
    conn.close()
    return redirect('/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
EOF

# Create index.html
cat <<EOF > /home/ubuntu/docker-project/app/templates/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Front-End Project</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
        form {
            display: flex;
            flex-direction: column;
        }
        input, textarea {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            padding: 10px;
            background-color: #04AA6D;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #039f5c;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Basic Front-End Project</h1>
        <p>This is a simple front-end example to demonstrate Docker containerization.</p>
        <form action="/submit" method="post">
            <input type="text" name="username" placeholder="Your Name" required>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>
EOF

# Create requirements.txt
cat <<EOF > /home/ubuntu/docker-project/requirements.txt
Flask==2.0.3
mysql-connector-python==8.0.27
werkzeug==2.0.3
EOF

# Create Dockerfile
cat <<EOF > /home/ubuntu/docker-project/Dockerfile
# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run app.py when the container launches
CMD ["python", "app/app.py"]
EOF

# Build the Docker image
sudo docker build -t my-flask-app /home/ubuntu/docker-project

# Run MySQL container
sudo docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=example -e MYSQL_DATABASE=testdb -d mysql:latest

# Run Flask application container
sudo docker run -d -p 5000:5000 --name flask-app --link mysql-db:db my-flask-app
