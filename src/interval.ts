import type { Disposable } from "vscode";

export default class Interval implements Disposable {

	private interval: NodeJS.Timer;

	constructor(callback: () => void, interval_ms: number) {
		this.interval = setInterval(callback, interval_ms);
	}

	dispose() {
		clearInterval(this.interval);
	}
}
