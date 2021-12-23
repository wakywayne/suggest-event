/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\ndotenv.config();\r\nexports[\"default\"] = {\r\n    mysql: {\r\n        host: process.env.MYSQL_HOST,\r\n        port: process.env.MYSQL_PORT,\r\n        user: process.env.MYSQL_USER,\r\n        password: process.env.MYSQL_PASSWORD,\r\n        database: process.env.MYSQL_DATABASE,\r\n    },\r\n    test: process.env.TESTING_ENV,\r\n    jwt: {\r\n        secret: process.env.JWT_SECRET,\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/blogs.ts":
/*!********************************!*\
  !*** ./src/server/db/blogs.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\r\nvar allsuggestedevents = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, (0, index_1.Query)(\"select * from SuggestedEvents;\")];\r\n}); }); };\r\nvar allsuggestedeventsusers = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        (0, index_1.Query)(\"SELECT * from allsuggestedeventsusers\");\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\nvar addEvent = function (eventname, eventdescription, eventdate, userId) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        (0, index_1.Query)(\"INSERT INTO SuggestedEvents(eventname, eventdescription, eventdate, userId) \\n  values(?, ?, ?, ?);\", [eventname, eventdescription, eventdate, userId]);\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\nvar find = function (column, value) {\r\n    return (0, index_1.Query)(\"SELECT * from suggestedeventsusers WHERE ?? = ?\", [\r\n        column,\r\n        value,\r\n    ]);\r\n};\r\nvar insert = function (newUser) {\r\n    (0, index_1.Query)('Insert into suggestedeventsusers SET ?', [newUser]);\r\n};\r\nexports[\"default\"] = {\r\n    allsuggestedevents: allsuggestedevents,\r\n    allsuggestedeventsusers: allsuggestedeventsusers,\r\n    addEvent: addEvent,\r\n    find: find,\r\n    insert: insert,\r\n};\r\n// blogs.ts?:45:27)\r\n// blogs.ts?:33:23)\r\n// /./src/server/db/blogs.ts?:14:53)\r\n// blogs.ts?:8:71)\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/db/blogs.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Query = exports.Connection = void 0;\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\r\nexports.Connection = mysql.createConnection({\r\n    host: config_1.default.mysql.host,\r\n    port: Number(config_1.default.mysql.port),\r\n    user: config_1.default.mysql.user,\r\n    password: config_1.default.mysql.password,\r\n    database: config_1.default.mysql.database,\r\n});\r\nexports.Connection.connect(function (err) {\r\n    if (err)\r\n        console.log(err);\r\n});\r\nvar Query = function (query, values) {\r\n    return new Promise(function (resolve, reject) {\r\n        exports.Connection.query(query, values, function (err, results) {\r\n            if (err)\r\n                return reject(err);\r\n            return resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.Query = Query;\r\n// Put this in config file\r\n// \r\n// export default {\r\n//   mysql: {\r\n//     host: \"localhost\",\r\n//     port: 3306,\r\n//     user: \"\",\r\n//     password: \"\",\r\n//     database: \"mydatabase\",\r\n//   },\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/middleware/auth.ts":
/*!***************************************!*\
  !*** ./src/server/middleware/auth.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.tokenCheck = void 0;\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nfunction tokenCheck(req, res, next) {\r\n    passport.authenticate('jwt', function (err, user, info) {\r\n        if (err) {\r\n            return next(err);\r\n            // If next err get's called it get daisy chained to the call back and then does the try catch that's on pizza time for example  \r\n        }\r\n        if (info) {\r\n            console.log(info);\r\n            return res.status(401).json({ message: info.message });\r\n        }\r\n        if (!user) {\r\n            return res.status(401).json({ message: 'Rederect to login something went wrong' });\r\n            // res.redirect('/login);\r\n        }\r\n        req.user = user;\r\n        next();\r\n    })(req, res, next);\r\n}\r\nexports.tokenCheck = tokenCheck;\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/middleware/auth.ts?");

/***/ }),

