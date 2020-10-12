import * as fs from 'fs'
import * as path from 'path'
import execa from 'execa'

describe('Simple', () => {
	beforeAll(async done => {
		await execa('vue-docgen-i18n', ['./__mocks__/Button.vue', '--lang', 'FR'], { cwd: __dirname })
		done()
	})

	it('should generate a translation file', () => {
		expect(fs.existsSync(path.join(__dirname, './__mocks__/Button.FR.js'))).toBeTruthy()
	})
})
