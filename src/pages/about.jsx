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
                <h2>University of Pittsburgh</h2>
                <ul>
                    <li>Master, Information Science</li>
                    <li>GPA: 3.9</li>
                    <li>Aug 2021 - Present, Pittsburgh, PA, USA</li>
                    
                </ul>
            </div>
            <div>
                <h2>
                    Shandong University Of Science And Technology
                </h2>
                <ul>
                    <li>bachelor, Geomatics</li>
                    <li>GPA: 82%</li>
                    <li>Sep 2016 - June 2020, Qingdao, Shandong, China</li>
                </ul>
            </div>
        </div>
    </div>
  );
}