/***/ "./src/server/middleware/passport-stradegies.ts":
/*!******************************************************!*\
  !*** ./src/server/middleware/passport-stradegies.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.configurePassport = void 0;\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\r\nvar blogs_1 = __webpack_require__(/*! ../db/blogs */ \"./src/server/db/blogs.ts\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar PassportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\r\nvar PassportJWT = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\r\nvar utils_1 = __webpack_require__(/*! ../utils */ \"./src/server/utils/index.ts\");\r\nfunction configurePassport(app) {\r\n    var _this = this;\r\n    passport.serializeUser(function (user /*I suck*/, done) {\r\n        if (user.password) {\r\n            delete user.password;\r\n        }\r\n        done(null, user);\r\n    });\r\n    passport.deserializeUser(function (user, done) { return done(null, user); });\r\n    passport.use(new PassportLocal.Strategy({\r\n        usernameField: 'email'\r\n    }, function (email, password, done) { return __awaiter(_this, void 0, void 0, function () {\r\n        var userFound, error_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 2, , 3]);\r\n                    return [4 /*yield*/, blogs_1.default.find(\"email\", email)];\r\n                case 1:\r\n                    userFound = (_a.sent())[0];\r\n                    if (userFound && (0, utils_1.compareHash)(password, userFound.userpassword)) {\r\n                        done(null, userFound);\r\n                    }\r\n                    else {\r\n                        done(null, false);\r\n                    }\r\n                    return [3 /*break*/, 3];\r\n                case 2:\r\n                    error_1 = _a.sent();\r\n                    done(error_1);\r\n                    return [3 /*break*/, 3];\r\n                case 3: return [2 /*return*/];\r\n            }\r\n        });\r\n    }); }));\r\n    passport.use(new PassportJWT.Strategy({\r\n        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),\r\n        secretOrKey: config_1.default.jwt.secret,\r\n    }, function (payload, done) {\r\n        try {\r\n            done(null, payload);\r\n        }\r\n        catch (error) {\r\n            done(error);\r\n        }\r\n    }));\r\n    app.use(passport.initialize());\r\n}\r\nexports.configurePassport = configurePassport;\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/middleware/passport-stradegies.ts?");

/***/ }),

/***/ "./src/server/routes/api/index.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar blogs_1 = __webpack_require__(/*! ../../db/blogs */ \"./src/server/db/blogs.ts\");\r\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/config/index.ts\");\r\nvar pizza_1 = __webpack_require__(/*! ./pizza */ \"./src/server/routes/api/pizza.ts\");\r\nvar auth_1 = __webpack_require__(/*! ../../middleware/auth */ \"./src/server/middleware/auth.ts\");\r\nvar router = express.Router();\r\nrouter.use('/pizza', pizza_1.default);\r\nrouter.get(\"/hello\", function (req, res, next) {\r\n    res.json(\"Hello \" + config_1.default.test);\r\n});\r\nrouter.get(\"/suggestedevents\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, _b, e_1;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, blogs_1.default.allsuggestedevents()];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _c.sent();\r\n                console.log(e_1);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/suggestedeventsusers\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, _b, e_2;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, blogs_1.default.allsuggestedeventsusers()];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_2 = _c.sent();\r\n                console.log(e_2);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post(\"/suggestedevents\", auth_1.tokenCheck, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, _b, e_3;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, blogs_1.default.addEvent(req.body.eventname, req.body.eventdescription, req.body.eventdate, req.body.userId)];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_3 = _c.sent();\r\n                console.log(e_3);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/routes/api/pizza.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/pizza.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar auth_1 = __webpack_require__(/*! ../../middleware/auth */ \"./src/server/middleware/auth.ts\");\r\nvar rout = express.Router();\r\nrout.get('/', auth_1.tokenCheck, function (req, res, next) {\r\n    try {\r\n        res.json({ message: \"Enjoy your pizza Time\" });\r\n    }\r\n    catch (error) {\r\n        console.log(error);\r\n        res.status(500).json({ message: 'My code sucks let me know!' });\r\n    }\r\n});\r\nexports[\"default\"] = rout;\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/routes/api/pizza.ts?");

/***/ }),

