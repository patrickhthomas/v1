import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import * as styles from '../components/photoGrid.module.scss'

const PhotoGrid = ({children}) => {
return(
<div className={styles.photos}>
      {children}
</div>
  )
}
  
  export default PhotoGrid
  