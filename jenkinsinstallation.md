```
java -version
sudo apt install openjdk-17-jre-headless
 java --version
  nano sc.sh
  bash sc.sh
  sudo systemctl status jenkins
  cat /var/lib/jenkins/secrets/initialAdminPassword
      sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

# Update package lists
sudo apt update

# Install fontconfig and OpenJDK 17
sudo apt install -y fontconfig openjdk-17-jre

# Verify Java installation
java -version

Start Jenkins
You can enable the Jenkins service to start at boot with the command:

sudo systemctl enable jenkins
You can start the Jenkins service with the command:

sudo systemctl start jenkins
You can check the status of the Jenkins service using the command:

sudo systemctl status jenkins
