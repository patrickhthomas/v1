import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../pages/index.module.scss"
import LinkList from "../components/linkList"


const pageLinks = [
  {
    text: "Web",
    url: "web",
    image: <StaticImage src="../images/webcover.jpg"/>,
    className: styles.web,
    badge: true,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { 
    text: "Branding",
    url: "branding",
    image: <StaticImage src="../images/webcover.jpg"/>,
    className: styles.branding,
  },
    
  { 
    text: "Illustration", 
    url: "illustration",
    className: styles.illustration,
    image: <StaticImage src="../images/webcover.jpg"/>,
  },
]



const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textLeft}>
      <h1>
        Patrick Thomas - Digital Designer
      </h1>
      <p>My experience covers a wide range of design services including ground-up brand development, product packaging, custom built websites with e-commerce capability, and a whole lot more! Regardless of the size or nature of your project, I’ll always be sure to take a wholistic approach that leaves you with an effective and long lasting result.</p>
    </div>
    <div className={styles.list}>
      {pageLinks.map(link => (
                <a
                className={link.className}
                href={`${link.url}${utmParameters}`}
              >
        <div className={styles.text} key={link.url}>

            <h2>{link.text}</h2>
        
        </div>
        </a>
      ))}
    </div>
  </Layout>
)

export default IndexPage
