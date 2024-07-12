/*! For license information please see main.173d4b07.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      534: (e, t, n) => {
        var r = n(313),
          o = n(224);
        function a(e) {
          for (
            var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var l = new Set(),
          i = {};
        function u(e, t) {
          s(e, t), s(e + 'Capture', t);
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, o, a, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = l);
        }
        var v = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
            v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e, null, !1, !1);
            }
          ),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = v.hasOwnProperty(t) ? v[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) && (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : o.mustUseProperty
                ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
                : ((t = o.attributeName),
                  (r = o.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(y, g);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(y, g);
              v[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(y, g);
            v[t] = new m(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for('react.element'),
          _ = Symbol.for('react.portal'),
          k = Symbol.for('react.fragment'),
          E = Symbol.for('react.strict_mode'),
          T = Symbol.for('react.profiler'),
          R = Symbol.for('react.provider'),
          C = Symbol.for('react.context'),
          x = Symbol.for('react.forward_ref'),
          N = Symbol.for('react.suspense'),
          L = Symbol.for('react.suspense_list'),
          A = Symbol.for('react.memo'),
          P = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var M = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var O = Symbol.iterator;
        function z(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (O && e[O]) || e['@@iterator'])
              ? e
              : null;
        }
        var D,
          V = Object.assign;
        function U(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || '';
            }
          return '\n' + D + e;
        }
        var I = !1;
        function F(e, t) {
          if (!e || I) return '';
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && 'string' === typeof s.stack) {
              for (
                var o = s.stack.split('\n'),
                  a = r.stack.split('\n'),
                  l = o.length - 1,
                  i = a.length - 1;
                1 <= l && 0 <= i && o[l] !== a[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (o[l] !== a[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || o[l] !== a[i])) {
                        var u = '\n' + o[l].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            u.includes('<anonymous>') &&
                            (u = u.replace('<anonymous>', e.displayName)),
                          u
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? U(e) : '';
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U('Lazy');
            case 13:
              return U('Suspense');
            case 19:
              return U('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = F(e.type, !1));
            case 11:
              return (e = F(e.type.render, !1));
            case 1:
              return (e = F(e.type, !0));
            default:
              return '';
          }
        }
        function j(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case k:
              return 'Fragment';
            case _:
              return 'Portal';
            case T:
              return 'Profiler';
            case E:
              return 'StrictMode';
            case N:
              return 'Suspense';
            case L:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || 'Context') + '.Consumer';
              case R:
                return (e._context.displayName || 'Context') + '.Provider';
              case x:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case A:
                return null !== (t = e.displayName || null) ? t : j(e.type) || 'Memo';
              case P:
                (t = e._payload), (e = e._init);
                try {
                  return j(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return j(t);
            case 8:
              return t === E ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t) return t.displayName || t.name || null;
              if ('string' === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = $(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            'undefined' === typeof (e = e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return V({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
            });
        }
        function Z(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1);
        }
        function X(e, t) {
          Z(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, n)
            : t.hasOwnProperty('defaultValue') && ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value)))
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ('number' === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + H(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return V({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ae(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function ue(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? ie(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
              ? 'http://www.w3.org/1999/xhtml'
              : e;
        }
        var se,
          ce,
          de =
            ((ce = function (e, t) {
              if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e)
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O'];
        function me(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n || 'number' !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
              ? ('' + t).trim()
              : t + 'px';
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                o = me(n, t[n], r);
              'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
          });
        });
        var ye = V(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && 'object' !== typeof t.style) throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var Se = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var _e = null,
          ke = null,
          Ee = null;
        function Te(e) {
          if ((e = So(e))) {
            if ('function' !== typeof _e) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = _o(t)), _e(e.stateNode, e.type, t));
          }
        }
        function Re(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function Ce() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), Te(e), t)) for (e = 0; e < t.length; e++) Te(t[e]);
          }
        }
        function xe(e, t) {
          return e(t);
        }
        function Ne() {}
        var Le = !1;
        function Ae(e, t, n) {
          if (Le) return e(t, n);
          Le = !0;
          try {
            return xe(e, t, n);
          } finally {
            (Le = !1), (null !== ke || null !== Ee) && (Ne(), Ce());
          }
        }
        function Pe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = _o(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Me = !1;
        if (c)
          try {
            var Oe = {};
            Object.defineProperty(Oe, 'passive', {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener('test', Oe, Oe),
              window.removeEventListener('test', Oe, Oe);
          } catch (ce) {
            Me = !1;
          }
        function ze(e, t, n, r, o, a, l, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Ve = null,
          Ue = !1,
          Ie = null,
          Fe = {
            onError: function (e) {
              (De = !0), (Ve = e);
            },
          };
        function Be(e, t, n, r, o, a, l, i, u) {
          (De = !1), (Ve = null), ze.apply(Fe, arguments);
        }
        function je(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (je(e) !== e) throw Error(a(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = je(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var l = o.alternate;
                if (null === l) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === l.child) {
                  for (l = o.child; l; ) {
                    if (l === n) return He(o), e;
                    if (l === r) return He(o), t;
                    l = l.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = l);
                else {
                  for (var i = !1, u = o.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = o), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = o), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = o);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = o);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = o.unstable_scheduleCallback,
          qe = o.unstable_cancelCallback,
          Ge = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          Ze = o.unstable_now,
          Xe = o.unstable_getCurrentPriorityLevel,
          Je = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~o;
            0 !== i ? (r = dt(i)) : 0 !== (a &= l) && (r = dt(a));
          } else 0 !== (l = n & ~o) ? (r = dt(l)) : 0 !== a && (r = dt(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function St(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var wt,
          _t,
          kt,
          Et,
          Tt,
          Rt = !1,
          Ct = [],
          xt = null,
          Nt = null,
          Lt = null,
          At = new Map(),
          Pt = new Map(),
          Mt = [],
          Ot =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function zt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              xt = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Nt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Lt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              At.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Pt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = So(t)) && _t(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Vt(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = je(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Tt(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = So(n)) && _t(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Se = r), n.target.dispatchEvent(r), (Se = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function Ft() {
          (Rt = !1),
            null !== xt && Ut(xt) && (xt = null),
            null !== Nt && Ut(Nt) && (Nt = null),
            null !== Lt && Ut(Lt) && (Lt = null),
            At.forEach(It),
            Pt.forEach(It);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Rt || ((Rt = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, Ft)));
        }
        function jt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Ct.length) {
            Bt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== xt && Bt(xt, e),
              null !== Nt && Bt(Nt, e),
              null !== Lt && Bt(Lt, e),
              At.forEach(t),
              Pt.forEach(t),
              n = 0;
            n < Mt.length;
            n++
          )
            (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
            Vt(n), null === n.blockedOn && Mt.shift();
        }
        var Wt = S.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var o = bt,
            a = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = o), (Wt.transition = a);
          }
        }
        function Kt(e, t, n, r) {
          var o = bt,
            a = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = o), (Wt.transition = a);
          }
        }
        function Qt(e, t, n, r) {
          if (Ht) {
            var o = Gt(e, t, n, r);
            if (null === o) Hr(e, t, r, qt, n), zt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case 'focusin':
                    return (xt = Dt(xt, e, t, n, r, o)), !0;
                  case 'dragenter':
                    return (Nt = Dt(Nt, e, t, n, r, o)), !0;
                  case 'mouseover':
                    return (Lt = Dt(Lt, e, t, n, r, o)), !0;
                  case 'pointerover':
                    var a = o.pointerId;
                    return At.set(a, Dt(At.get(a) || null, e, t, n, r, o)), !0;
                  case 'gotpointercapture':
                    return (a = o.pointerId), Pt.set(a, Dt(Pt.get(a) || null, e, t, n, r, o)), !0;
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Ot.indexOf(e))) {
              for (; null !== o; ) {
                var a = So(o);
                if (
                  (null !== a && wt(a),
                  null === (a = Gt(e, t, n, r)) && Hr(e, t, r, qt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Gt(e, t, n, r) {
          if (((qt = null), null !== (e = bo((e = we(r))))))
            if (null === (t = je(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Xe()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zt = null,
          Xt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Xt,
            r = n.length,
            o = 'value' in Zt ? Zt.value : Zt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === o[a - t]; t++);
          return (Jt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(o) : o[l]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            V(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(sn),
          dn = V({}, sn, { view: 0, detail: 0 }),
          fn = on(dn),
          pn = V({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Tn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== un &&
                    (un && 'mousemove' === e.type
                      ? ((an = e.screenX - un.screenX), (ln = e.screenY - un.screenY))
                      : (ln = an = 0),
                    (un = e)),
                  an);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : ln;
            },
          }),
          hn = on(pn),
          mn = on(V({}, pn, { dataTransfer: 0 })),
          vn = on(V({}, dn, { relatedTarget: 0 })),
          yn = on(V({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          gn = V({}, sn, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          }),
          bn = on(gn),
          Sn = on(V({}, sn, { data: 0 })),
          wn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          _n = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          kn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e];
        }
        function Tn() {
          return En;
        }
        var Rn = V({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? _n[e.keyCode] || 'Unidentified'
                  : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Tn,
            charCode: function (e) {
              return 'keypress' === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tn(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          Cn = on(Rn),
          xn = on(
            V({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Nn = on(
            V({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Tn,
            })
          ),
          Ln = on(V({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          An = V({}, pn, {
            deltaX: function (e) {
              return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Pn = on(An),
          Mn = [9, 13, 27, 32],
          On = c && 'CompositionEvent' in window,
          zn = null;
        c && 'documentMode' in document && (zn = document.documentMode);
        var Dn = c && 'TextEvent' in window && !zn,
          Vn = c && (!On || (zn && 8 < zn && 11 >= zn)),
          Un = String.fromCharCode(32),
          In = !1;
        function Fn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Mn.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e ? e.data : null;
        }
        var jn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!Wn[e.type] : 'textarea' === t;
        }
        function $n(e, t, n, r) {
          Re(r),
            0 < (t = Kr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          Qn = null;
        function qn(e) {
          Ur(e, 0);
        }
        function Gn(e) {
          if (Q(wo(e))) return e;
        }
        function Yn(e, t) {
          if ('change' === e) return t;
        }
        var Zn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Jn = 'oninput' in document;
            if (!Jn) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'), (Jn = 'function' === typeof er.oninput);
            }
            Xn = Jn;
          } else Xn = !1;
          Zn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent('onpropertychange', nr), (Qn = Kn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && Gn(Qn)) {
            var t = [];
            $n(t, Qn, e, we(e)), Ae(qn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (Qn = n), (Kn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function or(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Gn(Qn);
        }
        function ar(e, t) {
          if ('click' === e) return Gn(t);
        }
        function lr(e, t) {
          if ('input' === e || 'change' === e) return Gn(t);
        }
        var ir =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !ir(e[o], t[o])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : 'contains' in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
              if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = cr(n, a));
                var l = cr(n, r);
                o &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ('function' === typeof n.focus && n.focus(), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          vr = null,
          yr = null,
          gr = null,
          br = !1;
        function Sr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          br ||
            null == vr ||
            vr !== q(r) ||
            ('selectionStart' in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = Kr(yr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var _r = {
            animationend: wr('Animation', 'AnimationEnd'),
            animationiteration: wr('Animation', 'AnimationIteration'),
            animationstart: wr('Animation', 'AnimationStart'),
            transitionend: wr('Transition', 'TransitionEnd'),
          },
          kr = {},
          Er = {};
        function Tr(e) {
          if (kr[e]) return kr[e];
          if (!_r[e]) return e;
          var t,
            n = _r[e];
          for (t in n) if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete _r.animationend.animation,
            delete _r.animationiteration.animation,
            delete _r.animationstart.animation),
          'TransitionEvent' in window || delete _r.transitionend.transition);
        var Rr = Tr('animationend'),
          Cr = Tr('animationiteration'),
          xr = Tr('animationstart'),
          Nr = Tr('transitionend'),
          Lr = new Map(),
          Ar =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Pr(e, t) {
          Lr.set(e, t), u(t, [e]);
        }
        for (var Mr = 0; Mr < Ar.length; Mr++) {
          var Or = Ar[Mr];
          Pr(Or.toLowerCase(), 'on' + (Or[0].toUpperCase() + Or.slice(1)));
        }
        Pr(Rr, 'onAnimationEnd'),
          Pr(Cr, 'onAnimationIteration'),
          Pr(xr, 'onAnimationStart'),
          Pr('dblclick', 'onDoubleClick'),
          Pr('focusin', 'onFocus'),
          Pr('focusout', 'onBlur'),
          Pr(Nr, 'onTransitionEnd'),
          s('onMouseEnter', ['mouseout', 'mouseover']),
          s('onMouseLeave', ['mouseout', 'mouseover']),
          s('onPointerEnter', ['pointerout', 'pointerover']),
          s('onPointerLeave', ['pointerout', 'pointerover']),
          u(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(' ')
          ),
          u(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          u('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
          u(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(' ')
          ),
          u(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
          ),
          u(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
          );
        var zr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Dr = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zr));
        function Vr(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, o, l, i, u, s) {
              if ((Be.apply(this, arguments), De)) {
                if (!De) throw Error(a(198));
                var c = Ve;
                (De = !1), (Ve = null), Ue || ((Ue = !0), (Ie = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== a && o.isPropagationStopped())) break e;
                  Vr(o, i, s), (a = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== a && o.isPropagationStopped())
                  )
                    break e;
                  Vr(o, i, s), (a = u);
                }
            }
          }
          if (Ue) throw ((e = Ie), (Ue = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[vo];
          void 0 === n && (n = t[vo] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Fr(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Br = '_reactListening' + Math.random().toString(36).slice(2);
        function jr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              l.forEach(function (t) {
                'selectionchange' !== t && (Dr.has(t) || Fr(t, !1, e), Fr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Fr('selectionchange', !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var o = $t;
              break;
            case 4:
              o = Kt;
              break;
            default:
              o = Qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Me || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
                ? e.addEventListener(t, n, { passive: o })
                : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === o || (8 === i.nodeType && i.parentNode === o)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === o ||
                        (8 === u.nodeType && u.parentNode === o))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = bo(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = a = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Ae(function () {
            var r = a,
              o = we(n),
              l = [];
            e: {
              var i = Lr.get(e);
              if (void 0 !== i) {
                var u = cn,
                  s = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    u = Cn;
                    break;
                  case 'focusin':
                    (s = 'focus'), (u = vn);
                    break;
                  case 'focusout':
                    (s = 'blur'), (u = vn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    u = vn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    u = hn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    u = mn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    u = Nn;
                    break;
                  case Rr:
                  case Cr:
                  case xr:
                    u = yn;
                    break;
                  case Nr:
                    u = Ln;
                    break;
                  case 'scroll':
                    u = fn;
                    break;
                  case 'wheel':
                    u = Pn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    u = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    u = xn;
                }
                var c = 0 !== (4 & t),
                  d = !c && 'scroll' === e,
                  f = c ? (null !== i ? i + 'Capture' : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m), null !== f && null != (m = Pe(h, f)) && c.push($r(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length && ((i = new u(i, s, null, n, o)), l.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                  n === Se ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!bo(s) && !s[mo])) &&
                  (u || i) &&
                  ((i =
                    o.window === o
                      ? o
                      : (i = o.ownerDocument)
                        ? i.defaultView || i.parentWindow
                        : window),
                  u
                    ? ((u = r),
                      null !== (s = (s = n.relatedTarget || n.toElement) ? bo(s) : null) &&
                        (s !== (d = je(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = 'onMouseLeave'),
                  (f = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = xn), (m = 'onPointerLeave'), (f = 'onPointerEnter'), (h = 'pointer')),
                  (d = null == u ? i : wo(u)),
                  (p = null == s ? i : wo(s)),
                  ((i = new c(m, h + 'leave', u, n, o)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(f, h + 'enter', s, n, o)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  u && s)
                )
                  e: {
                    for (f = s, h = 0, p = c = u; p; p = Qr(p)) h++;
                    for (p = 0, m = f; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (f = Qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Qr(c)), (f = Qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && qr(l, i, u, c, !1), null !== s && null !== d && qr(l, d, s, c, !0);
              }
              if (
                'select' === (u = (i = r ? wo(r) : window).nodeName && i.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === i.type)
              )
                var v = Yn;
              else if (Hn(i))
                if (Zn) v = lr;
                else {
                  v = or;
                  var y = rr;
                }
              else
                (u = i.nodeName) &&
                  'input' === u.toLowerCase() &&
                  ('checkbox' === i.type || 'radio' === i.type) &&
                  (v = ar);
              switch (
                (v && (v = v(e, r))
                  ? $n(l, v, n, o)
                  : (y && y(e, i, r),
                    'focusout' === e &&
                      (y = i._wrapperState) &&
                      y.controlled &&
                      'number' === i.type &&
                      ee(i, 'number', i.value)),
                (y = r ? wo(r) : window),
                e)
              ) {
                case 'focusin':
                  (Hn(y) || 'true' === y.contentEditable) && ((vr = y), (yr = r), (gr = null));
                  break;
                case 'focusout':
                  gr = yr = vr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), Sr(l, n, o);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  Sr(l, n, o);
              }
              var g;
              if (On)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                jn
                  ? Fn(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
              b &&
                (Vn &&
                  'ko' !== n.locale &&
                  (jn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && jn && (g = en())
                    : ((Xt = 'value' in (Zt = o) ? Zt.value : Zt.textContent), (jn = !0))),
                0 < (y = Kr(r, b)).length &&
                  ((b = new Sn(b, e, null, n, o)),
                  l.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Bn(n)) && (b.data = g))),
                (g = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Bn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((In = !0), Un);
                        case 'textInput':
                          return (e = t.data) === Un && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (jn)
                        return 'compositionend' === e || (!On && Fn(e, t))
                          ? ((e = en()), (Jt = Xt = Zt = null), (jn = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return Vn && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, 'onBeforeInput')).length &&
                  ((o = new Sn('onBeforeInput', 'beforeinput', null, n, o)),
                  l.push({ event: o, listeners: r }),
                  (o.data = g));
            }
            Ur(l, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Pe(e, n)) && r.unshift($r(e, a, o)),
              null != (a = Pe(e, t)) && r.push($r(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, o) {
          for (var a = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              o
                ? null != (u = Pe(n, a)) && l.unshift($r(n, u, i))
                : o || (null != (u = Pe(n, a)) && l.push($r(n, u, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Zr(e) {
          return ('string' === typeof e ? e : '' + e).replace(Gr, '\n').replace(Yr, '');
        }
        function Xr(e, t, n) {
          if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(a(425));
        }
        function Jr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = 'function' === typeof setTimeout ? setTimeout : void 0,
          oo = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          ao = 'function' === typeof Promise ? Promise : void 0,
          lo =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof ao
                ? function (e) {
                    return ao.resolve(null).then(e).catch(io);
                  }
                : ro;
        function io(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function uo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ('/$' === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void jt(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = o;
          } while (n);
          jt(t);
        }
        function so(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = '__reactFiber$' + fo,
          ho = '__reactProps$' + fo,
          mo = '__reactContainer$' + fo,
          vo = '__reactEvents$' + fo,
          yo = '__reactListeners$' + fo,
          go = '__reactHandles$' + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function So(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function _o(e) {
          return e[ho] || null;
        }
        var ko = [],
          Eo = -1;
        function To(e) {
          return { current: e };
        }
        function Ro(e) {
          0 > Eo || ((e.current = ko[Eo]), (ko[Eo] = null), Eo--);
        }
        function Co(e, t) {
          Eo++, (ko[Eo] = e.current), (e.current = t);
        }
        var xo = {},
          No = To(xo),
          Lo = To(!1),
          Ao = xo;
        function Po(e, t) {
          var n = e.type.contextTypes;
          if (!n) return xo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Mo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Oo() {
          Ro(Lo), Ro(No);
        }
        function zo(e, t, n) {
          if (No.current !== xo) throw Error(a(168));
          Co(No, t), Co(Lo, n);
        }
        function Do(e, t, n) {
          var r = e.stateNode;
          if (((t = t.childContextTypes), 'function' !== typeof r.getChildContext)) return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, W(e) || 'Unknown', o));
          return V({}, n, r);
        }
        function Vo(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xo),
            (Ao = No.current),
            Co(No, e),
            Co(Lo, Lo.current),
            !0
          );
        }
        function Uo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Do(e, t, Ao)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ro(Lo),
              Ro(No),
              Co(No, e))
            : Ro(Lo),
            Co(Lo, n);
        }
        var Io = null,
          Fo = !1,
          Bo = !1;
        function jo(e) {
          null === Io ? (Io = [e]) : Io.push(e);
        }
        function Wo() {
          if (!Bo && null !== Io) {
            Bo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Io;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Io = null), (Fo = !1);
            } catch (o) {
              throw (null !== Io && (Io = Io.slice(e + 1)), Qe(Je, Wo), o);
            } finally {
              (bt = t), (Bo = !1);
            }
          }
          return null;
        }
        var Ho = [],
          $o = 0,
          Ko = null,
          Qo = 0,
          qo = [],
          Go = 0,
          Yo = null,
          Zo = 1,
          Xo = '';
        function Jo(e, t) {
          (Ho[$o++] = Qo), (Ho[$o++] = Ko), (Ko = e), (Qo = t);
        }
        function ea(e, t, n) {
          (qo[Go++] = Zo), (qo[Go++] = Xo), (qo[Go++] = Yo), (Yo = e);
          var r = Zo;
          e = Xo;
          var o = 32 - lt(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - lt(t) + o;
          if (30 < a) {
            var l = o - (o % 5);
            (a = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (o -= l),
              (Zo = (1 << (32 - lt(t) + o)) | (n << o) | r),
              (Xo = a + e);
          } else (Zo = (1 << a) | (n << o) | r), (Xo = e);
        }
        function ta(e) {
          null !== e.return && (Jo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === Ko; ) (Ko = Ho[--$o]), (Ho[$o] = null), (Qo = Ho[--$o]), (Ho[$o] = null);
          for (; e === Yo; )
            (Yo = qo[--Go]),
              (qo[Go] = null),
              (Xo = qo[--Go]),
              (qo[Go] = null),
              (Zo = qo[--Go]),
              (qo[Go] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          la = null;
        function ia(e, t) {
          var n = Ps(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
        }
        function ua(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = so(t.firstChild)), !0)
              );
            case 6:
              return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yo ? { id: Zo, overflow: Xo } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Ps(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sa(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!ua(e, t)) {
                if (sa(e)) throw Error(a(418));
                t = so(n.nextSibling);
                var r = ra;
                t && ua(e, t) ? ia(r, n) : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (sa(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function da(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
          ra = e;
        }
        function fa(e) {
          if (e !== ra) return !1;
          if (!aa) return da(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t = 'head' !== (t = e.type) && 'body' !== t && !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (sa(e)) throw (pa(), Error(a(418)));
            for (; t; ) ia(e, t), (t = so(t.nextSibling));
          }
          if ((da(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      oa = so(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? so(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = so(e.nextSibling);
        }
        function ha() {
          (oa = ra = null), (aa = !1);
        }
        function ma(e) {
          null === la ? (la = [e]) : la.push(e);
        }
        var va = S.ReactCurrentBatchConfig;
        function ya(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = V({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ga = To(null),
          ba = null,
          Sa = null,
          wa = null;
        function _a() {
          wa = Sa = ba = null;
        }
        function ka(e) {
          var t = ga.current;
          Ro(ga), (e._currentValue = t);
        }
        function Ea(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ta(e, t) {
          (ba = e),
            (wa = Sa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Si = !0), (e.firstContext = null));
        }
        function Ra(e) {
          var t = e._currentValue;
          if (wa !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === Sa)) {
              if (null === ba) throw Error(a(308));
              (Sa = e), (ba.dependencies = { lanes: 0, firstContext: e });
            } else Sa = Sa.next = e;
          return t;
        }
        var Ca = null;
        function xa(e) {
          null === Ca ? (Ca = [e]) : Ca.push(e);
        }
        function Na(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o ? ((n.next = n), xa(t)) : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            La(e, r)
          );
        }
        function La(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Aa = !1;
        function Pa(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ma(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Oa(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function za(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Nu))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              La(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), xa(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            La(e, n)
          );
        }
        function Da(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Va(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = l) : (a = a.next = l), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ua(e, t, n, r) {
          var o = e.updateQueue;
          Aa = !1;
          var a = o.firstBaseUpdate,
            l = o.lastBaseUpdate,
            i = o.shared.pending;
          if (null !== i) {
            o.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === l ? (a = s) : (l.next = s), (l = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s), (c.lastBaseUpdate = u));
          }
          if (null !== a) {
            var d = o.baseState;
            for (l = 0, c = s = u = null, i = a; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ('function' === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f = 'function' === typeof (h = m.payload) ? h.call(p, d, f) : h) ||
                        void 0 === f
                      )
                        break e;
                      d = V({}, d, f);
                      break e;
                    case 2:
                      Aa = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64), null === (f = o.effects) ? (o.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
                  (l |= f);
              if (null === (i = i.next)) {
                if (null === (i = o.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (u = d),
              (o.baseState = u),
              (o.firstBaseUpdate = s),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (l |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Vu |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function Ia(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), 'function' !== typeof o)) throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Fa = new r.Component().refs;
        function Ba(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : V({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ja = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && je(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              o = ns(e),
              a = Oa(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = za(e, a, o)) && (rs(t, e, o, r), Da(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              o = ns(e),
              a = Oa(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = za(e, a, o)) && (rs(t, e, o, r), Da(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              o = Oa(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = za(e, o, r)) && (rs(t, e, r, n), Da(t, e, r));
          },
        };
        function Wa(e, t, n, r, o, a, l) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, l)
            : !t.prototype || !t.prototype.isPureReactComponent || !ur(n, r) || !ur(o, a);
        }
        function Ha(e, t, n) {
          var r = !1,
            o = xo,
            a = t.contextType;
          return (
            'object' === typeof a && null !== a
              ? (a = Ra(a))
              : ((o = Mo(t) ? Ao : No.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Po(e, o) : xo)),
            (t = new t(n, a)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ja),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function $a(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ja.enqueueReplaceState(t, t.state, null);
        }
        function Ka(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Fa), Pa(e);
          var a = t.contextType;
          'object' === typeof a && null !== a
            ? (o.context = Ra(a))
            : ((a = Mo(t) ? Ao : No.current), (o.context = Po(e, a))),
            (o.state = e.memoizedState),
            'function' === typeof (a = t.getDerivedStateFromProps) &&
              (Ba(e, t, a, n), (o.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof o.getSnapshotBeforeUpdate ||
              ('function' !== typeof o.UNSAFE_componentWillMount &&
                'function' !== typeof o.componentWillMount) ||
              ((t = o.state),
              'function' === typeof o.componentWillMount && o.componentWillMount(),
              'function' === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
              t !== o.state && ja.enqueueReplaceState(o, o.state, null),
              Ua(e, n, o, r),
              (o.state = e.memoizedState)),
            'function' === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Qa(e, t, n) {
          if (null !== (e = n.ref) && 'function' !== typeof e && 'object' !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                l = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Fa && (t = o.refs = {}), null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ('string' !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function qa(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
              )
            ))
          );
        }
        function Ga(e) {
          return (0, e._init)(e._payload);
        }
        function Ya(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Os(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Us(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var a = n.type;
            return a === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === a ||
                    ('object' === typeof a && null !== a && a.$$typeof === P && Ga(a) === t.type))
                ? (((r = o(t, n.props)).ref = Qa(e, t, n)), (r.return = e), r)
                : (((r = zs(n.type, n.key, n.props, null, e.mode, r)).ref = Qa(e, t, n)),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Ds(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Us('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = zs(t.type, t.key, t.props, null, e.mode, n)).ref = Qa(e, null, t)),
                    (n.return = e),
                    n
                  );
                case _:
                  return ((t = Is(t, e.mode, n)).return = e), t;
                case P:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t)) return ((t = Ds(t, e.mode, n, null)).return = e), t;
              qa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== o ? null : u(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === o ? s(e, t, n, r) : null;
                case _:
                  return n.key === o ? c(e, t, n, r) : null;
                case P:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== o ? null : d(e, t, n, r, null);
              qa(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return u(t, (e = e.get(n) || null), '' + r, o);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case _:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case P:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || z(r)) return d(t, (e = e.get(n) || null), r, o, null);
              qa(t, r);
            }
            return null;
          }
          function m(o, a, i, u) {
            for (
              var s = null, c = null, d = a, m = (a = 0), v = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var y = p(o, d, i[m], u);
              if (null === y) {
                null === d && (d = v);
                break;
              }
              e && d && null === y.alternate && t(o, d),
                (a = l(y, a, m)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (d = v);
            }
            if (m === i.length) return n(o, d), aa && Jo(o, m), s;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(o, i[m], u)) &&
                  ((a = l(d, a, m)), null === c ? (s = d) : (c.sibling = d), (c = d));
              return aa && Jo(o, m), s;
            }
            for (d = r(o, d); m < i.length; m++)
              null !== (v = h(d, o, m, i[m], u)) &&
                (e && null !== v.alternate && d.delete(null === v.key ? m : v.key),
                (a = l(v, a, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Jo(o, m),
              s
            );
          }
          function v(o, i, u, s) {
            var c = z(u);
            if ('function' !== typeof c) throw Error(a(150));
            if (null == (u = c.call(u))) throw Error(a(151));
            for (
              var d = (c = null), m = i, v = (i = 0), y = null, g = u.next();
              null !== m && !g.done;
              v++, g = u.next()
            ) {
              m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(o, m, g.value, s);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (i = l(b, i, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (g.done) return n(o, m), aa && Jo(o, v), c;
            if (null === m) {
              for (; !g.done; v++, g = u.next())
                null !== (g = f(o, g.value, s)) &&
                  ((i = l(g, i, v)), null === d ? (c = g) : (d.sibling = g), (d = g));
              return aa && Jo(o, v), c;
            }
            for (m = r(o, m); !g.done; v++, g = u.next())
              null !== (g = h(m, o, v, g.value, s)) &&
                (e && null !== g.alternate && m.delete(null === g.key ? v : g.key),
                (i = l(g, i, v)),
                null === d ? (c = g) : (d.sibling = g),
                (d = g));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Jo(o, v),
              c
            );
          }
          return function e(r, a, l, u) {
            if (
              ('object' === typeof l &&
                null !== l &&
                l.type === k &&
                null === l.key &&
                (l = l.props.children),
              'object' === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case w:
                  e: {
                    for (var s = l.key, c = a; null !== c; ) {
                      if (c.key === s) {
                        if ((s = l.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling), ((a = o(c, l.props.children)).return = r), (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ('object' === typeof s &&
                            null !== s &&
                            s.$$typeof === P &&
                            Ga(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, l.props)).ref = Qa(r, c, l)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === k
                      ? (((a = Ds(l.props.children, r.mode, u, l.key)).return = r), (r = a))
                      : (((u = zs(l.type, l.key, l.props, null, r.mode, u)).ref = Qa(r, a, l)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case _:
                  e: {
                    for (c = l.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === l.containerInfo &&
                          a.stateNode.implementation === l.implementation
                        ) {
                          n(r, a.sibling), ((a = o(a, l.children || [])).return = r), (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Is(l, r.mode, u)).return = r), (r = a);
                  }
                  return i(r);
                case P:
                  return e(r, a, (c = l._init)(l._payload), u);
              }
              if (te(l)) return m(r, a, l, u);
              if (z(l)) return v(r, a, l, u);
              qa(r, l);
            }
            return ('string' === typeof l && '' !== l) || 'number' === typeof l
              ? ((l = '' + l),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, l)).return = r), (r = a))
                  : (n(r, a), ((a = Us(l, r.mode, u)).return = r), (r = a)),
                i(r))
              : n(r, a);
          };
        }
        var Za = Ya(!0),
          Xa = Ya(!1),
          Ja = {},
          el = To(Ja),
          tl = To(Ja),
          nl = To(Ja);
        function rl(e) {
          if (e === Ja) throw Error(a(174));
          return e;
        }
        function ol(e, t) {
          switch ((Co(nl, t), Co(tl, e), Co(el, Ja), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, '');
              break;
            default:
              t = ue((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          Ro(el), Co(el, t);
        }
        function al() {
          Ro(el), Ro(tl), Ro(nl);
        }
        function ll(e) {
          rl(nl.current);
          var t = rl(el.current),
            n = ue(t, e.type);
          t !== n && (Co(tl, e), Co(el, n));
        }
        function il(e) {
          tl.current === e && (Ro(el), Ro(tl));
        }
        var ul = To(0);
        function sl(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var cl = [];
        function dl() {
          for (var e = 0; e < cl.length; e++) cl[e]._workInProgressVersionPrimary = null;
          cl.length = 0;
        }
        var fl = S.ReactCurrentDispatcher,
          pl = S.ReactCurrentBatchConfig,
          hl = 0,
          ml = null,
          vl = null,
          yl = null,
          gl = !1,
          bl = !1,
          Sl = 0,
          wl = 0;
        function _l() {
          throw Error(a(321));
        }
        function kl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function El(e, t, n, r, o, l) {
          if (
            ((hl = l),
            (ml = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fl.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, o)),
            bl)
          ) {
            l = 0;
            do {
              if (((bl = !1), (Sl = 0), 25 <= l)) throw Error(a(301));
              (l += 1), (yl = vl = null), (t.updateQueue = null), (fl.current = si), (e = n(r, o));
            } while (bl);
          }
          if (
            ((fl.current = li),
            (t = null !== vl && null !== vl.next),
            (hl = 0),
            (yl = vl = ml = null),
            (gl = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Tl() {
          var e = 0 !== Sl;
          return (Sl = 0), e;
        }
        function Rl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === yl ? (ml.memoizedState = yl = e) : (yl = yl.next = e), yl;
        }
        function Cl() {
          if (null === vl) {
            var e = ml.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vl.next;
          var t = null === yl ? ml.memoizedState : yl.next;
          if (null !== t) (yl = t), (vl = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (vl = e).memoizedState,
              baseState: vl.baseState,
              baseQueue: vl.baseQueue,
              queue: vl.queue,
              next: null,
            }),
              null === yl ? (ml.memoizedState = yl = e) : (yl = yl.next = e);
          }
          return yl;
        }
        function xl(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function Nl(e) {
          var t = Cl(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = vl,
            o = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== o) {
              var i = o.next;
              (o.next = l.next), (l.next = i);
            }
            (r.baseQueue = o = l), (n.pending = null);
          }
          if (null !== o) {
            (l = o.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = l;
            do {
              var d = c.lane;
              if ((hl & d) === d)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = f), (i = r)) : (s = s.next = f), (ml.lanes |= d), (Vu |= d);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (Si = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (l = o.lane), (ml.lanes |= l), (Vu |= l), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ll(e) {
          var t = Cl(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            l = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var i = (o = o.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== o);
            ir(l, t.memoizedState) || (Si = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Al() {}
        function Pl(e, t) {
          var n = ml,
            r = Cl(),
            o = t(),
            l = !ir(r.memoizedState, o);
          if (
            (l && ((r.memoizedState = o), (Si = !0)),
            (r = r.queue),
            Hl(zl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || l || (null !== yl && 1 & yl.memoizedState.tag))
          ) {
            if (((n.flags |= 2048), Il(9, Ol.bind(null, n, r, o, t), void 0, null), null === Lu))
              throw Error(a(349));
            0 !== (30 & hl) || Ml(n, t, o);
          }
          return o;
        }
        function Ml(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ml.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (ml.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Ol(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Dl(t) && Vl(e);
        }
        function zl(e, t, n) {
          return n(function () {
            Dl(t) && Vl(e);
          });
        }
        function Dl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Vl(e) {
          var t = La(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Ul(e) {
          var t = Rl();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, ml, e)),
            [t.memoizedState, e]
          );
        }
        function Il(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ml.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ml.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Fl() {
          return Cl().memoizedState;
        }
        function Bl(e, t, n, r) {
          var o = Rl();
          (ml.flags |= e), (o.memoizedState = Il(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function jl(e, t, n, r) {
          var o = Cl();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== vl) {
            var l = vl.memoizedState;
            if (((a = l.destroy), null !== r && kl(r, l.deps)))
              return void (o.memoizedState = Il(t, n, a, r));
          }
          (ml.flags |= e), (o.memoizedState = Il(1 | t, n, a, r));
        }
        function Wl(e, t) {
          return Bl(8390656, 8, e, t);
        }
        function Hl(e, t) {
          return jl(2048, 8, e, t);
        }
        function $l(e, t) {
          return jl(4, 2, e, t);
        }
        function Kl(e, t) {
          return jl(4, 4, e, t);
        }
        function Ql(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function ql(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            jl(4, 4, Ql.bind(null, t, e), n)
          );
        }
        function Gl() {}
        function Yl(e, t) {
          var n = Cl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && kl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Zl(e, t) {
          var n = Cl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && kl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xl(e, t, n) {
          return 0 === (21 & hl)
            ? (e.baseState && ((e.baseState = !1), (Si = !0)), (e.memoizedState = n))
            : (ir(n, t) || ((n = mt()), (ml.lanes |= n), (Vu |= n), (e.baseState = !0)), t);
        }
        function Jl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pl.transition;
          pl.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pl.transition = r);
          }
        }
        function ei() {
          return Cl().memoizedState;
        }
        function ti(e, t, n) {
          var r = ns(e);
          if (
            ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ri(e))
          )
            oi(t, n);
          else if (null !== (n = Na(e, t, n, r))) {
            rs(n, e, r, ts()), ai(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = ns(e),
            o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (ri(e)) oi(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = a(l, n);
                if (((o.hasEagerState = !0), (o.eagerState = i), ir(i, l))) {
                  var u = t.interleaved;
                  return (
                    null === u ? ((o.next = o), xa(t)) : ((o.next = u.next), (u.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (s) {}
            null !== (n = Na(e, t, o, r)) && (rs(n, e, r, (o = ts())), ai(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === ml || (null !== t && t === ml);
        }
        function oi(e, t) {
          bl = gl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function ai(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var li = {
            readContext: Ra,
            useCallback: _l,
            useContext: _l,
            useEffect: _l,
            useImperativeHandle: _l,
            useInsertionEffect: _l,
            useLayoutEffect: _l,
            useMemo: _l,
            useReducer: _l,
            useRef: _l,
            useState: _l,
            useDebugValue: _l,
            useDeferredValue: _l,
            useTransition: _l,
            useMutableSource: _l,
            useSyncExternalStore: _l,
            useId: _l,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Ra,
            useCallback: function (e, t) {
              return (Rl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ra,
            useEffect: Wl,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bl(4194308, 4, Ql.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Rl();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = Rl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, ml, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Rl().memoizedState = e);
            },
            useState: Ul,
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return (Rl().memoizedState = e);
            },
            useTransition: function () {
              var e = Ul(!1),
                t = e[0];
              return (e = Jl.bind(null, e[1])), (Rl().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ml,
                o = Rl();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Lu)) throw Error(a(349));
                0 !== (30 & hl) || Ml(r, t, n);
              }
              o.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (o.queue = l),
                Wl(zl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Il(9, Ol.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Rl(),
                t = Lu.identifierPrefix;
              if (aa) {
                var n = Xo;
                (t = ':' + t + 'R' + (n = (Zo & ~(1 << (32 - lt(Zo) - 1))).toString(32) + n)),
                  0 < (n = Sl++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = wl++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Ra,
            useCallback: Yl,
            useContext: Ra,
            useEffect: Hl,
            useImperativeHandle: ql,
            useInsertionEffect: $l,
            useLayoutEffect: Kl,
            useMemo: Zl,
            useReducer: Nl,
            useRef: Fl,
            useState: function () {
              return Nl(xl);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return Xl(Cl(), vl.memoizedState, e);
            },
            useTransition: function () {
              return [Nl(xl)[0], Cl().memoizedState];
            },
            useMutableSource: Al,
            useSyncExternalStore: Pl,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: Ra,
            useCallback: Yl,
            useContext: Ra,
            useEffect: Hl,
            useImperativeHandle: ql,
            useInsertionEffect: $l,
            useLayoutEffect: Kl,
            useMemo: Zl,
            useReducer: Ll,
            useRef: Fl,
            useState: function () {
              return Ll(xl);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              var t = Cl();
              return null === vl ? (t.memoizedState = e) : Xl(t, vl.memoizedState, e);
            },
            useTransition: function () {
              return [Ll(xl)[0], Cl().memoizedState];
            },
            useMutableSource: Al,
            useSyncExternalStore: Pl,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = '\nError generating stack: ' + a.message + '\n' + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function di(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pi = 'function' === typeof WeakMap ? WeakMap : Map;
        function hi(e, t, n) {
          ((n = Oa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $u || (($u = !0), (Ku = r)), fi(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = Oa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                fi(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              'function' === typeof a.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  'function' !== typeof r && (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
              }),
            n
          );
        }
        function vi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pi();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Rs.bind(null, e, t, n)), t.then(e, e));
        }
        function yi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gi(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Oa(-1, 1)).tag = 2), za(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bi = S.ReactCurrentOwner,
          Si = !1;
        function wi(e, t, n, r) {
          t.child = null === e ? Xa(t, null, n, r) : Za(t, e.child, n, r);
        }
        function _i(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ta(t, o),
            (r = El(e, t, n, r, a, o)),
            (n = Tl()),
            null === e || Si
              ? (aa && n && ta(t), (t.flags |= 1), wi(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), $i(e, t, o))
          );
        }
        function ki(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return 'function' !== typeof a ||
              Ms(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zs(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Ei(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var l = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(l, r) && e.ref === t.ref)
              return $i(e, t, o);
          }
          return (t.flags |= 1), ((e = Os(a, r)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function Ei(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (ur(a, r) && e.ref === t.ref) {
              if (((Si = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), $i(e, t, o);
              0 !== (131072 & e.flags) && (Si = !0);
            }
          }
          return Ci(e, t, n, r, o);
        }
        function Ti(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                Co(Ou, Mu),
                (Mu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  Co(Ou, Mu),
                  (Mu |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== a ? a.baseLanes : n),
                Co(Ou, Mu),
                (Mu |= r);
            }
          else
            null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
              Co(Ou, Mu),
              (Mu |= r);
          return wi(e, t, o, n), t.child;
        }
        function Ri(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ci(e, t, n, r, o) {
          var a = Mo(n) ? Ao : No.current;
          return (
            (a = Po(t, a)),
            Ta(t, o),
            (n = El(e, t, n, r, a, o)),
            (r = Tl()),
            null === e || Si
              ? (aa && r && ta(t), (t.flags |= 1), wi(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), $i(e, t, o))
          );
        }
        function xi(e, t, n, r, o) {
          if (Mo(n)) {
            var a = !0;
            Vo(t);
          } else a = !1;
          if ((Ta(t, o), null === t.stateNode)) Hi(e, t), Ha(t, n, r), Ka(t, n, r, o), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              s = n.contextType;
            'object' === typeof s && null !== s
              ? (s = Ra(s))
              : (s = Po(t, (s = Mo(n) ? Ao : No.current)));
            var c = n.getDerivedStateFromProps,
              d = 'function' === typeof c || 'function' === typeof l.getSnapshotBeforeUpdate;
            d ||
              ('function' !== typeof l.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== s) && $a(t, l, r, s)),
              (Aa = !1);
            var f = t.memoizedState;
            (l.state = f),
              Ua(t, r, l, o),
              (u = t.memoizedState),
              i !== r || f !== u || Lo.current || Aa
                ? ('function' === typeof c && (Ba(t, n, c, r), (u = t.memoizedState)),
                  (i = Aa || Wa(t, n, i, r, f, u, s))
                    ? (d ||
                        ('function' !== typeof l.UNSAFE_componentWillMount &&
                          'function' !== typeof l.componentWillMount) ||
                        ('function' === typeof l.componentWillMount && l.componentWillMount(),
                        'function' === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      'function' === typeof l.componentDidMount && (t.flags |= 4194308))
                    : ('function' === typeof l.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = s),
                  (r = i))
                : ('function' === typeof l.componentDidMount && (t.flags |= 4194308), (r = !1));
          } else {
            (l = t.stateNode),
              Ma(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : ya(t.type, i)),
              (l.props = s),
              (d = t.pendingProps),
              (f = l.context),
              'object' === typeof (u = n.contextType) && null !== u
                ? (u = Ra(u))
                : (u = Po(t, (u = Mo(n) ? Ao : No.current)));
            var p = n.getDerivedStateFromProps;
            (c = 'function' === typeof p || 'function' === typeof l.getSnapshotBeforeUpdate) ||
              ('function' !== typeof l.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== u) && $a(t, l, r, u)),
              (Aa = !1),
              (f = t.memoizedState),
              (l.state = f),
              Ua(t, r, l, o);
            var h = t.memoizedState;
            i !== d || f !== h || Lo.current || Aa
              ? ('function' === typeof p && (Ba(t, n, p, r), (h = t.memoizedState)),
                (s = Aa || Wa(t, n, s, r, f, h, u) || !1)
                  ? (c ||
                      ('function' !== typeof l.UNSAFE_componentWillUpdate &&
                        'function' !== typeof l.componentWillUpdate) ||
                      ('function' === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, u),
                      'function' === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, u)),
                    'function' === typeof l.componentDidUpdate && (t.flags |= 4),
                    'function' === typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = u),
                (r = s))
              : ('function' !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ni(e, t, n, r, a, o);
        }
        function Ni(e, t, n, r, o, a) {
          Ri(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return o && Uo(t, n, !1), $i(e, t, a);
          (r = t.stateNode), (bi.current = t);
          var i = l && 'function' !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Za(t, e.child, null, a)), (t.child = Za(t, null, i, a)))
              : wi(e, t, i, a),
            (t.memoizedState = r.state),
            o && Uo(t, n, !0),
            t.child
          );
        }
        function Li(e) {
          var t = e.stateNode;
          t.pendingContext
            ? zo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && zo(0, t.context, !1),
            ol(e, t.containerInfo);
        }
        function Ai(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), wi(e, t, n, r), t.child;
        }
        var Pi,
          Mi,
          Oi,
          zi,
          Di = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Vi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ui(e, t, n) {
          var r,
            o = t.pendingProps,
            l = ul.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Co(ul, 1 & l),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((u = o.children),
                  (e = o.fallback),
                  i
                    ? ((o = t.mode),
                      (i = t.child),
                      (u = { mode: 'hidden', children: u }),
                      0 === (1 & o) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Vs(u, o, 0, null)),
                      (e = Ds(e, o, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Vi(n)),
                      (t.memoizedState = Di),
                      e)
                    : Ii(t, u))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, o, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fi(e, t, i, (r = di(Error(a(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((l = r.fallback),
                      (o = t.mode),
                      (r = Vs({ mode: 'visible', children: r.children }, o, 0, null)),
                      ((l = Ds(l, o, i, null)).flags |= 2),
                      (r.return = t),
                      (l.return = t),
                      (r.sibling = l),
                      (t.child = r),
                      0 !== (1 & t.mode) && Za(t, e.child, null, i),
                      (t.child.memoizedState = Vi(i)),
                      (t.memoizedState = Di),
                      l);
              if (0 === (1 & t.mode)) return Fi(e, t, i, null);
              if ('$!' === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset)) var u = r.dgst;
                return (r = u), Fi(e, t, i, (r = di((l = Error(a(419))), r, void 0)));
              }
              if (((u = 0 !== (i & e.childLanes)), Si || u)) {
                if (null !== (r = Lu)) {
                  switch (i & -i) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | i)) ? 0 : o) &&
                    o !== l.retryLane &&
                    ((l.retryLane = o), La(e, o), rs(r, e, o, -1));
                }
                return vs(), Fi(e, t, i, (r = di(Error(a(421)))));
              }
              return '$?' === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = xs.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (oa = so(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (la = null),
                  null !== e &&
                    ((qo[Go++] = Zo),
                    (qo[Go++] = Xo),
                    (qo[Go++] = Yo),
                    (Zo = e.id),
                    (Xo = e.overflow),
                    (Yo = t)),
                  (t = Ii(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, o, r, l, n);
          if (i) {
            (i = o.fallback), (u = t.mode), (r = (l = e.child).sibling);
            var s = { mode: 'hidden', children: o.children };
            return (
              0 === (1 & u) && t.child !== l
                ? (((o = t.child).childLanes = 0), (o.pendingProps = s), (t.deletions = null))
                : ((o = Os(l, s)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r ? (i = Os(r, i)) : ((i = Ds(i, u, n, null)).flags |= 2),
              (i.return = t),
              (o.return = t),
              (o.sibling = i),
              (t.child = o),
              (o = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Vi(n)
                  : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Di),
              o
            );
          }
          return (
            (e = (i = e.child).sibling),
            (o = Os(i, { mode: 'visible', children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Ii(e, t) {
          return (
            ((t = Vs({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t)
          );
        }
        function Fi(e, t, n, r) {
          return (
            null !== r && ma(r),
            Za(t, e.child, null, n),
            ((e = Ii(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ea(e.return, t, n);
        }
        function ji(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Wi(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((wi(e, t, r.children, n), 0 !== (2 & (r = ul.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bi(e, n, t);
                else if (19 === e.tag) Bi(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Co(ul, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case 'forwards':
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === sl(e) && (o = n), (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  ji(t, !1, o, n, a);
                break;
              case 'backwards':
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === sl(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                ji(t, !0, n, null, a);
                break;
              case 'together':
                ji(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $i(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Vu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Os((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling), ((n = n.sibling = Os(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ki(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qi(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qi(t), null;
            case 1:
            case 17:
              return Mo(t.type) && Oo(), Qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                al(),
                Ro(Lo),
                Ro(No),
                dl(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== la && (is(la), (la = null)))),
                Mi(e, t),
                Qi(t),
                null
              );
            case 5:
              il(t);
              var o = rl(nl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Oi(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Qi(t), null;
                }
                if (((e = rl(el.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[po] = t), (r[ho] = l), (e = 0 !== (1 & t.mode)), n)) {
                    case 'dialog':
                      Ir('cancel', r), Ir('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Ir('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (o = 0; o < zr.length; o++) Ir(zr[o], r);
                      break;
                    case 'source':
                      Ir('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Ir('error', r), Ir('load', r);
                      break;
                    case 'details':
                      Ir('toggle', r);
                      break;
                    case 'input':
                      Y(r, l), Ir('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!l.multiple }), Ir('invalid', r);
                      break;
                    case 'textarea':
                      oe(r, l), Ir('invalid', r);
                  }
                  for (var u in (ge(n, l), (o = null), l))
                    if (l.hasOwnProperty(u)) {
                      var s = l[u];
                      'children' === u
                        ? 'string' === typeof s
                          ? r.textContent !== s &&
                            (!0 !== l.suppressHydrationWarning && Xr(r.textContent, s, e),
                            (o = ['children', s]))
                          : 'number' === typeof s &&
                            r.textContent !== '' + s &&
                            (!0 !== l.suppressHydrationWarning && Xr(r.textContent, s, e),
                            (o = ['children', '' + s]))
                        : i.hasOwnProperty(u) && null != s && 'onScroll' === u && Ir('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      K(r), J(r, l, !0);
                      break;
                    case 'textarea':
                      K(r), le(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof l.onClick && (r.onclick = Jr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === o.nodeType ? o : o.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = ie(n)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === n
                        ? (((e = u.createElement('div')).innerHTML = '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                          ? (e = u.createElement(n, { is: r.is }))
                          : ((e = u.createElement(n)),
                            'select' === n &&
                              ((u = e),
                              r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Pi(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case 'dialog':
                        Ir('cancel', e), Ir('close', e), (o = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Ir('load', e), (o = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (o = 0; o < zr.length; o++) Ir(zr[o], e);
                        o = r;
                        break;
                      case 'source':
                        Ir('error', e), (o = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Ir('error', e), Ir('load', e), (o = r);
                        break;
                      case 'details':
                        Ir('toggle', e), (o = r);
                        break;
                      case 'input':
                        Y(e, r), (o = G(e, r)), Ir('invalid', e);
                        break;
                      case 'option':
                      default:
                        o = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = V({}, r, { value: void 0 })),
                          Ir('invalid', e);
                        break;
                      case 'textarea':
                        oe(e, r), (o = re(e, r)), Ir('invalid', e);
                    }
                    for (l in (ge(n, o), (s = o)))
                      if (s.hasOwnProperty(l)) {
                        var c = s[l];
                        'style' === l
                          ? ve(e, c)
                          : 'dangerouslySetInnerHTML' === l
                            ? null != (c = c ? c.__html : void 0) && de(e, c)
                            : 'children' === l
                              ? 'string' === typeof c
                                ? ('textarea' !== n || '' !== c) && fe(e, c)
                                : 'number' === typeof c && fe(e, '' + c)
                              : 'suppressContentEditableWarning' !== l &&
                                'suppressHydrationWarning' !== l &&
                                'autoFocus' !== l &&
                                (i.hasOwnProperty(l)
                                  ? null != c && 'onScroll' === l && Ir('scroll', e)
                                  : null != c && b(e, l, c, u));
                      }
                    switch (n) {
                      case 'input':
                        K(e), J(e, r, !1);
                        break;
                      case 'textarea':
                        K(e), le(e);
                        break;
                      case 'option':
                        null != r.value && e.setAttribute('value', '' + H(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof o.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                      case 'img':
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qi(t), null;
            case 6:
              if (e && null != t.stateNode) zi(e, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode) throw Error(a(166));
                if (((n = rl(nl.current)), rl(el.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (l = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t),
                    (t.stateNode = r);
              }
              return Qi(t), null;
            case 13:
              if (
                (Ro(ul),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (aa && null !== oa && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                  pa(), ha(), (t.flags |= 98560), (l = !1);
                else if (((l = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(a(318));
                    if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null))
                      throw Error(a(317));
                    l[po] = t;
                  } else ha(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  Qi(t), (l = !1);
                } else null !== la && (is(la), (la = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ul.current) ? 0 === zu && (zu = 3) : vs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qi(t),
                  null);
            case 4:
              return al(), Mi(e, t), null === e && jr(t.stateNode.containerInfo), Qi(t), null;
            case 10:
              return ka(t.type._context), Qi(t), null;
            case 19:
              if ((Ro(ul), null === (l = t.memoizedState))) return Qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = l.rendering)))
                if (r) Ki(l, !1);
                else {
                  if (0 !== zu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = sl(e))) {
                        for (
                          t.flags |= 128,
                            Ki(l, !1),
                            null !== (r = u.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return Co(ul, (1 & ul.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Ze() > Wu &&
                    ((t.flags |= 128), (r = !0), Ki(l, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = sl(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      Ki(l, !0),
                      null === l.tail && 'hidden' === l.tailMode && !u.alternate && !aa)
                    )
                      return Qi(t), null;
                  } else
                    2 * Ze() - l.renderingStartTime > Wu &&
                      1073741824 !== n &&
                      ((t.flags |= 128), (r = !0), Ki(l, !1), (t.lanes = 4194304));
                l.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = l.last) ? (n.sibling = u) : (t.child = u), (l.last = u));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Ze()),
                  (t.sibling = null),
                  (n = ul.current),
                  Co(ul, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qi(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Mu) && (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Gi(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                Mo(t.type) && Oo(),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 3:
              return (
                al(),
                Ro(Lo),
                Ro(No),
                dl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return il(t), null;
            case 13:
              if ((Ro(ul), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return Ro(ul), null;
            case 4:
              return al(), null;
            case 10:
              return ka(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Pi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Mi = function () {}),
          (Oi = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), rl(el.current);
              var a,
                l = null;
              switch (n) {
                case 'input':
                  (o = G(e, o)), (r = G(e, r)), (l = []);
                  break;
                case 'select':
                  (o = V({}, o, { value: void 0 })), (r = V({}, r, { value: void 0 })), (l = []);
                  break;
                case 'textarea':
                  (o = re(e, o)), (r = re(e, r)), (l = []);
                  break;
                default:
                  'function' !== typeof o.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ge(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ('style' === c) {
                    var u = o[c];
                    for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (i.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ('style' === c)
                    if (u) {
                      for (a in u)
                        !u.hasOwnProperty(a) ||
                          (s && s.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ''));
                      for (a in s)
                        s.hasOwnProperty(a) && u[a] !== s[a] && (n || (n = {}), (n[a] = s[a]));
                    } else n || (l || (l = []), l.push(c, n)), (n = s);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (l = l || []).push(c, s))
                      : 'children' === c
                        ? ('string' !== typeof s && 'number' !== typeof s) ||
                          (l = l || []).push(c, '' + s)
                        : 'suppressContentEditableWarning' !== c &&
                          'suppressHydrationWarning' !== c &&
                          (i.hasOwnProperty(c)
                            ? (null != s && 'onScroll' === c && Ir('scroll', e),
                              l || u === s || (l = []))
                            : (l = l || []).push(c, s));
              }
              n && (l = l || []).push('style', n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (zi = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yi = !1,
          Zi = !1,
          Xi = 'function' === typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (r) {
                Ts(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            Ts(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && tu(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function ou(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), 'function' === typeof t ? t(e) : (t.current = e);
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po], delete t[ho], delete t[vo], delete t[yo], delete t[go]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function iu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || iu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; ) su(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; ) cu(e, t, n), (e = e.sibling);
        }
        var du = null,
          fu = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (at && 'function' === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Zi || eu(n, t);
            case 6:
              var r = du,
                o = fu;
              (du = null),
                pu(e, t, n),
                (fu = o),
                null !== (du = r) &&
                  (fu
                    ? ((e = du),
                      (n = n.stateNode),
                      8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                    : du.removeChild(n.stateNode));
              break;
            case 18:
              null !== du &&
                (fu
                  ? ((e = du),
                    (n = n.stateNode),
                    8 === e.nodeType ? uo(e.parentNode, n) : 1 === e.nodeType && uo(e, n),
                    jt(e))
                  : uo(du, n.stateNode));
              break;
            case 4:
              (r = du),
                (o = fu),
                (du = n.stateNode.containerInfo),
                (fu = !0),
                pu(e, t, n),
                (du = r),
                (fu = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Zi && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                o = r = r.next;
                do {
                  var a = o,
                    l = a.destroy;
                  (a = a.tag),
                    void 0 !== l && (0 !== (2 & a) || 0 !== (4 & a)) && tu(n, t, l),
                    (o = o.next);
                } while (o !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (!Zi && (eu(n, t), 'function' === typeof (r = n.stateNode).componentWillUnmount))
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Ts(n, t, i);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Zi = (r = Zi) || null !== n.memoizedState), pu(e, t, n), (Zi = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function mu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xi()),
              t.forEach(function (t) {
                var r = Ns.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var l = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (du = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (du = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === du) throw Error(a(160));
                hu(l, i, o), (du = null), (fu = !1);
                var s = o.alternate;
                null !== s && (s.return = null), (o.return = null);
              } catch (c) {
                Ts(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
        }
        function yu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(t, e), gu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), ou(3, e);
                } catch (v) {
                  Ts(e, e.return, v);
                }
                try {
                  ru(5, e, e.return);
                } catch (v) {
                  Ts(e, e.return, v);
                }
              }
              break;
            case 1:
              vu(t, e), gu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if ((vu(t, e), gu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags)) {
                var o = e.stateNode;
                try {
                  fe(o, '');
                } catch (v) {
                  Ts(e, e.return, v);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    'input' === u && 'radio' === l.type && null != l.name && Z(o, l), be(u, i);
                    var c = be(u, l);
                    for (i = 0; i < s.length; i += 2) {
                      var d = s[i],
                        f = s[i + 1];
                      'style' === d
                        ? ve(o, f)
                        : 'dangerouslySetInnerHTML' === d
                          ? de(o, f)
                          : 'children' === d
                            ? fe(o, f)
                            : b(o, d, f, c);
                    }
                    switch (u) {
                      case 'input':
                        X(o, l);
                        break;
                      case 'textarea':
                        ae(o, l);
                        break;
                      case 'select':
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(o, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(o, !!l.multiple, l.defaultValue, !0)
                              : ne(o, !!l.multiple, l.multiple ? [] : '', !1));
                    }
                    o[ho] = l;
                  } catch (v) {
                    Ts(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (l = e.memoizedProps);
                try {
                  o.nodeValue = l;
                } catch (v) {
                  Ts(e, e.return, v);
                }
              }
              break;
            case 3:
              if ((vu(t, e), gu(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  jt(t.containerInfo);
                } catch (v) {
                  Ts(e, e.return, v);
                }
              break;
            case 4:
            default:
              vu(t, e), gu(e);
              break;
            case 13:
              vu(t, e),
                gu(e),
                8192 & (o = e.child).flags &&
                  ((l = null !== o.memoizedState),
                  (o.stateNode.isHidden = l),
                  !l ||
                    (null !== o.alternate && null !== o.alternate.memoizedState) ||
                    (ju = Ze())),
                4 & r && mu(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Zi = (c = Zi) || d), vu(t, e), (Zi = c)) : vu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Ji = e, d = e.child; null !== d; ) {
                    for (f = Ji = d; null !== Ji; ) {
                      switch (((h = (p = Ji).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var m = p.stateNode;
                          if ('function' === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Ts(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            _u(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Ji = h)) : _u(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (o = f.stateNode),
                          c
                            ? 'function' === typeof (l = o.style).setProperty
                              ? l.setProperty('display', 'none', 'important')
                              : (l.display = 'none')
                            : ((u = f.stateNode),
                              (i =
                                void 0 !== (s = f.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty('display')
                                  ? s.display
                                  : null),
                              (u.style.display = me('display', i)));
                      } catch (v) {
                        Ts(e, e.return, v);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? '' : f.memoizedProps;
                      } catch (v) {
                        Ts(e, e.return, v);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
                }
              }
              break;
            case 19:
              vu(t, e), gu(e), 4 & r && mu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (iu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (fe(o, ''), (r.flags &= -33)), cu(e, uu(e), o);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  su(e, uu(e), l);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (i) {
              Ts(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Ji = e), Su(e, t, n);
        }
        function Su(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Ji; ) {
            var o = Ji,
              a = o.child;
            if (22 === o.tag && r) {
              var l = null !== o.memoizedState || Yi;
              if (!l) {
                var i = o.alternate,
                  u = (null !== i && null !== i.memoizedState) || Zi;
                i = Yi;
                var s = Zi;
                if (((Yi = l), (Zi = u) && !s))
                  for (Ji = o; null !== Ji; )
                    (u = (l = Ji).child),
                      22 === l.tag && null !== l.memoizedState
                        ? ku(o)
                        : null !== u
                          ? ((u.return = l), (Ji = u))
                          : ku(o);
                for (; null !== a; ) (Ji = a), Su(a, t, n), (a = a.sibling);
                (Ji = o), (Yi = i), (Zi = s);
              }
              wu(e);
            } else 0 !== (8772 & o.subtreeFlags) && null !== a ? ((a.return = o), (Ji = a)) : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zi || ou(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Zi)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ya(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Ia(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ia(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            s.autoFocus && n.focus();
                            break;
                          case 'img':
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && jt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Zi || (512 & t.flags && au(t));
              } catch (p) {
                Ts(t, t.return, p);
              }
            }
            if (t === e) {
              Ji = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function _u(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (t === e) {
              Ji = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function ku(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ou(4, t);
                  } catch (u) {
                    Ts(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Ts(t, o, u);
                    }
                  }
                  var a = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Ts(t, a, u);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Ts(t, l, u);
                  }
              }
            } catch (u) {
              Ts(t, t.return, u);
            }
            if (t === e) {
              Ji = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Ji = i);
              break;
            }
            Ji = t.return;
          }
        }
        var Eu,
          Tu = Math.ceil,
          Ru = S.ReactCurrentDispatcher,
          Cu = S.ReactCurrentOwner,
          xu = S.ReactCurrentBatchConfig,
          Nu = 0,
          Lu = null,
          Au = null,
          Pu = 0,
          Mu = 0,
          Ou = To(0),
          zu = 0,
          Du = null,
          Vu = 0,
          Uu = 0,
          Iu = 0,
          Fu = null,
          Bu = null,
          ju = 0,
          Wu = 1 / 0,
          Hu = null,
          $u = !1,
          Ku = null,
          Qu = null,
          qu = !1,
          Gu = null,
          Yu = 0,
          Zu = 0,
          Xu = null,
          Ju = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & Nu) ? Ze() : -1 !== Ju ? Ju : (Ju = Ze());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Nu) && 0 !== Pu
              ? Pu & -Pu
              : null !== va.transition
                ? (0 === es && (es = mt()), es)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Zu) throw ((Zu = 0), (Xu = null), Error(a(185)));
          yt(e, n, r),
            (0 !== (2 & Nu) && e === Lu) ||
              (e === Lu && (0 === (2 & Nu) && (Uu |= n), 4 === zu && us(e, Pu)),
              os(e, r),
              1 === n && 0 === Nu && 0 === (1 & t.mode) && ((Wu = Ze() + 500), Fo && Wo()));
        }
        function os(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var l = 31 - lt(a),
                i = 1 << l,
                u = o[l];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (o[l] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (a &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Lu ? Pu : 0);
          if (0 === r) null !== n && qe(n), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fo = !0), jo(e);
                  })(ss.bind(null, e))
                : jo(ss.bind(null, e)),
                lo(function () {
                  0 === (6 & Nu) && Wo();
                }),
                (n = null);
            else {
              switch (St(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ls(n, as.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function as(e, t) {
          if (((Ju = -1), (es = 0), 0 !== (6 & Nu))) throw Error(a(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = ft(e, e === Lu ? Pu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var o = Nu;
            Nu |= 2;
            var l = ms();
            for ((Lu === e && Pu === t) || ((Hu = null), (Wu = Ze() + 500), ps(e, t)); ; )
              try {
                bs();
                break;
              } catch (u) {
                hs(e, u);
              }
            _a(),
              (Ru.current = l),
              (Nu = o),
              null !== Au ? (t = 0) : ((Lu = null), (Pu = 0), (t = zu));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (o = ht(e)) && ((r = o), (t = ls(e, o))), 1 === t))
              throw ((n = Du), ps(e, 0), us(e, r), os(e, Ze()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!ir(a(), o)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = ys(e, r)) && 0 !== (l = ht(e)) && ((r = l), (t = ls(e, l))), 1 === t))
              )
                throw ((n = Du), ps(e, 0), us(e, r), os(e, Ze()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  _s(e, Bu, Hu);
                  break;
                case 3:
                  if ((us(e, r), (130023424 & r) === r && 10 < (t = ju + 500 - Ze()))) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(_s.bind(null, e, Bu, Hu), t);
                    break;
                  }
                  _s(e, Bu, Hu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > o && (o = i), (r &= ~l);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Ze() - r)
                          ? 120
                          : 480 > r
                            ? 480
                            : 1080 > r
                              ? 1080
                              : 1920 > r
                                ? 1920
                                : 3e3 > r
                                  ? 3e3
                                  : 4320 > r
                                    ? 4320
                                    : 1960 * Tu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(_s.bind(null, e, Bu, Hu), r);
                    break;
                  }
                  _s(e, Bu, Hu);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return os(e, Ze()), e.callbackNode === n ? as.bind(null, e) : null;
        }
        function ls(e, t) {
          var n = Fu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = Bu), (Bu = n), null !== t && is(t)),
            e
          );
        }
        function is(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
        }
        function us(e, t) {
          for (
            t &= ~Iu, t &= ~Uu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & Nu)) throw Error(a(327));
          ks();
          var t = ft(e, 0);
          if (0 === (1 & t)) return os(e, Ze()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ls(e, r)));
          }
          if (1 === n) throw ((n = Du), ps(e, 0), us(e, t), os(e, Ze()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            _s(e, Bu, Hu),
            os(e, Ze()),
            null
          );
        }
        function cs(e, t) {
          var n = Nu;
          Nu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nu = n) && ((Wu = Ze() + 500), Fo && Wo());
          }
        }
        function ds(e) {
          null !== Gu && 0 === Gu.tag && 0 === (6 & Nu) && ks();
          var t = Nu;
          Nu |= 1;
          var n = xu.transition,
            r = bt;
          try {
            if (((xu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (xu.transition = n), 0 === (6 & (Nu = t)) && Wo();
          }
        }
        function fs() {
          (Mu = Ou.current), Ro(Ou);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Au))
            for (n = Au.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && Oo();
                  break;
                case 3:
                  al(), Ro(Lo), Ro(No), dl();
                  break;
                case 5:
                  il(r);
                  break;
                case 4:
                  al();
                  break;
                case 13:
                case 19:
                  Ro(ul);
                  break;
                case 10:
                  ka(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Lu = e),
            (Au = e = Os(e.current, null)),
            (Pu = Mu = t),
            (zu = 0),
            (Du = null),
            (Iu = Uu = Vu = 0),
            (Bu = Fu = null),
            null !== Ca)
          ) {
            for (t = 0; t < Ca.length; t++)
              if (null !== (r = (n = Ca[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var l = a.next;
                  (a.next = o), (r.next = l);
                }
                n.pending = r;
              }
            Ca = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Au;
            try {
              if ((_a(), (fl.current = li), gl)) {
                for (var r = ml.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                gl = !1;
              }
              if (
                ((hl = 0),
                (yl = vl = ml = null),
                (bl = !1),
                (Sl = 0),
                (Cu.current = null),
                null === n || null === n.return)
              ) {
                (zu = 1), (Du = t), (Au = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Pu),
                  (u.flags |= 32768),
                  null !== s && 'object' === typeof s && 'function' === typeof s.then)
                ) {
                  var c = s,
                    d = u,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = yi(i);
                  if (null !== h) {
                    (h.flags &= -257), gi(h, i, u, 0, t), 1 & h.mode && vi(l, c, t), (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vi(l, c, t), vs();
                    break e;
                  }
                  s = Error(a(426));
                } else if (aa && 1 & u.mode) {
                  var y = yi(i);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256), gi(y, i, u, 0, t), ma(ci(s, u));
                    break e;
                  }
                }
                (l = s = ci(s, u)),
                  4 !== zu && (zu = 2),
                  null === Fu ? (Fu = [l]) : Fu.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536), (t &= -t), (l.lanes |= t), Va(l, hi(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var g = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ('function' === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === Qu || !Qu.has(b))))
                      ) {
                        (l.flags |= 65536), (t &= -t), (l.lanes |= t), Va(l, mi(l, u, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              ws(n);
            } catch (S) {
              (t = S), Au === n && null !== n && (Au = n = n.return);
              continue;
            }
            break;
          }
        }
        function ms() {
          var e = Ru.current;
          return (Ru.current = li), null === e ? li : e;
        }
        function vs() {
          (0 !== zu && 3 !== zu && 2 !== zu) || (zu = 4),
            null === Lu || (0 === (268435455 & Vu) && 0 === (268435455 & Uu)) || us(Lu, Pu);
        }
        function ys(e, t) {
          var n = Nu;
          Nu |= 2;
          var r = ms();
          for ((Lu === e && Pu === t) || ((Hu = null), ps(e, t)); ; )
            try {
              gs();
              break;
            } catch (o) {
              hs(e, o);
            }
          if ((_a(), (Nu = n), (Ru.current = r), null !== Au)) throw Error(a(261));
          return (Lu = null), (Pu = 0), zu;
        }
        function gs() {
          for (; null !== Au; ) Ss(Au);
        }
        function bs() {
          for (; null !== Au && !Ge(); ) Ss(Au);
        }
        function Ss(e) {
          var t = Eu(e.alternate, e, Mu);
          (e.memoizedProps = e.pendingProps), null === t ? ws(e) : (Au = t), (Cu.current = null);
        }
        function ws(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Mu))) return void (Au = n);
            } else {
              if (null !== (n = Gi(n, t))) return (n.flags &= 32767), void (Au = n);
              if (null === e) return (zu = 6), void (Au = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Au = t);
            Au = t = e;
          } while (null !== t);
          0 === zu && (zu = 5);
        }
        function _s(e, t, n) {
          var r = bt,
            o = xu.transition;
          try {
            (xu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks();
                } while (null !== Gu);
                if (0 !== (6 & Nu)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - lt(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, l),
                  e === Lu && ((Au = Lu = null), (Pu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Ls(tt, function () {
                      return ks(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = xu.transition), (xu.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = Nu;
                  (Nu |= 4),
                    (Cu.current = null),
                    (function (e, t) {
                      if (((eo = Ht), pr((e = fr())))) {
                        if ('selectionStart' in e)
                          var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r =
                              (n = ((n = e.ownerDocument) && n.defaultView) || window)
                                .getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n || (0 !== o && 3 !== f.nodeType) || (u = i + o),
                                    f !== l || (0 !== r && 3 !== f.nodeType) || (s = i + r),
                                    3 === f.nodeType && (i += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === o && (u = i),
                                    p === l && ++d === r && (s = i),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n = -1 === u || -1 === s ? null : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n }, Ht = !1, Ji = t;
                        null !== Ji;

                      )
                        if (((e = (t = Ji).child), 0 !== (1028 & t.subtreeFlags) && null !== e))
                          (e.return = t), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            t = Ji;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        y = m.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type ? v : ya(t.type, v),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var S = t.stateNode.containerInfo;
                                    1 === S.nodeType
                                      ? (S.textContent = '')
                                      : 9 === S.nodeType &&
                                        S.documentElement &&
                                        S.removeChild(S.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              Ts(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ji = e);
                              break;
                            }
                            Ji = t.return;
                          }
                      (m = nu), (nu = !1);
                    })(e, n),
                    yu(n, e),
                    hr(to),
                    (Ht = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bu(n, e, o),
                    Ye(),
                    (Nu = u),
                    (bt = i),
                    (xu.transition = l);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Gu = e), (Yu = o)),
                  (l = e.pendingLanes),
                  0 === l && (Qu = null),
                  (function (e) {
                    if (at && 'function' === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags));
                      } catch (t) {}
                  })(n.stateNode),
                  os(e, Ze()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
                if ($u) throw (($u = !1), (e = Ku), (Ku = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && ks(),
                  (l = e.pendingLanes),
                  0 !== (1 & l) ? (e === Xu ? Zu++ : ((Zu = 0), (Xu = e))) : (Zu = 0),
                  Wo();
              })(e, t, n, r);
          } finally {
            (xu.transition = o), (bt = r);
          }
          return null;
        }
        function ks() {
          if (null !== Gu) {
            var e = St(Yu),
              t = xu.transition,
              n = bt;
            try {
              if (((xu.transition = null), (bt = 16 > e ? 16 : e), null === Gu)) var r = !1;
              else {
                if (((e = Gu), (Gu = null), (Yu = 0), 0 !== (6 & Nu))) throw Error(a(331));
                var o = Nu;
                for (Nu |= 4, Ji = e.current; null !== Ji; ) {
                  var l = Ji,
                    i = l.child;
                  if (0 !== (16 & Ji.flags)) {
                    var u = l.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Ji = c; null !== Ji; ) {
                          var d = Ji;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Ji = f);
                          else
                            for (; null !== Ji; ) {
                              var p = (d = Ji).sibling,
                                h = d.return;
                              if ((lu(d), d === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Ji = p);
                                break;
                              }
                              Ji = h;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var y = v.sibling;
                            (v.sibling = null), (v = y);
                          } while (null !== v);
                        }
                      }
                      Ji = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i) (i.return = l), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 !== (2048 & (l = Ji).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, l, l.return);
                        }
                      var g = l.sibling;
                      if (null !== g) {
                        (g.return = l.return), (Ji = g);
                        break e;
                      }
                      Ji = l.return;
                    }
                }
                var b = e.current;
                for (Ji = b; null !== Ji; ) {
                  var S = (i = Ji).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== S) (S.return = i), (Ji = S);
                  else
                    e: for (i = b; null !== Ji; ) {
                      if (0 !== (2048 & (u = Ji).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ou(9, u);
                          }
                        } catch (_) {
                          Ts(u, u.return, _);
                        }
                      if (u === i) {
                        Ji = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Ji = w);
                        break e;
                      }
                      Ji = u.return;
                    }
                }
                if (((Nu = o), Wo(), at && 'function' === typeof at.onPostCommitFiberRoot))
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (_) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (xu.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = za(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (yt(e, 1, t), os(e, t));
        }
        function Ts(e, t, n) {
          if (3 === e.tag) Es(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Es(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch && (null === Qu || !Qu.has(r)))
                ) {
                  (t = za(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (yt(t, 1, e), os(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Rs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Lu === e &&
              (Pu & n) === n &&
              (4 === zu || (3 === zu && (130023424 & Pu) === Pu && 500 > Ze() - ju)
                ? ps(e, 0)
                : (Iu |= n)),
            os(e, t);
        }
        function Cs(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = La(e, t)) && (yt(e, t, n), os(e, n));
        }
        function xs(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cs(e, n);
        }
        function Ns(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Cs(e, n);
        }
        function Ls(e, t) {
          return Qe(e, t);
        }
        function As(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ps(e, t, n, r) {
          return new As(e, t, n, r);
        }
        function Ms(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Os(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ps(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zs(e, t, n, r, o, l) {
          var i = 2;
          if (((r = e), 'function' === typeof e)) Ms(e) && (i = 1);
          else if ('string' === typeof e) i = 5;
          else
            e: switch (e) {
              case k:
                return Ds(n.children, o, l, t);
              case E:
                (i = 8), (o |= 8);
                break;
              case T:
                return ((e = Ps(12, n, t, 2 | o)).elementType = T), (e.lanes = l), e;
              case N:
                return ((e = Ps(13, n, t, o)).elementType = N), (e.lanes = l), e;
              case L:
                return ((e = Ps(19, n, t, o)).elementType = L), (e.lanes = l), e;
              case M:
                return Vs(n, o, l, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case R:
                      i = 10;
                      break e;
                    case C:
                      i = 9;
                      break e;
                    case x:
                      i = 11;
                      break e;
                    case A:
                      i = 14;
                      break e;
                    case P:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ''));
            }
          return ((t = Ps(i, n, t, o)).elementType = e), (t.type = r), (t.lanes = l), t;
        }
        function Ds(e, t, n, r) {
          return ((e = Ps(7, e, r, t)).lanes = n), e;
        }
        function Vs(e, t, n, r) {
          return (
            ((e = Ps(22, e, r, t)).elementType = M),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Us(e, t, n) {
          return ((e = Ps(6, e, null, t)).lanes = n), e;
        }
        function Is(e, t, n) {
          return (
            ((t = Ps(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fs(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bs(e, t, n, r, o, a, l, i, u) {
          return (
            (e = new Fs(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Ps(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Pa(a),
            e
          );
        }
        function js(e) {
          if (!e) return xo;
          e: {
            if (je((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Mo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Mo(n)) return Do(e, n, t);
          }
          return t;
        }
        function Ws(e, t, n, r, o, a, l, i, u) {
          return (
            ((e = Bs(n, r, !0, e, 0, a, 0, i, u)).context = js(null)),
            (n = e.current),
            ((a = Oa((r = ts()), (o = ns(n)))).callback = void 0 !== t && null !== t ? t : null),
            za(n, a, o),
            (e.current.lanes = o),
            yt(e, o, r),
            os(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var o = t.current,
            a = ts(),
            l = ns(o);
          return (
            (n = js(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Oa(a, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = za(o, t, l)) && (rs(e, o, l, a), Da(e, o, l)),
            l
          );
        }
        function $s(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function Ks(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qs(e, t) {
          Ks(e, t), (e = e.alternate) && Ks(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Lo.current) Si = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (Si = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Li(t), ha();
                        break;
                      case 5:
                        ll(t);
                        break;
                      case 1:
                        Mo(t.type) && Vo(t);
                        break;
                      case 4:
                        ol(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Co(ga, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Co(ul, 1 & ul.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Ui(e, t, n)
                              : (Co(ul, 1 & ul.current),
                                null !== (e = $i(e, t, n)) ? e.sibling : null);
                        Co(ul, 1 & ul.current);
                        break;
                      case 19:
                        if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
                          if (r) return Wi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                          Co(ul, ul.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ti(e, t, n);
                    }
                    return $i(e, t, n);
                  })(e, t, n)
                );
              Si = 0 !== (131072 & e.flags);
            }
          else (Si = !1), aa && 0 !== (1048576 & t.flags) && ea(t, Qo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hi(e, t), (e = t.pendingProps);
              var o = Po(t, No.current);
              Ta(t, n), (o = El(null, t, r, e, o, n));
              var l = Tl();
              return (
                (t.flags |= 1),
                'object' === typeof o &&
                null !== o &&
                'function' === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Mo(r) ? ((l = !0), Vo(t)) : (l = !1),
                    (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
                    Pa(t),
                    (o.updater = ja),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    Ka(t, r, e, n),
                    (t = Ni(null, t, r, !0, l, n)))
                  : ((t.tag = 0), aa && l && ta(t), wi(null, t, o, n), (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hi(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Ms(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === x) return 11;
                        if (e === A) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ya(r, e)),
                  o)
                ) {
                  case 0:
                    t = Ci(null, t, r, e, n);
                    break e;
                  case 1:
                    t = xi(null, t, r, e, n);
                    break e;
                  case 11:
                    t = _i(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ki(null, t, r, ya(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ci(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                xi(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 3:
              e: {
                if ((Li(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (l = t.memoizedState).element),
                  Ma(e, t),
                  Ua(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Ai(e, t, r, n, (o = ci(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Ai(e, t, r, n, (o = ci(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = so(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      la = null,
                      n = Xa(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = $i(e, t, n);
                    break e;
                  }
                  wi(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ll(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = o.children),
                no(r, o) ? (i = null) : null !== l && no(r, l) && (t.flags |= 32),
                Ri(e, t),
                wi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return Ui(e, t, n);
            case 4:
              return (
                ol(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Za(t, null, r, n)) : wi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                _i(e, t, r, (o = t.elementType === r ? o : ya(r, o)), n)
              );
            case 7:
              return wi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = o.value),
                  Co(ga, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === o.children && !Lo.current) {
                      t = $i(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                      var u = l.dependencies;
                      if (null !== u) {
                        i = l.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === l.tag) {
                              (s = Oa(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d ? (s.next = s) : ((s.next = d.next), (d.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (l.lanes |= n),
                              null !== (s = l.alternate) && (s.lanes |= n),
                              Ea(l.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === l.tag) i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(a(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Ea(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                wi(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ta(t, n),
                (r = r((o = Ra(o)))),
                (t.flags |= 1),
                wi(e, t, r, n),
                t.child
              );
            case 14:
              return (o = ya((r = t.type), t.pendingProps)), ki(e, t, r, (o = ya(r.type, o)), n);
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : ya(r, o)),
                Hi(e, t),
                (t.tag = 1),
                Mo(r) ? ((e = !0), Vo(t)) : (e = !1),
                Ta(t, n),
                Ha(t, r, o),
                Ka(t, r, o, n),
                Ni(null, t, r, !0, e, n)
              );
            case 19:
              return Wi(e, t, n);
            case 22:
              return Ti(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var qs =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gs(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Zs(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Js() {}
        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var l = a;
            if ('function' === typeof o) {
              var i = o;
              o = function () {
                var e = $s(l);
                i.call(e);
              };
            }
            Hs(t, l, e, o);
          } else
            l = (function (e, t, n, r, o) {
              if (o) {
                if ('function' === typeof r) {
                  var a = r;
                  r = function () {
                    var e = $s(l);
                    a.call(e);
                  };
                }
                var l = Ws(t, r, e, 0, null, !1, 0, '', Js);
                return (
                  (e._reactRootContainer = l),
                  (e[mo] = l.current),
                  jr(8 === e.nodeType ? e.parentNode : e),
                  ds(),
                  l
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ('function' === typeof r) {
                var i = r;
                r = function () {
                  var e = $s(u);
                  i.call(e);
                };
              }
              var u = Bs(e, 0, !1, null, 0, !1, 0, '', Js);
              return (
                (e._reactRootContainer = u),
                (e[mo] = u.current),
                jr(8 === e.nodeType ? e.parentNode : e),
                ds(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, o, r);
          return $s(l);
        }
        (Ys.prototype.render = Gs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Hs(e, t, null, null);
          }),
          (Ys.prototype.unmount = Gs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ds(function () {
                  Hs(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Mt.length && 0 !== t && t < Mt[n].priority; n++);
              Mt.splice(n, 0, e), 0 === n && Vt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n), os(t, Ze()), 0 === (6 & Nu) && ((Wu = Ze() + 500), Wo()));
                }
                break;
              case 13:
                ds(function () {
                  var t = La(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  Qs(e, 1);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = La(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              Qs(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = La(e, t);
              if (null !== n) rs(n, e, t, ts());
              Qs(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Tt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (_e = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((X(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = _o(r);
                      if (!o) throw Error(a(90));
                      Q(r), X(r, o);
                    }
                  }
                }
                break;
              case 'textarea':
                ae(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (xe = cs),
          (Ne = ds);
        var tc = { usingClientEntryPoint: !1, Events: [So, wo, _o, Re, Ce, cs] },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: S.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (at = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Zs(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: _,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Zs(e)) throw Error(a(299));
            var n = !1,
              r = '',
              o = qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Bs(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              jr(8 === e.nodeType ? e.parentNode : e),
              new Gs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(',')), Error(a(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return ds(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xs(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Zs(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              l = '',
              i = qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Ws(t, null, e, 1, null != n ? n : null, o, 0, l, i)),
              (e[mo] = t.current),
              jr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xs(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (ds(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xs(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608');
      },
      739: (e, t, n) => {
        var r = n(168);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      168: (e, t, n) => {
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(534));
      },
      918: (e, t, n) => {
        var r = n(313),
          o = Symbol.for('react.element'),
          a = Symbol.for('react.fragment'),
          l = Object.prototype.hasOwnProperty,
          i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            a = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = '' + n),
          void 0 !== t.key && (s = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return { $$typeof: o, type: e, key: s, ref: c, props: a, _owner: i.current };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      306: (e, t) => {
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          l = Symbol.for('react.profiler'),
          i = Symbol.for('react.provider'),
          u = Symbol.for('react.context'),
          s = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function y(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (g.prototype = y.prototype);
        var S = (b.prototype = new g());
        (S.constructor = b), m(S, y.prototype), (S.isPureReactComponent = !0);
        var w = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(e, t, r) {
          var o,
            a = {},
            l = null,
            i = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = '' + t.key), t))
              _.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
          var u = arguments.length - 2;
          if (1 === u) a.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps) for (o in (u = e.defaultProps)) void 0 === a[o] && (a[o] = u[o]);
          return { $$typeof: n, type: e, key: l, ref: i, props: a, _owner: k.current };
        }
        function R(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function x(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function N(e, t, o, a, l) {
          var i = typeof e;
          ('undefined' !== i && 'boolean' !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case 'string':
              case 'number':
                u = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = '' === a ? '.' + x(u, 0) : a),
              w(l)
                ? ((o = ''),
                  null != e && (o = e.replace(C, '$&/') + '/'),
                  N(l, t, o, '', function (e) {
                    return e;
                  }))
                : null != l &&
                  (R(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      o +
                        (!l.key || (u && u.key === l.key)
                          ? ''
                          : ('' + l.key).replace(C, '$&/') + '/') +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (a = '' === a ? '.' : a + ':'), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = a + x((i = e[s]), s);
              u += N(i, t, o, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                  ? e
                  : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += N((i = i.value), t, o, (c = a + x(i, s++)), l);
          else if ('object' === i)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return u;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            N(e, r, '', '', function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function A(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P = { current: null },
          M = { transition: null },
          O = { ReactCurrentDispatcher: P, ReactCurrentBatchConfig: M, ReactCurrentOwner: k };
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!R(e))
              throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              );
            var o = m({}, e.props),
              a = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = k.current)),
                void 0 !== t.key && (a = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                _.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (o[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) o.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              o.children = u;
            }
            return { $$typeof: n, type: e.type, key: a, ref: l, props: o, _owner: i };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = T),
          (t.createFactory = function (e) {
            var t = T.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = R),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: A };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error('act(...) is not supported in production builds of React.');
          }),
          (t.useCallback = function (e, t) {
            return P.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return P.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return P.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return P.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return P.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return P.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return P.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return P.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return P.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return P.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return P.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      313: (e, t, n) => {
        e.exports = n(306);
      },
      417: (e, t, n) => {
        e.exports = n(918);
      },
      95: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, l = o >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > a(u, n))
                s < o && 0 > a(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if ('object' === typeof performance && 'function' === typeof performance.now) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          y = 'function' === typeof setTimeout ? setTimeout : null,
          g = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function S(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((v = !1), S(e), !m))
            if (null !== r(s)) (m = !0), M(_);
            else {
              var t = r(c);
              null !== t && O(w, t.startTime - e);
            }
        }
        function _(e, n) {
          (m = !1), v && ((v = !1), g(R), (R = -1)), (h = !0);
          var a = p;
          try {
            for (S(n), f = r(s); null !== f && (!(f.expirationTime > n) || (e && !N())); ) {
              var l = f.callback;
              if ('function' === typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var i = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof i ? (f.callback = i) : f === r(s) && o(s),
                  S(n);
              } else o(s);
              f = r(s);
            }
            if (null !== f) var u = !0;
            else {
              var d = r(c);
              null !== d && O(w, d.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (f = null), (p = a), (h = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          T = null,
          R = -1,
          C = 5,
          x = -1;
        function N() {
          return !(t.unstable_now() - x < C);
        }
        function L() {
          if (null !== T) {
            var e = t.unstable_now();
            x = e;
            var n = !0;
            try {
              n = T(!0, e);
            } finally {
              n ? k() : ((E = !1), (T = null));
            }
          } else E = !1;
        }
        if ('function' === typeof b)
          k = function () {
            b(L);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var A = new MessageChannel(),
            P = A.port2;
          (A.port1.onmessage = L),
            (k = function () {
              P.postMessage(null);
            });
        } else
          k = function () {
            y(L, 0);
          };
        function M(e) {
          (T = e), E || ((E = !0), k());
        }
        function O(e, n) {
          R = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), M(_));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var l = t.unstable_now();
            switch (
              ('object' === typeof a && null !== a
                ? (a = 'number' === typeof (a = a.delay) && 0 < a ? l + a : l)
                : (a = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (i = a + i),
                sortIndex: -1,
              }),
              a > l
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(s) && e === r(c) && (v ? (g(R), (R = -1)) : (v = !0), O(w, a - l)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), M(_))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      224: (e, t, n) => {
        e.exports = n(95);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__;
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ('object' === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && 'function' === typeof r.then) return r;
        }
        var a = Object.create(null);
        n.r(a);
        var l = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var i = 2 & o && r; 'object' == typeof i && !~e.indexOf(i); i = t(i))
          Object.getOwnPropertyNames(i).forEach((e) => (l[e] = () => r[e]));
        return (l.default = () => r), n.d(a, l), a;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) => Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => 'static/js/' + e + '.b613a361.chunk.js'),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = 'baby-toyphone:';
      n.l = (r, o, a, l) => {
        if (e[r]) e[r].push(o);
        else {
          var i, u;
          if (void 0 !== a)
            for (var s = document.getElementsByTagName('script'), c = 0; c < s.length; c++) {
              var d = s[c];
              if (d.getAttribute('src') == r || d.getAttribute('data-webpack') == t + a) {
                i = d;
                break;
              }
            }
          i ||
            ((u = !0),
            ((i = document.createElement('script')).charset = 'utf-8'),
            (i.timeout = 120),
            n.nc && i.setAttribute('nonce', n.nc),
            i.setAttribute('data-webpack', t + a),
            (i.src = r)),
            (e[r] = [o]);
          var f = (t, n) => {
              (i.onerror = i.onload = null), clearTimeout(p);
              var o = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                o && o.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(f.bind(null, void 0, { type: 'timeout', target: i }), 12e4);
          (i.onerror = f.bind(null, i.onerror)),
            (i.onload = f.bind(null, i.onload)),
            u && document.head.appendChild(i);
        }
      };
    })(),
    (n.r = (e) => {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.p = '/baby-toyphone/'),
    (() => {
      var e = { 179: 0 };
      n.f.j = (t, r) => {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var a = new Promise((n, r) => (o = e[t] = [n, r]));
            r.push((o[2] = a));
            var l = n.p + n.u(t),
              i = new Error();
            n.l(
              l,
              (r) => {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = r && ('load' === r.type ? 'missing' : r.type),
                    l = r && r.target && r.target.src;
                  (i.message = 'Loading chunk ' + t + ' failed.\n(' + a + ': ' + l + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = a),
                    (i.request = l),
                    o[1](i);
                }
              },
              'chunk-' + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var o,
            a,
            l = r[0],
            i = r[1],
            u = r[2],
            s = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (o in i) n.o(i, o) && (n.m[o] = i[o]);
            if (u) u(n);
          }
          for (t && t(r); s < l.length; s++) (a = l[s]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkbaby_toyphone = self.webpackChunkbaby_toyphone || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      var e,
        t = n(313),
        r = n.t(t, 2),
        o = n(168),
        a = n.t(o, 2);
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
      })(e || (e = {}));
      const i = 'popstate';
      function u(e, t) {
        if (!1 === e || null === e || 'undefined' === typeof e) throw new Error(t);
      }
      function s(e, t) {
        if (!e) {
          'undefined' !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function c(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function d(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          l(
            { pathname: 'string' === typeof e ? e : e.pathname, search: '', hash: '' },
            'string' === typeof t ? p(t) : t,
            { state: n, key: (t && t.key) || r || Math.random().toString(36).substr(2, 8) }
          )
        );
      }
      function f(e) {
        let { pathname: t = '/', search: n = '', hash: r = '' } = e;
        return (
          n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
          t
        );
      }
      function p(e) {
        let t = {};
        if (e) {
          let n = e.indexOf('#');
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf('?');
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
        }
        return t;
      }
      function h(t, n, r, o) {
        void 0 === o && (o = {});
        let { window: a = document.defaultView, v5Compat: s = !1 } = o,
          p = a.history,
          h = e.Pop,
          m = null,
          v = y();
        function y() {
          return (p.state || { idx: null }).idx;
        }
        function g() {
          h = e.Pop;
          let t = y(),
            n = null == t ? null : t - v;
          (v = t), m && m({ action: h, location: S.location, delta: n });
        }
        function b(e) {
          let t = 'null' !== a.location.origin ? a.location.origin : a.location.href,
            n = 'string' === typeof e ? e : f(e);
          return (
            u(t, 'No window.location.(origin|href) available to create URL for href: ' + n),
            new URL(n, t)
          );
        }
        null == v && ((v = 0), p.replaceState(l({}, p.state, { idx: v }), ''));
        let S = {
          get action() {
            return h;
          },
          get location() {
            return t(a, p);
          },
          listen(e) {
            if (m) throw new Error('A history only accepts one active listener');
            return (
              a.addEventListener(i, g),
              (m = e),
              () => {
                a.removeEventListener(i, g), (m = null);
              }
            );
          },
          createHref: (e) => n(a, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            h = e.Push;
            let o = d(S.location, t, n);
            r && r(o, t), (v = y() + 1);
            let l = c(o, v),
              i = S.createHref(o);
            try {
              p.pushState(l, '', i);
            } catch (u) {
              if (u instanceof DOMException && 'DataCloneError' === u.name) throw u;
              a.location.assign(i);
            }
            s && m && m({ action: h, location: S.location, delta: 1 });
          },
          replace: function (t, n) {
            h = e.Replace;
            let o = d(S.location, t, n);
            r && r(o, t), (v = y());
            let a = c(o, v),
              l = S.createHref(o);
            p.replaceState(a, '', l), s && m && m({ action: h, location: S.location, delta: 0 });
          },
          go: (e) => p.go(e),
        };
        return S;
      }
      var m;
      !(function (e) {
        (e.data = 'data'),
          (e.deferred = 'deferred'),
          (e.redirect = 'redirect'),
          (e.error = 'error');
      })(m || (m = {}));
      new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
      function v(e, t, n) {
        void 0 === n && (n = '/');
        let r = L(('string' === typeof t ? p(t) : t).pathname || '/', n);
        if (null == r) return null;
        let o = y(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(o);
        let a = null;
        for (let l = 0; null == a && l < o.length; ++l) a = C(o[l], N(r));
        return a;
      }
      function y(e, t, n, r) {
        void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = '');
        let o = (e, o, a) => {
          let l = {
            relativePath: void 0 === a ? e.path || '' : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e,
          };
          l.relativePath.startsWith('/') &&
            (u(
              l.relativePath.startsWith(r),
              'Absolute route path "' +
                l.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
          let i = A([r, l.relativePath]),
            s = n.concat(l);
          e.children &&
            e.children.length > 0 &&
            (u(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                i +
                '".'
            ),
            y(e.children, t, s, i)),
            (null != e.path || e.index) && t.push({ path: i, score: R(i, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ('' !== e.path && null != (n = e.path) && n.includes('?'))
              for (let r of g(e.path)) o(e, t, r);
            else o(e, t);
          }),
          t
        );
      }
      function g(e) {
        let t = e.split('/');
        if (0 === t.length) return [];
        let [n, ...r] = t,
          o = n.endsWith('?'),
          a = n.replace(/\?$/, '');
        if (0 === r.length) return o ? [a, ''] : [a];
        let l = g(r.join('/')),
          i = [];
        return (
          i.push(...l.map((e) => ('' === e ? a : [a, e].join('/')))),
          o && i.push(...l),
          i.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
        );
      }
      const b = /^:\w+$/,
        S = 3,
        w = 2,
        _ = 1,
        k = 10,
        E = -2,
        T = (e) => '*' === e;
      function R(e, t) {
        let n = e.split('/'),
          r = n.length;
        return (
          n.some(T) && (r += E),
          t && (r += w),
          n.filter((e) => !T(e)).reduce((e, t) => e + (b.test(t) ? S : '' === t ? _ : k), r)
        );
      }
      function C(e, t) {
        let { routesMeta: n } = e,
          r = {},
          o = '/',
          a = [];
        for (let l = 0; l < n.length; ++l) {
          let e = n[l],
            i = l === n.length - 1,
            u = '/' === o ? t : t.slice(o.length) || '/',
            s = x({ path: e.relativePath, caseSensitive: e.caseSensitive, end: i }, u);
          if (!s) return null;
          Object.assign(r, s.params);
          let c = e.route;
          a.push({
            params: r,
            pathname: A([o, s.pathname]),
            pathnameBase: P(A([o, s.pathnameBase])),
            route: c,
          }),
            '/' !== s.pathnameBase && (o = A([o, s.pathnameBase]));
        }
        return a;
      }
      function x(e, t) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            s(
              '*' === e || !e.endsWith('*') || e.endsWith('/*'),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, '/*') +
                '".'
            );
            let r = [],
              o =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                  .replace(
                    /\/:(\w+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? '/?([^\\/]+)?' : '/([^\\/]+)'
                    )
                  );
            e.endsWith('*')
              ? (r.push({ paramName: '*' }),
                (o += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : n
                ? (o += '\\/*$')
                : '' !== e && '/' !== e && (o += '(?:(?=\\/|$))');
            let a = new RegExp(o, t ? void 0 : 'i');
            return [a, r];
          })(e.path, e.caseSensitive, e.end),
          o = t.match(n);
        if (!o) return null;
        let a = o[0],
          l = a.replace(/(.)\/+$/, '$1'),
          i = o.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: o } = t;
            if ('*' === r) {
              let e = i[n] || '';
              l = a.slice(0, a.length - e.length).replace(/(.)\/+$/, '$1');
            }
            const u = i[n];
            return (
              (e[r] =
                o && !u
                  ? void 0
                  : (function (e, t) {
                      try {
                        return decodeURIComponent(e);
                      } catch (n) {
                        return (
                          s(
                            !1,
                            'The value for the URL param "' +
                              t +
                              '" will not be decoded because the string "' +
                              e +
                              '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                              n +
                              ').'
                          ),
                          e
                        );
                      }
                    })(u || '', r)),
              e
            );
          }, {}),
          pathname: a,
          pathnameBase: l,
          pattern: e,
        };
      }
      function N(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            s(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').'
            ),
            e
          );
        }
      }
      function L(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && '/' !== r ? null : e.slice(n) || '/';
      }
      const A = (e) => e.join('/').replace(/\/\/+/g, '/'),
        P = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/');
      Error;
      function M(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'boolean' === typeof e.internal &&
          'data' in e
        );
      }
      const O = ['post', 'put', 'patch', 'delete'],
        z = (new Set(O), ['get', ...O]);
      new Set(z), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol('deferred');
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          D.apply(this, arguments)
        );
      }
      const V = t.createContext(null);
      const U = t.createContext(null);
      const I = t.createContext(null);
      const F = t.createContext(null);
      const B = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const j = t.createContext(null);
      function W() {
        return null != t.useContext(F);
      }
      function H() {
        return W() || u(!1), t.useContext(F).location;
      }
      function $(n, r, o) {
        W() || u(!1);
        let { navigator: a } = t.useContext(I),
          { matches: l } = t.useContext(B),
          i = l[l.length - 1],
          s = i ? i.params : {},
          c = (i && i.pathname, i ? i.pathnameBase : '/');
        i && i.route;
        let d,
          f = H();
        if (r) {
          var h;
          let e = 'string' === typeof r ? p(r) : r;
          '/' === c || (null == (h = e.pathname) ? void 0 : h.startsWith(c)) || u(!1), (d = e);
        } else d = f;
        let m = d.pathname || '/',
          y = v(n, { pathname: '/' === c ? m : m.slice(c.length) || '/' });
        let g = Y(
          y &&
            y.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: A([
                  c,
                  a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname,
                ]),
                pathnameBase:
                  '/' === e.pathnameBase
                    ? c
                    : A([
                        c,
                        a.encodeLocation
                          ? a.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          l,
          o
        );
        return r && g
          ? t.createElement(
              F.Provider,
              {
                value: {
                  location: D(
                    { pathname: '/', search: '', hash: '', state: null, key: 'default' },
                    d
                  ),
                  navigationType: e.Pop,
                },
              },
              g
            )
          : g;
      }
      function K() {
        let e = (function () {
            var e;
            let n = t.useContext(j),
              r = X(Z.UseRouteError),
              o = J(Z.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[o];
          })(),
          n = M(e)
            ? e.status + ' ' + e.statusText
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          o = 'rgba(200,200,200, 0.5)',
          a = { padding: '0.5rem', backgroundColor: o };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement('h2', null, 'Unexpected Application Error!'),
          t.createElement('h3', { style: { fontStyle: 'italic' } }, n),
          r ? t.createElement('pre', { style: a }, r) : null,
          null
        );
      }
      const Q = t.createElement(K, null);
      class q extends t.Component {
        constructor(e) {
          super(e),
            (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ('idle' !== t.revalidation && 'idle' === e.revalidation)
            ? { error: e.error, location: e.location, revalidation: e.revalidation }
            : {
                error: e.error || t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error('React Router caught the following error during render', e, t);
        }
        render() {
          return this.state.error
            ? t.createElement(
                B.Provider,
                { value: this.props.routeContext },
                t.createElement(j.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function G(e) {
        let { routeContext: n, match: r, children: o } = e,
          a = t.useContext(V);
        return (
          a &&
            a.static &&
            a.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(B.Provider, { value: n }, o)
        );
      }
      function Y(e, n, r) {
        var o;
        if ((void 0 === n && (n = []), void 0 === r && (r = null), null == e)) {
          var a;
          if (null == (a = r) || !a.errors) return null;
          e = r.matches;
        }
        let l = e,
          i = null == (o = r) ? void 0 : o.errors;
        if (null != i) {
          let e = l.findIndex((e) => e.route.id && (null == i ? void 0 : i[e.route.id]));
          e >= 0 || u(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        return l.reduceRight((e, o, a) => {
          let u = o.route.id ? (null == i ? void 0 : i[o.route.id]) : null,
            s = null;
          r && (s = o.route.errorElement || Q);
          let c = n.concat(l.slice(0, a + 1)),
            d = () => {
              let n;
              return (
                (n = u
                  ? s
                  : o.route.Component
                    ? t.createElement(o.route.Component, null)
                    : o.route.element
                      ? o.route.element
                      : e),
                t.createElement(G, {
                  match: o,
                  routeContext: { outlet: e, matches: c, isDataRoute: null != r },
                  children: n,
                })
              );
            };
          return r && (o.route.ErrorBoundary || o.route.errorElement || 0 === a)
            ? t.createElement(q, {
                location: r.location,
                revalidation: r.revalidation,
                component: s,
                error: u,
                children: d(),
                routeContext: { outlet: null, matches: c, isDataRoute: !0 },
              })
            : d();
        }, null);
      }
      var Z = (function (e) {
        return (
          (e.UseBlocker = 'useBlocker'),
          (e.UseLoaderData = 'useLoaderData'),
          (e.UseActionData = 'useActionData'),
          (e.UseRouteError = 'useRouteError'),
          (e.UseNavigation = 'useNavigation'),
          (e.UseRouteLoaderData = 'useRouteLoaderData'),
          (e.UseMatches = 'useMatches'),
          (e.UseRevalidator = 'useRevalidator'),
          (e.UseNavigateStable = 'useNavigate'),
          (e.UseRouteId = 'useRouteId'),
          e
        );
      })(Z || {});
      function X(e) {
        let n = t.useContext(U);
        return n || u(!1), n;
      }
      function J(e) {
        let n = (function (e) {
            let n = t.useContext(B);
            return n || u(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || u(!1), r.route.id;
      }
      r.startTransition;
      function ee(e) {
        u(!1);
      }
      function te(n) {
        let {
          basename: r = '/',
          children: o = null,
          location: a,
          navigationType: l = e.Pop,
          navigator: i,
          static: s = !1,
        } = n;
        W() && u(!1);
        let c = r.replace(/^\/*/, '/'),
          d = t.useMemo(() => ({ basename: c, navigator: i, static: s }), [c, i, s]);
        'string' === typeof a && (a = p(a));
        let {
            pathname: f = '/',
            search: h = '',
            hash: m = '',
            state: v = null,
            key: y = 'default',
          } = a,
          g = t.useMemo(() => {
            let e = L(f, c);
            return null == e
              ? null
              : {
                  location: { pathname: e, search: h, hash: m, state: v, key: y },
                  navigationType: l,
                };
          }, [c, f, h, m, v, y, l]);
        return null == g
          ? null
          : t.createElement(
              I.Provider,
              { value: d },
              t.createElement(F.Provider, { children: o, value: g })
            );
      }
      function ne(e) {
        let { children: t, location: n } = e;
        return $(re(t), n);
      }
      new Promise(() => {});
      t.Component;
      function re(e, n) {
        void 0 === n && (n = []);
        let r = [];
        return (
          t.Children.forEach(e, (e, o) => {
            if (!t.isValidElement(e)) return;
            let a = [...n, o];
            if (e.type === t.Fragment) return void r.push.apply(r, re(e.props.children, a));
            e.type !== ee && u(!1), e.props.index && e.props.children && u(!1);
            let l = {
              id: e.props.id || a.join('-'),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (l.children = re(e.props.children, a)), r.push(l);
          }),
          r
        );
      }
      new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
      new Map();
      const oe = r.startTransition;
      a.flushSync;
      function ae(e) {
        let { basename: n, children: r, future: o, window: a } = e,
          l = t.useRef();
        var i;
        null == l.current &&
          (l.current =
            (void 0 === (i = { window: a, v5Compat: !0 }) && (i = {}),
            h(
              function (e, t) {
                let { pathname: n, search: r, hash: o } = e.location;
                return d(
                  '',
                  { pathname: n, search: r, hash: o },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || 'default'
                );
              },
              function (e, t) {
                return 'string' === typeof t ? t : f(t);
              },
              null,
              i
            )));
        let u = l.current,
          [s, c] = t.useState({ action: u.action, location: u.location }),
          { v7_startTransition: p } = o || {},
          m = t.useCallback(
            (e) => {
              p && oe ? oe(() => c(e)) : c(e);
            },
            [c, p]
          );
        return (
          t.useLayoutEffect(() => u.listen(m), [u, m]),
          t.createElement(te, {
            basename: n,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: u,
          })
        );
      }
      'undefined' !== typeof window &&
        'undefined' !== typeof window.document &&
        window.document.createElement;
      var le, ie;
      (function (e) {
        (e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmit = 'useSubmit'),
          (e.UseSubmitFetcher = 'useSubmitFetcher'),
          (e.UseFetcher = 'useFetcher'),
          (e.useViewTransitionState = 'useViewTransitionState');
      })(le || (le = {})),
        (function (e) {
          (e.UseFetcher = 'useFetcher'),
            (e.UseFetchers = 'useFetchers'),
            (e.UseScrollRestoration = 'useScrollRestoration');
        })(ie || (ie = {}));
      var ue = n(739);
      var se = function (e) {
        const t = new Error(e);
        if (void 0 === t.stack)
          try {
            throw t;
          } catch (n) {}
        return t;
      };
      var ce = function (e) {
        return !!e && 'function' === typeof e.then;
      };
      var de = function (e, t) {
        if (null != e) return e;
        throw se(null !== t && void 0 !== t ? t : 'Got unexpected null or undefined');
      };
      function fe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class pe {
        getValue() {
          throw se('BaseLoadable');
        }
        toPromise() {
          throw se('BaseLoadable');
        }
        valueMaybe() {
          throw se('BaseLoadable');
        }
        valueOrThrow() {
          throw se('Loadable expected value, but in "'.concat(this.state, '" state'));
        }
        promiseMaybe() {
          throw se('BaseLoadable');
        }
        promiseOrThrow() {
          throw se('Loadable expected promise, but in "'.concat(this.state, '" state'));
        }
        errorMaybe() {
          throw se('BaseLoadable');
        }
        errorOrThrow() {
          throw se('Loadable expected error, but in "'.concat(this.state, '" state'));
        }
        is(e) {
          return e.state === this.state && e.contents === this.contents;
        }
        map(e) {
          throw se('BaseLoadable');
        }
      }
      class he extends pe {
        constructor(e) {
          super(), fe(this, 'state', 'hasValue'), fe(this, 'contents', void 0), (this.contents = e);
        }
        getValue() {
          return this.contents;
        }
        toPromise() {
          return Promise.resolve(this.contents);
        }
        valueMaybe() {
          return this.contents;
        }
        valueOrThrow() {
          return this.contents;
        }
        promiseMaybe() {}
        errorMaybe() {}
        map(e) {
          try {
            const t = e(this.contents);
            return ce(t) ? be(t) : _e(t) ? t : ye(t);
          } catch (t) {
            return ce(t) ? be(t.next(() => this.map(e))) : ge(t);
          }
        }
      }
      class me extends pe {
        constructor(e) {
          super(), fe(this, 'state', 'hasError'), fe(this, 'contents', void 0), (this.contents = e);
        }
        getValue() {
          throw this.contents;
        }
        toPromise() {
          return Promise.reject(this.contents);
        }
        valueMaybe() {}
        promiseMaybe() {}
        errorMaybe() {
          return this.contents;
        }
        errorOrThrow() {
          return this.contents;
        }
        map(e) {
          return this;
        }
      }
      class ve extends pe {
        constructor(e) {
          super(), fe(this, 'state', 'loading'), fe(this, 'contents', void 0), (this.contents = e);
        }
        getValue() {
          throw this.contents;
        }
        toPromise() {
          return this.contents;
        }
        valueMaybe() {}
        promiseMaybe() {
          return this.contents;
        }
        promiseOrThrow() {
          return this.contents;
        }
        errorMaybe() {}
        map(e) {
          return be(
            this.contents
              .then((t) => {
                const n = e(t);
                if (_e(n)) {
                  const e = n;
                  switch (e.state) {
                    case 'hasValue':
                    case 'loading':
                      return e.contents;
                    case 'hasError':
                      throw e.contents;
                  }
                }
                return n;
              })
              .catch((t) => {
                if (ce(t)) return t.then(() => this.map(e).contents);
                throw t;
              })
          );
        }
      }
      function ye(e) {
        return Object.freeze(new he(e));
      }
      function ge(e) {
        return Object.freeze(new me(e));
      }
      function be(e) {
        return Object.freeze(new ve(e));
      }
      function Se() {
        return Object.freeze(new ve(new Promise(() => {})));
      }
      function we(e) {
        const t = (function (e) {
          return e.every((e) => 'hasValue' === e.state)
            ? ye(e.map((e) => e.contents))
            : e.some((e) => 'hasError' === e.state)
              ? ge(
                  de(
                    e.find((e) => 'hasError' === e.state),
                    'Invalid loadable passed to loadableAll'
                  ).contents
                )
              : be(Promise.all(e.map((e) => e.contents)));
        })(
          (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t])).map((e) =>
            _e(e) ? e : ce(e) ? be(e) : ye(e)
          )
        );
        return Array.isArray(e)
          ? t
          : t.map((t) =>
              Object.getOwnPropertyNames(e).reduce((e, n, r) => ({ ...e, [n]: t[r] }), {})
            );
      }
      function _e(e) {
        return e instanceof pe;
      }
      const ke = {
        of: (e) => (ce(e) ? be(e) : _e(e) ? e : ye(e)),
        error: (e) => ge(e),
        loading: () => Se(),
        all: we,
        isLoadable: _e,
      };
      var Ee = {
          loadableWithValue: ye,
          loadableWithError: ge,
          loadableWithPromise: be,
          loadableLoading: Se,
          loadableAll: we,
          isLoadable: _e,
          RecoilLoadable: ke,
        },
        Te = Ee.loadableWithValue,
        Re = Ee.loadableWithError,
        Ce = Ee.loadableWithPromise,
        xe = Ee.loadableLoading,
        Ne = Ee.loadableAll,
        Le = Ee.isLoadable,
        Ae = Ee.RecoilLoadable,
        Pe = Object.freeze({
          __proto__: null,
          loadableWithValue: Te,
          loadableWithError: Re,
          loadableWithPromise: Ce,
          loadableLoading: xe,
          loadableAll: Ne,
          isLoadable: Le,
          RecoilLoadable: Ae,
        });
      const Me = {
        RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
        RECOIL_GKS_ENABLED: new Set([
          'recoil_hamt_2020',
          'recoil_sync_external_store',
          'recoil_suppress_rerender_in_callback',
          'recoil_memory_managament_2020',
        ]),
      };
      !(function () {
        var e;
        'undefined' !== typeof process &&
          null !=
            (null === (e = process) || void 0 === e
              ? void 0
              : {
                  NODE_ENV: 'production',
                  PUBLIC_URL: '/baby-toyphone',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }) &&
          ((function (e, t) {
            var n, r;
            const o =
              null ===
                (n = {
                  NODE_ENV: 'production',
                  PUBLIC_URL: '/baby-toyphone',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }[e]) ||
              void 0 === n ||
              null === (r = n.toLowerCase()) ||
              void 0 === r
                ? void 0
                : r.trim();
            if (null == o || '' === o) return;
            if (!['true', 'false'].includes(o))
              throw se(
                'process.env.'.concat(e, " value must be 'true', 'false', or empty: ").concat(o)
              );
            t('true' === o);
          })('RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED', (e) => {
            Me.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e;
          }),
          (function (e, t) {
            var n;
            const r =
              null ===
                (n = {
                  NODE_ENV: 'production',
                  PUBLIC_URL: '/baby-toyphone',
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }[e]) || void 0 === n
                ? void 0
                : n.trim();
            null != r && '' !== r && t(r.split(/\s*,\s*|\s+/));
          })('RECOIL_GKS_ENABLED', (e) => {
            e.forEach((e) => {
              Me.RECOIL_GKS_ENABLED.add(e);
            });
          }));
      })();
      var Oe = Me;
      function ze(e) {
        return Oe.RECOIL_GKS_ENABLED.has(e);
      }
      (ze.setPass = (e) => {
        Oe.RECOIL_GKS_ENABLED.add(e);
      }),
        (ze.setFail = (e) => {
          Oe.RECOIL_GKS_ENABLED.delete(e);
        }),
        (ze.clear = () => {
          Oe.RECOIL_GKS_ENABLED.clear();
        });
      var De = ze;
      var Ve,
        Ue,
        Ie,
        Fe = function (e, t) {
          let { error: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return null;
        };
      const Be =
          null !== (Ve = t.createMutableSource) && void 0 !== Ve
            ? Ve
            : t.unstable_createMutableSource,
        je = null !== (Ue = t.useMutableSource) && void 0 !== Ue ? Ue : t.unstable_useMutableSource,
        We =
          null !== (Ie = t.useSyncExternalStore) && void 0 !== Ie
            ? Ie
            : t.unstable_useSyncExternalStore;
      let He = !1;
      var $e = {
        createMutableSource: Be,
        useMutableSource: je,
        useSyncExternalStore: We,
        currentRendererSupportsUseSyncExternalStore: function () {
          var e;
          const { ReactCurrentDispatcher: n, ReactCurrentOwner: r } =
              t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            o =
              null !=
              (null !== (e = null === n || void 0 === n ? void 0 : n.current) && void 0 !== e
                ? e
                : r.currentDispatcher
              ).useSyncExternalStore;
          return (
            !We ||
              o ||
              He ||
              ((He = !0),
              Fe('A React renderer without React 18+ API support is being used with React 18+.')),
            o
          );
        },
        reactMode: function () {
          return De('recoil_transition_support')
            ? { mode: 'TRANSITION_SUPPORT', early: !0, concurrent: !0 }
            : De('recoil_sync_external_store') && null != We
              ? { mode: 'SYNC_EXTERNAL_STORE', early: !0, concurrent: !1 }
              : De('recoil_mutable_source') &&
                  null != je &&
                  'undefined' !== typeof window &&
                  !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
                ? De('recoil_suppress_rerender_in_callback')
                  ? { mode: 'MUTABLE_SOURCE', early: !0, concurrent: !0 }
                  : { mode: 'MUTABLE_SOURCE', early: !1, concurrent: !1 }
                : De('recoil_suppress_rerender_in_callback')
                  ? { mode: 'LEGACY', early: !0, concurrent: !1 }
                  : { mode: 'LEGACY', early: !1, concurrent: !1 };
        },
        isFastRefreshEnabled: function () {
          return !1;
        },
      };
      class Ke {
        constructor(e) {
          fe(this, 'key', void 0), (this.key = e);
        }
        toJSON() {
          return { key: this.key };
        }
      }
      class Qe extends Ke {}
      class qe extends Ke {}
      var Ge = {
          AbstractRecoilValue: Ke,
          RecoilState: Qe,
          RecoilValueReadOnly: qe,
          isRecoilValue: function (e) {
            return e instanceof Qe || e instanceof qe;
          },
        },
        Ye = Ge.AbstractRecoilValue,
        Ze = Ge.RecoilState,
        Xe = Ge.RecoilValueReadOnly,
        Je = Ge.isRecoilValue,
        et = Object.freeze({
          __proto__: null,
          AbstractRecoilValue: Ye,
          RecoilState: Ze,
          RecoilValueReadOnly: Xe,
          isRecoilValue: Je,
        });
      var tt = function (e) {};
      var nt = function (e, t) {
        return (function* () {
          let n = 0;
          for (const r of e) yield t(r, n++);
        })();
      };
      const { isFastRefreshEnabled: rt } = $e;
      class ot {}
      const at = new ot(),
        lt = new Map(),
        it = new Map();
      class ut extends Error {}
      const st = new Map();
      function ct(e) {
        return st.get(e);
      }
      var dt = {
        nodes: lt,
        recoilValues: it,
        registerNode: function (e) {
          Oe.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED &&
            (function (e) {
              if (lt.has(e)) {
                const t = 'Duplicate atom key "'.concat(
                  e,
                  '". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.'
                );
                console.warn(t);
              }
            })(e.key),
            lt.set(e.key, e);
          const t = null == e.set ? new et.RecoilValueReadOnly(e.key) : new et.RecoilState(e.key);
          return it.set(e.key, t), t;
        },
        getNode: function (e) {
          const t = lt.get(e);
          if (null == t) throw new ut('Missing definition for RecoilValue: "'.concat(e, '""'));
          return t;
        },
        getNodeMaybe: function (e) {
          return lt.get(e);
        },
        deleteNodeConfigIfPossible: function (e) {
          var t;
          if (!De('recoil_memory_managament_2020')) return;
          const n = lt.get(e);
          var r;
          null !== n &&
            void 0 !== n &&
            null !== (t = n.shouldDeleteConfigOnRelease) &&
            void 0 !== t &&
            t.call(n) &&
            (lt.delete(e), null === (r = ct(e)) || void 0 === r || r(), st.delete(e));
        },
        setConfigDeletionHandler: function (e, t) {
          De('recoil_memory_managament_2020') && (void 0 === t ? st.delete(e) : st.set(e, t));
        },
        getConfigDeletionHandler: ct,
        recoilValuesForKeys: function (e) {
          return nt(e, (e) => de(it.get(e)));
        },
        NodeMissingError: ut,
        DefaultValue: ot,
        DEFAULT_VALUE: at,
      };
      var ft = {
        enqueueExecution: function (e, t) {
          t();
        },
      };
      var pt,
        ht,
        mt =
          ((pt = function (e) {
            var t =
                'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        'function' === typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    },
              n = {},
              r = Math.pow(2, 5),
              o = r - 1,
              a = r / 2,
              l = r / 4,
              i = {},
              u = function (e) {
                return function () {
                  return e;
                };
              },
              s = (n.hash = function (e) {
                var n = 'undefined' === typeof e ? 'undefined' : t(e);
                if ('number' === n) return e;
                'string' !== n && (e += '');
                for (var r = 0, o = 0, a = e.length; o < a; ++o)
                  r = ((r << 5) - r + e.charCodeAt(o)) | 0;
                return r;
              }),
              c = function (e, t) {
                return (t >>> e) & o;
              },
              d = function (e) {
                return 1 << e;
              },
              f = function (e, t) {
                return (
                  (n = e & (t - 1)),
                  (n =
                    ((n = (858993459 & (n -= (n >> 1) & 1431655765)) + ((n >> 2) & 858993459)) +
                      (n >> 4)) &
                    252645135),
                  127 & ((n += n >> 8) + (n >> 16))
                );
                var n;
              },
              p = function (e, t, n, r) {
                var o = r;
                if (!e) {
                  var a = r.length;
                  o = new Array(a);
                  for (var l = 0; l < a; ++l) o[l] = r[l];
                }
                return (o[t] = n), o;
              },
              h = function (e, t, n) {
                var r = n.length - 1,
                  o = 0,
                  a = 0,
                  l = n;
                if (e) o = a = t;
                else for (l = new Array(r); o < t; ) l[a++] = n[o++];
                for (++o; o <= r; ) l[a++] = n[o++];
                return e && (l.length = r), l;
              },
              m = { __hamt_isEmpty: !0 },
              v = function (e) {
                return e === m || (e && e.__hamt_isEmpty);
              },
              y = function (e, t, n, r) {
                return { type: 1, edit: e, hash: t, key: n, value: r, _modify: k };
              },
              g = function (e, t, n) {
                return { type: 2, edit: e, hash: t, children: n, _modify: E };
              },
              b = function (e, t, n) {
                return { type: 3, edit: e, mask: t, children: n, _modify: T };
              },
              S = function (e, t, n) {
                return { type: 4, edit: e, size: t, children: n, _modify: R };
              },
              w = function e(t, n, r, o, a, l) {
                if (r === a) return g(t, r, [l, o]);
                var i = c(n, r),
                  u = c(n, a);
                return b(
                  t,
                  d(i) | d(u),
                  i === u ? [e(t, n + 5, r, o, a, l)] : i < u ? [o, l] : [l, o]
                );
              },
              _ = function (e, t) {
                return e === t.edit;
              },
              k = function (e, t, n, r, o, a, l) {
                if (t(a, this.key)) {
                  var u = r(this.value);
                  return u === this.value
                    ? this
                    : u === i
                      ? (--l.value, m)
                      : _(e, this)
                        ? ((this.value = u), this)
                        : y(e, o, a, u);
                }
                var s = r();
                return s === i ? this : (++l.value, w(e, n, this.hash, this, o, y(e, o, a, s)));
              },
              E = function (e, t, n, r, o, a, l) {
                if (o === this.hash) {
                  var u = (function (e, t, n, r, o, a, l, u) {
                    for (var s = o.length, c = 0; c < s; ++c) {
                      var d = o[c];
                      if (n(l, d.key)) {
                        var f = d.value,
                          m = a(f);
                        return m === f
                          ? o
                          : m === i
                            ? (--u.value, h(e, c, o))
                            : p(e, c, y(t, r, l, m), o);
                      }
                    }
                    var v = a();
                    return v === i ? o : (++u.value, p(e, s, y(t, r, l, v), o));
                  })(_(e, this), e, t, this.hash, this.children, r, a, l);
                  return u === this.children ? this : u.length > 1 ? g(e, this.hash, u) : u[0];
                }
                var s = r();
                return s === i ? this : (++l.value, w(e, n, this.hash, this, o, y(e, o, a, s)));
              },
              T = function (e, t, n, r, o, l, i) {
                var u = this.mask,
                  s = this.children,
                  y = c(n, o),
                  g = d(y),
                  w = f(u, g),
                  k = u & g,
                  E = k ? s[w] : m,
                  T = E._modify(e, t, n + 5, r, o, l, i);
                if (E === T) return this;
                var R,
                  C = _(e, this),
                  x = u,
                  N = void 0;
                if (k && v(T)) {
                  if (!(x &= ~g)) return m;
                  if (s.length <= 2 && ((R = s[1 ^ w]) === m || 1 === R.type || 2 === R.type))
                    return s[1 ^ w];
                  N = h(C, w, s);
                } else if (k || v(T)) N = p(C, w, T, s);
                else {
                  if (s.length >= a)
                    return (function (e, t, n, r, o) {
                      for (var a = [], l = r, i = 0, u = 0; l; ++u)
                        1 & l && (a[u] = o[i++]), (l >>>= 1);
                      return (a[t] = n), S(e, i + 1, a);
                    })(e, y, T, u, s);
                  (x |= g),
                    (N = (function (e, t, n, r) {
                      var o = r.length;
                      if (e) {
                        for (var a = o; a >= t; ) r[a--] = r[a];
                        return (r[t] = n), r;
                      }
                      for (var l = 0, i = 0, u = new Array(o + 1); l < t; ) u[i++] = r[l++];
                      for (u[t] = n; l < o; ) u[++i] = r[l++];
                      return u;
                    })(C, w, T, s));
                }
                return C ? ((this.mask = x), (this.children = N), this) : b(e, x, N);
              },
              R = function (e, t, n, r, o, a, i) {
                var u = this.size,
                  s = this.children,
                  d = c(n, o),
                  f = s[d],
                  h = (f || m)._modify(e, t, n + 5, r, o, a, i);
                if (f === h) return this;
                var y = _(e, this),
                  g = void 0;
                if (v(f) && !v(h)) ++u, (g = p(y, d, h, s));
                else if (!v(f) && v(h)) {
                  if (--u <= l)
                    return (function (e, t, n, r) {
                      for (var o = new Array(t - 1), a = 0, l = 0, i = 0, u = r.length; i < u; ++i)
                        if (i !== n) {
                          var s = r[i];
                          s && !v(s) && ((o[a++] = s), (l |= 1 << i));
                        }
                      return b(e, l, o);
                    })(e, u, d, s);
                  g = p(y, d, m, s);
                } else g = p(y, d, h, s);
                return y ? ((this.size = u), (this.children = g), this) : S(e, u, g);
              };
            function C(e, t, n, r, o) {
              (this._editable = e),
                (this._edit = t),
                (this._config = n),
                (this._root = r),
                (this._size = o);
            }
            (m._modify = function (e, t, n, r, o, a, l) {
              var u = r();
              return u === i ? m : (++l.value, y(e, o, a, u));
            }),
              (C.prototype.setTree = function (e, t) {
                return this._editable
                  ? ((this._root = e), (this._size = t), this)
                  : e === this._root
                    ? this
                    : new C(this._editable, this._edit, this._config, e, t);
              });
            var x = (n.tryGetHash = function (e, t, n, r) {
              for (var o = r._root, a = 0, l = r._config.keyEq; ; )
                switch (o.type) {
                  case 1:
                    return l(n, o.key) ? o.value : e;
                  case 2:
                    if (t === o.hash)
                      for (var i = o.children, u = 0, s = i.length; u < s; ++u) {
                        var p = i[u];
                        if (l(n, p.key)) return p.value;
                      }
                    return e;
                  case 3:
                    var h = c(a, t),
                      m = d(h);
                    if (o.mask & m) {
                      (o = o.children[f(o.mask, m)]), (a += 5);
                      break;
                    }
                    return e;
                  case 4:
                    if ((o = o.children[c(a, t)])) {
                      a += 5;
                      break;
                    }
                    return e;
                  default:
                    return e;
                }
            });
            C.prototype.tryGetHash = function (e, t, n) {
              return x(e, t, n, this);
            };
            var N = (n.tryGet = function (e, t, n) {
              return x(e, n._config.hash(t), t, n);
            });
            C.prototype.tryGet = function (e, t) {
              return N(e, t, this);
            };
            var L = (n.getHash = function (e, t, n) {
              return x(void 0, e, t, n);
            });
            (C.prototype.getHash = function (e, t) {
              return L(e, t, this);
            }),
              (n.get = function (e, t) {
                return x(void 0, t._config.hash(e), e, t);
              }),
              (C.prototype.get = function (e, t) {
                return N(t, e, this);
              });
            var A = (n.has = function (e, t, n) {
              return x(i, e, t, n) !== i;
            });
            C.prototype.hasHash = function (e, t) {
              return A(e, t, this);
            };
            var P = (n.has = function (e, t) {
              return A(t._config.hash(e), e, t);
            });
            C.prototype.has = function (e) {
              return P(e, this);
            };
            var M = function (e, t) {
              return e === t;
            };
            (n.make = function (e) {
              return new C(0, 0, { keyEq: (e && e.keyEq) || M, hash: (e && e.hash) || s }, m, 0);
            }),
              (n.empty = n.make());
            var O = (n.isEmpty = function (e) {
              return e && !!v(e._root);
            });
            C.prototype.isEmpty = function () {
              return O(this);
            };
            var z = (n.modifyHash = function (e, t, n, r) {
              var o = { value: r._size },
                a = r._root._modify(r._editable ? r._edit : NaN, r._config.keyEq, 0, e, t, n, o);
              return r.setTree(a, o.value);
            });
            C.prototype.modifyHash = function (e, t, n) {
              return z(n, e, t, this);
            };
            var D = (n.modify = function (e, t, n) {
              return z(e, n._config.hash(t), t, n);
            });
            C.prototype.modify = function (e, t) {
              return D(t, e, this);
            };
            var V = (n.setHash = function (e, t, n, r) {
              return z(u(n), e, t, r);
            });
            C.prototype.setHash = function (e, t, n) {
              return V(e, t, n, this);
            };
            var U = (n.set = function (e, t, n) {
              return V(n._config.hash(e), e, t, n);
            });
            C.prototype.set = function (e, t) {
              return U(e, t, this);
            };
            var I = u(i),
              F = (n.removeHash = function (e, t, n) {
                return z(I, e, t, n);
              });
            C.prototype.removeHash = C.prototype.deleteHash = function (e, t) {
              return F(e, t, this);
            };
            var B = (n.remove = function (e, t) {
              return F(t._config.hash(e), e, t);
            });
            C.prototype.remove = C.prototype.delete = function (e) {
              return B(e, this);
            };
            var j = (n.beginMutation = function (e) {
              return new C(e._editable + 1, e._edit + 1, e._config, e._root, e._size);
            });
            C.prototype.beginMutation = function () {
              return j(this);
            };
            var W = (n.endMutation = function (e) {
              return (e._editable = e._editable && e._editable - 1), e;
            });
            C.prototype.endMutation = function () {
              return W(this);
            };
            var H = (n.mutate = function (e, t) {
              var n = j(t);
              return e(n), W(n);
            });
            C.prototype.mutate = function (e) {
              return H(e, this);
            };
            var $ = function (e) {
                return e && K(e[0], e[1], e[2], e[3], e[4]);
              },
              K = function (e, t, n, r, o) {
                for (; n < e; ) {
                  var a = t[n++];
                  if (a && !v(a)) return Q(a, r, [e, t, n, r, o]);
                }
                return $(o);
              },
              Q = function (e, t, n) {
                switch (e.type) {
                  case 1:
                    return { value: t(e), rest: n };
                  case 2:
                  case 4:
                  case 3:
                    var r = e.children;
                    return K(r.length, r, 0, t, n);
                  default:
                    return $(n);
                }
              },
              q = { done: !0 };
            function G(e) {
              this.v = e;
            }
            (G.prototype.next = function () {
              if (!this.v) return q;
              var e = this.v;
              return (this.v = $(e.rest)), e;
            }),
              (G.prototype[Symbol.iterator] = function () {
                return this;
              });
            var Y = function (e, t) {
                return new G(Q(e._root, t));
              },
              Z = function (e) {
                return [e.key, e.value];
              },
              X = (n.entries = function (e) {
                return Y(e, Z);
              });
            C.prototype.entries = C.prototype[Symbol.iterator] = function () {
              return X(this);
            };
            var J = function (e) {
                return e.key;
              },
              ee = (n.keys = function (e) {
                return Y(e, J);
              });
            C.prototype.keys = function () {
              return ee(this);
            };
            var te = function (e) {
                return e.value;
              },
              ne =
                (n.values =
                C.prototype.values =
                  function (e) {
                    return Y(e, te);
                  });
            C.prototype.values = function () {
              return ne(this);
            };
            var re = (n.fold = function (e, t, n) {
              var r = n._root;
              if (1 === r.type) return e(t, r.value, r.key);
              for (var o = [r.children], a = void 0; (a = o.pop()); )
                for (var l = 0, i = a.length; l < i; ) {
                  var u = a[l++];
                  u && u.type && (1 === u.type ? (t = e(t, u.value, u.key)) : o.push(u.children));
                }
              return t;
            });
            C.prototype.fold = function (e, t) {
              return re(e, t, this);
            };
            var oe = (n.forEach = function (e, t) {
              return re(
                function (n, r, o) {
                  return e(r, o, t);
                },
                null,
                t
              );
            });
            C.prototype.forEach = function (e) {
              return oe(e, this);
            };
            var ae = (n.count = function (e) {
              return e._size;
            });
            (C.prototype.count = function () {
              return ae(this);
            }),
              Object.defineProperty(C.prototype, 'size', { get: C.prototype.count }),
              e.exports ? (e.exports = n) : ((void 0).hamt = n);
          }),
          pt((ht = { exports: {} }), ht.exports),
          ht.exports);
      class vt {
        constructor(e) {
          fe(this, '_map', void 0),
            (this._map = new Map(null === e || void 0 === e ? void 0 : e.entries()));
        }
        keys() {
          return this._map.keys();
        }
        entries() {
          return this._map.entries();
        }
        get(e) {
          return this._map.get(e);
        }
        has(e) {
          return this._map.has(e);
        }
        set(e, t) {
          return this._map.set(e, t), this;
        }
        delete(e) {
          return this._map.delete(e), this;
        }
        clone() {
          return gt(this);
        }
        toMap() {
          return new Map(this._map);
        }
      }
      class yt {
        constructor(e) {
          if ((fe(this, '_hamt', mt.empty.beginMutation()), e instanceof yt)) {
            const t = e._hamt.endMutation();
            (e._hamt = t.beginMutation()), (this._hamt = t.beginMutation());
          } else if (e) for (const [t, n] of e.entries()) this._hamt.set(t, n);
        }
        keys() {
          return this._hamt.keys();
        }
        entries() {
          return this._hamt.entries();
        }
        get(e) {
          return this._hamt.get(e);
        }
        has(e) {
          return this._hamt.has(e);
        }
        set(e, t) {
          return this._hamt.set(e, t), this;
        }
        delete(e) {
          return this._hamt.delete(e), this;
        }
        clone() {
          return gt(this);
        }
        toMap() {
          return new Map(this._hamt);
        }
      }
      function gt(e) {
        return De('recoil_hamt_2020') ? new yt(e) : new vt(e);
      }
      var bt = gt,
        St = Object.freeze({ __proto__: null, persistentMap: bt });
      var wt = function (e) {
        const t = new Set();
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
          r[o - 1] = arguments[o];
        e: for (const a of e) {
          for (const e of r) if (e.has(a)) continue e;
          t.add(a);
        }
        return t;
      };
      var _t = function (e, t) {
        const n = new Map();
        return (
          e.forEach((e, r) => {
            n.set(r, t(e, r));
          }),
          n
        );
      };
      function kt(e, t, n, r) {
        const { nodeDeps: o, nodeToNodeSubscriptions: a } = n,
          l = o.get(e);
        if (l && r && l !== r.nodeDeps.get(e)) return;
        o.set(e, t);
        const i = null == l ? t : wt(t, l);
        for (const u of i) {
          a.has(u) || a.set(u, new Set());
          de(a.get(u)).add(e);
        }
        if (l) {
          const n = wt(l, t);
          for (const t of n) {
            if (!a.has(t)) return;
            const n = de(a.get(t));
            n.delete(e), 0 === n.size && a.delete(t);
          }
        }
      }
      var Et = {
        cloneGraph: function (e) {
          return {
            nodeDeps: _t(e.nodeDeps, (e) => new Set(e)),
            nodeToNodeSubscriptions: _t(e.nodeToNodeSubscriptions, (e) => new Set(e)),
          };
        },
        graph: function () {
          return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
        },
        saveDepsToStore: function (e, t, n, r) {
          var o, a, l, i;
          const u = n.getState();
          r !== u.currentTree.version &&
            r !== (null === (o = u.nextTree) || void 0 === o ? void 0 : o.version) &&
            r !== (null === (a = u.previousTree) || void 0 === a ? void 0 : a.version) &&
            Fe('Tried to save dependencies to a discarded tree');
          const s = n.getGraph(r);
          if (
            (kt(e, t, s),
            r === (null === (l = u.previousTree) || void 0 === l ? void 0 : l.version))
          ) {
            kt(e, t, n.getGraph(u.currentTree.version), s);
          }
          if (
            r === (null === (i = u.previousTree) || void 0 === i ? void 0 : i.version) ||
            r === u.currentTree.version
          ) {
            var c;
            const r = null === (c = u.nextTree) || void 0 === c ? void 0 : c.version;
            if (void 0 !== r) {
              kt(e, t, n.getGraph(r), s);
            }
          }
        },
      };
      let Tt = 0;
      let Rt = 0;
      let Ct = 0;
      var xt = {
        getNextTreeStateVersion: () => Tt++,
        getNextStoreID: () => Rt++,
        getNextComponentID: () => Ct++,
      };
      const { persistentMap: Nt } = St,
        { graph: Lt } = Et,
        { getNextTreeStateVersion: At } = xt;
      function Pt() {
        const e = At();
        return {
          version: e,
          stateID: e,
          transactionMetadata: {},
          dirtyAtoms: new Set(),
          atomValues: Nt(),
          nonvalidatedAtoms: Nt(),
        };
      }
      var Mt = {
        makeEmptyTreeState: Pt,
        makeEmptyStoreState: function () {
          const e = Pt();
          return {
            currentTree: e,
            nextTree: null,
            previousTree: null,
            commitDepth: 0,
            knownAtoms: new Set(),
            knownSelectors: new Set(),
            transactionSubscriptions: new Map(),
            nodeTransactionSubscriptions: new Map(),
            nodeToComponentSubscriptions: new Map(),
            queuedComponentCallbacks_DEPRECATED: [],
            suspendedComponentResolvers: new Set(),
            graphsByVersion: new Map().set(e.version, Lt()),
            retention: {
              referenceCounts: new Map(),
              nodesRetainedByZone: new Map(),
              retainablesToCheckForRelease: new Set(),
            },
            nodeCleanupFunctions: new Map(),
          };
        },
        getNextTreeStateVersion: At,
      };
      class Ot {}
      var zt = {
        RetentionZone: Ot,
        retentionZone: function () {
          return new Ot();
        },
      };
      var Dt = {
        setByAddingToSet: function (e, t) {
          const n = new Set(e);
          return n.add(t), n;
        },
        setByDeletingFromSet: function (e, t) {
          const n = new Set(e);
          return n.delete(t), n;
        },
        mapBySettingInMap: function (e, t, n) {
          const r = new Map(e);
          return r.set(t, n), r;
        },
        mapByUpdatingInMap: function (e, t, n) {
          const r = new Map(e);
          return r.set(t, n(r.get(t))), r;
        },
        mapByDeletingFromMap: function (e, t) {
          const n = new Map(e);
          return n.delete(t), n;
        },
        mapByDeletingMultipleFromMap: function (e, t) {
          const n = new Map(e);
          return t.forEach((e) => n.delete(e)), n;
        },
      };
      var Vt = function* (e, t) {
        let n = 0;
        for (const r of e) t(r, n++) && (yield r);
      };
      var Ut = function (e, t) {
        return new Proxy(e, {
          get: (e, n) => (!(n in e) && n in t && (e[n] = t[n]()), e[n]),
          ownKeys: (e) => Object.keys(e),
        });
      };
      const { getNode: It, getNodeMaybe: Ft, recoilValuesForKeys: Bt } = dt,
        { RetentionZone: jt } = zt,
        { setByAddingToSet: Wt } = Dt,
        Ht = Object.freeze(new Set());
      class $t extends Error {}
      function Kt(e, t, n, r) {
        const o = e.getState();
        if (o.nodeCleanupFunctions.has(n)) return;
        const a = It(n),
          l = (function (e, t, n) {
            if (!De('recoil_memory_managament_2020')) return () => {};
            const { nodesRetainedByZone: r } = e.getState().retention;
            function o(e) {
              let n = r.get(e);
              n || r.set(e, (n = new Set())), n.add(t);
            }
            if (n instanceof jt) o(n);
            else if (Array.isArray(n)) for (const a of n) o(a);
            return () => {
              if (!De('recoil_memory_managament_2020')) return;
              const { retention: r } = e.getState();
              function o(e) {
                const n = r.nodesRetainedByZone.get(e);
                null === n || void 0 === n || n.delete(t),
                  n && 0 === n.size && r.nodesRetainedByZone.delete(e);
              }
              if (n instanceof jt) o(n);
              else if (Array.isArray(n)) for (const e of n) o(e);
            };
          })(e, n, a.retainedBy),
          i = a.init(e, t, r);
        o.nodeCleanupFunctions.set(n, () => {
          i(), l();
        });
      }
      function Qt(e, t, n) {
        return It(n).peek(e, t);
      }
      function qt(e, t, n) {
        const r = new Set(),
          o = Array.from(n),
          a = e.getGraph(t.version);
        for (let i = o.pop(); i; i = o.pop()) {
          var l;
          r.add(i);
          const e = null !== (l = a.nodeToNodeSubscriptions.get(i)) && void 0 !== l ? l : Ht;
          for (const t of e) r.has(t) || o.push(t);
        }
        return r;
      }
      var Gt = {
        getNodeLoadable: function (e, t, n) {
          return Kt(e, t, n, 'get'), It(n).get(e, t);
        },
        peekNodeLoadable: Qt,
        setNodeValue: function (e, t, n, r) {
          const o = It(n);
          if (null == o.set) throw new $t('Attempt to set read-only RecoilValue: '.concat(n));
          const a = o.set;
          return Kt(e, t, n, 'set'), a(e, t, r);
        },
        initializeNode: function (e, t, n) {
          Kt(e, e.getState().currentTree, t, n);
        },
        cleanUpNode: function (e, t) {
          var n;
          const r = e.getState();
          null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
            r.nodeCleanupFunctions.delete(t);
        },
        setUnvalidatedAtomValue_DEPRECATED: function (e, t, n) {
          var r;
          const o = Ft(t);
          return (
            null === o ||
              void 0 === o ||
              null === (r = o.invalidate) ||
              void 0 === r ||
              r.call(o, e),
            {
              ...e,
              atomValues: e.atomValues.clone().delete(t),
              nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
              dirtyAtoms: Wt(e.dirtyAtoms, t),
            }
          );
        },
        peekNodeInfo: function (e, t, n) {
          const r = e.getState(),
            o = e.getGraph(t.version),
            a = It(n).nodeType;
          return Ut(
            { type: a },
            {
              loadable: () => Qt(e, t, n),
              isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
              isSet: () => 'selector' !== a && t.atomValues.has(n),
              isModified: () => t.dirtyAtoms.has(n),
              deps: () => {
                var e;
                return Bt(null !== (e = o.nodeDeps.get(n)) && void 0 !== e ? e : []);
              },
              subscribers: () => {
                var o, a;
                return {
                  nodes: Bt(Vt(qt(e, t, new Set([n])), (e) => e !== n)),
                  components: nt(
                    null !==
                      (o =
                        null === (a = r.nodeToComponentSubscriptions.get(n)) || void 0 === a
                          ? void 0
                          : a.values()) && void 0 !== o
                      ? o
                      : [],
                    (e) => {
                      let [t] = e;
                      return { name: t };
                    }
                  ),
                };
              },
            }
          );
        },
        getDownstreamNodes: qt,
      };
      let Yt = null;
      var Zt = {
        setInvalidateMemoizedSnapshot: function (e) {
          Yt = e;
        },
        invalidateMemoizedSnapshot: function () {
          var e;
          null === (e = Yt) || void 0 === e || e();
        },
      };
      const { getDownstreamNodes: Xt, getNodeLoadable: Jt, setNodeValue: en } = Gt,
        { getNextComponentID: tn } = xt,
        { getNode: nn, getNodeMaybe: rn } = dt,
        { DefaultValue: on } = dt,
        { reactMode: an } = $e,
        {
          AbstractRecoilValue: ln,
          RecoilState: un,
          RecoilValueReadOnly: sn,
          isRecoilValue: cn,
        } = et,
        { invalidateMemoizedSnapshot: dn } = Zt;
      function fn(e, t, n) {
        if ('set' === n.type) {
          const { recoilValue: r, valueOrUpdater: o } = n,
            a = (function (e, t, n, r) {
              let { key: o } = n;
              if ('function' === typeof r) {
                const n = Jt(e, t, o);
                if ('loading' === n.state) {
                  const e = 'Tried to set atom or selector "'.concat(
                    o,
                    '" using an updater function while the current state is pending, this is not currently supported.'
                  );
                  throw (Fe(e), se(e));
                }
                if ('hasError' === n.state) throw n.contents;
                return r(n.contents);
              }
              return r;
            })(e, t, r, o),
            l = en(e, t, r.key, a);
          for (const [e, n] of l.entries()) pn(t, e, n);
        } else if ('setLoadable' === n.type) {
          const {
            recoilValue: { key: e },
            loadable: r,
          } = n;
          pn(t, e, r);
        } else if ('markModified' === n.type) {
          const {
            recoilValue: { key: e },
          } = n;
          t.dirtyAtoms.add(e);
        } else if ('setUnvalidated' === n.type) {
          var r;
          const {
              recoilValue: { key: e },
              unvalidatedValue: o,
            } = n,
            a = rn(e);
          null === a || void 0 === a || null === (r = a.invalidate) || void 0 === r || r.call(a, t),
            t.atomValues.delete(e),
            t.nonvalidatedAtoms.set(e, o),
            t.dirtyAtoms.add(e);
        } else Fe('Unknown action '.concat(n.type));
      }
      function pn(e, t, n) {
        'hasValue' === n.state && n.contents instanceof on
          ? e.atomValues.delete(t)
          : e.atomValues.set(t, n),
          e.dirtyAtoms.add(t),
          e.nonvalidatedAtoms.delete(t);
      }
      function hn(e, t) {
        e.replaceState((n) => {
          const r = yn(n);
          for (const o of t) fn(e, r, o);
          return gn(e, r), dn(), r;
        });
      }
      function mn(e, t) {
        if (vn.length) {
          const n = vn[vn.length - 1];
          let r = n.get(e);
          r || n.set(e, (r = [])), r.push(t);
        } else hn(e, [t]);
      }
      const vn = [];
      function yn(e) {
        return {
          ...e,
          atomValues: e.atomValues.clone(),
          nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
          dirtyAtoms: new Set(e.dirtyAtoms),
        };
      }
      function gn(e, t) {
        const n = Xt(e, t, t.dirtyAtoms);
        for (const a of n) {
          var r, o;
          null === (r = rn(a)) ||
            void 0 === r ||
            null === (o = r.invalidate) ||
            void 0 === o ||
            o.call(r, t);
        }
      }
      function bn(e, t, n) {
        mn(e, { type: 'set', recoilValue: t, valueOrUpdater: n });
      }
      var Sn = {
        RecoilValueReadOnly: sn,
        AbstractRecoilValue: ln,
        RecoilState: un,
        getRecoilValueAsLoadable: function (e, t) {
          let { key: n } = t,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e.getState().currentTree;
          var o, a;
          const l = e.getState();
          r.version !== l.currentTree.version &&
            r.version !== (null === (o = l.nextTree) || void 0 === o ? void 0 : o.version) &&
            r.version !== (null === (a = l.previousTree) || void 0 === a ? void 0 : a.version) &&
            Fe('Tried to read from a discarded tree');
          const i = Jt(e, r, n);
          return 'loading' === i.state && i.contents.catch(() => {}), i;
        },
        setRecoilValue: bn,
        setRecoilValueLoadable: function (e, t, n) {
          if (n instanceof on) return bn(e, t, n);
          mn(e, { type: 'setLoadable', recoilValue: t, loadable: n });
        },
        markRecoilValueModified: function (e, t) {
          mn(e, { type: 'markModified', recoilValue: t });
        },
        setUnvalidatedRecoilValue: function (e, t, n) {
          mn(e, { type: 'setUnvalidated', recoilValue: t, unvalidatedValue: n });
        },
        subscribeToRecoilValue: function (e, t, n) {
          let { key: r } = t,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          const a = tn(),
            l = e.getState();
          l.nodeToComponentSubscriptions.has(r) || l.nodeToComponentSubscriptions.set(r, new Map()),
            de(l.nodeToComponentSubscriptions.get(r)).set(a, [
              null !== o && void 0 !== o ? o : '<not captured>',
              n,
            ]);
          const i = an();
          if (i.early && ('LEGACY' === i.mode || 'MUTABLE_SOURCE' === i.mode)) {
            const t = e.getState().nextTree;
            t && t.dirtyAtoms.has(r) && n(t);
          }
          return {
            release: () => {
              const t = e.getState(),
                n = t.nodeToComponentSubscriptions.get(r);
              void 0 !== n && n.has(a)
                ? (n.delete(a), 0 === n.size && t.nodeToComponentSubscriptions.delete(r))
                : Fe(
                    'Subscription missing at release time for atom '.concat(
                      r,
                      '. This is a bug in Recoil.'
                    )
                  );
            },
          };
        },
        isRecoilValue: cn,
        applyAtomValueWrites: function (e, t) {
          const n = e.clone();
          return (
            t.forEach((e, t) => {
              'hasValue' === e.state && e.contents instanceof on ? n.delete(t) : n.set(t, e);
            }),
            n
          );
        },
        batchStart: function () {
          const e = new Map();
          return (
            vn.push(e),
            () => {
              for (const [t, n] of e) hn(t, n);
              vn.pop() !== e && Fe('Incorrect order of batch popping');
            }
          );
        },
        writeLoadableToTreeState: pn,
        invalidateDownstreams: gn,
        copyTreeState: yn,
        refreshRecoilValue: function (e, t) {
          var n;
          const { currentTree: r } = e.getState(),
            o = nn(t.key);
          null === (n = o.clearCache) || void 0 === n || n.call(o, e, r);
        },
      };
      var wn = function (e, t, n) {
        const r = e.entries();
        let o = r.next();
        for (; !o.done; ) {
          const a = o.value;
          if (t.call(n, a[1], a[0], e)) return !0;
          o = r.next();
        }
        return !1;
      };
      const { cleanUpNode: _n } = Gt,
        { deleteNodeConfigIfPossible: kn, getNode: En } = dt,
        { RetentionZone: Tn } = zt,
        Rn = new Set();
      function Cn(e, t) {
        const n = e.getState(),
          r = n.currentTree;
        if (n.nextTree)
          return void Fe(
            'releaseNodesNowOnCurrentTree should only be called at the end of a batch'
          );
        const o = new Set();
        for (const l of t)
          if (l instanceof Tn) for (const e of Nn(n, l)) o.add(e);
          else o.add(l);
        const a = (function (e, t) {
          const n = e.getState(),
            r = n.currentTree,
            o = e.getGraph(r.version),
            a = new Set(),
            l = new Set();
          return i(t), a;
          function i(t) {
            const u = new Set(),
              s = (function (e, t, n, r, o) {
                const a = e.getGraph(t.version),
                  l = [],
                  i = new Set();
                for (; n.size > 0; ) u(de(n.values().next().value));
                return l;
                function u(e) {
                  if (r.has(e) || o.has(e)) return void n.delete(e);
                  if (i.has(e)) return;
                  const t = a.nodeToNodeSubscriptions.get(e);
                  if (t) for (const n of t) u(n);
                  i.add(e), n.delete(e), l.push(e);
                }
              })(e, r, t, a, l);
            for (const e of s) {
              var c;
              if ('recoilRoot' === En(e).retainedBy) {
                l.add(e);
                continue;
              }
              if ((null !== (c = n.retention.referenceCounts.get(e)) && void 0 !== c ? c : 0) > 0) {
                l.add(e);
                continue;
              }
              if (Ln(e).some((e) => n.retention.referenceCounts.get(e))) {
                l.add(e);
                continue;
              }
              const t = o.nodeToNodeSubscriptions.get(e);
              t && wn(t, (e) => l.has(e)) ? l.add(e) : (a.add(e), u.add(e));
            }
            const d = new Set();
            for (const e of u)
              for (const t of null !== (f = o.nodeDeps.get(e)) && void 0 !== f ? f : Rn) {
                var f;
                a.has(t) || d.add(t);
              }
            d.size && i(d);
          }
        })(e, o);
        for (const l of a) xn(e, r, l);
      }
      function xn(e, t, n) {
        if (!De('recoil_memory_managament_2020')) return;
        _n(e, n);
        const r = e.getState();
        r.knownAtoms.delete(n),
          r.knownSelectors.delete(n),
          r.nodeTransactionSubscriptions.delete(n),
          r.retention.referenceCounts.delete(n);
        const o = Ln(n);
        for (const u of o) {
          var a;
          null === (a = r.retention.nodesRetainedByZone.get(u)) || void 0 === a || a.delete(n);
        }
        t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
        const l = r.graphsByVersion.get(t.version);
        if (l) {
          const e = l.nodeDeps.get(n);
          if (void 0 !== e) {
            l.nodeDeps.delete(n);
            for (const t of e) {
              var i;
              null === (i = l.nodeToNodeSubscriptions.get(t)) || void 0 === i || i.delete(n);
            }
          }
          l.nodeToNodeSubscriptions.delete(n);
        }
        kn(n);
      }
      function Nn(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) && void 0 !== n ? n : Rn;
      }
      function Ln(e) {
        const t = En(e).retainedBy;
        return void 0 === t || 'components' === t || 'recoilRoot' === t
          ? []
          : t instanceof Tn
            ? [t]
            : t;
      }
      function An(e, t) {
        if (!De('recoil_memory_managament_2020')) return;
        e.getState().retention.referenceCounts.delete(t),
          (function (e, t) {
            const n = e.getState();
            n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : Cn(e, new Set([t]));
          })(e, t);
      }
      var Pn = {
        SUSPENSE_TIMEOUT_MS: 12e4,
        updateRetainCount: function (e, t, n) {
          var r;
          if (!De('recoil_memory_managament_2020')) return;
          const o = e.getState().retention.referenceCounts,
            a = (null !== (r = o.get(t)) && void 0 !== r ? r : 0) + n;
          0 === a ? An(e, t) : o.set(t, a);
        },
        updateRetainCountToZero: An,
        releaseScheduledRetainablesNow: function (e) {
          if (!De('recoil_memory_managament_2020')) return;
          const t = e.getState();
          Cn(e, t.retention.retainablesToCheckForRelease),
            t.retention.retainablesToCheckForRelease.clear();
        },
        retainedByOptionWithDefault: function (e) {
          return void 0 === e ? 'recoilRoot' : e;
        },
      };
      const { unstable_batchedUpdates: Mn } = o;
      var On = { unstable_batchedUpdates: Mn };
      const { unstable_batchedUpdates: zn } = On;
      var Dn = { unstable_batchedUpdates: zn };
      const { batchStart: Vn } = Sn,
        { unstable_batchedUpdates: Un } = Dn;
      let In = Un || ((e) => e());
      var Fn = {
        getBatcher: () => In,
        setBatcher: (e) => {
          In = e;
        },
        batchUpdates: (e) => {
          In(() => {
            let t = () => {};
            try {
              (t = Vn()), e();
            } finally {
              t();
            }
          });
        },
      };
      var Bn = function* (e) {
        for (const t of e) for (const e of t) yield e;
      };
      const jn = 'undefined' === typeof Window || 'undefined' === typeof window,
        Wn = 'undefined' !== typeof navigator && 'ReactNative' === navigator.product;
      var Hn = {
        isSSR: jn,
        isReactNative: Wn,
        isWindow: (e) => !jn && (e === window || e instanceof Window),
      };
      var $n = {
        memoizeWithArgsHash: function (e, t) {
          let n;
          return function () {
            n || (n = {});
            const r = t(...arguments);
            return Object.hasOwnProperty.call(n, r) || (n[r] = e(...arguments)), n[r];
          };
        },
        memoizeOneWithArgsHash: function (e, t) {
          let n, r;
          return function () {
            const o = t(...arguments);
            return n === o || ((n = o), (r = e(...arguments))), r;
          };
        },
        memoizeOneWithArgsHashAndInvalidation: function (e, t) {
          let n, r;
          return [
            function () {
              const o = t(...arguments);
              return n === o || ((n = o), (r = e(...arguments))), r;
            },
            () => {
              n = null;
            },
          ];
        },
      };
      const { batchUpdates: Kn } = Fn,
        { initializeNode: Qn, peekNodeInfo: qn } = Gt,
        { graph: Gn } = Et,
        { getNextStoreID: Yn } = xt,
        { DEFAULT_VALUE: Zn, recoilValues: Xn, recoilValuesForKeys: Jn } = dt,
        {
          AbstractRecoilValue: er,
          getRecoilValueAsLoadable: tr,
          setRecoilValue: nr,
          setUnvalidatedRecoilValue: rr,
        } = Sn,
        { updateRetainCount: or } = Pn,
        { setInvalidateMemoizedSnapshot: ar } = Zt,
        { getNextTreeStateVersion: lr, makeEmptyStoreState: ir } = Mt,
        { isSSR: ur } = Hn,
        { memoizeOneWithArgsHashAndInvalidation: sr } = $n;
      class cr {
        constructor(e, t) {
          fe(this, '_store', void 0),
            fe(this, '_refCount', 1),
            fe(this, 'getLoadable', (e) => (this.checkRefCount_INTERNAL(), tr(this._store, e))),
            fe(
              this,
              'getPromise',
              (e) => (this.checkRefCount_INTERNAL(), this.getLoadable(e).toPromise())
            ),
            fe(this, 'getNodes_UNSTABLE', (e) => {
              if (
                (this.checkRefCount_INTERNAL(),
                !0 === (null === e || void 0 === e ? void 0 : e.isModified))
              ) {
                if (!1 === (null === e || void 0 === e ? void 0 : e.isInitialized)) return [];
                const t = this._store.getState().currentTree;
                return Jn(t.dirtyAtoms);
              }
              const t = this._store.getState().knownAtoms,
                n = this._store.getState().knownSelectors;
              return null == (null === e || void 0 === e ? void 0 : e.isInitialized)
                ? Xn.values()
                : !0 === e.isInitialized
                  ? Jn(Bn([t, n]))
                  : Vt(Xn.values(), (e) => {
                      let { key: r } = e;
                      return !t.has(r) && !n.has(r);
                    });
            }),
            fe(this, 'getInfo_UNSTABLE', (e) => {
              let { key: t } = e;
              return (
                this.checkRefCount_INTERNAL(),
                qn(this._store, this._store.getState().currentTree, t)
              );
            }),
            fe(this, 'map', (e) => {
              this.checkRefCount_INTERNAL();
              const t = new hr(this, Kn);
              return e(t), t;
            }),
            fe(this, 'asyncMap', async (e) => {
              this.checkRefCount_INTERNAL();
              const t = new hr(this, Kn);
              return t.retain(), await e(t), t.autoRelease_INTERNAL(), t;
            }),
            (this._store = {
              storeID: Yn(),
              parentStoreID: t,
              getState: () => e,
              replaceState: (t) => {
                e.currentTree = t(e.currentTree);
              },
              getGraph: (t) => {
                const n = e.graphsByVersion;
                if (n.has(t)) return de(n.get(t));
                const r = Gn();
                return n.set(t, r), r;
              },
              subscribeToTransactions: () => ({ release: () => {} }),
              addTransactionMetadata: () => {
                throw se('Cannot subscribe to Snapshots');
              },
            });
          for (const n of this._store.getState().knownAtoms)
            Qn(this._store, n, 'get'), or(this._store, n, 1);
          this.autoRelease_INTERNAL();
        }
        retain() {
          this._refCount <= 0 && Fe('Attempt to retain() Snapshot that was already released.'),
            this._refCount++;
          let e = !1;
          return () => {
            e || ((e = !0), this._release());
          };
        }
        autoRelease_INTERNAL() {
          ur || window.setTimeout(() => this._release(), 10);
        }
        _release() {
          if ((this._refCount--, 0 === this._refCount)) {
            if (
              (this._store.getState().nodeCleanupFunctions.forEach((e) => e()),
              this._store.getState().nodeCleanupFunctions.clear(),
              !De('recoil_memory_managament_2020'))
            )
              return;
          } else this._refCount;
        }
        isRetained() {
          return this._refCount > 0;
        }
        checkRefCount_INTERNAL() {
          De('recoil_memory_managament_2020') && this._refCount;
        }
        getStore_INTERNAL() {
          return this.checkRefCount_INTERNAL(), this._store;
        }
        getID() {
          return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID;
        }
        getStoreID() {
          return this.checkRefCount_INTERNAL(), this._store.storeID;
        }
      }
      function dr(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const r = e.getState(),
          o = n ? lr() : t.version;
        return {
          currentTree: {
            version: n ? o : t.version,
            stateID: n ? o : t.stateID,
            transactionMetadata: { ...t.transactionMetadata },
            dirtyAtoms: new Set(t.dirtyAtoms),
            atomValues: t.atomValues.clone(),
            nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
          },
          commitDepth: 0,
          nextTree: null,
          previousTree: null,
          knownAtoms: new Set(r.knownAtoms),
          knownSelectors: new Set(r.knownSelectors),
          transactionSubscriptions: new Map(),
          nodeTransactionSubscriptions: new Map(),
          nodeToComponentSubscriptions: new Map(),
          queuedComponentCallbacks_DEPRECATED: [],
          suspendedComponentResolvers: new Set(),
          graphsByVersion: new Map().set(o, e.getGraph(t.version)),
          retention: {
            referenceCounts: new Map(),
            nodesRetainedByZone: new Map(),
            retainablesToCheckForRelease: new Set(),
          },
          nodeCleanupFunctions: new Map(
            nt(r.nodeCleanupFunctions.entries(), (e) => {
              let [t] = e;
              return [t, () => {}];
            })
          ),
        };
      }
      const [fr, pr] = sr(
        (e, t) => {
          var n;
          const r = e.getState(),
            o =
              'latest' === t
                ? null !== (n = r.nextTree) && void 0 !== n
                  ? n
                  : r.currentTree
                : de(r.previousTree);
          return new cr(dr(e, o), e.storeID);
        },
        (e, t) => {
          var n, r;
          return (
            String(t) +
            String(e.storeID) +
            String(null === (n = e.getState().nextTree) || void 0 === n ? void 0 : n.version) +
            String(e.getState().currentTree.version) +
            String(null === (r = e.getState().previousTree) || void 0 === r ? void 0 : r.version)
          );
        }
      );
      ar(pr);
      class hr extends cr {
        constructor(e, t) {
          super(
            dr(e.getStore_INTERNAL(), e.getStore_INTERNAL().getState().currentTree, !0),
            e.getStoreID()
          ),
            fe(this, '_batch', void 0),
            fe(this, 'set', (e, t) => {
              this.checkRefCount_INTERNAL();
              const n = this.getStore_INTERNAL();
              this._batch(() => {
                or(n, e.key, 1), nr(this.getStore_INTERNAL(), e, t);
              });
            }),
            fe(this, 'reset', (e) => {
              this.checkRefCount_INTERNAL();
              const t = this.getStore_INTERNAL();
              this._batch(() => {
                or(t, e.key, 1), nr(this.getStore_INTERNAL(), e, Zn);
              });
            }),
            fe(this, 'setUnvalidatedAtomValues_DEPRECATED', (e) => {
              this.checkRefCount_INTERNAL();
              const t = this.getStore_INTERNAL();
              Kn(() => {
                for (const [n, r] of e.entries()) or(t, n, 1), rr(t, new er(n), r);
              });
            }),
            (this._batch = t);
        }
      }
      var mr = {
          Snapshot: cr,
          MutableSnapshot: hr,
          freshSnapshot: function (e) {
            const t = new cr(ir());
            return null != e ? t.map(e) : t;
          },
          cloneSnapshot: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'latest';
            const n = fr(e, t);
            return n.isRetained() ? n : (pr(), fr(e, t));
          },
        },
        vr = mr.Snapshot,
        yr = mr.MutableSnapshot,
        gr = mr.freshSnapshot,
        br = mr.cloneSnapshot,
        Sr = Object.freeze({
          __proto__: null,
          Snapshot: vr,
          MutableSnapshot: yr,
          freshSnapshot: gr,
          cloneSnapshot: br,
        });
      var wr = function () {
        const e = new Set();
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        for (const o of n) for (const t of o) e.add(t);
        return e;
      };
      const { useRef: _r } = t;
      var kr = function (e) {
        const t = _r(e);
        return t.current === e && 'function' === typeof e && (t.current = e()), t;
      };
      const { getNextTreeStateVersion: Er, makeEmptyStoreState: Tr } = Mt,
        {
          cleanUpNode: Rr,
          getDownstreamNodes: Cr,
          initializeNode: xr,
          setNodeValue: Nr,
          setUnvalidatedAtomValue_DEPRECATED: Lr,
        } = Gt,
        { graph: Ar } = Et,
        { cloneGraph: Pr } = Et,
        { getNextStoreID: Mr } = xt,
        { createMutableSource: Or, reactMode: zr } = $e,
        { applyAtomValueWrites: Dr } = Sn,
        { releaseScheduledRetainablesNow: Vr } = Pn,
        { freshSnapshot: Ur } = Sr,
        {
          useCallback: Ir,
          useContext: Fr,
          useEffect: Br,
          useMemo: jr,
          useRef: Wr,
          useState: Hr,
        } = t;
      function $r() {
        throw se('This component must be used inside a <RecoilRoot> component.');
      }
      const Kr = Object.freeze({
        storeID: Mr(),
        getState: $r,
        replaceState: $r,
        getGraph: $r,
        subscribeToTransactions: $r,
        addTransactionMetadata: $r,
      });
      let Qr = !1;
      function qr(e) {
        if (Qr)
          throw se(
            'An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.'
          );
        const t = e.getState();
        if (null === t.nextTree) {
          De('recoil_memory_managament_2020') &&
            De('recoil_release_on_cascading_update_killswitch_2021') &&
            t.commitDepth > 0 &&
            Vr(e);
          const n = t.currentTree.version,
            r = Er();
          (t.nextTree = {
            ...t.currentTree,
            version: r,
            stateID: r,
            dirtyAtoms: new Set(),
            transactionMetadata: {},
          }),
            t.graphsByVersion.set(r, Pr(de(t.graphsByVersion.get(n))));
        }
      }
      const Gr = t.createContext({ current: Kr }),
        Yr = () => Fr(Gr),
        Zr = t.createContext(null);
      function Xr(e, t, n) {
        const r = Cr(e, n, n.dirtyAtoms);
        for (const o of r) {
          const e = t.nodeToComponentSubscriptions.get(o);
          if (e) for (const [t, [r, o]] of e) o(n);
        }
      }
      function Jr(e) {
        const t = e.getState(),
          n = t.currentTree,
          r = n.dirtyAtoms;
        if (r.size) {
          for (const [n, o] of t.nodeTransactionSubscriptions)
            if (r.has(n)) for (const [t, r] of o) r(e);
          for (const [n, r] of t.transactionSubscriptions) r(e);
          (!zr().early || t.suspendedComponentResolvers.size > 0) &&
            (Xr(e, t, n),
            t.suspendedComponentResolvers.forEach((e) => e()),
            t.suspendedComponentResolvers.clear());
        }
        t.queuedComponentCallbacks_DEPRECATED.forEach((e) => e(n)),
          t.queuedComponentCallbacks_DEPRECATED.splice(
            0,
            t.queuedComponentCallbacks_DEPRECATED.length
          );
      }
      function eo(e) {
        let { setNotifyBatcherOfChange: t } = e;
        const n = Yr(),
          [, r] = Hr([]);
        return (
          t(() => r({})),
          Br(
            () => (
              t(() => r({})),
              () => {
                t(() => {});
              }
            ),
            [t]
          ),
          Br(() => {
            ft.enqueueExecution('Batcher', () => {
              !(function (e) {
                const t = e.getState();
                t.commitDepth++;
                try {
                  const { nextTree: n } = t;
                  if (null == n) return;
                  (t.previousTree = t.currentTree),
                    (t.currentTree = n),
                    (t.nextTree = null),
                    Jr(e),
                    null != t.previousTree
                      ? t.graphsByVersion.delete(t.previousTree.version)
                      : Fe('Ended batch with no previous state, which is unexpected', 'recoil'),
                    (t.previousTree = null),
                    De('recoil_memory_managament_2020') && null == n && Vr(e);
                } finally {
                  t.commitDepth--;
                }
              })(n.current);
            });
          }),
          null
        );
      }
      let to = 0;
      function no(e) {
        let n,
          { initializeState_DEPRECATED: r, initializeState: o, store_INTERNAL: a, children: l } = e;
        const i = (e) => {
            const t = n.current.graphsByVersion;
            if (t.has(e)) return de(t.get(e));
            const r = Ar();
            return t.set(e, r), r;
          },
          u = (e, t) => {
            if (null == t) {
              const { transactionSubscriptions: t } = p.current.getState(),
                n = to++;
              return (
                t.set(n, e),
                {
                  release: () => {
                    t.delete(n);
                  },
                }
              );
            }
            {
              const { nodeTransactionSubscriptions: n } = p.current.getState();
              n.has(t) || n.set(t, new Map());
              const r = to++;
              return (
                de(n.get(t)).set(r, e),
                {
                  release: () => {
                    const e = n.get(t);
                    e && (e.delete(r), 0 === e.size && n.delete(t));
                  },
                }
              );
            }
          },
          s = (e) => {
            qr(p.current);
            for (const t of Object.keys(e))
              de(p.current.getState().nextTree).transactionMetadata[t] = e[t];
          },
          c = (e) => {
            qr(p.current);
            const t = de(n.current.nextTree);
            let r;
            try {
              (Qr = !0), (r = e(t));
            } finally {
              Qr = !1;
            }
            r !== t &&
              ((n.current.nextTree = r),
              zr().early && Xr(p.current, n.current, r),
              de(d.current)());
          },
          d = Wr(null),
          f = Ir(
            (e) => {
              d.current = e;
            },
            [d]
          ),
          p = kr(() =>
            null !== a && void 0 !== a
              ? a
              : {
                  storeID: Mr(),
                  getState: () => n.current,
                  replaceState: c,
                  getGraph: i,
                  subscribeToTransactions: u,
                  addTransactionMetadata: s,
                }
          );
        null != a && (p.current = a),
          (n = kr(() =>
            null != r
              ? (function (e, t) {
                  const n = Tr();
                  return (
                    t({
                      set: (t, r) => {
                        const o = n.currentTree,
                          a = Nr(e, o, t.key, r),
                          l = new Set(a.keys()),
                          i = o.nonvalidatedAtoms.clone();
                        for (const e of l) i.delete(e);
                        n.currentTree = {
                          ...o,
                          dirtyAtoms: wr(o.dirtyAtoms, l),
                          atomValues: Dr(o.atomValues, a),
                          nonvalidatedAtoms: i,
                        };
                      },
                      setUnvalidatedAtomValues: (e) => {
                        e.forEach((e, t) => {
                          n.currentTree = Lr(n.currentTree, t, e);
                        });
                      },
                    }),
                    n
                  );
                })(p.current, r)
              : null != o
                ? (function (e) {
                    const t = Ur(e),
                      n = t.getStore_INTERNAL().getState();
                    return (
                      t.retain(),
                      n.nodeCleanupFunctions.forEach((e) => e()),
                      n.nodeCleanupFunctions.clear(),
                      n
                    );
                  })(o)
                : Tr()
          ));
        const h = jr(
          () =>
            null === Or || void 0 === Or ? void 0 : Or(n, () => n.current.currentTree.version),
          [n]
        );
        return (
          Br(() => {
            const e = p.current;
            for (const t of new Set(e.getState().knownAtoms)) xr(e, t, 'get');
            return () => {
              for (const t of e.getState().knownAtoms) Rr(e, t);
            };
          }, [p]),
          t.createElement(
            Gr.Provider,
            { value: p },
            t.createElement(
              Zr.Provider,
              { value: h },
              t.createElement(eo, { setNotifyBatcherOfChange: f }),
              l
            )
          )
        );
      }
      var ro = {
        RecoilRoot: function (e) {
          const { override: n, ...r } = e,
            o = Yr();
          return !1 === n && o.current !== Kr ? e.children : t.createElement(no, r);
        },
        useStoreRef: Yr,
        useRecoilMutableSource: function () {
          const e = Fr(Zr);
          return (
            null == e &&
              tt(
                'Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks.'
              ),
            e
          );
        },
        useRecoilStoreID: function () {
          return Yr().current.storeID;
        },
        notifyComponents_FOR_TESTING: Xr,
        sendEndOfBatchNotifications_FOR_TESTING: Jr,
      };
      var oo = function (e, t) {
        if (e === t) return !0;
        if (e.length !== t.length) return !1;
        for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      };
      const { useEffect: ao, useRef: lo } = t;
      var io = function (e) {
        const t = lo();
        return (
          ao(() => {
            t.current = e;
          }),
          t.current
        );
      };
      const { useStoreRef: uo } = ro,
        { SUSPENSE_TIMEOUT_MS: so } = Pn,
        { updateRetainCount: co } = Pn,
        { RetentionZone: fo } = zt,
        { useEffect: po, useRef: ho } = t,
        { isSSR: mo } = Hn;
      var vo = function (e) {
        if (De('recoil_memory_managament_2020'))
          return (function (e) {
            const t = Array.isArray(e) ? e : [e],
              n = t.map((e) => (e instanceof fo ? e : e.key)),
              r = uo();
            po(() => {
              if (!De('recoil_memory_managament_2020')) return;
              const e = r.current;
              if (o.current && !mo) window.clearTimeout(o.current), (o.current = null);
              else for (const t of n) co(e, t, 1);
              return () => {
                for (const t of n) co(e, t, -1);
              };
            }, [r, ...n]);
            const o = ho(),
              a = io(n);
            if (!mo && (void 0 === a || !oo(a, n))) {
              const e = r.current;
              for (const t of n) co(e, t, 1);
              if (a) for (const t of a) co(e, t, -1);
              o.current && window.clearTimeout(o.current),
                (o.current = window.setTimeout(() => {
                  o.current = null;
                  for (const t of n) co(e, t, -1);
                }, so));
            }
          })(e);
      };
      var yo = function () {
        return '<component name not available>';
      };
      const { batchUpdates: go } = Fn,
        { DEFAULT_VALUE: bo } = dt,
        {
          currentRendererSupportsUseSyncExternalStore: So,
          reactMode: wo,
          useMutableSource: _o,
          useSyncExternalStore: ko,
        } = $e,
        { useRecoilMutableSource: Eo, useStoreRef: To } = ro,
        { isRecoilValue: Ro } = et,
        {
          AbstractRecoilValue: Co,
          getRecoilValueAsLoadable: xo,
          setRecoilValue: No,
          setUnvalidatedRecoilValue: Lo,
          subscribeToRecoilValue: Ao,
        } = Sn,
        { useCallback: Po, useEffect: Mo, useMemo: Oo, useRef: zo, useState: Do } = t,
        { setByAddingToSet: Vo } = Dt,
        { isSSR: Uo } = Hn;
      function Io(e, t, n) {
        if ('hasValue' === e.state) return e.contents;
        if ('loading' === e.state) {
          throw new Promise((t) => {
            const r = n.current.getState().suspendedComponentResolvers;
            r.add(t),
              Uo &&
                ce(e.contents) &&
                e.contents.finally(() => {
                  r.delete(t);
                });
          });
        }
        throw 'hasError' === e.state
          ? e.contents
          : se('Invalid value of loadable atom "'.concat(t.key, '"'));
      }
      function Fo(e) {
        const t = To(),
          n = yo(),
          r = Po(() => {
            var n;
            const r = t.current,
              o = r.getState(),
              a = wo().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
            return { loadable: xo(r, e, a), key: e.key };
          }, [t, e]),
          o = Po((e) => {
            let t;
            return () => {
              var n, r;
              const o = e();
              return null !== (n = t) &&
                void 0 !== n &&
                n.loadable.is(o.loadable) &&
                (null === (r = t) || void 0 === r ? void 0 : r.key) === o.key
                ? t
                : ((t = o), o);
            };
          }, []),
          a = Oo(() => o(r), [r, o]),
          l = Po(
            (r) => {
              const o = t.current;
              return Ao(o, e, r, n).release;
            },
            [t, e, n]
          );
        return ko(l, a, a).loadable;
      }
      function Bo(e) {
        const t = To(),
          n = Po(() => {
            var n;
            const r = t.current,
              o = r.getState(),
              a = wo().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
            return xo(r, e, a);
          }, [t, e]),
          r = Po(() => n(), [n]),
          o = yo(),
          a = Po(
            (r, a) => {
              const l = t.current;
              return Ao(
                l,
                e,
                () => {
                  if (!De('recoil_suppress_rerender_in_callback')) return a();
                  const e = n();
                  u.current.is(e) || a(), (u.current = e);
                },
                o
              ).release;
            },
            [t, e, o, n]
          ),
          l = Eo();
        if (null == l)
          throw se(
            'Recoil hooks must be used in components contained within a <RecoilRoot> component.'
          );
        const i = _o(l, r, a),
          u = zo(i);
        return (
          Mo(() => {
            u.current = i;
          }),
          i
        );
      }
      function jo(e) {
        const t = To(),
          n = yo(),
          r = Po(() => {
            var n;
            const r = t.current,
              o = r.getState(),
              a = wo().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
            return xo(r, e, a);
          }, [t, e]),
          o = Po(() => ({ loadable: r(), key: e.key }), [r, e.key]),
          a = Po(
            (e) => {
              const t = o();
              return e.loadable.is(t.loadable) && e.key === t.key ? e : t;
            },
            [o]
          );
        Mo(() => {
          const r = Ao(
            t.current,
            e,
            (e) => {
              i(a);
            },
            n
          );
          return i(a), r.release;
        }, [n, e, t, a]);
        const [l, i] = Do(o);
        return l.key !== e.key ? o().loadable : l.loadable;
      }
      function Wo(e) {
        const t = To(),
          [, n] = Do([]),
          r = yo(),
          o = Po(() => {
            var n;
            const r = t.current,
              o = r.getState(),
              a = wo().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
            return xo(r, e, a);
          }, [t, e]),
          a = o(),
          l = zo(a);
        return (
          Mo(() => {
            l.current = a;
          }),
          Mo(() => {
            const a = t.current,
              i = a.getState(),
              u = Ao(
                a,
                e,
                (e) => {
                  var t;
                  if (!De('recoil_suppress_rerender_in_callback')) return n([]);
                  const r = o();
                  (null !== (t = l.current) && void 0 !== t && t.is(r)) || n(r), (l.current = r);
                },
                r
              );
            if (i.nextTree)
              a.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                (l.current = null), n([]);
              });
            else {
              var s;
              if (!De('recoil_suppress_rerender_in_callback')) return n([]);
              const e = o();
              (null !== (s = l.current) && void 0 !== s && s.is(e)) || n(e), (l.current = e);
            }
            return u.release;
          }, [r, o, e, t]),
          a
        );
      }
      function Ho(e) {
        return (
          De('recoil_memory_managament_2020') && vo(e),
          {
            TRANSITION_SUPPORT: jo,
            SYNC_EXTERNAL_STORE: So() ? Fo : jo,
            MUTABLE_SOURCE: Bo,
            LEGACY: Wo,
          }[wo().mode](e)
        );
      }
      function $o(e) {
        const t = To();
        return Io(Ho(e), e, t);
      }
      function Ko(e) {
        const t = To();
        return Po(
          (n) => {
            No(t.current, e, n);
          },
          [t, e]
        );
      }
      function Qo(e) {
        return De('recoil_memory_managament_2020') && vo(e), jo(e);
      }
      function qo(e) {
        const t = To();
        return Io(Qo(e), e, t);
      }
      var Go = {
        recoilComponentGetRecoilValueCount_FOR_TESTING: { current: 0 },
        useRecoilInterface: function () {
          const e = yo(),
            t = To(),
            [, n] = Do([]),
            r = zo(new Set());
          r.current = new Set();
          const o = zo(new Set()),
            a = zo(new Map()),
            l = Po(
              (e) => {
                const t = a.current.get(e);
                t && (t.release(), a.current.delete(e));
              },
              [a]
            ),
            i = Po((e, t) => {
              a.current.has(t) && n([]);
            }, []);
          return (
            Mo(() => {
              const n = t.current;
              wt(r.current, o.current).forEach((t) => {
                if (a.current.has(t))
                  return void tt('Double subscription to RecoilValue "'.concat(t, '"'));
                const r = Ao(n, new Co(t), (e) => i(e, t), e);
                a.current.set(t, r);
                n.getState().nextTree
                  ? n.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                      i(n.getState(), t);
                    })
                  : i(n.getState(), t);
              }),
                wt(o.current, r.current).forEach((e) => {
                  l(e);
                }),
                (o.current = r.current);
            }),
            Mo(() => {
              const n = a.current;
              return (
                wt(r.current, new Set(n.keys())).forEach((r) => {
                  const o = Ao(t.current, new Co(r), (e) => i(e, r), e);
                  n.set(r, o);
                }),
                () => n.forEach((e, t) => l(t))
              );
            }, [e, t, l, i]),
            Oo(() => {
              function e(e) {
                return (n) => {
                  No(t.current, e, n);
                };
              }
              function n(e) {
                var n;
                r.current.has(e.key) || (r.current = Vo(r.current, e.key));
                const o = t.current.getState();
                return xo(
                  t.current,
                  e,
                  wo().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree
                );
              }
              function o(e) {
                return Io(n(e), e, t);
              }
              return {
                getRecoilValue: o,
                getRecoilValueLoadable: n,
                getRecoilState: function (t) {
                  return [o(t), e(t)];
                },
                getRecoilStateLoadable: function (t) {
                  return [n(t), e(t)];
                },
                getSetRecoilState: e,
                getResetRecoilState: function (e) {
                  return () => No(t.current, e, bo);
                },
              };
            }, [r, t])
          );
        },
        useRecoilState: function (e) {
          return [$o(e), Ko(e)];
        },
        useRecoilStateLoadable: function (e) {
          return [Ho(e), Ko(e)];
        },
        useRecoilValue: $o,
        useRecoilValueLoadable: Ho,
        useResetRecoilState: function (e) {
          const t = To();
          return Po(() => {
            No(t.current, e, bo);
          }, [t, e]);
        },
        useSetRecoilState: Ko,
        useSetUnvalidatedAtomValues: function () {
          const e = To();
          return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            go(() => {
              e.current.addTransactionMetadata(n), t.forEach((t, n) => Lo(e.current, new Co(n), t));
            });
          };
        },
        useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Qo,
        useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: qo,
        useRecoilState_TRANSITION_SUPPORT_UNSTABLE: function (e) {
          return [qo(e), Ko(e)];
        },
      };
      var Yo = function (e, t) {
        const n = new Map();
        for (const [r, o] of e) t(o, r) && n.set(r, o);
        return n;
      };
      var Zo = function (e, t) {
        const n = new Set();
        for (const r of e) t(r) && n.add(r);
        return n;
      };
      var Xo = function () {
        const e = new Map();
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        for (let o = 0; o < n.length; o++) {
          const t = n[o].keys();
          let r;
          for (; !(r = t.next()).done; ) e.set(r.value, n[o].get(r.value));
        }
        return e;
      };
      const { batchUpdates: Jo } = Fn,
        { DEFAULT_VALUE: ea, getNode: ta, nodes: na } = dt,
        { useStoreRef: ra } = ro,
        { AbstractRecoilValue: oa, setRecoilValueLoadable: aa } = Sn,
        { SUSPENSE_TIMEOUT_MS: la } = Pn,
        { cloneSnapshot: ia } = Sr,
        { useCallback: ua, useEffect: sa, useRef: ca, useState: da } = t,
        { isSSR: fa } = Hn;
      function pa(e) {
        const t = ra();
        sa(() => t.current.subscribeToTransactions(e).release, [e, t]);
      }
      function ha(e) {
        const t = e.atomValues.toMap(),
          n = _t(
            Yo(t, (e, t) => {
              const n = ta(t).persistence_UNSTABLE;
              return null != n && 'none' !== n.type && 'hasValue' === e.state;
            }),
            (e) => e.contents
          );
        return Xo(e.nonvalidatedAtoms.toMap(), n);
      }
      function ma(e, t) {
        var n;
        const r = e.getState(),
          o = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
          a = t.getStore_INTERNAL().getState().currentTree;
        Jo(() => {
          const n = new Set();
          for (const e of [o.atomValues.keys(), a.atomValues.keys()])
            for (const t of e) {
              var r, l;
              (null === (r = o.atomValues.get(t)) || void 0 === r ? void 0 : r.contents) !==
                (null === (l = a.atomValues.get(t)) || void 0 === l ? void 0 : l.contents) &&
                ta(t).shouldRestoreFromSnapshots &&
                n.add(t);
            }
          n.forEach((t) => {
            aa(e, new oa(t), a.atomValues.has(t) ? de(a.atomValues.get(t)) : ea);
          }),
            e.replaceState((e) => ({ ...e, stateID: t.getID() }));
        });
      }
      var va = {
        useRecoilSnapshot: function () {
          const e = ra(),
            [t, n] = da(() => ia(e.current)),
            r = io(t),
            o = ca(),
            a = ca();
          if (
            (pa(ua((e) => n(ia(e)), [])),
            sa(() => {
              const e = t.retain();
              var n;
              o.current &&
                !fa &&
                (window.clearTimeout(o.current),
                (o.current = null),
                null === (n = a.current) || void 0 === n || n.call(a),
                (a.current = null));
              return () => {
                window.setTimeout(e, 10);
              };
            }, [t]),
            r !== t && !fa)
          ) {
            var l;
            if (o.current)
              window.clearTimeout(o.current),
                (o.current = null),
                null === (l = a.current) || void 0 === l || l.call(a),
                (a.current = null);
            (a.current = t.retain()),
              (o.current = window.setTimeout(() => {
                var e;
                (o.current = null),
                  null === (e = a.current) || void 0 === e || e.call(a),
                  (a.current = null);
              }, la));
          }
          return t;
        },
        gotoSnapshot: ma,
        useGotoRecoilSnapshot: function () {
          const e = ra();
          return ua((t) => ma(e.current, t), [e]);
        },
        useRecoilTransactionObserver: function (e) {
          pa(
            ua(
              (t) => {
                const n = ia(t, 'latest'),
                  r = ia(t, 'previous');
                e({ snapshot: n, previousSnapshot: r });
              },
              [e]
            )
          );
        },
        useTransactionObservation_DEPRECATED: function (e) {
          pa(
            ua(
              (t) => {
                let n = t.getState().previousTree;
                const r = t.getState().currentTree;
                n ||
                  (Fe(
                    'Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil'
                  ),
                  (n = t.getState().currentTree));
                const o = ha(r),
                  a = ha(n),
                  l = _t(na, (e) => {
                    var t, n, r, o;
                    return {
                      persistence_UNSTABLE: {
                        type:
                          null !==
                            (t =
                              null === (n = e.persistence_UNSTABLE) || void 0 === n
                                ? void 0
                                : n.type) && void 0 !== t
                            ? t
                            : 'none',
                        backButton:
                          null !==
                            (r =
                              null === (o = e.persistence_UNSTABLE) || void 0 === o
                                ? void 0
                                : o.backButton) &&
                          void 0 !== r &&
                          r,
                      },
                    };
                  }),
                  i = Zo(r.dirtyAtoms, (e) => o.has(e) || a.has(e));
                e({
                  atomValues: o,
                  previousAtomValues: a,
                  atomInfo: l,
                  modifiedAtoms: i,
                  transactionMetadata: { ...r.transactionMetadata },
                });
              },
              [e]
            )
          );
        },
        useTransactionSubscription_DEPRECATED: pa,
      };
      const { peekNodeInfo: ya } = Gt,
        { useStoreRef: ga } = ro;
      var ba = function () {
        const e = ga();
        return (t) => {
          let { key: n } = t;
          return ya(e.current, e.current.getState().currentTree, n);
        };
      };
      const { reactMode: Sa } = $e,
        { RecoilRoot: wa, useStoreRef: _a } = ro,
        { useMemo: ka } = t;
      var Ea = function () {
        'MUTABLE_SOURCE' === Sa().mode &&
          console.warn(
            'Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.'
          );
        const e = _a().current;
        return ka(
          () =>
            function (n) {
              let { children: r } = n;
              return t.createElement(wa, { store_INTERNAL: e }, r);
            },
          [e]
        );
      };
      const { loadableWithValue: Ta } = Pe,
        { initializeNode: Ra } = Gt,
        { DEFAULT_VALUE: Ca, getNode: xa } = dt,
        {
          copyTreeState: Na,
          getRecoilValueAsLoadable: La,
          invalidateDownstreams: Aa,
          writeLoadableToTreeState: Pa,
        } = Sn;
      function Ma(e) {
        return 'atom' === xa(e.key).nodeType;
      }
      class Oa {
        constructor(e, t) {
          fe(this, '_store', void 0),
            fe(this, '_treeState', void 0),
            fe(this, '_changes', void 0),
            fe(this, 'get', (e) => {
              if (this._changes.has(e.key)) return this._changes.get(e.key);
              if (!Ma(e)) throw se('Reading selectors within atomicUpdate is not supported');
              const t = La(this._store, e, this._treeState);
              if ('hasValue' === t.state) return t.contents;
              throw 'hasError' === t.state
                ? t.contents
                : se(
                    'Expected Recoil atom '.concat(
                      e.key,
                      ' to have a value, but it is in a loading state.'
                    )
                  );
            }),
            fe(this, 'set', (e, t) => {
              if (!Ma(e)) throw se('Setting selectors within atomicUpdate is not supported');
              if ('function' === typeof t) {
                const n = this.get(e);
                this._changes.set(e.key, t(n));
              } else Ra(this._store, e.key, 'set'), this._changes.set(e.key, t);
            }),
            fe(this, 'reset', (e) => {
              this.set(e, Ca);
            }),
            (this._store = e),
            (this._treeState = t),
            (this._changes = new Map());
        }
        newTreeState_INTERNAL() {
          if (0 === this._changes.size) return this._treeState;
          const e = Na(this._treeState);
          for (const [t, n] of this._changes) Pa(e, t, Ta(n));
          return Aa(this._store, e), e;
        }
      }
      var za = function (e) {
          return (t) => {
            e.replaceState((n) => {
              const r = new Oa(e, n);
              return t(r), r.newTreeState_INTERNAL();
            });
          };
        },
        Da = za,
        Va = Object.freeze({ __proto__: null, atomicUpdater: Da });
      var Ua = function (e, t) {
        if (!e) throw new Error(t);
      };
      const { atomicUpdater: Ia } = Va,
        { batchUpdates: Fa } = Fn,
        { DEFAULT_VALUE: Ba } = dt,
        { useStoreRef: ja } = ro,
        { refreshRecoilValue: Wa, setRecoilValue: Ha } = Sn,
        { cloneSnapshot: $a } = Sr,
        { gotoSnapshot: Ka } = va,
        { useCallback: Qa } = t;
      class qa {}
      const Ga = new qa();
      function Ya(e, t, n, r) {
        let o,
          a = Ga;
        var l;
        (Fa(() => {
          const l =
            'useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.';
          if ('function' !== typeof t) throw se(l);
          const i = Ut(
              {
                ...(null !== r && void 0 !== r ? r : {}),
                set: (t, n) => Ha(e, t, n),
                reset: (t) => Ha(e, t, Ba),
                refresh: (t) => Wa(e, t),
                gotoSnapshot: (t) => Ka(e, t),
                transact_UNSTABLE: (t) => Ia(e)(t),
              },
              {
                snapshot: () => {
                  const t = $a(e);
                  return (o = t.retain()), t;
                },
              }
            ),
            u = t(i);
          if ('function' !== typeof u) throw se(l);
          a = u(...n);
        }),
        a instanceof qa && Ua(!1),
        ce(a))
          ? (a = a.finally(() => {
              var e;
              null === (e = o) || void 0 === e || e();
            }))
          : null === (l = o) || void 0 === l || l();
        return a;
      }
      var Za = {
        recoilCallback: Ya,
        useRecoilCallback: function (e, t) {
          const n = ja();
          return Qa(
            function () {
              for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                r[o] = arguments[o];
              return Ya(n.current, e, r);
            },
            null != t ? [...t, n] : void 0
          );
        },
      };
      const { useStoreRef: Xa } = ro,
        { refreshRecoilValue: Ja } = Sn,
        { useCallback: el } = t;
      var tl = function (e) {
        const t = Xa();
        return el(() => {
          const n = t.current;
          Ja(n, e);
        }, [e, t]);
      };
      const { atomicUpdater: nl } = Va,
        { useStoreRef: rl } = ro,
        { useMemo: ol } = t;
      var al = function (e, t) {
        const n = rl();
        return ol(
          () =>
            function () {
              for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                r[o] = arguments[o];
              nl(n.current)((t) => {
                e(t)(...r);
              });
            },
          null != t ? [...t, n] : void 0
        );
      };
      var ll = class {
          constructor(e) {
            fe(this, 'value', void 0), (this.value = e);
          }
        },
        il = Object.freeze({ __proto__: null, WrappedValue: ll });
      const { isFastRefreshEnabled: ul } = $e;
      class sl extends Error {}
      var cl = class {
          constructor(e) {
            var t, n, r;
            fe(this, '_name', void 0),
              fe(this, '_numLeafs', void 0),
              fe(this, '_root', void 0),
              fe(this, '_onHit', void 0),
              fe(this, '_onSet', void 0),
              fe(this, '_mapNodeValue', void 0),
              (this._name = null === e || void 0 === e ? void 0 : e.name),
              (this._numLeafs = 0),
              (this._root = null),
              (this._onHit =
                null !== (t = null === e || void 0 === e ? void 0 : e.onHit) && void 0 !== t
                  ? t
                  : () => {}),
              (this._onSet =
                null !== (n = null === e || void 0 === e ? void 0 : e.onSet) && void 0 !== n
                  ? n
                  : () => {}),
              (this._mapNodeValue =
                null !== (r = null === e || void 0 === e ? void 0 : e.mapNodeValue) && void 0 !== r
                  ? r
                  : (e) => e);
          }
          size() {
            return this._numLeafs;
          }
          root() {
            return this._root;
          }
          get(e, t) {
            var n;
            return null === (n = this.getLeafNode(e, t)) || void 0 === n ? void 0 : n.value;
          }
          getLeafNode(e, t) {
            if (null == this._root) return;
            let n = this._root;
            for (; n; ) {
              if ((null === t || void 0 === t || t.onNodeVisit(n), 'leaf' === n.type))
                return this._onHit(n), n;
              const r = this._mapNodeValue(e(n.nodeKey));
              n = n.branches.get(r);
            }
          }
          set(e, t, n) {
            const r = () => {
              var r, o, a, l;
              let i, u;
              for (const [t, h] of e) {
                var s, c, d;
                const e = this._root;
                if ('leaf' === (null === e || void 0 === e ? void 0 : e.type))
                  throw this.invalidCacheError();
                const r = i;
                if (
                  ((i = r ? r.branches.get(u) : e),
                  (i =
                    null !== (s = i) && void 0 !== s
                      ? s
                      : {
                          type: 'branch',
                          nodeKey: t,
                          parent: r,
                          branches: new Map(),
                          branchKey: u,
                        }),
                  'branch' !== i.type || i.nodeKey !== t)
                )
                  throw this.invalidCacheError();
                null === r || void 0 === r || r.branches.set(u, i),
                  null === n ||
                    void 0 === n ||
                    null === (c = n.onNodeVisit) ||
                    void 0 === c ||
                    c.call(n, i),
                  (u = this._mapNodeValue(h)),
                  (this._root = null !== (d = this._root) && void 0 !== d ? d : i);
              }
              const f = i
                ? null === (r = i) || void 0 === r
                  ? void 0
                  : r.branches.get(u)
                : this._root;
              if (null != f && ('leaf' !== f.type || f.branchKey !== u))
                throw this.invalidCacheError();
              const p = { type: 'leaf', value: t, parent: i, branchKey: u };
              null === (o = i) || void 0 === o || o.branches.set(u, p),
                (this._root = null !== (a = this._root) && void 0 !== a ? a : p),
                this._numLeafs++,
                this._onSet(p),
                null === n ||
                  void 0 === n ||
                  null === (l = n.onNodeVisit) ||
                  void 0 === l ||
                  l.call(n, p);
            };
            try {
              r();
            } catch (o) {
              if (!(o instanceof sl)) throw o;
              this.clear(), r();
            }
          }
          delete(e) {
            const t = this.root();
            if (!t) return !1;
            if (e === t) return (this._root = null), (this._numLeafs = 0), !0;
            let n = e.parent,
              r = e.branchKey;
            for (; n; ) {
              var o;
              if ((n.branches.delete(r), n === t))
                return (
                  0 === n.branches.size
                    ? ((this._root = null), (this._numLeafs = 0))
                    : this._numLeafs--,
                  !0
                );
              if (n.branches.size > 0) break;
              (r = null === (o = n) || void 0 === o ? void 0 : o.branchKey), (n = n.parent);
            }
            for (; n !== t; n = n.parent) if (null == n) return !1;
            return this._numLeafs--, !0;
          }
          clear() {
            (this._numLeafs = 0), (this._root = null);
          }
          invalidCacheError() {
            const e = ul()
              ? 'Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.'
              : 'Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.';
            throw (Fe(e + (null != this._name ? ' - '.concat(this._name) : '')), new sl());
          }
        },
        dl = cl,
        fl = Object.freeze({ __proto__: null, TreeCache: dl });
      var pl = class {
          constructor(e) {
            var t;
            fe(this, '_maxSize', void 0),
              fe(this, '_size', void 0),
              fe(this, '_head', void 0),
              fe(this, '_tail', void 0),
              fe(this, '_map', void 0),
              fe(this, '_keyMapper', void 0),
              (this._maxSize = e.maxSize),
              (this._size = 0),
              (this._head = null),
              (this._tail = null),
              (this._map = new Map()),
              (this._keyMapper = null !== (t = e.mapKey) && void 0 !== t ? t : (e) => e);
          }
          head() {
            return this._head;
          }
          tail() {
            return this._tail;
          }
          size() {
            return this._size;
          }
          maxSize() {
            return this._maxSize;
          }
          has(e) {
            return this._map.has(this._keyMapper(e));
          }
          get(e) {
            const t = this._keyMapper(e),
              n = this._map.get(t);
            if (n) return this.set(e, n.value), n.value;
          }
          set(e, t) {
            const n = this._keyMapper(e);
            this._map.get(n) && this.delete(e);
            const r = this.head(),
              o = { key: e, right: r, left: null, value: t };
            r ? (r.left = o) : (this._tail = o),
              this._map.set(n, o),
              (this._head = o),
              this._size++,
              this._maybeDeleteLRU();
          }
          _maybeDeleteLRU() {
            this.size() > this.maxSize() && this.deleteLru();
          }
          deleteLru() {
            const e = this.tail();
            e && this.delete(e.key);
          }
          delete(e) {
            const t = this._keyMapper(e);
            if (!this._size || !this._map.has(t)) return;
            const n = de(this._map.get(t)),
              r = n.right,
              o = n.left;
            r && (r.left = n.left),
              o && (o.right = n.right),
              n === this.head() && (this._head = r),
              n === this.tail() && (this._tail = o),
              this._map.delete(t),
              this._size--;
          }
          clear() {
            (this._size = 0), (this._head = null), (this._tail = null), (this._map = new Map());
          }
        },
        hl = Object.freeze({ __proto__: null, LRUCache: pl });
      const { LRUCache: ml } = hl,
        { TreeCache: vl } = fl;
      var yl = function (e) {
        let { name: t, maxSize: n, mapNodeValue: r = (e) => e } = e;
        const o = new ml({ maxSize: n }),
          a = new vl({
            name: t,
            mapNodeValue: r,
            onHit: (e) => {
              o.set(e, !0);
            },
            onSet: (e) => {
              const t = o.tail();
              o.set(e, !0), t && a.size() > n && a.delete(t.key);
            },
          });
        return a;
      };
      function gl(e, t, n) {
        if ('string' === typeof e && !e.includes('"') && !e.includes('\\'))
          return '"'.concat(e, '"');
        switch (typeof e) {
          case 'undefined':
            return '';
          case 'boolean':
            return e ? 'true' : 'false';
          case 'number':
          case 'symbol':
            return String(e);
          case 'string':
            return JSON.stringify(e);
          case 'function':
            if (!0 !== (null === t || void 0 === t ? void 0 : t.allowFunctions))
              throw se('Attempt to serialize function in a Recoil cache key');
            return '__FUNCTION('.concat(e.name, ')__');
        }
        if (null === e) return 'null';
        var r;
        if ('object' !== typeof e) return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : '';
        if (ce(e)) return '__PROMISE__';
        if (Array.isArray(e))
          return '['.concat(
            e.map((e, n) => gl(e, t, n.toString())),
            ']'
          );
        if ('function' === typeof e.toJSON) return gl(e.toJSON(n), t, n);
        if (e instanceof Map) {
          const r = {};
          for (const [n, o] of e) r['string' === typeof n ? n : gl(n, t)] = o;
          return gl(r, t, n);
        }
        return e instanceof Set
          ? gl(
              Array.from(e).sort((e, n) => gl(e, t).localeCompare(gl(n, t))),
              t,
              n
            )
          : void 0 !== Symbol &&
              null != e[Symbol.iterator] &&
              'function' === typeof e[Symbol.iterator]
            ? gl(Array.from(e), t, n)
            : '{'.concat(
                Object.keys(e)
                  .filter((t) => void 0 !== e[t])
                  .sort()
                  .map((n) => ''.concat(gl(n, t), ':').concat(gl(e[n], t, n)))
                  .join(','),
                '}'
              );
      }
      var bl = function (e) {
        return gl(
          e,
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { allowFunctions: !1 }
        );
      };
      const { TreeCache: Sl } = fl,
        wl = { equality: 'reference', eviction: 'keep-all', maxSize: 1 / 0 };
      var _l = function () {
        let {
            equality: e = wl.equality,
            eviction: t = wl.eviction,
            maxSize: n = wl.maxSize,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wl,
          r = arguments.length > 1 ? arguments[1] : void 0;
        const o = (function (e) {
          switch (e) {
            case 'reference':
              return (e) => e;
            case 'value':
              return (e) => bl(e);
          }
          throw se('Unrecognized equality policy '.concat(e));
        })(e);
        return (function (e, t, n, r) {
          switch (e) {
            case 'keep-all':
              return new Sl({ name: r, mapNodeValue: n });
            case 'lru':
              return yl({ name: r, maxSize: de(t), mapNodeValue: n });
            case 'most-recent':
              return yl({ name: r, maxSize: 1, mapNodeValue: n });
          }
          throw se('Unrecognized eviction policy '.concat(e));
        })(t, n, o, r);
      };
      const { isReactNative: kl, isWindow: El } = Hn;
      var Tl = {
        startPerfBlock: function (e) {
          return () => null;
        },
      };
      const {
          isLoadable: Rl,
          loadableWithError: Cl,
          loadableWithPromise: xl,
          loadableWithValue: Nl,
        } = Pe,
        { WrappedValue: Ll } = il,
        { getNodeLoadable: Al, peekNodeLoadable: Pl, setNodeValue: Ml } = Gt,
        { saveDepsToStore: Ol } = Et,
        { DEFAULT_VALUE: zl, getConfigDeletionHandler: Dl, getNode: Vl, registerNode: Ul } = dt,
        { isRecoilValue: Il } = et,
        { markRecoilValueModified: Fl } = Sn,
        { retainedByOptionWithDefault: Bl } = Pn,
        { recoilCallback: jl } = Za,
        { startPerfBlock: Wl } = Tl;
      class Hl {}
      const $l = new Hl(),
        Kl = [],
        Ql = new Map(),
        ql = (() => {
          let e = 0;
          return () => e++;
        })();
      function Gl(e) {
        let t = null;
        const { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
          a = null != e.set ? e.set : void 0;
        const l = new Set(),
          i = _l(
            null !== o && void 0 !== o ? o : { equality: 'reference', eviction: 'keep-all' },
            n
          ),
          u = Bl(e.retainedBy_UNSTABLE),
          s = new Map();
        let c = 0;
        function d() {
          return !De('recoil_memory_managament_2020') || c > 0;
        }
        function f(e) {
          return (
            e.getState().knownSelectors.add(n),
            c++,
            () => {
              c--;
            }
          );
        }
        function p() {
          return void 0 !== Dl(n) && !d();
        }
        function h(e, t, n, r, o) {
          C(t, r, o), m(e, n);
        }
        function m(e, t) {
          R(e, t) && T(e), v(t, !0);
        }
        function v(e, n) {
          const r = Ql.get(e);
          if (null != r) {
            for (const e of r) Fl(e, de(t));
            n && Ql.delete(e);
          }
        }
        function y(e, t) {
          let n = Ql.get(t);
          null == n && Ql.set(t, (n = new Set())), n.add(e);
        }
        function g(e, t, n, r, o, a) {
          return t
            .then((r) => {
              if (!d()) throw (T(e), $l);
              null != a.loadingDepKey && a.loadingDepPromise === t
                ? n.atomValues.set(a.loadingDepKey, Nl(r))
                : e.getState().knownSelectors.forEach((e) => {
                    n.atomValues.delete(e);
                  });
              const l = w(e, n);
              if (l && 'loading' !== l.state) {
                if (((R(e, o) || null == E(e)) && m(e, o), 'hasValue' === l.state))
                  return l.contents;
                throw l.contents;
              }
              if (!R(e, o)) {
                const t = k(e, n);
                if (null != t) return t.loadingLoadable.contents;
              }
              const [i, u] = S(e, n, o);
              if (('loading' !== i.state && h(e, n, o, i, u), 'hasError' === i.state))
                throw i.contents;
              return i.contents;
            })
            .catch((t) => {
              if (t instanceof Hl) throw $l;
              if (!d()) throw (T(e), $l);
              const a = Cl(t);
              throw (h(e, n, o, a, r), t);
            });
        }
        function b(e, t, r, o) {
          var a, i, u, s, c, d, f;
          (R(e, o) ||
            t.version ===
              (null === (a = e.getState()) ||
              void 0 === a ||
              null === (i = a.currentTree) ||
              void 0 === i
                ? void 0
                : i.version) ||
            t.version ===
              (null === (u = e.getState()) ||
              void 0 === u ||
              null === (s = u.nextTree) ||
              void 0 === s
                ? void 0
                : s.version)) &&
            Ol(
              n,
              r,
              e,
              null !==
                (c =
                  null === (d = e.getState()) ||
                  void 0 === d ||
                  null === (f = d.nextTree) ||
                  void 0 === f
                    ? void 0
                    : f.version) && void 0 !== c
                ? c
                : e.getState().currentTree.version
            );
          for (const n of r) l.add(n);
        }
        function S(e, o, a) {
          const l = Wl(n);
          let i = !0,
            u = !0;
          const s = () => {
            l(), (u = !1);
          };
          let c,
            f,
            p = !1;
          const m = { loadingDepKey: null, loadingDepPromise: null },
            y = new Map();
          function S(t) {
            let { key: n } = t;
            const r = Al(e, o, n);
            switch (
              (y.set(n, r),
              i ||
                (b(e, o, new Set(y.keys()), a),
                (function (e, t) {
                  R(e, t) && (de(E(e)).stateVersions.clear(), v(t, !1));
                })(e, a)),
              r.state)
            ) {
              case 'hasValue':
                return r.contents;
              case 'hasError':
                throw r.contents;
              case 'loading':
                throw ((m.loadingDepKey = n), (m.loadingDepPromise = r.contents), r.contents);
            }
            throw se('Invalid Loadable state');
          }
          const w = (n) =>
            function () {
              if (u)
                throw se(
                  'Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.'
                );
              null == t && Ua(!1);
              for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                o[a] = arguments[a];
              return jl(e, n, o, { node: t });
            };
          try {
            (c = r({ get: S, getCallback: w })),
              (c = Il(c) ? S(c) : c),
              Rl(c) && ('hasError' === c.state && (p = !0), (c = c.contents)),
              ce(c)
                ? (c = (function (e, t, n, r, o, a) {
                    return t
                      .then((t) => {
                        if (!d()) throw (T(e), $l);
                        const a = Nl(t);
                        return h(e, n, o, a, r), t;
                      })
                      .catch((t) => {
                        if (!d()) throw (T(e), $l);
                        if (ce(t)) return g(e, t, n, r, o, a);
                        const l = Cl(t);
                        throw (h(e, n, o, l, r), t);
                      });
                  })(e, c, o, y, a, m).finally(s))
                : s(),
              (c = c instanceof Ll ? c.value : c);
          } catch (_) {
            (c = _), ce(c) ? (c = g(e, c, o, y, a, m).finally(s)) : ((p = !0), s());
          }
          return (
            (f = p ? Cl(c) : ce(c) ? xl(c) : Nl(c)),
            (i = !1),
            (function (e, t, n) {
              if (R(e, t)) {
                const t = E(e);
                null != t && (t.depValuesDiscoveredSoFarDuringAsyncWork = n);
              }
            })(e, a, y),
            b(e, o, new Set(y.keys()), a),
            [f, y]
          );
        }
        function w(e, t) {
          let r = t.atomValues.get(n);
          if (null != r) return r;
          const o = new Set();
          try {
            r = i.get((n) => ('string' !== typeof n && Ua(!1), Al(e, t, n).contents), {
              onNodeVisit: (e) => {
                'branch' === e.type && e.nodeKey !== n && o.add(e.nodeKey);
              },
            });
          } catch (l) {
            throw se('Problem with cache lookup for selector "'.concat(n, '": ').concat(l.message));
          }
          var a;
          r &&
            (t.atomValues.set(n, r),
            b(e, t, o, null === (a = E(e)) || void 0 === a ? void 0 : a.executionID));
          return r;
        }
        function _(e, t) {
          const n = w(e, t);
          if (null != n) return T(e), n;
          const r = k(e, t);
          var o;
          if (null != r)
            return (
              'loading' === (null === (o = r.loadingLoadable) || void 0 === o ? void 0 : o.state) &&
                y(e, r.executionID),
              r.loadingLoadable
            );
          const a = ql(),
            [l, i] = S(e, t, a);
          return (
            'loading' === l.state
              ? (!(function (e, t, n, r, o) {
                  s.set(e, {
                    depValuesDiscoveredSoFarDuringAsyncWork: r,
                    executionID: t,
                    loadingLoadable: n,
                    stateVersions: new Map([[o.version, !0]]),
                  });
                })(e, a, l, i, t),
                y(e, a))
              : (T(e), C(t, l, i)),
            l
          );
        }
        function k(e, t) {
          const n = Bn([
            s.has(e) ? [de(s.get(e))] : [],
            nt(
              Vt(s, (t) => {
                let [n] = t;
                return n !== e;
              }),
              (e) => {
                let [, t] = e;
                return t;
              }
            ),
          ]);
          function r(n) {
            for (const [r, o] of n) if (!Al(e, t, r).is(o)) return !0;
            return !1;
          }
          for (const o of n) {
            if (o.stateVersions.get(t.version) || !r(o.depValuesDiscoveredSoFarDuringAsyncWork))
              return o.stateVersions.set(t.version, !0), o;
            o.stateVersions.set(t.version, !1);
          }
        }
        function E(e) {
          return s.get(e);
        }
        function T(e) {
          s.delete(e);
        }
        function R(e, t) {
          var n;
          return t === (null === (n = E(e)) || void 0 === n ? void 0 : n.executionID);
        }
        function C(e, t, r) {
          e.atomValues.set(n, t);
          try {
            i.set(
              (function (e) {
                return Array.from(e.entries()).map((e) => {
                  let [t, n] = e;
                  return [t, n.contents];
                });
              })(r),
              t
            );
          } catch (o) {
            throw se(
              'Problem with setting cache for selector "'.concat(n, '": ').concat(o.message)
            );
          }
        }
        function x(e, t) {
          const r = t.atomValues.get(n);
          return null != r
            ? r
            : i.get((n) => {
                var r;
                return (
                  'string' !== typeof n && Ua(!1),
                  null === (r = Pl(e, t, n)) || void 0 === r ? void 0 : r.contents
                );
              });
        }
        function N(e, t) {
          return (function (e) {
            if (Kl.includes(n)) {
              const e = 'Recoil selector has circular dependencies: '.concat(
                Kl.slice(Kl.indexOf(n)).join(' \u2192 ')
              );
              return Cl(se(e));
            }
            Kl.push(n);
            try {
              return e();
            } finally {
              Kl.pop();
            }
          })(() => _(e, t));
        }
        function L(e) {
          e.atomValues.delete(n);
        }
        function A(e, n) {
          null == t && Ua(!1);
          for (const t of l) {
            var r;
            const o = Vl(t);
            null === (r = o.clearCache) || void 0 === r || r.call(o, e, n);
          }
          l.clear(), L(n), i.clear(), Fl(e, t);
        }
        if (null != a) {
          return (t = Ul({
            key: n,
            nodeType: 'selector',
            peek: x,
            get: N,
            set: (e, t, r) => {
              let o = !1;
              const l = new Map();
              function i(r) {
                let { key: a } = r;
                if (o) throw se('Recoil: Async selector sets are not currently supported.');
                const l = Al(e, t, a);
                if ('hasValue' === l.state) return l.contents;
                if ('loading' === l.state) {
                  const e = 'Getting value of asynchronous atom or selector "'
                    .concat(a, '" in a pending state while setting selector "')
                    .concat(n, '" is not yet supported.');
                  throw (Fe(e), se(e));
                }
                throw l.contents;
              }
              function u(n, r) {
                if (o) {
                  const e = 'Recoil: Async selector sets are not currently supported.';
                  throw (Fe(e), se(e));
                }
                const a = 'function' === typeof r ? r(i(n)) : r;
                Ml(e, t, n.key, a).forEach((e, t) => l.set(t, e));
              }
              const s = a(
                {
                  set: u,
                  get: i,
                  reset: function (e) {
                    u(e, zl);
                  },
                },
                r
              );
              if (void 0 !== s)
                throw ce(s)
                  ? se('Recoil: Async selector sets are not currently supported.')
                  : se('Recoil: selector set should be a void function.');
              return (o = !0), l;
            },
            init: f,
            invalidate: L,
            clearCache: A,
            shouldDeleteConfigOnRelease: p,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: u,
          }));
        }
        return (t = Ul({
          key: n,
          nodeType: 'selector',
          peek: x,
          get: N,
          init: f,
          invalidate: L,
          clearCache: A,
          shouldDeleteConfigOnRelease: p,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: u,
        }));
      }
      Gl.value = (e) => new Ll(e);
      var Yl = Gl;
      const {
          isLoadable: Zl,
          loadableWithError: Xl,
          loadableWithPromise: Jl,
          loadableWithValue: ei,
        } = Pe,
        { WrappedValue: ti } = il,
        { peekNodeInfo: ni } = Gt,
        {
          DEFAULT_VALUE: ri,
          DefaultValue: oi,
          getConfigDeletionHandler: ai,
          registerNode: li,
          setConfigDeletionHandler: ii,
        } = dt,
        { isRecoilValue: ui } = et,
        {
          getRecoilValueAsLoadable: si,
          markRecoilValueModified: ci,
          setRecoilValue: di,
          setRecoilValueLoadable: fi,
        } = Sn,
        { retainedByOptionWithDefault: pi } = Pn,
        hi = (e) => (e instanceof ti ? e.value : e);
      function mi(e) {
        const { key: t, persistence_UNSTABLE: n } = e,
          r = pi(e.retainedBy_UNSTABLE);
        let o = 0;
        function a(e) {
          return Jl(
            e
              .then((e) => ((i = ei(e)), e))
              .catch((e) => {
                throw ((i = Xl(e)), e);
              })
          );
        }
        let l,
          i = ce(e.default)
            ? a(e.default)
            : Zl(e.default)
              ? 'loading' === e.default.state
                ? a(e.default.contents)
                : e.default
              : ei(hi(e.default));
        s(i.contents);
        const u = new Map();
        function s(e) {
          return e;
        }
        function c(e, n) {
          var r, o;
          return null !== (r = null !== (o = n.atomValues.get(t)) && void 0 !== o ? o : l) &&
            void 0 !== r
            ? r
            : i;
        }
        const d = li({
          key: t,
          nodeType: 'atom',
          peek: c,
          get: function (e, r) {
            if (r.atomValues.has(t)) return de(r.atomValues.get(t));
            if (r.nonvalidatedAtoms.has(t)) {
              if (null != l) return l;
              if (null == n)
                return (
                  tt(
                    'Tried to restore a persisted value for atom '.concat(
                      t,
                      ' but it has no persistence settings.'
                    )
                  ),
                  i
                );
              const e = r.nonvalidatedAtoms.get(t),
                o = n.validator(e, ri),
                a = o instanceof oi ? i : ei(o);
              return (l = a), l;
            }
            return i;
          },
          set: function (e, n, r) {
            if (n.atomValues.has(t)) {
              const e = de(n.atomValues.get(t));
              if ('hasValue' === e.state && r === e.contents) return new Map();
            } else if (!n.nonvalidatedAtoms.has(t) && r instanceof oi) return new Map();
            return (l = void 0), new Map().set(t, ei(r));
          },
          init: function (n, r, a) {
            var l;
            if ((o++, n.getState().knownAtoms.add(t), 'loading' === i.state)) {
              const m = () => {
                var e;
                (null !== (e = n.getState().nextTree) && void 0 !== e
                  ? e
                  : n.getState().currentTree
                ).atomValues.has(t) || ci(n, d);
              };
              i.contents.finally(m);
            }
            const s = null !== (l = e.effects) && void 0 !== l ? l : e.effects_UNSTABLE;
            if (null != s) {
              let v = ri,
                y = !0,
                g = !1,
                b = null;
              function S(e) {
                if (y && e.key === t) {
                  const e = v;
                  return e instanceof oi
                    ? c(n, r)
                    : ce(e)
                      ? Jl(e.then((e) => (e instanceof oi ? i.toPromise() : e)))
                      : ei(e);
                }
                return si(n, e);
              }
              function w(e) {
                return S(e).toPromise();
              }
              function _(e) {
                var r;
                const o = ni(
                  n,
                  null !== (r = n.getState().nextTree) && void 0 !== r
                    ? r
                    : n.getState().currentTree,
                  e.key
                );
                return !y || e.key !== t || v instanceof oi
                  ? o
                  : { ...o, isSet: !0, loadable: S(e) };
              }
              const k = (e) => (t) => {
                  if (y) {
                    const n = S(d),
                      r = 'hasValue' === n.state ? n.contents : ri;
                    (v = 'function' === typeof t ? t(r) : t),
                      ce(v) && (v = v.then((t) => ((b = { effect: e, value: t }), t)));
                  } else {
                    if (ce(t)) throw se('Setting atoms to async values is not implemented.');
                    'function' !== typeof t && (b = { effect: e, value: hi(t) }),
                      di(
                        n,
                        d,
                        'function' === typeof t
                          ? (n) => {
                              const r = hi(t(n));
                              return (b = { effect: e, value: r }), r;
                            }
                          : hi(t)
                      );
                  }
                },
                E = (e) => () => k(e)(ri),
                T = (e) => (r) => {
                  var o;
                  const { release: a } = n.subscribeToTransactions((n) => {
                    var o;
                    let { currentTree: a, previousTree: l } = n.getState();
                    l ||
                      (Fe(
                        'Transaction subscribers notified without a next tree being present -- this is a bug in Recoil'
                      ),
                      (l = a));
                    const u = null !== (o = a.atomValues.get(t)) && void 0 !== o ? o : i;
                    if ('hasValue' === u.state) {
                      var s, c, d, f;
                      const n = u.contents,
                        o = null !== (s = l.atomValues.get(t)) && void 0 !== s ? s : i,
                        p = 'hasValue' === o.state ? o.contents : ri;
                      (null === (c = b) || void 0 === c ? void 0 : c.effect) !== e ||
                      (null === (d = b) || void 0 === d ? void 0 : d.value) !== n
                        ? r(n, p, !a.atomValues.has(t))
                        : (null === (f = b) || void 0 === f ? void 0 : f.effect) === e &&
                          (b = null);
                    }
                  }, t);
                  u.set(n, [...(null !== (o = u.get(n)) && void 0 !== o ? o : []), a]);
                };
              for (const R of s)
                try {
                  const C = R({
                    node: d,
                    storeID: n.storeID,
                    parentStoreID_UNSTABLE: n.parentStoreID,
                    trigger: a,
                    setSelf: k(R),
                    resetSelf: E(R),
                    onSet: T(R),
                    getPromise: w,
                    getLoadable: S,
                    getInfo_UNSTABLE: _,
                  });
                  var f;
                  if (null != C)
                    u.set(n, [...(null !== (f = u.get(n)) && void 0 !== f ? f : []), C]);
                } catch (h) {
                  (v = h), (g = !0);
                }
              if (((y = !1), !(v instanceof oi))) {
                var p;
                const x = g
                  ? Xl(v)
                  : ce(v)
                    ? Jl(
                        (function (e, n) {
                          const r = n
                            .then((n) => {
                              var o, a;
                              return (
                                (null ===
                                  (a = (
                                    null !== (o = e.getState().nextTree) && void 0 !== o
                                      ? o
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === a
                                  ? void 0
                                  : a.contents) === r && di(e, d, n),
                                n
                              );
                            })
                            .catch((n) => {
                              var o, a;
                              throw (
                                ((null ===
                                  (a = (
                                    null !== (o = e.getState().nextTree) && void 0 !== o
                                      ? o
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === a
                                  ? void 0
                                  : a.contents) === r && fi(e, d, Xl(n)),
                                n)
                              );
                            });
                          return r;
                        })(n, v)
                      )
                    : ei(hi(v));
                x.contents,
                  r.atomValues.set(t, x),
                  null === (p = n.getState().nextTree) || void 0 === p || p.atomValues.set(t, x);
              }
            }
            return () => {
              var e;
              o--, null === (e = u.get(n)) || void 0 === e || e.forEach((e) => e()), u.delete(n);
            };
          },
          invalidate: function () {
            l = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== ai(t) && o <= 0;
          },
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          persistence_UNSTABLE: e.persistence_UNSTABLE
            ? { type: e.persistence_UNSTABLE.type, backButton: e.persistence_UNSTABLE.backButton }
            : void 0,
          shouldRestoreFromSnapshots: !0,
          retainedBy: r,
        });
        return d;
      }
      function vi(e) {
        const { ...t } = e,
          n = 'default' in e ? e.default : new Promise(() => {});
        return ui(n)
          ? (function (e) {
              const t = vi({
                  ...e,
                  default: ri,
                  persistence_UNSTABLE:
                    void 0 === e.persistence_UNSTABLE
                      ? void 0
                      : {
                          ...e.persistence_UNSTABLE,
                          validator: (t) =>
                            t instanceof oi ? t : de(e.persistence_UNSTABLE).validator(t, ri),
                        },
                  effects: e.effects,
                  effects_UNSTABLE: e.effects_UNSTABLE,
                }),
                n = Yl({
                  key: ''.concat(e.key, '__withFallback'),
                  get: (n) => {
                    let { get: r } = n;
                    const o = r(t);
                    return o instanceof oi ? e.default : o;
                  },
                  set: (e, n) => {
                    let { set: r } = e;
                    return r(t, n);
                  },
                  cachePolicy_UNSTABLE: { eviction: 'most-recent' },
                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                });
              return ii(n.key, ai(e.key)), n;
            })({ ...t, default: n })
          : mi({ ...t, default: n });
      }
      vi.value = (e) => new ti(e);
      var yi = vi;
      var gi = class {
          constructor(e) {
            var t;
            fe(this, '_map', void 0),
              fe(this, '_keyMapper', void 0),
              (this._map = new Map()),
              (this._keyMapper =
                null !== (t = null === e || void 0 === e ? void 0 : e.mapKey) && void 0 !== t
                  ? t
                  : (e) => e);
          }
          size() {
            return this._map.size;
          }
          has(e) {
            return this._map.has(this._keyMapper(e));
          }
          get(e) {
            return this._map.get(this._keyMapper(e));
          }
          set(e, t) {
            this._map.set(this._keyMapper(e), t);
          }
          delete(e) {
            this._map.delete(this._keyMapper(e));
          }
          clear() {
            this._map.clear();
          }
        },
        bi = Object.freeze({ __proto__: null, MapCache: gi });
      const { LRUCache: Si } = hl,
        { MapCache: wi } = bi,
        _i = { equality: 'reference', eviction: 'none', maxSize: 1 / 0 };
      var ki = function () {
        let {
          equality: e = _i.equality,
          eviction: t = _i.eviction,
          maxSize: n = _i.maxSize,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _i;
        const r = (function (e) {
          switch (e) {
            case 'reference':
              return (e) => e;
            case 'value':
              return (e) => bl(e);
          }
          throw se('Unrecognized equality policy '.concat(e));
        })(e);
        return (function (e, t, n) {
          switch (e) {
            case 'keep-all':
              return new wi({ mapKey: n });
            case 'lru':
              return new Si({ mapKey: n, maxSize: de(t) });
            case 'most-recent':
              return new Si({ mapKey: n, maxSize: 1 });
          }
          throw se('Unrecognized eviction policy '.concat(e));
        })(t, n, r);
      };
      const { setConfigDeletionHandler: Ei } = dt;
      var Ti = function (e) {
        var t, n;
        const r = ki({
          equality:
            null !==
              (t =
                null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n
                  ? void 0
                  : n.equality) && void 0 !== t
              ? t
              : 'value',
          eviction: 'keep-all',
        });
        return (t) => {
          var n, o;
          const a = r.get(t);
          if (null != a) return a;
          const { cachePolicyForParams_UNSTABLE: l, ...i } = e,
            u = 'default' in e ? e.default : new Promise(() => {}),
            s = yi({
              ...i,
              key: ''.concat(e.key, '__').concat(null !== (n = bl(t)) && void 0 !== n ? n : 'void'),
              default: 'function' === typeof u ? u(t) : u,
              retainedBy_UNSTABLE:
                'function' === typeof e.retainedBy_UNSTABLE
                  ? e.retainedBy_UNSTABLE(t)
                  : e.retainedBy_UNSTABLE,
              effects:
                'function' === typeof e.effects
                  ? e.effects(t)
                  : 'function' === typeof e.effects_UNSTABLE
                    ? e.effects_UNSTABLE(t)
                    : null !== (o = e.effects) && void 0 !== o
                      ? o
                      : e.effects_UNSTABLE,
            });
          return (
            r.set(t, s),
            Ei(s.key, () => {
              r.delete(t);
            }),
            s
          );
        };
      };
      const { setConfigDeletionHandler: Ri } = dt;
      let Ci = 0;
      var xi = function (e) {
        var t, n;
        const r = ki({
          equality:
            null !==
              (t =
                null === (n = e.cachePolicyForParams_UNSTABLE) || void 0 === n
                  ? void 0
                  : n.equality) && void 0 !== t
              ? t
              : 'value',
          eviction: 'keep-all',
        });
        return (t) => {
          var n;
          let o;
          try {
            o = r.get(t);
          } catch (c) {
            throw se(
              'Problem with cache lookup for selector '.concat(e.key, ': ').concat(c.message)
            );
          }
          if (null != o) return o;
          const a = ''
              .concat(e.key, '__selectorFamily/')
              .concat(
                null !== (n = bl(t, { allowFunctions: !0 })) && void 0 !== n ? n : 'void',
                '/'
              )
              .concat(Ci++),
            l = (n) => e.get(t)(n),
            i = e.cachePolicy_UNSTABLE,
            u =
              'function' === typeof e.retainedBy_UNSTABLE
                ? e.retainedBy_UNSTABLE(t)
                : e.retainedBy_UNSTABLE;
          let s;
          if (null != e.set) {
            const n = e.set;
            s = Yl({
              key: a,
              get: l,
              set: (e, r) => n(t)(e, r),
              cachePolicy_UNSTABLE: i,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              retainedBy_UNSTABLE: u,
            });
          } else
            s = Yl({
              key: a,
              get: l,
              cachePolicy_UNSTABLE: i,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              retainedBy_UNSTABLE: u,
            });
          return (
            r.set(t, s),
            Ri(s.key, () => {
              r.delete(t);
            }),
            s
          );
        };
      };
      const Ni = xi({
        key: '__constant',
        get: (e) => () => e,
        cachePolicyForParams_UNSTABLE: { equality: 'reference' },
      });
      var Li = function (e) {
        return Ni(e);
      };
      const Ai = xi({
        key: '__error',
        get: (e) => () => {
          throw se(e);
        },
        cachePolicyForParams_UNSTABLE: { equality: 'reference' },
      });
      var Pi = function (e) {
        return Ai(e);
      };
      var Mi = function (e) {
        return e;
      };
      const { loadableWithError: Oi, loadableWithPromise: zi, loadableWithValue: Di } = Pe;
      function Vi(e, t) {
        const n = Array(t.length).fill(void 0),
          r = Array(t.length).fill(void 0);
        for (const [a, l] of t.entries())
          try {
            n[a] = e(l);
          } catch (o) {
            r[a] = o;
          }
        return [n, r];
      }
      function Ui(e) {
        return null != e && !ce(e);
      }
      function Ii(e) {
        return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
      }
      function Fi(e, t) {
        return Array.isArray(e)
          ? t
          : Object.getOwnPropertyNames(e).reduce((e, n, r) => ({ ...e, [n]: t[r] }), {});
      }
      function Bi(e, t, n) {
        return Fi(
          e,
          n.map((e, n) => (null == e ? Di(t[n]) : ce(e) ? zi(e) : Oi(e)))
        );
      }
      var ji = {
        waitForNone: xi({
          key: '__waitForNone',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = Ii(e),
              [o, a] = Vi(n, r);
            return Bi(e, o, a);
          },
          dangerouslyAllowMutability: !0,
        }),
        waitForAny: xi({
          key: '__waitForAny',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = Ii(e),
              [o, a] = Vi(n, r);
            return a.some((e) => !ce(e))
              ? Bi(e, o, a)
              : new Promise((t) => {
                  for (const [n, r] of a.entries())
                    ce(r) &&
                      r
                        .then((r) => {
                          (o[n] = r), (a[n] = void 0), t(Bi(e, o, a));
                        })
                        .catch((r) => {
                          (a[n] = r), t(Bi(e, o, a));
                        });
                });
          },
          dangerouslyAllowMutability: !0,
        }),
        waitForAll: xi({
          key: '__waitForAll',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = Ii(e),
              [o, a] = Vi(n, r);
            if (a.every((e) => null == e)) return Fi(e, o);
            const l = a.find(Ui);
            if (null != l) throw l;
            return Promise.all(a).then((t) => {
              return Fi(e, ((n = o), t.map((e, t) => (void 0 === e ? n[t] : e))));
              var n;
            });
          },
          dangerouslyAllowMutability: !0,
        }),
        waitForAllSettled: xi({
          key: '__waitForAllSettled',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = Ii(e),
              [o, a] = Vi(n, r);
            return a.every((e) => !ce(e))
              ? Bi(e, o, a)
              : Promise.all(
                  a.map((e, t) =>
                    ce(e)
                      ? e
                          .then((e) => {
                            (o[t] = e), (a[t] = void 0);
                          })
                          .catch((e) => {
                            (o[t] = void 0), (a[t] = e);
                          })
                      : null
                  )
                ).then(() => Bi(e, o, a));
          },
          dangerouslyAllowMutability: !0,
        }),
        noWait: xi({
          key: '__noWait',
          get: (e) => (t) => {
            let { get: n } = t;
            try {
              return Yl.value(Di(n(e)));
            } catch (r) {
              return Yl.value(ce(r) ? zi(r) : Oi(r));
            }
          },
          dangerouslyAllowMutability: !0,
        }),
      };
      const { RecoilLoadable: Wi } = Pe,
        { DefaultValue: Hi } = dt,
        { RecoilRoot: $i, useRecoilStoreID: Ki } = ro,
        { isRecoilValue: Qi } = et,
        { retentionZone: qi } = zt,
        { freshSnapshot: Gi } = Sr,
        {
          useRecoilState: Yi,
          useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Zi,
          useRecoilStateLoadable: Xi,
          useRecoilValue: Ji,
          useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: eu,
          useRecoilValueLoadable: tu,
          useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: nu,
          useResetRecoilState: ru,
          useSetRecoilState: ou,
        } = Go,
        { useGotoRecoilSnapshot: au, useRecoilSnapshot: lu, useRecoilTransactionObserver: iu } = va,
        { useRecoilCallback: uu } = Za,
        { noWait: su, waitForAll: cu, waitForAllSettled: du, waitForAny: fu, waitForNone: pu } = ji;
      var hu = {
          DefaultValue: Hi,
          isRecoilValue: Qi,
          RecoilLoadable: Wi,
          RecoilEnv: Oe,
          RecoilRoot: $i,
          useRecoilStoreID: Ki,
          useRecoilBridgeAcrossReactRoots_UNSTABLE: Ea,
          atom: yi,
          selector: Yl,
          atomFamily: Ti,
          selectorFamily: xi,
          constSelector: Li,
          errorSelector: Pi,
          readOnlySelector: Mi,
          noWait: su,
          waitForNone: pu,
          waitForAny: fu,
          waitForAll: cu,
          waitForAllSettled: du,
          useRecoilValue: Ji,
          useRecoilValueLoadable: tu,
          useRecoilState: Yi,
          useRecoilStateLoadable: Xi,
          useSetRecoilState: ou,
          useResetRecoilState: ru,
          useGetRecoilValueInfo_UNSTABLE: ba,
          useRecoilRefresher_UNSTABLE: tl,
          useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: nu,
          useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: eu,
          useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Zi,
          useRecoilCallback: uu,
          useRecoilTransaction_UNSTABLE: al,
          useGotoRecoilSnapshot: au,
          useRecoilSnapshot: lu,
          useRecoilTransactionObserver_UNSTABLE: iu,
          snapshot_UNSTABLE: Gi,
          useRetain: vo,
          retentionZone: qi,
        },
        mu = hu.RecoilRoot;
      const vu = 'App_main__5VZ13',
        yu = 'style_footer__v4nM3';
      var gu = n(417);
      const bu = () => (0, gu.jsx)('div', { className: yu, children: (0, gu.jsx)('div', {}) }),
        Su = () => (0, gu.jsx)('div', { children: (0, gu.jsx)('h1', { children: 'Not Found' }) }),
        wu = 'style_telephone__GegWU',
        _u = 'style_input__P4g0x',
        ku = 'style_key_pad__kvGl-',
        Eu = 'style_button__gyIOf',
        Tu = n.p + 'static/media/0.80ef7021810a7afc2319.mp3',
        Ru = n.p + 'static/media/1.0cca3a767db87583d049.mp3',
        Cu = n.p + 'static/media/2.2c936ac64c1724122460.mp3',
        xu = n.p + 'static/media/3.85df786f565b70b29c04.mp3',
        Nu = n.p + 'static/media/4.ddcce5b0057fd9aa366a.mp3',
        Lu = n.p + 'static/media/5.b1e1e2bcc7acca815039.mp3',
        Au = n.p + 'static/media/6.7d94f17e3963948a0c26.mp3',
        Pu = n.p + 'static/media/7.9b22b23fc1d1a2ffd182.mp3',
        Mu = n.p + 'static/media/8.1eecba34990c95f94b7d.mp3',
        Ou = n.p + 'static/media/9.8717f0d4f9bf751a8599.mp3',
        zu = n.p + 'static/media/asterisk.9e03442fd26b509bfb46.mp3',
        Du = n.p + 'static/media/sharp.438a410b52695ad9117e.mp3',
        Vu = 'style_cross_button__2OCca',
        Uu = (e) => {
          let { fontSize: t = '24px', width: n = 24, height: r = 24, onClick: o } = e;
          return (0, gu.jsx)('button', {
            className: Vu,
            style: { fontSize: t, width: n, height: r },
            onClick: o,
            children: '\u2715',
          });
        },
        Iu = {
          icon_button: 'style_icon_button__sSp5a',
          green: 'style_green__sHJi6',
          icon: 'style_icon__ndPpH',
        };
      var Fu;
      function Bu() {
        return (
          (Bu = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Bu.apply(this, arguments)
        );
      }
      function ju(e, n) {
        let { title: r, titleId: o, ...a } = e;
        return t.createElement(
          'svg',
          Bu(
            {
              id: '_x32_',
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              x: '0px',
              y: '0px',
              viewBox: '0 0 512 512',
              style: { width: 256, height: 256, opacity: 1 },
              xmlSpace: 'preserve',
              ref: n,
              'aria-labelledby': o,
            },
            a
          ),
          r ? t.createElement('title', { id: o }, r) : null,
          Fu ||
            (Fu = t.createElement(
              'g',
              null,
              t.createElement('path', {
                className: 'st0',
                d: 'M316.212,349.305c-5.985-5.976-15.52-6.48-22.099-1.177l-31.14,25.109c-6.165,4.979-14.999,4.88-21.065-0.234 c0,0-26.548-17.866-55.8-47.118c-29.252-29.235-47.127-55.809-47.127-55.809c-5.105-6.057-5.203-14.891-0.225-21.056l25.1-31.14 c5.312-6.587,4.808-16.113-1.177-22.098l-59.619-59.619c-6.076-6.057-15.772-6.489-22.369-0.971l-74.78,62.81 c-6.003,5.05-7.656,13.579-3.936,20.498c0,0,10.048,20.526,19.394,36.235c25.658,43.173,67.366,94.228,104.509,131.38 c37.16,37.142,88.188,78.859,131.387,104.517c15.709,9.329,36.226,19.403,36.226,19.403c6.902,3.685,15.458,2.04,20.49-3.962 l62.818-74.78c5.518-6.579,5.086-16.285-0.971-22.36L316.212,349.305z',
              }),
              t.createElement('path', {
                className: 'st0',
                d: 'M330.906,269.349l24.821-3.936c-4.196-26.404-16.527-51.881-36.909-72.255 c-20.346-20.346-45.815-32.676-72.236-36.891l-3.945,24.813c21.398,3.451,41.896,13.336,58.414,29.855 C317.578,227.452,327.481,247.96,330.906,269.349z',
              }),
              t.createElement('path', {
                className: 'st0',
                d: 'M430.731,81.272c-44.98-44.97-101.138-72.057-159.472-81.26l-3.9,24.822 c53.318,8.43,104.454,33.09,145.587,74.214c41.124,41.124,65.775,92.295,74.214,145.596l24.84-3.918 C502.779,182.383,475.693,126.242,430.731,81.272z',
              }),
              t.createElement('path', {
                className: 'st0',
                d: 'M258.911,78.054l-3.9,24.849c37.394,5.887,73.26,23.132,102.1,51.971 c28.848,28.847,46.112,64.696,51.98,102.109l24.83-3.918c-6.642-42.409-26.322-83.264-59.017-115.958 C342.192,104.404,301.329,84.732,258.911,78.054z',
              })
            ))
        );
      }
      const Wu = t.forwardRef(ju),
        Hu =
          (n.p,
          (e) => {
            let { icon: n, backgroundColor: r, diameter: o = 80, onClick: a } = e;
            const l = (0, t.useMemo)(() => Wu, [n]);
            return (0, gu.jsx)('button', {
              className: ''.concat(Iu.icon_button, ' ').concat(Iu[r]),
              style: { width: o, height: o },
              onClick: () => {
                a && a();
              },
              children: (0, gu.jsx)(l, { className: Iu.icon }),
            });
          }),
        $u = 'style_number_button__MpVg-',
        Ku = (e) => {
          let { char: t, diameter: n = 80, fontSize: r = 32, onClick: o, sound: a } = e;
          const l = new Audio(a);
          return (0, gu.jsx)('button', {
            className: $u,
            style: { width: n, height: n, fontSize: r },
            onClick: () => {
              o && (l.play(), o(t));
            },
            children: t,
          });
        },
        Qu = [
          { char: '1', sound: Ru },
          { char: '2', sound: Cu },
          { char: '3', sound: xu },
          { char: '4', sound: Nu },
          { char: '5', sound: Lu },
          { char: '6', sound: Au },
          { char: '7', sound: Pu },
          { char: '8', sound: Mu },
          { char: '9', sound: Ou },
          { char: '\uff0a', sound: zu },
          { char: '0', sound: Tu },
          { char: '\uff03', sound: Du },
        ],
        qu = (e) => {
          let { onPushButton: t, onCall: n, onBackspace: r } = e;
          return (0, gu.jsxs)('div', {
            className: ku,
            children: [
              Qu.map((e) => {
                let { char: n, sound: r } = e;
                return (0, gu.jsx)(
                  'div',
                  { className: Eu, children: (0, gu.jsx)(Ku, { char: n, onClick: t, sound: r }) },
                  n
                );
              }),
              (0, gu.jsx)('div', { className: Eu }),
              (0, gu.jsx)('div', {
                className: Eu,
                children: (0, gu.jsx)(Hu, { icon: 'tel', backgroundColor: 'green', onClick: n }),
              }),
              (0, gu.jsx)('div', { className: Eu, children: (0, gu.jsx)(Uu, { onClick: r }) }),
            ],
          });
        },
        Gu = () => {
          const [e, n] = (0, t.useState)('');
          return (0, gu.jsxs)('div', {
            className: wu,
            children: [
              (0, gu.jsx)('div', { className: _u, children: e }),
              (0, gu.jsx)(qu, {
                onPushButton: (e) => n((t) => t + e),
                onCall: () => {},
                onBackspace: () => n((e) => e.slice(0, -1)),
              }),
            ],
          });
        },
        Yu = () => (0, gu.jsx)('div', { children: (0, gu.jsx)(Gu, {}) });
      const Zu = function () {
          return (0, gu.jsxs)('div', {
            className: vu,
            children: [
              (0, gu.jsxs)(ne, {
                children: [
                  (0, gu.jsx)(ee, { path: '/', element: (0, gu.jsx)(Yu, {}) }),
                  (0, gu.jsx)(ee, { path: '*', element: (0, gu.jsx)(Su, {}) }),
                ],
              }),
              (0, gu.jsx)(bu, {}),
            ],
          });
        },
        Xu = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(27)
              .then(n.bind(n, 27))
              .then((t) => {
                let { getCLS: n, getFID: r, getFCP: o, getLCP: a, getTTFB: l } = t;
                n(e), r(e), o(e), a(e), l(e);
              });
        };
      ue
        .createRoot(document.getElementById('root'))
        .render(
          (0, gu.jsx)(mu, {
            children: (0, gu.jsx)(ae, {
              basename: '/baby-toyphone',
              children: (0, gu.jsx)(Zu, {}),
            }),
          })
        ),
        Xu();
    })();
})();
