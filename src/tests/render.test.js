/* eslint-disable jest/expect-expect */
import { fireEvent, render, screen } from "@testing-library/react";
import { structure } from "../structure";

global.IntersectionObserver = class IntersectionObserver {
    disconnect() {
        return null;
    }
    observe() {
        return null;
    }
    takeRecords() {
        return null;
    }
    unobserve() {
        return null;
    }
};

test("Rendering all components without problems", () => {
    render(structure);
    const domainComponents = screen.getAllByTestId("domain");

    domainComponents.forEach((component) => {
        fireEvent.click(component);
    });
});
