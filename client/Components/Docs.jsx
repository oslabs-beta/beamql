import React, { Component } from 'react';

function Docs() {


  return (
    <div>
      <div id="docs">
        <div className="step">Documentation</div>
        <br />
        <b>BeamQL</b> is an open source tool to make understanding and adding a
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
        In addition, BeamQL generates everything you will need (all schema and
        resolvers) to add a GraphQL controller layer to your existing REST API.
        Assuming you are using a common backend framework in Node.js, you simply
        need to copy these two bodies of text into your server/app.js code, and
        install and include the relevant boilerplate for{' '}
        <a id="textlink" href="https://www.npmjs.com/package/apollo-server">
          Apollo Server
        </a>
        . 
        <br></br>
        <br></br>
        <br />
        <img id="codeOutputImg" src="../assets/ApolloBoilerplate.png" />
      </div>
        <div id="docsRight">
          <span className="step">Step-By-Step Migration 🔢</span>
          <ol id="olCode">
            <li>Go to BeamQL.com</li>
            <br/>
            <li>Paste your PostgreSQL database URI into the input box</li>
            <br/>
            <li>View and interact with the graphical visualization of your database and or use it 
              in your API documentation to give your users a better understanding of what they are working with.</li>
              <br/>
            <li>Open your NodeJS backend codebase in a code editor.</li>
            <br/>
            <li>npm install apollo-server-express [or appropriate package for your backend framework]</li>
            <br/>
            <li>Copy boilerplate from Apollo Server’s quick start guide</li>
            <br/>
            <li>Copy the schema and resolvers output by BeamQL to your server.js/app.js file and pass them as schema and resolver arguments to your Apollo Server configuration.</li>
            <br/>
            <li>Start your server</li>
            <br/>
            <li>Navigate to localhost:X000/graphql</li>
            <br/>
            <li> the awesomeness of your database accessible through the query language of the future!</li>
          </ol>
        </div>
     
      
    </div>
  );
}

export default Docs;
