
### README.md

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

## Steps to Run the Project

1. **Build and Run Docker Container:**
   ```sh
   docker build -t my-static-website .
   docker run -d -p 80:80 my-static-website
   ```

## Tools Used

- **Git**: Version control for code.
- **Docker**: Containerizing the static website.

## About Me

Hello! My name is Dhananjay MP. This is a mini static website project designed to showcase my skills in web development and DevOps. Feel free to explore and provide your feedback. If you have any questions or suggestions, please don't hesitate to reach out.
