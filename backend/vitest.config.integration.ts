import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ['tests/**/*.test.ts'],
        maxConcurrency: 1,
        setupFiles: ['tests/utils/setup.ts'],
        clearMocks: true,
    },
    resolve: {
        alias: {
            note: '/apis/note',
            notebook: '/apis/notebook',
            tag: '/apis/tag',
            user: '/apis/user',
            auth: '/apis/auth',
        }
    }
})
