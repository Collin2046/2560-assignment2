import * as React from "react";


function Hobby() {
   return (
       <div className="hobby">
           
               <h2>Game is also important!</h2>
               <h3>Below is my favorite online video game</h3>
               <img src="https://www.avenga.com/wp-content/uploads/2021/09/dota-2-header.jpeg"></img>
               <p>Let us  watch a promotion vedio and youd can dowload and try it <a href="https://www.dota2.com/home">here!</a></p>
               <div className="posVideo"><center>
               <video width="750" height="500" controls >
      <source src="https://youtu.be/-cSFPIwMEq4" type="video/mp4"/>
     </video>
               </center>
               </div>
           
       </div>
   )
}



 export default Hobby;