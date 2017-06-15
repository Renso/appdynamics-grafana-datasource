import { QueryCtrl } from 'app/plugins/sdk';

export class AppDynamicsQueryCtrl extends QueryCtrl {

    static templateUrl = 'partials/query.editor.html';

    scope: any;
    uiSegmentSrv: any;

    constructor($scope, $injector, uiSegmentSrv)  {
        super($scope, $injector);

        this.target.target = this.target.target;
        this.target.type = this.target.type;
        this.scope = $scope;
        this.uiSegmentSrv = uiSegmentSrv;
    }
}
