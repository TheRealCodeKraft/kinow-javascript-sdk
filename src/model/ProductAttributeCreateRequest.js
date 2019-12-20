/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.38
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ProductAttributeCreateRequest = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductAttributeCreateRequest model module.
   * @module model/ProductAttributeCreateRequest
   * @version 1.3.38
   */

  /**
   * Constructs a new <code>ProductAttributeCreateRequest</code>.
   * @alias module:model/ProductAttributeCreateRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ProductAttributeCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductAttributeCreateRequest} obj Optional instance to populate.
   * @return {module:model/ProductAttributeCreateRequest} The populated <code>ProductAttributeCreateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('quality')) {
        obj['quality'] = ApiClient.convertToType(data['quality'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Product ID to attach this attribute
   * @member {Integer} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * BOTH (Streaming & Download), STREAMING or DOWNLOAD
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * ALL, HD or SD
   * @member {String} quality
   */
  exports.prototype['quality'] = undefined;
  /**
   * Final price of the product
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;



  return exports;
}));


