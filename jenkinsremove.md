# Uninstalls Jenkins and Java
## nano del_jenkins.sh 
```
#!/bin/bash

# Stop Jenkins service
sudo systemctl stop jenkins

# Remove Jenkins package
sudo apt-get remove --purge -y jenkins

# Remove Jenkins configuration and data
sudo rm -rf /var/lib/jenkins

# Remove Jenkins user (Optional)
sudo deluser jenkins

# Check installed Java versions
java --version

# Remove OpenJDK 17 package
sudo apt remove -y openjdk-17-*

# Remove any other Java versions if necessary
sudo apt remove -y openjdk-11-*

# Remove unused dependencies and clean up
sudo apt autoremove -y && sudo apt clean -y

# Verify Java uninstallation
java --version

echo "Jenkins and Java have been successfully uninstalled."
```
