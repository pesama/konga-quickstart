'use strict';

/**
 * @ngdoc service
 * @name kongaQuickStartApp.metadata
 * @description
 * # metadata
 * Constant in the kongaQuickStartApp.
 */
angular.module('kongaQuickStartApp')
  .constant('metadata', {"id":null,"name":"Konga Quick Start","appKey":null,"entities":[{"classFor":"io.konga.quickstart.model.utility.Company","name":"company","superClass":null,"label":"Company","shortLabel":null,"access":"HIDDEN","stereotypes":[],"searchable":null,"createable":null,"editable":null,"deleteable":null,"searchType":"CASCADE","searchStyle":null,"resultsType":"CASCADE","resultsStyle":null,"detailsType":"CASCADE","detailsStyle":null,"updateType":"CASCADE","updateStyle":null,"template":null,"apiName":null,"apiPath":null,"categories":[],"security":{"permissions":null,"roles":null},"fields":[],"fieldSets":[],"actions":[],"overrideDefaults":[],"configuration":[],"favoriteable":false,"resultClick":[]},{"classFor":"io.konga.quickstart.model.Todo","name":"todo","superClass":null,"label":"TODO Item","shortLabel":null,"access":"PUBLIC","stereotypes":[],"searchable":"","createable":"","editable":"","deleteable":"","searchType":"CASCADE","searchStyle":null,"resultsType":"CASCADE","resultsStyle":null,"detailsType":"CASCADE","detailsStyle":null,"updateType":"CASCADE","updateStyle":null,"template":null,"apiName":null,"apiPath":"todos","categories":[],"security":{"permissions":null,"roles":null},"fields":[{"name":"id","label":"id","shortLabel":null,"hint":null,"type":{"type":"NUMBER","complexType":"","filter":"","query":{},"list":[],"from":null},"access":"PUBLIC","isId":true,"isKey":true,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"NUMBER","results":"NUMBER","details":"NUMBER","update":"NUMBER","configuration":[]},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"todo","sortable":true},{"name":"userId","label":"User ID","shortLabel":null,"hint":null,"type":{"type":"NUMBER","complexType":"","filter":"","query":{},"list":[],"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":"","fields":[],"configuration":[]},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":null,"fields":null,"configuration":null},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"NUMBER","results":"NUMBER","details":"NUMBER","update":"NUMBER","configuration":[]},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"todo","sortable":true},{"name":"title","label":"Title","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":true,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":"","fields":[],"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"PLAIN","results":"PLAIN","details":"PLAIN","update":"PLAIN","configuration":null},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":true,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"todo","sortable":true},{"name":"completed","label":"Completed","shortLabel":null,"hint":null,"type":{"type":"BOOLEAN","complexType":"","filter":"","query":{},"list":[],"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":"","fields":[],"configuration":[]},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"BOOLEAN","results":"BOOLEAN","details":"UNDEFINED","update":"SWITCH","configuration":[]},"defaults":"false","searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"todo","sortable":true}],"fieldSets":[],"actions":[],"overrideDefaults":[],"configuration":[],"favoriteable":false,"resultClick":[]},{"classFor":"io.konga.quickstart.model.User","name":"user","superClass":null,"label":"User","shortLabel":null,"access":"PUBLIC","stereotypes":[],"searchable":"","createable":"","editable":"","deleteable":"","searchType":"CASCADE","searchStyle":null,"resultsType":"CASCADE","resultsStyle":null,"detailsType":"CASCADE","detailsStyle":null,"updateType":"CASCADE","updateStyle":null,"template":null,"apiName":null,"apiPath":"users","categories":[],"security":{"permissions":null,"roles":null},"fields":[{"name":"id","label":"id","shortLabel":null,"hint":null,"type":{"type":"NUMBER","complexType":"","filter":"","query":{},"list":[],"from":null},"access":"PUBLIC","isId":true,"isKey":true,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"NUMBER","results":"NUMBER","details":"NUMBER","update":"NUMBER","configuration":[]},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"user","sortable":true},{"name":"name","label":"Name","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":true,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":"","fields":[],"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"PLAIN","results":"PLAIN","details":"PLAIN","update":"PLAIN","configuration":null},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":true,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"user","sortable":true},{"name":"email","label":"Email","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":"","fields":[],"configuration":[]},"editable":{"value":"","fields":[],"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"PLAIN","results":"PLAIN","details":"PLAIN","update":"PLAIN","configuration":null},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":true,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"user","sortable":true},{"name":"address","label":"Address","shortLabel":null,"hint":null,"type":{"type":"COMPLEX","complexType":"address","filter":"","query":{},"list":[],"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":null,"fields":null,"configuration":null},"showInUpdate":{"value":"","fields":["street","suite","city","zipCode","geo"],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"COMPLEX","results":"COMPLEX","details":"COMPLEX","update":"COMPLEX","configuration":[]},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"user","sortable":true},{"name":"phone","label":"Phone","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":"","fields":[],"configuration":[]},"editable":{"value":"","fields":[],"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"PLAIN","results":"PLAIN","details":"PLAIN","update":"PLAIN","configuration":null},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":true,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"user","sortable":true},{"name":"website","label":"website","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":"","fields":[],"configuration":[]},"editable":{"value":"","fields":[],"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"PLAIN","results":"PLAIN","details":"PLAIN","update":"PLAIN","configuration":null},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"user","sortable":true},{"name":"company","label":"Company","shortLabel":null,"hint":null,"type":{"type":"COMPLEX","complexType":"company","filter":"","query":{},"list":[],"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":null,"fields":null,"configuration":null},"showInUpdate":{"value":"","fields":["name","catchPhrase","bs"],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"COMPLEX","results":"COMPLEX","details":"COMPLEX","update":"COMPLEX","configuration":[]},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"user","sortable":true}],"fieldSets":[],"actions":[],"overrideDefaults":[],"configuration":[],"favoriteable":false,"resultClick":[]},{"classFor":"io.konga.quickstart.model.utility.Address","name":"address","superClass":null,"label":"Address","shortLabel":null,"access":"HIDDEN","stereotypes":[],"searchable":null,"createable":null,"editable":null,"deleteable":null,"searchType":"CASCADE","searchStyle":null,"resultsType":"CASCADE","resultsStyle":null,"detailsType":"CASCADE","detailsStyle":null,"updateType":"CASCADE","updateStyle":null,"template":null,"apiName":null,"apiPath":null,"categories":[],"security":{"permissions":null,"roles":null},"fields":[{"name":"street","label":"Street","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":"","fields":[],"configuration":null},"showInResults":{"value":null,"fields":null,"configuration":null},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"PLAIN","results":"PLAIN","details":"PLAIN","update":"PLAIN","configuration":null},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":true,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"address","sortable":true},{"name":"suite","label":"Suite","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":"","fields":[],"configuration":null},"showInResults":{"value":null,"fields":null,"configuration":null},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"PLAIN","results":"PLAIN","details":"PLAIN","update":"PLAIN","configuration":null},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"address","sortable":true},{"name":"city","label":"City","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":"","fields":[],"configuration":null},"showInResults":{"value":null,"fields":null,"configuration":null},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"PLAIN","results":"PLAIN","details":"PLAIN","update":"PLAIN","configuration":null},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":true,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"address","sortable":true},{"name":"zipCode","label":"zipCode","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":"","fields":[],"configuration":null},"showInResults":{"value":null,"fields":null,"configuration":null},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"PLAIN","results":"PLAIN","details":"PLAIN","update":"PLAIN","configuration":null},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":true,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"address","sortable":true},{"name":"geo","label":"Map","shortLabel":null,"hint":null,"type":{"type":"COMPLEX","complexType":"geo","filter":"","query":{},"list":[],"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":null,"fields":null,"configuration":null},"showInUpdate":{"value":"","fields":[],"configuration":[{"key":"CUSTOM_FIELD_TYPE","value":"GOOGLE_MAPS_FIELDTYPE"}]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"CUSTOM","results":"CUSTOM","details":"CUSTOM","update":"CUSTOM","configuration":[]},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"address","sortable":true}],"fieldSets":[],"actions":[],"overrideDefaults":[],"configuration":[],"favoriteable":false,"resultClick":[]},{"classFor":"io.konga.quickstart.model.Photo","name":"photo","superClass":null,"label":"Photo","shortLabel":null,"access":"PUBLIC","stereotypes":[],"searchable":"","createable":null,"editable":"","deleteable":"","searchType":"CASCADE","searchStyle":null,"resultsType":"CUSTOM","resultsStyle":null,"detailsType":"CASCADE","detailsStyle":null,"updateType":"CASCADE","updateStyle":null,"template":"","apiName":null,"apiPath":"photos","categories":[],"security":{"permissions":null,"roles":null},"fields":[{"name":"id","label":"id","shortLabel":null,"hint":null,"type":{"type":"NUMBER","complexType":"","filter":"","query":{},"list":[],"from":null},"access":"PUBLIC","isId":true,"isKey":true,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"NUMBER","results":"NUMBER","details":"NUMBER","update":"NUMBER","configuration":[]},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"photo","sortable":true},{"name":"albumId","label":"Album ID","shortLabel":null,"hint":null,"type":{"type":"NUMBER","complexType":"","filter":"","query":{},"list":[],"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":"","fields":[],"configuration":[]},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":null,"fields":null,"configuration":null},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"NUMBER","results":"NUMBER","details":"NUMBER","update":"NUMBER","configuration":[]},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"photo","sortable":true},{"name":"title","label":"Title","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":true,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":"","fields":[],"configuration":null},"showInResults":{"value":"","fields":[],"configuration":[]},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"PLAIN","results":"PLAIN","details":"PLAIN","update":"PLAIN","configuration":null},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":true,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"photo","sortable":true},{"name":"url","label":"URL","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":null,"fields":null,"configuration":null},"showInUpdate":{"value":"","fields":[],"configuration":[]},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"IMAGE","results":"IMAGE","details":"IMAGE","update":"IMAGE","configuration":[]},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"photo","sortable":true},{"name":"thumbnailUrl","label":"","shortLabel":null,"hint":null,"type":{"type":"STRING","complexType":null,"filter":null,"query":null,"list":null,"from":null},"access":"PUBLIC","isId":false,"isKey":false,"isLabel":false,"linked":null,"isParent":false,"quickSearch":{"value":null,"fields":null,"configuration":null},"searchable":{"value":null,"fields":null,"configuration":null},"editable":{"value":null,"fields":null,"configuration":null},"showInResults":{"value":null,"fields":null,"configuration":null},"showInUpdate":{"value":null,"fields":null,"configuration":null},"showInDetails":{"value":null,"fields":null,"configuration":null},"multiplicity":"ONE","categories":[],"apiName":null,"fieldType":{"search":"IMAGE","results":"IMAGE","details":"IMAGE","update":"IMAGE","configuration":[]},"defaults":null,"searchConf":{"policy":"EXACT_MATCH","multiplicity":"ONE","fields":[]},"unique":false,"security":{"permissions":null,"roles":null},"validation":{"required":null,"minLength":null,"maxLength":null,"validators":null},"triggers":[],"priority":{"results":1000,"search":1000,"update":1000,"details":1000},"fieldSet":null,"actions":[],"overrideDefaults":[],"owner":"photo","sortable":true}],"fieldSets":[],"actions":[],"overrideDefaults":[],"configuration":[{"key":"RESULTS_CUSTOM_VIEW","value":"GRID_RESULTS_VIEW"}],"favoriteable":false,"resultClick":[]},{"classFor":"io.konga.quickstart.model.utility.Geo","name":"album","superClass":null,"label":"Geo","shortLabel":null,"access":"HIDDEN","stereotypes":[],"searchable":null,"createable":null,"editable":null,"deleteable":null,"searchType":"CASCADE","searchStyle":null,"resultsType":"CASCADE","resultsStyle":null,"detailsType":"CASCADE","detailsStyle":null,"updateType":"CASCADE","updateStyle":null,"template":null,"apiName":null,"apiPath":null,"categories":[],"security":{"permissions":null,"roles":null},"fields":[],"fieldSets":[],"actions":[],"overrideDefaults":[],"configuration":[],"favoriteable":false,"resultClick":[]}],"configuration":[]});
