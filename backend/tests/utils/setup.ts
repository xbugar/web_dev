import resetDb from './reset-db'
import {beforeAll, beforeEach} from 'vitest'

beforeAll(async () => {
    await resetDb()
})