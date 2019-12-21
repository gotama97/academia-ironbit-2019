/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../contact-card.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<contact-card></contact-card>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
