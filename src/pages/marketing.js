import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PhotoGrid from "../components/photoGrid"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LinkList from "../components/linkList"


const BrandingPage = ({data}) => {
  const photos = data.allFile.edges.map(({node}, i) => (
    <GatsbyImage key={i} aspectRatio={1} image={getImage(node)} alt={node.publicURL} />
      ))
  const examples = [
    {
      imgSrc: photos[0],
      linkURL: "https://www.figma.com/proto/xV8vuUbqFpyN4nuPVEwazm/Critter?page-id=0%3A1&node-id=103%3A110&viewport=262%2C291%2C0.11&scaling=scale-down&starting-point-node-id=16%3A1299",
      linkName: "Crittr",
      description: "This is a sample Description, CHECK IT OUT!"
    },
    {
      imgSrc: photos[1],
      linkURL: "https://invis.io/YU12Q7R4V7FD#/430482452_Landing_Page",
      linkName: "Coop",
      description: "This is a sample Description, CHECK IT OUT!"
    },
    {
      imgSrc: photos[2],
      linkURL: "https://www.figma.com/proto/xcE96toHlmSD2rypfzD9ss/Affirmative-Final?page-id=131%3A1264&node-id=131%3A1876&starting-point-node-id=199%3A199",
      linkName: "Affirmative iOS App",
      description: "This is a sample Description, CHECK IT OUT!"
    },
    {
      imgSrc: photos[3],
      linkURL: "https://dazzling-lichterman-e927f4.netlify.app/home.html",
      linkName: "Bus",
      description: "This is a sample Description, CHECK IT OUT!"
    },
    {
      imgSrc: photos[4],
      linkURL: "https://practical-lichterman-fb5913.netlify.app",
      linkName: "Animation",
      description: "This is a sample Description, CHECK IT OUT!"
    },
    {
      imgSrc: photos[5],
      linkURL: "https://agitated-mayer-a33ac3.netlify.app",
      linkName: "Juneteenth",
      description: "This is a sample Description, CHECK IT OUT!"
    },
    {
      imgSrc: photos[6],
      linkURL: "https://www.blubgrease.com",
      linkName: "BlubGrease",
      description: "This is a sample Description, CHECK IT OUT!"
    },
  ]
  return(
  <Layout>
    <Seo title="Marketing Projects by Patrick Thomas Design" />
    <h1>Marketing</h1>
    <LinkList>
    {examples.map(({linkURL, linkName, imgSrc, description}, i) => (
      <div className='webList'>
      <h2>{linkName}</h2>
      <p>{description}</p>
      {imgSrc}
    <a key={i} href={linkURL}>{linkName}</a>
    </div>
      ))}
    </LinkList>

  </Layout>
  )
}

export default BrandingPage

export const brandingQuery = graphql`
  query {
    file {
      name
    }
    allFile (filter: {relativeDirectory: {eq: "branding"}}){
      edges {
        node {
          id
          publicURL
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
              )
          }
        }
      }
    }
  }
`