/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.54
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IPCoordinates'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IPCoordinates'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.IPLocation = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.IPCoordinates);
  }
}(this, function(ApiClient, IPCoordinates) {
  'use strict';




  /**
   * The IPLocation model module.
   * @module model/IPLocation
   * @version 1.3.54
   */

  /**
   * Constructs a new <code>IPLocation</code>.
   * @alias module:model/IPLocation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>IPLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IPLocation} obj Optional instance to populate.
   * @return {module:model/IPLocation} The populated <code>IPLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('continent')) {
        obj['continent'] = ApiClient.convertToType(data['continent'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('time_zone')) {
        obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
      }
      if (data.hasOwnProperty('coordinates')) {
        obj['coordinates'] = IPCoordinates.constructFromObject(data['coordinates']);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * 
   * @member {String} continent
   */
  exports.prototype['continent'] = undefined;
  /**
   * 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * 
   * @member {String} time_zone
   */
  exports.prototype['time_zone'] = undefined;
  /**
   * @member {module:model/IPCoordinates} coordinates
   */
  exports.prototype['coordinates'] = undefined;



  return exports;
}));


