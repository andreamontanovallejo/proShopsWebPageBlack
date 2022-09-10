import React from 'react'
import NavBar from '../../views/navBar/NavBar'
import Styles from './Main.module.scss'
import Footer from '../../views/footer/Footer'

const Main = props => (
  <div className={Styles.Container}>
    <div className={Styles.Navigation}>
      <NavBar />
    </div>
    <main className={Styles.Content}>{props.children}</main>
    <footer className={Styles.Footer}>
      <Footer />
    </footer>
  </div>
)

export default Main
