 # Shell script to install Jenkins and Java on Linux system

## nana install_jenkins_java.sh
 ```
 #!/bin/bash

# Update package lists
sudo apt update

# Install fontconfig and OpenJDK 17
sudo apt install -y fontconfig openjdk-17-jre

# Verify Java installation
java -version

# Add Jenkins repository and key
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

# Update package lists again
sudo apt update

# Install Jenkins
sudo apt install -y jenkins

# Enable Jenkins service to start at boot
sudo systemctl enable jenkins

# Start Jenkins service
sudo systemctl start jenkins

# Check the status of Jenkins service
sudo systemctl status jenkins

# Retrieve the initial admin password for Jenkins
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

echo "Jenkins and Java have been successfully installed."
```
 
