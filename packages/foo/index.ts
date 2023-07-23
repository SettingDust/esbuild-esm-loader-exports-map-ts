export const bar = 2

import {foo} from '@esbuild-exports-map-ts/bar/index.js'
import {exportsMap} from '@esbuild-exports-map-ts/exports-map'

console.log(foo, exportsMap)
