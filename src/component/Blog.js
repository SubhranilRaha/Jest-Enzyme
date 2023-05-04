import React from 'react'

const Blog = () => {
  return (
    <div className='main'>
        <ul>
            <li key='angular' className='licls'>Angular</li>
            <li key='node' className='licls'>Node</li>
            <li key='react' className='licls'>Angular</li>
        </ul>
        <div className='numbers'>
            <span>one</span>
            <span>two</span>
        </div>
        <div>
            <button className='my-button disabled btn-primary'>submit</button>
        </div>
        <div className="some-class"/>
    </div>
  )
}

export default Blog