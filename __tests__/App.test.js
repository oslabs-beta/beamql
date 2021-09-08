const React = require('react');
const render = require('@testing-library/react');
const App = require('../client/App.jsx');

describe('App Component', function () {
  test('should have Github Button', function () {
    const { getByText } = render(<App />);
    expect(getByText('Github')).toMatchInlineSnapshot(`
      <button>
        Github
      </button>
    `);
  });
});
