import { useEffect } from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  useEffect(() => {
    // Define the Mailchimp script function as provided in the HTML
    (function(c, h, i, m, p) {
      m = c.createElement(h), p = c.getElementsByTagName(h)[0];
      m.async = 1;
      m.src = i;
      p.parentNode.insertBefore(m, p);
    })(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/1377935e520ff3adffed7e40e/3ca05b7f6cd132bd314369264.js");
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Wanna backpack?</title>
        <link rel="icon" href="/y_tours_logo.png" />
      </Head>
      <main>
        <Header title="Yarby Tours!!!" />
        <p className="description">
          We host backpacking trips for friends, friends-of-friends, and all in between! More to come.
        </p>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

