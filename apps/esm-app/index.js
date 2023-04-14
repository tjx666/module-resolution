import pkg from './node_modules/commonjs/package.json' assert { type: 'json' };
import { resolve } from 'resolve.exports';

console.log(resolve(pkg, 'commonjs/a/b/c'));
