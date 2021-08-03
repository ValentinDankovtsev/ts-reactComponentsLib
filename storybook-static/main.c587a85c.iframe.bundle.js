(self.webpackChunkts_chat = self.webpackChunkts_chat || []).push([
  [179],
  {
    42126: (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";
      (module = __webpack_require__.nmd(module)),
        (0, __webpack_require__(3012).configure)(
          [__webpack_require__(55649), __webpack_require__(65687)],
          module,
          !1
        );
    },
    26663: (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          parameters: () => parameters,
        });
      __webpack_require__(97973),
        __webpack_require__(17921),
        __webpack_require__(27670),
        __webpack_require__(34422),
        __webpack_require__(4041),
        __webpack_require__(9810),
        __webpack_require__(73873),
        __webpack_require__(19346),
        __webpack_require__(15233);
      var client_api = __webpack_require__(78880),
        types = __webpack_require__(8597),
        esm = __webpack_require__(23827),
        parameters = {
          actions: { argTypesRegex: "^on[A-Z].*" },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
        };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
          case "argTypes":
            return esm.kg.warn(
              "Invalid args/argTypes in config, ignoring.",
              JSON.stringify(value)
            );
          case "decorators":
            return value.forEach(function (decorator) {
              return (0, client_api.$9)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return (0, client_api.HZ)(loader, !1);
            });
          case "parameters":
            return (0, client_api.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return (0, client_api.My)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return (0, client_api._C)(enhancer);
            });
          case "render":
            return (0, types.setGlobalRender)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), (0, client_api.h1)(v, !1);
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    76986: (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__(3012);
    },
    24374: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          collapseBlockStory: () => collapseBlockStory,
        });
      __webpack_require__(70731),
        __webpack_require__(69898),
        __webpack_require__(67294);
      var _collapseBlockComponent__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(59688),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(85893);
      const __WEBPACK_DEFAULT_EXPORT__ = {
        component: _collapseBlockComponent__WEBPACK_IMPORTED_MODULE_3__.W,
        title: "Collapse",
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _collapseBlockComponent__WEBPACK_IMPORTED_MODULE_3__.W,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var collapseBlockStory = Template.bind({});
      (collapseBlockStory.args = {
        header: "Так выглядить заголовок первого уровня",
        content: "Посмотрите на прекрасный storybook",
      }),
        (collapseBlockStory.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\n  <CollapseComponent {...args} />\n)",
            },
          },
          collapseBlockStory.parameters
        ));
    },
    82755: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          columsComp: () => columsComp,
        });
      __webpack_require__(70731),
        __webpack_require__(69898),
        __webpack_require__(67294);
      var _columnComponent__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(46210),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(85893);
      const __WEBPACK_DEFAULT_EXPORT__ = {
        component: _columnComponent__WEBPACK_IMPORTED_MODULE_3__.a,
        title: "Columns",
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _columnComponent__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var columsComp = Template.bind({});
      (columsComp.args = {
        columnCount: 4,
        text: "Как и во всех универсальных свойствах, любое персональное значение, которое не указанно, устанавливается в начальное значение. Обратите внимание, border не может быть использован для указания пользовательского значения border-image (en-US), но вместо этого устанавливает его в начальное значение, т.е. none.",
      }),
        (columsComp.parameters = Object.assign(
          {
            storySource: { source: "(args) => <ColumnsComponent {...args} />" },
          },
          columsComp.parameters
        ));
    },
    98032: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          headerTest: () => headerTest,
        });
      __webpack_require__(70731),
        __webpack_require__(69898),
        __webpack_require__(67294);
      var _headerComponent__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(88590),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(85893);
      const __WEBPACK_DEFAULT_EXPORT__ = {
        component: _headerComponent__WEBPACK_IMPORTED_MODULE_3__.h,
        title: "Header",
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _headerComponent__WEBPACK_IMPORTED_MODULE_3__.h,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var headerTest = Template.bind({});
      (headerTest.args = { level: 1, text: "😄👍😍💯" }),
        (headerTest.parameters = Object.assign(
          { storySource: { source: "(args) => <Header {...args} />" } },
          headerTest.parameters
        ));
    },
    88280: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          catalogTest: () => catalogTest,
          default: () => catalogComponent_stories,
        });
      __webpack_require__(70731), __webpack_require__(69898);
      var react = __webpack_require__(67294),
        classCallCheck =
          (__webpack_require__(47243), __webpack_require__(6610)),
        createClass = __webpack_require__(5991),
        inherits = __webpack_require__(10379),
        possibleConstructorReturn = __webpack_require__(86089),
        getPrototypeOf = __webpack_require__(77608),
        headerComponent =
          (__webpack_require__(34102),
          __webpack_require__(51392),
          __webpack_require__(99217),
          __webpack_require__(84865),
          __webpack_require__(97973),
          __webpack_require__(7609),
          __webpack_require__(81828),
          __webpack_require__(44653),
          __webpack_require__(88590)),
        paraghraphComponent = __webpack_require__(29558),
        collapseBlockComponent = __webpack_require__(59688),
        columnComponent = __webpack_require__(46210),
        imageComponent = __webpack_require__(78317),
        spaceBlockComponent = __webpack_require__(76154);
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = (0, getPrototypeOf.Z)(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, getPrototypeOf.Z)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return (0, possibleConstructorReturn.Z)(this, result);
        };
      }
      function higherOrderComponent(Element, newProps) {
        var NewElement = (function (_Element) {
          (0, inherits.Z)(NewElement, _Element);
          var _super = _createSuper(NewElement);
          function NewElement() {
            return (
              (0, classCallCheck.Z)(this, NewElement),
              _super.apply(this, arguments)
            );
          }
          return NewElement;
        })(Element);
        return (NewElement.defaultProps = newProps), NewElement;
      }
      var jsx_runtime = __webpack_require__(85893);
      function catalogComponent_createSuper(Derived) {
        var hasNativeReflectConstruct =
          (function catalogComponent_isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
        return function _createSuperInternal() {
          var result,
            Super = (0, getPrototypeOf.Z)(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, getPrototypeOf.Z)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return (0, possibleConstructorReturn.Z)(this, result);
        };
      }
      var components = [
          headerComponent.h,
          paraghraphComponent.W,
          collapseBlockComponent.W,
          columnComponent.a,
          imageComponent.c,
          spaceBlockComponent.Z,
        ],
        CatalogComponent = (function (_React$Component) {
          (0, inherits.Z)(CatalogComponent, _React$Component);
          var _super = catalogComponent_createSuper(CatalogComponent);
          function CatalogComponent() {
            var _this;
            (0, classCallCheck.Z)(this, CatalogComponent);
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key];
            return (
              ((_this = _super.call.apply(_super, [this].concat(args))).state =
                {
                  compName: "",
                  isNameComponent: !1,
                  isPropsComponent: !1,
                  compProps: {},
                }),
              (_this.selectHandler = function (ev) {
                _this.setState({ compName: ev.target.value });
              }),
              (_this.selectComponentButtonName = function () {
                _this.setState(function () {
                  return { isNameComponent: !0 };
                });
              }),
              (_this.findComponent = function () {
                return components.find(function (el) {
                  return el.defaultProps.name === _this.state.compName;
                });
              }),
              (_this.renderComponent = function () {
                var NewComponent = higherOrderComponent(
                  _this.findComponent(),
                  Object.assign({}, _this.state.compProps)
                );
                return (0, jsx_runtime.jsx)(NewComponent, {});
              }),
              (_this.inputChangeProps = function (event) {
                var inputId = event.target.id,
                  newComponentProps = Object.assign({}, _this.state.compProps);
                (newComponentProps[inputId] = event.target.value),
                  _this.setState({ compProps: newComponentProps });
              }),
              (_this.setComponentPropsButton = function () {
                _this.setState(function () {
                  return { isPropsComponent: !0 };
                });
              }),
              _this
            );
          }
          return (
            (0, createClass.Z)(CatalogComponent, [
              {
                key: "renderComponentWithProperty",
                value: function renderComponentWithProperty() {
                  var _this2 = this,
                    component = this.findComponent();
                  return Object.keys(component.defaultProps).map(function (
                    key,
                    index
                  ) {
                    return "name" === key
                      ? null
                      : (0, jsx_runtime.jsx)(
                          "div",
                          {
                            "data-testid": "formId" + index.toString(),
                            children: (0, jsx_runtime.jsx)("input", {
                              type: "text",
                              onChange: _this2.inputChangeProps,
                              id: "" + key,
                              "data-testid": "" + key + index,
                              placeholder: "Введи " + key,
                            }),
                          },
                          index
                        );
                  });
                },
              },
              {
                key: "render",
                value: function render() {
                  return !0 !== this.state.isNameComponent
                    ? (0, jsx_runtime.jsxs)("div", {
                        onChange: this.selectHandler,
                        children: [
                          (0, jsx_runtime.jsx)("input", {
                            type: "radio",
                            value: "header",
                            "data-testid": "headerId",
                            onClick: this.selectComponentButtonName,
                          }),
                          (0, jsx_runtime.jsx)("label", {
                            htmlFor: "headerId",
                            children: "Header",
                          }),
                          (0, jsx_runtime.jsx)("input", {
                            type: "radio",
                            value: "paraghraph",
                            "data-testid": "paraghraphId",
                            onClick: this.selectComponentButtonName,
                          }),
                          (0, jsx_runtime.jsx)("label", {
                            htmlFor: "paraghraphId",
                            children: "Paraghraph",
                          }),
                          (0, jsx_runtime.jsx)("input", {
                            type: "radio",
                            value: "collapse",
                            "data-testid": "collapseId",
                            onClick: this.selectComponentButtonName,
                          }),
                          (0, jsx_runtime.jsx)("label", {
                            htmlFor: "collapseId",
                            children: "Collapse",
                          }),
                          (0, jsx_runtime.jsx)("input", {
                            type: "radio",
                            value: "columns",
                            "data-testid": "columnseId",
                            onClick: this.selectComponentButtonName,
                          }),
                          (0, jsx_runtime.jsx)("label", {
                            htmlFor: "columnsId",
                            children: "Columns",
                          }),
                          (0, jsx_runtime.jsx)("input", {
                            type: "radio",
                            value: "image",
                            "data-testid": "imageId",
                            onClick: this.selectComponentButtonName,
                          }),
                          (0, jsx_runtime.jsx)("label", {
                            htmlFor: "imageId",
                            children: "Image",
                          }),
                          (0, jsx_runtime.jsx)("input", {
                            type: "radio",
                            value: "space",
                            "data-testid": "spaceId",
                            onClick: this.selectComponentButtonName,
                          }),
                          (0, jsx_runtime.jsx)("label", {
                            htmlFor: "spaceId",
                            children: "Space",
                          }),
                        ],
                      })
                    : this.state.isPropsComponent
                    ? (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: (0, jsx_runtime.jsx)("div", {
                          children: this.renderComponent(),
                        }),
                      })
                    : this.state.isNameComponent
                    ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                          this.renderComponentWithProperty(),
                          (0, jsx_runtime.jsx)("button", {
                            onClick: this.setComponentPropsButton,
                            children: "Проверить компонент",
                          }),
                        ],
                      })
                    : null;
                },
              },
            ]),
            CatalogComponent
          );
        })(react.Component);
      try {
        (CatalogComponent.displayName = "CatalogComponent"),
          (CatalogComponent.__docgenInfo = {
            description: "",
            displayName: "CatalogComponent",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/hocComponent/catalogComponent.tsx#CatalogComponent"
            ] = {
              docgenInfo: CatalogComponent.__docgenInfo,
              name: "CatalogComponent",
              path: "src/hocComponent/catalogComponent.tsx#CatalogComponent",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const catalogComponent_stories = {
        component: CatalogComponent,
        title: "CatalogComponent",
      };
      var Template = function Template(args) {
        return (0, jsx_runtime.jsx)(CatalogComponent, Object.assign({}, args));
      };
      Template.displayName = "Template";
      var catalogTest = Template.bind({});
      (catalogTest.args = {}),
        (catalogTest.parameters = Object.assign(
          {
            storySource: { source: "(args) => <CatalogComponent {...args} />" },
          },
          catalogTest.parameters
        ));
    },
    40979: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          imageComp: () => imageComp,
        });
      __webpack_require__(70731),
        __webpack_require__(69898),
        __webpack_require__(67294);
      var _imageComponent__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(78317),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(85893);
      const __WEBPACK_DEFAULT_EXPORT__ = {
        component: _imageComponent__WEBPACK_IMPORTED_MODULE_3__.c,
        title: "Image",
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _imageComponent__WEBPACK_IMPORTED_MODULE_3__.c,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var imageComp = Template.bind({});
      (imageComp.args = {
        source: "https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg",
        float: "left",
      }),
        (imageComp.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\n  <ImageComponent {...args} />\n)",
            },
          },
          imageComp.parameters
        ));
    },
    74124: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          paraghraphQuote: () => paraghraphQuote,
          paraghraphBold: () => paraghraphBold,
          paraghraphNormal: () => paraghraphNormal,
        });
      __webpack_require__(70731),
        __webpack_require__(69898),
        __webpack_require__(67294);
      var _paraghraphComponent__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(29558),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(85893);
      const __WEBPACK_DEFAULT_EXPORT__ = {
        component: _paraghraphComponent__WEBPACK_IMPORTED_MODULE_3__.W,
        title: "Paraghraph",
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _paraghraphComponent__WEBPACK_IMPORTED_MODULE_3__.W,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var paraghraphQuote = Template.bind({}),
        paraghraphBold = Template.bind({}),
        paraghraphNormal = Template.bind({});
      (paraghraphQuote.args = { style: "quote", text: "quoteStyle=TestText" }),
        (paraghraphBold.args = { style: "bold", text: "boldStyle=TestText" }),
        (paraghraphNormal.args = {
          style: "normal",
          text: "normalStyle=TestText",
        }),
        (paraghraphQuote.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\n  <Paraghraph {...args} />\n)",
            },
          },
          paraghraphQuote.parameters
        )),
        (paraghraphBold.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\n  <Paraghraph {...args} />\n)",
            },
          },
          paraghraphBold.parameters
        )),
        (paraghraphNormal.parameters = Object.assign(
          {
            storySource: {
              source: "(args) => (\n  <Paraghraph {...args} />\n)",
            },
          },
          paraghraphNormal.parameters
        ));
    },
    5146: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          spaceBlock: () => spaceBlock,
        });
      __webpack_require__(70731),
        __webpack_require__(69898),
        __webpack_require__(67294);
      var _spaceBlockComponent__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(76154),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(85893);
      const __WEBPACK_DEFAULT_EXPORT__ = {
        component: _spaceBlockComponent__WEBPACK_IMPORTED_MODULE_3__.Z,
        title: "SpaceBlock",
      };
      var Template = function Template(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _spaceBlockComponent__WEBPACK_IMPORTED_MODULE_3__.Z,
          Object.assign({}, args)
        );
      };
      Template.displayName = "Template";
      var spaceBlock = Template.bind({});
      (spaceBlock.args = { height: 30, border: "solid 1px" }),
        (spaceBlock.parameters = Object.assign(
          { storySource: { source: "(args) => <SpaceBlock {...args} />" } },
          spaceBlock.parameters
        ));
    },
    59688: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        W: () => CollapseComponent,
      });
      __webpack_require__(47243);
      var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(6610),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(5991),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(10379),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(86089),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(77608),
        react__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__(34102), __webpack_require__(67294)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(85893);
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(
              Derived
            );
          if (hasNativeReflectConstruct) {
            var NewTarget = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(
              this
            ).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return (0,
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.Z)(
            this,
            result
          );
        };
      }
      var CollapseComponent = (function (_React$Component) {
        (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__.Z)(
          CollapseComponent,
          _React$Component
        );
        var _super = _createSuper(CollapseComponent);
        function CollapseComponent() {
          var _this;
          (0,
          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__.Z)(
            this,
            CollapseComponent
          );
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this = _super.call.apply(_super, [this].concat(args))).state = {
              isCollapse: !1,
            }),
            (_this.toggle = function () {
              return _this.setState({ isCollapse: !_this.state.isCollapse });
            }),
            _this
          );
        }
        return (
          (0,
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__.Z)(
            CollapseComponent,
            [
              {
                key: "render",
                value: function render() {
                  return this.state.isCollapse
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                              "h1",
                              {
                                "data-testid": "collapse-id",
                                children: this.props.header,
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                              "button",
                              { onClick: this.toggle, children: "Скрыть" }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                              "p",
                              { children: this.props.content }
                            ),
                          ],
                        }
                      )
                    : (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,
                        {
                          children: [
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                              "h1",
                              {
                                "data-testid": "collapse-id",
                                children: this.props.header,
                              }
                            ),
                            (0,
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                              "button",
                              { onClick: this.toggle, children: "Открыть" }
                            ),
                          ],
                        }
                      );
                },
              },
            ]
          ),
          CollapseComponent
        );
      })(react__WEBPACK_IMPORTED_MODULE_4__.Component);
      CollapseComponent.defaultProps = {
        name: "collapse",
        header: "header defolt",
        content: "some content",
      };
      try {
        (CollapseComponent.displayName = "CollapseComponent"),
          (CollapseComponent.__docgenInfo = {
            description: "",
            displayName: "CollapseComponent",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/collapseBlockComponent/collapseBlockComponent.tsx#CollapseComponent"
            ] = {
              docgenInfo: CollapseComponent.__docgenInfo,
              name: "CollapseComponent",
              path: "src/collapseBlockComponent/collapseBlockComponent.tsx#CollapseComponent",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    46210: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { a: () => ColumnsComponent });
      __webpack_require__(47243);
      var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(6610),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(5991),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(10379),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(86089),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(77608),
        react__WEBPACK_IMPORTED_MODULE_4__ =
          (__webpack_require__(84865), __webpack_require__(67294)),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(85893);
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(
              Derived
            );
          if (hasNativeReflectConstruct) {
            var NewTarget = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.Z)(
              this
            ).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return (0,
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.Z)(
            this,
            result
          );
        };
      }
      var ColumnsComponent = (function (_React$Component) {
        (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__.Z)(
          ColumnsComponent,
          _React$Component
        );
        var _super = _createSuper(ColumnsComponent);
        function ColumnsComponent() {
          return (
            (0,
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__.Z)(
              this,
              ColumnsComponent
            ),
            _super.apply(this, arguments)
          );
        }
        return (
          (0,
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__.Z)(
            ColumnsComponent,
            [
              {
                key: "render",
                value: function render() {
                  for (var result = [], i = 0; i < this.props.columnCount; i++)
                    result.push(
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                        "div",
                        {
                          "data-testid": "column-id",
                          style: { border: "dashed red" },
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
                            "p",
                            { children: this.props.text }
                          ),
                        },
                        i
                      )
                    );
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    "data-testid": "columnBlock-id",
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      border: "dashed red",
                    },
                    children: result.map(function (el) {
                      return el;
                    }),
                  });
                },
              },
            ]
          ),
          ColumnsComponent
        );
      })(react__WEBPACK_IMPORTED_MODULE_4__.Component);
      ColumnsComponent.defaultProps = {
        name: "columns",
        columnCount: 4,
        text: "заполнение текстом",
      };
      try {
        (ColumnsComponent.displayName = "ColumnsComponent"),
          (ColumnsComponent.__docgenInfo = {
            description: "",
            displayName: "ColumnsComponent",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/columnComponent/columnComponent.tsx#ColumnsComponent"
            ] = {
              docgenInfo: ColumnsComponent.__docgenInfo,
              name: "ColumnsComponent",
              path: "src/columnComponent/columnComponent.tsx#ColumnsComponent",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    88590: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { h: () => Header });
      __webpack_require__(47243);
      var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(6610),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(5991),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(10379),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(86089),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(77608),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(
              Derived
            );
          if (hasNativeReflectConstruct) {
            var NewTarget = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(
              this
            ).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return (0,
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(
            this,
            result
          );
        };
      }
      var Header = (function (_React$Component) {
        (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.Z)(
          Header,
          _React$Component
        );
        var _super = _createSuper(Header);
        function Header() {
          return (
            (0,
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.Z)(
              this,
              Header
            ),
            _super.apply(this, arguments)
          );
        }
        return (
          (0,
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__.Z)(
            Header,
            [
              {
                key: "render",
                value: function render() {
                  return react__WEBPACK_IMPORTED_MODULE_3__.createElement(
                    "h" + this.props.level,
                    { "data-testid": "h" + this.props.level },
                    this.props.text
                  );
                },
              },
            ]
          ),
          Header
        );
      })(react__WEBPACK_IMPORTED_MODULE_3__.Component);
      Header.defaultProps = { name: "header", level: "1", text: "text" };
      try {
        (Header.displayName = "Header"),
          (Header.__docgenInfo = {
            description: "",
            displayName: "Header",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/headerComponent/headerComponent.tsx#Header"
            ] = {
              docgenInfo: Header.__docgenInfo,
              name: "Header",
              path: "src/headerComponent/headerComponent.tsx#Header",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    78317: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { c: () => ImageComponent });
      __webpack_require__(47243);
      var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(6610),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(5991),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(10379),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(86089),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(77608),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(85893);
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(
              Derived
            );
          if (hasNativeReflectConstruct) {
            var NewTarget = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(
              this
            ).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return (0,
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(
            this,
            result
          );
        };
      }
      var ImageComponent = (function (_React$Component) {
        (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__.Z)(
          ImageComponent,
          _React$Component
        );
        var _super = _createSuper(ImageComponent);
        function ImageComponent() {
          return (
            (0,
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.Z)(
              this,
              ImageComponent
            ),
            _super.apply(this, arguments)
          );
        }
        return (
          (0,
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__.Z)(
            ImageComponent,
            [
              {
                key: "render",
                value: function render() {
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    "data-testid": "image-id",
                    src: this.props.source,
                    style: { float: this.props.float },
                  });
                },
              },
            ]
          ),
          ImageComponent
        );
      })(react__WEBPACK_IMPORTED_MODULE_3__.Component);
      ImageComponent.defaultProps = {
        name: "image",
        source: "https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg",
        float: "left",
      };
      try {
        (ImageComponent.displayName = "ImageComponent"),
          (ImageComponent.__docgenInfo = {
            description: "",
            displayName: "ImageComponent",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/imageComponent/imageComponent.tsx#ImageComponent"
            ] = {
              docgenInfo: ImageComponent.__docgenInfo,
              name: "ImageComponent",
              path: "src/imageComponent/imageComponent.tsx#ImageComponent",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    29558: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { W: () => Paraghraph });
      __webpack_require__(47243);
      var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(6610),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(5991),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(10379),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(86089),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(77608),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(85893);
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(
              Derived
            );
          if (hasNativeReflectConstruct) {
            var NewTarget = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(
              this
            ).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return (0,
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(
            this,
            result
          );
        };
      }
      var Paraghraph = (function (_React$Component) {
        (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__.Z)(
          Paraghraph,
          _React$Component
        );
        var _super = _createSuper(Paraghraph);
        function Paraghraph() {
          return (
            (0,
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.Z)(
              this,
              Paraghraph
            ),
            _super.apply(this, arguments)
          );
        }
        return (
          (0,
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__.Z)(
            Paraghraph,
            [
              {
                key: "render",
                value: function render() {
                  return "bold" === this.props.style
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                        "p",
                        {
                          style: { fontWeight: "bold" },
                          children: this.props.text,
                        }
                      )
                    : "normal" === this.props.style
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                        "p",
                        {
                          style: { fontStyle: "normal" },
                          children: this.props.text,
                        }
                      )
                    : "quote" === this.props.style
                    ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                        "blockquote",
                        {
                          "data-testid": "id",
                          children: (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                            "p",
                            { children: this.props.text }
                          ),
                        }
                      )
                    : void 0;
                },
              },
            ]
          ),
          Paraghraph
        );
      })(react__WEBPACK_IMPORTED_MODULE_3__.Component);
      Paraghraph.defaultProps = {
        name: "paraghraph",
        style: "bold",
        text: "newText",
      };
      try {
        (Paraghraph.displayName = "Paraghraph"),
          (Paraghraph.__docgenInfo = {
            description: "",
            displayName: "Paraghraph",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/paragraphComponent/paraghraphComponent.tsx#Paraghraph"
            ] = {
              docgenInfo: Paraghraph.__docgenInfo,
              name: "Paraghraph",
              path: "src/paragraphComponent/paraghraphComponent.tsx#Paraghraph",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    76154: (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { Z: () => SpaceBlock });
      __webpack_require__(47243);
      var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(6610),
        _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(5991),
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(10379),
        _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(86089),
        _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(77608),
        react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(85893);
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(
              Derived
            );
          if (hasNativeReflectConstruct) {
            var NewTarget = (0,
            _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__.Z)(
              this
            ).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return (0,
          _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.Z)(
            this,
            result
          );
        };
      }
      var SpaceBlock = (function (_React$Component) {
        (0, _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__.Z)(
          SpaceBlock,
          _React$Component
        );
        var _super = _createSuper(SpaceBlock);
        function SpaceBlock() {
          return (
            (0,
            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.Z)(
              this,
              SpaceBlock
            ),
            _super.apply(this, arguments)
          );
        }
        return (
          (0,
          _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__.Z)(
            SpaceBlock,
            [
              {
                key: "render",
                value: function render() {
                  return (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    style: {
                      height: this.props.height,
                      border: this.props.border,
                    },
                    "data-testid": "divspace-id",
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {
                      "data-testid": "line-id",
                    }),
                  });
                },
              },
            ]
          ),
          SpaceBlock
        );
      })(react__WEBPACK_IMPORTED_MODULE_3__.Component);
      SpaceBlock.defaultProps = {
        name: "space",
        height: 20,
        border: "solid 3px",
      };
      try {
        (SpaceBlock.displayName = "SpaceBlock"),
          (SpaceBlock.__docgenInfo = {
            description: "",
            displayName: "SpaceBlock",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/spaceBlockComponent/spaceBlockComponent.tsx#SpaceBlock"
            ] = {
              docgenInfo: SpaceBlock.__docgenInfo,
              name: "SpaceBlock",
              path: "src/spaceBlockComponent/spaceBlockComponent.tsx#SpaceBlock",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    65687: (module, __unused_webpack_exports, __webpack_require__) => {
      var map = {
        "./collapseBlockComponent/collapseBlockComponent.stories.tsx": 24374,
        "./columnComponent/columnComponent.stories.tsx": 82755,
        "./headerComponent/headerComponent.stories.tsx": 98032,
        "./hocComponent/catalogComponent.stories.tsx": 88280,
        "./imageComponent/imageComponent.stories.tsx": 40979,
        "./paragraphComponent/paragraphComponent.stories.tsx": 74124,
        "./spaceBlockComponent/spaceBlockComponent.stories.tsx": 5146,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 65687);
    },
    55649: (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = 55649),
        (module.exports = webpackEmptyContext);
    },
    24654: () => {},
    46710: () => {},
  },
  (__webpack_require__) => {
    "use strict";
    var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    __webpack_require__.O(
      0,
      [289],
      () => (
        __webpack_exec__(37707),
        __webpack_exec__(99669),
        __webpack_exec__(76986),
        __webpack_exec__(90168),
        __webpack_exec__(4379),
        __webpack_exec__(59746),
        __webpack_exec__(84873),
        __webpack_exec__(62853),
        __webpack_exec__(81953),
        __webpack_exec__(22609),
        __webpack_exec__(64049),
        __webpack_exec__(21424),
        __webpack_exec__(26663),
        __webpack_exec__(42126)
      )
    );
    __webpack_require__.O();
  },
]);
//# sourceMappingURL=main.c587a85c.iframe.bundle.js.map
