import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.scss"


const pageLinks = [
  {
    text: "Web",
    url: "web",
    badge: true,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "Branding", url: "branding" },
  { text: "Illustration", url: "illustration" },
]



const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home</h1>
    <div className={styles.textCenter}>
      <h1>
        Patrick Thomas - Digital Designer
      </h1>
    </div>
    <ul className={styles.list}>
      {pageLinks.map(link => (
                <a
                className={styles.listItemLink}
                href={`${link.url}${utmParameters}`}
              >
        <li key={link.url} className={styles.listItem}>

            {link.text} ↗
          
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
        </a>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
