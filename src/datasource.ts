export class AppDynamicsDatasource {

    username: string;
    password: string;
    tenant: string;
    url: string;

    constructor(instanceSettings, private $q, private backendSrv, private templateSrv) {

        // Controller settings
        this.username = instanceSettings.username;
        this.password = instanceSettings.password;
        this.url = instanceSettings.url;
        this.tenant = instanceSettings.tenant;

    }

    query(options) {
        // TODO: implement query
    }

    testDatasource() {
        // TODO implement testDatasource
    }

    annotationQuery() {
        // TODO implement annotationQuery
    }

    metricFindQuery() {
        // TODO implement metricFindQuery
    }
}