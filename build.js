import esbuild from 'esbuild';
import config from './esbuild.config.js';

// ビルドを実行
const build = async () => {
    try {
        await esbuild.build(config);
        console.log('Build completed successfully');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
};

// ウォッチモードでビルドを実行
const watch = async () => {
    const context = await esbuild.context(config);
    await context.watch();
    console.log('Watching for changes...');
};

// コマンドライン引数に応じてビルドモードを選択
const mode = process.argv[2];
if (mode === 'watch') {
    watch();
} else {
    build();
}