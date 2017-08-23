import React from 'react'
import {Statistic} from 'semantic-ui-react'


const Stat = (props) =>
  (
    <div >
      <Statistic size='small' color="lightGrey">
        <Statistic.Value className='stat'>
          {props.count}
        </Statistic.Value>
        <Statistic.Label className='stat'>
          {props.category}
        </Statistic.Label>
      </Statistic>
    </div>

  )


export default Stat
