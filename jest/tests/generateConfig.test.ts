import { generateConfig } from "../utils/generateConfig";

// test("test generateConfig", () => {
//     expect(generateConfig()).toMatchSnapshot({
//         time: expect.any(Date)
//     });
// });
test("test generateConfig2", () => {
    expect(generateConfig()).toMatchInlineSnapshot(
        {
            time: expect.any(Date),
        },
        `
Object {
  "domain": "localhost",
  "port": 8080,
  "server": "http://localhost",
  "time": Any<Date>,
}
`
    );
});
