import { initializeDevCycle } from '@devcycle/nodejs-server-sdk'

const sdkKey = process.env.DEVCYCLE_SERVER_SDK_KEY

if (!sdkKey) {
    throw new Error('DEVCYCLE_SERVER_SDK_KEY is not set. You must provide a server sdk key for DevCycle.')
}

const devCycle = initializeDevCycle(sdkKey, {
    enableClientBootstrapping: true,
})

export const getDevCycle = () => devCycle
