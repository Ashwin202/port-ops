# Port-Ops
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/npm.svg)](https://www.npmjs.com/package/port-ops)
![Year](https://img.shields.io/badge/year-2023-blue)


Port-Ops is a Command Line Interface (CLI) tool for managing ports and processes. It allows you to check port availability, list open ports, and kill processes using a specific port.

## Features

- **Check Port Availability:** Determine if a network port is in use.
- **List Open Ports:** Display a list of all open ports and associated processes.
- **Kill Processes on Port:** Terminate processes using a specific network port.

## Installation

```bash

npm install -g port-ops

```

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