import type { Loader } from '@remix-run/data';
import { useLocation, Outlet } from 'react-router-dom';
import { Meta, Scripts, Links, useRouteData, useMatches } from '@remix-run/react';

export let loader: Loader = async () => {
  return {
    date: new Date(),
  };
};

const noScriptPaths = new Set(['/', '/resume']);

export default function App() {
  let location = useLocation();
  let matches = useMatches();

  // If at least one route wants to hydrate, this will return true
  let includeScripts = matches.some((match) => match.handle?.hydrate);

  let data = useRouteData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        {includeScripts && <Scripts />}
        <footer style={{ display: 'none' }}>
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Alas, you've found an unexpected error! Woe is me. And you apparently, for having to
            deal with my code.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
