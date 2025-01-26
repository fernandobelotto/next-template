const net = require("net");
const { spawn } = require("child_process");

function isPortInUse(port) {
	return new Promise((resolve) => {
		const server = net.createServer();

		server.once("error", (err) => {
			if (err.code === "EADDRINUSE") {
				resolve(true);
			}
		});

		server.once("listening", () => {
			server.close();
			resolve(false);
		});

		server.listen(port);
	});
}

async function runCommand(command, args) {
	return new Promise((resolve, reject) => {
		const process = spawn(command, args, {
			stdio: "inherit",
			shell: true,
		});

		process.on("exit", (code) => {
			if (code === 0) {
				resolve();
			} else {
				reject(new Error(`Command failed with exit code ${code}`));
			}
		});
	});
}

async function main() {
	try {
		const portInUse = await isPortInUse(3000);
		let serverProcess;

		if (!portInUse) {
			console.log("Building Next.js application...");
			await runCommand("npm", ["run", "build"]);

			console.log("Starting Next.js server...");
			serverProcess = spawn("npm", ["run", "start"], {
				stdio: "inherit",
				shell: true,
			});

			// Wait for server to be ready
			await new Promise((resolve) => setTimeout(resolve, 5000));
		} else {
			console.log("Server already running on port 3000");
		}

		console.log("Running Cypress tests...");
		const cypressProcess = spawn("npm", ["run", "cypress:run:headless"], {
			stdio: "inherit",
			shell: true,
		});

		cypressProcess.on("exit", (code) => {
			if (serverProcess) {
				serverProcess.kill();
			}
			process.exit(code);
		});
	} catch (error) {
		console.error("Error:", error);
		process.exit(1);
	}
}

main();
