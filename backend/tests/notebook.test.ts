import { describe, expect, it } from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";

describe("/notebook", async () => {
    describe("happy path", async () => {
        it(`should do nothing`, async () => {})
    })
})