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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CustomerId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomerId'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.FacebookApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CustomerId);
  }
}(this, function(ApiClient, CustomerId) {
  'use strict';

  /**
   * Facebook service.
   * @module api/FacebookApi
   * @version 1.0.82
   */

  /**
   * Constructs a new FacebookApi. 
   * @alias module:api/FacebookApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create new Facebook ID for user
     * @param {Integer} customerId Customer ID
     * @param {String} facebookId Facebook ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.createFacebookIdWithHttpInfo = function(customerId, facebookId) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling createFacebookId");
      }

      // verify the required parameter 'facebookId' is set
      if (facebookId === undefined || facebookId === null) {
        throw new Error("Missing the required parameter 'facebookId' when calling createFacebookId");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'customer_id': customerId,
        'facebook_id': facebookId
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/facebook/customers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new Facebook ID for user
     * @param {Integer} customerId Customer ID
     * @param {String} facebookId Facebook ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.createFacebookId = function(customerId, facebookId) {
      return this.createFacebookIdWithHttpInfo(customerId, facebookId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get customer ID by Facebook ID
     * @param {Integer} facebookId Facebook ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerId} and HTTP response
     */
    this.getFacebookCustomerWithHttpInfo = function(facebookId) {
      var postBody = null;

      // verify the required parameter 'facebookId' is set
      if (facebookId === undefined || facebookId === null) {
        throw new Error("Missing the required parameter 'facebookId' when calling getFacebookCustomer");
      }


      var pathParams = {
        'facebook_id': facebookId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = CustomerId;

      return this.apiClient.callApi(
        '/facebook/customers/{facebook_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer ID by Facebook ID
     * @param {Integer} facebookId Facebook ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerId}
     */
    this.getFacebookCustomer = function(facebookId) {
      return this.getFacebookCustomerWithHttpInfo(facebookId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
