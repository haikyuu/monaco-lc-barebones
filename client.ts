/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2024 TypeFox and others.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as monaco from '@codingame/monaco-vscode-editor-api';
// load syntax highlighting for common language like python
import '@codingame/monaco-vscode-standalone-languages';
import { initServices } from 'monaco-languageclient/vscode/services';
import { LogLevel } from '@codingame/monaco-vscode-api';
import { ConsoleLogger } from 'monaco-languageclient/tools';
import { configureDefaultWorkerFactory } from 'monaco-editor-wrapper/workers/workerLoaders';
import { LanguageClientWrapper, type LanguageClientConfig } from 'monaco-editor-wrapper';

export const runClient = async () => {
    const logger = new ConsoleLogger(LogLevel.Debug);
    const htmlContainer = document.getElementById('monaco-editor-root')!;
    await initServices({});

    configureDefaultWorkerFactory(logger);

    // create monaco editor
    monaco.editor.create(htmlContainer, {
        value: `def print_hello():

    x=5
    print("Hello World!")

print_hello()`,
        language: 'python',
        automaticLayout: true,
        wordBasedSuggestions: 'off'
    });

    const languageClientConfig: LanguageClientConfig = {
        clientOptions: {
            documentSelector: ['py']
        },
        connection: {
            options: {
                $type: 'WebSocketUrl',
                url: 'ws://localhost:30000/sampleServer'
            }
        }
    };
    const languageClientWrapper = new LanguageClientWrapper({
        languageClientConfig,
        logger
    });

    await languageClientWrapper.start();
};
