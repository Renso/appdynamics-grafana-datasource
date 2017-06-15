"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("app/plugins/sdk");
class AppDynamicsQueryCtrl extends sdk_1.QueryCtrl {
    constructor($scope, $injector, uiSegmentSrv) {
        super($scope, $injector);
        this.target.target = this.target.target;
        this.target.type = this.target.type;
        this.scope = $scope;
        this.uiSegmentSrv = uiSegmentSrv;
    }
}
AppDynamicsQueryCtrl.templateUrl = 'partials/query.editor.html';
exports.AppDynamicsQueryCtrl = AppDynamicsQueryCtrl;
