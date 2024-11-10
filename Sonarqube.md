# What is SonarQube?
## SonarQube⁠ is the leading tool for continuously inspecting the Code Quality and Security of your codebases, and guiding development teams during Code Reviews. Covering 27 programming languages, while pairing-up with your existing software pipeline, SonarQube provides clear remediation guidance for developers to understand and fix issues, and for teams overall to deliver better and safer software. With over 225,000 deployments helping small development teams as well as global organizations, SonarQube provides the means for all teams and companies around the world to own and impact their Code Quality and Security.


# Configure a Sonar Server locally

``` apt install unzip
adduser sonarqube
wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-9.4.0.54424.zip
unzip *
chmod -R 755 /home/sonarqube/sonarqube-9.4.0.54424
chown -R sonarqube:sonarqube /home/sonarqube/sonarqube-9.4.0.54424
cd sonarqube-9.4.0.54424/bin/linux-x86-64/
./sonar.sh start
```

## Install Sonarqube using docker image

```
docker pull sonarqube
```
