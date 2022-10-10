import React from "react"
import ContentLoader from "react-content-loader"

function CartLoder (props) {
  return (
    <ContentLoader 
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
    <rect x="0" y="106" rx="3" ry="3" width="142" height="15" /> 
    <rect x="0" y="137" rx="3" ry="3" width="93" height="15" /> 
    <rect x="0" y="178" rx="8" ry="8" width="80" height="24" /> 
    <rect x="117" y="175" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
  )
}
  


export default CartLoder