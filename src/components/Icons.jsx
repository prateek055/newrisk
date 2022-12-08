import React from 'react'
import help from "../../src/icon-Help.svg"
import menu from "../../src/icon-Menu.svg"
import notifications from "../../src/Icon-Notifications.svg"
import profile from "../../src/icon-Profile.svg"
import task from "../../src/icon-Tasks.svg"

const Icons = () => {
  return (<>
  <div style={{display:"flex", columnGap:"0.5rem"}}>
    <div>
        <img src={task}/>
    </div>

    <div>
    <img src={notifications}/>
</div>

<div>
        <img src={help}/>
    </div>

    <div>
    <img src={profile}/>
</div>


    </div>
    </>
  )
}

export default Icons