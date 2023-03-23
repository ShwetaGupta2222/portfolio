import React from 'react'
import cf from "../img/cf.jpg"
import cc from "../img/cc.jpg"
import gfg from "../img/gfg.jpg"
import leetcode from "../img/leetcode.jpg"
const Coding = () => {
  return (
    <div className='coding' id="profiles">
         <h1 className='heading'>My Coding Profiles</h1>
         <div className='profiles'>
            <div className='item'><a href="https://codeforces.com/profile/code_with_baby"><img src={cf}/></a></div>
            <div className='item'><a href="https://www.codechef.com/users/code_with_baby"><img src={cc}/></a></div>
            <div className='item'><a href="https://leetcode.com/codewithbaby/"><img src={leetcode}/></a></div>
            <div className='item'><a href="https://auth.geeksforgeeks.org/user/6z4ryio2ejpzys01hvtmlfrmk2ebxzc5pho9kbb0/"><img src={gfg}/></a></div>
         </div>
    </div>
  )
}

export default Coding