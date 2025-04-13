export default {
    entryPoints: ['src/app.js'],
    bundle: true,
    outfile: 'public/dist/app.js',
    platform: 'browser',
    target: 'es2015',
    define: {
        'global': 'window'
    },
    metafile: false
};