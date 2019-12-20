/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ib-employee-register-from.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ib-employee-register-from></ib-employee-register-from>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
