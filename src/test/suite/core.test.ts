import { expect } from "chai";
import { spy } from "sinon";
import { type LogOutputChannel, type StatusBarItem, ThemeColor } from "vscode";

import Actionable from "../../core";

describe("Actionable", () => {
	it("logs startup", () => {
		const channelStub = createChannelStub();
		new Actionable(channelStub);
		expect(channelStub.info).to.have.been.calledWith("Welcome to Actionable!");
	});

	it("updates the status bar", () => {
		const channelStub = createChannelStub();
		const ext = new Actionable(channelStub);
		const statusStub = createStatusSub();

		ext.update(statusStub);

		expect(statusStub.text).to.equal("$(github-action) Actionable");
		expect(statusStub.backgroundColor).to.be.instanceOf(ThemeColor);
		expect(statusStub.show).to.have.been.calledWith();
		expect(channelStub.info).to.have.been.calledWith("Updating status");
	});
});

const createChannelStub = (overrides: Partial<LogOutputChannel> = {}): LogOutputChannel => ({
	info: spy().named("info"),
	name: "Actionable",
	...overrides,
} as Partial<LogOutputChannel> as LogOutputChannel);

const createStatusSub = (overrides: Partial<StatusBarItem> = {}): StatusBarItem => ({
	hide: spy().named("hide"),
	show: spy().named("show"),
	...overrides,
} as Partial<StatusBarItem> as StatusBarItem);
