const assert = require("assert");
const Rectangle = require("./../Rectangle");

describe("Rectangle", () => {
  it("is a function accepting 2 arguments", () => {
    assert.strictEqual(typeof Rectangle, "function");
    assert.strictEqual(Rectangle.length, 2);
  });

  it("is square", () => {
    const newRectangle = new Rectangle(10, 5);
    assert.strictEqual(newRectangle.isSquare(), true);
  });

  it("get area", () => {
    const newRectangle = new Rectangle(13, 7);
    assert.strictEqual(newRectangle.getArea(), 91);
  });

  it("get perimeter", () => {
    const newRectangle = new Rectangle(13, 7);
    assert.strictEqual(newRectangle.getPerimeter(), 40);
  });
});
