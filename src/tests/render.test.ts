/* eslint-disable jest/expect-expect */
import { render } from "@testing-library/react";
import { structure } from "../structure";

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
    root: Element | null = null;
    rootMargin: string = "";
    thresholds: ReadonlyArray<number> = [];
    disconnect() {
        return null;
    }
    observe() {
        return null;
    }
    takeRecords() {
        return [];
    }
    unobserve() {
        return null;
    }
};

test("Rendering all components without problems", () => {
    render(structure);
});
