import React from "react";
import { render, screen } from "@testing-library/react";

import Dashboard1Page from "../Dashboard1Page";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders dashboard1 page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Dashboard1Page />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("dashboard1-datatable")).toBeInTheDocument();
    expect(screen.getByRole("dashboard1-add-button")).toBeInTheDocument();
});
