// page.js
import Head from 'next/head';
import Header from './components/Header';
import PrinterGuide from './components/PrinterGuide';
import PrinterSetup from './components/PrinterSetup';
import Solutions from './components/Solutions';
import Support from './components/Support';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function Home() {
  return (
    <>
      <Head>
        <title>My Page</title>
      </Head>
      <Header />
      <PrinterSetup />
      <Support />
      <Solutions />
      <PrinterGuide />
    </>
  );
}

export default Home;
