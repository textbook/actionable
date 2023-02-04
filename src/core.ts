import { LogOutputChannel, StatusBarItem, ThemeColor } from "vscode";

export default class Actionable {
	constructor(
		private logger: LogOutputChannel
	) {
		this.logger.info(`Welcome to ${this.logger.name}!`);
	}

	public update(status: StatusBarItem) {
		this.logger.info("Updating status");
		status.text = `$(github) ${this.logger.name}`;
		status.backgroundColor = new ThemeColor("statusBarItem.errorBackground");
		status.show();
	}
}
