"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./routes/index"));
var cors_1 = __importDefault(require("cors"));
var Application = /** @class */ (function () {
    function Application() {
        this.viewsPath = path_1.default.join(__dirname, 'views');
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    // Settings
    Application.prototype.settings = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.set('views', this.viewsPath);
        this.app.set('view engine', 'pug');
    };
    //  Middlewares
    Application.prototype.middlewares = function () {
        //  serving static files
        this.app.use(express_1.static(path_1.default.join(__dirname, 'public')));
        //  To parse the body fo the request
        this.app.use(express_1.json());
        // To parese the request queries params
        this.app.use(express_1.urlencoded({ extended: true }));
        // cors
        this.app.use(cors_1.default());
    };
    //  Routes
    Application.prototype.routes = function () {
        this.app.use('*', cors_1.default());
        this.app.use('/api/v1/users', index_1.default);
    };
    Application.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("Server is started at " + _this.app.get('port') + "...");
        });
    };
    return Application;
}());
exports.default = Application;
