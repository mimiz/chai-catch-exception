/**
 * A ChaiJs Plugin inspired By catch-exception for Java
 * @see https://code.google.com/p/catch-exception/
 *
 * This encapsulation was inspired by  https://github.com/gaslight data-time ChaiJs plugin
 * @see https://github.com/gaslight/chai-datetime
 *
 * @author Remi Goyard :  https://github.com/mimiz
 * @author Christian Alonso Chavez Ley : https://github.com/cachavezley
 *
 *
 */
(function (plugin) {
    if (
        typeof require === "function" &&
            typeof exports === "object" &&
            typeof module === "object"
        ) {
        // NodeJS
        module.exports = plugin;
    } else if (
        typeof define === "function" &&
            define.amd
        ) {
        // AMD
        define(function () {
            return plugin;
        });
    } else {
        // Other environment (usually <script> tag): plug in to global chai instance directly.
        chai.use(plugin);
    }
}(function (_chai, utils) {

    var Assertion = _chai.Assertion;

    Assertion.addMethod("withParams", function () {
        var originalValue = utils.flag(this, "object");

        // If evaluated object is a function do the stuff.
        if ("function" === utils.type(originalValue)) {
            var args = Array.prototype.slice.call(arguments);
            try {
                // If NO exception thrown, simply set the object value
                utils.flag(this, "object", originalValue.apply({}, args));
            } catch (err) {
                // If error THROWN encapsulate the object function in a closure.
                utils.flag(this, "object",
                    function () {
                        return originalValue.apply({}, args);
                    }
                );
            }
        }
        // Return this for chaining purpose
        return this;
    });


}));