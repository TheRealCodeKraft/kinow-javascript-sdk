# KinowJavascriptSdk.DevicesApi

All URIs are relative to *https://api.kinow.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDevices**](DevicesApi.md#createDevices) | **POST** /devices | 
[**deleteDevice**](DevicesApi.md#deleteDevice) | **DELETE** /devices/{device_id} | 
[**getCustomerDevices**](DevicesApi.md#getCustomerDevices) | **GET** /devices/{customer_id} | 


<a name="createDevices"></a>
# **createDevices**
> Device createDevices(body)



Create new devices

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DevicesApi();

var body = new KinowJavascriptSdk.ProductAttributeCreateRequest1(); // ProductAttributeCreateRequest1 | 

apiInstance.createDevices(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductAttributeCreateRequest1**](ProductAttributeCreateRequest1.md)|  | 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteDevice"></a>
# **deleteDevice**
> deleteDevice(deviceId)



Delete Device

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DevicesApi();

var deviceId = 789; // Integer | Device ID to delete

apiInstance.deleteDevice(deviceId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **Integer**| Device ID to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCustomerDevices"></a>
# **getCustomerDevices**
> DeviceList getCustomerDevices(customerId, opts)



Get customer devices list

### Example
```javascript
var KinowJavascriptSdk = require('kinow-javascript-sdk');

var apiInstance = new KinowJavascriptSdk.DevicesApi();

var customerId = 789; // Integer | Customer ID to fetch

var opts = { 
  'page': 789, // Integer | 
  'perPage': 789 // Integer | 
};
apiInstance.getCustomerDevices(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**| Customer ID to fetch | 
 **page** | **Integer**|  | [optional] 
 **perPage** | **Integer**|  | [optional] 

### Return type

[**DeviceList**](DeviceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

