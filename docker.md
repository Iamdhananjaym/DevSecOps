## Docker installation script using the apt repository
```
 #!/bin/bash

sudo apt-get update

sudo apt-get install ca-certificates curl

sudo install -m 0755 -d /etc/apt/keyrings

sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc

sudo chmod a+r /etc/apt/keyrings/docker.asc



# Add the repository to Apt sources:

echo \

  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \

  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \

  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
# Uninstall Docker Engine
```
#!/bin/bash

# Uninstall Docker packages
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras

# Remove Docker data (WARNING: This deletes images, containers, and volumes)
sudo rm -rf /var/lib/docker /var/lib/containerd

# Remove Docker sources and keyrings
sudo rm /etc/apt/sources.list.d/docker.list /etc/apt/keyrings/docker.asc

echo "Docker uninstalled and associated data removed."
```
### How to Use:
    
    1. Save the script as a file, for example, **uninstall_docker.sh**
    2. Make the script executable: **chmod +x uninstall_docker.sh**
    3. Run the script with caution: **./uninstall_docker.sh**
