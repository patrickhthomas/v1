import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from '../components/footer.module.scss'

const Footer = ({ siteTitle }) => (
  <div className={styles.container}>
<div className={styles.divider}></div>
  <footer
  className={styles.footer}
  >
<div className={styles.links}>
  <Link className={styles.link} to="/">Home</Link>
  <Link  className={styles.link} to="/web">Web</Link>
  <Link  className={styles.link} to="/branding">Branding</Link>
  <Link  className={styles.link} to="/illustration">Illustration</Link>
</div>
  <Link
  to="/"
  >
  
  <svg style={{
      paddingBottom: '2em',
    height: `3em`,
  }} id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 193.7 202.1"><path fill="white" d="M192.7,83.1c-2.5-17.4-9.2-33-20.2-46.7-9.1-11.4-20.3-20.4-33.5-26.7-10-4.8-20.6-7.9-31.7-9-2.5-.2-4.9-.3-7.4-.5-.4,0-.8-.1-1.2-.2h-3.6c-2.1,.2-4.1,.3-6.2,.5-10.7,.8-21,3.4-30.9,7.7-8.4,3.7-16.2,8.5-23.2,14.4-9,7.5-16.4,16.5-22.1,26.7C6.4,60.6,2.5,72.6,1,85.3c-.4,3.1-.5,6.2-.6,9.3-.1,4.1,0,8.3,0,12.5-.1,19.9-.2,39.7-.2,59.6,0,.7-.1,1.3-.2,2v4.1c.8,1.6,2.1,2.2,3.9,2v1.5c0,3.3,0,6.5,.1,9.8,0,.8,.3,1.7,.8,2.2,.6,.6,1.6,1.3,2.3,1.2,.8,0,1.5-.9,2.2-1.6,.4-.4,.6-1,.8-1.5l.5,.1v2l-.6,7.5v.7c.1,2,1.1,3.4,2.6,3.7,1.4,.3,3.1-.6,4-2.2,.2-.3,.3-.7,.7-1.3,.8,2.1,1.5,4.2,3.6,5.2h1.9c2.6-1.4,3.4-3.9,3.3-6.5-.1-6.4-.4-12.8-.6-19.2-.2-4.1-.3-8.3-.5-12.4-.4-8.3-.9-16.6-1.1-24.9-.2-6.2,.1-12.5,.1-18.7,0-4.9,.1-9.8,.1-14.8,0-6.8-.2-13.6,.9-20.3,2.3-13.4,7.6-25.3,16.4-35.6,11.5-13.4,25.9-21.8,43.3-24.8,15.3-2.7,30-.5,44,6.2,8.7,4.2,16.2,9.8,22.6,17,10.1,11.3,16.2,24.6,18.1,39.8,1.6,13.1-.2,25.7-5.4,37.8-3.2,7.3-7.4,13.9-12.8,19.9-6.4,7.1-13.8,12.7-22.4,16.9-8.2,4-17,6.3-26.1,7-15.8,1.3-30.5-2.5-44.2-10.3-9-5.1-16-12.6-21.5-21.3-.9-1.4-2.1-2.7-3.4-3.8-1.2-1.1-2.7-1.5-4.2-.7-1.5,.7-2.2,2.1-2.4,3.8-.3,3.5,1.5,6.1,3.7,8.5,1,1.1,2.2,2.1,3.2,3.5-.7-.3-1.3-.6-2-.8-1.2-.4-2.4-.2-3.3,.8s-1,2.4-.2,3.4c1.4,2,3,4,4.7,5.7,3,2.8,6.2,5.4,9.2,8.2,.8,.7,1.3,1.7,2,2.6l-.3,.3c-.4-.1-.8-.2-1.2-.4-.9-.4-1.8-1-2.8-1.1s-2.5,0-3,.6c-.6,.6-.6,2.1-.2,3.1,.4,1,1.3,2.1,2.2,2.8,13.9,10.4,29.5,16.6,46.7,18.6,13.8,1.7,27.3,.3,40.5-3.8,12.7-4,24.1-10.4,34.2-19.2,17.4-15.2,28.1-34.3,32-57.1,.5-3.1,.7-6.3,1.1-9.4,0-.4,.1-.7,.2-1v-11c-.4-3-.7-5.7-1-8.4ZM6.7,185h0c-.4-.6-1-1.1-1.1-1.7-.6-2.1,0-4.4,1.2-5.1,1,.9,1.1,4.8-.1,6.8Zm13.2-109.8c-.2,.4-1.2,.6-1.7,.5-.4-.1-.7-.9-1.1-1.5h0c.6-1,1-1.9,1.6-2.7,.2-.3,1-.5,1.4-.4s.9,.8,.8,1.1c-.2,1-.4,2.1-1,3Zm2,123.1c-.8-1.3-.1-4.7,1.1-5.5,1.1,1.3,.4,5-1.1,5.5Zm.1-131.9c-1,.6-2.1-.1-2.2-1.3-.1-2.4,2.4-6.5,4.6-7.4,1.3-.5,2.1,.1,2.1,2-.5,2.6-1.9,5.1-4.5,6.7ZM112.8,6.7c1.4-.9,4.9-.2,5.6,1-1,.8-4.1,.3-5.6-1Zm16,4.7c1-1.3,2.9-.9,3.7,.7-1,1.3-2.9,.9-3.7-.7Zm13.9,16.2c-1.9-.6-3.6-1.5-4.8-3.1l.3-.5c1.6,1,3.2,2,4.9,3l-.4,.6Zm29.9,123.2c-.8,1.4-1.8,2.7-2.8,4-2.1,2.9-4.3,5.7-7.5,7.7-.5,.3-1.2,.4-1.8,.6l-.4-.6h0c.4-.7,.7-1.4,1.2-2.1,2.9-3.5,5.8-7,8.6-10.5,.2-.2,.3-.5,.6-.6,.6-.2,1.4-.5,1.8-.2,.3,.2,.5,1.3,.3,1.7Zm2.2-96l-3.2-5.2c2.1,.5,4,3.3,3.2,5.2Zm.1-7h0c-.9-.8-1.8-1.5-2.6-2.3-.9-.9-1.6-2-2.5-2.9-.3-.3-.9-.4-1.4-.5l-.4,.5c.8,1.3,1.6,2.7,2.4,4l-.3,.4c-.4-.3-.9-.5-1.2-.8-1.4-1.3-2.6-2.7-4-3.9-.5-.4-1.1-.7-1.7-1-1.2,.9-1,2-.5,2.8,.9,1.4,2,2.8,3.1,4.1l.9,1.5-.3,.4c-.5-.2-1.1-.2-1.5-.6-1.5-1.2-3.1-2.4-4.5-3.7-3.7-3.2-7.3-6.5-10.9-9.8-.4-.3-.7-.8-1.1-1.2l.2-.4,3.4,.6,.2-.3-5.9-4.7,.3-.4c2.8,0,4.5,2.9,7.3,2.9,.7-1.3,0-2-.8-2.6-2.1-1.5-4.3-2.8-6.5-4.3-2-1.4-4-2.8-5.9-4.3-.4-.3-.7-.7-1-1.1l.3-.4c2,1,4.1,2,6.1,3,1.3-1,.7-1.8-.1-2.4-1.8-1.3-3.7-2.6-5.5-3.9l-2.4-1.8,.2-.5c.5,.1,1.1,0,1.5,.3,4.1,2.2,8.3,4.3,12.2,6.8,5.2,3.4,9.9,7.5,14,12.1,3,3.4,5.6,7.1,8.3,10.8,.6,.9,.8,2,1.2,3l-.6,.6Zm7.6,13.4c-2.2-3.2-3.9-6.7-5.1-10.6,2.5,.8,6.1,8.3,5.1,10.6Zm3.6,8.9c-1.5-1.6-2.4-4.8-1.8-6,1.5,1,2.6,4.6,1.8,6Z"/><path fill="white" d="M67.9,139.8c9.3,5.6,19.2,8.9,30.1,8.8h0c1.8-.1,3.5-.2,5.3-.3,10.7-.9,20.1-5.2,28.6-11.4,6.3-4.7,10.6-11.2,13.7-18.4,4.6-10.6,5.6-21.6,3-32.9-2.5-10.4-7.6-19.2-15.5-26.5-11.3-10.3-24.6-14.9-39.8-13.6-14.9,1.4-27.1,8-36.4,19.6-7.1,8.8-10.8,18.9-11.4,30.1-.4,7.3,.8,14.5,3.5,21.4,4,9.6,9.7,17.7,18.9,23.2Zm62.7-61c4.8,0,9.1,4.2,9.1,9s-4.2,9.1-9,9.1c-4.9,.1-9.1-4.2-9.1-9.1,0-4.8,4.2-9,9-9Zm-34.4-16.7c.2-.8,.7-1.5,1.1-2.2h0c1.6,.2,1.9,1.2,2.2,2.2,1.6,6.2,3,12.5,4.7,18.7,2.1,7.5,4.5,14.9,6.6,22.3,1.7,6,3.1,12,2.9,18.3-.2,5.8-1.8,11.1-6,15.3-6,6.1-16.4,5.1-21.4-1.9-2.8-4-4.1-8.4-4.3-13.3-.3-8.1,1.9-15.8,4.2-23.4,3.7-11.8,7.2-23.8,10-36Zm-39.4,26.1c1.3-6.1,4.3-11.3,8.2-16.1,6.6-8.1,15-13.3,25.1-16,.7-.2,1.4-.2,2-.3l.5,.7h0c-.4,.1-.8,.2-1.1,.5-5.5,4.6-10.7,9.6-14,16.1-1.8,3.6-3.1,7.3-4.6,11-1.4,3.4-2.4,7-4.8,9.9-1.2,1.4-2.8,2.7-4.4,3.5-2.9,1.5-5.7,.2-6.8-2.9-.8-2.1-.6-4.2-.1-6.4Z"/><path fill="white" d="M36.2,163.4c-1.4-2.2-3.5-3.4-6-3.7-1.3-.2-2.1,.9-1.8,2.1,.6,2.2,3.8,4.6,6.1,4.5,2,0,2.7-1.3,1.7-2.9Z"/><path d="M4.3,193.2c-.6,1.4-.8,2.9-1.2,4.3,.3,1.1,.4,2.1,.8,3,.6,1.5,2.6,1.8,3.8,.7,1.9-1.8,2.3-6.4,.7-8.5-1.4-1.6-3.3-1.5-4.1,.5Z"/><path fill="white" d="M161,33.8c-.7,2,2.2,5.3,4.5,5h0c.6-1.2-.1-2.2-.8-3-1-1.1-1.9-2.4-3.7-2Z"/><path fill="white" d="M155.9,37c.2,.7,.3,1.4,.7,1.9,.9,1,1.9,1.8,3.4,1.5,.4-1.8-1.9-3.9-4.1-3.4Z"/><path fill="white" d="M147.8,23c.4,.7,.6,1.5,1.1,2s1.4,.5,2.3,.9c.2-2.4-1.4-3.7-3.4-2.9Z"/>
  </svg>
  </Link>
  
  </footer>
  </div>
  )
  
  
  export default Footer
  