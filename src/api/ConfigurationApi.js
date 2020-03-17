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
    define(['ApiClient', 'model/ConfigurationList', 'model/Configuration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConfigurationList'), require('../model/Configuration'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ConfigurationApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.ConfigurationList, root.KinowJavascriptSdk.Configuration);
  }
}(this, function(ApiClient, ConfigurationList, Configuration) {
  'use strict';

  /**
   * Configuration service.
   * @module api/ConfigurationApi
   * @version 1.3.54
   */

  /**
   * Constructs a new ConfigurationApi. 
   * @alias module:api/ConfigurationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     *        Get configuration by name.       Available :          - LANG_DEFAULT          - CURRENCY_DEFAULT          - COUNTRY_DEFAULT          - TIMEZONE       
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigurationList} and HTTP response
     */
    this.getConfigurationWithHttpInfo = function(opts) {
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
      var returnType = ConfigurationList;

      return this.apiClient.callApi(
        '/configuration', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     *        Get configuration by name.       Available :          - LANG_DEFAULT          - CURRENCY_DEFAULT          - COUNTRY_DEFAULT          - TIMEZONE       
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigurationList}
     */
    this.getConfiguration = function(opts) {
      return this.getConfigurationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     *       Get configuration by name.      Available :      - LANG_DEFAULT      - CURRENCY_DEFAULT      - COUNTRY_DEFAULT      - TIMEZONE      
     * @param {String} configurationName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Configuration} and HTTP response
     */
    this.getConfigurationByNameWithHttpInfo = function(configurationName) {
      var postBody = null;

      // verify the required parameter 'configurationName' is set
      if (configurationName === undefined || configurationName === null) {
        throw new Error("Missing the required parameter 'configurationName' when calling getConfigurationByName");
      }


      var pathParams = {
        'configuration_name': configurationName
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
      var returnType = Configuration;

      return this.apiClient.callApi(
        '/configuration/{configuration_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     *       Get configuration by name.      Available :      - LANG_DEFAULT      - CURRENCY_DEFAULT      - COUNTRY_DEFAULT      - TIMEZONE      
     * @param {String} configurationName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Configuration}
     */
    this.getConfigurationByName = function(configurationName) {
      return this.getConfigurationByNameWithHttpInfo(configurationName)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
