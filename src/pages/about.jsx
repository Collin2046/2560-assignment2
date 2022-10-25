import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */


/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/

export default function Education() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  
  return (
    <div className="page">
      <div className="education">
            <div>
                <h1>University of Pittsburgh</h1>
                <ul>
                    <li>Master, Information Science</li>
                    <li>GPA: 3.9</li>
                    <li>Aug 2021 - Present, Pittsburgh, PA, USA</li>
                    
                </ul>
            </div>
            <div>
              <img src="https://www.ivy-international.org/wp-content/uploads/2019/01/University-of-Pittsburgh.jpg" width="800px" ></img>
            </div>
            <div>
                <h1>
                    Shandong University Of Science And Technology
                </h1>
                <ul>
                    <li>bachelor, Geomatics</li>
                    <li>GPA: 82%</li>
                    <li>Sep 2016 - June 2020, Qingdao, Shandong, China</li>
                </ul>
                
            </div>
            <img src="http://5b0988e595225.cdn.sohucs.com/images/20190403/a9f5b6494a4d4158b18b39e706ee0602.jpeg" width="800px" ></img>
        </div>
    </div>
  );
}
