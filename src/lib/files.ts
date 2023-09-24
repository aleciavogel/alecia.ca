import fs from 'fs'
import path from 'path'

/**
 * Recursive function to walk a directory and return all files
 * @param dir
 */
export function* walkSync(dir: string): Generator<string> {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name))
    } else {
      yield path.join(dir, file.name)
    }
  }
}
