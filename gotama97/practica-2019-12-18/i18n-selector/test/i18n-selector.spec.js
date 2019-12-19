/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../i18n-selector.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<i18n-selector></i18n-selector>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
