import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/Layout";
import { Row, Col } from "react-bootstrap";
import Img from "gatsby-image";

export default function Home({data}) {
  return (
    <>
      <Layout>
        <Row className="min-h-100 p-0 m-0">
          {/* sample gatsby-image component */}
          {/* <Img 
          className="img-full" 
          durationFadeIn={1500}
          placeholderStyle={{ backgroundColor: `black` }}
          style={{position: 'absolute', right: '0', zIndex: '0'}}
          fluid={data.imageOne.childImageSharp.fluid} 
          alt="" /> */}
          <Col sm={12} lg={7}
          className="flex-left p-5">
            <h1 className="site-title text-lowercase">Gatsby Bootstrap Starter</h1>
          </Col>
        </Row>
      </Layout>
    </>
  ) 
}

// sample image query
export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "your-image-path.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `