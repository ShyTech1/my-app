import React from 'react'
import "./ImageLinkForm.css"

export default function ImageLinkForm( {onInputChange} ) {
  return (

    <div className=" pa4-l">
      <div className='center w-70-ns'>
        <legend className=" self-center-ns pa-l5 f4 f3-ns mb3 white-80">Sign up for our newsletter</legend>
      </div>

      <div className="center cf w-70-ns">
          <input type="text" onChange={onInputChange} className="f3 f5-l bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Your Email Address" name="email-address" id="email-address" />
          <input className="f3 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subscribe" />

      </div>
    </div>

    )
   }
