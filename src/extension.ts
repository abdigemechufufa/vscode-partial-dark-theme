import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "Partial Dark Theme" is now active!');

	let disposable = vscode.commands.registerCommand('partial-dark-theme.helloWorld', () => {
		vscode.window.showInformationMessage('Hello from Partial Dark Theme! Do you like This Theme? if Yes please give star on Visual studio market place and GitHub. Thanks For Using Partial Dark Theme!');
	});

	const fs = require("fs");
	const getTheme = require("./themes");

	const partial_dark_theme = getTheme({
		theme: "dark",
		name: "Partial Dark Theme",
	});

	fs.mkdir("./themes", { recursive: true })
  	.then(() =>([
    fs.writeFile("./themes/Partial Dark Theme-color-theme.json", JSON.stringify(partial_dark_theme, null, 2)),
  	]))
  	.catch(() => (1));

	context.subscriptions.push(disposable);
}

export function deactivate() {}