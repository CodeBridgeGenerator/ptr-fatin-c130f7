import React from "react";
import { render, screen } from "@testing-library/react";

import Dashboard2EditDialogComponent from "../Dashboard2EditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders dashboard2 edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard2EditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("dashboard2-edit-dialog-component")).toBeInTheDocument();
});
