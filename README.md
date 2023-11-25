# Port-Ops

Port-Ops is a Command Line Interface (CLI) tool for managing ports and processes. It allows you to check port availability, list open ports, and kill processes using a specific port.

## Features

- **Check Port Availability:** Determine if a network port is in use.
- **List Open Ports:** Display a list of all open ports and associated processes.
- **Kill Processes on Port:** Terminate processes using a specific network port.

## Installation

```bash

npm install -g port-ops

```
Certainly! Below is a template for a basic README.md file for your CLI tool project. Feel free to customize it based on your specific project details:

# Port-Ops

Port-Ops is a Command Line Interface (CLI) tool for managing ports and processes. It allows you to check port availability, list open ports, and kill processes using a specific port.

## Features

- **Check Port Availability:** Determine if a network port is in use.

- **List Open Ports:** Display a list of all open ports and associated processes.

- **Kill Processes on Port:** Terminate processes using a specific network port.

## Installation

```bash
npm install -g port-ops
```
The -g flag installs the package globally, making the port-ops command available in your terminal.

## Usage

Run the following command to enter the port-ops terminal:
```bash
port-ops
```
Once inside the port-ops terminal, you can execute the following commands:
### List Open Ports
```bash
list
```
This command displays a list of all open ports and associated processes.
### Check Port Availability
```bash
check <port>
```
### Kill Processes on Port
```bash
kill <port>
```