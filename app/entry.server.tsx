import ReactDOMServer from 'react-dom/server';
import type { EntryContext } from '@remix-run/node';
import { RemixServer as Remix } from '@remix-run/react';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = ReactDOMServer.renderToString(<Remix context={remixContext} url={request.url} />);

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: {
      ...Object.fromEntries(responseHeaders),
      'Content-Type': 'text/html',
    },
  });
}
