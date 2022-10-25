import * as React from "react";


function Hobby() {
   return (
       <div className="hobby">
           
               <h2>Game is also important!</h2>
               <h3>Below is my favorite online video game</h3>
               <div className="pic" >
               <img className="dota2" src="https://www.avenga.com/wp-content/uploads/2021/09/dota-2-header.jpeg" width="900px" height="500px"></img>
               </div>
               
               
               <p>Dota 2 is a 2013 multiplayer online battle arena (MOBA) video game developed and published by Valve. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character known as a "hero" that all have unique abilities and differing styles of play. During a match players collect experience points and items for their heroes to successfully defeat the opposing team's heroes in player versus player combat. A team wins by being the first to destroy the other team's "Ancient", a large structure located within their base.</p>
               <h3>Let us  watch a promotion video and you can download and try it <a href="https://www.dota2.com/home"><em className="here">here!</em></a></h3>
               <div className="posVideo">
               <video width="750" height="500" controls >
      <source src="https://youtu.be/-cSFPIwMEq4" type="video/mp4"/>
     </video>
               
               </div>
           
       </div>
   )
}



 export default Hobby;