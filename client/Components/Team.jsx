import React, { Component } from 'react';
function Team() {
  return (
    <div id="team">
      <div id="Brian">
        <img
          className="teampic"
          src="../assets/Brian.jpeg"
          alt="Brian"
          width="200"
          height="200"
        />
        <div id="BrianDiv">
          <h2>
            <span className="firstLetter">B</span>rian Grosso
          </h2>
          <div className="socials">
            <a
              href="https://github.com/modelB"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/newarkbg/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div id="Eric">
        <img
          className="teampic"
          src="../assets/Eric.jpeg"
          alt="Eric"
          width="200"
          height="200"
        />
        <h2>
          <span className="firstLetter">E</span>ric Askew
        </h2>
        <div className="socials">
          <a href="https://github.com/moonwalker5823" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/eric-askew-8a91714a"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div id="Adam">
        <img
          className="teampic"
          src="../assets/Adam.png"
          alt="Adam"
          width="200"
          height="200"
        />
        <h2>
          <span className="firstLetter">A</span>dam Goodman
        </h2>
        <div className="socials">
          <a href="https://github.com/AdamrG1" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/adam-goodman-59698276/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div id="Marc">
        <img
          className="teampic"
          src="../assets/Mark.JPG"
          alt="Marc"
          width="200"
          height="200"
        />
        <h2>
          <span className="firstLetter">M</span>ark Liu
        </h2>
        <div className="socials">
          <a href="https://github.com/markyliu" target="_blank" rel="noreferrer">
            {/* Github */}
            <i class="fab fa-github"></i>
          </a>

          <br />
          <a href="https://www.linkedin.com/in/markyliu1/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Team;
