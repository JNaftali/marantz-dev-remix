import { forwardRef } from 'react';

export function meta() {
  return {
    title: "Josh Marantz's Resume",
    // description: "Welcome to remix!",
  };
}

export function headers() {
  return {
    'cache-control': 'max-age=60',
  };
}

function classList(...classes: (string | null | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const Link = forwardRef<HTMLAnchorElement, React.HTMLProps<HTMLAnchorElement>>((props, ref) => (
  <a
    ref={ref}
    target="_blank"
    {...props}
    className={classList(props.className, props.children === props.href && 'dont-append-link')}
  />
));

export default function Resume() {
  return (
    <main>
      <h1>Josh Marantz</h1>
      <h2>Who am I</h2>
      <p>Hi! My name's Josh. </p>
      <h2>Experience</h2>
      <h3>
        Developer at <Link href="https://www.sesameworkshop.org/">Sesame Workshop</Link>
      </h3>
      <ul>
        <li>They make the Sesame Street TV program among lots of other children's programming</li>
        <li>My first job out of bootcamp!</li>
        <li>9 month contract spanning 2016-2017</li>
        <li>
          Built a small webapp for teachers to review student submissions (and for students to see
          their grades) as part of{' '}
          <Link href="http://sesamestreetenglish.com/">Sesame Street english</Link>
          <ul>
            <li>Refactored from webcomponents to React for better browser support</li>
            <li>SPA frontend, node backend with both a mysql and mongo databases</li>
            <li>Not publicly available</li>
          </ul>
        </li>
        <li>My contract lapsed when the department lost funding and temporarily dissolved</li>
      </ul>
      <h3>
        Fullstack Developer at <Link href="https://thelabnyc.com/">Thelabnyc</Link>
      </h3>
      <ul>
        <li>Thelab is a digital agency – ad campaigns, photography, and webdevelopment</li>
        <li>I've been working there since the end of 2017</li>
        <li>
          My role is mostly writing client and server side Typescript (interactive components,
          client side routing issues, etc). I also write a fair amount of Python code to configure
          the <Link href="https://wagtail.io">Wagtail CMS</Link> we use (and to make miscellaneous
          API enpoints).
        </li>
        <li>
          Swoonreads
          <ul>
            <li>
              An imprint of <Link href="https://us.macmillan.com/">Macmillian publishing</Link>{' '}
              focused on YA/romance novels, recently discontinued.
            </li>
            <li>
              Their website was a social media site for authors to share their works and receive
              feedback from readers. The most popular works were chosen by Macmillian to be
              published.
            </li>
            <li>
              Initially built in Django templates with JQuery, my first task at thelab was to rewite
              some of the more dynamic bits in React. These included the "edit profile" form, the
              custom comments, and the ereader.
            </li>
          </ul>
        </li>
        <li>
          Devacurl
          <ul>
            <li>A hair care company focusing on products and salons for people with curly hair</li>
            <li>
              We built (and now maintain) 2 websites for them:
              <ul>
                <li>
                  <Link href="https://www.devacurl.com">https://www.devacurl.com</Link> - A consumer
                  facing e-commerce site
                </li>
                <li>
                  <Link href="https://www.devacurlpro.com" target="_blank">
                    https://www.devacurlpro.com
                  </Link>{' '}
                  - A site for hair care professionals to learn about classes and new products
                </li>
              </ul>
            </li>
            <li>
              Both sites draw content from a shared Django backend. The frontends were Angular
              universal apps - server rendered in Node and transformed into Single Page Apps on the
              client side. Caching via AWS Cloudfront kept users from having to wait for pages to
              render on the server. We used Shopify's Graphql APIs to provide e-commerce
              functionality.
            </li>
          </ul>
        </li>
        <li>
          La Aurora
          <ul>
            <li>A cigar factory from the Dominican Republic</li>
            <li>We're building them a new e-commerce site, to be released in February of 2021</li>
            <li>
              This site still uses the Django backend we're familiar with, but the frontend is
              written in Next.js (a server-rendered React framework) and hosted on Vercel (which
              also provides caching). We decided to leverage Saleor this time for e-commerce
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
