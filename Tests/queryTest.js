import queryCreator from ('./server/gqlcorp/query.js');

test("Returns correct query Obj", () => {
    expect(queryCreator({item:'key', value: "value"})).toBe({Item: 'Key', Value: "Value"});
});