/***/ "./src/server/routes/auth/index.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar login_1 = __webpack_require__(/*! ./login */ \"./src/server/routes/auth/login.ts\");\r\nvar register_1 = __webpack_require__(/*! ./register */ \"./src/server/routes/auth/register.ts\");\r\nvar router = express.Router();\r\nrouter.use(\"/login\", login_1.default);\r\nrouter.use(\"/register\", register_1.default);\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/routes/auth/index.ts?");

/***/ }),

/***/ "./src/server/routes/auth/login.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/login.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/config/index.ts\");\r\nvar router = express.Router();\r\nrouter.post(\"/\", passport.authenticate('local'), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var token;\r\n    return __generator(this, function (_a) {\r\n        try {\r\n            token = jwt.sign({ userid: req.user.id, email: req.user.email, role: 1 }, config_1.default.jwt.secret, { expiresIn: '1d' });\r\n            return [2 /*return*/, res.json(token)];\r\n        }\r\n        catch (err) {\r\n            console.log(err);\r\n            res.status(500).json({ message: \"My code login broke oops... SORRY\" });\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); });\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/routes/auth/login.ts?");

/***/ }),

/***/ "./src/server/routes/auth/register.ts":
/*!********************************************!*\
  !*** ./src/server/routes/auth/register.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/config/index.ts\");\r\nvar blogs_1 = __webpack_require__(/*! ../../db/blogs */ \"./src/server/db/blogs.ts\");\r\nvar utils_1 = __webpack_require__(/*! ../../utils */ \"./src/server/utils/index.ts\");\r\nvar router = express.Router();\r\nrouter.post(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var newUser, result, newUserId, token, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                newUser = req.body;\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 4, , 5]);\r\n                newUser.userpassword = (0, utils_1.generateHash)(newUser.userpassword);\r\n                return [4 /*yield*/, blogs_1.default.insert(newUser)];\r\n            case 2:\r\n                result = _a.sent();\r\n                return [4 /*yield*/, blogs_1.default.find('email', newUser.email)];\r\n            case 3:\r\n                newUserId = _a.sent();\r\n                token = jwt.sign({ userid: newUserId.id, email: newUser.email, role: 1 }, config_1.default.jwt.secret, { expiresIn: '1d' });\r\n                return [2 /*return*/, res.json(token)];\r\n            case 4:\r\n                err_1 = _a.sent();\r\n                console.log(err_1);\r\n                res.status(500).json({ message: \"My code register broke oops\" });\r\n                return [3 /*break*/, 5];\r\n            case 5: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/routes/auth/register.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.ts\");\r\nvar auth_1 = __webpack_require__(/*! ./auth */ \"./src/server/routes/auth/index.ts\");\r\nvar router = express.Router();\r\nrouter.use(\"/api\", api_1.default);\r\nrouter.use(\"/auth\", auth_1.default);\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar index_1 = __webpack_require__(/*! ./routes/index */ \"./src/server/routes/index.ts\");\r\nvar passport_stradegies_1 = __webpack_require__(/*! ./middleware/passport-stradegies */ \"./src/server/middleware/passport-stradegies.ts\");\r\nvar app = express();\r\n(0, passport_stradegies_1.configurePassport)(app);\r\napp.use(express.static(\"public\"));\r\napp.use(express.json());\r\napp.use(index_1.default);\r\napp.get(['*'], function (req, res, next) {\r\n    res.sendFile(path.join(__dirname, \"../public/index.html\"));\r\n});\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/index.ts":
/*!***********************************!*\
  !*** ./src/server/utils/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.compareHash = exports.generateHash = void 0;\r\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nfunction generateHash(password) {\r\n    var salt = bcrypt.genSaltSync(12);\r\n    var hash = bcrypt.hashSync(password, salt);\r\n    return hash;\r\n}\r\nexports.generateHash = generateHash;\r\nfunction compareHash(password, hashed) {\r\n    return bcrypt.compareSync(password, hashed);\r\n}\r\nexports.compareHash = compareHash;\r\n\n\n//# sourceURL=webpack://suggest-event/./src/server/utils/index.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;