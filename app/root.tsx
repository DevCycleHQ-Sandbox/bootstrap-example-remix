import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import { DevCycleProvider } from '@devcycle/react-client-sdk'
import { LoaderFunctionArgs, json } from '@remix-run/node'
import { getDevCycle } from '../lib/devcycle'
import { v4 as uuidv4 } from 'uuid';

export async function loader({
                                 request,
                             }: LoaderFunctionArgs) {
    console.log("Executing root loader and obtaining DevCycle bootstrapping config")

    const user = {
        // generating a random id for illustrative purposes. In a real app this should be based on the identity of the
        // user making the request.
        user_id: uuidv4(),
    }
    const userAgent = request.headers.get('user-agent') ?? '';
    const devcycleNodeClient = getDevCycle();
    const config = await devcycleNodeClient.getClientBootstrapConfig(user, userAgent);
    return json({user, config});
}


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
    const data = useLoaderData<typeof loader>();

    return <DevCycleProvider config={{
        sdkKey: data.config.clientSDKKey,
        user: data.user,
        options: {
            bootstrapConfig: data.config
        }
    }}>
        <Outlet />
    </DevCycleProvider>;
}
