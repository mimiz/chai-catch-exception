/**
 * Created by remi on 28/02/2014.
 */
describe("Chai Catch Exception Test Suite", function () {
    var SUM = function(a, b){
        return a+b;
    };

    var THROWED = function(a, b){
        if( a === 1 && b ===2 ){
            throw new Error();
        }
        return a+b;
    };
    it('Should call the original function when withParams is specified', function(){
        expect(SUM).withParams(1,2).to.equal(3);
    });
    it('Should catch the Exception when withParams is specified', function(){
        expect(THROWED).withParams(1,2).to.throw(Error);
    });

});