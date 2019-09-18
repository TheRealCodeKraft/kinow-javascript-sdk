/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.3.4
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
    define(['ApiClient', 'model/I18nField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./I18nField'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.FeatureValue = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, I18nField) {
  'use strict';




  /**
   * The FeatureValue model module.
   * @module model/FeatureValue
   * @version 1.3.4
   */

  /**
   * Constructs a new <code>FeatureValue</code>.
   * @alias module:model/FeatureValue
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>FeatureValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureValue} obj Optional instance to populate.
   * @return {module:model/FeatureValue} The populated <code>FeatureValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('id_feature')) {
        obj['id_feature'] = ApiClient.convertToType(data['id_feature'], 'Integer');
      }
      if (data.hasOwnProperty('custom')) {
        obj['custom'] = ApiClient.convertToType(data['custom'], 'Boolean');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], [I18nField]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {Integer} id_feature
   */
  exports.prototype['id_feature'] = undefined;
  /**
   * 
   * @member {Boolean} custom
   */
  exports.prototype['custom'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


