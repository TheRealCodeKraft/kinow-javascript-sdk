/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.41
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Actor', 'model/Actor1', 'model/Actor2', 'model/Actors', 'model/Address', 'model/Address1', 'model/BlogCategory', 'model/BlogCategoryLists', 'model/BlogPage', 'model/BlogPageLists', 'model/Bonus', 'model/CMSCategoriesLists', 'model/CMSCategory', 'model/CMSPage', 'model/CMSPageLists', 'model/Cart', 'model/Cart1', 'model/Cart2', 'model/CartRule', 'model/CartRuleRestrictionGroup', 'model/CartRuleRestrictionGroupItem', 'model/CartRules', 'model/Carts', 'model/Categories', 'model/Category', 'model/CategoryImages', 'model/Configuration', 'model/ConfigurationList', 'model/Countries', 'model/Country', 'model/Currencies', 'model/Currency', 'model/Customer', 'model/CustomerCreateRequest', 'model/CustomerCurrentViews', 'model/CustomerGroupVideoStats', 'model/CustomerGroupVideoStats1', 'model/CustomerId', 'model/CustomerThread', 'model/CustomerThreadList', 'model/CustomerVideoStats', 'model/CustomerVideoStats1', 'model/Customers', 'model/Device', 'model/DeviceList', 'model/Director', 'model/Director1', 'model/Director2', 'model/Directors', 'model/DownloadUrl', 'model/Extract', 'model/Feature', 'model/FeatureValue', 'model/Features', 'model/Gender', 'model/Genders', 'model/Geoloc', 'model/Geolocs', 'model/Gift', 'model/Gift1', 'model/Gift2', 'model/GiftToken', 'model/Gifts', 'model/Group', 'model/Groups', 'model/I18nField', 'model/IPCoordinates', 'model/IPLocation', 'model/Image', 'model/Language', 'model/Languages', 'model/MediaFile', 'model/MediaFiles', 'model/MediaSource', 'model/MediaSources', 'model/OAuthToken', 'model/Order', 'model/OrderHistories', 'model/OrderHistory', 'model/OrderState', 'model/OrderStates', 'model/Orders', 'model/Pagination', 'model/PaymentArguments', 'model/PaymentDetails', 'model/PaymentDetails1', 'model/PaymentMethods', 'model/PaymentModule', 'model/PaymentModules', 'model/PaymentUrl', 'model/PlayerConfiguration', 'model/PrepaymentBalance', 'model/PrepaymentBonus', 'model/PrepaymentBonus1', 'model/PrepaymentOperation', 'model/PrepaymentOperations', 'model/PrepaymentRecharge', 'model/PrepaymentRecharges', 'model/Product', 'model/ProductAccess', 'model/ProductAccessInfo', 'model/ProductAttribute', 'model/ProductAttributeCreateRequest', 'model/ProductAttributeCreateRequest1', 'model/ProductAttributesResponse', 'model/ProductIDList', 'model/ProductImagesResponse', 'model/Products', 'model/Products1', 'model/Screenshot', 'model/SessionVideoStat', 'model/SessionVideoStats', 'model/Subscription', 'model/SubscriptionAccesses', 'model/Subscriptions', 'model/Subtitle', 'model/Tag', 'model/Task', 'model/TaskCreateRequest', 'model/TaskFactory', 'model/Video', 'model/VideoAccessInfo', 'model/VideoCategory', 'model/VideoFreeAccess', 'model/VideoIDList', 'model/VideoStat', 'model/VideoStats', 'model/VideoSubtitlesResponse', 'model/VideoViews', 'model/Videos', 'model/Videos1', 'model/Videos2', 'model/WidgetFooterMenu', 'model/WidgetFooterMenus', 'model/WidgetSlider', 'model/WidgetSliders', 'model/WidgetTopMenu', 'model/WidgetTopMenus', 'api/ActorsApi', 'api/AddressApi', 'api/AttributesApi', 'api/BlogCategoriesApi', 'api/BlogPagesApi', 'api/BookmarksApi', 'api/CMSCategoriesApi', 'api/CMSPagesApi', 'api/CartRulesApi', 'api/CartsApi', 'api/CategoriesApi', 'api/ConfigurationApi', 'api/CountriesApi', 'api/CurrenciesApi', 'api/CustomerThreadsApi', 'api/CustomersApi', 'api/DevicesApi', 'api/DirectorsApi', 'api/ExtractsApi', 'api/FeatureValuesApi', 'api/FeaturesApi', 'api/GendersApi', 'api/GeolocationsApi', 'api/GiftsApi', 'api/GroupsApi', 'api/ImagesApi', 'api/LanguagesApi', 'api/MediaFilesApi', 'api/MediaSourcesApi', 'api/OAuthApi', 'api/OrderHistoriesApi', 'api/OrderStatesApi', 'api/OrdersApi', 'api/PaymentModulesApi', 'api/PrepaymentsApi', 'api/ProductAccessesApi', 'api/ProductsApi', 'api/StatsApi', 'api/SubscriptionsApi', 'api/TasksApi', 'api/VideosApi', 'api/WidgetsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Actor'), require('./model/Actor1'), require('./model/Actor2'), require('./model/Actors'), require('./model/Address'), require('./model/Address1'), require('./model/BlogCategory'), require('./model/BlogCategoryLists'), require('./model/BlogPage'), require('./model/BlogPageLists'), require('./model/Bonus'), require('./model/CMSCategoriesLists'), require('./model/CMSCategory'), require('./model/CMSPage'), require('./model/CMSPageLists'), require('./model/Cart'), require('./model/Cart1'), require('./model/Cart2'), require('./model/CartRule'), require('./model/CartRuleRestrictionGroup'), require('./model/CartRuleRestrictionGroupItem'), require('./model/CartRules'), require('./model/Carts'), require('./model/Categories'), require('./model/Category'), require('./model/CategoryImages'), require('./model/Configuration'), require('./model/ConfigurationList'), require('./model/Countries'), require('./model/Country'), require('./model/Currencies'), require('./model/Currency'), require('./model/Customer'), require('./model/CustomerCreateRequest'), require('./model/CustomerCurrentViews'), require('./model/CustomerGroupVideoStats'), require('./model/CustomerGroupVideoStats1'), require('./model/CustomerId'), require('./model/CustomerThread'), require('./model/CustomerThreadList'), require('./model/CustomerVideoStats'), require('./model/CustomerVideoStats1'), require('./model/Customers'), require('./model/Device'), require('./model/DeviceList'), require('./model/Director'), require('./model/Director1'), require('./model/Director2'), require('./model/Directors'), require('./model/DownloadUrl'), require('./model/Extract'), require('./model/Feature'), require('./model/FeatureValue'), require('./model/Features'), require('./model/Gender'), require('./model/Genders'), require('./model/Geoloc'), require('./model/Geolocs'), require('./model/Gift'), require('./model/Gift1'), require('./model/Gift2'), require('./model/GiftToken'), require('./model/Gifts'), require('./model/Group'), require('./model/Groups'), require('./model/I18nField'), require('./model/IPCoordinates'), require('./model/IPLocation'), require('./model/Image'), require('./model/Language'), require('./model/Languages'), require('./model/MediaFile'), require('./model/MediaFiles'), require('./model/MediaSource'), require('./model/MediaSources'), require('./model/OAuthToken'), require('./model/Order'), require('./model/OrderHistories'), require('./model/OrderHistory'), require('./model/OrderState'), require('./model/OrderStates'), require('./model/Orders'), require('./model/Pagination'), require('./model/PaymentArguments'), require('./model/PaymentDetails'), require('./model/PaymentDetails1'), require('./model/PaymentMethods'), require('./model/PaymentModule'), require('./model/PaymentModules'), require('./model/PaymentUrl'), require('./model/PlayerConfiguration'), require('./model/PrepaymentBalance'), require('./model/PrepaymentBonus'), require('./model/PrepaymentBonus1'), require('./model/PrepaymentOperation'), require('./model/PrepaymentOperations'), require('./model/PrepaymentRecharge'), require('./model/PrepaymentRecharges'), require('./model/Product'), require('./model/ProductAccess'), require('./model/ProductAccessInfo'), require('./model/ProductAttribute'), require('./model/ProductAttributeCreateRequest'), require('./model/ProductAttributeCreateRequest1'), require('./model/ProductAttributesResponse'), require('./model/ProductIDList'), require('./model/ProductImagesResponse'), require('./model/Products'), require('./model/Products1'), require('./model/Screenshot'), require('./model/SessionVideoStat'), require('./model/SessionVideoStats'), require('./model/Subscription'), require('./model/SubscriptionAccesses'), require('./model/Subscriptions'), require('./model/Subtitle'), require('./model/Tag'), require('./model/Task'), require('./model/TaskCreateRequest'), require('./model/TaskFactory'), require('./model/Video'), require('./model/VideoAccessInfo'), require('./model/VideoCategory'), require('./model/VideoFreeAccess'), require('./model/VideoIDList'), require('./model/VideoStat'), require('./model/VideoStats'), require('./model/VideoSubtitlesResponse'), require('./model/VideoViews'), require('./model/Videos'), require('./model/Videos1'), require('./model/Videos2'), require('./model/WidgetFooterMenu'), require('./model/WidgetFooterMenus'), require('./model/WidgetSlider'), require('./model/WidgetSliders'), require('./model/WidgetTopMenu'), require('./model/WidgetTopMenus'), require('./api/ActorsApi'), require('./api/AddressApi'), require('./api/AttributesApi'), require('./api/BlogCategoriesApi'), require('./api/BlogPagesApi'), require('./api/BookmarksApi'), require('./api/CMSCategoriesApi'), require('./api/CMSPagesApi'), require('./api/CartRulesApi'), require('./api/CartsApi'), require('./api/CategoriesApi'), require('./api/ConfigurationApi'), require('./api/CountriesApi'), require('./api/CurrenciesApi'), require('./api/CustomerThreadsApi'), require('./api/CustomersApi'), require('./api/DevicesApi'), require('./api/DirectorsApi'), require('./api/ExtractsApi'), require('./api/FeatureValuesApi'), require('./api/FeaturesApi'), require('./api/GendersApi'), require('./api/GeolocationsApi'), require('./api/GiftsApi'), require('./api/GroupsApi'), require('./api/ImagesApi'), require('./api/LanguagesApi'), require('./api/MediaFilesApi'), require('./api/MediaSourcesApi'), require('./api/OAuthApi'), require('./api/OrderHistoriesApi'), require('./api/OrderStatesApi'), require('./api/OrdersApi'), require('./api/PaymentModulesApi'), require('./api/PrepaymentsApi'), require('./api/ProductAccessesApi'), require('./api/ProductsApi'), require('./api/StatsApi'), require('./api/SubscriptionsApi'), require('./api/TasksApi'), require('./api/VideosApi'), require('./api/WidgetsApi'));
  }
}(function(ApiClient, Actor, Actor1, Actor2, Actors, Address, Address1, BlogCategory, BlogCategoryLists, BlogPage, BlogPageLists, Bonus, CMSCategoriesLists, CMSCategory, CMSPage, CMSPageLists, Cart, Cart1, Cart2, CartRule, CartRuleRestrictionGroup, CartRuleRestrictionGroupItem, CartRules, Carts, Categories, Category, CategoryImages, Configuration, ConfigurationList, Countries, Country, Currencies, Currency, Customer, CustomerCreateRequest, CustomerCurrentViews, CustomerGroupVideoStats, CustomerGroupVideoStats1, CustomerId, CustomerThread, CustomerThreadList, CustomerVideoStats, CustomerVideoStats1, Customers, Device, DeviceList, Director, Director1, Director2, Directors, DownloadUrl, Extract, Feature, FeatureValue, Features, Gender, Genders, Geoloc, Geolocs, Gift, Gift1, Gift2, GiftToken, Gifts, Group, Groups, I18nField, IPCoordinates, IPLocation, Image, Language, Languages, MediaFile, MediaFiles, MediaSource, MediaSources, OAuthToken, Order, OrderHistories, OrderHistory, OrderState, OrderStates, Orders, Pagination, PaymentArguments, PaymentDetails, PaymentDetails1, PaymentMethods, PaymentModule, PaymentModules, PaymentUrl, PlayerConfiguration, PrepaymentBalance, PrepaymentBonus, PrepaymentBonus1, PrepaymentOperation, PrepaymentOperations, PrepaymentRecharge, PrepaymentRecharges, Product, ProductAccess, ProductAccessInfo, ProductAttribute, ProductAttributeCreateRequest, ProductAttributeCreateRequest1, ProductAttributesResponse, ProductIDList, ProductImagesResponse, Products, Products1, Screenshot, SessionVideoStat, SessionVideoStats, Subscription, SubscriptionAccesses, Subscriptions, Subtitle, Tag, Task, TaskCreateRequest, TaskFactory, Video, VideoAccessInfo, VideoCategory, VideoFreeAccess, VideoIDList, VideoStat, VideoStats, VideoSubtitlesResponse, VideoViews, Videos, Videos1, Videos2, WidgetFooterMenu, WidgetFooterMenus, WidgetSlider, WidgetSliders, WidgetTopMenu, WidgetTopMenus, ActorsApi, AddressApi, AttributesApi, BlogCategoriesApi, BlogPagesApi, BookmarksApi, CMSCategoriesApi, CMSPagesApi, CartRulesApi, CartsApi, CategoriesApi, ConfigurationApi, CountriesApi, CurrenciesApi, CustomerThreadsApi, CustomersApi, DevicesApi, DirectorsApi, ExtractsApi, FeatureValuesApi, FeaturesApi, GendersApi, GeolocationsApi, GiftsApi, GroupsApi, ImagesApi, LanguagesApi, MediaFilesApi, MediaSourcesApi, OAuthApi, OrderHistoriesApi, OrderStatesApi, OrdersApi, PaymentModulesApi, PrepaymentsApi, ProductAccessesApi, ProductsApi, StatsApi, SubscriptionsApi, TasksApi, VideosApi, WidgetsApi) {
  'use strict';

  /**
   * Client_API_for_Kinow_back_office.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var KinowJavascriptSdk = require('index'); // See note below*.
   * var xxxSvc = new KinowJavascriptSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new KinowJavascriptSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new KinowJavascriptSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new KinowJavascriptSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.3.41
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Actor model constructor.
     * @property {module:model/Actor}
     */
    Actor: Actor,
    /**
     * The Actor1 model constructor.
     * @property {module:model/Actor1}
     */
    Actor1: Actor1,
    /**
     * The Actor2 model constructor.
     * @property {module:model/Actor2}
     */
    Actor2: Actor2,
    /**
     * The Actors model constructor.
     * @property {module:model/Actors}
     */
    Actors: Actors,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The Address1 model constructor.
     * @property {module:model/Address1}
     */
    Address1: Address1,
    /**
     * The BlogCategory model constructor.
     * @property {module:model/BlogCategory}
     */
    BlogCategory: BlogCategory,
    /**
     * The BlogCategoryLists model constructor.
     * @property {module:model/BlogCategoryLists}
     */
    BlogCategoryLists: BlogCategoryLists,
    /**
     * The BlogPage model constructor.
     * @property {module:model/BlogPage}
     */
    BlogPage: BlogPage,
    /**
     * The BlogPageLists model constructor.
     * @property {module:model/BlogPageLists}
     */
    BlogPageLists: BlogPageLists,
    /**
     * The Bonus model constructor.
     * @property {module:model/Bonus}
     */
    Bonus: Bonus,
    /**
     * The CMSCategoriesLists model constructor.
     * @property {module:model/CMSCategoriesLists}
     */
    CMSCategoriesLists: CMSCategoriesLists,
    /**
     * The CMSCategory model constructor.
     * @property {module:model/CMSCategory}
     */
    CMSCategory: CMSCategory,
    /**
     * The CMSPage model constructor.
     * @property {module:model/CMSPage}
     */
    CMSPage: CMSPage,
    /**
     * The CMSPageLists model constructor.
     * @property {module:model/CMSPageLists}
     */
    CMSPageLists: CMSPageLists,
    /**
     * The Cart model constructor.
     * @property {module:model/Cart}
     */
    Cart: Cart,
    /**
     * The Cart1 model constructor.
     * @property {module:model/Cart1}
     */
    Cart1: Cart1,
    /**
     * The Cart2 model constructor.
     * @property {module:model/Cart2}
     */
    Cart2: Cart2,
    /**
     * The CartRule model constructor.
     * @property {module:model/CartRule}
     */
    CartRule: CartRule,
    /**
     * The CartRuleRestrictionGroup model constructor.
     * @property {module:model/CartRuleRestrictionGroup}
     */
    CartRuleRestrictionGroup: CartRuleRestrictionGroup,
    /**
     * The CartRuleRestrictionGroupItem model constructor.
     * @property {module:model/CartRuleRestrictionGroupItem}
     */
    CartRuleRestrictionGroupItem: CartRuleRestrictionGroupItem,
    /**
     * The CartRules model constructor.
     * @property {module:model/CartRules}
     */
    CartRules: CartRules,
    /**
     * The Carts model constructor.
     * @property {module:model/Carts}
     */
    Carts: Carts,
    /**
     * The Categories model constructor.
     * @property {module:model/Categories}
     */
    Categories: Categories,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The CategoryImages model constructor.
     * @property {module:model/CategoryImages}
     */
    CategoryImages: CategoryImages,
    /**
     * The Configuration model constructor.
     * @property {module:model/Configuration}
     */
    Configuration: Configuration,
    /**
     * The ConfigurationList model constructor.
     * @property {module:model/ConfigurationList}
     */
    ConfigurationList: ConfigurationList,
    /**
     * The Countries model constructor.
     * @property {module:model/Countries}
     */
    Countries: Countries,
    /**
     * The Country model constructor.
     * @property {module:model/Country}
     */
    Country: Country,
    /**
     * The Currencies model constructor.
     * @property {module:model/Currencies}
     */
    Currencies: Currencies,
    /**
     * The Currency model constructor.
     * @property {module:model/Currency}
     */
    Currency: Currency,
    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer: Customer,
    /**
     * The CustomerCreateRequest model constructor.
     * @property {module:model/CustomerCreateRequest}
     */
    CustomerCreateRequest: CustomerCreateRequest,
    /**
     * The CustomerCurrentViews model constructor.
     * @property {module:model/CustomerCurrentViews}
     */
    CustomerCurrentViews: CustomerCurrentViews,
    /**
     * The CustomerGroupVideoStats model constructor.
     * @property {module:model/CustomerGroupVideoStats}
     */
    CustomerGroupVideoStats: CustomerGroupVideoStats,
    /**
     * The CustomerGroupVideoStats1 model constructor.
     * @property {module:model/CustomerGroupVideoStats1}
     */
    CustomerGroupVideoStats1: CustomerGroupVideoStats1,
    /**
     * The CustomerId model constructor.
     * @property {module:model/CustomerId}
     */
    CustomerId: CustomerId,
    /**
     * The CustomerThread model constructor.
     * @property {module:model/CustomerThread}
     */
    CustomerThread: CustomerThread,
    /**
     * The CustomerThreadList model constructor.
     * @property {module:model/CustomerThreadList}
     */
    CustomerThreadList: CustomerThreadList,
    /**
     * The CustomerVideoStats model constructor.
     * @property {module:model/CustomerVideoStats}
     */
    CustomerVideoStats: CustomerVideoStats,
    /**
     * The CustomerVideoStats1 model constructor.
     * @property {module:model/CustomerVideoStats1}
     */
    CustomerVideoStats1: CustomerVideoStats1,
    /**
     * The Customers model constructor.
     * @property {module:model/Customers}
     */
    Customers: Customers,
    /**
     * The Device model constructor.
     * @property {module:model/Device}
     */
    Device: Device,
    /**
     * The DeviceList model constructor.
     * @property {module:model/DeviceList}
     */
    DeviceList: DeviceList,
    /**
     * The Director model constructor.
     * @property {module:model/Director}
     */
    Director: Director,
    /**
     * The Director1 model constructor.
     * @property {module:model/Director1}
     */
    Director1: Director1,
    /**
     * The Director2 model constructor.
     * @property {module:model/Director2}
     */
    Director2: Director2,
    /**
     * The Directors model constructor.
     * @property {module:model/Directors}
     */
    Directors: Directors,
    /**
     * The DownloadUrl model constructor.
     * @property {module:model/DownloadUrl}
     */
    DownloadUrl: DownloadUrl,
    /**
     * The Extract model constructor.
     * @property {module:model/Extract}
     */
    Extract: Extract,
    /**
     * The Feature model constructor.
     * @property {module:model/Feature}
     */
    Feature: Feature,
    /**
     * The FeatureValue model constructor.
     * @property {module:model/FeatureValue}
     */
    FeatureValue: FeatureValue,
    /**
     * The Features model constructor.
     * @property {module:model/Features}
     */
    Features: Features,
    /**
     * The Gender model constructor.
     * @property {module:model/Gender}
     */
    Gender: Gender,
    /**
     * The Genders model constructor.
     * @property {module:model/Genders}
     */
    Genders: Genders,
    /**
     * The Geoloc model constructor.
     * @property {module:model/Geoloc}
     */
    Geoloc: Geoloc,
    /**
     * The Geolocs model constructor.
     * @property {module:model/Geolocs}
     */
    Geolocs: Geolocs,
    /**
     * The Gift model constructor.
     * @property {module:model/Gift}
     */
    Gift: Gift,
    /**
     * The Gift1 model constructor.
     * @property {module:model/Gift1}
     */
    Gift1: Gift1,
    /**
     * The Gift2 model constructor.
     * @property {module:model/Gift2}
     */
    Gift2: Gift2,
    /**
     * The GiftToken model constructor.
     * @property {module:model/GiftToken}
     */
    GiftToken: GiftToken,
    /**
     * The Gifts model constructor.
     * @property {module:model/Gifts}
     */
    Gifts: Gifts,
    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group: Group,
    /**
     * The Groups model constructor.
     * @property {module:model/Groups}
     */
    Groups: Groups,
    /**
     * The I18nField model constructor.
     * @property {module:model/I18nField}
     */
    I18nField: I18nField,
    /**
     * The IPCoordinates model constructor.
     * @property {module:model/IPCoordinates}
     */
    IPCoordinates: IPCoordinates,
    /**
     * The IPLocation model constructor.
     * @property {module:model/IPLocation}
     */
    IPLocation: IPLocation,
    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image: Image,
    /**
     * The Language model constructor.
     * @property {module:model/Language}
     */
    Language: Language,
    /**
     * The Languages model constructor.
     * @property {module:model/Languages}
     */
    Languages: Languages,
    /**
     * The MediaFile model constructor.
     * @property {module:model/MediaFile}
     */
    MediaFile: MediaFile,
    /**
     * The MediaFiles model constructor.
     * @property {module:model/MediaFiles}
     */
    MediaFiles: MediaFiles,
    /**
     * The MediaSource model constructor.
     * @property {module:model/MediaSource}
     */
    MediaSource: MediaSource,
    /**
     * The MediaSources model constructor.
     * @property {module:model/MediaSources}
     */
    MediaSources: MediaSources,
    /**
     * The OAuthToken model constructor.
     * @property {module:model/OAuthToken}
     */
    OAuthToken: OAuthToken,
    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The OrderHistories model constructor.
     * @property {module:model/OrderHistories}
     */
    OrderHistories: OrderHistories,
    /**
     * The OrderHistory model constructor.
     * @property {module:model/OrderHistory}
     */
    OrderHistory: OrderHistory,
    /**
     * The OrderState model constructor.
     * @property {module:model/OrderState}
     */
    OrderState: OrderState,
    /**
     * The OrderStates model constructor.
     * @property {module:model/OrderStates}
     */
    OrderStates: OrderStates,
    /**
     * The Orders model constructor.
     * @property {module:model/Orders}
     */
    Orders: Orders,
    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination: Pagination,
    /**
     * The PaymentArguments model constructor.
     * @property {module:model/PaymentArguments}
     */
    PaymentArguments: PaymentArguments,
    /**
     * The PaymentDetails model constructor.
     * @property {module:model/PaymentDetails}
     */
    PaymentDetails: PaymentDetails,
    /**
     * The PaymentDetails1 model constructor.
     * @property {module:model/PaymentDetails1}
     */
    PaymentDetails1: PaymentDetails1,
    /**
     * The PaymentMethods model constructor.
     * @property {module:model/PaymentMethods}
     */
    PaymentMethods: PaymentMethods,
    /**
     * The PaymentModule model constructor.
     * @property {module:model/PaymentModule}
     */
    PaymentModule: PaymentModule,
    /**
     * The PaymentModules model constructor.
     * @property {module:model/PaymentModules}
     */
    PaymentModules: PaymentModules,
    /**
     * The PaymentUrl model constructor.
     * @property {module:model/PaymentUrl}
     */
    PaymentUrl: PaymentUrl,
    /**
     * The PlayerConfiguration model constructor.
     * @property {module:model/PlayerConfiguration}
     */
    PlayerConfiguration: PlayerConfiguration,
    /**
     * The PrepaymentBalance model constructor.
     * @property {module:model/PrepaymentBalance}
     */
    PrepaymentBalance: PrepaymentBalance,
    /**
     * The PrepaymentBonus model constructor.
     * @property {module:model/PrepaymentBonus}
     */
    PrepaymentBonus: PrepaymentBonus,
    /**
     * The PrepaymentBonus1 model constructor.
     * @property {module:model/PrepaymentBonus1}
     */
    PrepaymentBonus1: PrepaymentBonus1,
    /**
     * The PrepaymentOperation model constructor.
     * @property {module:model/PrepaymentOperation}
     */
    PrepaymentOperation: PrepaymentOperation,
    /**
     * The PrepaymentOperations model constructor.
     * @property {module:model/PrepaymentOperations}
     */
    PrepaymentOperations: PrepaymentOperations,
    /**
     * The PrepaymentRecharge model constructor.
     * @property {module:model/PrepaymentRecharge}
     */
    PrepaymentRecharge: PrepaymentRecharge,
    /**
     * The PrepaymentRecharges model constructor.
     * @property {module:model/PrepaymentRecharges}
     */
    PrepaymentRecharges: PrepaymentRecharges,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The ProductAccess model constructor.
     * @property {module:model/ProductAccess}
     */
    ProductAccess: ProductAccess,
    /**
     * The ProductAccessInfo model constructor.
     * @property {module:model/ProductAccessInfo}
     */
    ProductAccessInfo: ProductAccessInfo,
    /**
     * The ProductAttribute model constructor.
     * @property {module:model/ProductAttribute}
     */
    ProductAttribute: ProductAttribute,
    /**
     * The ProductAttributeCreateRequest model constructor.
     * @property {module:model/ProductAttributeCreateRequest}
     */
    ProductAttributeCreateRequest: ProductAttributeCreateRequest,
    /**
     * The ProductAttributeCreateRequest1 model constructor.
     * @property {module:model/ProductAttributeCreateRequest1}
     */
    ProductAttributeCreateRequest1: ProductAttributeCreateRequest1,
    /**
     * The ProductAttributesResponse model constructor.
     * @property {module:model/ProductAttributesResponse}
     */
    ProductAttributesResponse: ProductAttributesResponse,
    /**
     * The ProductIDList model constructor.
     * @property {module:model/ProductIDList}
     */
    ProductIDList: ProductIDList,
    /**
     * The ProductImagesResponse model constructor.
     * @property {module:model/ProductImagesResponse}
     */
    ProductImagesResponse: ProductImagesResponse,
    /**
     * The Products model constructor.
     * @property {module:model/Products}
     */
    Products: Products,
    /**
     * The Products1 model constructor.
     * @property {module:model/Products1}
     */
    Products1: Products1,
    /**
     * The Screenshot model constructor.
     * @property {module:model/Screenshot}
     */
    Screenshot: Screenshot,
    /**
     * The SessionVideoStat model constructor.
     * @property {module:model/SessionVideoStat}
     */
    SessionVideoStat: SessionVideoStat,
    /**
     * The SessionVideoStats model constructor.
     * @property {module:model/SessionVideoStats}
     */
    SessionVideoStats: SessionVideoStats,
    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription: Subscription,
    /**
     * The SubscriptionAccesses model constructor.
     * @property {module:model/SubscriptionAccesses}
     */
    SubscriptionAccesses: SubscriptionAccesses,
    /**
     * The Subscriptions model constructor.
     * @property {module:model/Subscriptions}
     */
    Subscriptions: Subscriptions,
    /**
     * The Subtitle model constructor.
     * @property {module:model/Subtitle}
     */
    Subtitle: Subtitle,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The Task model constructor.
     * @property {module:model/Task}
     */
    Task: Task,
    /**
     * The TaskCreateRequest model constructor.
     * @property {module:model/TaskCreateRequest}
     */
    TaskCreateRequest: TaskCreateRequest,
    /**
     * The TaskFactory model constructor.
     * @property {module:model/TaskFactory}
     */
    TaskFactory: TaskFactory,
    /**
     * The Video model constructor.
     * @property {module:model/Video}
     */
    Video: Video,
    /**
     * The VideoAccessInfo model constructor.
     * @property {module:model/VideoAccessInfo}
     */
    VideoAccessInfo: VideoAccessInfo,
    /**
     * The VideoCategory model constructor.
     * @property {module:model/VideoCategory}
     */
    VideoCategory: VideoCategory,
    /**
     * The VideoFreeAccess model constructor.
     * @property {module:model/VideoFreeAccess}
     */
    VideoFreeAccess: VideoFreeAccess,
    /**
     * The VideoIDList model constructor.
     * @property {module:model/VideoIDList}
     */
    VideoIDList: VideoIDList,
    /**
     * The VideoStat model constructor.
     * @property {module:model/VideoStat}
     */
    VideoStat: VideoStat,
    /**
     * The VideoStats model constructor.
     * @property {module:model/VideoStats}
     */
    VideoStats: VideoStats,
    /**
     * The VideoSubtitlesResponse model constructor.
     * @property {module:model/VideoSubtitlesResponse}
     */
    VideoSubtitlesResponse: VideoSubtitlesResponse,
    /**
     * The VideoViews model constructor.
     * @property {module:model/VideoViews}
     */
    VideoViews: VideoViews,
    /**
     * The Videos model constructor.
     * @property {module:model/Videos}
     */
    Videos: Videos,
    /**
     * The Videos1 model constructor.
     * @property {module:model/Videos1}
     */
    Videos1: Videos1,
    /**
     * The Videos2 model constructor.
     * @property {module:model/Videos2}
     */
    Videos2: Videos2,
    /**
     * The WidgetFooterMenu model constructor.
     * @property {module:model/WidgetFooterMenu}
     */
    WidgetFooterMenu: WidgetFooterMenu,
    /**
     * The WidgetFooterMenus model constructor.
     * @property {module:model/WidgetFooterMenus}
     */
    WidgetFooterMenus: WidgetFooterMenus,
    /**
     * The WidgetSlider model constructor.
     * @property {module:model/WidgetSlider}
     */
    WidgetSlider: WidgetSlider,
    /**
     * The WidgetSliders model constructor.
     * @property {module:model/WidgetSliders}
     */
    WidgetSliders: WidgetSliders,
    /**
     * The WidgetTopMenu model constructor.
     * @property {module:model/WidgetTopMenu}
     */
    WidgetTopMenu: WidgetTopMenu,
    /**
     * The WidgetTopMenus model constructor.
     * @property {module:model/WidgetTopMenus}
     */
    WidgetTopMenus: WidgetTopMenus,
    /**
     * The ActorsApi service constructor.
     * @property {module:api/ActorsApi}
     */
    ActorsApi: ActorsApi,
    /**
     * The AddressApi service constructor.
     * @property {module:api/AddressApi}
     */
    AddressApi: AddressApi,
    /**
     * The AttributesApi service constructor.
     * @property {module:api/AttributesApi}
     */
    AttributesApi: AttributesApi,
    /**
     * The BlogCategoriesApi service constructor.
     * @property {module:api/BlogCategoriesApi}
     */
    BlogCategoriesApi: BlogCategoriesApi,
    /**
     * The BlogPagesApi service constructor.
     * @property {module:api/BlogPagesApi}
     */
    BlogPagesApi: BlogPagesApi,
    /**
     * The BookmarksApi service constructor.
     * @property {module:api/BookmarksApi}
     */
    BookmarksApi: BookmarksApi,
    /**
     * The CMSCategoriesApi service constructor.
     * @property {module:api/CMSCategoriesApi}
     */
    CMSCategoriesApi: CMSCategoriesApi,
    /**
     * The CMSPagesApi service constructor.
     * @property {module:api/CMSPagesApi}
     */
    CMSPagesApi: CMSPagesApi,
    /**
     * The CartRulesApi service constructor.
     * @property {module:api/CartRulesApi}
     */
    CartRulesApi: CartRulesApi,
    /**
     * The CartsApi service constructor.
     * @property {module:api/CartsApi}
     */
    CartsApi: CartsApi,
    /**
     * The CategoriesApi service constructor.
     * @property {module:api/CategoriesApi}
     */
    CategoriesApi: CategoriesApi,
    /**
     * The ConfigurationApi service constructor.
     * @property {module:api/ConfigurationApi}
     */
    ConfigurationApi: ConfigurationApi,
    /**
     * The CountriesApi service constructor.
     * @property {module:api/CountriesApi}
     */
    CountriesApi: CountriesApi,
    /**
     * The CurrenciesApi service constructor.
     * @property {module:api/CurrenciesApi}
     */
    CurrenciesApi: CurrenciesApi,
    /**
     * The CustomerThreadsApi service constructor.
     * @property {module:api/CustomerThreadsApi}
     */
    CustomerThreadsApi: CustomerThreadsApi,
    /**
     * The CustomersApi service constructor.
     * @property {module:api/CustomersApi}
     */
    CustomersApi: CustomersApi,
    /**
     * The DevicesApi service constructor.
     * @property {module:api/DevicesApi}
     */
    DevicesApi: DevicesApi,
    /**
     * The DirectorsApi service constructor.
     * @property {module:api/DirectorsApi}
     */
    DirectorsApi: DirectorsApi,
    /**
     * The ExtractsApi service constructor.
     * @property {module:api/ExtractsApi}
     */
    ExtractsApi: ExtractsApi,
    /**
     * The FeatureValuesApi service constructor.
     * @property {module:api/FeatureValuesApi}
     */
    FeatureValuesApi: FeatureValuesApi,
    /**
     * The FeaturesApi service constructor.
     * @property {module:api/FeaturesApi}
     */
    FeaturesApi: FeaturesApi,
    /**
     * The GendersApi service constructor.
     * @property {module:api/GendersApi}
     */
    GendersApi: GendersApi,
    /**
     * The GeolocationsApi service constructor.
     * @property {module:api/GeolocationsApi}
     */
    GeolocationsApi: GeolocationsApi,
    /**
     * The GiftsApi service constructor.
     * @property {module:api/GiftsApi}
     */
    GiftsApi: GiftsApi,
    /**
     * The GroupsApi service constructor.
     * @property {module:api/GroupsApi}
     */
    GroupsApi: GroupsApi,
    /**
     * The ImagesApi service constructor.
     * @property {module:api/ImagesApi}
     */
    ImagesApi: ImagesApi,
    /**
     * The LanguagesApi service constructor.
     * @property {module:api/LanguagesApi}
     */
    LanguagesApi: LanguagesApi,
    /**
     * The MediaFilesApi service constructor.
     * @property {module:api/MediaFilesApi}
     */
    MediaFilesApi: MediaFilesApi,
    /**
     * The MediaSourcesApi service constructor.
     * @property {module:api/MediaSourcesApi}
     */
    MediaSourcesApi: MediaSourcesApi,
    /**
     * The OAuthApi service constructor.
     * @property {module:api/OAuthApi}
     */
    OAuthApi: OAuthApi,
    /**
     * The OrderHistoriesApi service constructor.
     * @property {module:api/OrderHistoriesApi}
     */
    OrderHistoriesApi: OrderHistoriesApi,
    /**
     * The OrderStatesApi service constructor.
     * @property {module:api/OrderStatesApi}
     */
    OrderStatesApi: OrderStatesApi,
    /**
     * The OrdersApi service constructor.
     * @property {module:api/OrdersApi}
     */
    OrdersApi: OrdersApi,
    /**
     * The PaymentModulesApi service constructor.
     * @property {module:api/PaymentModulesApi}
     */
    PaymentModulesApi: PaymentModulesApi,
    /**
     * The PrepaymentsApi service constructor.
     * @property {module:api/PrepaymentsApi}
     */
    PrepaymentsApi: PrepaymentsApi,
    /**
     * The ProductAccessesApi service constructor.
     * @property {module:api/ProductAccessesApi}
     */
    ProductAccessesApi: ProductAccessesApi,
    /**
     * The ProductsApi service constructor.
     * @property {module:api/ProductsApi}
     */
    ProductsApi: ProductsApi,
    /**
     * The StatsApi service constructor.
     * @property {module:api/StatsApi}
     */
    StatsApi: StatsApi,
    /**
     * The SubscriptionsApi service constructor.
     * @property {module:api/SubscriptionsApi}
     */
    SubscriptionsApi: SubscriptionsApi,
    /**
     * The TasksApi service constructor.
     * @property {module:api/TasksApi}
     */
    TasksApi: TasksApi,
    /**
     * The VideosApi service constructor.
     * @property {module:api/VideosApi}
     */
    VideosApi: VideosApi,
    /**
     * The WidgetsApi service constructor.
     * @property {module:api/WidgetsApi}
     */
    WidgetsApi: WidgetsApi
  };

  return exports;
}));
