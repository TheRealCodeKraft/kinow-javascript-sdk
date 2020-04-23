/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.66
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
    define(['ApiClient', 'model/ProductAccess', 'model/SubscriptionAccesses', 'model/Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProductAccess'), require('../model/SubscriptionAccesses'), require('../model/Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ProductAccessesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.ProductAccess, root.KinowJavascriptSdk.SubscriptionAccesses, root.KinowJavascriptSdk.Subscription);
  }
}(this, function(ApiClient, ProductAccess, SubscriptionAccesses, Subscription) {
  'use strict';

  /**
   * ProductAccesses service.
   * @module api/ProductAccessesApi
   * @version 1.3.66
   */

  /**
   * Constructs a new ProductAccessesApi. 
   * @alias module:api/ProductAccessesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create new product access
     * @param {module:model/ProductAccess} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductAccess} and HTTP response
     */
    this.createProductAccessWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createProductAccess");
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
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = ProductAccess;

      return this.apiClient.callApi(
        '/product-accesses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new product access
     * @param {module:model/ProductAccess} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductAccess}
     */
    this.createProductAccess = function(body) {
      return this.createProductAccessWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete product access
     * @param {Integer} productAccessId Access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteProductAccessWithHttpInfo = function(productAccessId) {
      var postBody = null;

      // verify the required parameter 'productAccessId' is set
      if (productAccessId === undefined || productAccessId === null) {
        throw new Error("Missing the required parameter 'productAccessId' when calling deleteProductAccess");
      }


      var pathParams = {
        'product_access_id': productAccessId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/product-accesses/{product_access_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete product access
     * @param {Integer} productAccessId Access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteProductAccess = function(productAccessId) {
      return this.deleteProductAccessWithHttpInfo(productAccessId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get customer accesses for subscription
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters       &#x60;&#x60;&#x60;      type[value]&#x3D;string&amp;type[operator]&#x3D;strict&amp;cancel[value]&#x3D;string&amp;cancel[operator]&#x3D;contains      _______________        {      \&quot;type\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;cancel\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;Operator can be strict, contains, gt or lt.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionAccesses} and HTTP response
     */
    this.getCustomerAccessesSubscriptionsWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerAccessesSubscriptions");
      }


      var pathParams = {
        'customer_id': customerId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'filters': opts['filters'],
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
      var returnType = SubscriptionAccesses;

      return this.apiClient.callApi(
        '/customers/{customer_id}/accesses/subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer accesses for subscription
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters       &#x60;&#x60;&#x60;      type[value]&#x3D;string&amp;type[operator]&#x3D;strict&amp;cancel[value]&#x3D;string&amp;cancel[operator]&#x3D;contains      _______________        {      \&quot;type\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;cancel\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;Operator can be strict, contains, gt or lt.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionAccesses}
     */
    this.getCustomerAccessesSubscriptions = function(customerId, opts) {
      return this.getCustomerAccessesSubscriptionsWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get customer access for videos
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionAccesses} and HTTP response
     */
    this.getCustomerAccessesVideosWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerAccessesVideos");
      }


      var pathParams = {
        'customer_id': customerId
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
      var returnType = SubscriptionAccesses;

      return this.apiClient.callApi(
        '/customers/{customer_id}/accesses/videos', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer access for videos
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionAccesses}
     */
    this.getCustomerAccessesVideos = function(customerId, opts) {
      return this.getCustomerAccessesVideosWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get product access
     * @param {Integer} productAccessId Product access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductAccess} and HTTP response
     */
    this.getProductAccessWithHttpInfo = function(productAccessId) {
      var postBody = null;

      // verify the required parameter 'productAccessId' is set
      if (productAccessId === undefined || productAccessId === null) {
        throw new Error("Missing the required parameter 'productAccessId' when calling getProductAccess");
      }


      var pathParams = {
        'product_access_id': productAccessId
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
      var returnType = ProductAccess;

      return this.apiClient.callApi(
        '/product-accesses/{product_access_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get product access
     * @param {Integer} productAccessId Product access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductAccess}
     */
    this.getProductAccess = function(productAccessId) {
      return this.getProductAccessWithHttpInfo(productAccessId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get product accesses list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.type Filter by access type, available values are: video, sub
     * @param {String} opts.dateAdd Filter by creation date
     * @param {String} opts.dateAddDirection Choose the direction for date_add parameter, default value is after ,available values are: before, equal, after
     * @param {String} opts.dateExp Filter by expiration date
     * @param {String} opts.dateExpDirection Choose the direction for date_exp parameter, default value is after ,available values are: before, equal, after
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionAccesses} and HTTP response
     */
    this.getProductAccessesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'type': opts['type'],
        'date_add': opts['dateAdd'],
        'date_add_direction': opts['dateAddDirection'],
        'date_exp': opts['dateExp'],
        'date_exp_direction': opts['dateExpDirection'],
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
      var returnType = SubscriptionAccesses;

      return this.apiClient.callApi(
        '/product-accesses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get product accesses list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.type Filter by access type, available values are: video, sub
     * @param {String} opts.dateAdd Filter by creation date
     * @param {String} opts.dateAddDirection Choose the direction for date_add parameter, default value is after ,available values are: before, equal, after
     * @param {String} opts.dateExp Filter by expiration date
     * @param {String} opts.dateExpDirection Choose the direction for date_exp parameter, default value is after ,available values are: before, equal, after
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionAccesses}
     */
    this.getProductAccesses = function(opts) {
      return this.getProductAccessesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Subcribe to a reccuring payment for an Access
     * @param {Integer} productAccessId Access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.subscribeWithHttpInfo = function(productAccessId) {
      var postBody = null;

      // verify the required parameter 'productAccessId' is set
      if (productAccessId === undefined || productAccessId === null) {
        throw new Error("Missing the required parameter 'productAccessId' when calling subscribe");
      }


      var pathParams = {
        'product_access_id': productAccessId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/product-accesses/{product_access_id}/subscribe', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Subcribe to a reccuring payment for an Access
     * @param {Integer} productAccessId Access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.subscribe = function(productAccessId) {
      return this.subscribeWithHttpInfo(productAccessId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Switch an Access to another Subscription
     * @param {String} productAccessId Access ID to switch
     * @param {Integer} subscriptionId Subscription to switch to
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.switchSubscriptionWithHttpInfo = function(productAccessId, subscriptionId) {
      var postBody = null;

      // verify the required parameter 'productAccessId' is set
      if (productAccessId === undefined || productAccessId === null) {
        throw new Error("Missing the required parameter 'productAccessId' when calling switchSubscription");
      }

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling switchSubscription");
      }


      var pathParams = {
        'product_access_id': productAccessId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'subscription_id': subscriptionId
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/product-accesses/{product_access_id}/switch', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Switch an Access to another Subscription
     * @param {String} productAccessId Access ID to switch
     * @param {Integer} subscriptionId Subscription to switch to
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.switchSubscription = function(productAccessId, subscriptionId) {
      return this.switchSubscriptionWithHttpInfo(productAccessId, subscriptionId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete Access pending switch
     * @param {Integer} productAccessId Product access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.switchSubscriptionDeleteWithHttpInfo = function(productAccessId) {
      var postBody = null;

      // verify the required parameter 'productAccessId' is set
      if (productAccessId === undefined || productAccessId === null) {
        throw new Error("Missing the required parameter 'productAccessId' when calling switchSubscriptionDelete");
      }


      var pathParams = {
        'product_access_id': productAccessId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/product-accesses/{product_access_id}/switch', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete Access pending switch
     * @param {Integer} productAccessId Product access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.switchSubscriptionDelete = function(productAccessId) {
      return this.switchSubscriptionDeleteWithHttpInfo(productAccessId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Return Access pending switch
     * @param {String} productAccessId Access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Subscription} and HTTP response
     */
    this.switchSubscriptionPendingWithHttpInfo = function(productAccessId) {
      var postBody = null;

      // verify the required parameter 'productAccessId' is set
      if (productAccessId === undefined || productAccessId === null) {
        throw new Error("Missing the required parameter 'productAccessId' when calling switchSubscriptionPending");
      }


      var pathParams = {
        'product_access_id': productAccessId
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
      var returnType = Subscription;

      return this.apiClient.callApi(
        '/product-accesses/{product_access_id}/switch', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return Access pending switch
     * @param {String} productAccessId Access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Subscription}
     */
    this.switchSubscriptionPending = function(productAccessId) {
      return this.switchSubscriptionPendingWithHttpInfo(productAccessId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Unsubcribe an Access recurring payment
     * @param {Integer} productAccessId Access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.unsubscribeWithHttpInfo = function(productAccessId) {
      var postBody = null;

      // verify the required parameter 'productAccessId' is set
      if (productAccessId === undefined || productAccessId === null) {
        throw new Error("Missing the required parameter 'productAccessId' when calling unsubscribe");
      }


      var pathParams = {
        'product_access_id': productAccessId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/product-accesses/{product_access_id}/unsubscribe', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unsubcribe an Access recurring payment
     * @param {Integer} productAccessId Access ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.unsubscribe = function(productAccessId) {
      return this.unsubscribeWithHttpInfo(productAccessId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update product access
     * @param {Integer} productAccessId Product access ID to update
     * @param {module:model/ProductAccess} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductAccess} and HTTP response
     */
    this.updateProductAccessWithHttpInfo = function(productAccessId, body) {
      var postBody = body;

      // verify the required parameter 'productAccessId' is set
      if (productAccessId === undefined || productAccessId === null) {
        throw new Error("Missing the required parameter 'productAccessId' when calling updateProductAccess");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProductAccess");
      }


      var pathParams = {
        'product_access_id': productAccessId
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
      var returnType = ProductAccess;

      return this.apiClient.callApi(
        '/product-accesses/{product_access_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update product access
     * @param {Integer} productAccessId Product access ID to update
     * @param {module:model/ProductAccess} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductAccess}
     */
    this.updateProductAccess = function(productAccessId, body) {
      return this.updateProductAccessWithHttpInfo(productAccessId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
