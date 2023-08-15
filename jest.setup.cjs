require('@testing-library/jest-dom')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { server } = require('./src/mocks/server')

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
