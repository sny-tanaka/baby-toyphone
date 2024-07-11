/*! For license information please see main.2d50001d.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      534: (e, t, n) => {
        var r = n(313),
          a = n(224);
        function o(e) {
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
        function m(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
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
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
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
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) && (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? '' : '' + n),
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
          _ = Symbol.for('react.element'),
          w = Symbol.for('react.portal'),
          k = Symbol.for('react.fragment'),
          E = Symbol.for('react.strict_mode'),
          T = Symbol.for('react.profiler'),
          x = Symbol.for('react.provider'),
          R = Symbol.for('react.context'),
          C = Symbol.for('react.forward_ref'),
          N = Symbol.for('react.suspense'),
          A = Symbol.for('react.suspense_list'),
          L = Symbol.for('react.memo'),
          P = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var V = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var D = Symbol.iterator;
        function O(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (D && e[D]) || e['@@iterator'])
              ? e
              : null;
        }
        var M,
          U = Object.assign;
        function z(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || '';
            }
          return '\n' + M + e;
        }
        var F = !1;
        function I(e, t) {
          if (!e || F) return '';
          F = !0;
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
                var a = s.stack.split('\n'),
                  o = r.stack.split('\n'),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var u = '\n' + a[l].replace(' at new ', ' at ');
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
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? z(e) : '';
        }
        function B(e) {
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
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
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
            case w:
              return 'Portal';
            case T:
              return 'Profiler';
            case E:
              return 'StrictMode';
            case N:
              return 'Suspense';
            case A:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case R:
                return (e.displayName || 'Context') + '.Consumer';
              case x:
                return (e._context.displayName || 'Context') + '.Provider';
              case C:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case L:
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
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), o.call(this, e);
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
        function q(e) {
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
        function Q(e) {
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
          return U({}, t, {
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
          ('number' === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return U({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
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
                a = me(n, t[n], r);
              'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
          });
        });
        var ye = U(
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
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && 'object' !== typeof t.style) throw Error(o(62));
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
        function _e(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          ke = null,
          Ee = null;
        function Te(e) {
          if ((e = ba(e))) {
            if ('function' !== typeof we) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = _a(t)), we(e.stateNode, e.type, t));
          }
        }
        function xe(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function Re() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), Te(e), t)) for (e = 0; e < t.length; e++) Te(t[e]);
          }
        }
        function Ce(e, t) {
          return e(t);
        }
        function Ne() {}
        var Ae = !1;
        function Le(e, t, n) {
          if (Ae) return e(t, n);
          Ae = !0;
          try {
            return Ce(e, t, n);
          } finally {
            (Ae = !1), (null !== ke || null !== Ee) && (Ne(), Re());
          }
        }
        function Pe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = _a(n);
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
          if (n && 'function' !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Ve = !1;
        if (c)
          try {
            var De = {};
            Object.defineProperty(De, 'passive', {
              get: function () {
                Ve = !0;
              },
            }),
              window.addEventListener('test', De, De),
              window.removeEventListener('test', De, De);
          } catch (ce) {
            Ve = !1;
          }
        function Oe(e, t, n, r, a, o, l, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          Ue = null,
          ze = !1,
          Fe = null,
          Ie = {
            onError: function (e) {
              (Me = !0), (Ue = e);
            },
          };
        function Be(e, t, n, r, a, o, l, i, u) {
          (Me = !1), (Ue = null), Oe.apply(Ie, arguments);
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
          if (je(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = je(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return He(a), e;
                    if (l === r) return He(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
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
        var qe = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Ze = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
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
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = dt(i)) : 0 !== (o &= l) && (r = dt(o));
          } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
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
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function St(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var _t,
          wt,
          kt,
          Et,
          Tt,
          xt = !1,
          Rt = [],
          Ct = null,
          Nt = null,
          At = null,
          Lt = new Map(),
          Pt = new Map(),
          Vt = [],
          Dt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function Ot(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Ct = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Nt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              At = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Lt.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Pt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ut(e) {
          var t = ga(e.target);
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
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = ba(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Se = r), n.target.dispatchEvent(r), (Se = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          zt(e) && n.delete(t);
        }
        function It() {
          (xt = !1),
            null !== Ct && zt(Ct) && (Ct = null),
            null !== Nt && zt(Nt) && (Nt = null),
            null !== At && zt(At) && (At = null),
            Lt.forEach(Ft),
            Pt.forEach(Ft);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            xt || ((xt = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, It)));
        }
        function jt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Rt.length) {
            Bt(Rt[0], e);
            for (var n = 1; n < Rt.length; n++) {
              var r = Rt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ct && Bt(Ct, e),
              null !== Nt && Bt(Nt, e),
              null !== At && Bt(At, e),
              Lt.forEach(t),
              Pt.forEach(t),
              n = 0;
            n < Vt.length;
            n++
          )
            (r = Vt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Vt.length && null === (n = Vt[0]).blockedOn; )
            Ut(n), null === n.blockedOn && Vt.shift();
        }
        var Wt = S.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var a = Gt(e, t, n, r);
            if (null === a) Hr(e, t, r, Qt, n), Ot(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case 'focusin':
                    return (Ct = Mt(Ct, e, t, n, r, a)), !0;
                  case 'dragenter':
                    return (Nt = Mt(Nt, e, t, n, r, a)), !0;
                  case 'mouseover':
                    return (At = Mt(At, e, t, n, r, a)), !0;
                  case 'pointerover':
                    var o = a.pointerId;
                    return Lt.set(o, Mt(Lt.get(o) || null, e, t, n, r, a)), !0;
                  case 'gotpointercapture':
                    return (o = a.pointerId), Pt.set(o, Mt(Pt.get(o) || null, e, t, n, r, a)), !0;
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ot(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && _t(o),
                  null === (o = Gt(e, t, n, r)) && Hr(e, t, r, Qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Gt(e, t, n, r) {
          if (((Qt = null), null !== (e = ga((e = _e(r))))))
            if (null === (t = je(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
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
            a = 'value' in Zt ? Zt.value : Zt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
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
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            U(t.prototype, {
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
        var on,
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
          cn = an(sn),
          dn = U({}, sn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = U({}, dn, {
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
                      ? ((on = e.screenX - un.screenX), (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(U({}, pn, { dataTransfer: 0 })),
          vn = an(U({}, dn, { relatedTarget: 0 })),
          yn = an(U({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          gn = U({}, sn, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          }),
          bn = an(gn),
          Sn = an(U({}, sn, { data: 0 })),
          _n = {
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
          wn = {
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
        var xn = U({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = _n[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tn(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                  ? wn[e.keyCode] || 'Unidentified'
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
          Rn = an(xn),
          Cn = an(
            U({}, pn, {
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
          Nn = an(
            U({}, dn, {
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
          An = an(U({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          Ln = U({}, pn, {
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
          Pn = an(Ln),
          Vn = [9, 13, 27, 32],
          Dn = c && 'CompositionEvent' in window,
          On = null;
        c && 'documentMode' in document && (On = document.documentMode);
        var Mn = c && 'TextEvent' in window && !On,
          Un = c && (!Dn || (On && 8 < On && 11 >= On)),
          zn = String.fromCharCode(32),
          Fn = !1;
        function In(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Vn.indexOf(t.keyCode);
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
          xe(r),
            0 < (t = Kr(t, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          qn = null;
        function Qn(e) {
          zr(e, 0);
        }
        function Gn(e) {
          if (q(Sa(e))) return e;
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
          Kn && (Kn.detachEvent('onpropertychange', nr), (qn = Kn = null));
        }
        function nr(e) {
          if ('value' === e.propertyName && Gn(qn)) {
            var t = [];
            $n(t, qn, e, _e(e)), Le(Qn, t);
          }
        }
        function rr(e, t, n) {
          'focusin' === e
            ? (tr(), (qn = n), (Kn = t).attachEvent('onpropertychange', nr))
            : 'focusout' === e && tr();
        }
        function ar(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Gn(qn);
        }
        function or(e, t) {
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
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
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
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
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
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var l = cr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
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
            vr !== Q(r) ||
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
        function _r(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var wr = {
            animationend: _r('Animation', 'AnimationEnd'),
            animationiteration: _r('Animation', 'AnimationIteration'),
            animationstart: _r('Animation', 'AnimationStart'),
            transitionend: _r('Transition', 'TransitionEnd'),
          },
          kr = {},
          Er = {};
        function Tr(e) {
          if (kr[e]) return kr[e];
          if (!wr[e]) return e;
          var t,
            n = wr[e];
          for (t in n) if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete wr.animationend.animation,
            delete wr.animationiteration.animation,
            delete wr.animationstart.animation),
          'TransitionEvent' in window || delete wr.transitionend.transition);
        var xr = Tr('animationend'),
          Rr = Tr('animationiteration'),
          Cr = Tr('animationstart'),
          Nr = Tr('transitionend'),
          Ar = new Map(),
          Lr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Pr(e, t) {
          Ar.set(e, t), u(t, [e]);
        }
        for (var Vr = 0; Vr < Lr.length; Vr++) {
          var Dr = Lr[Vr];
          Pr(Dr.toLowerCase(), 'on' + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Pr(xr, 'onAnimationEnd'),
          Pr(Rr, 'onAnimationIteration'),
          Pr(Cr, 'onAnimationStart'),
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
        var Or =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Mr = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Or));
        function Ur(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, u, s) {
              if ((Be.apply(this, arguments), Me)) {
                if (!Me) throw Error(o(198));
                var c = Ue;
                (Me = !1), (Ue = null), ze || ((ze = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped())) break e;
                  Ur(a, i, s), (o = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Ur(a, i, s), (o = u);
                }
            }
          }
          if (ze) throw ((e = Fe), (ze = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ir(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Br = '_reactListening' + Math.random().toString(36).slice(2);
        function jr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              l.forEach(function (t) {
                'selectionchange' !== t && (Mr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ir('selectionchange', !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ve || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = ga(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = o,
              a = _e(n),
              l = [];
            e: {
              var i = Ar.get(e);
              if (void 0 !== i) {
                var u = cn,
                  s = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tn(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    u = Rn;
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
                  case xr:
                  case Rr:
                  case Cr:
                    u = yn;
                    break;
                  case Nr:
                    u = An;
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
                    u = Cn;
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
                0 < c.length && ((i = new u(i, s, null, n, a)), l.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = 'mouseout' === e || 'pointerout' === e),
                (!(i = 'mouseover' === e || 'pointerover' === e) ||
                  n === Se ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ga(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                        ? i.defaultView || i.parentWindow
                        : window),
                  u
                    ? ((u = r),
                      null !== (s = (s = n.relatedTarget || n.toElement) ? ga(s) : null) &&
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
                    ((c = Cn), (m = 'onPointerLeave'), (f = 'onPointerEnter'), (h = 'pointer')),
                  (d = null == u ? i : Sa(u)),
                  (p = null == s ? i : Sa(s)),
                  ((i = new c(m, h + 'leave', u, n, a)).target = d),
                  (i.relatedTarget = p),
                  (m = null),
                  ga(a) === r &&
                    (((c = new c(f, h + 'enter', s, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  u && s)
                )
                  e: {
                    for (f = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, m = f; m; m = qr(m)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (f = qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Qr(l, i, u, c, !1), null !== s && null !== d && Qr(l, d, s, c, !0);
              }
              if (
                'select' === (u = (i = r ? Sa(r) : window).nodeName && i.nodeName.toLowerCase()) ||
                ('input' === u && 'file' === i.type)
              )
                var v = Yn;
              else if (Hn(i))
                if (Zn) v = lr;
                else {
                  v = ar;
                  var y = rr;
                }
              else
                (u = i.nodeName) &&
                  'input' === u.toLowerCase() &&
                  ('checkbox' === i.type || 'radio' === i.type) &&
                  (v = or);
              switch (
                (v && (v = v(e, r))
                  ? $n(l, v, n, a)
                  : (y && y(e, i, r),
                    'focusout' === e &&
                      (y = i._wrapperState) &&
                      y.controlled &&
                      'number' === i.type &&
                      ee(i, 'number', i.value)),
                (y = r ? Sa(r) : window),
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
                  (br = !1), Sr(l, n, a);
                  break;
                case 'selectionchange':
                  if (mr) break;
                case 'keydown':
                case 'keyup':
                  Sr(l, n, a);
              }
              var g;
              if (Dn)
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
                  ? In(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
              b &&
                (Un &&
                  'ko' !== n.locale &&
                  (jn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && jn && (g = en())
                    : ((Xt = 'value' in (Zt = a) ? Zt.value : Zt.textContent), (jn = !0))),
                0 < (y = Kr(r, b)).length &&
                  ((b = new Sn(b, e, null, n, a)),
                  l.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Bn(n)) && (b.data = g))),
                (g = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Bn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Fn = !0), zn);
                        case 'textInput':
                          return (e = t.data) === zn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (jn)
                        return 'compositionend' === e || (!Dn && In(e, t))
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
                          return Un && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, 'onBeforeInput')).length &&
                  ((a = new Sn('onBeforeInput', 'beforeinput', null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            zr(l, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Pe(e, n)) && r.unshift($r(e, o, a)),
              null != (o = Pe(e, t)) && r.push($r(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Pe(n, o)) && l.unshift($r(n, u, i))
                : a || (null != (u = Pe(n, o)) && l.push($r(n, u, i)))),
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
          if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(o(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
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
        var ra = 'function' === typeof setTimeout ? setTimeout : void 0,
          aa = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          oa = 'function' === typeof Promise ? Promise : void 0,
          la =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof oa
                ? function (e) {
                    return oa.resolve(null).then(e).catch(ia);
                  }
                : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ('/$' === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void jt(t);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = a;
          } while (n);
          jt(t);
        }
        function sa(e) {
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
        function ca(e) {
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
        var da = Math.random().toString(36).slice(2),
          fa = '__reactFiber$' + da,
          pa = '__reactProps$' + da,
          ha = '__reactContainer$' + da,
          ma = '__reactEvents$' + da,
          va = '__reactListeners$' + da,
          ya = '__reactHandles$' + da;
        function ga(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function Sa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function _a(e) {
          return e[pa] || null;
        }
        var wa = [],
          ka = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ta(e) {
          0 > ka || ((e.current = wa[ka]), (wa[ka] = null), ka--);
        }
        function xa(e, t) {
          ka++, (wa[ka] = e.current), (e.current = t);
        }
        var Ra = {},
          Ca = Ea(Ra),
          Na = Ea(!1),
          Aa = Ra;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ra;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Pa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Va() {
          Ta(Na), Ta(Ca);
        }
        function Da(e, t, n) {
          if (Ca.current !== Ra) throw Error(o(168));
          xa(Ca, t), xa(Na, n);
        }
        function Oa(e, t, n) {
          var r = e.stateNode;
          if (((t = t.childContextTypes), 'function' !== typeof r.getChildContext)) return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || 'Unknown', a));
          return U({}, n, r);
        }
        function Ma(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ra),
            (Aa = Ca.current),
            xa(Ca, e),
            xa(Na, Na.current),
            !0
          );
        }
        function Ua(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Oa(e, t, Aa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ta(Na),
              Ta(Ca),
              xa(Ca, e))
            : Ta(Na),
            xa(Na, n);
        }
        var za = null,
          Fa = !1,
          Ia = !1;
        function Ba(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function ja() {
          if (!Ia && null !== za) {
            Ia = !0;
            var e = 0,
              t = bt;
            try {
              var n = za;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (za = null), (Fa = !1);
            } catch (a) {
              throw (null !== za && (za = za.slice(e + 1)), qe(Je, ja), a);
            } finally {
              (bt = t), (Ia = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          $a = null,
          Ka = 0,
          qa = [],
          Qa = 0,
          Ga = null,
          Ya = 1,
          Za = '';
        function Xa(e, t) {
          (Wa[Ha++] = Ka), (Wa[Ha++] = $a), ($a = e), (Ka = t);
        }
        function Ja(e, t, n) {
          (qa[Qa++] = Ya), (qa[Qa++] = Za), (qa[Qa++] = Ga), (Ga = e);
          var r = Ya;
          e = Za;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ya = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Za = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Za = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Ja(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; ) ($a = Wa[--Ha]), (Wa[Ha] = null), (Ka = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Ga; )
            (Ga = qa[--Qa]),
              (qa[Qa] = null),
              (Za = qa[--Qa]),
              (qa[Qa] = null),
              (Ya = qa[--Qa]),
              (qa[Qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var n = Ps(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ya, overflow: Za } : null),
                (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                ((n = Ps(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!io(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = no;
                t && io(e, t) ? lo(r, n) : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t = 'head' !== (t = e.type) && 'body' !== t && !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = sa(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var vo = S.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = U({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = Ea(null),
          bo = null,
          So = null,
          _o = null;
        function wo() {
          _o = So = bo = null;
        }
        function ko(e) {
          var t = go.current;
          Ta(go), (e._currentValue = t);
        }
        function Eo(e, t, n) {
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
        function To(e, t) {
          (bo = e),
            (_o = So = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Si = !0), (e.firstContext = null));
        }
        function xo(e) {
          var t = e._currentValue;
          if (_o !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === So)) {
              if (null === bo) throw Error(o(308));
              (So = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else So = So.next = e;
          return t;
        }
        var Ro = null;
        function Co(e) {
          null === Ro ? (Ro = [e]) : Ro.push(e);
        }
        function No(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a ? ((n.next = n), Co(t)) : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ao(e, r)
          );
        }
        function Ao(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Lo = !1;
        function Po(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Vo(e, t) {
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
        function Do(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function Oo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Nu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ao(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Co(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ao(e, n)
          );
        }
        function Mo(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & n))) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Uo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
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
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function zo(e, t, n, r) {
          var a = e.updateQueue;
          Lo = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === l ? (o = s) : (l.next = s), (l = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s), (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, c = s = u = null, i = o; ; ) {
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
                      d = U({}, d, f);
                      break e;
                    case 2:
                      Lo = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64), null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
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
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = d),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Uu |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function Fo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), 'function' !== typeof a)) throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Io = new r.Component().refs;
        function Bo(e, t, n, r) {
          (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : U({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var jo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && je(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Do(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Oo(e, o, a)) && (rs(t, e, a, r), Mo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Do(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Oo(e, o, a)) && (rs(t, e, a, r), Mo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = Do(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Oo(e, a, r)) && (rs(t, e, r, n), Mo(t, e, r));
          },
        };
        function Wo(e, t, n, r, a, o, l) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype || !t.prototype.isPureReactComponent || !ur(n, r) || !ur(a, o);
        }
        function Ho(e, t, n) {
          var r = !1,
            a = Ra,
            o = t.contextType;
          return (
            'object' === typeof o && null !== o
              ? (o = xo(o))
              : ((a = Pa(t) ? Aa : Ca.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? La(e, a) : Ra)),
            (t = new t(n, o)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = jo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function $o(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && jo.enqueueReplaceState(t, t.state, null);
        }
        function Ko(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Io), Po(e);
          var o = t.contextType;
          'object' === typeof o && null !== o
            ? (a.context = xo(o))
            : ((o = Pa(t) ? Aa : Ca.current), (a.context = La(e, o))),
            (a.state = e.memoizedState),
            'function' === typeof (o = t.getDerivedStateFromProps) &&
              (Bo(e, t, o, n), (a.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof a.getSnapshotBeforeUpdate ||
              ('function' !== typeof a.UNSAFE_componentWillMount &&
                'function' !== typeof a.componentWillMount) ||
              ((t = a.state),
              'function' === typeof a.componentWillMount && a.componentWillMount(),
              'function' === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
              t !== a.state && jo.enqueueReplaceState(a, a.state, null),
              zo(e, n, a, r),
              (a.state = e.memoizedState)),
            'function' === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function qo(e, t, n) {
          if (null !== (e = n.ref) && 'function' !== typeof e && 'object' !== typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Io && (t = a.refs = {}), null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ('string' !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
              )
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
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
          function a(e, t) {
            return ((e = Ds(e, t)).index = 0), (e.sibling = null), e;
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
              ? (((t = zs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ('object' === typeof o && null !== o && o.$$typeof === P && Go(o) === t.type))
                ? (((r = a(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
                : (((r = Os(n.type, n.key, n.props, null, e.mode, r)).ref = qo(e, t, n)),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Ms(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = zs('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case _:
                  return (
                    ((n = Os(t.type, t.key, t.props, null, e.mode, n)).ref = qo(e, null, t)),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = Fs(t, e.mode, n)).return = e), t;
                case P:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || O(t)) return ((t = Ms(t, e.mode, n, null)).return = e), t;
              Qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== a ? null : u(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case _:
                  return n.key === a ? s(e, t, n, r) : null;
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case P:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || O(n)) return null !== a ? null : d(e, t, n, r, null);
              Qo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return u(t, (e = e.get(n) || null), '' + r, a);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case _:
                  return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case w:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case P:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || O(r)) return d(t, (e = e.get(n) || null), r, a, null);
              Qo(t, r);
            }
            return null;
          }
          function m(a, o, i, u) {
            for (
              var s = null, c = null, d = o, m = (o = 0), v = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var y = p(a, d, i[m], u);
              if (null === y) {
                null === d && (d = v);
                break;
              }
              e && d && null === y.alternate && t(a, d),
                (o = l(y, o, m)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (d = v);
            }
            if (m === i.length) return n(a, d), ao && Xa(a, m), s;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], u)) &&
                  ((o = l(d, o, m)), null === c ? (s = d) : (c.sibling = d), (c = d));
              return ao && Xa(a, m), s;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (v = h(d, a, m, i[m], u)) &&
                (e && null !== v.alternate && d.delete(null === v.key ? m : v.key),
                (o = l(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, m),
              s
            );
          }
          function v(a, i, u, s) {
            var c = O(u);
            if ('function' !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var d = (c = null), m = i, v = (i = 0), y = null, g = u.next();
              null !== m && !g.done;
              v++, g = u.next()
            ) {
              m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(a, m, g.value, s);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = l(b, i, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (g.done) return n(a, m), ao && Xa(a, v), c;
            if (null === m) {
              for (; !g.done; v++, g = u.next())
                null !== (g = f(a, g.value, s)) &&
                  ((i = l(g, i, v)), null === d ? (c = g) : (d.sibling = g), (d = g));
              return ao && Xa(a, v), c;
            }
            for (m = r(a, m); !g.done; v++, g = u.next())
              null !== (g = h(m, a, v, g.value, s)) &&
                (e && null !== g.alternate && m.delete(null === g.key ? v : g.key),
                (i = l(g, i, v)),
                null === d ? (c = g) : (d.sibling = g),
                (d = g));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, v),
              c
            );
          }
          return function e(r, o, l, u) {
            if (
              ('object' === typeof l &&
                null !== l &&
                l.type === k &&
                null === l.key &&
                (l = l.props.children),
              'object' === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case _:
                  e: {
                    for (var s = l.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = l.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling), ((o = a(c, l.props.children)).return = r), (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ('object' === typeof s &&
                            null !== s &&
                            s.$$typeof === P &&
                            Go(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, l.props)).ref = qo(r, c, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === k
                      ? (((o = Ms(l.props.children, r.mode, u, l.key)).return = r), (r = o))
                      : (((u = Os(l.type, l.key, l.props, null, r.mode, u)).ref = qo(r, o, l)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case w:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling), ((o = a(o, l.children || [])).return = r), (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Fs(l, r.mode, u)).return = r), (r = o);
                  }
                  return i(r);
                case P:
                  return e(r, o, (c = l._init)(l._payload), u);
              }
              if (te(l)) return m(r, o, l, u);
              if (O(l)) return v(r, o, l, u);
              Qo(r, l);
            }
            return ('string' === typeof l && '' !== l) || 'number' === typeof l
              ? ((l = '' + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = zs(l, r.mode, u)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var Zo = Yo(!0),
          Xo = Yo(!1),
          Jo = {},
          el = Ea(Jo),
          tl = Ea(Jo),
          nl = Ea(Jo);
        function rl(e) {
          if (e === Jo) throw Error(o(174));
          return e;
        }
        function al(e, t) {
          switch ((xa(nl, t), xa(tl, e), xa(el, Jo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, '');
              break;
            default:
              t = ue((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          Ta(el), xa(el, t);
        }
        function ol() {
          Ta(el), Ta(tl), Ta(nl);
        }
        function ll(e) {
          rl(nl.current);
          var t = rl(el.current),
            n = ue(t, e.type);
          t !== n && (xa(tl, e), xa(el, n));
        }
        function il(e) {
          tl.current === e && (Ta(el), Ta(tl));
        }
        var ul = Ea(0);
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
          _l = 0;
        function wl() {
          throw Error(o(321));
        }
        function kl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function El(e, t, n, r, a, l) {
          if (
            ((hl = l),
            (ml = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fl.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bl)
          ) {
            l = 0;
            do {
              if (((bl = !1), (Sl = 0), 25 <= l)) throw Error(o(301));
              (l += 1), (yl = vl = null), (t.updateQueue = null), (fl.current = si), (e = n(r, a));
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
            throw Error(o(300));
          return e;
        }
        function Tl() {
          var e = 0 !== Sl;
          return (Sl = 0), e;
        }
        function xl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === yl ? (ml.memoizedState = yl = e) : (yl = yl.next = e), yl;
        }
        function Rl() {
          if (null === vl) {
            var e = ml.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vl.next;
          var t = null === yl ? ml.memoizedState : yl.next;
          if (null !== t) (yl = t), (vl = e);
          else {
            if (null === e) throw Error(o(310));
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
        function Cl(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function Nl(e) {
          var t = Rl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = vl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
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
                null === s ? ((u = s = f), (i = r)) : (s = s.next = f), (ml.lanes |= d), (Uu |= d);
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
            a = e;
            do {
              (l = a.lane), (ml.lanes |= l), (Uu |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Al(e) {
          var t = Rl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (Si = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Ll() {}
        function Pl(e, t) {
          var n = ml,
            r = Rl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (Si = !0)),
            (r = r.queue),
            Hl(Ol.bind(null, n, r, e), [e]),
            r.getSnapshot !== t || l || (null !== yl && 1 & yl.memoizedState.tag))
          ) {
            if (((n.flags |= 2048), Fl(9, Dl.bind(null, n, r, a, t), void 0, null), null === Au))
              throw Error(o(349));
            0 !== (30 & hl) || Vl(n, t, a);
          }
          return a;
        }
        function Vl(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ml.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (ml.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Dl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ml(t) && Ul(e);
        }
        function Ol(e, t, n) {
          return n(function () {
            Ml(t) && Ul(e);
          });
        }
        function Ml(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ul(e) {
          var t = Ao(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function zl(e) {
          var t = xl();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Cl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, ml, e)),
            [t.memoizedState, e]
          );
        }
        function Fl(e, t, n, r) {
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
        function Il() {
          return Rl().memoizedState;
        }
        function Bl(e, t, n, r) {
          var a = xl();
          (ml.flags |= e), (a.memoizedState = Fl(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function jl(e, t, n, r) {
          var a = Rl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== vl) {
            var l = vl.memoizedState;
            if (((o = l.destroy), null !== r && kl(r, l.deps)))
              return void (a.memoizedState = Fl(t, n, o, r));
          }
          (ml.flags |= e), (a.memoizedState = Fl(1 | t, n, o, r));
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
        function ql(e, t) {
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
        function Ql(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            jl(4, 4, ql.bind(null, t, e), n)
          );
        }
        function Gl() {}
        function Yl(e, t) {
          var n = Rl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && kl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Zl(e, t) {
          var n = Rl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && kl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xl(e, t, n) {
          return 0 === (21 & hl)
            ? (e.baseState && ((e.baseState = !1), (Si = !0)), (e.memoizedState = n))
            : (ir(n, t) || ((n = mt()), (ml.lanes |= n), (Uu |= n), (e.baseState = !0)), t);
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
          return Rl().memoizedState;
        }
        function ti(e, t, n) {
          var r = ns(e);
          if (
            ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), ri(e))
          )
            ai(t, n);
          else if (null !== (n = No(e, t, n, r))) {
            rs(n, e, r, ts()), oi(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = ns(e),
            a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (ri(e)) ai(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l))) {
                  var u = t.interleaved;
                  return (
                    null === u ? ((a.next = a), Co(t)) : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = No(e, t, a, r)) && (rs(n, e, r, (a = ts())), oi(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === ml || (null !== t && t === ml);
        }
        function ai(e, t) {
          bl = gl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
        function oi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var li = {
            readContext: xo,
            useCallback: wl,
            useContext: wl,
            useEffect: wl,
            useImperativeHandle: wl,
            useInsertionEffect: wl,
            useLayoutEffect: wl,
            useMemo: wl,
            useReducer: wl,
            useRef: wl,
            useState: wl,
            useDebugValue: wl,
            useDeferredValue: wl,
            useTransition: wl,
            useMutableSource: wl,
            useSyncExternalStore: wl,
            useId: wl,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: xo,
            useCallback: function (e, t) {
              return (xl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: xo,
            useEffect: Wl,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bl(4194308, 4, ql.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = xl();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, n) {
              var r = xl();
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
              return (e = { current: e }), (xl().memoizedState = e);
            },
            useState: zl,
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return (xl().memoizedState = e);
            },
            useTransition: function () {
              var e = zl(!1),
                t = e[0];
              return (e = Jl.bind(null, e[1])), (xl().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ml,
                a = xl();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Au)) throw Error(o(349));
                0 !== (30 & hl) || Vl(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Wl(Ol.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Fl(9, Dl.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = xl(),
                t = Au.identifierPrefix;
              if (ao) {
                var n = Za;
                (t = ':' + t + 'R' + (n = (Ya & ~(1 << (32 - lt(Ya) - 1))).toString(32) + n)),
                  0 < (n = Sl++) && (t += 'H' + n.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (n = _l++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: xo,
            useCallback: Yl,
            useContext: xo,
            useEffect: Hl,
            useImperativeHandle: Ql,
            useInsertionEffect: $l,
            useLayoutEffect: Kl,
            useMemo: Zl,
            useReducer: Nl,
            useRef: Il,
            useState: function () {
              return Nl(Cl);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return Xl(Rl(), vl.memoizedState, e);
            },
            useTransition: function () {
              return [Nl(Cl)[0], Rl().memoizedState];
            },
            useMutableSource: Ll,
            useSyncExternalStore: Pl,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: xo,
            useCallback: Yl,
            useContext: xo,
            useEffect: Hl,
            useImperativeHandle: Ql,
            useInsertionEffect: $l,
            useLayoutEffect: Kl,
            useMemo: Zl,
            useReducer: Al,
            useRef: Il,
            useState: function () {
              return Al(Cl);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              var t = Rl();
              return null === vl ? (t.memoizedState = e) : Xl(t, vl.memoizedState, e);
            },
            useTransition: function () {
              return [Al(Cl)[0], Rl().memoizedState];
            },
            useMutableSource: Ll,
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
            var a = n;
          } catch (o) {
            a = '\nError generating stack: ' + o.message + '\n' + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
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
          ((n = Do(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $u || (($u = !0), (Ku = r)), fi(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = Do(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fi(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              'function' === typeof o.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  'function' !== typeof r && (null === qu ? (qu = new Set([this])) : qu.add(this));
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
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = xs.bind(null, e, t, n)), t.then(e, e));
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
        function gi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Do(-1, 1)).tag = 2), Oo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = S.ReactCurrentOwner,
          Si = !1;
        function _i(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Zo(t, e.child, n, r);
        }
        function wi(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            To(t, a),
            (r = El(e, t, n, r, o, a)),
            (n = Tl()),
            null === e || Si
              ? (ao && n && eo(t), (t.flags |= 1), _i(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), $i(e, t, a))
          );
        }
        function ki(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return 'function' !== typeof o ||
              Vs(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Os(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ei(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(l, r) && e.ref === t.ref)
              return $i(e, t, a);
          }
          return (t.flags |= 1), ((e = Ds(o, r)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function Ei(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((Si = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $i(e, t, a);
              0 !== (131072 & e.flags) && (Si = !0);
            }
          }
          return Ri(e, t, n, r, a);
        }
        function Ti(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                xa(Du, Vu),
                (Vu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  xa(Du, Vu),
                  (Vu |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = null !== o ? o.baseLanes : n),
                xa(Du, Vu),
                (Vu |= r);
            }
          else
            null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
              xa(Du, Vu),
              (Vu |= r);
          return _i(e, t, a, n), t.child;
        }
        function xi(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ri(e, t, n, r, a) {
          var o = Pa(n) ? Aa : Ca.current;
          return (
            (o = La(t, o)),
            To(t, a),
            (n = El(e, t, n, r, o, a)),
            (r = Tl()),
            null === e || Si
              ? (ao && r && eo(t), (t.flags |= 1), _i(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a), $i(e, t, a))
          );
        }
        function Ci(e, t, n, r, a) {
          if (Pa(n)) {
            var o = !0;
            Ma(t);
          } else o = !1;
          if ((To(t, a), null === t.stateNode)) Hi(e, t), Ho(t, n, r), Ko(t, n, r, a), (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              s = n.contextType;
            'object' === typeof s && null !== s
              ? (s = xo(s))
              : (s = La(t, (s = Pa(n) ? Aa : Ca.current)));
            var c = n.getDerivedStateFromProps,
              d = 'function' === typeof c || 'function' === typeof l.getSnapshotBeforeUpdate;
            d ||
              ('function' !== typeof l.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== s) && $o(t, l, r, s)),
              (Lo = !1);
            var f = t.memoizedState;
            (l.state = f),
              zo(t, r, l, a),
              (u = t.memoizedState),
              i !== r || f !== u || Na.current || Lo
                ? ('function' === typeof c && (Bo(t, n, c, r), (u = t.memoizedState)),
                  (i = Lo || Wo(t, n, i, r, f, u, s))
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
              Vo(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : yo(t.type, i)),
              (l.props = s),
              (d = t.pendingProps),
              (f = l.context),
              'object' === typeof (u = n.contextType) && null !== u
                ? (u = xo(u))
                : (u = La(t, (u = Pa(n) ? Aa : Ca.current)));
            var p = n.getDerivedStateFromProps;
            (c = 'function' === typeof p || 'function' === typeof l.getSnapshotBeforeUpdate) ||
              ('function' !== typeof l.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== u) && $o(t, l, r, u)),
              (Lo = !1),
              (f = t.memoizedState),
              (l.state = f),
              zo(t, r, l, a);
            var h = t.memoizedState;
            i !== d || f !== h || Na.current || Lo
              ? ('function' === typeof p && (Bo(t, n, p, r), (h = t.memoizedState)),
                (s = Lo || Wo(t, n, s, r, f, h, u) || !1)
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
          return Ni(e, t, n, r, o, a);
        }
        function Ni(e, t, n, r, a, o) {
          xi(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Ua(t, n, !1), $i(e, t, o);
          (r = t.stateNode), (bi.current = t);
          var i = l && 'function' !== typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Zo(t, e.child, null, o)), (t.child = Zo(t, null, i, o)))
              : _i(e, t, i, o),
            (t.memoizedState = r.state),
            a && Ua(t, n, !0),
            t.child
          );
        }
        function Ai(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            al(e, t.containerInfo);
        }
        function Li(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), _i(e, t, n, r), t.child;
        }
        var Pi,
          Vi,
          Di,
          Oi,
          Mi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ui(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function zi(e, t, n) {
          var r,
            a = t.pendingProps,
            l = ul.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            xa(ul, 1 & l),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: 'hidden', children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Us(u, a, 0, null)),
                      (e = Ms(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Ui(n)),
                      (t.memoizedState = Mi),
                      e)
                    : Fi(t, u))
            );
          if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
            return (function (e, t, n, r, a, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ii(e, t, i, (r = di(Error(o(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((l = r.fallback),
                      (a = t.mode),
                      (r = Us({ mode: 'visible', children: r.children }, a, 0, null)),
                      ((l = Ms(l, a, i, null)).flags |= 2),
                      (r.return = t),
                      (l.return = t),
                      (r.sibling = l),
                      (t.child = r),
                      0 !== (1 & t.mode) && Zo(t, e.child, null, i),
                      (t.child.memoizedState = Ui(i)),
                      (t.memoizedState = Mi),
                      l);
              if (0 === (1 & t.mode)) return Ii(e, t, i, null);
              if ('$!' === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var u = r.dgst;
                return (r = u), Ii(e, t, i, (r = di((l = Error(o(419))), r, void 0)));
              }
              if (((u = 0 !== (i & e.childLanes)), Si || u)) {
                if (null !== (r = Au)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Ao(e, a), rs(r, e, a, -1));
                }
                return vs(), Ii(e, t, i, (r = di(Error(o(421)))));
              }
              return '$?' === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cs.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Qa++] = Ya),
                    (qa[Qa++] = Za),
                    (qa[Qa++] = Ga),
                    (Ya = e.id),
                    (Za = e.overflow),
                    (Ga = t)),
                  (t = Fi(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, l, n);
          if (i) {
            (i = a.fallback), (u = t.mode), (r = (l = e.child).sibling);
            var s = { mode: 'hidden', children: a.children };
            return (
              0 === (1 & u) && t.child !== l
                ? (((a = t.child).childLanes = 0), (a.pendingProps = s), (t.deletions = null))
                : ((a = Ds(l, s)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== r ? (i = Ds(r, i)) : ((i = Ms(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Ui(n)
                  : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Mi),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Ds(i, { mode: 'visible', children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fi(e, t) {
          return (
            ((t = Us({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t)
          );
        }
        function Ii(e, t, n, r) {
          return (
            null !== r && mo(r),
            Zo(t, e.child, null, n),
            ((e = Fi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function ji(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Wi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((_i(e, t, r.children, n), 0 !== (2 & (r = ul.current))))
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
          if ((xa(ul, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case 'forwards':
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === sl(e) && (a = n), (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  ji(t, !1, a, n, o);
                break;
              case 'backwards':
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === sl(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                ji(t, !0, n, null, o);
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
            (Uu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ds((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling), ((n = n.sibling = Ds(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ki(e, t) {
          if (!ao)
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
        function qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qi(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
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
              return qi(t), null;
            case 1:
            case 17:
              return Pa(t.type) && Va(), qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ol(),
                Ta(Na),
                Ta(Ca),
                dl(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== oo && (is(oo), (oo = null)))),
                Vi(e, t),
                qi(t),
                null
              );
            case 5:
              il(t);
              var a = rl(nl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Di(e, t, n, r, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return qi(t), null;
                }
                if (((e = rl(el.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[fa] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)) {
                    case 'dialog':
                      Fr('cancel', r), Fr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Fr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Or.length; a++) Fr(Or[a], r);
                      break;
                    case 'source':
                      Fr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Fr('error', r), Fr('load', r);
                      break;
                    case 'details':
                      Fr('toggle', r);
                      break;
                    case 'input':
                      Y(r, l), Fr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!l.multiple }), Fr('invalid', r);
                      break;
                    case 'textarea':
                      ae(r, l), Fr('invalid', r);
                  }
                  for (var u in (ge(n, l), (a = null), l))
                    if (l.hasOwnProperty(u)) {
                      var s = l[u];
                      'children' === u
                        ? 'string' === typeof s
                          ? r.textContent !== s &&
                            (!0 !== l.suppressHydrationWarning && Xr(r.textContent, s, e),
                            (a = ['children', s]))
                          : 'number' === typeof s &&
                            r.textContent !== '' + s &&
                            (!0 !== l.suppressHydrationWarning && Xr(r.textContent, s, e),
                            (a = ['children', '' + s]))
                        : i.hasOwnProperty(u) && null != s && 'onScroll' === u && Fr('scroll', r);
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
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
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
                    (e[fa] = t),
                    (e[pa] = r),
                    Pi(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case 'dialog':
                        Fr('cancel', e), Fr('close', e), (a = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Fr('load', e), (a = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (a = 0; a < Or.length; a++) Fr(Or[a], e);
                        a = r;
                        break;
                      case 'source':
                        Fr('error', e), (a = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Fr('error', e), Fr('load', e), (a = r);
                        break;
                      case 'details':
                        Fr('toggle', e), (a = r);
                        break;
                      case 'input':
                        Y(e, r), (a = G(e, r)), Fr('invalid', e);
                        break;
                      case 'option':
                      default:
                        a = r;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = U({}, r, { value: void 0 })),
                          Fr('invalid', e);
                        break;
                      case 'textarea':
                        ae(e, r), (a = re(e, r)), Fr('invalid', e);
                    }
                    for (l in (ge(n, a), (s = a)))
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
                                  ? null != c && 'onScroll' === l && Fr('scroll', e)
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
                        'function' === typeof a.onClick && (e.onclick = Jr);
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
              return qi(t), null;
            case 6:
              if (e && null != t.stateNode) Oi(e, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode) throw Error(o(166));
                if (((n = rl(nl.current)), rl(el.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = no))
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
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t),
                    (t.stateNode = r);
              }
              return qi(t), null;
            case 13:
              if (
                (Ta(ul),
                (r = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                  po(), ho(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null))
                      throw Error(o(317));
                    l[fa] = t;
                  } else ho(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  qi(t), (l = !1);
                } else null !== oo && (is(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ul.current) ? 0 === Ou && (Ou = 3) : vs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qi(t),
                  null);
            case 4:
              return ol(), Vi(e, t), null === e && jr(t.stateNode.containerInfo), qi(t), null;
            case 10:
              return ko(t.type._context), qi(t), null;
            case 19:
              if ((Ta(ul), null === (l = t.memoizedState))) return qi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = l.rendering)))
                if (r) Ki(l, !1);
                else {
                  if (0 !== Ou || (null !== e && 0 !== (128 & e.flags)))
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
                        return xa(ul, (1 & ul.current) | 2), t.child;
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
                      null === l.tail && 'hidden' === l.tailMode && !u.alternate && !ao)
                    )
                      return qi(t), null;
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
                  xa(ul, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qi(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Vu) && (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Pa(t.type) && Va(),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 3:
              return (
                ol(),
                Ta(Na),
                Ta(Ca),
                dl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return il(t), null;
            case 13:
              if ((Ta(ul), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return Ta(ul), null;
            case 4:
              return ol(), null;
            case 10:
              return ko(t.type._context), null;
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
          (Vi = function () {}),
          (Di = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), rl(el.current);
              var o,
                l = null;
              switch (n) {
                case 'input':
                  (a = G(e, a)), (r = G(e, r)), (l = []);
                  break;
                case 'select':
                  (a = U({}, a, { value: void 0 })), (r = U({}, r, { value: void 0 })), (l = []);
                  break;
                case 'textarea':
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ('style' === c) {
                    var u = a[c];
                    for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
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
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ('style' === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ''));
                      for (o in s)
                        s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
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
                            ? (null != s && 'onScroll' === c && Fr('scroll', e),
                              l || u === s || (l = []))
                            : (l = l || []).push(c, s));
              }
              n && (l = l || []).push('style', n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Oi = function (e, t, n, r) {
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
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
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
        function ou(e) {
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
              (delete t[fa], delete t[pa], delete t[ma], delete t[va], delete t[ya]),
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
          if (ot && 'function' === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Zi || eu(n, t);
            case 6:
              var r = du,
                a = fu;
              (du = null),
                pu(e, t, n),
                (fu = a),
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
                    8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n),
                    jt(e))
                  : ua(du, n.stateNode));
              break;
            case 4:
              (r = du),
                (a = fu),
                (du = n.stateNode.containerInfo),
                (fu = !0),
                pu(e, t, n),
                (du = r),
                (fu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Zi && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l && (0 !== (2 & o) || 0 !== (4 & o)) && tu(n, t, l),
                    (a = a.next);
                } while (a !== r);
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
              var a = n[r];
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
                if (null === du) throw Error(o(160));
                hu(l, i, a), (du = null), (fu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                Ts(a, t, c);
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
                  ru(3, e, e.return), au(3, e);
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
                var a = e.stateNode;
                try {
                  fe(a, '');
                } catch (v) {
                  Ts(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    'input' === u && 'radio' === l.type && null != l.name && Z(a, l), be(u, i);
                    var c = be(u, l);
                    for (i = 0; i < s.length; i += 2) {
                      var d = s[i],
                        f = s[i + 1];
                      'style' === d
                        ? ve(a, f)
                        : 'dangerouslySetInnerHTML' === d
                          ? de(a, f)
                          : 'children' === d
                            ? fe(a, f)
                            : b(a, d, f, c);
                    }
                    switch (u) {
                      case 'input':
                        X(a, l);
                        break;
                      case 'textarea':
                        oe(a, l);
                        break;
                      case 'select':
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : '', !1));
                    }
                    a[pa] = l;
                  } catch (v) {
                    Ts(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
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
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate && null !== a.alternate.memoizedState) ||
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
                            wu(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Ji = h)) : wu(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? 'function' === typeof (l = a.style).setProperty
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
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ''), (r.flags &= -33)), cu(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  su(e, uu(e), l);
                  break;
                default:
                  throw Error(o(161));
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
            var a = Ji,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Yi;
              if (!l) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Zi;
                i = Yi;
                var s = Zi;
                if (((Yi = l), (Zi = u) && !s))
                  for (Ji = a; null !== Ji; )
                    (u = (l = Ji).child),
                      22 === l.tag && null !== l.memoizedState
                        ? ku(a)
                        : null !== u
                          ? ((u.return = l), (Ji = u))
                          : ku(a);
                for (; null !== o; ) (Ji = o), Su(o, t, n), (o = o.sibling);
                (Ji = a), (Yi = i), (Zi = s);
              }
              _u(e);
            } else 0 !== (8772 & a.subtreeFlags) && null !== o ? ((o.return = a), (Ji = o)) : _u(e);
          }
        }
        function _u(e) {
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
                      Zi || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Zi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Fo(t, l, r);
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
                        Fo(t, i, n);
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
                      throw Error(o(163));
                  }
                Zi || (512 & t.flags && ou(t));
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
        function wu(e) {
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
                    au(4, t);
                  } catch (u) {
                    Ts(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Ts(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    Ts(t, o, u);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    ou(t);
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
          xu = S.ReactCurrentDispatcher,
          Ru = S.ReactCurrentOwner,
          Cu = S.ReactCurrentBatchConfig,
          Nu = 0,
          Au = null,
          Lu = null,
          Pu = 0,
          Vu = 0,
          Du = Ea(0),
          Ou = 0,
          Mu = null,
          Uu = 0,
          zu = 0,
          Fu = 0,
          Iu = null,
          Bu = null,
          ju = 0,
          Wu = 1 / 0,
          Hu = null,
          $u = !1,
          Ku = null,
          qu = null,
          Qu = !1,
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
              : null !== vo.transition
                ? (0 === es && (es = mt()), es)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Zu) throw ((Zu = 0), (Xu = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Nu) && e === Au) ||
              (e === Au && (0 === (2 & Nu) && (zu |= n), 4 === Ou && us(e, Pu)),
              as(e, r),
              1 === n && 0 === Nu && 0 === (1 & t.mode) && ((Wu = Ze() + 500), Fa && ja()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                u = a[l];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Au ? Pu : 0);
          if (0 === r) null !== n && Qe(n), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ba(e);
                  })(ss.bind(null, e))
                : Ba(ss.bind(null, e)),
                la(function () {
                  0 === (6 & Nu) && ja();
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
              n = As(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Ju = -1), (es = 0), 0 !== (6 & Nu))) throw Error(o(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = ft(e, e === Au ? Pu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var a = Nu;
            Nu |= 2;
            var l = ms();
            for ((Au === e && Pu === t) || ((Hu = null), (Wu = Ze() + 500), ps(e, t)); ; )
              try {
                bs();
                break;
              } catch (u) {
                hs(e, u);
              }
            wo(),
              (xu.current = l),
              (Nu = a),
              null !== Lu ? (t = 0) : ((Au = null), (Pu = 0), (t = Ou));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ls(e, a))), 1 === t))
              throw ((n = Mu), ps(e, 0), us(e, r), as(e, Ze()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
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
                  })(a) &&
                  (2 === (t = ys(e, r)) && 0 !== (l = ht(e)) && ((r = l), (t = ls(e, l))), 1 === t))
              )
                throw ((n = Mu), ps(e, 0), us(e, r), as(e, Ze()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  ws(e, Bu, Hu);
                  break;
                case 3:
                  if ((us(e, r), (130023424 & r) === r && 10 < (t = ju + 500 - Ze()))) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ws.bind(null, e, Bu, Hu), t);
                    break;
                  }
                  ws(e, Bu, Hu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
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
                    e.timeoutHandle = ra(ws.bind(null, e, Bu, Hu), r);
                    break;
                  }
                  ws(e, Bu, Hu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return as(e, Ze()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function ls(e, t) {
          var n = Iu;
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
            t &= ~Fu, t &= ~zu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & Nu)) throw Error(o(327));
          ks();
          var t = ft(e, 0);
          if (0 === (1 & t)) return as(e, Ze()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ls(e, r)));
          }
          if (1 === n) throw ((n = Mu), ps(e, 0), us(e, t), as(e, Ze()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ws(e, Bu, Hu),
            as(e, Ze()),
            null
          );
        }
        function cs(e, t) {
          var n = Nu;
          Nu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nu = n) && ((Wu = Ze() + 500), Fa && ja());
          }
        }
        function ds(e) {
          null !== Gu && 0 === Gu.tag && 0 === (6 & Nu) && ks();
          var t = Nu;
          Nu |= 1;
          var n = Cu.transition,
            r = bt;
          try {
            if (((Cu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Cu.transition = n), 0 === (6 & (Nu = t)) && ja();
          }
        }
        function fs() {
          (Vu = Du.current), Ta(Du);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Lu))
            for (n = Lu.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) && void 0 !== r && Va();
                  break;
                case 3:
                  ol(), Ta(Na), Ta(Ca), dl();
                  break;
                case 5:
                  il(r);
                  break;
                case 4:
                  ol();
                  break;
                case 13:
                case 19:
                  Ta(ul);
                  break;
                case 10:
                  ko(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Au = e),
            (Lu = e = Ds(e.current, null)),
            (Pu = Vu = t),
            (Ou = 0),
            (Mu = null),
            (Fu = zu = Uu = 0),
            (Bu = Iu = null),
            null !== Ro)
          ) {
            for (t = 0; t < Ro.length; t++)
              if (null !== (r = (n = Ro[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            Ro = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Lu;
            try {
              if ((wo(), (fl.current = li), gl)) {
                for (var r = ml.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gl = !1;
              }
              if (
                ((hl = 0),
                (yl = vl = ml = null),
                (bl = !1),
                (Sl = 0),
                (Ru.current = null),
                null === n || null === n.return)
              ) {
                (Ou = 1), (Mu = t), (Lu = null);
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
                  s = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var y = yi(i);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256), gi(y, i, u, 0, t), mo(ci(s, u));
                    break e;
                  }
                }
                (l = s = ci(s, u)),
                  4 !== Ou && (Ou = 2),
                  null === Iu ? (Iu = [l]) : Iu.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536), (t &= -t), (l.lanes |= t), Uo(l, hi(0, s, t));
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
                            (null === qu || !qu.has(b))))
                      ) {
                        (l.flags |= 65536), (t &= -t), (l.lanes |= t), Uo(l, mi(l, u, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              _s(n);
            } catch (S) {
              (t = S), Lu === n && null !== n && (Lu = n = n.return);
              continue;
            }
            break;
          }
        }
        function ms() {
          var e = xu.current;
          return (xu.current = li), null === e ? li : e;
        }
        function vs() {
          (0 !== Ou && 3 !== Ou && 2 !== Ou) || (Ou = 4),
            null === Au || (0 === (268435455 & Uu) && 0 === (268435455 & zu)) || us(Au, Pu);
        }
        function ys(e, t) {
          var n = Nu;
          Nu |= 2;
          var r = ms();
          for ((Au === e && Pu === t) || ((Hu = null), ps(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              hs(e, a);
            }
          if ((wo(), (Nu = n), (xu.current = r), null !== Lu)) throw Error(o(261));
          return (Au = null), (Pu = 0), Ou;
        }
        function gs() {
          for (; null !== Lu; ) Ss(Lu);
        }
        function bs() {
          for (; null !== Lu && !Ge(); ) Ss(Lu);
        }
        function Ss(e) {
          var t = Eu(e.alternate, e, Vu);
          (e.memoizedProps = e.pendingProps), null === t ? _s(e) : (Lu = t), (Ru.current = null);
        }
        function _s(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qi(n, t, Vu))) return void (Lu = n);
            } else {
              if (null !== (n = Gi(n, t))) return (n.flags &= 32767), void (Lu = n);
              if (null === e) return (Ou = 6), void (Lu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Lu = t);
            Lu = t = e;
          } while (null !== t);
          0 === Ou && (Ou = 5);
        }
        function ws(e, t, n) {
          var r = bt,
            a = Cu.transition;
          try {
            (Cu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks();
                } while (null !== Gu);
                if (0 !== (6 & Nu)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                  throw Error(o(177));
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
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === Au && ((Lu = Au = null), (Pu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qu ||
                    ((Qu = !0),
                    As(tt, function () {
                      return ks(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Cu.transition), (Cu.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = Nu;
                  (Nu |= 4),
                    (Ru.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = fr())))) {
                        if ('selectionStart' in e)
                          var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r =
                              (n = ((n = e.ownerDocument) && n.defaultView) || window)
                                .getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (_) {
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
                                  f !== n || (0 !== a && 3 !== f.nodeType) || (u = i + a),
                                    f !== l || (0 !== r && 3 !== f.nodeType) || (s = i + r),
                                    3 === f.nodeType && (i += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = i),
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
                        ta = { focusedElem: e, selectionRange: n }, Ht = !1, Ji = t;
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
                                          t.elementType === t.type ? v : yo(t.type, v),
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
                                    throw Error(o(163));
                                }
                            } catch (_) {
                              Ts(t, t.return, _);
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
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ye(),
                    (Nu = u),
                    (bt = i),
                    (Cu.transition = l);
                } else e.current = n;
                if (
                  (Qu && ((Qu = !1), (Gu = e), (Yu = a)),
                  (l = e.pendingLanes),
                  0 === l && (qu = null),
                  (function (e) {
                    if (ot && 'function' === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags));
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Ze()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($u) throw (($u = !1), (e = Ku), (Ku = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && ks(),
                  (l = e.pendingLanes),
                  0 !== (1 & l) ? (e === Xu ? Zu++ : ((Zu = 0), (Xu = e))) : (Zu = 0),
                  ja();
              })(e, t, n, r);
          } finally {
            (Cu.transition = a), (bt = r);
          }
          return null;
        }
        function ks() {
          if (null !== Gu) {
            var e = St(Yu),
              t = Cu.transition,
              n = bt;
            try {
              if (((Cu.transition = null), (bt = 16 > e ? 16 : e), null === Gu)) var r = !1;
              else {
                if (((e = Gu), (Gu = null), (Yu = 0), 0 !== (6 & Nu))) throw Error(o(331));
                var a = Nu;
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
                              au(9, u);
                          }
                        } catch (w) {
                          Ts(u, u.return, w);
                        }
                      if (u === i) {
                        Ji = null;
                        break e;
                      }
                      var _ = u.sibling;
                      if (null !== _) {
                        (_.return = u.return), (Ji = _);
                        break e;
                      }
                      Ji = u.return;
                    }
                }
                if (((Nu = a), ja(), ot && 'function' === typeof ot.onPostCommitFiberRoot))
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (w) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Cu.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = Oo(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (yt(e, 1, t), as(e, t));
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
                  ('function' === typeof r.componentDidCatch && (null === qu || !qu.has(r)))
                ) {
                  (t = Oo(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (yt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function xs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Au === e &&
              (Pu & n) === n &&
              (4 === Ou || (3 === Ou && (130023424 & Pu) === Pu && 500 > Ze() - ju)
                ? ps(e, 0)
                : (Fu |= n)),
            as(e, t);
        }
        function Rs(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Ao(e, t)) && (yt(e, t, n), as(e, n));
        }
        function Cs(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Rs(e, n);
        }
        function Ns(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Rs(e, n);
        }
        function As(e, t) {
          return qe(e, t);
        }
        function Ls(e, t, n, r) {
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
          return new Ls(e, t, n, r);
        }
        function Vs(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ds(e, t) {
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
        function Os(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), 'function' === typeof e)) Vs(e) && (i = 1);
          else if ('string' === typeof e) i = 5;
          else
            e: switch (e) {
              case k:
                return Ms(n.children, a, l, t);
              case E:
                (i = 8), (a |= 8);
                break;
              case T:
                return ((e = Ps(12, n, t, 2 | a)).elementType = T), (e.lanes = l), e;
              case N:
                return ((e = Ps(13, n, t, a)).elementType = N), (e.lanes = l), e;
              case A:
                return ((e = Ps(19, n, t, a)).elementType = A), (e.lanes = l), e;
              case V:
                return Us(n, a, l, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case x:
                      i = 10;
                      break e;
                    case R:
                      i = 9;
                      break e;
                    case C:
                      i = 11;
                      break e;
                    case L:
                      i = 14;
                      break e;
                    case P:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ''));
            }
          return ((t = Ps(i, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t;
        }
        function Ms(e, t, n, r) {
          return ((e = Ps(7, e, r, t)).lanes = n), e;
        }
        function Us(e, t, n, r) {
          return (
            ((e = Ps(22, e, r, t)).elementType = V),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function zs(e, t, n) {
          return ((e = Ps(6, e, null, t)).lanes = n), e;
        }
        function Fs(e, t, n) {
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
        function Is(e, t, n, r, a) {
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
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bs(e, t, n, r, a, o, l, i, u) {
          return (
            (e = new Is(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ps(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Po(o),
            e
          );
        }
        function js(e) {
          if (!e) return Ra;
          e: {
            if (je((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Pa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Pa(n)) return Oa(e, n, t);
          }
          return t;
        }
        function Ws(e, t, n, r, a, o, l, i, u) {
          return (
            ((e = Bs(n, r, !0, e, 0, o, 0, i, u)).context = js(null)),
            (n = e.current),
            ((o = Do((r = ts()), (a = ns(n)))).callback = void 0 !== t && null !== t ? t : null),
            Oo(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            as(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var a = t.current,
            o = ts(),
            l = ns(a);
          return (
            (n = js(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Do(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Oo(a, t, l)) && (rs(e, a, l, o), Mo(e, a, l)),
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
        function qs(e, t) {
          Ks(e, t), (e = e.alternate) && Ks(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) Si = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (Si = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ai(t), ho();
                        break;
                      case 5:
                        ll(t);
                        break;
                      case 1:
                        Pa(t.type) && Ma(t);
                        break;
                      case 4:
                        al(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        xa(go, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (xa(ul, 1 & ul.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? zi(e, t, n)
                              : (xa(ul, 1 & ul.current),
                                null !== (e = $i(e, t, n)) ? e.sibling : null);
                        xa(ul, 1 & ul.current);
                        break;
                      case 19:
                        if (((r = 0 !== (n & t.childLanes)), 0 !== (128 & e.flags))) {
                          if (r) return Wi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                          xa(ul, ul.current),
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
          else (Si = !1), ao && 0 !== (1048576 & t.flags) && Ja(t, Ka, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hi(e, t), (e = t.pendingProps);
              var a = La(t, Ca.current);
              To(t, n), (a = El(null, t, r, e, a, n));
              var l = Tl();
              return (
                (t.flags |= 1),
                'object' === typeof a &&
                null !== a &&
                'function' === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Pa(r) ? ((l = !0), Ma(t)) : (l = !1),
                    (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                    Po(t),
                    (a.updater = jo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ko(t, r, e, n),
                    (t = Ni(null, t, r, !0, l, n)))
                  : ((t.tag = 0), ao && l && eo(t), _i(null, t, a, n), (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Vs(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ri(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ci(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ki(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ri(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ci(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Ai(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Vo(e, t),
                  zo(t, r, null, n);
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
                    t = Li(e, t, r, n, (a = ci(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Li(e, t, r, n, (a = ci(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = $i(e, t, n);
                    break e;
                  }
                  _i(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ll(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a) ? (i = null) : null !== l && na(r, l) && (t.flags |= 32),
                xi(e, t),
                _i(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return zi(e, t, n);
            case 4:
              return (
                al(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Zo(t, null, r, n)) : _i(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wi(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return _i(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return _i(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  xa(go, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !Na.current) {
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
                              (s = Do(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d ? (s.next = s) : ((s.next = d.next), (d.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (l.lanes |= n),
                              null !== (s = l.alternate) && (s.lanes |= n),
                              Eo(l.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === l.tag) i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Eo(i, n, t),
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
                _i(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                To(t, n),
                (r = r((a = xo(a)))),
                (t.flags |= 1),
                _i(e, t, r, n),
                t.child
              );
            case 14:
              return (a = yo((r = t.type), t.pendingProps)), ki(e, t, r, (a = yo(r.type, a)), n);
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Hi(e, t),
                (t.tag = 1),
                Pa(r) ? ((e = !0), Ma(t)) : (e = !1),
                To(t, n),
                Ho(t, r, a),
                Ko(t, r, a, n),
                Ni(null, t, r, !0, e, n)
              );
            case 19:
              return Wi(e, t, n);
            case 22:
              return Ti(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Qs =
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
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ('function' === typeof a) {
              var i = a;
              a = function () {
                var e = $s(l);
                i.call(e);
              };
            }
            Hs(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ('function' === typeof r) {
                  var o = r;
                  r = function () {
                    var e = $s(l);
                    o.call(e);
                  };
                }
                var l = Ws(t, r, e, 0, null, !1, 0, '', Js);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  jr(8 === e.nodeType ? e.parentNode : e),
                  ds(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
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
                (e[ha] = u.current),
                jr(8 === e.nodeType ? e.parentNode : e),
                ds(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return $s(l);
        }
        (Ys.prototype.render = Gs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
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
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < Vt.length && 0 !== t && t < Vt[n].priority; n++);
              Vt.splice(n, 0, e), 0 === n && Ut(e);
            }
          }),
          (_t = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n), as(t, Ze()), 0 === (6 & Nu) && ((Wu = Ze() + 500), ja()));
                }
                break;
              case 13:
                ds(function () {
                  var t = Ao(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = Ao(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              qs(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Ao(e, t);
              if (null !== n) rs(n, e, t, ts());
              qs(e, t);
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
          (we = function (e, t, n) {
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
                      var a = _a(r);
                      if (!a) throw Error(o(90));
                      q(r), X(r, a);
                    }
                  }
                }
                break;
              case 'textarea':
                oe(e, n);
                break;
              case 'select':
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ce = cs),
          (Ne = ds);
        var tc = { usingClientEntryPoint: !1, Events: [ba, Sa, _a, xe, Re, cs] },
          nc = {
            findFiberByHostInstance: ga,
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
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Zs(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: w,
                key: null == r ? null : '' + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Zs(e)) throw Error(o(299));
            var n = !1,
              r = '',
              a = Qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              jr(8 === e.nodeType ? e.parentNode : e),
              new Gs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(',')), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return ds(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Zs(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = '',
              i = Qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Ws(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ha] = t.current),
              jr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (ds(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xs(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
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
          a = Symbol.for('react.element'),
          o = Symbol.for('react.fragment'),
          l = Object.prototype.hasOwnProperty,
          i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = '' + n),
          void 0 !== t.key && (s = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return { $$typeof: a, type: e, key: s, ref: c, props: o, _owner: i.current };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      306: (e, t) => {
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          o = Symbol.for('react.strict_mode'),
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
        var _ = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = '' + t.key), t))
              w.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps) for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return { $$typeof: n, type: e, key: l, ref: i, props: o, _owner: k.current };
        }
        function x(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }
        var R = /\/+/g;
        function C(e, t) {
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
        function N(e, t, a, o, l) {
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
              (e = '' === o ? '.' + C(u, 0) : o),
              _(l)
                ? ((a = ''),
                  null != e && (a = e.replace(R, '$&/') + '/'),
                  N(l, t, a, '', function (e) {
                    return e;
                  }))
                : null != l &&
                  (x(l) &&
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
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ''
                          : ('' + l.key).replace(R, '$&/') + '/') +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (o = '' === o ? '.' : o + ':'), _(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + C((i = e[s]), s);
              u += N(i, t, a, c, l);
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
              u += N((i = i.value), t, a, (c = o + C(i, s++)), l);
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
        function A(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, '', '', function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
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
          V = { transition: null },
          D = { ReactCurrentDispatcher: P, ReactCurrentBatchConfig: V, ReactCurrentOwner: k };
        (t.Children = {
          map: A,
          forEach: function (e, t, n) {
            A(
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
              A(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              A(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!x(e))
              throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              );
            var a = m({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = k.current)),
                void 0 !== t.key && (o = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                w.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return { $$typeof: n, type: e.type, key: o, ref: l, props: a, _owner: i };
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
          (t.isValidElement = x),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: L };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = V.transition;
            V.transition = {};
            try {
              e();
            } finally {
              V.transition = t;
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
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
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
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function _(e) {
          if (((v = !1), S(e), !m))
            if (null !== r(s)) (m = !0), V(w);
            else {
              var t = r(c);
              null !== t && D(_, t.startTime - e);
            }
        }
        function w(e, n) {
          (m = !1), v && ((v = !1), g(x), (x = -1)), (h = !0);
          var o = p;
          try {
            for (S(n), f = r(s); null !== f && (!(f.expirationTime > n) || (e && !N())); ) {
              var l = f.callback;
              if ('function' === typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var i = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof i ? (f.callback = i) : f === r(s) && a(s),
                  S(n);
              } else a(s);
              f = r(s);
            }
            if (null !== f) var u = !0;
            else {
              var d = r(c);
              null !== d && D(_, d.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (f = null), (p = o), (h = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          T = null,
          x = -1,
          R = 5,
          C = -1;
        function N() {
          return !(t.unstable_now() - C < R);
        }
        function A() {
          if (null !== T) {
            var e = t.unstable_now();
            C = e;
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
            b(A);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var L = new MessageChannel(),
            P = L.port2;
          (L.port1.onmessage = A),
            (k = function () {
              P.postMessage(null);
            });
        } else
          k = function () {
            y(A, 0);
          };
        function V(e) {
          (T = e), E || ((E = !0), k());
        }
        function D(e, n) {
          x = y(function () {
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
            m || h || ((m = !0), V(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (R = 0 < e ? Math.floor(1e3 / e) : 5);
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
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ('object' === typeof o && null !== o
                ? (o = 'number' === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
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
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) && e === r(c) && (v ? (g(x), (x = -1)) : (v = !0), D(_, o - l)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), V(w))),
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
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ('object' === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && 'function' === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var l = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var i = 2 & a && r; 'object' == typeof i && !~e.indexOf(i); i = t(i))
          Object.getOwnPropertyNames(i).forEach((e) => (l[e] = () => r[e]));
        return (l.default = () => r), n.d(o, l), o;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) => Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => 'static/js/' + e + '.57bd240e.chunk.js'),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = 'app:';
      n.l = (r, a, o, l) => {
        if (e[r]) e[r].push(a);
        else {
          var i, u;
          if (void 0 !== o)
            for (var s = document.getElementsByTagName('script'), c = 0; c < s.length; c++) {
              var d = s[c];
              if (d.getAttribute('src') == r || d.getAttribute('data-webpack') == t + o) {
                i = d;
                break;
              }
            }
          i ||
            ((u = !0),
            ((i = document.createElement('script')).charset = 'utf-8'),
            (i.timeout = 120),
            n.nc && i.setAttribute('nonce', n.nc),
            i.setAttribute('data-webpack', t + o),
            (i.src = r)),
            (e[r] = [a]);
          var f = (t, n) => {
              (i.onerror = i.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((e) => e(n)),
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
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = o));
            var l = n.p + n.u(t),
              i = new Error();
            n.l(
              l,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ('load' === r.type ? 'missing' : r.type),
                    l = r && r.target && r.target.src;
                  (i.message = 'Loading chunk ' + t + ' failed.\n(' + o + ': ' + l + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = o),
                    (i.request = l),
                    a[1](i);
                }
              },
              'chunk-' + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            o,
            l = r[0],
            i = r[1],
            u = r[2],
            s = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (a in i) n.o(i, a) && (n.m[a] = i[a]);
            if (u) u(n);
          }
          for (t && t(r); s < l.length; s++) (o = l[s]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkapp = self.webpackChunkapp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      var e,
        t = n(313),
        r = n.t(t, 2),
        a = n(168),
        o = n.t(a, 2);
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
      function h(t, n, r, a) {
        void 0 === a && (a = {});
        let { window: o = document.defaultView, v5Compat: s = !1 } = a,
          p = o.history,
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
          let t = 'null' !== o.location.origin ? o.location.origin : o.location.href,
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
            return t(o, p);
          },
          listen(e) {
            if (m) throw new Error('A history only accepts one active listener');
            return (
              o.addEventListener(i, g),
              (m = e),
              () => {
                o.removeEventListener(i, g), (m = null);
              }
            );
          },
          createHref: (e) => n(o, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            h = e.Push;
            let a = d(S.location, t, n);
            r && r(a, t), (v = y() + 1);
            let l = c(a, v),
              i = S.createHref(a);
            try {
              p.pushState(l, '', i);
            } catch (u) {
              if (u instanceof DOMException && 'DataCloneError' === u.name) throw u;
              o.location.assign(i);
            }
            s && m && m({ action: h, location: S.location, delta: 1 });
          },
          replace: function (t, n) {
            h = e.Replace;
            let a = d(S.location, t, n);
            r && r(a, t), (v = y());
            let o = c(a, v),
              l = S.createHref(a);
            p.replaceState(o, '', l), s && m && m({ action: h, location: S.location, delta: 0 });
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
        let r = A(('string' === typeof t ? p(t) : t).pathname || '/', n);
        if (null == r) return null;
        let a = y(e);
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
        })(a);
        let o = null;
        for (let l = 0; null == o && l < a.length; ++l) o = R(a[l], N(r));
        return o;
      }
      function y(e, t, n, r) {
        void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = '');
        let a = (e, a, o) => {
          let l = {
            relativePath: void 0 === o ? e.path || '' : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
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
          let i = D([r, l.relativePath]),
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
            (null != e.path || e.index) && t.push({ path: i, score: x(i, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ('' !== e.path && null != (n = e.path) && n.includes('?'))
              for (let r of g(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function g(e) {
        let t = e.split('/');
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith('?'),
          o = n.replace(/\?$/, '');
        if (0 === r.length) return a ? [o, ''] : [o];
        let l = g(r.join('/')),
          i = [];
        return (
          i.push(...l.map((e) => ('' === e ? o : [o, e].join('/')))),
          a && i.push(...l),
          i.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
        );
      }
      const b = /^:\w+$/,
        S = 3,
        _ = 2,
        w = 1,
        k = 10,
        E = -2,
        T = (e) => '*' === e;
      function x(e, t) {
        let n = e.split('/'),
          r = n.length;
        return (
          n.some(T) && (r += E),
          t && (r += _),
          n.filter((e) => !T(e)).reduce((e, t) => e + (b.test(t) ? S : '' === t ? w : k), r)
        );
      }
      function R(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = '/',
          o = [];
        for (let l = 0; l < n.length; ++l) {
          let e = n[l],
            i = l === n.length - 1,
            u = '/' === a ? t : t.slice(a.length) || '/',
            s = C({ path: e.relativePath, caseSensitive: e.caseSensitive, end: i }, u);
          if (!s) return null;
          Object.assign(r, s.params);
          let c = e.route;
          o.push({
            params: r,
            pathname: D([a, s.pathname]),
            pathnameBase: O(D([a, s.pathnameBase])),
            route: c,
          }),
            '/' !== s.pathnameBase && (a = D([a, s.pathnameBase]));
        }
        return o;
      }
      function C(e, t) {
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
              a =
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
                (a += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : n
                ? (a += '\\/*$')
                : '' !== e && '/' !== e && (a += '(?:(?=\\/|$))');
            let o = new RegExp(a, t ? void 0 : 'i');
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          l = o.replace(/(.)\/+$/, '$1'),
          i = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ('*' === r) {
              let e = i[n] || '';
              l = o.slice(0, o.length - e.length).replace(/(.)\/+$/, '$1');
            }
            const u = i[n];
            return (
              (e[r] =
                a && !u
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
          pathname: o,
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
      function A(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith('/') ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && '/' !== r ? null : e.slice(n) || '/';
      }
      function L(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(r) +
          '].  Please separate it out to the `to.' +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function P(e) {
        return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
      }
      function V(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          'string' === typeof e
            ? (a = p(e))
            : ((a = l({}, e)),
              u(!a.pathname || !a.pathname.includes('?'), L('?', 'pathname', 'search', a)),
              u(!a.pathname || !a.pathname.includes('#'), L('#', 'pathname', 'hash', a)),
              u(!a.search || !a.search.includes('#'), L('#', 'search', 'hash', a)));
        let o,
          i = '' === e || '' === a.pathname,
          s = i ? '/' : a.pathname;
        if (null == s) o = n;
        else if (r) {
          let e = t[t.length - 1].replace(/^\//, '').split('/');
          if (s.startsWith('..')) {
            let t = s.split('/');
            for (; '..' === t[0]; ) t.shift(), e.pop();
            a.pathname = t.join('/');
          }
          o = '/' + e.join('/');
        } else {
          let e = t.length - 1;
          if (s.startsWith('..')) {
            let t = s.split('/');
            for (; '..' === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join('/');
          }
          o = e >= 0 ? t[e] : '/';
        }
        let c = (function (e, t) {
            void 0 === t && (t = '/');
            let { pathname: n, search: r = '', hash: a = '' } = 'string' === typeof e ? p(e) : e,
              o = n
                ? n.startsWith('/')
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, '').split('/');
                      return (
                        e.split('/').forEach((e) => {
                          '..' === e ? n.length > 1 && n.pop() : '.' !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join('/') : '/'
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: M(r), hash: U(a) };
          })(a, o),
          d = s && '/' !== s && s.endsWith('/'),
          f = (i || '.' === s) && n.endsWith('/');
        return c.pathname.endsWith('/') || (!d && !f) || (c.pathname += '/'), c;
      }
      const D = (e) => e.join('/').replace(/\/\/+/g, '/'),
        O = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
        M = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
        U = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
      Error;
      function z(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'boolean' === typeof e.internal &&
          'data' in e
        );
      }
      const F = ['post', 'put', 'patch', 'delete'],
        I = (new Set(F), ['get', ...F]);
      new Set(I), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol('deferred');
      function B() {
        return (
          (B = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          B.apply(this, arguments)
        );
      }
      const j = t.createContext(null);
      const W = t.createContext(null);
      const H = t.createContext(null);
      const $ = t.createContext(null);
      const K = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const q = t.createContext(null);
      function Q() {
        return null != t.useContext($);
      }
      function G() {
        return Q() || u(!1), t.useContext($).location;
      }
      function Y(e) {
        t.useContext(H).static || t.useLayoutEffect(e);
      }
      function Z() {
        let { isDataRoute: e } = t.useContext(K);
        return e
          ? (function () {
              let { router: e } = ie(oe.UseNavigateStable),
                n = se(le.UseNavigateStable),
                r = t.useRef(!1);
              return (
                Y(() => {
                  r.current = !0;
                }),
                t.useCallback(
                  function (t, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ('number' === typeof t
                          ? e.navigate(t)
                          : e.navigate(t, B({ fromRouteId: n }, a)));
                  },
                  [e, n]
                )
              );
            })()
          : (function () {
              Q() || u(!1);
              let e = t.useContext(j),
                { basename: n, navigator: r } = t.useContext(H),
                { matches: a } = t.useContext(K),
                { pathname: o } = G(),
                l = JSON.stringify(P(a).map((e) => e.pathnameBase)),
                i = t.useRef(!1);
              return (
                Y(() => {
                  i.current = !0;
                }),
                t.useCallback(
                  function (t, a) {
                    if ((void 0 === a && (a = {}), !i.current)) return;
                    if ('number' === typeof t) return void r.go(t);
                    let u = V(t, JSON.parse(l), o, 'path' === a.relative);
                    null == e &&
                      '/' !== n &&
                      (u.pathname = '/' === u.pathname ? n : D([n, u.pathname])),
                      (a.replace ? r.replace : r.push)(u, a.state, a);
                  },
                  [n, r, l, o, e]
                )
              );
            })();
      }
      function X(e, n) {
        let { relative: r } = void 0 === n ? {} : n,
          { matches: a } = t.useContext(K),
          { pathname: o } = G(),
          l = JSON.stringify(
            P(a).map((e, t) => (t === a.length - 1 ? e.pathname : e.pathnameBase))
          );
        return t.useMemo(() => V(e, JSON.parse(l), o, 'path' === r), [e, l, o, r]);
      }
      function J(n, r, a) {
        Q() || u(!1);
        let { navigator: o } = t.useContext(H),
          { matches: l } = t.useContext(K),
          i = l[l.length - 1],
          s = i ? i.params : {},
          c = (i && i.pathname, i ? i.pathnameBase : '/');
        i && i.route;
        let d,
          f = G();
        if (r) {
          var h;
          let e = 'string' === typeof r ? p(r) : r;
          '/' === c || (null == (h = e.pathname) ? void 0 : h.startsWith(c)) || u(!1), (d = e);
        } else d = f;
        let m = d.pathname || '/',
          y = v(n, { pathname: '/' === c ? m : m.slice(c.length) || '/' });
        let g = ae(
          y &&
            y.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: D([
                  c,
                  o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname,
                ]),
                pathnameBase:
                  '/' === e.pathnameBase
                    ? c
                    : D([
                        c,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          l,
          a
        );
        return r && g
          ? t.createElement(
              $.Provider,
              {
                value: {
                  location: B(
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
      function ee() {
        let e = (function () {
            var e;
            let n = t.useContext(q),
              r = ue(le.UseRouteError),
              a = se(le.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = z(e)
            ? e.status + ' ' + e.statusText
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = 'rgba(200,200,200, 0.5)',
          o = { padding: '0.5rem', backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement('h2', null, 'Unexpected Application Error!'),
          t.createElement('h3', { style: { fontStyle: 'italic' } }, n),
          r ? t.createElement('pre', { style: o }, r) : null,
          null
        );
      }
      const te = t.createElement(ee, null);
      class ne extends t.Component {
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
                K.Provider,
                { value: this.props.routeContext },
                t.createElement(q.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function re(e) {
        let { routeContext: n, match: r, children: a } = e,
          o = t.useContext(j);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(K.Provider, { value: n }, a)
        );
      }
      function ae(e, n, r) {
        var a;
        if ((void 0 === n && (n = []), void 0 === r && (r = null), null == e)) {
          var o;
          if (null == (o = r) || !o.errors) return null;
          e = r.matches;
        }
        let l = e,
          i = null == (a = r) ? void 0 : a.errors;
        if (null != i) {
          let e = l.findIndex((e) => e.route.id && (null == i ? void 0 : i[e.route.id]));
          e >= 0 || u(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        return l.reduceRight((e, a, o) => {
          let u = a.route.id ? (null == i ? void 0 : i[a.route.id]) : null,
            s = null;
          r && (s = a.route.errorElement || te);
          let c = n.concat(l.slice(0, o + 1)),
            d = () => {
              let n;
              return (
                (n = u
                  ? s
                  : a.route.Component
                    ? t.createElement(a.route.Component, null)
                    : a.route.element
                      ? a.route.element
                      : e),
                t.createElement(re, {
                  match: a,
                  routeContext: { outlet: e, matches: c, isDataRoute: null != r },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? t.createElement(ne, {
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
      var oe = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            e
          );
        })(oe || {}),
        le = (function (e) {
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
        })(le || {});
      function ie(e) {
        let n = t.useContext(j);
        return n || u(!1), n;
      }
      function ue(e) {
        let n = t.useContext(W);
        return n || u(!1), n;
      }
      function se(e) {
        let n = (function (e) {
            let n = t.useContext(K);
            return n || u(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || u(!1), r.route.id;
      }
      r.startTransition;
      function ce(e) {
        u(!1);
      }
      function de(n) {
        let {
          basename: r = '/',
          children: a = null,
          location: o,
          navigationType: l = e.Pop,
          navigator: i,
          static: s = !1,
        } = n;
        Q() && u(!1);
        let c = r.replace(/^\/*/, '/'),
          d = t.useMemo(() => ({ basename: c, navigator: i, static: s }), [c, i, s]);
        'string' === typeof o && (o = p(o));
        let {
            pathname: f = '/',
            search: h = '',
            hash: m = '',
            state: v = null,
            key: y = 'default',
          } = o,
          g = t.useMemo(() => {
            let e = A(f, c);
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
              H.Provider,
              { value: d },
              t.createElement($.Provider, { children: a, value: g })
            );
      }
      function fe(e) {
        let { children: t, location: n } = e;
        return J(pe(t), n);
      }
      new Promise(() => {});
      t.Component;
      function pe(e, n) {
        void 0 === n && (n = []);
        let r = [];
        return (
          t.Children.forEach(e, (e, a) => {
            if (!t.isValidElement(e)) return;
            let o = [...n, a];
            if (e.type === t.Fragment) return void r.push.apply(r, pe(e.props.children, o));
            e.type !== ce && u(!1), e.props.index && e.props.children && u(!1);
            let l = {
              id: e.props.id || o.join('-'),
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
            e.props.children && (l.children = pe(e.props.children, o)), r.push(l);
          }),
          r
        );
      }
      function he() {
        return (
          (he = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          he.apply(this, arguments)
        );
      }
      function me(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
      const ve = [
          'onClick',
          'relative',
          'reloadDocument',
          'replace',
          'state',
          'target',
          'to',
          'preventScrollReset',
          'unstable_viewTransition',
        ],
        ye = [
          'aria-current',
          'caseSensitive',
          'className',
          'end',
          'style',
          'to',
          'unstable_viewTransition',
          'children',
        ];
      const ge = t.createContext({ isTransitioning: !1 });
      new Map();
      const be = r.startTransition;
      o.flushSync;
      function Se(e) {
        let { basename: n, children: r, future: a, window: o } = e,
          l = t.useRef();
        var i;
        null == l.current &&
          (l.current =
            (void 0 === (i = { window: o, v5Compat: !0 }) && (i = {}),
            h(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return d(
                  '',
                  { pathname: n, search: r, hash: a },
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
          { v7_startTransition: p } = a || {},
          m = t.useCallback(
            (e) => {
              p && be ? be(() => c(e)) : c(e);
            },
            [c, p]
          );
        return (
          t.useLayoutEffect(() => u.listen(m), [u, m]),
          t.createElement(de, {
            basename: n,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: u,
          })
        );
      }
      const _e =
          'undefined' !== typeof window &&
          'undefined' !== typeof window.document &&
          'undefined' !== typeof window.document.createElement,
        we = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        ke = t.forwardRef(function (e, n) {
          let r,
            {
              onClick: a,
              relative: o,
              reloadDocument: l,
              replace: i,
              state: s,
              target: c,
              to: d,
              preventScrollReset: p,
              unstable_viewTransition: h,
            } = e,
            m = me(e, ve),
            { basename: v } = t.useContext(H),
            y = !1;
          if ('string' === typeof d && we.test(d) && ((r = d), _e))
            try {
              let e = new URL(window.location.href),
                t = d.startsWith('//') ? new URL(e.protocol + d) : new URL(d),
                n = A(t.pathname, v);
              t.origin === e.origin && null != n ? (d = n + t.search + t.hash) : (y = !0);
            } catch (S) {}
          let g = (function (e, n) {
              let { relative: r } = void 0 === n ? {} : n;
              Q() || u(!1);
              let { basename: a, navigator: o } = t.useContext(H),
                { hash: l, pathname: i, search: s } = X(e, { relative: r }),
                c = i;
              return (
                '/' !== a && (c = '/' === i ? a : D([a, i])),
                o.createHref({ pathname: c, search: s, hash: l })
              );
            })(d, { relative: o }),
            b = (function (e, n) {
              let {
                  target: r,
                  replace: a,
                  state: o,
                  preventScrollReset: l,
                  relative: i,
                  unstable_viewTransition: u,
                } = void 0 === n ? {} : n,
                s = Z(),
                c = G(),
                d = X(e, { relative: i });
              return t.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || '_self' === t) &&
                        !(function (e) {
                          return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                        })(e)
                      );
                    })(t, r)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== a ? a : f(c) === f(d);
                    s(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: l,
                      relative: i,
                      unstable_viewTransition: u,
                    });
                  }
                },
                [c, s, d, a, o, r, e, l, i, u]
              );
            })(d, {
              replace: i,
              state: s,
              target: c,
              preventScrollReset: p,
              relative: o,
              unstable_viewTransition: h,
            });
          return t.createElement(
            'a',
            he({}, m, {
              href: r || g,
              onClick:
                y || l
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e);
                    },
              ref: n,
              target: c,
            })
          );
        });
      const Ee = t.forwardRef(function (e, n) {
        let {
            'aria-current': r = 'page',
            caseSensitive: a = !1,
            className: o = '',
            end: l = !1,
            style: i,
            to: s,
            unstable_viewTransition: c,
            children: d,
          } = e,
          f = me(e, ye),
          p = X(s, { relative: f.relative }),
          h = G(),
          m = t.useContext(W),
          { navigator: v } = t.useContext(H),
          y =
            null != m &&
            (function (e, n) {
              void 0 === n && (n = {});
              let r = t.useContext(ge);
              null == r && u(!1);
              let { basename: a } = Re(Te.useViewTransitionState),
                o = X(e, { relative: n.relative });
              if (!r.isTransitioning) return !1;
              let l = A(r.currentLocation.pathname, a) || r.currentLocation.pathname,
                i = A(r.nextLocation.pathname, a) || r.nextLocation.pathname;
              return null != C(o.pathname, i) || null != C(o.pathname, l);
            })(p) &&
            !0 === c,
          g = v.encodeLocation ? v.encodeLocation(p).pathname : p.pathname,
          b = h.pathname,
          S = m && m.navigation && m.navigation.location ? m.navigation.location.pathname : null;
        a || ((b = b.toLowerCase()), (S = S ? S.toLowerCase() : null), (g = g.toLowerCase()));
        const _ = '/' !== g && g.endsWith('/') ? g.length - 1 : g.length;
        let w,
          k = b === g || (!l && b.startsWith(g) && '/' === b.charAt(_)),
          E = null != S && (S === g || (!l && S.startsWith(g) && '/' === S.charAt(g.length))),
          T = { isActive: k, isPending: E, isTransitioning: y },
          x = k ? r : void 0;
        w =
          'function' === typeof o
            ? o(T)
            : [o, k ? 'active' : null, E ? 'pending' : null, y ? 'transitioning' : null]
                .filter(Boolean)
                .join(' ');
        let R = 'function' === typeof i ? i(T) : i;
        return t.createElement(
          ke,
          he({}, f, {
            'aria-current': x,
            className: w,
            ref: n,
            style: R,
            to: s,
            unstable_viewTransition: c,
          }),
          'function' === typeof d ? d(T) : d
        );
      });
      var Te, xe;
      function Re(e) {
        let n = t.useContext(j);
        return n || u(!1), n;
      }
      (function (e) {
        (e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmit = 'useSubmit'),
          (e.UseSubmitFetcher = 'useSubmitFetcher'),
          (e.UseFetcher = 'useFetcher'),
          (e.useViewTransitionState = 'useViewTransitionState');
      })(Te || (Te = {})),
        (function (e) {
          (e.UseFetcher = 'useFetcher'),
            (e.UseFetchers = 'useFetchers'),
            (e.UseScrollRestoration = 'useScrollRestoration');
        })(xe || (xe = {}));
      var Ce = n(739);
      var Ne = function (e) {
        const t = new Error(e);
        if (void 0 === t.stack)
          try {
            throw t;
          } catch (n) {}
        return t;
      };
      var Ae = function (e) {
        return !!e && 'function' === typeof e.then;
      };
      var Le = function (e, t) {
        if (null != e) return e;
        throw Ne(null !== t && void 0 !== t ? t : 'Got unexpected null or undefined');
      };
      function Pe(e, t, n) {
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
      class Ve {
        getValue() {
          throw Ne('BaseLoadable');
        }
        toPromise() {
          throw Ne('BaseLoadable');
        }
        valueMaybe() {
          throw Ne('BaseLoadable');
        }
        valueOrThrow() {
          throw Ne('Loadable expected value, but in "'.concat(this.state, '" state'));
        }
        promiseMaybe() {
          throw Ne('BaseLoadable');
        }
        promiseOrThrow() {
          throw Ne('Loadable expected promise, but in "'.concat(this.state, '" state'));
        }
        errorMaybe() {
          throw Ne('BaseLoadable');
        }
        errorOrThrow() {
          throw Ne('Loadable expected error, but in "'.concat(this.state, '" state'));
        }
        is(e) {
          return e.state === this.state && e.contents === this.contents;
        }
        map(e) {
          throw Ne('BaseLoadable');
        }
      }
      class De extends Ve {
        constructor(e) {
          super(), Pe(this, 'state', 'hasValue'), Pe(this, 'contents', void 0), (this.contents = e);
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
            return Ae(t) ? Fe(t) : je(t) ? t : Ue(t);
          } catch (t) {
            return Ae(t) ? Fe(t.next(() => this.map(e))) : ze(t);
          }
        }
      }
      class Oe extends Ve {
        constructor(e) {
          super(), Pe(this, 'state', 'hasError'), Pe(this, 'contents', void 0), (this.contents = e);
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
      class Me extends Ve {
        constructor(e) {
          super(), Pe(this, 'state', 'loading'), Pe(this, 'contents', void 0), (this.contents = e);
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
          return Fe(
            this.contents
              .then((t) => {
                const n = e(t);
                if (je(n)) {
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
                if (Ae(t)) return t.then(() => this.map(e).contents);
                throw t;
              })
          );
        }
      }
      function Ue(e) {
        return Object.freeze(new De(e));
      }
      function ze(e) {
        return Object.freeze(new Oe(e));
      }
      function Fe(e) {
        return Object.freeze(new Me(e));
      }
      function Ie() {
        return Object.freeze(new Me(new Promise(() => {})));
      }
      function Be(e) {
        const t = (function (e) {
          return e.every((e) => 'hasValue' === e.state)
            ? Ue(e.map((e) => e.contents))
            : e.some((e) => 'hasError' === e.state)
              ? ze(
                  Le(
                    e.find((e) => 'hasError' === e.state),
                    'Invalid loadable passed to loadableAll'
                  ).contents
                )
              : Fe(Promise.all(e.map((e) => e.contents)));
        })(
          (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t])).map((e) =>
            je(e) ? e : Ae(e) ? Fe(e) : Ue(e)
          )
        );
        return Array.isArray(e)
          ? t
          : t.map((t) =>
              Object.getOwnPropertyNames(e).reduce((e, n, r) => ({ ...e, [n]: t[r] }), {})
            );
      }
      function je(e) {
        return e instanceof Ve;
      }
      const We = {
        of: (e) => (Ae(e) ? Fe(e) : je(e) ? e : Ue(e)),
        error: (e) => ze(e),
        loading: () => Ie(),
        all: Be,
        isLoadable: je,
      };
      var He = {
          loadableWithValue: Ue,
          loadableWithError: ze,
          loadableWithPromise: Fe,
          loadableLoading: Ie,
          loadableAll: Be,
          isLoadable: je,
          RecoilLoadable: We,
        },
        $e = He.loadableWithValue,
        Ke = He.loadableWithError,
        qe = He.loadableWithPromise,
        Qe = He.loadableLoading,
        Ge = He.loadableAll,
        Ye = He.isLoadable,
        Ze = He.RecoilLoadable,
        Xe = Object.freeze({
          __proto__: null,
          loadableWithValue: $e,
          loadableWithError: Ke,
          loadableWithPromise: qe,
          loadableLoading: Qe,
          loadableAll: Ge,
          isLoadable: Ye,
          RecoilLoadable: Ze,
        });
      const Je = {
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
            const a =
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
            if (null == a || '' === a) return;
            if (!['true', 'false'].includes(a))
              throw Ne(
                'process.env.'.concat(e, " value must be 'true', 'false', or empty: ").concat(a)
              );
            t('true' === a);
          })('RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED', (e) => {
            Je.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e;
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
              Je.RECOIL_GKS_ENABLED.add(e);
            });
          }));
      })();
      var et = Je;
      function tt(e) {
        return et.RECOIL_GKS_ENABLED.has(e);
      }
      (tt.setPass = (e) => {
        et.RECOIL_GKS_ENABLED.add(e);
      }),
        (tt.setFail = (e) => {
          et.RECOIL_GKS_ENABLED.delete(e);
        }),
        (tt.clear = () => {
          et.RECOIL_GKS_ENABLED.clear();
        });
      var nt = tt;
      var rt,
        at,
        ot,
        lt = function (e, t) {
          let { error: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return null;
        };
      const it =
          null !== (rt = t.createMutableSource) && void 0 !== rt
            ? rt
            : t.unstable_createMutableSource,
        ut = null !== (at = t.useMutableSource) && void 0 !== at ? at : t.unstable_useMutableSource,
        st =
          null !== (ot = t.useSyncExternalStore) && void 0 !== ot
            ? ot
            : t.unstable_useSyncExternalStore;
      let ct = !1;
      var dt = {
        createMutableSource: it,
        useMutableSource: ut,
        useSyncExternalStore: st,
        currentRendererSupportsUseSyncExternalStore: function () {
          var e;
          const { ReactCurrentDispatcher: n, ReactCurrentOwner: r } =
              t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            a =
              null !=
              (null !== (e = null === n || void 0 === n ? void 0 : n.current) && void 0 !== e
                ? e
                : r.currentDispatcher
              ).useSyncExternalStore;
          return (
            !st ||
              a ||
              ct ||
              ((ct = !0),
              lt('A React renderer without React 18+ API support is being used with React 18+.')),
            a
          );
        },
        reactMode: function () {
          return nt('recoil_transition_support')
            ? { mode: 'TRANSITION_SUPPORT', early: !0, concurrent: !0 }
            : nt('recoil_sync_external_store') && null != st
              ? { mode: 'SYNC_EXTERNAL_STORE', early: !0, concurrent: !1 }
              : nt('recoil_mutable_source') &&
                  null != ut &&
                  'undefined' !== typeof window &&
                  !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
                ? nt('recoil_suppress_rerender_in_callback')
                  ? { mode: 'MUTABLE_SOURCE', early: !0, concurrent: !0 }
                  : { mode: 'MUTABLE_SOURCE', early: !1, concurrent: !1 }
                : nt('recoil_suppress_rerender_in_callback')
                  ? { mode: 'LEGACY', early: !0, concurrent: !1 }
                  : { mode: 'LEGACY', early: !1, concurrent: !1 };
        },
        isFastRefreshEnabled: function () {
          return !1;
        },
      };
      class ft {
        constructor(e) {
          Pe(this, 'key', void 0), (this.key = e);
        }
        toJSON() {
          return { key: this.key };
        }
      }
      class pt extends ft {}
      class ht extends ft {}
      var mt = {
          AbstractRecoilValue: ft,
          RecoilState: pt,
          RecoilValueReadOnly: ht,
          isRecoilValue: function (e) {
            return e instanceof pt || e instanceof ht;
          },
        },
        vt = mt.AbstractRecoilValue,
        yt = mt.RecoilState,
        gt = mt.RecoilValueReadOnly,
        bt = mt.isRecoilValue,
        St = Object.freeze({
          __proto__: null,
          AbstractRecoilValue: vt,
          RecoilState: yt,
          RecoilValueReadOnly: gt,
          isRecoilValue: bt,
        });
      var _t = function (e) {};
      var wt = function (e, t) {
        return (function* () {
          let n = 0;
          for (const r of e) yield t(r, n++);
        })();
      };
      const { isFastRefreshEnabled: kt } = dt;
      class Et {}
      const Tt = new Et(),
        xt = new Map(),
        Rt = new Map();
      class Ct extends Error {}
      const Nt = new Map();
      function At(e) {
        return Nt.get(e);
      }
      var Lt = {
        nodes: xt,
        recoilValues: Rt,
        registerNode: function (e) {
          et.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED &&
            (function (e) {
              if (xt.has(e)) {
                const t = 'Duplicate atom key "'.concat(
                  e,
                  '". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.'
                );
                console.warn(t);
              }
            })(e.key),
            xt.set(e.key, e);
          const t = null == e.set ? new St.RecoilValueReadOnly(e.key) : new St.RecoilState(e.key);
          return Rt.set(e.key, t), t;
        },
        getNode: function (e) {
          const t = xt.get(e);
          if (null == t) throw new Ct('Missing definition for RecoilValue: "'.concat(e, '""'));
          return t;
        },
        getNodeMaybe: function (e) {
          return xt.get(e);
        },
        deleteNodeConfigIfPossible: function (e) {
          var t;
          if (!nt('recoil_memory_managament_2020')) return;
          const n = xt.get(e);
          var r;
          null !== n &&
            void 0 !== n &&
            null !== (t = n.shouldDeleteConfigOnRelease) &&
            void 0 !== t &&
            t.call(n) &&
            (xt.delete(e), null === (r = At(e)) || void 0 === r || r(), Nt.delete(e));
        },
        setConfigDeletionHandler: function (e, t) {
          nt('recoil_memory_managament_2020') && (void 0 === t ? Nt.delete(e) : Nt.set(e, t));
        },
        getConfigDeletionHandler: At,
        recoilValuesForKeys: function (e) {
          return wt(e, (e) => Le(Rt.get(e)));
        },
        NodeMissingError: Ct,
        DefaultValue: Et,
        DEFAULT_VALUE: Tt,
      };
      var Pt = {
        enqueueExecution: function (e, t) {
          t();
        },
      };
      var Vt,
        Dt,
        Ot =
          ((Vt = function (e) {
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
              a = r - 1,
              o = r / 2,
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
                for (var r = 0, a = 0, o = e.length; a < o; ++a)
                  r = ((r << 5) - r + e.charCodeAt(a)) | 0;
                return r;
              }),
              c = function (e, t) {
                return (t >>> e) & a;
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
                var a = r;
                if (!e) {
                  var o = r.length;
                  a = new Array(o);
                  for (var l = 0; l < o; ++l) a[l] = r[l];
                }
                return (a[t] = n), a;
              },
              h = function (e, t, n) {
                var r = n.length - 1,
                  a = 0,
                  o = 0,
                  l = n;
                if (e) a = o = t;
                else for (l = new Array(r); a < t; ) l[o++] = n[a++];
                for (++a; a <= r; ) l[o++] = n[a++];
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
                return { type: 4, edit: e, size: t, children: n, _modify: x };
              },
              _ = function e(t, n, r, a, o, l) {
                if (r === o) return g(t, r, [l, a]);
                var i = c(n, r),
                  u = c(n, o);
                return b(
                  t,
                  d(i) | d(u),
                  i === u ? [e(t, n + 5, r, a, o, l)] : i < u ? [a, l] : [l, a]
                );
              },
              w = function (e, t) {
                return e === t.edit;
              },
              k = function (e, t, n, r, a, o, l) {
                if (t(o, this.key)) {
                  var u = r(this.value);
                  return u === this.value
                    ? this
                    : u === i
                      ? (--l.value, m)
                      : w(e, this)
                        ? ((this.value = u), this)
                        : y(e, a, o, u);
                }
                var s = r();
                return s === i ? this : (++l.value, _(e, n, this.hash, this, a, y(e, a, o, s)));
              },
              E = function (e, t, n, r, a, o, l) {
                if (a === this.hash) {
                  var u = (function (e, t, n, r, a, o, l, u) {
                    for (var s = a.length, c = 0; c < s; ++c) {
                      var d = a[c];
                      if (n(l, d.key)) {
                        var f = d.value,
                          m = o(f);
                        return m === f
                          ? a
                          : m === i
                            ? (--u.value, h(e, c, a))
                            : p(e, c, y(t, r, l, m), a);
                      }
                    }
                    var v = o();
                    return v === i ? a : (++u.value, p(e, s, y(t, r, l, v), a));
                  })(w(e, this), e, t, this.hash, this.children, r, o, l);
                  return u === this.children ? this : u.length > 1 ? g(e, this.hash, u) : u[0];
                }
                var s = r();
                return s === i ? this : (++l.value, _(e, n, this.hash, this, a, y(e, a, o, s)));
              },
              T = function (e, t, n, r, a, l, i) {
                var u = this.mask,
                  s = this.children,
                  y = c(n, a),
                  g = d(y),
                  _ = f(u, g),
                  k = u & g,
                  E = k ? s[_] : m,
                  T = E._modify(e, t, n + 5, r, a, l, i);
                if (E === T) return this;
                var x,
                  R = w(e, this),
                  C = u,
                  N = void 0;
                if (k && v(T)) {
                  if (!(C &= ~g)) return m;
                  if (s.length <= 2 && ((x = s[1 ^ _]) === m || 1 === x.type || 2 === x.type))
                    return s[1 ^ _];
                  N = h(R, _, s);
                } else if (k || v(T)) N = p(R, _, T, s);
                else {
                  if (s.length >= o)
                    return (function (e, t, n, r, a) {
                      for (var o = [], l = r, i = 0, u = 0; l; ++u)
                        1 & l && (o[u] = a[i++]), (l >>>= 1);
                      return (o[t] = n), S(e, i + 1, o);
                    })(e, y, T, u, s);
                  (C |= g),
                    (N = (function (e, t, n, r) {
                      var a = r.length;
                      if (e) {
                        for (var o = a; o >= t; ) r[o--] = r[o];
                        return (r[t] = n), r;
                      }
                      for (var l = 0, i = 0, u = new Array(a + 1); l < t; ) u[i++] = r[l++];
                      for (u[t] = n; l < a; ) u[++i] = r[l++];
                      return u;
                    })(R, _, T, s));
                }
                return R ? ((this.mask = C), (this.children = N), this) : b(e, C, N);
              },
              x = function (e, t, n, r, a, o, i) {
                var u = this.size,
                  s = this.children,
                  d = c(n, a),
                  f = s[d],
                  h = (f || m)._modify(e, t, n + 5, r, a, o, i);
                if (f === h) return this;
                var y = w(e, this),
                  g = void 0;
                if (v(f) && !v(h)) ++u, (g = p(y, d, h, s));
                else if (!v(f) && v(h)) {
                  if (--u <= l)
                    return (function (e, t, n, r) {
                      for (var a = new Array(t - 1), o = 0, l = 0, i = 0, u = r.length; i < u; ++i)
                        if (i !== n) {
                          var s = r[i];
                          s && !v(s) && ((a[o++] = s), (l |= 1 << i));
                        }
                      return b(e, l, a);
                    })(e, u, d, s);
                  g = p(y, d, m, s);
                } else g = p(y, d, h, s);
                return y ? ((this.size = u), (this.children = g), this) : S(e, u, g);
              };
            function R(e, t, n, r, a) {
              (this._editable = e),
                (this._edit = t),
                (this._config = n),
                (this._root = r),
                (this._size = a);
            }
            (m._modify = function (e, t, n, r, a, o, l) {
              var u = r();
              return u === i ? m : (++l.value, y(e, a, o, u));
            }),
              (R.prototype.setTree = function (e, t) {
                return this._editable
                  ? ((this._root = e), (this._size = t), this)
                  : e === this._root
                    ? this
                    : new R(this._editable, this._edit, this._config, e, t);
              });
            var C = (n.tryGetHash = function (e, t, n, r) {
              for (var a = r._root, o = 0, l = r._config.keyEq; ; )
                switch (a.type) {
                  case 1:
                    return l(n, a.key) ? a.value : e;
                  case 2:
                    if (t === a.hash)
                      for (var i = a.children, u = 0, s = i.length; u < s; ++u) {
                        var p = i[u];
                        if (l(n, p.key)) return p.value;
                      }
                    return e;
                  case 3:
                    var h = c(o, t),
                      m = d(h);
                    if (a.mask & m) {
                      (a = a.children[f(a.mask, m)]), (o += 5);
                      break;
                    }
                    return e;
                  case 4:
                    if ((a = a.children[c(o, t)])) {
                      o += 5;
                      break;
                    }
                    return e;
                  default:
                    return e;
                }
            });
            R.prototype.tryGetHash = function (e, t, n) {
              return C(e, t, n, this);
            };
            var N = (n.tryGet = function (e, t, n) {
              return C(e, n._config.hash(t), t, n);
            });
            R.prototype.tryGet = function (e, t) {
              return N(e, t, this);
            };
            var A = (n.getHash = function (e, t, n) {
              return C(void 0, e, t, n);
            });
            (R.prototype.getHash = function (e, t) {
              return A(e, t, this);
            }),
              (n.get = function (e, t) {
                return C(void 0, t._config.hash(e), e, t);
              }),
              (R.prototype.get = function (e, t) {
                return N(t, e, this);
              });
            var L = (n.has = function (e, t, n) {
              return C(i, e, t, n) !== i;
            });
            R.prototype.hasHash = function (e, t) {
              return L(e, t, this);
            };
            var P = (n.has = function (e, t) {
              return L(t._config.hash(e), e, t);
            });
            R.prototype.has = function (e) {
              return P(e, this);
            };
            var V = function (e, t) {
              return e === t;
            };
            (n.make = function (e) {
              return new R(0, 0, { keyEq: (e && e.keyEq) || V, hash: (e && e.hash) || s }, m, 0);
            }),
              (n.empty = n.make());
            var D = (n.isEmpty = function (e) {
              return e && !!v(e._root);
            });
            R.prototype.isEmpty = function () {
              return D(this);
            };
            var O = (n.modifyHash = function (e, t, n, r) {
              var a = { value: r._size },
                o = r._root._modify(r._editable ? r._edit : NaN, r._config.keyEq, 0, e, t, n, a);
              return r.setTree(o, a.value);
            });
            R.prototype.modifyHash = function (e, t, n) {
              return O(n, e, t, this);
            };
            var M = (n.modify = function (e, t, n) {
              return O(e, n._config.hash(t), t, n);
            });
            R.prototype.modify = function (e, t) {
              return M(t, e, this);
            };
            var U = (n.setHash = function (e, t, n, r) {
              return O(u(n), e, t, r);
            });
            R.prototype.setHash = function (e, t, n) {
              return U(e, t, n, this);
            };
            var z = (n.set = function (e, t, n) {
              return U(n._config.hash(e), e, t, n);
            });
            R.prototype.set = function (e, t) {
              return z(e, t, this);
            };
            var F = u(i),
              I = (n.removeHash = function (e, t, n) {
                return O(F, e, t, n);
              });
            R.prototype.removeHash = R.prototype.deleteHash = function (e, t) {
              return I(e, t, this);
            };
            var B = (n.remove = function (e, t) {
              return I(t._config.hash(e), e, t);
            });
            R.prototype.remove = R.prototype.delete = function (e) {
              return B(e, this);
            };
            var j = (n.beginMutation = function (e) {
              return new R(e._editable + 1, e._edit + 1, e._config, e._root, e._size);
            });
            R.prototype.beginMutation = function () {
              return j(this);
            };
            var W = (n.endMutation = function (e) {
              return (e._editable = e._editable && e._editable - 1), e;
            });
            R.prototype.endMutation = function () {
              return W(this);
            };
            var H = (n.mutate = function (e, t) {
              var n = j(t);
              return e(n), W(n);
            });
            R.prototype.mutate = function (e) {
              return H(e, this);
            };
            var $ = function (e) {
                return e && K(e[0], e[1], e[2], e[3], e[4]);
              },
              K = function (e, t, n, r, a) {
                for (; n < e; ) {
                  var o = t[n++];
                  if (o && !v(o)) return q(o, r, [e, t, n, r, a]);
                }
                return $(a);
              },
              q = function (e, t, n) {
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
              Q = { done: !0 };
            function G(e) {
              this.v = e;
            }
            (G.prototype.next = function () {
              if (!this.v) return Q;
              var e = this.v;
              return (this.v = $(e.rest)), e;
            }),
              (G.prototype[Symbol.iterator] = function () {
                return this;
              });
            var Y = function (e, t) {
                return new G(q(e._root, t));
              },
              Z = function (e) {
                return [e.key, e.value];
              },
              X = (n.entries = function (e) {
                return Y(e, Z);
              });
            R.prototype.entries = R.prototype[Symbol.iterator] = function () {
              return X(this);
            };
            var J = function (e) {
                return e.key;
              },
              ee = (n.keys = function (e) {
                return Y(e, J);
              });
            R.prototype.keys = function () {
              return ee(this);
            };
            var te = function (e) {
                return e.value;
              },
              ne =
                (n.values =
                R.prototype.values =
                  function (e) {
                    return Y(e, te);
                  });
            R.prototype.values = function () {
              return ne(this);
            };
            var re = (n.fold = function (e, t, n) {
              var r = n._root;
              if (1 === r.type) return e(t, r.value, r.key);
              for (var a = [r.children], o = void 0; (o = a.pop()); )
                for (var l = 0, i = o.length; l < i; ) {
                  var u = o[l++];
                  u && u.type && (1 === u.type ? (t = e(t, u.value, u.key)) : a.push(u.children));
                }
              return t;
            });
            R.prototype.fold = function (e, t) {
              return re(e, t, this);
            };
            var ae = (n.forEach = function (e, t) {
              return re(
                function (n, r, a) {
                  return e(r, a, t);
                },
                null,
                t
              );
            });
            R.prototype.forEach = function (e) {
              return ae(e, this);
            };
            var oe = (n.count = function (e) {
              return e._size;
            });
            (R.prototype.count = function () {
              return oe(this);
            }),
              Object.defineProperty(R.prototype, 'size', { get: R.prototype.count }),
              e.exports ? (e.exports = n) : ((void 0).hamt = n);
          }),
          Vt((Dt = { exports: {} }), Dt.exports),
          Dt.exports);
      class Mt {
        constructor(e) {
          Pe(this, '_map', void 0),
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
          return zt(this);
        }
        toMap() {
          return new Map(this._map);
        }
      }
      class Ut {
        constructor(e) {
          if ((Pe(this, '_hamt', Ot.empty.beginMutation()), e instanceof Ut)) {
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
          return zt(this);
        }
        toMap() {
          return new Map(this._hamt);
        }
      }
      function zt(e) {
        return nt('recoil_hamt_2020') ? new Ut(e) : new Mt(e);
      }
      var Ft = zt,
        It = Object.freeze({ __proto__: null, persistentMap: Ft });
      var Bt = function (e) {
        const t = new Set();
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
          r[a - 1] = arguments[a];
        e: for (const o of e) {
          for (const e of r) if (e.has(o)) continue e;
          t.add(o);
        }
        return t;
      };
      var jt = function (e, t) {
        const n = new Map();
        return (
          e.forEach((e, r) => {
            n.set(r, t(e, r));
          }),
          n
        );
      };
      function Wt(e, t, n, r) {
        const { nodeDeps: a, nodeToNodeSubscriptions: o } = n,
          l = a.get(e);
        if (l && r && l !== r.nodeDeps.get(e)) return;
        a.set(e, t);
        const i = null == l ? t : Bt(t, l);
        for (const u of i) {
          o.has(u) || o.set(u, new Set());
          Le(o.get(u)).add(e);
        }
        if (l) {
          const n = Bt(l, t);
          for (const t of n) {
            if (!o.has(t)) return;
            const n = Le(o.get(t));
            n.delete(e), 0 === n.size && o.delete(t);
          }
        }
      }
      var Ht = {
        cloneGraph: function (e) {
          return {
            nodeDeps: jt(e.nodeDeps, (e) => new Set(e)),
            nodeToNodeSubscriptions: jt(e.nodeToNodeSubscriptions, (e) => new Set(e)),
          };
        },
        graph: function () {
          return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
        },
        saveDepsToStore: function (e, t, n, r) {
          var a, o, l, i;
          const u = n.getState();
          r !== u.currentTree.version &&
            r !== (null === (a = u.nextTree) || void 0 === a ? void 0 : a.version) &&
            r !== (null === (o = u.previousTree) || void 0 === o ? void 0 : o.version) &&
            lt('Tried to save dependencies to a discarded tree');
          const s = n.getGraph(r);
          if (
            (Wt(e, t, s),
            r === (null === (l = u.previousTree) || void 0 === l ? void 0 : l.version))
          ) {
            Wt(e, t, n.getGraph(u.currentTree.version), s);
          }
          if (
            r === (null === (i = u.previousTree) || void 0 === i ? void 0 : i.version) ||
            r === u.currentTree.version
          ) {
            var c;
            const r = null === (c = u.nextTree) || void 0 === c ? void 0 : c.version;
            if (void 0 !== r) {
              Wt(e, t, n.getGraph(r), s);
            }
          }
        },
      };
      let $t = 0;
      let Kt = 0;
      let qt = 0;
      var Qt = {
        getNextTreeStateVersion: () => $t++,
        getNextStoreID: () => Kt++,
        getNextComponentID: () => qt++,
      };
      const { persistentMap: Gt } = It,
        { graph: Yt } = Ht,
        { getNextTreeStateVersion: Zt } = Qt;
      function Xt() {
        const e = Zt();
        return {
          version: e,
          stateID: e,
          transactionMetadata: {},
          dirtyAtoms: new Set(),
          atomValues: Gt(),
          nonvalidatedAtoms: Gt(),
        };
      }
      var Jt = {
        makeEmptyTreeState: Xt,
        makeEmptyStoreState: function () {
          const e = Xt();
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
            graphsByVersion: new Map().set(e.version, Yt()),
            retention: {
              referenceCounts: new Map(),
              nodesRetainedByZone: new Map(),
              retainablesToCheckForRelease: new Set(),
            },
            nodeCleanupFunctions: new Map(),
          };
        },
        getNextTreeStateVersion: Zt,
      };
      class en {}
      var tn = {
        RetentionZone: en,
        retentionZone: function () {
          return new en();
        },
      };
      var nn = {
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
      var rn = function* (e, t) {
        let n = 0;
        for (const r of e) t(r, n++) && (yield r);
      };
      var an = function (e, t) {
        return new Proxy(e, {
          get: (e, n) => (!(n in e) && n in t && (e[n] = t[n]()), e[n]),
          ownKeys: (e) => Object.keys(e),
        });
      };
      const { getNode: on, getNodeMaybe: ln, recoilValuesForKeys: un } = Lt,
        { RetentionZone: sn } = tn,
        { setByAddingToSet: cn } = nn,
        dn = Object.freeze(new Set());
      class fn extends Error {}
      function pn(e, t, n, r) {
        const a = e.getState();
        if (a.nodeCleanupFunctions.has(n)) return;
        const o = on(n),
          l = (function (e, t, n) {
            if (!nt('recoil_memory_managament_2020')) return () => {};
            const { nodesRetainedByZone: r } = e.getState().retention;
            function a(e) {
              let n = r.get(e);
              n || r.set(e, (n = new Set())), n.add(t);
            }
            if (n instanceof sn) a(n);
            else if (Array.isArray(n)) for (const o of n) a(o);
            return () => {
              if (!nt('recoil_memory_managament_2020')) return;
              const { retention: r } = e.getState();
              function a(e) {
                const n = r.nodesRetainedByZone.get(e);
                null === n || void 0 === n || n.delete(t),
                  n && 0 === n.size && r.nodesRetainedByZone.delete(e);
              }
              if (n instanceof sn) a(n);
              else if (Array.isArray(n)) for (const e of n) a(e);
            };
          })(e, n, o.retainedBy),
          i = o.init(e, t, r);
        a.nodeCleanupFunctions.set(n, () => {
          i(), l();
        });
      }
      function hn(e, t, n) {
        return on(n).peek(e, t);
      }
      function mn(e, t, n) {
        const r = new Set(),
          a = Array.from(n),
          o = e.getGraph(t.version);
        for (let i = a.pop(); i; i = a.pop()) {
          var l;
          r.add(i);
          const e = null !== (l = o.nodeToNodeSubscriptions.get(i)) && void 0 !== l ? l : dn;
          for (const t of e) r.has(t) || a.push(t);
        }
        return r;
      }
      var vn = {
        getNodeLoadable: function (e, t, n) {
          return pn(e, t, n, 'get'), on(n).get(e, t);
        },
        peekNodeLoadable: hn,
        setNodeValue: function (e, t, n, r) {
          const a = on(n);
          if (null == a.set) throw new fn('Attempt to set read-only RecoilValue: '.concat(n));
          const o = a.set;
          return pn(e, t, n, 'set'), o(e, t, r);
        },
        initializeNode: function (e, t, n) {
          pn(e, e.getState().currentTree, t, n);
        },
        cleanUpNode: function (e, t) {
          var n;
          const r = e.getState();
          null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
            r.nodeCleanupFunctions.delete(t);
        },
        setUnvalidatedAtomValue_DEPRECATED: function (e, t, n) {
          var r;
          const a = ln(t);
          return (
            null === a ||
              void 0 === a ||
              null === (r = a.invalidate) ||
              void 0 === r ||
              r.call(a, e),
            {
              ...e,
              atomValues: e.atomValues.clone().delete(t),
              nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
              dirtyAtoms: cn(e.dirtyAtoms, t),
            }
          );
        },
        peekNodeInfo: function (e, t, n) {
          const r = e.getState(),
            a = e.getGraph(t.version),
            o = on(n).nodeType;
          return an(
            { type: o },
            {
              loadable: () => hn(e, t, n),
              isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
              isSet: () => 'selector' !== o && t.atomValues.has(n),
              isModified: () => t.dirtyAtoms.has(n),
              deps: () => {
                var e;
                return un(null !== (e = a.nodeDeps.get(n)) && void 0 !== e ? e : []);
              },
              subscribers: () => {
                var a, o;
                return {
                  nodes: un(rn(mn(e, t, new Set([n])), (e) => e !== n)),
                  components: wt(
                    null !==
                      (a =
                        null === (o = r.nodeToComponentSubscriptions.get(n)) || void 0 === o
                          ? void 0
                          : o.values()) && void 0 !== a
                      ? a
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
        getDownstreamNodes: mn,
      };
      let yn = null;
      var gn = {
        setInvalidateMemoizedSnapshot: function (e) {
          yn = e;
        },
        invalidateMemoizedSnapshot: function () {
          var e;
          null === (e = yn) || void 0 === e || e();
        },
      };
      const { getDownstreamNodes: bn, getNodeLoadable: Sn, setNodeValue: _n } = vn,
        { getNextComponentID: wn } = Qt,
        { getNode: kn, getNodeMaybe: En } = Lt,
        { DefaultValue: Tn } = Lt,
        { reactMode: xn } = dt,
        {
          AbstractRecoilValue: Rn,
          RecoilState: Cn,
          RecoilValueReadOnly: Nn,
          isRecoilValue: An,
        } = St,
        { invalidateMemoizedSnapshot: Ln } = gn;
      function Pn(e, t, n) {
        if ('set' === n.type) {
          const { recoilValue: r, valueOrUpdater: a } = n,
            o = (function (e, t, n, r) {
              let { key: a } = n;
              if ('function' === typeof r) {
                const n = Sn(e, t, a);
                if ('loading' === n.state) {
                  const e = 'Tried to set atom or selector "'.concat(
                    a,
                    '" using an updater function while the current state is pending, this is not currently supported.'
                  );
                  throw (lt(e), Ne(e));
                }
                if ('hasError' === n.state) throw n.contents;
                return r(n.contents);
              }
              return r;
            })(e, t, r, a),
            l = _n(e, t, r.key, o);
          for (const [e, n] of l.entries()) Vn(t, e, n);
        } else if ('setLoadable' === n.type) {
          const {
            recoilValue: { key: e },
            loadable: r,
          } = n;
          Vn(t, e, r);
        } else if ('markModified' === n.type) {
          const {
            recoilValue: { key: e },
          } = n;
          t.dirtyAtoms.add(e);
        } else if ('setUnvalidated' === n.type) {
          var r;
          const {
              recoilValue: { key: e },
              unvalidatedValue: a,
            } = n,
            o = En(e);
          null === o || void 0 === o || null === (r = o.invalidate) || void 0 === r || r.call(o, t),
            t.atomValues.delete(e),
            t.nonvalidatedAtoms.set(e, a),
            t.dirtyAtoms.add(e);
        } else lt('Unknown action '.concat(n.type));
      }
      function Vn(e, t, n) {
        'hasValue' === n.state && n.contents instanceof Tn
          ? e.atomValues.delete(t)
          : e.atomValues.set(t, n),
          e.dirtyAtoms.add(t),
          e.nonvalidatedAtoms.delete(t);
      }
      function Dn(e, t) {
        e.replaceState((n) => {
          const r = Un(n);
          for (const a of t) Pn(e, r, a);
          return zn(e, r), Ln(), r;
        });
      }
      function On(e, t) {
        if (Mn.length) {
          const n = Mn[Mn.length - 1];
          let r = n.get(e);
          r || n.set(e, (r = [])), r.push(t);
        } else Dn(e, [t]);
      }
      const Mn = [];
      function Un(e) {
        return {
          ...e,
          atomValues: e.atomValues.clone(),
          nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
          dirtyAtoms: new Set(e.dirtyAtoms),
        };
      }
      function zn(e, t) {
        const n = bn(e, t, t.dirtyAtoms);
        for (const o of n) {
          var r, a;
          null === (r = En(o)) ||
            void 0 === r ||
            null === (a = r.invalidate) ||
            void 0 === a ||
            a.call(r, t);
        }
      }
      function Fn(e, t, n) {
        On(e, { type: 'set', recoilValue: t, valueOrUpdater: n });
      }
      var In = {
        RecoilValueReadOnly: Nn,
        AbstractRecoilValue: Rn,
        RecoilState: Cn,
        getRecoilValueAsLoadable: function (e, t) {
          let { key: n } = t,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e.getState().currentTree;
          var a, o;
          const l = e.getState();
          r.version !== l.currentTree.version &&
            r.version !== (null === (a = l.nextTree) || void 0 === a ? void 0 : a.version) &&
            r.version !== (null === (o = l.previousTree) || void 0 === o ? void 0 : o.version) &&
            lt('Tried to read from a discarded tree');
          const i = Sn(e, r, n);
          return 'loading' === i.state && i.contents.catch(() => {}), i;
        },
        setRecoilValue: Fn,
        setRecoilValueLoadable: function (e, t, n) {
          if (n instanceof Tn) return Fn(e, t, n);
          On(e, { type: 'setLoadable', recoilValue: t, loadable: n });
        },
        markRecoilValueModified: function (e, t) {
          On(e, { type: 'markModified', recoilValue: t });
        },
        setUnvalidatedRecoilValue: function (e, t, n) {
          On(e, { type: 'setUnvalidated', recoilValue: t, unvalidatedValue: n });
        },
        subscribeToRecoilValue: function (e, t, n) {
          let { key: r } = t,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          const o = wn(),
            l = e.getState();
          l.nodeToComponentSubscriptions.has(r) || l.nodeToComponentSubscriptions.set(r, new Map()),
            Le(l.nodeToComponentSubscriptions.get(r)).set(o, [
              null !== a && void 0 !== a ? a : '<not captured>',
              n,
            ]);
          const i = xn();
          if (i.early && ('LEGACY' === i.mode || 'MUTABLE_SOURCE' === i.mode)) {
            const t = e.getState().nextTree;
            t && t.dirtyAtoms.has(r) && n(t);
          }
          return {
            release: () => {
              const t = e.getState(),
                n = t.nodeToComponentSubscriptions.get(r);
              void 0 !== n && n.has(o)
                ? (n.delete(o), 0 === n.size && t.nodeToComponentSubscriptions.delete(r))
                : lt(
                    'Subscription missing at release time for atom '.concat(
                      r,
                      '. This is a bug in Recoil.'
                    )
                  );
            },
          };
        },
        isRecoilValue: An,
        applyAtomValueWrites: function (e, t) {
          const n = e.clone();
          return (
            t.forEach((e, t) => {
              'hasValue' === e.state && e.contents instanceof Tn ? n.delete(t) : n.set(t, e);
            }),
            n
          );
        },
        batchStart: function () {
          const e = new Map();
          return (
            Mn.push(e),
            () => {
              for (const [t, n] of e) Dn(t, n);
              Mn.pop() !== e && lt('Incorrect order of batch popping');
            }
          );
        },
        writeLoadableToTreeState: Vn,
        invalidateDownstreams: zn,
        copyTreeState: Un,
        refreshRecoilValue: function (e, t) {
          var n;
          const { currentTree: r } = e.getState(),
            a = kn(t.key);
          null === (n = a.clearCache) || void 0 === n || n.call(a, e, r);
        },
      };
      var Bn = function (e, t, n) {
        const r = e.entries();
        let a = r.next();
        for (; !a.done; ) {
          const o = a.value;
          if (t.call(n, o[1], o[0], e)) return !0;
          a = r.next();
        }
        return !1;
      };
      const { cleanUpNode: jn } = vn,
        { deleteNodeConfigIfPossible: Wn, getNode: Hn } = Lt,
        { RetentionZone: $n } = tn,
        Kn = new Set();
      function qn(e, t) {
        const n = e.getState(),
          r = n.currentTree;
        if (n.nextTree)
          return void lt(
            'releaseNodesNowOnCurrentTree should only be called at the end of a batch'
          );
        const a = new Set();
        for (const l of t)
          if (l instanceof $n) for (const e of Gn(n, l)) a.add(e);
          else a.add(l);
        const o = (function (e, t) {
          const n = e.getState(),
            r = n.currentTree,
            a = e.getGraph(r.version),
            o = new Set(),
            l = new Set();
          return i(t), o;
          function i(t) {
            const u = new Set(),
              s = (function (e, t, n, r, a) {
                const o = e.getGraph(t.version),
                  l = [],
                  i = new Set();
                for (; n.size > 0; ) u(Le(n.values().next().value));
                return l;
                function u(e) {
                  if (r.has(e) || a.has(e)) return void n.delete(e);
                  if (i.has(e)) return;
                  const t = o.nodeToNodeSubscriptions.get(e);
                  if (t) for (const n of t) u(n);
                  i.add(e), n.delete(e), l.push(e);
                }
              })(e, r, t, o, l);
            for (const e of s) {
              var c;
              if ('recoilRoot' === Hn(e).retainedBy) {
                l.add(e);
                continue;
              }
              if ((null !== (c = n.retention.referenceCounts.get(e)) && void 0 !== c ? c : 0) > 0) {
                l.add(e);
                continue;
              }
              if (Yn(e).some((e) => n.retention.referenceCounts.get(e))) {
                l.add(e);
                continue;
              }
              const t = a.nodeToNodeSubscriptions.get(e);
              t && Bn(t, (e) => l.has(e)) ? l.add(e) : (o.add(e), u.add(e));
            }
            const d = new Set();
            for (const e of u)
              for (const t of null !== (f = a.nodeDeps.get(e)) && void 0 !== f ? f : Kn) {
                var f;
                o.has(t) || d.add(t);
              }
            d.size && i(d);
          }
        })(e, a);
        for (const l of o) Qn(e, r, l);
      }
      function Qn(e, t, n) {
        if (!nt('recoil_memory_managament_2020')) return;
        jn(e, n);
        const r = e.getState();
        r.knownAtoms.delete(n),
          r.knownSelectors.delete(n),
          r.nodeTransactionSubscriptions.delete(n),
          r.retention.referenceCounts.delete(n);
        const a = Yn(n);
        for (const u of a) {
          var o;
          null === (o = r.retention.nodesRetainedByZone.get(u)) || void 0 === o || o.delete(n);
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
        Wn(n);
      }
      function Gn(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) && void 0 !== n ? n : Kn;
      }
      function Yn(e) {
        const t = Hn(e).retainedBy;
        return void 0 === t || 'components' === t || 'recoilRoot' === t
          ? []
          : t instanceof $n
            ? [t]
            : t;
      }
      function Zn(e, t) {
        if (!nt('recoil_memory_managament_2020')) return;
        e.getState().retention.referenceCounts.delete(t),
          (function (e, t) {
            const n = e.getState();
            n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : qn(e, new Set([t]));
          })(e, t);
      }
      var Xn = {
        SUSPENSE_TIMEOUT_MS: 12e4,
        updateRetainCount: function (e, t, n) {
          var r;
          if (!nt('recoil_memory_managament_2020')) return;
          const a = e.getState().retention.referenceCounts,
            o = (null !== (r = a.get(t)) && void 0 !== r ? r : 0) + n;
          0 === o ? Zn(e, t) : a.set(t, o);
        },
        updateRetainCountToZero: Zn,
        releaseScheduledRetainablesNow: function (e) {
          if (!nt('recoil_memory_managament_2020')) return;
          const t = e.getState();
          qn(e, t.retention.retainablesToCheckForRelease),
            t.retention.retainablesToCheckForRelease.clear();
        },
        retainedByOptionWithDefault: function (e) {
          return void 0 === e ? 'recoilRoot' : e;
        },
      };
      const { unstable_batchedUpdates: Jn } = a;
      var er = { unstable_batchedUpdates: Jn };
      const { unstable_batchedUpdates: tr } = er;
      var nr = { unstable_batchedUpdates: tr };
      const { batchStart: rr } = In,
        { unstable_batchedUpdates: ar } = nr;
      let or = ar || ((e) => e());
      var lr = {
        getBatcher: () => or,
        setBatcher: (e) => {
          or = e;
        },
        batchUpdates: (e) => {
          or(() => {
            let t = () => {};
            try {
              (t = rr()), e();
            } finally {
              t();
            }
          });
        },
      };
      var ir = function* (e) {
        for (const t of e) for (const e of t) yield e;
      };
      const ur = 'undefined' === typeof Window || 'undefined' === typeof window,
        sr = 'undefined' !== typeof navigator && 'ReactNative' === navigator.product;
      var cr = {
        isSSR: ur,
        isReactNative: sr,
        isWindow: (e) => !ur && (e === window || e instanceof Window),
      };
      var dr = {
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
            const a = t(...arguments);
            return n === a || ((n = a), (r = e(...arguments))), r;
          };
        },
        memoizeOneWithArgsHashAndInvalidation: function (e, t) {
          let n, r;
          return [
            function () {
              const a = t(...arguments);
              return n === a || ((n = a), (r = e(...arguments))), r;
            },
            () => {
              n = null;
            },
          ];
        },
      };
      const { batchUpdates: fr } = lr,
        { initializeNode: pr, peekNodeInfo: hr } = vn,
        { graph: mr } = Ht,
        { getNextStoreID: vr } = Qt,
        { DEFAULT_VALUE: yr, recoilValues: gr, recoilValuesForKeys: br } = Lt,
        {
          AbstractRecoilValue: Sr,
          getRecoilValueAsLoadable: _r,
          setRecoilValue: wr,
          setUnvalidatedRecoilValue: kr,
        } = In,
        { updateRetainCount: Er } = Xn,
        { setInvalidateMemoizedSnapshot: Tr } = gn,
        { getNextTreeStateVersion: xr, makeEmptyStoreState: Rr } = Jt,
        { isSSR: Cr } = cr,
        { memoizeOneWithArgsHashAndInvalidation: Nr } = dr;
      class Ar {
        constructor(e, t) {
          Pe(this, '_store', void 0),
            Pe(this, '_refCount', 1),
            Pe(this, 'getLoadable', (e) => (this.checkRefCount_INTERNAL(), _r(this._store, e))),
            Pe(
              this,
              'getPromise',
              (e) => (this.checkRefCount_INTERNAL(), this.getLoadable(e).toPromise())
            ),
            Pe(this, 'getNodes_UNSTABLE', (e) => {
              if (
                (this.checkRefCount_INTERNAL(),
                !0 === (null === e || void 0 === e ? void 0 : e.isModified))
              ) {
                if (!1 === (null === e || void 0 === e ? void 0 : e.isInitialized)) return [];
                const t = this._store.getState().currentTree;
                return br(t.dirtyAtoms);
              }
              const t = this._store.getState().knownAtoms,
                n = this._store.getState().knownSelectors;
              return null == (null === e || void 0 === e ? void 0 : e.isInitialized)
                ? gr.values()
                : !0 === e.isInitialized
                  ? br(ir([t, n]))
                  : rn(gr.values(), (e) => {
                      let { key: r } = e;
                      return !t.has(r) && !n.has(r);
                    });
            }),
            Pe(this, 'getInfo_UNSTABLE', (e) => {
              let { key: t } = e;
              return (
                this.checkRefCount_INTERNAL(),
                hr(this._store, this._store.getState().currentTree, t)
              );
            }),
            Pe(this, 'map', (e) => {
              this.checkRefCount_INTERNAL();
              const t = new Dr(this, fr);
              return e(t), t;
            }),
            Pe(this, 'asyncMap', async (e) => {
              this.checkRefCount_INTERNAL();
              const t = new Dr(this, fr);
              return t.retain(), await e(t), t.autoRelease_INTERNAL(), t;
            }),
            (this._store = {
              storeID: vr(),
              parentStoreID: t,
              getState: () => e,
              replaceState: (t) => {
                e.currentTree = t(e.currentTree);
              },
              getGraph: (t) => {
                const n = e.graphsByVersion;
                if (n.has(t)) return Le(n.get(t));
                const r = mr();
                return n.set(t, r), r;
              },
              subscribeToTransactions: () => ({ release: () => {} }),
              addTransactionMetadata: () => {
                throw Ne('Cannot subscribe to Snapshots');
              },
            });
          for (const n of this._store.getState().knownAtoms)
            pr(this._store, n, 'get'), Er(this._store, n, 1);
          this.autoRelease_INTERNAL();
        }
        retain() {
          this._refCount <= 0 && lt('Attempt to retain() Snapshot that was already released.'),
            this._refCount++;
          let e = !1;
          return () => {
            e || ((e = !0), this._release());
          };
        }
        autoRelease_INTERNAL() {
          Cr || window.setTimeout(() => this._release(), 10);
        }
        _release() {
          if ((this._refCount--, 0 === this._refCount)) {
            if (
              (this._store.getState().nodeCleanupFunctions.forEach((e) => e()),
              this._store.getState().nodeCleanupFunctions.clear(),
              !nt('recoil_memory_managament_2020'))
            )
              return;
          } else this._refCount;
        }
        isRetained() {
          return this._refCount > 0;
        }
        checkRefCount_INTERNAL() {
          nt('recoil_memory_managament_2020') && this._refCount;
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
      function Lr(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const r = e.getState(),
          a = n ? xr() : t.version;
        return {
          currentTree: {
            version: n ? a : t.version,
            stateID: n ? a : t.stateID,
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
          graphsByVersion: new Map().set(a, e.getGraph(t.version)),
          retention: {
            referenceCounts: new Map(),
            nodesRetainedByZone: new Map(),
            retainablesToCheckForRelease: new Set(),
          },
          nodeCleanupFunctions: new Map(
            wt(r.nodeCleanupFunctions.entries(), (e) => {
              let [t] = e;
              return [t, () => {}];
            })
          ),
        };
      }
      const [Pr, Vr] = Nr(
        (e, t) => {
          var n;
          const r = e.getState(),
            a =
              'latest' === t
                ? null !== (n = r.nextTree) && void 0 !== n
                  ? n
                  : r.currentTree
                : Le(r.previousTree);
          return new Ar(Lr(e, a), e.storeID);
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
      Tr(Vr);
      class Dr extends Ar {
        constructor(e, t) {
          super(
            Lr(e.getStore_INTERNAL(), e.getStore_INTERNAL().getState().currentTree, !0),
            e.getStoreID()
          ),
            Pe(this, '_batch', void 0),
            Pe(this, 'set', (e, t) => {
              this.checkRefCount_INTERNAL();
              const n = this.getStore_INTERNAL();
              this._batch(() => {
                Er(n, e.key, 1), wr(this.getStore_INTERNAL(), e, t);
              });
            }),
            Pe(this, 'reset', (e) => {
              this.checkRefCount_INTERNAL();
              const t = this.getStore_INTERNAL();
              this._batch(() => {
                Er(t, e.key, 1), wr(this.getStore_INTERNAL(), e, yr);
              });
            }),
            Pe(this, 'setUnvalidatedAtomValues_DEPRECATED', (e) => {
              this.checkRefCount_INTERNAL();
              const t = this.getStore_INTERNAL();
              fr(() => {
                for (const [n, r] of e.entries()) Er(t, n, 1), kr(t, new Sr(n), r);
              });
            }),
            (this._batch = t);
        }
      }
      var Or = {
          Snapshot: Ar,
          MutableSnapshot: Dr,
          freshSnapshot: function (e) {
            const t = new Ar(Rr());
            return null != e ? t.map(e) : t;
          },
          cloneSnapshot: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'latest';
            const n = Pr(e, t);
            return n.isRetained() ? n : (Vr(), Pr(e, t));
          },
        },
        Mr = Or.Snapshot,
        Ur = Or.MutableSnapshot,
        zr = Or.freshSnapshot,
        Fr = Or.cloneSnapshot,
        Ir = Object.freeze({
          __proto__: null,
          Snapshot: Mr,
          MutableSnapshot: Ur,
          freshSnapshot: zr,
          cloneSnapshot: Fr,
        });
      var Br = function () {
        const e = new Set();
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        for (const a of n) for (const t of a) e.add(t);
        return e;
      };
      const { useRef: jr } = t;
      var Wr = function (e) {
        const t = jr(e);
        return t.current === e && 'function' === typeof e && (t.current = e()), t;
      };
      const { getNextTreeStateVersion: Hr, makeEmptyStoreState: $r } = Jt,
        {
          cleanUpNode: Kr,
          getDownstreamNodes: qr,
          initializeNode: Qr,
          setNodeValue: Gr,
          setUnvalidatedAtomValue_DEPRECATED: Yr,
        } = vn,
        { graph: Zr } = Ht,
        { cloneGraph: Xr } = Ht,
        { getNextStoreID: Jr } = Qt,
        { createMutableSource: ea, reactMode: ta } = dt,
        { applyAtomValueWrites: na } = In,
        { releaseScheduledRetainablesNow: ra } = Xn,
        { freshSnapshot: aa } = Ir,
        {
          useCallback: oa,
          useContext: la,
          useEffect: ia,
          useMemo: ua,
          useRef: sa,
          useState: ca,
        } = t;
      function da() {
        throw Ne('This component must be used inside a <RecoilRoot> component.');
      }
      const fa = Object.freeze({
        storeID: Jr(),
        getState: da,
        replaceState: da,
        getGraph: da,
        subscribeToTransactions: da,
        addTransactionMetadata: da,
      });
      let pa = !1;
      function ha(e) {
        if (pa)
          throw Ne(
            'An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.'
          );
        const t = e.getState();
        if (null === t.nextTree) {
          nt('recoil_memory_managament_2020') &&
            nt('recoil_release_on_cascading_update_killswitch_2021') &&
            t.commitDepth > 0 &&
            ra(e);
          const n = t.currentTree.version,
            r = Hr();
          (t.nextTree = {
            ...t.currentTree,
            version: r,
            stateID: r,
            dirtyAtoms: new Set(),
            transactionMetadata: {},
          }),
            t.graphsByVersion.set(r, Xr(Le(t.graphsByVersion.get(n))));
        }
      }
      const ma = t.createContext({ current: fa }),
        va = () => la(ma),
        ya = t.createContext(null);
      function ga(e, t, n) {
        const r = qr(e, n, n.dirtyAtoms);
        for (const a of r) {
          const e = t.nodeToComponentSubscriptions.get(a);
          if (e) for (const [t, [r, a]] of e) a(n);
        }
      }
      function ba(e) {
        const t = e.getState(),
          n = t.currentTree,
          r = n.dirtyAtoms;
        if (r.size) {
          for (const [n, a] of t.nodeTransactionSubscriptions)
            if (r.has(n)) for (const [t, r] of a) r(e);
          for (const [n, r] of t.transactionSubscriptions) r(e);
          (!ta().early || t.suspendedComponentResolvers.size > 0) &&
            (ga(e, t, n),
            t.suspendedComponentResolvers.forEach((e) => e()),
            t.suspendedComponentResolvers.clear());
        }
        t.queuedComponentCallbacks_DEPRECATED.forEach((e) => e(n)),
          t.queuedComponentCallbacks_DEPRECATED.splice(
            0,
            t.queuedComponentCallbacks_DEPRECATED.length
          );
      }
      function Sa(e) {
        let { setNotifyBatcherOfChange: t } = e;
        const n = va(),
          [, r] = ca([]);
        return (
          t(() => r({})),
          ia(
            () => (
              t(() => r({})),
              () => {
                t(() => {});
              }
            ),
            [t]
          ),
          ia(() => {
            Pt.enqueueExecution('Batcher', () => {
              !(function (e) {
                const t = e.getState();
                t.commitDepth++;
                try {
                  const { nextTree: n } = t;
                  if (null == n) return;
                  (t.previousTree = t.currentTree),
                    (t.currentTree = n),
                    (t.nextTree = null),
                    ba(e),
                    null != t.previousTree
                      ? t.graphsByVersion.delete(t.previousTree.version)
                      : lt('Ended batch with no previous state, which is unexpected', 'recoil'),
                    (t.previousTree = null),
                    nt('recoil_memory_managament_2020') && null == n && ra(e);
                } finally {
                  t.commitDepth--;
                }
              })(n.current);
            });
          }),
          null
        );
      }
      let _a = 0;
      function wa(e) {
        let n,
          { initializeState_DEPRECATED: r, initializeState: a, store_INTERNAL: o, children: l } = e;
        const i = (e) => {
            const t = n.current.graphsByVersion;
            if (t.has(e)) return Le(t.get(e));
            const r = Zr();
            return t.set(e, r), r;
          },
          u = (e, t) => {
            if (null == t) {
              const { transactionSubscriptions: t } = p.current.getState(),
                n = _a++;
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
              const r = _a++;
              return (
                Le(n.get(t)).set(r, e),
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
            ha(p.current);
            for (const t of Object.keys(e))
              Le(p.current.getState().nextTree).transactionMetadata[t] = e[t];
          },
          c = (e) => {
            ha(p.current);
            const t = Le(n.current.nextTree);
            let r;
            try {
              (pa = !0), (r = e(t));
            } finally {
              pa = !1;
            }
            r !== t &&
              ((n.current.nextTree = r),
              ta().early && ga(p.current, n.current, r),
              Le(d.current)());
          },
          d = sa(null),
          f = oa(
            (e) => {
              d.current = e;
            },
            [d]
          ),
          p = Wr(() =>
            null !== o && void 0 !== o
              ? o
              : {
                  storeID: Jr(),
                  getState: () => n.current,
                  replaceState: c,
                  getGraph: i,
                  subscribeToTransactions: u,
                  addTransactionMetadata: s,
                }
          );
        null != o && (p.current = o),
          (n = Wr(() =>
            null != r
              ? (function (e, t) {
                  const n = $r();
                  return (
                    t({
                      set: (t, r) => {
                        const a = n.currentTree,
                          o = Gr(e, a, t.key, r),
                          l = new Set(o.keys()),
                          i = a.nonvalidatedAtoms.clone();
                        for (const e of l) i.delete(e);
                        n.currentTree = {
                          ...a,
                          dirtyAtoms: Br(a.dirtyAtoms, l),
                          atomValues: na(a.atomValues, o),
                          nonvalidatedAtoms: i,
                        };
                      },
                      setUnvalidatedAtomValues: (e) => {
                        e.forEach((e, t) => {
                          n.currentTree = Yr(n.currentTree, t, e);
                        });
                      },
                    }),
                    n
                  );
                })(p.current, r)
              : null != a
                ? (function (e) {
                    const t = aa(e),
                      n = t.getStore_INTERNAL().getState();
                    return (
                      t.retain(),
                      n.nodeCleanupFunctions.forEach((e) => e()),
                      n.nodeCleanupFunctions.clear(),
                      n
                    );
                  })(a)
                : $r()
          ));
        const h = ua(
          () =>
            null === ea || void 0 === ea ? void 0 : ea(n, () => n.current.currentTree.version),
          [n]
        );
        return (
          ia(() => {
            const e = p.current;
            for (const t of new Set(e.getState().knownAtoms)) Qr(e, t, 'get');
            return () => {
              for (const t of e.getState().knownAtoms) Kr(e, t);
            };
          }, [p]),
          t.createElement(
            ma.Provider,
            { value: p },
            t.createElement(
              ya.Provider,
              { value: h },
              t.createElement(Sa, { setNotifyBatcherOfChange: f }),
              l
            )
          )
        );
      }
      var ka = {
        RecoilRoot: function (e) {
          const { override: n, ...r } = e,
            a = va();
          return !1 === n && a.current !== fa ? e.children : t.createElement(wa, r);
        },
        useStoreRef: va,
        useRecoilMutableSource: function () {
          const e = la(ya);
          return (
            null == e &&
              _t(
                'Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks.'
              ),
            e
          );
        },
        useRecoilStoreID: function () {
          return va().current.storeID;
        },
        notifyComponents_FOR_TESTING: ga,
        sendEndOfBatchNotifications_FOR_TESTING: ba,
      };
      var Ea = function (e, t) {
        if (e === t) return !0;
        if (e.length !== t.length) return !1;
        for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      };
      const { useEffect: Ta, useRef: xa } = t;
      var Ra = function (e) {
        const t = xa();
        return (
          Ta(() => {
            t.current = e;
          }),
          t.current
        );
      };
      const { useStoreRef: Ca } = ka,
        { SUSPENSE_TIMEOUT_MS: Na } = Xn,
        { updateRetainCount: Aa } = Xn,
        { RetentionZone: La } = tn,
        { useEffect: Pa, useRef: Va } = t,
        { isSSR: Da } = cr;
      var Oa = function (e) {
        if (nt('recoil_memory_managament_2020'))
          return (function (e) {
            const t = Array.isArray(e) ? e : [e],
              n = t.map((e) => (e instanceof La ? e : e.key)),
              r = Ca();
            Pa(() => {
              if (!nt('recoil_memory_managament_2020')) return;
              const e = r.current;
              if (a.current && !Da) window.clearTimeout(a.current), (a.current = null);
              else for (const t of n) Aa(e, t, 1);
              return () => {
                for (const t of n) Aa(e, t, -1);
              };
            }, [r, ...n]);
            const a = Va(),
              o = Ra(n);
            if (!Da && (void 0 === o || !Ea(o, n))) {
              const e = r.current;
              for (const t of n) Aa(e, t, 1);
              if (o) for (const t of o) Aa(e, t, -1);
              a.current && window.clearTimeout(a.current),
                (a.current = window.setTimeout(() => {
                  a.current = null;
                  for (const t of n) Aa(e, t, -1);
                }, Na));
            }
          })(e);
      };
      var Ma = function () {
        return '<component name not available>';
      };
      const { batchUpdates: Ua } = lr,
        { DEFAULT_VALUE: za } = Lt,
        {
          currentRendererSupportsUseSyncExternalStore: Fa,
          reactMode: Ia,
          useMutableSource: Ba,
          useSyncExternalStore: ja,
        } = dt,
        { useRecoilMutableSource: Wa, useStoreRef: Ha } = ka,
        { isRecoilValue: $a } = St,
        {
          AbstractRecoilValue: Ka,
          getRecoilValueAsLoadable: qa,
          setRecoilValue: Qa,
          setUnvalidatedRecoilValue: Ga,
          subscribeToRecoilValue: Ya,
        } = In,
        { useCallback: Za, useEffect: Xa, useMemo: Ja, useRef: eo, useState: to } = t,
        { setByAddingToSet: no } = nn,
        { isSSR: ro } = cr;
      function ao(e, t, n) {
        if ('hasValue' === e.state) return e.contents;
        if ('loading' === e.state) {
          throw new Promise((t) => {
            const r = n.current.getState().suspendedComponentResolvers;
            r.add(t),
              ro &&
                Ae(e.contents) &&
                e.contents.finally(() => {
                  r.delete(t);
                });
          });
        }
        throw 'hasError' === e.state
          ? e.contents
          : Ne('Invalid value of loadable atom "'.concat(t.key, '"'));
      }
      function oo(e) {
        const t = Ha(),
          n = Ma(),
          r = Za(() => {
            var n;
            const r = t.current,
              a = r.getState(),
              o = Ia().early && null !== (n = a.nextTree) && void 0 !== n ? n : a.currentTree;
            return { loadable: qa(r, e, o), key: e.key };
          }, [t, e]),
          a = Za((e) => {
            let t;
            return () => {
              var n, r;
              const a = e();
              return null !== (n = t) &&
                void 0 !== n &&
                n.loadable.is(a.loadable) &&
                (null === (r = t) || void 0 === r ? void 0 : r.key) === a.key
                ? t
                : ((t = a), a);
            };
          }, []),
          o = Ja(() => a(r), [r, a]),
          l = Za(
            (r) => {
              const a = t.current;
              return Ya(a, e, r, n).release;
            },
            [t, e, n]
          );
        return ja(l, o, o).loadable;
      }
      function lo(e) {
        const t = Ha(),
          n = Za(() => {
            var n;
            const r = t.current,
              a = r.getState(),
              o = Ia().early && null !== (n = a.nextTree) && void 0 !== n ? n : a.currentTree;
            return qa(r, e, o);
          }, [t, e]),
          r = Za(() => n(), [n]),
          a = Ma(),
          o = Za(
            (r, o) => {
              const l = t.current;
              return Ya(
                l,
                e,
                () => {
                  if (!nt('recoil_suppress_rerender_in_callback')) return o();
                  const e = n();
                  u.current.is(e) || o(), (u.current = e);
                },
                a
              ).release;
            },
            [t, e, a, n]
          ),
          l = Wa();
        if (null == l)
          throw Ne(
            'Recoil hooks must be used in components contained within a <RecoilRoot> component.'
          );
        const i = Ba(l, r, o),
          u = eo(i);
        return (
          Xa(() => {
            u.current = i;
          }),
          i
        );
      }
      function io(e) {
        const t = Ha(),
          n = Ma(),
          r = Za(() => {
            var n;
            const r = t.current,
              a = r.getState(),
              o = Ia().early && null !== (n = a.nextTree) && void 0 !== n ? n : a.currentTree;
            return qa(r, e, o);
          }, [t, e]),
          a = Za(() => ({ loadable: r(), key: e.key }), [r, e.key]),
          o = Za(
            (e) => {
              const t = a();
              return e.loadable.is(t.loadable) && e.key === t.key ? e : t;
            },
            [a]
          );
        Xa(() => {
          const r = Ya(
            t.current,
            e,
            (e) => {
              i(o);
            },
            n
          );
          return i(o), r.release;
        }, [n, e, t, o]);
        const [l, i] = to(a);
        return l.key !== e.key ? a().loadable : l.loadable;
      }
      function uo(e) {
        const t = Ha(),
          [, n] = to([]),
          r = Ma(),
          a = Za(() => {
            var n;
            const r = t.current,
              a = r.getState(),
              o = Ia().early && null !== (n = a.nextTree) && void 0 !== n ? n : a.currentTree;
            return qa(r, e, o);
          }, [t, e]),
          o = a(),
          l = eo(o);
        return (
          Xa(() => {
            l.current = o;
          }),
          Xa(() => {
            const o = t.current,
              i = o.getState(),
              u = Ya(
                o,
                e,
                (e) => {
                  var t;
                  if (!nt('recoil_suppress_rerender_in_callback')) return n([]);
                  const r = a();
                  (null !== (t = l.current) && void 0 !== t && t.is(r)) || n(r), (l.current = r);
                },
                r
              );
            if (i.nextTree)
              o.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                (l.current = null), n([]);
              });
            else {
              var s;
              if (!nt('recoil_suppress_rerender_in_callback')) return n([]);
              const e = a();
              (null !== (s = l.current) && void 0 !== s && s.is(e)) || n(e), (l.current = e);
            }
            return u.release;
          }, [r, a, e, t]),
          o
        );
      }
      function so(e) {
        return (
          nt('recoil_memory_managament_2020') && Oa(e),
          {
            TRANSITION_SUPPORT: io,
            SYNC_EXTERNAL_STORE: Fa() ? oo : io,
            MUTABLE_SOURCE: lo,
            LEGACY: uo,
          }[Ia().mode](e)
        );
      }
      function co(e) {
        const t = Ha();
        return ao(so(e), e, t);
      }
      function fo(e) {
        const t = Ha();
        return Za(
          (n) => {
            Qa(t.current, e, n);
          },
          [t, e]
        );
      }
      function po(e) {
        return nt('recoil_memory_managament_2020') && Oa(e), io(e);
      }
      function ho(e) {
        const t = Ha();
        return ao(po(e), e, t);
      }
      var mo = {
        recoilComponentGetRecoilValueCount_FOR_TESTING: { current: 0 },
        useRecoilInterface: function () {
          const e = Ma(),
            t = Ha(),
            [, n] = to([]),
            r = eo(new Set());
          r.current = new Set();
          const a = eo(new Set()),
            o = eo(new Map()),
            l = Za(
              (e) => {
                const t = o.current.get(e);
                t && (t.release(), o.current.delete(e));
              },
              [o]
            ),
            i = Za((e, t) => {
              o.current.has(t) && n([]);
            }, []);
          return (
            Xa(() => {
              const n = t.current;
              Bt(r.current, a.current).forEach((t) => {
                if (o.current.has(t))
                  return void _t('Double subscription to RecoilValue "'.concat(t, '"'));
                const r = Ya(n, new Ka(t), (e) => i(e, t), e);
                o.current.set(t, r);
                n.getState().nextTree
                  ? n.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                      i(n.getState(), t);
                    })
                  : i(n.getState(), t);
              }),
                Bt(a.current, r.current).forEach((e) => {
                  l(e);
                }),
                (a.current = r.current);
            }),
            Xa(() => {
              const n = o.current;
              return (
                Bt(r.current, new Set(n.keys())).forEach((r) => {
                  const a = Ya(t.current, new Ka(r), (e) => i(e, r), e);
                  n.set(r, a);
                }),
                () => n.forEach((e, t) => l(t))
              );
            }, [e, t, l, i]),
            Ja(() => {
              function e(e) {
                return (n) => {
                  Qa(t.current, e, n);
                };
              }
              function n(e) {
                var n;
                r.current.has(e.key) || (r.current = no(r.current, e.key));
                const a = t.current.getState();
                return qa(
                  t.current,
                  e,
                  Ia().early && null !== (n = a.nextTree) && void 0 !== n ? n : a.currentTree
                );
              }
              function a(e) {
                return ao(n(e), e, t);
              }
              return {
                getRecoilValue: a,
                getRecoilValueLoadable: n,
                getRecoilState: function (t) {
                  return [a(t), e(t)];
                },
                getRecoilStateLoadable: function (t) {
                  return [n(t), e(t)];
                },
                getSetRecoilState: e,
                getResetRecoilState: function (e) {
                  return () => Qa(t.current, e, za);
                },
              };
            }, [r, t])
          );
        },
        useRecoilState: function (e) {
          return [co(e), fo(e)];
        },
        useRecoilStateLoadable: function (e) {
          return [so(e), fo(e)];
        },
        useRecoilValue: co,
        useRecoilValueLoadable: so,
        useResetRecoilState: function (e) {
          const t = Ha();
          return Za(() => {
            Qa(t.current, e, za);
          }, [t, e]);
        },
        useSetRecoilState: fo,
        useSetUnvalidatedAtomValues: function () {
          const e = Ha();
          return function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Ua(() => {
              e.current.addTransactionMetadata(n), t.forEach((t, n) => Ga(e.current, new Ka(n), t));
            });
          };
        },
        useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: po,
        useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: ho,
        useRecoilState_TRANSITION_SUPPORT_UNSTABLE: function (e) {
          return [ho(e), fo(e)];
        },
      };
      var vo = function (e, t) {
        const n = new Map();
        for (const [r, a] of e) t(a, r) && n.set(r, a);
        return n;
      };
      var yo = function (e, t) {
        const n = new Set();
        for (const r of e) t(r) && n.add(r);
        return n;
      };
      var go = function () {
        const e = new Map();
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        for (let a = 0; a < n.length; a++) {
          const t = n[a].keys();
          let r;
          for (; !(r = t.next()).done; ) e.set(r.value, n[a].get(r.value));
        }
        return e;
      };
      const { batchUpdates: bo } = lr,
        { DEFAULT_VALUE: So, getNode: _o, nodes: wo } = Lt,
        { useStoreRef: ko } = ka,
        { AbstractRecoilValue: Eo, setRecoilValueLoadable: To } = In,
        { SUSPENSE_TIMEOUT_MS: xo } = Xn,
        { cloneSnapshot: Ro } = Ir,
        { useCallback: Co, useEffect: No, useRef: Ao, useState: Lo } = t,
        { isSSR: Po } = cr;
      function Vo(e) {
        const t = ko();
        No(() => t.current.subscribeToTransactions(e).release, [e, t]);
      }
      function Do(e) {
        const t = e.atomValues.toMap(),
          n = jt(
            vo(t, (e, t) => {
              const n = _o(t).persistence_UNSTABLE;
              return null != n && 'none' !== n.type && 'hasValue' === e.state;
            }),
            (e) => e.contents
          );
        return go(e.nonvalidatedAtoms.toMap(), n);
      }
      function Oo(e, t) {
        var n;
        const r = e.getState(),
          a = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
          o = t.getStore_INTERNAL().getState().currentTree;
        bo(() => {
          const n = new Set();
          for (const e of [a.atomValues.keys(), o.atomValues.keys()])
            for (const t of e) {
              var r, l;
              (null === (r = a.atomValues.get(t)) || void 0 === r ? void 0 : r.contents) !==
                (null === (l = o.atomValues.get(t)) || void 0 === l ? void 0 : l.contents) &&
                _o(t).shouldRestoreFromSnapshots &&
                n.add(t);
            }
          n.forEach((t) => {
            To(e, new Eo(t), o.atomValues.has(t) ? Le(o.atomValues.get(t)) : So);
          }),
            e.replaceState((e) => ({ ...e, stateID: t.getID() }));
        });
      }
      var Mo = {
        useRecoilSnapshot: function () {
          const e = ko(),
            [t, n] = Lo(() => Ro(e.current)),
            r = Ra(t),
            a = Ao(),
            o = Ao();
          if (
            (Vo(Co((e) => n(Ro(e)), [])),
            No(() => {
              const e = t.retain();
              var n;
              a.current &&
                !Po &&
                (window.clearTimeout(a.current),
                (a.current = null),
                null === (n = o.current) || void 0 === n || n.call(o),
                (o.current = null));
              return () => {
                window.setTimeout(e, 10);
              };
            }, [t]),
            r !== t && !Po)
          ) {
            var l;
            if (a.current)
              window.clearTimeout(a.current),
                (a.current = null),
                null === (l = o.current) || void 0 === l || l.call(o),
                (o.current = null);
            (o.current = t.retain()),
              (a.current = window.setTimeout(() => {
                var e;
                (a.current = null),
                  null === (e = o.current) || void 0 === e || e.call(o),
                  (o.current = null);
              }, xo));
          }
          return t;
        },
        gotoSnapshot: Oo,
        useGotoRecoilSnapshot: function () {
          const e = ko();
          return Co((t) => Oo(e.current, t), [e]);
        },
        useRecoilTransactionObserver: function (e) {
          Vo(
            Co(
              (t) => {
                const n = Ro(t, 'latest'),
                  r = Ro(t, 'previous');
                e({ snapshot: n, previousSnapshot: r });
              },
              [e]
            )
          );
        },
        useTransactionObservation_DEPRECATED: function (e) {
          Vo(
            Co(
              (t) => {
                let n = t.getState().previousTree;
                const r = t.getState().currentTree;
                n ||
                  (lt(
                    'Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil'
                  ),
                  (n = t.getState().currentTree));
                const a = Do(r),
                  o = Do(n),
                  l = jt(wo, (e) => {
                    var t, n, r, a;
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
                              null === (a = e.persistence_UNSTABLE) || void 0 === a
                                ? void 0
                                : a.backButton) &&
                          void 0 !== r &&
                          r,
                      },
                    };
                  }),
                  i = yo(r.dirtyAtoms, (e) => a.has(e) || o.has(e));
                e({
                  atomValues: a,
                  previousAtomValues: o,
                  atomInfo: l,
                  modifiedAtoms: i,
                  transactionMetadata: { ...r.transactionMetadata },
                });
              },
              [e]
            )
          );
        },
        useTransactionSubscription_DEPRECATED: Vo,
      };
      const { peekNodeInfo: Uo } = vn,
        { useStoreRef: zo } = ka;
      var Fo = function () {
        const e = zo();
        return (t) => {
          let { key: n } = t;
          return Uo(e.current, e.current.getState().currentTree, n);
        };
      };
      const { reactMode: Io } = dt,
        { RecoilRoot: Bo, useStoreRef: jo } = ka,
        { useMemo: Wo } = t;
      var Ho = function () {
        'MUTABLE_SOURCE' === Io().mode &&
          console.warn(
            'Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.'
          );
        const e = jo().current;
        return Wo(
          () =>
            function (n) {
              let { children: r } = n;
              return t.createElement(Bo, { store_INTERNAL: e }, r);
            },
          [e]
        );
      };
      const { loadableWithValue: $o } = Xe,
        { initializeNode: Ko } = vn,
        { DEFAULT_VALUE: qo, getNode: Qo } = Lt,
        {
          copyTreeState: Go,
          getRecoilValueAsLoadable: Yo,
          invalidateDownstreams: Zo,
          writeLoadableToTreeState: Xo,
        } = In;
      function Jo(e) {
        return 'atom' === Qo(e.key).nodeType;
      }
      class el {
        constructor(e, t) {
          Pe(this, '_store', void 0),
            Pe(this, '_treeState', void 0),
            Pe(this, '_changes', void 0),
            Pe(this, 'get', (e) => {
              if (this._changes.has(e.key)) return this._changes.get(e.key);
              if (!Jo(e)) throw Ne('Reading selectors within atomicUpdate is not supported');
              const t = Yo(this._store, e, this._treeState);
              if ('hasValue' === t.state) return t.contents;
              throw 'hasError' === t.state
                ? t.contents
                : Ne(
                    'Expected Recoil atom '.concat(
                      e.key,
                      ' to have a value, but it is in a loading state.'
                    )
                  );
            }),
            Pe(this, 'set', (e, t) => {
              if (!Jo(e)) throw Ne('Setting selectors within atomicUpdate is not supported');
              if ('function' === typeof t) {
                const n = this.get(e);
                this._changes.set(e.key, t(n));
              } else Ko(this._store, e.key, 'set'), this._changes.set(e.key, t);
            }),
            Pe(this, 'reset', (e) => {
              this.set(e, qo);
            }),
            (this._store = e),
            (this._treeState = t),
            (this._changes = new Map());
        }
        newTreeState_INTERNAL() {
          if (0 === this._changes.size) return this._treeState;
          const e = Go(this._treeState);
          for (const [t, n] of this._changes) Xo(e, t, $o(n));
          return Zo(this._store, e), e;
        }
      }
      var tl = function (e) {
          return (t) => {
            e.replaceState((n) => {
              const r = new el(e, n);
              return t(r), r.newTreeState_INTERNAL();
            });
          };
        },
        nl = tl,
        rl = Object.freeze({ __proto__: null, atomicUpdater: nl });
      var al = function (e, t) {
        if (!e) throw new Error(t);
      };
      const { atomicUpdater: ol } = rl,
        { batchUpdates: ll } = lr,
        { DEFAULT_VALUE: il } = Lt,
        { useStoreRef: ul } = ka,
        { refreshRecoilValue: sl, setRecoilValue: cl } = In,
        { cloneSnapshot: dl } = Ir,
        { gotoSnapshot: fl } = Mo,
        { useCallback: pl } = t;
      class hl {}
      const ml = new hl();
      function vl(e, t, n, r) {
        let a,
          o = ml;
        var l;
        (ll(() => {
          const l =
            'useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.';
          if ('function' !== typeof t) throw Ne(l);
          const i = an(
              {
                ...(null !== r && void 0 !== r ? r : {}),
                set: (t, n) => cl(e, t, n),
                reset: (t) => cl(e, t, il),
                refresh: (t) => sl(e, t),
                gotoSnapshot: (t) => fl(e, t),
                transact_UNSTABLE: (t) => ol(e)(t),
              },
              {
                snapshot: () => {
                  const t = dl(e);
                  return (a = t.retain()), t;
                },
              }
            ),
            u = t(i);
          if ('function' !== typeof u) throw Ne(l);
          o = u(...n);
        }),
        o instanceof hl && al(!1),
        Ae(o))
          ? (o = o.finally(() => {
              var e;
              null === (e = a) || void 0 === e || e();
            }))
          : null === (l = a) || void 0 === l || l();
        return o;
      }
      var yl = {
        recoilCallback: vl,
        useRecoilCallback: function (e, t) {
          const n = ul();
          return pl(
            function () {
              for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                r[a] = arguments[a];
              return vl(n.current, e, r);
            },
            null != t ? [...t, n] : void 0
          );
        },
      };
      const { useStoreRef: gl } = ka,
        { refreshRecoilValue: bl } = In,
        { useCallback: Sl } = t;
      var _l = function (e) {
        const t = gl();
        return Sl(() => {
          const n = t.current;
          bl(n, e);
        }, [e, t]);
      };
      const { atomicUpdater: wl } = rl,
        { useStoreRef: kl } = ka,
        { useMemo: El } = t;
      var Tl = function (e, t) {
        const n = kl();
        return El(
          () =>
            function () {
              for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                r[a] = arguments[a];
              wl(n.current)((t) => {
                e(t)(...r);
              });
            },
          null != t ? [...t, n] : void 0
        );
      };
      var xl = class {
          constructor(e) {
            Pe(this, 'value', void 0), (this.value = e);
          }
        },
        Rl = Object.freeze({ __proto__: null, WrappedValue: xl });
      const { isFastRefreshEnabled: Cl } = dt;
      class Nl extends Error {}
      var Al = class {
          constructor(e) {
            var t, n, r;
            Pe(this, '_name', void 0),
              Pe(this, '_numLeafs', void 0),
              Pe(this, '_root', void 0),
              Pe(this, '_onHit', void 0),
              Pe(this, '_onSet', void 0),
              Pe(this, '_mapNodeValue', void 0),
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
              var r, a, o, l;
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
              null === (a = i) || void 0 === a || a.branches.set(u, p),
                (this._root = null !== (o = this._root) && void 0 !== o ? o : p),
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
            } catch (a) {
              if (!(a instanceof Nl)) throw a;
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
              var a;
              if ((n.branches.delete(r), n === t))
                return (
                  0 === n.branches.size
                    ? ((this._root = null), (this._numLeafs = 0))
                    : this._numLeafs--,
                  !0
                );
              if (n.branches.size > 0) break;
              (r = null === (a = n) || void 0 === a ? void 0 : a.branchKey), (n = n.parent);
            }
            for (; n !== t; n = n.parent) if (null == n) return !1;
            return this._numLeafs--, !0;
          }
          clear() {
            (this._numLeafs = 0), (this._root = null);
          }
          invalidCacheError() {
            const e = Cl()
              ? 'Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.'
              : 'Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.';
            throw (lt(e + (null != this._name ? ' - '.concat(this._name) : '')), new Nl());
          }
        },
        Ll = Al,
        Pl = Object.freeze({ __proto__: null, TreeCache: Ll });
      var Vl = class {
          constructor(e) {
            var t;
            Pe(this, '_maxSize', void 0),
              Pe(this, '_size', void 0),
              Pe(this, '_head', void 0),
              Pe(this, '_tail', void 0),
              Pe(this, '_map', void 0),
              Pe(this, '_keyMapper', void 0),
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
              a = { key: e, right: r, left: null, value: t };
            r ? (r.left = a) : (this._tail = a),
              this._map.set(n, a),
              (this._head = a),
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
            const n = Le(this._map.get(t)),
              r = n.right,
              a = n.left;
            r && (r.left = n.left),
              a && (a.right = n.right),
              n === this.head() && (this._head = r),
              n === this.tail() && (this._tail = a),
              this._map.delete(t),
              this._size--;
          }
          clear() {
            (this._size = 0), (this._head = null), (this._tail = null), (this._map = new Map());
          }
        },
        Dl = Object.freeze({ __proto__: null, LRUCache: Vl });
      const { LRUCache: Ol } = Dl,
        { TreeCache: Ml } = Pl;
      var Ul = function (e) {
        let { name: t, maxSize: n, mapNodeValue: r = (e) => e } = e;
        const a = new Ol({ maxSize: n }),
          o = new Ml({
            name: t,
            mapNodeValue: r,
            onHit: (e) => {
              a.set(e, !0);
            },
            onSet: (e) => {
              const t = a.tail();
              a.set(e, !0), t && o.size() > n && o.delete(t.key);
            },
          });
        return o;
      };
      function zl(e, t, n) {
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
              throw Ne('Attempt to serialize function in a Recoil cache key');
            return '__FUNCTION('.concat(e.name, ')__');
        }
        if (null === e) return 'null';
        var r;
        if ('object' !== typeof e) return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : '';
        if (Ae(e)) return '__PROMISE__';
        if (Array.isArray(e))
          return '['.concat(
            e.map((e, n) => zl(e, t, n.toString())),
            ']'
          );
        if ('function' === typeof e.toJSON) return zl(e.toJSON(n), t, n);
        if (e instanceof Map) {
          const r = {};
          for (const [n, a] of e) r['string' === typeof n ? n : zl(n, t)] = a;
          return zl(r, t, n);
        }
        return e instanceof Set
          ? zl(
              Array.from(e).sort((e, n) => zl(e, t).localeCompare(zl(n, t))),
              t,
              n
            )
          : void 0 !== Symbol &&
              null != e[Symbol.iterator] &&
              'function' === typeof e[Symbol.iterator]
            ? zl(Array.from(e), t, n)
            : '{'.concat(
                Object.keys(e)
                  .filter((t) => void 0 !== e[t])
                  .sort()
                  .map((n) => ''.concat(zl(n, t), ':').concat(zl(e[n], t, n)))
                  .join(','),
                '}'
              );
      }
      var Fl = function (e) {
        return zl(
          e,
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { allowFunctions: !1 }
        );
      };
      const { TreeCache: Il } = Pl,
        Bl = { equality: 'reference', eviction: 'keep-all', maxSize: 1 / 0 };
      var jl = function () {
        let {
            equality: e = Bl.equality,
            eviction: t = Bl.eviction,
            maxSize: n = Bl.maxSize,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bl,
          r = arguments.length > 1 ? arguments[1] : void 0;
        const a = (function (e) {
          switch (e) {
            case 'reference':
              return (e) => e;
            case 'value':
              return (e) => Fl(e);
          }
          throw Ne('Unrecognized equality policy '.concat(e));
        })(e);
        return (function (e, t, n, r) {
          switch (e) {
            case 'keep-all':
              return new Il({ name: r, mapNodeValue: n });
            case 'lru':
              return Ul({ name: r, maxSize: Le(t), mapNodeValue: n });
            case 'most-recent':
              return Ul({ name: r, maxSize: 1, mapNodeValue: n });
          }
          throw Ne('Unrecognized eviction policy '.concat(e));
        })(t, n, a, r);
      };
      const { isReactNative: Wl, isWindow: Hl } = cr;
      var $l = {
        startPerfBlock: function (e) {
          return () => null;
        },
      };
      const {
          isLoadable: Kl,
          loadableWithError: ql,
          loadableWithPromise: Ql,
          loadableWithValue: Gl,
        } = Xe,
        { WrappedValue: Yl } = Rl,
        { getNodeLoadable: Zl, peekNodeLoadable: Xl, setNodeValue: Jl } = vn,
        { saveDepsToStore: ei } = Ht,
        { DEFAULT_VALUE: ti, getConfigDeletionHandler: ni, getNode: ri, registerNode: ai } = Lt,
        { isRecoilValue: oi } = St,
        { markRecoilValueModified: li } = In,
        { retainedByOptionWithDefault: ii } = Xn,
        { recoilCallback: ui } = yl,
        { startPerfBlock: si } = $l;
      class ci {}
      const di = new ci(),
        fi = [],
        pi = new Map(),
        hi = (() => {
          let e = 0;
          return () => e++;
        })();
      function mi(e) {
        let t = null;
        const { key: n, get: r, cachePolicy_UNSTABLE: a } = e,
          o = null != e.set ? e.set : void 0;
        const l = new Set(),
          i = jl(
            null !== a && void 0 !== a ? a : { equality: 'reference', eviction: 'keep-all' },
            n
          ),
          u = ii(e.retainedBy_UNSTABLE),
          s = new Map();
        let c = 0;
        function d() {
          return !nt('recoil_memory_managament_2020') || c > 0;
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
          return void 0 !== ni(n) && !d();
        }
        function h(e, t, n, r, a) {
          R(t, r, a), m(e, n);
        }
        function m(e, t) {
          x(e, t) && T(e), v(t, !0);
        }
        function v(e, n) {
          const r = pi.get(e);
          if (null != r) {
            for (const e of r) li(e, Le(t));
            n && pi.delete(e);
          }
        }
        function y(e, t) {
          let n = pi.get(t);
          null == n && pi.set(t, (n = new Set())), n.add(e);
        }
        function g(e, t, n, r, a, o) {
          return t
            .then((r) => {
              if (!d()) throw (T(e), di);
              null != o.loadingDepKey && o.loadingDepPromise === t
                ? n.atomValues.set(o.loadingDepKey, Gl(r))
                : e.getState().knownSelectors.forEach((e) => {
                    n.atomValues.delete(e);
                  });
              const l = _(e, n);
              if (l && 'loading' !== l.state) {
                if (((x(e, a) || null == E(e)) && m(e, a), 'hasValue' === l.state))
                  return l.contents;
                throw l.contents;
              }
              if (!x(e, a)) {
                const t = k(e, n);
                if (null != t) return t.loadingLoadable.contents;
              }
              const [i, u] = S(e, n, a);
              if (('loading' !== i.state && h(e, n, a, i, u), 'hasError' === i.state))
                throw i.contents;
              return i.contents;
            })
            .catch((t) => {
              if (t instanceof ci) throw di;
              if (!d()) throw (T(e), di);
              const o = ql(t);
              throw (h(e, n, a, o, r), t);
            });
        }
        function b(e, t, r, a) {
          var o, i, u, s, c, d, f;
          (x(e, a) ||
            t.version ===
              (null === (o = e.getState()) ||
              void 0 === o ||
              null === (i = o.currentTree) ||
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
            ei(
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
        function S(e, a, o) {
          const l = si(n);
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
            const r = Zl(e, a, n);
            switch (
              (y.set(n, r),
              i ||
                (b(e, a, new Set(y.keys()), o),
                (function (e, t) {
                  x(e, t) && (Le(E(e)).stateVersions.clear(), v(t, !1));
                })(e, o)),
              r.state)
            ) {
              case 'hasValue':
                return r.contents;
              case 'hasError':
                throw r.contents;
              case 'loading':
                throw ((m.loadingDepKey = n), (m.loadingDepPromise = r.contents), r.contents);
            }
            throw Ne('Invalid Loadable state');
          }
          const _ = (n) =>
            function () {
              if (u)
                throw Ne(
                  'Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.'
                );
              null == t && al(!1);
              for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                a[o] = arguments[o];
              return ui(e, n, a, { node: t });
            };
          try {
            (c = r({ get: S, getCallback: _ })),
              (c = oi(c) ? S(c) : c),
              Kl(c) && ('hasError' === c.state && (p = !0), (c = c.contents)),
              Ae(c)
                ? (c = (function (e, t, n, r, a, o) {
                    return t
                      .then((t) => {
                        if (!d()) throw (T(e), di);
                        const o = Gl(t);
                        return h(e, n, a, o, r), t;
                      })
                      .catch((t) => {
                        if (!d()) throw (T(e), di);
                        if (Ae(t)) return g(e, t, n, r, a, o);
                        const l = ql(t);
                        throw (h(e, n, a, l, r), t);
                      });
                  })(e, c, a, y, o, m).finally(s))
                : s(),
              (c = c instanceof Yl ? c.value : c);
          } catch (w) {
            (c = w), Ae(c) ? (c = g(e, c, a, y, o, m).finally(s)) : ((p = !0), s());
          }
          return (
            (f = p ? ql(c) : Ae(c) ? Ql(c) : Gl(c)),
            (i = !1),
            (function (e, t, n) {
              if (x(e, t)) {
                const t = E(e);
                null != t && (t.depValuesDiscoveredSoFarDuringAsyncWork = n);
              }
            })(e, o, y),
            b(e, a, new Set(y.keys()), o),
            [f, y]
          );
        }
        function _(e, t) {
          let r = t.atomValues.get(n);
          if (null != r) return r;
          const a = new Set();
          try {
            r = i.get((n) => ('string' !== typeof n && al(!1), Zl(e, t, n).contents), {
              onNodeVisit: (e) => {
                'branch' === e.type && e.nodeKey !== n && a.add(e.nodeKey);
              },
            });
          } catch (l) {
            throw Ne('Problem with cache lookup for selector "'.concat(n, '": ').concat(l.message));
          }
          var o;
          r &&
            (t.atomValues.set(n, r),
            b(e, t, a, null === (o = E(e)) || void 0 === o ? void 0 : o.executionID));
          return r;
        }
        function w(e, t) {
          const n = _(e, t);
          if (null != n) return T(e), n;
          const r = k(e, t);
          var a;
          if (null != r)
            return (
              'loading' === (null === (a = r.loadingLoadable) || void 0 === a ? void 0 : a.state) &&
                y(e, r.executionID),
              r.loadingLoadable
            );
          const o = hi(),
            [l, i] = S(e, t, o);
          return (
            'loading' === l.state
              ? (!(function (e, t, n, r, a) {
                  s.set(e, {
                    depValuesDiscoveredSoFarDuringAsyncWork: r,
                    executionID: t,
                    loadingLoadable: n,
                    stateVersions: new Map([[a.version, !0]]),
                  });
                })(e, o, l, i, t),
                y(e, o))
              : (T(e), R(t, l, i)),
            l
          );
        }
        function k(e, t) {
          const n = ir([
            s.has(e) ? [Le(s.get(e))] : [],
            wt(
              rn(s, (t) => {
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
            for (const [r, a] of n) if (!Zl(e, t, r).is(a)) return !0;
            return !1;
          }
          for (const a of n) {
            if (a.stateVersions.get(t.version) || !r(a.depValuesDiscoveredSoFarDuringAsyncWork))
              return a.stateVersions.set(t.version, !0), a;
            a.stateVersions.set(t.version, !1);
          }
        }
        function E(e) {
          return s.get(e);
        }
        function T(e) {
          s.delete(e);
        }
        function x(e, t) {
          var n;
          return t === (null === (n = E(e)) || void 0 === n ? void 0 : n.executionID);
        }
        function R(e, t, r) {
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
          } catch (a) {
            throw Ne(
              'Problem with setting cache for selector "'.concat(n, '": ').concat(a.message)
            );
          }
        }
        function C(e, t) {
          const r = t.atomValues.get(n);
          return null != r
            ? r
            : i.get((n) => {
                var r;
                return (
                  'string' !== typeof n && al(!1),
                  null === (r = Xl(e, t, n)) || void 0 === r ? void 0 : r.contents
                );
              });
        }
        function N(e, t) {
          return (function (e) {
            if (fi.includes(n)) {
              const e = 'Recoil selector has circular dependencies: '.concat(
                fi.slice(fi.indexOf(n)).join(' \u2192 ')
              );
              return ql(Ne(e));
            }
            fi.push(n);
            try {
              return e();
            } finally {
              fi.pop();
            }
          })(() => w(e, t));
        }
        function A(e) {
          e.atomValues.delete(n);
        }
        function L(e, n) {
          null == t && al(!1);
          for (const t of l) {
            var r;
            const a = ri(t);
            null === (r = a.clearCache) || void 0 === r || r.call(a, e, n);
          }
          l.clear(), A(n), i.clear(), li(e, t);
        }
        if (null != o) {
          return (t = ai({
            key: n,
            nodeType: 'selector',
            peek: C,
            get: N,
            set: (e, t, r) => {
              let a = !1;
              const l = new Map();
              function i(r) {
                let { key: o } = r;
                if (a) throw Ne('Recoil: Async selector sets are not currently supported.');
                const l = Zl(e, t, o);
                if ('hasValue' === l.state) return l.contents;
                if ('loading' === l.state) {
                  const e = 'Getting value of asynchronous atom or selector "'
                    .concat(o, '" in a pending state while setting selector "')
                    .concat(n, '" is not yet supported.');
                  throw (lt(e), Ne(e));
                }
                throw l.contents;
              }
              function u(n, r) {
                if (a) {
                  const e = 'Recoil: Async selector sets are not currently supported.';
                  throw (lt(e), Ne(e));
                }
                const o = 'function' === typeof r ? r(i(n)) : r;
                Jl(e, t, n.key, o).forEach((e, t) => l.set(t, e));
              }
              const s = o(
                {
                  set: u,
                  get: i,
                  reset: function (e) {
                    u(e, ti);
                  },
                },
                r
              );
              if (void 0 !== s)
                throw Ae(s)
                  ? Ne('Recoil: Async selector sets are not currently supported.')
                  : Ne('Recoil: selector set should be a void function.');
              return (a = !0), l;
            },
            init: f,
            invalidate: A,
            clearCache: L,
            shouldDeleteConfigOnRelease: p,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: u,
          }));
        }
        return (t = ai({
          key: n,
          nodeType: 'selector',
          peek: C,
          get: N,
          init: f,
          invalidate: A,
          clearCache: L,
          shouldDeleteConfigOnRelease: p,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: u,
        }));
      }
      mi.value = (e) => new Yl(e);
      var vi = mi;
      const {
          isLoadable: yi,
          loadableWithError: gi,
          loadableWithPromise: bi,
          loadableWithValue: Si,
        } = Xe,
        { WrappedValue: _i } = Rl,
        { peekNodeInfo: wi } = vn,
        {
          DEFAULT_VALUE: ki,
          DefaultValue: Ei,
          getConfigDeletionHandler: Ti,
          registerNode: xi,
          setConfigDeletionHandler: Ri,
        } = Lt,
        { isRecoilValue: Ci } = St,
        {
          getRecoilValueAsLoadable: Ni,
          markRecoilValueModified: Ai,
          setRecoilValue: Li,
          setRecoilValueLoadable: Pi,
        } = In,
        { retainedByOptionWithDefault: Vi } = Xn,
        Di = (e) => (e instanceof _i ? e.value : e);
      function Oi(e) {
        const { key: t, persistence_UNSTABLE: n } = e,
          r = Vi(e.retainedBy_UNSTABLE);
        let a = 0;
        function o(e) {
          return bi(
            e
              .then((e) => ((i = Si(e)), e))
              .catch((e) => {
                throw ((i = gi(e)), e);
              })
          );
        }
        let l,
          i = Ae(e.default)
            ? o(e.default)
            : yi(e.default)
              ? 'loading' === e.default.state
                ? o(e.default.contents)
                : e.default
              : Si(Di(e.default));
        s(i.contents);
        const u = new Map();
        function s(e) {
          return e;
        }
        function c(e, n) {
          var r, a;
          return null !== (r = null !== (a = n.atomValues.get(t)) && void 0 !== a ? a : l) &&
            void 0 !== r
            ? r
            : i;
        }
        const d = xi({
          key: t,
          nodeType: 'atom',
          peek: c,
          get: function (e, r) {
            if (r.atomValues.has(t)) return Le(r.atomValues.get(t));
            if (r.nonvalidatedAtoms.has(t)) {
              if (null != l) return l;
              if (null == n)
                return (
                  _t(
                    'Tried to restore a persisted value for atom '.concat(
                      t,
                      ' but it has no persistence settings.'
                    )
                  ),
                  i
                );
              const e = r.nonvalidatedAtoms.get(t),
                a = n.validator(e, ki),
                o = a instanceof Ei ? i : Si(a);
              return (l = o), l;
            }
            return i;
          },
          set: function (e, n, r) {
            if (n.atomValues.has(t)) {
              const e = Le(n.atomValues.get(t));
              if ('hasValue' === e.state && r === e.contents) return new Map();
            } else if (!n.nonvalidatedAtoms.has(t) && r instanceof Ei) return new Map();
            return (l = void 0), new Map().set(t, Si(r));
          },
          init: function (n, r, o) {
            var l;
            if ((a++, n.getState().knownAtoms.add(t), 'loading' === i.state)) {
              const m = () => {
                var e;
                (null !== (e = n.getState().nextTree) && void 0 !== e
                  ? e
                  : n.getState().currentTree
                ).atomValues.has(t) || Ai(n, d);
              };
              i.contents.finally(m);
            }
            const s = null !== (l = e.effects) && void 0 !== l ? l : e.effects_UNSTABLE;
            if (null != s) {
              let v = ki,
                y = !0,
                g = !1,
                b = null;
              function S(e) {
                if (y && e.key === t) {
                  const e = v;
                  return e instanceof Ei
                    ? c(n, r)
                    : Ae(e)
                      ? bi(e.then((e) => (e instanceof Ei ? i.toPromise() : e)))
                      : Si(e);
                }
                return Ni(n, e);
              }
              function _(e) {
                return S(e).toPromise();
              }
              function w(e) {
                var r;
                const a = wi(
                  n,
                  null !== (r = n.getState().nextTree) && void 0 !== r
                    ? r
                    : n.getState().currentTree,
                  e.key
                );
                return !y || e.key !== t || v instanceof Ei
                  ? a
                  : { ...a, isSet: !0, loadable: S(e) };
              }
              const k = (e) => (t) => {
                  if (y) {
                    const n = S(d),
                      r = 'hasValue' === n.state ? n.contents : ki;
                    (v = 'function' === typeof t ? t(r) : t),
                      Ae(v) && (v = v.then((t) => ((b = { effect: e, value: t }), t)));
                  } else {
                    if (Ae(t)) throw Ne('Setting atoms to async values is not implemented.');
                    'function' !== typeof t && (b = { effect: e, value: Di(t) }),
                      Li(
                        n,
                        d,
                        'function' === typeof t
                          ? (n) => {
                              const r = Di(t(n));
                              return (b = { effect: e, value: r }), r;
                            }
                          : Di(t)
                      );
                  }
                },
                E = (e) => () => k(e)(ki),
                T = (e) => (r) => {
                  var a;
                  const { release: o } = n.subscribeToTransactions((n) => {
                    var a;
                    let { currentTree: o, previousTree: l } = n.getState();
                    l ||
                      (lt(
                        'Transaction subscribers notified without a next tree being present -- this is a bug in Recoil'
                      ),
                      (l = o));
                    const u = null !== (a = o.atomValues.get(t)) && void 0 !== a ? a : i;
                    if ('hasValue' === u.state) {
                      var s, c, d, f;
                      const n = u.contents,
                        a = null !== (s = l.atomValues.get(t)) && void 0 !== s ? s : i,
                        p = 'hasValue' === a.state ? a.contents : ki;
                      (null === (c = b) || void 0 === c ? void 0 : c.effect) !== e ||
                      (null === (d = b) || void 0 === d ? void 0 : d.value) !== n
                        ? r(n, p, !o.atomValues.has(t))
                        : (null === (f = b) || void 0 === f ? void 0 : f.effect) === e &&
                          (b = null);
                    }
                  }, t);
                  u.set(n, [...(null !== (a = u.get(n)) && void 0 !== a ? a : []), o]);
                };
              for (const x of s)
                try {
                  const R = x({
                    node: d,
                    storeID: n.storeID,
                    parentStoreID_UNSTABLE: n.parentStoreID,
                    trigger: o,
                    setSelf: k(x),
                    resetSelf: E(x),
                    onSet: T(x),
                    getPromise: _,
                    getLoadable: S,
                    getInfo_UNSTABLE: w,
                  });
                  var f;
                  if (null != R)
                    u.set(n, [...(null !== (f = u.get(n)) && void 0 !== f ? f : []), R]);
                } catch (h) {
                  (v = h), (g = !0);
                }
              if (((y = !1), !(v instanceof Ei))) {
                var p;
                const C = g
                  ? gi(v)
                  : Ae(v)
                    ? bi(
                        (function (e, n) {
                          const r = n
                            .then((n) => {
                              var a, o;
                              return (
                                (null ===
                                  (o = (
                                    null !== (a = e.getState().nextTree) && void 0 !== a
                                      ? a
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === o
                                  ? void 0
                                  : o.contents) === r && Li(e, d, n),
                                n
                              );
                            })
                            .catch((n) => {
                              var a, o;
                              throw (
                                ((null ===
                                  (o = (
                                    null !== (a = e.getState().nextTree) && void 0 !== a
                                      ? a
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === o
                                  ? void 0
                                  : o.contents) === r && Pi(e, d, gi(n)),
                                n)
                              );
                            });
                          return r;
                        })(n, v)
                      )
                    : Si(Di(v));
                C.contents,
                  r.atomValues.set(t, C),
                  null === (p = n.getState().nextTree) || void 0 === p || p.atomValues.set(t, C);
              }
            }
            return () => {
              var e;
              a--, null === (e = u.get(n)) || void 0 === e || e.forEach((e) => e()), u.delete(n);
            };
          },
          invalidate: function () {
            l = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== Ti(t) && a <= 0;
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
      function Mi(e) {
        const { ...t } = e,
          n = 'default' in e ? e.default : new Promise(() => {});
        return Ci(n)
          ? (function (e) {
              const t = Mi({
                  ...e,
                  default: ki,
                  persistence_UNSTABLE:
                    void 0 === e.persistence_UNSTABLE
                      ? void 0
                      : {
                          ...e.persistence_UNSTABLE,
                          validator: (t) =>
                            t instanceof Ei ? t : Le(e.persistence_UNSTABLE).validator(t, ki),
                        },
                  effects: e.effects,
                  effects_UNSTABLE: e.effects_UNSTABLE,
                }),
                n = vi({
                  key: ''.concat(e.key, '__withFallback'),
                  get: (n) => {
                    let { get: r } = n;
                    const a = r(t);
                    return a instanceof Ei ? e.default : a;
                  },
                  set: (e, n) => {
                    let { set: r } = e;
                    return r(t, n);
                  },
                  cachePolicy_UNSTABLE: { eviction: 'most-recent' },
                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                });
              return Ri(n.key, Ti(e.key)), n;
            })({ ...t, default: n })
          : Oi({ ...t, default: n });
      }
      Mi.value = (e) => new _i(e);
      var Ui = Mi;
      var zi = class {
          constructor(e) {
            var t;
            Pe(this, '_map', void 0),
              Pe(this, '_keyMapper', void 0),
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
        Fi = Object.freeze({ __proto__: null, MapCache: zi });
      const { LRUCache: Ii } = Dl,
        { MapCache: Bi } = Fi,
        ji = { equality: 'reference', eviction: 'none', maxSize: 1 / 0 };
      var Wi = function () {
        let {
          equality: e = ji.equality,
          eviction: t = ji.eviction,
          maxSize: n = ji.maxSize,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ji;
        const r = (function (e) {
          switch (e) {
            case 'reference':
              return (e) => e;
            case 'value':
              return (e) => Fl(e);
          }
          throw Ne('Unrecognized equality policy '.concat(e));
        })(e);
        return (function (e, t, n) {
          switch (e) {
            case 'keep-all':
              return new Bi({ mapKey: n });
            case 'lru':
              return new Ii({ mapKey: n, maxSize: Le(t) });
            case 'most-recent':
              return new Ii({ mapKey: n, maxSize: 1 });
          }
          throw Ne('Unrecognized eviction policy '.concat(e));
        })(t, n, r);
      };
      const { setConfigDeletionHandler: Hi } = Lt;
      var $i = function (e) {
        var t, n;
        const r = Wi({
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
          var n, a;
          const o = r.get(t);
          if (null != o) return o;
          const { cachePolicyForParams_UNSTABLE: l, ...i } = e,
            u = 'default' in e ? e.default : new Promise(() => {}),
            s = Ui({
              ...i,
              key: ''.concat(e.key, '__').concat(null !== (n = Fl(t)) && void 0 !== n ? n : 'void'),
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
                    : null !== (a = e.effects) && void 0 !== a
                      ? a
                      : e.effects_UNSTABLE,
            });
          return (
            r.set(t, s),
            Hi(s.key, () => {
              r.delete(t);
            }),
            s
          );
        };
      };
      const { setConfigDeletionHandler: Ki } = Lt;
      let qi = 0;
      var Qi = function (e) {
        var t, n;
        const r = Wi({
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
          let a;
          try {
            a = r.get(t);
          } catch (c) {
            throw Ne(
              'Problem with cache lookup for selector '.concat(e.key, ': ').concat(c.message)
            );
          }
          if (null != a) return a;
          const o = ''
              .concat(e.key, '__selectorFamily/')
              .concat(
                null !== (n = Fl(t, { allowFunctions: !0 })) && void 0 !== n ? n : 'void',
                '/'
              )
              .concat(qi++),
            l = (n) => e.get(t)(n),
            i = e.cachePolicy_UNSTABLE,
            u =
              'function' === typeof e.retainedBy_UNSTABLE
                ? e.retainedBy_UNSTABLE(t)
                : e.retainedBy_UNSTABLE;
          let s;
          if (null != e.set) {
            const n = e.set;
            s = vi({
              key: o,
              get: l,
              set: (e, r) => n(t)(e, r),
              cachePolicy_UNSTABLE: i,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              retainedBy_UNSTABLE: u,
            });
          } else
            s = vi({
              key: o,
              get: l,
              cachePolicy_UNSTABLE: i,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              retainedBy_UNSTABLE: u,
            });
          return (
            r.set(t, s),
            Ki(s.key, () => {
              r.delete(t);
            }),
            s
          );
        };
      };
      const Gi = Qi({
        key: '__constant',
        get: (e) => () => e,
        cachePolicyForParams_UNSTABLE: { equality: 'reference' },
      });
      var Yi = function (e) {
        return Gi(e);
      };
      const Zi = Qi({
        key: '__error',
        get: (e) => () => {
          throw Ne(e);
        },
        cachePolicyForParams_UNSTABLE: { equality: 'reference' },
      });
      var Xi = function (e) {
        return Zi(e);
      };
      var Ji = function (e) {
        return e;
      };
      const { loadableWithError: eu, loadableWithPromise: tu, loadableWithValue: nu } = Xe;
      function ru(e, t) {
        const n = Array(t.length).fill(void 0),
          r = Array(t.length).fill(void 0);
        for (const [o, l] of t.entries())
          try {
            n[o] = e(l);
          } catch (a) {
            r[o] = a;
          }
        return [n, r];
      }
      function au(e) {
        return null != e && !Ae(e);
      }
      function ou(e) {
        return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
      }
      function lu(e, t) {
        return Array.isArray(e)
          ? t
          : Object.getOwnPropertyNames(e).reduce((e, n, r) => ({ ...e, [n]: t[r] }), {});
      }
      function iu(e, t, n) {
        return lu(
          e,
          n.map((e, n) => (null == e ? nu(t[n]) : Ae(e) ? tu(e) : eu(e)))
        );
      }
      const uu = Qi({
          key: '__waitForNone',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = ou(e),
              [a, o] = ru(n, r);
            return iu(e, a, o);
          },
          dangerouslyAllowMutability: !0,
        }),
        su = Qi({
          key: '__waitForAny',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = ou(e),
              [a, o] = ru(n, r);
            return o.some((e) => !Ae(e))
              ? iu(e, a, o)
              : new Promise((t) => {
                  for (const [n, r] of o.entries())
                    Ae(r) &&
                      r
                        .then((r) => {
                          (a[n] = r), (o[n] = void 0), t(iu(e, a, o));
                        })
                        .catch((r) => {
                          (o[n] = r), t(iu(e, a, o));
                        });
                });
          },
          dangerouslyAllowMutability: !0,
        }),
        cu = Qi({
          key: '__waitForAll',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = ou(e),
              [a, o] = ru(n, r);
            if (o.every((e) => null == e)) return lu(e, a);
            const l = o.find(au);
            if (null != l) throw l;
            return Promise.all(o).then((t) => {
              return lu(e, ((n = a), t.map((e, t) => (void 0 === e ? n[t] : e))));
              var n;
            });
          },
          dangerouslyAllowMutability: !0,
        }),
        du = Qi({
          key: '__waitForAllSettled',
          get: (e) => (t) => {
            let { get: n } = t;
            const r = ou(e),
              [a, o] = ru(n, r);
            return o.every((e) => !Ae(e))
              ? iu(e, a, o)
              : Promise.all(
                  o.map((e, t) =>
                    Ae(e)
                      ? e
                          .then((e) => {
                            (a[t] = e), (o[t] = void 0);
                          })
                          .catch((e) => {
                            (a[t] = void 0), (o[t] = e);
                          })
                      : null
                  )
                ).then(() => iu(e, a, o));
          },
          dangerouslyAllowMutability: !0,
        }),
        fu = Qi({
          key: '__noWait',
          get: (e) => (t) => {
            let { get: n } = t;
            try {
              return vi.value(nu(n(e)));
            } catch (r) {
              return vi.value(Ae(r) ? tu(r) : eu(r));
            }
          },
          dangerouslyAllowMutability: !0,
        });
      var pu = {
        waitForNone: uu,
        waitForAny: su,
        waitForAll: cu,
        waitForAllSettled: du,
        noWait: fu,
      };
      const { RecoilLoadable: hu } = Xe,
        { DefaultValue: mu } = Lt,
        { RecoilRoot: vu, useRecoilStoreID: yu } = ka,
        { isRecoilValue: gu } = St,
        { retentionZone: bu } = tn,
        { freshSnapshot: Su } = Ir,
        {
          useRecoilState: _u,
          useRecoilState_TRANSITION_SUPPORT_UNSTABLE: wu,
          useRecoilStateLoadable: ku,
          useRecoilValue: Eu,
          useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Tu,
          useRecoilValueLoadable: xu,
          useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Ru,
          useResetRecoilState: Cu,
          useSetRecoilState: Nu,
        } = mo,
        { useGotoRecoilSnapshot: Au, useRecoilSnapshot: Lu, useRecoilTransactionObserver: Pu } = Mo,
        { useRecoilCallback: Vu } = yl,
        { noWait: Du, waitForAll: Ou, waitForAllSettled: Mu, waitForAny: Uu, waitForNone: zu } = pu;
      var Fu = {
          DefaultValue: mu,
          isRecoilValue: gu,
          RecoilLoadable: hu,
          RecoilEnv: et,
          RecoilRoot: vu,
          useRecoilStoreID: yu,
          useRecoilBridgeAcrossReactRoots_UNSTABLE: Ho,
          atom: Ui,
          selector: vi,
          atomFamily: $i,
          selectorFamily: Qi,
          constSelector: Yi,
          errorSelector: Xi,
          readOnlySelector: Ji,
          noWait: Du,
          waitForNone: zu,
          waitForAny: Uu,
          waitForAll: Ou,
          waitForAllSettled: Mu,
          useRecoilValue: Eu,
          useRecoilValueLoadable: xu,
          useRecoilState: _u,
          useRecoilStateLoadable: ku,
          useSetRecoilState: Nu,
          useResetRecoilState: Cu,
          useGetRecoilValueInfo_UNSTABLE: Fo,
          useRecoilRefresher_UNSTABLE: _l,
          useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Ru,
          useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Tu,
          useRecoilState_TRANSITION_SUPPORT_UNSTABLE: wu,
          useRecoilCallback: Vu,
          useRecoilTransaction_UNSTABLE: Tl,
          useGotoRecoilSnapshot: Au,
          useRecoilSnapshot: Lu,
          useRecoilTransactionObserver_UNSTABLE: Pu,
          snapshot_UNSTABLE: Su,
          useRetain: Oa,
          retentionZone: bu,
        },
        Iu = Fu.RecoilRoot,
        Bu = Fu.useRecoilValue,
        ju = Fu.useSetRecoilState;
      const Wu = 'App_main__5VZ13',
        Hu = (0, Fu.atom)({ key: 'AuthAtom', default: { id: '', name: '', isAdmin: !1 } }),
        $u = 'style_footer__v4nM3',
        Ku = 'style_active__pNBnv',
        qu = 'style_non_active__fu2yy';
      var Qu = n(417);
      const Gu = (e) =>
          (0, Qu.jsx)(Ee, {
            to: e.to,
            className: (e) => {
              let { isActive: t } = e;
              return t ? Ku : qu;
            },
            children: e.children,
          }),
        Yu = () =>
          (0, Qu.jsx)('div', {
            className: $u,
            children: (0, Qu.jsxs)('ul', {
              children: [
                (0, Qu.jsx)('li', { children: (0, Qu.jsx)(Gu, { to: '/', children: 'Root' }) }),
                (0, Qu.jsx)('li', {
                  children: (0, Qu.jsx)(Gu, { to: '/users', children: 'Users' }),
                }),
              ],
            }),
          }),
        Zu = 'style_header__nSbMe',
        Xu = 'style_text__pOLQr',
        Ju = () => {
          const e = Bu(Hu);
          return (0, Qu.jsxs)('div', {
            className: Zu,
            children: [
              (0, Qu.jsx)('div', { className: Xu, children: 'Header' }),
              (0, Qu.jsx)('div', { className: Xu, children: e.name }),
            ],
          });
        },
        es = () => (0, Qu.jsx)('div', { children: (0, Qu.jsx)('h1', { children: 'Not Found' }) }),
        ts = () => (0, Qu.jsx)('div', { children: (0, Qu.jsx)('h1', { children: 'Root' }) });
      var ns = (e) => 'checkbox' === e.type,
        rs = (e) => e instanceof Date,
        as = (e) => null == e;
      const os = (e) => 'object' === typeof e;
      var ls = (e) => !as(e) && !Array.isArray(e) && os(e) && !rs(e),
        is = (e) => (ls(e) && e.target ? (ns(e.target) ? e.target.checked : e.target.value) : e),
        us = (e, t) => e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
        ss = (e) => {
          const t = e.constructor && e.constructor.prototype;
          return ls(t) && t.hasOwnProperty('isPrototypeOf');
        },
        cs =
          'undefined' !== typeof window &&
          'undefined' !== typeof window.HTMLElement &&
          'undefined' !== typeof document;
      function ds(e) {
        let t;
        const n = Array.isArray(e);
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else {
          if ((cs && (e instanceof Blob || e instanceof FileList)) || (!n && !ls(e))) return e;
          if (((t = n ? [] : {}), n || ss(e)))
            for (const n in e) e.hasOwnProperty(n) && (t[n] = ds(e[n]));
          else t = e;
        }
        return t;
      }
      var fs = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        ps = (e) => void 0 === e,
        hs = (e, t, n) => {
          if (!t || !ls(e)) return n;
          const r = fs(t.split(/[,[\].]+?/)).reduce((e, t) => (as(e) ? e : e[t]), e);
          return ps(r) || r === e ? (ps(e[t]) ? n : e[t]) : r;
        },
        ms = (e) => 'boolean' === typeof e;
      const vs = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
        ys = {
          onBlur: 'onBlur',
          onChange: 'onChange',
          onSubmit: 'onSubmit',
          onTouched: 'onTouched',
          all: 'all',
        },
        gs = 'max',
        bs = 'min',
        Ss = 'maxLength',
        _s = 'minLength',
        ws = 'pattern',
        ks = 'required',
        Es = 'validate';
      t.createContext(null);
      var Ts = function (e, t, n) {
          let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          const a = { defaultValues: t._defaultValues };
          for (const o in e)
            Object.defineProperty(a, o, {
              get: () => {
                const a = o;
                return (
                  t._proxyFormState[a] !== ys.all && (t._proxyFormState[a] = !r || ys.all),
                  n && (n[a] = !0),
                  e[a]
                );
              },
            });
          return a;
        },
        xs = (e) => ls(e) && !Object.keys(e).length,
        Rs = (e, t, n, r) => {
          n(e);
          const { name: a, ...o } = e;
          return (
            xs(o) ||
            Object.keys(o).length >= Object.keys(t).length ||
            Object.keys(o).find((e) => t[e] === (!r || ys.all))
          );
        },
        Cs = (e) => (Array.isArray(e) ? e : [e]);
      function Ns(e) {
        const n = t.useRef(e);
        (n.current = e),
          t.useEffect(() => {
            const t =
              !e.disabled &&
              n.current.subject &&
              n.current.subject.subscribe({ next: n.current.next });
            return () => {
              t && t.unsubscribe();
            };
          }, [e.disabled]);
      }
      var As = (e) => 'string' === typeof e,
        Ls = (e, t, n, r, a) =>
          As(e)
            ? (r && t.watch.add(e), hs(n, e, a))
            : Array.isArray(e)
              ? e.map((e) => (r && t.watch.add(e), hs(n, e)))
              : (r && (t.watchAll = !0), n);
      var Ps = (e) => /^\w*$/.test(e),
        Vs = (e) => fs(e.replace(/["|']|\]/g, '').split(/\.|\[/));
      function Ds(e, t, n) {
        let r = -1;
        const a = Ps(t) ? [t] : Vs(t),
          o = a.length,
          l = o - 1;
        for (; ++r < o; ) {
          const t = a[r];
          let o = n;
          if (r !== l) {
            const n = e[t];
            o = ls(n) || Array.isArray(n) ? n : isNaN(+a[r + 1]) ? {} : [];
          }
          (e[t] = o), (e = e[t]);
        }
        return e;
      }
      var Os = (e, t, n, r, a) =>
          t ? { ...n[e], types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: a || !0 } } : {},
        Ms = (e) => ({
          isOnSubmit: !e || e === ys.onSubmit,
          isOnBlur: e === ys.onBlur,
          isOnChange: e === ys.onChange,
          isOnAll: e === ys.all,
          isOnTouch: e === ys.onTouched,
        }),
        Us = (e, t, n) =>
          !n &&
          (t.watchAll ||
            t.watch.has(e) ||
            [...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))));
      const zs = (e, t, n, r) => {
        for (const a of n || Object.keys(e)) {
          const n = hs(e, a);
          if (n) {
            const { _f: e, ...o } = n;
            if (e) {
              if (e.refs && e.refs[0] && t(e.refs[0], a) && !r) break;
              if (e.ref && t(e.ref, e.name) && !r) break;
            } else ls(o) && zs(o, t);
          }
        }
      };
      var Fs = (e, t, n) => {
          const r = fs(hs(e, n));
          return Ds(r, 'root', t[n]), Ds(e, n, r), e;
        },
        Is = (e) => 'file' === e.type,
        Bs = (e) => 'function' === typeof e,
        js = (e) => {
          if (!cs) return !1;
          const t = e ? e.ownerDocument : 0;
          return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
        },
        Ws = (e) => As(e),
        Hs = (e) => 'radio' === e.type,
        $s = (e) => e instanceof RegExp;
      const Ks = { value: !1, isValid: !1 },
        qs = { value: !0, isValid: !0 };
      var Qs = (e) => {
        if (Array.isArray(e)) {
          if (e.length > 1) {
            const t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
            return { value: t, isValid: !!t.length };
          }
          return e[0].checked && !e[0].disabled
            ? e[0].attributes && !ps(e[0].attributes.value)
              ? ps(e[0].value) || '' === e[0].value
                ? qs
                : { value: e[0].value, isValid: !0 }
              : qs
            : Ks;
        }
        return Ks;
      };
      const Gs = { isValid: !1, value: null };
      var Ys = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, t) => (t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : e),
              Gs
            )
          : Gs;
      function Zs(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'validate';
        if (Ws(e) || (Array.isArray(e) && e.every(Ws)) || (ms(e) && !e))
          return { type: n, message: Ws(e) ? e : '', ref: t };
      }
      var Xs = (e) => (ls(e) && !$s(e) ? e : { value: e, message: '' }),
        Js = async (e, t, n, r, a) => {
          const {
              ref: o,
              refs: l,
              required: i,
              maxLength: u,
              minLength: s,
              min: c,
              max: d,
              pattern: f,
              validate: p,
              name: h,
              valueAsNumber: m,
              mount: v,
              disabled: y,
            } = e._f,
            g = hs(t, h);
          if (!v || y) return {};
          const b = l ? l[0] : o,
            S = (e) => {
              r &&
                b.reportValidity &&
                (b.setCustomValidity(ms(e) ? '' : e || ''), b.reportValidity());
            },
            _ = {},
            w = Hs(o),
            k = ns(o),
            E = w || k,
            T =
              ((m || Is(o)) && ps(o.value) && ps(g)) ||
              (js(o) && '' === o.value) ||
              '' === g ||
              (Array.isArray(g) && !g.length),
            x = Os.bind(null, h, n, _),
            R = function (e, t, n) {
              let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ss,
                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _s;
              const l = e ? t : n;
              _[h] = { type: e ? r : a, message: l, ref: o, ...x(e ? r : a, l) };
            };
          if (
            a
              ? !Array.isArray(g) || !g.length
              : i &&
                ((!E && (T || as(g))) ||
                  (ms(g) && !g) ||
                  (k && !Qs(l).isValid) ||
                  (w && !Ys(l).isValid))
          ) {
            const { value: e, message: t } = Ws(i) ? { value: !!i, message: i } : Xs(i);
            if (e && ((_[h] = { type: ks, message: t, ref: b, ...x(ks, t) }), !n)) return S(t), _;
          }
          if (!T && (!as(c) || !as(d))) {
            let e, t;
            const r = Xs(d),
              a = Xs(c);
            if (as(g) || isNaN(g)) {
              const n = o.valueAsDate || new Date(g),
                l = (e) => new Date(new Date().toDateString() + ' ' + e),
                i = 'time' == o.type,
                u = 'week' == o.type;
              As(r.value) &&
                g &&
                (e = i ? l(g) > l(r.value) : u ? g > r.value : n > new Date(r.value)),
                As(a.value) &&
                  g &&
                  (t = i ? l(g) < l(a.value) : u ? g < a.value : n < new Date(a.value));
            } else {
              const n = o.valueAsNumber || (g ? +g : g);
              as(r.value) || (e = n > r.value), as(a.value) || (t = n < a.value);
            }
            if ((e || t) && (R(!!e, r.message, a.message, gs, bs), !n)) return S(_[h].message), _;
          }
          if ((u || s) && !T && (As(g) || (a && Array.isArray(g)))) {
            const e = Xs(u),
              t = Xs(s),
              r = !as(e.value) && g.length > +e.value,
              a = !as(t.value) && g.length < +t.value;
            if ((r || a) && (R(r, e.message, t.message), !n)) return S(_[h].message), _;
          }
          if (f && !T && As(g)) {
            const { value: e, message: t } = Xs(f);
            if (
              $s(e) &&
              !g.match(e) &&
              ((_[h] = { type: ws, message: t, ref: o, ...x(ws, t) }), !n)
            )
              return S(t), _;
          }
          if (p)
            if (Bs(p)) {
              const e = Zs(await p(g, t), b);
              if (e && ((_[h] = { ...e, ...x(Es, e.message) }), !n)) return S(e.message), _;
            } else if (ls(p)) {
              let e = {};
              for (const r in p) {
                if (!xs(e) && !n) break;
                const a = Zs(await p[r](g, t), b, r);
                a && ((e = { ...a, ...x(r, a.message) }), S(a.message), n && (_[h] = e));
              }
              if (!xs(e) && ((_[h] = { ref: b, ...e }), !n)) return _;
            }
          return S(!0), _;
        };
      function ec(e, t) {
        const n = Array.isArray(t) ? t : Ps(t) ? [t] : Vs(t),
          r =
            1 === n.length
              ? e
              : (function (e, t) {
                  const n = t.slice(0, -1).length;
                  let r = 0;
                  for (; r < n; ) e = ps(e) ? r++ : e[t[r++]];
                  return e;
                })(e, n),
          a = n.length - 1,
          o = n[a];
        return (
          r && delete r[o],
          0 !== a &&
            ((ls(r) && xs(r)) ||
              (Array.isArray(r) &&
                (function (e) {
                  for (const t in e) if (e.hasOwnProperty(t) && !ps(e[t])) return !1;
                  return !0;
                })(r))) &&
            ec(e, n.slice(0, -1)),
          e
        );
      }
      function tc() {
        let e = [];
        return {
          get observers() {
            return e;
          },
          next: (t) => {
            for (const n of e) n.next && n.next(t);
          },
          subscribe: (t) => (
            e.push(t),
            {
              unsubscribe: () => {
                e = e.filter((e) => e !== t);
              },
            }
          ),
          unsubscribe: () => {
            e = [];
          },
        };
      }
      var nc = (e) => as(e) || !os(e);
      function rc(e, t) {
        if (nc(e) || nc(t)) return e === t;
        if (rs(e) && rs(t)) return e.getTime() === t.getTime();
        const n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (const a of n) {
          const n = e[a];
          if (!r.includes(a)) return !1;
          if ('ref' !== a) {
            const e = t[a];
            if (
              (rs(n) && rs(e)) || (ls(n) && ls(e)) || (Array.isArray(n) && Array.isArray(e))
                ? !rc(n, e)
                : n !== e
            )
              return !1;
          }
        }
        return !0;
      }
      var ac = (e) => 'select-multiple' === e.type,
        oc = (e) => Hs(e) || ns(e),
        lc = (e) => js(e) && e.isConnected,
        ic = (e) => {
          for (const t in e) if (Bs(e[t])) return !0;
          return !1;
        };
      function uc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = Array.isArray(e);
        if (ls(e) || n)
          for (const r in e)
            Array.isArray(e[r]) || (ls(e[r]) && !ic(e[r]))
              ? ((t[r] = Array.isArray(e[r]) ? [] : {}), uc(e[r], t[r]))
              : as(e[r]) || (t[r] = !0);
        return t;
      }
      function sc(e, t, n) {
        const r = Array.isArray(e);
        if (ls(e) || r)
          for (const a in e)
            Array.isArray(e[a]) || (ls(e[a]) && !ic(e[a]))
              ? ps(t) || nc(n[a])
                ? (n[a] = Array.isArray(e[a]) ? uc(e[a], []) : { ...uc(e[a]) })
                : sc(e[a], as(t) ? {} : t[a], n[a])
              : (n[a] = !rc(e[a], t[a]));
        return n;
      }
      var cc = (e, t) => sc(e, t, uc(t)),
        dc = (e, t) => {
          let { valueAsNumber: n, valueAsDate: r, setValueAs: a } = t;
          return ps(e)
            ? e
            : n
              ? '' === e
                ? NaN
                : e
                  ? +e
                  : e
              : r && As(e)
                ? new Date(e)
                : a
                  ? a(e)
                  : e;
        };
      function fc(e) {
        const t = e.ref;
        if (!(e.refs ? e.refs.every((e) => e.disabled) : t.disabled))
          return Is(t)
            ? t.files
            : Hs(t)
              ? Ys(e.refs).value
              : ac(t)
                ? [...t.selectedOptions].map((e) => {
                    let { value: t } = e;
                    return t;
                  })
                : ns(t)
                  ? Qs(e.refs).value
                  : dc(ps(t.value) ? e.ref.value : t.value, e);
      }
      var pc = (e, t, n, r) => {
          const a = {};
          for (const o of e) {
            const e = hs(t, o);
            e && Ds(a, o, e._f);
          }
          return { criteriaMode: n, names: [...e], fields: a, shouldUseNativeValidation: r };
        },
        hc = (e) =>
          ps(e) ? e : $s(e) ? e.source : ls(e) ? ($s(e.value) ? e.value.source : e.value) : e,
        mc = (e) =>
          e.mount &&
          (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
      function vc(e, t, n) {
        const r = hs(e, n);
        if (r || Ps(n)) return { error: r, name: n };
        const a = n.split('.');
        for (; a.length; ) {
          const r = a.join('.'),
            o = hs(t, r),
            l = hs(e, r);
          if (o && !Array.isArray(o) && n !== r) return { name: n };
          if (l && l.type) return { name: r, error: l };
          a.pop();
        }
        return { name: n };
      }
      var yc = (e, t, n, r, a) =>
          !a.isOnAll &&
          (!n && a.isOnTouch
            ? !(t || e)
            : (n ? r.isOnBlur : a.isOnBlur)
              ? !e
              : !(n ? r.isOnChange : a.isOnChange) || e),
        gc = (e, t) => !fs(hs(e, t)).length && ec(e, t);
      const bc = { mode: ys.onSubmit, reValidateMode: ys.onChange, shouldFocusError: !0 };
      function Sc() {
        let e,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = { ...bc, ...t },
          a = {
            submitCount: 0,
            isDirty: !1,
            isLoading: Bs(r.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            errors: {},
            disabled: !1,
          },
          o = {},
          l = ((ls(r.defaultValues) || ls(r.values)) && ds(r.defaultValues || r.values)) || {},
          i = r.shouldUnregister ? {} : ds(l),
          u = { action: !1, mount: !1, watch: !1 },
          s = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
          c = 0;
        const d = {
            isDirty: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1,
          },
          f = { values: tc(), array: tc(), state: tc() },
          p = t.resetOptions && t.resetOptions.keepDirtyValues,
          h = Ms(r.mode),
          m = Ms(r.reValidateMode),
          v = r.criteriaMode === ys.all,
          y = async (e) => {
            if (d.isValid || e) {
              const e = r.resolver ? xs((await w()).errors) : await k(o, !0);
              e !== a.isValid && f.state.next({ isValid: e });
            }
          },
          g = (e) => d.isValidating && f.state.next({ isValidating: e }),
          b = (e, t, n, r) => {
            const a = hs(o, e);
            if (a) {
              const o = hs(i, e, ps(n) ? hs(l, e) : n);
              ps(o) || (r && r.defaultChecked) || t ? Ds(i, e, t ? o : fc(a._f)) : x(e, o),
                u.mount && y();
            }
          },
          S = (e, t, n, r, o) => {
            let i = !1,
              u = !1;
            const s = { name: e };
            if (!n || r) {
              d.isDirty && ((u = a.isDirty), (a.isDirty = s.isDirty = E()), (i = u !== s.isDirty));
              const n = rc(hs(l, e), t);
              (u = hs(a.dirtyFields, e)),
                n ? ec(a.dirtyFields, e) : Ds(a.dirtyFields, e, !0),
                (s.dirtyFields = a.dirtyFields),
                (i = i || (d.dirtyFields && u !== !n));
            }
            if (n) {
              const t = hs(a.touchedFields, e);
              t ||
                (Ds(a.touchedFields, e, n),
                (s.touchedFields = a.touchedFields),
                (i = i || (d.touchedFields && t !== n)));
            }
            return i && o && f.state.next(s), i ? s : {};
          },
          _ = (n, r, o, l) => {
            const i = hs(a.errors, n),
              u = d.isValid && ms(r) && a.isValid !== r;
            var s;
            if (
              (t.delayError && o
                ? ((s = () =>
                    ((e, t) => {
                      Ds(a.errors, e, t), f.state.next({ errors: a.errors });
                    })(n, o)),
                  (e = (e) => {
                    clearTimeout(c), (c = setTimeout(s, e));
                  }),
                  e(t.delayError))
                : (clearTimeout(c), (e = null), o ? Ds(a.errors, n, o) : ec(a.errors, n)),
              (o ? !rc(i, o) : i) || !xs(l) || u)
            ) {
              const e = { ...l, ...(u && ms(r) ? { isValid: r } : {}), errors: a.errors, name: n };
              (a = { ...a, ...e }), f.state.next(e);
            }
            g(!1);
          },
          w = async (e) =>
            r.resolver(
              i,
              r.context,
              pc(e || s.mount, o, r.criteriaMode, r.shouldUseNativeValidation)
            ),
          k = async function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { valid: !0 };
            for (const o in e) {
              const l = e[o];
              if (l) {
                const { _f: e, ...o } = l;
                if (e) {
                  const o = s.array.has(e.name),
                    u = await Js(l, i, v, r.shouldUseNativeValidation && !t, o);
                  if (u[e.name] && ((n.valid = !1), t)) break;
                  !t &&
                    (hs(u, e.name)
                      ? o
                        ? Fs(a.errors, u, e.name)
                        : Ds(a.errors, e.name, u[e.name])
                      : ec(a.errors, e.name));
                }
                o && (await k(o, t, n));
              }
            }
            return n.valid;
          },
          E = (e, t) => (e && t && Ds(i, e, t), !rc(P(), l)),
          T = (e, t, n) =>
            Ls(e, s, { ...(u.mount ? i : ps(t) ? l : As(e) ? { [e]: t } : t) }, n, t),
          x = function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const r = hs(o, e);
            let a = t;
            if (r) {
              const n = r._f;
              n &&
                (!n.disabled && Ds(i, e, dc(t, n)),
                (a = js(n.ref) && as(t) ? '' : t),
                ac(n.ref)
                  ? [...n.ref.options].forEach((e) => (e.selected = a.includes(e.value)))
                  : n.refs
                    ? ns(n.ref)
                      ? n.refs.length > 1
                        ? n.refs.forEach(
                            (e) =>
                              (!e.defaultChecked || !e.disabled) &&
                              (e.checked = Array.isArray(a)
                                ? !!a.find((t) => t === e.value)
                                : a === e.value)
                          )
                        : n.refs[0] && (n.refs[0].checked = !!a)
                      : n.refs.forEach((e) => (e.checked = e.value === a))
                    : Is(n.ref)
                      ? (n.ref.value = '')
                      : ((n.ref.value = a),
                        n.ref.type || f.values.next({ name: e, values: { ...i } })));
            }
            (n.shouldDirty || n.shouldTouch) && S(e, a, n.shouldTouch, n.shouldDirty, !0),
              n.shouldValidate && L(e);
          },
          R = (e, t, n) => {
            for (const r in t) {
              const a = t[r],
                l = ''.concat(e, '.').concat(r),
                i = hs(o, l);
              (!s.array.has(e) && nc(a) && (!i || i._f)) || rs(a) ? x(l, a, n) : R(l, a, n);
            }
          },
          C = function (e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const c = hs(o, e),
              p = s.array.has(e),
              h = ds(t);
            Ds(i, e, h),
              p
                ? (f.array.next({ name: e, values: { ...i } }),
                  (d.isDirty || d.dirtyFields) &&
                    r.shouldDirty &&
                    f.state.next({ name: e, dirtyFields: cc(l, i), isDirty: E(e, h) }))
                : !c || c._f || as(h)
                  ? x(e, h, r)
                  : R(e, h, r),
              Us(e, s) && f.state.next({ ...a }),
              f.values.next({ name: e, values: { ...i } }),
              !u.mount && n();
          },
          N = async (t) => {
            const n = t.target;
            let l = n.name,
              u = !0;
            const c = hs(o, l),
              p = (e) => {
                u = Number.isNaN(e) || e === hs(i, l, e);
              };
            if (c) {
              let b, E;
              const T = n.type ? fc(c._f) : is(t),
                x = t.type === vs.BLUR || t.type === vs.FOCUS_OUT,
                R =
                  (!mc(c._f) && !r.resolver && !hs(a.errors, l) && !c._f.deps) ||
                  yc(x, hs(a.touchedFields, l), a.isSubmitted, m, h),
                C = Us(l, s, x);
              Ds(i, l, T),
                x ? (c._f.onBlur && c._f.onBlur(t), e && e(0)) : c._f.onChange && c._f.onChange(t);
              const N = S(l, T, x, !1),
                A = !xs(N) || C;
              if ((!x && f.values.next({ name: l, type: t.type, values: { ...i } }), R))
                return d.isValid && y(), A && f.state.next({ name: l, ...(C ? {} : N) });
              if ((!x && C && f.state.next({ ...a }), g(!0), r.resolver)) {
                const { errors: e } = await w([l]);
                if ((p(T), u)) {
                  const t = vc(a.errors, o, l),
                    n = vc(e, o, t.name || l);
                  (b = n.error), (l = n.name), (E = xs(e));
                }
              } else
                (b = (await Js(c, i, v, r.shouldUseNativeValidation))[l]),
                  p(T),
                  u && (b ? (E = !1) : d.isValid && (E = await k(o, !0)));
              u && (c._f.deps && L(c._f.deps), _(l, E, b, N));
            }
          },
          A = (e, t) => {
            if (hs(a.errors, t) && e.focus) return e.focus(), 1;
          },
          L = async function (e) {
            let t,
              n,
              l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const i = Cs(e);
            if ((g(!0), r.resolver)) {
              const r = await (async (e) => {
                const { errors: t } = await w(e);
                if (e)
                  for (const n of e) {
                    const e = hs(t, n);
                    e ? Ds(a.errors, n, e) : ec(a.errors, n);
                  }
                else a.errors = t;
                return t;
              })(ps(e) ? e : i);
              (t = xs(r)), (n = e ? !i.some((e) => hs(r, e)) : t);
            } else
              e
                ? ((n = (
                    await Promise.all(
                      i.map(async (e) => {
                        const t = hs(o, e);
                        return await k(t && t._f ? { [e]: t } : t);
                      })
                    )
                  ).every(Boolean)),
                  (n || a.isValid) && y())
                : (n = t = await k(o));
            return (
              f.state.next({
                ...(!As(e) || (d.isValid && t !== a.isValid) ? {} : { name: e }),
                ...(r.resolver || !e ? { isValid: t } : {}),
                errors: a.errors,
                isValidating: !1,
              }),
              l.shouldFocus && !n && zs(o, A, e ? i : s.mount),
              n
            );
          },
          P = (e) => {
            const t = { ...l, ...(u.mount ? i : {}) };
            return ps(e) ? t : As(e) ? hs(t, e) : e.map((e) => hs(t, e));
          },
          V = (e, t) => ({
            invalid: !!hs((t || a).errors, e),
            isDirty: !!hs((t || a).dirtyFields, e),
            isTouched: !!hs((t || a).touchedFields, e),
            error: hs((t || a).errors, e),
          }),
          D = (e, t, n) => {
            const r = (hs(o, e, { _f: {} })._f || {}).ref;
            Ds(a.errors, e, { ...t, ref: r }),
              f.state.next({ name: e, errors: a.errors, isValid: !1 }),
              n && n.shouldFocus && r && r.focus && r.focus();
          },
          O = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (const n of e ? Cs(e) : s.mount)
              s.mount.delete(n),
                s.array.delete(n),
                t.keepValue || (ec(o, n), ec(i, n)),
                !t.keepError && ec(a.errors, n),
                !t.keepDirty && ec(a.dirtyFields, n),
                !t.keepTouched && ec(a.touchedFields, n),
                !r.shouldUnregister && !t.keepDefaultValue && ec(l, n);
            f.values.next({ values: { ...i } }),
              f.state.next({ ...a, ...(t.keepDirty ? { isDirty: E() } : {}) }),
              !t.keepIsValid && y();
          },
          M = (e) => {
            let { disabled: t, name: n, field: r, fields: a, value: o } = e;
            if (ms(t)) {
              const e = t ? void 0 : ps(o) ? fc(r ? r._f : hs(a, n)._f) : o;
              Ds(i, n, e), S(n, e, !1, !1, !0);
            }
          },
          U = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = hs(o, e);
            const a = ms(t.disabled);
            return (
              Ds(o, e, {
                ...(n || {}),
                _f: { ...(n && n._f ? n._f : { ref: { name: e } }), name: e, mount: !0, ...t },
              }),
              s.mount.add(e),
              n ? M({ field: n, disabled: t.disabled, name: e }) : b(e, !0, t.value),
              {
                ...(a ? { disabled: t.disabled } : {}),
                ...(r.progressive
                  ? {
                      required: !!t.required,
                      min: hc(t.min),
                      max: hc(t.max),
                      minLength: hc(t.minLength),
                      maxLength: hc(t.maxLength),
                      pattern: hc(t.pattern),
                    }
                  : {}),
                name: e,
                onChange: N,
                onBlur: N,
                ref: (a) => {
                  if (a) {
                    U(e, t), (n = hs(o, e));
                    const r =
                        (ps(a.value) &&
                          a.querySelectorAll &&
                          a.querySelectorAll('input,select,textarea')[0]) ||
                        a,
                      i = oc(r),
                      u = n._f.refs || [];
                    if (i ? u.find((e) => e === r) : r === n._f.ref) return;
                    Ds(o, e, {
                      _f: {
                        ...n._f,
                        ...(i
                          ? {
                              refs: [...u.filter(lc), r, ...(Array.isArray(hs(l, e)) ? [{}] : [])],
                              ref: { type: r.type, name: e },
                            }
                          : { ref: r }),
                      },
                    }),
                      b(e, !1, void 0, r);
                  } else
                    (n = hs(o, e, {})),
                      n._f && (n._f.mount = !1),
                      (r.shouldUnregister || t.shouldUnregister) &&
                        (!us(s.array, e) || !u.action) &&
                        s.unMount.add(e);
                },
              }
            );
          },
          z = () => r.shouldFocusError && zs(o, A, s.mount),
          F = (e, t) => async (n) => {
            n && (n.preventDefault && n.preventDefault(), n.persist && n.persist());
            let l = ds(i);
            if ((f.state.next({ isSubmitting: !0 }), r.resolver)) {
              const { errors: e, values: t } = await w();
              (a.errors = e), (l = t);
            } else await k(o);
            ec(a.errors, 'root'),
              xs(a.errors)
                ? (f.state.next({ errors: {} }), await e(l, n))
                : (t && (await t({ ...a.errors }, n)), z(), setTimeout(z)),
              f.state.next({
                isSubmitted: !0,
                isSubmitting: !1,
                isSubmitSuccessful: xs(a.errors),
                submitCount: a.submitCount + 1,
                errors: a.errors,
              });
          },
          I = function (e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const c = e ? ds(e) : l,
              h = ds(c),
              m = e && !xs(e) ? h : l;
            if ((r.keepDefaultValues || (l = c), !r.keepValues)) {
              if (r.keepDirtyValues || p)
                for (const e of s.mount) hs(a.dirtyFields, e) ? Ds(m, e, hs(i, e)) : C(e, hs(m, e));
              else {
                if (cs && ps(e))
                  for (const e of s.mount) {
                    const t = hs(o, e);
                    if (t && t._f) {
                      const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                      if (js(e)) {
                        const t = e.closest('form');
                        if (t) {
                          t.reset();
                          break;
                        }
                      }
                    }
                  }
                o = {};
              }
              (i = t.shouldUnregister ? (r.keepDefaultValues ? ds(l) : {}) : ds(m)),
                f.array.next({ values: { ...m } }),
                f.values.next({ values: { ...m } });
            }
            (s = {
              mount: new Set(),
              unMount: new Set(),
              array: new Set(),
              watch: new Set(),
              watchAll: !1,
              focus: '',
            }),
              !u.mount && n(),
              (u.mount = !d.isValid || !!r.keepIsValid),
              (u.watch = !!t.shouldUnregister),
              f.state.next({
                submitCount: r.keepSubmitCount ? a.submitCount : 0,
                isDirty: r.keepDirty ? a.isDirty : !(!r.keepDefaultValues || rc(e, l)),
                isSubmitted: !!r.keepIsSubmitted && a.isSubmitted,
                dirtyFields: r.keepDirtyValues
                  ? a.dirtyFields
                  : r.keepDefaultValues && e
                    ? cc(l, e)
                    : {},
                touchedFields: r.keepTouched ? a.touchedFields : {},
                errors: r.keepErrors ? a.errors : {},
                isSubmitSuccessful: !!r.keepIsSubmitSuccessful && a.isSubmitSuccessful,
                isSubmitting: !1,
              });
          },
          B = (e, t) => I(Bs(e) ? e(i) : e, t);
        return {
          control: {
            register: U,
            unregister: O,
            getFieldState: V,
            handleSubmit: F,
            setError: D,
            _executeSchema: w,
            _getWatch: T,
            _getDirty: E,
            _updateValid: y,
            _removeUnmounted: () => {
              for (const e of s.unMount) {
                const t = hs(o, e);
                t && (t._f.refs ? t._f.refs.every((e) => !lc(e)) : !lc(t._f.ref)) && O(e);
              }
              s.unMount = new Set();
            },
            _updateFieldArray: function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0,
                s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                c = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
              if (r && n) {
                if (((u.action = !0), c && Array.isArray(hs(o, e)))) {
                  const t = n(hs(o, e), r.argA, r.argB);
                  s && Ds(o, e, t);
                }
                if (c && Array.isArray(hs(a.errors, e))) {
                  const t = n(hs(a.errors, e), r.argA, r.argB);
                  s && Ds(a.errors, e, t), gc(a.errors, e);
                }
                if (d.touchedFields && c && Array.isArray(hs(a.touchedFields, e))) {
                  const t = n(hs(a.touchedFields, e), r.argA, r.argB);
                  s && Ds(a.touchedFields, e, t);
                }
                d.dirtyFields && (a.dirtyFields = cc(l, i)),
                  f.state.next({
                    name: e,
                    isDirty: E(e, t),
                    dirtyFields: a.dirtyFields,
                    errors: a.errors,
                    isValid: a.isValid,
                  });
              } else Ds(i, e, t);
            },
            _updateDisabledField: M,
            _getFieldArray: (e) =>
              fs(hs(u.mount ? i : l, e, t.shouldUnregister ? hs(l, e, []) : [])),
            _reset: I,
            _resetDefaultValues: () =>
              Bs(r.defaultValues) &&
              r.defaultValues().then((e) => {
                B(e, r.resetOptions), f.state.next({ isLoading: !1 });
              }),
            _updateFormState: (e) => {
              a = { ...a, ...e };
            },
            _disableForm: (e) => {
              ms(e) &&
                (f.state.next({ disabled: e }),
                zs(
                  o,
                  (t) => {
                    t.disabled = e;
                  },
                  0,
                  !1
                ));
            },
            _subjects: f,
            _proxyFormState: d,
            get _fields() {
              return o;
            },
            get _formValues() {
              return i;
            },
            get _state() {
              return u;
            },
            set _state(e) {
              u = e;
            },
            get _defaultValues() {
              return l;
            },
            get _names() {
              return s;
            },
            set _names(e) {
              s = e;
            },
            get _formState() {
              return a;
            },
            set _formState(e) {
              a = e;
            },
            get _options() {
              return r;
            },
            set _options(e) {
              r = { ...r, ...e };
            },
          },
          trigger: L,
          register: U,
          handleSubmit: F,
          watch: (e, t) =>
            Bs(e) ? f.values.subscribe({ next: (n) => e(T(void 0, t), n) }) : T(e, t, !0),
          setValue: C,
          getValues: P,
          reset: B,
          resetField: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            hs(o, e) &&
              (ps(t.defaultValue)
                ? C(e, hs(l, e))
                : (C(e, t.defaultValue), Ds(l, e, t.defaultValue)),
              t.keepTouched || ec(a.touchedFields, e),
              t.keepDirty ||
                (ec(a.dirtyFields, e), (a.isDirty = t.defaultValue ? E(e, hs(l, e)) : E())),
              t.keepError || (ec(a.errors, e), d.isValid && y()),
              f.state.next({ ...a }));
          },
          clearErrors: (e) => {
            e && Cs(e).forEach((e) => ec(a.errors, e)), f.state.next({ errors: e ? a.errors : {} });
          },
          unregister: O,
          setError: D,
          setFocus: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = hs(o, e),
              r = n && n._f;
            if (r) {
              const e = r.refs ? r.refs[0] : r.ref;
              e.focus && (e.focus(), t.shouldSelect && e.select());
            }
          },
          getFieldState: V,
        };
      }
      const _c = 'style_user_form__--z2+',
        wc = { text_box: 'style_text_box__KfJh3' },
        kc = (e) => {
          let { label: t, onSubmit: n, disabled: r } = e;
          return (0, Qu.jsx)('button', {
            type: 'submit',
            className: wc.submit_button,
            onClick: () => n,
            disabled: r,
            children: t,
          });
        },
        Ec = 'style_text_box__CUBDG',
        Tc = (e) => {
          let { defaultValue: t, onChange: n, register: r } = e;
          return (0, Qu.jsx)('input', {
            className: Ec,
            type: 'text',
            defaultValue: t,
            onChange: n,
            ...r,
          });
        },
        xc = (e) => {
          var n, r;
          let { name: a, birthday: o } = e;
          const {
              handleSubmit: l,
              register: i,
              formState: { errors: u, isValid: s },
            } = (function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const n = t.useRef(),
                r = t.useRef(),
                [a, o] = t.useState({
                  isDirty: !1,
                  isValidating: !1,
                  isLoading: Bs(e.defaultValues),
                  isSubmitted: !1,
                  isSubmitting: !1,
                  isSubmitSuccessful: !1,
                  isValid: !1,
                  submitCount: 0,
                  dirtyFields: {},
                  touchedFields: {},
                  errors: {},
                  disabled: !1,
                  defaultValues: Bs(e.defaultValues) ? void 0 : e.defaultValues,
                });
              n.current || (n.current = { ...Sc(e, () => o((e) => ({ ...e }))), formState: a });
              const l = n.current.control;
              return (
                (l._options = e),
                Ns({
                  subject: l._subjects.state,
                  next: (e) => {
                    Rs(e, l._proxyFormState, l._updateFormState, !0) && o({ ...l._formState });
                  },
                }),
                t.useEffect(() => l._disableForm(e.disabled), [l, e.disabled]),
                t.useEffect(() => {
                  if (l._proxyFormState.isDirty) {
                    const e = l._getDirty();
                    e !== a.isDirty && l._subjects.state.next({ isDirty: e });
                  }
                }, [l, a.isDirty]),
                t.useEffect(() => {
                  e.values && !rc(e.values, r.current)
                    ? (l._reset(e.values, l._options.resetOptions), (r.current = e.values))
                    : l._resetDefaultValues();
                }, [e.values, l]),
                t.useEffect(() => {
                  l._state.mount || (l._updateValid(), (l._state.mount = !0)),
                    l._state.watch &&
                      ((l._state.watch = !1), l._subjects.state.next({ ...l._formState })),
                    l._removeUnmounted();
                }),
                (n.current.formState = Ts(a, l)),
                n.current
              );
            })({
              mode: 'onChange',
              defaultValues: {
                name: null !== a && void 0 !== a ? a : '',
                birthday: null !== o && void 0 !== o ? o : '',
              },
            }),
            c = l((e) => {
              console.log(e, u);
            });
          return (0, Qu.jsxs)('form', {
            className: _c,
            onSubmit: c,
            children: [
              (0, Qu.jsx)(Tc, {
                register: i('name', {
                  required: 'name\u306f\u5fc5\u9808\u3067\u3059',
                  maxLength: {
                    value: 20,
                    message: '\u6700\u5927\u9577\u306f20\u6587\u5b57\u3067\u3059',
                  },
                }),
              }),
              (0, Qu.jsx)('div', {
                children: null === (n = u.name) || void 0 === n ? void 0 : n.message,
              }),
              (0, Qu.jsx)(Tc, {
                register: i('birthday', {
                  required: 'birthday\u306f\u5fc5\u9808\u3067\u3059',
                  maxLength: {
                    value: 20,
                    message: '\u6700\u5927\u9577\u306f20\u6587\u5b57\u3067\u3059',
                  },
                }),
              }),
              (0, Qu.jsx)('div', {
                children: null === (r = u.birthday) || void 0 === r ? void 0 : r.message,
              }),
              (0, Qu.jsx)(kc, { label: '\u9001\u4fe1', onSubmit: c, disabled: !s }),
            ],
          });
        },
        Rc = 'style_user_panel__IQE1-',
        Cc = (e) => {
          let { id: t, name: n } = e;
          return (0, Qu.jsxs)('div', {
            className: Rc,
            children: [(0, Qu.jsx)('div', { children: t }), (0, Qu.jsx)('div', { children: n })],
          });
        },
        Nc = () =>
          (0, Qu.jsxs)('div', {
            children: [
              (0, Qu.jsx)('h1', { children: 'Users' }),
              (0, Qu.jsx)(Cc, { id: '1', name: 'John' }),
              (0, Qu.jsx)(Cc, { id: '2', name: 'Jane' }),
              (0, Qu.jsx)(xc, {}),
            ],
          });
      const Ac = function () {
          return (
            ju(Hu)({ id: '1', name: 'test', isAdmin: !0 }),
            (0, Qu.jsxs)('div', {
              className: Wu,
              children: [
                (0, Qu.jsx)(Ju, {}),
                (0, Qu.jsxs)(fe, {
                  children: [
                    (0, Qu.jsx)(ce, { path: '/', element: (0, Qu.jsx)(ts, {}) }),
                    (0, Qu.jsx)(ce, { path: '/users', element: (0, Qu.jsx)(Nc, {}) }),
                    (0, Qu.jsx)(ce, { path: '*', element: (0, Qu.jsx)(es, {}) }),
                  ],
                }),
                (0, Qu.jsx)(Yu, {}),
              ],
            })
          );
        },
        Lc = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(27)
              .then(n.bind(n, 27))
              .then((t) => {
                let { getCLS: n, getFID: r, getFCP: a, getLCP: o, getTTFB: l } = t;
                n(e), r(e), a(e), o(e), l(e);
              });
        };
      Ce.createRoot(document.getElementById('root')).render(
        (0, Qu.jsx)(Iu, { children: (0, Qu.jsx)(Se, { children: (0, Qu.jsx)(Ac, {}) }) })
      ),
        Lc();
    })();
})();
