//require & install Jest?
import capFirstLet from ('./server/gqlcorp/typeMain.js')
import queryCreator from ('./server/gqlcorp/query.js');



test("cap first Letter", () => {
    expect(capFirstLet("eric")).toBe("Eric");
});

test("Returns correct Obj structure", () => {
    expect(queryCreator({item:'key', value: "value"})).toBe({Item: "Key", Value: "Value"});
});

