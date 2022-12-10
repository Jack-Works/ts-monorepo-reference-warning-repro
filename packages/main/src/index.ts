// Error: File 'packages/lib/src/index.ts' is not under 'rootDir' 'packages/main/src'. 'rootDir' is expected to contain all source files.
// This is good.
import { a as good } from '../../lib/src/index.js'

// This is bad.
import { a as bad } from '@workspace/lib'
console.log(bad, good)
