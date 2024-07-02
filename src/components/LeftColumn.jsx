import React from 'react'
import CardItem from './CardItem'
import AreaChartscomponents from './AreaChartscomponents'
import TableComponents from './TableComponents'
import LeftFooter from './LeftFooter'


const LeftColumn = () => {




  return (

    <div className='w-full flex flex-col justify-between p-2'>
      <div className=' flex  flex-col lg:flex-row w-full gap-2'>
<CardItem/>
<CardItem/>
<CardItem/>

</div>
<div className='flex-auto w-full '>

<AreaChartscomponents/>
<TableComponents/>

</div>

<div className='  max-sm:hidden max-md:hidden max-lg:hidden mt-4'>

<LeftFooter/>

</div>

    </div>
  )
}

export default LeftColumn