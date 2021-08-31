import React, { Component } from 'react';
function Team() {
  return (
    <div>
      <div id="teams">
        <div id="topRow">
          <div id="Adam">
            <img
              src="assets/Hannibal.jpeg"
              alt="Pic of Adam"
              width="200"
              height="200"
            />
            <h2>Adam</h2>
            <h3>John "Hannibal" Smith</h3>
            <p> </p>
            <ul>
              <a href="#">Github</a>
              <br/>
              <a href="#">FaceBook</a>
              <br/>
              <a href="#">Linkdin</a>
            </ul>
          </div>
          <div id="Brian">
            <img
              src="assets/the face.jpeg"
              alt="Pic of Brian"
              width="200"
              height="200"
            />
            <h2>Brian</h2>
            <h3>Templeton "The Face(man)" Peck</h3>
            <p>Somthing in here</p>
            <ul>
              <a href="#">Github</a>
              <br/>
              <a href="#">FaceBook</a>
              <br/>
              <a href="#">Linkdin</a>
            </ul>
          </div>
        </div>
        <div id="bottomRow">
          <div id="Marc">
            <img
              src="assets/H.M._Howling_Mad_Murdock.jpg"
              alt="Marc"
              width="200"
              height="200"
            />
            <h2>Marc</h2>
            <h3>H.M "Howling Mad" Murdock</h3>
            <p>Some Cleaver Words</p>
            <ul>
              <a href="#">Github</a>
              <br/>
              <a href="#">FaceBook</a>
              <br/>
              <a href="#">Linkdin</a>
            </ul>
          </div>
          <div id="Eric">
            <img
              src="assets/B.A.jpeg"
              alt="Pic of Eric"
              width="200"
              height="200"
            />
            <h2>Eric</h2>
            <h3>H.M "Howling Mad" Murdock</h3>
            <p>I pitty the fool</p>
            <ul>
              <a href="#">Github</a>
              <br/>
              <a href="#">FaceBook</a>
              <br/>
              <a href="#">Linkdin</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;