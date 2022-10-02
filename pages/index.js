import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Code Hunt</title>
        <meta name="description" content="Create by Kironmoy Roy" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>


      <div className="main">

          <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
            <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
              <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">Code <span className="w3-hide-small">Hunt</span></span>
            </div>
          </div>

          <div className="w3-content w3-container w3-padding-64" id="about">
            <h3 className="w3-center">HOME CODEHUNT</h3>
            <p className="w3-center"><em>I love photography</em></p>
            <p style={{textAlign:"center"}}>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          </div>






      </div>
    </div>

  )
}
