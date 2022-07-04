import { generateConfig } from "../utils/generateConfig";

test("test generateConfig", () => {
    expect(generateConfig()).toMatchSnapshot({
        time: expect.any(Date)
    });
});
