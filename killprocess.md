1. **Identify the Process Running on Port 8080**:
   - Open your terminal and run the following command to find the process ID (PID) using port 8080:
     ```sh
     sudo lsof -i :8080
     ```
   - This will list the processes using port 8080. Look for the PID in the output.

2. **Stop the Process**:
   - Once you have the PID, you can stop the process using the `kill` command. Replace `<PID>` with the actual PID you found in the previous step:
     ```sh
     sudo kill -9 <PID>
     ```

3. **Verify the Process is Stopped**:
   - Run the following command again to ensure the process is no longer running on port 8080:
     ```sh
     sudo lsof -i :8080
     ```
