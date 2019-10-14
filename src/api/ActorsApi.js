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
    define(['ApiClient', 'model/Actor', 'model/Products', 'model/Actors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Actor'), require('../model/Products'), require('../model/Actors'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ActorsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Actor, root.KinowJavascriptSdk.Products, root.KinowJavascriptSdk.Actors);
  }
}(this, function(ApiClient, Actor, Products, Actors) {
  'use strict';

  /**
   * Actors service.
   * @module api/ActorsApi
   * @version 1.3.27
   */

  /**
   * Constructs a new ActorsApi. 
   * @alias module:api/ActorsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create new actor
     * @param {module:model/Actor} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Actor} and HTTP response
     */
    this.createActorWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createActor");
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
      var returnType = Actor;

      return this.apiClient.callApi(
        '/actors', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new actor
     * @param {module:model/Actor} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Actor}
     */
    this.createActor = function(body) {
      return this.createActorWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete actor
     * @param {Integer} actorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteActorWithHttpInfo = function(actorId) {
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling deleteActor");
      }


      var pathParams = {
        'actor_id': actorId
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
        '/actors/{actor_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete actor
     * @param {Integer} actorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteActor = function(actorId) {
      return this.deleteActorWithHttpInfo(actorId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get actor
     * @param {Integer} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Actor} and HTTP response
     */
    this.getActorWithHttpInfo = function(actorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling getActor");
      }


      var pathParams = {
        'actor_id': actorId
      };
      var queryParams = {
        'image_type': opts['imageType'],
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
      var returnType = Actor;

      return this.apiClient.callApi(
        '/actors/{actor_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get actor
     * @param {Integer} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Actor}
     */
    this.getActor = function(actorId, opts) {
      return this.getActorWithHttpInfo(actorId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get actor products
     * @param {Integer} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @param {String} opts.ip filter by customer ip
     * @param {String} opts.features       &#x60;&#x60;&#x60;      features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict      _______________        {      \&quot;*\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;1\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.      To search on all features, you can pass * as featureId.
     * @param {String} opts.filters       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Products} and HTTP response
     */
    this.getActorProductsWithHttpInfo = function(actorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling getActorProducts");
      }


      var pathParams = {
        'actor_id': actorId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
        'ip': opts['ip'],
        'features': opts['features'],
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
      var returnType = Products;

      return this.apiClient.callApi(
        '/actors/{actor_id}/products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get actor products
     * @param {Integer} actorId Actor ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @param {String} opts.ip filter by customer ip
     * @param {String} opts.features       &#x60;&#x60;&#x60;      features[*][value]&#x3D;string&amp;features[*][operator]&#x3D;strict&amp;features[1][value]&#x3D;string&amp;features[1][operator]&#x3D;strict      _______________        {      \&quot;*\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;strict\&quot;      },      \&quot;1\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.      To search on all features, you can pass * as featureId.
     * @param {String} opts.filters       &#x60;&#x60;&#x60;      name[value]&#x3D;string&amp;name][operator]&#x3D;contains&amp;date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;name\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;contains\&quot;      },      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Products}
     */
    this.getActorProducts = function(actorId, opts) {
      return this.getActorProductsWithHttpInfo(actorId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get actors list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Actors} and HTTP response
     */
    this.getActorsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'image_type': opts['imageType'],
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
      var returnType = Actors;

      return this.apiClient.callApi(
        '/actors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get actors list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Actors}
     */
    this.getActors = function(opts) {
      return this.getActorsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get actors attached to product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Actors} and HTTP response
     */
    this.getProductActorsWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductActors");
      }


      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'image_type': opts['imageType'],
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
      var returnType = Actors;

      return this.apiClient.callApi(
        '/products/{product_id}/actors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get actors attached to product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Actors}
     */
    this.getProductActors = function(productId, opts) {
      return this.getProductActorsWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update actor
     * @param {Integer} actorId 
     * @param {module:model/Actor} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateActorWithHttpInfo = function(actorId, body) {
      var postBody = body;

      // verify the required parameter 'actorId' is set
      if (actorId === undefined || actorId === null) {
        throw new Error("Missing the required parameter 'actorId' when calling updateActor");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateActor");
      }


      var pathParams = {
        'actor_id': actorId
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
        '/actors/{actor_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update actor
     * @param {Integer} actorId 
     * @param {module:model/Actor} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateActor = function(actorId, body) {
      return this.updateActorWithHttpInfo(actorId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
