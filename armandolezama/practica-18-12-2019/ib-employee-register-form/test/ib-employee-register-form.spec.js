/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../ib-employee-register-form.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<ib-employee-register-form></ib-employee-register-form>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
