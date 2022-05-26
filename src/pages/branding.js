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
      linkURL: "https://www.figma.com/proto/YB7mJYng1GCS6ELbddgYG2/05%2F21%2F22-Portfolio-Site?page-id=25%3A19&node-id=28%3A2&viewport=-775%2C444%2C0.12&scaling=min-zoom",
      linkName: "Juneteenth Freedom Celebration",
      description: "Posters/print materials, logos, sitemap, t-shirts."
    },
    {
      imgSrc: photos[1],
      linkURL: "https://www.figma.com/proto/YB7mJYng1GCS6ELbddgYG2/05%2F21%2F22-Portfolio-Site?page-id=25%3A32&node-id=25%3A36&viewport=557%2C340%2C0.15&scaling=min-zoom",
      linkName: "Summer of Pride Block Party",
      description: "Posters for a Pride event in Vancouver, WA."
    },
    {
      imgSrc: photos[2],
      linkURL: "https://www.figma.com/proto/YB7mJYng1GCS6ELbddgYG2/05%2F21%2F22-Portfolio-Site?page-id=32%3A3&node-id=33%3A10&viewport=279%2C137%2C0.1&scaling=min-zoom",
      linkName: "Dandelion",
      description: "All the brandings and things, marketing materials, storefront signage, product packaging."
    },
    {
      imgSrc: photos[8],
      linkURL: "https://www.figma.com/proto/YB7mJYng1GCS6ELbddgYG2/05%2F21%2F22-Portfolio-Site?page-id=33%3A11&node-id=33%3A19&viewport=163%2C120%2C0.14&scaling=min-zoom",
      linkName: "Product Packaging",
      description: "Package design and product photography."
    },
    {
      imgSrc: photos[6],
      linkURL: "https://www.figma.com/proto/OSJdwXvtGQgNEGScjaES63/Send-Help?page-id=11%3A191&node-id=21%3A13&starting-point-node-id=21%3A13",
      linkName: "Send Help",
      description: "Brand development and style guide."
    },
    {
      imgSrc: photos[7],
      linkURL: "https://www.figma.com/proto/fztvLGB61ksyehRi6JXiFv/Odyssey-World-Style-Guide?page-id=11%3A191&node-id=21%3A13&starting-point-node-id=21%3A13",
      linkName: "Odyssey World Rebrand",
      description: "Rebrand for a non-profit."
    },
  ]
  return(
  <Layout>
    <Seo title="Branding % Marketing Projects by Patrick Thomas Design" />
    <h1>Branding</h1>
    <LinkList>
    {examples.map(({linkURL, linkName, imgSrc, description}, i) => (
      <div className='webList'>
      <h2>{linkName}</h2>
      <p>{description}</p>
      {imgSrc}
      <a key={i} href={linkURL} target="_blank" rel="noopener">View Details &#8594;</a>
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
  allFile (filter: {relativeDirectory: {eq: "branding"}}sort: {order: ASC, fields: name}){
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