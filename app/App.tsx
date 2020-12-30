import { useLocation } from 'react-router-dom';
import { Meta, Scripts, Styles, Routes, useGlobalData } from '@remix-run/react';

const noScriptPaths = new Set(['/', '/resume']);

export default function App() {
  let location = useLocation();
  let includeScripts = !noScriptPaths.has(location.pathname);

  let data = useGlobalData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body>
        <Routes />
        {includeScripts && <Scripts />}
        <footer style={{ display: 'none' }}>
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>
      </body>
    </html>
  );
}
