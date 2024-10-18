import React from "react";
import { render, screen } from "@testing-library/react";

import Dashboard2Page from "../Dashboard2Page";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders dashboard2 page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard2Page />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("dashboard2-datatable")).toBeInTheDocument();
    expect(screen.getByRole("dashboard2-add-button")).toBeInTheDocument();
});
