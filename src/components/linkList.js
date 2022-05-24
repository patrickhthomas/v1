import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import * as styles from '../components/linkList.module.scss'

const LinkList = ({children}) => {
return(
<div className={styles.links}>
      {children}
</div>
  )
}
  
  export default LinkList
  