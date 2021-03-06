/* eslint-env jest */
/* global jasmine, test */
import path from 'path'
import { nextBuild } from 'next-test-utils'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 2
const appDir = path.join(__dirname, '..')

describe('Invalid Page automatic static optimization', () => {
  it('Fails softly with descriptive error', async () => {
    const { stderr } = await nextBuild(appDir, [], { stderr: true })

    expect(stderr).toMatch(
      /automatic static optimization failed: found pages without a React Component as default export in/
    )
    expect(stderr).toMatch(/pages\/invalid/)
    expect(stderr).toMatch(/pages\/also-invalid/)
  })
})
