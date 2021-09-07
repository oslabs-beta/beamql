//Install Jest

import capFirstLet from ('./server/gqlcorp/typeMain.js')

test("cap first Letter", () => {
    expect(capFirstLet("eric")).toBe("Eric");
});