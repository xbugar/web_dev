import resetDb from './reset-db'
import {beforeAll} from 'vitest'

beforeAll(async () => {
    await resetDb();

})