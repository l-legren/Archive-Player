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

    screen.getByDisplayValue("fabio");
    await screen.findByText("Team: Juventus");

    fireEvent.change(input, {
        target: { value: "giorgio" },
    });
    fireEvent.click(submitButton);

    getByDisplayValue("giorgio");
    await screen.findByText("Player not available");

    fireEvent.change(input, {
        target: { value: "francesco" },
    });
    fireEvent.click(submitButton);

    getByDisplayValue("francesco");
    await screen.findByText("Player not available");
});
