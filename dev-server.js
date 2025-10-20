#!/usr/bin/env node

/**
 * Development server script for n8n custom node
 *
 * This script:
 * 1. Links the current node package globally
 * 2. Links it to a custom n8n folder
 * 3. Starts n8n with hot reload enabled
 * 4. Runs tsc in watch mode for live rebuilds
 */

const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Configuration
const N8N_USER_FOLDER = path.join(os.homedir(), '.n8n-node-cli');
const CUSTOM_NODES_FOLDER = path.join(N8N_USER_FOLDER, '.n8n', 'custom');
const PACKAGE_JSON = require('./package.json');
const PACKAGE_NAME = PACKAGE_JSON.name;

// Detect package manager
const detectPackageManager = () => {
	return 'npm';

	if (PACKAGE_JSON.packageManager) {
		return PACKAGE_JSON.packageManager.split('@')[0];
	}

	if (fs.existsSync('pnpm-lock.yaml')) return 'pnpm';
	if (fs.existsSync('yarn.lock')) return 'yarn';
	if (fs.existsSync('package-lock.json')) return 'npm';

	return 'npm';
};

const PKG_MANAGER = detectPackageManager();

// Color helpers
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	dim: '\x1b[2m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	cyan: '\x1b[36m',
};

const log = {
	info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
	success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
	error: (msg) => console.error(`${colors.red}✗${colors.reset} ${msg}`),
	warn: (msg) => console.warn(`${colors.yellow}⚠${colors.reset} ${msg}`),
	step: (msg) =>
		console.log(`${colors.cyan}▶${colors.reset} ${colors.bright}${msg}${colors.reset}`),
};

// Ensure directory exists
const ensureDir = (dir) => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
		log.info(`Created directory: ${dir}`);
	}
};

// Run command synchronously
const runSync = (command, args, options = {}) => {
	const cmd = `${command} ${args.join(' ')}`;
	log.info(`Running: ${colors.dim}${cmd}${colors.reset}`);

	try {
		execSync(cmd, {
			stdio: 'inherit',
			...options,
		});
		return true;
	} catch (error) {
		log.error(`Failed to run: ${cmd}`);
		return false;
	}
};

// Run command asynchronously with output streaming
const runAsync = (command, args, options = {}) => {
	const { name = command, color = colors.reset, prefix = true } = options;

	log.info(`Starting: ${colors.dim}${command} ${args.join(' ')}${colors.reset}`);

	const proc = spawn(command, args, {
		stdio: 'pipe',
		shell: true,
		...options,
	});

	const prefixText = prefix ? `${color}[${name}]${colors.reset} ` : '';

	proc.stdout.on('data', (data) => {
		const lines = data.toString().split('\n');
		lines.forEach((line) => {
			if (line.trim()) {
				console.log(`${prefixText}${line}`);
			}
		});
	});

	proc.stderr.on('data', (data) => {
		const lines = data.toString().split('\n');
		lines.forEach((line) => {
			if (line.trim()) {
				console.log(`${prefixText}${line}`);
			}
		});
	});

	proc.on('close', (code) => {
		if (code !== 0) {
			log.error(`${name} exited with code ${code}`);
		}
	});

	return proc;
};

// Check Node.js version compatibility
const checkNodeVersion = () => {
	const nodeVersion = process.version;
	const versionParts = nodeVersion.slice(1).split('.');
	const majorVersion = parseInt(versionParts[0]);
	const minorVersion = parseInt(versionParts[1]);

	log.info(`Node.js Version: ${colors.bright}${nodeVersion}${colors.reset}`);

	if (majorVersion >= 23) {
		log.error(
			`Node.js ${nodeVersion} is not compatible with n8n. Please use Node.js 20.15+ or 22.x`,
		);
		log.info(`\nTo switch Node.js versions, you can use nvm:`);
		log.info(`  ${colors.dim}nvm install 20${colors.reset}`);
		log.info(`  ${colors.dim}nvm use 20${colors.reset}`);
		log.info(`\nOr if you don't have nvm installed:`);
		log.info(`  ${colors.dim}brew install nvm${colors.reset}`);
		return false;
	}

	if (majorVersion === 20 && minorVersion < 15) {
		log.warn(`Node.js ${nodeVersion} may have compatibility issues. Recommended: Node.js 20.15+`);
		log.info(`  ${colors.dim}nvm install 20${colors.reset}`);
		log.info(`  ${colors.dim}nvm use 20${colors.reset}\n`);
		// Continue anyway, but warn
	}

	if (majorVersion < 18) {
		log.error(`Node.js ${nodeVersion} is outdated. n8n requires Node.js 18.x or higher`);
		return false;
	}

	return true;
};

