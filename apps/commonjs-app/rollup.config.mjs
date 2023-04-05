import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'index.js',
    output: {
        dir: 'dist',
        format: 'es',
    },
    plugins: [nodeResolve(), commonjs({})],
};
