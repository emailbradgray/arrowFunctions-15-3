
describe("#doubleValuesWithMap", function() {
  it("doubles values in an array", function() {
    expect(doubleValuesWithMap([1, 2, 3])).toEqual([2, 4, 6]);
 });
 it("works for negative numbers", function() {
   expect(doubleValuesWithMap([1, -2, -3])).toEqual([2, -4, -6]);
 });
});


describe("double", function() {
  it("doubles values in an array", function() {
    expect(double([1, 2, 3])).toEqual([2, 4, 6]);
 });
 it("works for negative numbers", function() {
   expect(double([1, -2, -3])).toEqual([2, -4, -6]);
 });
});


describe("squareAndFindEvens", function() {
  it("doubles values in an array", function() {
    expect(squareAndFindEvens([1, 2, 3])).toEqual([4]);
 });
})


describe("squareAndFindEvens2", function() {
  it("doubles values in an array", function() {
    console.log("this is test of squareAndFindEvens2")
    expect(squareAndFindEvens2([1, 2, 3])).toEqual([4]);
 });
})