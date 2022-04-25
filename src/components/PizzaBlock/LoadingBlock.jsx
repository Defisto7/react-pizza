import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="134" r="118" /> 
    <rect x="0" y="280" rx="6" ry="6" width="280" height="26" /> 
    <rect x="0" y="320" rx="6" ry="6" width="280" height="70" /> 
    <rect x="-1" y="419" rx="6" ry="6" width="100" height="30" /> 
    <rect x="153" y="410" rx="25" ry="25" width="127" height="47" />
  </ContentLoader>
  )
}

export default LoadingBlock