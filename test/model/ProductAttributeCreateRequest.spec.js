/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.82
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
    instance = new KinowJavascriptSdk.ProductAttributeCreateRequest();
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

  describe('ProductAttributeCreateRequest', function() {
    it('should create an instance of ProductAttributeCreateRequest', function() {
      // uncomment below and update the code to test ProductAttributeCreateRequest
      //var instance = new KinowJavascriptSdk.ProductAttributeCreateRequest();
      //expect(instance).to.be.a(KinowJavascriptSdk.ProductAttributeCreateRequest);
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new KinowJavascriptSdk.ProductAttributeCreateRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new KinowJavascriptSdk.ProductAttributeCreateRequest();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new KinowJavascriptSdk.ProductAttributeCreateRequest();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.ProductAttributeCreateRequest();
      //expect(instance).to.be();
    });

  });

}));
