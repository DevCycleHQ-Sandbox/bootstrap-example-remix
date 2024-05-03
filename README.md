# DevCycle Bootstrapping with Remix Example

This is an example of how to use DevCycle with Remix. It uses a combination of the DevCycle Node.js SDK on the server and the DevCycle React SDK
on the client. The Node SDK retrieves a configuration to be used for client-side bootstrapping. 

To see the bootstrapping process, check out [root.tsx](./app/root.tsx).

For more information on how to use bootstrapping, see our guide in the [DevCycle Docs](https://docs.devcycle.com/sdk/server-side-sdks/node/node-bootstrapping).

## Setup
Install the dependencies using npm or yarn
`npm install`
`yarn`

Set the environment variable `DEVCYCLE_SERVER_SDK_KEY` to your DevCycle Server SDK Key.

## Development

Run the Vite dev server:

```shellscript
yarn dev
```
