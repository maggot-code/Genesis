/*
 * @FilePath: \Genesis\vite.config.ts
 * @Author: maggot-code
 * @Date: 2022-07-07 12:51:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-07 13:08:15
 * @Description:
 */
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        target: 'es2015',
        lib: {
            entry: path.resolve(__dirname, 'lib/index.ts'),
            name: 'MyLib',
            // the proper extensions will be added
            fileName: 'my-lib',
        },
    },
});
