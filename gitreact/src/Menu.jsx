import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <Link to={'home'}><button>home</button></Link>
        <Link to={'signin'}><button>sign in</button></Link>
        {/* <link to={'about'}><button>about</button></link> */}
    </div>
  )
}
