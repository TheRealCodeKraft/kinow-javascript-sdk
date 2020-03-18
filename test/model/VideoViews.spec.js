/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.56
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
    instance = new KinowJavascriptSdk.VideoViews();
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

  describe('VideoViews', function() {
    it('should create an instance of VideoViews', function() {
      // uncomment below and update the code to test VideoViews
      //var instance = new KinowJavascriptSdk.VideoViews();
      //expect(instance).to.be.a(KinowJavascriptSdk.VideoViews);
    });

    it('should have the property videoId (base name: "video_id")', function() {
      // uncomment below and update the code to test the property videoId
      //var instance = new KinowJavascriptSdk.VideoViews();
      //expect(instance).to.be();
    });

    it('should have the property played (base name: "played")', function() {
      // uncomment below and update the code to test the property played
      //var instance = new KinowJavascriptSdk.VideoViews();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new KinowJavascriptSdk.VideoViews();
      //expect(instance).to.be();
    });

    it('should have the property views (base name: "views")', function() {
      // uncomment below and update the code to test the property views
      //var instance = new KinowJavascriptSdk.VideoViews();
      //expect(instance).to.be();
    });

  });

}));
