import Login from "../pages/Login";
import App from "../App"
import { shallow } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;
  let app;
  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter initialEntries={["/notes"]}>
        <App />
      </MemoryRouter>
    );
    app = wrapper.find(App).instance();
  });

  test("Redirecting to Dashboard ", () => {
    wrapper.find("#submit").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
