import { translations, getData, domains, soft_skills } from "../data/data.js";

describe("Data verification", () => {
    it("should get a dictionnary for each translation", () => {
        translations.forEach((translation) => {
            expect(getData(translation)).toBeDefined();
            if (translation != "en")
                // eslint-disable-next-line jest/no-conditional-expect
                expect(getData(translation)).not.toEqual(getData("en"));
        });
    });
    it("should get a project description for each translation", () => {
        translations.forEach((translation) => {
            domains.forEach((domain) =>
                domain.projects.forEach((project) =>
                    expect(project.description[translation]).toBeDefined()
                )
            );
        });
    });
    it("should get a soft-skill description for each translation", () => {
        translations.forEach((translation) => {
            soft_skills.forEach((soft_skill) =>
                expect(soft_skill.name[translation]).toBeDefined()
            );
        });
    });
});
