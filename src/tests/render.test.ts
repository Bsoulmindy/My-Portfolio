/* eslint-disable jest/expect-expect */
import { render } from "@testing-library/react";
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
});
