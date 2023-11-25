#!/usr/bin/env node

const readline = require("readline")
const { displayMenu, listOpenPorts, checkPortAvailability, killProcessesOnPort } = require("./lib/functions")
const CONSTANTS = require("./lib/constants")

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: (line) => {
    const completions = ["list", "check", "kill"]
    const hits = completions.filter((c) => c.startsWith(line))
    return [hits.length ? hits : completions, line]
  },
})

displayMenu()

rl.setPrompt("Enter the command: ")
rl.prompt()

let partialCommand = ""

rl.on("line", (line) => {
  const input = line.trim()
  if (!partialCommand && input === "") {
    displayMenu()
    rl.prompt()
    return
  }
  const [command, ...args] = (partialCommand + input).split(" ")

  switch (command) {
    case "list":
      listOpenPorts()
      break
    case "check":
      args.length === 1
        ? !isNaN(args[0])
          ? checkPortAvailability(args[0])
          : console.log("Enter a valid number")
        : console.log(`${CONSTANTS.colors.red}Invalid input. Usage: check <port>${CONSTANTS.colors.reset}`)
      break
    case "kill":
      args.length === 1
        ? !isNaN(args[0])
          ? killProcessesOnPort(args[0])
          : console.log("Enter a valid number")
        : console.log(`${CONSTANTS.colors.red}Invalid input. Usage: kill <port>${CONSTANTS.colors.reset}`)
      break
    default:
      console.log(`${CONSTANTS.colors.red}Invalid command. Type "check" or "kill" followed by space and port.${CONSTANTS.colors.reset}`)
  }

  rl.prompt()
  partialCommand = ""
}).on("close", () => {
  console.log("Exiting port-ops.")
  process.exit(0)
})
