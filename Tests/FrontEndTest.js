import Enzyme, { render, configure, shallow } from 'enzyme';
import React from 'react';
import Adaptor from 'enzyme-adapter-react-16';

import CodeOutputButtons from '../Components/CodeOutputButtons.jsx';
import Docs from '../Components/Docs.jsx';
import Team from '../Components/Team.jsx';
import { ExpansionPanelActions } from '@material-ui/core';

configure({ adapter: new Adaptor() });

describe('React Testing Unit', () => {
  describe('CodeOutputButtons', () => {
    // xit('Renders 3 button divs', () => {
    //   const wrapper = shallow(<CodeOutputButtons />);
    //   expect(wrapper.type()).toEqual(<button />);
    // });
    it('3 button divs', () => {
      const wrapper = shallow(<CodeOutputButtons />);
      expect(wrapper.find('button')).toHaveLength(3);
    });
    // xit('Renders 3 button divs', () => {
    //   const wrapper = shallow(<CodeOutputButtons />);
    //   expect(wrapper.type()).toEqual(<button />);
    // });
  });

  //     describe("CodeOutputButtons", () => {
  //     let wrapper = <div id="selection"></div>;
  //     });

  //     beforeAll(() => {
  //       wrapper = shallow(<div />);
  //     });

  //     it("Renders 3 <div> tags", () => {
  //       expect(wrapper.type()).toEqual("div");
  //       expect(wrapper.text()).toEqual("Schema");
  //       expect(wrapper.type()).toEqual("div");
  //       expect(wrapper.text()).toEqual("Resolvers");
  //       expect(wrapper.type()).toEqual("div");
  //       expect(wrapper.text()).toEqual("Copy");
  //     });
  //   });
});
