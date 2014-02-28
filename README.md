chai-catch-exception
====================
 A ChaiJS Plugin inspired by catch-exception for Java

[![Build Status](https://travis-ci.org/mimiz/chai-catch-exception.png?branch=master)](https://travis-ci.org/mimiz/chai-catch-exception)



## Usage :

The idea is to replace something like this :

    it("Should throw error when array contains a NaN, [1,'']", function(){

       expect(function(){ median([1,""]);}).to.throw(Error, "Must only contains numbers");

    });

OR the readable way ...

    it("Should throw error when array contains a NaN, [1,'']", function(){

        // We need to encapsulate the function call so it won't be evaluated
        var fn = function(){
            median([1, ""]);
        };

       expect(fn).to.throw(Error, "Must only contains numbers");

    });


With this :

    it("Should throw error when array contains a NaN, [1,'']", function(){

        expect(median).withParams([1,""]).to.throw(Error, "Must only contains numbers");

    });

which we find more readable !

## Todo

 * We still need to write tests with all assertion types : should, expect ...
 * Packages for npm and bower

## License

The MIT License (MIT)

Copyright (c) 2014 Rémi Goyard & Christian Alonso Chavez Ley

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
