import * as vscode from "vscode";

import Actionable from "./core";
import Interval from "./interval";

export function activate(context: vscode.ExtensionContext) {
	const logger = vscode.window.createOutputChannel("Actionable", { log: true });
	const ext = new Actionable(logger);
	const status = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
	ext.update(status);
	const interval = new Interval(() => {
		ext.update(status);
	}, 30_000);
	context.subscriptions.push(interval, logger, status);
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}
