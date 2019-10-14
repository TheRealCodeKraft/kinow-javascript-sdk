/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.27
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
    define(['ApiClient', 'model/OrderState', 'model/OrderStates'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OrderState'), require('../model/OrderStates'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.OrderStatesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.OrderState, root.KinowJavascriptSdk.OrderStates);
  }
}(this, function(ApiClient, OrderState, OrderStates) {
  'use strict';

  /**
   * OrderStates service.
   * @module api/OrderStatesApi
   * @version 1.3.27
   */

  /**
   * Constructs a new OrderStatesApi. 
   * @alias module:api/OrderStatesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get order state
     * @param {Integer} orderStateId Order state ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderState} and HTTP response
     */
    this.getOrderStateWithHttpInfo = function(orderStateId) {
      var postBody = null;

      // verify the required parameter 'orderStateId' is set
      if (orderStateId === undefined || orderStateId === null) {
        throw new Error("Missing the required parameter 'orderStateId' when calling getOrderState");
      }


      var pathParams = {
        'order_state_id': orderStateId
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
      var returnType = OrderState;

      return this.apiClient.callApi(
        '/order-states/{order_state_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get order state
     * @param {Integer} orderStateId Order state ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderState}
     */
    this.getOrderState = function(orderStateId) {
      return this.getOrderStateWithHttpInfo(orderStateId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get order state list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderStates} and HTTP response
     */
    this.getOrderStatesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
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
      var returnType = OrderStates;

      return this.apiClient.callApi(
        '/order-states', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get order state list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderStates}
     */
    this.getOrderStates = function(opts) {
      return this.getOrderStatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
