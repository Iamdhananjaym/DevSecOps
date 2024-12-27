
# My Static Website

Welcome to my static website project! This project demonstrates a simple static HTML website containerized with Docker. The purpose of this project is to showcase my skills in web development and DevOps.

## Project Overview

This project includes:
- A simple static HTML website with a form for users to enter their name and email.
- CSS for styling the website to make it look professional and modern.
- A thank you page that users are redirected to after submitting the form.
- A custom Nginx configuration to handle POST requests and serve the static files.

## Project Structure

```
my-static-website/
├── Dockerfile
├── index.html
├── styles.css
├── thankyou.html
├── nginx.conf
└── README.md
```

## About Me

Hello! My name is Dhananjay MP. This is a mini static website project designed to showcase my skills in web development and DevOps. Feel free to explore and provide your feedback. If you have any questions or suggestions, please don't hesitate to reach out.


#### Dockerfile

```Dockerfile
# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the static website files to the Nginx HTML directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY thankyou.html /usr/share/nginx/html/

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
```

#### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to My Website</h1>
        <p>Hello! My name is Dhananjay MP. This is a mini static website project designed to showcase my skills in web development and DevOps. Feel free to explore and provide your feedback.</p>
        <p>If you feel safe! Please enter your details below:</p>
        <form action="thankyou.html" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>
```

#### CSS (`styles.css`)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 100%;
}

h1 {
    color: #333;
    margin-bottom: 20px;
}

p {
    color: #555;
    margin-bottom: 20px;
}

label {
    display: block;
    margin: 10px 0 5px;
    color: #555;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #0056b3;
}
```

#### Thank You Page (`thankyou.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Thank You!</h1>
        <p>Thank you for your time. We will get back to you shortly.</p>
        <p>Please use this mini static website for your practice and learning. We hope you find it helpful!</p>
    </div>
</body>
</html>
```

#### Nginx Configuration (`nginx.conf`)

```nginx
server {
    listen 80;
    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ =404;
    }

    location /submit {
        return 200 "Thank you for your submission!";
        add_header Content-Type text/plain;
    }

    error_page 405 =200 $uri;
}
```


## Steps to Run the Project

1. **Build and Run Docker Container:**
   ```
   docker build -t my-static-website .
   docker run -d -p 80:80 my-static-website
   ```

## Tools Used

- **Git**: Version control for code.
- **Docker**: Containerizing the static website.
  
This setup focuses solely on Docker. Let me know if you need any further assistance!
