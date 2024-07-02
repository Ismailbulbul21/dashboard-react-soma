import React from 'react'
import SalesItem from './SalesItem'
import WebAnalystic from './WebAnalystic'
import ScoreList from './ScoreList'

const RightColumn = () => {
  return (
    <div className='w-full p-2 '>
      <SalesItem/>
<div className=' mt-4'>

<WebAnalystic/>
</div>

<div id='dhulka' className=' mt-4'>
<ScoreList/>
</div>
    </div>
  )
}

export default RightColumn