/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../employee-register.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<employee-register></employee-register>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
