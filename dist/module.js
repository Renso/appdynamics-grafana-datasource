"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_1 = require("./datasource");
exports.Datasource = datasource_1.AppDynamicsDatasource;
class AppDynamicsConfigCtrl {
}
AppDynamicsConfigCtrl.templateUrl = 'partials/config.html';
exports.ConfigCtrl = AppDynamicsConfigCtrl;
class AppDynamicsQueryOptionsCtrl {
}
AppDynamicsQueryOptionsCtrl.templateUrl = 'partials/query.options.html';
exports.QueryCtrl = AppDynamicsQueryOptionsCtrl;
class AppDynamicsAnnotationsQueryCtrl {
}
AppDynamicsAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
exports.AnnotationsQueryCtrl = AppDynamicsAnnotationsQueryCtrl;
