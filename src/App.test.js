import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

// Local imports
import App from "./App";

test("renders element", async () => {

    const { getByText, getByPlaceholderText, getByDisplayValue } = render(
        <App />
    );

    expect(getByText("onefootball")).not.toBeNull();
    expect(getByText("player archive")).not.toBeNull();

    const input = getByPlaceholderText("ENTER PLAYER");
    const submitButton = getByText("GO!");

    fireEvent.change(input, {
        target: { value: "fabio" },
    });
    fireEvent.click(submitButton);

    getByDisplayValue("fabio");
    await screen.findByText("Team: Juventus")
});
