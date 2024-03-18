import {getPercents} from './index.js';



test('getPercents 30 from 200 to equal 60', () => {
  expect(getPercents(30 , 200)).toBe(60);
});

test('getPercents 5 from 5 to equal 0.25', () => {
    expect(getPercents(5 , 5)).toBe(0.25);
});

test('getPercents -5 from -5 to equal 0,25', () => {
    expect(getPercents(-5 , -5)).toBe(0.25);
});

test('getPercents 0 from 5 to equal 5', () => {
    expect(getPercents(0 , 5)).toBe(0);
});

describe("tests for getPercents function", () => {
    it("should operate correctly with simple numbers", () => {
        expect (getPercents(40, 200)).toBe(80)
    });    
    it("should operate correctly with negative numbers", () => {
        expect (getPercents(-30, -200)).toBe(60)
    });
    it("should operate correctly with Null", () => {
        expect (getPercents(30, )).toBe(NaN)
    });
    it("should operate correctly with Null", () => {
        expect (getPercents(0, 10)).toBe(0)
    });
    })
