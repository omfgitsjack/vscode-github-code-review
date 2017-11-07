'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {Memento} from 'vscode'

const commandPrefix = 'extension'

const getConfiguration = () => vscode.workspace.getConfiguration("githubCodeReview")

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "github-code-review" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    }))

    context.subscriptions.push(vscode.commands.registerCommand("extension.setGithubToken", async () => {
        vscode.window.showInformationMessage('set your gh token!');       
        const result = await vscode.window.showInputBox({
            placeHolder: 'Insert your github token here',
        })

        if (result) {
            const config = getConfiguration()
            const key = "githubToken"
            const existingToken = config.get(key)
            await config.update(key, result)
            const updatedKey = config.get(key)
        }
    }))
}

// this method is called when your extension is deactivated
export function deactivate() {
}