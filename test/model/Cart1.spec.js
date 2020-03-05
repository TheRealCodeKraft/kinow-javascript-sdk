/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.47
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KinowJavascriptSdk);
  }
}(this, function(expect, KinowJavascriptSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KinowJavascriptSdk.Cart1();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Cart1', function() {
    it('should create an instance of Cart1', function() {
      // uncomment below and update the code to test Cart1
      //var instance = new KinowJavascriptSdk.Cart1();
      //expect(instance).to.be.a(KinowJavascriptSdk.Cart1);
    });

    it('should have the property idCustomer (base name: "id_customer")', function() {
      // uncomment below and update the code to test the property idCustomer
      //var instance = new KinowJavascriptSdk.Cart1();
      //expect(instance).to.be();
    });

    it('should have the property idCurrency (base name: "id_currency")', function() {
      // uncomment below and update the code to test the property idCurrency
      //var instance = new KinowJavascriptSdk.Cart1();
      //expect(instance).to.be();
    });

    it('should have the property idLang (base name: "id_lang")', function() {
      // uncomment below and update the code to test the property idLang
      //var instance = new KinowJavascriptSdk.Cart1();
      //expect(instance).to.be();
    });

  });

}));