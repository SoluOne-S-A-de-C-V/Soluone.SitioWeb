import { spawn } from "node:child_process";
import fs from "node:fs";

const logFile = fs.openSync("/tmp/next_server.log", "a");

const child = spawn(
  process.execPath,
  [
    "./node_modules/next/dist/bin/next",
    "dev",
    "-p",
    "3000",
    "-H",
    "127.0.0.1",
    "--disable-source-maps",
  ],
  {
    stdio: ["ignore", logFile, logFile],
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: "1",
      CI: "1",
      NODE_OPTIONS: "--no-warnings",
    },
    detached: true,
  }
);

child.unref();

console.log("Server spawned with PID:", child.pid);
process.exit(0);
