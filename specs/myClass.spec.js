import MyClass from "../src/myClass.js";
let myObj=new MyClass();
import { expect as _expect } from "chai";
let expect = _expect;

describe("Test suit" ,function(){
    it("Test to add method",function(){
        expect(myObj.add(1, 2)).to.be.equal(3);
    });
});
