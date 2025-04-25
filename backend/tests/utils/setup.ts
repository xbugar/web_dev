import resetDb from './reset-db'
import {beforeAll, beforeEach} from 'vitest'
import {prisma} from "./prisma";
import {defaultPP} from "../../apis/utils";

beforeAll(async () => {
    await resetDb()

})