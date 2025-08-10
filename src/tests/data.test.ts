import { translations, getData } from "../data/data.js";

describe("Data verification", () => {
    it("should get a dictionnary for each translation", () => {
        translations.forEach((translation) => {
            expect(getData(translation)).toBeDefined();
            if (translation != "en")
                // eslint-disable-next-line jest/no-conditional-expect
                expect(getData(translation)).not.toEqual(getData("en"));
        });
    });
});
