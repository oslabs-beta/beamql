import React, { Component } from 'react';

function Docs() {
  return (
    <div id="docs">
      <div id="docsleft">
        <b>Beam</b> is an open source tool to make understanding and adding a
        GraphQL layer to any REST API as simple as possible.
        <br></br>
        <br></br>
        The animation at right shows the essential features of this tool. Simply
        insert your PostgreSQL database URI or select from one of the sample
        databases. Click submit and behold the visualization of your database as
        a graph data structure. You are now looking at your data the way GraphQL
        sees it.
        <br></br>
        <br></br>
        In addition, Beam generates everything you will need (all schema and
        resolvers) to add a GraphQL controller layer to your existing REST API.
        Assuming you are using a common backend framework in Node.js, you simply
        need to copy these two bodies of text into your server/app.js code, and
        install and include the relevant boilerplate for{' '}
        <a id="textlink" href="https://www.npmjs.com/package/apollo-server">
          Apollo Server
        </a>
        .
      </div>
      <div id="docsright"></div>
    </div>
  );
}

export default Docs;
