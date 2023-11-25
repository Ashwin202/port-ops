const { program } = require("commander")
const { execSync } = require("child_process")
const Table = require("cli-table3")
const CONSTANTS = require('./constants')

function listOpenPorts() {
	try {
		const result = execSync("lsof -i -P -n | grep LISTEN").toString()
		console.log(result)
	} catch (error) {
		console.error(`${CONSTANTS.colors.red}Error: ${error.message}${CONSTANTS.colors.reset}`)
	}
}

function displayMenu() {
	const table = new Table({
		head: ["Command", "Description"],
		colWidths: [15, 80],
	})

	table.push(["list", "List all open ports and associated processes."])
	table.push(["check <port>", "Check if a specific port is in use."])
	table.push(["kill <port>", "Kill all processes using a specific port."])

	console.log(table.toString())
}

function checkPortAvailability(port) {
	try {
		execSync(`lsof -i:${port}`, { stdio: "ignore" })
		console.log(`Port ${port} is in use.`)
	} catch (error) {
		console.log(`${CONSTANTS.colors.red}Command Failed: This port may not be in use.${CONSTANTS.colors.reset}`)
	}
}

function killProcessesOnPort(port) {
	try {
		const processes = execSync(`lsof -t -i:${port}`).toString().trim().split("\n")
		processes.forEach((pid) => {
			execSync(`kill -9 ${pid}`)
			console.log(`Killed process ${pid} using port ${port}`)
		})
	} catch (error) {
		console.error(`${CONSTANTS.colors.red}Command Failed: This port may not be in use.${CONSTANTS.colors.reset}`)
	}
}

module.exports = {checkPortAvailability, killProcessesOnPort, listOpenPorts, displayMenu}