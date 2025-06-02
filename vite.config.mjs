import { defineConfig } from "vite";
import importMetaUrlPlugin from '@codingame/esbuild-import-meta-url-plugin';
import vsixPlugin from '@codingame/monaco-vscode-rollup-vsix-plugin';

export default defineConfig({

	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				importMetaUrlPlugin
			]
		},
		plugins: [vsixPlugin()],
		include: [
			"monaco-languageclient",
			'@codingame/monaco-vscode-api',
			'@codingame/monaco-vscode-configuration-service-override',
			'@codingame/monaco-vscode-cpp-default-extension',
			'@codingame/monaco-vscode-debug-service-override',
			'@codingame/monaco-vscode-editor-api',
			'@codingame/monaco-vscode-editor-service-override',
			'@codingame/monaco-vscode-environment-service-override',
			'@codingame/monaco-vscode-explorer-service-override',
			'@codingame/monaco-vscode-extension-api',
			'@codingame/monaco-vscode-extensions-service-override',
			'@codingame/monaco-vscode-files-service-override',
			'@codingame/monaco-vscode-groovy-default-extension',
			'@codingame/monaco-vscode-java-default-extension',
			'@codingame/monaco-vscode-javascript-default-extension',
			'@codingame/monaco-vscode-json-default-extension',
			'@codingame/monaco-vscode-keybindings-service-override',
			'@codingame/monaco-vscode-language-pack-cs',
			'@codingame/monaco-vscode-language-pack-de',
			'@codingame/monaco-vscode-language-pack-es',
			'@codingame/monaco-vscode-language-pack-fr',
			'@codingame/monaco-vscode-language-pack-it',
			'@codingame/monaco-vscode-language-pack-ja',
			'@codingame/monaco-vscode-language-pack-ko',
			'@codingame/monaco-vscode-language-pack-pl',
			'@codingame/monaco-vscode-language-pack-pt-br',
			'@codingame/monaco-vscode-language-pack-qps-ploc',
			'@codingame/monaco-vscode-language-pack-ru',
			'@codingame/monaco-vscode-language-pack-tr',
			'@codingame/monaco-vscode-language-pack-zh-hans',
			'@codingame/monaco-vscode-language-pack-zh-hant',
			'@codingame/monaco-vscode-languages-service-override',
			'@codingame/monaco-vscode-lifecycle-service-override',
			'@codingame/monaco-vscode-localization-service-override',
			'@codingame/monaco-vscode-log-service-override',
			'@codingame/monaco-vscode-model-service-override',
			'@codingame/monaco-vscode-monarch-service-override',
			'@codingame/monaco-vscode-preferences-service-override',
			'@codingame/monaco-vscode-python-default-extension',
			'@codingame/monaco-vscode-remote-agent-service-override',
			'@codingame/monaco-vscode-search-result-default-extension',
			'@codingame/monaco-vscode-search-service-override',
			'@codingame/monaco-vscode-secret-storage-service-override',
			'@codingame/monaco-vscode-standalone-css-language-features',
			'@codingame/monaco-vscode-standalone-html-language-features',
			'@codingame/monaco-vscode-standalone-json-language-features',
			'@codingame/monaco-vscode-standalone-languages',
			'@codingame/monaco-vscode-standalone-typescript-language-features',
			'@codingame/monaco-vscode-storage-service-override',
			'@codingame/monaco-vscode-testing-service-override',
			'@codingame/monaco-vscode-textmate-service-override',
			'@codingame/monaco-vscode-theme-defaults-default-extension',
			'@codingame/monaco-vscode-theme-service-override',
			'@codingame/monaco-vscode-typescript-basics-default-extension',
			'@codingame/monaco-vscode-typescript-language-features-default-extension',
			'@codingame/monaco-vscode-views-service-override',
			'@codingame/monaco-vscode-workbench-service-override',
			'@testing-library/react',
			'langium',
			'langium/lsp',
			'langium/grammar',
			'vscode/localExtensionHost',
			'vscode-textmate',
			'vscode-oniguruma',
			'vscode-languageclient',
			'vscode-languageserver/browser.js'
		]
	},
	define: {
		rootDirectory: JSON.stringify(__dirname),
	},
	worker: {
		format: 'es'
	},
	server: {
		port: 20001,
		cors: {
			origin: '*'
		},
		headers: {
			'Cross-Origin-Opener-Policy': 'same-origin',
			'Cross-Origin-Embedder-Policy': 'require-corp',
		},
		watch: {
			ignored: [
				'**/.chrome/**/*'
			]
		}
	},
})