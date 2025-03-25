
import Head from 'next/head'
import Main from './components/Main'
import Header from './components/Navbar';


export default function Home() {
  return (
    <>
        <div className="flex flex-col min-h-screen">
        <Header ></Header>
        <Main className="flex-grow p-4">Content</Main>
        {/* <footer className="bg-gray-300 p-4">Footer</footer> */}
      </div></>
  );
}
