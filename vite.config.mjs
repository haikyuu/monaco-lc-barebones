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
		// only required for loading vsix directly
		plugins: [vsixPlugin()],
		include: [
			'@codingame/monaco-vscode-api',
			'monaco-languageclient/tools',
			'monaco-editor-wrapper/workers/workerLoaders',
			'monaco-editor-wrapper'
		]
	},
	define: {
		rootDirectory: JSON.stringify(__dirname),
	},
	worker: {
		format: 'es'
	},
	server: {
		cors: {
			origin: '*'
		},
		headers: {
			'Cross-Origin-Opener-Policy': 'same-origin',
			'Cross-Origin-Embedder-Policy': 'require-corp',
		}
	},
})
