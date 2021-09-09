
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

function CodeOutputButtons({ database, renderSchema, changeRender }) {
  return (
    <div id="Selection">
      <button
        id="schemaButton"
        onClick={() => {
          changeRender(true);
          document.getElementById('schemaButton').style.border =
            '2px solid #00d8ff';
          document.getElementById('resolversButton').style.border = 'none';
          document.getElementById(
            'outlined-multiline-static'
          ).style.spellCheck = 'false';
        }}
      >
        Schema
      </button>
      <button
        id="resolversButton"
        onClick={() => {
          changeRender(false);
          document.getElementById('schemaButton').style.border = 'none';
          document.getElementById('resolversButton').style.border =
            '2px solid #00d8ff';
          document.getElementById(
            'outlined-multiline-static'
          ).style.spellCheck = 'false';
        }}
      >
        Resolvers
      </button>
      <button
        onClick={() => {
          document.getElementById('outlined-multiline-static').select();
          document.execCommand('copy');
        }}
      >
        Copy
      </button>
    </div>
  );
}

export default CodeOutputButtons;
