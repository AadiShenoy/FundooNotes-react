import App from "./App";
import {shallow } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("render the page ", () => {
  });

});
