import React from 'react'
import {Statistic} from 'semantic-ui-react'


const Stat = (props) =>
  (
    <div className="column">
      <Statistic>
        <Statistic.Value>
          {props.count}
        </Statistic.Value>
        <Statistic.Label>
          {props.category}
        </Statistic.Label>
      </Statistic>
    </div>

  )


export default Stat
