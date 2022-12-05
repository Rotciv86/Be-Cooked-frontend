import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a fried egg jumping in a  with aria label text 'Un huevo frito siendo salteado en una sarten'", () => {
      const expectedText = "Un huevo frito siendo salteado en una sarten";

      renderWithProviders(<Loader />);

      const loader = screen.queryByLabelText(expectedText);

      expect(loader).toBeInTheDocument();
    });
  });
});
