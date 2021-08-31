import { render, fireEvent } from "@testing-library/svelte";
import App from "../App.svelte";

// @source: https://testing-library.com/docs/svelte-testing-library/example
describe("test", () => {
  it("should render", () => {
    const { getByText } = render(App, { props: { name: "world" } });
    expect(getByText('oida')).toBeInTheDocument()
  })

  it("press button", async () => {
    const {getByText} = render(App, { props: { name: "world" } });
    const button = getByText('Button')

    // Using await when firing events is unique to the svelte testing library because
    // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
    await fireEvent.click(button)

    expect(button).toHaveTextContent('Button Clicked')
  })
})
