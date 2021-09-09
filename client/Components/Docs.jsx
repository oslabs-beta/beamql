import React, { Component } from 'react';

function Docs() {


  return (
    <div id="docs">
      <div className="step">Documentation</div>
      <br />
      <div id="docsTextOne">
        BeamQL is an open source tool to make understanding and adding a
        GraphQL layer to any REST API as simple as possible.
        <br></br>
        <br></br>
        The animation below shows the essential features of this tool. Simply
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
        install and include the relevant boilerplate for <a id="textlink" style={{"display": "inline"}} href="https://www.npmjs.com/package/apollo-server">Apollo Server</a>.
      </div>
      <br />
      <br />
    <img
          style={{ marginRight: '30px', border: '2px solid white' }}
          src="./assets/getstarted.gif"
          alt="Get Started"
        />
    <br />
    <br />
    <span className="step">Step-By-Step Migration 🔢</span>
    <ol id="olCode">
      <li>Copy your PostgreSQL database URI into BeamQL.com</li>
      <br/>
      <li>View and interact with the graphical visualization of the database and or use it in API documentation to give users a better understanding of what they are working with.</li>
      <br/>
      <li>Open NodeJS backend codebase in a code editor.</li>
        <br/>
      <li>Use the schema and resolvers that BeamQL produces with Apollo Server or a similar GraphQL server that suits you.</li>
      <br/>
      <li>Start server and navigate to localhost:X000/graphql</li>
      <br/>
      <li>Behold the glory of your database accessible through the query language of the future!</li>
    </ol>
    <br />
    <br />    
    <img id="codeOutputImg" src="../assets/ApolloBoilerplate.png" />
    </div>
  );
}

export default Docs;
