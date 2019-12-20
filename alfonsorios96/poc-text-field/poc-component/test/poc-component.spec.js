/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../poc-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<poc-component></poc-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
