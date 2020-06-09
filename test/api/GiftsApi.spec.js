/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.71
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
    instance = new KinowJavascriptSdk.GiftsApi();
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

  describe('GiftsApi', function() {
    describe('consumeGift', function() {
      it('should call consumeGift successfully', function(done) {
        //uncomment below and update the code to test consumeGift
        //instance.consumeGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createGift', function() {
      it('should call createGift successfully', function(done) {
        //uncomment below and update the code to test createGift
        //instance.createGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGift', function() {
      it('should call deleteGift successfully', function(done) {
        //uncomment below and update the code to test deleteGift
        //instance.deleteGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGiftsInCart', function() {
      it('should call deleteGiftsInCart successfully', function(done) {
        //uncomment below and update the code to test deleteGiftsInCart
        //instance.deleteGiftsInCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGift', function() {
      it('should call getGift successfully', function(done) {
        //uncomment below and update the code to test getGift
        //instance.getGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGiftInCart', function() {
      it('should call getGiftInCart successfully', function(done) {
        //uncomment below and update the code to test getGiftInCart
        //instance.getGiftInCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGiftToken', function() {
      it('should call getGiftToken successfully', function(done) {
        //uncomment below and update the code to test getGiftToken
        //instance.getGiftToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGifts', function() {
      it('should call getGifts successfully', function(done) {
        //uncomment below and update the code to test getGifts
        //instance.getGifts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendGift', function() {
      it('should call sendGift successfully', function(done) {
        //uncomment below and update the code to test sendGift
        //instance.sendGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGift', function() {
      it('should call updateGift successfully', function(done) {
        //uncomment below and update the code to test updateGift
        //instance.updateGift(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
