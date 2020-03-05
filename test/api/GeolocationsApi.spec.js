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
    instance = new KinowJavascriptSdk.GeolocationsApi();
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

  describe('GeolocationsApi', function() {
    describe('getIPLocation', function() {
      it('should call getIPLocation successfully', function(done) {
        //uncomment below and update the code to test getIPLocation
        //instance.getIPLocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPlatformAccessInfo', function() {
      it('should call getPlatformAccessInfo successfully', function(done) {
        //uncomment below and update the code to test getPlatformAccessInfo
        //instance.getPlatformAccessInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductGeolocations', function() {
      it('should call getProductGeolocations successfully', function(done) {
        //uncomment below and update the code to test getProductGeolocations
        //instance.getProductGeolocations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductGeolocationsByIp', function() {
      it('should call getProductGeolocationsByIp successfully', function(done) {
        //uncomment below and update the code to test getProductGeolocationsByIp
        //instance.getProductGeolocationsByIp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVideoGeolocationByIp', function() {
      it('should call getVideoGeolocationByIp successfully', function(done) {
        //uncomment below and update the code to test getVideoGeolocationByIp
        //instance.getVideoGeolocationByIp(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setProductGeolocation', function() {
      it('should call setProductGeolocation successfully', function(done) {
        //uncomment below and update the code to test setProductGeolocation
        //instance.setProductGeolocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setVideoGeolocation', function() {
      it('should call setVideoGeolocation successfully', function(done) {
        //uncomment below and update the code to test setVideoGeolocation
        //instance.setVideoGeolocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
