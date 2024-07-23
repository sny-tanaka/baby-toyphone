/*! For license information please see main.596047b9.js.LICENSE.txt */
(() => {
  var e = {
      534: (e, t, n) => {
        'use strict';
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
        var i = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + 'Capture', t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
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
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
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
        var g = /[\-:]([a-z])/g;
        function y(e) {
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
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(g, y);
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
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for('react.element'),
          k = Symbol.for('react.portal'),
          _ = Symbol.for('react.fragment'),
          R = Symbol.for('react.strict_mode'),
          E = Symbol.for('react.profiler'),
          T = Symbol.for('react.provider'),
          C = Symbol.for('react.context'),
          x = Symbol.for('react.forward_ref'),
          L = Symbol.for('react.suspense'),
          N = Symbol.for('react.suspense_list'),
          A = Symbol.for('react.memo'),
          M = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var P = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var U = Symbol.iterator;
        function O(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (U && e[U]) || e['@@iterator'])
              ? e
              : null;
        }
        var D,
          I = Object.assign;
        function z(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || '';
            }
          return '\n' + D + e;
        }
        var B = !1;
        function V(e, t) {
          if (!e || B) return '';
          B = !0;
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
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var u = '\n' + o[i].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            u.includes('<anonymous>') &&
                            (u = u.replace('<anonymous>', e.displayName)),
                          u
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? z(e) : '';
        }
        function F(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z('Lazy');
            case 13:
              return z('Suspense');
            case 19:
              return z('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = V(e.type, !1));
            case 11:
              return (e = V(e.type.render, !1));
            case 1:
              return (e = V(e.type, !0));
            default:
              return '';
          }
        }
        function j(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case _:
              return 'Fragment';
            case k:
              return 'Portal';
            case E:
              return 'Profiler';
            case R:
              return 'StrictMode';
            case L:
              return 'Suspense';
            case N:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || 'Context') + '.Consumer';
              case T:
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
              case M:
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
              return t === R ? 'StrictMode' : 'Mode';
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
        function q(e) {
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
        function G(e) {
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
        function K(e) {
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
        function Q(e, t) {
          var n = t.checked;
          return I({}, t, {
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
        function X(e, t) {
          null != (t = t.checked) && b(e, 'checked', t, !1);
        }
        function Z(e, t) {
          X(e, t);
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
          ('number' === t && K(e.ownerDocument) === e) ||
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
          return I({}, t, {
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
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
        }
        function le(e) {
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
            ? le(t)
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
        var ge = I(
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
        function ye(e, t) {
          if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
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
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          _e = null,
          Re = null;
        function Ee(e) {
          if ((e = wo(e))) {
            if ('function' !== typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ko(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          _e ? (Re ? Re.push(e) : (Re = [e])) : (_e = e);
        }
        function Ce() {
          if (_e) {
            var e = _e,
              t = Re;
            if (((Re = _e = null), Ee(e), t)) for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function xe(e, t) {
          return e(t);
        }
        function Le() {}
        var Ne = !1;
        function Ae(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return xe(e, t, n);
          } finally {
            (Ne = !1), (null !== _e || null !== Re) && (Le(), Ce());
          }
        }
        function Me(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ko(n);
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
        var Pe = !1;
        if (c)
          try {
            var Ue = {};
            Object.defineProperty(Ue, 'passive', {
              get: function () {
                Pe = !0;
              },
            }),
              window.addEventListener('test', Ue, Ue),
              window.removeEventListener('test', Ue, Ue);
          } catch (ce) {
            Pe = !1;
          }
        function Oe(e, t, n, r, o, a, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Ie = null,
          ze = !1,
          Be = null,
          Ve = {
            onError: function (e) {
              (De = !0), (Ie = e);
            },
          };
        function Fe(e, t, n, r, o, a, i, l, u) {
          (De = !1), (Ie = null), Oe.apply(Ve, arguments);
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
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return He(o), e;
                    if (i === r) return He(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, u = o.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ge = o.unstable_scheduleCallback,
          Ke = o.unstable_cancelCallback,
          Qe = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          Xe = o.unstable_now,
          Ze = o.unstable_getCurrentPriorityLevel,
          Je = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
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
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (r = dt(l)) : 0 !== (a &= i) && (r = dt(a));
          } else 0 !== (i = n & ~o) ? (r = dt(i)) : 0 !== a && (r = dt(a));
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
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
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
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var St,
          kt,
          _t,
          Rt,
          Et,
          Tt = !1,
          Ct = [],
          xt = null,
          Lt = null,
          Nt = null,
          At = new Map(),
          Mt = new Map(),
          Pt = [],
          Ut =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function Ot(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              xt = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Lt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Nt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              At.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Mt.delete(t.pointerId);
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
              null !== t && null !== (t = wo(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function It(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = je(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      _t(n);
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = wo(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Bt(e, t, n) {
          zt(e) && n.delete(t);
        }
        function Vt() {
          (Tt = !1),
            null !== xt && zt(xt) && (xt = null),
            null !== Lt && zt(Lt) && (Lt = null),
            null !== Nt && zt(Nt) && (Nt = null),
            At.forEach(Bt),
            Mt.forEach(Bt);
        }
        function Ft(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt || ((Tt = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, Vt)));
        }
        function jt(e) {
          function t(t) {
            return Ft(t, e);
          }
          if (0 < Ct.length) {
            Ft(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== xt && Ft(xt, e),
              null !== Lt && Ft(Lt, e),
              null !== Nt && Ft(Nt, e),
              At.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < Pt.length;
            n++
          )
            (r = Pt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Pt.length && null === (n = Pt[0]).blockedOn; )
            It(n), null === n.blockedOn && Pt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var o = bt,
            a = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), Gt(e, t, n, r);
          } finally {
            (bt = o), (Wt.transition = a);
          }
        }
        function qt(e, t, n, r) {
          var o = bt,
            a = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), Gt(e, t, n, r);
          } finally {
            (bt = o), (Wt.transition = a);
          }
        }
        function Gt(e, t, n, r) {
          if (Ht) {
            var o = Qt(e, t, n, r);
            if (null === o) Hr(e, t, r, Kt, n), Ot(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case 'focusin':
                    return (xt = Dt(xt, e, t, n, r, o)), !0;
                  case 'dragenter':
                    return (Lt = Dt(Lt, e, t, n, r, o)), !0;
                  case 'mouseover':
                    return (Nt = Dt(Nt, e, t, n, r, o)), !0;
                  case 'pointerover':
                    var a = o.pointerId;
                    return At.set(a, Dt(At.get(a) || null, e, t, n, r, o)), !0;
                  case 'gotpointercapture':
                    return (a = o.pointerId), Mt.set(a, Dt(Mt.get(a) || null, e, t, n, r, o)), !0;
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ot(e, r), 4 & t && -1 < Ut.indexOf(e))) {
              for (; null !== o; ) {
                var a = wo(o);
                if (
                  (null !== a && St(a),
                  null === (a = Qt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Qt(e, t, n, r) {
          if (((Kt = null), null !== (e = bo((e = Se(r))))))
            if (null === (t = je(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
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
              switch (Ze()) {
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
        var Xt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            o = 'value' in Xt ? Xt.value : Xt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
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
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
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
            I(t.prototype, {
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
          dn = I({}, sn, { view: 0, detail: 0 }),
          fn = on(dn),
          pn = I({}, dn, {
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
            getModifierState: En,
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
          mn = on(I({}, pn, { dataTransfer: 0 })),
          vn = on(I({}, dn, { relatedTarget: 0 })),
          gn = on(I({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          yn = I({}, sn, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          }),
          bn = on(yn),
          wn = on(I({}, sn, { data: 0 })),
          Sn = {
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
          kn = {
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
          _n = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
        function Rn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = _n[e]) && !!t[e];
        }
        function En() {
          return Rn;
        }
        var Tn = I({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? kn[e.keyCode] || 'Unidentified'
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
            getModifierState: En,
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
          Cn = on(Tn),
          xn = on(
            I({}, pn, {
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
          Ln = on(
            I({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Nn = on(I({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          An = I({}, pn, {
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
          Mn = on(An),
          Pn = [9, 13, 27, 32],
          Un = c && 'CompositionEvent' in window,
          On = null;
        c && 'documentMode' in document && (On = document.documentMode);
        var Dn = c && 'TextEvent' in window && !On,
          In = c && (!Un || (On && 8 < On && 11 >= On)),
          zn = String.fromCharCode(32),
          Bn = !1;
        function Vn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Pn.indexOf(t.keyCode);
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
        function Fn(e) {
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
          Te(r),
            0 < (t = qr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Gn = null;
        function Kn(e) {
          zr(e, 0);
        }
        function Qn(e) {
          if (G(So(e))) return e;
        }
        function Yn(e, t) {
          if ('change' === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = 'oninput' in document;
            if (!Jn) {
              var er = document.createElement('div');
              er.setAttribute('oninput', 'return;'), (Jn = 'function' === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Xn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent('onpropertychange', nr), (Gn = qn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && Qn(Gn)) {
            var t = [];
            $n(t, Gn, e, Se(e)), Ae(Kn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (Gn = n), (qn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function or(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Qn(Gn);
        }
        function ar(e, t) {
          if ('click' === e) return Qn(t);
        }
        function ir(e, t) {
          if ('input' === e || 'change' === e) return Qn(t);
        }
        var lr =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!d.call(t, o) || !lr(e[o], t[o])) return !1;
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
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
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
                var i = cr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ('function' === typeof n.focus && n.focus(), n = 0; n < t.length; n++)
              ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var mr = c && 'documentMode' in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          br ||
            null == vr ||
            vr !== K(r) ||
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
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = qr(gr, 'onSelect')).length &&
                ((t = new cn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var kr = {
            animationend: Sr('Animation', 'AnimationEnd'),
            animationiteration: Sr('Animation', 'AnimationIteration'),
            animationstart: Sr('Animation', 'AnimationStart'),
            transitionend: Sr('Transition', 'TransitionEnd'),
          },
          _r = {},
          Rr = {};
        function Er(e) {
          if (_r[e]) return _r[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n) if (n.hasOwnProperty(t) && t in Rr) return (_r[e] = n[t]);
          return e;
        }
        c &&
          ((Rr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          'TransitionEvent' in window || delete kr.transitionend.transition);
        var Tr = Er('animationend'),
          Cr = Er('animationiteration'),
          xr = Er('animationstart'),
          Lr = Er('transitionend'),
          Nr = new Map(),
          Ar =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Mr(e, t) {
          Nr.set(e, t), u(t, [e]);
        }
        for (var Pr = 0; Pr < Ar.length; Pr++) {
          var Ur = Ar[Pr];
          Mr(Ur.toLowerCase(), 'on' + (Ur[0].toUpperCase() + Ur.slice(1)));
        }
        Mr(Tr, 'onAnimationEnd'),
          Mr(Cr, 'onAnimationIteration'),
          Mr(xr, 'onAnimationStart'),
          Mr('dblclick', 'onDoubleClick'),
          Mr('focusin', 'onFocus'),
          Mr('focusout', 'onBlur'),
          Mr(Lr, 'onTransitionEnd'),
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
        var Or =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Dr = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Or));
        function Ir(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, u, s) {
              if ((Fe.apply(this, arguments), De)) {
                if (!De) throw Error(a(198));
                var c = Ie;
                (De = !1), (Ie = null), ze || ((ze = !0), (Be = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== a && o.isPropagationStopped())) break e;
                  Ir(o, l, s), (a = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== a && o.isPropagationStopped())
                  )
                    break e;
                  Ir(o, l, s), (a = u);
                }
            }
          }
          if (ze) throw ((e = Be), (ze = !1), (Be = null), e);
        }
        function Br(e, t) {
          var n = t[vo];
          void 0 === n && (n = t[vo] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Vr(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Fr = '_reactListening' + Math.random().toString(36).slice(2);
        function jr(e) {
          if (!e[Fr]) {
            (e[Fr] = !0),
              i.forEach(function (t) {
                'selectionchange' !== t && (Dr.has(t) || Vr(t, !1, e), Vr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Fr] || ((t[Fr] = !0), Vr('selectionchange', !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var o = $t;
              break;
            case 4:
              o = qt;
              break;
            default:
              o = Gt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Pe || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
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
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === o ||
                        (8 === u.nodeType && u.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = bo(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ae(function () {
            var r = a,
              o = Se(n),
              i = [];
            e: {
              var l = Nr.get(e);
              if (void 0 !== l) {
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
                    u = Ln;
                    break;
                  case Tr:
                  case Cr:
                  case xr:
                    u = gn;
                    break;
                  case Lr:
                    u = Nn;
                    break;
                  case 'scroll':
                    u = fn;
                    break;
                  case 'wheel':
                    u = Mn;
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
                  f = c ? (null !== l ? l + 'Capture' : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m), null !== f && null != (m = Me(h, f)) && c.push($r(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length && ((l = new u(l, s, null, n, o)), i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!bo(s) && !s[mo])) &&
                  (u || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                        ? l.defaultView || l.parentWindow
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
                  (d = null == u ? l : So(u)),
                  (p = null == s ? l : So(s)),
                  ((l = new c(m, h + 'leave', u, n, o)).target = d),
                  (l.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((c = new c(f, h + 'enter', s, n, o)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  u && s)
                )
                  e: {
                    for (f = s, h = 0, p = c = u; p; p = Gr(p)) h++;
                    for (p = 0, m = f; m; m = Gr(m)) p++;
                    for (; 0 < h - p; ) (c = Gr(c)), h--;
                    for (; 0 < p - h; ) (f = Gr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Gr(c)), (f = Gr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Kr(i, l, u, c, !1), null !== s && null !== d && Kr(i, d, s, c, !0);
              }
              if (
                'select' === (u = (l = r ? So(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === l.type)
              )
                var v = Yn;
              else if (Hn(l))
                if (Xn) v = ir;
                else {
                  v = or;
                  var g = rr;
                }
              else
                (u = l.nodeName) &&
                  'input' === u.toLowerCase() &&
                  ('checkbox' === l.type || 'radio' === l.type) &&
                  (v = ar);
              switch (
                (v && (v = v(e, r))
                  ? $n(i, v, n, o)
                  : (g && g(e, l, r),
                    'focusout' === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      'number' === l.type &&
                      ee(l, 'number', l.value)),
                (g = r ? So(r) : window),
                e)
              ) {
                case 'focusin':
                  (Hn(g) || 'true' === g.contentEditable) && ((vr = g), (gr = r), (yr = null));
                  break;
                case 'focusout':
                  yr = gr = vr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), wr(i, n, o);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  wr(i, n, o);
              }
              var y;
              if (Un)
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
                  ? Vn(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
              b &&
                (In &&
                  'ko' !== n.locale &&
                  (jn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && jn && (y = en())
                    : ((Zt = 'value' in (Xt = o) ? Xt.value : Xt.textContent), (jn = !0))),
                0 < (g = qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  i.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Fn(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Fn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Bn = !0), zn);
                        case 'textInput':
                          return (e = t.data) === zn && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (jn)
                        return 'compositionend' === e || (!Un && Vn(e, t))
                          ? ((e = en()), (Jt = Zt = Xt = null), (jn = !1), e)
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
                          return In && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, 'onBeforeInput')).length &&
                  ((o = new wn('onBeforeInput', 'beforeinput', null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            zr(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Me(e, n)) && r.unshift($r(e, a, o)),
              null != (a = Me(e, t)) && r.push($r(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Gr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              o
                ? null != (u = Me(n, a)) && i.unshift($r(n, u, l))
                : o || (null != (u = Me(n, a)) && i.push($r(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Qr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ('string' === typeof e ? e : '' + e).replace(Qr, '\n').replace(Yr, '');
        }
        function Zr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(a(425));
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
          io =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof ao
                ? function (e) {
                    return ao.resolve(null).then(e).catch(lo);
                  }
                : ro;
        function lo(e) {
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
          go = '__reactListeners$' + fo,
          yo = '__reactHandles$' + fo;
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
        function wo(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function So(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ko(e) {
          return e[ho] || null;
        }
        var _o = [],
          Ro = -1;
        function Eo(e) {
          return { current: e };
        }
        function To(e) {
          0 > Ro || ((e.current = _o[Ro]), (_o[Ro] = null), Ro--);
        }
        function Co(e, t) {
          Ro++, (_o[Ro] = e.current), (e.current = t);
        }
        var xo = {},
          Lo = Eo(xo),
          No = Eo(!1),
          Ao = xo;
        function Mo(e, t) {
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
        function Po(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Uo() {
          To(No), To(Lo);
        }
        function Oo(e, t, n) {
          if (Lo.current !== xo) throw Error(a(168));
          Co(Lo, t), Co(No, n);
        }
        function Do(e, t, n) {
          var r = e.stateNode;
          if (((t = t.childContextTypes), 'function' !== typeof r.getChildContext)) return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, W(e) || 'Unknown', o));
          return I({}, n, r);
        }
        function Io(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xo),
            (Ao = Lo.current),
            Co(Lo, e),
            Co(No, No.current),
            !0
          );
        }
        function zo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Do(e, t, Ao)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              To(No),
              To(Lo),
              Co(Lo, e))
            : To(No),
            Co(No, n);
        }
        var Bo = null,
          Vo = !1,
          Fo = !1;
        function jo(e) {
          null === Bo ? (Bo = [e]) : Bo.push(e);
        }
        function Wo() {
          if (!Fo && null !== Bo) {
            Fo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Bo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Bo = null), (Vo = !1);
            } catch (o) {
              throw (null !== Bo && (Bo = Bo.slice(e + 1)), Ge(Je, Wo), o);
            } finally {
              (bt = t), (Fo = !1);
            }
          }
          return null;
        }
        var Ho = [],
          $o = 0,
          qo = null,
          Go = 0,
          Ko = [],
          Qo = 0,
          Yo = null,
          Xo = 1,
          Zo = '';
        function Jo(e, t) {
          (Ho[$o++] = Go), (Ho[$o++] = qo), (qo = e), (Go = t);
        }
        function ea(e, t, n) {
          (Ko[Qo++] = Xo), (Ko[Qo++] = Zo), (Ko[Qo++] = Yo), (Yo = e);
          var r = Xo;
          e = Zo;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Xo = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Zo = a + e);
          } else (Xo = (1 << a) | (n << o) | r), (Zo = e);
        }
        function ta(e) {
          null !== e.return && (Jo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === qo; ) (qo = Ho[--$o]), (Ho[$o] = null), (Go = Ho[--$o]), (Ho[$o] = null);
          for (; e === Yo; )
            (Yo = Ko[--Qo]),
              (Ko[Qo] = null),
              (Zo = Ko[--Qo]),
              (Ko[Qo] = null),
              (Xo = Ko[--Qo]),
              (Ko[Qo] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function la(e, t) {
          var n = Ms(5, null, null, 0);
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
                ((n = null !== Yo ? { id: Xo, overflow: Zo } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Ms(18, null, null, 0)).stateNode = t),
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
                t && ua(e, t) ? la(r, n) : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
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
            for (; t; ) la(e, t), (t = so(t.nextSibling));
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
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var va = w.ReactCurrentBatchConfig;
        function ga(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ya = Eo(null),
          ba = null,
          wa = null,
          Sa = null;
        function ka() {
          Sa = wa = ba = null;
        }
        function _a(e) {
          var t = ya.current;
          To(ya), (e._currentValue = t);
        }
        function Ra(e, t, n) {
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
        function Ea(e, t) {
          (ba = e),
            (Sa = wa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Ta(e) {
          var t = e._currentValue;
          if (Sa !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === wa)) {
              if (null === ba) throw Error(a(308));
              (wa = e), (ba.dependencies = { lanes: 0, firstContext: e });
            } else wa = wa.next = e;
          return t;
        }
        var Ca = null;
        function xa(e) {
          null === Ca ? (Ca = [e]) : Ca.push(e);
        }
        function La(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o ? ((n.next = n), xa(t)) : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Na(e, r)
          );
        }
        function Na(e, t) {
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
        function Ma(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Pa(e, t) {
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
        function Ua(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function Oa(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Lu))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Na(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), xa(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Na(e, n)
          );
        }
        function Da(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ia(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
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
        function za(e, t, n, r) {
          var o = e.updateQueue;
          Aa = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === i ? (a = s) : (i.next = s), (i = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s), (c.lastBaseUpdate = u));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = s = u = null, l = a; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
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
                      d = I({}, d, f);
                      break e;
                    case 2:
                      Aa = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64), null === (f = o.effects) ? (o.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (f = l).next),
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
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Iu |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Ba(e, t, n) {
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
        var Va = new r.Component().refs;
        function Fa(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : I({}, t, n)),
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
              a = Ua(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Oa(e, a, o)) && (rs(t, e, o, r), Da(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              o = ns(e),
              a = Ua(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Oa(e, a, o)) && (rs(t, e, o, r), Da(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              o = Ua(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Oa(e, o, r)) && (rs(t, e, r, n), Da(t, e, r));
          },
        };
        function Wa(e, t, n, r, o, a, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype || !t.prototype.isPureReactComponent || !ur(n, r) || !ur(o, a);
        }
        function Ha(e, t, n) {
          var r = !1,
            o = xo,
            a = t.contextType;
          return (
            'object' === typeof a && null !== a
              ? (a = Ta(a))
              : ((o = Po(t) ? Ao : Lo.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Mo(e, o) : xo)),
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
        function qa(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Va), Ma(e);
          var a = t.contextType;
          'object' === typeof a && null !== a
            ? (o.context = Ta(a))
            : ((a = Po(t) ? Ao : Lo.current), (o.context = Mo(e, a))),
            (o.state = e.memoizedState),
            'function' === typeof (a = t.getDerivedStateFromProps) &&
              (Fa(e, t, a, n), (o.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof o.getSnapshotBeforeUpdate ||
              ('function' !== typeof o.UNSAFE_componentWillMount &&
                'function' !== typeof o.componentWillMount) ||
              ((t = o.state),
              'function' === typeof o.componentWillMount && o.componentWillMount(),
              'function' === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
              t !== o.state && ja.enqueueReplaceState(o, o.state, null),
              za(e, n, o, r),
              (o.state = e.memoizedState)),
            'function' === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Ga(e, t, n) {
          if (null !== (e = n.ref) && 'function' !== typeof e && 'object' !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Va && (t = o.refs = {}), null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ('string' !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Ka(e, t) {
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
        function Qa(e) {
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
            return ((e = Us(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
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
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = zs(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var a = n.type;
            return a === _
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === a ||
                    ('object' === typeof a && null !== a && a.$$typeof === M && Qa(a) === t.type))
                ? (((r = o(t, n.props)).ref = Ga(e, t, n)), (r.return = e), r)
                : (((r = Os(n.type, n.key, n.props, null, e.mode, r)).ref = Ga(e, t, n)),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bs(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Ds(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = zs('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Os(t.type, t.key, t.props, null, e.mode, n)).ref = Ga(e, null, t)),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Bs(t, e.mode, n)).return = e), t;
                case M:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || O(t)) return ((t = Ds(t, e.mode, n, null)).return = e), t;
              Ka(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== o ? null : u(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === o ? s(e, t, n, r) : null;
                case k:
                  return n.key === o ? c(e, t, n, r) : null;
                case M:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || O(n)) return null !== o ? null : d(e, t, n, r, null);
              Ka(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return u(t, (e = e.get(n) || null), '' + r, o);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case k:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
                case M:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || O(r)) return d(t, (e = e.get(n) || null), r, o, null);
              Ka(t, r);
            }
            return null;
          }
          function m(o, a, l, u) {
            for (
              var s = null, c = null, d = a, m = (a = 0), v = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(o, d, l[m], u);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(o, d),
                (a = i(g, a, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (d = v);
            }
            if (m === l.length) return n(o, d), aa && Jo(o, m), s;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = f(o, l[m], u)) &&
                  ((a = i(d, a, m)), null === c ? (s = d) : (c.sibling = d), (c = d));
              return aa && Jo(o, m), s;
            }
            for (d = r(o, d); m < l.length; m++)
              null !== (v = h(d, o, m, l[m], u)) &&
                (e && null !== v.alternate && d.delete(null === v.key ? m : v.key),
                (a = i(v, a, m)),
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
          function v(o, l, u, s) {
            var c = O(u);
            if ('function' !== typeof c) throw Error(a(150));
            if (null == (u = c.call(u))) throw Error(a(151));
            for (
              var d = (c = null), m = l, v = (l = 0), g = null, y = u.next();
              null !== m && !y.done;
              v++, y = u.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(o, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (l = i(b, l, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = g);
            }
            if (y.done) return n(o, m), aa && Jo(o, v), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next())
                null !== (y = f(o, y.value, s)) &&
                  ((l = i(y, l, v)), null === d ? (c = y) : (d.sibling = y), (d = y));
              return aa && Jo(o, v), c;
            }
            for (m = r(o, m); !y.done; v++, y = u.next())
              null !== (y = h(m, o, v, y.value, s)) &&
                (e && null !== y.alternate && m.delete(null === y.key ? v : y.key),
                (l = i(y, l, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Jo(o, v),
              c
            );
          }
          return function e(r, a, i, u) {
            if (
              ('object' === typeof i &&
                null !== i &&
                i.type === _ &&
                null === i.key &&
                (i = i.props.children),
              'object' === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case S:
                  e: {
                    for (var s = i.key, c = a; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === _) {
                          if (7 === c.tag) {
                            n(r, c.sibling), ((a = o(c, i.props.children)).return = r), (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ('object' === typeof s &&
                            null !== s &&
                            s.$$typeof === M &&
                            Qa(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = Ga(r, c, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === _
                      ? (((a = Ds(i.props.children, r.mode, u, i.key)).return = r), (r = a))
                      : (((u = Os(i.type, i.key, i.props, null, r.mode, u)).ref = Ga(r, a, i)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling), ((a = o(a, i.children || [])).return = r), (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Bs(i, r.mode, u)).return = r), (r = a);
                  }
                  return l(r);
                case M:
                  return e(r, a, (c = i._init)(i._payload), u);
              }
              if (te(i)) return m(r, a, i, u);
              if (O(i)) return v(r, a, i, u);
              Ka(r, i);
            }
            return ('string' === typeof i && '' !== i) || 'number' === typeof i
              ? ((i = '' + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = zs(i, r.mode, u)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Xa = Ya(!0),
          Za = Ya(!1),
          Ja = {},
          ei = Eo(Ja),
          ti = Eo(Ja),
          ni = Eo(Ja);
        function ri(e) {
          if (e === Ja) throw Error(a(174));
          return e;
        }
        function oi(e, t) {
          switch ((Co(ni, t), Co(ti, e), Co(ei, Ja), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, '');
              break;
            default:
              t = ue((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          To(ei), Co(ei, t);
        }
        function ai() {
          To(ei), To(ti), To(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (Co(ti, e), Co(ei, n));
        }
        function li(e) {
          ti.current === e && (To(ei), To(ti));
        }
        var ui = Eo(0);
        function si(e) {
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
        var ci = [];
        function di() {
          for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var fi = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          vi = null,
          gi = null,
          yi = !1,
          bi = !1,
          wi = 0,
          Si = 0;
        function ki() {
          throw Error(a(321));
        }
        function _i(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ri(e, t, n, r, o, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, o)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(a(301));
              (i += 1), (gi = vi = null), (t.updateQueue = null), (fi.current = sl), (e = n(r, o));
            } while (bi);
          }
          if (
            ((fi.current = il),
            (t = null !== vi && null !== vi.next),
            (hi = 0),
            (gi = vi = mi = null),
            (yi = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Ei() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ti() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e), gi;
        }
        function Ci() {
          if (null === vi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vi.next;
          var t = null === gi ? mi.memoizedState : gi.next;
          if (null !== t) (gi = t), (vi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (vi = e).memoizedState,
              baseState: vi.baseState,
              baseQueue: vi.baseQueue,
              queue: vi.queue,
              next: null,
            }),
              null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function xi(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function Li(e) {
          var t = Ci(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = vi,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = i;
            do {
              var d = c.lane;
              if ((hi & d) === d)
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
                null === s ? ((u = s = f), (l = r)) : (s = s.next = f), (mi.lanes |= d), (Iu |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (mi.lanes |= i), (Iu |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ni(e) {
          var t = Ci(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ai() {}
        function Mi(e, t) {
          var n = mi,
            r = Ci(),
            o = t(),
            i = !lr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (wl = !0)),
            (r = r.queue),
            Hi(Oi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || i || (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (((n.flags |= 2048), Bi(9, Ui.bind(null, n, r, o, t), void 0, null), null === Nu))
              throw Error(a(349));
            0 !== (30 & hi) || Pi(n, t, o);
          }
          return o;
        }
        function Pi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (mi.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Ui(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Di(t) && Ii(e);
        }
        function Oi(e, t, n) {
          return n(function () {
            Di(t) && Ii(e);
          });
        }
        function Di(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ii(e) {
          var t = Na(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function zi(e) {
          var t = Ti();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Bi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Vi() {
          return Ci().memoizedState;
        }
        function Fi(e, t, n, r) {
          var o = Ti();
          (mi.flags |= e), (o.memoizedState = Bi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function ji(e, t, n, r) {
          var o = Ci();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== vi) {
            var i = vi.memoizedState;
            if (((a = i.destroy), null !== r && _i(r, i.deps)))
              return void (o.memoizedState = Bi(t, n, a, r));
          }
          (mi.flags |= e), (o.memoizedState = Bi(1 | t, n, a, r));
        }
        function Wi(e, t) {
          return Fi(8390656, 8, e, t);
        }
        function Hi(e, t) {
          return ji(2048, 8, e, t);
        }
        function $i(e, t) {
          return ji(4, 2, e, t);
        }
        function qi(e, t) {
          return ji(4, 4, e, t);
        }
        function Gi(e, t) {
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
        function Ki(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            ji(4, 4, Gi.bind(null, t, e), n)
          );
        }
        function Qi() {}
        function Yi(e, t) {
          var n = Ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _i(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = Ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _i(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)), (e.memoizedState = n))
            : (lr(n, t) || ((n = mt()), (mi.lanes |= n), (Iu |= n), (e.baseState = !0)), t);
        }
        function Ji(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Ci().memoizedState;
        }
        function tl(e, t, n) {
          var r = ns(e);
          if (
            ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), rl(e))
          )
            ol(t, n);
          else if (null !== (n = La(e, t, n, r))) {
            rs(n, e, r, ts()), al(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ns(e),
            o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (rl(e)) ol(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, i))) {
                  var u = t.interleaved;
                  return (
                    null === u ? ((o.next = o), xa(t)) : ((o.next = u.next), (u.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (s) {}
            null !== (n = La(e, t, o, r)) && (rs(n, e, r, (o = ts())), al(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function ol(e, t) {
          bi = yi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function al(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var il = {
            readContext: Ta,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ta,
            useCallback: function (e, t) {
              return (Ti().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ta,
            useEffect: Wi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Fi(4194308, 4, Gi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Fi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Fi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ti();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = Ti();
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
                (e = e.dispatch = tl.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ti().memoizedState = e);
            },
            useState: zi,
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return (Ti().memoizedState = e);
            },
            useTransition: function () {
              var e = zi(!1),
                t = e[0];
              return (e = Ji.bind(null, e[1])), (Ti().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                o = Ti();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Nu)) throw Error(a(349));
                0 !== (30 & hi) || Pi(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Wi(Oi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Bi(9, Ui.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ti(),
                t = Nu.identifierPrefix;
              if (aa) {
                var n = Zo;
                (t = ':' + t + 'R' + (n = (Xo & ~(1 << (32 - it(Xo) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = Si++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ta,
            useCallback: Yi,
            useContext: Ta,
            useEffect: Hi,
            useImperativeHandle: Ki,
            useInsertionEffect: $i,
            useLayoutEffect: qi,
            useMemo: Xi,
            useReducer: Li,
            useRef: Vi,
            useState: function () {
              return Li(xi);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return Zi(Ci(), vi.memoizedState, e);
            },
            useTransition: function () {
              return [Li(xi)[0], Ci().memoizedState];
            },
            useMutableSource: Ai,
            useSyncExternalStore: Mi,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ta,
            useCallback: Yi,
            useContext: Ta,
            useEffect: Hi,
            useImperativeHandle: Ki,
            useInsertionEffect: $i,
            useLayoutEffect: qi,
            useMemo: Xi,
            useReducer: Ni,
            useRef: Vi,
            useState: function () {
              return Ni(xi);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              var t = Ci();
              return null === vi ? (t.memoizedState = e) : Zi(t, vi.memoizedState, e);
            },
            useTransition: function () {
              return [Ni(xi)[0], Ci().memoizedState];
            },
            useMutableSource: Ai,
            useSyncExternalStore: Mi,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += F(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = '\nError generating stack: ' + a.message + '\n' + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = 'function' === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Ua(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $u || (($u = !0), (qu = r)), fl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Ua(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              'function' === typeof a.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  'function' !== typeof r && (null === Gu ? (Gu = new Set([this])) : Gu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
              }),
            n
          );
        }
        function vl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Ts.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
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
        function yl(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ua(-1, 1)).tag = 2), Oa(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function Sl(e, t, n, r) {
          t.child = null === e ? Za(t, null, n, r) : Xa(t, e.child, n, r);
        }
        function kl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ea(t, o),
            (r = Ri(e, t, n, r, a, o)),
            (n = Ei()),
            null === e || wl
              ? (aa && n && ta(t), (t.flags |= 1), Sl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), $l(e, t, o))
          );
        }
        function _l(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return 'function' !== typeof a ||
              Ps(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Os(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Rl(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref)
              return $l(e, t, o);
          }
          return (t.flags |= 1), ((e = Us(a, r)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function Rl(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (ur(a, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), $l(e, t, o);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Cl(e, t, n, r, o);
        }
        function El(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                Co(Uu, Pu),
                (Pu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  Co(Uu, Pu),
                  (Pu |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== a ? a.baseLanes : n),
                Co(Uu, Pu),
                (Pu |= r);
            }
          else
            null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
              Co(Uu, Pu),
              (Pu |= r);
          return Sl(e, t, o, n), t.child;
        }
        function Tl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cl(e, t, n, r, o) {
          var a = Po(n) ? Ao : Lo.current;
          return (
            (a = Mo(t, a)),
            Ea(t, o),
            (n = Ri(e, t, n, r, a, o)),
            (r = Ei()),
            null === e || wl
              ? (aa && r && ta(t), (t.flags |= 1), Sl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), $l(e, t, o))
          );
        }
        function xl(e, t, n, r, o) {
          if (Po(n)) {
            var a = !0;
            Io(t);
          } else a = !1;
          if ((Ea(t, o), null === t.stateNode)) Hl(e, t), Ha(t, n, r), qa(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            'object' === typeof s && null !== s
              ? (s = Ta(s))
              : (s = Mo(t, (s = Po(n) ? Ao : Lo.current)));
            var c = n.getDerivedStateFromProps,
              d = 'function' === typeof c || 'function' === typeof i.getSnapshotBeforeUpdate;
            d ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && $a(t, i, r, s)),
              (Aa = !1);
            var f = t.memoizedState;
            (i.state = f),
              za(t, r, i, o),
              (u = t.memoizedState),
              l !== r || f !== u || No.current || Aa
                ? ('function' === typeof c && (Fa(t, n, c, r), (u = t.memoizedState)),
                  (l = Aa || Wa(t, n, l, r, f, u, s))
                    ? (d ||
                        ('function' !== typeof i.UNSAFE_componentWillMount &&
                          'function' !== typeof i.componentWillMount) ||
                        ('function' === typeof i.componentWillMount && i.componentWillMount(),
                        'function' === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      'function' === typeof i.componentDidMount && (t.flags |= 4194308))
                    : ('function' === typeof i.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = l))
                : ('function' === typeof i.componentDidMount && (t.flags |= 4194308), (r = !1));
          } else {
            (i = t.stateNode),
              Pa(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : ga(t.type, l)),
              (i.props = s),
              (d = t.pendingProps),
              (f = i.context),
              'object' === typeof (u = n.contextType) && null !== u
                ? (u = Ta(u))
                : (u = Mo(t, (u = Po(n) ? Ao : Lo.current)));
            var p = n.getDerivedStateFromProps;
            (c = 'function' === typeof p || 'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== d || f !== u) && $a(t, i, r, u)),
              (Aa = !1),
              (f = t.memoizedState),
              (i.state = f),
              za(t, r, i, o);
            var h = t.memoizedState;
            l !== d || f !== h || No.current || Aa
              ? ('function' === typeof p && (Fa(t, n, p, r), (h = t.memoizedState)),
                (s = Aa || Wa(t, n, s, r, f, h, u) || !1)
                  ? (c ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    'function' === typeof i.componentDidUpdate && (t.flags |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = s))
              : ('function' !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ll(e, t, n, r, a, o);
        }
        function Ll(e, t, n, r, o, a) {
          Tl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && zo(t, n, !1), $l(e, t, a);
          (r = t.stateNode), (bl.current = t);
          var l = i && 'function' !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xa(t, e.child, null, a)), (t.child = Xa(t, null, l, a)))
              : Sl(e, t, l, a),
            (t.memoizedState = r.state),
            o && zo(t, n, !0),
            t.child
          );
        }
        function Nl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Oo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Oo(0, t.context, !1),
            oi(e, t.containerInfo);
        }
        function Al(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), Sl(e, t, n, r), t.child;
        }
        var Ml,
          Pl,
          Ul,
          Ol,
          Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Il(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function zl(e, t, n) {
          var r,
            o = t.pendingProps,
            i = ui.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Co(ui, 1 & i),
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
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (u = { mode: 'hidden', children: u }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = Is(u, o, 0, null)),
                      (e = Ds(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Il(n)),
                      (t.memoizedState = Dl),
                      e)
                    : Bl(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Vl(e, t, l, (r = dl(Error(a(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (o = t.mode),
                      (r = Is({ mode: 'visible', children: r.children }, o, 0, null)),
                      ((i = Ds(i, o, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && Xa(t, e.child, null, l),
                      (t.child.memoizedState = Il(l)),
                      (t.memoizedState = Dl),
                      i);
              if (0 === (1 & t.mode)) return Vl(e, t, l, null);
              if ('$!' === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset)) var u = r.dgst;
                return (r = u), Vl(e, t, l, (r = dl((i = Error(a(419))), r, void 0)));
              }
              if (((u = 0 !== (l & e.childLanes)), wl || u)) {
                if (null !== (r = Nu)) {
                  switch (l & -l) {
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
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Na(e, o), rs(r, e, o, -1));
                }
                return vs(), Vl(e, t, l, (r = dl(Error(a(421)))));
              }
              return '$?' === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = xs.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = so(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Ko[Qo++] = Xo),
                    (Ko[Qo++] = Zo),
                    (Ko[Qo++] = Yo),
                    (Xo = e.id),
                    (Zo = e.overflow),
                    (Yo = t)),
                  (t = Bl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, o, r, i, n);
          if (l) {
            (l = o.fallback), (u = t.mode), (r = (i = e.child).sibling);
            var s = { mode: 'hidden', children: o.children };
            return (
              0 === (1 & u) && t.child !== i
                ? (((o = t.child).childLanes = 0), (o.pendingProps = s), (t.deletions = null))
                : ((o = Us(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r ? (l = Us(r, l)) : ((l = Ds(l, u, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Il(n)
                  : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Dl),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = Us(l, { mode: 'visible', children: o.children })),
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
        function Bl(e, t) {
          return (
            ((t = Is({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t)
          );
        }
        function Vl(e, t, n, r) {
          return (
            null !== r && ma(r),
            Xa(t, e.child, null, n),
            ((e = Bl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Fl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ra(e.return, t, n);
        }
        function jl(e, t, n, r, o) {
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
        function Wl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((Sl(e, t, r.children, n), 0 !== (2 & (r = ui.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Fl(e, n, t);
                else if (19 === e.tag) Fl(e, n, t);
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
          if ((Co(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case 'forwards':
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (o = n), (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  jl(t, !1, o, n, a);
                break;
              case 'backwards':
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === si(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                jl(t, !0, n, null, a);
                break;
              case 'together':
                jl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Iu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Us((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling), ((n = n.sibling = Us(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function ql(e, t) {
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
        function Gl(e) {
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
        function Kl(e, t, n) {
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
              return Gl(t), null;
            case 1:
            case 17:
              return Po(t.type) && Uo(), Gl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                To(No),
                To(Lo),
                di(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== ia && (ls(ia), (ia = null)))),
                Pl(e, t),
                Gl(t),
                null
              );
            case 5:
              li(t);
              var o = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ul(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Gl(t), null;
                }
                if (((e = ri(ei.current)), fa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (((r[po] = t), (r[ho] = i), (e = 0 !== (1 & t.mode)), n)) {
                    case 'dialog':
                      Br('cancel', r), Br('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Br('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (o = 0; o < Or.length; o++) Br(Or[o], r);
                      break;
                    case 'source':
                      Br('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Br('error', r), Br('load', r);
                      break;
                    case 'details':
                      Br('toggle', r);
                      break;
                    case 'input':
                      Y(r, i), Br('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!i.multiple }), Br('invalid', r);
                      break;
                    case 'textarea':
                      oe(r, i), Br('invalid', r);
                  }
                  for (var u in (ye(n, i), (o = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      'children' === u
                        ? 'string' === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning && Zr(r.textContent, s, e),
                            (o = ['children', s]))
                          : 'number' === typeof s &&
                            r.textContent !== '' + s &&
                            (!0 !== i.suppressHydrationWarning && Zr(r.textContent, s, e),
                            (o = ['children', '' + s]))
                        : l.hasOwnProperty(u) && null != s && 'onScroll' === u && Br('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      q(r), J(r, i, !0);
                      break;
                    case 'textarea':
                      q(r), ie(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === o.nodeType ? o : o.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = le(n)),
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
                    Ml(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case 'dialog':
                        Br('cancel', e), Br('close', e), (o = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Br('load', e), (o = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (o = 0; o < Or.length; o++) Br(Or[o], e);
                        o = r;
                        break;
                      case 'source':
                        Br('error', e), (o = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Br('error', e), Br('load', e), (o = r);
                        break;
                      case 'details':
                        Br('toggle', e), (o = r);
                        break;
                      case 'input':
                        Y(e, r), (o = Q(e, r)), Br('invalid', e);
                        break;
                      case 'option':
                      default:
                        o = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = I({}, r, { value: void 0 })),
                          Br('invalid', e);
                        break;
                      case 'textarea':
                        oe(e, r), (o = re(e, r)), Br('invalid', e);
                    }
                    for (i in (ye(n, o), (s = o)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        'style' === i
                          ? ve(e, c)
                          : 'dangerouslySetInnerHTML' === i
                            ? null != (c = c ? c.__html : void 0) && de(e, c)
                            : 'children' === i
                              ? 'string' === typeof c
                                ? ('textarea' !== n || '' !== c) && fe(e, c)
                                : 'number' === typeof c && fe(e, '' + c)
                              : 'suppressContentEditableWarning' !== i &&
                                'suppressHydrationWarning' !== i &&
                                'autoFocus' !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != c && 'onScroll' === i && Br('scroll', e)
                                  : null != c && b(e, i, c, u));
                      }
                    switch (n) {
                      case 'input':
                        q(e), J(e, r, !1);
                        break;
                      case 'textarea':
                        q(e), ie(e);
                        break;
                      case 'option':
                        null != r.value && e.setAttribute('value', '' + H(r.value));
                        break;
                      case 'select':
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
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
              return Gl(t), null;
            case 6:
              if (e && null != t.stateNode) Ol(e, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode) throw Error(a(166));
                if (((n = ri(ni.current)), ri(ei.current), fa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t),
                    (t.stateNode = r);
              }
              return Gl(t), null;
            case 13:
              if (
                (To(ui),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (aa && null !== oa && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                      throw Error(a(317));
                    i[po] = t;
                  } else ha(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  Gl(t), (i = !1);
                } else null !== ia && (ls(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ui.current) ? 0 === Ou && (Ou = 3) : vs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Gl(t),
                  null);
            case 4:
              return ai(), Pl(e, t), null === e && jr(t.stateNode.containerInfo), Gl(t), null;
            case 10:
              return _a(t.type._context), Gl(t), null;
            case 19:
              if ((To(ui), null === (i = t.memoizedState))) return Gl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) ql(i, !1);
                else {
                  if (0 !== Ou || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = si(e))) {
                        for (
                          t.flags |= 128,
                            ql(i, !1),
                            null !== (r = u.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return Co(ui, (1 & ui.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Wu &&
                    ((t.flags |= 128), (r = !0), ql(i, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      ql(i, !0),
                      null === i.tail && 'hidden' === i.tailMode && !u.alternate && !aa)
                    )
                      return Gl(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Wu &&
                      1073741824 !== n &&
                      ((t.flags |= 128), (r = !0), ql(i, !1), (t.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u), (i.last = u));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ui.current),
                  Co(ui, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Gl(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Pu) && (Gl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Gl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Ql(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                Po(t.type) && Uo(),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 3:
              return (
                ai(),
                To(No),
                To(Lo),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if ((To(ui), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return To(ui), null;
            case 4:
              return ai(), null;
            case 10:
              return _a(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (Ml = function (e, t) {
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
          (Pl = function () {}),
          (Ul = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ri(ei.current);
              var a,
                i = null;
              switch (n) {
                case 'input':
                  (o = Q(e, o)), (r = Q(e, r)), (i = []);
                  break;
                case 'select':
                  (o = I({}, o, { value: void 0 })), (r = I({}, r, { value: void 0 })), (i = []);
                  break;
                case 'textarea':
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  'function' !== typeof o.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), o))
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
                      (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
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
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (i = i || []).push(c, s))
                      : 'children' === c
                        ? ('string' !== typeof s && 'number' !== typeof s) ||
                          (i = i || []).push(c, '' + s)
                        : 'suppressContentEditableWarning' !== c &&
                          'suppressHydrationWarning' !== c &&
                          (l.hasOwnProperty(c)
                            ? (null != s && 'onScroll' === c && Br('scroll', e),
                              i || u === s || (i = []))
                            : (i = i || []).push(c, s));
              }
              n && (i = i || []).push('style', n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ol = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yl = !1,
          Xl = !1,
          Zl = 'function' === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (r) {
                Es(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            Es(e, t, r);
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
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po], delete t[ho], delete t[vo], delete t[go], delete t[yo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lu(e.return)) return null;
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
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Xl || eu(n, t);
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
              if (!Xl && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i && (0 !== (2 & a) || 0 !== (4 & a)) && tu(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (!Xl && (eu(n, t), 'function' === typeof (r = n.stateNode).componentWillUnmount))
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Es(n, t, l);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xl = (r = Xl) || null !== n.memoizedState), pu(e, t, n), (Xl = r))
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
            null === n && (n = e.stateNode = new Zl()),
              t.forEach(function (t) {
                var r = Ls.bind(null, e, t);
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
                var i = e,
                  l = t,
                  u = l;
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
                hu(i, l, o), (du = null), (fu = !1);
                var s = o.alternate;
                null !== s && (s.return = null), (o.return = null);
              } catch (c) {
                Es(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) gu(t, e), (t = t.sibling);
        }
        function gu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(t, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), ou(3, e);
                } catch (v) {
                  Es(e, e.return, v);
                }
                try {
                  ru(5, e, e.return);
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              break;
            case 1:
              vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if ((vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags)) {
                var o = e.stateNode;
                try {
                  fe(o, '');
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    'input' === u && 'radio' === i.type && null != i.name && X(o, i), be(u, l);
                    var c = be(u, i);
                    for (l = 0; l < s.length; l += 2) {
                      var d = s[l],
                        f = s[l + 1];
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
                        Z(o, i);
                        break;
                      case 'textarea':
                        ae(o, i);
                        break;
                      case 'select':
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : '', !1));
                    }
                    o[ho] = i;
                  } catch (v) {
                    Es(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (v) {
                  Es(e, e.return, v);
                }
              }
              break;
            case 3:
              if ((vu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  jt(t.containerInfo);
                } catch (v) {
                  Es(e, e.return, v);
                }
              break;
            case 4:
            default:
              vu(t, e), yu(e);
              break;
            case 13:
              vu(t, e),
                yu(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate && null !== o.alternate.memoizedState) ||
                    (ju = Xe())),
                4 & r && mu(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode ? ((Xl = (c = Xl) || d), vu(t, e), (Xl = c)) : vu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Jl = e, d = e.child; null !== d; ) {
                    for (f = Jl = d; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
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
                              Es(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : ku(f);
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
                            ? 'function' === typeof (i = o.style).setProperty
                              ? i.setProperty('display', 'none', 'important')
                              : (i.display = 'none')
                            : ((u = f.stateNode),
                              (l =
                                void 0 !== (s = f.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty('display')
                                  ? s.display
                                  : null),
                              (u.style.display = me('display', l)));
                      } catch (v) {
                        Es(e, e.return, v);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? '' : f.memoizedProps;
                      } catch (v) {
                        Es(e, e.return, v);
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
              vu(t, e), yu(e), 4 & r && mu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lu(n)) {
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
                  var i = r.stateNode.containerInfo;
                  su(e, uu(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Es(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Jl = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var o = Jl,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Yl;
              if (!i) {
                var l = o.alternate,
                  u = (null !== l && null !== l.memoizedState) || Xl;
                l = Yl;
                var s = Xl;
                if (((Yl = i), (Xl = u) && !s))
                  for (Jl = o; null !== Jl; )
                    (u = (i = Jl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? _u(o)
                        : null !== u
                          ? ((u.return = i), (Jl = u))
                          : _u(o);
                for (; null !== a; ) (Jl = a), wu(a, t, n), (a = a.sibling);
                (Jl = o), (Yl = l), (Xl = s);
              }
              Su(e);
            } else 0 !== (8772 & o.subtreeFlags) && null !== a ? ((a.return = o), (Jl = a)) : Su(e);
          }
        }
        function Su(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || ou(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ga(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ba(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ba(t, l, n);
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
                Xl || (512 & t.flags && au(t));
              } catch (p) {
                Es(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ku(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function _u(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ou(4, t);
                  } catch (u) {
                    Es(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Es(t, o, u);
                    }
                  }
                  var a = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Es(t, a, u);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    au(t);
                  } catch (u) {
                    Es(t, i, u);
                  }
              }
            } catch (u) {
              Es(t, t.return, u);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var Ru,
          Eu = Math.ceil,
          Tu = w.ReactCurrentDispatcher,
          Cu = w.ReactCurrentOwner,
          xu = w.ReactCurrentBatchConfig,
          Lu = 0,
          Nu = null,
          Au = null,
          Mu = 0,
          Pu = 0,
          Uu = Eo(0),
          Ou = 0,
          Du = null,
          Iu = 0,
          zu = 0,
          Bu = 0,
          Vu = null,
          Fu = null,
          ju = 0,
          Wu = 1 / 0,
          Hu = null,
          $u = !1,
          qu = null,
          Gu = null,
          Ku = !1,
          Qu = null,
          Yu = 0,
          Xu = 0,
          Zu = null,
          Ju = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & Lu) ? Xe() : -1 !== Ju ? Ju : (Ju = Xe());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Lu) && 0 !== Mu
              ? Mu & -Mu
              : null !== va.transition
                ? (0 === es && (es = mt()), es)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Xu) throw ((Xu = 0), (Zu = null), Error(a(185)));
          gt(e, n, r),
            (0 !== (2 & Lu) && e === Nu) ||
              (e === Nu && (0 === (2 & Lu) && (zu |= n), 4 === Ou && us(e, Mu)),
              os(e, r),
              1 === n && 0 === Lu && 0 === (1 & t.mode) && ((Wu = Xe() + 500), Vo && Wo()));
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
              var i = 31 - it(a),
                l = 1 << i,
                u = o[i];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = ft(e, e === Nu ? Mu : 0);
          if (0 === r) null !== n && Ke(n), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Vo = !0), jo(e);
                  })(ss.bind(null, e))
                : jo(ss.bind(null, e)),
                io(function () {
                  0 === (6 & Lu) && Wo();
                }),
                (n = null);
            else {
              switch (wt(r)) {
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
              n = Ns(n, as.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function as(e, t) {
          if (((Ju = -1), (es = 0), 0 !== (6 & Lu))) throw Error(a(327));
          var n = e.callbackNode;
          if (_s() && e.callbackNode !== n) return null;
          var r = ft(e, e === Nu ? Mu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gs(e, r);
          else {
            t = r;
            var o = Lu;
            Lu |= 2;
            var i = ms();
            for ((Nu === e && Mu === t) || ((Hu = null), (Wu = Xe() + 500), ps(e, t)); ; )
              try {
                bs();
                break;
              } catch (u) {
                hs(e, u);
              }
            ka(),
              (Tu.current = i),
              (Lu = o),
              null !== Au ? (t = 0) : ((Nu = null), (Mu = 0), (t = Ou));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (o = ht(e)) && ((r = o), (t = is(e, o))), 1 === t))
              throw ((n = Du), ps(e, 0), us(e, r), os(e, Xe()), n);
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
                              if (!lr(a(), o)) return !1;
                            } catch (l) {
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
                  (2 === (t = gs(e, r)) && 0 !== (i = ht(e)) && ((r = i), (t = is(e, i))), 1 === t))
              )
                throw ((n = Du), ps(e, 0), us(e, r), os(e, Xe()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  ks(e, Fu, Hu);
                  break;
                case 3:
                  if ((us(e, r), (130023424 & r) === r && 10 < (t = ju + 500 - Xe()))) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(ks.bind(null, e, Fu, Hu), t);
                    break;
                  }
                  ks(e, Fu, Hu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
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
                                    : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(ks.bind(null, e, Fu, Hu), r);
                    break;
                  }
                  ks(e, Fu, Hu);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return os(e, Xe()), e.callbackNode === n ? as.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Vu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = gs(e, t)) && ((t = Fu), (Fu = n), null !== t && ls(t)),
            e
          );
        }
        function ls(e) {
          null === Fu ? (Fu = e) : Fu.push.apply(Fu, e);
        }
        function us(e, t) {
          for (
            t &= ~Bu, t &= ~zu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & Lu)) throw Error(a(327));
          _s();
          var t = ft(e, 0);
          if (0 === (1 & t)) return os(e, Xe()), null;
          var n = gs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = Du), ps(e, 0), us(e, t), os(e, Xe()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ks(e, Fu, Hu),
            os(e, Xe()),
            null
          );
        }
        function cs(e, t) {
          var n = Lu;
          Lu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Lu = n) && ((Wu = Xe() + 500), Vo && Wo());
          }
        }
        function ds(e) {
          null !== Qu && 0 === Qu.tag && 0 === (6 & Lu) && _s();
          var t = Lu;
          Lu |= 1;
          var n = xu.transition,
            r = bt;
          try {
            if (((xu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (xu.transition = n), 0 === (6 & (Lu = t)) && Wo();
          }
        }
        function fs() {
          (Pu = Uu.current), To(Uu);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Au))
            for (n = Au.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && Uo();
                  break;
                case 3:
                  ai(), To(No), To(Lo), di();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  To(ui);
                  break;
                case 10:
                  _a(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Nu = e),
            (Au = e = Us(e.current, null)),
            (Mu = Pu = t),
            (Ou = 0),
            (Du = null),
            (Bu = zu = Iu = 0),
            (Fu = Vu = null),
            null !== Ca)
          ) {
            for (t = 0; t < Ca.length; t++)
              if (null !== (r = (n = Ca[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
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
              if ((ka(), (fi.current = il), yi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                yi = !1;
              }
              if (
                ((hi = 0),
                (gi = vi = mi = null),
                (bi = !1),
                (wi = 0),
                (Cu.current = null),
                null === n || null === n.return)
              ) {
                (Ou = 1), (Du = t), (Au = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Mu),
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
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257), yl(h, l, u, 0, t), 1 & h.mode && vl(i, c, t), (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vl(i, c, t), vs();
                    break e;
                  }
                  s = Error(a(426));
                } else if (aa && 1 & u.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256), yl(g, l, u, 0, t), ma(cl(s, u));
                    break e;
                  }
                }
                (i = s = cl(s, u)),
                  4 !== Ou && (Ou = 2),
                  null === Vu ? (Vu = [i]) : Vu.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536), (t &= -t), (i.lanes |= t), Ia(i, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ('function' === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === Gu || !Gu.has(b))))
                      ) {
                        (i.flags |= 65536), (t &= -t), (i.lanes |= t), Ia(i, ml(i, u, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              Ss(n);
            } catch (w) {
              (t = w), Au === n && null !== n && (Au = n = n.return);
              continue;
            }
            break;
          }
        }
        function ms() {
          var e = Tu.current;
          return (Tu.current = il), null === e ? il : e;
        }
        function vs() {
          (0 !== Ou && 3 !== Ou && 2 !== Ou) || (Ou = 4),
            null === Nu || (0 === (268435455 & Iu) && 0 === (268435455 & zu)) || us(Nu, Mu);
        }
        function gs(e, t) {
          var n = Lu;
          Lu |= 2;
          var r = ms();
          for ((Nu === e && Mu === t) || ((Hu = null), ps(e, t)); ; )
            try {
              ys();
              break;
            } catch (o) {
              hs(e, o);
            }
          if ((ka(), (Lu = n), (Tu.current = r), null !== Au)) throw Error(a(261));
          return (Nu = null), (Mu = 0), Ou;
        }
        function ys() {
          for (; null !== Au; ) ws(Au);
        }
        function bs() {
          for (; null !== Au && !Qe(); ) ws(Au);
        }
        function ws(e) {
          var t = Ru(e.alternate, e, Pu);
          (e.memoizedProps = e.pendingProps), null === t ? Ss(e) : (Au = t), (Cu.current = null);
        }
        function Ss(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Kl(n, t, Pu))) return void (Au = n);
            } else {
              if (null !== (n = Ql(n, t))) return (n.flags &= 32767), void (Au = n);
              if (null === e) return (Ou = 6), void (Au = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Au = t);
            Au = t = e;
          } while (null !== t);
          0 === Ou && (Ou = 5);
        }
        function ks(e, t, n) {
          var r = bt,
            o = xu.transition;
          try {
            (xu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  _s();
                } while (null !== Qu);
                if (0 !== (6 & Lu)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
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
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === Nu && ((Au = Nu = null), (Mu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ku ||
                    ((Ku = !0),
                    Ns(tt, function () {
                      return _s(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = xu.transition), (xu.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Lu;
                  (Lu |= 4),
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
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n || (0 !== o && 3 !== f.nodeType) || (u = l + o),
                                    f !== i || (0 !== r && 3 !== f.nodeType) || (s = l + r),
                                    3 === f.nodeType && (l += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === o && (u = l),
                                    p === i && ++d === r && (s = l),
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
                        to = { focusedElem: e, selectionRange: n }, Ht = !1, Jl = t;
                        null !== Jl;

                      )
                        if (((e = (t = Jl).child), 0 !== (1028 & t.subtreeFlags) && null !== e))
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
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
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type ? v : ga(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = '')
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (S) {
                              Es(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (m = nu), (nu = !1);
                    })(e, n),
                    gu(n, e),
                    hr(to),
                    (Ht = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bu(n, e, o),
                    Ye(),
                    (Lu = u),
                    (bt = l),
                    (xu.transition = i);
                } else e.current = n;
                if (
                  (Ku && ((Ku = !1), (Qu = e), (Yu = o)),
                  (i = e.pendingLanes),
                  0 === i && (Gu = null),
                  (function (e) {
                    if (at && 'function' === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags));
                      } catch (t) {}
                  })(n.stateNode),
                  os(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
                if ($u) throw (($u = !1), (e = qu), (qu = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && _s(),
                  (i = e.pendingLanes),
                  0 !== (1 & i) ? (e === Zu ? Xu++ : ((Xu = 0), (Zu = e))) : (Xu = 0),
                  Wo();
              })(e, t, n, r);
          } finally {
            (xu.transition = o), (bt = r);
          }
          return null;
        }
        function _s() {
          if (null !== Qu) {
            var e = wt(Yu),
              t = xu.transition,
              n = bt;
            try {
              if (((xu.transition = null), (bt = 16 > e ? 16 : e), null === Qu)) var r = !1;
              else {
                if (((e = Qu), (Qu = null), (Yu = 0), 0 !== (6 & Lu))) throw Error(a(331));
                var o = Lu;
                for (Lu |= 4, Jl = e.current; null !== Jl; ) {
                  var i = Jl,
                    l = i.child;
                  if (0 !== (16 & Jl.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Jl = c; null !== Jl; ) {
                          var d = Jl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Jl = f);
                          else
                            for (; null !== Jl; ) {
                              var p = (d = Jl).sibling,
                                h = d.return;
                              if ((iu(d), d === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Jl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l) (l.return = i), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (i = Jl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Jl = y);
                        break e;
                      }
                      Jl = i.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var w = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w) (w.return = l), (Jl = w);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (u = Jl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ou(9, u);
                          }
                        } catch (k) {
                          Es(u, u.return, k);
                        }
                      if (u === l) {
                        Jl = null;
                        break e;
                      }
                      var S = u.sibling;
                      if (null !== S) {
                        (S.return = u.return), (Jl = S);
                        break e;
                      }
                      Jl = u.return;
                    }
                }
                if (((Lu = o), Wo(), at && 'function' === typeof at.onPostCommitFiberRoot))
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (xu.transition = t);
            }
          }
          return !1;
        }
        function Rs(e, t, n) {
          (e = Oa(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (gt(e, 1, t), os(e, t));
        }
        function Es(e, t, n) {
          if (3 === e.tag) Rs(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Rs(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch && (null === Gu || !Gu.has(r)))
                ) {
                  (t = Oa(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (gt(t, 1, e), os(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ts(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Nu === e &&
              (Mu & n) === n &&
              (4 === Ou || (3 === Ou && (130023424 & Mu) === Mu && 500 > Xe() - ju)
                ? ps(e, 0)
                : (Bu |= n)),
            os(e, t);
        }
        function Cs(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Na(e, t)) && (gt(e, t, n), os(e, n));
        }
        function xs(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cs(e, n);
        }
        function Ls(e, t) {
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
        function Ns(e, t) {
          return Ge(e, t);
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
        function Ms(e, t, n, r) {
          return new As(e, t, n, r);
        }
        function Ps(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Us(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ms(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
        function Os(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), 'function' === typeof e)) Ps(e) && (l = 1);
          else if ('string' === typeof e) l = 5;
          else
            e: switch (e) {
              case _:
                return Ds(n.children, o, i, t);
              case R:
                (l = 8), (o |= 8);
                break;
              case E:
                return ((e = Ms(12, n, t, 2 | o)).elementType = E), (e.lanes = i), e;
              case L:
                return ((e = Ms(13, n, t, o)).elementType = L), (e.lanes = i), e;
              case N:
                return ((e = Ms(19, n, t, o)).elementType = N), (e.lanes = i), e;
              case P:
                return Is(n, o, i, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      l = 10;
                      break e;
                    case C:
                      l = 9;
                      break e;
                    case x:
                      l = 11;
                      break e;
                    case A:
                      l = 14;
                      break e;
                    case M:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ''));
            }
          return ((t = Ms(l, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t;
        }
        function Ds(e, t, n, r) {
          return ((e = Ms(7, e, r, t)).lanes = n), e;
        }
        function Is(e, t, n, r) {
          return (
            ((e = Ms(22, e, r, t)).elementType = P),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function zs(e, t, n) {
          return ((e = Ms(6, e, null, t)).lanes = n), e;
        }
        function Bs(e, t, n) {
          return (
            ((t = Ms(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Vs(e, t, n, r, o) {
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
        function Fs(e, t, n, r, o, a, i, l, u) {
          return (
            (e = new Vs(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Ms(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ma(a),
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
                  if (Po(t.type)) {
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
            if (Po(n)) return Do(e, n, t);
          }
          return t;
        }
        function Ws(e, t, n, r, o, a, i, l, u) {
          return (
            ((e = Fs(n, r, !0, e, 0, a, 0, l, u)).context = js(null)),
            (n = e.current),
            ((a = Ua((r = ts()), (o = ns(n)))).callback = void 0 !== t && null !== t ? t : null),
            Oa(n, a, o),
            (e.current.lanes = o),
            gt(e, o, r),
            os(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var o = t.current,
            a = ts(),
            i = ns(o);
          return (
            (n = js(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ua(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Oa(o, t, i)) && (rs(e, o, i, a), Da(e, o, i)),
            i
          );
        }
        function $s(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Gs(e, t) {
          qs(e, t), (e = e.alternate) && qs(e, t);
        }
        Ru = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || No.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Nl(t), ha();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Po(t.type) && Io(t);
                        break;
                      case 4:
                        oi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Co(ya, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Co(ui, 1 & ui.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? zl(e, t, n)
                              : (Co(ui, 1 & ui.current),
                                null !== (e = $l(e, t, n)) ? e.sibling : null);
                        Co(ui, 1 & ui.current);
                        break;
                      case 19:
                        if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
                          if (r) return Wl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                          Co(ui, ui.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), El(e, t, n);
                    }
                    return $l(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), aa && 0 !== (1048576 & t.flags) && ea(t, Go, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hl(e, t), (e = t.pendingProps);
              var o = Mo(t, Lo.current);
              Ea(t, n), (o = Ri(null, t, r, e, o, n));
              var i = Ei();
              return (
                (t.flags |= 1),
                'object' === typeof o &&
                null !== o &&
                'function' === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Po(r) ? ((i = !0), Io(t)) : (i = !1),
                    (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
                    Ma(t),
                    (o.updater = ja),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    qa(t, r, e, n),
                    (t = Ll(null, t, r, !0, i, n)))
                  : ((t.tag = 0), aa && i && ta(t), Sl(null, t, o, n), (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hl(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Ps(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === x) return 11;
                        if (e === A) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ga(r, e)),
                  o)
                ) {
                  case 0:
                    t = Cl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = _l(null, t, r, ga(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Cl(e, t, r, (o = t.elementType === r ? o : ga(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                xl(e, t, r, (o = t.elementType === r ? o : ga(r, o)), n)
              );
            case 3:
              e: {
                if ((Nl(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  Pa(e, t),
                  za(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Al(e, t, r, n, (o = cl(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Al(e, t, r, n, (o = cl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = so(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = Za(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = $l(e, t, n);
                    break e;
                  }
                  Sl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && ca(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                no(r, o) ? (l = null) : null !== i && no(r, i) && (t.flags |= 32),
                Tl(e, t),
                Sl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return zl(e, t, n);
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xa(t, null, r, n)) : Sl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                kl(e, t, r, (o = t.elementType === r ? o : ga(r, o)), n)
              );
            case 7:
              return Sl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Sl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  Co(ya, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === o.children && !No.current) {
                      t = $l(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        l = i.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = Ua(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d ? (s.next = s) : ((s.next = d.next), (d.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              Ra(i.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag) l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          Ra(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                Sl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ea(t, n),
                (r = r((o = Ta(o)))),
                (t.flags |= 1),
                Sl(e, t, r, n),
                t.child
              );
            case 14:
              return (o = ga((r = t.type), t.pendingProps)), _l(e, t, r, (o = ga(r.type, o)), n);
            case 15:
              return Rl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : ga(r, o)),
                Hl(e, t),
                (t.tag = 1),
                Po(r) ? ((e = !0), Io(t)) : (e = !1),
                Ea(t, n),
                Ha(t, r, o),
                qa(t, r, o, n),
                Ll(null, t, r, !0, e, n)
              );
            case 19:
              return Wl(e, t, n);
            case 22:
              return El(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Ks =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qs(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Zs(e) {
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
            var i = a;
            if ('function' === typeof o) {
              var l = o;
              o = function () {
                var e = $s(i);
                l.call(e);
              };
            }
            Hs(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ('function' === typeof r) {
                  var a = r;
                  r = function () {
                    var e = $s(i);
                    a.call(e);
                  };
                }
                var i = Ws(t, r, e, 0, null, !1, 0, '', Js);
                return (
                  (e._reactRootContainer = i),
                  (e[mo] = i.current),
                  jr(8 === e.nodeType ? e.parentNode : e),
                  ds(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ('function' === typeof r) {
                var l = r;
                r = function () {
                  var e = $s(u);
                  l.call(e);
                };
              }
              var u = Fs(e, 0, !1, null, 0, !1, 0, '', Js);
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
          return $s(i);
        }
        (Ys.prototype.render = Qs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Hs(e, t, null, null);
          }),
          (Ys.prototype.unmount = Qs.prototype.unmount =
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
              var t = Rt();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Pt.length && 0 !== t && t < Pt[n].priority; n++);
              Pt.splice(n, 0, e), 0 === n && It(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n), os(t, Xe()), 0 === (6 & Lu) && ((Wu = Xe() + 500), Wo()));
                }
                break;
              case 13:
                ds(function () {
                  var t = Na(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  Gs(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Na(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              Gs(e, 134217728);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Na(e, t);
              if (null !== n) rs(n, e, t, ts());
              Gs(e, t);
            }
          }),
          (Rt = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((Z(e, n), (t = n.name), 'radio' === n.type && null != t)) {
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
                      var o = ko(r);
                      if (!o) throw Error(a(90));
                      G(r), Z(r, o);
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
          (Le = ds);
        var tc = { usingClientEntryPoint: !1, Events: [wo, So, ko, Te, Ce, cs] },
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
            currentDispatcherRef: w.ReactCurrentDispatcher,
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
            if (!Xs(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: k,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xs(e)) throw Error(a(299));
            var n = !1,
              r = '',
              o = Ks;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Fs(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              jr(8 === e.nodeType ? e.parentNode : e),
              new Qs(t)
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
            if (!Zs(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xs(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = '',
              l = Ks;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Ws(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
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
            if (!Zs(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(a(40));
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
            if (!Zs(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608');
      },
      739: (e, t, n) => {
        'use strict';
        var r = n(168);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      168: (e, t, n) => {
        'use strict';
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
      790: function (e, t, n) {
        var r;
        (r = function (e) {
          return (function (e) {
            var t = {};
            function n(r) {
              if (t[r]) return t[r].exports;
              var o = (t[r] = { i: r, l: !1, exports: {} });
              return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
              }),
              (n.r = function (e) {
                'undefined' !== typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (
                  (n.r(r),
                  Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                  2 & t && 'string' != typeof e)
                )
                  for (var o in e)
                    n.d(
                      r,
                      o,
                      function (t) {
                        return e[t];
                      }.bind(null, o)
                    );
                return r;
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, 'a', t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ''),
              n((n.s = './src/react-webcam.tsx'))
            );
          })({
            './src/react-webcam.tsx': function (e, t, n) {
              'use strict';
              n.r(t);
              var r = n('react'),
                o = (function () {
                  var e = function (t, n) {
                    return (
                      (e =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (e, t) {
                            e.__proto__ = t;
                          }) ||
                        function (e, t) {
                          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        }),
                      e(t, n)
                    );
                  };
                  return function (t, n) {
                    function r() {
                      this.constructor = t;
                    }
                    e(t, n),
                      (t.prototype =
                        null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                  };
                })(),
                a = function () {
                  return (
                    (a =
                      Object.assign ||
                      function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                          for (var o in (t = arguments[n]))
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                      }),
                    a.apply(this, arguments)
                  );
                },
                i = function (e, t) {
                  var n = {};
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                  if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                      t.indexOf(r[o]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                        (n[r[o]] = e[r[o]]);
                  }
                  return n;
                };
              function l() {
                return !(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia);
              }
              'undefined' !== typeof window &&
                (void 0 === navigator.mediaDevices && (navigator.mediaDevices = {}),
                void 0 === navigator.mediaDevices.getUserMedia &&
                  (navigator.mediaDevices.getUserMedia = function (e) {
                    var t =
                      navigator.getUserMedia ||
                      navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia ||
                      navigator.msGetUserMedia;
                    return t
                      ? new Promise(function (n, r) {
                          t.call(navigator, e, n, r);
                        })
                      : Promise.reject(
                          new Error('getUserMedia is not implemented in this browser')
                        );
                  }));
              var u = (function (e) {
                function t(t) {
                  var n = e.call(this, t) || this;
                  return (
                    (n.canvas = null),
                    (n.ctx = null),
                    (n.requestUserMediaId = 0),
                    (n.unmounted = !1),
                    (n.state = { hasUserMedia: !1 }),
                    n
                  );
                }
                return (
                  o(t, e),
                  (t.prototype.componentDidMount = function () {
                    var e = this.state,
                      t = this.props;
                    (this.unmounted = !1),
                      l()
                        ? (e.hasUserMedia || this.requestUserMedia(),
                          t.children &&
                            'function' != typeof t.children &&
                            console.warn('children must be a function'))
                        : t.onUserMediaError('getUserMedia not supported');
                  }),
                  (t.prototype.componentDidUpdate = function (e) {
                    var t = this.props;
                    if (l()) {
                      var n =
                          JSON.stringify(e.audioConstraints) !== JSON.stringify(t.audioConstraints),
                        r =
                          JSON.stringify(e.videoConstraints) !== JSON.stringify(t.videoConstraints),
                        o = e.minScreenshotWidth !== t.minScreenshotWidth,
                        a = e.minScreenshotHeight !== t.minScreenshotHeight;
                      (r || o || a) && ((this.canvas = null), (this.ctx = null)),
                        (n || r) && (this.stopAndCleanup(), this.requestUserMedia());
                    } else t.onUserMediaError('getUserMedia not supported');
                  }),
                  (t.prototype.componentWillUnmount = function () {
                    (this.unmounted = !0), this.stopAndCleanup();
                  }),
                  (t.stopMediaStream = function (e) {
                    e &&
                      (e.getVideoTracks && e.getAudioTracks
                        ? (e.getVideoTracks().map(function (t) {
                            e.removeTrack(t), t.stop();
                          }),
                          e.getAudioTracks().map(function (t) {
                            e.removeTrack(t), t.stop();
                          }))
                        : e.stop());
                  }),
                  (t.prototype.stopAndCleanup = function () {
                    var e = this.state;
                    e.hasUserMedia &&
                      (t.stopMediaStream(this.stream), e.src && window.URL.revokeObjectURL(e.src));
                  }),
                  (t.prototype.getScreenshot = function (e) {
                    var t = this.state,
                      n = this.props;
                    if (!t.hasUserMedia) return null;
                    var r = this.getCanvas(e);
                    return r && r.toDataURL(n.screenshotFormat, n.screenshotQuality);
                  }),
                  (t.prototype.getCanvas = function (e) {
                    var t = this.state,
                      n = this.props;
                    if (!this.video) return null;
                    if (!t.hasUserMedia || !this.video.videoHeight) return null;
                    if (!this.ctx) {
                      var r = this.video.videoWidth,
                        o = this.video.videoHeight;
                      if (!this.props.forceScreenshotSourceSize) {
                        var a = r / o;
                        (o = (r = n.minScreenshotWidth || this.video.clientWidth) / a),
                          n.minScreenshotHeight &&
                            o < n.minScreenshotHeight &&
                            (r = (o = n.minScreenshotHeight) * a);
                      }
                      (this.canvas = document.createElement('canvas')),
                        (this.canvas.width = (null === e || void 0 === e ? void 0 : e.width) || r),
                        (this.canvas.height =
                          (null === e || void 0 === e ? void 0 : e.height) || o),
                        (this.ctx = this.canvas.getContext('2d'));
                    }
                    var i = this.ctx,
                      l = this.canvas;
                    return (
                      i &&
                        l &&
                        ((l.width = (null === e || void 0 === e ? void 0 : e.width) || l.width),
                        (l.height = (null === e || void 0 === e ? void 0 : e.height) || l.height),
                        n.mirrored && (i.translate(l.width, 0), i.scale(-1, 1)),
                        (i.imageSmoothingEnabled = n.imageSmoothing),
                        i.drawImage(
                          this.video,
                          0,
                          0,
                          (null === e || void 0 === e ? void 0 : e.width) || l.width,
                          (null === e || void 0 === e ? void 0 : e.height) || l.height
                        ),
                        n.mirrored && (i.scale(-1, 1), i.translate(-l.width, 0))),
                      l
                    );
                  }),
                  (t.prototype.requestUserMedia = function () {
                    var e = this,
                      n = this.props,
                      r = function (r, o) {
                        var a = { video: 'undefined' === typeof o || o };
                        n.audio && (a.audio = 'undefined' === typeof r || r),
                          e.requestUserMediaId++;
                        var i = e.requestUserMediaId;
                        navigator.mediaDevices
                          .getUserMedia(a)
                          .then(function (n) {
                            e.unmounted || i !== e.requestUserMediaId
                              ? t.stopMediaStream(n)
                              : e.handleUserMedia(null, n);
                          })
                          .catch(function (t) {
                            e.handleUserMedia(t);
                          });
                      };
                    if ('mediaDevices' in navigator) r(n.audioConstraints, n.videoConstraints);
                    else {
                      var o = function (e) {
                          return { optional: [{ sourceId: e }] };
                        },
                        a = function (e) {
                          var t = e.deviceId;
                          return 'string' === typeof t
                            ? t
                            : Array.isArray(t) && t.length > 0
                              ? t[0]
                              : 'object' === typeof t && t.ideal
                                ? t.ideal
                                : null;
                        };
                      MediaStreamTrack.getSources(function (e) {
                        var t = null,
                          i = null;
                        e.forEach(function (e) {
                          'audio' === e.kind ? (t = e.id) : 'video' === e.kind && (i = e.id);
                        });
                        var l = a(n.audioConstraints);
                        l && (t = l);
                        var u = a(n.videoConstraints);
                        u && (i = u), r(o(t), o(i));
                      });
                    }
                  }),
                  (t.prototype.handleUserMedia = function (e, t) {
                    var n = this.props;
                    if (e || !t)
                      return this.setState({ hasUserMedia: !1 }), void n.onUserMediaError(e);
                    this.stream = t;
                    try {
                      this.video && (this.video.srcObject = t), this.setState({ hasUserMedia: !0 });
                    } catch (r) {
                      this.setState({ hasUserMedia: !0, src: window.URL.createObjectURL(t) });
                    }
                    n.onUserMedia(t);
                  }),
                  (t.prototype.render = function () {
                    var e = this,
                      t = this.state,
                      n = this.props,
                      o = n.audio,
                      l = (n.forceScreenshotSourceSize, n.disablePictureInPicture),
                      u =
                        (n.onUserMedia,
                        n.onUserMediaError,
                        n.screenshotFormat,
                        n.screenshotQuality,
                        n.minScreenshotWidth,
                        n.minScreenshotHeight,
                        n.audioConstraints,
                        n.videoConstraints,
                        n.imageSmoothing,
                        n.mirrored),
                      s = n.style,
                      c = void 0 === s ? {} : s,
                      d = n.children,
                      f = i(n, [
                        'audio',
                        'forceScreenshotSourceSize',
                        'disablePictureInPicture',
                        'onUserMedia',
                        'onUserMediaError',
                        'screenshotFormat',
                        'screenshotQuality',
                        'minScreenshotWidth',
                        'minScreenshotHeight',
                        'audioConstraints',
                        'videoConstraints',
                        'imageSmoothing',
                        'mirrored',
                        'style',
                        'children',
                      ]),
                      p = u ? a(a({}, c), { transform: (c.transform || '') + ' scaleX(-1)' }) : c,
                      h = { getScreenshot: this.getScreenshot.bind(this) };
                    return r.createElement(
                      r.Fragment,
                      null,
                      r.createElement(
                        'video',
                        a(
                          {
                            autoPlay: !0,
                            disablePictureInPicture: l,
                            src: t.src,
                            muted: !o,
                            playsInline: !0,
                            ref: function (t) {
                              e.video = t;
                            },
                            style: p,
                          },
                          f
                        )
                      ),
                      d && d(h)
                    );
                  }),
                  (t.defaultProps = {
                    audio: !1,
                    disablePictureInPicture: !1,
                    forceScreenshotSourceSize: !1,
                    imageSmoothing: !0,
                    mirrored: !1,
                    onUserMedia: function () {},
                    onUserMediaError: function () {},
                    screenshotFormat: 'image/webp',
                    screenshotQuality: 0.92,
                  }),
                  t
                );
              })(r.Component);
              t.default = u;
            },
            react: function (t, n) {
              t.exports = e;
            },
          }).default;
        }),
          (e.exports = r(n(313)));
      },
      918: (e, t, n) => {
        'use strict';
        var r = n(313),
          o = Symbol.for('react.element'),
          a = Symbol.for('react.fragment'),
          i = Object.prototype.hasOwnProperty,
          l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
            i.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return { $$typeof: o, type: e, key: s, ref: c, props: a, _owner: l.current };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      306: (e, t) => {
        'use strict';
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          l = Symbol.for('react.provider'),
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
        function g(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          _ = { current: null },
          R = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = '' + t.key), t))
              k.call(t, o) && !R.hasOwnProperty(o) && (a[o] = t[o]);
          var u = arguments.length - 2;
          if (1 === u) a.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps) for (o in (u = e.defaultProps)) void 0 === a[o] && (a[o] = u[o]);
          return { $$typeof: n, type: e, key: i, ref: l, props: a, _owner: _.current };
        }
        function T(e) {
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
        function L(e, t, o, a, i) {
          var l = typeof e;
          ('undefined' !== l && 'boolean' !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
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
              (i = i((u = e))),
              (e = '' === a ? '.' + x(u, 0) : a),
              S(i)
                ? ((o = ''),
                  null != e && (o = e.replace(C, '$&/') + '/'),
                  L(i, t, o, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (T(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (u && u.key === i.key)
                          ? ''
                          : ('' + i.key).replace(C, '$&/') + '/') +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (a = '' === a ? '.' : a + ':'), S(e)))
            for (var s = 0; s < e.length; s++) {
              var c = a + x((l = e[s]), s);
              u += L(l, t, o, c, i);
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
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += L((l = l.value), t, o, (c = a + x(l, s++)), i);
          else if ('object' === l)
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
        function N(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            L(e, r, '', '', function (e) {
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
        var M = { current: null },
          P = { transition: null },
          U = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: P, ReactCurrentOwner: _ };
        (t.Children = {
          map: N,
          forEach: function (e, t, n) {
            N(
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
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = _.current)),
                void 0 !== t.key && (a = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !R.hasOwnProperty(s) &&
                  (o[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) o.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              o.children = u;
            }
            return { $$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: l };
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
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: A };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = P.transition;
            P.transition = {};
            try {
              e();
            } finally {
              P.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error('act(...) is not supported in production builds of React.');
          }),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return M.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e);
          }),
          (t.useState = function (e) {
            return M.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return M.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      313: (e, t, n) => {
        'use strict';
        e.exports = n(306);
      },
      417: (e, t, n) => {
        'use strict';
        e.exports = n(918);
      },
      495: (e, t, n) => {
        'use strict';
        var r;
        function o(e, t) {
          if (!e) throw 'First parameter is required.';
          t = new a(e, (t = t || { type: 'video' }));
          var n = this;
          function r(n) {
            n &&
              (t.initCallback = function () {
                n(), (n = t.initCallback = null);
              });
            var r = new i(e, t);
            (f = new r(e, t)).record(),
              d('recording'),
              t.disableLogs ||
                console.log(
                  'Initialized recorderType:',
                  f.constructor.name,
                  'for output-type:',
                  t.type
                );
          }
          function l(e) {
            if (((e = e || function () {}), f)) {
              if ('paused' === n.state)
                return (
                  n.resumeRecording(),
                  void setTimeout(function () {
                    l(e);
                  }, 1)
                );
              'recording' === n.state ||
                t.disableLogs ||
                console.warn(
                  'Recording state should be: "recording", however current state is: ',
                  n.state
                ),
                t.disableLogs || console.log('Stopped recording ' + t.type + ' stream.'),
                'gif' !== t.type ? f.stop(r) : (f.stop(), r()),
                d('stopped');
            } else m();
            function r(r) {
              if (f) {
                Object.keys(f).forEach(function (e) {
                  'function' !== typeof f[e] && (n[e] = f[e]);
                });
                var o = f.blob;
                if (!o) {
                  if (!r) throw 'Recording failed.';
                  f.blob = o = r;
                }
                if ((o && !t.disableLogs && console.log(o.type, '->', w(o.size)), e)) {
                  var a;
                  try {
                    a = p.createObjectURL(o);
                  } catch (i) {}
                  'function' === typeof e.call ? e.call(n, a) : e(a);
                }
                t.autoWriteToDisk &&
                  s(function (e) {
                    var n = {};
                    (n[t.type + 'Blob'] = e), M.Store(n);
                  });
              } else 'function' === typeof e.call ? e.call(n, '') : e('');
            }
          }
          function u(e) {
            postMessage(new FileReaderSync().readAsDataURL(e));
          }
          function s(e, n) {
            if (!e) throw 'Pass a callback function over getDataURL.';
            var r = n ? n.blob : (f || {}).blob;
            if (!r)
              return (
                t.disableLogs || console.warn('Blob encoder did not finish its job yet.'),
                void setTimeout(function () {
                  s(e, n);
                }, 1e3)
              );
            if ('undefined' === typeof Worker || navigator.mozGetUserMedia) {
              var o = new FileReader();
              o.readAsDataURL(r),
                (o.onload = function (t) {
                  e(t.target.result);
                });
            } else {
              var a = (function (e) {
                try {
                  var t = p.createObjectURL(
                      new Blob(
                        [
                          e.toString(),
                          'this.onmessage =  function (eee) {' + e.name + '(eee.data);}',
                        ],
                        { type: 'application/javascript' }
                      )
                    ),
                    n = new Worker(t);
                  return p.revokeObjectURL(t), n;
                } catch (r) {}
              })(u);
              (a.onmessage = function (t) {
                e(t.data);
              }),
                a.postMessage(r);
            }
          }
          function c(e) {
            (e = e || 0),
              'paused' !== n.state
                ? 'stopped' !== n.state &&
                  (e >= n.recordingDuration
                    ? l(n.onRecordingStopped)
                    : ((e += 1e3),
                      setTimeout(function () {
                        c(e);
                      }, 1e3)))
                : setTimeout(function () {
                    c(e);
                  }, 1e3);
          }
          function d(e) {
            n &&
              ((n.state = e),
              'function' === typeof n.onStateChanged.call
                ? n.onStateChanged.call(n, e)
                : n.onStateChanged(e));
          }
          var f,
            h =
              'It seems that recorder is destroyed or "startRecording" is not invoked for ' +
              t.type +
              ' recorder.';
          function m() {
            !0 !== t.disableLogs && console.warn(h);
          }
          var v = {
            startRecording: function (o) {
              return (
                t.disableLogs || console.log('RecordRTC version: ', n.version),
                o && (t = new a(e, o)),
                t.disableLogs || console.log('started recording ' + t.type + ' stream.'),
                f
                  ? (f.clearRecordedData(),
                    f.record(),
                    d('recording'),
                    n.recordingDuration && c(),
                    n)
                  : (r(function () {
                      n.recordingDuration && c();
                    }),
                    n)
              );
            },
            stopRecording: l,
            pauseRecording: function () {
              f
                ? 'recording' === n.state
                  ? (d('paused'), f.pause(), t.disableLogs || console.log('Paused recording.'))
                  : t.disableLogs ||
                    console.warn('Unable to pause the recording. Recording state: ', n.state)
                : m();
            },
            resumeRecording: function () {
              f
                ? 'paused' === n.state
                  ? (d('recording'), f.resume(), t.disableLogs || console.log('Resumed recording.'))
                  : t.disableLogs ||
                    console.warn('Unable to resume the recording. Recording state: ', n.state)
                : m();
            },
            initRecorder: r,
            setRecordingDuration: function (e, t) {
              if ('undefined' === typeof e) throw 'recordingDuration is required.';
              if ('number' !== typeof e) throw 'recordingDuration must be a number.';
              return (
                (n.recordingDuration = e),
                (n.onRecordingStopped = t || function () {}),
                {
                  onRecordingStopped: function (e) {
                    n.onRecordingStopped = e;
                  },
                }
              );
            },
            clearRecordedData: function () {
              f
                ? (f.clearRecordedData(),
                  t.disableLogs || console.log('Cleared old recorded data.'))
                : m();
            },
            getBlob: function () {
              if (f) return f.blob;
              m();
            },
            getDataURL: s,
            toURL: function () {
              if (f) return p.createObjectURL(f.blob);
              m();
            },
            getInternalRecorder: function () {
              return f;
            },
            save: function (e) {
              f ? S(f.blob, e) : m();
            },
            getFromDisk: function (e) {
              f ? o.getFromDisk(t.type, e) : m();
            },
            setAdvertisementArray: function (e) {
              t.advertisement = [];
              for (var n = e.length, r = 0; r < n; r++)
                t.advertisement.push({ duration: r, image: e[r] });
            },
            blob: null,
            bufferSize: 0,
            sampleRate: 0,
            buffer: null,
            reset: function () {
              'recording' !== n.state || t.disableLogs || console.warn('Stop an active recorder.'),
                f && 'function' === typeof f.clearRecordedData && f.clearRecordedData(),
                (f = null),
                d('inactive'),
                (n.blob = null);
            },
            onStateChanged: function (e) {
              t.disableLogs || console.log('Recorder state changed:', e);
            },
            state: 'inactive',
            getState: function () {
              return n.state;
            },
            destroy: function () {
              var e = t.disableLogs;
              (t = { disableLogs: !0 }),
                n.reset(),
                d('destroyed'),
                (v = n = null),
                E.AudioContextConstructor &&
                  (E.AudioContextConstructor.close(), (E.AudioContextConstructor = null)),
                (t.disableLogs = e),
                t.disableLogs || console.log('RecordRTC is destroyed.');
            },
            version: '5.6.2',
          };
          if (!this) return (n = v), v;
          for (var g in v) this[g] = v[g];
          return (n = this), v;
        }
        function a(e, t) {
          return (
            t.recorderType ||
              t.type ||
              (t.audio && t.video ? (t.type = 'video') : t.audio && !t.video && (t.type = 'audio')),
            t.recorderType &&
              !t.type &&
              (t.recorderType === N || t.recorderType === L || t.recorderType === D
                ? (t.type = 'video')
                : t.recorderType === P
                  ? (t.type = 'gif')
                  : t.recorderType === x
                    ? (t.type = 'audio')
                    : t.recorderType === C &&
                      ((_(e, 'audio').length && _(e, 'video').length) ||
                      (!_(e, 'audio').length && _(e, 'video').length)
                        ? (t.type = 'video')
                        : _(e, 'audio').length && !_(e, 'video').length && (t.type = 'audio'))),
            'undefined' !== typeof MediaRecorder &&
              'requestData' in MediaRecorder.prototype &&
              (t.mimeType || (t.mimeType = 'video/webm'),
              t.type || (t.type = t.mimeType.split('/')[0]),
              t.bitsPerSecond),
            t.type ||
              (t.mimeType && (t.type = t.mimeType.split('/')[0]), t.type || (t.type = 'audio')),
            t
          );
        }
        function i(e, t) {
          var n;
          return (
            (g || h || m) && (n = x),
            'undefined' !== typeof MediaRecorder &&
              'requestData' in MediaRecorder.prototype &&
              !g &&
              (n = C),
            'video' === t.type &&
              (g || m) &&
              ((n = N), 'undefined' !== typeof ReadableStream && (n = D)),
            'gif' === t.type && (n = P),
            'canvas' === t.type && (n = L),
            T() &&
              n !== L &&
              n !== P &&
              'undefined' !== typeof MediaRecorder &&
              'requestData' in MediaRecorder.prototype &&
              (_(e, 'video').length || _(e, 'audio').length) &&
              ('audio' === t.type
                ? 'function' === typeof MediaRecorder.isTypeSupported &&
                  MediaRecorder.isTypeSupported('audio/webm') &&
                  (n = C)
                : 'function' === typeof MediaRecorder.isTypeSupported &&
                  MediaRecorder.isTypeSupported('video/webm') &&
                  (n = C)),
            e instanceof Array && e.length && (n = O),
            t.recorderType && (n = t.recorderType),
            !t.disableLogs &&
              n &&
              n.name &&
              console.log('Using recorderType:', n.name || n.constructor.name),
            !n && y && (n = C),
            n
          );
        }
        function l(e) {
          (this.addStream = function (t) {
            t && (e = t);
          }),
            (this.mediaType = { audio: !0, video: !0 }),
            (this.startRecording = function () {
              var t,
                n = this.mediaType,
                r = this.mimeType || { audio: null, video: null, gif: null };
              if (
                ('function' !== typeof n.audio && T() && !_(e, 'audio').length && (n.audio = !1),
                'function' !== typeof n.video && T() && !_(e, 'video').length && (n.video = !1),
                'function' !== typeof n.gif && T() && !_(e, 'video').length && (n.gif = !1),
                !n.audio && !n.video && !n.gif)
              )
                throw 'MediaStream must have either audio or video tracks.';
              if (
                (n.audio &&
                  ((t = null),
                  'function' === typeof n.audio && (t = n.audio),
                  (this.audioRecorder = new o(e, {
                    type: 'audio',
                    bufferSize: this.bufferSize,
                    sampleRate: this.sampleRate,
                    numberOfAudioChannels: this.numberOfAudioChannels || 2,
                    disableLogs: this.disableLogs,
                    recorderType: t,
                    mimeType: r.audio,
                    timeSlice: this.timeSlice,
                    onTimeStamp: this.onTimeStamp,
                  })),
                  n.video || this.audioRecorder.startRecording()),
                n.video)
              ) {
                (t = null), 'function' === typeof n.video && (t = n.video);
                var a = e;
                if (T() && n.audio && 'function' === typeof n.audio) {
                  var i = _(e, 'video')[0];
                  v
                    ? ((a = new b()).addTrack(i), t && t === N && (t = C))
                    : (a = new b()).addTrack(i);
                }
                (this.videoRecorder = new o(a, {
                  type: 'video',
                  video: this.video,
                  canvas: this.canvas,
                  frameInterval: this.frameInterval || 10,
                  disableLogs: this.disableLogs,
                  recorderType: t,
                  mimeType: r.video,
                  timeSlice: this.timeSlice,
                  onTimeStamp: this.onTimeStamp,
                  workerPath: this.workerPath,
                  webAssemblyPath: this.webAssemblyPath,
                  frameRate: this.frameRate,
                  bitrate: this.bitrate,
                })),
                  n.audio || this.videoRecorder.startRecording();
              }
              if (n.audio && n.video) {
                var l = this,
                  u = !0 === T();
                ((n.audio instanceof x && n.video) ||
                  (!0 !== n.audio && !0 !== n.video && n.audio !== n.video)) &&
                  (u = !1),
                  !0 === u
                    ? ((l.audioRecorder = null), l.videoRecorder.startRecording())
                    : l.videoRecorder.initRecorder(function () {
                        l.audioRecorder.initRecorder(function () {
                          l.videoRecorder.startRecording(), l.audioRecorder.startRecording();
                        });
                      });
              }
              n.gif &&
                ((t = null),
                'function' === typeof n.gif && (t = n.gif),
                (this.gifRecorder = new o(e, {
                  type: 'gif',
                  frameRate: this.frameRate || 200,
                  quality: this.quality || 10,
                  disableLogs: this.disableLogs,
                  recorderType: t,
                  mimeType: r.gif,
                })),
                this.gifRecorder.startRecording());
            }),
            (this.stopRecording = function (e) {
              (e = e || function () {}),
                this.audioRecorder &&
                  this.audioRecorder.stopRecording(function (t) {
                    e(t, 'audio');
                  }),
                this.videoRecorder &&
                  this.videoRecorder.stopRecording(function (t) {
                    e(t, 'video');
                  }),
                this.gifRecorder &&
                  this.gifRecorder.stopRecording(function (t) {
                    e(t, 'gif');
                  });
            }),
            (this.pauseRecording = function () {
              this.audioRecorder && this.audioRecorder.pauseRecording(),
                this.videoRecorder && this.videoRecorder.pauseRecording(),
                this.gifRecorder && this.gifRecorder.pauseRecording();
            }),
            (this.resumeRecording = function () {
              this.audioRecorder && this.audioRecorder.resumeRecording(),
                this.videoRecorder && this.videoRecorder.resumeRecording(),
                this.gifRecorder && this.gifRecorder.resumeRecording();
            }),
            (this.getBlob = function (e) {
              var t = {};
              return (
                this.audioRecorder && (t.audio = this.audioRecorder.getBlob()),
                this.videoRecorder && (t.video = this.videoRecorder.getBlob()),
                this.gifRecorder && (t.gif = this.gifRecorder.getBlob()),
                e && e(t),
                t
              );
            }),
            (this.destroy = function () {
              this.audioRecorder && (this.audioRecorder.destroy(), (this.audioRecorder = null)),
                this.videoRecorder && (this.videoRecorder.destroy(), (this.videoRecorder = null)),
                this.gifRecorder && (this.gifRecorder.destroy(), (this.gifRecorder = null));
            }),
            (this.getDataURL = function (e) {
              function t(e, t) {
                if ('undefined' !== typeof Worker) {
                  var n = (function (e) {
                    var t,
                      n = p.createObjectURL(
                        new Blob(
                          [
                            e.toString(),
                            'this.onmessage =  function (eee) {' + e.name + '(eee.data);}',
                          ],
                          { type: 'application/javascript' }
                        )
                      ),
                      r = new Worker(n);
                    if ('undefined' !== typeof p) t = p;
                    else {
                      if ('undefined' === typeof webkitURL)
                        throw 'Neither URL nor webkitURL detected.';
                      t = webkitURL;
                    }
                    return t.revokeObjectURL(n), r;
                  })(function (e) {
                    postMessage(new FileReaderSync().readAsDataURL(e));
                  });
                  (n.onmessage = function (e) {
                    t(e.data);
                  }),
                    n.postMessage(e);
                } else {
                  var r = new FileReader();
                  r.readAsDataURL(e),
                    (r.onload = function (e) {
                      t(e.target.result);
                    });
                }
              }
              this.getBlob(function (n) {
                n.audio && n.video
                  ? t(n.audio, function (r) {
                      t(n.video, function (t) {
                        e({ audio: r, video: t });
                      });
                    })
                  : n.audio
                    ? t(n.audio, function (t) {
                        e({ audio: t });
                      })
                    : n.video &&
                      t(n.video, function (t) {
                        e({ video: t });
                      });
              });
            }),
            (this.writeToDisk = function () {
              o.writeToDisk({
                audio: this.audioRecorder,
                video: this.videoRecorder,
                gif: this.gifRecorder,
              });
            }),
            (this.save = function (e) {
              (e = e || { audio: !0, video: !0, gif: !0 }).audio &&
                this.audioRecorder &&
                this.audioRecorder.save('string' === typeof e.audio ? e.audio : ''),
                e.video &&
                  this.videoRecorder &&
                  this.videoRecorder.save('string' === typeof e.video ? e.video : ''),
                e.gif &&
                  this.gifRecorder &&
                  this.gifRecorder.save('string' === typeof e.gif ? e.gif : '');
            });
        }
        (o.version = '5.6.2'),
          (e.exports = o),
          void 0 ===
            (r = function () {
              return o;
            }.apply(t, [])) || (e.exports = r),
          (o.getFromDisk = function (e, t) {
            if (!t) throw 'callback is mandatory.';
            console.log(
              'Getting recorded ' + ('all' === e ? 'blobs' : e + ' blob ') + ' from disk!'
            ),
              M.Fetch(function (n, r) {
                'all' !== e && r === e + 'Blob' && t && t(n),
                  'all' === e && t && t(n, r.replace('Blob', ''));
              });
          }),
          (o.writeToDisk = function (e) {
            console.log('Writing recorded blob(s) to disk!'),
              (e = e || {}).audio && e.video && e.gif
                ? e.audio.getDataURL(function (t) {
                    e.video.getDataURL(function (n) {
                      e.gif.getDataURL(function (e) {
                        M.Store({ audioBlob: t, videoBlob: n, gifBlob: e });
                      });
                    });
                  })
                : e.audio && e.video
                  ? e.audio.getDataURL(function (t) {
                      e.video.getDataURL(function (e) {
                        M.Store({ audioBlob: t, videoBlob: e });
                      });
                    })
                  : e.audio && e.gif
                    ? e.audio.getDataURL(function (t) {
                        e.gif.getDataURL(function (e) {
                          M.Store({ audioBlob: t, gifBlob: e });
                        });
                      })
                    : e.video && e.gif
                      ? e.video.getDataURL(function (t) {
                          e.gif.getDataURL(function (e) {
                            M.Store({ videoBlob: t, gifBlob: e });
                          });
                        })
                      : e.audio
                        ? e.audio.getDataURL(function (e) {
                            M.Store({ audioBlob: e });
                          })
                        : e.video
                          ? e.video.getDataURL(function (e) {
                              M.Store({ videoBlob: e });
                            })
                          : e.gif &&
                            e.gif.getDataURL(function (e) {
                              M.Store({ gifBlob: e });
                            });
          }),
          (l.getFromDisk = o.getFromDisk),
          (l.writeToDisk = o.writeToDisk),
          (o.MRecordRTC = l);
        var u;
        (u = 'undefined' !== typeof n.g ? n.g : null) &&
          'undefined' === typeof window &&
          'undefined' !== typeof n.g &&
          ((n.g.navigator = {
            userAgent:
              'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45',
            getUserMedia: function () {},
          }),
          n.g.console || (n.g.console = {}),
          ('undefined' !== typeof n.g.console.log && 'undefined' !== typeof n.g.console.error) ||
            (n.g.console.error = n.g.console.log =
              n.g.console.log ||
              function () {
                console.log(arguments);
              }),
          'undefined' === typeof document &&
            ((u.document = {
              documentElement: {
                appendChild: function () {
                  return '';
                },
              },
            }),
            (document.createElement =
              document.captureStream =
              document.mozCaptureStream =
                function () {
                  var e = {
                    getContext: function () {
                      return e;
                    },
                    play: function () {},
                    pause: function () {},
                    drawImage: function () {},
                    toDataURL: function () {
                      return '';
                    },
                    style: {},
                  };
                  return e;
                }),
            (u.HTMLVideoElement = function () {})),
          'undefined' === typeof location &&
            (u.location = { protocol: 'file:', href: '', hash: '' }),
          'undefined' === typeof screen && (u.screen = { width: 0, height: 0 }),
          'undefined' === typeof p &&
            (u.URL = {
              createObjectURL: function () {
                return '';
              },
              revokeObjectURL: function () {
                return '';
              },
            }),
          (u.window = n.g));
        var s = window.requestAnimationFrame;
        if ('undefined' === typeof s)
          if ('undefined' !== typeof webkitRequestAnimationFrame) s = webkitRequestAnimationFrame;
          else if ('undefined' !== typeof mozRequestAnimationFrame) s = mozRequestAnimationFrame;
          else if ('undefined' !== typeof msRequestAnimationFrame) s = msRequestAnimationFrame;
          else if ('undefined' === typeof s) {
            var c = 0;
            s = function (e, t) {
              var n = new Date().getTime(),
                r = Math.max(0, 16 - (n - c)),
                o = setTimeout(function () {
                  e(n + r);
                }, r);
              return (c = n + r), o;
            };
          }
        var d = window.cancelAnimationFrame;
        'undefined' === typeof d &&
          ('undefined' !== typeof webkitCancelAnimationFrame
            ? (d = webkitCancelAnimationFrame)
            : 'undefined' !== typeof mozCancelAnimationFrame
              ? (d = mozCancelAnimationFrame)
              : 'undefined' !== typeof msCancelAnimationFrame
                ? (d = msCancelAnimationFrame)
                : 'undefined' === typeof d &&
                  (d = function (e) {
                    clearTimeout(e);
                  }));
        var f = window.AudioContext;
        'undefined' === typeof f &&
          ('undefined' !== typeof webkitAudioContext && (f = webkitAudioContext),
          'undefined' !== typeof mozAudioContext && (f = mozAudioContext));
        var p = window.URL;
        'undefined' === typeof p && 'undefined' !== typeof webkitURL && (p = webkitURL),
          'undefined' !== typeof navigator &&
            'undefined' === typeof navigator.getUserMedia &&
            ('undefined' !== typeof navigator.webkitGetUserMedia &&
              (navigator.getUserMedia = navigator.webkitGetUserMedia),
            'undefined' !== typeof navigator.mozGetUserMedia &&
              (navigator.getUserMedia = navigator.mozGetUserMedia));
        var h =
            -1 !== navigator.userAgent.indexOf('Edge') &&
            (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob),
          m = !!window.opera || -1 !== navigator.userAgent.indexOf('OPR/'),
          v =
            navigator.userAgent.toLowerCase().indexOf('firefox') > -1 &&
            'netscape' in window &&
            / rv:/.test(navigator.userAgent),
          g =
            (!m && !h && !!navigator.webkitGetUserMedia) ||
            k() ||
            -1 !== navigator.userAgent.toLowerCase().indexOf('chrome/'),
          y = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        y && !g && -1 !== navigator.userAgent.indexOf('CriOS') && ((y = !1), (g = !0));
        var b = window.MediaStream;
        function w(e) {
          if (0 === e) return '0 Bytes';
          var t = parseInt(Math.floor(Math.log(e) / Math.log(1e3)), 10);
          return (e / Math.pow(1e3, t)).toPrecision(3) + ' ' + ['Bytes', 'KB', 'MB', 'GB', 'TB'][t];
        }
        function S(e, t) {
          if (!e) throw 'Blob object is required.';
          if (!e.type)
            try {
              e.type = 'video/webm';
            } catch (i) {}
          var n = (e.type || 'video/webm').split('/')[1];
          if ((-1 !== n.indexOf(';') && (n = n.split(';')[0]), t && -1 !== t.indexOf('.'))) {
            var r = t.split('.');
            (t = r[0]), (n = r[1]);
          }
          var o = (t || Math.round(9999999999 * Math.random()) + 888888888) + '.' + n;
          if ('undefined' !== typeof navigator.msSaveOrOpenBlob)
            return navigator.msSaveOrOpenBlob(e, o);
          if ('undefined' !== typeof navigator.msSaveBlob) return navigator.msSaveBlob(e, o);
          var a = document.createElement('a');
          (a.href = p.createObjectURL(e)),
            (a.download = o),
            (a.style = 'display:none;opacity:0;color:transparent;'),
            (document.body || document.documentElement).appendChild(a),
            'function' === typeof a.click
              ? a.click()
              : ((a.target = '_blank'),
                a.dispatchEvent(
                  new MouseEvent('click', { view: window, bubbles: !0, cancelable: !0 })
                )),
            p.revokeObjectURL(a.href);
        }
        function k() {
          return (
            ('undefined' !== typeof window &&
              'object' === typeof window.process &&
              'renderer' === window.process.type) ||
            !(
              'undefined' === typeof process ||
              'object' !== typeof process.versions ||
              !process.versions.electron
            ) ||
            ('object' === typeof navigator &&
              'string' === typeof navigator.userAgent &&
              navigator.userAgent.indexOf('Electron') >= 0)
          );
        }
        function _(e, t) {
          return e && e.getTracks
            ? e.getTracks().filter(function (e) {
                return e.kind === (t || 'audio');
              })
            : [];
        }
        function R(e, t) {
          'srcObject' in t
            ? (t.srcObject = e)
            : 'mozSrcObject' in t
              ? (t.mozSrcObject = e)
              : (t.srcObject = e);
        }
        'undefined' === typeof b &&
          'undefined' !== typeof webkitMediaStream &&
          (b = webkitMediaStream),
          'undefined' !== typeof b &&
            'undefined' === typeof b.prototype.stop &&
            (b.prototype.stop = function () {
              this.getTracks().forEach(function (e) {
                e.stop();
              });
            }),
          (o.invokeSaveAsDialog = S),
          (o.getTracks = _),
          (o.getSeekableBlob = function (e, t) {
            if ('undefined' === typeof EBML)
              throw new Error('Please link: https://www.webrtc-experiment.com/EBML.js');
            var n = new EBML.Reader(),
              r = new EBML.Decoder(),
              o = EBML.tools,
              a = new FileReader();
            (a.onload = function (e) {
              r.decode(this.result).forEach(function (e) {
                n.read(e);
              }),
                n.stop();
              var a = o.makeMetadataSeekable(n.metadatas, n.duration, n.cues),
                i = this.result.slice(n.metadataSize),
                l = new Blob([a, i], { type: 'video/webm' });
              t(l);
            }),
              a.readAsArrayBuffer(e);
          }),
          (o.bytesToSize = w),
          (o.isElectron = k);
        var E = {};
        function T() {
          if (v || y || h) return !0;
          navigator.appVersion;
          var e,
            t,
            n = navigator.userAgent,
            r = '' + parseFloat(navigator.appVersion),
            o = parseInt(navigator.appVersion, 10);
          return (
            (g || m) && ((e = n.indexOf('Chrome')), (r = n.substring(e + 7))),
            -1 !== (t = r.indexOf(';')) && (r = r.substring(0, t)),
            -1 !== (t = r.indexOf(' ')) && (r = r.substring(0, t)),
            (o = parseInt('' + r, 10)),
            isNaN(o) &&
              ((r = '' + parseFloat(navigator.appVersion)),
              (o = parseInt(navigator.appVersion, 10))),
            o >= 49
          );
        }
        function C(e, t) {
          var n = this;
          if ('undefined' === typeof e) throw 'First argument "MediaStream" is required.';
          if ('undefined' === typeof MediaRecorder)
            throw 'Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.';
          if ('audio' === (t = t || { mimeType: 'video/webm' }).type) {
            var r;
            if (_(e, 'video').length && _(e, 'audio').length)
              navigator.mozGetUserMedia
                ? (r = new b()).addTrack(_(e, 'audio')[0])
                : (r = new b(_(e, 'audio'))),
                (e = r);
            (t.mimeType && -1 !== t.mimeType.toString().toLowerCase().indexOf('audio')) ||
              (t.mimeType = g ? 'audio/webm' : 'audio/ogg'),
              t.mimeType &&
                'audio/ogg' !== t.mimeType.toString().toLowerCase() &&
                navigator.mozGetUserMedia &&
                (t.mimeType = 'audio/ogg');
          }
          var o,
            a = [];
          function i() {
            n.timestamps.push(new Date().getTime()),
              'function' === typeof t.onTimeStamp &&
                t.onTimeStamp(n.timestamps[n.timestamps.length - 1], n.timestamps);
          }
          function l(e) {
            return o && o.mimeType ? o.mimeType : e.mimeType || 'video/webm';
          }
          function u() {
            (a = []), (o = null), (n.timestamps = []);
          }
          (this.getArrayOfBlobs = function () {
            return a;
          }),
            (this.record = function () {
              (n.blob = null), n.clearRecordedData(), (n.timestamps = []), (s = []), (a = []);
              var r = t;
              t.disableLogs || console.log('Passing following config over MediaRecorder API.', r),
                o && (o = null),
                g && !T() && (r = 'video/vp8'),
                'function' === typeof MediaRecorder.isTypeSupported &&
                  r.mimeType &&
                  (MediaRecorder.isTypeSupported(r.mimeType) ||
                    (t.disableLogs ||
                      console.warn(
                        'MediaRecorder API seems unable to record mimeType:',
                        r.mimeType
                      ),
                    (r.mimeType = 'audio' === t.type ? 'audio/webm' : 'video/webm')));
              try {
                (o = new MediaRecorder(e, r)), (t.mimeType = r.mimeType);
              } catch (u) {
                o = new MediaRecorder(e);
              }
              r.mimeType &&
                !MediaRecorder.isTypeSupported &&
                'canRecordMimeType' in o &&
                !1 === o.canRecordMimeType(r.mimeType) &&
                (t.disableLogs ||
                  console.warn('MediaRecorder API seems unable to record mimeType:', r.mimeType)),
                (o.ondataavailable = function (e) {
                  if (
                    (e.data && s.push('ondataavailable: ' + w(e.data.size)),
                    'number' !== typeof t.timeSlice)
                  )
                    !e.data || !e.data.size || e.data.size < 100 || n.blob
                      ? n.recordingCallback &&
                        (n.recordingCallback(new Blob([], { type: l(r) })),
                        (n.recordingCallback = null))
                      : ((n.blob = t.getNativeBlob ? e.data : new Blob([e.data], { type: l(r) })),
                        n.recordingCallback &&
                          (n.recordingCallback(n.blob), (n.recordingCallback = null)));
                  else if (
                    e.data &&
                    e.data.size &&
                    (a.push(e.data), i(), 'function' === typeof t.ondataavailable)
                  ) {
                    var o = t.getNativeBlob ? e.data : new Blob([e.data], { type: l(r) });
                    t.ondataavailable(o);
                  }
                }),
                (o.onstart = function () {
                  s.push('started');
                }),
                (o.onpause = function () {
                  s.push('paused');
                }),
                (o.onresume = function () {
                  s.push('resumed');
                }),
                (o.onstop = function () {
                  s.push('stopped');
                }),
                (o.onerror = function (e) {
                  e &&
                    (e.name || (e.name = 'UnknownError'),
                    s.push('error: ' + e),
                    t.disableLogs ||
                      (-1 !== e.name.toString().toLowerCase().indexOf('invalidstate')
                        ? console.error(
                            'The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.',
                            e
                          )
                        : -1 !== e.name.toString().toLowerCase().indexOf('notsupported')
                          ? console.error('MIME type (', r.mimeType, ') is not supported.', e)
                          : -1 !== e.name.toString().toLowerCase().indexOf('security')
                            ? console.error('MediaRecorder security error', e)
                            : 'OutOfMemory' === e.name
                              ? console.error(
                                  'The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.',
                                  e
                                )
                              : 'IllegalStreamModification' === e.name
                                ? console.error(
                                    'A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.',
                                    e
                                  )
                                : 'OtherRecordingError' === e.name
                                  ? console.error(
                                      'Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.',
                                      e
                                    )
                                  : 'GenericError' === e.name
                                    ? console.error(
                                        'The UA cannot provide the codec or recording option that has been requested.',
                                        e
                                      )
                                    : console.error('MediaRecorder Error', e)),
                    (function (e) {
                      if (!n.manuallyStopped && o && 'inactive' === o.state)
                        return delete t.timeslice, void o.start(6e5);
                      setTimeout(void 0, 1e3);
                    })(),
                    'inactive' !== o.state && 'stopped' !== o.state && o.stop());
                }),
                'number' === typeof t.timeSlice ? (i(), o.start(t.timeSlice)) : o.start(36e5),
                t.initCallback && t.initCallback();
            }),
            (this.timestamps = []),
            (this.stop = function (e) {
              (e = e || function () {}),
                (n.manuallyStopped = !0),
                o &&
                  ((this.recordingCallback = e),
                  'recording' === o.state && o.stop(),
                  'number' === typeof t.timeSlice &&
                    setTimeout(function () {
                      (n.blob = new Blob(a, { type: l(t) })), n.recordingCallback(n.blob);
                    }, 100));
            }),
            (this.pause = function () {
              o && 'recording' === o.state && o.pause();
            }),
            (this.resume = function () {
              o && 'paused' === o.state && o.resume();
            }),
            (this.clearRecordedData = function () {
              o && 'recording' === o.state && n.stop(u), u();
            }),
            (this.getInternalRecorder = function () {
              return o;
            }),
            (this.blob = null),
            (this.getState = function () {
              return (o && o.state) || 'inactive';
            });
          var s = [];
          (this.getAllStates = function () {
            return s;
          }),
            'undefined' === typeof t.checkForInactiveTracks && (t.checkForInactiveTracks = !1);
          n = this;
          !(function r() {
            if (o && !1 !== t.checkForInactiveTracks)
              return !1 ===
                (function () {
                  if ('active' in e) {
                    if (!e.active) return !1;
                  } else if ('ended' in e && e.ended) return !1;
                  return !0;
                })()
                ? (t.disableLogs || console.log('MediaStream seems stopped.'), void n.stop())
                : void setTimeout(r, 1e3);
          })(),
            (this.name = 'MediaStreamRecorder'),
            (this.toString = function () {
              return this.name;
            });
        }
        function x(e, t) {
          if (!_(e, 'audio').length) throw 'Your stream has no audio tracks.';
          var n,
            r = this,
            a = [],
            i = [],
            l = !1,
            u = 0,
            s = 2,
            c = (t = t || {}).desiredSampRate;
          function d() {
            if (!1 === t.checkForInactiveTracks) return !0;
            if ('active' in e) {
              if (!e.active) return !1;
            } else if ('ended' in e && e.ended) return !1;
            return !0;
          }
          function f(e, t) {
            function n(e, t) {
              var n,
                r = e.numberOfAudioChannels,
                o = e.leftBuffers.slice(0),
                a = e.rightBuffers.slice(0),
                i = e.sampleRate,
                l = e.internalInterleavedLength,
                u = e.desiredSampRate;
              function s(e, t, n) {
                var r = Math.round(e.length * (t / n)),
                  o = [],
                  a = Number((e.length - 1) / (r - 1));
                o[0] = e[0];
                for (var i = 1; i < r - 1; i++) {
                  var l = i * a,
                    u = Number(Math.floor(l)).toFixed(),
                    s = Number(Math.ceil(l)).toFixed(),
                    d = l - u;
                  o[i] = c(e[u], e[s], d);
                }
                return (o[r - 1] = e[e.length - 1]), o;
              }
              function c(e, t, n) {
                return e + (t - e) * n;
              }
              function d(e, t) {
                for (var n = new Float64Array(t), r = 0, o = e.length, a = 0; a < o; a++) {
                  var i = e[a];
                  n.set(i, r), (r += i.length);
                }
                return n;
              }
              function f(e, t, n) {
                for (var r = n.length, o = 0; o < r; o++) e.setUint8(t + o, n.charCodeAt(o));
              }
              2 === r && ((o = d(o, l)), (a = d(a, l)), u && ((o = s(o, u, i)), (a = s(a, u, i)))),
                1 === r && ((o = d(o, l)), u && (o = s(o, u, i))),
                u && (i = u),
                2 === r &&
                  (n = (function (e, t) {
                    for (
                      var n = e.length + t.length, r = new Float64Array(n), o = 0, a = 0;
                      a < n;

                    )
                      (r[a++] = e[o]), (r[a++] = t[o]), o++;
                    return r;
                  })(o, a)),
                1 === r && (n = o);
              var p = n.length,
                h = new ArrayBuffer(44 + 2 * p),
                m = new DataView(h);
              f(m, 0, 'RIFF'),
                m.setUint32(4, 36 + 2 * p, !0),
                f(m, 8, 'WAVE'),
                f(m, 12, 'fmt '),
                m.setUint32(16, 16, !0),
                m.setUint16(20, 1, !0),
                m.setUint16(22, r, !0),
                m.setUint32(24, i, !0),
                m.setUint32(28, i * r * 2, !0),
                m.setUint16(32, 2 * r, !0),
                m.setUint16(34, 16, !0),
                f(m, 36, 'data'),
                m.setUint32(40, 2 * p, !0);
              for (var v = p, g = 44, y = 0; y < v; y++) m.setInt16(g, 32767 * n[y], !0), (g += 2);
              if (t) return t({ buffer: h, view: m });
              postMessage({ buffer: h, view: m });
            }
            if (e.noWorker)
              n(e, function (e) {
                t(e.buffer, e.view);
              });
            else {
              var r = (function (e) {
                var t = p.createObjectURL(
                    new Blob(
                      [
                        e.toString(),
                        ';this.onmessage =  function (eee) {' + e.name + '(eee.data);}',
                      ],
                      { type: 'application/javascript' }
                    )
                  ),
                  n = new Worker(t);
                return (n.workerURL = t), n;
              })(n);
              (r.onmessage = function (e) {
                t(e.data.buffer, e.data.view), p.revokeObjectURL(r.workerURL), r.terminate();
              }),
                r.postMessage(e);
            }
          }
          !0 === t.leftChannel && (s = 1),
            1 === t.numberOfAudioChannels && (s = 1),
            (!s || s < 1) && (s = 2),
            t.disableLogs ||
              console.log('StereoAudioRecorder is set to record number of channels: ' + s),
            'undefined' === typeof t.checkForInactiveTracks && (t.checkForInactiveTracks = !0),
            (this.record = function () {
              if (!1 === d()) throw 'Please make sure MediaStream is active.';
              w(), (k = b = !1), (l = !0), 'undefined' !== typeof t.timeSlice && E();
            }),
            (this.stop = function (e) {
              (e = e || function () {}),
                (l = !1),
                f(
                  {
                    desiredSampRate: c,
                    sampleRate: y,
                    numberOfAudioChannels: s,
                    internalInterleavedLength: u,
                    leftBuffers: a,
                    rightBuffers: 1 === s ? [] : i,
                    noWorker: t.noWorker,
                  },
                  function (t, n) {
                    (r.blob = new Blob([n], { type: 'audio/wav' })),
                      (r.buffer = new ArrayBuffer(n.buffer.byteLength)),
                      (r.view = n),
                      (r.sampleRate = c || y),
                      (r.bufferSize = g),
                      (r.length = u),
                      (k = !1),
                      e && e(r.blob);
                  }
                );
            }),
            'undefined' === typeof o.Storage &&
              (o.Storage = {
                AudioContextConstructor: null,
                AudioContext: window.AudioContext || window.webkitAudioContext,
              }),
            (o.Storage.AudioContextConstructor &&
              'closed' !== o.Storage.AudioContextConstructor.state) ||
              (o.Storage.AudioContextConstructor = new o.Storage.AudioContext());
          var h = o.Storage.AudioContextConstructor,
            m = h.createMediaStreamSource(e),
            v = [0, 256, 512, 1024, 2048, 4096, 8192, 16384],
            g = 'undefined' === typeof t.bufferSize ? 4096 : t.bufferSize;
          if (
            (-1 === v.indexOf(g) &&
              (t.disableLogs ||
                console.log('Legal values for buffer-size are ' + JSON.stringify(v, null, '\t'))),
            h.createJavaScriptNode)
          )
            n = h.createJavaScriptNode(g, s, s);
          else {
            if (!h.createScriptProcessor) throw 'WebAudio API has no support on this browser.';
            n = h.createScriptProcessor(g, s, s);
          }
          m.connect(n), t.bufferSize || (g = n.bufferSize);
          var y = 'undefined' !== typeof t.sampleRate ? t.sampleRate : h.sampleRate || 44100;
          (y < 22050 || y > 96e3) &&
            (t.disableLogs || console.log('sample-rate must be under range 22050 and 96000.')),
            t.disableLogs ||
              (t.desiredSampRate && console.log('Desired sample-rate: ' + t.desiredSampRate));
          var b = !1;
          function w() {
            (a = []),
              (i = []),
              (u = 0),
              (k = !1),
              (l = !1),
              (b = !1),
              (h = null),
              (r.leftchannel = a),
              (r.rightchannel = i),
              (r.numberOfAudioChannels = s),
              (r.desiredSampRate = c),
              (r.sampleRate = y),
              (r.recordingLength = u),
              (R = { left: [], right: [], recordingLength: 0 });
          }
          function S() {
            n && ((n.onaudioprocess = null), n.disconnect(), (n = null)),
              m && (m.disconnect(), (m = null)),
              w();
          }
          (this.pause = function () {
            b = !0;
          }),
            (this.resume = function () {
              if (!1 === d()) throw 'Please make sure MediaStream is active.';
              if (!l)
                return (
                  t.disableLogs || console.log('Seems recording has been restarted.'),
                  void this.record()
                );
              b = !1;
            }),
            (this.clearRecordedData = function () {
              (t.checkForInactiveTracks = !1), l && this.stop(S), S();
            }),
            (this.name = 'StereoAudioRecorder'),
            (this.toString = function () {
              return this.name;
            });
          var k = !1;
          (n.onaudioprocess = function (e) {
            if (!b)
              if (
                (!1 === d() &&
                  (t.disableLogs || console.log('MediaStream seems stopped.'),
                  n.disconnect(),
                  (l = !1)),
                l)
              ) {
                k ||
                  ((k = !0),
                  t.onAudioProcessStarted && t.onAudioProcessStarted(),
                  t.initCallback && t.initCallback());
                var o = e.inputBuffer.getChannelData(0),
                  c = new Float32Array(o);
                if ((a.push(c), 2 === s)) {
                  var f = e.inputBuffer.getChannelData(1),
                    p = new Float32Array(f);
                  i.push(p);
                }
                (u += g),
                  (r.recordingLength = u),
                  'undefined' !== typeof t.timeSlice &&
                    ((R.recordingLength += g), R.left.push(c), 2 === s && R.right.push(p));
              } else m && (m.disconnect(), (m = null));
          }),
            h.createMediaStreamDestination
              ? n.connect(h.createMediaStreamDestination())
              : n.connect(h.destination),
            (this.leftchannel = a),
            (this.rightchannel = i),
            (this.numberOfAudioChannels = s),
            (this.desiredSampRate = c),
            (this.sampleRate = y),
            (r.recordingLength = u);
          var R = { left: [], right: [], recordingLength: 0 };
          function E() {
            l &&
              'function' === typeof t.ondataavailable &&
              'undefined' !== typeof t.timeSlice &&
              (R.left.length
                ? (f(
                    {
                      desiredSampRate: c,
                      sampleRate: y,
                      numberOfAudioChannels: s,
                      internalInterleavedLength: R.recordingLength,
                      leftBuffers: R.left,
                      rightBuffers: 1 === s ? [] : R.right,
                    },
                    function (e, n) {
                      var r = new Blob([n], { type: 'audio/wav' });
                      t.ondataavailable(r), setTimeout(E, t.timeSlice);
                    }
                  ),
                  (R = { left: [], right: [], recordingLength: 0 }))
                : setTimeout(E, t.timeSlice));
          }
        }
        function L(e, t) {
          if ('undefined' === typeof html2canvas)
            throw 'Please link: https://www.webrtc-experiment.com/screenshot.js';
          (t = t || {}).frameInterval || (t.frameInterval = 10);
          var n = !1;
          ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function (e) {
            e in document.createElement('canvas') && (n = !0);
          });
          var r,
            o,
            a,
            i =
              (!!window.webkitRTCPeerConnection || !!window.webkitGetUserMedia) && !!window.chrome,
            l = 50,
            u = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
          if (
            (i && u && u[2] && (l = parseInt(u[2], 10)),
            i && l < 52 && (n = !1),
            t.useWhammyRecorder && (n = !1),
            n)
          )
            if (
              (t.disableLogs ||
                console.log(
                  'Your browser supports both MediRecorder API and canvas.captureStream!'
                ),
              e instanceof HTMLCanvasElement)
            )
              r = e;
            else {
              if (!(e instanceof CanvasRenderingContext2D))
                throw 'Please pass either HTMLCanvasElement or CanvasRenderingContext2D.';
              r = e.canvas;
            }
          else
            navigator.mozGetUserMedia &&
              (t.disableLogs || console.error('Canvas recording is NOT supported in Firefox.'));
          (this.record = function () {
            if (((a = !0), n && !t.useWhammyRecorder)) {
              var e;
              'captureStream' in r
                ? (e = r.captureStream(25))
                : 'mozCaptureStream' in r
                  ? (e = r.mozCaptureStream(25))
                  : 'webkitCaptureStream' in r && (e = r.webkitCaptureStream(25));
              try {
                var i = new b();
                i.addTrack(_(e, 'video')[0]), (e = i);
              } catch (l) {}
              if (!e) throw 'captureStream API are NOT available.';
              (o = new C(e, { mimeType: t.mimeType || 'video/webm' })).record();
            } else (h.frames = []), (p = new Date().getTime()), f();
            t.initCallback && t.initCallback();
          }),
            (this.getWebPImages = function (n) {
              if ('canvas' === e.nodeName.toLowerCase()) {
                var r = h.frames.length;
                h.frames.forEach(function (e, n) {
                  var o = r - n;
                  t.disableLogs || console.log(o + '/' + r + ' frames remaining'),
                    t.onEncodingCallback && t.onEncodingCallback(o, r);
                  var a = e.image.toDataURL('image/webp', 1);
                  h.frames[n].image = a;
                }),
                  t.disableLogs || console.log('Generating WebM'),
                  n();
              } else n();
            }),
            (this.stop = function (e) {
              a = !1;
              var r = this;
              n && o
                ? o.stop(e)
                : this.getWebPImages(function () {
                    h.compile(function (n) {
                      t.disableLogs || console.log('Recording finished!'),
                        (r.blob = n),
                        r.blob.forEach && (r.blob = new Blob([], { type: 'video/webm' })),
                        e && e(r.blob),
                        (h.frames = []);
                    });
                  });
            });
          var s = !1;
          function c() {
            (h.frames = []), (a = !1), (s = !1);
          }
          function d() {
            var t = document.createElement('canvas'),
              n = t.getContext('2d');
            return (t.width = e.width), (t.height = e.height), n.drawImage(e, 0, 0), t;
          }
          function f() {
            if (s) return (p = new Date().getTime()), setTimeout(f, 500);
            if ('canvas' === e.nodeName.toLowerCase()) {
              var n = new Date().getTime() - p;
              return (
                (p = new Date().getTime()),
                h.frames.push({ image: d(), duration: n }),
                void (a && setTimeout(f, t.frameInterval))
              );
            }
            html2canvas(e, {
              grabMouse: 'undefined' === typeof t.showMousePointer || t.showMousePointer,
              onrendered: function (e) {
                var n = new Date().getTime() - p;
                if (!n) return setTimeout(f, t.frameInterval);
                (p = new Date().getTime()),
                  h.frames.push({ image: e.toDataURL('image/webp', 1), duration: n }),
                  a && setTimeout(f, t.frameInterval);
              },
            });
          }
          (this.pause = function () {
            (s = !0), o instanceof C && o.pause();
          }),
            (this.resume = function () {
              (s = !1), o instanceof C ? o.resume() : a || this.record();
            }),
            (this.clearRecordedData = function () {
              a && this.stop(c), c();
            }),
            (this.name = 'CanvasRecorder'),
            (this.toString = function () {
              return this.name;
            });
          var p = new Date().getTime(),
            h = new A.Video(100);
        }
        function N(e, t) {
          function n(e) {
            e = 'undefined' !== typeof e ? e : 10;
            var t = new Date().getTime() - u;
            return t
              ? a
                ? ((u = new Date().getTime()), setTimeout(n, 100))
                : ((u = new Date().getTime()),
                  l.paused && l.play(),
                  d.drawImage(l, 0, 0, c.width, c.height),
                  s.frames.push({ duration: t, image: c.toDataURL('image/webp') }),
                  void (o || setTimeout(n, e, e)))
              : setTimeout(n, e, e);
          }
          function r(e, t, n, r, o) {
            var a = document.createElement('canvas');
            (a.width = c.width), (a.height = c.height);
            var i = a.getContext('2d'),
              l = [],
              u = -1 === t,
              s = t && t > 0 && t <= e.length ? t : e.length,
              d = 0,
              f = 0,
              p = 0,
              h = Math.sqrt(Math.pow(255, 2) + Math.pow(255, 2) + Math.pow(255, 2)),
              m = n && n >= 0 && n <= 1 ? n : 0,
              v = r && r >= 0 && r <= 1 ? r : 0,
              g = !1;
            !(function (e) {
              var t = -1,
                n = e.length;
              !(function r() {
                ++t !== n
                  ? setTimeout(function () {
                      e.functionToLoop(r, t);
                    }, 1)
                  : e.callback();
              })();
            })({
              length: s,
              functionToLoop: function (t, n) {
                var r,
                  o,
                  a,
                  s = function () {
                    (!g && a - r <= a * v) || (u && (g = !0), l.push(e[n])), t();
                  };
                if (g) s();
                else {
                  var y = new Image();
                  (y.onload = function () {
                    i.drawImage(y, 0, 0, c.width, c.height);
                    var e = i.getImageData(0, 0, c.width, c.height);
                    (r = 0), (o = e.data.length), (a = e.data.length / 4);
                    for (var t = 0; t < o; t += 4) {
                      var n = { r: e.data[t], g: e.data[t + 1], b: e.data[t + 2] };
                      Math.sqrt(
                        Math.pow(n.r - d, 2) + Math.pow(n.g - f, 2) + Math.pow(n.b - p, 2)
                      ) <=
                        h * m && r++;
                    }
                    s();
                  }),
                    (y.src = e[n].image);
                }
              },
              callback: function () {
                (l = l.concat(e.slice(s))).length <= 0 && l.push(e[e.length - 1]), o(l);
              },
            });
          }
          (t = t || {}).frameInterval || (t.frameInterval = 10),
            t.disableLogs || console.log('Using frames-interval:', t.frameInterval),
            (this.record = function () {
              t.width || (t.width = 320),
                t.height || (t.height = 240),
                t.video || (t.video = { width: t.width, height: t.height }),
                t.canvas || (t.canvas = { width: t.width, height: t.height }),
                (c.width = t.canvas.width || 320),
                (c.height = t.canvas.height || 240),
                (d = c.getContext('2d')),
                t.video && t.video instanceof HTMLVideoElement
                  ? ((l = t.video.cloneNode()), t.initCallback && t.initCallback())
                  : ((l = document.createElement('video')),
                    R(e, l),
                    (l.onloadedmetadata = function () {
                      t.initCallback && t.initCallback();
                    }),
                    (l.width = t.video.width),
                    (l.height = t.video.height)),
                (l.muted = !0),
                l.play(),
                (u = new Date().getTime()),
                (s = new A.Video()),
                t.disableLogs ||
                  (console.log('canvas resolutions', c.width, '*', c.height),
                  console.log('video width/height', l.width || c.width, '*', l.height || c.height)),
                n(t.frameInterval);
            });
          var o = !1;
          this.stop = function (e) {
            (e = e || function () {}), (o = !0);
            var n = this;
            setTimeout(function () {
              r(s.frames, -1, null, null, function (r) {
                (s.frames = r),
                  t.advertisement &&
                    t.advertisement.length &&
                    (s.frames = t.advertisement.concat(s.frames)),
                  s.compile(function (t) {
                    (n.blob = t),
                      n.blob.forEach && (n.blob = new Blob([], { type: 'video/webm' })),
                      e && e(n.blob);
                  });
              });
            }, 10);
          };
          var a = !1;
          function i() {
            (s.frames = []), (o = !0), (a = !1);
          }
          (this.pause = function () {
            a = !0;
          }),
            (this.resume = function () {
              (a = !1), o && this.record();
            }),
            (this.clearRecordedData = function () {
              o || this.stop(i), i();
            }),
            (this.name = 'WhammyRecorder'),
            (this.toString = function () {
              return this.name;
            });
          var l,
            u,
            s,
            c = document.createElement('canvas'),
            d = c.getContext('2d');
        }
        'undefined' !== typeof f
          ? (E.AudioContext = f)
          : 'undefined' !== typeof webkitAudioContext && (E.AudioContext = webkitAudioContext),
          (o.Storage = E),
          (o.MediaStreamRecorder = C),
          (o.StereoAudioRecorder = x),
          (o.CanvasRecorder = L),
          (o.WhammyRecorder = N);
        var A = (function () {
          function e(e) {
            (this.frames = []), (this.duration = e || 1), (this.quality = 0.8);
          }
          function t(e) {
            function t(e, t, n) {
              return [{ data: e, id: 231 }].concat(
                n.map(function (e) {
                  var n = (function (e) {
                    var t = 0;
                    e.keyframe && (t |= 128);
                    e.invisible && (t |= 8);
                    e.lacing && (t |= e.lacing << 1);
                    e.discardable && (t |= 1);
                    if (e.trackNum > 127) throw 'TrackNumber > 127 not supported';
                    return (
                      [128 | e.trackNum, e.timecode >> 8, 255 & e.timecode, t]
                        .map(function (e) {
                          return String.fromCharCode(e);
                        })
                        .join('') + e.frame
                    );
                  })({
                    discardable: 0,
                    frame: e.data.slice(4),
                    invisible: 0,
                    keyframe: 1,
                    lacing: 0,
                    trackNum: 1,
                    timecode: Math.round(t),
                  });
                  return (t += e.duration), { data: n, id: 163 };
                })
              );
            }
            function n(e) {
              for (var t = []; e > 0; ) t.push(255 & e), (e >>= 8);
              return new Uint8Array(t.reverse());
            }
            function r(e) {
              var t = [];
              e = (e.length % 8 ? new Array(9 - (e.length % 8)).join('0') : '') + e;
              for (var n = 0; n < e.length; n += 8) t.push(parseInt(e.substr(n, 8), 2));
              return new Uint8Array(t);
            }
            function o(e) {
              for (var t = [], a = 0; a < e.length; a++) {
                var i = e[a].data;
                'object' === typeof i && (i = o(i)),
                  'number' === typeof i && (i = r(i.toString(2))),
                  'string' === typeof i &&
                    (i = new Uint8Array(
                      i.split('').map(function (e) {
                        return e.charCodeAt(0);
                      })
                    ));
                var l = i.size || i.byteLength || i.length,
                  u = Math.ceil(Math.ceil(Math.log(l) / Math.log(2)) / 8),
                  s = l.toString(2),
                  c = new Array(7 * u + 7 + 1 - s.length).join('0') + s,
                  d = new Array(u).join('0') + '1' + c;
                t.push(n(e[a].id)), t.push(r(d)), t.push(i);
              }
              return new Blob(t, { type: 'video/webm' });
            }
            function a(e, t) {
              return parseInt(
                e
                  .substr(t + 4, 4)
                  .split('')
                  .map(function (e) {
                    var t = e.charCodeAt(0).toString(2);
                    return new Array(8 - t.length + 1).join('0') + t;
                  })
                  .join(''),
                2
              );
            }
            function i(e) {
              for (var t = 0, n = {}; t < e.length; ) {
                var r = e.substr(t, 4),
                  o = a(e, t),
                  l = e.substr(t + 4 + 4, o);
                (t += 8 + o),
                  (n[r] = n[r] || []),
                  'RIFF' === r || 'LIST' === r ? n[r].push(i(l)) : n[r].push(l);
              }
              return n;
            }
            var l = new (function (e) {
              var n = (function (e) {
                if (!e[0])
                  return void postMessage({
                    error:
                      'Something went wrong. Maybe WebP format is not supported in the current browser.',
                  });
                for (
                  var t = e[0].width, n = e[0].height, r = e[0].duration, o = 1;
                  o < e.length;
                  o++
                )
                  r += e[o].duration;
                return { duration: r, width: t, height: n };
              })(e);
              if (!n) return [];
              for (
                var r,
                  a = [
                    {
                      id: 440786851,
                      data: [
                        { data: 1, id: 17030 },
                        { data: 1, id: 17143 },
                        { data: 4, id: 17138 },
                        { data: 8, id: 17139 },
                        { data: 'webm', id: 17026 },
                        { data: 2, id: 17031 },
                        { data: 2, id: 17029 },
                      ],
                    },
                    {
                      id: 408125543,
                      data: [
                        {
                          id: 357149030,
                          data: [
                            { data: 1e6, id: 2807729 },
                            { data: 'whammy', id: 19840 },
                            { data: 'whammy', id: 22337 },
                            {
                              data:
                                ((r = n.duration),
                                [].slice
                                  .call(new Uint8Array(new Float64Array([r]).buffer), 0)
                                  .map(function (e) {
                                    return String.fromCharCode(e);
                                  })
                                  .reverse()
                                  .join('')),
                              id: 17545,
                            },
                          ],
                        },
                        {
                          id: 374648427,
                          data: [
                            {
                              id: 174,
                              data: [
                                { data: 1, id: 215 },
                                { data: 1, id: 29637 },
                                { data: 0, id: 156 },
                                { data: 'und', id: 2274716 },
                                { data: 'V_VP8', id: 134 },
                                { data: 'VP8', id: 2459272 },
                                { data: 1, id: 131 },
                                {
                                  id: 224,
                                  data: [
                                    { data: n.width, id: 176 },
                                    { data: n.height, id: 186 },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  i = 0,
                  l = 0;
                i < e.length;

              ) {
                var u = [],
                  s = 0;
                do {
                  u.push(e[i]), (s += e[i].duration), i++;
                } while (i < e.length && s < 3e4);
                var c = { id: 524531317, data: t(l, 0, u) };
                a[1].data.push(c), (l += s);
              }
              return o(a);
            })(
              e.map(function (e) {
                var t = (function (e) {
                  for (
                    var t = e.RIFF[0].WEBP[0], n = t.indexOf('\x9d\x01*'), r = 0, o = [];
                    r < 4;
                    r++
                  )
                    o[r] = t.charCodeAt(n + 3 + r);
                  return {
                    width: 16383 & ((o[1] << 8) | o[0]),
                    height: 16383 & ((o[3] << 8) | o[2]),
                    data: t,
                    riff: e,
                  };
                })(i(atob(e.image.slice(23))));
                return (t.duration = e.duration), t;
              })
            );
            postMessage(l);
          }
          return (
            (e.prototype.add = function (e, t) {
              if (
                ('canvas' in e && (e = e.canvas),
                'toDataURL' in e && (e = e.toDataURL('image/webp', this.quality)),
                !/^data:image\/webp;base64,/gi.test(e))
              )
                throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
              this.frames.push({ image: e, duration: t || this.duration });
            }),
            (e.prototype.compile = function (e) {
              var n = (function (e) {
                var t = p.createObjectURL(
                    new Blob(
                      [
                        e.toString(),
                        'this.onmessage =  function (eee) {' + e.name + '(eee.data);}',
                      ],
                      { type: 'application/javascript' }
                    )
                  ),
                  n = new Worker(t);
                return p.revokeObjectURL(t), n;
              })(t);
              (n.onmessage = function (t) {
                t.data.error ? console.error(t.data.error) : e(t.data);
              }),
                n.postMessage(this.frames);
            }),
            { Video: e }
          );
        })();
        o.Whammy = A;
        var M = {
          init: function () {
            var e = this;
            if ('undefined' !== typeof indexedDB && 'undefined' !== typeof indexedDB.open) {
              var t,
                n = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
                r = indexedDB.open(n, 1);
              (r.onerror = e.onError),
                (r.onsuccess = function () {
                  (((t = r.result).onerror = e.onError), t.setVersion)
                    ? 1 !== t.version
                      ? (t.setVersion(1).onsuccess = function () {
                          o(t), a();
                        })
                      : a()
                    : a();
                }),
                (r.onupgradeneeded = function (e) {
                  o(e.target.result);
                });
            } else console.error('IndexedDB API are not available in this browser.');
            function o(t) {
              t.createObjectStore(e.dataStoreName);
            }
            function a() {
              var n = t.transaction([e.dataStoreName], 'readwrite');
              function r(t) {
                n.objectStore(e.dataStoreName).get(t).onsuccess = function (n) {
                  e.callback && e.callback(n.target.result, t);
                };
              }
              e.videoBlob && n.objectStore(e.dataStoreName).put(e.videoBlob, 'videoBlob'),
                e.gifBlob && n.objectStore(e.dataStoreName).put(e.gifBlob, 'gifBlob'),
                e.audioBlob && n.objectStore(e.dataStoreName).put(e.audioBlob, 'audioBlob'),
                r('audioBlob'),
                r('videoBlob'),
                r('gifBlob');
            }
          },
          Fetch: function (e) {
            return (this.callback = e), this.init(), this;
          },
          Store: function (e) {
            return (
              (this.audioBlob = e.audioBlob),
              (this.videoBlob = e.videoBlob),
              (this.gifBlob = e.gifBlob),
              this.init(),
              this
            );
          },
          onError: function (e) {
            console.error(JSON.stringify(e, null, '\t'));
          },
          dataStoreName: 'recordRTC',
          dbName: null,
        };
        function P(e, t) {
          if ('undefined' === typeof GIFEncoder) {
            var n = document.createElement('script');
            (n.src = 'https://www.webrtc-experiment.com/gif-recorder.js'),
              (document.body || document.documentElement).appendChild(n);
          }
          t = t || {};
          var r = e instanceof CanvasRenderingContext2D || e instanceof HTMLCanvasElement;
          (this.record = function () {
            'undefined' !== typeof GIFEncoder && l
              ? (r ||
                  (t.width || (t.width = u.offsetWidth || 320),
                  t.height || (t.height = u.offsetHeight || 240),
                  t.video || (t.video = { width: t.width, height: t.height }),
                  t.canvas || (t.canvas = { width: t.width, height: t.height }),
                  (a.width = t.canvas.width || 320),
                  (a.height = t.canvas.height || 240),
                  (u.width = t.video.width || 320),
                  (u.height = t.video.height || 240)),
                (f = new GIFEncoder()).setRepeat(0),
                f.setDelay(t.frameRate || 200),
                f.setQuality(t.quality || 10),
                f.start(),
                'function' === typeof t.onGifRecordingStarted && t.onGifRecordingStarted(),
                Date.now(),
                (p = s(function e(n) {
                  if (!0 !== h.clearedRecordedData) {
                    if (o)
                      return setTimeout(function () {
                        e(n);
                      }, 100);
                    (p = s(e)),
                      void 0 === typeof c && (c = n),
                      n - c < 90 ||
                        (!r && u.paused && u.play(),
                        r || i.drawImage(u, 0, 0, a.width, a.height),
                        t.onGifPreview && t.onGifPreview(a.toDataURL('image/png')),
                        f.addFrame(i),
                        (c = n));
                  }
                })),
                t.initCallback && t.initCallback())
              : setTimeout(h.record, 1e3);
          }),
            (this.stop = function (e) {
              (e = e || function () {}),
                p && d(p),
                Date.now(),
                (this.blob = new Blob([new Uint8Array(f.stream().bin)], { type: 'image/gif' })),
                e(this.blob),
                (f.stream().bin = []);
            });
          var o = !1;
          (this.pause = function () {
            o = !0;
          }),
            (this.resume = function () {
              o = !1;
            }),
            (this.clearRecordedData = function () {
              (h.clearedRecordedData = !0), f && (f.stream().bin = []);
            }),
            (this.name = 'GifRecorder'),
            (this.toString = function () {
              return this.name;
            });
          var a = document.createElement('canvas'),
            i = a.getContext('2d');
          r &&
            (e instanceof CanvasRenderingContext2D
              ? (a = (i = e).canvas)
              : e instanceof HTMLCanvasElement && ((i = e.getContext('2d')), (a = e)));
          var l = !0;
          if (!r) {
            var u = document.createElement('video');
            (u.muted = !0),
              (u.autoplay = !0),
              (u.playsInline = !0),
              (l = !1),
              (u.onloadedmetadata = function () {
                l = !0;
              }),
              R(e, u),
              u.play();
          }
          var c,
            f,
            p = null,
            h = this;
        }
        function U(e, t) {
          'undefined' !== typeof n.g && n.g, (t = t || 'multi-streams-mixer');
          var r = [],
            o = !1,
            a = document.createElement('canvas'),
            i = a.getContext('2d');
          (a.style.opacity = 0),
            (a.style.position = 'absolute'),
            (a.style.zIndex = -1),
            (a.style.top = '-1000em'),
            (a.style.left = '-1000em'),
            (a.className = t),
            (document.body || document.documentElement).appendChild(a),
            (this.disableLogs = !1),
            (this.frameInterval = 10),
            (this.width = 360),
            (this.height = 240),
            (this.useGainNode = !0);
          var l = this,
            u = window.AudioContext;
          'undefined' === typeof u &&
            ('undefined' !== typeof webkitAudioContext && (u = webkitAudioContext),
            'undefined' !== typeof mozAudioContext && (u = mozAudioContext));
          var s = window.URL;
          'undefined' === typeof s && 'undefined' !== typeof webkitURL && (s = webkitURL),
            'undefined' !== typeof navigator &&
              'undefined' === typeof navigator.getUserMedia &&
              ('undefined' !== typeof navigator.webkitGetUserMedia &&
                (navigator.getUserMedia = navigator.webkitGetUserMedia),
              'undefined' !== typeof navigator.mozGetUserMedia &&
                (navigator.getUserMedia = navigator.mozGetUserMedia));
          var c = window.MediaStream;
          'undefined' === typeof c &&
            'undefined' !== typeof webkitMediaStream &&
            (c = webkitMediaStream),
            'undefined' !== typeof c &&
              'undefined' === typeof c.prototype.stop &&
              (c.prototype.stop = function () {
                this.getTracks().forEach(function (e) {
                  e.stop();
                });
              });
          var d = {};
          function f() {
            if (!o) {
              var e = r.length,
                t = !1,
                n = [];
              if (
                (r.forEach(function (e) {
                  e.stream || (e.stream = {}), e.stream.fullcanvas ? (t = e) : n.push(e);
                }),
                t)
              )
                (a.width = t.stream.width), (a.height = t.stream.height);
              else if (n.length) {
                a.width = e > 1 ? 2 * n[0].width : n[0].width;
                var i = 1;
                (3 !== e && 4 !== e) || (i = 2),
                  (5 !== e && 6 !== e) || (i = 3),
                  (7 !== e && 8 !== e) || (i = 4),
                  (9 !== e && 10 !== e) || (i = 5),
                  (a.height = n[0].height * i);
              } else (a.width = l.width || 360), (a.height = l.height || 240);
              t && t instanceof HTMLVideoElement && p(t),
                n.forEach(function (e, t) {
                  p(e, t);
                }),
                setTimeout(f, l.frameInterval);
            }
          }
          function p(e, t) {
            if (!o) {
              var n = 0,
                r = 0,
                a = e.width,
                l = e.height;
              1 === t && (n = e.width),
                2 === t && (r = e.height),
                3 === t && ((n = e.width), (r = e.height)),
                4 === t && (r = 2 * e.height),
                5 === t && ((n = e.width), (r = 2 * e.height)),
                6 === t && (r = 3 * e.height),
                7 === t && ((n = e.width), (r = 3 * e.height)),
                'undefined' !== typeof e.stream.left && (n = e.stream.left),
                'undefined' !== typeof e.stream.top && (r = e.stream.top),
                'undefined' !== typeof e.stream.width && (a = e.stream.width),
                'undefined' !== typeof e.stream.height && (l = e.stream.height),
                i.drawImage(e, n, r, a, l),
                'function' === typeof e.stream.onRender && e.stream.onRender(i, n, r, a, l, t);
            }
          }
          function h(e) {
            var n = document.createElement('video');
            return (
              (function (e, t) {
                'srcObject' in t
                  ? (t.srcObject = e)
                  : 'mozSrcObject' in t
                    ? (t.mozSrcObject = e)
                    : (t.srcObject = e);
              })(e, n),
              (n.className = t),
              (n.muted = !0),
              (n.volume = 0),
              (n.width = e.width || l.width || 360),
              (n.height = e.height || l.height || 240),
              n.play(),
              n
            );
          }
          function m(t) {
            (r = []),
              (t = t || e).forEach(function (e) {
                if (
                  e.getTracks().filter(function (e) {
                    return 'video' === e.kind;
                  }).length
                ) {
                  var t = h(e);
                  (t.stream = e), r.push(t);
                }
              });
          }
          'undefined' !== typeof u
            ? (d.AudioContext = u)
            : 'undefined' !== typeof webkitAudioContext && (d.AudioContext = webkitAudioContext),
            (this.startDrawingFrames = function () {
              f();
            }),
            (this.appendStreams = function (t) {
              if (!t) throw 'First parameter is required.';
              t instanceof Array || (t = [t]),
                t.forEach(function (t) {
                  var n = new c();
                  if (
                    t.getTracks().filter(function (e) {
                      return 'video' === e.kind;
                    }).length
                  ) {
                    var o = h(t);
                    (o.stream = t),
                      r.push(o),
                      n.addTrack(
                        t.getTracks().filter(function (e) {
                          return 'video' === e.kind;
                        })[0]
                      );
                  }
                  if (
                    t.getTracks().filter(function (e) {
                      return 'audio' === e.kind;
                    }).length
                  ) {
                    var a = l.audioContext.createMediaStreamSource(t);
                    (l.audioDestination = l.audioContext.createMediaStreamDestination()),
                      a.connect(l.audioDestination),
                      n.addTrack(
                        l.audioDestination.stream.getTracks().filter(function (e) {
                          return 'audio' === e.kind;
                        })[0]
                      );
                  }
                  e.push(n);
                });
            }),
            (this.releaseStreams = function () {
              (r = []),
                (o = !0),
                l.gainNode && (l.gainNode.disconnect(), (l.gainNode = null)),
                l.audioSources.length &&
                  (l.audioSources.forEach(function (e) {
                    e.disconnect();
                  }),
                  (l.audioSources = [])),
                l.audioDestination &&
                  (l.audioDestination.disconnect(), (l.audioDestination = null)),
                l.audioContext && l.audioContext.close(),
                (l.audioContext = null),
                i.clearRect(0, 0, a.width, a.height),
                a.stream && (a.stream.stop(), (a.stream = null));
            }),
            (this.resetVideoStreams = function (e) {
              !e || e instanceof Array || (e = [e]), m(e);
            }),
            (this.name = 'MultiStreamsMixer'),
            (this.toString = function () {
              return this.name;
            }),
            (this.getMixedStream = function () {
              o = !1;
              var t = (function () {
                  var e;
                  m(),
                    'captureStream' in a
                      ? (e = a.captureStream())
                      : 'mozCaptureStream' in a
                        ? (e = a.mozCaptureStream())
                        : l.disableLogs ||
                          console.error(
                            'Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features'
                          );
                  var t = new c();
                  return (
                    e
                      .getTracks()
                      .filter(function (e) {
                        return 'video' === e.kind;
                      })
                      .forEach(function (e) {
                        t.addTrack(e);
                      }),
                    (a.stream = t),
                    t
                  );
                })(),
                n = (function () {
                  d.AudioContextConstructor || (d.AudioContextConstructor = new d.AudioContext());
                  (l.audioContext = d.AudioContextConstructor),
                    (l.audioSources = []),
                    !0 === l.useGainNode &&
                      ((l.gainNode = l.audioContext.createGain()),
                      l.gainNode.connect(l.audioContext.destination),
                      (l.gainNode.gain.value = 0));
                  var t = 0;
                  if (
                    (e.forEach(function (e) {
                      if (
                        e.getTracks().filter(function (e) {
                          return 'audio' === e.kind;
                        }).length
                      ) {
                        t++;
                        var n = l.audioContext.createMediaStreamSource(e);
                        !0 === l.useGainNode && n.connect(l.gainNode), l.audioSources.push(n);
                      }
                    }),
                    !t)
                  )
                    return;
                  return (
                    (l.audioDestination = l.audioContext.createMediaStreamDestination()),
                    l.audioSources.forEach(function (e) {
                      e.connect(l.audioDestination);
                    }),
                    l.audioDestination.stream
                  );
                })();
              return (
                n &&
                  n
                    .getTracks()
                    .filter(function (e) {
                      return 'audio' === e.kind;
                    })
                    .forEach(function (e) {
                      t.addTrack(e);
                    }),
                e.forEach(function (e) {
                  e.fullcanvas && !0;
                }),
                t
              );
            });
        }
        function O(e, t) {
          e = e || [];
          var n,
            r,
            o = this;
          (t = t || {
            elementClass: 'multi-streams-mixer',
            mimeType: 'video/webm',
            video: { width: 360, height: 240 },
          }).frameInterval || (t.frameInterval = 10),
            t.video || (t.video = {}),
            t.video.width || (t.video.width = 360),
            t.video.height || (t.video.height = 240),
            (this.record = function () {
              (n = new U(e, t.elementClass || 'multi-streams-mixer')),
                (function () {
                  var t = [];
                  return (
                    e.forEach(function (e) {
                      _(e, 'video').forEach(function (e) {
                        t.push(e);
                      });
                    }),
                    t
                  );
                })().length &&
                  ((n.frameInterval = t.frameInterval || 10),
                  (n.width = t.video.width || 360),
                  (n.height = t.video.height || 240),
                  n.startDrawingFrames()),
                t.previewStream &&
                  'function' === typeof t.previewStream &&
                  t.previewStream(n.getMixedStream()),
                (r = new C(n.getMixedStream(), t)).record();
            }),
            (this.stop = function (e) {
              r &&
                r.stop(function (t) {
                  (o.blob = t), e(t), o.clearRecordedData();
                });
            }),
            (this.pause = function () {
              r && r.pause();
            }),
            (this.resume = function () {
              r && r.resume();
            }),
            (this.clearRecordedData = function () {
              r && (r.clearRecordedData(), (r = null)), n && (n.releaseStreams(), (n = null));
            }),
            (this.addStreams = function (o) {
              if (!o) throw 'First parameter is required.';
              o instanceof Array || (o = [o]),
                e.concat(o),
                r &&
                  n &&
                  (n.appendStreams(o),
                  t.previewStream &&
                    'function' === typeof t.previewStream &&
                    t.previewStream(n.getMixedStream()));
            }),
            (this.resetVideoStreams = function (e) {
              n && (!e || e instanceof Array || (e = [e]), n.resetVideoStreams(e));
            }),
            (this.getMixer = function () {
              return n;
            }),
            (this.name = 'MultiStreamRecorder'),
            (this.toString = function () {
              return this.name;
            });
        }
        function D(e, t) {
          var n, r, o;
          function a() {
            return new ReadableStream({
              start: function (r) {
                var o = document.createElement('canvas'),
                  a = document.createElement('video'),
                  i = !0;
                (a.srcObject = e),
                  (a.muted = !0),
                  (a.height = t.height),
                  (a.width = t.width),
                  (a.volume = 0),
                  (a.onplaying = function () {
                    (o.width = t.width), (o.height = t.height);
                    var e = o.getContext('2d'),
                      l = 1e3 / t.frameRate,
                      u = setInterval(function () {
                        if (
                          (n && (clearInterval(u), r.close()),
                          i && ((i = !1), t.onVideoProcessStarted && t.onVideoProcessStarted()),
                          e.drawImage(a, 0, 0),
                          'closed' !== r._controlledReadableStream.state)
                        )
                          try {
                            r.enqueue(e.getImageData(0, 0, t.width, t.height));
                          } catch (o) {}
                      }, l);
                  }),
                  a.play();
              },
            });
          }
          function i(e, u) {
            if (!t.workerPath && !u)
              return (
                (n = !1),
                void fetch('https://unpkg.com/webm-wasm@latest/dist/webm-worker.js').then(
                  function (t) {
                    t.arrayBuffer().then(function (t) {
                      i(e, t);
                    });
                  }
                )
              );
            if (!t.workerPath && u instanceof ArrayBuffer) {
              var s = new Blob([u], { type: 'text/javascript' });
              t.workerPath = p.createObjectURL(s);
            }
            t.workerPath || console.error('workerPath parameter is missing.'),
              (r = new Worker(t.workerPath)).postMessage(
                t.webAssemblyPath || 'https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm'
              ),
              r.addEventListener('message', function (e) {
                'READY' === e.data
                  ? (r.postMessage({
                      width: t.width,
                      height: t.height,
                      bitrate: t.bitrate || 1200,
                      timebaseDen: t.frameRate || 30,
                      realtime: t.realtime,
                    }),
                    a().pipeTo(
                      new WritableStream({
                        write: function (e) {
                          n
                            ? console.error('Got image, but recorder is finished!')
                            : r.postMessage(e.data.buffer, [e.data.buffer]);
                        },
                      })
                    ))
                  : e.data && (o || l.push(e.data));
              });
          }
          ('undefined' !== typeof ReadableStream && 'undefined' !== typeof WritableStream) ||
            console.error(
              'Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js'
            ),
            ((t = t || {}).width = t.width || 640),
            (t.height = t.height || 480),
            (t.frameRate = t.frameRate || 30),
            (t.bitrate = t.bitrate || 1200),
            (t.realtime = t.realtime || !0),
            (this.record = function () {
              (l = []),
                (o = !1),
                (this.blob = null),
                i(e),
                'function' === typeof t.initCallback && t.initCallback();
            }),
            (this.pause = function () {
              o = !0;
            }),
            (this.resume = function () {
              o = !1;
            });
          var l = [];
          (this.stop = function (e) {
            n = !0;
            var t = this;
            !(function (e) {
              r
                ? (r.addEventListener('message', function (t) {
                    null === t.data && (r.terminate(), (r = null), e && e());
                  }),
                  r.postMessage(null))
                : e && e();
            })(function () {
              (t.blob = new Blob(l, { type: 'video/webm' })), e(t.blob);
            });
          }),
            (this.name = 'WebAssemblyRecorder'),
            (this.toString = function () {
              return this.name;
            }),
            (this.clearRecordedData = function () {
              (l = []), (o = !1), (this.blob = null);
            }),
            (this.blob = null);
        }
        (o.DiskStorage = M),
          (o.GifRecorder = P),
          (o.MultiStreamRecorder = O),
          (o.RecordRTCPromisesHandler = function (e, t) {
            if (!this) throw 'Use "new RecordRTCPromisesHandler()"';
            if ('undefined' === typeof e) throw 'First argument "MediaStream" is required.';
            var n = this;
            (n.recordRTC = new o(e, t)),
              (this.startRecording = function () {
                return new Promise(function (e, t) {
                  try {
                    n.recordRTC.startRecording(), e();
                  } catch (r) {
                    t(r);
                  }
                });
              }),
              (this.stopRecording = function () {
                return new Promise(function (e, t) {
                  try {
                    n.recordRTC.stopRecording(function (r) {
                      (n.blob = n.recordRTC.getBlob()),
                        n.blob && n.blob.size ? e(r) : t('Empty blob.', n.blob);
                    });
                  } catch (r) {
                    t(r);
                  }
                });
              }),
              (this.pauseRecording = function () {
                return new Promise(function (e, t) {
                  try {
                    n.recordRTC.pauseRecording(), e();
                  } catch (r) {
                    t(r);
                  }
                });
              }),
              (this.resumeRecording = function () {
                return new Promise(function (e, t) {
                  try {
                    n.recordRTC.resumeRecording(), e();
                  } catch (r) {
                    t(r);
                  }
                });
              }),
              (this.getDataURL = function (e) {
                return new Promise(function (e, t) {
                  try {
                    n.recordRTC.getDataURL(function (t) {
                      e(t);
                    });
                  } catch (r) {
                    t(r);
                  }
                });
              }),
              (this.getBlob = function () {
                return new Promise(function (e, t) {
                  try {
                    e(n.recordRTC.getBlob());
                  } catch (r) {
                    t(r);
                  }
                });
              }),
              (this.getInternalRecorder = function () {
                return new Promise(function (e, t) {
                  try {
                    e(n.recordRTC.getInternalRecorder());
                  } catch (r) {
                    t(r);
                  }
                });
              }),
              (this.reset = function () {
                return new Promise(function (e, t) {
                  try {
                    e(n.recordRTC.reset());
                  } catch (r) {
                    t(r);
                  }
                });
              }),
              (this.destroy = function () {
                return new Promise(function (e, t) {
                  try {
                    e(n.recordRTC.destroy());
                  } catch (r) {
                    t(r);
                  }
                });
              }),
              (this.getState = function () {
                return new Promise(function (e, t) {
                  try {
                    e(n.recordRTC.getState());
                  } catch (r) {
                    t(r);
                  }
                });
              }),
              (this.blob = null),
              (this.version = '5.6.2');
          }),
          (o.WebAssemblyRecorder = D);
      },
      95: (e, t) => {
        'use strict';
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
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > a(u, n))
                s < o && 0 > a(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
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
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
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
          g = 'function' === typeof setTimeout ? setTimeout : null,
          y = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(s)) (m = !0), P(k);
            else {
              var t = r(c);
              null !== t && U(S, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), y(T), (T = -1)), (h = !0);
          var a = p;
          try {
            for (w(n), f = r(s); null !== f && (!(f.expirationTime > n) || (e && !L())); ) {
              var i = f.callback;
              if ('function' === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var l = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof l ? (f.callback = l) : f === r(s) && o(s),
                  w(n);
              } else o(s);
              f = r(s);
            }
            if (null !== f) var u = !0;
            else {
              var d = r(c);
              null !== d && U(S, d.startTime - n), (u = !1);
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
        var _,
          R = !1,
          E = null,
          T = -1,
          C = 5,
          x = -1;
        function L() {
          return !(t.unstable_now() - x < C);
        }
        function N() {
          if (null !== E) {
            var e = t.unstable_now();
            x = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? _() : ((R = !1), (E = null));
            }
          } else R = !1;
        }
        if ('function' === typeof b)
          _ = function () {
            b(N);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var A = new MessageChannel(),
            M = A.port2;
          (A.port1.onmessage = N),
            (_ = function () {
              M.postMessage(null);
            });
        } else
          _ = function () {
            g(N, 0);
          };
        function P(e) {
          (E = e), R || ((R = !0), _());
        }
        function U(e, n) {
          T = g(function () {
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
            m || h || ((m = !0), P(k));
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
            var i = t.unstable_now();
            switch (
              ('object' === typeof a && null !== a
                ? (a = 'number' === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(s) && e === r(c) && (v ? (y(T), (T = -1)) : (v = !0), U(S, a - i)))
                : ((e.sortIndex = l), n(s, e), m || h || ((m = !0), P(k))),
              e
            );
          }),
          (t.unstable_shouldYield = L),
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
        'use strict';
        e.exports = n(95);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
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
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & o && r; 'object' == typeof l && !~e.indexOf(l); l = t(l))
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(a, i), a;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) => Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => 'static/js/' + e + '.' + { 27: 'b613a361', 510: '1e65ce32' }[e] + '.chunk.js'),
    (n.miniCssF = (e) => {}),
    (n.g = (function () {
      if ('object' === typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' === typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = 'baby-toyphone:';
      n.l = (r, o, a, i) => {
        if (e[r]) e[r].push(o);
        else {
          var l, u;
          if (void 0 !== a)
            for (var s = document.getElementsByTagName('script'), c = 0; c < s.length; c++) {
              var d = s[c];
              if (d.getAttribute('src') == r || d.getAttribute('data-webpack') == t + a) {
                l = d;
                break;
              }
            }
          l ||
            ((u = !0),
            ((l = document.createElement('script')).charset = 'utf-8'),
            (l.timeout = 120),
            n.nc && l.setAttribute('nonce', n.nc),
            l.setAttribute('data-webpack', t + a),
            (l.src = r)),
            (e[r] = [o]);
          var f = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var o = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                o && o.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(f.bind(null, void 0, { type: 'timeout', target: l }), 12e4);
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            u && document.head.appendChild(l);
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
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = r && ('load' === r.type ? 'missing' : r.type),
                    i = r && r.target && r.target.src;
                  (l.message = 'Loading chunk ' + t + ' failed.\n(' + a + ': ' + i + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = a),
                    (l.request = i),
                    o[1](l);
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
            i = r[0],
            l = r[1],
            u = r[2],
            s = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in l) n.o(l, o) && (n.m[o] = l[o]);
            if (u) u(n);
          }
          for (t && t(r); s < i.length; s++) (a = i[s]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkbaby_toyphone = self.webpackChunkbaby_toyphone || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      'use strict';
      var e,
        t = n(313),
        r = n.t(t, 2),
        o = n(168),
        a = n.t(o, 2);
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
      })(e || (e = {}));
      const l = 'popstate';
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
          i(
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
          v = g();
        function g() {
          return (p.state || { idx: null }).idx;
        }
        function y() {
          h = e.Pop;
          let t = g(),
            n = null == t ? null : t - v;
          (v = t), m && m({ action: h, location: w.location, delta: n });
        }
        function b(e) {
          let t = 'null' !== a.location.origin ? a.location.origin : a.location.href,
            n = 'string' === typeof e ? e : f(e);
          return (
            u(t, 'No window.location.(origin|href) available to create URL for href: ' + n),
            new URL(n, t)
          );
        }
        null == v && ((v = 0), p.replaceState(i({}, p.state, { idx: v }), ''));
        let w = {
          get action() {
            return h;
          },
          get location() {
            return t(a, p);
          },
          listen(e) {
            if (m) throw new Error('A history only accepts one active listener');
            return (
              a.addEventListener(l, y),
              (m = e),
              () => {
                a.removeEventListener(l, y), (m = null);
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
            let o = d(w.location, t, n);
            r && r(o, t), (v = g() + 1);
            let i = c(o, v),
              l = w.createHref(o);
            try {
              p.pushState(i, '', l);
            } catch (u) {
              if (u instanceof DOMException && 'DataCloneError' === u.name) throw u;
              a.location.assign(l);
            }
            s && m && m({ action: h, location: w.location, delta: 1 });
          },
          replace: function (t, n) {
            h = e.Replace;
            let o = d(w.location, t, n);
            r && r(o, t), (v = g());
            let a = c(o, v),
              i = w.createHref(o);
            p.replaceState(a, '', i), s && m && m({ action: h, location: w.location, delta: 0 });
          },
          go: (e) => p.go(e),
        };
        return w;
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
        let r = N(('string' === typeof t ? p(t) : t).pathname || '/', n);
        if (null == r) return null;
        let o = g(e);
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
        for (let i = 0; null == a && i < o.length; ++i) a = C(o[i], L(r));
        return a;
      }
      function g(e, t, n, r) {
        void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = '');
        let o = (e, o, a) => {
          let i = {
            relativePath: void 0 === a ? e.path || '' : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e,
          };
          i.relativePath.startsWith('/') &&
            (u(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let l = A([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (u(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            g(e.children, t, s, l)),
            (null != e.path || e.index) && t.push({ path: l, score: T(l, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ('' !== e.path && null != (n = e.path) && n.includes('?'))
              for (let r of y(e.path)) o(e, t, r);
            else o(e, t);
          }),
          t
        );
      }
      function y(e) {
        let t = e.split('/');
        if (0 === t.length) return [];
        let [n, ...r] = t,
          o = n.endsWith('?'),
          a = n.replace(/\?$/, '');
        if (0 === r.length) return o ? [a, ''] : [a];
        let i = y(r.join('/')),
          l = [];
        return (
          l.push(...i.map((e) => ('' === e ? a : [a, e].join('/')))),
          o && l.push(...i),
          l.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
        );
      }
      const b = /^:\w+$/,
        w = 3,
        S = 2,
        k = 1,
        _ = 10,
        R = -2,
        E = (e) => '*' === e;
      function T(e, t) {
        let n = e.split('/'),
          r = n.length;
        return (
          n.some(E) && (r += R),
          t && (r += S),
          n.filter((e) => !E(e)).reduce((e, t) => e + (b.test(t) ? w : '' === t ? k : _), r)
        );
      }
      function C(e, t) {
        let { routesMeta: n } = e,
          r = {},
          o = '/',
          a = [];
        for (let i = 0; i < n.length; ++i) {
          let e = n[i],
            l = i === n.length - 1,
            u = '/' === o ? t : t.slice(o.length) || '/',
            s = x({ path: e.relativePath, caseSensitive: e.caseSensitive, end: l }, u);
          if (!s) return null;
          Object.assign(r, s.params);
          let c = e.route;
          a.push({
            params: r,
            pathname: A([o, s.pathname]),
            pathnameBase: M(A([o, s.pathnameBase])),
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
          i = a.replace(/(.)\/+$/, '$1'),
          l = o.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: o } = t;
            if ('*' === r) {
              let e = l[n] || '';
              i = a.slice(0, a.length - e.length).replace(/(.)\/+$/, '$1');
            }
            const u = l[n];
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
          pathnameBase: i,
          pattern: e,
        };
      }
      function L(e) {
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
      function N(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && '/' !== r ? null : e.slice(n) || '/';
      }
      const A = (e) => e.join('/').replace(/\/\/+/g, '/'),
        M = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/');
      Error;
      function P(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'boolean' === typeof e.internal &&
          'data' in e
        );
      }
      const U = ['post', 'put', 'patch', 'delete'],
        O = (new Set(U), ['get', ...U]);
      new Set(O), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
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
      const I = t.createContext(null);
      const z = t.createContext(null);
      const B = t.createContext(null);
      const V = t.createContext(null);
      const F = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const j = t.createContext(null);
      function W() {
        return null != t.useContext(V);
      }
      function H() {
        return W() || u(!1), t.useContext(V).location;
      }
      function $(n, r, o) {
        W() || u(!1);
        let { navigator: a } = t.useContext(B),
          { matches: i } = t.useContext(F),
          l = i[i.length - 1],
          s = l ? l.params : {},
          c = (l && l.pathname, l ? l.pathnameBase : '/');
        l && l.route;
        let d,
          f = H();
        if (r) {
          var h;
          let e = 'string' === typeof r ? p(r) : r;
          '/' === c || (null == (h = e.pathname) ? void 0 : h.startsWith(c)) || u(!1), (d = e);
        } else d = f;
        let m = d.pathname || '/',
          g = v(n, { pathname: '/' === c ? m : m.slice(c.length) || '/' });
        let y = Y(
          g &&
            g.map((e) =>
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
          i,
          o
        );
        return r && y
          ? t.createElement(
              V.Provider,
              {
                value: {
                  location: D(
                    { pathname: '/', search: '', hash: '', state: null, key: 'default' },
                    d
                  ),
                  navigationType: e.Pop,
                },
              },
              y
            )
          : y;
      }
      function q() {
        let e = (function () {
            var e;
            let n = t.useContext(j),
              r = Z(X.UseRouteError),
              o = J(X.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[o];
          })(),
          n = P(e)
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
      const G = t.createElement(q, null);
      class K extends t.Component {
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
                F.Provider,
                { value: this.props.routeContext },
                t.createElement(j.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function Q(e) {
        let { routeContext: n, match: r, children: o } = e,
          a = t.useContext(I);
        return (
          a &&
            a.static &&
            a.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(F.Provider, { value: n }, o)
        );
      }
      function Y(e, n, r) {
        var o;
        if ((void 0 === n && (n = []), void 0 === r && (r = null), null == e)) {
          var a;
          if (null == (a = r) || !a.errors) return null;
          e = r.matches;
        }
        let i = e,
          l = null == (o = r) ? void 0 : o.errors;
        if (null != l) {
          let e = i.findIndex((e) => e.route.id && (null == l ? void 0 : l[e.route.id]));
          e >= 0 || u(!1), (i = i.slice(0, Math.min(i.length, e + 1)));
        }
        return i.reduceRight((e, o, a) => {
          let u = o.route.id ? (null == l ? void 0 : l[o.route.id]) : null,
            s = null;
          r && (s = o.route.errorElement || G);
          let c = n.concat(i.slice(0, a + 1)),
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
                t.createElement(Q, {
                  match: o,
                  routeContext: { outlet: e, matches: c, isDataRoute: null != r },
                  children: n,
                })
              );
            };
          return r && (o.route.ErrorBoundary || o.route.errorElement || 0 === a)
            ? t.createElement(K, {
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
      var X = (function (e) {
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
      })(X || {});
      function Z(e) {
        let n = t.useContext(z);
        return n || u(!1), n;
      }
      function J(e) {
        let n = (function (e) {
            let n = t.useContext(F);
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
          navigationType: i = e.Pop,
          navigator: l,
          static: s = !1,
        } = n;
        W() && u(!1);
        let c = r.replace(/^\/*/, '/'),
          d = t.useMemo(() => ({ basename: c, navigator: l, static: s }), [c, l, s]);
        'string' === typeof a && (a = p(a));
        let {
            pathname: f = '/',
            search: h = '',
            hash: m = '',
            state: v = null,
            key: g = 'default',
          } = a,
          y = t.useMemo(() => {
            let e = N(f, c);
            return null == e
              ? null
              : {
                  location: { pathname: e, search: h, hash: m, state: v, key: g },
                  navigationType: i,
                };
          }, [c, f, h, m, v, g, i]);
        return null == y
          ? null
          : t.createElement(
              B.Provider,
              { value: d },
              t.createElement(V.Provider, { children: o, value: y })
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
            let i = {
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
            e.props.children && (i.children = re(e.props.children, a)), r.push(i);
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
          i = t.useRef();
        var l;
        null == i.current &&
          (i.current =
            (void 0 === (l = { window: a, v5Compat: !0 }) && (l = {}),
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
              l
            )));
        let u = i.current,
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
      var ie, le;
      (function (e) {
        (e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmit = 'useSubmit'),
          (e.UseSubmitFetcher = 'useSubmitFetcher'),
          (e.UseFetcher = 'useFetcher'),
          (e.useViewTransitionState = 'useViewTransitionState');
      })(ie || (ie = {})),
        (function (e) {
          (e.UseFetcher = 'useFetcher'),
            (e.UseFetchers = 'useFetchers'),
            (e.UseScrollRestoration = 'useScrollRestoration');
        })(le || (le = {}));
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
            return ce(t) ? be(t) : ke(t) ? t : ge(t);
          } catch (t) {
            return ce(t) ? be(t.next(() => this.map(e))) : ye(t);
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
                if (ke(n)) {
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
      function ge(e) {
        return Object.freeze(new he(e));
      }
      function ye(e) {
        return Object.freeze(new me(e));
      }
      function be(e) {
        return Object.freeze(new ve(e));
      }
      function we() {
        return Object.freeze(new ve(new Promise(() => {})));
      }
      function Se(e) {
        const t = (function (e) {
          return e.every((e) => 'hasValue' === e.state)
            ? ge(e.map((e) => e.contents))
            : e.some((e) => 'hasError' === e.state)
              ? ye(
                  de(
                    e.find((e) => 'hasError' === e.state),
                    'Invalid loadable passed to loadableAll'
                  ).contents
                )
              : be(Promise.all(e.map((e) => e.contents)));
        })(
          (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t])).map((e) =>
            ke(e) ? e : ce(e) ? be(e) : ge(e)
          )
        );
        return Array.isArray(e)
          ? t
          : t.map((t) =>
              Object.getOwnPropertyNames(e).reduce((e, n, r) => ({ ...e, [n]: t[r] }), {})
            );
      }
      function ke(e) {
        return e instanceof pe;
      }
      const _e = {
        of: (e) => (ce(e) ? be(e) : ke(e) ? e : ge(e)),
        error: (e) => ye(e),
        loading: () => we(),
        all: Se,
        isLoadable: ke,
      };
      var Re = {
          loadableWithValue: ge,
          loadableWithError: ye,
          loadableWithPromise: be,
          loadableLoading: we,
          loadableAll: Se,
          isLoadable: ke,
          RecoilLoadable: _e,
        },
        Ee = Re.loadableWithValue,
        Te = Re.loadableWithError,
        Ce = Re.loadableWithPromise,
        xe = Re.loadableLoading,
        Le = Re.loadableAll,
        Ne = Re.isLoadable,
        Ae = Re.RecoilLoadable,
        Me = Object.freeze({
          __proto__: null,
          loadableWithValue: Ee,
          loadableWithError: Te,
          loadableWithPromise: Ce,
          loadableLoading: xe,
          loadableAll: Le,
          isLoadable: Ne,
          RecoilLoadable: Ae,
        });
      const Pe = {
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
            Pe.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e;
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
              Pe.RECOIL_GKS_ENABLED.add(e);
            });
          }));
      })();
      var Ue = Pe;
      function Oe(e) {
        return Ue.RECOIL_GKS_ENABLED.has(e);
      }
      (Oe.setPass = (e) => {
        Ue.RECOIL_GKS_ENABLED.add(e);
      }),
        (Oe.setFail = (e) => {
          Ue.RECOIL_GKS_ENABLED.delete(e);
        }),
        (Oe.clear = () => {
          Ue.RECOIL_GKS_ENABLED.clear();
        });
      var De = Oe;
      var Ie,
        ze,
        Be,
        Ve = function (e, t) {
          let { error: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return null;
        };
      const Fe =
          null !== (Ie = t.createMutableSource) && void 0 !== Ie
            ? Ie
            : t.unstable_createMutableSource,
        je = null !== (ze = t.useMutableSource) && void 0 !== ze ? ze : t.unstable_useMutableSource,
        We =
          null !== (Be = t.useSyncExternalStore) && void 0 !== Be
            ? Be
            : t.unstable_useSyncExternalStore;
      let He = !1;
      var $e = {
        createMutableSource: Fe,
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
              Ve('A React renderer without React 18+ API support is being used with React 18+.')),
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
      class qe {
        constructor(e) {
          fe(this, 'key', void 0), (this.key = e);
        }
        toJSON() {
          return { key: this.key };
        }
      }
      class Ge extends qe {}
      class Ke extends qe {}
      var Qe = {
          AbstractRecoilValue: qe,
          RecoilState: Ge,
          RecoilValueReadOnly: Ke,
          isRecoilValue: function (e) {
            return e instanceof Ge || e instanceof Ke;
          },
        },
        Ye = Qe.AbstractRecoilValue,
        Xe = Qe.RecoilState,
        Ze = Qe.RecoilValueReadOnly,
        Je = Qe.isRecoilValue,
        et = Object.freeze({
          __proto__: null,
          AbstractRecoilValue: Ye,
          RecoilState: Xe,
          RecoilValueReadOnly: Ze,
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
        it = new Map(),
        lt = new Map();
      class ut extends Error {}
      const st = new Map();
      function ct(e) {
        return st.get(e);
      }
      var dt = {
        nodes: it,
        recoilValues: lt,
        registerNode: function (e) {
          Ue.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED &&
            (function (e) {
              if (it.has(e)) {
                const t = 'Duplicate atom key "'.concat(
                  e,
                  '". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.'
                );
                console.warn(t);
              }
            })(e.key),
            it.set(e.key, e);
          const t = null == e.set ? new et.RecoilValueReadOnly(e.key) : new et.RecoilState(e.key);
          return lt.set(e.key, t), t;
        },
        getNode: function (e) {
          const t = it.get(e);
          if (null == t) throw new ut('Missing definition for RecoilValue: "'.concat(e, '""'));
          return t;
        },
        getNodeMaybe: function (e) {
          return it.get(e);
        },
        deleteNodeConfigIfPossible: function (e) {
          var t;
          if (!De('recoil_memory_managament_2020')) return;
          const n = it.get(e);
          var r;
          null !== n &&
            void 0 !== n &&
            null !== (t = n.shouldDeleteConfigOnRelease) &&
            void 0 !== t &&
            t.call(n) &&
            (it.delete(e), null === (r = ct(e)) || void 0 === r || r(), st.delete(e));
        },
        setConfigDeletionHandler: function (e, t) {
          De('recoil_memory_managament_2020') && (void 0 === t ? st.delete(e) : st.set(e, t));
        },
        getConfigDeletionHandler: ct,
        recoilValuesForKeys: function (e) {
          return nt(e, (e) => de(lt.get(e)));
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
              i = r / 4,
              l = {},
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
                  for (var i = 0; i < a; ++i) o[i] = r[i];
                }
                return (o[t] = n), o;
              },
              h = function (e, t, n) {
                var r = n.length - 1,
                  o = 0,
                  a = 0,
                  i = n;
                if (e) o = a = t;
                else for (i = new Array(r); o < t; ) i[a++] = n[o++];
                for (++o; o <= r; ) i[a++] = n[o++];
                return e && (i.length = r), i;
              },
              m = { __hamt_isEmpty: !0 },
              v = function (e) {
                return e === m || (e && e.__hamt_isEmpty);
              },
              g = function (e, t, n, r) {
                return { type: 1, edit: e, hash: t, key: n, value: r, _modify: _ };
              },
              y = function (e, t, n) {
                return { type: 2, edit: e, hash: t, children: n, _modify: R };
              },
              b = function (e, t, n) {
                return { type: 3, edit: e, mask: t, children: n, _modify: E };
              },
              w = function (e, t, n) {
                return { type: 4, edit: e, size: t, children: n, _modify: T };
              },
              S = function e(t, n, r, o, a, i) {
                if (r === a) return y(t, r, [i, o]);
                var l = c(n, r),
                  u = c(n, a);
                return b(
                  t,
                  d(l) | d(u),
                  l === u ? [e(t, n + 5, r, o, a, i)] : l < u ? [o, i] : [i, o]
                );
              },
              k = function (e, t) {
                return e === t.edit;
              },
              _ = function (e, t, n, r, o, a, i) {
                if (t(a, this.key)) {
                  var u = r(this.value);
                  return u === this.value
                    ? this
                    : u === l
                      ? (--i.value, m)
                      : k(e, this)
                        ? ((this.value = u), this)
                        : g(e, o, a, u);
                }
                var s = r();
                return s === l ? this : (++i.value, S(e, n, this.hash, this, o, g(e, o, a, s)));
              },
              R = function (e, t, n, r, o, a, i) {
                if (o === this.hash) {
                  var u = (function (e, t, n, r, o, a, i, u) {
                    for (var s = o.length, c = 0; c < s; ++c) {
                      var d = o[c];
                      if (n(i, d.key)) {
                        var f = d.value,
                          m = a(f);
                        return m === f
                          ? o
                          : m === l
                            ? (--u.value, h(e, c, o))
                            : p(e, c, g(t, r, i, m), o);
                      }
                    }
                    var v = a();
                    return v === l ? o : (++u.value, p(e, s, g(t, r, i, v), o));
                  })(k(e, this), e, t, this.hash, this.children, r, a, i);
                  return u === this.children ? this : u.length > 1 ? y(e, this.hash, u) : u[0];
                }
                var s = r();
                return s === l ? this : (++i.value, S(e, n, this.hash, this, o, g(e, o, a, s)));
              },
              E = function (e, t, n, r, o, i, l) {
                var u = this.mask,
                  s = this.children,
                  g = c(n, o),
                  y = d(g),
                  S = f(u, y),
                  _ = u & y,
                  R = _ ? s[S] : m,
                  E = R._modify(e, t, n + 5, r, o, i, l);
                if (R === E) return this;
                var T,
                  C = k(e, this),
                  x = u,
                  L = void 0;
                if (_ && v(E)) {
                  if (!(x &= ~y)) return m;
                  if (s.length <= 2 && ((T = s[1 ^ S]) === m || 1 === T.type || 2 === T.type))
                    return s[1 ^ S];
                  L = h(C, S, s);
                } else if (_ || v(E)) L = p(C, S, E, s);
                else {
                  if (s.length >= a)
                    return (function (e, t, n, r, o) {
                      for (var a = [], i = r, l = 0, u = 0; i; ++u)
                        1 & i && (a[u] = o[l++]), (i >>>= 1);
                      return (a[t] = n), w(e, l + 1, a);
                    })(e, g, E, u, s);
                  (x |= y),
                    (L = (function (e, t, n, r) {
                      var o = r.length;
                      if (e) {
                        for (var a = o; a >= t; ) r[a--] = r[a];
                        return (r[t] = n), r;
                      }
                      for (var i = 0, l = 0, u = new Array(o + 1); i < t; ) u[l++] = r[i++];
                      for (u[t] = n; i < o; ) u[++l] = r[i++];
                      return u;
                    })(C, S, E, s));
                }
                return C ? ((this.mask = x), (this.children = L), this) : b(e, x, L);
              },
              T = function (e, t, n, r, o, a, l) {
                var u = this.size,
                  s = this.children,
                  d = c(n, o),
                  f = s[d],
                  h = (f || m)._modify(e, t, n + 5, r, o, a, l);
                if (f === h) return this;
                var g = k(e, this),
                  y = void 0;
                if (v(f) && !v(h)) ++u, (y = p(g, d, h, s));
                else if (!v(f) && v(h)) {
                  if (--u <= i)
                    return (function (e, t, n, r) {
                      for (var o = new Array(t - 1), a = 0, i = 0, l = 0, u = r.length; l < u; ++l)
                        if (l !== n) {
                          var s = r[l];
                          s && !v(s) && ((o[a++] = s), (i |= 1 << l));
                        }
                      return b(e, i, o);
                    })(e, u, d, s);
                  y = p(g, d, m, s);
                } else y = p(g, d, h, s);
                return g ? ((this.size = u), (this.children = y), this) : w(e, u, y);
              };
            function C(e, t, n, r, o) {
              (this._editable = e),
                (this._edit = t),
                (this._config = n),
                (this._root = r),
                (this._size = o);
            }
            (m._modify = function (e, t, n, r, o, a, i) {
              var u = r();
              return u === l ? m : (++i.value, g(e, o, a, u));
            }),
              (C.prototype.setTree = function (e, t) {
                return this._editable
                  ? ((this._root = e), (this._size = t), this)
                  : e === this._root
                    ? this
                    : new C(this._editable, this._edit, this._config, e, t);
              });
            var x = (n.tryGetHash = function (e, t, n, r) {
              for (var o = r._root, a = 0, i = r._config.keyEq; ; )
                switch (o.type) {
                  case 1:
                    return i(n, o.key) ? o.value : e;
                  case 2:
                    if (t === o.hash)
                      for (var l = o.children, u = 0, s = l.length; u < s; ++u) {
                        var p = l[u];
                        if (i(n, p.key)) return p.value;
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
            var L = (n.tryGet = function (e, t, n) {
              return x(e, n._config.hash(t), t, n);
            });
            C.prototype.tryGet = function (e, t) {
              return L(e, t, this);
            };
            var N = (n.getHash = function (e, t, n) {
              return x(void 0, e, t, n);
            });
            (C.prototype.getHash = function (e, t) {
              return N(e, t, this);
            }),
              (n.get = function (e, t) {
                return x(void 0, t._config.hash(e), e, t);
              }),
              (C.prototype.get = function (e, t) {
                return L(t, e, this);
              });
            var A = (n.has = function (e, t, n) {
              return x(l, e, t, n) !== l;
            });
            C.prototype.hasHash = function (e, t) {
              return A(e, t, this);
            };
            var M = (n.has = function (e, t) {
              return A(t._config.hash(e), e, t);
            });
            C.prototype.has = function (e) {
              return M(e, this);
            };
            var P = function (e, t) {
              return e === t;
            };
            (n.make = function (e) {
              return new C(0, 0, { keyEq: (e && e.keyEq) || P, hash: (e && e.hash) || s }, m, 0);
            }),
              (n.empty = n.make());
            var U = (n.isEmpty = function (e) {
              return e && !!v(e._root);
            });
            C.prototype.isEmpty = function () {
              return U(this);
            };
            var O = (n.modifyHash = function (e, t, n, r) {
              var o = { value: r._size },
                a = r._root._modify(r._editable ? r._edit : NaN, r._config.keyEq, 0, e, t, n, o);
              return r.setTree(a, o.value);
            });
            C.prototype.modifyHash = function (e, t, n) {
              return O(n, e, t, this);
            };
            var D = (n.modify = function (e, t, n) {
              return O(e, n._config.hash(t), t, n);
            });
            C.prototype.modify = function (e, t) {
              return D(t, e, this);
            };
            var I = (n.setHash = function (e, t, n, r) {
              return O(u(n), e, t, r);
            });
            C.prototype.setHash = function (e, t, n) {
              return I(e, t, n, this);
            };
            var z = (n.set = function (e, t, n) {
              return I(n._config.hash(e), e, t, n);
            });
            C.prototype.set = function (e, t) {
              return z(e, t, this);
            };
            var B = u(l),
              V = (n.removeHash = function (e, t, n) {
                return O(B, e, t, n);
              });
            C.prototype.removeHash = C.prototype.deleteHash = function (e, t) {
              return V(e, t, this);
            };
            var F = (n.remove = function (e, t) {
              return V(t._config.hash(e), e, t);
            });
            C.prototype.remove = C.prototype.delete = function (e) {
              return F(e, this);
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
                return e && q(e[0], e[1], e[2], e[3], e[4]);
              },
              q = function (e, t, n, r, o) {
                for (; n < e; ) {
                  var a = t[n++];
                  if (a && !v(a)) return G(a, r, [e, t, n, r, o]);
                }
                return $(o);
              },
              G = function (e, t, n) {
                switch (e.type) {
                  case 1:
                    return { value: t(e), rest: n };
                  case 2:
                  case 4:
                  case 3:
                    var r = e.children;
                    return q(r.length, r, 0, t, n);
                  default:
                    return $(n);
                }
              },
              K = { done: !0 };
            function Q(e) {
              this.v = e;
            }
            (Q.prototype.next = function () {
              if (!this.v) return K;
              var e = this.v;
              return (this.v = $(e.rest)), e;
            }),
              (Q.prototype[Symbol.iterator] = function () {
                return this;
              });
            var Y = function (e, t) {
                return new Q(G(e._root, t));
              },
              X = function (e) {
                return [e.key, e.value];
              },
              Z = (n.entries = function (e) {
                return Y(e, X);
              });
            C.prototype.entries = C.prototype[Symbol.iterator] = function () {
              return Z(this);
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
                for (var i = 0, l = a.length; i < l; ) {
                  var u = a[i++];
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
          return yt(this);
        }
        toMap() {
          return new Map(this._map);
        }
      }
      class gt {
        constructor(e) {
          if ((fe(this, '_hamt', mt.empty.beginMutation()), e instanceof gt)) {
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
          return yt(this);
        }
        toMap() {
          return new Map(this._hamt);
        }
      }
      function yt(e) {
        return De('recoil_hamt_2020') ? new gt(e) : new vt(e);
      }
      var bt = yt,
        wt = Object.freeze({ __proto__: null, persistentMap: bt });
      var St = function (e) {
        const t = new Set();
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
          r[o - 1] = arguments[o];
        e: for (const a of e) {
          for (const e of r) if (e.has(a)) continue e;
          t.add(a);
        }
        return t;
      };
      var kt = function (e, t) {
        const n = new Map();
        return (
          e.forEach((e, r) => {
            n.set(r, t(e, r));
          }),
          n
        );
      };
      function _t(e, t, n, r) {
        const { nodeDeps: o, nodeToNodeSubscriptions: a } = n,
          i = o.get(e);
        if (i && r && i !== r.nodeDeps.get(e)) return;
        o.set(e, t);
        const l = null == i ? t : St(t, i);
        for (const u of l) {
          a.has(u) || a.set(u, new Set());
          de(a.get(u)).add(e);
        }
        if (i) {
          const n = St(i, t);
          for (const t of n) {
            if (!a.has(t)) return;
            const n = de(a.get(t));
            n.delete(e), 0 === n.size && a.delete(t);
          }
        }
      }
      var Rt = {
        cloneGraph: function (e) {
          return {
            nodeDeps: kt(e.nodeDeps, (e) => new Set(e)),
            nodeToNodeSubscriptions: kt(e.nodeToNodeSubscriptions, (e) => new Set(e)),
          };
        },
        graph: function () {
          return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
        },
        saveDepsToStore: function (e, t, n, r) {
          var o, a, i, l;
          const u = n.getState();
          r !== u.currentTree.version &&
            r !== (null === (o = u.nextTree) || void 0 === o ? void 0 : o.version) &&
            r !== (null === (a = u.previousTree) || void 0 === a ? void 0 : a.version) &&
            Ve('Tried to save dependencies to a discarded tree');
          const s = n.getGraph(r);
          if (
            (_t(e, t, s),
            r === (null === (i = u.previousTree) || void 0 === i ? void 0 : i.version))
          ) {
            _t(e, t, n.getGraph(u.currentTree.version), s);
          }
          if (
            r === (null === (l = u.previousTree) || void 0 === l ? void 0 : l.version) ||
            r === u.currentTree.version
          ) {
            var c;
            const r = null === (c = u.nextTree) || void 0 === c ? void 0 : c.version;
            if (void 0 !== r) {
              _t(e, t, n.getGraph(r), s);
            }
          }
        },
      };
      let Et = 0;
      let Tt = 0;
      let Ct = 0;
      var xt = {
        getNextTreeStateVersion: () => Et++,
        getNextStoreID: () => Tt++,
        getNextComponentID: () => Ct++,
      };
      const { persistentMap: Lt } = wt,
        { graph: Nt } = Rt,
        { getNextTreeStateVersion: At } = xt;
      function Mt() {
        const e = At();
        return {
          version: e,
          stateID: e,
          transactionMetadata: {},
          dirtyAtoms: new Set(),
          atomValues: Lt(),
          nonvalidatedAtoms: Lt(),
        };
      }
      var Pt = {
        makeEmptyTreeState: Mt,
        makeEmptyStoreState: function () {
          const e = Mt();
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
            graphsByVersion: new Map().set(e.version, Nt()),
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
      class Ut {}
      var Ot = {
        RetentionZone: Ut,
        retentionZone: function () {
          return new Ut();
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
      var It = function* (e, t) {
        let n = 0;
        for (const r of e) t(r, n++) && (yield r);
      };
      var zt = function (e, t) {
        return new Proxy(e, {
          get: (e, n) => (!(n in e) && n in t && (e[n] = t[n]()), e[n]),
          ownKeys: (e) => Object.keys(e),
        });
      };
      const { getNode: Bt, getNodeMaybe: Vt, recoilValuesForKeys: Ft } = dt,
        { RetentionZone: jt } = Ot,
        { setByAddingToSet: Wt } = Dt,
        Ht = Object.freeze(new Set());
      class $t extends Error {}
      function qt(e, t, n, r) {
        const o = e.getState();
        if (o.nodeCleanupFunctions.has(n)) return;
        const a = Bt(n),
          i = (function (e, t, n) {
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
          l = a.init(e, t, r);
        o.nodeCleanupFunctions.set(n, () => {
          l(), i();
        });
      }
      function Gt(e, t, n) {
        return Bt(n).peek(e, t);
      }
      function Kt(e, t, n) {
        const r = new Set(),
          o = Array.from(n),
          a = e.getGraph(t.version);
        for (let l = o.pop(); l; l = o.pop()) {
          var i;
          r.add(l);
          const e = null !== (i = a.nodeToNodeSubscriptions.get(l)) && void 0 !== i ? i : Ht;
          for (const t of e) r.has(t) || o.push(t);
        }
        return r;
      }
      var Qt = {
        getNodeLoadable: function (e, t, n) {
          return qt(e, t, n, 'get'), Bt(n).get(e, t);
        },
        peekNodeLoadable: Gt,
        setNodeValue: function (e, t, n, r) {
          const o = Bt(n);
          if (null == o.set) throw new $t('Attempt to set read-only RecoilValue: '.concat(n));
          const a = o.set;
          return qt(e, t, n, 'set'), a(e, t, r);
        },
        initializeNode: function (e, t, n) {
          qt(e, e.getState().currentTree, t, n);
        },
        cleanUpNode: function (e, t) {
          var n;
          const r = e.getState();
          null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
            r.nodeCleanupFunctions.delete(t);
        },
        setUnvalidatedAtomValue_DEPRECATED: function (e, t, n) {
          var r;
          const o = Vt(t);
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
            a = Bt(n).nodeType;
          return zt(
            { type: a },
            {
              loadable: () => Gt(e, t, n),
              isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
              isSet: () => 'selector' !== a && t.atomValues.has(n),
              isModified: () => t.dirtyAtoms.has(n),
              deps: () => {
                var e;
                return Ft(null !== (e = o.nodeDeps.get(n)) && void 0 !== e ? e : []);
              },
              subscribers: () => {
                var o, a;
                return {
                  nodes: Ft(It(Kt(e, t, new Set([n])), (e) => e !== n)),
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
        getDownstreamNodes: Kt,
      };
      let Yt = null;
      var Xt = {
        setInvalidateMemoizedSnapshot: function (e) {
          Yt = e;
        },
        invalidateMemoizedSnapshot: function () {
          var e;
          null === (e = Yt) || void 0 === e || e();
        },
      };
      const { getDownstreamNodes: Zt, getNodeLoadable: Jt, setNodeValue: en } = Qt,
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
        { invalidateMemoizedSnapshot: dn } = Xt;
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
                  throw (Ve(e), se(e));
                }
                if ('hasError' === n.state) throw n.contents;
                return r(n.contents);
              }
              return r;
            })(e, t, r, o),
            i = en(e, t, r.key, a);
          for (const [e, n] of i.entries()) pn(t, e, n);
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
        } else Ve('Unknown action '.concat(n.type));
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
          const r = gn(n);
          for (const o of t) fn(e, r, o);
          return yn(e, r), dn(), r;
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
      function gn(e) {
        return {
          ...e,
          atomValues: e.atomValues.clone(),
          nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
          dirtyAtoms: new Set(e.dirtyAtoms),
        };
      }
      function yn(e, t) {
        const n = Zt(e, t, t.dirtyAtoms);
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
      var wn = {
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
          const i = e.getState();
          r.version !== i.currentTree.version &&
            r.version !== (null === (o = i.nextTree) || void 0 === o ? void 0 : o.version) &&
            r.version !== (null === (a = i.previousTree) || void 0 === a ? void 0 : a.version) &&
            Ve('Tried to read from a discarded tree');
          const l = Jt(e, r, n);
          return 'loading' === l.state && l.contents.catch(() => {}), l;
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
            i = e.getState();
          i.nodeToComponentSubscriptions.has(r) || i.nodeToComponentSubscriptions.set(r, new Map()),
            de(i.nodeToComponentSubscriptions.get(r)).set(a, [
              null !== o && void 0 !== o ? o : '<not captured>',
              n,
            ]);
          const l = an();
          if (l.early && ('LEGACY' === l.mode || 'MUTABLE_SOURCE' === l.mode)) {
            const t = e.getState().nextTree;
            t && t.dirtyAtoms.has(r) && n(t);
          }
          return {
            release: () => {
              const t = e.getState(),
                n = t.nodeToComponentSubscriptions.get(r);
              void 0 !== n && n.has(a)
                ? (n.delete(a), 0 === n.size && t.nodeToComponentSubscriptions.delete(r))
                : Ve(
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
              vn.pop() !== e && Ve('Incorrect order of batch popping');
            }
          );
        },
        writeLoadableToTreeState: pn,
        invalidateDownstreams: yn,
        copyTreeState: gn,
        refreshRecoilValue: function (e, t) {
          var n;
          const { currentTree: r } = e.getState(),
            o = nn(t.key);
          null === (n = o.clearCache) || void 0 === n || n.call(o, e, r);
        },
      };
      var Sn = function (e, t, n) {
        const r = e.entries();
        let o = r.next();
        for (; !o.done; ) {
          const a = o.value;
          if (t.call(n, a[1], a[0], e)) return !0;
          o = r.next();
        }
        return !1;
      };
      const { cleanUpNode: kn } = Qt,
        { deleteNodeConfigIfPossible: _n, getNode: Rn } = dt,
        { RetentionZone: En } = Ot,
        Tn = new Set();
      function Cn(e, t) {
        const n = e.getState(),
          r = n.currentTree;
        if (n.nextTree)
          return void Ve(
            'releaseNodesNowOnCurrentTree should only be called at the end of a batch'
          );
        const o = new Set();
        for (const i of t)
          if (i instanceof En) for (const e of Ln(n, i)) o.add(e);
          else o.add(i);
        const a = (function (e, t) {
          const n = e.getState(),
            r = n.currentTree,
            o = e.getGraph(r.version),
            a = new Set(),
            i = new Set();
          return l(t), a;
          function l(t) {
            const u = new Set(),
              s = (function (e, t, n, r, o) {
                const a = e.getGraph(t.version),
                  i = [],
                  l = new Set();
                for (; n.size > 0; ) u(de(n.values().next().value));
                return i;
                function u(e) {
                  if (r.has(e) || o.has(e)) return void n.delete(e);
                  if (l.has(e)) return;
                  const t = a.nodeToNodeSubscriptions.get(e);
                  if (t) for (const n of t) u(n);
                  l.add(e), n.delete(e), i.push(e);
                }
              })(e, r, t, a, i);
            for (const e of s) {
              var c;
              if ('recoilRoot' === Rn(e).retainedBy) {
                i.add(e);
                continue;
              }
              if ((null !== (c = n.retention.referenceCounts.get(e)) && void 0 !== c ? c : 0) > 0) {
                i.add(e);
                continue;
              }
              if (Nn(e).some((e) => n.retention.referenceCounts.get(e))) {
                i.add(e);
                continue;
              }
              const t = o.nodeToNodeSubscriptions.get(e);
              t && Sn(t, (e) => i.has(e)) ? i.add(e) : (a.add(e), u.add(e));
            }
            const d = new Set();
            for (const e of u)
              for (const t of null !== (f = o.nodeDeps.get(e)) && void 0 !== f ? f : Tn) {
                var f;
                a.has(t) || d.add(t);
              }
            d.size && l(d);
          }
        })(e, o);
        for (const i of a) xn(e, r, i);
      }
      function xn(e, t, n) {
        if (!De('recoil_memory_managament_2020')) return;
        kn(e, n);
        const r = e.getState();
        r.knownAtoms.delete(n),
          r.knownSelectors.delete(n),
          r.nodeTransactionSubscriptions.delete(n),
          r.retention.referenceCounts.delete(n);
        const o = Nn(n);
        for (const u of o) {
          var a;
          null === (a = r.retention.nodesRetainedByZone.get(u)) || void 0 === a || a.delete(n);
        }
        t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
        const i = r.graphsByVersion.get(t.version);
        if (i) {
          const e = i.nodeDeps.get(n);
          if (void 0 !== e) {
            i.nodeDeps.delete(n);
            for (const t of e) {
              var l;
              null === (l = i.nodeToNodeSubscriptions.get(t)) || void 0 === l || l.delete(n);
            }
          }
          i.nodeToNodeSubscriptions.delete(n);
        }
        _n(n);
      }
      function Ln(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) && void 0 !== n ? n : Tn;
      }
      function Nn(e) {
        const t = Rn(e).retainedBy;
        return void 0 === t || 'components' === t || 'recoilRoot' === t
          ? []
          : t instanceof En
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
      var Mn = {
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
      const { unstable_batchedUpdates: Pn } = o;
      var Un = { unstable_batchedUpdates: Pn };
      const { unstable_batchedUpdates: On } = Un;
      var Dn = { unstable_batchedUpdates: On };
      const { batchStart: In } = wn,
        { unstable_batchedUpdates: zn } = Dn;
      let Bn = zn || ((e) => e());
      var Vn = {
        getBatcher: () => Bn,
        setBatcher: (e) => {
          Bn = e;
        },
        batchUpdates: (e) => {
          Bn(() => {
            let t = () => {};
            try {
              (t = In()), e();
            } finally {
              t();
            }
          });
        },
      };
      var Fn = function* (e) {
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
      const { batchUpdates: qn } = Vn,
        { initializeNode: Gn, peekNodeInfo: Kn } = Qt,
        { graph: Qn } = Rt,
        { getNextStoreID: Yn } = xt,
        { DEFAULT_VALUE: Xn, recoilValues: Zn, recoilValuesForKeys: Jn } = dt,
        {
          AbstractRecoilValue: er,
          getRecoilValueAsLoadable: tr,
          setRecoilValue: nr,
          setUnvalidatedRecoilValue: rr,
        } = wn,
        { updateRetainCount: or } = Mn,
        { setInvalidateMemoizedSnapshot: ar } = Xt,
        { getNextTreeStateVersion: ir, makeEmptyStoreState: lr } = Pt,
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
                ? Zn.values()
                : !0 === e.isInitialized
                  ? Jn(Fn([t, n]))
                  : It(Zn.values(), (e) => {
                      let { key: r } = e;
                      return !t.has(r) && !n.has(r);
                    });
            }),
            fe(this, 'getInfo_UNSTABLE', (e) => {
              let { key: t } = e;
              return (
                this.checkRefCount_INTERNAL(),
                Kn(this._store, this._store.getState().currentTree, t)
              );
            }),
            fe(this, 'map', (e) => {
              this.checkRefCount_INTERNAL();
              const t = new hr(this, qn);
              return e(t), t;
            }),
            fe(this, 'asyncMap', async (e) => {
              this.checkRefCount_INTERNAL();
              const t = new hr(this, qn);
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
                const r = Qn();
                return n.set(t, r), r;
              },
              subscribeToTransactions: () => ({ release: () => {} }),
              addTransactionMetadata: () => {
                throw se('Cannot subscribe to Snapshots');
              },
            });
          for (const n of this._store.getState().knownAtoms)
            Gn(this._store, n, 'get'), or(this._store, n, 1);
          this.autoRelease_INTERNAL();
        }
        retain() {
          this._refCount <= 0 && Ve('Attempt to retain() Snapshot that was already released.'),
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
          o = n ? ir() : t.version;
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
                or(t, e.key, 1), nr(this.getStore_INTERNAL(), e, Xn);
              });
            }),
            fe(this, 'setUnvalidatedAtomValues_DEPRECATED', (e) => {
              this.checkRefCount_INTERNAL();
              const t = this.getStore_INTERNAL();
              qn(() => {
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
            const t = new cr(lr());
            return null != e ? t.map(e) : t;
          },
          cloneSnapshot: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'latest';
            const n = fr(e, t);
            return n.isRetained() ? n : (pr(), fr(e, t));
          },
        },
        vr = mr.Snapshot,
        gr = mr.MutableSnapshot,
        yr = mr.freshSnapshot,
        br = mr.cloneSnapshot,
        wr = Object.freeze({
          __proto__: null,
          Snapshot: vr,
          MutableSnapshot: gr,
          freshSnapshot: yr,
          cloneSnapshot: br,
        });
      var Sr = function () {
        const e = new Set();
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        for (const o of n) for (const t of o) e.add(t);
        return e;
      };
      const { useRef: kr } = t;
      var _r = function (e) {
        const t = kr(e);
        return t.current === e && 'function' === typeof e && (t.current = e()), t;
      };
      const { getNextTreeStateVersion: Rr, makeEmptyStoreState: Er } = Pt,
        {
          cleanUpNode: Tr,
          getDownstreamNodes: Cr,
          initializeNode: xr,
          setNodeValue: Lr,
          setUnvalidatedAtomValue_DEPRECATED: Nr,
        } = Qt,
        { graph: Ar } = Rt,
        { cloneGraph: Mr } = Rt,
        { getNextStoreID: Pr } = xt,
        { createMutableSource: Ur, reactMode: Or } = $e,
        { applyAtomValueWrites: Dr } = wn,
        { releaseScheduledRetainablesNow: Ir } = Mn,
        { freshSnapshot: zr } = wr,
        {
          useCallback: Br,
          useContext: Vr,
          useEffect: Fr,
          useMemo: jr,
          useRef: Wr,
          useState: Hr,
        } = t;
      function $r() {
        throw se('This component must be used inside a <RecoilRoot> component.');
      }
      const qr = Object.freeze({
        storeID: Pr(),
        getState: $r,
        replaceState: $r,
        getGraph: $r,
        subscribeToTransactions: $r,
        addTransactionMetadata: $r,
      });
      let Gr = !1;
      function Kr(e) {
        if (Gr)
          throw se(
            'An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.'
          );
        const t = e.getState();
        if (null === t.nextTree) {
          De('recoil_memory_managament_2020') &&
            De('recoil_release_on_cascading_update_killswitch_2021') &&
            t.commitDepth > 0 &&
            Ir(e);
          const n = t.currentTree.version,
            r = Rr();
          (t.nextTree = {
            ...t.currentTree,
            version: r,
            stateID: r,
            dirtyAtoms: new Set(),
            transactionMetadata: {},
          }),
            t.graphsByVersion.set(r, Mr(de(t.graphsByVersion.get(n))));
        }
      }
      const Qr = t.createContext({ current: qr }),
        Yr = () => Vr(Qr),
        Xr = t.createContext(null);
      function Zr(e, t, n) {
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
          (!Or().early || t.suspendedComponentResolvers.size > 0) &&
            (Zr(e, t, n),
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
          Fr(
            () => (
              t(() => r({})),
              () => {
                t(() => {});
              }
            ),
            [t]
          ),
          Fr(() => {
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
                      : Ve('Ended batch with no previous state, which is unexpected', 'recoil'),
                    (t.previousTree = null),
                    De('recoil_memory_managament_2020') && null == n && Ir(e);
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
          { initializeState_DEPRECATED: r, initializeState: o, store_INTERNAL: a, children: i } = e;
        const l = (e) => {
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
            Kr(p.current);
            for (const t of Object.keys(e))
              de(p.current.getState().nextTree).transactionMetadata[t] = e[t];
          },
          c = (e) => {
            Kr(p.current);
            const t = de(n.current.nextTree);
            let r;
            try {
              (Gr = !0), (r = e(t));
            } finally {
              Gr = !1;
            }
            r !== t &&
              ((n.current.nextTree = r),
              Or().early && Zr(p.current, n.current, r),
              de(d.current)());
          },
          d = Wr(null),
          f = Br(
            (e) => {
              d.current = e;
            },
            [d]
          ),
          p = _r(() =>
            null !== a && void 0 !== a
              ? a
              : {
                  storeID: Pr(),
                  getState: () => n.current,
                  replaceState: c,
                  getGraph: l,
                  subscribeToTransactions: u,
                  addTransactionMetadata: s,
                }
          );
        null != a && (p.current = a),
          (n = _r(() =>
            null != r
              ? (function (e, t) {
                  const n = Er();
                  return (
                    t({
                      set: (t, r) => {
                        const o = n.currentTree,
                          a = Lr(e, o, t.key, r),
                          i = new Set(a.keys()),
                          l = o.nonvalidatedAtoms.clone();
                        for (const e of i) l.delete(e);
                        n.currentTree = {
                          ...o,
                          dirtyAtoms: Sr(o.dirtyAtoms, i),
                          atomValues: Dr(o.atomValues, a),
                          nonvalidatedAtoms: l,
                        };
                      },
                      setUnvalidatedAtomValues: (e) => {
                        e.forEach((e, t) => {
                          n.currentTree = Nr(n.currentTree, t, e);
                        });
                      },
                    }),
                    n
                  );
                })(p.current, r)
              : null != o
                ? (function (e) {
                    const t = zr(e),
                      n = t.getStore_INTERNAL().getState();
                    return (
                      t.retain(),
                      n.nodeCleanupFunctions.forEach((e) => e()),
                      n.nodeCleanupFunctions.clear(),
                      n
                    );
                  })(o)
                : Er()
          ));
        const h = jr(
          () =>
            null === Ur || void 0 === Ur ? void 0 : Ur(n, () => n.current.currentTree.version),
          [n]
        );
        return (
          Fr(() => {
            const e = p.current;
            for (const t of new Set(e.getState().knownAtoms)) xr(e, t, 'get');
            return () => {
              for (const t of e.getState().knownAtoms) Tr(e, t);
            };
          }, [p]),
          t.createElement(
            Qr.Provider,
            { value: p },
            t.createElement(
              Xr.Provider,
              { value: h },
              t.createElement(eo, { setNotifyBatcherOfChange: f }),
              i
            )
          )
        );
      }
      var ro = {
        RecoilRoot: function (e) {
          const { override: n, ...r } = e,
            o = Yr();
          return !1 === n && o.current !== qr ? e.children : t.createElement(no, r);
        },
        useStoreRef: Yr,
        useRecoilMutableSource: function () {
          const e = Vr(Xr);
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
        notifyComponents_FOR_TESTING: Zr,
        sendEndOfBatchNotifications_FOR_TESTING: Jr,
      };
      var oo = function (e, t) {
        if (e === t) return !0;
        if (e.length !== t.length) return !1;
        for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      };
      const { useEffect: ao, useRef: io } = t;
      var lo = function (e) {
        const t = io();
        return (
          ao(() => {
            t.current = e;
          }),
          t.current
        );
      };
      const { useStoreRef: uo } = ro,
        { SUSPENSE_TIMEOUT_MS: so } = Mn,
        { updateRetainCount: co } = Mn,
        { RetentionZone: fo } = Ot,
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
              a = lo(n);
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
      var go = function () {
        return '<component name not available>';
      };
      const { batchUpdates: yo } = Vn,
        { DEFAULT_VALUE: bo } = dt,
        {
          currentRendererSupportsUseSyncExternalStore: wo,
          reactMode: So,
          useMutableSource: ko,
          useSyncExternalStore: _o,
        } = $e,
        { useRecoilMutableSource: Ro, useStoreRef: Eo } = ro,
        { isRecoilValue: To } = et,
        {
          AbstractRecoilValue: Co,
          getRecoilValueAsLoadable: xo,
          setRecoilValue: Lo,
          setUnvalidatedRecoilValue: No,
          subscribeToRecoilValue: Ao,
        } = wn,
        { useCallback: Mo, useEffect: Po, useMemo: Uo, useRef: Oo, useState: Do } = t,
        { setByAddingToSet: Io } = Dt,
        { isSSR: zo } = Hn;
      function Bo(e, t, n) {
        if ('hasValue' === e.state) return e.contents;
        if ('loading' === e.state) {
          throw new Promise((t) => {
            const r = n.current.getState().suspendedComponentResolvers;
            r.add(t),
              zo &&
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
      function Vo(e) {
        const t = Eo(),
          n = go(),
          r = Mo(() => {
            var n;
            const r = t.current,
              o = r.getState(),
              a = So().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
            return { loadable: xo(r, e, a), key: e.key };
          }, [t, e]),
          o = Mo((e) => {
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
          a = Uo(() => o(r), [r, o]),
          i = Mo(
            (r) => {
              const o = t.current;
              return Ao(o, e, r, n).release;
            },
            [t, e, n]
          );
        return _o(i, a, a).loadable;
      }
      function Fo(e) {
        const t = Eo(),
          n = Mo(() => {
            var n;
            const r = t.current,
              o = r.getState(),
              a = So().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
            return xo(r, e, a);
          }, [t, e]),
          r = Mo(() => n(), [n]),
          o = go(),
          a = Mo(
            (r, a) => {
              const i = t.current;
              return Ao(
                i,
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
          i = Ro();
        if (null == i)
          throw se(
            'Recoil hooks must be used in components contained within a <RecoilRoot> component.'
          );
        const l = ko(i, r, a),
          u = Oo(l);
        return (
          Po(() => {
            u.current = l;
          }),
          l
        );
      }
      function jo(e) {
        const t = Eo(),
          n = go(),
          r = Mo(() => {
            var n;
            const r = t.current,
              o = r.getState(),
              a = So().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
            return xo(r, e, a);
          }, [t, e]),
          o = Mo(() => ({ loadable: r(), key: e.key }), [r, e.key]),
          a = Mo(
            (e) => {
              const t = o();
              return e.loadable.is(t.loadable) && e.key === t.key ? e : t;
            },
            [o]
          );
        Po(() => {
          const r = Ao(
            t.current,
            e,
            (e) => {
              l(a);
            },
            n
          );
          return l(a), r.release;
        }, [n, e, t, a]);
        const [i, l] = Do(o);
        return i.key !== e.key ? o().loadable : i.loadable;
      }
      function Wo(e) {
        const t = Eo(),
          [, n] = Do([]),
          r = go(),
          o = Mo(() => {
            var n;
            const r = t.current,
              o = r.getState(),
              a = So().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree;
            return xo(r, e, a);
          }, [t, e]),
          a = o(),
          i = Oo(a);
        return (
          Po(() => {
            i.current = a;
          }),
          Po(() => {
            const a = t.current,
              l = a.getState(),
              u = Ao(
                a,
                e,
                (e) => {
                  var t;
                  if (!De('recoil_suppress_rerender_in_callback')) return n([]);
                  const r = o();
                  (null !== (t = i.current) && void 0 !== t && t.is(r)) || n(r), (i.current = r);
                },
                r
              );
            if (l.nextTree)
              a.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                (i.current = null), n([]);
              });
            else {
              var s;
              if (!De('recoil_suppress_rerender_in_callback')) return n([]);
              const e = o();
              (null !== (s = i.current) && void 0 !== s && s.is(e)) || n(e), (i.current = e);
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
            SYNC_EXTERNAL_STORE: wo() ? Vo : jo,
            MUTABLE_SOURCE: Fo,
            LEGACY: Wo,
          }[So().mode](e)
        );
      }
      function $o(e) {
        const t = Eo();
        return Bo(Ho(e), e, t);
      }
      function qo(e) {
        const t = Eo();
        return Mo(
          (n) => {
            Lo(t.current, e, n);
          },
          [t, e]
        );
      }
      function Go(e) {
        return De('recoil_memory_managament_2020') && vo(e), jo(e);
      }
      function Ko(e) {
        const t = Eo();
        return Bo(Go(e), e, t);
      }
      var Qo = {
        recoilComponentGetRecoilValueCount_FOR_TESTING: { current: 0 },
        useRecoilInterface: function () {
          const e = go(),
            t = Eo(),
            [, n] = Do([]),
            r = Oo(new Set());
          r.current = new Set();
          const o = Oo(new Set()),
            a = Oo(new Map()),
            i = Mo(
              (e) => {
                const t = a.current.get(e);
                t && (t.release(), a.current.delete(e));
              },
              [a]
            ),
            l = Mo((e, t) => {
              a.current.has(t) && n([]);
            }, []);
          return (
            Po(() => {
              const n = t.current;
              St(r.current, o.current).forEach((t) => {
                if (a.current.has(t))
                  return void tt('Double subscription to RecoilValue "'.concat(t, '"'));
                const r = Ao(n, new Co(t), (e) => l(e, t), e);
                a.current.set(t, r);
                n.getState().nextTree
                  ? n.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                      l(n.getState(), t);
                    })
                  : l(n.getState(), t);
              }),
                St(o.current, r.current).forEach((e) => {
                  i(e);
                }),
                (o.current = r.current);
            }),
            Po(() => {
              const n = a.current;
              return (
                St(r.current, new Set(n.keys())).forEach((r) => {
                  const o = Ao(t.current, new Co(r), (e) => l(e, r), e);
                  n.set(r, o);
                }),
                () => n.forEach((e, t) => i(t))
              );
            }, [e, t, i, l]),
            Uo(() => {
              function e(e) {
                return (n) => {
                  Lo(t.current, e, n);
                };
              }
              function n(e) {
                var n;
                r.current.has(e.key) || (r.current = Io(r.current, e.key));
                const o = t.current.getState();
                return xo(
                  t.current,
                  e,
                  So().early && null !== (n = o.nextTree) && void 0 !== n ? n : o.currentTree
                );
              }
              function o(e) {
                return Bo(n(e), e, t);
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
                  return () => Lo(t.current, e, bo);
                },
              };
            }, [r, t])
          );
        },
        useRecoilState: function (e) {
          return [$o(e), qo(e)];
        },
        useRecoilStateLoadable: function (e) {
          return [Ho(e), qo(e)];
        },
        useRecoilValue: $o,
        useRecoilValueLoadable: Ho,
        useResetRecoilState: function (e) {
          const t = Eo();
          return Mo(() => {
            Lo(t.current, e, bo);
          }, [t, e]);
        },
        useSetRecoilState: qo,
        useSetUnvalidatedAtomValues: function () {
          const e = Eo();
          return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            yo(() => {
              e.current.addTransactionMetadata(n), t.forEach((t, n) => No(e.current, new Co(n), t));
            });
          };
        },
        useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Go,
        useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Ko,
        useRecoilState_TRANSITION_SUPPORT_UNSTABLE: function (e) {
          return [Ko(e), qo(e)];
        },
      };
      var Yo = function (e, t) {
        const n = new Map();
        for (const [r, o] of e) t(o, r) && n.set(r, o);
        return n;
      };
      var Xo = function (e, t) {
        const n = new Set();
        for (const r of e) t(r) && n.add(r);
        return n;
      };
      var Zo = function () {
        const e = new Map();
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        for (let o = 0; o < n.length; o++) {
          const t = n[o].keys();
          let r;
          for (; !(r = t.next()).done; ) e.set(r.value, n[o].get(r.value));
        }
        return e;
      };
      const { batchUpdates: Jo } = Vn,
        { DEFAULT_VALUE: ea, getNode: ta, nodes: na } = dt,
        { useStoreRef: ra } = ro,
        { AbstractRecoilValue: oa, setRecoilValueLoadable: aa } = wn,
        { SUSPENSE_TIMEOUT_MS: ia } = Mn,
        { cloneSnapshot: la } = wr,
        { useCallback: ua, useEffect: sa, useRef: ca, useState: da } = t,
        { isSSR: fa } = Hn;
      function pa(e) {
        const t = ra();
        sa(() => t.current.subscribeToTransactions(e).release, [e, t]);
      }
      function ha(e) {
        const t = e.atomValues.toMap(),
          n = kt(
            Yo(t, (e, t) => {
              const n = ta(t).persistence_UNSTABLE;
              return null != n && 'none' !== n.type && 'hasValue' === e.state;
            }),
            (e) => e.contents
          );
        return Zo(e.nonvalidatedAtoms.toMap(), n);
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
              var r, i;
              (null === (r = o.atomValues.get(t)) || void 0 === r ? void 0 : r.contents) !==
                (null === (i = a.atomValues.get(t)) || void 0 === i ? void 0 : i.contents) &&
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
            [t, n] = da(() => la(e.current)),
            r = lo(t),
            o = ca(),
            a = ca();
          if (
            (pa(ua((e) => n(la(e)), [])),
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
            var i;
            if (o.current)
              window.clearTimeout(o.current),
                (o.current = null),
                null === (i = a.current) || void 0 === i || i.call(a),
                (a.current = null);
            (a.current = t.retain()),
              (o.current = window.setTimeout(() => {
                var e;
                (o.current = null),
                  null === (e = a.current) || void 0 === e || e.call(a),
                  (a.current = null);
              }, ia));
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
                const n = la(t, 'latest'),
                  r = la(t, 'previous');
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
                  (Ve(
                    'Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil'
                  ),
                  (n = t.getState().currentTree));
                const o = ha(r),
                  a = ha(n),
                  i = kt(na, (e) => {
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
                  l = Xo(r.dirtyAtoms, (e) => o.has(e) || a.has(e));
                e({
                  atomValues: o,
                  previousAtomValues: a,
                  atomInfo: i,
                  modifiedAtoms: l,
                  transactionMetadata: { ...r.transactionMetadata },
                });
              },
              [e]
            )
          );
        },
        useTransactionSubscription_DEPRECATED: pa,
      };
      const { peekNodeInfo: ga } = Qt,
        { useStoreRef: ya } = ro;
      var ba = function () {
        const e = ya();
        return (t) => {
          let { key: n } = t;
          return ga(e.current, e.current.getState().currentTree, n);
        };
      };
      const { reactMode: wa } = $e,
        { RecoilRoot: Sa, useStoreRef: ka } = ro,
        { useMemo: _a } = t;
      var Ra = function () {
        'MUTABLE_SOURCE' === wa().mode &&
          console.warn(
            'Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.'
          );
        const e = ka().current;
        return _a(
          () =>
            function (n) {
              let { children: r } = n;
              return t.createElement(Sa, { store_INTERNAL: e }, r);
            },
          [e]
        );
      };
      const { loadableWithValue: Ea } = Me,
        { initializeNode: Ta } = Qt,
        { DEFAULT_VALUE: Ca, getNode: xa } = dt,
        {
          copyTreeState: La,
          getRecoilValueAsLoadable: Na,
          invalidateDownstreams: Aa,
          writeLoadableToTreeState: Ma,
        } = wn;
      function Pa(e) {
        return 'atom' === xa(e.key).nodeType;
      }
      class Ua {
        constructor(e, t) {
          fe(this, '_store', void 0),
            fe(this, '_treeState', void 0),
            fe(this, '_changes', void 0),
            fe(this, 'get', (e) => {
              if (this._changes.has(e.key)) return this._changes.get(e.key);
              if (!Pa(e)) throw se('Reading selectors within atomicUpdate is not supported');
              const t = Na(this._store, e, this._treeState);
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
              if (!Pa(e)) throw se('Setting selectors within atomicUpdate is not supported');
              if ('function' === typeof t) {
                const n = this.get(e);
                this._changes.set(e.key, t(n));
              } else Ta(this._store, e.key, 'set'), this._changes.set(e.key, t);
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
          const e = La(this._treeState);
          for (const [t, n] of this._changes) Ma(e, t, Ea(n));
          return Aa(this._store, e), e;
        }
      }
      var Oa = function (e) {
          return (t) => {
            e.replaceState((n) => {
              const r = new Ua(e, n);
              return t(r), r.newTreeState_INTERNAL();
            });
          };
        },
        Da = Oa,
        Ia = Object.freeze({ __proto__: null, atomicUpdater: Da });
      var za = function (e, t) {
        if (!e) throw new Error(t);
      };
      const { atomicUpdater: Ba } = Ia,
        { batchUpdates: Va } = Vn,
        { DEFAULT_VALUE: Fa } = dt,
        { useStoreRef: ja } = ro,
        { refreshRecoilValue: Wa, setRecoilValue: Ha } = wn,
        { cloneSnapshot: $a } = wr,
        { gotoSnapshot: qa } = va,
        { useCallback: Ga } = t;
      class Ka {}
      const Qa = new Ka();
      function Ya(e, t, n, r) {
        let o,
          a = Qa;
        var i;
        (Va(() => {
          const i =
            'useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.';
          if ('function' !== typeof t) throw se(i);
          const l = zt(
              {
                ...(null !== r && void 0 !== r ? r : {}),
                set: (t, n) => Ha(e, t, n),
                reset: (t) => Ha(e, t, Fa),
                refresh: (t) => Wa(e, t),
                gotoSnapshot: (t) => qa(e, t),
                transact_UNSTABLE: (t) => Ba(e)(t),
              },
              {
                snapshot: () => {
                  const t = $a(e);
                  return (o = t.retain()), t;
                },
              }
            ),
            u = t(l);
          if ('function' !== typeof u) throw se(i);
          a = u(...n);
        }),
        a instanceof Ka && za(!1),
        ce(a))
          ? (a = a.finally(() => {
              var e;
              null === (e = o) || void 0 === e || e();
            }))
          : null === (i = o) || void 0 === i || i();
        return a;
      }
      var Xa = {
        recoilCallback: Ya,
        useRecoilCallback: function (e, t) {
          const n = ja();
          return Ga(
            function () {
              for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                r[o] = arguments[o];
              return Ya(n.current, e, r);
            },
            null != t ? [...t, n] : void 0
          );
        },
      };
      const { useStoreRef: Za } = ro,
        { refreshRecoilValue: Ja } = wn,
        { useCallback: ei } = t;
      var ti = function (e) {
        const t = Za();
        return ei(() => {
          const n = t.current;
          Ja(n, e);
        }, [e, t]);
      };
      const { atomicUpdater: ni } = Ia,
        { useStoreRef: ri } = ro,
        { useMemo: oi } = t;
      var ai = function (e, t) {
        const n = ri();
        return oi(
          () =>
            function () {
              for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                r[o] = arguments[o];
              ni(n.current)((t) => {
                e(t)(...r);
              });
            },
          null != t ? [...t, n] : void 0
        );
      };
      var ii = class {
          constructor(e) {
            fe(this, 'value', void 0), (this.value = e);
          }
        },
        li = Object.freeze({ __proto__: null, WrappedValue: ii });
      const { isFastRefreshEnabled: ui } = $e;
      class si extends Error {}
      var ci = class {
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
              var r, o, a, i;
              let l, u;
              for (const [t, h] of e) {
                var s, c, d;
                const e = this._root;
                if ('leaf' === (null === e || void 0 === e ? void 0 : e.type))
                  throw this.invalidCacheError();
                const r = l;
                if (
                  ((l = r ? r.branches.get(u) : e),
                  (l =
                    null !== (s = l) && void 0 !== s
                      ? s
                      : {
                          type: 'branch',
                          nodeKey: t,
                          parent: r,
                          branches: new Map(),
                          branchKey: u,
                        }),
                  'branch' !== l.type || l.nodeKey !== t)
                )
                  throw this.invalidCacheError();
                null === r || void 0 === r || r.branches.set(u, l),
                  null === n ||
                    void 0 === n ||
                    null === (c = n.onNodeVisit) ||
                    void 0 === c ||
                    c.call(n, l),
                  (u = this._mapNodeValue(h)),
                  (this._root = null !== (d = this._root) && void 0 !== d ? d : l);
              }
              const f = l
                ? null === (r = l) || void 0 === r
                  ? void 0
                  : r.branches.get(u)
                : this._root;
              if (null != f && ('leaf' !== f.type || f.branchKey !== u))
                throw this.invalidCacheError();
              const p = { type: 'leaf', value: t, parent: l, branchKey: u };
              null === (o = l) || void 0 === o || o.branches.set(u, p),
                (this._root = null !== (a = this._root) && void 0 !== a ? a : p),
                this._numLeafs++,
                this._onSet(p),
                null === n ||
                  void 0 === n ||
                  null === (i = n.onNodeVisit) ||
                  void 0 === i ||
                  i.call(n, p);
            };
            try {
              r();
            } catch (o) {
              if (!(o instanceof si)) throw o;
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
            const e = ui()
              ? 'Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.'
              : 'Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.';
            throw (Ve(e + (null != this._name ? ' - '.concat(this._name) : '')), new si());
          }
        },
        di = ci,
        fi = Object.freeze({ __proto__: null, TreeCache: di });
      var pi = class {
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
        hi = Object.freeze({ __proto__: null, LRUCache: pi });
      const { LRUCache: mi } = hi,
        { TreeCache: vi } = fi;
      var gi = function (e) {
        let { name: t, maxSize: n, mapNodeValue: r = (e) => e } = e;
        const o = new mi({ maxSize: n }),
          a = new vi({
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
      function yi(e, t, n) {
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
            e.map((e, n) => yi(e, t, n.toString())),
            ']'
          );
        if ('function' === typeof e.toJSON) return yi(e.toJSON(n), t, n);
        if (e instanceof Map) {
          const r = {};
          for (const [n, o] of e) r['string' === typeof n ? n : yi(n, t)] = o;
          return yi(r, t, n);
        }
        return e instanceof Set
          ? yi(
              Array.from(e).sort((e, n) => yi(e, t).localeCompare(yi(n, t))),
              t,
              n
            )
          : void 0 !== Symbol &&
              null != e[Symbol.iterator] &&
              'function' === typeof e[Symbol.iterator]
            ? yi(Array.from(e), t, n)
            : '{'.concat(
                Object.keys(e)
                  .filter((t) => void 0 !== e[t])
                  .sort()
                  .map((n) => ''.concat(yi(n, t), ':').concat(yi(e[n], t, n)))
                  .join(','),
                '}'
              );
      }
      var bi = function (e) {
        return yi(
          e,
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { allowFunctions: !1 }
        );
      };
      const { TreeCache: wi } = fi,
        Si = { equality: 'reference', eviction: 'keep-all', maxSize: 1 / 0 };
      var ki = function () {
        let {
            equality: e = Si.equality,
            eviction: t = Si.eviction,
            maxSize: n = Si.maxSize,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Si,
          r = arguments.length > 1 ? arguments[1] : void 0;
        const o = (function (e) {
          switch (e) {
            case 'reference':
              return (e) => e;
            case 'value':
              return (e) => bi(e);
          }
          throw se('Unrecognized equality policy '.concat(e));
        })(e);
        return (function (e, t, n, r) {
          switch (e) {
            case 'keep-all':
              return new wi({ name: r, mapNodeValue: n });
            case 'lru':
              return gi({ name: r, maxSize: de(t), mapNodeValue: n });
            case 'most-recent':
              return gi({ name: r, maxSize: 1, mapNodeValue: n });
          }
          throw se('Unrecognized eviction policy '.concat(e));
        })(t, n, o, r);
      };
      const { isReactNative: _i, isWindow: Ri } = Hn;
      var Ei = {
        startPerfBlock: function (e) {
          return () => null;
        },
      };
      const {
          isLoadable: Ti,
          loadableWithError: Ci,
          loadableWithPromise: xi,
          loadableWithValue: Li,
        } = Me,
        { WrappedValue: Ni } = li,
        { getNodeLoadable: Ai, peekNodeLoadable: Mi, setNodeValue: Pi } = Qt,
        { saveDepsToStore: Ui } = Rt,
        { DEFAULT_VALUE: Oi, getConfigDeletionHandler: Di, getNode: Ii, registerNode: zi } = dt,
        { isRecoilValue: Bi } = et,
        { markRecoilValueModified: Vi } = wn,
        { retainedByOptionWithDefault: Fi } = Mn,
        { recoilCallback: ji } = Xa,
        { startPerfBlock: Wi } = Ei;
      class Hi {}
      const $i = new Hi(),
        qi = [],
        Gi = new Map(),
        Ki = (() => {
          let e = 0;
          return () => e++;
        })();
      function Qi(e) {
        let t = null;
        const { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
          a = null != e.set ? e.set : void 0;
        const i = new Set(),
          l = ki(
            null !== o && void 0 !== o ? o : { equality: 'reference', eviction: 'keep-all' },
            n
          ),
          u = Fi(e.retainedBy_UNSTABLE),
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
          return void 0 !== Di(n) && !d();
        }
        function h(e, t, n, r, o) {
          C(t, r, o), m(e, n);
        }
        function m(e, t) {
          T(e, t) && E(e), v(t, !0);
        }
        function v(e, n) {
          const r = Gi.get(e);
          if (null != r) {
            for (const e of r) Vi(e, de(t));
            n && Gi.delete(e);
          }
        }
        function g(e, t) {
          let n = Gi.get(t);
          null == n && Gi.set(t, (n = new Set())), n.add(e);
        }
        function y(e, t, n, r, o, a) {
          return t
            .then((r) => {
              if (!d()) throw (E(e), $i);
              null != a.loadingDepKey && a.loadingDepPromise === t
                ? n.atomValues.set(a.loadingDepKey, Li(r))
                : e.getState().knownSelectors.forEach((e) => {
                    n.atomValues.delete(e);
                  });
              const i = S(e, n);
              if (i && 'loading' !== i.state) {
                if (((T(e, o) || null == R(e)) && m(e, o), 'hasValue' === i.state))
                  return i.contents;
                throw i.contents;
              }
              if (!T(e, o)) {
                const t = _(e, n);
                if (null != t) return t.loadingLoadable.contents;
              }
              const [l, u] = w(e, n, o);
              if (('loading' !== l.state && h(e, n, o, l, u), 'hasError' === l.state))
                throw l.contents;
              return l.contents;
            })
            .catch((t) => {
              if (t instanceof Hi) throw $i;
              if (!d()) throw (E(e), $i);
              const a = Ci(t);
              throw (h(e, n, o, a, r), t);
            });
        }
        function b(e, t, r, o) {
          var a, l, u, s, c, d, f;
          (T(e, o) ||
            t.version ===
              (null === (a = e.getState()) ||
              void 0 === a ||
              null === (l = a.currentTree) ||
              void 0 === l
                ? void 0
                : l.version) ||
            t.version ===
              (null === (u = e.getState()) ||
              void 0 === u ||
              null === (s = u.nextTree) ||
              void 0 === s
                ? void 0
                : s.version)) &&
            Ui(
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
          for (const n of r) i.add(n);
        }
        function w(e, o, a) {
          const i = Wi(n);
          let l = !0,
            u = !0;
          const s = () => {
            i(), (u = !1);
          };
          let c,
            f,
            p = !1;
          const m = { loadingDepKey: null, loadingDepPromise: null },
            g = new Map();
          function w(t) {
            let { key: n } = t;
            const r = Ai(e, o, n);
            switch (
              (g.set(n, r),
              l ||
                (b(e, o, new Set(g.keys()), a),
                (function (e, t) {
                  T(e, t) && (de(R(e)).stateVersions.clear(), v(t, !1));
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
          const S = (n) =>
            function () {
              if (u)
                throw se(
                  'Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.'
                );
              null == t && za(!1);
              for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                o[a] = arguments[a];
              return ji(e, n, o, { node: t });
            };
          try {
            (c = r({ get: w, getCallback: S })),
              (c = Bi(c) ? w(c) : c),
              Ti(c) && ('hasError' === c.state && (p = !0), (c = c.contents)),
              ce(c)
                ? (c = (function (e, t, n, r, o, a) {
                    return t
                      .then((t) => {
                        if (!d()) throw (E(e), $i);
                        const a = Li(t);
                        return h(e, n, o, a, r), t;
                      })
                      .catch((t) => {
                        if (!d()) throw (E(e), $i);
                        if (ce(t)) return y(e, t, n, r, o, a);
                        const i = Ci(t);
                        throw (h(e, n, o, i, r), t);
                      });
                  })(e, c, o, g, a, m).finally(s))
                : s(),
              (c = c instanceof Ni ? c.value : c);
          } catch (k) {
            (c = k), ce(c) ? (c = y(e, c, o, g, a, m).finally(s)) : ((p = !0), s());
          }
          return (
            (f = p ? Ci(c) : ce(c) ? xi(c) : Li(c)),
            (l = !1),
            (function (e, t, n) {
              if (T(e, t)) {
                const t = R(e);
                null != t && (t.depValuesDiscoveredSoFarDuringAsyncWork = n);
              }
            })(e, a, g),
            b(e, o, new Set(g.keys()), a),
            [f, g]
          );
        }
        function S(e, t) {
          let r = t.atomValues.get(n);
          if (null != r) return r;
          const o = new Set();
          try {
            r = l.get((n) => ('string' !== typeof n && za(!1), Ai(e, t, n).contents), {
              onNodeVisit: (e) => {
                'branch' === e.type && e.nodeKey !== n && o.add(e.nodeKey);
              },
            });
          } catch (i) {
            throw se('Problem with cache lookup for selector "'.concat(n, '": ').concat(i.message));
          }
          var a;
          r &&
            (t.atomValues.set(n, r),
            b(e, t, o, null === (a = R(e)) || void 0 === a ? void 0 : a.executionID));
          return r;
        }
        function k(e, t) {
          const n = S(e, t);
          if (null != n) return E(e), n;
          const r = _(e, t);
          var o;
          if (null != r)
            return (
              'loading' === (null === (o = r.loadingLoadable) || void 0 === o ? void 0 : o.state) &&
                g(e, r.executionID),
              r.loadingLoadable
            );
          const a = Ki(),
            [i, l] = w(e, t, a);
          return (
            'loading' === i.state
              ? (!(function (e, t, n, r, o) {
                  s.set(e, {
                    depValuesDiscoveredSoFarDuringAsyncWork: r,
                    executionID: t,
                    loadingLoadable: n,
                    stateVersions: new Map([[o.version, !0]]),
                  });
                })(e, a, i, l, t),
                g(e, a))
              : (E(e), C(t, i, l)),
            i
          );
        }
        function _(e, t) {
          const n = Fn([
            s.has(e) ? [de(s.get(e))] : [],
            nt(
              It(s, (t) => {
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
            for (const [r, o] of n) if (!Ai(e, t, r).is(o)) return !0;
            return !1;
          }
          for (const o of n) {
            if (o.stateVersions.get(t.version) || !r(o.depValuesDiscoveredSoFarDuringAsyncWork))
              return o.stateVersions.set(t.version, !0), o;
            o.stateVersions.set(t.version, !1);
          }
        }
        function R(e) {
          return s.get(e);
        }
        function E(e) {
          s.delete(e);
        }
        function T(e, t) {
          var n;
          return t === (null === (n = R(e)) || void 0 === n ? void 0 : n.executionID);
        }
        function C(e, t, r) {
          e.atomValues.set(n, t);
          try {
            l.set(
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
            : l.get((n) => {
                var r;
                return (
                  'string' !== typeof n && za(!1),
                  null === (r = Mi(e, t, n)) || void 0 === r ? void 0 : r.contents
                );
              });
        }
        function L(e, t) {
          return (function (e) {
            if (qi.includes(n)) {
              const e = 'Recoil selector has circular dependencies: '.concat(
                qi.slice(qi.indexOf(n)).join(' \u2192 ')
              );
              return Ci(se(e));
            }
            qi.push(n);
            try {
              return e();
            } finally {
              qi.pop();
            }
          })(() => k(e, t));
        }
        function N(e) {
          e.atomValues.delete(n);
        }
        function A(e, n) {
          null == t && za(!1);
          for (const t of i) {
            var r;
            const o = Ii(t);
            null === (r = o.clearCache) || void 0 === r || r.call(o, e, n);
          }
          i.clear(), N(n), l.clear(), Vi(e, t);
        }
        if (null != a) {
          return (t = zi({
            key: n,
            nodeType: 'selector',
            peek: x,
            get: L,
            set: (e, t, r) => {
              let o = !1;
              const i = new Map();
              function l(r) {
                let { key: a } = r;
                if (o) throw se('Recoil: Async selector sets are not currently supported.');
                const i = Ai(e, t, a);
                if ('hasValue' === i.state) return i.contents;
                if ('loading' === i.state) {
                  const e = 'Getting value of asynchronous atom or selector "'
                    .concat(a, '" in a pending state while setting selector "')
                    .concat(n, '" is not yet supported.');
                  throw (Ve(e), se(e));
                }
                throw i.contents;
              }
              function u(n, r) {
                if (o) {
                  const e = 'Recoil: Async selector sets are not currently supported.';
                  throw (Ve(e), se(e));
                }
                const a = 'function' === typeof r ? r(l(n)) : r;
                Pi(e, t, n.key, a).forEach((e, t) => i.set(t, e));
              }
              const s = a(
                {
                  set: u,
                  get: l,
                  reset: function (e) {
                    u(e, Oi);
                  },
                },
                r
              );
              if (void 0 !== s)
                throw ce(s)
                  ? se('Recoil: Async selector sets are not currently supported.')
                  : se('Recoil: selector set should be a void function.');
              return (o = !0), i;
            },
            init: f,
            invalidate: N,
            clearCache: A,
            shouldDeleteConfigOnRelease: p,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: u,
          }));
        }
        return (t = zi({
          key: n,
          nodeType: 'selector',
          peek: x,
          get: L,
          init: f,
          invalidate: N,
          clearCache: A,
          shouldDeleteConfigOnRelease: p,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: u,
        }));
      }
      Qi.value = (e) => new Ni(e);
      var Yi = Qi;
      const {
          isLoadable: Xi,
          loadableWithError: Zi,
          loadableWithPromise: Ji,
          loadableWithValue: el,
        } = Me,
        { WrappedValue: tl } = li,
        { peekNodeInfo: nl } = Qt,
        {
          DEFAULT_VALUE: rl,
          DefaultValue: ol,
          getConfigDeletionHandler: al,
          registerNode: il,
          setConfigDeletionHandler: ll,
        } = dt,
        { isRecoilValue: ul } = et,
        {
          getRecoilValueAsLoadable: sl,
          markRecoilValueModified: cl,
          setRecoilValue: dl,
          setRecoilValueLoadable: fl,
        } = wn,
        { retainedByOptionWithDefault: pl } = Mn,
        hl = (e) => (e instanceof tl ? e.value : e);
      function ml(e) {
        const { key: t, persistence_UNSTABLE: n } = e,
          r = pl(e.retainedBy_UNSTABLE);
        let o = 0;
        function a(e) {
          return Ji(
            e
              .then((e) => ((l = el(e)), e))
              .catch((e) => {
                throw ((l = Zi(e)), e);
              })
          );
        }
        let i,
          l = ce(e.default)
            ? a(e.default)
            : Xi(e.default)
              ? 'loading' === e.default.state
                ? a(e.default.contents)
                : e.default
              : el(hl(e.default));
        s(l.contents);
        const u = new Map();
        function s(e) {
          return e;
        }
        function c(e, n) {
          var r, o;
          return null !== (r = null !== (o = n.atomValues.get(t)) && void 0 !== o ? o : i) &&
            void 0 !== r
            ? r
            : l;
        }
        const d = il({
          key: t,
          nodeType: 'atom',
          peek: c,
          get: function (e, r) {
            if (r.atomValues.has(t)) return de(r.atomValues.get(t));
            if (r.nonvalidatedAtoms.has(t)) {
              if (null != i) return i;
              if (null == n)
                return (
                  tt(
                    'Tried to restore a persisted value for atom '.concat(
                      t,
                      ' but it has no persistence settings.'
                    )
                  ),
                  l
                );
              const e = r.nonvalidatedAtoms.get(t),
                o = n.validator(e, rl),
                a = o instanceof ol ? l : el(o);
              return (i = a), i;
            }
            return l;
          },
          set: function (e, n, r) {
            if (n.atomValues.has(t)) {
              const e = de(n.atomValues.get(t));
              if ('hasValue' === e.state && r === e.contents) return new Map();
            } else if (!n.nonvalidatedAtoms.has(t) && r instanceof ol) return new Map();
            return (i = void 0), new Map().set(t, el(r));
          },
          init: function (n, r, a) {
            var i;
            if ((o++, n.getState().knownAtoms.add(t), 'loading' === l.state)) {
              const m = () => {
                var e;
                (null !== (e = n.getState().nextTree) && void 0 !== e
                  ? e
                  : n.getState().currentTree
                ).atomValues.has(t) || cl(n, d);
              };
              l.contents.finally(m);
            }
            const s = null !== (i = e.effects) && void 0 !== i ? i : e.effects_UNSTABLE;
            if (null != s) {
              let v = rl,
                g = !0,
                y = !1,
                b = null;
              function w(e) {
                if (g && e.key === t) {
                  const e = v;
                  return e instanceof ol
                    ? c(n, r)
                    : ce(e)
                      ? Ji(e.then((e) => (e instanceof ol ? l.toPromise() : e)))
                      : el(e);
                }
                return sl(n, e);
              }
              function S(e) {
                return w(e).toPromise();
              }
              function k(e) {
                var r;
                const o = nl(
                  n,
                  null !== (r = n.getState().nextTree) && void 0 !== r
                    ? r
                    : n.getState().currentTree,
                  e.key
                );
                return !g || e.key !== t || v instanceof ol
                  ? o
                  : { ...o, isSet: !0, loadable: w(e) };
              }
              const _ = (e) => (t) => {
                  if (g) {
                    const n = w(d),
                      r = 'hasValue' === n.state ? n.contents : rl;
                    (v = 'function' === typeof t ? t(r) : t),
                      ce(v) && (v = v.then((t) => ((b = { effect: e, value: t }), t)));
                  } else {
                    if (ce(t)) throw se('Setting atoms to async values is not implemented.');
                    'function' !== typeof t && (b = { effect: e, value: hl(t) }),
                      dl(
                        n,
                        d,
                        'function' === typeof t
                          ? (n) => {
                              const r = hl(t(n));
                              return (b = { effect: e, value: r }), r;
                            }
                          : hl(t)
                      );
                  }
                },
                R = (e) => () => _(e)(rl),
                E = (e) => (r) => {
                  var o;
                  const { release: a } = n.subscribeToTransactions((n) => {
                    var o;
                    let { currentTree: a, previousTree: i } = n.getState();
                    i ||
                      (Ve(
                        'Transaction subscribers notified without a next tree being present -- this is a bug in Recoil'
                      ),
                      (i = a));
                    const u = null !== (o = a.atomValues.get(t)) && void 0 !== o ? o : l;
                    if ('hasValue' === u.state) {
                      var s, c, d, f;
                      const n = u.contents,
                        o = null !== (s = i.atomValues.get(t)) && void 0 !== s ? s : l,
                        p = 'hasValue' === o.state ? o.contents : rl;
                      (null === (c = b) || void 0 === c ? void 0 : c.effect) !== e ||
                      (null === (d = b) || void 0 === d ? void 0 : d.value) !== n
                        ? r(n, p, !a.atomValues.has(t))
                        : (null === (f = b) || void 0 === f ? void 0 : f.effect) === e &&
                          (b = null);
                    }
                  }, t);
                  u.set(n, [...(null !== (o = u.get(n)) && void 0 !== o ? o : []), a]);
                };
              for (const T of s)
                try {
                  const C = T({
                    node: d,
                    storeID: n.storeID,
                    parentStoreID_UNSTABLE: n.parentStoreID,
                    trigger: a,
                    setSelf: _(T),
                    resetSelf: R(T),
                    onSet: E(T),
                    getPromise: S,
                    getLoadable: w,
                    getInfo_UNSTABLE: k,
                  });
                  var f;
                  if (null != C)
                    u.set(n, [...(null !== (f = u.get(n)) && void 0 !== f ? f : []), C]);
                } catch (h) {
                  (v = h), (y = !0);
                }
              if (((g = !1), !(v instanceof ol))) {
                var p;
                const x = y
                  ? Zi(v)
                  : ce(v)
                    ? Ji(
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
                                  : a.contents) === r && dl(e, d, n),
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
                                  : a.contents) === r && fl(e, d, Zi(n)),
                                n)
                              );
                            });
                          return r;
                        })(n, v)
                      )
                    : el(hl(v));
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
            i = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== al(t) && o <= 0;
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
      function vl(e) {
        const { ...t } = e,
          n = 'default' in e ? e.default : new Promise(() => {});
        return ul(n)
          ? (function (e) {
              const t = vl({
                  ...e,
                  default: rl,
                  persistence_UNSTABLE:
                    void 0 === e.persistence_UNSTABLE
                      ? void 0
                      : {
                          ...e.persistence_UNSTABLE,
                          validator: (t) =>
                            t instanceof ol ? t : de(e.persistence_UNSTABLE).validator(t, rl),
                        },
                  effects: e.effects,
                  effects_UNSTABLE: e.effects_UNSTABLE,
                }),
                n = Yi({
                  key: ''.concat(e.key, '__withFallback'),
                  get: (n) => {
                    let { get: r } = n;
                    const o = r(t);
                    return o instanceof ol ? e.default : o;
                  },
                  set: (e, n) => {
                    let { set: r } = e;
                    return r(t, n);
                  },
                  cachePolicy_UNSTABLE: { eviction: 'most-recent' },
                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                });
              return ll(n.key, al(e.key)), n;
            })({ ...t, default: n })
          : ml({ ...t, default: n });
      }
      vl.value = (e) => new tl(e);
      var gl = vl;
      var yl = class {
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
        bl = Object.freeze({ __proto__: null, MapCache: yl });
      const { LRUCache: wl } = hi,
        { MapCache: Sl } = bl,
        kl = { equality: 'reference', eviction: 'none', maxSize: 1 / 0 };
      var _l = function () {
        let {
          equality: e = kl.equality,
          eviction: t = kl.eviction,
          maxSize: n = kl.maxSize,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kl;
        const r = (function (e) {
          switch (e) {
            case 'reference':
              return (e) => e;
            case 'value':
              return (e) => bi(e);
          }
          throw se('Unrecognized equality policy '.concat(e));
        })(e);
        return (function (e, t, n) {
          switch (e) {
            case 'keep-all':
              return new Sl({ mapKey: n });
            case 'lru':
              return new wl({ mapKey: n, maxSize: de(t) });
            case 'most-recent':
              return new wl({ mapKey: n, maxSize: 1 });
          }
          throw se('Unrecognized eviction policy '.concat(e));
        })(t, n, r);
      };
      const { setConfigDeletionHandler: Rl } = dt;
      var El = function (e) {
        var t, n;
        const r = _l({
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
          const { cachePolicyForParams_UNSTABLE: i, ...l } = e,
            u = 'default' in e ? e.default : new Promise(() => {}),
            s = gl({
              ...l,
              key: ''.concat(e.key, '__').concat(null !== (n = bi(t)) && void 0 !== n ? n : 'void'),
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
            Rl(s.key, () => {
              r.delete(t);
            }),
            s
          );
        };
      };
      const { setConfigDeletionHandler: Tl } = dt;
      let Cl = 0;
      var xl = function (e) {
        var t, n;
        const r = _l({
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
                null !== (n = bi(t, { allowFunctions: !0 })) && void 0 !== n ? n : 'void',
                '/'
              )
              .concat(Cl++),
            i = (n) => e.get(t)(n),
            l = e.cachePolicy_UNSTABLE,
            u =
              'function' === typeof e.retainedBy_UNSTABLE
                ? e.retainedBy_UNSTABLE(t)
                : e.retainedBy_UNSTABLE;
          let s;
          if (null != e.set) {
            const n = e.set;
            s = Yi({
              key: a,
              get: i,
              set: (e, r) => n(t)(e, r),
              cachePolicy_UNSTABLE: l,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              retainedBy_UNSTABLE: u,
            });
          } else
            s = Yi({
              key: a,
              get: i,
              cachePolicy_UNSTABLE: l,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              retainedBy_UNSTABLE: u,
            });
          return (
            r.set(t, s),
            Tl(s.key, () => {
              r.delete(t);
            }),
            s
          );
        };
      };
      const Ll = xl({
        key: '__constant',
        get: (e) => () => e,
        cachePolicyForParams_UNSTABLE: { equality: 'reference' },
      });
      var Nl = function (e) {
        return Ll(e);
      };
      const Al = xl({
        key: '__error',
        get: (e) => () => {
          throw se(e);
        },
        cachePolicyForParams_UNSTABLE: { equality: 'reference' },
      });
      var Ml = function (e) {
        return Al(e);
      };
      var Pl = function (e) {
        return e;
      };
      const { loadableWithError: Ul, loadableWithPromise: Ol, loadableWithValue: Dl } = Me;
      function Il(e, t) {
        const n = Array(t.length).fill(void 0),
          r = Array(t.length).fill(void 0);
        for (const [a, i] of t.entries())
          try {
            n[a] = e(i);
          } catch (o) {
            r[a] = o;
          }
        return [n, r];
      }
      function zl(e) {
        return null != e && !ce(e);
      }
      function Bl(e) {
        return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
      }
      function Vl(e, t) {
        return Array.isArray(e)
          ? t
          : Object.getOwnPropertyNames(e).reduce((e, n, r) => ({ ...e, [n]: t[r] }), {});
      }
      function Fl(e, t, n) {
        return Vl(
          e,
          n.map((e, n) => (null == e ? Dl(t[n]) : ce(e) ? Ol(e) : Ul(e)))
        );
      }
      var jl = {
        waitForNone: xl({
          key: '__waitForNone',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = Bl(e),
              [o, a] = Il(n, r);
            return Fl(e, o, a);
          },
          dangerouslyAllowMutability: !0,
        }),
        waitForAny: xl({
          key: '__waitForAny',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = Bl(e),
              [o, a] = Il(n, r);
            return a.some((e) => !ce(e))
              ? Fl(e, o, a)
              : new Promise((t) => {
                  for (const [n, r] of a.entries())
                    ce(r) &&
                      r
                        .then((r) => {
                          (o[n] = r), (a[n] = void 0), t(Fl(e, o, a));
                        })
                        .catch((r) => {
                          (a[n] = r), t(Fl(e, o, a));
                        });
                });
          },
          dangerouslyAllowMutability: !0,
        }),
        waitForAll: xl({
          key: '__waitForAll',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = Bl(e),
              [o, a] = Il(n, r);
            if (a.every((e) => null == e)) return Vl(e, o);
            const i = a.find(zl);
            if (null != i) throw i;
            return Promise.all(a).then((t) => {
              return Vl(e, ((n = o), t.map((e, t) => (void 0 === e ? n[t] : e))));
              var n;
            });
          },
          dangerouslyAllowMutability: !0,
        }),
        waitForAllSettled: xl({
          key: '__waitForAllSettled',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = Bl(e),
              [o, a] = Il(n, r);
            return a.every((e) => !ce(e))
              ? Fl(e, o, a)
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
                ).then(() => Fl(e, o, a));
          },
          dangerouslyAllowMutability: !0,
        }),
        noWait: xl({
          key: '__noWait',
          get: (e) => (t) => {
            let { get: n } = t;
            try {
              return Yi.value(Dl(n(e)));
            } catch (r) {
              return Yi.value(ce(r) ? Ol(r) : Ul(r));
            }
          },
          dangerouslyAllowMutability: !0,
        }),
      };
      const { RecoilLoadable: Wl } = Me,
        { DefaultValue: Hl } = dt,
        { RecoilRoot: $l, useRecoilStoreID: ql } = ro,
        { isRecoilValue: Gl } = et,
        { retentionZone: Kl } = Ot,
        { freshSnapshot: Ql } = wr,
        {
          useRecoilState: Yl,
          useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Xl,
          useRecoilStateLoadable: Zl,
          useRecoilValue: Jl,
          useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: eu,
          useRecoilValueLoadable: tu,
          useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: nu,
          useResetRecoilState: ru,
          useSetRecoilState: ou,
        } = Qo,
        { useGotoRecoilSnapshot: au, useRecoilSnapshot: iu, useRecoilTransactionObserver: lu } = va,
        { useRecoilCallback: uu } = Xa,
        { noWait: su, waitForAll: cu, waitForAllSettled: du, waitForAny: fu, waitForNone: pu } = jl;
      var hu = {
          DefaultValue: Hl,
          isRecoilValue: Gl,
          RecoilLoadable: Wl,
          RecoilEnv: Ue,
          RecoilRoot: $l,
          useRecoilStoreID: ql,
          useRecoilBridgeAcrossReactRoots_UNSTABLE: Ra,
          atom: gl,
          selector: Yi,
          atomFamily: El,
          selectorFamily: xl,
          constSelector: Nl,
          errorSelector: Ml,
          readOnlySelector: Pl,
          noWait: su,
          waitForNone: pu,
          waitForAny: fu,
          waitForAll: cu,
          waitForAllSettled: du,
          useRecoilValue: Jl,
          useRecoilValueLoadable: tu,
          useRecoilState: Yl,
          useRecoilStateLoadable: Zl,
          useSetRecoilState: ou,
          useResetRecoilState: ru,
          useGetRecoilValueInfo_UNSTABLE: ba,
          useRecoilRefresher_UNSTABLE: ti,
          useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: nu,
          useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: eu,
          useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Xl,
          useRecoilCallback: uu,
          useRecoilTransaction_UNSTABLE: ai,
          useGotoRecoilSnapshot: au,
          useRecoilSnapshot: iu,
          useRecoilTransactionObserver_UNSTABLE: lu,
          snapshot_UNSTABLE: Ql,
          useRetain: vo,
          retentionZone: Kl,
        },
        mu = hu.RecoilRoot;
      const vu = 'App_main__5VZ13',
        gu = 'style_footer__v4nM3';
      var yu = n(417);
      const bu = () => (0, yu.jsx)('div', { className: gu, children: (0, yu.jsx)('div', {}) }),
        wu = 'style_header__nSbMe',
        Su = 'style_title__i+6xe',
        ku = () =>
          (0, yu.jsx)('div', {
            className: wu,
            children: (0, yu.jsx)('div', {
              className: Su,
              children: '\u304a\u3082\u3061\u3083\u306e\u3067\u3093\u308f',
            }),
          }),
        _u = () => (0, yu.jsx)('div', { children: (0, yu.jsx)('h1', { children: 'Not Found' }) }),
        Ru = 'style_telephone__GegWU',
        Eu = 'style_input__P4g0x',
        Tu = 'style_key_pad__kvGl-',
        Cu = 'style_button__gyIOf',
        xu = 'style_cross_button__2OCca',
        Lu = t.memo((e) => {
          let { fontSize: t = '24px', width: n = 24, height: r = 24, onClick: o } = e;
          return (0, yu.jsx)('button', {
            className: xu,
            style: { fontSize: t, width: n, height: r },
            onClick: o,
            children: '\u2715',
          });
        }),
        Nu = {
          icon_button: 'style_icon_button__sSp5a',
          icon: 'style_icon__ndPpH',
          green: 'style_green__sHJi6',
          red: 'style_red__y9y6K',
        };
      var Au;
      function Mu() {
        return (
          (Mu = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Mu.apply(this, arguments)
        );
      }
      function Pu(e, n) {
        let { title: r, titleId: o, ...a } = e;
        return t.createElement(
          'svg',
          Mu(
            {
              id: '_x32_',
              xmlns: 'http://www.w3.org/2000/svg',
              xmlnsXlink: 'http://www.w3.org/1999/xlink',
              x: '0px',
              y: '0px',
              width: '512px',
              height: '512px',
              viewBox: '0 0 512 512',
              style: { width: 256, height: 256, opacity: 1 },
              xmlSpace: 'preserve',
              ref: n,
              'aria-labelledby': o,
            },
            a
          ),
          r ? t.createElement('title', { id: o }, r) : null,
          Au ||
            (Au = t.createElement(
              'g',
              null,
              t.createElement('path', {
                className: 'st0',
                d: 'M256,224.828c-34.344,0-62.156,28.078-62.156,62.719s27.813,62.719,62.156,62.719s62.156-28.078,62.156-62.719 S290.344,224.828,256,224.828z',
              }),
              t.createElement('path', {
                className: 'st0',
                d: 'M478.766,135.75h-58.625c-13.078,0-24.938-7.75-30.297-19.781l-17.547-39.313 c-5.359-12.016-17.234-19.766-30.313-19.766H170.016c-13.078,0-24.953,7.75-30.328,19.766l-17.531,39.313 C116.797,128,104.938,135.75,91.859,135.75H33.234C14.875,135.75,0,150.766,0,169.266v252.328c0,18.5,14.875,33.516,33.234,33.516 h244.25h201.281c18.344,0,33.234-15.016,33.234-33.516V169.266C512,150.766,497.109,135.75,478.766,135.75z M256,403.844 c-63.688,0-115.297-52.063-115.297-116.297S192.313,171.234,256,171.234s115.297,52.078,115.297,116.313 S319.688,403.844,256,403.844z',
              })
            ))
        );
      }
      const Uu = t.forwardRef(Pu);
      n.p;
      var Ou;
      function Du() {
        return (
          (Du = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Du.apply(this, arguments)
        );
      }
      function Iu(e, n) {
        let { title: r, titleId: o, ...a } = e;
        return t.createElement(
          'svg',
          Du(
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
          Ou ||
            (Ou = t.createElement(
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
      const zu = t.forwardRef(Iu),
        Bu =
          (n.p,
          t.memo((e) => {
            let { icon: n, backgroundColor: r, diameter: o = 80, onClick: a, disabled: i } = e;
            const l = (0, t.useMemo)(() => {
              switch (n) {
                case 'tel':
                default:
                  return zu;
                case 'camera':
                  return Uu;
              }
            }, [n]);
            return (0, yu.jsx)('button', {
              className: ''.concat(Nu.icon_button, ' ').concat(Nu[r]),
              style: { width: o, height: o },
              onClick: () => {
                a && a();
              },
              disabled: i,
              children: (0, yu.jsx)(l, { className: Nu.icon }),
            });
          })),
        Vu = 'style_number_button__MpVg-',
        Fu = t.memo((e) => {
          let { char: t, soundPlay: n, diameter: r = 80, fontSize: o = 32, onClick: a } = e;
          return (0, yu.jsx)('button', {
            className: Vu,
            style: { width: r, height: r, fontSize: o },
            onClick: () => {
              if (a) {
                a(t) && n();
              }
            },
            children: t,
          });
        });
      function ju() {
        return (
          (ju = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ju.apply(null, arguments)
        );
      }
      var Wu = ['id', 'volume', 'playbackRate', 'soundEnabled', 'interrupt', 'onload'];
      const Hu = function (e, r) {
          var o,
            a = void 0 === r ? {} : r,
            i = a.volume,
            l = void 0 === i ? 1 : i,
            u = a.playbackRate,
            s = void 0 === u ? 1 : u,
            c = a.soundEnabled,
            d = void 0 === c || c,
            f = a.interrupt,
            p = void 0 !== f && f,
            h = a.onload,
            m = (function (e, t) {
              if (null == e) return {};
              var n = {};
              for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                  if (t.indexOf(r) >= 0) continue;
                  n[r] = e[r];
                }
              return n;
            })(a, Wu),
            v = t.useRef(null),
            g = t.useRef(!1),
            y = t.useState(null),
            b = y[0],
            w = y[1],
            S = t.useState(null),
            k = S[0],
            _ = S[1],
            R = function () {
              'function' === typeof h && h.call(this),
                g.current && w(1e3 * this.duration()),
                _(this);
            };
          (o = function () {
            return (
              n
                .e(510)
                .then(n.t.bind(n, 510, 23))
                .then(function (t) {
                  var n;
                  g.current ||
                    ((v.current = null !== (n = t.Howl) && void 0 !== n ? n : t.default.Howl),
                    (g.current = !0),
                    new v.current(
                      ju({ src: Array.isArray(e) ? e : [e], volume: l, rate: s, onload: R }, m)
                    ));
                }),
              function () {
                g.current = !1;
              }
            );
          }),
            (0, t.useEffect)(o, []),
            t.useEffect(
              function () {
                v.current &&
                  k &&
                  _(
                    new v.current(ju({ src: Array.isArray(e) ? e : [e], volume: l, onload: R }, m))
                  );
              },
              [JSON.stringify(e)]
            ),
            t.useEffect(
              function () {
                k && (k.volume(l), k.rate(s));
              },
              [l, s]
            );
          var E = t.useCallback(
              function (e) {
                'undefined' === typeof e && (e = {}),
                  k &&
                    (d || e.forceSoundEnabled) &&
                    (p && k.stop(), e.playbackRate && k.rate(e.playbackRate), k.play(e.id));
              },
              [k, d, p]
            ),
            T = t.useCallback(
              function (e) {
                k && k.stop(e);
              },
              [k]
            ),
            C = t.useCallback(
              function (e) {
                k && k.pause(e);
              },
              [k]
            );
          return [E, { sound: k, stop: T, pause: C, duration: b }];
        },
        $u = n.p + 'static/media/0.80ef7021810a7afc2319.mp3',
        qu = [
          { char: '1', sound: n.p + 'static/media/1.0cca3a767db87583d049.mp3' },
          { char: '2', sound: n.p + 'static/media/2.2c936ac64c1724122460.mp3' },
          { char: '3', sound: n.p + 'static/media/3.85df786f565b70b29c04.mp3' },
          { char: '4', sound: n.p + 'static/media/4.ddcce5b0057fd9aa366a.mp3' },
          { char: '5', sound: n.p + 'static/media/5.b1e1e2bcc7acca815039.mp3' },
          { char: '6', sound: n.p + 'static/media/6.7d94f17e3963948a0c26.mp3' },
          { char: '7', sound: n.p + 'static/media/7.9b22b23fc1d1a2ffd182.mp3' },
          { char: '8', sound: n.p + 'static/media/8.1eecba34990c95f94b7d.mp3' },
          { char: '9', sound: n.p + 'static/media/9.8717f0d4f9bf751a8599.mp3' },
          { char: '\uff0a', sound: n.p + 'static/media/asterisk.9e03442fd26b509bfb46.mp3' },
          { char: '0', sound: $u },
          { char: '\uff03', sound: n.p + 'static/media/sharp.438a410b52695ad9117e.mp3' },
        ],
        Gu = () =>
          qu.map((e) => {
            let { char: t, sound: n } = e;
            const [r, { stop: o, pause: a }] = Hu(n, { interrupt: !0 });
            return { char: t, play: r, stop: o, pause: a };
          }),
        Ku = t.memo((e) => {
          let { onPushButton: t, onCall: n, onBackspace: r, callDisabled: o } = e;
          const a = Gu();
          return (0, yu.jsxs)('div', {
            className: Tu,
            children: [
              a.map((e) => {
                let { char: n, play: r } = e;
                return (0, yu.jsx)(
                  'div',
                  {
                    className: Cu,
                    children: (0, yu.jsx)(Fu, { char: n, soundPlay: r, onClick: t }),
                  },
                  n
                );
              }),
              (0, yu.jsx)('div', { className: Cu }),
              (0, yu.jsx)('div', {
                className: Cu,
                children: (0, yu.jsx)(Bu, {
                  icon: 'tel',
                  backgroundColor: 'green',
                  onClick: n,
                  disabled: o,
                }),
              }),
              (0, yu.jsx)('div', { className: Cu, children: (0, yu.jsx)(Lu, { onClick: r }) }),
            ],
          });
        });
      var Qu = n(790),
        Yu = n.n(Qu);
      const Xu = 'style_call_modal__d4Ng3',
        Zu = 'style_show_number__qvQF1',
        Ju = 'style_show_recording__nP+uq',
        es = 'style_buttons__4kMi7',
        ts = n.p + 'static/media/push.61f99c69cd58fb63ad3a.mp3',
        ns = n.p + 'static/media/ringback_tone.c65a89200e4f921f09e9.mp3',
        rs = n.p + 'static/media/shutdown.b2210b12799269a4b08f.mp3',
        os = 'style_modal__FwQiV',
        as = t.memo((e) => {
          let { isOpen: t, children: n } = e;
          return (0, yu.jsx)('div', {
            className: os,
            style: { display: t ? void 0 : 'none' },
            children: (0, yu.jsx)('div', { children: n }),
          });
        });
      var is = n(495),
        ls = n.n(is);
      const us = async (e) => await new Promise((t) => setTimeout(t, e)),
        ss = t.memo((e) => {
          let { onCancel: n, inputNumber: r } = e;
          const o = Gu(),
            [a] = Hu(ts),
            [i, { stop: l, duration: u }] = Hu(ns),
            [s, { stop: c }] = Hu(rs),
            {
              startRecording: d,
              stopRecording: f,
              playAudio: p,
              stopAudio: h,
            } = (() => {
              const e = (0, t.useRef)(null),
                n = (0, t.useRef)(null),
                [r, o] = (0, t.useState)(!1),
                [a, i] = (0, t.useState)(null),
                l = (0, t.useCallback)(async () => {
                  if (r) return;
                  const t = await navigator.mediaDevices.getUserMedia({ audio: !0 }),
                    n = new (ls())(t, { type: 'audio' });
                  n.startRecording(), (e.current = n), o(!0);
                }, [e, r]),
                u = (0, t.useCallback)(async () => {
                  if (e.current) {
                    const t = await new Promise((t) => {
                      e.current.stopRecording(() => {
                        const n = e.current.getBlob();
                        t(n);
                      });
                    });
                    e.current.destroy(), (e.current = null), (n.current = t), o(!1);
                  }
                }, [e, n]),
                s = (0, t.useCallback)(() => {
                  if (n.current) {
                    const e = new Audio(URL.createObjectURL(n.current));
                    i(e), e.play();
                  }
                }, [n]),
                c = (0, t.useCallback)(() => {
                  a && a.pause();
                }, [a]);
              return (
                (0, t.useEffect)(
                  () => () => {
                    e.current && e.current.destroy();
                  },
                  [e]
                ),
                { startRecording: l, stopRecording: u, playAudio: s, stopAudio: c, isRecording: r }
              );
            })(),
            [m, v] = (0, t.useState)(''),
            [g, y] = (0, t.useState)(0),
            [b, w] = (0, t.useState)(null),
            [S, k] = (0, t.useState)(!1),
            [_, R] = (0, t.useState)(!1),
            E = (0, t.useRef)(!1),
            T = (0, t.useCallback)(
              (e) => {
                v((t) => t + e);
                const t = o.find((t) => t.char === e);
                t && t.play();
              },
              [o]
            );
          return (
            (0, t.useEffect)(() => {
              u &&
                (async () => {
                  for (let t = 0; t < r.length; t++) T(r[t]), await us(300);
                  i(), await us(9960), k(!0), y(0), d();
                  const e = setInterval(() => {
                    y((e) => e + 1);
                  }, 1e3);
                  w(e);
                })();
            }, [u]),
            (0, t.useEffect)(
              () => () => {
                b && clearInterval(b), l(), c();
              },
              []
            ),
            (0, yu.jsx)(as, {
              isOpen: !0,
              children: (0, yu.jsxs)('div', {
                className: Xu,
                children: [
                  (0, yu.jsx)('div', { className: Zu, children: m }),
                  _ &&
                    (0, yu.jsx)('div', {
                      children: (0, yu.jsx)(Yu(), {
                        audio: !1,
                        width: '100%',
                        height: 400,
                        videoConstraints: { facingMode: 'user', width: 1920, height: 1080 },
                      }),
                    }),
                  (0, yu.jsx)('div', {
                    className: Ju,
                    children:
                      S &&
                      (0, yu.jsx)('div', {
                        children: ''
                          .concat(
                            Math.floor(g / 60)
                              .toString()
                              .padStart(2, '0'),
                            ':'
                          )
                          .concat((g % 60).toString().padStart(2, '0')),
                      }),
                  }),
                  (0, yu.jsxs)('div', {
                    className: es,
                    children: [
                      (0, yu.jsx)(Bu, {
                        icon: 'camera',
                        backgroundColor: _ ? 'red' : 'green',
                        onClick: () => R((e) => !e),
                      }),
                      (0, yu.jsx)(Bu, {
                        icon: 'tel',
                        backgroundColor: 'red',
                        onClick: async () => {
                          if (!S || E.current)
                            return l(), h(), c(), (E.current = !1), a(), void n();
                          (E.current = !0),
                            a(),
                            b && clearInterval(b),
                            await f(),
                            E.current &&
                              (p(), await us(1e3 * g), E.current && (s(), await us(3790), n()));
                        },
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }),
        cs = t.memo(() => {
          const [e, n] = (0, t.useState)(''),
            [r, o] = (0, t.useState)(!1),
            a = (0, t.useCallback)(() => {
              n(''), o(!1);
            }, []),
            i = (0, t.useCallback)(async () => {
              o(!0);
            }, []),
            l = (0, t.useCallback)(
              (t) => (e.length >= 11 ? (i(), !1) : (n((e) => e + t), !0)),
              [i, e]
            );
          return (0, yu.jsxs)('div', {
            className: Ru,
            children: [
              (0, yu.jsx)('div', { className: Eu, children: e }),
              (0, yu.jsx)(Ku, {
                onPushButton: l,
                onCall: i,
                onBackspace: () => n((e) => e.slice(0, -1)),
                callDisabled: 0 === e.length,
              }),
              r && (0, yu.jsx)(ss, { onCancel: a, inputNumber: e }),
            ],
          });
        }),
        ds = () => (0, yu.jsx)('div', { children: (0, yu.jsx)(cs, {}) });
      const fs = function () {
          return (0, yu.jsxs)('div', {
            className: vu,
            children: [
              (0, yu.jsx)(ku, {}),
              (0, yu.jsxs)(ne, {
                children: [
                  (0, yu.jsx)(ee, { path: '/', element: (0, yu.jsx)(ds, {}) }),
                  (0, yu.jsx)(ee, { path: '*', element: (0, yu.jsx)(_u, {}) }),
                ],
              }),
              (0, yu.jsx)(bu, {}),
            ],
          });
        },
        ps = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(27)
              .then(n.bind(n, 27))
              .then((t) => {
                let { getCLS: n, getFID: r, getFCP: o, getLCP: a, getTTFB: i } = t;
                n(e), r(e), o(e), a(e), i(e);
              });
        };
      ue
        .createRoot(document.getElementById('root'))
        .render(
          (0, yu.jsx)(mu, {
            children: (0, yu.jsx)(ae, {
              basename: '/baby-toyphone',
              children: (0, yu.jsx)(fs, {}),
            }),
          })
        ),
        ps();
    })();
})();
