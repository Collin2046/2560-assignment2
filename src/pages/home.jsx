import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

// Our language strings for the header
const strings = [
  "Hello React",
  "Salut React",
  "Hola React",
  "안녕 React",
  "Hej React"
];

// Utility function to choose a random value from the language array
function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  return(

    <div>
      <div className='bannerInfo'>
            
            <div className='PerInfo'>
                <div>
                    <h1 className="name">
                        Kelin He    
                    </h1>

                    <img className="touxiang" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtGt08BjfdHKtAj2lZu85yFyR1rCVvXLAfNVUtvjeWn10Sw5lhEiDQ6zB2nslWH7VNaU&usqp=CAU"></img>
                </div>
                <div>
                    <p>
                        Master Student in University of Pittsburgh, majoring in Information Science.
                    </p>
                </div>
                <div>
                    <p>
                        Email:keh229@pitt.edu
                    </p>
                </div>
                <div>
                    Phone:412-6944947
                </div>

            </div>
        </div>
      <p>

Hello, I am glad to meet you, this is Kelin He. I am currently studying in University of Pittsburgh, majoring in Information Science.
Welcome to my blog!
</p>
    </div>
  );
}
