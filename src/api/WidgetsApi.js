/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.46
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
    define(['ApiClient', 'model/Image', 'model/WidgetFooterMenus', 'model/WidgetSliders', 'model/WidgetSlider', 'model/WidgetTopMenus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Image'), require('../model/WidgetFooterMenus'), require('../model/WidgetSliders'), require('../model/WidgetSlider'), require('../model/WidgetTopMenus'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.WidgetsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Image, root.KinowJavascriptSdk.WidgetFooterMenus, root.KinowJavascriptSdk.WidgetSliders, root.KinowJavascriptSdk.WidgetSlider, root.KinowJavascriptSdk.WidgetTopMenus);
  }
}(this, function(ApiClient, Image, WidgetFooterMenus, WidgetSliders, WidgetSlider, WidgetTopMenus) {
  'use strict';

  /**
   * Widgets service.
   * @module api/WidgetsApi
   * @version 1.3.46
   */

  /**
   * Constructs a new WidgetsApi. 
   * @alias module:api/WidgetsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get introduction image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Image>} and HTTP response
     */
    this.getIntroImageWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
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
      var returnType = [Image];

      return this.apiClient.callApi(
        '/widgets/intro/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get introduction image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Image>}
     */
    this.getIntroImage = function() {
      return this.getIntroImageWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get footer menu list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetFooterMenus} and HTTP response
     */
    this.getWidgetFooterMenuWithHttpInfo = function(opts) {
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
      var returnType = WidgetFooterMenus;

      return this.apiClient.callApi(
        '/widgets/footer-menu', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get footer menu list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetFooterMenus}
     */
    this.getWidgetFooterMenu = function(opts) {
      return this.getWidgetFooterMenuWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get slider list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetSliders} and HTTP response
     */
    this.getWidgetSliderWithHttpInfo = function(opts) {
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
      var returnType = WidgetSliders;

      return this.apiClient.callApi(
        '/widgets/slider', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get slider list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetSliders}
     */
    this.getWidgetSlider = function(opts) {
      return this.getWidgetSliderWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get slider item
     * @param {Integer} sliderId Slider ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetSlider} and HTTP response
     */
    this.getWidgetSliderItemWithHttpInfo = function(sliderId) {
      var postBody = null;

      // verify the required parameter 'sliderId' is set
      if (sliderId === undefined || sliderId === null) {
        throw new Error("Missing the required parameter 'sliderId' when calling getWidgetSliderItem");
      }


      var pathParams = {
        'slider_id': sliderId
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
      var returnType = WidgetSlider;

      return this.apiClient.callApi(
        '/widgets/slider/{slider_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get slider item
     * @param {Integer} sliderId Slider ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetSlider}
     */
    this.getWidgetSliderItem = function(sliderId) {
      return this.getWidgetSliderItemWithHttpInfo(sliderId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get top menu list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WidgetTopMenus} and HTTP response
     */
    this.getWidgetTopMenuWithHttpInfo = function(opts) {
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
      var returnType = WidgetTopMenus;

      return this.apiClient.callApi(
        '/widgets/top-menu', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get top menu list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WidgetTopMenus}
     */
    this.getWidgetTopMenu = function(opts) {
      return this.getWidgetTopMenuWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
