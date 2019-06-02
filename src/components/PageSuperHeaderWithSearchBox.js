import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import SearchBox from "./SearchBox"

export default function PageSuperHeaderWithSearchBox(props) {
  const { image, imageAlt } = props;
  return (
    <div className="container-fluid">
      <div className="row page-super-header justify-content-center align-items-center">
        <Img fixed={image} alt={imageAlt}/>
        <div className="gradient-layer" />
        <div className="search-in-header-container col-lg-4 col-md-6 col-sm-8 col-xs-12">
          <SearchBox />
        </div>
      </div>
    </div>
  )
}

PageSuperHeaderWithSearchBox.propTypes = {
  image: PropTypes.object,
  imageAlt: PropTypes.string
}