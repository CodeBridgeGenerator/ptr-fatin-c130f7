import React from "react";
import { render, screen } from "@testing-library/react";

import Dashboard1EditDialogComponent from "../Dashboard1EditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders dashboard1 edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard1EditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("dashboard1-edit-dialog-component")).toBeInTheDocument();
});