// Main execution
async function main() {
	console.log(
		`\n${colors.bright}${colors.blue}═══════════════════════════════════════${colors.reset}`,
	);
	console.log(`${colors.bright}  n8n Custom Node Development Server${colors.reset}`);
	console.log(
		`${colors.bright}${colors.blue}═══════════════════════════════════════${colors.reset}\n`,
	);

	// Check Node.js version first
	if (!checkNodeVersion()) {
		process.exit(1);
	}

	log.info(`Package: ${colors.bright}${PACKAGE_NAME}${colors.reset}`);
	log.info(`Package Manager: ${colors.bright}${PKG_MANAGER}${colors.reset}`);
	log.info(`N8N User Folder: ${colors.dim}${N8N_USER_FOLDER}${colors.reset}\n`);

	// Step 1: Link package globally
	log.step('Step 1: Linking package globally');
	if (!runSync(PKG_MANAGER, ['link'])) {
		log.error('Failed to link package globally');
		process.exit(1);
	}
	log.success('Package linked globally\n');

	// Step 2: Setup custom nodes folder
	log.step('Step 2: Setting up custom nodes folder');
	ensureDir(CUSTOM_NODES_FOLDER);

	// Remove existing package.json to avoid conflicts
	const pkgJsonPath = path.join(CUSTOM_NODES_FOLDER, 'package.json');
	if (fs.existsSync(pkgJsonPath)) {
		fs.unlinkSync(pkgJsonPath);
		log.info('Removed existing package.json');
	}

	// Link package in custom folder
	if (!runSync(PKG_MANAGER, ['link', PACKAGE_NAME], { cwd: CUSTOM_NODES_FOLDER })) {
		log.error('Failed to link package in custom nodes folder');
		process.exit(1);
	}
	log.success('Package linked to n8n custom nodes folder\n');

	// Step 3: Clear npx cache to avoid version conflicts
	// log.step('Step 3: Clearing npx cache');
	// const npxCachePath = path.join(os.homedir(), '.npm/_npx');
	// if (fs.existsSync(npxCachePath)) {
	// 	try {
	// 		fs.rmSync(npxCachePath, { recursive: true, force: true });
	// 		log.success('Cleared npx cache\n');
	// 	} catch (error) {
	// 		log.warn('Could not clear npx cache, continuing anyway\n');
	// 	}
	// } else {
	// 	log.info('No npx cache to clear\n');
	// }

	// Step 4: Start n8n dev server
	log.step('Step 4: Starting n8n dev server');
	log.warn('First run may take a few minutes while dependencies are installed');
	log.info('n8n output will appear below:\n');
	console.log(`${colors.dim}${'─'.repeat(60)}${colors.reset}\n`);

	// Export environment variables in shell before running n8n
	const n8nCommand = `export N8N_DEV_RELOAD=true && export N8N_RUNNERS_ENABLED=true && export DB_SQLITE_POOL_SIZE=10 && export N8N_USER_FOLDER="${N8N_USER_FOLDER}" && npx -y --prefer-online n8n@latest`;

	const n8nProc = spawn(n8nCommand, [], {
		cwd: N8N_USER_FOLDER,
		stdio: 'inherit', // Pass through all output directly to terminal
		shell: true,
	});

	n8nProc.on('close', (code) => {
		if (code !== 0) {
			log.error(`\nn8n exited with code ${code}`);
			process.exit(1);
		}
	});

	n8nProc.on('error', (error) => {
		log.error(`\nFailed to start n8n: ${error.message}`);
		process.exit(1);
	});

	// Wait a bit for n8n to start initializing
	// await new Promise((resolve) => setTimeout(resolve, 3000));

	// Step 5: Start TypeScript watch mode in background
	// log.info(`\n${colors.dim}${'─'.repeat(60)}${colors.reset}`);
	// log.step('Step 5: Starting TypeScript watch mode in background\n');

	// const tscProc = spawn(`${PKG_MANAGER} exec -- tsc --watch`, [], {
	// 	stdio: ['ignore', 'pipe', 'pipe'], // Ignore stdin, capture stdout/stderr
	// 	shell: true,
	// });

	// Show TypeScript build output with prefix
	// const tscPrefix = `${colors.cyan}[build]${colors.reset} `;

	// tscProc.stdout.on('data', (data) => {
	// 	const lines = data.toString().split('\n');
	// 	lines.forEach((line) => {
	// 		if (line.trim()) {
	// 			console.log(`${tscPrefix}${line}`);
	// 		}
	// 	});
	// });

	// tscProc.stderr.on('data', (data) => {
	// 	const lines = data.toString().split('\n');
	// 	lines.forEach((line) => {
	// 		if (line.trim()) {
	// 			console.log(`${tscPrefix}${line}`);
	// 		}
	// 	});
	// });

	// Handle graceful shutdown
	const cleanup = () => {
		log.info('\nShutting down...');
		n8nProc.kill();
		// tscProc.kill();
		process.exit(0);
	};

	process.on('SIGINT', cleanup);
	process.on('SIGTERM', cleanup);

	// log.success(`\n${colors.bright}${colors.green}✓ Development server is running!${colors.reset}`);
	// log.info(`Press ${colors.bright}Ctrl+C${colors.reset} to stop\n`);
}

// Run the script
main().catch((error) => {
	log.error(`Unexpected error: ${error.message}`);
	process.exit(1);
});
