! function (t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function (x, t) {
	function a(t) {
		var e = !!t && "length" in t && t.length,
			n = ft.type(t);
		return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
	}

	function e(t, n, i) {
		if (ft.isFunction(n)) return ft.grep(t, function (t, e) {
			return !!n.call(t, e, t) !== i
		});
		if (n.nodeType) return ft.grep(t, function (t) {
			return t === n !== i
		});
		if ("string" == typeof n) {
			if (xt.test(n)) return ft.filter(n, t, i);
			n = ft.filter(n, t)
		}
		return ft.grep(t, function (t) {
			return -1 < ft.inArray(t, n) !== i
		})
	}

	function n(t, e) {
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}

	function u(t) {
		var n = {};
		return ft.each(t.match(Ot) || [], function (t, e) {
			n[e] = !0
		}), n
	}

	function r() {
		rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", s), x.removeEventListener("load", s)) : (rt.detachEvent("onreadystatechange", s), x.detachEvent("onload", s))
	}

	function s() {
		(rt.addEventListener || "load" === x.event.type || "complete" === rt.readyState) && (r(), ft.ready())
	}

	function l(t, e, n) {
		if (n === undefined && 1 === t.nodeType) {
			var i = "data-" + e.replace(Ft, "-$1").toLowerCase();
			if ("string" == typeof (n = t.getAttribute(i))) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Mt.test(n) ? ft.parseJSON(n) : n)
				} catch (r) {}
				ft.data(t, e, n)
			} else n = undefined
		}
		return n
	}

	function c(t) {
		var e;
		for (e in t)
			if (("data" !== e || !ft.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
		return !0
	}

	function i(t, e, n, i) {
		if ($t(t)) {
			var r, s, o = ft.expando,
				a = t.nodeType,
				l = a ? ft.cache : t,
				c = a ? t[o] : t[o] && o;
			if (c && l[c] && (i || l[c].data) || n !== undefined || "string" != typeof e) return c || (c = a ? t[o] = it.pop() || ft.guid++ : o), l[c] || (l[c] = a ? {} : {
				toJSON: ft.noop
			}), "object" != typeof e && "function" != typeof e || (i ? l[c] = ft.extend(l[c], e) : l[c].data = ft.extend(l[c].data, e)), s = l[c], i || (s.data || (s.data = {}), s = s.data), n !== undefined && (s[ft.camelCase(e)] = n), "string" == typeof e ? null == (r = s[e]) && (r = s[ft.camelCase(e)]) : r = s, r
		}
	}

	function o(t, e, n) {
		if ($t(t)) {
			var i, r, s = t.nodeType,
				o = s ? ft.cache : t,
				a = s ? t[ft.expando] : ft.expando;
			if (o[a]) {
				if (e && (i = n ? o[a] : o[a].data)) {
					r = (e = ft.isArray(e) ? e.concat(ft.map(e, ft.camelCase)) : e in i ? [e] : (e = ft.camelCase(e)) in i ? [e] : e.split(" ")).length;
					for (; r--;) delete i[e[r]];
					if (n ? !c(i) : !ft.isEmptyObject(i)) return
				}(n || (delete o[a].data, c(o[a]))) && (s ? ft.cleanData([t], !0) : ht.deleteExpando || o != o.window ? delete o[a] : o[a] = undefined)
			}
		}
	}

	function p(t, e, n, i) {
		var r, s = 1,
			o = 20,
			a = i ? function () {
				return i.cur()
			} : function () {
				return ft.css(t, e, "")
			},
			l = a(),
			c = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
			u = (ft.cssNumber[e] || "px" !== c && +l) && Ht.exec(ft.css(t, e));
		if (u && u[3] !== c)
			for (c = c || u[3], n = n || [], u = +l || 1; u /= s = s || ".5", ft.style(t, e, u + c), s !== (s = a() / l) && 1 !== s && --o;);
		return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
	}

	function m(t) {
		var e = Yt.split("|"),
			n = t.createDocumentFragment();
		if (n.createElement)
			for (; e.length;) n.createElement(e.pop());
		return n
	}

	function y(t, e) {
		var n, i, r = 0,
			s = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
		if (!s)
			for (s = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || ft.nodeName(i, e) ? s.push(i) : ft.merge(s, y(i, e));
		return e === undefined || e && ft.nodeName(t, e) ? ft.merge([t], s) : s
	}

	function v(t, e) {
		for (var n, i = 0; null != (n = t[i]); i++) ft._data(n, "globalEval", !e || ft._data(e[i], "globalEval"))
	}

	function w(t) {
		Vt.test(t.type) && (t.defaultChecked = t.checked)
	}

	function g(t, e, n, i, r) {
		for (var s, o, a, l, c, u, p, h = t.length, d = m(e), f = [], g = 0; g < h; g++)
			if ((o = t[g]) || 0 === o)
				if ("object" === ft.type(o)) ft.merge(f, o.nodeType ? [o] : o);
				else if (Qt.test(o)) {
			for (l = l || d.appendChild(e.createElement("div")), c = (Bt.exec(o) || ["", ""])[1].toLowerCase(), p = Gt[c] || Gt._default, l.innerHTML = p[1] + ft.htmlPrefilter(o) + p[2], s = p[0]; s--;) l = l.lastChild;
			if (!ht.leadingWhitespace && Ut.test(o) && f.push(e.createTextNode(Ut.exec(o)[0])), !ht.tbody)
				for (s = (o = "table" !== c || Xt.test(o) ? "<table>" !== p[1] || Xt.test(o) ? 0 : l : l.firstChild) && o.childNodes.length; s--;) ft.nodeName(u = o.childNodes[s], "tbody") && !u.childNodes.length && o.removeChild(u);
			for (ft.merge(f, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
			l = d.lastChild
		} else f.push(e.createTextNode(o));
		for (l && d.removeChild(l), ht.appendChecked || ft.grep(y(f, "input"), w), g = 0; o = f[g++];)
			if (i && -1 < ft.inArray(o, i)) r && r.push(o);
			else if (a = ft.contains(o.ownerDocument, o), l = y(d.appendChild(o), "script"), a && v(l), n)
			for (s = 0; o = l[s++];) Wt.test(o.type || "") && n.push(o);
		return l = null, d
	}

	function h() {
		return !0
	}

	function d() {
		return !1
	}

	function f() {
		try {
			return rt.activeElement
		} catch (t) {}
	}

	function b(t, e, n, i, r, s) {
		var o, a;
		if ("object" == typeof e) {
			for (a in "string" != typeof n && (i = i || n, n = undefined), e) b(t, a, n, i, e[a], s);
			return t
		}
		if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = d;
		else if (!r) return t;
		return 1 === s && (o = r, (r = function (t) {
			return ft().off(t), o.apply(this, arguments)
		}).guid = o.guid || (o.guid = ft.guid++)), t.each(function () {
			ft.event.add(this, e, r, i, n)
		})
	}

	function S(t, e) {
		return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function k(t) {
		return t.type = (null !== ft.find.attr(t, "type")) + "/" + t.type, t
	}

	function T(t) {
		var e = le.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function A(t, e) {
		if (1 === e.nodeType && ft.hasData(t)) {
			var n, i, r, s = ft._data(t),
				o = ft._data(e, s),
				a = s.events;
			if (a)
				for (n in delete o.handle, o.events = {}, a)
					for (i = 0, r = a[n].length; i < r; i++) ft.event.add(e, n, a[n][i]);
			o.data && (o.data = ft.extend({}, o.data))
		}
	}

	function C(t, e) {
		var n, i, r;
		if (1 === e.nodeType) {
			if (n = e.nodeName.toLowerCase(), !ht.noCloneEvent && e[ft.expando]) {
				for (i in (r = ft._data(e)).events) ft.removeEvent(e, i, r.handle);
				e.removeAttribute(ft.expando)
			}
			"script" === n && e.text !== t.text ? (k(e).text = t.text, T(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ht.html5Clone && t.innerHTML && !ft.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Vt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
		}
	}

	function j(n, i, r, s) {
		i = ot.apply([], i);
		var t, e, o, a, l, c, u = 0,
			p = n.length,
			h = p - 1,
			d = i[0],
			f = ft.isFunction(d);
		if (f || 1 < p && "string" == typeof d && !ht.checkClone && ae.test(d)) return n.each(function (t) {
			var e = n.eq(t);
			f && (i[0] = d.call(this, t, e.html())), j(e, i, r, s)
		});
		if (p && (t = (c = g(i, n[0].ownerDocument, !1, n, s)).firstChild, 1 === c.childNodes.length && (c = t), t || s)) {
			for (o = (a = ft.map(y(c, "script"), k)).length; u < p; u++) e = c, u !== h && (e = ft.clone(e, !0, !0), o && ft.merge(a, y(e, "script"))), r.call(n[u], e, u);
			if (o)
				for (l = a[a.length - 1].ownerDocument, ft.map(a, T), u = 0; u < o; u++) e = a[u], Wt.test(e.type || "") && !ft._data(e, "globalEval") && ft.contains(l, e) && (e.src ? ft._evalUrl && ft._evalUrl(e.src) : ft.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ce, "")));
			c = t = null
		}
		return n
	}

	function J(t, e, n) {
		for (var i, r = e ? ft.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || ft.cleanData(y(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && v(y(i, "script")), i.parentNode.removeChild(i));
		return t
	}

	function P(t, e) {
		var n = ft(e.createElement(t)).appendTo(e.body),
			i = ft.css(n[0], "display");
		return n.detach(), i
	}

	function O(t) {
		var e = rt,
			n = he[t];
		return n || ("none" !== (n = P(t, e)) && n || ((e = ((pe = (pe || ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || pe[0].contentDocument).document).write(), e.close(), n = P(t, e), pe.detach()), he[t] = n), n
	}

	function E(t, e) {
		return {
			get: function () {
				if (!t()) return (this.get = e).apply(this, arguments);
				delete this.get
			}
		}
	}

	function $(t) {
		if (t in Ce) return t;
		for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ae.length; n--;)
			if ((t = Ae[n] + e) in Ce) return t
	}

	function M(t, e) {
		for (var n, i, r, s = [], o = 0, a = t.length; o < a; o++)(i = t[o]).style && (s[o] = ft._data(i, "olddisplay"), n = i.style.display, e ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && qt(i) && (s[o] = ft._data(i, "olddisplay", O(i.nodeName)))) : (r = qt(i), (n && "none" !== n || !r) && ft._data(i, "olddisplay", r ? n : ft.css(i, "display"))));
		for (o = 0; o < a; o++)(i = t[o]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none"));
		return t
	}

	function F(t, e, n) {
		var i = _e.exec(e);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
	}

	function L(t, e, n, i, r) {
		for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; s < 4; s += 2) "margin" === n && (o += ft.css(t, n + zt[s], !0, r)), i ? ("content" === n && (o -= ft.css(t, "padding" + zt[s], !0, r)), "margin" !== n && (o -= ft.css(t, "border" + zt[s] + "Width", !0, r))) : (o += ft.css(t, "padding" + zt[s], !0, r), "padding" !== n && (o += ft.css(t, "border" + zt[s] + "Width", !0, r)));
		return o
	}

	function D(t, e, n) {
		var i = !0,
			r = "width" === e ? t.offsetWidth : t.offsetHeight,
			s = ye(t),
			o = ht.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, s);
		if (r <= 0 || null == r) {
			if (((r = ve(t, e, s)) < 0 || null == r) && (r = t.style[e]), fe.test(r)) return r;
			i = o && (ht.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
		}
		return r + L(t, e, n || (o ? "border" : "content"), i, s) + "px"
	}

	function I(t, e, n, i, r) {
		return new I.prototype.init(t, e, n, i, r)
	}

	function N() {
		return x.setTimeout(function () {
			je = undefined
		}), je = ft.now()
	}

	function H(t, e) {
		var n, i = {
				height: t
			},
			r = 0;
		for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = zt[r])] = i["padding" + n] = t;
		return e && (i.opacity = i.width = t), i
	}

	function z(t, e, n) {
		for (var i, r = (V.tweeners[e] || []).concat(V.tweeners["*"]), s = 0, o = r.length; s < o; s++)
			if (i = r[s].call(n, e, t)) return i
	}

	function q(e, t, n) {
		var i, r, s, o, a, l, c, u = this,
			p = {},
			h = e.style,
			d = e.nodeType && qt(e),
			f = ft._data(e, "fxshow");
		for (i in n.queue || (null == (a = ft._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
				a.unqueued || l()
			}), a.unqueued++, u.always(function () {
				u.always(function () {
					a.unqueued--, ft.queue(e, "fx").length || a.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = ft.css(e, "display")) ? ft._data(e, "olddisplay") || O(e.nodeName) : c) && "none" === ft.css(e, "float") && (ht.inlineBlockNeedsLayout && "inline" !== O(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ht.shrinkWrapBlocks() || u.always(function () {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			})), t)
			if (r = t[i], Fe.exec(r)) {
				if (delete t[i], s = s || "toggle" === r, r === (d ? "hide" : "show")) {
					if ("show" !== r || !f || f[i] === undefined) continue;
					d = !0
				}
				p[i] = f && f[i] || ft.style(e, i)
			} else c = undefined;
		if (ft.isEmptyObject(p)) "inline" === ("none" === c ? O(e.nodeName) : c) && (h.display = c);
		else
			for (i in f ? "hidden" in f && (d = f.hidden) : f = ft._data(e, "fxshow", {}), s && (f.hidden = !d), d ? ft(e).show() : u.done(function () {
					ft(e).hide()
				}), u.done(function () {
					var t;
					for (t in ft._removeData(e, "fxshow"), p) ft.style(e, t, p[t])
				}), p) o = z(d ? f[i] : 0, i, u), i in f || (f[i] = o.start, d && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
	}

	function R(t, e) {
		var n, i, r, s, o;
		for (n in t)
			if (r = e[i = ft.camelCase(n)], s = t[n], ft.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (o = ft.cssHooks[i]) && "expand" in o)
				for (n in s = o.expand(s), delete t[i], s) n in t || (t[n] = s[n], e[n] = r);
			else e[i] = r
	}

	function V(s, t, e) {
		var n, o, i = 0,
			r = V.prefilters.length,
			a = ft.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (o) return !1;
				for (var t = je || N(), e = Math.max(0, c.startTime + c.duration - t), n = 1 - (e / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
				return a.notifyWith(s, [c, n, e]), n < 1 && r ? e : (a.resolveWith(s, [c]), !1)
			},
			c = a.promise({
				elem: s,
				props: ft.extend({}, t),
				opts: ft.extend(!0, {
					specialEasing: {},
					easing: ft.easing._default
				}, e),
				originalProperties: t,
				originalOptions: e,
				startTime: je || N(),
				duration: e.duration,
				tweens: [],
				createTween: function (t, e) {
					var n = ft.Tween(s, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(n), n
				},
				stop: function (t) {
					var e = 0,
						n = t ? c.tweens.length : 0;
					if (o) return this;
					for (o = !0; e < n; e++) c.tweens[e].run(1);
					return t ? (a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c, t])) : a.rejectWith(s, [c, t]), this
				}
			}),
			u = c.props;
		for (R(u, c.opts.specialEasing); i < r; i++)
			if (n = V.prefilters[i].call(c, s, u, c.opts)) return ft.isFunction(n.stop) && (ft._queueHooks(c.elem, c.opts.queue).stop = ft.proxy(n.stop, n)), n;
		return ft.map(u, z, c), ft.isFunction(c.opts.start) && c.opts.start.call(s, c), ft.fx.timer(ft.extend(l, {
			elem: s,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function B(t) {
		return ft.attr(t, "class") || ""
	}

	function W(s) {
		return function (t, e) {
			"string" != typeof t && (e = t, t = "*");
			var n, i = 0,
				r = t.toLowerCase().match(Ot) || [];
			if (ft.isFunction(e))
				for (; n = r[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (s[n] = s[n] || []).unshift(e)) : (s[n] = s[n] || []).push(e)
		}
	}

	function U(e, r, s, o) {
		function a(t) {
			var i;
			return l[t] = !0, ft.each(e[t] || [], function (t, e) {
				var n = e(r, s, o);
				return "string" != typeof n || c || l[n] ? c ? !(i = n) : void 0 : (r.dataTypes.unshift(n), a(n), !1)
			}), i
		}
		var l = {},
			c = e === an;
		return a(r.dataTypes[0]) || !l["*"] && a("*")
	}

	function Y(t, e) {
		var n, i, r = ft.ajaxSettings.flatOptions || {};
		for (i in e) e[i] !== undefined && ((r[i] ? t : n || (n = {}))[i] = e[i]);
		return n && ft.extend(!0, t, n), t
	}

	function G(t, e, n) {
		for (var i, r, s, o, a = t.contents, l = t.dataTypes;
			"*" === l[0];) l.shift(), r === undefined && (r = t.mimeType || e.getResponseHeader("Content-Type"));
		if (r)
			for (o in a)
				if (a[o] && a[o].test(r)) {
					l.unshift(o);
					break
				}
		if (l[0] in n) s = l[0];
		else {
			for (o in n) {
				if (!l[0] || t.converters[o + " " + l[0]]) {
					s = o;
					break
				}
				i || (i = o)
			}
			s = s || i
		}
		if (s) return s !== l[0] && l.unshift(s), n[s]
	}

	function Q(t, e, n, i) {
		var r, s, o, a, l, c = {},
			u = t.dataTypes.slice();
		if (u[1])
			for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
		for (s = u.shift(); s;)
			if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
				if ("*" === s) s = l;
				else if ("*" !== l && l !== s) {
			if (!(o = c[l + " " + s] || c["* " + s]))
				for (r in c)
					if ((a = r.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
						!0 === o ? o = c[r] : !0 !== c[r] && (s = a[0], u.unshift(a[1]));
						break
					}
			if (!0 !== o)
				if (o && t["throws"]) e = o(e);
				else try {
					e = o(e)
				} catch (p) {
					return {
						state: "parsererror",
						error: o ? p : "No conversion from " + l + " to " + s
					}
				}
		}
		return {
			state: "success",
			data: e
		}
	}

	function X(t) {
		return t.style && t.style.display || ft.css(t, "display")
	}

	function K(t) {
		if (!ft.contains(t.ownerDocument || rt, t)) return !0;
		for (; t && 1 === t.nodeType;) {
			if ("none" === X(t) || "hidden" === t.type) return !0;
			t = t.parentNode
		}
		return !1
	}

	function Z(n, t, i, r) {
		var e;
		if (ft.isArray(t)) ft.each(t, function (t, e) {
			i || hn.test(n) ? r(n, e) : Z(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, r)
		});
		else if (i || "object" !== ft.type(t)) r(n, t);
		else
			for (e in t) Z(n + "[" + e + "]", t[e], i, r)
	}

	function tt() {
		try {
			return new x.XMLHttpRequest
		} catch (t) {}
	}

	function et() {
		try {
			return new x.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}

	function nt(t) {
		return ft.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
	}
	var it = [],
		rt = x.document,
		st = it.slice,
		ot = it.concat,
		at = it.push,
		lt = it.indexOf,
		ct = {},
		ut = ct.toString,
		pt = ct.hasOwnProperty,
		ht = {},
		dt = "1.12.4",
		ft = function (t, e) {
			return new ft.fn.init(t, e)
		},
		gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		mt = /^-ms-/,
		yt = /-([\da-z])/gi,
		vt = function (t, e) {
			return e.toUpperCase()
		};
	ft.fn = ft.prototype = {
		jquery: dt,
		constructor: ft,
		selector: "",
		length: 0,
		toArray: function () {
			return st.call(this)
		},
		get: function (t) {
			return null != t ? t < 0 ? this[t + this.length] : this[t] : st.call(this)
		},
		pushStack: function (t) {
			var e = ft.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function (t) {
			return ft.each(this, t)
		},
		map: function (n) {
			return this.pushStack(ft.map(this, function (t, e) {
				return n.call(t, e, t)
			}))
		},
		slice: function () {
			return this.pushStack(st.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (t) {
			var e = this.length,
				n = +t + (t < 0 ? e : 0);
			return this.pushStack(0 <= n && n < e ? [this[n]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: at,
		sort: it.sort,
		splice: it.splice
	}, ft.extend = ft.fn.extend = function (t) {
		var e, n, i, r, s, o, a = t || {},
			l = 1,
			c = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" == typeof a || ft.isFunction(a) || (a = {}), l === c && (a = this, l--); l < c; l++)
			if (null != (s = arguments[l]))
				for (r in s) e = a[r], a !== (i = s[r]) && (u && i && (ft.isPlainObject(i) || (n = ft.isArray(i))) ? (n ? (n = !1, o = e && ft.isArray(e) ? e : []) : o = e && ft.isPlainObject(e) ? e : {}, a[r] = ft.extend(u, o, i)) : i !== undefined && (a[r] = i));
		return a
	}, ft.extend({
		expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (t) {
			throw new Error(t)
		},
		noop: function () {},
		isFunction: function (t) {
			return "function" === ft.type(t)
		},
		isArray: Array.isArray || function (t) {
			return "array" === ft.type(t)
		},
		isWindow: function (t) {
			return null != t && t == t.window
		},
		isNumeric: function (t) {
			var e = t && t.toString();
			return !ft.isArray(t) && 0 <= e - parseFloat(e) + 1
		},
		isEmptyObject: function (t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		isPlainObject: function (t) {
			var e;
			if (!t || "object" !== ft.type(t) || t.nodeType || ft.isWindow(t)) return !1;
			try {
				if (t.constructor && !pt.call(t, "constructor") && !pt.call(t.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (!ht.ownFirst)
				for (e in t) return pt.call(t, e);
			for (e in t);
			return e === undefined || pt.call(t, e)
		},
		type: function (t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ct[ut.call(t)] || "object" : typeof t
		},
		globalEval: function (t) {
			t && ft.trim(t) && (x.execScript || function (t) {
				x.eval.call(x, t)
			})(t)
		},
		camelCase: function (t) {
			return t.replace(mt, "ms-").replace(yt, vt)
		},
		nodeName: function (t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function (t, e) {
			var n, i = 0;
			if (a(t))
				for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
			else
				for (i in t)
					if (!1 === e.call(t[i], i, t[i])) break;
			return t
		},
		trim: function (t) {
			return null == t ? "" : (t + "").replace(gt, "")
		},
		makeArray: function (t, e) {
			var n = e || [];
			return null != t && (a(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : at.call(n, t)), n
		},
		inArray: function (t, e, n) {
			var i;
			if (e) {
				if (lt) return lt.call(e, t, n);
				for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
					if (n in e && e[n] === t) return n
			}
			return -1
		},
		merge: function (t, e) {
			for (var n = +e.length, i = 0, r = t.length; i < n;) t[r++] = e[i++];
			if (n != n)
				for (; e[i] !== undefined;) t[r++] = e[i++];
			return t.length = r, t
		},
		grep: function (t, e, n) {
			for (var i = [], r = 0, s = t.length, o = !n; r < s; r++) !e(t[r], r) !== o && i.push(t[r]);
			return i
		},
		map: function (t, e, n) {
			var i, r, s = 0,
				o = [];
			if (a(t))
				for (i = t.length; s < i; s++) null != (r = e(t[s], s, n)) && o.push(r);
			else
				for (s in t) null != (r = e(t[s], s, n)) && o.push(r);
			return ot.apply([], o)
		},
		guid: 1,
		proxy: function (t, e) {
			var n, i, r;
			return "string" == typeof e && (r = t[e], e = t, t = r), ft.isFunction(t) ? (n = st.call(arguments, 2), (i = function () {
				return t.apply(e || this, n.concat(st.call(arguments)))
			}).guid = t.guid = t.guid || ft.guid++, i) : undefined
		},
		now: function () {
			return +new Date
		},
		support: ht
	}), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = it[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
		ct["[object " + e + "]"] = e.toLowerCase()
	});
	var wt = function (n) {
		function b(t, e, n, i) {
			var r, s, o, a, l, c, u, p, h = e && e.ownerDocument,
				d = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
			if (!i && ((e ? e.ownerDocument || e : H) !== E && O(e), e = e || E, M)) {
				if (11 !== d && (c = yt.exec(t)))
					if (r = c[1]) {
						if (9 === d) {
							if (!(o = e.getElementById(r))) return n;
							if (o.id === r) return n.push(o), n
						} else if (h && (o = h.getElementById(r)) && I(e, o) && o.id === r) return n.push(o), n
					} else {
						if (c[2]) return K.apply(n, e.getElementsByTagName(t)), n;
						if ((r = c[3]) && y.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(r)), n
					}
				if (y.qsa && !B[t + " "] && (!F || !F.test(t))) {
					if (1 !== d) h = e, p = t;
					else if ("object" !== e.nodeName.toLowerCase()) {
						for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = N), s = (u = T(t)).length, l = ht.test(a) ? "#" + a : "[id='" + a + "']"; s--;) u[s] = l + " " + m(u[s]);
						p = u.join(","), h = vt.test(t) && g(e.parentNode) || e
					}
					if (p) try {
						return K.apply(n, h.querySelectorAll(p)), n
					} catch (f) {} finally {
						a === N && e.removeAttribute("id")
					}
				}
			}
			return C(t.replace(at, "$1"), e, n, i)
		}

		function t() {
			function n(t, e) {
				return i.push(t + " ") > k.cacheLength && delete n[i.shift()], n[t + " "] = e
			}
			var i = [];
			return n
		}

		function l(t) {
			return t[N] = !0, t
		}

		function r(t) {
			var e = E.createElement("div");
			try {
				return !!t(e)
			} catch (n) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function e(t, e) {
			for (var n = t.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = e
		}

		function c(t, e) {
			var n = e && t,
				i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === e) return -1;
			return t ? 1 : -1
		}

		function i(e) {
			return function (t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}

		function s(n) {
			return function (t) {
				var e = t.nodeName.toLowerCase();
				return ("input" === e || "button" === e) && t.type === n
			}
		}

		function o(o) {
			return l(function (s) {
				return s = +s, l(function (t, e) {
					for (var n, i = o([], t.length, s), r = i.length; r--;) t[n = i[r]] && (t[n] = !(e[n] = t[n]))
				})
			})
		}

		function g(t) {
			return t && "undefined" != typeof t.getElementsByTagName && t
		}

		function a() {}

		function m(t) {
			for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
			return i
		}

		function p(a, t, e) {
			var l = t.dir,
				c = e && "parentNode" === l,
				u = q++;
			return t.first ? function (t, e, n) {
				for (; t = t[l];)
					if (1 === t.nodeType || c) return a(t, e, n)
			} : function (t, e, n) {
				var i, r, s, o = [z, u];
				if (n) {
					for (; t = t[l];)
						if ((1 === t.nodeType || c) && a(t, e, n)) return !0
				} else
					for (; t = t[l];)
						if (1 === t.nodeType || c) {
							if ((i = (r = (s = t[N] || (t[N] = {}))[t.uniqueID] || (s[t.uniqueID] = {}))[l]) && i[0] === z && i[1] === u) return o[2] = i[2];
							if ((r[l] = o)[2] = a(t, e, n)) return !0
						}
			}
		}

		function h(r) {
			return 1 < r.length ? function (t, e, n) {
				for (var i = r.length; i--;)
					if (!r[i](t, e, n)) return !1;
				return !0
			} : r[0]
		}

		function v(t, e, n) {
			for (var i = 0, r = e.length; i < r; i++) b(t, e[i], n);
			return n
		}

		function S(t, e, n, i, r) {
			for (var s, o = [], a = 0, l = t.length, c = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), c && e.push(a)));
			return o
		}

		function w(d, f, g, m, y, t) {
			return m && !m[N] && (m = w(m)), y && !y[N] && (y = w(y, t)), l(function (t, e, n, i) {
				var r, s, o, a = [],
					l = [],
					c = e.length,
					u = t || v(f || "*", n.nodeType ? [n] : n, []),
					p = !d || !t && f ? u : S(u, a, d, n, i),
					h = g ? y || (t ? d : c || m) ? [] : e : p;
				if (g && g(p, h, n, i), m)
					for (r = S(h, l), m(r, [], n, i), s = r.length; s--;)(o = r[s]) && (h[l[s]] = !(p[l[s]] = o));
				if (t) {
					if (y || d) {
						if (y) {
							for (r = [], s = h.length; s--;)(o = h[s]) && r.push(p[s] = o);
							y(null, h = [], r, i)
						}
						for (s = h.length; s--;)(o = h[s]) && -1 < (r = y ? tt(t, o) : a[s]) && (t[r] = !(e[r] = o))
					}
				} else h = S(h === e ? h.splice(c, h.length) : h), y ? y(null, e, h, i) : K.apply(e, h)
			})
		}

		function d(t) {
			for (var r, e, n, i = t.length, s = k.relative[t[0].type], o = s || k.relative[" "], a = s ? 1 : 0, l = p(function (t) {
					return t === r
				}, o, !0), c = p(function (t) {
					return -1 < tt(r, t)
				}, o, !0), u = [function (t, e, n) {
					var i = !s && (n || e !== j) || ((r = e).nodeType ? l(t, e, n) : c(t, e, n));
					return r = null, i
				}]; a < i; a++)
				if (e = k.relative[t[a].type]) u = [p(h(u), e)];
				else {
					if ((e = k.filter[t[a].type].apply(null, t[a].matches))[N]) {
						for (n = ++a; n < i && !k.relative[t[n].type]; n++);
						return w(1 < a && h(u), 1 < a && m(t.slice(0, a - 1).concat({
							value: " " === t[a - 2].type ? "*" : ""
						})).replace(at, "$1"), e, a < n && d(t.slice(a, n)), n < i && d(t = t.slice(n)), n < i && m(t))
					}
					u.push(e)
				}
			return h(u)
		}

		function u(m, y) {
			var v = 0 < y.length,
				w = 0 < m.length,
				t = function (t, e, n, i, r) {
					var s, o, a, l = 0,
						c = "0",
						u = t && [],
						p = [],
						h = j,
						d = t || w && k.find.TAG("*", r),
						f = z += null == h ? 1 : Math.random() || .1,
						g = d.length;
					for (r && (j = e === E || e || r); c !== g && null != (s = d[c]); c++) {
						if (w && s) {
							for (o = 0, e || s.ownerDocument === E || (O(s), n = !M); a = m[o++];)
								if (a(s, e || E, n)) {
									i.push(s);
									break
								}
							r && (z = f)
						}
						v && ((s = !a && s) && l--, t && u.push(s))
					}
					if (l += c, v && c !== l) {
						for (o = 0; a = y[o++];) a(u, p, e, n);
						if (t) {
							if (0 < l)
								for (; c--;) u[c] || p[c] || (p[c] = Q.call(i));
							p = S(p)
						}
						K.apply(i, p), r && !t && 0 < p.length && 1 < l + y.length && b.uniqueSort(i)
					}
					return r && (z = f, j = h), u
				};
			return v ? l(t) : t
		}
		var f, y, k, _, x, T, A, C, j, J, P, O, E, $, M, F, L, D, I, N = "sizzle" + 1 * new Date,
			H = n.document,
			z = 0,
			q = 0,
			R = t(),
			V = t(),
			B = t(),
			W = function (t, e) {
				return t === e && (P = !0), 0
			},
			U = 1 << 31,
			Y = {}.hasOwnProperty,
			G = [],
			Q = G.pop,
			X = G.push,
			K = G.push,
			Z = G.slice,
			tt = function (t, e) {
				for (var n = 0, i = t.length; n < i; n++)
					if (t[n] === e) return n;
				return -1
			},
			et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			nt = "[\\x20\\t\\r\\n\\f]",
			it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
			st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
			ot = new RegExp(nt + "+", "g"),
			at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
			lt = new RegExp("^" + nt + "*," + nt + "*"),
			ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
			ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
			pt = new RegExp(st),
			ht = new RegExp("^" + it + "$"),
			dt = {
				ID: new RegExp("^#(" + it + ")"),
				CLASS: new RegExp("^\\.(" + it + ")"),
				TAG: new RegExp("^(" + it + "|[*])"),
				ATTR: new RegExp("^" + rt),
				PSEUDO: new RegExp("^" + st),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + et + ")$", "i"),
				needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
			},
			ft = /^(?:input|select|textarea|button)$/i,
			gt = /^h\d$/i,
			mt = /^[^{]+\{\s*\[native \w/,
			yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			vt = /[+~]/,
			wt = /'|\\/g,
			bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
			St = function (t, e, n) {
				var i = "0x" + e - 65536;
				return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			kt = function () {
				O()
			};
		try {
			K.apply(G = Z.call(H.childNodes), H.childNodes), G[H.childNodes.length].nodeType
		} catch (_t) {
			K = {
				apply: G.length ? function (t, e) {
					X.apply(t, Z.call(e))
				} : function (t, e) {
					for (var n = t.length, i = 0; t[n++] = e[i++];);
					t.length = n - 1
				}
			}
		}
		for (f in y = b.support = {}, x = b.isXML = function (t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return !!e && "HTML" !== e.nodeName
			}, O = b.setDocument = function (t) {
				var e, n, i = t ? t.ownerDocument || t : H;
				return i !== E && 9 === i.nodeType && i.documentElement && ($ = (E = i).documentElement, M = !x(E), (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), y.attributes = r(function (t) {
					return t.className = "i", !t.getAttribute("className")
				}), y.getElementsByTagName = r(function (t) {
					return t.appendChild(E.createComment("")), !t.getElementsByTagName("*").length
				}), y.getElementsByClassName = mt.test(E.getElementsByClassName), y.getById = r(function (t) {
					return $.appendChild(t).id = N, !E.getElementsByName || !E.getElementsByName(N).length
				}), y.getById ? (k.find.ID = function (t, e) {
					if ("undefined" != typeof e.getElementById && M) {
						var n = e.getElementById(t);
						return n ? [n] : []
					}
				}, k.filter.ID = function (t) {
					var e = t.replace(bt, St);
					return function (t) {
						return t.getAttribute("id") === e
					}
				}) : (delete k.find.ID, k.filter.ID = function (t) {
					var n = t.replace(bt, St);
					return function (t) {
						var e = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
						return e && e.value === n
					}
				}), k.find.TAG = y.getElementsByTagName ? function (t, e) {
					return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : y.qsa ? e.querySelectorAll(t) : void 0
				} : function (t, e) {
					var n, i = [],
						r = 0,
						s = e.getElementsByTagName(t);
					if ("*" !== t) return s;
					for (; n = s[r++];) 1 === n.nodeType && i.push(n);
					return i
				}, k.find.CLASS = y.getElementsByClassName && function (t, e) {
					if ("undefined" != typeof e.getElementsByClassName && M) return e.getElementsByClassName(t)
				}, L = [], F = [], (y.qsa = mt.test(E.querySelectorAll)) && (r(function (t) {
					$.appendChild(t).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + N + "-]").length || F.push("~="), t.querySelectorAll(":checked").length || F.push(":checked"), t.querySelectorAll("a#" + N + "+*").length || F.push(".#.+[+~]")
				}), r(function (t) {
					var e = E.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
				})), (y.matchesSelector = mt.test(D = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && r(function (t) {
					y.disconnectedMatch = D.call(t, "div"), D.call(t, "[s!='']:x"), L.push("!=", st)
				}), F = F.length && new RegExp(F.join("|")), L = L.length && new RegExp(L.join("|")), e = mt.test($.compareDocumentPosition), I = e || mt.test($.contains) ? function (t, e) {
					var n = 9 === t.nodeType ? t.documentElement : t,
						i = e && e.parentNode;
					return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
				} : function (t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, W = e ? function (t, e) {
					if (t === e) return P = !0, 0;
					var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !y.sortDetached && e.compareDocumentPosition(t) === n ? t === E || t.ownerDocument === H && I(H, t) ? -1 : e === E || e.ownerDocument === H && I(H, e) ? 1 : J ? tt(J, t) - tt(J, e) : 0 : 4 & n ? -1 : 1)
				} : function (t, e) {
					if (t === e) return P = !0, 0;
					var n, i = 0,
						r = t.parentNode,
						s = e.parentNode,
						o = [t],
						a = [e];
					if (!r || !s) return t === E ? -1 : e === E ? 1 : r ? -1 : s ? 1 : J ? tt(J, t) - tt(J, e) : 0;
					if (r === s) return c(t, e);
					for (n = t; n = n.parentNode;) o.unshift(n);
					for (n = e; n = n.parentNode;) a.unshift(n);
					for (; o[i] === a[i];) i++;
					return i ? c(o[i], a[i]) : o[i] === H ? -1 : a[i] === H ? 1 : 0
				}), E
			}, b.matches = function (t, e) {
				return b(t, null, null, e)
			}, b.matchesSelector = function (t, e) {
				if ((t.ownerDocument || t) !== E && O(t), e = e.replace(ut, "='$1']"), y.matchesSelector && M && !B[e + " "] && (!L || !L.test(e)) && (!F || !F.test(e))) try {
					var n = D.call(t, e);
					if (n || y.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
				} catch (_t) {}
				return 0 < b(e, E, null, [t]).length
			}, b.contains = function (t, e) {
				return (t.ownerDocument || t) !== E && O(t), I(t, e)
			}, b.attr = function (t, e) {
				(t.ownerDocument || t) !== E && O(t);
				var n = k.attrHandle[e.toLowerCase()],
					i = n && Y.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !M) : undefined;
				return i !== undefined ? i : y.attributes || !M ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}, b.error = function (t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, b.uniqueSort = function (t) {
				var e, n = [],
					i = 0,
					r = 0;
				if (P = !y.detectDuplicates, J = !y.sortStable && t.slice(0), t.sort(W), P) {
					for (; e = t[r++];) e === t[r] && (i = n.push(r));
					for (; i--;) t.splice(n[i], 1)
				}
				return J = null, t
			}, _ = b.getText = function (t) {
				var e, n = "",
					i = 0,
					r = t.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
					} else if (3 === r || 4 === r) return t.nodeValue
				} else
					for (; e = t[i++];) n += _(e);
				return n
			}, (k = b.selectors = {
				cacheLength: 50,
				createPseudo: l,
				match: dt,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function (t) {
						return t[1] = t[1].replace(bt, St), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, St), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function (t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || b.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && b.error(t[0]), t
					},
					PSEUDO: function (t) {
						var e, n = !t[6] && t[2];
						return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function (t) {
						var e = t.replace(bt, St).toLowerCase();
						return "*" === t ? function () {
							return !0
						} : function (t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function (t) {
						var e = R[t + " "];
						return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && R(t, function (t) {
							return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function (n, i, r) {
						return function (t) {
							var e = b.attr(t, n);
							return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === r : "!=" === i ? e !== r : "^=" === i ? r && 0 === e.indexOf(r) : "*=" === i ? r && -1 < e.indexOf(r) : "$=" === i ? r && e.slice(-r.length) === r : "~=" === i ? -1 < (" " + e.replace(ot, " ") + " ").indexOf(r) : "|=" === i && (e === r || e.slice(0, r.length + 1) === r + "-"))
						}
					},
					CHILD: function (f, t, e, g, m) {
						var y = "nth" !== f.slice(0, 3),
							v = "last" !== f.slice(-4),
							w = "of-type" === t;
						return 1 === g && 0 === m ? function (t) {
							return !!t.parentNode
						} : function (t, e, n) {
							var i, r, s, o, a, l, c = y !== v ? "nextSibling" : "previousSibling",
								u = t.parentNode,
								p = w && t.nodeName.toLowerCase(),
								h = !n && !w,
								d = !1;
							if (u) {
								if (y) {
									for (; c;) {
										for (o = t; o = o[c];)
											if (w ? o.nodeName.toLowerCase() === p : 1 === o.nodeType) return !1;
										l = c = "only" === f && !l && "nextSibling"
									}
									return !0
								}
								if (l = [v ? u.firstChild : u.lastChild], v && h) {
									for (d = (a = (i = (r = (s = (o = u)[N] || (o[N] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === z && i[1]) && i[2], o = a && u.childNodes[a]; o = ++a && o && o[c] || (d = a = 0) || l.pop();)
										if (1 === o.nodeType && ++d && o === t) {
											r[f] = [z, a, d];
											break
										}
								} else if (h && (d = a = (i = (r = (s = (o = t)[N] || (o[N] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === z && i[1]), !1 === d)
									for (;
										(o = ++a && o && o[c] || (d = a = 0) || l.pop()) && ((w ? o.nodeName.toLowerCase() !== p : 1 !== o.nodeType) || !++d || (h && ((r = (s = o[N] || (o[N] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] = [z, d]), o !== t)););
								return (d -= m) === g || d % g == 0 && 0 <= d / g
							}
						}
					},
					PSEUDO: function (t, s) {
						var e, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || b.error("unsupported pseudo: " + t);
						return o[N] ? o(s) : 1 < o.length ? (e = [t, t, "", s], k.setFilters.hasOwnProperty(t.toLowerCase()) ? l(function (t, e) {
							for (var n, i = o(t, s), r = i.length; r--;) t[n = tt(t, i[r])] = !(e[n] = i[r])
						}) : function (t) {
							return o(t, 0, e)
						}) : o
					}
				},
				pseudos: {
					not: l(function (t) {
						var i = [],
							r = [],
							a = A(t.replace(at, "$1"));
						return a[N] ? l(function (t, e, n, i) {
							for (var r, s = a(t, null, i, []), o = t.length; o--;)(r = s[o]) && (t[o] = !(e[o] = r))
						}) : function (t, e, n) {
							return i[0] = t, a(i, null, n, r), i[0] = null, !r.pop()
						}
					}),
					has: l(function (e) {
						return function (t) {
							return 0 < b(e, t).length
						}
					}),
					contains: l(function (e) {
						return e = e.replace(bt, St),
							function (t) {
								return -1 < (t.textContent || t.innerText || _(t)).indexOf(e)
							}
					}),
					lang: l(function (n) {
						return ht.test(n || "") || b.error("unsupported lang: " + n), n = n.replace(bt, St).toLowerCase(),
							function (t) {
								var e;
								do {
									if (e = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function (t) {
						var e = n.location && n.location.hash;
						return e && e.slice(1) === t.id
					},
					root: function (t) {
						return t === $
					},
					focus: function (t) {
						return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
					},
					enabled: function (t) {
						return !1 === t.disabled
					},
					disabled: function (t) {
						return !0 === t.disabled
					},
					checked: function (t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !!t.checked || "option" === e && !!t.selected
					},
					selected: function (t) {
						return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
					},
					empty: function (t) {
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function (t) {
						return !k.pseudos.empty(t)
					},
					header: function (t) {
						return gt.test(t.nodeName)
					},
					input: function (t) {
						return ft.test(t.nodeName)
					},
					button: function (t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function (t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: o(function () {
						return [0]
					}),
					last: o(function (t, e) {
						return [e - 1]
					}),
					eq: o(function (t, e, n) {
						return [n < 0 ? n + e : n]
					}),
					even: o(function (t, e) {
						for (var n = 0; n < e; n += 2) t.push(n);
						return t
					}),
					odd: o(function (t, e) {
						for (var n = 1; n < e; n += 2) t.push(n);
						return t
					}),
					lt: o(function (t, e, n) {
						for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
						return t
					}),
					gt: o(function (t, e, n) {
						for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
						return t
					})
				}
			}).pseudos.nth = k.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) k.pseudos[f] = i(f);
		for (f in {
				submit: !0,
				reset: !0
			}) k.pseudos[f] = s(f);
		return a.prototype = k.filters = k.pseudos, k.setFilters = new a, T = b.tokenize = function (t, e) {
			var n, i, r, s, o, a, l, c = V[t + " "];
			if (c) return e ? 0 : c.slice(0);
			for (o = t, a = [], l = k.preFilter; o;) {
				for (s in n && !(i = lt.exec(o)) || (i && (o = o.slice(i[0].length) || o), a.push(r = [])), n = !1, (i = ct.exec(o)) && (n = i.shift(), r.push({
						value: n,
						type: i[0].replace(at, " ")
					}), o = o.slice(n.length)), k.filter) !(i = dt[s].exec(o)) || l[s] && !(i = l[s](i)) || (n = i.shift(), r.push({
					value: n,
					type: s,
					matches: i
				}), o = o.slice(n.length));
				if (!n) break
			}
			return e ? o.length : o ? b.error(t) : V(t, a).slice(0)
		}, A = b.compile = function (t, e) {
			var n, i = [],
				r = [],
				s = B[t + " "];
			if (!s) {
				for (e || (e = T(t)), n = e.length; n--;)(s = d(e[n]))[N] ? i.push(s) : r.push(s);
				(s = B(t, u(r, i))).selector = t
			}
			return s
		}, C = b.select = function (t, e, n, i) {
			var r, s, o, a, l, c = "function" == typeof t && t,
				u = !i && T(t = c.selector || t);
			if (n = n || [], 1 === u.length) {
				if (2 < (s = u[0] = u[0].slice(0)).length && "ID" === (o = s[0]).type && y.getById && 9 === e.nodeType && M && k.relative[s[1].type]) {
					if (!(e = (k.find.ID(o.matches[0].replace(bt, St), e) || [])[0])) return n;
					c && (e = e.parentNode), t = t.slice(s.shift().value.length)
				}
				for (r = dt.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !k.relative[a = o.type]);)
					if ((l = k.find[a]) && (i = l(o.matches[0].replace(bt, St), vt.test(s[0].type) && g(e.parentNode) || e))) {
						if (s.splice(r, 1), !(t = i.length && m(s))) return K.apply(n, i), n;
						break
					}
			}
			return (c || A(t, u))(i, e, !M, n, !e || vt.test(t) && g(e.parentNode) || e), n
		}, y.sortStable = N.split("").sort(W).join("") === N, y.detectDuplicates = !!P, O(), y.sortDetached = r(function (t) {
			return 1 & t.compareDocumentPosition(E.createElement("div"))
		}), r(function (t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || e("type|href|height|width", function (t, e, n) {
			if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), y.attributes && r(function (t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || e("value", function (t, e, n) {
			if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
		}), r(function (t) {
			return null == t.getAttribute("disabled")
		}) || e(et, function (t, e, n) {
			var i;
			if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
		}), b
	}(x);
	ft.find = wt, ft.expr = wt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = wt.uniqueSort, ft.text = wt.getText, ft.isXMLDoc = wt.isXML, ft.contains = wt.contains;
	var bt = function (t, e, n) {
			for (var i = [], r = n !== undefined;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (r && ft(t).is(n)) break;
					i.push(t)
				}
			return i
		},
		St = function (t, e) {
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		},
		kt = ft.expr.match.needsContext,
		_t = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		xt = /^.[^:#\[\.,]*$/;
	ft.filter = function (t, e, n) {
		var i = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function (t) {
			return 1 === t.nodeType
		}))
	}, ft.fn.extend({
		find: function (t) {
			var e, n = [],
				i = this,
				r = i.length;
			if ("string" != typeof t) return this.pushStack(ft(t).filter(function () {
				for (e = 0; e < r; e++)
					if (ft.contains(i[e], this)) return !0
			}));
			for (e = 0; e < r; e++) ft.find(t, i[e], n);
			return (n = this.pushStack(1 < r ? ft.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
		},
		filter: function (t) {
			return this.pushStack(e(this, t || [], !1))
		},
		not: function (t) {
			return this.pushStack(e(this, t || [], !0))
		},
		is: function (t) {
			return !!e(this, "string" == typeof t && kt.test(t) ? ft(t) : t || [], !1).length
		}
	});
	var Tt, At = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(ft.fn.init = function (t, e, n) {
		var i, r;
		if (!t) return this;
		if (n = n || Tt, "string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ft.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ft) : (t.selector !== undefined && (this.selector = t.selector, this.context = t.context), ft.makeArray(t, this));
		if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : At.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
		if (i[1]) {
			if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)), _t.test(i[1]) && ft.isPlainObject(e))
				for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
			return this
		}
		if ((r = rt.getElementById(i[2])) && r.parentNode) {
			if (r.id !== i[2]) return Tt.find(t);
			this.length = 1, this[0] = r
		}
		return this.context = rt, this.selector = t, this
	}).prototype = ft.fn, Tt = ft(rt);
	var Ct = /^(?:parents|prev(?:Until|All))/,
		jt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ft.fn.extend({
		has: function (t) {
			var e, n = ft(t, this),
				i = n.length;
			return this.filter(function () {
				for (e = 0; e < i; e++)
					if (ft.contains(this, n[e])) return !0
			})
		},
		closest: function (t, e) {
			for (var n, i = 0, r = this.length, s = [], o = kt.test(t) || "string" != typeof t ? ft(t, e || this.context) : 0; i < r; i++)
				for (n = this[i]; n && n !== e; n = n.parentNode)
					if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
						s.push(n);
						break
					}
			return this.pushStack(1 < s.length ? ft.uniqueSort(s) : s)
		},
		index: function (t) {
			return t ? "string" == typeof t ? ft.inArray(this[0], ft(t)) : ft.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (t, e) {
			return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
		},
		addBack: function (t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), ft.each({
		parent: function (t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function (t) {
			return bt(t, "parentNode")
		},
		parentsUntil: function (t, e, n) {
			return bt(t, "parentNode", n)
		},
		next: function (t) {
			return n(t, "nextSibling")
		},
		prev: function (t) {
			return n(t, "previousSibling")
		},
		nextAll: function (t) {
			return bt(t, "nextSibling")
		},
		prevAll: function (t) {
			return bt(t, "previousSibling")
		},
		nextUntil: function (t, e, n) {
			return bt(t, "nextSibling", n)
		},
		prevUntil: function (t, e, n) {
			return bt(t, "previousSibling", n)
		},
		siblings: function (t) {
			return St((t.parentNode || {}).firstChild, t)
		},
		children: function (t) {
			return St(t.firstChild)
		},
		contents: function (t) {
			return ft.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ft.merge([], t.childNodes)
		}
	}, function (i, r) {
		ft.fn[i] = function (t, e) {
			var n = ft.map(this, r, t);
			return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = ft.filter(e, n)), 1 < this.length && (jt[i] || (n = ft.uniqueSort(n)), Ct.test(i) && (n = n.reverse())), this.pushStack(n)
		}
	});
	var Jt, Pt, Ot = /\S+/g;
	for (Pt in ft.Callbacks = function (i) {
			i = "string" == typeof i ? u(i) : ft.extend({}, i);
			var r, t, e, n, s = [],
				o = [],
				a = -1,
				l = function () {
					for (n = i.once, e = r = !0; o.length; a = -1)
						for (t = o.shift(); ++a < s.length;) !1 === s[a].apply(t[0], t[1]) && i.stopOnFalse && (a = s.length, t = !1);
					i.memory || (t = !1), r = !1, n && (s = t ? [] : "")
				},
				c = {
					add: function () {
						return s && (t && !r && (a = s.length - 1, o.push(t)), function n(t) {
							ft.each(t, function (t, e) {
								ft.isFunction(e) ? i.unique && c.has(e) || s.push(e) : e && e.length && "string" !== ft.type(e) && n(e)
							})
						}(arguments), t && !r && l()), this
					},
					remove: function () {
						return ft.each(arguments, function (t, e) {
							for (var n; - 1 < (n = ft.inArray(e, s, n));) s.splice(n, 1), n <= a && a--
						}), this
					},
					has: function (t) {
						return t ? -1 < ft.inArray(t, s) : 0 < s.length
					},
					empty: function () {
						return s && (s = []), this
					},
					disable: function () {
						return n = o = [], s = t = "", this
					},
					disabled: function () {
						return !s
					},
					lock: function () {
						return n = !0, t || c.disable(), this
					},
					locked: function () {
						return !!n
					},
					fireWith: function (t, e) {
						return n || (e = [t, (e = e || []).slice ? e.slice() : e], o.push(e), r || l()), this
					},
					fire: function () {
						return c.fireWith(this, arguments), this
					},
					fired: function () {
						return !!e
					}
				};
			return c
		}, ft.extend({
			Deferred: function (t) {
				var s = [
						["resolve", "done", ft.Callbacks("once memory"), "resolved"],
						["reject", "fail", ft.Callbacks("once memory"), "rejected"],
						["notify", "progress", ft.Callbacks("memory")]
					],
					r = "pending",
					o = {
						state: function () {
							return r
						},
						always: function () {
							return a.done(arguments).fail(arguments), this
						},
						then: function () {
							var r = arguments;
							return ft.Deferred(function (i) {
								ft.each(s, function (t, e) {
									var n = ft.isFunction(r[t]) && r[t];
									a[e[1]](function () {
										var t = n && n.apply(this, arguments);
										t && ft.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this === o ? i.promise() : this, n ? [t] : arguments)
									})
								}), r = null
							}).promise()
						},
						promise: function (t) {
							return null != t ? ft.extend(t, o) : o
						}
					},
					a = {};
				return o.pipe = o.then, ft.each(s, function (t, e) {
					var n = e[2],
						i = e[3];
					o[e[1]] = n.add, i && n.add(function () {
						r = i
					}, s[1 ^ t][2].disable, s[2][2].lock), a[e[0]] = function () {
						return a[e[0] + "With"](this === a ? o : this, arguments), this
					}, a[e[0] + "With"] = n.fireWith
				}), o.promise(a), t && t.call(a, a), a
			},
			when: function (t) {
				var r, e, n, i = 0,
					s = st.call(arguments),
					o = s.length,
					a = 1 !== o || t && ft.isFunction(t.promise) ? o : 0,
					l = 1 === a ? t : ft.Deferred(),
					c = function (e, n, i) {
						return function (t) {
							n[e] = this, i[e] = 1 < arguments.length ? st.call(arguments) : t, i === r ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
						}
					};
				if (1 < o)
					for (r = new Array(o), e = new Array(o), n = new Array(o); i < o; i++) s[i] && ft.isFunction(s[i].promise) ? s[i].promise().progress(c(i, e, r)).done(c(i, n, s)).fail(l.reject) : --a;
				return a || l.resolveWith(n, s), l.promise()
			}
		}), ft.fn.ready = function (t) {
			return ft.ready.promise().done(t), this
		}, ft.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function (t) {
				t ? ft.readyWait++ : ft.ready(!0)
			},
			ready: function (t) {
				(!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0) !== t && 0 < --ft.readyWait || (Jt.resolveWith(rt, [ft]), ft.fn.triggerHandler && (ft(rt).triggerHandler("ready"), ft(rt).off("ready")))
			}
		}), ft.ready.promise = function (t) {
			if (!Jt)
				if (Jt = ft.Deferred(), "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll) x.setTimeout(ft.ready);
				else if (rt.addEventListener) rt.addEventListener("DOMContentLoaded", s), x.addEventListener("load", s);
			else {
				rt.attachEvent("onreadystatechange", s), x.attachEvent("onload", s);
				var e = !1;
				try {
					e = null == x.frameElement && rt.documentElement
				} catch (n) {}
				e && e.doScroll && function i() {
					if (!ft.isReady) {
						try {
							e.doScroll("left")
						} catch (n) {
							return x.setTimeout(i, 50)
						}
						r(), ft.ready()
					}
				}()
			}
			return Jt.promise(t)
		}, ft.ready.promise(), ft(ht)) break;
	ht.ownFirst = "0" === Pt, ht.inlineBlockNeedsLayout = !1, ft(function () {
			var t, e, n, i;
			(n = rt.getElementsByTagName("body")[0]) && n.style && (e = rt.createElement("div"), (i = rt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ht.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
		}),
		function () {
			var t = rt.createElement("div");
			ht.deleteExpando = !0;
			try {
				delete t.test
			} catch (e) {
				ht.deleteExpando = !1
			}
			t = null
		}();
	var Et, $t = function (t) {
			var e = ft.noData[(t.nodeName + " ").toLowerCase()],
				n = +t.nodeType || 1;
			return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
		},
		Mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ft = /([A-Z])/g;
	ft.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function (t) {
			return !!(t = t.nodeType ? ft.cache[t[ft.expando]] : t[ft.expando]) && !c(t)
		},
		data: function (t, e, n) {
			return i(t, e, n)
		},
		removeData: function (t, e) {
			return o(t, e)
		},
		_data: function (t, e, n) {
			return i(t, e, n, !0)
		},
		_removeData: function (t, e) {
			return o(t, e, !0)
		}
	}), ft.fn.extend({
		data: function (t, e) {
			var n, i, r, s = this[0],
				o = s && s.attributes;
			if (t !== undefined) return "object" == typeof t ? this.each(function () {
				ft.data(this, t)
			}) : 1 < arguments.length ? this.each(function () {
				ft.data(this, t, e)
			}) : s ? l(s, t, ft.data(s, t)) : undefined;
			if (this.length && (r = ft.data(s), 1 === s.nodeType && !ft._data(s, "parsedAttrs"))) {
				for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && l(s, i = ft.camelCase(i.slice(5)), r[i]);
				ft._data(s, "parsedAttrs", !0)
			}
			return r
		},
		removeData: function (t) {
			return this.each(function () {
				ft.removeData(this, t)
			})
		}
	}), ft.extend({
		queue: function (t, e, n) {
			var i;
			if (t) return e = (e || "fx") + "queue", i = ft._data(t, e), n && (!i || ft.isArray(n) ? i = ft._data(t, e, ft.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function (t, e) {
			e = e || "fx";
			var n = ft.queue(t, e),
				i = n.length,
				r = n.shift(),
				s = ft._queueHooks(t, e),
				o = function () {
					ft.dequeue(t, e)
				};
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
		},
		_queueHooks: function (t, e) {
			var n = e + "queueHooks";
			return ft._data(t, n) || ft._data(t, n, {
				empty: ft.Callbacks("once memory").add(function () {
					ft._removeData(t, e + "queue"), ft._removeData(t, n)
				})
			})
		}
	}), ft.fn.extend({
		queue: function (e, n) {
			var t = 2;
			return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? ft.queue(this[0], e) : n === undefined ? this : this.each(function () {
				var t = ft.queue(this, e, n);
				ft._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ft.dequeue(this, e)
			})
		},
		dequeue: function (t) {
			return this.each(function () {
				ft.dequeue(this, t)
			})
		},
		clearQueue: function (t) {
			return this.queue(t || "fx", [])
		},
		promise: function (t, e) {
			var n, i = 1,
				r = ft.Deferred(),
				s = this,
				o = this.length,
				a = function () {
					--i || r.resolveWith(s, [s])
				};
			for ("string" != typeof t && (e = t, t = undefined), t = t || "fx"; o--;)(n = ft._data(s[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
			return a(), r.promise(e)
		}
	}), ht.shrinkWrapBlocks = function () {
		return null != Et ? Et : (Et = !1, (e = rt.getElementsByTagName("body")[0]) && e.style ? (t = rt.createElement("div"), (n = rt.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(rt.createElement("div")).style.width = "5px", Et = 3 !== t.offsetWidth), e.removeChild(n), Et) : void 0);
		var t, e, n
	};
	var Lt, Dt, It, Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Ht = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
		zt = ["Top", "Right", "Bottom", "Left"],
		qt = function (t, e) {
			return t = e || t, "none" === ft.css(t, "display") || !ft.contains(t.ownerDocument, t)
		},
		Rt = function (t, e, n, i, r, s, o) {
			var a = 0,
				l = t.length,
				c = null == n;
			if ("object" === ft.type(n))
				for (a in r = !0, n) Rt(t, e, a, n[a], !0, s, o);
			else if (i !== undefined && (r = !0, ft.isFunction(i) || (o = !0), c && (o ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
					return c.call(ft(t), n)
				})), e))
				for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
			return r ? t : c ? e.call(t) : l ? e(t[0], n) : s
		},
		Vt = /^(?:checkbox|radio)$/i,
		Bt = /<([\w:-]+)/,
		Wt = /^$|\/(?:java|ecma)script/i,
		Ut = /^\s+/,
		Yt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
	Lt = rt.createElement("div"), Dt = rt.createDocumentFragment(), It = rt.createElement("input"), Lt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ht.leadingWhitespace = 3 === Lt.firstChild.nodeType, ht.tbody = !Lt.getElementsByTagName("tbody").length, ht.htmlSerialize = !!Lt.getElementsByTagName("link").length, ht.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML, It.type = "checkbox", It.checked = !0, Dt.appendChild(It), ht.appendChecked = It.checked, Lt.innerHTML = "<textarea>x</textarea>", ht.noCloneChecked = !!Lt.cloneNode(!0).lastChild.defaultValue, Dt.appendChild(Lt), (It = rt.createElement("input")).setAttribute("type", "radio"), It.setAttribute("checked", "checked"), It.setAttribute("name", "t"), Lt.appendChild(It), ht.checkClone = Lt.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.noCloneEvent = !!Lt.addEventListener, Lt[ft.expando] = 1, ht.attributes = !Lt.getAttribute(ft.expando);
	var Gt = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: ht.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};
	Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td;
	var Qt = /<|&#?\w+;/,
		Xt = /<tbody/i;
	! function () {
		var t, e, n = rt.createElement("div");
		for (t in {
				submit: !0,
				change: !0,
				focusin: !0
			}) e = "on" + t, (ht[t] = e in x) || (n.setAttribute(e, "t"), ht[t] = !1 === n.attributes[e].expando);
		n = null
	}();
	var Kt = /^(?:input|select|textarea)$/i,
		Zt = /^key/,
		te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		ee = /^(?:focusinfocus|focusoutblur)$/,
		ne = /^([^.]*)(?:\.(.+)|)/;
	ft.event = {
		global: {},
		add: function (t, e, n, i, r) {
			var s, o, a, l, c, u, p, h, d, f, g, m = ft._data(t);
			if (m) {
				for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = ft.guid++), (o = m.events) || (o = m.events = {}), (u = m.handle) || ((u = m.handle = function (t) {
						return void 0 === ft || t && ft.event.triggered === t.type ? undefined : ft.event.dispatch.apply(u.elem, arguments)
					}).elem = t), a = (e = (e || "").match(Ot) || [""]).length; a--;) d = g = (s = ne.exec(e[a]) || [])[1], f = (s[2] || "").split(".").sort(), d && (c = ft.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, c = ft.event.special[d] || {}, p = ft.extend({
					type: d,
					origType: g,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && ft.expr.match.needsContext.test(r),
					namespace: f.join(".")
				}, l), (h = o[d]) || ((h = o[d] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, f, u) || (t.addEventListener ? t.addEventListener(d, u, !1) : t.attachEvent && t.attachEvent("on" + d, u))), c.add && (c.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, p) : h.push(p), ft.event.global[d] = !0);
				t = null
			}
		},
		remove: function (t, e, n, i, r) {
			var s, o, a, l, c, u, p, h, d, f, g, m = ft.hasData(t) && ft._data(t);
			if (m && (u = m.events)) {
				for (c = (e = (e || "").match(Ot) || [""]).length; c--;)
					if (d = g = (a = ne.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), d) {
						for (p = ft.event.special[d] || {}, h = u[d = (i ? p.delegateType : p.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) o = h[s], !r && g !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, p.remove && p.remove.call(t, o));
						l && !h.length && (p.teardown && !1 !== p.teardown.call(t, f, m.handle) || ft.removeEvent(t, d, m.handle), delete u[d])
					} else
						for (d in u) ft.event.remove(t, d + e[c], n, i, !0);
				ft.isEmptyObject(u) && (delete m.handle, ft._removeData(t, "events"))
			}
		},
		trigger: function (t, e, n, i) {
			var r, s, o, a, l, c, u, p = [n || rt],
				h = pt.call(t, "type") ? t.type : t,
				d = pt.call(t, "namespace") ? t.namespace.split(".") : [];
			if (o = c = n = n || rt, 3 !== n.nodeType && 8 !== n.nodeType && !ee.test(h + ft.event.triggered) && (-1 < h.indexOf(".") && (h = (d = h.split(".")).shift(), d.sort()), s = h.indexOf(":") < 0 && "on" + h, (t = t[ft.expando] ? t : new ft.Event(h, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = n), e = null == e ? [t] : ft.makeArray(e, [t]), l = ft.event.special[h] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, e))) {
				if (!i && !l.noBubble && !ft.isWindow(n)) {
					for (a = l.delegateType || h, ee.test(a + h) || (o = o.parentNode); o; o = o.parentNode) p.push(o), c = o;
					c === (n.ownerDocument || rt) && p.push(c.defaultView || c.parentWindow || x)
				}
				for (u = 0;
					(o = p[u++]) && !t.isPropagationStopped();) t.type = 1 < u ? a : l.bindType || h, (r = (ft._data(o, "events") || {})[t.type] && ft._data(o, "handle")) && r.apply(o, e), (r = s && o[s]) && r.apply && $t(o) && (t.result = r.apply(o, e), !1 === t.result && t.preventDefault());
				if (t.type = h, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), e)) && $t(n) && s && n[h] && !ft.isWindow(n)) {
					(c = n[s]) && (n[s] = null), ft.event.triggered = h;
					try {
						n[h]()
					} catch (f) {}
					ft.event.triggered = undefined, c && (n[s] = c)
				}
				return t.result
			}
		},
		dispatch: function (t) {
			t = ft.event.fix(t);
			var e, n, i, r, s, o = [],
				a = st.call(arguments),
				l = (ft._data(this, "events") || {})[t.type] || [],
				c = ft.event.special[t.type] || {};
			if ((a[0] = t).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
				for (o = ft.event.handlers.call(this, t, l), e = 0;
					(r = o[e++]) && !t.isPropagationStopped();)
					for (t.currentTarget = r.elem, n = 0;
						(s = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, (i = ((ft.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) !== undefined && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, t), t.result
			}
		},
		handlers: function (t, e) {
			var n, i, r, s, o = [],
				a = e.delegateCount,
				l = t.target;
			if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
				for (; l != this; l = l.parentNode || this)
					if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
						for (i = [], n = 0; n < a; n++) i[r = (s = e[n]).selector + " "] === undefined && (i[r] = s.needsContext ? -1 < ft(r, this).index(l) : ft.find(r, this, null, [l]).length), i[r] && i.push(s);
						i.length && o.push({
							elem: l,
							handlers: i
						})
					}
			return a < e.length && o.push({
				elem: this,
				handlers: e.slice(a)
			}), o
		},
		fix: function (t) {
			if (t[ft.expando]) return t;
			var e, n, i, r = t.type,
				s = t,
				o = this.fixHooks[r];
			for (o || (this.fixHooks[r] = o = te.test(r) ? this.mouseHooks : Zt.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, t = new ft.Event(s), e = i.length; e--;) t[n = i[e]] = s[n];
			return t.target || (t.target = s.srcElement || rt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (t, e) {
				var n, i, r, s = e.button,
					o = e.fromElement;
				return null == t.pageX && null != e.clientX && (r = (i = t.target.ownerDocument || rt).documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || s === undefined || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== f() && this.focus) try {
						return this.focus(), !1
					} catch (t) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === f() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if (ft.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
				},
				_default: function (t) {
					return ft.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (t) {
					t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function (t, e, n) {
			var i = ft.extend(new ft.Event, n, {
				type: t,
				isSimulated: !0
			});
			ft.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
		}
	}, ft.removeEvent = rt.removeEventListener ? function (t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n)
	} : function (t, e, n) {
		var i = "on" + e;
		t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
	}, ft.Event = function (t, e) {
		if (!(this instanceof ft.Event)) return new ft.Event(t, e);
		t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? h : d) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), this[ft.expando] = !0
	}, ft.Event.prototype = {
		constructor: ft.Event,
		isDefaultPrevented: d,
		isPropagationStopped: d,
		isImmediatePropagationStopped: d,
		preventDefault: function () {
			var t = this.originalEvent;
			this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function () {
			var t = this.originalEvent;
			this.isPropagationStopped = h, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ft.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (t, s) {
		ft.event.special[t] = {
			delegateType: s,
			bindType: s,
			handle: function (t) {
				var e, n = this,
					i = t.relatedTarget,
					r = t.handleObj;
				return i && (i === n || ft.contains(n, i)) || (t.type = r.origType, e = r.handler.apply(this, arguments), t.type = s), e
			}
		}
	}), ht.submit || (ft.event.special.submit = {
		setup: function () {
			if (ft.nodeName(this, "form")) return !1;
			ft.event.add(this, "click._submit keypress._submit", function (t) {
				var e = t.target,
					n = ft.nodeName(e, "input") || ft.nodeName(e, "button") ? ft.prop(e, "form") : undefined;
				n && !ft._data(n, "submit") && (ft.event.add(n, "submit._submit", function (t) {
					t._submitBubble = !0
				}), ft._data(n, "submit", !0))
			})
		},
		postDispatch: function (t) {
			t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ft.event.simulate("submit", this.parentNode, t))
		},
		teardown: function () {
			if (ft.nodeName(this, "form")) return !1;
			ft.event.remove(this, "._submit")
		}
	}), ht.change || (ft.event.special.change = {
		setup: function () {
			if (Kt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ft.event.add(this, "propertychange._change", function (t) {
				"checked" === t.originalEvent.propertyName && (this._justChanged = !0)
			}), ft.event.add(this, "click._change", function (t) {
				this._justChanged && !t.isTrigger && (this._justChanged = !1), ft.event.simulate("change", this, t)
			})), !1;
			ft.event.add(this, "beforeactivate._change", function (t) {
				var e = t.target;
				Kt.test(e.nodeName) && !ft._data(e, "change") && (ft.event.add(e, "change._change", function (t) {
					!this.parentNode || t.isSimulated || t.isTrigger || ft.event.simulate("change", this.parentNode, t)
				}), ft._data(e, "change", !0))
			})
		},
		handle: function (t) {
			var e = t.target;
			if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
		},
		teardown: function () {
			return ft.event.remove(this, "._change"), !Kt.test(this.nodeName)
		}
	}), ht.focusin || ft.each({
		focus: "focusin",
		blur: "focusout"
	}, function (n, i) {
		var r = function (t) {
			ft.event.simulate(i, t.target, ft.event.fix(t))
		};
		ft.event.special[i] = {
			setup: function () {
				var t = this.ownerDocument || this,
					e = ft._data(t, i);
				e || t.addEventListener(n, r, !0), ft._data(t, i, (e || 0) + 1)
			},
			teardown: function () {
				var t = this.ownerDocument || this,
					e = ft._data(t, i) - 1;
				e ? ft._data(t, i, e) : (t.removeEventListener(n, r, !0), ft._removeData(t, i))
			}
		}
	}), ft.fn.extend({
		on: function (t, e, n, i) {
			return b(this, t, e, n, i)
		},
		one: function (t, e, n, i) {
			return b(this, t, e, n, i, 1)
		},
		off: function (t, e, n) {
			var i, r;
			if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = undefined), !1 === n && (n = d), this.each(function () {
				ft.event.remove(this, t, n, e)
			});
			for (r in t) this.off(r, e, t[r]);
			return this
		},
		trigger: function (t, e) {
			return this.each(function () {
				ft.event.trigger(t, e, this)
			})
		},
		triggerHandler: function (t, e) {
			var n = this[0];
			if (n) return ft.event.trigger(t, e, n, !0)
		}
	});
	var ie = / jQuery\d+="(?:null|\d+)"/g,
		re = new RegExp("<(?:" + Yt + ")[\\s/>]", "i"),
		se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		oe = /<script|<style|<link/i,
		ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
		le = /^true\/(.*)/,
		ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ue = m(rt).appendChild(rt.createElement("div"));
	ft.extend({
		htmlPrefilter: function (t) {
			return t.replace(se, "<$1></$2>")
		},
		clone: function (t, e, n) {
			var i, r, s, o, a, l = ft.contains(t.ownerDocument, t);
			if (ht.html5Clone || ft.isXMLDoc(t) || !re.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (ue.innerHTML = t.outerHTML, ue.removeChild(s = ue.firstChild)), !(ht.noCloneEvent && ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
				for (i = y(s), a = y(t), o = 0; null != (r = a[o]); ++o) i[o] && C(r, i[o]);
			if (e)
				if (n)
					for (a = a || y(t), i = i || y(s), o = 0; null != (r = a[o]); o++) A(r, i[o]);
				else A(t, s);
			return 0 < (i = y(s, "script")).length && v(i, !l && y(t, "script")), i = a = r = null, s
		},
		cleanData: function (t, e) {
			for (var n, i, r, s, o = 0, a = ft.expando, l = ft.cache, c = ht.attributes, u = ft.event.special; null != (n = t[o]); o++)
				if ((e || $t(n)) && (s = (r = n[a]) && l[r])) {
					if (s.events)
						for (i in s.events) u[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, s.handle);
					l[r] && (delete l[r], c || "undefined" == typeof n.removeAttribute ? n[a] = undefined : n.removeAttribute(a), it.push(r))
				}
		}
	}), ft.fn.extend({
		domManip: j,
		detach: function (t) {
			return J(this, t, !0)
		},
		remove: function (t) {
			return J(this, t)
		},
		text: function (t) {
			return Rt(this, function (t) {
				return t === undefined ? ft.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(t))
			}, null, t, arguments.length)
		},
		append: function () {
			return j(this, arguments, function (t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, t).appendChild(t)
			})
		},
		prepend: function () {
			return j(this, arguments, function (t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = S(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function () {
			return j(this, arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function () {
			return j(this, arguments, function (t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		empty: function () {
			for (var t, e = 0; null != (t = this[e]); e++) {
				for (1 === t.nodeType && ft.cleanData(y(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
				t.options && ft.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		},
		clone: function (t, e) {
			return t = null != t && t, e = null == e ? t : e, this.map(function () {
				return ft.clone(this, t, e)
			})
		},
		html: function (t) {
			return Rt(this, function (t) {
				var e = this[0] || {},
					n = 0,
					i = this.length;
				if (t === undefined) return 1 === e.nodeType ? e.innerHTML.replace(ie, "") : undefined;
				if ("string" == typeof t && !oe.test(t) && (ht.htmlSerialize || !re.test(t)) && (ht.leadingWhitespace || !Ut.test(t)) && !Gt[(Bt.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = ft.htmlPrefilter(t);
					try {
						for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (ft.cleanData(y(e, !1)), e.innerHTML = t);
						e = 0
					} catch (r) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function () {
			var n = [];
			return j(this, arguments, function (t) {
				var e = this.parentNode;
				ft.inArray(this, n) < 0 && (ft.cleanData(y(this)), e && e.replaceChild(t, this))
			}, n)
		}
	}), ft.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (t, o) {
		ft.fn[t] = function (t) {
			for (var e, n = 0, i = [], r = ft(t), s = r.length - 1; n <= s; n++) e = n === s ? this : this.clone(!0), ft(r[n])[o](e), at.apply(i, e.get());
			return this.pushStack(i)
		}
	});
	var pe, he = {
			HTML: "block",
			BODY: "block"
		},
		de = /^margin/,
		fe = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"),
		ge = function (t, e, n, i) {
			var r, s, o = {};
			for (s in e) o[s] = t.style[s], t.style[s] = e[s];
			for (s in r = n.apply(t, i || []), e) t.style[s] = o[s];
			return r
		},
		me = rt.documentElement;
	! function () {
		function t() {
			var t, e, n = rt.documentElement;
			n.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = s = l = !1, r = a = !0, x.getComputedStyle && (e = x.getComputedStyle(u), i = "1%" !== (e || {}).top, l = "2px" === (e || {}).marginLeft, s = "4px" === (e || {
				width: "4px"
			}).width, u.style.marginRight = "50%", r = "4px" === (e || {
				marginRight: "4px"
			}).marginRight, (t = u.appendChild(rt.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", a = !parseFloat((x.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", (o = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", (
				t = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), n.removeChild(c)
		}
		var i, r, s, o, a, l, c = rt.createElement("div"),
			u = rt.createElement("div");
		u.style && (u.style.cssText = "float:left;opacity:.5", ht.opacity = "0.5" === u.style.opacity, ht.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ht.clearCloneStyle = "content-box" === u.style.backgroundClip, (c = rt.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), ht.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ft.extend(ht, {
			reliableHiddenOffsets: function () {
				return null == i && t(), o
			},
			boxSizingReliable: function () {
				return null == i && t(), s
			},
			pixelMarginRight: function () {
				return null == i && t(), r
			},
			pixelPosition: function () {
				return null == i && t(), i
			},
			reliableMarginRight: function () {
				return null == i && t(), a
			},
			reliableMarginLeft: function () {
				return null == i && t(), l
			}
		}))
	}();
	var ye, ve, we = /^(top|right|bottom|left)$/;
	x.getComputedStyle ? (ye = function (t) {
		var e = t.ownerDocument.defaultView;
		return e && e.opener || (e = x), e.getComputedStyle(t)
	}, ve = function (t, e, n) {
		var i, r, s, o, a = t.style;
		return "" !== (o = (n = n || ye(t)) ? n.getPropertyValue(e) || n[e] : undefined) && o !== undefined || ft.contains(t.ownerDocument, t) || (o = ft.style(t, e)), n && !ht.pixelMarginRight() && fe.test(o) && de.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s), o === undefined ? o : o + ""
	}) : me.currentStyle && (ye = function (t) {
		return t.currentStyle
	}, ve = function (t, e, n) {
		var i, r, s, o, a = t.style;
		return null == (o = (n = n || ye(t)) ? n[e] : undefined) && a && a[e] && (o = a[e]), fe.test(o) && !we.test(e) && (i = a.left, (s = (r = t.runtimeStyle) && r.left) && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = i, s && (r.left = s)), o === undefined ? o : o + "" || "auto"
	});
	var be = /alpha\([^)]*\)/i,
		Se = /opacity\s*=\s*([^)]*)/i,
		ke = /^(none|table(?!-c[ea]).+)/,
		_e = new RegExp("^(" + Nt + ")(.*)$", "i"),
		xe = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Te = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ae = ["Webkit", "O", "Moz", "ms"],
		Ce = rt.createElement("div").style;
	ft.extend({
		cssHooks: {
			opacity: {
				get: function (t, e) {
					if (e) {
						var n = ve(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ht.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (t, e, n, i) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var r, s, o, a = ft.camelCase(e),
					l = t.style;
				if (e = ft.cssProps[a] || (ft.cssProps[a] = $(a) || a), o = ft.cssHooks[e] || ft.cssHooks[a], n === undefined) return o && "get" in o && (r = o.get(t, !1, i)) !== undefined ? r : l[e];
				if ("string" === (s = typeof n) && (r = Ht.exec(n)) && r[1] && (n = p(t, e, r), s = "number"), null != n && n == n && ("number" === s && (n += r && r[3] || (ft.cssNumber[a] ? "" : "px")), ht.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && (n = o.set(t, n, i)) === undefined))) try {
					l[e] = n
				} catch (c) {}
			}
		},
		css: function (t, e, n, i) {
			var r, s, o, a = ft.camelCase(e);
			return e = ft.cssProps[a] || (ft.cssProps[a] = $(a) || a), (o = ft.cssHooks[e] || ft.cssHooks[a]) && "get" in o && (s = o.get(t, !0, n)), s === undefined && (s = ve(t, e, i)), "normal" === s && e in Te && (s = Te[e]), "" === n || n ? (r = parseFloat(s), !0 === n || isFinite(r) ? r || 0 : s) : s
		}
	}), ft.each(["height", "width"], function (t, r) {
		ft.cssHooks[r] = {
			get: function (t, e, n) {
				if (e) return ke.test(ft.css(t, "display")) && 0 === t.offsetWidth ? ge(t, xe, function () {
					return D(t, r, n)
				}) : D(t, r, n)
			},
			set: function (t, e, n) {
				var i = n && ye(t);
				return F(t, e, n ? L(t, r, n, ht.boxSizing && "border-box" === ft.css(t, "boxSizing", !1, i), i) : 0)
			}
		}
	}), ht.opacity || (ft.cssHooks.opacity = {
		get: function (t, e) {
			return Se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
		},
		set: function (t, e) {
			var n = t.style,
				i = t.currentStyle,
				r = ft.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
				s = i && i.filter || n.filter || "";
			((n.zoom = 1) <= e || "" === e) && "" === ft.trim(s.replace(be, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = be.test(s) ? s.replace(be, r) : s + " " + r)
		}
	}), ft.cssHooks.marginRight = E(ht.reliableMarginRight, function (t, e) {
		if (e) return ge(t, {
			display: "inline-block"
		}, ve, [t, "marginRight"])
	}), ft.cssHooks.marginLeft = E(ht.reliableMarginLeft, function (t, e) {
		if (e) return (parseFloat(ve(t, "marginLeft")) || (ft.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - ge(t, {
			marginLeft: 0
		}, function () {
			return t.getBoundingClientRect().left
		}) : 0)) + "px"
	}), ft.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (r, s) {
		ft.cssHooks[r + s] = {
			expand: function (t) {
				for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[r + zt[e] + s] = i[e] || i[e - 2] || i[0];
				return n
			}
		}, de.test(r) || (ft.cssHooks[r + s].set = F)
	}), ft.fn.extend({
		css: function (t, e) {
			return Rt(this, function (t, e, n) {
				var i, r, s = {},
					o = 0;
				if (ft.isArray(e)) {
					for (i = ye(t), r = e.length; o < r; o++) s[e[o]] = ft.css(t, e[o], !1, i);
					return s
				}
				return n !== undefined ? ft.style(t, e, n) : ft.css(t, e)
			}, t, e, 1 < arguments.length)
		},
		show: function () {
			return M(this, !0)
		},
		hide: function () {
			return M(this)
		},
		toggle: function (t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
				qt(this) ? ft(this).show() : ft(this).hide()
			})
		}
	}), (ft.Tween = I).prototype = {
		constructor: I,
		init: function (t, e, n, i, r, s) {
			this.elem = t, this.prop = n, this.easing = r || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ft.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var t = I.propHooks[this.prop];
			return t && t.get ? t.get(this) : I.propHooks._default.get(this)
		},
		run: function (t) {
			var e, n = I.propHooks[this.prop];
			return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
		}
	}, I.prototype.init.prototype = I.prototype, I.propHooks = {
		_default: {
			get: function (t) {
				var e;
				return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
			},
			set: function (t) {
				ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
			}
		}
	}, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
		set: function (t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, ft.easing = {
		linear: function (t) {
			return t
		},
		swing: function (t) {
			return .5 - Math.cos(t * Math.PI) / 2
		},
		_default: "swing"
	}, ft.fx = I.prototype.init, ft.fx.step = {};
	var je, Je, Pe, Oe, Ee, $e, Me, Fe = /^(?:toggle|show|hide)$/,
		Le = /queueHooks$/;
	ft.Animation = ft.extend(V, {
		tweeners: {
			"*": [function (t, e) {
				var n = this.createTween(t, e);
				return p(n.elem, t, Ht.exec(e), n), n
			}]
		},
		tweener: function (t, e) {
			ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Ot);
			for (var n, i = 0, r = t.length; i < r; i++) n = t[i], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(e)
		},
		prefilters: [q],
		prefilter: function (t, e) {
			e ? V.prefilters.unshift(t) : V.prefilters.push(t)
		}
	}), ft.speed = function (t, e, n) {
		var i = t && "object" == typeof t ? ft.extend({}, t) : {
			complete: n || !n && e || ft.isFunction(t) && t,
			duration: t,
			easing: n && e || e && !ft.isFunction(e) && e
		};
		return i.duration = ft.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ft.fx.speeds ? ft.fx.speeds[i.duration] : ft.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
			ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
		}, i
	}, ft.fn.extend({
		fadeTo: function (t, e, n, i) {
			return this.filter(qt).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, n, i)
		},
		animate: function (e, t, n, i) {
			var r = ft.isEmptyObject(e),
				s = ft.speed(t, n, i),
				o = function () {
					var t = V(this, ft.extend({}, e), s);
					(r || ft._data(this, "finish")) && t.stop(!0)
				};
			return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
		},
		stop: function (r, t, s) {
			var o = function (t) {
				var e = t.stop;
				delete t.stop, e(s)
			};
			return "string" != typeof r && (s = t, t = r, r = undefined), t && !1 !== r && this.queue(r || "fx", []), this.each(function () {
				var t = !0,
					e = null != r && r + "queueHooks",
					n = ft.timers,
					i = ft._data(this);
				if (e) i[e] && i[e].stop && o(i[e]);
				else
					for (e in i) i[e] && i[e].stop && Le.test(e) && o(i[e]);
				for (e = n.length; e--;) n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(s), t = !1, n.splice(e, 1));
				!t && s || ft.dequeue(this, r)
			})
		},
		finish: function (o) {
			return !1 !== o && (o = o || "fx"), this.each(function () {
				var t, e = ft._data(this),
					n = e[o + "queue"],
					i = e[o + "queueHooks"],
					r = ft.timers,
					s = n ? n.length : 0;
				for (e.finish = !0, ft.queue(this, o, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === o && (r[t].anim.stop(!0), r.splice(t, 1));
				for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
				delete e.finish
			})
		}
	}), ft.each(["toggle", "show", "hide"], function (t, i) {
		var r = ft.fn[i];
		ft.fn[i] = function (t, e, n) {
			return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(H(i, !0), t, e, n)
		}
	}), ft.each({
		slideDown: H("show"),
		slideUp: H("hide"),
		slideToggle: H("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (t, i) {
		ft.fn[t] = function (t, e, n) {
			return this.animate(i, t, e, n)
		}
	}), ft.timers = [], ft.fx.tick = function () {
		var t, e = ft.timers,
			n = 0;
		for (je = ft.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
		e.length || ft.fx.stop(), je = undefined
	}, ft.fx.timer = function (t) {
		ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop()
	}, ft.fx.interval = 13, ft.fx.start = function () {
		Je || (Je = x.setInterval(ft.fx.tick, ft.fx.interval))
	}, ft.fx.stop = function () {
		x.clearInterval(Je), Je = null
	}, ft.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, ft.fn.delay = function (i, t) {
		return i = ft.fx && ft.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
			var n = x.setTimeout(t, i);
			e.stop = function () {
				x.clearTimeout(n)
			}
		})
	}, Oe = rt.createElement("input"), Ee = rt.createElement("div"), $e = rt.createElement("select"), Me = $e.appendChild(rt.createElement("option")), (Ee = rt.createElement("div")).setAttribute("className", "t"), Ee.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Pe = Ee.getElementsByTagName("a")[0], Oe.setAttribute("type", "checkbox"), Ee.appendChild(Oe), (Pe = Ee.getElementsByTagName("a")[0]).style.cssText = "top:1px", ht.getSetAttribute = "t" !== Ee.className, ht.style = /top/.test(Pe.getAttribute("style")), ht.hrefNormalized = "/a" === Pe.getAttribute("href"), ht.checkOn = !!Oe.value, ht.optSelected = Me.selected, ht.enctype = !!rt.createElement("form").enctype, $e.disabled = !0, ht.optDisabled = !Me.disabled, (Oe = rt.createElement("input")).setAttribute("value", ""), ht.input = "" === Oe.getAttribute("value"), Oe.value = "t", Oe.setAttribute("type", "radio"), ht.radioValue = "t" === Oe.value;
	var De = /\r/g,
		Ie = /[\x20\t\r\n\f]+/g;
	ft.fn.extend({
		val: function (n) {
			var i, t, r, e = this[0];
			return arguments.length ? (r = ft.isFunction(n), this.each(function (t) {
				var e;
				1 === this.nodeType && (null == (e = r ? n.call(this, t, ft(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : ft.isArray(e) && (e = ft.map(e, function (t) {
					return null == t ? "" : t + ""
				})), (i = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, e, "value") !== undefined || (this.value = e))
			})) : e ? (i = ft.valHooks[e.type] || ft.valHooks[e.nodeName.toLowerCase()]) && "get" in i && (t = i.get(e, "value")) !== undefined ? t : "string" == typeof (t = e.value) ? t.replace(De, "") : null == t ? "" : t : void 0
		}
	}), ft.extend({
		valHooks: {
			option: {
				get: function (t) {
					var e = ft.find.attr(t, "value");
					return null != e ? e : ft.trim(ft.text(t)).replace(Ie, " ")
				}
			},
			select: {
				get: function (t) {
					for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || r < 0, o = s ? null : [], a = s ? r + 1 : i.length, l = r < 0 ? a : s ? r : 0; l < a; l++)
						if (((n = i[l]).selected || l === r) && (ht.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
							if (e = ft(n).val(), s) return e;
							o.push(e)
						}
					return o
				},
				set: function (t, e) {
					for (var n, i, r = t.options, s = ft.makeArray(e), o = r.length; o--;)
						if (i = r[o], -1 < ft.inArray(ft.valHooks.option.get(i), s)) try {
							i.selected = n = !0
						} catch (_) {
							i.scrollHeight
						} else i.selected = !1;
					return n || (t.selectedIndex = -1), r
				}
			}
		}
	}), ft.each(["radio", "checkbox"], function () {
		ft.valHooks[this] = {
			set: function (t, e) {
				if (ft.isArray(e)) return t.checked = -1 < ft.inArray(ft(t).val(), e)
			}
		}, ht.checkOn || (ft.valHooks[this].get = function (t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var Ne, He, ze = ft.expr.attrHandle,
		qe = /^(?:checked|selected)$/i,
		Re = ht.getSetAttribute,
		Ve = ht.input;
	ft.fn.extend({
		attr: function (t, e) {
			return Rt(this, ft.attr, t, e, 1 < arguments.length)
		},
		removeAttr: function (t) {
			return this.each(function () {
				ft.removeAttr(this, t)
			})
		}
	}), ft.extend({
		attr: function (t, e, n) {
			var i, r, s = t.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof t.getAttribute ? ft.prop(t, e, n) : (1 === s && ft.isXMLDoc(t) || (e = e.toLowerCase(), r = ft.attrHooks[e] || (ft.expr.match.bool.test(e) ? He : Ne)), n !== undefined ? null === n ? void ft.removeAttr(t, e) : r && "set" in r && (i = r.set(t, n, e)) !== undefined ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = ft.find.attr(t, e)) ? undefined : i)
		},
		attrHooks: {
			type: {
				set: function (t, e) {
					if (!ht.radioValue && "radio" === e && ft.nodeName(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		},
		removeAttr: function (t, e) {
			var n, i, r = 0,
				s = e && e.match(Ot);
			if (s && 1 === t.nodeType)
				for (; n = s[r++];) i = ft.propFix[n] || n, ft.expr.match.bool.test(n) ? Ve && Re || !qe.test(n) ? t[i] = !1 : t[ft.camelCase("default-" + n)] = t[i] = !1 : ft.attr(t, n, ""), t.removeAttribute(Re ? n : i)
		}
	}), He = {
		set: function (t, e, n) {
			return !1 === e ? ft.removeAttr(t, n) : Ve && Re || !qe.test(n) ? t.setAttribute(!Re && ft.propFix[n] || n, n) : t[ft.camelCase("default-" + n)] = t[n] = !0, n
		}
	}, ft.each(ft.expr.match.bool.source.match(/\w+/g), function (t, e) {
		var s = ze[e] || ft.find.attr;
		Ve && Re || !qe.test(e) ? ze[e] = function (t, e, n) {
			var i, r;
			return n || (r = ze[e], ze[e] = i, i = null != s(t, e, n) ? e.toLowerCase() : null, ze[e] = r), i
		} : ze[e] = function (t, e, n) {
			if (!n) return t[ft.camelCase("default-" + e)] ? e.toLowerCase() : null
		}
	}), Ve && Re || (ft.attrHooks.value = {
		set: function (t, e, n) {
			if (!ft.nodeName(t, "input")) return Ne && Ne.set(t, e, n);
			t.defaultValue = e
		}
	}), Re || (Ne = {
		set: function (t, e, n) {
			var i = t.getAttributeNode(n);
			if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
		}
	}, ze.id = ze.name = ze.coords = function (t, e, n) {
		var i;
		if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
	}, ft.valHooks.button = {
		get: function (t, e) {
			var n = t.getAttributeNode(e);
			if (n && n.specified) return n.value
		},
		set: Ne.set
	}, ft.attrHooks.contenteditable = {
		set: function (t, e, n) {
			Ne.set(t, "" !== e && e, n)
		}
	}, ft.each(["width", "height"], function (t, n) {
		ft.attrHooks[n] = {
			set: function (t, e) {
				if ("" === e) return t.setAttribute(n, "auto"), e
			}
		}
	})), ht.style || (ft.attrHooks.style = {
		get: function (t) {
			return t.style.cssText || undefined
		},
		set: function (t, e) {
			return t.style.cssText = e + ""
		}
	});
	var Be = /^(?:input|select|textarea|button|object)$/i,
		We = /^(?:a|area)$/i;
	ft.fn.extend({
		prop: function (t, e) {
			return Rt(this, ft.prop, t, e, 1 < arguments.length)
		},
		removeProp: function (e) {
			return e = ft.propFix[e] || e, this.each(function () {
				try {
					this[e] = undefined, delete this[e]
				} catch (t) {}
			})
		}
	}), ft.extend({
		prop: function (t, e, n) {
			var i, r, s = t.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return 1 === s && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, r = ft.propHooks[e]), n !== undefined ? r && "set" in r && (i = r.set(t, n, e)) !== undefined ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function (t) {
					var e = ft.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : Be.test(t.nodeName) || We.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), ht.hrefNormalized || ft.each(["href", "src"], function (t, e) {
		ft.propHooks[e] = {
			get: function (t) {
				return t.getAttribute(e, 4)
			}
		}
	}), ht.optSelected || (ft.propHooks.selected = {
		get: function (t) {
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
		},
		set: function (t) {
			var e = t.parentNode;
			e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
		}
	}), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		ft.propFix[this.toLowerCase()] = this
	}), ht.enctype || (ft.propFix.enctype = "encoding");
	var Ue = /[\t\r\n\f]/g;
	ft.fn.extend({
		addClass: function (e) {
			var t, n, i, r, s, o, a, l = 0;
			if (ft.isFunction(e)) return this.each(function (t) {
				ft(this).addClass(e.call(this, t, B(this)))
			});
			if ("string" == typeof e && e)
				for (t = e.match(Ot) || []; n = this[l++];)
					if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ue, " ")) {
						for (o = 0; s = t[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
						r !== (a = ft.trim(i)) && ft.attr(n, "class", a)
					}
			return this
		},
		removeClass: function (e) {
			var t, n, i, r, s, o, a, l = 0;
			if (ft.isFunction(e)) return this.each(function (t) {
				ft(this).removeClass(e.call(this, t, B(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof e && e)
				for (t = e.match(Ot) || []; n = this[l++];)
					if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ue, " ")) {
						for (o = 0; s = t[o++];)
							for (; - 1 < i.indexOf(" " + s + " ");) i = i.replace(" " + s + " ", " ");
						r !== (a = ft.trim(i)) && ft.attr(n, "class", a)
					}
			return this
		},
		toggleClass: function (r, e) {
			var s = typeof r;
			return "boolean" == typeof e && "string" === s ? e ? this.addClass(r) : this.removeClass(r) : ft.isFunction(r) ? this.each(function (t) {
				ft(this).toggleClass(r.call(this, t, B(this), e), e)
			}) : this.each(function () {
				var t, e, n, i;
				if ("string" === s)
					for (e = 0, n = ft(this), i = r.match(Ot) || []; t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
				else r !== undefined && "boolean" !== s || ((t = B(this)) && ft._data(this, "__className__", t), ft.attr(this, "class", t || !1 === r ? "" : ft._data(this, "__className__") || ""))
			})
		},
		hasClass: function (t) {
			var e, n, i = 0;
			for (e = " " + t + " "; n = this[i++];)
				if (1 === n.nodeType && -1 < (" " + B(n) + " ").replace(Ue, " ").indexOf(e)) return !0;
			return !1
		}
	}), ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, n) {
		ft.fn[n] = function (t, e) {
			return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
		}
	}), ft.fn.extend({
		hover: function (t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}
	});
	var Ye = x.location,
		Ge = ft.now(),
		Qe = /\?/,
		Xe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	ft.parseJSON = function (t) {
		if (x.JSON && x.JSON.parse) return x.JSON.parse(t + "");
		var r, s = null,
			e = ft.trim(t + "");
		return e && !ft.trim(e.replace(Xe, function (t, e, n, i) {
			return r && e && (s = 0), 0 === s ? t : (r = n || e, s += !i - !n, "")
		})) ? Function("return " + e)() : ft.error("Invalid JSON: " + t)
	}, ft.parseXML = function (t) {
		var e;
		if (!t || "string" != typeof t) return null;
		try {
			x.DOMParser ? e = (new x.DOMParser).parseFromString(t, "text/xml") : ((e = new x.ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
		} catch (n) {
			e = undefined
		}
		return e && e.documentElement && !e.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + t), e
	};
	var Ke = /#.*$/,
		Ze = /([?&])_=[^&]*/,
		tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		en = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		nn = /^(?:GET|HEAD)$/,
		rn = /^\/\//,
		sn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		on = {},
		an = {},
		ln = "*/".concat("*"),
		cn = Ye.href,
		un = sn.exec(cn.toLowerCase()) || [];
	ft.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: cn,
			type: "GET",
			isLocal: en.test(un[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": ln,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ft.parseJSON,
				"text xml": ft.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (t, e) {
			return e ? Y(Y(t, ft.ajaxSettings), e) : Y(ft.ajaxSettings, t)
		},
		ajaxPrefilter: W(on),
		ajaxTransport: W(an),
		ajax: function (t, e) {
			function n(t, e, n, i) {
				var r, s, o, a, l, c = e;
				2 !== S && (S = 2, h && x.clearTimeout(h), f = undefined, p = i || "", k.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, n && (a = G(g, k, n)), a = Q(g, a, k, r), r ? (g.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (ft.lastModified[u] = l), (l = k.getResponseHeader("etag")) && (ft.etag[u] = l)), 204 === t || "HEAD" === g.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state, s = a.data, r = !(o = a.error))) : (o = c, !t && c || (c = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (e || c) + "", r ? v.resolveWith(m, [s, c, k]) : v.rejectWith(m, [k, c, o]), k.statusCode(b), b = undefined, d && y.trigger(r ? "ajaxSuccess" : "ajaxError", [k, g, r ? s : o]), w.fireWith(m, [k, c]), d && (y.trigger("ajaxComplete", [k, g]), --ft.active || ft.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (e = t, t = undefined), e = e || {};
			var i, r, u, p, h, d, f, s, g = ft.ajaxSetup({}, e),
				m = g.context || g,
				y = g.context && (m.nodeType || m.jquery) ? ft(m) : ft.event,
				v = ft.Deferred(),
				w = ft.Callbacks("once memory"),
				b = g.statusCode || {},
				o = {},
				a = {},
				S = 0,
				l = "canceled",
				k = {
					readyState: 0,
					getResponseHeader: function (t) {
						var e;
						if (2 === S) {
							if (!s)
								for (s = {}; e = tn.exec(p);) s[e[1].toLowerCase()] = e[2];
							e = s[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function () {
						return 2 === S ? p : null
					},
					setRequestHeader: function (t, e) {
						var n = t.toLowerCase();
						return S || (t = a[n] = a[n] || t, o[t] = e), this
					},
					overrideMimeType: function (t) {
						return S || (g.mimeType = t), this
					},
					statusCode: function (t) {
						var e;
						if (t)
							if (S < 2)
								for (e in t) b[e] = [b[e], t[e]];
							else k.always(t[k.status]);
						return this
					},
					abort: function (t) {
						var e = t || l;
						return f && f.abort(e), n(0, e), this
					}
				};
			if (v.promise(k).complete = w.add, k.success = k.done, k.error = k.fail, g.url = ((t || g.url || cn) + "").replace(Ke, "").replace(rn, un[1] + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = ft.trim(g.dataType || "*").toLowerCase().match(Ot) || [""], null == g.crossDomain && (i = sn.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] === un[1] && i[2] === un[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (un[3] || ("http:" === un[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = ft.param(g.data, g.traditional)), U(on, g, e, k), 2 === S) return k;
			for (r in (d = ft.event && g.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !nn.test(g.type), u = g.url, g.hasContent || (g.data && (u = g.url += (Qe.test(u) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = Ze.test(u) ? u.replace(Ze, "$1_=" + Ge++) : u + (Qe.test(u) ? "&" : "?") + "_=" + Ge++)), g.ifModified && (ft.lastModified[u] && k.setRequestHeader("If-Modified-Since", ft.lastModified[u]), ft.etag[u] && k.setRequestHeader("If-None-Match", ft.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && k.setRequestHeader("Content-Type", g.contentType), k.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + ln + "; q=0.01" : "") : g.accepts["*"]), g.headers) k.setRequestHeader(r, g.headers[r]);
			if (g.beforeSend && (!1 === g.beforeSend.call(m, k, g) || 2 === S)) return k.abort();
			for (r in l = "abort", {
					success: 1,
					error: 1,
					complete: 1
				}) k[r](g[r]);
			if (f = U(an, g, e, k)) {
				if (k.readyState = 1, d && y.trigger("ajaxSend", [k, g]), 2 === S) return k;
				g.async && 0 < g.timeout && (h = x.setTimeout(function () {
					k.abort("timeout")
				}, g.timeout));
				try {
					S = 1, f.send(o, n)
				} catch (c) {
					if (!(S < 2)) throw c;
					n(-1, c)
				}
			} else n(-1, "No Transport");
			return k
		},
		getJSON: function (t, e, n) {
			return ft.get(t, e, n, "json")
		},
		getScript: function (t, e) {
			return ft.get(t, undefined, e, "script")
		}
	}), ft.each(["get", "post"], function (t, r) {
		ft[r] = function (t, e, n, i) {
			return ft.isFunction(e) && (i = i || n, n = e, e = undefined), ft.ajax(ft.extend({
				url: t,
				type: r,
				dataType: i,
				data: e,
				success: n
			}, ft.isPlainObject(t) && t))
		}
	}), ft._evalUrl = function (t) {
		return ft.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, ft.fn.extend({
		wrapAll: function (e) {
			if (ft.isFunction(e)) return this.each(function (t) {
				ft(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = ft(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		},
		wrapInner: function (n) {
			return ft.isFunction(n) ? this.each(function (t) {
				ft(this).wrapInner(n.call(this, t))
			}) : this.each(function () {
				var t = ft(this),
					e = t.contents();
				e.length ? e.wrapAll(n) : t.append(n)
			})
		},
		wrap: function (e) {
			var n = ft.isFunction(e);
			return this.each(function (t) {
				ft(this).wrapAll(n ? e.call(this, t) : e)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				ft.nodeName(this, "body") || ft(this).replaceWith(this.childNodes)
			}).end()
		}
	}), ft.expr.filters.hidden = function (t) {
		return ht.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : K(t)
	}, ft.expr.filters.visible = function (t) {
		return !ft.expr.filters.hidden(t)
	};
	var pn = /%20/g,
		hn = /\[\]$/,
		dn = /\r?\n/g,
		fn = /^(?:submit|button|image|reset|file)$/i,
		gn = /^(?:input|select|textarea|keygen)/i;
	ft.param = function (t, e) {
		var n, i = [],
			r = function (t, e) {
				e = ft.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if (e === undefined && (e = ft.ajaxSettings && ft.ajaxSettings.traditional), ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function () {
			r(this.name, this.value)
		});
		else
			for (n in t) Z(n, t[n], e, r);
		return i.join("&").replace(pn, "+")
	}, ft.fn.extend({
		serialize: function () {
			return ft.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var t = ft.prop(this, "elements");
				return t ? ft.makeArray(t) : this
			}).filter(function () {
				var t = this.type;
				return this.name && !ft(this).is(":disabled") && gn.test(this.nodeName) && !fn.test(t) && (this.checked || !Vt.test(t))
			}).map(function (t, e) {
				var n = ft(this).val();
				return null == n ? null : ft.isArray(n) ? ft.map(n, function (t) {
					return {
						name: e.name,
						value: t.replace(dn, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(dn, "\r\n")
				}
			}).get()
		}
	}), ft.ajaxSettings.xhr = x.ActiveXObject !== undefined ? function () {
		return this.isLocal ? et() : 8 < rt.documentMode ? tt() : /^(get|post|head|put|delete|options)$/i.test(this.type) && tt() || et()
	} : tt;
	var mn = 0,
		yn = {},
		vn = ft.ajaxSettings.xhr();
	x.attachEvent && x.attachEvent("onunload", function () {
		for (var t in yn) yn[t](undefined, !0)
	}), ht.cors = !!vn && "withCredentials" in vn, (vn = ht.ajax = !!vn) && ft.ajaxTransport(function (c) {
		var u;
		if (!c.crossDomain || ht.cors) return {
			send: function (t, o) {
				var e, a = c.xhr(),
					l = ++mn;
				if (a.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)
					for (e in c.xhrFields) a[e] = c.xhrFields[e];
				for (e in c.mimeType && a.overrideMimeType && a.overrideMimeType(c.mimeType), c.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) t[e] !== undefined && a.setRequestHeader(e, t[e] + "");
				a.send(c.hasContent && c.data || null), u = function (t, e) {
					var n, i, r;
					if (u && (e || 4 === a.readyState))
						if (delete yn[l], u = undefined, a.onreadystatechange = ft.noop, e) 4 !== a.readyState && a.abort();
						else {
							r = {}, n = a.status, "string" == typeof a.responseText && (r.text = a.responseText);
							try {
								i = a.statusText
							} catch (s) {
								i = ""
							}
							n || !c.isLocal || c.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404
						}
					r && o(n, i, r, a.getAllResponseHeaders())
				}, c.async ? 4 === a.readyState ? x.setTimeout(u) : a.onreadystatechange = yn[l] = u : u()
			},
			abort: function () {
				u && u(undefined, !0)
			}
		}
	}), ft.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (t) {
				return ft.globalEval(t), t
			}
		}
	}), ft.ajaxPrefilter("script", function (t) {
		t.cache === undefined && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
	}), ft.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var i, r = rt.head || ft("head")[0] || rt.documentElement;
			return {
				send: function (t, n) {
					(i = rt.createElement("script")).async = !0, e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (t, e) {
						(e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || n(200, "success"))
					}, r.insertBefore(i, r.firstChild)
				},
				abort: function () {
					i && i.onload(undefined, !0)
				}
			}
		}
	});
	var wn = [],
		bn = /(=)\?(?=&|$)|\?\?/;
	ft.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var t = wn.pop() || ft.expando + "_" + Ge++;
			return this[t] = !0, t
		}
	}), ft.ajaxPrefilter("json jsonp", function (t, e, n) {
		var i, r, s, o = !1 !== t.jsonp && (bn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(t.data) && "data");
		if (o || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ft.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(bn, "$1" + i) : !1 !== t.jsonp && (t.url += (Qe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
			return s || ft.error(i + " was not called"), s[0]
		}, t.dataTypes[0] = "json", r = x[i], x[i] = function () {
			s = arguments
		}, n.always(function () {
			r === undefined ? ft(x).removeProp(i) : x[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, wn.push(i)), s && ft.isFunction(r) && r(s[0]), s = r = undefined
		}), "script"
	}), ft.parseHTML = function (t, e, n) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (n = e, e = !1), e = e || rt;
		var i = _t.exec(t),
			r = !n && [];
		return i ? [e.createElement(i[1])] : (i = g([t], e, r), r && r.length && ft(r).remove(), ft.merge([], i.childNodes))
	};
	var Sn = ft.fn.load;
	ft.fn.load = function (t, e, n) {
		if ("string" != typeof t && Sn) return Sn.apply(this, arguments);
		var i, r, s, o = this,
			a = t.indexOf(" ");
		return -1 < a && (i = ft.trim(t.slice(a, t.length)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, e = undefined) : e && "object" == typeof e && (r = "POST"), 0 < o.length && ft.ajax({
			url: t,
			type: r || "GET",
			dataType: "html",
			data: e
		}).done(function (t) {
			s = arguments, o.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
		}).always(n && function (t, e) {
			o.each(function () {
				n.apply(this, s || [t.responseText, e, t])
			})
		}), this
	}, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
		ft.fn[e] = function (t) {
			return this.on(e, t)
		}
	}), ft.expr.filters.animated = function (e) {
		return ft.grep(ft.timers, function (t) {
			return e === t.elem
		}).length
	}, ft.offset = {
		setOffset: function (t, e, n) {
			var i, r, s, o, a, l, c = ft.css(t, "position"),
				u = ft(t),
				p = {};
			"static" === c && (t.style.position = "relative"), a = u.offset(), s = ft.css(t, "top"), l = ft.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < ft.inArray("auto", [s, l]) ? (o = (i = u.position()).top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), null != e.top && (p.top = e.top - a.top + o), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : u.css(p)
		}
	}, ft.fn.extend({
		offset: function (e) {
			if (arguments.length) return e === undefined ? this : this.each(function (t) {
				ft.offset.setOffset(this, e, t)
			});
			var t, n, i = {
					top: 0,
					left: 0
				},
				r = this[0],
				s = r && r.ownerDocument;
			return s ? (t = s.documentElement, ft.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = nt(s), {
				top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : i) : void 0
		},
		position: function () {
			if (this[0]) {
				var t, e, n = {
						top: 0,
						left: 0
					},
					i = this[0];
				return "fixed" === ft.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ft.nodeName(t[0], "html") || (n = t.offset()), n.top += ft.css(t[0], "borderTopWidth", !0), n.left += ft.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - ft.css(i, "marginTop", !0),
					left: e.left - n.left - ft.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var t = this.offsetParent; t && !ft.nodeName(t, "html") && "static" === ft.css(t, "position");) t = t.offsetParent;
				return t || me
			})
		}
	}), ft.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, r) {
		var s = /Y/.test(r);
		ft.fn[e] = function (t) {
			return Rt(this, function (t, e, n) {
				var i = nt(t);
				if (n === undefined) return i ? r in i ? i[r] : i.document.documentElement[e] : t[e];
				i ? i.scrollTo(s ? ft(i).scrollLeft() : n, s ? n : ft(i).scrollTop()) : t[e] = n
			}, e, t, arguments.length, null)
		}
	}), ft.each(["top", "left"], function (t, n) {
		ft.cssHooks[n] = E(ht.pixelPosition, function (t, e) {
			if (e) return e = ve(t, n), fe.test(e) ? ft(t).position()[n] + "px" : e
		})
	}), ft.each({
		Height: "height",
		Width: "width"
	}, function (s, o) {
		ft.each({
			padding: "inner" + s,
			content: o,
			"": "outer" + s
		}, function (i, t) {
			ft.fn[t] = function (t, e) {
				var n = arguments.length && (i || "boolean" != typeof t),
					r = i || (!0 === t || !0 === e ? "margin" : "border");
				return Rt(this, function (t, e, n) {
					var i;
					return ft.isWindow(t) ? t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : n === undefined ? ft.css(t, e, r) : ft.style(t, e, n, r)
				}, o, n ? t : undefined, n, null)
			}
		})
	}), ft.fn.extend({
		bind: function (t, e, n) {
			return this.on(t, null, e, n)
		},
		unbind: function (t, e) {
			return this.off(t, null, e)
		},
		delegate: function (t, e, n, i) {
			return this.on(e, t, n, i)
		},
		undelegate: function (t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	}), ft.fn.size = function () {
		return this.length
	}, ft.fn.andSelf = ft.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return ft
	});
	var kn = x.jQuery,
		_n = x.$;
	return ft.noConflict = function (t) {
		return x.$ === ft && (x.$ = _n), t && x.jQuery === ft && (x.jQuery = kn), ft
	}, t || (x.jQuery = x.$ = ft), ft
}),
function (n) {
	n.fn.classes = function (t) {
		var s = [];
		if (n.each(this, function (t, e) {
				var n = e.className.split(/\s+/);
				for (var i in n) {
					var r = n[i]; - 1 === s.indexOf(r) && s.push(r)
				}
			}), "function" == typeof t)
			for (var e in s) t(s[e]);
		return s
	}
}(jQuery),
function (e, n) {
	"function" == typeof define && define.amd ? define(["jquery"], function (t) {
		return n(e, t)
	}) : "object" == typeof exports ? module.exports = n(e, require("jquery")) : n(e, jQuery)
}("undefined" != typeof window ? window : this,
	function (t, r, s) {
		"use strict";

		function o() {
			"hidden" !== a && (l.hidden = i.pageVisibility ? l[a] : s)
		}
		for (var a, e, l = t.document, n = ["webkit", "o", "ms", "moz", ""], i = r.support || {}, c = ("onfocusin" in l && "hasFocus" in l ? "focusin focusout" : "focus blur");
			(e = n.pop()) !== s;)
			if (a = (e ? e + "H" : "h") + "idden", i.pageVisibility = l[a] !== s, i.pageVisibility) {
				c = e + "visibilitychange";
				break
			}
		o(), r(/blur$/.test(c) ? t : l).on(c, function (t) {
			var e = t.type,
				n = t.originalEvent;
			if (n) {
				var i = n.toElement;
				(!/^focus./.test(e) || i === s && n.fromElement === s && n.relatedTarget === s) && r(l).triggerHandler(a && l[a] || /^(?:blur|focusout)$/.test(e) ? "hide" : "show"), o()
			}
		})
	}),
function () {
	function t(a) {
		function l(t, e, n, i, r, s) {
			for (; 0 <= r && r < s; r += a) {
				var o = i ? i[r] : r;
				n = e(n, t[o], o, t)
			}
			return n
		}
		return function (t, e, n, i) {
			e = w(e, i, 4);
			var r = !A(t) && v.keys(t),
				s = (r || t).length,
				o = 0 < a ? 0 : s - 1;
			return arguments.length < 3 && (n = t[r ? r[o] : o], o += a), l(t, e, n, r, o, s)
		}
	}

	function e(s) {
		return function (t, e, n) {
			e = b(e, n);
			for (var i = T(t), r = 0 < s ? 0 : i - 1; 0 <= r && r < i; r += s)
				if (e(t[r], r, t)) return r;
			return -1
		}
	}

	function n(s, o, a) {
		return function (t, e, n) {
			var i = 0,
				r = T(t);
			if ("number" == typeof n) 0 < s ? i = 0 <= n ? n : Math.max(n + r, i) : r = 0 <= n ? Math.min(n + 1, r) : n + r + 1;
			else if (a && n && r) return t[n = a(t, e)] === e ? n : -1;
			if (e != e) return 0 <= (n = o(u.call(t, i, r), v.isNaN)) ? n + i : -1;
			for (n = 0 < s ? i : r - 1; 0 <= n && n < r; n += s)
				if (t[n] === e) return n;
			return -1
		}
	}

	function i(t, e) {
		var n = O.length,
			i = t.constructor,
			r = v.isFunction(i) && i.prototype || a,
			s = "constructor";
		for (v.has(t, s) && !v.contains(e, s) && e.push(s); n--;)(s = O[n]) in t && t[s] !== r[s] && !v.contains(e, s) && e.push(s)
	}
	var r = this,
		s = r._,
		o = Array.prototype,
		a = Object.prototype,
		l = Function.prototype,
		c = o.push,
		u = o.slice,
		p = a.toString,
		h = a.hasOwnProperty,
		d = Array.isArray,
		f = Object.keys,
		g = l.bind,
		m = Object.create,
		y = function () {},
		v = function (t) {
			return t instanceof v ? t : this instanceof v ? void(this._wrapped = t) : new v(t)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : r._ = v, v.VERSION = "1.8.3";
	var w = function (r, s, t) {
			if (void 0 === s) return r;
			switch (null == t ? 3 : t) {
				case 1:
					return function (t) {
						return r.call(s, t)
					};
				case 2:
					return function (t, e) {
						return r.call(s, t, e)
					};
				case 3:
					return function (t, e, n) {
						return r.call(s, t, e, n)
					};
				case 4:
					return function (t, e, n, i) {
						return r.call(s, t, e, n, i)
					}
			}
			return function () {
				return r.apply(s, arguments)
			}
		},
		b = function (t, e, n) {
			return null == t ? v.identity : v.isFunction(t) ? w(t, e, n) : v.isObject(t) ? v.matcher(t) : v.property(t)
		};
	v.iteratee = function (t, e) {
		return b(t, e, Infinity)
	};
	var S = function (l, c) {
			return function (t) {
				var e = arguments.length;
				if (e < 2 || null == t) return t;
				for (var n = 1; n < e; n++)
					for (var i = arguments[n], r = l(i), s = r.length, o = 0; o < s; o++) {
						var a = r[o];
						c && void 0 !== t[a] || (t[a] = i[a])
					}
				return t
			}
		},
		k = function (t) {
			if (!v.isObject(t)) return {};
			if (m) return m(t);
			y.prototype = t;
			var e = new y;
			return y.prototype = null, e
		},
		_ = function (e) {
			return function (t) {
				return null == t ? void 0 : t[e]
			}
		},
		x = Math.pow(2, 53) - 1,
		T = _("length"),
		A = function (t) {
			var e = T(t);
			return "number" == typeof e && 0 <= e && e <= x
		};
	v.each = v.forEach = function (t, e, n) {
		var i, r;
		if (e = w(e, n), A(t))
			for (i = 0, r = t.length; i < r; i++) e(t[i], i, t);
		else {
			var s = v.keys(t);
			for (i = 0, r = s.length; i < r; i++) e(t[s[i]], s[i], t)
		}
		return t
	}, v.map = v.collect = function (t, e, n) {
		e = b(e, n);
		for (var i = !A(t) && v.keys(t), r = (i || t).length, s = Array(r), o = 0; o < r; o++) {
			var a = i ? i[o] : o;
			s[o] = e(t[a], a, t)
		}
		return s
	}, v.reduce = v.foldl = v.inject = t(1), v.reduceRight = v.foldr = t(-1), v.find = v.detect = function (t, e, n) {
		var i;
		if (void 0 !== (i = A(t) ? v.findIndex(t, e, n) : v.findKey(t, e, n)) && -1 !== i) return t[i]
	}, v.filter = v.select = function (t, i, e) {
		var r = [];
		return i = b(i, e), v.each(t, function (t, e, n) {
			i(t, e, n) && r.push(t)
		}), r
	}, v.reject = function (t, e, n) {
		return v.filter(t, v.negate(b(e)), n)
	}, v.every = v.all = function (t, e, n) {
		e = b(e, n);
		for (var i = !A(t) && v.keys(t), r = (i || t).length, s = 0; s < r; s++) {
			var o = i ? i[s] : s;
			if (!e(t[o], o, t)) return !1
		}
		return !0
	}, v.some = v.any = function (t, e, n) {
		e = b(e, n);
		for (var i = !A(t) && v.keys(t), r = (i || t).length, s = 0; s < r; s++) {
			var o = i ? i[s] : s;
			if (e(t[o], o, t)) return !0
		}
		return !1
	}, v.contains = v.includes = v.include = function (t, e, n, i) {
		return A(t) || (t = v.values(t)), ("number" != typeof n || i) && (n = 0), 0 <= v.indexOf(t, e, n)
	}, v.invoke = function (t, n) {
		var i = u.call(arguments, 2),
			r = v.isFunction(n);
		return v.map(t, function (t) {
			var e = r ? n : t[n];
			return null == e ? e : e.apply(t, i)
		})
	}, v.pluck = function (t, e) {
		return v.map(t, v.property(e))
	}, v.where = function (t, e) {
		return v.filter(t, v.matcher(e))
	}, v.findWhere = function (t, e) {
		return v.find(t, v.matcher(e))
	}, v.max = function (t, i, e) {
		var n, r, s = -Infinity,
			o = -Infinity;
		if (null == i && null != t)
			for (var a = 0, l = (t = A(t) ? t : v.values(t)).length; a < l; a++) n = t[a], s < n && (s = n);
		else i = b(i, e), v.each(t, function (t, e, n) {
			r = i(t, e, n), (o < r || r === -Infinity && s === -Infinity) && (s = t, o = r)
		});
		return s
	}, v.min = function (t, i, e) {
		var n, r, s = Infinity,
			o = Infinity;
		if (null == i && null != t)
			for (var a = 0, l = (t = A(t) ? t : v.values(t)).length; a < l; a++)(n = t[a]) < s && (s = n);
		else i = b(i, e), v.each(t, function (t, e, n) {
			((r = i(t, e, n)) < o || r === Infinity && s === Infinity) && (s = t, o = r)
		});
		return s
	}, v.shuffle = function (t) {
		for (var e, n = A(t) ? t : v.values(t), i = n.length, r = Array(i), s = 0; s < i; s++)(e = v.random(0, s)) !== s && (r[s] = r[e]), r[e] = n[s];
		return r
	}, v.sample = function (t, e, n) {
		return null == e || n ? (A(t) || (t = v.values(t)), t[v.random(t.length - 1)]) : v.shuffle(t).slice(0, Math.max(0, e))
	}, v.sortBy = function (t, i, e) {
		return i = b(i, e), v.pluck(v.map(t, function (t, e, n) {
			return {
				value: t,
				index: e,
				criteria: i(t, e, n)
			}
		}).sort(function (t, e) {
			var n = t.criteria,
				i = e.criteria;
			if (n !== i) {
				if (i < n || void 0 === n) return 1;
				if (n < i || void 0 === i) return -1
			}
			return t.index - e.index
		}), "value")
	};
	var C = function (o) {
		return function (i, r, t) {
			var s = {};
			return r = b(r, t), v.each(i, function (t, e) {
				var n = r(t, e, i);
				o(s, t, n)
			}), s
		}
	};
	v.groupBy = C(function (t, e, n) {
		v.has(t, n) ? t[n].push(e) : t[n] = [e]
	}), v.indexBy = C(function (t, e, n) {
		t[n] = e
	}), v.countBy = C(function (t, e, n) {
		v.has(t, n) ? t[n]++ : t[n] = 1
	}), v.toArray = function (t) {
		return t ? v.isArray(t) ? u.call(t) : A(t) ? v.map(t, v.identity) : v.values(t) : []
	}, v.size = function (t) {
		return null == t ? 0 : A(t) ? t.length : v.keys(t).length
	}, v.partition = function (t, i, e) {
		i = b(i, e);
		var r = [],
			s = [];
		return v.each(t, function (t, e, n) {
			(i(t, e, n) ? r : s).push(t)
		}), [r, s]
	}, v.first = v.head = v.take = function (t, e, n) {
		if (null != t) return null == e || n ? t[0] : v.initial(t, t.length - e)
	}, v.initial = function (t, e, n) {
		return u.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
	}, v.last = function (t, e, n) {
		if (null != t) return null == e || n ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - e))
	}, v.rest = v.tail = v.drop = function (t, e, n) {
		return u.call(t, null == e || n ? 1 : e)
	}, v.compact = function (t) {
		return v.filter(t, v.identity)
	};
	var j = function (t, e, n, i) {
		for (var r = [], s = 0, o = i || 0, a = T(t); o < a; o++) {
			var l = t[o];
			if (A(l) && (v.isArray(l) || v.isArguments(l))) {
				e || (l = j(l, e, n));
				var c = 0,
					u = l.length;
				for (r.length += u; c < u;) r[s++] = l[c++]
			} else n || (r[s++] = l)
		}
		return r
	};
	v.flatten = function (t, e) {
		return j(t, e, !1)
	}, v.without = function (t) {
		return v.difference(t, u.call(arguments, 1))
	}, v.uniq = v.unique = function (t, e, n, i) {
		v.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = b(n, i));
		for (var r = [], s = [], o = 0, a = T(t); o < a; o++) {
			var l = t[o],
				c = n ? n(l, o, t) : l;
			e ? (o && s === c || r.push(l), s = c) : n ? v.contains(s, c) || (s.push(c), r.push(l)) : v.contains(r, l) || r.push(l)
		}
		return r
	}, v.union = function () {
		return v.uniq(j(arguments, !0, !0))
	}, v.intersection = function (t) {
		for (var e = [], n = arguments.length, i = 0, r = T(t); i < r; i++) {
			var s = t[i];
			if (!v.contains(e, s)) {
				for (var o = 1; o < n && v.contains(arguments[o], s); o++);
				o === n && e.push(s)
			}
		}
		return e
	}, v.difference = function (t) {
		var e = j(arguments, !0, !0, 1);
		return v.filter(t, function (t) {
			return !v.contains(e, t)
		})
	}, v.zip = function () {
		return v.unzip(arguments)
	}, v.unzip = function (t) {
		for (var e = t && v.max(t, T).length || 0, n = Array(e), i = 0; i < e; i++) n[i] = v.pluck(t, i);
		return n
	}, v.object = function (t, e) {
		for (var n = {}, i = 0, r = T(t); i < r; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
		return n
	}, v.findIndex = e(1), v.findLastIndex = e(-1), v.sortedIndex = function (t, e, n, i) {
		for (var r = (n = b(n, i, 1))(e), s = 0, o = T(t); s < o;) {
			var a = Math.floor((s + o) / 2);
			n(t[a]) < r ? s = a + 1 : o = a
		}
		return s
	}, v.indexOf = n(1, v.findIndex, v.sortedIndex), v.lastIndexOf = n(-1, v.findLastIndex), v.range = function (t, e, n) {
		null == e && (e = t || 0, t = 0), n = n || 1;
		for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), s = 0; s < i; s++, t += n) r[s] = t;
		return r
	};
	var J = function (t, e, n, i, r) {
		if (!(i instanceof e)) return t.apply(n, r);
		var s = k(t.prototype),
			o = t.apply(s, r);
		return v.isObject(o) ? o : s
	};
	v.bind = function (t, e) {
		if (g && t.bind === g) return g.apply(t, u.call(arguments, 1));
		if (!v.isFunction(t)) throw new TypeError("Bind must be called on a function");
		var n = u.call(arguments, 2),
			i = function () {
				return J(t, i, e, this, n.concat(u.call(arguments)))
			};
		return i
	}, v.partial = function (r) {
		var s = u.call(arguments, 1),
			o = function () {
				for (var t = 0, e = s.length, n = Array(e), i = 0; i < e; i++) n[i] = s[i] === v ? arguments[t++] : s[i];
				for (; t < arguments.length;) n.push(arguments[t++]);
				return J(r, o, this, this, n)
			};
		return o
	}, v.bindAll = function (t) {
		var e, n, i = arguments.length;
		if (i <= 1) throw new Error("bindAll must be passed function names");
		for (e = 1; e < i; e++) t[n = arguments[e]] = v.bind(t[n], t);
		return t
	}, v.memoize = function (i, r) {
		var s = function (t) {
			var e = s.cache,
				n = "" + (r ? r.apply(this, arguments) : t);
			return v.has(e, n) || (e[n] = i.apply(this, arguments)), e[n]
		};
		return s.cache = {}, s
	}, v.delay = function (t, e) {
		var n = u.call(arguments, 2);
		return setTimeout(function () {
			return t.apply(null, n)
		}, e)
	}, v.defer = v.partial(v.delay, v, 1), v.throttle = function (n, i, r) {
		var s, o, a, l = null,
			c = 0;
		r || (r = {});
		var u = function () {
			c = !1 === r.leading ? 0 : v.now(), l = null, a = n.apply(s, o), l || (s = o = null)
		};
		return function () {
			var t = v.now();
			c || !1 !== r.leading || (c = t);
			var e = i - (t - c);
			return s = this, o = arguments, e <= 0 || i < e ? (l && (clearTimeout(l), l = null), c = t, a = n.apply(s, o), l || (s = o = null)) : l || !1 === r.trailing || (l = setTimeout(u, e)), a
		}
	}, v.debounce = function (e, n, i) {
		var r, s, o, a, l, c = function () {
			var t = v.now() - a;
			t < n && 0 <= t ? r = setTimeout(c, n - t) : (r = null, i || (l = e.apply(o, s), r || (o = s = null)))
		};
		return function () {
			o = this, s = arguments, a = v.now();
			var t = i && !r;
			return r || (r = setTimeout(c, n)), t && (l = e.apply(o, s), o = s = null), l
		}
	}, v.wrap = function (t, e) {
		return v.partial(e, t)
	}, v.negate = function (t) {
		return function () {
			return !t.apply(this, arguments)
		}
	}, v.compose = function () {
		var n = arguments,
			i = n.length - 1;
		return function () {
			for (var t = i, e = n[i].apply(this, arguments); t--;) e = n[t].call(this, e);
			return e
		}
	}, v.after = function (t, e) {
		return function () {
			if (--t < 1) return e.apply(this, arguments)
		}
	}, v.before = function (t, e) {
		var n;
		return function () {
			return 0 < --t && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
		}
	}, v.once = v.partial(v.before, 2);
	var P = !{
			toString: null
		}.propertyIsEnumerable("toString"),
		O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
	v.keys = function (t) {
		if (!v.isObject(t)) return [];
		if (f) return f(t);
		var e = [];
		for (var n in t) v.has(t, n) && e.push(n);
		return P && i(t, e), e
	}, v.allKeys = function (t) {
		if (!v.isObject(t)) return [];
		var e = [];
		for (var n in t) e.push(n);
		return P && i(t, e), e
	}, v.values = function (t) {
		for (var e = v.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = t[e[r]];
		return i
	}, v.mapObject = function (t, e, n) {
		e = b(e, n);
		for (var i, r = v.keys(t), s = r.length, o = {}, a = 0; a < s; a++) o[i = r[a]] = e(t[i], i, t);
		return o
	}, v.pairs = function (t) {
		for (var e = v.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = [e[r], t[e[r]]];
		return i
	}, v.invert = function (t) {
		for (var e = {}, n = v.keys(t), i = 0, r = n.length; i < r; i++) e[t[n[i]]] = n[i];
		return e
	}, v.functions = v.methods = function (t) {
		var e = [];
		for (var n in t) v.isFunction(t[n]) && e.push(n);
		return e.sort()
	}, v.extend = S(v.allKeys), v.extendOwn = v.assign = S(v.keys), v.findKey = function (t, e, n) {
		e = b(e, n);
		for (var i, r = v.keys(t), s = 0, o = r.length; s < o; s++)
			if (e(t[i = r[s]], i, t)) return i
	}, v.pick = function (t, e, n) {
		var i, r, s = {},
			o = t;
		if (null == o) return s;
		v.isFunction(e) ? (r = v.allKeys(o), i = w(e, n)) : (r = j(arguments, !1, !1, 1), i = function (t, e, n) {
			return e in n
		}, o = Object(o));
		for (var a = 0, l = r.length; a < l; a++) {
			var c = r[a],
				u = o[c];
			i(u, c, o) && (s[c] = u)
		}
		return s
	}, v.omit = function (t, e, n) {
		if (v.isFunction(e)) e = v.negate(e);
		else {
			var i = v.map(j(arguments, !1, !1, 1), String);
			e = function (t, e) {
				return !v.contains(i, e)
			}
		}
		return v.pick(t, e, n)
	}, v.defaults = S(v.allKeys, !0), v.create = function (t, e) {
		var n = k(t);
		return e && v.extendOwn(n, e), n
	}, v.clone = function (t) {
		return v.isObject(t) ? v.isArray(t) ? t.slice() : v.extend({}, t) : t
	}, v.tap = function (t, e) {
		return e(t), t
	}, v.isMatch = function (t, e) {
		var n = v.keys(e),
			i = n.length;
		if (null == t) return !i;
		for (var r = Object(t), s = 0; s < i; s++) {
			var o = n[s];
			if (e[o] !== r[o] || !(o in r)) return !1
		}
		return !0
	};
	var E = function (t, e, n, i) {
		if (t === e) return 0 !== t || 1 / t == 1 / e;
		if (null == t || null == e) return t === e;
		t instanceof v && (t = t._wrapped), e instanceof v && (e = e._wrapped);
		var r = p.call(t);
		if (r !== p.call(e)) return !1;
		switch (r) {
			case "[object RegExp]":
			case "[object String]":
				return "" + t == "" + e;
			case "[object Number]":
				return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
			case "[object Date]":
			case "[object Boolean]":
				return +t == +e
		}
		var s = "[object Array]" === r;
		if (!s) {
			if ("object" != typeof t || "object" != typeof e) return !1;
			var o = t.constructor,
				a = e.constructor;
			if (o !== a && !(v.isFunction(o) && o instanceof o && v.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
		}
		i = i || [];
		for (var l = (n = n || []).length; l--;)
			if (n[l] === t) return i[l] === e;
		if (n.push(t), i.push(e), s) {
			if ((l = t.length) !== e.length) return !1;
			for (; l--;)
				if (!E(t[l], e[l], n, i)) return !1
		} else {
			var c, u = v.keys(t);
			if (l = u.length, v.keys(e).length !== l) return !1;
			for (; l--;)
				if (c = u[l], !v.has(e, c) || !E(t[c], e[c], n, i)) return !1
		}
		return n.pop(), i.pop(), !0
	};
	v.isEqual = function (t, e) {
		return E(t, e)
	}, v.isEmpty = function (t) {
		return null == t || (A(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t)) ? 0 === t.length : 0 === v.keys(t).length)
	}, v.isElement = function (t) {
		return !(!t || 1 !== t.nodeType)
	}, v.isArray = d || function (t) {
		return "[object Array]" === p.call(t)
	}, v.isObject = function (t) {
		var e = typeof t;
		return "function" === e || "object" === e && !!t
	}, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
		v["is" + e] = function (t) {
			return p.call(t) === "[object " + e + "]"
		}
	}), v.isArguments(arguments) || (v.isArguments = function (t) {
		return v.has(t, "callee")
	}), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function (t) {
		return "function" == typeof t || !1
	}), v.isFinite = function (t) {
		return isFinite(t) && !isNaN(parseFloat(t))
	}, v.isNaN = function (t) {
		return v.isNumber(t) && t !== +t
	}, v.isBoolean = function (t) {
		return !0 === t || !1 === t || "[object Boolean]" === p.call(t)
	}, v.isNull = function (t) {
		return null === t
	}, v.isUndefined = function (t) {
		return void 0 === t
	}, v.has = function (t, e) {
		return null != t && h.call(t, e)
	}, v.noConflict = function () {
		return r._ = s, this
	}, v.identity = function (t) {
		return t
	}, v.constant = function (t) {
		return function () {
			return t
		}
	}, v.noop = function () {}, v.property = _, v.propertyOf = function (e) {
		return null == e ? function () {} : function (t) {
			return e[t]
		}
	}, v.matcher = v.matches = function (e) {
		return e = v.extendOwn({}, e),
			function (t) {
				return v.isMatch(t, e)
			}
	}, v.times = function (t, e, n) {
		var i = Array(Math.max(0, t));
		e = w(e, n, 1);
		for (var r = 0; r < t; r++) i[r] = e(r);
		return i
	}, v.random = function (t, e) {
		return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
	}, v.now = Date.now || function () {
		return (new Date).getTime()
	};
	var $ = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"`": "&#x60;"
		},
		M = v.invert($),
		F = function (e) {
			var n = function (t) {
					return e[t]
				},
				t = "(?:" + v.keys(e).join("|") + ")",
				i = RegExp(t),
				r = RegExp(t, "g");
			return function (t) {
				return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, n) : t
			}
		};
	v.escape = F($), v.unescape = F(M), v.result = function (t, e, n) {
		var i = null == t ? void 0 : t[e];
		return void 0 === i && (i = n), v.isFunction(i) ? i.call(t) : i
	};
	var L = 0;
	v.uniqueId = function (t) {
		var e = ++L + "";
		return t ? t + e : e
	}, v.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var D = /(.)^/,
		I = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		N = /\\|'|\r|\n|\u2028|\u2029/g,
		H = function (t) {
			return "\\" + I[t]
		};
	v.template = function (s, t, e) {
		!t && e && (t = e), t = v.defaults({}, t, v.templateSettings);
		var n = RegExp([(t.escape || D).source, (t.interpolate || D).source, (t.evaluate || D).source].join("|") + "|$", "g"),
			o = 0,
			a = "__p+='";
		s.replace(n, function (t, e, n, i, r) {
			return a += s.slice(o, r).replace(N, H), o = r + t.length, e ? a += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'" : n ? a += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
		}), a += "';\n", t.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
		try {
			var i = new Function(t.variable || "obj", "_", a)
		} catch (c) {
			throw c.source = a, c
		}
		var r = function (t) {
				return i.call(this, t, v)
			},
			l = t.variable || "obj";
		return r.source = "function(" + l + "){\n" + a + "}", r
	}, v.chain = function (t) {
		var e = v(t);
		return e._chain = !0, e
	};
	var z = function (t, e) {
		return t._chain ? v(e).chain() : e
	};
	v.mixin = function (n) {
		v.each(v.functions(n), function (t) {
			var e = v[t] = n[t];
			v.prototype[t] = function () {
				var t = [this._wrapped];
				return c.apply(t, arguments), z(this, e.apply(v, t))
			}
		})
	}, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
		var n = o[e];
		v.prototype[e] = function () {
			var t = this._wrapped;
			return n.apply(t, arguments), "shift" !== e && "splice" !== e || 0 !== t.length || delete t[0], z(this, t)
		}
	}), v.each(["concat", "join", "slice"], function (t) {
		var e = o[t];
		v.prototype[t] = function () {
			return z(this, e.apply(this._wrapped, arguments))
		}
	}), v.prototype.value = function () {
		return this._wrapped
	}, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function () {
		return "" + this._wrapped
	}, "function" == typeof define && define.amd && define("underscore", [], function () {
		return v
	})
}.call(this),
	function (r, s) {
		var o = [],
			a = [],
			l = [],
			t = {
				gsub: function (t, e, n) {
					var i = new RegExp(e.source || e, "gi");
					return i.test(t) ? t.replace(i, n) : null
				},
				plural: function (t, e) {
					o.unshift([t, e])
				},
				pluralize: function (n, t, e) {
					var i;
					if (t !== s) t = parseFloat(t), i = 1 === t ? this.singularize(n) : this.pluralize(n), i = e ? [t, i].join(" ") : i;
					else {
						if (r(l).include(n)) return n;
						i = n, r(o).detect(function (t) {
							var e = this.gsub(n, t[0], t[1]);
							return !!e && (i = e)
						}, this)
					}
					return i
				},
				singular: function (t, e) {
					a.unshift([t, e])
				},
				singularize: function (n) {
					if (r(l).include(n)) return n;
					var i = n;
					return r(a).detect(function (t) {
						var e = this.gsub(n, t[0], t[1]);
						return !!e && (i = e)
					}, this), i
				},
				irregular: function (t, e) {
					this.plural("\\b" + t + "\\b", e), this.singular("\\b" + e + "\\b", t)
				},
				uncountable: function (t) {
					l.unshift(t)
				},
				ordinalize: function (t) {
					if (isNaN(t)) return t;
					var e = (t = t.toString()).slice(-1),
						n = t.slice(-2);
					if ("11" === n || "12" === n || "13" === n) return t + "th";
					switch (e) {
						case "1":
							return t + "st";
						case "2":
							return t + "nd";
						case "3":
							return t + "rd";
						default:
							return t + "th"
					}
				},
				titleize: function (t) {
					return "string" != typeof t ? t : t.replace(/\S+/g, function (t) {
						return t.charAt(0).toUpperCase() + t.slice(1)
					})
				},
				resetInflections: function () {
					return o = [], a = [], l = [], this.plural(/$/, "s"), this.plural(/s$/, "s"), this.plural(/(ax|test)is$/, "$1es"), this.plural(/(octop|vir)us$/, "$1i"), this.plural(/(octop|vir)i$/, "$1i"), this.plural(/(alias|status)$/, "$1es"), this.plural(/(bu)s$/, "$1ses"), this.plural(/(buffal|tomat)o$/, "$1oes"), this.plural(/([ti])um$/, "$1a"), this.plural(/([ti])a$/, "$1a"), this.plural(/sis$/, "ses"), this.plural(/(?:([^f])fe|([lr])?f)$/, "$1$2ves"), this.plural(/(hive)$/, "$1s"), this.plural(/([^aeiouy]|qu)y$/, "$1ies"), this.plural(/(x|ch|ss|sh)$/, "$1es"), this.plural(/(matr|vert|ind)(?:ix|ex)$/, "$1ices"), this.plural(/([m|l])ouse$/, "$1ice"), this.plural(/([m|l])ice$/, "$1ice"), this.plural(/^(ox)$/, "$1en"), this.plural(/^(oxen)$/, "$1"), this.plural(/(quiz)$/, "$1zes"), this.singular(/s$/, ""), this.singular(/(n)ews$/, "$1ews"), this.singular(/([ti])a$/, "$1um"), this.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/, "$1$2sis"), this.singular(/(^analy)ses$/, "$1sis"), this.singular(/([^f])ves$/, "$1fe"), this.singular(/(hive)s$/, "$1"), this.singular(/(tive)s$/, "$1"), this.singular(/([lr])ves$/, "$1f"), this.singular(/([^aeiouy]|qu)ies$/, "$1y"), this.singular(/(s)eries$/, "$1eries"), this.singular(/(m)ovies$/, "$1ovie"), this.singular(/(x|ch|ss|sh)es$/, "$1"), this.singular(/([m|l])ice$/, "$1ouse"), this.singular(/(bus)es$/, "$1"), this.singular(/(o)es$/, "$1"), this.singular(/(shoe)s$/, "$1"), this.singular(/(cris|ax|test)es$/, "$1is"), this.singular(/(octop|vir)i$/, "$1us"), this.singular(/(alias|status)es$/, "$1"), this.singular(/^(ox)en/, "$1"), this.singular(/(vert|ind)ices$/, "$1ex"), this.singular(/(matr)ices$/, "$1ix"), this.singular(/(quiz)zes$/, "$1"), this.singular(/(database)s$/, "$1"), this.irregular("person", "people"), this.irregular("man", "men"), this.irregular("child", "children"), this.irregular("sex", "sexes"), this.irregular("move", "moves"), this.irregular("cow", "kine"), this.uncountable("equipment"), this.uncountable("information"), this.uncountable("rice"), this.uncountable("money"), this.uncountable("species"), this.uncountable("series"), this.uncountable("fish"), this.uncountable("sheep"), this.uncountable("jeans"), this
				}
			};
		r.mixin(t.resetInflections())
	}(_),
	function (i) {
		var r = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
		if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function (t, e, n) {
			r.Backbone = i(r, n, t, e)
		});
		else if ("undefined" != typeof exports) {
			var t, e = require("underscore");
			try {
				t = require("jquery")
			} catch (n) {}
			i(r, exports, e, t)
		} else r.Backbone = i(r, {}, r._, r.jQuery || r.Zepto || r.ender || r.$)
	}(function (t, l, k, e) {
		var n = t.Backbone,
			s = [].slice;
		l.VERSION = "1.2.1", l.$ = e, l.noConflict = function () {
			return t.Backbone = n, this
		}, l.emulateHTTP = !1, l.emulateJSON = !1;
		var r = function (t, i, r) {
				switch (t) {
					case 1:
						return function () {
							return k[i](this[r])
						};
					case 2:
						return function (t) {
							return k[i](this[r], t)
						};
					case 3:
						return function (t, e) {
							return k[i](this[r], t, e)
						};
					case 4:
						return function (t, e, n) {
							return k[i](this[r], t, e, n)
						};
					default:
						return function () {
							var t = s.call(arguments);
							return t.unshift(this[r]), k[i].apply(k, t)
						}
				}
			},
			i = function (n, t, i) {
				k.each(t, function (t, e) {
					k[e] && (n.prototype[e] = r(t, e, i))
				})
			},
			o = l.Events = {},
			a = /\s+/,
			c = function (t, e, n, i, r) {
				var s, o = 0;
				if (n && "object" == typeof n) {
					void 0 !== i && "context" in r && void 0 === r.context && (r.context = i);
					for (s = k.keys(n); o < s.length; o++) e = t(e, s[o], n[s[o]], r)
				} else if (n && a.test(n))
					for (s = n.split(a); o < s.length; o++) e = t(e, s[o], i, r);
				else e = t(e, n, i, r);
				return e
			};
		o.on = function (t, e, n) {
			return u(this, t, e, n)
		};
		var u = function (t, e, n, i, r) {
			(t._events = c(p, t._events || {}, e, n, {
				context: i,
				ctx: t,
				listening: r
			}), r) && ((t._listeners || (t._listeners = {}))[r.id] = r);
			return t
		};
		o.listenTo = function (t, e, n) {
			if (!t) return this;
			var i = t._listenId || (t._listenId = k.uniqueId("l")),
				r = this._listeningTo || (this._listeningTo = {}),
				s = r[i];
			if (!s) {
				var o = this._listenId || (this._listenId = k.uniqueId("l"));
				s = r[i] = {
					obj: t,
					objId: i,
					id: o,
					listeningTo: r,
					count: 0
				}
			}
			return u(t, e, n, this, s), this
		};
		var p = function (t, e, n, i) {
			if (n) {
				var r = t[e] || (t[e] = []),
					s = i.context,
					o = i.ctx,
					a = i.listening;
				a && a.count++, r.push({
					callback: n,
					context: s,
					ctx: s || o,
					listening: a
				})
			}
			return t
		};
		o.off = function (t, e, n) {
			return this._events && (this._events = c(h, this._events, t, e, {
				context: n,
				listeners: this._listeners
			})), this
		}, o.stopListening = function (t, e, n) {
			var i = this._listeningTo;
			if (!i) return this;
			for (var r = t ? [t._listenId] : k.keys(i), s = 0; s < r.length; s++) {
				var o = i[r[s]];
				if (!o) break;
				o.obj.off(e, n, this)
			}
			return k.isEmpty(i) && (this._listeningTo = void 0), this
		};
		var h = function (t, e, n, i) {
			if (t) {
				var r, s = 0,
					o = i.context,
					a = i.listeners;
				if (e || n || o) {
					for (var l = e ? [e] : k.keys(t); s < l.length; s++) {
						var c = t[e = l[s]];
						if (!c) break;
						for (var u = [], p = 0; p < c.length; p++) {
							var h = c[p];
							n && n !== h.callback && n !== h.callback._callback || o && o !== h.context ? u.push(h) : (r = h.listening) && 0 == --r.count && (delete a[r.id], delete r.listeningTo[r.objId])
						}
						u.length ? t[e] = u : delete t[e]
					}
					return k.size(t) ? t : void 0
				}
				for (var d = k.keys(a); s < d.length; s++) delete a[(r = a[d[s]]).id], delete r.listeningTo[r.objId]
			}
		};
		o.once = function (t, e, n) {
			var i = c(d, {}, t, e, k.bind(this.off, this));
			return this.on(i, void 0, n)
		}, o.listenToOnce = function (t, e, n) {
			var i = c(d, {}, e, n, k.bind(this.stopListening, this, t));
			return this.listenTo(t, i)
		};
		var d = function (t, e, n, i) {
			if (n) {
				var r = t[e] = k.once(function () {
					i(e, r), n.apply(this, arguments)
				});
				r._callback = n
			}
			return t
		};
		o.trigger = function (t) {
			if (!this._events) return this;
			for (var e = Math.max(0, arguments.length - 1), n = Array(e), i = 0; i < e; i++) n[i] = arguments[i + 1];
			return c(f, this._events, t, void 0, n), this
		};
		var f = function (t, e, n, i) {
				if (t) {
					var r = t[e],
						s = t.all;
					r && s && (s = s.slice()), r && g(r, i), s && g(s, [e].concat(i))
				}
				return t
			},
			g = function (t, e) {
				var n, i = -1,
					r = t.length,
					s = e[0],
					o = e[1],
					a = e[2];
				switch (e.length) {
					case 0:
						for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
						return;
					case 1:
						for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s);
						return;
					case 2:
						for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s, o);
						return;
					case 3:
						for (; ++i < r;)(n = t[i]).callback.call(n.ctx, s, o, a);
						return;
					default:
						for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e);
						return
				}
			};
		o.bind = o.on, o.unbind = o.off, k.extend(l, o);
		var m = l.Model = function (t, e) {
			var n = t || {};
			e || (e = {}), this.cid = k.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (n = this.parse(n, e) || {}), n = k.defaults({}, n, k.result(this, "defaults")), this.set(n, e), this.changed = {}, this.initialize.apply(this, arguments)
		};
		k.extend(m.prototype, o, {
			changed: null,
			validationError: null,
			idAttribute: "id",
			cidPrefix: "c",
			initialize: function () {},
			toJSON: function () {
				return k.clone(this.attributes)
			},
			sync: function () {
				return l.sync.apply(this, arguments)
			},
			get: function (t) {
				return this.attributes[t]
			},
			escape: function (t) {
				return k.escape(this.get(t))
			},
			has: function (t) {
				return null != this.get(t)
			},
			matches: function (t) {
				return !!k.iteratee(t, this)(this.attributes)
			},
			set: function (t, e, n) {
				if (null == t) return this;
				var i;
				if ("object" == typeof t ? (i = t, n = e) : (i = {})[t] = e, n || (n = {}), !this._validate(i, n)) return !1;
				var r = n.unset,
					s = n.silent,
					o = [],
					a = this._changing;
				this._changing = !0, a || (this._previousAttributes = k.clone(this.attributes), this.changed = {});
				var l = this.attributes,
					c = this.changed,
					u = this._previousAttributes;
				for (var p in this.idAttribute in i && (this.id = i[this.idAttribute]), i) e = i[p], k.isEqual(l[p], e) || o.push(p), k.isEqual(u[p], e) ? delete c[p] : c[p] = e, r ? delete l[p] : l[p] = e;
				if (!s) {
					o.length && (this._pending = n);
					for (var h = 0; h < o.length; h++) this.trigger("change:" + o[h], this, l[o[h]], n)
				}
				if (a) return this;
				if (!s)
					for (; this._pending;) n = this._pending, this._pending = !1, this.trigger("change", this, n);
				return this._pending = !1, this._changing = !1, this
			},
			unset: function (t, e) {
				return this.set(t, void 0, k.extend({}, e, {
					unset: !0
				}))
			},
			clear: function (t) {
				var e = {};
				for (var n in this.attributes) e[n] = void 0;
				return this.set(e, k.extend({}, t, {
					unset: !0
				}))
			},
			hasChanged: function (t) {
				return null == t ? !k.isEmpty(this.changed) : k.has(this.changed, t)
			},
			changedAttributes: function (t) {
				if (!t) return !!this.hasChanged() && k.clone(this.changed);
				var e = this._changing ? this._previousAttributes : this.attributes,
					n = {};
				for (var i in t) {
					var r = t[i];
					k.isEqual(e[i], r) || (n[i] = r)
				}
				return !!k.size(n) && n
			},
			previous: function (t) {
				return null != t && this._previousAttributes ? this._previousAttributes[t] : null
			},
			previousAttributes: function () {
				return k.clone(this._previousAttributes)
			},
			fetch: function (n) {
				n = k.extend({
					parse: !0
				}, n);
				var i = this,
					r = n.success;
				return n.success = function (t) {
					var e = n.parse ? i.parse(t, n) : t;
					if (!i.set(e, n)) return !1;
					r && r.call(n.context, i, t, n), i.trigger("sync", i, t, n)
				}, D(this, n), this.sync("read", this, n)
			},
			save: function (t, e, n) {
				var i;
				null == t || "object" == typeof t ? (i = t, n = e) : (i = {})[t] = e;
				var r = (n = k.extend({
					validate: !0,
					parse: !0
				}, n)).wait;
				if (i && !r) {
					if (!this.set(i, n)) return !1
				} else if (!this._validate(i, n)) return !1;
				var s = this,
					o = n.success,
					a = this.attributes;
				n.success = function (t) {
					s.attributes = a;
					var e = n.parse ? s.parse(t, n) : t;
					if (r && (e = k.extend({}, i, e)), e && !s.set(e, n)) return !1;
					o && o.call(n.context, s, t, n), s.trigger("sync", s, t, n)
				}, D(this, n), i && r && (this.attributes = k.extend({}, a, i));
				var l = this.isNew() ? "create" : n.patch ? "patch" : "update";
				"patch" !== l || n.attrs || (n.attrs = i);
				var c = this.sync(l, this, n);
				return this.attributes = a, c
			},
			destroy: function (e) {
				e = e ? k.clone(e) : {};
				var n = this,
					i = e.success,
					r = e.wait,
					s = function () {
						n.stopListening(), n.trigger("destroy", n, n.collection, e)
					},
					t = !(e.success = function (t) {
						r && s(), i && i.call(e.context, n, t, e), n.isNew() || n.trigger("sync", n, t, e)
					});
				return this.isNew() ? k.defer(e.success) : (D(this, e), t = this.sync("delete", this, e)), r || s(), t
			},
			url: function () {
				var t = k.result(this, "urlRoot") || k.result(this.collection, "url") || L();
				if (this.isNew()) return t;
				var e = this.get(this.idAttribute);
				return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
			},
			parse: function (t) {
				return t
			},
			clone: function () {
				return new this.constructor(this.attributes)
			},
			isNew: function () {
				return !this.has(this.idAttribute)
			},
			isValid: function (t) {
				return this._validate({}, k.defaults({
					validate: !0
				}, t))
			},
			_validate: function (t, e) {
				if (!e.validate || !this.validate) return !0;
				t = k.extend({}, this.attributes, t);
				var n = this.validationError = this.validate(t, e) || null;
				return !n || (this.trigger("invalid", this, n, k.extend(e, {
					validationError: n
				})), !1)
			}
		}), i(m, {
			keys: 1,
			values: 1,
			pairs: 1,
			invert: 1,
			pick: 0,
			omit: 0,
			chain: 1,
			isEmpty: 1
		}, "attributes");
		var y = l.Collection = function (t, e) {
				e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, k.extend({
					silent: !0
				}, e))
			},
			_ = {
				add: !0,
				remove: !0,
				merge: !0
			},
			v = {
				add: !0,
				remove: !1
			};
		k.extend(y.prototype, o, {
			model: m,
			initialize: function () {},
			toJSON: function (e) {
				return this.map(function (t) {
					return t.toJSON(e)
				})
			},
			sync: function () {
				return l.sync.apply(this, arguments)
			},
			add: function (t, e) {
				return this.set(t, k.extend({
					merge: !1
				}, e, v))
			},
			remove: function (t, e) {
				e = k.extend({}, e);
				var n = !k.isArray(t);
				t = n ? [t] : k.clone(t);
				var i = this._removeModels(t, e);
				return !e.silent && i && this.trigger("update", this, e), n ? i[0] : i
			},
			set: function (t, e) {
				(e = k.defaults({}, e, _)).parse && !this._isModel(t) && (t = this.parse(t, e));
				var n, i, r, s, o, a = !k.isArray(t);
				t = a ? t ? [t] : [] : t.slice();
				var l = e.at;
				null != l && (l = +l), l < 0 && (l += this.length + 1);
				for (var c = this.comparator && null == l && !1 !== e.sort, u = k.isString(this.comparator) ? this.comparator : null, p = [], h = [], d = {}, f = e.add, g = e.merge, m = e.remove, y = !(c || !f || !m) && [], v = !1, w = 0; w < t.length; w++) {
					if (r = t[w], s = this.get(r)) m && (d[s.cid] = !0), g && r !== s && (r = this._isModel(r) ? r.attributes : r, e.parse && (r = s.parse(r, e)), s.set(r, e), c && !o && s.hasChanged(u) && (o = !0)), t[w] = s;
					else if (f) {
						if (!(i = t[w] = this._prepareModel(r, e))) continue;
						p.push(i), this._addReference(i, e)
					}(i = s || i) && (n = this.modelId(i.attributes), !y || !i.isNew() && d[n] || (y.push(i), v = v || !this.models[w] || i.cid !== this.models[w].cid), d[n] = !0)
				}
				if (m) {
					for (w = 0; w < this.length; w++) d[(i = this.models[w]).cid] || h.push(i);
					h.length && this._removeModels(h, e)
				}
				if (p.length || v)
					if (c && (o = !0), this.length += p.length, null != l)
						for (w = 0; w < p.length; w++) this.models.splice(l + w, 0, p[w]);
					else {
						y && (this.models.length = 0);
						var b = y || p;
						for (w = 0; w < b.length; w++) this.models.push(b[w])
					}
				if (o && this.sort({
						silent: !0
					}), !e.silent) {
					var S = null != l ? k.clone(e) : e;
					for (w = 0; w < p.length; w++) null != l && (S.index = l + w), (i = p[w]).trigger("add", i, this, S);
					(o || v) && this.trigger("sort", this, e), (p.length || h.length) && this.trigger("update", this, e)
				}
				return a ? t[0] : t
			},
			reset: function (t, e) {
				e = e ? k.clone(e) : {};
				for (var n = 0; n < this.models.length; n++) this._removeReference(this.models[n], e);
				return e.previousModels = this.models, this._reset(), t = this.add(t, k.extend({
					silent: !0
				}, e)), e.silent || this.trigger("reset", this, e), t
			},
			push: function (t, e) {
				return this.add(t, k.extend({
					at: this.length
				}, e))
			},
			pop: function (t) {
				var e = this.at(this.length - 1);
				return this.remove(e, t)
			},
			unshift: function (t, e) {
				return this.add(t, k.extend({
					at: 0
				}, e))
			},
			shift: function (t) {
				var e = this.at(0);
				return this.remove(e, t)
			},
			slice: function () {
				return s.apply(this.models, arguments)
			},
			get: function (t) {
				if (null != t) {
					var e = this.modelId(this._isModel(t) ? t.attributes : t);
					return this._byId[t] || this._byId[e] || this._byId[t.cid]
				}
			},
			at: function (t) {
				return t < 0 && (t += this.length), this.models[t]
			},
			where: function (t, e) {
				var n = k.matches(t);
				return this[e ? "find" : "filter"](function (t) {
					return n(t.attributes)
				})
			},
			findWhere: function (t) {
				return this.where(t, !0)
			},
			sort: function (t) {
				if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
				return t || (t = {}), k.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(k.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
			},
			pluck: function (t) {
				return k.invoke(this.models, "get", t)
			},
			fetch: function (n) {
				var i = (n = k.extend({
						parse: !0
					}, n)).success,
					r = this;
				return n.success = function (t) {
					var e = n.reset ? "reset" : "set";
					r[e](t, n), i && i.call(n.context, r, t, n), r.trigger("sync", r, t, n)
				}, D(this, n), this.sync("read", this, n)
			},
			create: function (t, e) {
				var i = (e = e ? k.clone(e) : {}).wait;
				if (!(t = this._prepareModel(t, e))) return !1;
				i || this.add(t, e);
				var r = this,
					s = e.success;
				return e.success = function (t, e, n) {
					i && r.add(t, n), s && s.call(n.context, t, e, n)
				}, t.save(null, e), t
			},
			parse: function (t) {
				return t
			},
			clone: function () {
				return new this.constructor(this.models, {
					model: this.model,
					comparator: this.comparator
				})
			},
			modelId: function (t) {
				return t[this.model.prototype.idAttribute || "id"]
			},
			_reset: function () {
				this.length = 0, this.models = [], this._byId = {}
			},
			_prepareModel: function (t, e) {
				if (this._isModel(t)) return t.collection || (t.collection = this), t;
				var n = new(((e = e ? k.clone(e) : {}).collection = this).model)(t, e);
				return n.validationError ? (this.trigger("invalid", this, n.validationError, e), !1) : n
			},
			_removeModels: function (t, e) {
				for (var n = [], i = 0; i < t.length; i++) {
					var r = this.get(t[i]);
					if (r) {
						var s = this.indexOf(r);
						this.models.splice(s, 1), this.length--, e.silent || (e.index = s, r.trigger("remove", r, this, e)), n.push(r), this._removeReference(r, e)
					}
				}
				return !!n.length && n
			},
			_isModel: function (t) {
				return t instanceof m
			},
			_addReference: function (t) {
				this._byId[t.cid] = t;
				var e = this.modelId(t.attributes);
				null != e && (this._byId[e] = t), t.on("all", this._onModelEvent, this)
			},
			_removeReference: function (t) {
				delete this._byId[t.cid];
				var e = this.modelId(t.attributes);
				null != e && delete this._byId[e], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
			},
			_onModelEvent: function (t, e, n, i) {
				if (
					"add" !== t && "remove" !== t || n === this) {
					if ("destroy" === t && this.remove(e, i), "change" === t) {
						var r = this.modelId(e.previousAttributes()),
							s = this.modelId(e.attributes);
						r !== s && (null != r && delete this._byId[r], null != s && (this._byId[s] = e))
					}
					this.trigger.apply(this, arguments)
				}
			}
		}), i(y, {
			forEach: 3,
			each: 3,
			map: 3,
			collect: 3,
			reduce: 4,
			foldl: 4,
			inject: 4,
			reduceRight: 4,
			foldr: 4,
			find: 3,
			detect: 3,
			filter: 3,
			select: 3,
			reject: 3,
			every: 3,
			all: 3,
			some: 3,
			any: 3,
			include: 2,
			contains: 2,
			invoke: 0,
			max: 3,
			min: 3,
			toArray: 1,
			size: 1,
			first: 3,
			head: 3,
			take: 3,
			initial: 3,
			rest: 3,
			tail: 3,
			drop: 3,
			last: 3,
			without: 0,
			difference: 0,
			indexOf: 3,
			shuffle: 1,
			lastIndexOf: 3,
			isEmpty: 1,
			chain: 1,
			sample: 3,
			partition: 3
		}, "models");
		var w = ["groupBy", "countBy", "sortBy", "indexBy"];
		k.each(w, function (i) {
			k[i] && (y.prototype[i] = function (e, t) {
				var n = k.isFunction(e) ? e : function (t) {
					return t.get(e)
				};
				return k[i](this.models, n, t)
			})
		});
		var b = l.View = function (t) {
				this.cid = k.uniqueId("view"), k.extend(this, k.pick(t, x)), this._ensureElement(), this.initialize.apply(this, arguments)
			},
			S = /^(\S+)\s*(.*)$/,
			x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
		k.extend(b.prototype, o, {
			tagName: "div",
			$: function (t) {
				return this.$el.find(t)
			},
			initialize: function () {},
			render: function () {
				return this
			},
			remove: function () {
				return this._removeElement(), this.stopListening(), this
			},
			_removeElement: function () {
				this.$el.remove()
			},
			setElement: function (t) {
				return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this
			},
			_setElement: function (t) {
				this.$el = t instanceof l.$ ? t : l.$(t), this.el = this.$el[0]
			},
			delegateEvents: function (t) {
				if (t || (t = k.result(this, "events")), !t) return this;
				for (var e in this.undelegateEvents(), t) {
					var n = t[e];
					if (k.isFunction(n) || (n = this[n]), n) {
						var i = e.match(S);
						this.delegate(i[1], i[2], k.bind(n, this))
					}
				}
				return this
			},
			delegate: function (t, e, n) {
				return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this
			},
			undelegateEvents: function () {
				return this.$el && this.$el.off(".delegateEvents" + this.cid), this
			},
			undelegate: function (t, e, n) {
				return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this
			},
			_createElement: function (t) {
				return document.createElement(t)
			},
			_ensureElement: function () {
				if (this.el) this.setElement(k.result(this, "el"));
				else {
					var t = k.extend({}, k.result(this, "attributes"));
					this.id && (t.id = k.result(this, "id")), this.className && (t["class"] = k.result(this, "className")), this.setElement(this._createElement(k.result(this, "tagName"))), this._setAttributes(t)
				}
			},
			_setAttributes: function (t) {
				this.$el.attr(t)
			}
		}), l.sync = function (t, e, i) {
			var n = T[t];
			k.defaults(i || (i = {}), {
				emulateHTTP: l.emulateHTTP,
				emulateJSON: l.emulateJSON
			});
			var r = {
				type: n,
				dataType: "json"
			};
			if (i.url || (r.url = k.result(e, "url") || L()), null != i.data || !e || "create" !== t && "update" !== t && "patch" !== t || (r.contentType = "application/json", r.data = JSON.stringify(i.attrs || e.toJSON(i))), i.emulateJSON && (r.contentType = "application/x-www-form-urlencoded", r.data = r.data ? {
					model: r.data
				} : {}), i.emulateHTTP && ("PUT" === n || "DELETE" === n || "PATCH" === n)) {
				r.type = "POST", i.emulateJSON && (r.data._method = n);
				var s = i.beforeSend;
				i.beforeSend = function (t) {
					if (t.setRequestHeader("X-HTTP-Method-Override", n), s) return s.apply(this, arguments)
				}
			}
			"GET" === r.type || i.emulateJSON || (r.processData = !1);
			var o = i.error;
			i.error = function (t, e, n) {
				i.textStatus = e, i.errorThrown = n, o && o.call(i.context, t, e, n)
			};
			var a = i.xhr = l.ajax(k.extend(r, i));
			return e.trigger("request", e, a, i), a
		};
		var T = {
			create: "POST",
			update: "PUT",
			patch: "PATCH",
			"delete": "DELETE",
			read: "GET"
		};
		l.ajax = function () {
			return l.$.ajax.apply(l.$, arguments)
		};
		var A = l.Router = function (t) {
				t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
			},
			C = /\((.*?)\)/g,
			j = /(\(\?)?:\w+/g,
			J = /\*\w+/g,
			P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
		k.extend(A.prototype, o, {
			initialize: function () {},
			route: function (n, i, r) {
				k.isRegExp(n) || (n = this._routeToRegExp(n)), k.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
				var s = this;
				return l.history.route(n, function (t) {
					var e = s._extractParameters(n, t);
					!1 !== s.execute(r, e, i) && (s.trigger.apply(s, ["route:" + i].concat(e)), s.trigger("route", i, e), l.history.trigger("route", s, i, e))
				}), this
			},
			execute: function (t, e) {
				t && t.apply(this, e)
			},
			navigate: function (t, e) {
				return l.history.navigate(t, e), this
			},
			_bindRoutes: function () {
				if (this.routes) {
					this.routes = k.result(this, "routes");
					for (var t, e = k.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
				}
			},
			_routeToRegExp: function (t) {
				return t = t.replace(P, "\\$&").replace(C, "(?:$1)?").replace(j, function (t, e) {
					return e ? t : "([^/?]+)"
				}).replace(J, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
			},
			_extractParameters: function (t, e) {
				var n = t.exec(e).slice(1);
				return k.map(n, function (t, e) {
					return e === n.length - 1 ? t || null : t ? decodeURIComponent(t) : null
				})
			}
		});
		var O = l.History = function () {
				this.handlers = [], k.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
			},
			E = /^[#\/]|\s+$/g,
			$ = /^\/+|\/+$/g,
			M = /#.*$/;
		O.started = !1, k.extend(O.prototype, o, {
			interval: 50,
			atRoot: function () {
				return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
			},
			matchRoot: function () {
				return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
			},
			decodeFragment: function (t) {
				return decodeURI(t.replace(/%25/g, "%2525"))
			},
			getSearch: function () {
				var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
				return t ? t[0] : ""
			},
			getHash: function (t) {
				var e = (t || this).location.href.match(/#(.*)$/);
				return e ? e[1] : ""
			},
			getPath: function () {
				var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
				return "/" === t.charAt(0) ? t.slice(1) : t
			},
			getFragment: function (t) {
				return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(E, "")
			},
			start: function (t) {
				if (O.started) throw new Error("Backbone.history has already been started");
				if (O.started = !0, this.options = k.extend({
						root: "/"
					}, this.options, t), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._hasHashChange = "onhashchange" in window, this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace($, "/"), this._wantsHashChange && this._wantsPushState) {
					if (!this._hasPushState && !this.atRoot()) {
						var e = this.root.slice(0, -1) || "/";
						return this.location.replace(e + "#" + this.getPath()), !0
					}
					this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
						replace: !0
					})
				}
				if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
					this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
					var n = document.body,
						i = n.insertBefore(this.iframe, n.firstChild).contentWindow;
					i.document.open(), i.document.close(), i.location.hash = "#" + this.fragment
				}
				var r = window.addEventListener || function (t, e) {
					return attachEvent("on" + t, e)
				};
				if (this._usePushState ? r("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? r("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
			},
			stop: function () {
				var t = window.removeEventListener || function (t, e) {
					return detachEvent("on" + t, e)
				};
				this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), O.started = !1
			},
			route: function (t, e) {
				this.handlers.unshift({
					route: t,
					callback: e
				})
			},
			checkUrl: function () {
				var t = this.getFragment();
				if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment) return !1;
				this.iframe && this.navigate(t), this.loadUrl()
			},
			loadUrl: function (e) {
				return !!this.matchRoot() && (e = this.fragment = this.getFragment(e), k.any(this.handlers, function (t) {
					if (t.route.test(e)) return t.callback(e), !0
				}))
			},
			navigate: function (t, e) {
				if (!O.started) return !1;
				e && !0 !== e || (e = {
					trigger: !!e
				}), t = this.getFragment(t || "");
				var n = this.root;
				"" !== t && "?" !== t.charAt(0) || (n = n.slice(0, -1) || "/");
				var i = n + t;
				if (t = this.decodeFragment(t.replace(M, "")), this.fragment !== t) {
					if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
					else {
						if (!this._wantsHashChange) return this.location.assign(i);
						if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
							var r = this.iframe.contentWindow;
							e.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, t, e.replace)
						}
					}
					return e.trigger ? this.loadUrl(t) : void 0
				}
			},
			_updateHash: function (t, e, n) {
				if (n) {
					var i = t.href.replace(/(javascript:|#).*$/, "");
					t.replace(i + "#" + e)
				} else t.hash = "#" + e
			}
		}), l.history = new O;
		var F = function (t, e) {
			var n, i = this;
			n = t && k.has(t, "constructor") ? t.constructor : function () {
				return i.apply(this, arguments)
			}, k.extend(n, i, e);
			var r = function () {
				this.constructor = n
			};
			return r.prototype = i.prototype, n.prototype = new r, t && k.extend(n.prototype, t), n.__super__ = i.prototype, n
		};
		m.extend = y.extend = A.extend = b.extend = O.extend = F;
		var L = function () {
				throw new Error('A "url" property or function must be specified')
			},
			D = function (e, n) {
				var i = n.error;
				n.error = function (t) {
					i && i.call(n.context, e, t, n), e.trigger("error", e, t, n)
				}
			};
		return l
	}),
	function (n, i) {
		"function" == typeof define && define.amd ? define(["underscore", "backbone"], function (t, e) {
			return i(t || n._, e || n.Backbone)
		}) : i(_, Backbone)
	}(this, function (f, g) {
		function m(t, e) {
			var n = null;
			try {
				n = e.url
			} catch (i) {}
			if (!n) try {
				n = f.result(t, "url")
			} catch (i) {}
			return n
		}

		function y(t, e) {
			return ":" !== t && ":" !== e && t !== e
		}
		var v = {
			create: "POST",
			update: "PUT",
			patch: "PATCH",
			"delete": "DELETE",
			read: "GET"
		};
		return g.vanillaSync = g.sync, g.sync = function (t, e, n) {
			var i = !1,
				r = document.createElement("a");
			r.href = document.URL;
			var s = document.createElement("a");
			if (s.href = m(e, n), "" !== s.host && r.host !== s.host && (i = !0), !i || g.$.support.cors) return g.vanillaSync.apply(this, arguments);
			var o = v[t];
			if (f.defaults(n || (n = {}), {
					emulateHTTP: g.emulateHTTP,
					emulateJSON: g.emulateJSON
				}), !n.emulateHTTP && ("update" === t || "patch" === t || "delete" === t)) throw new Error("Backbone.CrossDomain cannot use PUT, PATCH, DELETE with XDomainRequest (IE) and emulateHTTP=false");
			var a = {
				type: o,
				dataType: "json",
				url: m(e, n)
			};
			if (!a.url) throw new Error("No URL!");
			if (y(r.protocol, s.protocol) && (a.url = a.url.replace(new RegExp(s.protocol), r.protocol)), null != n.data || !e || "create" !== t && "update" !== t && "patch" !== t || (a.data = JSON.stringify(n.attrs || e.toJSON(n))), n.emulateJSON && (a.data = a.data ? {
					model: a.data
				} : {}), n.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
				a.type = "POST", n.emulateJSON && (a.data._method = o);
				var l = n.beforeSend;
				n.beforeSend = function (t) {
					if (l) return l.apply(this, arguments)
				}
			}
			"GET" === a.type || n.emulateJSON || (a.processData = !1), "POST" === a.type && (a.data = g.$.param(g.$.parseJSON(a.data)));
			var c = n.xhr = new XDomainRequest,
				u = n.success,
				p = n.error;
			if (g.$.fn.jquery) {
				var h = g.$.Deferred(),
					d = g.$.Callbacks("once memory");
				h.promise(c).complete = d.add
			}
			return c.onload = function () {
				var t = {};
				c.responseText && (t = g.$.parseJSON(c.responseText)), t && (h && h.resolveWith(this, [t, "success", c]), u(t))
			}, c.onerror = function () {
				p && (p(e, c, n), h && h.rejectWith(this, [c, "error", p])), e.trigger("error", e, c, n)
			}, "read" === t && n.data && (console.log("IE get params", JSON.stringify(n.data)), parameterized = g.$.param(n.data), a.url = a.url + "?" + parameterized), c.open(a.type, a.url), c.onprogress = function () {}, c.ontimeout = function () {}, setTimeout(function () {
				c.send(a.data)
			}, 0), e.trigger("request", e, c, n), c
		}, g
	}),
	function (n, i) {
		if ("function" == typeof define && define.amd) define(["underscore", "backbone"], function (t, e) {
			return i(n, e, t)
		});
		else if ("undefined" != typeof exports) {
			var t = require("underscore"),
				e = require("backbone");
			i(n, e, t), "undefined" != typeof module && module.exports && (module.exports = e), exports = e
		} else i(n, n.Backbone, n._)
	}(this, function (f, g, m) {
		var y, v, n, p, t, w, l, e, h, d, b, S = {};
		y = g.Model, v = g.Collection, n = y.prototype, t = v.prototype, p = g.Events, g.Associations = {
			VERSION: "0.6.1"
		}, g.Associations.scopes = [];
		var i = function () {
				return h
			},
			r = function (t) {
				(!m.isString(t) || m.size(t) < 1) && (t = "."), h = t, l = RegExp("[\\" + h + "\\[\\]]+", "g"), e = RegExp("[^\\" + h + "\\[\\]]+", "g")
			};
		try {
			Object.defineProperty(g.Associations, "SEPARATOR", {
				enumerable: !0,
				get: i,
				set: r
			})
		} catch (a) {}
		g.Associations.Many = g.Many = "Many", g.Associations.One = g.One = "One", g.Associations.Self = g.Self = "Self", g.Associations.SEPARATOR = ".", g.Associations.getSeparator = i, g.Associations.setSeparator = r, g.Associations.EVENTS_BUBBLE = !0, g.Associations.EVENTS_WILDCARD = !0, g.Associations.EVENTS_NC = !1, r(), w = g.AssociatedModel = g.Associations.AssociatedModel = y.extend({
			relations: void 0,
			_proxyCalls: void 0,
			on: function (t, e, n) {
				var i = p.on.apply(this, arguments);
				if (g.Associations.EVENTS_NC) return i;
				var r = /\s+/;
				return m.isString(t) && t && !r.test(t) && e && (r = k(t)) && (S[r] = "undefined" == typeof S[r] ? 1 : S[r] + 1), i
			},
			off: function (t, e, n) {
				if (g.Associations.EVENTS_NC) return p.off.apply(this, arguments);
				var i = /\s+/,
					r = this._events,
					s = {},
					o = r ? m.keys(r) : [],
					a = !t && !e && !n,
					l = m.isString(t) && !i.test(t);
				if (a || l) {
					i = 0;
					for (var c = o.length; i < c; i++) s[o[i]] = r[o[i]] ? r[o[i]].length : 0
				}
				var u = p.off.apply(this, arguments);
				if (a || l)
					for (i = 0, c = o.length; i < c; i++)(a = k(o[i])) && (S[a] = r[o[i]] ? S[a] - (s[o[i]] - r[o[i]].length) : S[a] - s[o[i]]);
				return u
			},
			get: function (t) {
				var e = n.get.call(this, t);
				return e || this._getAttr.apply(this, arguments)
			},
			set: function (t, e, n) {
				var i;
				return m.isObject(t) || null == t ? (i = t, n = e) : (i = {})[t] = e, t = this._set(i, n), this._processPendingEvents(), t
			},
			_set: function (t, e) {
				var n, i, r, s, o = this;
				if (!t) return this;
				for (n in t)
					if (i || (i = {}), n.match(l)) {
						var a = c(n);
						s = m.initial(a), a = a[a.length - 1], (s = this.get(s)) instanceof w && ((s = i[s.cid] || (i[s.cid] = {
							model: s,
							data: {}
						})).data[a] = t[n])
					} else(s = i[this.cid] || (i[this.cid] = {
						model: this,
						data: {}
					})).data[n] = t[n];
				if (i)
					for (r in i) s = i[r], this._setAttr.call(s.model, s.data, e) || (o = !1);
				else o = this._setAttr.call(this, t, e);
				return o
			},
			_setAttr: function (h, d) {
				var t;
				if (d || (d = {}), d.unset)
					for (t in h) h[t] = void 0;
				return this.parents = this.parents || [], this.relations && m.each(this.relations, function (t) {
					var e, n, i, r = t.key,
						s = t.relatedModel,
						o = t.collectionType,
						a = t.scope || f,
						l = t.map,
						c = this.attributes[r],
						u = c && c.idAttribute,
						p = !1;
					if (!s || s.prototype instanceof y || (s = m.isFunction(s) ? s.call(this, t, h) : s), s && m.isString(s) && (s = s === g.Self ? this.constructor : _(s, a)), l && m.isString(l) && (l = _(l, a)), n = t.options ? m.extend({}, t.options, d) : d, h[r]) {
						if (e = m.result(h, r), e = l ? l.call(this, e, o || s) : e, t.type === g.Many) {
							if (o && m.isFunction(o) && o.prototype instanceof y) throw Error("type is of Backbone.Model. Specify derivatives of Backbone.Collection");
							if (!o || o.prototype instanceof v || (o = m.isFunction(o) ? o.call(this, t, h) : o), o && m.isString(o) && (o = _(o, a)), !s && !o) throw Error("specify either a relatedModel or collectionType");
							if (o && !o.prototype instanceof v) throw Error("collectionType must inherit from Backbone.Collection");
							c ? (c._deferEvents = !0, c[n.reset ? "reset" : "set"](e instanceof v ? e.models : e, n), t = c) : (p = !0, e instanceof v ? t = e : (t = o ? new o : this._createCollection(s, a))[n.reset ? "reset" : "set"](e, n))
						} else {
							if (t.type !== g.One) throw Error("type attribute must be specified and have the values Backbone.One or Backbone.Many");
							if (!s) throw Error("specify a relatedModel for Backbone.One type");
							if (!(s.prototype instanceof g.AssociatedModel)) throw Error("specify an AssociatedModel for Backbone.One type");
							t = e instanceof w ? e : new s(e, n), c && t.attributes[u] && c.attributes[u] === t.attributes[u] ? (c._deferEvents = !0, c._set(e instanceof w ? e.attributes : e, n), t = c) : p = !0
						}
						i = h[r] = t, (p || i && !i._proxyCallback) && (i._proxyCallback = function () {
							return g.Associations.EVENTS_BUBBLE && this._bubbleEvent.call(this, r, i, arguments)
						}, i.on("all", i._proxyCallback, this))
					}
					h.hasOwnProperty(r) && (c = h[r], u = this.attributes[r], c ? (c.parents = c.parents || [], -1 == m.indexOf(c.parents, this) && c.parents.push(this)) : u && 0 < u.parents.length && (u.parents = m.difference(u.parents, [this]), u._proxyCallback && u.off("all", u._proxyCallback, this)))
				}, this), n.set.call(this, h, d)
			},
			_bubbleEvent: function (t, e, n) {
				var i, r, s = (i = n[0].split(":"))[0],
					o = "nested-change" == n[0],
					a = "change" === s,
					l = n[1],
					c = -1,
					u = e._proxyCalls,
					p = !(i = i[1]) || -1 == i.indexOf(h);
				if (!o && (p && (b = k(n[0]) || t), g.Associations.EVENTS_NC || S[b])) return g.Associations.EVENTS_WILDCARD && /\[\*\]/g.test(i) ? this : (e instanceof v && (a || i) && (c = e.indexOf(d || l)), this instanceof y && (d = this), i = t + (-1 !== c && (a || i) ? "[" + c + "]" : "") + (i ? h + i : ""), g.Associations.EVENTS_WILDCARD && (r = i.replace(/\[\d+\]/g, "[*]")), (o = []).push.apply(o, n), o[0] = s + ":" + i, g.Associations.EVENTS_WILDCARD && i !== r && (o[0] = o[0] + " " + s + ":" + r), u = e._proxyCalls = u || {}, this._isEventAvailable.call(this, u, i) || (u[i] = !0, a && (this._previousAttributes[t] = e._previousAttributes, this.changed[t] = e), this.trigger.apply(this, o), g.Associations.EVENTS_NC && a && this.get(i) != n[2] && (t = ["nested-change", i, n[1]], n[2] && t.push(n[2]), this.trigger.apply(this, t)), u && i && delete u[i], d = void 0), this)
			},
			_isEventAvailable: function (t, n) {
				return m.find(t, function (t, e) {
					return -1 !== n.indexOf(e, n.length - e.length)
				})
			},
			_createCollection: function (t, e) {
				var n, i = t;
				if (m.isString(i) && (i = _(i, e)), !(i && i.prototype instanceof w || m.isFunction(i))) throw Error("type must inherit from Backbone.AssociatedModel");
				return (n = new v).model = i, n
			},
			_processPendingEvents: function () {
				this._processedEvents || (this._processedEvents = !0, this._deferEvents = !1, m.each(this._pendingEvents, function (t) {
					t.c.trigger.apply(t.c, t.a)
				}), this._pendingEvents = [], m.each(this.relations, function (t) {
					(t = this.attributes[t.key]) && t._processPendingEvents()
				}, this), delete this._processedEvents)
			},
			trigger: function (t) {
				this._deferEvents ? (this._pendingEvents = this._pendingEvents || [], this._pendingEvents.push({
					c: this,
					a: arguments
				})) : n.trigger.apply(this, arguments)
			},
			toJSON: function (s) {
				var o, a = {};
				return a[this.idAttribute] = this.id, this.visited || (this.visited = !0, a = n.toJSON.apply(this, arguments), s && s.serialize_keys && (a = m.pick(a, s.serialize_keys)), this.relations && m.each(this.relations, function (t) {
					var e = t.key,
						n = t.remoteKey,
						i = this.attributes[e],
						r = !t.isTransient;
					t = t.serialize || [], delete a[e], r && (t.length && (s ? s.serialize_keys = t : s = {
						serialize_keys: t
					}), o = i && i.toJSON ? i.toJSON(s) : i, a[n || e] = m.isArray(o) ? m.compact(o) : o)
				}, this), delete this.visited), a
			},
			clone: function (t) {
				return new this.constructor(this.toJSON(t))
			},
			cleanup: function () {
				m.each(this.relations, function (t) {
					(t = this.attributes[t.key]) && (t.parents = m.difference(t.parents, [this]))
				}, this), this.off()
			},
			_getAttr: function (t) {
				var e, n, i = this;
				if (t = c(t), !(m.size(t) < 1)) {
					for (n = 0; n < t.length && (e = t[n], i); n++) i = i instanceof v ? isNaN(e) ? void 0 : i.at(e) : i.attributes[e];
					return i
				}
			}
		});
		var c = function (t) {
				return "" === t ? [""] : m.isString(t) ? t.match(e) : t || []
			},
			k = function (t) {
				return t ? 1 < (t = t.split(":")).length ? 1 < (t = (t = t[t.length - 1]).split(h)).length ? t[t.length - 1].split("[")[0] : t[0].split("[")[0] : "" : t
			},
			_ = function (t, e) {
				var n, i = [e];
				i.push.apply(i, g.Associations.scopes);
				for (var r, s = 0, o = i.length; s < o && (!(r = i[s]) || !(n = m.reduce(t.split(h), function (t, e) {
						return t[e]
					}, r))); ++s);
				return n
			},
			s = function (t, n, e) {
				var i, r;
				return m.find(t, function (e) {
					if (i = m.find(e.relations, function (t) {
							return e.get(t.key) === n
						}, this)) return r = e, !0
				}, this), i && i.map ? i.map.call(r, e, n) : e
			},
			o = {};
		return m.each(["set", "remove", "reset"], function (n) {
			o[n] = v.prototype[n], t[n] = function (t, e) {
				return this.model.prototype instanceof w && this.parents && (t = s(this.parents, this, t)), o[n].apply(this, arguments)
			}
		}), o.trigger = t.trigger, t.trigger = function (t) {
			this._deferEvents ? (this._pendingEvents = this._pendingEvents || [], this._pendingEvents.push({
				c: this,
				a: arguments
			})) : o.trigger.apply(this, arguments)
		}, t._processPendingEvents = w.prototype._processPendingEvents, t.on = w.prototype.on, t.off = w.prototype.off, g
	}), window._u = _.noConflict(), window.JuicerBackbone = Backbone.noConflict(),
	function () {
		for (var t, e = function () {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = n.length, r = window.console = window.console || {}; i--;) r[t = n[i]] || (r[t] = e)
	}(), "object" != typeof JSON && (JSON = {}),
	function () {
		"use strict";

		function f(t) {
			return t < 10 ? "0" + t : t
		}

		function this_value() {
			return this.valueOf()
		}

		function quote(t) {
			return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) {
				var e = meta[t];
				return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + t + '"'
		}

		function str(t, e) {
			var n, i, r, s, o, a = gap,
				l = e[t];
			switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
				case "string":
					return quote(l);
				case "number":
					return isFinite(l) ? String(l) : "null";
				case "boolean":
				case "null":
					return String(l);
				case "object":
					if (!l) return "null";
					if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(l)) {
						for (s = l.length, n = 0; n < s; n += 1) o[n] = str(n, l) || "null";
						return r = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + a + "]" : "[" + o.join(",") + "]", gap = a, r
					}
					if (rep && "object" == typeof rep)
						for (s = rep.length, n = 0; n < s; n += 1) "string" == typeof rep[n] && (r = str(i = rep[n], l)) && o.push(quote(i) + (gap ? ": " : ":") + r);
					else
						for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l)) && o.push(quote(i) + (gap ? ": " : ":") + r);
					return r = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + a + "}" : "{" + o.join(",") + "}", gap = a, r
			}
		}
		var rx_one = /^[\],:{}\s]*$/,
			rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
			rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
			rx_four = /(?:^|:|,)(?:\s*\[)+/g,
			rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			gap, indent, meta, rep;
		"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		}, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		}, JSON.stringify = function (t, e, n) {
			var i;
			if (indent = gap = "", "number" == typeof n)
				for (i = 0; i < n; i += 1) indent += " ";
			else "string" == typeof n && (indent = n);
			if ((rep = e) && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
			return str("", {
				"": t
			})
		}), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
			function walk(t, e) {
				var n, i, r = t[e];
				if (r && "object" == typeof r)
					for (n in r) Object.prototype.hasOwnProperty.call(r, n) && ((i = walk(r, n)) !== undefined ? r[n] = i : delete r[n]);
				return reviver.call(t, e, r)
			}
			var j;
			if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) {
					return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
				})), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
				"": j
			}, "") : j;
			throw new SyntaxError("JSON.parse")
		})
	}(),
	function () {
		function t() {}

		function s(t, e) {
			for (var n = t.length; n--;)
				if (t[n].listener === e) return n;
			return -1
		}

		function e(t) {
			return function e() {
				return this[t].apply(this, arguments)
			}
		}
		var n = t.prototype,
			i = this,
			r = i.EventEmitter;
		n.getListeners = function o(t) {
			var e, n, i = this._getEvents();
			if ("object" == typeof t)
				for (n in e = {}, i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n]);
			else e = i[t] || (i[t] = []);
			return e
		}, n.flattenListeners = function a(t) {
			var e, n = [];
			for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
			return n
		}, n.getListenersAsObject = function l(t) {
			var e, n = this.getListeners(t);
			return n instanceof Array && ((e = {})[t] = n), e || n
		}, n.addListener = function c(t, e) {
			var n, i = this.getListenersAsObject(t),
				r = "object" == typeof e;
			for (n in i) i.hasOwnProperty(n) && -1 === s(i[n], e) && i[n].push(r ? e : {
				listener: e,
				once: !1
			});
			return this
		}, n.on = e("addListener"), n.addOnceListener = function u(t, e) {
			return this.addListener(t, {
				listener: e,
				once: !0
			})
		}, n.once = e("addOnceListener"), n.defineEvent = function p(t) {
			return this.getListeners(t), this
		}, n.defineEvents = function h(t) {
			for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
			return this
		}, n.removeListener = function d(t, e) {
			var n, i, r = this.getListenersAsObject(t);
			for (i in r) r.hasOwnProperty(i) && -1 !== (n = s(r[i], e)) && r[i].splice(n, 1);
			return this
		}, n.off = e("removeListener"), n.addListeners = function f(t, e) {
			return this.manipulateListeners(!1, t, e)
		}, n.removeListeners = function g(t, e) {
			return this.manipulateListeners(!0, t, e)
		}, n.manipulateListeners = function m(t, e, n) {
			var i, r, s = t ? this.removeListener : this.addListener,
				o = t ? this.removeListeners : this.addListeners;
			if ("object" != typeof e || e instanceof RegExp)
				for (i = n.length; i--;) s.call(this, e, n[i]);
			else
				for (i in e) e.hasOwnProperty(i) && (r = e[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
			return this
		}, n.removeEvent = function y(t) {
			var e, n = typeof t,
				i = this._getEvents();
			if ("string" === n) delete i[t];
			else if ("object" === n)
				for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
			else delete this._events;
			return this
		}, n.removeAllListeners = e("removeEvent"), n.emitEvent = function v(t, e) {
			var n, i, r, s = this.getListenersAsObject(t);
			for (r in s)
				if (s.hasOwnProperty(r))
					for (i = s[r].length; i--;) !0 === (n = s[r][i]).once && this.removeListener(t, n.listener), n.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, n.listener);
			return this
		}, n.trigger = e("emitEvent"), n.emit = function w(t) {
			var e = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(t, e)
		}, n.setOnceReturnValue = function b(t) {
			return this._onceReturnValue = t, this
		}, n._getOnceReturnValue = function S() {
			return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
		}, n._getEvents = function k() {
			return this._events || (this._events = {})
		}, t.noConflict = function _() {
			return i.EventEmitter = r, t
		}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
			return t
		}) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
	}.call(this),
	function (n) {
		function i(t) {
			var e = n.event;
			return e.target = e.target || e.srcElement || t, e
		}
		var t = document.documentElement,
			e = function () {};
		t.addEventListener ? e = function (t, e, n) {
			t.addEventListener(e, n, !1)
		} : t.attachEvent && (e = function (e, t, n) {
			e[t + n] = n.handleEvent ? function () {
				var t = i(e);
				n.handleEvent.call(n, t)
			} : function () {
				var t = i(e);
				n.call(e, t)
			}, e.attachEvent("on" + t, e[t + n])
		});
		var r = function () {};
		t.removeEventListener ? r = function (t, e, n) {
			t.removeEventListener(e, n, !1)
		} : t.detachEvent && (r = function (t, e, n) {
			t.detachEvent("on" + e, t[e + n]);
			try {
				delete t[e + n]
			} catch (i) {
				t[e + n] = undefined
			}
		});
		var s = {
			bind: e,
			unbind: r
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", s) : n.eventie = s
	}(this),
	function (n, i) {
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (t, e) {
			return i(n, t, e)
		}) : "object" == typeof exports ? module.exports = i(n, require("wolfy87-eventemitter"), require("eventie")) : n.imagesLoaded = i(n, n.EventEmitter, n.eventie)
	}(window, function factory(t, e, n) {
		function r(t, e) {
			for (var n in e) t[n] = e[n];
			return t
		}

		function s(t) {
			return "[object Array]" === h.call(t)
		}

		function o(t) {
			var e = [];
			if (s(t)) e = t;
			else if ("number" == typeof t.length)
				for (var n = 0, i = t.length; n < i; n++) e.push(t[n]);
			else e.push(t);
			return e
		}

		function a(t, e, n) {
			if (!(this instanceof a)) return new a(t, e);
			"string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = r({}, this.options), "function" == typeof e ? n = e : r(this.options, e), n && this.on("always", n), this.getImages(), c && (this.jqDeferred = new c.Deferred);
			var i = this;
			setTimeout(function () {
				i.check()
			})
		}

		function i(t) {
			this.img = t
		}

		function l(t) {
			this.src = t, d[t] = this
		}
		var c = t.jQuery,
			u = t.console,
			p = void 0 !== u,
			h = Object.prototype.toString;
		a.prototype = new e, a.prototype.options = {}, a.prototype.getImages = function () {
			this.images = [];
			for (var t = 0, e = this.elements.length; t < e; t++) {
				var n = this.elements[t];
				"IMG" === n.nodeName && this.addImage(n);
				var i = n.nodeType;
				if (i && (1 === i || 9 === i || 11 === i))
					for (var r = n.querySelectorAll("img"), s = 0, o = r.length; s < o; s++) {
						var a = r[s];
						this.addImage(a)
					}
			}
		}, a.prototype.addImage = function (t) {
			var e = new i(t);
			this.images.push(e)
		}, a.prototype.check = function () {
			function t(t, e) {
				return n.options.debug && p && u.log("confirm", t, e), n.progress(t), ++i === r && n.complete(), !0
			}
			var n = this,
				i = 0,
				r = this.images.length;
			if (this.hasAnyBroken = !1, r)
				for (var e = 0; e < r; e++) {
					var s = this.images[e];
					s.on("confirm", t), s.check()
				} else this.complete()
		}, a.prototype.progress = function (t) {
			this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
			var e = this;
			setTimeout(function () {
				e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
			})
		}, a.prototype.complete = function () {
			var e = this.hasAnyBroken ? "fail" : "done";
			this.isComplete = !0;
			var n = this;
			setTimeout(function () {
				if (n.emit(e, n), n.emit("always", n), n.jqDeferred) {
					var t = n.hasAnyBroken ? "reject" : "resolve";
					n.jqDeferred[t](n)
				}
			})
		}, c && (c.fn.imagesLoaded = function (t, e) {
			return new a(this, t, e).jqDeferred.promise(c(this))
		}), i.prototype = new e, i.prototype.check = function () {
			var t = d[this.img.src] || new l(this.img.src);
			if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed");
			else if (this.img.complete && this.img.naturalWidth !== undefined) this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
			else {
				var n = this;
				t.on("confirm", function (t, e) {
					return n.confirm(t.isLoaded, e), !0
				}), t.check()
			}
		}, i.prototype.confirm = function (t, e) {
			this.isLoaded = t, this.emit("confirm", this, e)
		};
		var d = {};
		return l.prototype = new e, l.prototype.check = function () {
			if (!this.isChecked) {
				var t = new Image;
				n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.src, this.isChecked = !0
			}
		}, l.prototype.handleEvent = function (t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, l.prototype.onload = function (t) {
			this.confirm(!0, "onload"), this.unbindProxyEvents(t)
		}, l.prototype.onerror = function (t) {
			this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
		}, l.prototype.confirm = function (t, e) {
			this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
		}, l.prototype.unbindProxyEvents = function (t) {
			n.unbind(t.target, "load", this), n.unbind(t.target, "error", this)
		}, a
	}),
	function (t, e) {
		var n = function (i, r, s) {
			var o;
			return function a() {
				function t() {
					s || i.apply(e, n), o = null
				}
				var e = this,
					n = arguments;
				o ? clearTimeout(o) : s && i.apply(e, n), o = setTimeout(t, r || 150)
			}
		};
		jQuery.fn[e] = function (t) {
			return t ? this.bind("resize", n(t)) : this.trigger(e)
		}
	}(jQuery, "smartresize"),
	function (p) {
		p.Gal = function (t, e) {
			this.element = p(e), this._init(t)
		}, p.Gal.settings = {
			selector: ".item",
			width: 225,
			gutter: 20,
			animate: !1,
			columns: 3,
			animationOptions: {
				speed: 200,
				duration: 300,
				effect: "fadeInOnAppear",
				queue: !0,
				complete: function () {}
			}
		}, p.Gal.prototype = {
			_init: function (t) {
				var e = this;
				this.name = this._setName(5), this.gridArr = [], this.gridArrAppend = [], this.gridArrPrepend = [], this.setArr = !1, this.setGrid = !1, this.setOptions, this.cols = 0, this.itemCount = 0, this.prependCount = 0, this.isPrepending = !1, this.appendCount = 0, this.resetCount = !0, this.ifCallback = !0, this.box = this.element, this.options = p.extend(!0, {}, p.Gal.settings, t), this.gridArr = p.makeArray(this.box.find(this.options.selector)), this.isResizing = !1, this.w = 0, this.boxArr = [], this.initialWidth = this.box.width(), this._setCols(), this._renderGrid("append"), p(this.box).addClass("gridalicious"), this._addLoadMore(), p(window).smartresize(function () {
					e.resize()
				})
			},
			_addLoadMore: function () {
				var t = p("<a href='#'>Load More</a>").addClass("j-paginate juicer-button");
				this.box.append(t)
			},
			_moveLoadMore: function () {
				var t = this.box.find(".j-paginate");
				0 < t.length && this.box.append(t.detach())
			},
			_setName: function (t, e) {
				return e = e || "", t ? this._setName(--t, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(60 * Math.random())) + e) : e
			},
			_setCols: function () {
				this.calculated = Math.floor(this.box.outerWidth() / this.options.width), this.cols = Math.min(this.options.columns, this.calculated), this.cols < 1 && (this.cols = 1), diff = (this.box.width() - this.cols * this.options.width) / this.cols, w = (this.options.width + diff) / this.box.width() * 100, this.w = w, this.spacing = this.options.gutter / this.cols;
				for (var t = p("<div></div>").addClass("j-stacker-wrapper").css({
						marginLeft: -this.options.gutter / 2,
						marginRight: -this.options.gutter / 2
					}), e = p("<div></div>").addClass("j-stacker"), n = 0; n < this.cols; n++) {
					var i = p("<div></div>").addClass("j-stack galcolumn column-" + n + "-" + this.name).attr("id", "j-column-" + n).css({
						width: w + "%",
						paddingLeft: this.options.gutter / 2,
						paddingRight: this.options.gutter / 2
					});
					e.append(i)
				}
				t.append(e), this.box.append(t), this.box.find(p("#clear" + this.name)).remove();
				var r = p("<div></div>").css({
					clear: "both",
					height: "0",
					width: "0",
					display: "block"
				}).attr("id", "clear" + this.name);
				this.box.append(r)
			},
			_renderGrid: function (r, t, e) {
				var s = [],
					n = [],
					o = 0,
					a = (this.prependCount, this.appendCount),
					l = this.options.gutter,
					c = this.cols,
					u = this.name;
				p(".j-stack").width();
				t ? (n = t, "append" == r && (a += e, o = this.appendCount), "prepend" == r && (this.isPrepending = !0, (o = Math.round(e % c)) <= 0 && (o = c)), "renderAfterPrepend" == r && (a += e, o = e)) : (n = this.gridArr, a = p(this.gridArr).length), p.each(n, function (t, e) {
					var n = p(e),
						i = "100%";
					n.hasClass("not-responsive") && (i = "auto"), n.css({
						marginBottom: l,
						zoom: "1"
					}).find(".j-image img, object, embed, iframe").css({
						width: i,
						height: "auto",
						display: "block",
						"margin-left": "auto",
						"margin-right": "auto"
					}), "prepend" == r ? (p(".column-" + --o + "-" + u).prepend(n), s.push(n), 0 == o && (o = c)) : (p(".column-" + o + "-" + u).append(n), s.push(n), c <= ++o && (o = 0), c <= a && (a -= c))
				}), this.appendCount = a, this.itemCount = o, "append" == r || "prepend" == r ? ("prepend" == r && this._updateAfterPrepend(this.gridArr, n), this._renderItem(s), this.isPrepending = !1) : this._renderItem(this.gridArr)
			},
			_collectItems: function () {
				var t = [];
				return p(this.box).find(this.options.selector).each(function () {
					t.push(p(this))
				}), t
			},
			_renderItem: function (n) {
				var i = this.options.animationOptions.speed,
					t = this.options.animationOptions.effect,
					r = this.options.animationOptions.duration,
					e = this.options.animationOptions.queue,
					s = this.options.animate,
					o = this.options.animationOptions.complete,
					a = 0,
					l = 0;
				!0 !== s || this.isResizing ? (p.each(n, function (t, e) {
					p(e).css({
						opacity: "1"
					})
				}), this.ifCallback && o.call(n)) : (!0 === e && "fadeInOnAppear" == t ? (this.isPrepending && n.reverse(), p.each(n, function (t, e) {
					setTimeout(function () {
						p(e).animate({
							opacity: "1.0"
						}, r), ++l == n.length && o.call(undefined, n)
					}, a * i), a++
				})) : !1 === e && "fadeInOnAppear" == t && (this.isPrepending && n.reverse(), p.each(n, function (t, e) {
					p(e).animate({
						opacity: "1.0"
					}, r), ++l == n.length && this.ifCallback && o.call(undefined, n)
				})), !0 !== e || t || p.each(n, function (t, e) {
					p(e).css({
						opacity: "1"
					}), ++l == n.length && this.ifCallback && o.call(undefined, n)
				}))
			},
			_updateAfterPrepend: function (t, e) {
				var n = this.gridArr;
				p.each(e, function (t, e) {
					n.unshift(e)
				}), this.gridArr = n
			},
			resize: function () {
				this.box.width() != this.initialWidth && (this.initialWidth = this.box.width(), this.box.find(p(".j-stacker-wrapper")).remove(), this._setCols(), this._moveLoadMore(), this.ifCallback = !1, this.isResizing = !0, this._renderGrid("append"), this.ifCallback = !0, this.isResizing = !1)
			},
			append: function (t) {
				var n = this.gridArr,
					i = this.gridArrPrepend;
				p.each(t, function (t, e) {
					n.push(e), i.push(e)
				}), this._renderGrid("append", t, p(t).length), this._addLoadMore()
			},
			prepend: function (t) {
				this.ifCallback = !1, this._renderGrid("prepend", t, p(t).length), this.ifCallback = !0
			}
		}, p.fn.gridalicious = function (e, n) {
			return "string" == typeof e ? this.each(function () {
				var t = p.data(this, "gridalicious");
				t[e].apply(t, [n])
			}) : this.each(function () {
				p.data(this, "gridalicious", new p.Gal(e, this))
			}), this
		}
	}(jQuery),
	function () {
		function r8(t) {
			return (t || "").split(" ")
		}

		function t8(t, e, n) {
			return x8(t, e, n)
		}

		function u8(t, e, n, i) {
			return "number" != typeof n && "string" != typeof n || null != i || (i = n, n = undefined), x8(t, e, n, {
				timezone: i
			})
		}

		function v8(t, e, n) {
			return x8(t, e, n, {
				utc: !0
			})
		}

		function w8(i) {
			return function (t, e, n) {
				return t8(t, e, i, n)
			}
		}

		function x8(t, l, c, u) {
			u = u || {}, l && !A8(l) && (c = l, l = undefined), l = l || new Date, (c = c || s8).formats = c.formats || {};
			var p = l.getTime(),
				h = u.timezone,
				e = typeof h;
			if ((u.utc || "number" == e || "string" == e) && (l = y8(l)), h) {
				if ("string" == e) {
					var n = "-" == h[0] ? -1 : 1;
					h = n * (60 * parseInt(h.slice(1, 3), 10) + parseInt(h.slice(3, 5), 10))
				}
				e && (l = new Date(l.getTime() + 6e4 * h))
			}
			return t.replace(/%([-_0]?.)/g, function (t, e) {
				var n, i;
				if (2 == e.length) {
					if ("-" == (n = e[0])) i = "";
					else if ("_" == n) i = " ";
					else {
						if ("0" != n) return t;
						i = "0"
					}
					e = e[1]
				}
				switch (e) {
					case "A":
						return c.days[l.getDay()];
					case "a":
						return c.shortDays[l.getDay()];
					case "B":
						return c.months[l.getMonth()];
					case "b":
						return c.shortMonths[l.getMonth()];
					case "C":
						return B8(Math.floor(l.getFullYear() / 100), i);
					case "D":
						return x8(c.formats.D || "%m/%d/%y", l, c);
					case "d":
						return B8(l.getDate(), i);
					case "e":
						return B8(l.getDate(), null == i ? " " : i);
					case "F":
						return x8(c.formats.F || "%Y-%m-%d", l, c);
					case "H":
						return B8(l.getHours(), i);
					case "h":
						return c.shortMonths[l.getMonth()];
					case "I":
						return B8(C8(l), i);
					case "j":
						var r = new Date(l.getFullYear(), 0, 1);
						return B8(s = Math.ceil((l.getTime() - r.getTime()) / 864e5), 3);
					case "k":
						return B8(l.getHours(), null == i ? " " : i);
					case "L":
						return B8(Math.floor(p % 1e3), 3);
					case "l":
						return B8(C8(l), null == i ? " " : i);
					case "M":
						return B8(l.getMinutes(), i);
					case "m":
						return B8(l.getMonth() + 1, i);
					case "n":
						return "\n";
					case "o":
						return String(l.getDate()) + D8(l.getDate());
					case "P":
						return l.getHours() < 12 ? c.am : c.pm;
					case "p":
						return l.getHours() < 12 ? c.AM : c.PM;
					case "R":
						return x8(c.formats.R || "%H:%M", l, c);
					case "r":
						return x8(c.formats.r || "%I:%M:%S %p", l, c);
					case "S":
						return B8(l.getSeconds(), i);
					case "s":
						return Math.floor(p / 1e3);
					case "T":
						return x8(c.formats.T || "%H:%M:%S", l, c);
					case "t":
						return "\t";
					case "U":
						return B8(E8(l, "sunday"), i);
					case "u":
						var s;
						return 0 == (s = l.getDay()) ? 7 : s;
					case "v":
						return x8(c.formats.v || "%e-%b-%Y", l, c);
					case "W":
						return B8(E8(l, "monday"), i);
					case "w":
						return l.getDay();
					case "Y":
						return l.getFullYear();
					case "y":
						return (r = String(l.getFullYear())).slice(r.length - 2);
					case "Z":
						if (u.utc) return "GMT";
						var o = l.toString().match(/\(([\w\s]+)\)/);
						return o && o[1] || "";
					case "z":
						if (u.utc) return "+0000";
						var a = "number" == typeof h ? h : -l.getTimezoneOffset();
						return (a < 0 ? "-" : "+") + B8(Math.floor(Math.abs(a) / 60)) + B8(Math.abs(a) % 60);
					default:
						return e
				}
			})
		}

		function y8(t) {
			var e = 6e4 * (t.getTimezoneOffset() || 0);
			return new Date(t.getTime() + e)
		}

		function A8(t) {
			var e = 0,
				n = z8.length;
			for (e = 0; e < n; ++e)
				if ("function" != typeof t[z8[e]]) return !1;
			return !0
		}

		function B8(t, e, n) {
			"number" == typeof e && (n = e, e = "0"), null == e && (e = "0"), n = n || 2;
			var i = String(t);
			if (e)
				for (; i.length < n;) i = e + i;
			return i
		}

		function C8(t) {
			var e = t.getHours();
			return 0 == e ? e = 12 : 12 < e && (e -= 12), e
		}

		function D8(t) {
			var e = t % 10,
				n = t % 100;
			if (11 <= n && n <= 13 || 0 === e || 4 <= e) return "th";
			switch (e) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd"
			}
		}

		function E8(t, e) {
			e = e || "sunday";
			var n = t.getDay();
			"monday" == e && (0 == n ? n = 6 : n--);
			var i = new Date(t.getFullYear(), 0, 1),
				r = ((t - i) / 864e5 + 7 - n) / 7;
			return Math.floor(r)
		}
		var q8;
		q8 = "undefined" != typeof module ? module.exports = t8 : function () {
			return this || eval("this")
		}();
		var s8 = {
			days: r8("Sunday Monday Tuesday Wednesday Thursday Friday Saturday"),
			shortDays: r8("Sun Mon Tue Wed Thu Fri Sat"),
			months: r8("January February March April May June July August September October November December"),
			shortMonths: r8("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec"),
			AM: "AM",
			PM: "PM",
			am: "am",
			pm: "pm"
		};
		q8.strftime = t8, q8.strftimeTZ = t8.strftimeTZ = u8, q8.strftimeUTC = t8.strftimeUTC = v8, q8.localizedStrftime = t8.localizedStrftime = w8;
		var z8 = ["getTime", "getTimezoneOffset", "getDay", "getDate", "getMonth", "getFullYear", "getYear", "getHours", "getMinutes", "getSeconds"]
	}(),
	function () {
		var t, o = [].slice;
		t = function () {
			var e, i, r, t, n, s;
			return n = /(^|[\s\n]|<br\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi, 0 < (t = 1 <= arguments.length ? o.call(arguments, 0) : []).length ? (r = t[0], i = function () {
				var t;
				for (e in t = [], r) s = r[e], "callback" !== e && t.push(" " + e + "='" + s + "'");
				return t
			}().join(""), this.replace(n, function (t, e, n) {
				return "" + e + (("function" == typeof r.callback ? r.callback(n) : void 0) || "<a href='" + n + "'" + i + ">" + n + "</a>")
			})) : this.replace(n, "$1<a href='$2'>$2</a>")
		}, String.prototype.autoLink = t
	}.call(this), Object.create || (Object.create = function (t, e) {
		function n() {}
		if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object prototype may only be an Object: " + t);
		if (null === t) throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
		if (void 0 !== e) throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
		return n.prototype = t, new n
	}),
	function (t, e) {
		"use strict";
		t.jQueryBridget = e(t, t.jQuery)
	}(window, function factory(t, i) {
		"use strict";

		function e(c, r, u) {
			function e(t, s, o) {
				var a, l = "$()." + c + '("' + s + '")';
				return t.each(function (t, e) {
					var n = u.data(e, c);
					if (n) {
						var i = n[s];
						if (i && "_" != s.charAt(0)) {
							var r = i.apply(n, o);
							a = a === undefined ? r : a
						} else p(l + " is not a valid method")
					} else p(c + " not initialized. Cannot call methods, i.e. " + l)
				}), a !== undefined ? a : t
			}

			function n(t, i) {
				t.each(function (t, e) {
					var n = u.data(e, c);
					n ? (n.option(i), n._init()) : (n = new r(e, i), u.data(e, c, n))
				})
			}(u = u || i || t.jQuery) && (r.prototype.option || (r.prototype.option = function (t) {
				u.isPlainObject(t) && (this.options = u.extend(!0, this.options, t))
			}), u.fn[c] = function (t) {
				return "string" == typeof t ? e(this, t, o.call(arguments, 1)) : (n(this, t), this)
			}, s(u))
		}

		function s(t) {
			!t || t && t.bridget || (t.bridget = e)
		}
		var o = Array.prototype.slice,
			n = t.console,
			p = void 0 === n ? function () {} : function (t) {
				n.error(t)
			};
		return s(i || t.jQuery), e
	}),
	function (t, e) {
		"use strict";
		window.getWindowSize = e()
	}(0, function factory() {
		"use strict";

		function y(t) {
			var e = parseFloat(t);
			return -1 == t.indexOf("%") && !isNaN(e) && e
		}

		function t() {}

		function v() {
			for (var t = {
					width: 0,
					height: 0,
					innerWidth: 0,
					innerHeight: 0,
					outerWidth: 0,
					outerHeight: 0
				}, e = 0; e < _; e++) {
				t[k[e]] = 0
			}
			return t
		}

		function w(t) {
			var e = getComputedStyle(t);
			return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
		}

		function b() {
			if (!r) {
				r = !0;
				var t = document.createElement("div");
				t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
				var e = document.body || document.documentElement;
				e.appendChild(t);
				var n = w(t);
				i.isBoxSizeOuter = S = 200 == y(n.width), e.removeChild(t)
			}
		}

		function i(t) {
			if (b(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
				var e = w(t);
				if ("none" == e.display) return v();
				var n = {};
				n.width = t.offsetWidth, n.height = t.offsetHeight;
				for (var i = n.isBorderBox = "border-box" == e.boxSizing, r = 0; r < _; r++) {
					var s = k[r],
						o = e[s],
						a = parseFloat(o);
					n[s] = isNaN(a) ? 0 : a
				}
				var l = n.paddingLeft + n.paddingRight,
					c = n.paddingTop + n.paddingBottom,
					u = n.marginLeft + n.marginRight,
					p = n.marginTop + n.marginBottom,
					h = n.borderLeftWidth + n.borderRightWidth,
					d = n.borderTopWidth + n.borderBottomWidth,
					f = i && S,
					g = y(e.width);
				!1 !== g && (n.width = g + (f ? 0 : l + h));
				var m = y(e.height);
				return !1 !== m && (n.height = m + (f ? 0 : c + d)), n.innerWidth = n.width - (l + h), n.innerHeight = n.height - (c + d), n.outerWidth = n.width + u, n.outerHeight = n.height + p, n
			}
		}
		var S, n = "undefined" == typeof console ? t : function (t) {
				console.error(t)
			},
			k = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
			_ = k.length,
			r = !1;
		return i
	}),
	function (t, e) {
		t.EvEmitter = e()
	}(this, function () {
		function t() {}
		var e = t.prototype;
		return e.on = function (t, e) {
			if (t && e) {
				var n = this._events = this._events || {},
					i = n[t] = n[t] || [];
				return -1 == i.indexOf(e) && i.push(e), this
			}
		}, e.once = function (t, e) {
			if (t && e) {
				this.on(t, e);
				var n = this._onceEvents = this._onceEvents || {};
				return (n[t] = n[t] || {})[e] = !0, this
			}
		}, e.off = function (t, e) {
			var n = this._events && this._events[t];
			if (n && n.length) {
				var i = n.indexOf(e);
				return -1 != i && n.splice(i, 1), this
			}
		}, e.emitEvent = function (t, e) {
			var n = this._events && this._events[t];
			if (n && n.length) {
				var i = 0,
					r = n[i];
				e = e || [];
				for (var s = this._onceEvents && this._onceEvents[t]; r;) {
					var o = s && s[r];
					o && (this.off(t, r), delete s[r]), r.apply(this, e), r = n[i += o ? 0 : 1]
				}
				return this
			}
		}, t
	}),
	function (t, e) {
		"use strict";
		window.matchesSelector = e()
	}(0, function factory() {
		"use strict";
		var n = function () {
			var t = Element.prototype;
			if (t.matches) return "matches";
			if (t.matchesSelector) return "matchesSelector";
			for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
				var i = e[n] + "MatchesSelector";
				if (t[i]) return i
			}
		}();
		return function i(t, e) {
			return t[n](e)
		}
	}),
	function (t, e) {
		t.fizzyUIUtils = e(t, t.matchesSelector)
	}(window, function factory(r, s) {
		var u = {
				extend: function (t, e) {
					for (var n in e) t[n] = e[n];
					return t
				},
				modulo: function (t, e) {
					return (t % e + e) % e
				},
				makeArray: function (t) {
					var e = [];
					if (Array.isArray(t)) e = t;
					else if (t && "number" == typeof t.length)
						for (var n = 0; n < t.length; n++) e.push(t[n]);
					else e.push(t);
					return e
				},
				removeFrom: function (t, e) {
					var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
				},
				getParent: function (t, e) {
					for (; t != document.body;)
						if (t = t.parentNode, s(t, e)) return t
				},
				getQueryElement: function (t) {
					return "string" == typeof t ? document.querySelector(t) : t
				},
				handleEvent: function (t) {
					var e = "on" + t.type;
					this[e] && this[e](t)
				},
				filterFindElements: function (t, i) {
					t = u.makeArray(t);
					var r = [];
					return t.forEach(function (t) {
						if (t instanceof HTMLElement)
							if (i) {
								s(t, i) && r.push(t);
								for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++) r.push(e[n])
							} else r.push(t)
					}), r
				},
				debounceMethod: function (t, e, i) {
					var r = t.prototype[e],
						s = e + "Timeout";
					t.prototype[e] = function () {
						var t = this[s];
						t && clearTimeout(t);
						var e = arguments,
							n = this;
						this[s] = setTimeout(function () {
							r.apply(n, e), delete n[s]
						}, i || 100)
					}
				},
				docReady: function (t) {
					"complete" == document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", t)
				},
				toDashed: function (t) {
					return t.replace(/(.)([A-Z])/g, function (t, e, n) {
						return e + "-" + n
					}).toLowerCase()
				}
			},
			p = r.console;
		return u.htmlInit = function (l, c) {
			u.docReady(function () {
				var t = u.toDashed(c),
					s = "data-" + t,
					e = document.querySelectorAll("[" + s + "]"),
					n = document.querySelectorAll(".js-" + t),
					i = u.makeArray(e).concat(u.makeArray(n)),
					o = s + "-options",
					a = r.jQuery;
				i.forEach(function (t) {
					var e, n = t.getAttribute(s) || t.getAttribute(o);
					try {
						e = n && JSON.parse(n)
					} catch (r) {
						return void(p && p.error("Error parsing " + s + " on " + t.className + ": " + r))
					}
					var i = new l(t, e);
					a && a.data(t, c, i)
				})
			})
		}, u
	}),
	function (t, e) {
		t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getWindowSize)
	}(window, function factory(t, e) {
		"use strict";

		function i(t) {
			for (var e in t) return !1;
			return !null
		}

		function n(t, e) {
			t && (this.element = t, this.layout = e, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}

		function r(t) {
			return t.replace(/([A-Z])/g, function (t) {
				return "-" + t.toLowerCase()
			})
		}
		var s = document.documentElement.style,
			o = "string" == typeof s.transition ? "transition" : "WebkitTransition",
			a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
			l = {
				WebkitTransition: "webkitTransitionEnd",
				transition: "transitionend"
			}[o],
			c = {
				transform: a,
				transition: o,
				transitionDuration: o + "Duration",
				transitionProperty: o + "Property"
			},
			u = n.prototype = Object.create(t.prototype);
		u.constructor = n, u._create = function () {
			this._transn = {
				ingProperties: {},
				clean: {},
				onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, u.handleEvent = function (t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, u.getWindowSize = function () {
			this.size = e(this.element)
		}, u.css = function (t) {
			var e = this.element.style;
			for (var n in t) {
				e[c[n] || n] = t[n]
			}
		}, u.getPosition = function () {
			var t = getComputedStyle(this.element),
				e = this.layout._getOption("originLeft"),
				n = this.layout._getOption("originTop"),
				i = t[e ? "left" : "right"],
				r = t[n ? "top" : "bottom"],
				s = this.layout.size,
				o = -1 != i.indexOf("%") ? parseFloat(i) / 100 * s.width : parseInt(i, 10),
				a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.height : parseInt(r, 10);
			o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, o -= e ? s.paddingLeft : s.paddingRight, a -= n ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = a
		}, u.layoutPosition = function () {
			var t = this.layout.size,
				e = {},
				n = this.layout._getOption("originLeft"),
				i = this.layout._getOption("originTop"),
				r = n ? "paddingLeft" : "paddingRight",
				s = n ? "left" : "right",
				o = n ? "right" : "left",
				a = this.position.x + t[r];
			e[s] = this.getXValue(a), e[o] = "";
			var l = i ? "paddingTop" : "paddingBottom",
				c = i ? "top" : "bottom",
				u = i ? "bottom" : "top",
				p = this.position.y + t[l];
			e[c] = this.getYValue(p), e[u] = "", this.css(e), this.emitEvent("layout", [this])
		}, u.getXValue = function (t) {
			var e = this.layout._getOption("horizontal");
			return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
		}, u.getYValue = function (t) {
			var e = this.layout._getOption("horizontal");
			return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
		}, u._transitionTo = function (t, e) {
			this.getPosition();
			var n = this.position.x,
				i = this.position.y,
				r = parseInt(t, 10),
				s = parseInt(e, 10),
				o = r === this.position.x && s === this.position.y;
			if (this.setPosition(t, e), !o || this.isTransitioning) {
				var a = t - n,
					l = e - i,
					c = {};
				c.transform = this.getTranslate(a, l), this.transition({
					to: c,
					onTransitionEnd: {
						transform: this.layoutPosition
					},
					isCleaning: !0
				})
			} else this.layoutPosition()
		}, u.getTranslate = function (t, e) {
			return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
		}, u.goTo = function (t, e) {
			this.setPosition(t, e), this.layoutPosition()
		}, u.moveTo = u._transitionTo, u.setPosition = function (t, e) {
			this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
		}, u._nonTransition = function (t) {
			for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
		}, u.transition = function (t) {
			if (parseFloat(this.layout.options.transitionDuration)) {
				var e = this._transn;
				for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
				for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
				if (t.from) {
					this.css(t.from);
					this.element.offsetHeight;
					null
				}
				this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
			} else this._nonTransition(t)
		};
		var p = "opacity," + r(a);
		u.enableTransition = function () {
			this.isTransitioning || (this.css({
				transitionProperty: p,
				transitionDuration: this.layout.options.transitionDuration
			}), this.element.addEventListener(l, this, !1))
		}, u.onwebkitTransitionEnd = function (t) {
			this.ontransitionend(t)
		}, u.onotransitionend = function (t) {
			this.ontransitionend(t)
		};
		var h = {
			"-webkit-transform": "transform"
		};
		u.ontransitionend = function (t) {
			if (t.target === this.element) {
				var e = this._transn,
					n = h[t.propertyName] || t.propertyName;
				if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) e.onEnd[n].call(this), delete e.onEnd[n];
				this.emitEvent("transitionEnd", [this])
			}
		}, u.disableTransition = function () {
			this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
		}, u._removeStyles = function (t) {
			var e = {};
			for (var n in t) e[n] = "";
			this.css(e)
		};
		var d = {
			transitionProperty: "",
			transitionDuration: ""
		};
		return u.removeTransitionStyles = function () {
			this.css(d)
		}, u.removeElem = function () {
			this.element.parentNode.removeChild(this.element), this.css({
				display: ""
			}), this.emitEvent("remove", [this])
		}, u.remove = function () {
			o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
				this.removeElem()
			}), this.hide()) : this.removeElem()
		}, u.reveal = function () {
			delete this.isHidden, this.css({
				display: ""
			});
			var t = this.layout.options,
				e = {};
			e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
				from: t.hiddenStyle,
				to: t.visibleStyle,
				isCleaning: !0,
				onTransitionEnd: e
			})
		}, u.onRevealTransitionEnd = function () {
			this.isHidden || this.emitEvent("reveal")
		}, u.getHideRevealTransitionEndProperty = function (t) {
			var e = this.layout.options[t];
			if (e.opacity) return "opacity";
			for (var n in e) return n
		}, u.hide = function () {
			this.isHidden = !0, this.css({
				display: ""
			});
			var t = this.layout.options,
				e = {};
			e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
				from: t.visibleStyle,
				to: t.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: e
			})
		}, u.onHideTransitionEnd = function () {
			this.isHidden && (this.css({
				display: "none"
			}), this.emitEvent("hide"))
		}, u.destroy = function () {
			this.css({
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""
			})
		}, n
	}),
	function (t, e) {
		"use strict";
		t.Outlayer = e(t, t.EvEmitter, t.getWindowSize, t.fizzyUIUtils, t.Outlayer.Item)
	}(window, function factory(t, e, r, s, i) {
		"use strict";

		function o(t, e) {
			var n = s.getQueryElement(t);
			if (n) {
				this.element = n, c && (this.$element = c(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
				var i = ++u;
				this.element.outlayerGUID = i, (p[i] = this)._create(), this._getOption("initLayout") && this.layout()
			} else l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
		}

		function a(t) {
			function e() {
				t.apply(this, arguments)
			}
			return e.prototype = Object.create(t.prototype), e.prototype.constructor = e
		}
		var l = t.console,
			c = t.jQuery,
			n = function () {},
			u = 0,
			p = {};
		o.namespace = "outlayer", o.Item = i, o.defaults = {
			containerStyle: {
				position: "relative"
			},
			initLayout: !0,
			originLeft: !0,
			originTop: !0,
			resize: !0,
			resizeContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		};
		var h = o.prototype;
		return s.extend(h, e.prototype), h.option = function (t) {
			s.extend(this.options, t)
		}, h._getOption = function (t) {
			var e = this.constructor.compatOptions[t];
			return e && this.options[e] !== undefined ? this.options[e] : this.options[t]
		}, o.compatOptions = {
			initLayout: "isInitLayout",
			horizontal: "isHorizontal",
			layoutInstant: "isLayoutInstant",
			originLeft: "isOriginLeft",
			originTop: "isOriginTop",
			resize: "isResizeBound",
			resizeContainer: "isResizingContainer"
		}, h._create = function () {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
		}, h.reloadItems = function () {
			this.items = this._itemize(this.element.children)
		}, h._itemize = function (t) {
			for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
				var s = new n(e[r], this);
				i.push(s)
			}
			return i
		}, h._filterFindItemElements = function (t) {
			return s.filterFindElements(t, this.options.itemSelector)
		}, h.getItemElements = function () {
			return this.items.map(function (t) {
				return t.element
			})
		}, h.layout = function () {
			this._resetLayout(), this._manageStamps();
			var t = this._getOption("layoutInstant"),
				e = t !== undefined ? t : !this._isLayoutInited;
			this.layoutItems(this.items, e), this._isLayoutInited = !0
		}, h._init = h.layout, h._resetLayout = function () {
			this.getWindowSize()
		}, h.getWindowSize = function () {
			this.size = r(this.element)
		}, h._getMeasurement = function (t, e) {
			var n, i = this.options[t];
			i ? ("string" == typeof i ? n = this.element.querySelector(i) : i instanceof HTMLElement && (n = i), this[t] = n ? r(n)[e] : i) : this[t] = 0
		}, h.layoutItems = function (t, e) {
			t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
		}, h._getItemsForLayout = function (t) {
			return t.filter(function (t) {
				return !t.isIgnored
			})
		}, h._layoutItems = function (t, n) {
			if (this._emitCompleteOnItems("layout", t), t && t.length) {
				var i = [];
				t.forEach(function (t) {
					var e = this._getItemLayoutPosition(t);
					e.item = t, e.isInstant = n || t.isLayoutInstant, i.push(e)
				}, this), this._processLayoutQueue(i)
			}
		}, h._getItemLayoutPosition = function () {
			return {
				x: 0,
				y: 0
			}
		}, h._processLayoutQueue = function (t) {
			t.forEach(function (t) {
				this._positionItem(t.item, t.x, t.y, t.isInstant)
			}, this)
		}, h._positionItem = function (t, e, n, i) {
			i ? t.goTo(e, n) : t.moveTo(e, n)
		}, h._postLayout = function () {
			this.resizeContainer()
		}, h.resizeContainer = function () {
			if (this._getOption("resizeContainer")) {
				var t = this._getContainerSize();
				t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
			}
		}, h._getContainerSize = n, h._setContainerMeasure = function (t, e) {
			if (t !== undefined) {
				var n = this.size;
				n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
			}
		}, h._emitCompleteOnItems = function (e, t) {
			function n() {
				r.dispatchEvent(e + "Complete", null, [t])
			}

			function i() {
				++o == s && n()
			}
			var r = this,
				s = t.length;
			if (t && s) {
				var o = 0;
				t.forEach(function (t) {
					t.once(e, i)
				})
			} else n()
		}, h.dispatchEvent = function (t, e, n) {
			var i = e ? [e].concat(n) : n;
			if (this.emitEvent(t, i), c)
				if (this.$element = this.$element || c(this.element), e) {
					var r = c.Event(e);
					r.type = t, this.$element.trigger(r, n)
				} else this.$element.trigger(t, n)
		}, h.ignore = function (t) {
			var e = this.getItem(t);
			e && (e.isIgnored = !0)
		}, h.unignore = function (t) {
			var e = this.getItem(t);
			e && delete e.isIgnored
		}, h.stamp = function (t) {
			(t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
		}, h.unstamp = function (t) {
			(t = this._find(t)) && t.forEach(function (t) {
				s.removeFrom(this.stamps, t), this.unignore(t)
			}, this)
		}, h._find = function (t) {
			if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = s.makeArray(t)
		}, h._manageStamps = function () {
			this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
		}, h._getBoundingRect = function () {
			var t = this.element.getBoundingClientRect(),
				e = this.size;
			this._boundingRect = {
				left: t.left + e.paddingLeft + e.borderLeftWidth,
				top: t.top + e.paddingTop + e.borderTopWidth,
				right: t.right - (e.paddingRight + e.borderRightWidth),
				bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
			}
		}, h._manageStamp = n, h._getElementOffset = function (t) {
			var e = t.getBoundingClientRect(),
				n = this._boundingRect,
				i = r(t);
			return {
				left: e.left - n.left - i.marginLeft,
				top: e.top - n.top - i.marginTop,
				right: n.right - e.right - i.marginRight,
				bottom: n.bottom - e.bottom - i.marginBottom
			}
		}, h.handleEvent = s.handleEvent, h.bindResize = function () {
			t.addEventListener("resize", this), this.isResizeBound = !0
		}, h.unbindResize = function () {
			t.removeEventListener("resize", this), this.isResizeBound = !1
		}, h.onresize = function () {
			this.resize()
		}, s.debounceMethod(o, "onresize", 100), h.resize = function () {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, h.needsResizeLayout = function () {
			var t = r(this.element);
			return this.size && t && t.innerWidth !== this.size.innerWidth
		}, h.addItems = function (t) {
			var e = this._itemize(t);
			return e.length && (this.items = this.items.concat(e)), e
		}, h.appended = function (t) {
			var e = this.addItems(t);
			e.length && (this.layoutItems(e, !0), this.reveal(e))
		}, h.prepended = function (t) {
			var e = this._itemize(t);
			if (e.length) {
				var n = this.items.slice(0);
				this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
			}
		}, h.reveal = function (t) {
			this._emitCompleteOnItems("reveal", t), t && t.length && t.forEach(function (t) {
				t.reveal()
			})
		}, h.hide = function (t) {
			this._emitCompleteOnItems("hide", t), t && t.length && t.forEach(function (t) {
				t.hide()
			})
		}, h.revealItemElements = function (t) {
			var e = this.getItems(t);
			this.reveal(e)
		}, h.hideItemElements = function (t) {
			var e = this.getItems(t);
			this.hide(e)
		}, h.getItem = function (t) {
			for (var e = 0; e < this.items.length; e++) {
				var n = this.items[e];
				if (n.element == t) return n
			}
		}, h.getItems = function (t) {
			t = s.makeArray(t);
			var n = [];
			return t.forEach(function (t) {
				var e = this.getItem(t);
				e && n.push(e)
			}, this), n
		}, h.remove = function (t) {
			var e = this.getItems(t);
			this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
				t.remove(), s.removeFrom(this.items, t)
			}, this)
		}, h.destroy = function () {
			var t = this.element.style;
			t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
				t.destroy()
			}), this.unbindResize();
			var e = this.element.outlayerGUID;
			delete p[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
		}, o.data = function (t) {
			var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
			return e && p[e]
		}, o.create = function (t, e) {
			var n = a(o);
			return n.defaults = s.extend({}, o.defaults), s.extend(n.defaults, e), n.compatOptions = s.extend({}, o.compatOptions), n.namespace = t, n.data = o.data, n.Item = a(i), s.htmlInit(n, t), c && c.bridget && c.bridget(t, n), n
		}, o.Item = i, o
	}),
	function (t, e) {
		t.Packery = t.Packery || {}, t.Packery.Rect = e()
	}(window, function factory() {
		"use strict";

		function a(t) {
			for (var e in a.defaults) this[e] = a.defaults[e];
			for (e in t) this[e] = t[e]
		}
		a.defaults = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
		var t = a.prototype;
		return t.contains = function (t) {
			var e = t.width || 0,
				n = t.height || 0;
			return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + n
		}, t.overlaps = function (t) {
			var e = this.x + this.width,
				n = this.y + this.height,
				i = t.x + t.width,
				r = t.y + t.height;
			return this.x < i && e > t.x && this.y < r && n > t.y
		}, t.getMaximalFreeRects = function (t) {
			if (!this.overlaps(t)) return !1;
			var e, n = [],
				i = this.x + this.width,
				r = this.y + this.height,
				s = t.x + t.width,
				o = t.y + t.height;
			return this.y < t.y && (e = new a({
				x: this.x,
				y: this.y,
				width: this.width,
				height: t.y - this.y
			}), n.push(e)), s < i && (e = new a({
				x: s,
				y: this.y,
				width: i - s,
				height: this.height
			}), n.push(e)), o < r && (e = new a({
				x: this.x,
				y: o,
				width: this.width,
				height: r - o
			}), n.push(e)), this.x < t.x && (e = new a({
				x: this.x,
				y: this.y,
				width: t.x - this.x,
				height: this.height
			}), n.push(e)), n
		}, t.canFit = function (t) {
			return this.width >= t.width && this.height >= t.height
		}, a
	}),
	function (t, e) {
		var n = t.Packery = t.Packery || {};
		n.Packer = e(n.Rect)
	}(window, function factory(e) {
		"use strict";

		function t(t, e, n) {
			this.width = t || 0, this.height = e || 0, this.sortDirection = n || "downwardLeftToRight", this.reset()
		}
		var n = t.prototype;
		n.reset = function () {
			this.spaces = [];
			var t = new e({
				x: 0,
				y: 0,
				width: this.width,
				height: this.height
			});
			this.spaces.push(t), this.sorter = i[this.sortDirection] || i.downwardLeftToRight
		}, n.pack = function (t) {
			for (var e = 0; e < this.spaces.length; e++) {
				var n = this.spaces[e];
				if (n.canFit(t)) {
					this.placeInSpace(t, n);
					break
				}
			}
		}, n.columnPack = function (t) {
			for (var e = 0; e < this.spaces.length; e++) {
				var n = this.spaces[e];
				if (n.x <= t.x && n.x + n.width >= t.x + t.width && n.height >= t.height - .01) {
					t.y = n.y, this.placed(t);
					break
				}
			}
		}, n.rowPack = function (t) {
			for (var e = 0; e < this.spaces.length; e++) {
				var n = this.spaces[e];
				if (n.y <= t.y && n.y + n.height >= t.y + t.height && n.width >= t.width - .01) {
					t.x = n.x, this.placed(t);
					break
				}
			}
		}, n.placeInSpace = function (t, e) {
			t.x = e.x, t.y = e.y, this.placed(t)
		}, n.placed = function (t) {
			for (var e = [], n = 0; n < this.spaces.length; n++) {
				var i = this.spaces[n],
					r = i.getMaximalFreeRects(t);
				r ? e.push.apply(e, r) : e.push(i)
			}
			this.spaces = e, this.mergeSortSpaces()
		}, n.mergeSortSpaces = function () {
			t.mergeRects(this.spaces), this.spaces.sort(this.sorter)
		}, n.addSpace = function (t) {
			this.spaces.push(t), this.mergeSortSpaces()
		}, t.mergeRects = function (t) {
			var e = 0,
				n = t[e];
			t: for (; n;) {
				for (var i = 0, r = t[e + i]; r;) {
					if (r == n) i++;
					else {
						if (r.contains(n)) {
							t.splice(e, 1), n = t[e];
							continue t
						}
						n.contains(r) ? t.splice(e + i, 1) : i++
					}
					r = t[e + i]
				}
				n = t[++e]
			}
			return t
		};
		var i = {
			downwardLeftToRight: function (t, e) {
				return t.y - e.y || t.x - e.x
			},
			rightwardTopToBottom: function (t, e) {
				return t.x - e.x || t.y - e.y
			}
		};
		return t
	}),
	function (t, e) {
		t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
	}(window, function factory(t, e) {
		"use strict";
		var n = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform",
			i = function a() {
				t.Item.apply(this, arguments)
			},
			r = i.prototype = Object.create(t.Item.prototype),
			s = r._create;
		r._create = function () {
			s.call(this), this.rect = new e
		};
		var o = r.moveTo;
		return r.moveTo = function (t, e) {
			var n = Math.abs(this.position.x - t),
				i = Math.abs(this.position.y - e);
			this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && n < 1 && i < 1 ? this.goTo(t, e) : o.apply(this, arguments)
		}, r.enablePlacing = function () {
			this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), this.isTransitioning = !1, this.getWindowSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
		}, r.disablePlacing = function () {
			this.isPlacing = !1
		}, r.removeElem = function () {
			this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
		}, r.showDropPlaceholder = function () {
			var t = this.dropPlaceholder;
			t || ((t = this.dropPlaceholder = document.createElement("div")).className = "packery-drop-placeholder", t.style.position = "absolute"), t.style.width = this.size.width + "px", t.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(t)
		}, r.positionDropPlaceholder = function () {
			this.dropPlaceholder.style[n] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
		}, r.hideDropPlaceholder = function () {
			this.layout.element.removeChild(this.dropPlaceholder)
		}, i
	}),
	function (t, e) {
		t.Packery = e(t.getWindowSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
	}(window, function factory(u, t, d, e, n) {
		"use strict";

		function i(t, e) {
			return t.position.y - e.position.y || t.position.x - e.position.x
		}

		function r(t, e) {
			return t.position.x - e.position.x || t.position.y - e.position.y
		}

		function o(t, e) {
			var n = e.x - t.x,
				i = e.y - t.y;
			return Math.sqrt(n * n + i * i)
		}
		d.prototype.canFit = function (t) {
			return this.width >= t.width - 1 && this.height >= t.height - 1
		};
		var s = t.create("packery");
		s.Item = n;
		var a = s.prototype;
		a._create = function () {
			t.prototype._create.call(this), this.packer = new e, this.shiftPacker = new e, this.isEnabled = !0, this.dragItemCount = 0;
			var n = this;
			this.handleDraggabilly = {
				dragStart: function () {
					n.itemDragStart(this.element)
				},
				dragMove: function () {
					n.itemDragMove(this.element, this.position.x, this.position.y)
				},
				dragEnd: function () {
					n.itemDragEnd(this.element)
				}
			}, this.handleUIDraggable = {
				start: function i(t, e) {
					e && n.itemDragStart(t.currentTarget)
				},
				drag: function r(t, e) {
					e && n.itemDragMove(t.currentTarget, e.position.left, e.position.top)
				},
				stop: function s(t, e) {
					e && n.itemDragEnd(t.currentTarget)
				}
			}
		}, a._resetLayout = function () {
			var t, e, n;
			this.getWindowSize(), this._getMeasurements(), this._getOption("horizontal") ? (t = Infinity, e = this.size.innerHeight + this.gutter, n = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter, e = Infinity, n = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = t, this.packer.height = this.shiftPacker.height = e, this.packer.sortDirection = this.shiftPacker.sortDirection = n, this.packer.reset(), this.maxY = 0, this.maxX = 0
		}, a._getMeasurements = function () {
			this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
		}, a._getItemLayoutPosition = function (t) {
			if (this._setRectSize(t.element, t.rect), this.isShifting || 0 < this.dragItemCount) {
				var e = this._getPackMethod();
				this.packer[e](t.rect)
			} else this.packer.pack(t.rect);
			return this._setMaxXY(t.rect), t.rect
		}, a.shiftLayout = function () {
			this.isShifting = !0, this.layout(), delete this.isShifting
		}, a._getPackMethod = function () {
			return this._getOption("horizontal") ? "rowPack" : "columnPack"
		}, a._setMaxXY = function (t) {
			this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
		}, a._setRectSize = function (t, e) {
			var n = u(t),
				i = n.outerWidth,
				r = n.outerHeight;
			(i || r) && (i = this._applyGridGutter(i, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)), e.width = Math.min(i, this.packer.width), e.height = Math.min(r, this.packer.height)
		}, a._applyGridGutter = function (t, e) {
			if (!e) return t + this.gutter;
			var n = t % (e += this.gutter);
			return t = Math[n && n < 1 ? "round" : "ceil"](t / e) * e
		}, a._getContainerSize = function () {
			return this._getOption("horizontal") ? {
				width: this.maxX - this.gutter
			} : {
				height: this.maxY - this.gutter
			}
		}, a._manageStamp = function (t) {
			var e, n = this.getItem(t);
			if (n && n.isPlacing) e = n.rect;
			else {
				var i = this._getElementOffset(t);
				e = new d({
					x: this._getOption("originLeft") ? i.left : i.right,
					y: this._getOption("originTop") ? i.top : i.bottom
				})
			}
			this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
		}, a.sortItemsByPosition = function () {
			var t = this._getOption("horizontal") ? r : i;
			this.items.sort(t)
		}, a.fit = function (t, e, n) {
			var i = this.getItem(t);
			i && (this.stamp(i.element), i.enablePlacing(), this.updateShiftTargets(i), e = e === undefined ? i.rect.x : e, n = n === undefined ? i.rect.y : n, this.shift(i, e, n), this._bindFitEvents(i), i.moveTo(i.rect.x, i.rect.y), this.shiftLayout(), this.unstamp(i.element), this.sortItemsByPosition(), i.disablePlacing())
		}, a._bindFitEvents = function (t) {
			function e() {
				2 == ++i && n.dispatchEvent("fitComplete", null, [t])
			}
			var n = this,
				i = 0;
			t.once("layout", e), this.once("layoutComplete", e)
		}, a.resize = function () {
			this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
		}, a.needsResizeLayout = function () {
			var t = u(this.element),
				e = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
			return t[e] != this.size[e]
		}, a.resizeShiftPercentLayout = function () {
			var t = this._getItemsForLayout(this.items),
				e = this._getOption("horizontal"),
				n = e ? "y" : "x",
				i = e ? "height" : "width",
				r = e ? "rowHeight" : "columnWidth",
				s = e ? "innerHeight" : "innerWidth",
				o = this[r];
			if (o = o && o + this.gutter) {
				this._getMeasurements();
				var a = this[r] + this.gutter;
				t.forEach(function (t) {
					var e = Math.round(t.rect[n] / o);
					t.rect[n] = e * a
				})
			} else {
				var l = u(this.element)[s] + this.gutter,
					c = this.packer[i];
				t.forEach(function (t) {
					t.rect[n] = t.rect[n] / c * l
				})
			}
			this.shiftLayout()
		}, a.itemDragStart = function (t) {
			if (this.isEnabled) {
				this.stamp(t);
				var e = this.getItem(t);
				e && (e.enablePlacing(), e.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(e))
			}
		}, a.updateShiftTargets = function (t) {
			this.shiftPacker.reset(), this._getBoundingRect();
			var r = this._getOption("originLeft"),
				s = this._getOption("originTop");
			this.stamps.forEach(function (t) {
				var e = this.getItem(t);
				if (!e || !e.isPlacing) {
					var n = this._getElementOffset(t),
						i = new d({
							x: r ? n.left : n.right,
							y: s ? n.top : n.bottom
						});
					this._setRectSize(t, i), this.shiftPacker.placed(i)
				}
			}, this);
			var l, c = this._getOption("horizontal"),
				e = c ? "rowHeight" : "columnWidth",
				u = c ? "height" : "width";
			this.shiftTargetKeys = [], this.shiftTargets = [];
			var p = this[e];
			if (p = p && p + this.gutter) {
				var n = Math.ceil(t.rect[u] / p),
					i = Math.floor((this.shiftPacker[u] + this.gutter) / p);
				l = (i - n) * p;
				for (var o = 0; o < i; o++) this._addShiftTarget(o * p, 0, l)
			} else l = this.shiftPacker[u] + this.gutter - t.rect[u], this._addShiftTarget(0, 0, l);
			var a = this._getItemsForLayout(this.items),
				h = this._getPackMethod();
			a.forEach(function (t) {
				var e = t.rect;
				this._setRectSize(t.element, e), this.shiftPacker[h](e), this._addShiftTarget(e.x, e.y, l);
				var n = c ? e.x + e.width : e.x,
					i = c ? e.y : e.y + e.height;
				if (this._addShiftTarget(n, i, l), p)
					for (var r = Math.round(e[u] / p), s = 1; s < r; s++) {
						var o = c ? n : e.x + p * s,
							a = c ? e.y + p * s : i;
						this._addShiftTarget(o, a, l)
					}
			}, this)
		}, a._addShiftTarget = function (t, e, n) {
			var i = this._getOption("horizontal") ? e : t;
			if (!(0 !== i && n < i)) {
				var r = t + "," + e; - 1 != this.shiftTargetKeys.indexOf(r) || (this.shiftTargetKeys.push(r), this.shiftTargets.push({
					x: t,
					y: e
				}))
			}
		}, a.shift = function (t, e, n) {
			var i, r = Infinity,
				s = {
					x: e,
					y: n
				};
			this.shiftTargets.forEach(function (t) {
				var e = o(t, s);
				e < r && (i = t, r = e)
			}), t.rect.x = i.x, t.rect.y = i.y
		};
		var l = 120;
		a.itemDragMove = function (t, e, n) {
			function i() {
				s.shift(r, e, n), r.positionDropPlaceholder(), s.layout()
			}
			var r = this.isEnabled && this.getItem(t);
			if (r) {
				e -= this.size.paddingLeft, n -= this.size.paddingTop;
				var s = this,
					o = new Date;
				this._itemDragTime && o - this._itemDragTime < l ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(i, l)) : (i(), this._itemDragTime = o)
			}
		}, a.itemDragEnd = function (t) {
			function e() {
				2 == ++i && (n.element.classList.remove("is-positioning-post-drag"), n.hideDropPlaceholder(), r.dispatchEvent("dragItemPositioned", null, [n]))
			}
			var n = this.isEnabled && this.getItem(t);
			if (n) {
				clearTimeout(this.dragTimeout), n.element.classList.add("is-positioning-post-drag");
				var i = 0,
					r = this;
				n.once("layout", e), this.once("layoutComplete", e), n.moveTo(n.rect.x, n.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), n.disablePlacing(), this.unstamp(n.element)
			}
		}, a.bindDraggabillyEvents = function (t) {
			this._bindDraggabillyEvents(t, "on")
		}, a.unbindDraggabillyEvents = function (t) {
			this._bindDraggabillyEvents(t, "off")
		}, a._bindDraggabillyEvents = function (t, e) {
			var n = this.handleDraggabilly;
			t[e]("dragStart", n.dragStart), t[e]("dragMove", n.dragMove), t[e]("dragEnd", n.dragEnd)
		}, a.bindUIDraggableEvents = function (t) {
			this._bindUIDraggableEvents(t, "on")
		}, a.unbindUIDraggableEvents = function (t) {
			this._bindUIDraggableEvents(t, "off")
		}, a._bindUIDraggableEvents = function (t, e) {
			var n = this.handleUIDraggable;
			t[e]("dragstart", n.start)[e]("drag", n.drag)[e]("dragstop", n.stop)
		};
		var c = a.destroy;
		return a.destroy = function () {
			c.apply(this, arguments), this.isEnabled = !1
		}, s.Rect = d, s.Packer = e, s
	}),
	function (t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function (c) {
		"use strict";
		var a = window.Slick || {};
		(a = function () {
			function t(t, e) {
				var n, i = this;
				i.defaults = {
					accessibility: !0,
					adaptiveHeight: !1,
					appendArrows: c(t),
					appendDots: c(t),
					arrows: !0,
					asNavFor: null,
					prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
					nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function (t, e) {
						return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
					},
					dots: !1,
					dotsClass: "slick-dots",
					draggable: !0,
					easing: "linear",
					edgeFriction: .35,
					fade: !1,
					focusOnSelect: !1,
					infinite: !0,
					initialSlide: 0,
					lazyLoad: "ondemand",
					mobileFirst: !1,
					pauseOnHover: !0,
					pauseOnDotsHover: !1,
					respondTo: "window",
					responsive: null,
					rows: 1,
					rtl: !1,
					slide: "",
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 500,
					swipe: !0,
					swipeToSlide: !1,
					touchMove: !0,
					touchThreshold: 5,
					useCSS: !0,
					useTransform: !1,
					variableWidth: !1,
					vertical: !1,
					verticalSwiping: !1,
					waitForAnimate: !0,
					zIndex: 1e3
				}, i.initials = {
					animating: !1,
					dragging: !1,
					autoPlayTimer: null,
					currentDirection: 0,
					currentLeft: null,
					currentSlide: 0,
					direction: 1,
					$dots: null,
					listWidth: null,
					listHeight: null,
					loadIndex: 0,
					$nextArrow: null,
					$prevArrow: null,
					slideCount: null,
					slideWidth: null,
					$slideTrack: null,
					$slides: null,
					sliding: !1,
					slideOffset: 0,
					swipeLeft: null,
					$list: null,
					touchObject: {},
					transformsEnabled: !1,
					unslicked: !1
				}, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.hidden = "hidden", i.paused = !1, i.stopped = !1, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(t), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = c(t).data("slick") || {}, i.options = c.extend({}, i.defaults, n, e), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, "undefined" != typeof document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.instanceUid = r++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0), i.checkResponsive(!0)
			}
			var r = 0;
			return t
		}()).prototype.addSlide = a.prototype.slickAdd = function (t, e, n) {
			var i = this;
			if ("boolean" == typeof e) n = e, e = null;
			else if (e < 0 || e >= i.slideCount) return !1;
			i.unload(), "number" == typeof e ? 0 === e && 0 === i.$slides.length ? c(t).appendTo(i.$slideTrack) : n ? c(t).insertBefore(i.$slides.eq(e)) : c(t).insertAfter(i.$slides.eq(e)) : !0 === n ? c(t).prependTo(i.$slideTrack) : c(t).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function (t, e) {
				c(e).attr("data-slick-index", t)
			}), i.$slidesCache = i.$slides, i.reinit()
		}, a.prototype.animateHeight = function () {
			var t = this;
			if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
				var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
				t.$list.animate({
					height: e
				}, t.options.speed)
			}
		}, a.prototype.animateSlide = function (t, e) {
			var n = {},
				i = this;
			i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (t = -t), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
				left: t
			}, i.options.speed, i.options.easing, e) : i.$slideTrack.animate({
				top: t
			}, i.options.speed, i.options.easing, e) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
				animStart: i.currentLeft
			}).animate({
				animStart: t
			}, {
				duration: i.options.speed,
				easing: i.options.easing,
				step: function (t) {
					t = Math.ceil(t), !1 === i.options.vertical ? n[i.animType] = "translate(" + t + "px, 0px)" : n[i.animType] = "translate(0px," + t + "px)", i.$slideTrack.css(n)
				},
				complete: function () {
					e && e.call()
				}
			})) : (i.applyTransition(), t = Math.ceil(t), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(n), e && setTimeout(function () {
				i.disableTransition(), e.call()
			}, i.options.speed))
		}, a.prototype.asNavFor = function (e) {
			var t = this,
				n = t.options.asNavFor;
			n && null !== n && (n = c(n).not(t.$slider)), null !== n && "object" == typeof n && n.each(function () {
				var t = c(this).slick("getSlick");
				t.unslicked || t.slideHandler(e, !0)
			})
		}, a.prototype.applyTransition = function (t) {
			var e = this,
				n = {};
			!1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
		}, a.prototype.autoPlay = function () {
			var t = this;
			t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && !0 !== t.paused && !0 !== t.stopped && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
		}, a.prototype.autoPlayClear = function () {
			var t = this;
			t.autoPlayTimer && clearInterval(t.autoPlayTimer)
		}, a.prototype.autoPlayIterator = function () {
			var t = this;
			!1 === t.options.infinite ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 == 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
		}, a.prototype.buildArrows = function () {
			var t = this;
			!0 === t.options.arrows && (t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, a.prototype.buildDots = function () {
			var t, e, n = this;
			if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
				for (e = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1) e += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
				e += "</ul>", n.$dots = c(e).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
			}
		}, a.prototype.buildOut = function () {
			var t = this;
			t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, e) {
				c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "")
			}), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
		}, a.prototype.buildRows = function () {
			var t, e, n, i, r, s, o, a = this;
			if (i = document.createDocumentFragment(), s = a.$slider.children(), 1 < a.options.rows) {
				for (o = a.options.slidesPerRow * a.options.rows, r = Math.ceil(s.length / o), t = 0; t < r; t++) {
					var l = document.createElement("div");
					for (e = 0; e < a.options.rows; e++) {
						var c = document.createElement("div");
						for (n = 0; n < a.options.slidesPerRow; n++) {
							var u = t * o + (e * a.options.slidesPerRow + n);
							s.get(u) && c.appendChild(s.get(u))
						}
						l.appendChild(c)
					}
					i.appendChild(l)
				}
				a.$slider.html(i), a.$slider.children().children().children().css({
					width: 100 / a.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, a.prototype.checkResponsive = function (t, e) {
			var n, i, r, s = this,
				o = !1,
				a = s.$slider.width(),
				l = window.innerWidth || c(window).width();
			if ("window" === s.respondTo ? r = l : "slider" === s.respondTo ? r = a : "min" === s.respondTo && (r = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
				for (n in i = null, s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (i = s.breakpoints[n]) : r > s.breakpoints[n] && (i = s.breakpoints[n]));
				null !== i ? null !== s.activeBreakpoint ? (i !== s.activeBreakpoint || e) && (s.activeBreakpoint = i, "unslick" === s.breakpointSettings[i] ? s.unslick(i) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[i]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), o = i) : (s.activeBreakpoint = i, "unslick" === s.breakpointSettings[i] ? s.unslick(i) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[i]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), o = i) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), o = i), t || !1 === o || s.$slider.trigger("breakpoint", [s, o])
			}
		}, a.prototype.changeSlide = function (t, e) {
			var n, i, r = this,
				s = c(t.target);
			switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
				case "previous":
					i = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - i, !1, e);
					break;
				case "next":
					i = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + i, !1, e);
					break;
				case "index":
					var o = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
					r.slideHandler(r.checkNavigable(o), !1, e), s.children().trigger("focus");
					break;
				default:
					return
			}
		}, a.prototype.checkNavigable = function (t) {
			var e, n;
			if (n = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
			else
				for (var i in e) {
					if (t < e[i]) {
						t = n;
						break
					}
					n = e[i]
				}
			return t
		}, a.prototype.cleanUpEvents = function () {
			var t = this;
			t.options.dots && null !== t.$dots && (c("li", t.$dots).off("click.slick", t.changeSlide), !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && c("li", t.$dots).off("mouseenter.slick", c.proxy(t.setPaused, t, !0)).off("mouseleave.slick", c.proxy(t.setPaused, t, !1))), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), c(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", c.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", c.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler), c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), c(window).off("resize.slick.slick-" + t.instanceUid, t.resize), c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
		}, a.prototype.cleanUpRows = function () {
			var t, e = this;
			1 < e.options.rows && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.html(t))
		}, a.prototype.clickHandler = function (t) {
			!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
		}, a.prototype.destroy = function (t) {
			var e = this;
			e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), c(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
				c(this).attr("style", c(this).data("originalStyling"))
			}), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
		}, a.prototype.disableTransition = function (t) {
			var e = this,
				n = {};
			n[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
		}, a.prototype.fadeSlide = function (t, e) {
			var n = this;
			!1 === n.cssTransitions ? (n.$slides.eq(t).css({
				zIndex: n.options.zIndex
			}), n.$slides.eq(t).animate({
				opacity: 1
			}, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
				opacity: 1,
				zIndex: n.options.zIndex
			}), e && setTimeout(function () {
				n.disableTransition(t), e.call()
			}, n.options.speed))
		}, a.prototype.fadeSlideOut = function (t) {
			var e = this;
			!1 === e.cssTransitions ? e.$slides.eq(t).animate({
				opacity: 0,
				zIndex: e.options.zIndex - 2
			}, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
				opacity: 0,
				zIndex: e.options.zIndex - 2
			}))
		}, a.prototype.filterSlides = a.prototype.slickFilter = function (t) {
			var e = this;
			null !== t && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
		}, a.prototype.getCurrent = a.prototype.slickCurrentSlide = function () {
			return this.currentSlide
		}, a.prototype.getDotCount = function () {
			var t = this,
				e = 0,
				n = 0,
				i = 0;
			if (!0 === t.options.infinite)
				for (; e < t.slideCount;) ++i, e = n + t.options.slidesToShow, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			else if (!0 === t.options.centerMode) i = t.slideCount;
			else
				for (; e < t.slideCount;) ++i, e = n + t.options.slidesToShow, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			return i - 1
		}, a.prototype.getLeft = function (t) {
			var e, n, i, r = this,
				s = 0;
			return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, s = n * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (t - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (t + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0), !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * n * -1 + s, !0 === r.options.variableWidth && (e = (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow))[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (e = (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1))[0] ? -1 * i[0].offsetLeft : 0, e += (r.$list.width() - i.outerWidth()) / 2)), e
		}, a.prototype.getOption = a.prototype.slickGetOption = function (t) {
			return this.options[t]
		}, a.prototype.getNavigableIndexes = function () {
			var t, e = this,
				n = 0,
				i = 0,
				r = [];
			for (!1 === e.options.infinite ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); n < t;) r.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			return r
		}, a.prototype.getSlick = function () {
			return this
		}, a.prototype.getSlideCount = function () {
			var n, i, r = this;
			return i = !0 === r.options.centerMode ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, !0 === r.options.swipeToSlide ? (r.$slideTrack.find(".slick-slide").each(function (t, e) {
				if (e.offsetLeft - i + c(e).outerWidth() / 2 > -1 * r.swipeLeft) return n = e, !1
			}), Math.abs(c(n).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
		}, a.prototype.goTo = a.prototype.slickGoTo = function (t, e) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(t)
				}
			}, e)
		}, a.prototype.init = function (t) {
			var e = this;
			c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA()
		}, a.prototype.initArrowEvents = function () {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
				message: "previous"
			}, t.changeSlide), t.$nextArrow.on("click.slick", {
				message: "next"
			}, t.changeSlide))
		}, a.prototype.initDotEvents = function () {
			var t = this;
			!0 === t.options.dots && t.slideCount > t.options.slidesToShow && c("li", t.$dots).on("click.slick", {
				message: "index"
			}, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.setPaused, t, !0)).on("mouseleave.slick", c.proxy(t.setPaused, t, !1))
		}, a.prototype.initializeEvents = function () {
			var t = this;
			t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), c(document).on(t.visibilityChange, c.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", c.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", c.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)), c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)), c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
		}, a.prototype.initUI = function () {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show(), !0 === t.options.autoplay && t.autoPlay()
		}, a.prototype.keyHandler = function (t) {
			var e = this;
			t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
				data: {
					message: "previous"
				}
			}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
				data: {
					message: "next"
				}
			}))
		}, a.prototype.lazyLoad = function () {
			function t(t) {
				c("img[data-lazy]", t).each(function () {
					var e = c(this),
						t = c(this).attr("data-lazy"),
						n = document.createElement("img");
					n.onload = function () {
						e.animate({
							opacity: 0
						}, 100, function () {
							e.attr("src", t).animate({
								opacity: 1
							}, 200, function () {
								e.removeAttr("data-lazy").removeClass("slick-loading")
							})
						})
					}, n.onerror = function () {
						var t = e.parents(".feed-item");
						console.log("Juicer: post with id " + t.data("id") + " has a broken image. Making into text post."), t.removeClass("image-post").removeClass("j-video").addClass("words"), e.parents(".j-image").remove()
					}, n.src = t
				})
			}
			var e, n, i = this;
			!0 === i.options.centerMode ? !0 === i.options.infinite ? n = (e = i.currentSlide + (i.options.slidesToShow / 2 + 1)) + i.options.slidesToShow + 2 : (e = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)), n = i.options.slidesToShow / 2 + 1 + 2 + i.currentSlide) : (e = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide, n = (e -= i.options.slidesToShow) + 2 * i.options.slidesToShow, !0 === i.options.fade && (0 < e && e--, n <= i.slideCount && n++)), t(i.$slider.find(".slick-slide").slice(e, n)), i.slideCount <= i.options.slidesToShow ? t(i.$slider.find(".slick-slide")) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? t(i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow)) : 0 === i.currentSlide && t(i.$slider.find(".slick-cloned").slice(-1 * i.options.slidesToShow))
		}, a.prototype.loadSlider = function () {
			var t = this;
			t.setPosition(), t.$slideTrack.css({
				opacity: 1
			}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
		}, a.prototype.next = a.prototype.slickNext = function () {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, a.prototype.orientationChange = function () {
			var t = this;
			t.checkResponsive(), t.setPosition()
		}, a.prototype.pause = a.prototype.slickPause = function () {
			var t = this;
			t.autoPlayClear(), t.paused = !0
		}, a.prototype.stop = a.prototype.slickStop = function () {
			var t = this;
			t.autoPlayClear(), t.stopped = !0
		}, a.prototype.play = a.prototype.slickPlay = function () {
			var t = this;
			t.paused = !1, t.stopped = !1, t.autoPlay()
		}, a.prototype.postSlide = function (t) {
			var e = this;
			e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), !(e.swipeLeft = null) === e.options.autoplay && !1 === e.paused && e.autoPlay(), !0 === e.options.accessibility && e.initADA()
		}, a.prototype.prev = a.prototype.slickPrev = function () {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, a.prototype.preventDefault = function (t) {
			t.preventDefault()
		}, a.prototype.progressiveLazyLoad = function () {
			var t, e = this;
			0 < c("img[data-lazy]", e.$slider).length && ((t = c("img[data-lazy]", e.$slider).first()).attr("src", null), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function () {
				t.removeAttr("data-lazy"), e.progressiveLazyLoad(), !0 === e.options.adaptiveHeight && e.setPosition()
			}).error(function () {
				t.removeAttr("data-lazy"), e.progressiveLazyLoad()
			}))
		}, a.prototype.refresh = function (t) {
			var e, n, i = this;
			n = i.slideCount - i.options.slidesToShow, i.options.infinite || (i.slideCount <= i.options.slidesToShow ? i.currentSlide = 0 : i.currentSlide > n && (i.currentSlide = n)), e = i.currentSlide, i.destroy(!0), c.extend(i, i.initials, {
				currentSlide: e
			}), i.init(), t || i.changeSlide({
				data: {
					message: "index",
					index: e
				}
			}, !1)
		}, a.prototype.registerBreakpoints = function () {
			var t, e, n, i = this,
				r = i.options.responsive || null;
			if ("array" === c.type(r) && r.length) {
				for (t in i.respondTo = i.options.respondTo || "window", r)
					if (n = i.breakpoints.length - 1, e = r[t].breakpoint, r.hasOwnProperty(t)) {
						for (; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === e && i.breakpoints.splice(n, 1), n--;
						i.breakpoints.push(e), i.breakpointSettings[e] = r[t].settings
					}
				i.breakpoints.sort(function (t, e) {
					return i.options.mobileFirst ? t - e : e - t
				})
			}
		}, a.prototype.reinit = function () {
			var t = this;
			t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), !0 === t.options.autoplay && t.focusHandler()
		}, a.prototype.resize = function () {
			var t = this;
			c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
				t.windowWidth = c(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
			}, 50))
		}, a.prototype.removeSlide = a.prototype.slickRemove = function (t, e, n) {
			var i = this;
			if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : i.slideCount - 1 : !0 === e ? --t : t, i.slideCount < 1 || t < 0 || t > i.slideCount - 1) return !1;
			i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
		}, a.prototype.setCSS = function (t) {
			var e, n, i = this,
				r = {};
			!0 === i.options.rtl && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", r[i.positionProp] = t, !1 === i.transformsEnabled || (!(r = {}) === i.cssTransitions ? r[i.animType] = "translate(" + e + ", " + n + ")" : r[i.animType] = "translate3d(" + e + ", " + n + ", 0px)"), i.$slideTrack.css(r)
		}, a.prototype.setDimensions = function () {
			var t = this;
			!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
				padding: "0px " + t.options.centerPadding
			}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
				padding: t.options.centerPadding + " 0px"
			})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
			var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
			!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
		}, a.prototype.setFade = function () {
			var n, i = this;
			i.$slides.each(function (t, e) {
				n = i.slideWidth * t * -1, !0 === i.options.rtl ? c(e).css({
					position: "relative",
					right: n,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				}) : c(e).css({
					position: "relative",
					left: n,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				})
			}), i.$slides.eq(i.currentSlide).css({
				zIndex: i.options.zIndex - 1,
				opacity: 1
			})
		}, a.prototype.setHeight = function () {
			var t = this;
			if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
				var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
				t.$list.css("height", e)
			}
		}, a.prototype.setOption = a.prototype.slickSetOption = function (t, e, n) {
			var i, r, s = this;
			if ("responsive" === t && "array" === c.type(e))
				for (r in e)
					if ("array" !== c.type(s.options.responsive)) s.options.responsive = [e[r]];
					else {
						for (i = s.options.responsive.length - 1; 0 <= i;) s.options.responsive[i].breakpoint === e[r].breakpoint && s.options.responsive.splice(i, 1), i--;
						s.options.responsive.push(e[r])
					}
			else s.options[t] = e;
			!0 === n && (s.unload(), s.reinit())
		}, a.prototype.setPosition = function () {
			var t = this;
			t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
		}, a.prototype.setProps = function () {
			var t = this,
				e = document.body.style;
			t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass(
				"slick-vertical") : t.$slider.removeClass("slick-vertical"), e.WebkitTransition === undefined && e.MozTransition === undefined && e.msTransition === undefined || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), e.OTransform !== undefined && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", e.perspectiveProperty === undefined && e.webkitPerspective === undefined && (t.animType = !1)), e.MozTransform !== undefined && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", e.perspectiveProperty === undefined && e.MozPerspective === undefined && (t.animType = !1)), e.webkitTransform !== undefined && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", e.perspectiveProperty === undefined && e.webkitPerspective === undefined && (t.animType = !1)), e.msTransform !== undefined && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", e.msTransform === undefined && (t.animType = !1)), e.transform !== undefined && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
		}, a.prototype.setSlideClasses = function (t) {
			var e, n, i, r, s = this;
			n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode ? (e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e <= t && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + t, n.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (r = s.slideCount % s.options.slidesToShow, i = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
		}, a.prototype.setupInfinite = function () {
			var t, e, n, i = this;
			if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (e = null, i.slideCount > i.options.slidesToShow)) {
				for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, t = i.slideCount; t > i.slideCount - n; t -= 1) e = t - 1, c(i.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
				for (t = 0; t < n; t += 1) e = t, c(i.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
				i.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
					c(this).attr("id", "")
				})
			}
		}, a.prototype.setPaused = function (t) {
			var e = this;
			!0 === e.options.autoplay && !0 === e.options.pauseOnHover && ((e.paused = t) ? e.autoPlayClear() : e.autoPlay())
		}, a.prototype.selectHandler = function (t) {
			var e = this,
				n = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"),
				i = parseInt(n.attr("data-slick-index"));
			if (i || (i = 0), e.slideCount <= e.options.slidesToShow) return e.setSlideClasses(i), void e.asNavFor(i);
			e.slideHandler(i)
		}, a.prototype.slideHandler = function (t, e, n) {
			var i, r, s, o, a = null,
				l = this;
			if (e = e || !1, (!0 !== l.animating || !0 !== l.options.waitForAnimate) && !(!0 === l.options.fade && l.currentSlide === t || l.slideCount <= l.options.slidesToShow))
				if (!1 === e && l.asNavFor(t), i = t, a = l.getLeft(i), o = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? o : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (t < 0 || t > l.getDotCount() * l.options.slidesToScroll)) !1 === l.options.fade && (i = l.currentSlide, !0 !== n ? l.animateSlide(o, function () {
					l.postSlide(i)
				}) : l.postSlide(i));
				else if (!1 === l.options.infinite && !0 === l.options.centerMode && (t < 0 || t > l.slideCount - l.options.slidesToScroll)) !1 === l.options.fade && (i = l.currentSlide, !0 !== n ? l.animateSlide(o, function () {
				l.postSlide(i)
			}) : l.postSlide(i));
			else {
				if (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), r = i < 0 ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, r]), s = l.currentSlide, l.currentSlide = r, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade) return !0 !== n ? (l.fadeSlideOut(s), l.fadeSlide(r, function () {
					l.postSlide(r)
				})) : l.postSlide(r), void l.animateHeight();
				!0 !== n ? l.animateSlide(a, function () {
					l.postSlide(r)
				}) : l.postSlide(r)
			}
		}, a.prototype.startLoad = function () {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
		}, a.prototype.swipeDirection = function () {
			var t, e, n, i, r = this;
			return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(e, t), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i ? !1 === r.options.rtl ? "left" : "right" : i <= 360 && 315 <= i ? !1 === r.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? 35 <= i && i <= 135 ? "left" : "right" : "vertical"
		}, a.prototype.swipeEnd = function () {
			var t, e = this;
			if (e.dragging = !1, e.shouldClick = !(10 < e.touchObject.swipeLength), e.touchObject.curX === undefined) return !1;
			if (!0 === e.touchObject.edgeHit && e.$slider.trigger("edge", [e, e.swipeDirection()]), e.touchObject.swipeLength >= e.touchObject.minSwipe) switch (e.swipeDirection()) {
				case "left":
					t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(), e.slideHandler(t), e.currentDirection = 0, e.touchObject = {}, e.$slider.trigger("swipe", [e, "left"]);
					break;
				case "right":
					t = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(), e.slideHandler(t), e.currentDirection = 1, e.touchObject = {}, e.$slider.trigger("swipe", [e, "right"])
			} else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), e.touchObject = {})
		}, a.prototype.swipeHandler = function (t) {
			var e = this;
			if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && t.originalEvent.touches !== undefined ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
				case "start":
					e.swipeStart(t);
					break;
				case "move":
					e.swipeMove(t);
					break;
				case "end":
					e.swipeEnd(t)
			}
		}, a.prototype.swipeMove = function (t) {
			var e, n, i, r, s, o = this;
			return s = t.originalEvent !== undefined ? t.originalEvent.touches : null, !(!o.dragging || s && 1 !== s.length) && (e = o.getLeft(o.currentSlide), o.touchObject.curX = s !== undefined ? s[0].pageX : t.clientX, o.touchObject.curY = s !== undefined ? s[0].pageY : t.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), !0 === o.options.verticalSwiping && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), "vertical" !== (n = o.swipeDirection()) ? (t.originalEvent !== undefined && 4 < o.touchObject.swipeLength && t.preventDefault(), r = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (r = o.touchObject.curY > o.touchObject.startY ? 1 : -1), i = o.touchObject.swipeLength, (o.touchObject.edgeHit = !1) === o.options.infinite && (0 === o.currentSlide && "right" === n || o.currentSlide >= o.getDotCount() && "left" === n) && (i = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = e + i * r : o.swipeLeft = e + i * (o.$list.height() / o.listWidth) * r, !0 === o.options.verticalSwiping && (o.swipeLeft = e + i * r), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))) : void 0)
		}, a.prototype.swipeStart = function (t) {
			var e, n = this;
			if (1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
			t.originalEvent !== undefined && t.originalEvent.touches !== undefined && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = e !== undefined ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = e !== undefined ? e.pageY : t.clientY, n.dragging = !0
		}, a.prototype.unfilterSlides = a.prototype.slickUnfilter = function () {
			var t = this;
			null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
		}, a.prototype.unload = function () {
			var t = this;
			c(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, a.prototype.unslick = function (t) {
			var e = this;
			e.$slider.trigger("unslick", [e, t]), e.destroy()
		}, a.prototype.updateArrows = function () {
			var t = this;
			Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, a.prototype.updateDots = function () {
			var t = this;
			null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
		}, a.prototype.visibility = function () {
			var t = this;
			document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : !0 === t.options.autoplay && (t.paused = !1, t.autoPlay())
		}, a.prototype.initADA = function () {
			var n = this;
			n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), n.$slideTrack.attr("role", "listbox"), n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function (t) {
				var e = "slick-slide" + n.instanceUid + t;
				c(this).attr({
					role: "option",
					"aria-describedby": e
				}), c(this).find(".j-text").attr("id", e)
			}), null !== n.$dots && n.$dots.attr("role", "tablist").find("li").each(function (t) {
				c(this).attr({
					role: "presentation",
					"aria-selected": "false",
					"aria-controls": "navigation" + n.instanceUid + t,
					id: "slick-slide" + n.instanceUid + t
				})
			}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), n.activateADA()
		}, a.prototype.activateADA = function () {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, a.prototype.focusHandler = function () {
			var n = this;
			n.$slider.on("focus.slick blur.slick", "*", function (t) {
				t.stopImmediatePropagation();
				var e = c(this);
				setTimeout(function () {
					n.isPlay && (e.is(":focus") ? (n.autoPlayClear(), n.paused = !0) : (n.paused = !1, n.autoPlay()))
				}, 0)
			})
		}, c.fn.slick = function (t) {
			var e, n, i = this,
				r = t,
				s = Array.prototype.slice.call(arguments, 1),
				o = i.length;
			for (e = 0; e < o; e++)
				if ("object" == typeof r || void 0 === r ? i[e].slick = new a(i[e], r) : n = i[e].slick[r].apply(i[e].slick, s), void 0 !== n) return n;
			return i
		}
	}),
	function () {
		window.Juicer = {
			Models: {},
			Collections: {},
			Views: {},
			Active: [],
			initialize: function () {
				return _u.each(jQuery(".juicer-feed"), function (t) {
					var e, n;
					if ((e = jQuery(t)).is(":visible") && !e.hasClass("j-post-overlay")) return e.hasClass("j-initialized") ? void 0 : (n = new Juicer.Views.Feed({
						el: t
					}).render(), Juicer.Active.push(n), e.addClass("j-initialized"))
				})
			},
			remove: function () {
				return clearInterval(window.jInterval), _u.each(Juicer.Active, function (t) {
					return t.close()
				}), window.Juicer.Active = []
			}
		}
	}.call(this),
	function () {
		jQuery(document).ready(function () {
			var t;
			return t = jQuery.fn.jquery.split("."), "01.07" <= jQuery.map(t, function (t) {
				return ("0" + t).slice(-2)
			}).join(".") ? (0 < jQuery(".juicer-feed").length && Juicer.initialize(), window.jInterval = setInterval(function () {
				var t;
				if (0 < jQuery(".juicer-feed").length && (t = _u.map(jQuery(".juicer-feed"), function (t) {
						return jQuery(t).hasClass("j-initialized")
					}), !!_u.contains(t, !1))) return Juicer.initialize()
			}, 1e3)) : jQuery(".juicer-feed").before("<h1>You need to have at least jQuery 1.7 installed for the Juicer plugin to work. Please <a href='https://www.juicer.io/contact'>contact us</a> with any questions.</h1>")
		})
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.SubView = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.className = "opened-sidebar-option", e.prototype.title = "Feed Options", e.prototype.initialize = function (t) {
				return this.feed = t.feed, this.sidebarView = t.sidebarView, this.$target = t.$target, this.feedView = t.feedView, this.events = _u.extend({}, this.inheritedEvents, this.events), this.delegateEvents()
			}, e.prototype.inheritedEvents = {
				"click .close-subview": "close"
			}, e.prototype.render = function () {
				return this.renderTemplate(), this.renderTitle(), this.$target.after(this.el), setTimeout((t = this, function () {
					return t.$el.addClass("visible")
				}), 100);
				var t
			}, e.prototype.renderTemplate = function () {
				return this.$el.html(this.template({
					feed: this.feed
				}))
			}, e.prototype.renderTitle = function () {
				return this.$el.prepend(this.titleTemplate())
			}, e.prototype.titleTemplate = function () {
				return "<h2 class='subview-title relative tac uc bold bg-nav-header py-25'><a class='close-subview absolute sprite'>Close</a>" + this.title + "</h2>"
			}, e.prototype.close = function () {
				return this.$el.removeClass("visible"), this.sidebarView.closeSubView(), setTimeout((t = this, function () {
					return t.remove()
				}), 500);
				var t
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.SubViewSlide = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.className = "sliding-sidebar-option", e.prototype.render = function () {
				return this.renderTemplate(), this.$el.css({
					display: "none"
				}), this.$target.after(this.el), this.$el.slideDown()
			}, e.prototype.close = function () {
				return this.sidebarView.closeSubView(), this.$el.slideUp((t = this, function () {
					return t.remove()
				}));
				var t
			}, e
		}(Juicer.Views.SubView)
	}.call(this),
	function () {
		Juicer.Helpers = {
			renderPartial: function (t, e) {
				var n;
				null == e && (e = {}), (t = t.split("/"))[t.length - 1] = "_" + t[t.length - 1], t = t.join("/");
				try {
					return JST["partials/" + t](e)
				} catch (i) {
					return n = i, console.log("Sorry, something went wrong with the partial: '" + t + "'"), console.log(n), ""
				}
			},
			numberWithCommas: function (t) {
				return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			},
			fullDate: function (t, e, n) {
				if (null == e && (e = "%-m/%-d/%y at %-l:%M%p"), null == n && (n = !0), null != t) return t = new Date(t), n && (isNaN(Date.parse(t.toLocaleString())) || (t = new Date(t.toLocaleString()))), "undefined" == typeof strftime ? t : strftime(e, t)
			},
			prettify: function (t) {
				return t = (t = t.replace("-", " ")).replace("_", " "), this.capitalizeEachWord(t)
			},
			capitalizeEachWord: function (t) {
				return t.replace(/\w\S*/g, function (t) {
					return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
				})
			},
			timeAgo: function (t) {
				var e, n;
				return t = new Date(t), n = Math.floor((new Date - t) / 1e3), 1 < (e = Math.floor(n / 31536e3)) ? e + "y" : 1 < (e = Math.floor(n / 2592e3)) ? e + "mo" : 1 < (e = Math.floor(n / 86400)) ? e + "d" : 1 < (e = Math.floor(n / 3600)) ? e + "h" : 1 < (e = Math.floor(n / 60)) ? e + "m" : Math.floor(n) + "s"
			},
			sample: function (t) {
				return t[Math.floor(Math.random() * t.length)]
			},
			confirm: function (t) {
				return null != window.confirmed || !!confirm(t) && (window.confirmed = !0)
			},
			format: function (t) {
				return null == t ? null : (t = t.replace(/\r\n?/, "\n"), 0 < (t = jQuery.trim(t)).length && (t = (t = "<p>" + (t = (t = (t = t.replace(/\n\n+/g, "</p><p>")).replace(/\n/g, "<br />")).replace(this.xss, "")) + "</p>").autoLink()), t)
			},
			rgb2hex: function (t) {
				return /^#[0-9A-F]{6}$/i.test(t) ? t : (t = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + this.hex(t[1]) + this.hex(t[2]) + this.hex(t[3]) : "#"
			},
			hex: function (t) {
				return ("0" + parseInt(t).toString(16)).slice(-2)
			},
			xss: /javascript|onerror|alert|iframe|js|script|console|confirm|cookie|java|onmouseover|eval|document|window/gi
		}
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.FormView = function (t) {
			function e() {
				this.invalid = n(this.invalid, this), this.valid = n(this.valid, this), this.prepareModel(), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.delegateEvents = function (t) {
				return this.events = _u.extend(this._baseEvents(), _u.result(this, "events")), e.__super__.delegateEvents.call(this, t)
			}, e.prototype._baseEvents = function () {
				return {
					"change [data-validation]": this.validateField,
					"keyup [data-validation].invalid": this.validateField,
					submit: this.processForm,
					"click input[type=submit]": this.processForm
				}
			}, e.prototype.prepareModel = function () {
				return this.model = this.createModel(), this.setupValidation()
			}, e.prototype.createModel = function () {
				throw new Error("implement #createModel in your FormView subclass to return a JuicerBackbone model")
			}, e.prototype.namespace = null, e.prototype.loadingMessage = "Loading...", e.prototype.setupValidation = function () {
				return JuicerBackbone.Validation.unbind(this), JuicerBackbone.Validation.bind(this, {
					model: this.model,
					valid: this.valid,
					invalid: this.invalid
				})
			}, e.prototype.valid = function (t, e) {
				return this.removeErrorMessage(e), this.$("[data-validation=" + e + "]").removeClass("invalid").addClass("valid")
			}, e.prototype.invalid = function (t, e, n) {
				return this.removeErrorMessage(e), this.$("[data-validation=" + e + "]").removeClass("valid").addClass("invalid").parents(".form-field").append("<small class='error " + e + "'>" + n + "</small>")
			}, e.prototype.showActivityIndicator = function (t) {
				return this.submit = t, this.submit.attr("disabled", "disabled"), this.submitMessage = this.submit.val(), this.submit.val(this.loadingMessage)
			}, e.prototype.hideActivityIndicator = function () {
				return this.submitMessage && this.submit.val(this.submitMessage), this.submit.removeAttr("disabled")
			}, e.prototype.removeErrorMessage = function (t) {
				return this.$(".error." + t).remove()
			}, e.prototype.validateField = function (t) {
				var e, n, i;
				return n = $(t.target).attr("data-validation"), i = $(t.target).val(), (e = this.model.preValidate(n, i)) ? this.invalid(this, n, e) : this.valid(this, n)
			}, e.prototype.processForm = function (t) {
				return t.preventDefault(), this.showActivityIndicator($(t.target)), this.updateModel(), this.submitForm()
			}, e.prototype.updateModel = function () {
				var t;
				return t = JuicerBackbone.Syphon.serialize(this), this.model.set(t[this.namespace])
			}, e.prototype.submitForm = function () {
				return this.model.validate() ? this.hideActivityIndicator() : this.$el[0].submit()
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.admin_downgrade = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, t, n, i;
						return e = "", t = this.action.match("delete") ? "Delete" : "Downgrade", e += '<div class="tac p-30"><h3 class="light fs-2 tc-orange mb-25">', e += this.escape(t), e += ' User</h3><form action="', e += this.escape(this.action), e += '" method="post"><input name="authenticity_token" type="hidden" value="', e += this.escape(this.csrf), e += '" /><input name="user_id" type="hidden" value="', e += this.escape(this.userId), e += '" /><div class="select mb-30"><select name="churn[reason]"><option>Why are they ', e += this.escape(t.slice(0, -1)), e += "ing their account?</option>", _u.each(this.reasons, (i = this, function (t) {
							return e += '<option value="', e += i.escape(t), e += '">', e += i.escape(t), e += "</option>"
						})), e += '</select></div><textarea class="bordered churn-comments mb-25" name="churn[comments]" placeholder="Notes? Any More details? Copy and paste anything they say specifically."></textarea><div class="mb-25"><input name="churn[positive]" type="hidden" value="0" /><input checked="true" id="positive" name="churn[positive]" type="checkbox" value="1" /><label for="positive">Did the customer have a positive experience with Juicer?</label></div>', n = this.action.match("mark") ? "Mark for Downgrade" : t + " now", e += '<input class="j-button" type="submit" value="', e += this.escape(n), e += '" /></form></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.analytics_date_range = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="tac p-50"><h2 class="light fs-2 tc-maroon">Viewing Options</h2><h3 class="fifteen tc-dark-gray mb-25">Select the dates you\u2019d like to view analytics for (month/day/year):</h3><form action="', t += this.escape(window.location.pathname), t += '"><div class="mb-30"><input class="date-range-field" name="start" placeholder="MM/DD/YYYY" type="text" value="', t += this.escape(this.start), t += '" /><span class="mx-10">to</span><input class="date-range-field" name="end" placeholder="MM/DD/YYYY" type="text" value="', t += this.escape(this.end), t += '" /></div><input class="j-button" type="submit" value="filter" /></form></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["campaign/upgrade_to_campaign"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="tac p-50"><h2 class="light fs-2 tc-orange">Upgrade to a Campaign Plan</h2><h3 class="fifteen tc-gray mb-40">The Juicer Campaign Plan allows you to automatically request permission from content creators to use their posts in your feed. Then when they grant permission, we automatically publish the post for you.</h3><a class="j-button campaign-info pointer" href="/campaign">Learn more about Campaign Plans</a></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.churn = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="tac p-50"><h1 class="fs-1-5 tc-dark-gray bold mb-25">Are you sure you want to delete your account?</h1><p class="tc-dark-gray mb-25 fifteen">Deleting your account will remove all of your data and cause any embedded feeds to stop working. It might be worth instead downgrading to a small plan, which will keep your paid plan active until the next billing date, and at that point, downgrade you to a small plan, which will maintain one feed with 2 sources.</p><a class="j-button small mb-40" href="/plans">No, downgrade my account instead.</a><a class="delete tc-gray block fourteen pointer">Yes, let\'s delete my account.</a></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.downgrade_overlay = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="p-50 tac"><h2 class="light fs-2 tc-orange tac">Your Juicer Account Will Downgrade</h2><p class="tc-gray fourteen mb-25">Your Juicer Account will remain active as a <strong>', t += this.escape(this.plan), t += "</strong> account until <strong>", t += this.escape(this.downgradeAt), t += '</strong> at which point it will become a small plan, with 1 feed and 2 sources and Juicer branding. </p><a class="j-button small mb-20" href="/">Sounds good! Take me to my feed.</a><a class="tc-gray block fourteen" href="/plans">Oh no, I want to reactivate my account!</a></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["enterprise/admin"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += "<h3>", t += this.escape(this.model.get("email") + (0 === this.index ? " (owner)" : "")), t += '</h3><a class="delete-user sprite" data-confirm="Are you sure you want to remove this user from your enterprise account and all associated feeds?" data-method="post" href="/enterprise/', t += this.escape(this.account.get("slug")), t += "/", t += this.escape(this.model.get("id")), t += '/remove" rel="nofollow">Remove</a>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["enterprise/calculator"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="row"><div class="col-12 col-sm-6 col-md-4 tac"><h3 class="light fs-3 calculator-sources">', t += this.escape(this.model.sources()), t += '</h3><h4 class="mb-25">Social Media Sources</h4><input class="bg-green" data-attribute="sources" max="21" min="1" type="range" value="', t += this.escape(this.model.get("sources")), t += '" /></div><div class="col-12 col-sm-6 col-md-4 tac"><h3 class="light fs-2 calculator-frequency">', t += this.escape(this.model.frequencyInWords()), t += '</h3><h4 class="mb-25">Update Frequency</h4><input class="bg-green" data-attribute="frequency" max="7" min="1" type="range" value="', t += this.escape(this.model.get("frequency")), t += '" /></div><div class="col-12 col-sm-6 col-md-4 tac"><h3 class="fs-3 light calculator-price">', t += this.escape(this.model.priceString()), t += '</h3><h4 class="calculator-price-label">', t += this.escape(this.model.priceLabel()), t += "</h4></div></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["enterprise/create_assignment_form"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="p-50 tac"><h2 class="fs-2">Add User to "', t += this.escape(this.model.get("name")), t += '"</h2><form class="new-assignment" method="post"><input name="enterprise_id" type="hidden" value="', t += this.escape(this.account.get("slug")), t += '" /><input name="feed_id" type="hidden" value="', t += this.escape(this.model.get("id")), t += '" /><input class="mb-25 bordered" name="email" placeholder="Their Email Address" type="email" /><input class="fw j-button" name="commit" type="submit" value="Add User to ', t += this.escape(this.model.get("name")), t += '" /></form></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["enterprise/feed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var r, t, e, s, n;
						return r = "", t = this.model.get("slug"), r += '<h3 class="mb-10"><a class="fs-2 tc-dark-gray tdu" href="/feeds/', r += this.escape(t), r += '">', r += this.escape(this.model.get("name")), r += '</a></h3><ul class="enterprise-feed-actions"><li class="ibt"><a aria-label="View Feed" class="sprite enterprise-feed-view hint--bottom-left" href="/feeds/', r += this.escape(t), r += '">View</a></li>', this.account.get("auto_fetch_all") && (r += '<li class="ibt ml-10"><a aria-label="Fetch all posts for all sources in this feed" class="fetch-all sprite hint--bottom-left" href="#">Fetch All Posts</a></li>'), r += '<li class="ibt ml-10"><a aria-label="Edit This Feed" class="sprite enterprise-feed-edit hint--bottom-left" href="/feeds/', r += this.escape(t), r += '/edit">Edit</a></li><li class="ibt ml-10"><a aria-label="Delete this Feed" class="sprite enterprise-feed-delete hint--bottom-left" data-confirm="Are you sure you want to delete ', r += this.escape(t), r += ' feed? This will remove all sources and posts and is non-reversible." data-method="delete" href="/feeds/', r += this.escape(t), r += '" rel="nofollow">Delete</a></li></ul>', e = this.model.get("sources").length, r += '<div class="tc-dark-gray enterprise-feed-pricing">', r += this.escape(this.model.get("update_frequency_in_words")), r += " \xd7 ", r += this.escape(e), r += " ", r += this.escape(_u("source").pluralize(e)), r += " = <strong>", r += this.escape(this.model.get("formatted_cost")), r += '</strong> per month </div><ul class="my-5">', _u.each(this.sources, (s = this, function (t) {
							var e, n, i;
							switch (i = t.get("term"), r += "<li", e = i) {
								case !0:
									r += ' alt="alt"';
									break;
								case !1:
								case null:
									break;
								default:
									r += ' alt="', r += s.escape(e), r += '"'
							}
							switch (r += ' aria-label="', r += s.escape(t.displayName()), r += '" class="enterprise-feed-source hint--bottom-right"', n = i) {
								case !0:
									r += ' title="title"';
									break;
								case !1:
								case null:
									break;
								default:
									r += ' title="', r += s.escape(n), r += '"'
							}
							return r += '><span class="j-', r += s.escape(t.get("source").toLowerCase()), r += ' j-social-icon bg-none tc-gray fs-2"></span></li>'
						})), r += '</ul><h4 class="fs-1-2-5 tc-dark-gray mb-5">Feed Users</h4><ul>', _u.each(this.assignments, (n = this, function (t) {
							return r += '<li class="enterprise-user-assignment ibt"><span class="enterprise-assignment-email">', r += n.escape(t.get("email")), r += '</span><a aria-label="Delete user ', r += n.escape(t.get("email")), r += " from feed ", r += n.escape(n.model.get("name")), r += '." class="delete-assignment" data-id="', r += n.escape(t.get("id")), r += '"></a></li>'
						})), r += '<li class="enterprise-user-assignment ibt tc-gray add-assignment">+ Add User</li></ul>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["enterprise/invite_admin"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="p-50 tac"><h2 class="fs-2">Add new staff member</h2><h3 class="fs-gray mb-25">This will add them to all feeds, allow them to create new feeds and edit existing feeds.</h3><form accept-charset="UTF-8" action="/enterprise/', t += this.escape(this.model.get("slug")), t += '/admin" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /><input name="authenticity_token" type="hidden" value="', t += this.escape(this.csrf), t += '" /></div><input class="mb-25 bordered" name="email" placeholder="Their Email Address" type="email" /><input class="fw j-button" name="commit" type="submit" value="Invite new staff member" /></form></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["enterprise/show"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<h1 class="fs-2 mb-25">Enterprise dashboard for ', t += this.escape(this.model.get("name")), t += "</h1>", t += Juicer.Helpers.renderPartial("enterprise_sidebar", {
							model: this.model
						}), t += '<div class="enterprise-content"><div class="enterprise-cost bg-white border tac mb-50 tc-slevin p-40"><h4 class="fs-1-125 tc-dark-gray">Estimated monthly cost of your account</h4><h3 class="fs-3 tc-dark-gray">', t += this.escape(this.model.get("formatted_cost_with_minimum_fee")), t += '</h3><div class="enterprise-explanation">The cost is calculated based on the number of sources and feed update frequencies prorated to the hour. Including the minimum fee. </div></div><div class="row mb-25"><div class="col-6"><input class="enterprise-search bordered" placeholder="Filter feeds by name, source name or user email" type="search" value="', t += this.escape(this.model.query), t += '" /></div><div class="col-3 offset-3"><a class="j-button small" href="/feeds/new">+ Add New Feed</a></div></div><ul class="feeds tac"></ul></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["enterprise/user"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, t, n;
						switch (e = "", e += '<div class="enterprise-user"><h3>', e += this.escape(this.model.get("email")), e += "</h3>", e += '<a class="delete-user sprite"', t = "Are you sure you want to remove this user from your enterprise account and all associated feeds?") {
							case !0:
								e += ' data-confirm="data-confirm"';
								break;
							case !1:
							case null:
								break;
							default:
								e += ' data-confirm="', e += this.escape(t), e += '"'
						}
						return e += ' data-method="post" href="/enterprise/', e += this.escape(this.account.get("slug")), e += "/", e += this.escape(this.model.get("id")), e += '/remove" rel="nofollow">Remove</a></div><ul class="enterprise-user-feeds"><h4 class="uc bold mb-10">Feeds Managed</h4>', _u.each(this.model.get("assignments"), (n = this, function (t) {
							return e += '<li class="enterprise-user-assignment ibt">', e += n.escape(t.name), e += '<a aria-label="Delete user ', e += n.escape(t.email), e += " from feed ", e += n.escape(t.name), e += '." class="delete-assignment" data-id="', e += n.escape(t.id), e += '"></a></li>'
						})), e += "</ul>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["enterprise/users"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<h1 class="fs-2 mb-25">Enterprise dashboard for ', t += this.escape(this.model.get("name")), t += '</h1><div class="cf">', t += Juicer.Helpers.renderPartial("enterprise_sidebar", {
							model: this.model
						}), t += '<div class="enterprise-content"><div class="row mb-15"><div class="col-8"><h2 class="fs-1-5">Account owner & staff</h2><p>Users listed here can access and edit all feeds of this account as well as create new feeds.</p></div><div class="col-4"><a class="j-button small fr new-enterprise-admin">+ Add new staff member</a></div></div><ul class="enterprise-admins bg-white border mb-40"></ul><div class="row mb-15"><div class="col-12"><h2 class="fs-1-5">Feed Collaborators</h2><p>Users listed here can only access certain feeds. They cannot create new feeds.</p><p>You can invite more collaborators to specific feeds on the <a class="tdu tc-dark-gray" href="/enterprise/', t += this.escape(this.model.get("slug")), t += '">Your Feeds</a> page. </p></div></div><ul class="enterprise-users"></ul></div></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["enterprise/white_label"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						if (t = "", t += '<h1 class="fs-2 mb-25">Enterprise dashboard for ', t += this.escape(this.model.get("name")), t += "</h1>", t += Juicer.Helpers.renderPartial("enterprise_sidebar", {
								model: this.model
							}), t += '<div class="enterprise-content"><div class="bg-white border p-30">', this.model.get("white_label")) t += '<h1 class="white-label-success light tc-green fs-1-25 mb-25 tac">Success! ', t += this.escape(this.model.get("host")), t += ' is now set up to White Label Juicer</h1><div class="tc-gray fifteen"><p class="mb-25">You\'ll notice that when you visit the feed from that URL the functionality is limited. This is on purpose. We\'d recommend visiting your admin dashboard from the Juicer domain, and just use this one for clients.</p><p>When you invite a client to a feed it should automatically link them to this URL (you should test this out first). (Click "+ add user" next to one of your feeds from your enterprise dashboard).</p></div>';
						else {
							switch (t += '<h1 class="tc-dark-gray fs-1-5 mb-25">Set up White Label</h1><p class="mb-25 tc-dark-gray fs-1">Want to host Juicer on your own URL with your own logo? Something like <strong>http://social.yourdomain.com</strong>? We need to set this up. <ol class="enterprise_whiteLabelSteps"><li>Create a subdomain or a new domain and set its <strong>CNAME</strong> to <br /><strong>juicer-io.herokuapp.com</strong>. </li><li>Once you\'ve done so, enter the domain URL below: </li></ol><form class="mt-20 white-label-url">', t += '<input class="mb-10 bordered" name="url" placeholder="http://feeds.yourdomain.com" type="url"', e = this.model.get("url") ? this.model.get("url") : null) {
								case !0:
									t += ' value="value"';
									break;
								case !1:
								case null:
									break;
								default:
									t += ' value="', t += this.escape(e), t += '"'
							}
							t += ' /><input class="fw j-button" type="submit" value="Confirm Domain is set up" /></form></p>', this.model.get("error") && (t += '<div class="cname-error mt-40 p-25 tc-gray"><strong>', t += this.escape(this.model.get("host")), t += "</strong> is not resolving with a CNAME to juicer-io.herokuapp.com.If you've set it up, please try again later, as this can take up to 48 hours to resolve. </div>")
						}
						return t += "</div></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.errors = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, n;
						return e = "", e += '<ul class="errors source-errors px-25 mb-15">', $.each(this.errors, (n = this, function (t) {
							return _u.each(n.errors[t], function (t) {
								return e += '<li class="tc-grapefruit">', e += t, e += "</li>"
							})
						})), e += "</ul>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.feed = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var n, t, i;
						return n = "", t = "slider" === this.feed.get("css") ? _u.filter(this.feed.get("posts").models, function (t) {
							return "YouTube" !== t.sourceType()
						}) : this.feed.get("posts").models, this.feed.displayFilters() && (n += Juicer.Helpers.renderPartial("filters/" + this.feed.filterPartial(), {
							feed: this.feed,
							filter: this.filter
						})), t.length <= 0 ? this.isOnFeedsDashboard ? (n += '<div class="empty"><p class="fs-1-25 mb-40">There are currently no posts in your feed to display.</p><h2 class="mb-15">Add some sources to your feed: </h2><a class="j-button add-source tc-white mb-40" onclick="window.juicerDashboardSidebar.openNewSource()">+ Add Social Media Source </a>', this.feed.get("moderation_allowed?") && (n += '<h3 class="fs-1-25">Or, if you already did that, check your <a href="', n += this.escape(window.location.pathname), n += '/moderation">moderation queue</a> <span>or filter settings!</span></h3>'), n += "</div>") : n += '<div class="empty"><h2>No Posts!</h2></div>' : (n += Juicer.Helpers.renderPartial("custom_styles", {
							feed: this.feed
						}), _u.each(t, (i = this, function (t) {
							var e;
							return n += "<li", e = "", 0 < (e += i.escape(t.classes())).length && (n += ' class="', n += e, n += '"'), n += ' data-id="', n += i.escape(t.get("id")), n += '" data-source="', n += i.escape(t.lowerType()), n += '">', n += Juicer.Helpers.renderPartial("actions", {
								isOnFeedsDashboard: i.isOnFeedsDashboard,
								post: t
							}), n += Juicer.Helpers.renderPartial("feeds/" + i.feed.partial(), {
								post: t,
								feed: i.feed
							}), n += "</li>"
						}))), n
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/analytics"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<h4 class="fourteen mb-30">Track your posts, page views, clickthroughs and user engagement over time to see how your feed is being used.</h4><a class="bold fourteen tdu launch pointer">Launch ', t += this.escape(this.feed.get("name")), t += " Analytics</a>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/analytics_overlay"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="p-50 tac"><h2 class="light tc-orange fs-2">Analytics for ', t += this.escape(this.feed.get("name")), t += ' Feed</h2><h3 class="fourteen tc-gray mb-30">Only large plans can access analytics. Please upgrade your account!</h3>', t += Juicer.Helpers.renderPartial("upgrade_plan", {
							feed: this.feed
						}), t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/color_picker"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="color-fields p-15" data-color="', t += this.escape(this.colorAttr), t += '"><div class="color-input-container"><div class="double-border color-example" style="background-color: ', t += this.escape(this.color), t += '"></div><div class="color-example-bg double-border-bg"></div><input class="color-input" pattern="', t += this.escape(this.pattern), t += '" type="color" value="', t += this.escape(this.color), t += '" /></div><input class="hex-input" pattern="', t += this.escape(this.pattern), t += '" type="text" value="', t += this.escape(this.color), t += '" /></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/css_overlay"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="tac p-30"><h2 class="light fs-2 tc-orange">Customize Theme CSS</h2><p class="fifteen tc-gray">Add Custom CSS styles to your Juicer Feed. You can learn more about the best way to handle these customizations <a class="tc-gray bold" href="/blog/create-a-custom-embeddable-aggregate-social-media-feed-with-css-and-juicer" target="_blank">here</a>. </p><form class="css-form">', t += '<textarea class="bordered my-40" name="css" placeholder="Enter Custom CSS to modify the look of your Juicer Feed..." style="height: 40vh;">', t += this.feed.get("custom_css") ? this.feed.get("custom_css") : "", t += '</textarea><input class="j-button" type="submit" value="Save Changes" /></form></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/design"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, n;
						return e = "", this.feed.get("moderation_allowed?") || (e += '<div class="fourteen p-20">You must have a paid account to customize your feed design from the dashboard. Learn more about <a class="tc-white bold" href="/plans">paid accounts</a> or <a class="tc-white bold" href="/blog/create-a-custom-embeddable-aggregate-social-media-feed-with-css-and-juicer" target="_blank">customize your feed css manually</a>. </div>'), e += '<div class="p-20 fourteen relative">', this.feed.get("moderation_allowed?") || (e += '<div class="filter-blocker custom-style-not-allowed"></div>'), e += '<div class="mb-40"><h3 class="bold mb-10">Feed Style</h3><div class="thirteen">', e += this.escape(Juicer.Helpers.prettify(this.feed.get("css"))), e += ' ( <a class="customize-css tdu pointer">Customize CSS</a> ) </div></div><h3 class="bold mb-10">Feed Colors</h3><ul class="bg-white-field tc-slevin mb-10">', _u.each(this.feed.colors, (n = this, function (t) {
							return e += '<li class="p-15 relative feed-color" data-color="', e += n.escape(t), e += '"><div class="bold">', e += n.escape(Juicer.Helpers.prettify(t)), e += '</div> <div class="color-picker"><div class="double-border color-picker-circle" style="background: ', e += n.escape(n.feed.getColor(t)), e += '"></div><div class="double-border-bg color-picker-background-color"></div></div></li>'
						})), e += '</ul><a class="j-button small fw mb-10 tac save-style">Save Custom Style</a><a class="twelve tdu pointer mb-40 block tac reset-style">Restore Default Template Colors</a></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="p-20 fourteen"><textarea class="embed embed-textarea mb-15 ten tc-embed p-15">', t += this.embed, t += '</textarea><a class="tc-off-white tdu" href="', t += this.escape(Juicer.Constants.HELP_CENTER_URL), t += '/articles/360039929412-Code-customizations-for-date-range-feed-style-spacing-filtering-and-more" target="_blank">Customize my embed.</a></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/embed_code"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<script src="', t += this.escape(this.javascript), t += '" type="text/javascript"></script><br /><link href="', t += this.escape(this.stylesheet), t += '" media="all" rel="stylesheet" type="text/css" /><br /><ul class="juicer-feed" data-feed-id="', t += this.escape(this.feed.get("slug")), t += '">', this.feed.paid() || (t += Juicer.Helpers.renderPartial("referral")), t += "</ul>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/embed_menu"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, n;
						return e = "", e += '<div class="embed-menu-container"><h2 class="bold mb-30">Copy and Paste this code into your site.</h2><div class="white-select fourteen"><select class="embed-menu">', _u.each(this.embedOptions, (n = this, function (t) {
							return n.currentlySelected === t.value ? e += '<option selected="true" value="' : e += '<option value="', e += n.escape(t.value), e += '">', e += n.escape(t.label), e += "</option>"
						})), e += "</select></div></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/features"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="thirteen"><h4 class="mb-10">Upgrade your account to Medium or Large and get:</h4><ul class="pl-10 mb-10"><li>More frequent feed updates</li><li>More Social Media Sources</li><li>More Feeds</li><li>Moderation and Filtering</li><li>Feed Analytics</li><li>Instant Support and Integration Assistance</li></ul></div><a class="j-button small" href="/plans" style="font-size:11px;">Upgrade your plan!</a>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/feed_name_edit"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<form class="js-feed-name-edit-form p-40 tac"><h2 class="fs-2">Edit Feed Name</h2><input autofocus="yes" class="bordered mb-15" name="name" type="text" value="', t += this.escape(this.feed.get("name")), t += '" /><div class="mb-15"><input id="slug_update" name="slug_update" type="checkbox" /><label for="slug_update">Also update the feed\'s URL</label><p class="slug-warning tc-grapefruit hide fourteen">Updating the feed url will also change your embed code so if you already have your feed embedded in a different page you\'ll have to update the Juicer embed code there too.</p></div><input class="j-button" type="submit" value="Save" /></form>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/hub"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="tac"><h3 class="fourteen mb-20">Share this link:</h3><div class="bg-white tc-black fourteen tal p-10" style="word-break: break-all">', t += this.escape(window.location.protocol + "//" + window.location.host + "/" + this.feed.get("slug")), t += '</div><a class="j-button small" href="/', t += this.escape(this.feed.get("slug")), t += '" style="font-size:11px;letter-spacing:-0.25px;">View your public feed</a></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/iframe"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="p-20 fourteen"><textarea class="ten tc-embed p-15 mb-10 iframe-embed">', t += this.iframe, t += "</textarea><p>You may have to adjust width and height to get it to work. You should only use this if the standard embed isn't working for you.</p></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/moderate"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e, n;
						return t = "", t += '<div class="tac fourteen"><h3 class="uc bold mt-20">You are Viewing</h3><ul class="moderation-nav"><li class="active public">Public Posts</li><li class="moderated">Moderated Posts</li></ul><p class="px-15">To remove a post from your live feed hover over the post and select the trash icon. The post will be sent to your moderation queue.</p></div>', this.feed.get("moderation_allowed?") ? (t += '<form class="filters" method="post">', t += Juicer.Helpers.renderPartial("toggle", {
							attr: "queue",
							feed: this.feed,
							label: "Send All Posts to Moderation",
							hint: "With this option enabled, new posts will not automatically go to your live feed. Instead, you must first manually approve them from your moderation queue.",
							hintPosition: "bottom",
							classes: "mt-40"
						}), t += '<div class="p-20 fourteen relative"><div class="filter-blocker"></div>', n = "list words, @usernames, or #hastags", e = "Separate filters with a comma. Filters are case-sensitive.", t += '<h3 class="settings-label">Disallow posts with these words:</h3><textarea class="moderation-filter thirteen mb-10" name="feed[disallowed]" placeholder="', t += this.escape(n), t += " to block. ", t += this.escape(e), t += '">', t += this.feed.disallowed(), t += '</textarea><h3 class="settings-label">Only allow posts with these words:</h3><textarea class="moderation-filter thirteen mb-20" name="feed[allowed]" placeholder="', t += this.escape(n), t += " to allow. ", t += this.escape(e), t += '">', t += this.feed.allowed(), t += "</textarea>", t += Juicer.Helpers.renderPartial("profanity", {
							feed: this.feed
						}), t += Juicer.Helpers.renderPartial("prevent_duplicates", {
							feed: this.feed
						}), t += '</div><div class="tac"><input class="j-button" type="submit" value="Save your Filters" /></div></form>') : (t += '<div class="p-20 tac"><h3 class="tc-grapefruit bold fourteen mb-15">Only medium and large plans can setup filters. Upgrade now!</h3>', t += Juicer.Helpers.renderPartial("upgrade_plan", {
							feed: this.feed,
							css: "j-button small"
						}), t += "</div>"), t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/new_source"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="tac pt-30 pb-25"><h3 class="fs-2 tc-black">Add a Social Media Source</h3><h3 class="light fs-1-25 tc-satan mb-30">First, select the social media platform you want to import posts from.</h3><ul class="mx-30">', t += Juicer.Helpers.renderPartial("sources"), t += "</ul></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/revalidate_overlay"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, t, n, i;
						return e = "", e += '<div class="tac p-30"><h2 class="light fs-2 tc-orange">Apply filters to existing posts?</h2>', t = (n = "0" !== this.data.queue) ? "mb-15" : "mb-40", e += '<p class="fifteen tc-gray ', e += this.escape(t), e += '">Do you want to apply these changes to all existing posts?  Feeds with a large amount of posts may take some time for Juicer to properly moderate. Please be patient.</p>', n && (e += '<p class="fourteen tc-grapefruit mb-40">You have turned the moderation queue on, so keep in mind if you select "apply to existing posts" it will remove <strong>all</strong> posts from your live queue. You can always recover them (or approve them later) </p>'), e += "<form>", _u.each(_u.keys(this.data), (i = this, function (t) {
							return e += '<input name="', e += i.escape(t), e += '" type="hidden" value="', e += i.escape(i.data[t]), e += '" />'
						})), e += '<div class="submits"><input class="moderate-confirm j-button small mr-25" data-revalidate="false" type="submit" value="No, only future posts" /><input class="moderate-confirm j-button small secondary" data-revalidate="true" type="submit" value="Yes, apply to existing posts" /></div></form></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/settings"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var n, i;
						return n = "", n += '<div class="p-20 fourteen">', n += Juicer.Helpers.renderPartial("css", {
							feed: this.feed,
							label: !0
						}), n += '<label class="settings-label">Feed Display</label><div class="mb-30">', n += Juicer.Helpers.renderPartial("interval", {
							feed: this.feed
						}), n += Juicer.Helpers.renderPartial("columns", {
							feed: this.feed
						}), n += Juicer.Helpers.renderPartial("width", {
							feed: this.feed
						}), n += Juicer.Helpers.renderPartial("height", {
							feed: this.feed
						}), null == this.feed.get("height") && null == this.feed.get("width") || (n += '<label class="ib mt-10 thirteen">If you want the feed to fill all available space remove the height and width.</label>'), n += "</div>", n += Juicer.Helpers.renderPartial("order", {
							feed: this.feed
						}), n += Juicer.Helpers.renderPartial("filter_setting", {
							feed: this.feed,
							label: !0
						}), _u.each(this.checkboxes, (i = this, function (t) {
							var e;
							return e = t.attr, n += '<div class="checkbox mb-15 thirteen relative"><input name="feed[', n += i.escape(e), n += ']" type="hidden" value="0" />', i.feed.get(e) ? n += '<input checked="true" data-attribute="' : n += '<input data-attribute="', n += i.escape(e), n += '" id="', n += i.escape(e), n += '" name="feed[', n += i.escape(e), n += ']" type="checkbox" />', n += '<label for="', n += i.escape(e), n += '">', n += i.escape(t.label), n += "</label>", null != t.tooltip && (n += '<div aria-label="', n += i.escape(t.tooltip), n += '" class="sidebar-explainer sprite hint--right hint--medium"></div>'), n += "</div>"
						})), n += '<a class="fourteen tc-off-white tdu" href="', n += this.escape(Juicer.Constants.HELP_CENTER_URL), n += '/articles/360039929412-Code-customizations-for-date-range-feed-style-spacing-filtering-and-more" target="_blank">Other Customization Options</a></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/sources"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var r, s;
						return r = "", r += '<ul class="source-list">', _u.each(this.feed.get("sources").models, (s = this, function (t) {
							var e, n, i;
							switch (i = t.get("id"), n = !0 === t.get("is_deactivated") ? "j-source-isDeactivated" : "j-source-active", r += '<li class="j-', r += s.escape(t.lowerSource()), r += " j-social-icon bg-none fourteen existing-source ", r += s.escape(n), r += '" data-id="', r += s.escape(i), r += '"><span', e = !0 === t.get("is_deactivated") ? "This source has been marked as deactivated because its hashtag or username is invalid or doesn't exist anymore. Please contact us if you think this is a mistake." : void 0) {
								case !0:
									r += ' title="title"';
									break;
								case !1:
								case null:
									break;
								default:
									r += ' title="', r += s.escape(e), r += '"'
							}
							return r += ">", r += s.escape(t.displayName()), r += "</span>", t.options() && (r += "<ul>", _u.each(t.options(), function (t) {
								return r += "<li>", r += s.escape(t), r += "</li>"
							}), r += "</ul>"), r += '</li><ul class="source-submenu fourteen">', t.manual() && (r += '<li class="add source-submenu-item mb-10" data-id="', r += s.escape(i), r += '" data-name="', r += s.escape(t.typeSymbol()), r += s.escape(t.get("term")), r += '" data-template="manual" rel="nofollow">Add Post Manually</li>'), s.feed.paid() && (r += '<li class="moderate source-submenu-item mb-10" data-id="', r += s.escape(i), r += '" data-template="moderation">Set Moderation Filters</li>'), r += '<li class="rename source-submenu-item mb-10" data-id="', r += s.escape(i), r += '" data-template="rename">Edit Filter Button Name</li><li class="delete" data-id="', r += s.escape(i), r += '">Delete</li></ul>'
						})), r += '</ul><div class="tac mt-40"><a class="js-add-source-submenu add-source-submenu j-button small">+ Add Social Media Source</a></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/synced"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<h4 class="thirteen mb-10">Your feed will sync next at <strong>', t += this.escape(Juicer.Helpers.fullDate(this.feed.nextSync())), t += "</strong>. Please note this is only an estimate. </h4>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["feeds/wordpress"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="p-20 fourteen"><h3 class="mb-10">First, download, unzip, and install the wordpress plugin.</h3><a class="block tc-off-white tdu" href="https://www.juicer.io/blog/setting-up-a-juicer-social-media-aggregator-on-a-wordpress-site">Learn how to install</a><a class="block tc-off-white tdu mb-20" href="https://downloads.wordpress.org/plugin/juicer.zip">Download the Wordpess Plugin</a><h3 class="settings-label">Shortcode</h3>', t += '<textarea class="ten tc-embed p-15 single-line mb-20">', t += '[juicer name="' + this.feed.get("slug") + '"]', t += '</textarea><h3 class="settings-label">PHP Function</h3>', t += '<textarea class="ten tc-embed p-15 single-line">', t += '<?php juicer_feed("name=' + this.feed.get("slug") + '"); ?>', t += "</textarea></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.gdpr_form = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="tac p-50 gdpr-form"><h2 class="light fs-2 tc-orange">Accept our GDPR Privacy Policy Changes</h2><p class="tc-gray fifteen mb-25">To ensure compliance with the GDPR, we have updated our <a class="bold tc-gray tdu" href="/privacy">privacy policy</a> . Since you are located in the EU you must accept these changes. </p><div class="mb-25"><a class="j-button" href="/gdpr">Accept updated privacy policy and continue my service</a></div><a class="fourteen tc-gray tdu pointer" href="/downgrade?delete=true">I don\'t accept the privacy policy so cancel my service.</a></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.infinite_scroll = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var n, t, i;
						return n = "", 0 < (t = this.feed.get("posts").models).length && _u.each(t, (i = this, function (t) {
							var e;
							return n += "<li", e = "", 0 < (e += i.escape(t.classes())).length && (n += ' class="', n += e, n += '"'), n += ' data-id="', n += i.escape(t.get("id")), n += '">', n += Juicer.Helpers.renderPartial("actions", {
								isOnFeedsDashboard: i.isOnFeedsDashboard,
								post: t
							}), n += Juicer.Helpers.renderPartial("feeds/" + i.feed.partial(), {
								post: t,
								feed: i.feed
							}), n += "</li>"
						})), n
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.moderated = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, n;
						return e = "", e += '<ul class="j-display-filters">', _u.each(this.menuItems, (n = this, function (t) {
							return n.feed.filter === t.filter || "All" === t.title && "" === n.feed.filter ? e += '<li class="moderate-filter selected" data-filter="' : e += '<li class="moderate-filter" data-filter="', e += n.escape(t.filter), e += '">', e += n.escape(t.title), e += "</li>"
						})), e += "</ul>", 0 < this.feed.get("posts").models.length && (e += '<div class="tac mb-15 bulk-moderate-nav"><a class="j-button small mr-10 bulk-moderate" data-approve="true">Approve All</a><a class="j-button small bulk-moderate">Reject All</a></div>'), e += Juicer.Helpers.renderPartial("moderated_posts", {
							feed: this.feed
						})
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.new_feed = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += Juicer.Helpers.renderPartial("sources")
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.overlay = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="j-overlay-content" tabindex="0">', this.close && (t += '<a class="j-close" href="#"><span>Close</span></a>'), t += this.content, t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_actions"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", this.isOnFeedsDashboard && !this.post.ad && (t += '<ul class="actions" data-id="', t += this.escape(this.post.get("id")), t += '">', null != this.post.get("deleted_at") ? t += '<li aria-label="Don&#39;t publish post and hide it." class="reject hint--bottom-left">Reject</li><li aria-label="Move post to your live feed." class="approve primary hint--bottom-left">Approve</li>' : (this.post.stickied() ? t += '<li aria-label="Make post be not-pinned anymore." class="unstick hint--bottom-left">Unpin</li>' : t += '<li aria-label="Pin post. Keep post at top of feed, even when new posts come in." class="hint--bottom sticky">Pin</li>', this.post.twitter() || (t += '<li aria-label="Add content to this post." class="edit hint--bottom-left">Edit</li>'), t += '<li aria-label="Move post to moderation queue. Remove from live feed." class="delete primary hint--bottom-left">Delete</li>'), t += "</ul>"), t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_columns"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="columns white-field bordered hide"><label for="columns">Columns</label><input class="columns" max="9" min="1" name="feed[columns]" type="number" value="', t += this.escape(this.feed.get("columns")), t += '" /></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_content"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", this.lazyLoad = null != this.feed && this.feed.get("lazy_load") || !1, null != this.post.get("image") ? (t += '<a class="j-image" data-external-id="', t += this.escape(this.post.get("external_id")), t += '" data-image="', t += this.escape(this.post.get("image")), t += '" data-video-url="', t += this.escape(this.post.get("video")), t += '" href="', t += this.escape(this.post.link()), t += '" target="_blank">', (this.feed && this.feed.shouldShowGallery() && this.post.gallery() || this.post.gallery() && this.overlay) && (t += '<span class="j-gallery-nav"><span class="j-gallery-arrow j-gallery-previous">Previous</span><span class="j-gallery-arrow j-gallery-next">Next</span></span>'), this.lazyLoad && !this.overlay ? (t += '<img alt="', t += this.escape(this.post.alt()), t += '" class="j-content-image" data-lazy="') : (t += '<img alt="', t += this.escape(this.post.alt()), t += '" class="j-content-image" src="'), t += this.escape(this.post.get("image")), t += '" />', t += "</a>") : this.post.get("video") && "Instagram" === this.post.get("source").source() && "hashtag" === this.post.get("source").termType() && (
							t += '<div class="video-play-placeholder"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768"><path d="M683 79a303 303 0 01281 186 303 303 0 01-65 335 304 304 0 01-521-216 303 303 0 01186-281c38-16 78-24 119-24m0-40a345 345 0 100 690 345 345 0 000-690z"/><path d="M592 557c-13 0-15-15-15-21V232c0-6 2-21 14-21 5 0 10 2 15 5l263 152c8 4 13 10 13 16s-5 12-13 16L606 552c-5 3-10 5-14 5z"/><path d="M592 222c1 0 4 0 9 3l263 152c6 3 8 7 8 7s-2 4-8 8L601 544c-5 3-8 3-9 3l-2-1c-1-1-3-4-3-10V232c0-5 2-9 3-10h2m0-20c-15 0-25 11-25 30v304c0 20 10 31 24 31 6 0 13-2 20-6l263-152c24-13 24-36 0-50L611 208c-7-4-14-6-19-6z"/></svg></div>'), t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_css"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var i, r;
						return i = "", i += '<div class="css">', this.label && (i += '<label class="settings-label" for="css">Choose a Feed Style</label>'), i += '<div class="white-select mb-30"><select id="css" name="feed[css]">', _u.each(Juicer.Constants.FEED_CLASSES, (r = this, function (t) {
							var e, n;
							switch (i += "<option", e = t === r.feed.get("css")) {
								case !0:
									i += ' selected="selected"';
									break;
								case !1:
								case null:
									break;
								default:
									i += ' selected="', i += r.escape(e), i += '"'
							}
							switch (n = t) {
								case !0:
									i += ' value="value"';
									break;
								case !1:
								case null:
									break;
								default:
									i += ' value="', i += r.escape(n), i += '"'
							}
							return i += ">", i += "living-wall" === t ? r.escape(Juicer.Helpers.prettify(t) + " (no Twitter & no YouTube support)") : "slider" === t ? r.escape(Juicer.Helpers.prettify(t) + " (no YouTube support)") : r.escape(Juicer.Helpers.prettify(t)), i += "</option>"
						})), i += "</select></div></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_custom_styles"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", (this.feed.customColors() || this.feed.get("custom_css")) && (t += '<div class="juicer-custom-styles"><style>', t += this.feed.customStyles(), t += "</style></div>"), t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_edit"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", this.post.edited() && !this.post.twitter() && (t += '<div class="j-edit"><span>(edited) </span>', t += Juicer.Helpers.format(this.post.get("edit")), t += "</div>"), t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_enterprise_sidebar"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var a, l, t, c;
						return a = "", t = [{
							name: "Your Feeds",
							url: "/enterprise/" + this.model.get("slug")
						}, {
							name: "Manage Staff",
							url: "/enterprise/" + this.model.get("slug") + "/users"
						}, {
							name: "Edit Account",
							url: "/enterprise/" + this.model.get("slug") + "/edit"
						}, {
							name: "API Docs",
							url: "/api"
						}, {
							name: "Set up White Label",
							url: "/enterprise/" + this.model.get("slug") + "/white-label"
						}], l = "/" + JuicerBackbone.history.getFragment(), a += '<div class="enterprise-sidebar"><ul class="tc-dark-gray bg-white border">', _u.each(t, (c = this, function (t) {
							var e, n, i, r, s, o;
							if (a += '<li class="enterprise-sidebar-link ', e = t.url === l ? "bold" : "", c.isArray(e)) {
								for (n = 0, s = (e = c.flatten(e)).length; n < s; n++)(i = e[n]) && (e = i.toString());
								for (r = 0, o = e.length; r < o; r++) 0 < (i = e[r]).length && (e = i);
								a += c.escape(e.join(" "))
							} else a += c.escape(e);
							return a += '"><a href="', a += c.escape(t.url), a += '">', a += c.escape(t.name), a += "</a></li>"
						})), a += "</ul></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_filter_setting"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, n;
						return e = "", e += '<div class="filter_setting">', this.label && (e += '<label class="settings-label" for="filter">Display Filters at top of Feed</label>'), e += '<div class="white-select mb-40"><select id="filter_setting" name="feed[display_filter]">', _u.each(["None", "Social Type", "Social Account", "Grouped Terms"], (n = this, function (t) {
							return n.feed.get("display_filter") === t ? e += '<option selected="true" value="' : e += '<option value="', e += n.escape(t), e += '">', e += n.escape(t), e += "</option>"
						})), e += "</select></div></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_height"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="height white-field after-label"><label for="height">Height</label><input class="height" max="5000" min="100" name="feed[height]" type="number" value="', t += this.escape(this.feed.get("height")), t += '" /> <label for="height">px</label></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_interval"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="interval hide white-field after-label bordered"><label for="interval">Interval</label><input class="interval" max="30000" min="100" name="feed[interval]" type="number" value="', t += this.escape(this.feed.get("interval")), t += '" /> <label for="interval">ms</label></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_link"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e, n;
						return t = "", null != navigator.userAgent.match("Edge") && null != this.url.match("facebook") ? (t += '<a aria-label="', t += this.escape(this.aria), t += '"', e = "", 0 < (e += this.escape(this["class"])).length && (t += ' class="', t += e, t += '"'), t += ' href="', t += this.escape(this.url), t += '">') : (t += '<a aria-label="', t += this.escape(this.aria), t += '"', n = "", 0 < (n += this.escape(this["class"])).length && (t += ' class="', t += n, t += '"'), t += ' href="', t += this.escape(this.url), t += '" target="_blank">'), t += this.escape(Juicer.Helpers.numberWithCommas(this.label)), t += "</a>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_loading"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", this.container ? t += '<div class="j-loading-container"><div class="j-loading">Loading...</div></div>' : this.wrapper ? t += '<div class="j-loading-wrapper"><div class="j-loading">Loading...</div></div>' : this.inFeed ? t += '<div class="j-loading-wrapper" style="height: 42px"><div class="j-loading">Loading...</div></div>' : t += '<div class="j-loading">Loading...</div>', t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_message"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", (null != this.post.get("unformatted_message") || this.post.tumblrTitle()) && (t += '<div class="j-message">', t += this.post.message(), t += "</div>"), t += Juicer.Helpers.renderPartial("edit", {
							post: this.post
						})
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_meta"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						return t = "", this.post.twitter() ? (t += '<div class="j-meta"><ul class="j-twitter-intents"><li><a class="j-twitter-reply" href="', t += this.escape(this.post.replyIntent()), t += '">Reply</a></li><li><a class="j-twitter-retweet" href="', t += this.escape(this.post.retweetIntent()), t += '">Retweet</a></li><li><a class="j-twitter-like" href="', t += this.escape(this.post.likeIntent()), t += '">Like</a></li></ul>', e = this.post.get("external_created_at"), t += '<a href="', t += this.escape(this.post.link()), t += '" target="_blank"><time class="j-date j-twitter-date" datetime="', t += this.escape(e), t += '">', t += this.escape(Juicer.Helpers.fullDate(e, "%-d %b %Y", !1)), t += "</time></a></div>") : "Juicer" !== this.post.sourceType() && (t += '<div class="j-meta"><ul>', this.post.noMeta() || "YouTube" === this.post.sourceType() || (0 < this.post.get("comment_count") && (t += "<li>", t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: this.post.get("comment_count"),
							"class": this.post.commentClass(),
							aria: "Comments"
						}), t += "</li>"), 0 < this.post.get("like_count") && (t += "<li>", t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: this.post.get("like_count"),
							"class": this.post.likeClass(),
							aria: "Likes"
						}), t += "</li>")), t += "</ul><nav>", t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: "",
							"class": "j-social j-" + this.post.lowerType() + " j-" + this.post.lowerType() + "-text-hover",
							aria: this.post.lowerType()
						}), t += "</nav></div>"), t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_moderated_posts"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var n, t, i;
						return n = "", 0 < (t = this.feed.get("posts").models).length ? _u.each(t, (i = this, function (t) {
							var e;
							return n += "<li", e = "", 0 < (e += i.escape(t.classes())).length && (n += ' class="', n += e, n += '"'), n += ">", n += Juicer.Helpers.renderPartial("actions", {
								isOnFeedsDashboard: !0,
								post: t
							}), n += Juicer.Helpers.renderPartial("feeds/user", {
								post: t,
								feed: i.feed
							}), n += "</li>"
						})) : n += '<div class="empty"><h2>No Moderated Posts!</h2></div>', n
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_order"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, n;
						return e = "", e += '<div class="order"><label class="settings-label" for="order">Post Order</label><div class="white-select mb-30"><select id="css" name="feed[order]">', _u.each([
							["created_at", "Most Recent First"],
							["mixed", "Mixed"],
							["random", "Random"],
							["popular", "Most Popular"]
						], (n = this, function (t) {
							return n.feed.get("order") === t[0] ? e += '<option selected="true" value="' : e += '<option value="', e += n.escape(t[0]), e += '">', e += n.escape(t[1]), e += "</option>"
						})), e += "</select></div></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_poster"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						return t = "", this.lazyLoad = this.lazyLoad || null != this.feed && this.feed.get("lazy_load") || !1, e = this.post.get("external_created_at"), t += '<div class="j-poster">', this.post.poster() ? (t += '<a href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', this.post.get("poster_image") && (this.lazyLoad && "slider" === this.feed.get("style") || (this.lazyLoad ? (t += '<img alt="Profile image for ', t += this.escape(this.post.get("poster_name")), t += '" data-lazy="', t += this.escape(this.post.posterImage()), t += '" data-poster-id="', t += this.escape(this.post.get("poster_id"))) : (t += '<img alt="Profile image for ', t += this.escape(this.post.get("poster_name")), t += '" data-poster-id="', t += this.escape(this.post.get("poster_id")), t += '" src="', t += this.escape(this.post.posterImage())), t += '" />')), this.post.twitter() ? (t += '<div class="j-twitter-poster"><div class="j-twitter-display-name">', t += this.escape(this.post.get("poster_display_name")), t += '</div><div class="j-twitter-screen-name">@', t += this.escape(this.post.get("poster_name")), t += "</div></div>") : (t += "<h3>", t += this.escape(this.post.get("poster_name")), t += "</h3>"), this.post.twitter() ? t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: "Twitter Logo",
							"class": "j-twitter j-twitter-text j-social j-twitter-post-icon",
							aria: "twitter"
						}) : this.post.ad || (t += '<time class="j-date" datetime="', t += this.escape(e), t += '">', t += this.escape(Juicer.Helpers.timeAgo(e)), t += "</time>"), t += "</a>") : (this.post.instagram() && (t += "<h3>An Instagram User</h3>"), t += '<time class="j-date" datetime="', t += this.escape(e), t += '">', t += this.escape(Juicer.Helpers.timeAgo(e)), t += "</time>"), t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_prevent_duplicates"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="prevent-duplicates thirteen"><input name="feed[prevent_duplicates]" type="hidden" value="0" />', this.feed.get("prevent_duplicates") ? t += '<input checked="true" id="prevent_duplicates" name="feed[prevent_duplicates]" type="checkbox" />' : t += '<input id="prevent_duplicates" name="feed[prevent_duplicates]" type="checkbox" />', t += '<label for="prevent_duplicates">Prevent Duplicate Posts</label><div aria-label="Juicer will remove any post that has the same text as another post from a different source. It does this scan hourly." class="sidebar-explainer sprite hint--right hint--medium"></div></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_profanity"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="profanity thirteen mb-10"><input name="feed[profanity]" type="hidden" value="0" />', this.feed.get("profanity") ? t += '<input checked="true" id="profanity" name="feed[profanity]" type="checkbox" />' : t += '<input id="profanity" name="feed[profanity]" type="checkbox" />', t += '<label for="profanity">Don\'t allow posts with profanity</label></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_referral"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<h1 class="referral"><a href="https://www.juicer.io">Powered by Juicer.io</a></h1>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_sources"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var i, r;
						return i = "", _u.each(["Facebook", "Twitter", "Instagram", "Instagram-Business", "YouTube", "Tumblr", "Pinterest", "Slack", "Blog", "Giphy", "Soundcloud", "Spotify", "LinkedIn", "Flickr", "Vimeo", "Yelp", "Hashtag"], (r = this, function (t) {
							var e, n;
							switch (n = t.toLowerCase(), i += '<li class="js-source j-social-icon ibt new-source-icon"', e = t) {
								case !0:
									i += ' data-type="data-type"';
									break;
								case !1:
								case null:
									break;
								default:
									i += ' data-type="', i += r.escape(e), i += '"'
							}
							return i += '><div class="font-icon j-', i += r.escape(n), i += " j-", i += r.escape(n), i += "-color ", i += r.escape("Instagram-Business" === t ? "j-instagram" : ""), i += '"></div><div class="icon-label">', i += "Blog" === t ? "Blog RSS " : "Instagram" === t ? "Instagram username " : "Instagram-Business" === t ? "Instagram hashtag " : r.escape(t), i += "</div></li>"
						})), i
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_toggle"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div aria-label="', t += this.escape(this.hint), t += '" class="bg-nav-header py-15 tac mb-10 hint--medium fw hint--', t += this.escape(this.hintPosition), t += " ", t += this.escape(this.attr), t += " ", t += this.escape(this.classes), t += '"><label class="bold thirteen">', t += this.label, t += '</label><div class="switch ibm ml-10"><input name="feed[', t += this.escape(this.attr), t += ']" type="hidden" value="0" />', this.feed.get(this.attr) ? t += '<input checked="true" class="switch-checkbox" id="' : t += '<input class="switch-checkbox" id="', t += this.escape(this.attr), t += '" name="feed[', t += this.escape(this.attr), t += ']" type="checkbox" />', t += '<label class="switch-label" for="', t += this.escape(this.attr), t += '"><span class="switch-inner"></span><span class="switch-dot"></span></label></div></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_upgrade_plan"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e, n;
						return t = "", n = this.css || "j-button", t += "<a", e = "", 0 < (e += this.escape(n)).length && (t += ' class="', t += e, t += '"'), t += ' href="/plans">Learn more about our other plans</a>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_widget_card"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (
							t = function (t) {
								var e;
								return (e = function () {}).prototype = t, new e
							}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						return t = "", t += "<li", e = "", 0 < (e += this.escape(this.post.classes())).length && (t += ' class="', t += e, t += '"'), t += ' data-id="', t += this.escape(this.post.get("id")), t += '">', t += Juicer.Helpers.renderPartial("actions", {
							isOnFeedsDashboard: this.isOnFeedsDashboard,
							post: this.post
						}), t += Juicer.Helpers.renderPartial("feeds/user", {
							post: this.post
						}), t += "</li>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/_width"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="width white-field after-label bordered"><label for="width">Width</label><input class="width" max="5000" min="100" name="feed[width]" type="number" value="', t += this.escape(this.feed.get("width")), t += '" /> <label for="width">px</label></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/feeds/_classic"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						return t = "", t += '<div class="j-meta j-', t += this.escape(this.post.lowerType()), t += '"><nav>', t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: "",
							"class": "j-" + this.post.lowerType() + " j-social",
							aria: "Link to " + this.post.lowerType() + " post."
						}), t += "</nav><ul>", this.post.noMeta() || (t += "<li>", t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: this.post.get("comment_count"),
							"class": this.post.commentClass(),
							aria: "Comment Count"
						}), t += "</li><li>", t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: this.post.get("like_count"),
							"class": this.post.likeClass(),
							aria: "Like Count"
						}), t += "</li>"), t += '</ul></div><div class="j-text"><div class="j-message">', t += this.post.message(), "Juicer" !== this.post.sourceType() && ("hashtag" === this.post.termType() ? (t += '<div class="info">Posted by <a href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.get("poster_name")), t += '</a> in <a href="', t += this.escape(this.post.termLink()), t += '" target="_blank">', t += this.escape(this.post.term()), t += "</a> on ", t += this.escape(this.post.sourceType()), t += " on ") : "Blog" === this.post.sourceType() ? (t += '<div class="info">Posted at <a href="http://', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.get("poster_name")), t += "</a> on ") : (t += '<div class="info">Posted by <a href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.get("poster_name")), t += "</a> on ", t += this.escape(this.post.sourceType()), t += " on "), t += this.escape(Juicer.Helpers.fullDate(this.post.get("external_created_at"))), t += " </div>"), t += "</div></div>", (e = this.post.get("image")) && (t += '<a href="', t += this.escape(this.post.link()), t += '" target="_blank"><img alt="', t += this.escape(this.post.alt()), t += '" class="j-content-image" src="', t += this.escape(e), t += '" /></a>'), t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/feeds/_image"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += Juicer.Helpers.renderPartial("content", {
							post: this.post,
							feed: this.feed
						}), t += '<div class="j-text">', t += Juicer.Helpers.renderPartial("poster", {
							post: this.post,
							feed: this.feed
						}), t += Juicer.Helpers.renderPartial("message", {
							post: this.post
						}), t += Juicer.Helpers.renderPartial("meta", {
							post: this.post
						}), t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/feeds/_night"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="j-text-container">', t += Juicer.Helpers.renderPartial("content", {
							post: this.post,
							feed: this.feed
						}), t += '<div class="j-text">', this.post.twitter() && (t += Juicer.Helpers.renderPartial("poster", {
							post: this.post,
							feed: this.feed
						})), t += Juicer.Helpers.renderPartial("message", {
							post: this.post
						}), "Juicer" === this.post.sourceType() || this.post.twitter() || (t += '<div class="j-meta"><ul><li>', t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: this.post.get("comment_count"),
							"class": this.post.commentClass(),
							aria: "Comments"
						}), t += "</li><li>", t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: this.post.get("like_count"),
							"class": this.post.likeClass(),
							aria: "Likes"
						}), t += "</li></ul></div>"), this.post.twitter() && (t += Juicer.Helpers.renderPartial("meta", {
							post: this.post
						})), t += "</div></div>", this.post.twitter() || (t += '<div class="j-poster-meta">', t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: "",
							"class": "j-" + this.post.lowerType() + " j-social-icon",
							aria: this.post.lowerType()
						}), t += '<a href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.get("poster_name")), t += "</a></div>"), t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/feeds/_polaroid"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						return t = "", this.post.get("poster_image") || (e = "no-poster"), this.post.twitter() || (t += Juicer.Helpers.renderPartial("content", {
							post: this.post,
							feed: this.feed
						})), t += '<div class="j-post-container ', t += this.escape(e), t += '">', t += Juicer.Helpers.renderPartial("poster", {
							post: this.post,
							feed: this.feed
						}), this.post.twitter() || (t += '<h3 class="j-poster-meta"><a class="up" href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.get("poster_name")), t += '</a> <span class="j-on">on</span> <a class="platform" href="', t += this.escape(this.post.get("poster_url")), t += '" target="_blank">', t += this.escape(this.post.sourceType()), t += "</a></h3>"), t += '<div class="j-text">', t += Juicer.Helpers.renderPartial("message", {
							post: this.post
						}), this.post.twitter() && (t += Juicer.Helpers.renderPartial("content", {
							post: this.post,
							feed: this.feed
						})), t += Juicer.Helpers.renderPartial("meta", {
							post: this.post
						}), t += "</div></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/feeds/_standard"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += Juicer.Helpers.renderPartial("content", {
							post: this.post,
							feed: this.feed
						}), t += '<div class="j-text">', t += Juicer.Helpers.renderPartial("message", {
							post: this.post
						}), t += Juicer.Helpers.renderPartial("meta", {
							post: this.post
						}), t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/feeds/_user"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += Juicer.Helpers.renderPartial("poster", {
							post: this.post,
							feed: this.feed
						}), this.post.twitter() || (t += Juicer.Helpers.renderPartial("content", {
							post: this.post,
							feed: this.feed
						})), t += '<div class="j-text">', t += Juicer.Helpers.renderPartial("message", {
							post: this.post
						}), this.post.twitter() && (t += Juicer.Helpers.renderPartial("content", {
							post: this.post,
							feed: this.feed
						})), t += Juicer.Helpers.renderPartial("meta", {
							post: this.post
						}), t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/feeds/_wall"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						return t = "", t += "<li", e = "", 0 < (e += this.escape(this.post.classes())).length && (t += ' class="', t += e, t += '"'), t += ' data-id="', t += this.escape(this.post.get("id")), t += '">', t += Juicer.Helpers.renderPartial("actions", {
							isOnFeedsDashboard: this.isOnFeedsDashboard,
							post: this.post
						}), null != this.post.get("image") ? (t += '<img alt="', t += this.escape(this.post.alt()), t += '" class="j-content-image" src="', t += this.escape(this.post.get("image")), t += '" />') : (t += '<div class="j-text">', t += Juicer.Helpers.renderPartial("message", {
							post: this.post
						}), t += "</div>"), t += '<a class="j-image" href="', t += this.escape(this.post.link()), t += '" target="_blank"><div class="j-living-wall-hover"></div></a></li>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/filters/_new"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var s, o;
						return s = "", s += '<ul class="j-display-filters">Filters: ', _u.each(this.feed.filters(), (o = this, function (t) {
							var e, n, i, r;
							return i = o.feed.get("display_filter"), n = o.filter || o.feed.filter, (t.filter(i) === n || null === t.filter("filter") && "" === n) && (r = !0), s += "<li", e = "", 0 < (e += o.escape(t.filterClass(i, r, !0))).length && (s += ' class="', s += e, s += '"'), s += ' data-filter="', s += o.escape(t.filter(i)), s += '">', s += o.escape(t.filterDisplay(i)), s += "</li>"
						})), s += "</ul>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/filters/_old"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var s, o;
						return s = "", s += '<ul class="j-filters filters">', _u.each(this.feed.filters(), (o = this, function (t) {
							var e, n, i, r;
							return i = o.feed.get("display_filter"), n = o.filter || o.feed.filter, (t.filter(i) === n || null === t.filter("filter") && "" === n) && (r = !0), s += "<li", e = "", 0 < (e += o.escape(t.filterClass(i, r))).length && (s += ' class="', s += e, s += '"'), s += ' data-filter="', s += o.escape(t.filter(i)), s += '">', s += o.escape(t.filterDisplay(i)), s += "</li>"
						})), s += "</ul>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_groups"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, n;
						return e = "", e += '<h2 class="new-source-title">Connect Facebook Group Posts</h2>', this.results ? 0 < this.results.models.length ? (e += '<form accept-charset="UTF-8" action="/feeds/', e += this.escape(this.feedId), e += '/sources" class="source-form" method="post"><input name="source" type="hidden" value="Facebook" /><input name="feed_id" type="hidden" value="', e += this.escape(this.feedId), e += '" /><input name="term_type" type="hidden" value="group" /><input class="result-term" name="term" type="hidden" /><input class="result-name" name="name" type="hidden" /><ul class="search-results">', _u.each(this.results.models, (n = this, function (t) {
							return e += '<li class="search-result" data-id="', e += n.escape(t.get("id")), e += '" data-name="', e += n.escape(t.get("name")), e += '">', e += n.escape(t.get("name")), e += "</li>"
						})), e += "</ul></form>") : e += "<h2>Sorry you aren't the admin of any facebook groups.</h2>" : e += '<a class="j-button j-facebook j-facebook-border j-social-icon social-account social-j-button" href="/auth/facebook">Connect your Facebook account</a>', e
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_hashtag"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						return t = "", "Pinterest" === this.source.source() ? t += '<h2 class="new-source-title">Add Pinterest Board</h2>' : "Spotify" === this.source.source() ? t += '<h2 class="new-source-title">Pull In Your Top Spotify Tracks</h2>' : (t += '<h2 class="new-source-title">Add ', t += this.escape(this.source.source()), t += " Hashtag</h2>"), t += '<form accept-charset="UTF-8" action="#" class="source-form" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /></div><input name="source" type="hidden" value="', t += this.escape(this.source.source()), t += '" /><input name="feed_id" type="hidden" value="', t += this.escape(this.feedId), t += '" /><input name="term_type" type="hidden" value="', t += this.escape(this.type), t += '" />', "Pinterest" === this.source.source() ? (t += '<label for="source_term">', t += this.escape(this.source.label()), t += "</label>") : "Spotify" === this.source.source() ? (t += '<input name="term" type="hidden" value="', t += this.escape(this.socialAccount.get("name")), t += '" />') : t += '<label for="source_term">#</label>', e = "Pinterest" === this.source.source() ? "pinterest-username/board-name" : "", "Spotify" !== this.source.source() && (t += '<input autocomplete="off" id="source_term" name="term" placeholder="', t += this.escape(e), t += '" type="text" />'), "Twitter" === this.source.source() && (t += '<div class="feed-term-type"><input id="replies" name="replies" type="checkbox" value="replies" /><label for="replies">Include @replies</label></div>'), t += '<input class="new-source-submit green" name="commit" type="submit" value="Create Source" /></form>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_max"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<h2>You need to upgrade to add more sources</h2><h3 style="margin-bottom:1.5rem">Unfortunately, the ', t += this.escape(this.feed.get("plan")), t += " plan only allows ", t += this.escape(this.feed.get("max_sources")), t += " sources.</h3>", t += Juicer.Helpers.renderPartial("upgrade_plan", {
							feed: this.feed
						})
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_new"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var n, t, e, i, r, s, o, a, l, c, u, p;
						return n = "", u = (l = this.source.get("source")).toLowerCase(), this.source.needsLogin() && !this.socialAccounts.socialAccount(u) ? (n += '<div class="new-source-container"><h2 class="new-source-title">Please connect your ', n += this.escape(l), n += ' account.</h2><p class="tc-gray connect-explanation">We ask that you connect your ', n += this.escape(l), n += " account so that we don't run into API rate limits. <strong>This will not automatically pull your ", n += this.escape(l), n += " posts.</strong> ", t = "instagram" === u ? "add the posts of your connected account" : "facebook" === u ? "add a Facebook source and display posts" : "add the posts of ANY public user or hashtags", n += "After you have connected your account, you can ", n += this.escape(t), n += ". </p>", o = window.juicerWL ? "?wl=" + window.juicerWL : "", n += '<a class="j-button j-', n += this.escape(u), n += " j-", n += this.escape(u), n += "-bg j-social-icon j-", n += this.escape(u), n += '-border social-account social-j-button" data-method="post" href="/auth/', n += this.escape(u), n += this.escape(o), n += '">Connect your ', n += this.escape(l), n += " account</a></div>") : ("Instagram" !== l && this.source.hashtags() && (n += '<nav><ul class="source-types">', _u.each(["Username", "Hashtag"], (p = this, function (t) {
							var e;
							return e = t.toLowerCase() === p.type ? "active" : "", "Pinterest" === p.source.source() && "Hashtag" === t ? (n += '<li class="source-type ', n += p.escape(e), n += '" data-type="', n += p.escape(t.toLowerCase()), n += '">Board</li>') : "Spotify" === p.source.source() && "Username" === t ? (n += '<li class="source-type ', n += p.escape(e), n += '" data-type="', n += p.escape(t.toLowerCase()), n += '">Artist</li>') : "Facebook" === p.source.source() && "Username" === t ? (n += '<li class="source-type ', n += p.escape(e), n += '" data-type="', n += p.escape(t.toLowerCase()), n += '">Your Page</li>') : "Spotify" === p.source.source() && "Hashtag" === t ? (n += '<li class="source-type ', n += p.escape(e), n += '" data-type="', n += p.escape(t.toLowerCase()), n += '">Your Top Tracks</li>') : "Facebook" !== p.source.source() || "Hashtag" !== t ? (n += '<li class="source-type ', n += p.escape(e), n += '" data-type="', n += p.escape(t.toLowerCase()), n += '">', n += p.escape(t), n += "</li>") : void 0
						})), "Facebook" === this.source.source() && (s = "public_page" === this.type ? "active" : "", n += '<li class="source-type ', n += this.escape(s), n += '" data-type="public_page">3rd Party Page</li>', r = "personal" === this.type ? "active" : "", n += '<li class="source-type ', n += this.escape(r), n += '" data-type="personal">Personal Account</li>', i = "groups" === this.type ? "active" : "", n += '<li class="source-type ', n += this.escape(i), n += '" data-type="groups">Group</li>', a = "reviews" === this.type ? "active" : "", n += '<li class="source-type ', n += this.escape(a), n += '" data-type="reviews">Reviews</li>'), n += "</ul></nav>"), e = this.feed ? this.feed.get("id") : void 0, c = {
							Blog: "360040453011-Blog-sources-Adding-and-troubleshooting",
							Facebook: "360039995932-Facebook-sources-Adding-and-troubleshooting",
							Flickr: "360040042652-Flickr-sources-Adding-and-troubleshooting",
							Giphy: "360040043352-Giphy-sources-Adding-and-troubleshooting",
							Pinterest: "360039996392-Pinterest-sources-Adding-and-troubleshooting",
							Slack: "360040448211-Slack-sources-Adding-and-troubleshooting",
							Soundcloud: "360040043512-Soundcloud-sources-Adding-and-troubleshooting",
							Spotify: "360040038572-Spotify-sources-Adding-and-troubleshooting",
							Tumblr: "360040038412-Tumblr-sources-Adding-and-troubleshooting",
							Twitter: "360040405811-Twitter-sources-Adding-and-troubleshooting",
							Vimeo: "360040448291-Vimeo-sources-adding-and-troubleshooting",
							Yelp: "360040042912-Yelp-sources-Adding-and-troubleshooting",
							YouTube: "360040406271-YouTube-sources-Adding-and-troubleshooting"
						}, n += '<div class="new-source-container">', "Hashtag" !== l && (n += '<a aria-label="Learn more about ', n += this.escape(l), n += ' sources" class="new-source-help sprite hint--bottom-left" href="', n += this.escape(Juicer.Constants.HELP_CENTER_URL), n += "/articles/", n += this.escape(c[l]), n += '" target="_blank">Help</a>'), n += Juicer.Helpers.renderPartial("source_form/" + this.type, {
							source: this.source,
							csrf: this.csrf,
							feedId: e,
							type: this.type,
							socialAccount: this.socialAccounts.socialAccount(u),
							results: this.results
						}), n += "</div>"), n
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_personal"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<h2 class="new-source-title">Add Personal Facebook Account</h2>', this.socialAccount ? (t += '<form accept-charset="UTF-8" action="#" class="source-form" method="post"><input name="source" type="hidden" value="Facebook" /><input name="feed_id" type="hidden" value="', t += this.escape(this.feedId), t += '" /><input name="term" type="hidden" value="', t += this.escape(this.socialAccount.get("name")), t += '" /><input name="term_type" type="hidden" value="personal" /><input class="j-facebook j-button j-social-icon j-facebook-border social-account social-j-button" name="commit" type="submit" value="Pull in ', t += this.escape(this.socialAccount.get("name")), t += '&#39;s Facebook posts" /></form>') : t += '<a class="j-button j-facebook j-facebook-border j-social-icon social-account social-j-button" data-method="post" href="/auth/facebook">Connect your Facebook account</a>', t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_public_page"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "",
							t += '<div class="compact-source"><h2 class="new-source-title">Add 3rd Party Facebook Page</h2><div class="new-source-warning"><strong>Heads-up</strong><span>, Facebook plans API policy changes in early 2020, after these changes we won\'t be able to support Third Party Facebook Pages (these are pages that you do not have administrative access to). To ensure that you\'re ready for this, make sure your Facebook account has management access to relevant Facebook Pages and that these Pages appear in the "Your Page" tab above.</span><a aria-label="Learn more" href="', t += this.escape(Juicer.Constants.HELP_CENTER_URL), t += '/articles/360039938752-Validating-ownership-of-your-Facebook-sources" target="_blank"> Learn more</a></div><form accept-charset="UTF-8" action="#" class="source-form" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /></div><input name="source" type="hidden" value="', t += this.escape(this.source.source()), t += '" /><input name="feed_id" type="hidden" value="', t += this.escape(this.feedId), t += '" /><input name="term_type" type="hidden" value="username" /><label for="source_term">', t += this.escape(this.source.label()), t += '</label><input autocomplete="off" id="source_term" name="term" placeholder="', t += this.escape(this.source.placeholder()), t += '" type="text" /><div class="feed-term-type"><input id="term_type" name="term_type" type="checkbox" value="feed" /><label for="term_type">Include posts that mention my page.</label></div><input class="new-source-submit green" name="commit" type="submit" value="Create Source" /></form>', t += Juicer.Helpers.renderPartial("source_form/username_example", {
								source: this.source
							}), t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_reviews"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, n;
						return e = "", e += '<h2 class="new-source-title">Connect Facebook Page Reviews</h2>', this.results ? 0 < this.results.models.length ? (e += '<form accept-charset="UTF-8" action="/feeds/', e += this.escape(this.feedId), e += '/sources" class="source-form" method="post"><input name="source" type="hidden" value="Facebook" /><input name="feed_id" type="hidden" value="', e += this.escape(this.feedId), e += '" /><input name="term_type" type="hidden" value="reviews" /><input class="result-term" name="term" type="hidden" /><input class="result-name" name="name" type="hidden" /><ul class="search-results">', _u.each(this.results.models, (n = this, function (t) {
							return e += '<li class="search-result" data-id="', e += n.escape(t.get("id")), e += '" data-name="', e += n.escape(t.get("name")), e += '">', e += n.escape(t.get("name")), e += "</li>"
						})), e += "</ul></form>") : e += "<h2>Sorry you aren't the admin of any facebook pages.</h2>" : e += '<a class="j-button j-facebook j-facebook-border j-social-icon social-account social-j-button" data-method="post" href="/auth/facebook">Connect your Facebook account</a>', e
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_username"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", "Facebook" === this.source.source() ? t += Juicer.Helpers.renderPartial("source_form/username_pages", {
							source: this.source,
							csrf: this.csrf,
							feedId: this.feedId,
							type: this.type,
							socialAccount: this.socialAccount,
							results: this.results
						}) : t += Juicer.Helpers.renderPartial("source_form/username_input", {
							source: this.source,
							csrf: this.csrf,
							feedId: this.feedId,
							type: this.type,
							socialAccount: this.socialAccount,
							results: this.results
						}), t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_username_example"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						return t = "", (e = this.source.usernameExample()) && (t += '<div class="source-form-example mt-40"><h4 class="tc-orange ibt bold">For Example:</h4> if you want to add ', t += this.escape(e.name), t += ' copy & paste the bold part: <br /><a href="', t += this.escape(e.link), t += '" target="_blank">', t += e.formattedLink, t += "</a></div>"), t
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_username_input"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var n, i;
						return n = "", n += '<h2 class="new-source-title">', n += this.escape(this.source.title()), n += '</h2><form accept-charset="UTF-8" action="#" class="source-form" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /></div><input name="source" type="hidden" value="', n += this.escape(this.source.source()), n += '" /><input name="feed_id" type="hidden" value="', n += this.escape(this.feedId), n += '" /><input name="term_type" type="hidden" value="', n += this.escape(this.type), n += '" />', "Tumblr" === this.source.source() ? (n += '<label for="source_term">http://</label><input autocomplete="off" id="source_term" name="term" placeholder="', n += this.escape(this.source.placeholder()), n += '" type="text" /><label for="source_term">.tumblr.com</label>') : "Hashtag" === this.source.source() ? (n += '<ul class="add-a-hashtag">', _u.each(_u.filter(this.source.hashtagSupporters, function (t) {
							return "Facebook" !== t
						}), (i = this, function (t) {
							var e;
							return e = t.toLowerCase(), n += '<li class="j-', n += i.escape(e), n += " j-", n += i.escape(e), n += '-color hashtag-source j-social-icon ibt tc-white" data-type="', n += i.escape(t), n += '"><div class="tc-slevin">', n += i.escape(t), n += "</div></li>"
						})), n += "</ul>") : (n += '<label for="source_term">', n += this.escape(this.source.label()), n += '</label><input autocomplete="off" id="source_term" name="term" placeholder="', n += this.escape(this.source.placeholder()), n += '" type="text" />', "Facebook" === this.source.source() && (n += '<div class="feed-term-type"><input id="term_type" name="term_type" type="checkbox" value="feed" /><label for="term_type">Include posts that mention my page.</label></div>'), "Twitter" === this.source.source() && (n += '<div class="feed-term-type"><input id="retweets" name="retweets" type="checkbox" value="retweets" /><label for="retweets">Include retweets</label><input id="replies" name="replies" type="checkbox" value="replies" /><label for="replies">Include @replies</label></div>')), "Hashtag" !== this.source.source() && (n += '<input class="new-source-submit green" name="commit" type="submit" value="Create Source" />', n += Juicer.Helpers.renderPartial("source_form/username_example", {
							source: this.source
						})), n += "</form>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/source_form/_username_pages"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var e, n;
						return e = "", e += '<h2 class="new-source-title">Add your Facebook Page</h2>', this.results ? 0 < this.results.models.length ? (e += '<form accept-charset="UTF-8" action="/feeds/', e += this.escape(this.feedId), e += '/sources" class="source-form" method="post"><input name="source" type="hidden" value="Facebook" /><input name="feed_id" type="hidden" value="', e += this.escape(this.feedId), e += '" /><input name="term_type" type="hidden" value="username" /><input class="result-term" name="term" type="hidden" /><input class="result-name" name="name" type="hidden" /><ul class="search-results">', _u.each(this.results.models, (n = this, function (t) {
							return e += '<li class="search-result" data-id="', e += n.escape(t.get("id")), e += '" data-name="', e += n.escape(t.get("name")), e += '">', e += n.escape(t.get("name")), e += "</li>"
						})), e += "</ul></form>") : e += "<h2>Sorry you aren't the admin of any facebook pages.</h2>" : e += '<a class="j-button j-facebook j-facebook-border j-social-icon social-account social-j-button" data-method="post" href="/auth/facebook">Connect your Facebook account</a>', e += '<div class="new-source-warning">Not seeing your page here? Make sure the Facebook account that you\'ve connected has management access to the relevant Facebook Page. Alternatively use "3rd Party Page" tab above.</div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_blog_embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						switch (t = "", t += '<div class="video-wrapper">', t += '<video autoplay="autoplay"', e = !!this.overlay) {
							case !0:
								t += ' controls="controls"';
								break;
							case !1:
							case null:
								break;
							default:
								t += ' controls="', t += this.escape(e), t += '"'
						}
						return t += ' loop="true"><source src="', t += this.escape(this.video), t += '" type="video/mp4" /></video></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_facebook_embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						switch (t = "", t += '<div class="video-wrapper">', t += '<video autoplay="autoplay"', e = !!this.overlay) {
							case !0:
								t += ' controls="controls"';
								break;
							case !1:
							case null:
								break;
							default:
								t += ' controls="', t += this.escape(e), t += '"'
						}
						return t += ' loop="true"><source src="', t += this.escape(this.video), t += '" type="video/mp4" /></video></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_flickr"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="video-wrapper"><embed autoplay="true" autostart="true" play="true" src="', t += this.escape(this.video), t += '&amp;autoPlay=true" wmode="transparent" /></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_instagram_embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						switch (t = "", t += '<div class="instagram-wrapper">', t += '<video autoplay="autoplay"', e = !!this.overlay) {
							case !0:
								t += ' controls="controls"';
								break;
							case !1:
							case null:
								break;
							default:
								t += ' controls="', t += this.escape(e), t += '"'
						}
						return t += ' id="video" loop="true"><source src="', t += this.escape(this.video), t += '" /></video>', this.post && (t += '<a class="j-video-fallback" href="', t += this.escape(this.post.link()), t += '" style="display: none;" target="_blank"><img data-lazy="', t += this.escape(this.post.get("image")), t += '" /></a>'), t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_soundcloud_embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="video-wrapper"><iframe allow="autoplay" frameborder="no" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/', t += this.escape(this.id), t += '&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true&amp;show_teaser=false"></iframe></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_spotify_embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="video-wrapper"><iframe allowtransparency="true" frameborder="0" src="https://embed.spotify.com/?uri=spotify:track:', t += this.escape(this.id), t += '"></iframe></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_tumblr_embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="video-wrapper">', t += this.video, t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_twitter_embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						switch (t = "", t += '<div class="twitter-wrapper">', t += '<video autoplay="autoplay"', e = !!this.overlay) {
							case !0:
								t += ' controls="controls"';
								break;
							case !1:
							case null:
								break;
							default:
								t += ' controls="', t += this.escape(e), t += '"'
						}
						return t += ' loop="true"><source src="', t += this.escape(this.video), t += '" type="video/mp4" /></video></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_vimeo_embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="video-wrapper"><iframe allowfullscreen="true" frameborder="0" mozallowfullscreen="true" src="//player.vimeo.com/video/', t += this.escape(this.id), t += '?autoplay=1&amp;title=0&amp;byline=0&amp;portrait=0" webkitallowfullscreen="true"></iframe></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_vine_embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="vine-wrapper"><iframe frameborder="0" src="', t += this.escape(this.id), t += '/card?audio=1"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["partials/video/_youtube_embed"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						return t = "", t += '<div class="video-wrapper">', e = this.overlay ? "autoplay=1&rel=0" : "autoplay=1&rel=0&controls=0", t += '<iframe allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube-nocookie.com/embed/', t += this.escape(this.id), t += "?", t += this.escape(e), t += '"></iframe></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.plan_change = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e, n, i;
						if (t = "", t += '<div class="change-plan-overlay"><h2 class="light tc-dark-gray fs-1-75">Changing Your Juicer Plan </h2><div class="plan-change-summary cf mb-40 pb-40 relative"><div class="existing-plan fl"><h3 class="bold tc-dark-gray fs-1-5">Current Plan: <br />', t += this.escape(this.model.planCapital()), t += ": ", t += this.escape(this.model.get("cost_formatted")), t += "/mo </h3><h4>", t += this.model.get("subtitle"), t += '</h4></div><div class="change-plan-arrow sprite"></div><div class="new-plan fr"><h3 class="bold tc-dark-gray fs-1-5">New Plan: <br />', t += this.escape(this.model.newPlanCapital()), t += ": ", t += this.escape(this.model.get("new_cost_formatted")), t += "/mo </h3><h4>", t += this.model.get("new_subtitle"), t += "</h4></div></div>", "small" === this.model.get("new_plan")) {
							switch (t += '<div class="change-plan-explainer mb-25">Your subscription will no longer renew and your Juicer account will automatically downgrade to a <strong>Small</strong> plan on <strong>', t += this.escape(this.model.downgradeDate()), t += '</strong></div><div class="archive-mode-explainer"><strong class="tc-grapefruit up">Notice:</strong> Fully downgrading will remove all extra sources and feeds from your Juicer account. If you\u2019d like to keep an archive of these feeds, consider downgrading to <a class="tc-grapefruit tdu" data-method="put" href="/plans/archive">Archive Mode</a> for $5/Month! <form action="/churns" class="tac mt-30" method="post"><input name="authenticity_token" type="hidden"', e = this.csrf) {
								case !0:
									t += ' value="value"';
									break;
								case !1:
								case null:
									break;
								default:
									t += ' value="', t += this.escape(e), t += '"'
							}
							t += ' /><input name="redirect_path" type="hidden" value="/downgrade" /><input class="j-button" data-confirm="Are you sure you want to downgrade to small?" data-disable-with="Downgrading..." type="submit" value="Downgrade to Small" /></form></div>'
						} else {
							switch (this.model.downgradeDate() && (t += '<div class="change-plan-explainer">You will be charged a prorated amount for the remainer of this month for this new plan, and fully charged next on your normal billing date <strong>', t += this.escape(this.model.downgradeDate()), t += "</strong></div>"), t += '<form action="/plans/', t += this.escape(this.model.get("new_plan")), t += '" class="tac mt-30" method="post"><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden"', n = this.csrf) {
								case !0:
									t += ' value="value"';
									break;
								case !1:
								case null:
									break;
								default:
									t += ' value="', t += this.escape(n), t += '"'
							}
							switch (t += ' /><input class="j-button" data-disable-with="Loading..." type="submit"', i = this.model.get("plan_button_label_for_price_table")) {
								case !0:
									t += ' value="value"';
									break;
								case !1:
								case null:
									break;
								default:
									t += ' value="', t += this.escape(i), t += '"'
							}
							t += " /></form>"
						}
						return t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.please_wait = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="mt-15 tc-gray fourteen please-wait"><h3 class="strong">Please be patient.</h3><p>It can take up to 30 seconds to pull in all the posts.</p><p>Taking forever? <a class="tc-gray bold" href="/contact">Contact us</a></p></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.post_edit = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g,
								"&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="p-50"><h2 class="tac light fs-2 tc-orange mb-30">Edit Post</h2>', t += Juicer.Helpers.renderPartial("poster", {
							post: this.post
						}), t += '<div class="message-container">', t += Juicer.Helpers.renderPartial("message", {
							post: this.post
						}), t += "</div>", this.feed.get("moderation_allowed?") ? (t += '<form><textarea class="bordered my-25" placeholder="Add text or links to the post">', t += this.escape(this.post.get("edit")), t += '</textarea><div class="tac"><input class="j-button" type="submit" value="Add content" /></div></form>') : t += '<h3>Only Paid accounts can edit posts. <a href="/plans">Upgrade your account.</a></h3>', t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.post_overlay = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e, n;
						return t = "", e = "YouTube" !== this.post.sourceType() ? "is-not-youTube" : "", n = "YouTube" === this.post.sourceType() ? "is-youTube" : "", t += '<div class="j-post-overlay juicer-feed loaded ', t += this.escape(n), t += " ", t += this.escape(this.post.gallery() ? "j-gallery" : void 0), t += '" data-id="', t += this.escape(this.post.get("id")), t += '">', this.post.isVideo() ? t += Juicer.Helpers.renderPartial("video/" + this.post.lowerType() + "_embed", {
							id: this.post.get("external_id"),
							video: this.post.get("video"),
							overlay: !0,
							post: this.post
						}) : (t += '<div class="image">', t += Juicer.Helpers.renderPartial("content", {
							post: this.post,
							feed: this.feed,
							overlay: !0
						}), t += "</div>"), t += '<div class="j-overlay-text ', t += this.escape(this.post.postType()), t += " ", t += this.escape(e), t += '">', t += Juicer.Helpers.renderPartial("poster", {
							post: this.post,
							lazyLoad: !1
						}), this.post.get("unformatted_message") && (t += '<div class="j-message">', t += this.post.fullMessage(), t += "</div>"), t += Juicer.Helpers.renderPartial("edit", {
							post: this.post
						}), t += Juicer.Helpers.renderPartial("meta", {
							post: this.post
						}), t += '<div class="j-bottom">', t += Juicer.Helpers.renderPartial("link", {
							url: this.post.link(),
							label: "View on " + this.post.sourceType(),
							"class": "juicer-button " + ("YouTube" === this.post.sourceType() ? "" : "j-" + this.post.lowerType()),
							aria: this.post.lowerType()
						}), t += '<ul class="j-share"><li><a class="j-facebook share" href="', t += this.escape(this.post.facebookShare()), t += '" target="_blank">Facebook</a></li><li><a class="j-twitter share" href="', t += this.escape(this.post.twitterShare()), t += '" target="_blank">Twitter</a></li><li><a class="j-pinterest share" href="', t += this.escape(this.post.pinterestShare()), t += '" target="_blank">Pinterest</a></li><li><a class="j-linkedin share" href="', t += this.escape(this.post.linkedInShare()), t += '" target="_blank">LinkedIn</a></li><li><a class="j-email share" href="', t += this.escape(this.post.emailShare()), t += '" target="_blank">Email</a></li></ul></div><div class="j-navigate"><a class="j-previous" data-post-id="', t += this.escape(this.previous.get("id")), t += '"><span>Previous</span></a><a class="j-next" data-post-id="', t += this.escape(this.next.get("id")), t += '"><span>Next</span></a></div></div></div>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.sidebar = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						if (t = "", t += '<h1 class="fs-1-75 tc-off-white sidebar-feed-name"><a class="js-feed-name-edit tdu-hover d-flex align-items-center pointer px-15" title="Edit feed name and URL">', t += this.escape(this.feed.get("name")), t += '<span class="ml-10 juicer-fa-edit fs-1 hide-on-white-label"></span></a></h1>', window.juicerDashboard.userUpgradePath) {
							switch (t += '<a class="tdu-hover d-flex px-15 align-items-center tc-off-white pt-10 pb-20"', e = window.juicerDashboard.userUpgradePath) {
								case !0:
									t += ' href="href"';
									break;
								case !1:
								case null:
									break;
								default:
									t += ' href="', t += this.escape(e), t += '"'
							}
							t += ' title="Change the feed&#39;s update frequency">Updates: ', t += window.juicerDashboard.updateFrequencyInWords.toLowerCase(), t += ' <div class="ml-10 juicer-fa-edit"></div></a>'
						}
						return t += '<div class="relative pt-20" style="border-top: 1px solid #3a3d43"><div class="px-15 mb-30"><a class="j-button add-source d-flex justify-content-center">+ Add Social Media Source </a></div><ul class="sidebar-menu tc-off-white"><li class="menu-item" id="sources">Social Media Sources</li><li class="menu-item" data-moderation-count="!" id="social_accounts"><a href="/social-accounts"><span class="mr-10">Your Social Accounts</span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432 320h-32a16 16 0 00-16 16v112H64V128h144a16 16 0 0016-16V80a16 16 0 00-16-16H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V336a16 16 0 00-16-16zM488 0H360c-21 0-32 26-17 41l36 36-244 243a24 24 0 000 34l23 23a24 24 0 0034 0l243-244 36 36c15 15 41 5 41-17V24a24 24 0 00-24-24z"/></svg></span></a></li><li class="menu-item" id="settings">Feed Settings</li><li class="menu-item" id="design">Custom Design</li><li class="menu-item" id="embed">Embed in your Site</li><li class="menu-item alert-menu-item" data-moderation-count="', t += this.escape(this.feed.moderationStatus()), t += '" id="moderate">Moderate and Filter</li><li class="menu-item slide-menu-item" id="analytics">Analytics</li><li class="menu-item slide-menu-item" id="hub">Share your Feed</li>', "small" === this.feed.get("plan") && (t += '<li class="menu-item slide-menu-item" id="features">Additional Features</li>'), t += '<li class="menu-item slide-menu-item" id="synced">Last Sync ', t += this.escape(Juicer.Helpers.fullDate(this.feed.get("last_synced"), "%b/%-d/%y at %-l:%M%p")), t += "</li></ul></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.source_form = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e;
						return t = "", e = {
							source: this.source,
							csrf: this.csrf,
							feed: this.feed,
							type: this.type,
							socialAccounts: this.socialAccounts,
							results: this.results
						}, t += '<div class="tac">', this.feed ? this.feed.get("more_sources_allowed?") ? t += Juicer.Helpers.renderPartial("source_form/new", e) : (t += '<div class="p-50"><h2 class="tc-orange fs-2 light">Upgrade to add more sources</h2><h3 class="mb-25">Unfortunately, the ', t += this.escape(this.feed.get("plan")), t += " plan only allows ", t += this.escape(this.feed.get("max_sources")), t += " sources.</h3>", t += Juicer.Helpers.renderPartial("upgrade_plan", {
							feed: this.feed
						}), t += "</div>") : t += Juicer.Helpers.renderPartial("source_form/new", e), t += "</div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["sources/manual"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<form accept-charset="UTF-8" class="tac p-50" id="manual_post" method="post"><h2 class="light fs-2 tc-orange mb-30">Add a Post Manually to ', t += this.escape(this.source.displayName()), t += "</h2>", this.feed.notSmall() ? (t += '<input name="source_id" type="hidden" value="', t += this.escape(this.source.get("id")), t += '"><input autocomplete="off" class="source-overlay-field" id="link" name="link" placeholder="ex: https://twitter.com/juicerio/status/615555384300961792" type="text" /><input class="j-button" name="commit" type="submit" value="Add Post" /></input>') : (t += '<h3 style="margin-bottom:1.5rem">Unfortunately, the ', t += this.escape(this.feed.get("plan")), t += " plan doesn't allow you to manually enter posts. Please upgrade!</h3>", t += Juicer.Helpers.renderPartial("upgrade_plan", {
							feed: this.feed
						})), t += "</form>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["sources/moderation"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t, e, n;
						return t = "", t += '<form accept-charset="UTF-8" class="tac p-50 source-update" method="post"><input name="id" type="hidden" value="', t += this.escape(this.source.get("id")), t += '" /><h2 class="light fs-2 tc-orange mb-30">Set Moderation Filters for ', t += this.escape(this.source.displayName()), t += '</h2><h3 class="fifteen tc-dark-gray mb-15">These work the same way as the moderation and filtering for your whole feed, but just apply to this one sources posts. Read more about it <a class="tc-dark-gray bold" href="/blog/walkthrough-moderating-and-filtering-your-social-posts-in-juicer">here</a>. </h3>', n = "list words, @usernames, or #hastags", e = "Separate filters with a comma. Filters are case-sensitive.", t += '<h3 class="settings-label">Disallow posts with these words:</h3><textarea class="moderation-filter source-overlay-textarea thirteen mb-10 bc-gray" name="disallowed" placeholder="', t += this.escape(n), t += " to block. ", t += this.escape(e), t += '">', t += this.source.disallowed(), t += '</textarea><h3 class="settings-label">Only allow posts with these words:</h3><textarea class="moderation-filter source-overlay-textarea thirteen mb-20" name="allowed" placeholder="', t += this.escape(n), t += " to allow. ", t += this.escape(e), t += '">', t += this.source.allowed(), t += '</textarea><div class="mb-15"><input name="queue" type="hidden" value="0" />', this.source.get("queue") ? t += '<input checked="true" id="queue" name="queue" type="checkbox" />' : t += '<input id="queue" name="queue" type="checkbox" />', t += '<label for="queue">Send all posts to moderation queue</label></div><input class="j-button" name="commit" type="submit" value="Save Moderation Settings" /></form>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["sources/rename"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<form accept-charset="UTF-8" class="tac p-50 source-update" method="post"><h2 class="fs-2 mb-30">Edit ', t += this.escape(this.source.displayName()), t += '\'s filter button</h2><p class="mb-30">This will <strong>not</strong> show different posts but only change the label of the filter button above your feed. To display different posts through a new source, delete this source, and add a new one with your new hashtag or social account. </p><input name="id" type="hidden" value="', t += this.escape(this.source.get("id")), t += '" /><input autocomplete="off" class="source-overlay-field" name="name" placeholder="How you want the name of your source to display on Juicer." type="text" value="', t += this.escape(this.source.displayTerm()), t += '" /><input class="j-button" name="commit" type="submit" value="Save" /></form>'
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST["sources/twitter_unavailable_for_small_plan"] = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="tac"><div class="p-50"><h2 class="fs-2">Upgrade to add Twitter</h2><h3 class="mb-25">Unfortunately, due to <a href="', t += this.escape(Juicer.Constants.HELP_CENTER_URL), t += '/360040400491-Twitter-Rate-Limit">Twitter API changes </a> the small plan does not allow adding Twitter sources. </h3>', t += Juicer.Helpers.renderPartial("upgrade_plan"), t += "</div></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		this.JST || (this.JST = {}), this.JST.widget = function () {
			return this.Skim = {
					access: function (t) {
						var e;
						return "function" == typeof (e = this[t]) && (e = e.call(this)), !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
					},
					withContext: function (t, e) {
						var s;
						return (t = function (t) {
							var e;
							return (e = function () {}).prototype = t, new e
						}(t)).safe || (t.safe = this.safe || function (t) {
							var e;
							return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0, e)
						}), t.isArray = Array.isArray || function (t) {
							return "[object Array]" === {}.toString.call(t)
						}, t.flatten = s = function (t) {
							var e, n, i, r;
							for (n = [], i = 0, r = t.length; i < r; i++)(e = t[i]) instanceof Array ? n = n.concat(s(e)) : n.push(e);
							return n
						}, t.escape || (t.escape = this.escape || function (t) {
							return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
						}), e.call(t)
					}
				},
				function (t) {
					return null == t && (t = {}), Skim.withContext.call({}, t, function () {
						var t;
						return t = "", t += '<div class="flip-container"><div class="flipper"><div class="front">', t += Juicer.Helpers.renderPartial("widget_card", {
							post: this.first,
							isOnFeedsDashboard: this.isOnFeedsDashboard
						}), t += '</div><div class="back">', t += Juicer.Helpers.renderPartial("widget_card", {
							post: this.second,
							isOnFeedsDashboard: this.isOnFeedsDashboard
						}), t += "</div></div></div>"
					})
				}
		}.call(this)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.Assignment = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.urlRoot = "/api/assignments", e
		}(JuicerBackbone.Model)
	}.call(this),
	function () {
		var e = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.Click = function (t) {
			function n() {
				return n.__super__.constructor.apply(this, arguments)
			}
			return e(n, t), n.prototype.urlRoot = function () {
				return Juicer.Constants.API_ROOT + "/api/clicks"
			}, n.prototype.save = function (t, e) {
				return (e = null != e ? _u.clone(e) : {}).xhrFields || (e.xhrFields = {}), e.xhrFields.withCredentials = !1, n.__super__.save.call(this, t, e)
			}, n
		}(JuicerBackbone.Model)
	}.call(this),
	function () {
		var e = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.Enterprise = function (t) {
			function r() {
				return r.__super__.constructor.apply(this, arguments)
			}
			return e(r, t), r.prototype.idAttribute = "slug", r.prototype.urlRoot = "/api/enterprise", r.prototype.page = 1, r.prototype.fetch = function (t) {
				return (t = null != t ? _u.clone(t) : {}).data = null != t.data ? _u.extend(t.data, this.data()) : this.data(), r.__super__.fetch.call(this, t)
			}, r.prototype.parse = function (t, e) {
				var n, i;
				return 1 < t.current_page && 0 < t.feeds.length && (n = _u.map(this.get("feeds").models, function (t) {
					return t.attributes
				}), i = t.feeds, t.feeds = n.concat(i), t.new_feeds = i), r.__super__.parse.call(this, t, e)
			}, r.prototype.data = function () {
				var t;
				return t = {
					page: this.page
				}, this.query && (t.query = this.query), t
			}, r.prototype.nextPage = function () {
				return this.page += 1
			}, r.prototype.moreFeeds = function () {
				return this.get("current_page") < this.get("total_pages")
			}, r.prototype.relations = [{
				type: JuicerBackbone.Many,
				key: "feeds",
				relatedModel: "Juicer.Models.Feed"
			}, {
				type: JuicerBackbone.Many,
				key: "new_feeds",
				relatedModel: "Juicer.Models.Feed"
			}, {
				type: JuicerBackbone.Many,
				key: "users",
				relatedModel: "Juicer.Models.User"
			}], r
		}(JuicerBackbone.AssociatedModel)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.EnterpriseUsers = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.idAttribute = "slug", e.prototype.url = function () {
				return "/api/enterprise/" + this.get("slug") + "/users"
			}, e.prototype.relations = [{
				type: JuicerBackbone.Many,
				key: "admins",
				relatedModel: "Juicer.Models.User"
			}, {
				type: JuicerBackbone.Many,
				key: "users",
				relatedModel: "Juicer.Models.User"
			}], e
		}(JuicerBackbone.AssociatedModel)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.Estimate = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.defaults = {
				sources: 5,
				frequency: 3
			}, e.prototype.frequencyInWords = function () {
				return this.frequencyMap[this.get("frequency")]
			}, e.prototype.frequencyMap = {
				1: "1 Day",
				2: "4 Hours",
				3: "1 Hour",
				4: "30 Minutes",
				5: "10 Minutes",
				6: "5 Minutes",
				7: "1 Minute"
			}, e.prototype.frequencyMuliplier = {
				1: 4,
				2: 6,
				3: 8,
				4: 14,
				5: 20,
				6: 40,
				7: 200
			}, e.prototype.price = function () {
				var t, e;
				return t = this.get("sources") * this.frequencyCalculated(), e = Juicer.Constants.MINIMUM_ENTERPRISE_FEE_IN_DOLLARS, Math.max(t, e)
			}, e.prototype.frequencyCalculated = function () {
				return this.frequencyMuliplier[this.get("frequency")]
			}, e.prototype.priceString = function () {
				return this.maxSources() ? "$" + this.frequencyCalculated() : "$" + this.price()
			}, e.prototype.priceLabel = function () {
				return this.maxSources() ? "Per Source per Month (with a minimum fee of US$ " + Juicer.Constants.MINIMUM_ENTERPRISE_FEE_IN_DOLLARS + "/mo)" : "Cost per month (with a minimum fee of US$ " + Juicer.Constants.MINIMUM_ENTERPRISE_FEE_IN_DOLLARS + "/mo)"
			}, e.prototype.sources = function () {
				return this.maxSources() ? "20+" : this.get("sources")
			}, e.prototype.maxSources = function () {
				return 20 < this.get("sources")
			}, e
		}(JuicerBackbone.Model)
	}.call(this),
	function () {
		var e = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.Feed = function (t) {
			function r() {
				return this.fetchNewPosts = e(this.fetchNewPosts, this), this.poll = e(this.poll, this), this.startPolling = e(this.startPolling, this), r.__super__.constructor.apply(this, arguments)
			}
			return n(r, t), r.prototype.idAttribute = "slug", r.prototype.urlRoot = function () {
				return Juicer.Constants.API_ROOT + "/api/feeds"
			}, r.prototype.parse = function (t, e) {
				return null != this.get("css") && delete t.css, r.__super__.parse.call(this, t, e)
			}, r.prototype.sync = function (t, e, n) {
				var i;
				return i = n.url, "read" !== t && (n.url = "/api/feeds/" + this.get("id")), i && (i.match("fetch_all") || i.match("bulk_moderate")) && (n.url = i), r.__super__.sync.call(this, t, e, n)
			}, r.prototype.defaults = {
				slug: "error"
			}, r.prototype.allowed = function () {
				return null != this.get("allowed") ? this.get("allowed") : ""
			}, r.prototype.disallowed = function () {
				return null != this.get("disallowed") ? this.get("disallowed") : ""
			}, r.prototype.moderation = function () {
				return !!(this.get("allowed") || this.get("disallowed") || this.get("profanity") || this.get("queue") || this.get("prevent_duplicates"))
			}, r.prototype.widget = function () {
				return "widget" === this.get("css")
			}, r.prototype.slider = function () {
				return "slider" === this.get("css")
			}, r.prototype.livingWall = function () {
				return "living-wall" === this.get("css")
			}, r.prototype.campaign = function () {
				return _u.contains(["campaign", "enterprise"], this.get("plan"))
			}, r.prototype.defaultHeight = function () {
				return this.widget() ? 400 : null
			}, r.prototype.defaultWidth = function () {
				return this.widget() ? 400 : null
			}, r.prototype.initialize = function (t) {
				return null == t && (t = {}), this.endingAt = t.endingAt, this.filter = t.filter, this.isOnFeedsDashboard = t.isOnFeedsDashboard, this.page = t.page, this.per = t.per, this.search = t.search, this.startingAt = t.startingAt, this.truncate = t.truncate, this.per = this.per || 100, this.page = this.page || 1, this.once("sync", this.startPolling)
			}, r.prototype.startPolling = function () {
				if (this.shouldPoll()) return this.poll()
			}, r.prototype.shouldPoll = function () {
				return this.pollingAllowed() && this.isGrid()
			}, r.prototype.pollingAllowed = function () {
				return this.notSmall() && !!this.get("poll") && !!this.get("update_frequency")
			}, r.prototype.poll = function () {
				return this.timeout = setTimeout(this.fetchNewPosts, this.pollInterval())
			}, r.prototype.fetchNewPosts = function (t) {
				var e, n;
				return null == t && (t = !0), this.polling = !0, e = this.get("requested_at"), this.fetch({
					success: (n = this, function () {
						if (n.get("requested_at") !== e && n.trigger("new-posts"), n.polling = !1, t) return n.poll()
					})
				})
			}, r.prototype.pollInterval = function () {
				var t;
				return t = 60 * this.get("update_frequency") * 1e3 / this.divisor(), t = Math.floor(t), t = Math.max(t, 15e3)
			}, r.prototype.divisor = function () {
				var t;
				return (t = this.get("sources").length) < 2 && (t = 2), 10 < t && (t = 10), t
			}, r.prototype.fetch = function (t) {
				var e;
				return e = null != (t = null != t ? _u.clone(t) : {}).data ? _u.extend(t.data, this.queryParams()) : this.queryParams(), t.data = this.queryParamsToArray(e), t.xhrFields || (t.xhrFields = {}), t.xhrFields.withCredentials = !1, r.__super__.fetch.call(this, t)
			}, r.prototype.queryParams = function () {
				var t, e, n;
				t = void 0;
				try {
					t = new URLSearchParams(window.location.search).get("bypass_fragment_cache")
				} catch (i) {
					e = i, console.error(e), t = null
				}
				return n = {}, this.per && (n = _u.extend(n, {
					per: this.per
				})), this.endingAt && (n = _u.extend(n, {
					ending_at: this.endingAt
				})), this.filter && (n = _u.extend(n, {
					filter: this.filter
				})), this.isOnFeedsDashboard && (n = _u.extend(n, {
					is_on_feeds_dashboard: !0
				})), t && (n = _u.extend(n, {
					bypass_fragment_cache: !0
				})), this.page && !this.polling && (n = _u.extend(n, {
					page: this.page
				})), this.search && (n = _u.extend(n, {
					search: this.search
				})), this.startingAt && (n = _u.extend(n, {
					starting_at: this.startingAt
				})), this.truncate && (n = _u.extend(n, {
					truncate: this.truncate
				})), n
			}, r.prototype.queryParamsToArray = function (n) {
				return Object.keys(n).reduce(function (t, e) {
					return t.concat({
						name: e,
						value: n[e]
					})
				}, []).sort(function (t, e) {
					return t.name > e.name
				})
			}, r.prototype.nextPage = function () {
				return this.page += 1, this
			}, r.prototype.previousPage = function () {
				return this.page -= 1, this
			}, r.prototype.resetPage = function () {
				return this.page = 1, this
			}, r.prototype.nextSync = function () {
				var t;
				switch (t = new Date(this.get("last_synced")), this.get("plan")) {
					case "medium":
						t.setHours(t.getHours() + 1);
						break;
					case "large":
						t.setMinutes(t.getMinutes() + 10);
						break;
					case "campaign":
						t.setMinutes(t.getMinutes() + 1);
						break;
					case "custom":
					case "enterprise":
						t.setMinutes(t.getMinutes() + this.get("update_frequency"));
						break;
					default:
						t.setDate(t.getDate() + 1)
				}
				return t
			}, r.prototype.paid = function () {
				return _u.contains(Juicer.Constants.PAID_PLANS, this.get("plan"))
			}, r.prototype.notSmall = function () {
				return "small" !== this.get("plan")
			}, r.prototype.cssClass = function () {
				var t;
				return "widget" === (t = this.get("css") || "image-grid") && (t = "juicer-widget"), this.get("colored_icons") && "classic" !== this.get("css") && (t += " colored-icons"), this.hoverImages() && (t += " hover-images"), t
			}, r.prototype.isGrid = function () {
				return !_u.contains(["classic", "dark", "slider", "widget", "living-wall"], this.get("css"))
			}, r.prototype.classic = function () {
				return "classic" === this.get("css")
			}, r.prototype.hasInterval = function () {
				return _u.contains(["widget", "slider", "living-wall"], this.get("css"))
			}, r.prototype.hasColumns = function () {
				return !_u.contains(["widget", "classic"], this.get("css"))
			}, r.prototype.hoverImages = function () {
				return _u.contains(["image-grid", "slider", "hip", "night"], this.get("css"))
			}, r.prototype.hasHeight = function () {
				return this.get("height")
			}, r.prototype.termsByType = function (t) {
				var e;
				return e = this.get("sources").where({
					source: t
				}), _u.map(e, function (t) {
					return t.get("term")
				})
			}, r.prototype.fetchAll = function () {
				var t;
				return t = {
					url: this.url() + "/fetch_all",
					type: "POST"
				}, (this.sync || JuicerBackbone.sync).call(this, null, this, t)
			}, r.prototype.bulkModerate = function (t, e) {
				var n, i, r;
				return null == t && (t = !0), null == e && (e = null), r = "/api/feeds/" + this.get("slug") + "/bulk_moderate", n = {}, t && (n.approve = !0), null != e && (n.filter = e), i = {
					url: r,
					type: "POST",
					data: $.param(n)
				}, (this.sync || JuicerBackbone.sync).call(this, null, this, i)
			}, r.prototype.partial = function () {
				switch (this.get("css") || this.get("style")) {
					case "modern":
					case "user":
						return "user";
					case "slider":
					case "image-grid":
					case "hip":
						return "image";
					case "classic":
						return "classic";
					case "living-wall":
						return "wall";
					case "polaroid":
						return "polaroid";
					case "night":
						return "night";
					default:
						return "standard"
				}
			}, r.prototype.displayFilters = function () {
				return _u.contains(this.validFilters, this.get("display_filter")) && !this.hasInterval() && 1 < this.get("sources").length
			}, r.prototype.validFilters = ["Social Type", "Social Account", "Grouped Terms"], r.prototype.filterPartial = function () {
				var t, e;
				e = void 0;
				try {
					e = new URLSearchParams(window.location.search).get("display_filter_type")
				} catch (n) {
					t = n, console.error(t), e = null
				}
				return e || (this.get("display_filter_type") ? "new" : "old")
			}, r.prototype.filters = function () {
				var t;
				return (t = (t = function () {
					switch (this.get("display_filter")) {
						case "Social Type":
							return this.accountTypes();
						case "Social Account":
							return this.get("sources").models;
						case "Grouped Terms":
							return this.uniqSources()
					}
				}.call(this)).slice(0)).unshift(this.allSource()), t
			}, r.prototype.allSource = function () {
				return new Juicer.Models.Source({
					source: "All"
				})
			}, r.prototype.accountTypes = function () {
				var e, n;
				return e = [], n = [], _u.each(this.get("sources").models, function (t) {
					if (!_u.contains(n, t.get("source"))) return e.push(t), n.push(t.get("source"))
				}), e
			}, r.prototype.uniqSources = function () {
				var e, n;
				return e = [], n = [], _u.map(this.get("sources").models, function (t) {
					if (!_u.contains(n, t.displayName())) return e.push(t), n.push(t.displayName())
				}), e
			}, r.prototype.moderationStatus = function () {
				return this.moderation() ? "ON" : "OFF"
			}, r.prototype.colors = ["text", "link", "data", "hover", "post_background", "feed_background"], r.prototype.customColors = function () {
				return _u.some(this.getColors())
			}, r.prototype.getColor = function (t) {
				return this.getCustomColor(t) || this.getDefaultColor(t)
			}, r.prototype.getCustomColor = function (t) {
				return this.getColors()[t + "_color"]
			}, r.prototype.getColors = function () {
				return this.get("colors")
			}, r.prototype.getDefaultColor = function (t) {
				var e;
				return "hover" === t ? "#F17E6F" : (e = this.customColorMap[t], (t = jQuery(e.selector).css(e.attribute)) ? Juicer.Helpers.rgb2hex(t) : "#fff")
			}, r.prototype.customColorMap = {
				text: {
					selector: ".juicer-feed .feed-item .j-message, .juicer-feed .feed-item .j-message p",
					attribute: "color"
				},
				link: {
					selector: ".juicer-feed .is-not-youTube a, .is-not-youTube .j-poster h3",
					attribute: "color"
				},
				data: {
					selector: ".juicer-feed .is-not-youTube .j-meta a, .is-not-youTube .j-poster .j-date",
					attribute: "color"
				},
				hover: {
					selector: ".juicer-feed .is-not-youTube a:hover",
					attribute: "color"
				},
				post_background: {
					selector: ".juicer-feed li.feed-item",
					attribute: "background-color"
				},
				feed_background: {
					selector: ".juicer-feed",
					attribute: "background-color"
				}
			}, r.prototype.customStyles = function () {
				var i, r;
				return i = "", _u.each(this.colors, (r = this, function (t) {
					var e, n;
					if (n = r.customColorMap[t], e = r.getCustomColor(t)) return i += n.selector + " { " + n.attribute + ": " + e + " !important; }"
				})), this.get("custom_css") && (i += this.get("custom_css")), i
			}, r.prototype.updateColor = function (t, e) {
				var n, i;
				return (n = this.getColors())[i = t + "_color"] = e, this.set("colors", n), this.set(i, e), this.trigger("update:colors")
			}, r.prototype.resetColors = function () {
				return _u.each(this.colors, (e = this, function (t) {
					return e.set(t + "_color", null)
				}));
				var e
			}, r.prototype.shouldShowGallery = function () {
				var t;
				return t = this.get("css") || this.get("style"), _u.contains(["modern", "polaroid", "image-grid", "hip", "night"], t)
			}, r.prototype.relations = [{
				type: JuicerBackbone.Many,
				key: "posts",
				collectionType: "Juicer.Collections.Posts"
			}, {
				type: JuicerBackbone.Many,
				key: "sources",
				relatedModel: "Juicer.Models.Source"
			}, {
				type: JuicerBackbone.Many,
				key: "assignments",
				relatedModel: "Juicer.Models.Assignment"
			}, {
				type: JuicerBackbone.Many,
				key: "social_accounts",
				collectionType: "Juicer.Collections.SocialAccounts"
			}], r
		}(JuicerBackbone.AssociatedModel)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.JuicerAd = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.defaults = function () {
				var t;
				return t = Juicer.Helpers.sample(this.messages()), {
					image: this.randomImage(),
					message: t,
					unformatted_message: t,
					poster_name: "Juicer",
					poster_image: "https://static.juicer.io/small-square.png",
					poster_url: "https://www.juicer.io",
					external_created_at: new Date
				}
			}, e.prototype.ad = !0, e.prototype.twitter = function () {
				return !1
			}, e.prototype.gallery = function () {
				return !1
			}, e.prototype.poster = function () {
				return !0
			}, e.prototype.stickied = function () {
				return !1
			}, e.prototype.sourceType = function () {
				return "Juicer"
			}, e.prototype.postType = function () {
				return "image-post"
			}, e.prototype.isVideo = function () {
				return !1
			}, e.prototype.edited = function () {
				return !1
			}, e.prototype.editClass = function () {
				return ""
			}, e.prototype.userId = function () {
				return 1
			}, e.prototype.lowerType = function () {
				return "juicer"
			}, e.prototype.term = function () {
				return "juicer"
			}, e.prototype.link = function () {
				return "https://www.juicer.io"
			}, e.prototype.blogPost = function () {
				return !1
			}, e.prototype.commentClass = function () {
				return ""
			}, e.prototype.likeClass = function () {
				return ""
			}, e.prototype.classes = function () {
				return "feed-item juicer image-post juicer-ad"
			}, e.prototype.alt = function () {
				return "Embed Social Media Feeds on your website with Juicer!"
			}, e.prototype.message = function () {
				return this.get("message")
			}, e.prototype.posterImage = function () {
				return this.get("poster_image")
			}, e.prototype.messages = function () {
				return ["Like this feed? Want one of your own? Visit <a href='https://www.juicer.io'>Juicer.io</a> to get your own free social media feed!", "<a href='https://www.juicer.io'>Juicer.io</a> lets you easily create and embed social media feeds like this one on to your site for free!", "Engage your users on social media with a <a href='https://www.juicer.io'>Juicer.io</a> feed on your website or blog for free.", "This feed is Powered by <a href='https://www.juicer.io'>Juicer.io</a>"]
			}, e.prototype.randomImage = function () {
				var t;
				return (t = _u.random(1, 12)) < 10 && (t = "0" + t), "https://static.juicer.io/ads/juicer-ads-" + t + ".svg"
			}, e.prototype.noMeta = function () {
				return !0
			}, e
		}(JuicerBackbone.Model)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.Moderated = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.url = function () {
				return "/api/feeds/" + this.slug + "/moderated"
			}, e.prototype.initialize = function (t) {
				return this.revalidating = !0, this.slug = t.slug, this.starting_at = t.starting_at, this.once("sync", this.startPolling)
			}, e.prototype.moderated = !0, e
		}(Juicer.Models.Feed)
	}.call(this),
	function () {
		var e = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.PageView = function (t) {
			function n() {
				return n.__super__.constructor.apply(this, arguments)
			}
			return e(n, t), n.prototype.urlRoot = function () {
				return Juicer.Constants.API_ROOT + "/api/page_views"
			}, n.prototype.save = function (t, e) {
				return (e = null != e ? _u.clone(e) : {}).xhrFields || (e.xhrFields = {}), e.xhrFields.withCredentials = !1, n.__super__.save.call(this, t, e)
			}, n
		}(JuicerBackbone.Model)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.Plan = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.urlRoot = "/api/plan", e.prototype.downgradeDate = function () {
				var t;
				if (this.get("next_billing_date")) return t = new Date(this.get("next_billing_date")), strftime("%B %-d, %Y", t)
			}, e.prototype.planCapital = function () {
				return this.capitalize(this.get("plan"))
			}, e.prototype.newPlanCapital = function () {
				return this.capitalize(this.get("new_plan"))
			}, e.prototype.capitalize = function (t) {
				return _u.titleize(t)
			}, e
		}(JuicerBackbone.Model)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.Post = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.urlRoot = "/api/posts", e.prototype.restore = function () {
				return this.callSubUrl("/restore")
			}, e.prototype.reject = function () {
				return this.callSubUrl("/reject")
			}, e.prototype.stick = function () {
				return this.callSubUrl("/stick")
			}, e.prototype.unstick = function () {
				return this.callSubUrl("/unstick")
			}, e.prototype.callSubUrl = function (t, e) {
				var n;
				return null == e && (e = {}), n = {
					url: t = this.url() + t,
					type: "POST"
				}, _u.extend(n, e), (this.sync || JuicerBackbone.sync).call(this, null, this, n)
			}, e.prototype.stickied = function () {
				return !!this.get("position")
			}, e.prototype.edited = function () {
				return !!this.get("edit")
			}, e.prototype.editClass = function () {
				return this.edited() ? "j-edited" : ""
			}, e.prototype.stickyClass = function () {
				return this.stickied() ? "j-sticky" : ""
			}, e.prototype.classes = function () {
				return "feed-item j-" + this.lowerType() + " j-" + this.lowerType() + "-bg " + this.postType() + " " + this.term() + " " + this.editClass() + " " + this.stickyClass() + " " + ("YouTube" !== this.sourceType() ? "is-not-youTube" : "")
			}, e.prototype.sourceType = function () {
				return this.get("source").source()
			}, e.prototype.blogPost = function () {
				return "Blog" === this.sourceType()
			}, e.prototype.twitter = function () {
				return "Twitter" === this.sourceType()
			}, e.prototype.instagram = function () {
				return "Instagram" === this.sourceType()
			}, e.prototype.tumblrTitle = function () {
				return "Tumblr" === this.sourceType() && !!this.get("source").get("options") && !!this.get("source").get("options").match("title")
			}, e.prototype.gallery = function () {
				return !!this.get("additional_photos") && 0 < this.get("additional_photos").length
			}, e.prototype.postType = function () {
				return this.isVideo() ? "j-video" : this.gallery() ? "j-gallery" : this.get("image") ? "image-post" : "words"
			}, e.prototype.isVideo = function () {
				return _u.contains(["youtube", "vine", "vimeo", "soundcloud"], this.lowerType()) || !!this.get("video")
			}, e.prototype.termType = function () {
				return this.get("source").termType()
			}, e.prototype.term = function () {
				return this.get("source").get("term")
			}, e.prototype.userId = function () {
				return this.term()
			}, e.prototype.lowerType = function () {
				return this.get("source").lowerSource()
			}, e.prototype.likes = function () {
				return this.pluralize(this.get("like_count"), "like")
			}, e.prototype.comments = function () {
				return this.pluralize(this.get("comment_count"), "comment")
			}, e.prototype.poster = function () {
				return this.get("poster_name") || this.get("poster_image")
			}, e.prototype.posterImage = function () {
				return "facebook" === this.lowerType() ? (this.shouldFetchFacebookImage() && this.fetchFacebookImage(), this.isGraphImage() ? "https://i.imgur.com/ZpcrI7L.jpg" : this.get("poster_image")) : this.get("poster_image")
			}, e.prototype.shouldFetchFacebookImage = function () {
				return this.isGraphImage() && !_u.contains(this.get("source").fetchedFacebookPosters, this.get("poster_id"))
			}, e.prototype.isGraphImage = function () {
				return !!this.get("poster_image").match("graph.facebook.com")
			}, e.prototype.fetchFacebookImage = function () {
				var t, n;
				return this.get("source").fetchedFacebookPosters.push(this.get("poster_id")), t = this.get("poster_image") + "?redirect=false", jQuery.getJSON(t, (n = this, function (t) {
					var e;
					return e = t.data.url, jQuery("[data-poster-id='" + n.get("poster_id") + "']").attr("src", e), n.get("source").fetchedFacebookPosters.splice(n.get("source").fetchedFacebookPosters.indexOf(n.get("poster_id")), 1)
				}))
			}, e.prototype.pluralize = function (t, e) {
				return 1 === t ? t + " " + e : t + " " + _u.pluralize(e)
			}, e.prototype.link = function () {
				switch (this.lowerType()) {
					case "facebook":
						return "reviews" === this.termType() ? "https://www.facebook.com/" + this.term() + "/reviews" : "https://www.facebook.com/" + this.get("poster_id") + "/posts/" + this.get("external_id");
					case "twitter":
						return "https://twitter.com/" + this.get("poster_name") + "/status/" + this.get("external_id");
					case "instagram":
						return "https://www.instagram.com/p/" + this.get("external_id") + "/";
					case "youtube":
						return "https://www.youtube.com/watch?v=" + this.get("external_id");
					case "googleplus":
						return this.get("poster_url") + "/posts/" + this.get("external_id");
					case "tumblr":
						return "http://" + this.get("poster_name") + ".tumblr.com/post/" + this.get("external_id");
					case "pinterest":
						return "http://www.pinterest.com/pin/" + this.get("external_id");
					case "vimeo":
						return "https://vimeo.com/" + this.get("external_id");
					case "linkedin":
						return "https://www.linkedin.com/company/" + this.term();
					case "soundcloud":
						return this.get("description");
					case "slack":
						return this.get("poster_url");
					case "spotify":
						return "http://open.spotify.com/track/" + this.get("external_id");
					case "blog":
						return this.blogLink();
					case "giphy":
						return this.get("external");
					default:
						return this.get("external_id")
				}
			}, e.prototype.blogLink = function () {
				return this.get("external") || this.get("external_id")
			}, e.prototype.parseBlogUrl = function () {
				var t;
				if ((t = this.term().match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)) && t[1]) return t[1]
			}, e.prototype.termLink = function () {
				switch (this.lowerType()) {
					case "twitter":
						return "https://twitter.com/hashtag/" + this.term();
					case "instagram":
						return this.link();
					case "tumblr":
						return "https://tumblr.com/tagged/" + this.term();
					case "vine":
						return "https://vine.co/tags/" + this.term();
					case "facebook":
						return "https://www.facebook.com/hashtag/" + this.term();
					case "youtube":
						return "https://www.youtube.com/results?search_query=%23" + this.term();
					case "googleplus":
						return "https://plus.google.com/s/%23" + this.term();
					default:
						return this.get("external_id")
				}
			}, e.prototype.commentClass = function () {
				switch (this.lowerType()) {
					case "twitter":
						return "retweets";
					case "pinterest":
						return "repins";
					default:
						return "comments"
				}
			}, e.prototype.likeClass = function () {
				switch (this.lowerType()) {
					case "twitter":
					case "instagram":
					case "tumblr":
						return "heart";
					case "youtube":
						return "views";
					default:
						return "likes"
				}
			}, e.prototype.likeVerb = function () {
				switch (this.lowerType()) {
					case "twitter":
						return "favorites";
					default:
						return "likes"
				}
			}, e.prototype.alt = function () {
				return this.get("accessibility_caption") || "Photo from " + this.get("source").displayName() + " on " + this.sourceType() + " on " + this.get("poster_name") + " at " + this.postedDate()
			}, e.prototype.postedDate = function () {
				return Juicer.Helpers.fullDate(this.get("external_created_at"))
			}, e.prototype.noMeta = function () {
				return _u.contains(["Blog"], this.sourceType())
			}, e.prototype.facebookShare = function () {
				var t;
				return t = "https://www.facebook.com/dialog/feed?app_id=" + Juicer.Constants.FACEBOOK_APP_ID + "&display=popup&link=" + this.currentUrl(), this.status() && (t += "&description=" + this.status()), this.shouldHaveFacebookImage() && (t += "&picture=" + this.get("image")), t
			}, e.prototype.twitterShare = function () {
				var t;
				return t = "https://twitter.com/intent/tweet?text=" + this.twitterStatus(), this.shouldIncludeLink() && (t += "&url=" + this.currentUrl()), t
			}, e.prototype.pinterestShare = function () {
				return "https://pinterest.com/pin/create/button/?url=" + this.currentUrl() + "&media=" + this.encodedImage() + "&description=" + this.status()
			}, e.prototype.linkedInShare = function () {
				return "https://www.linkedin.com/shareArticle?url=" + this.currentUrl() + "&title=" + this.status()
			}, e.prototype.emailShare = function () {
				var t, e;
				return e = "Check out my " + this.sourceType() + " post!", t = 3 < this.status().length ? [this.status(), this.currentUrl()].join(" - ") : this.currentUrl(), "mailto:" + (1024 < jQuery(window).width() ? "" : "test@example.com") + "?subject=" + e + "&body=" + t
			}, e.prototype.shouldHaveFacebookImage = function () {
				return "facebook" !== this.lowerType() && !!this.get("image")
			}, e.prototype.encodedImage = function () {
				return encodeURIComponent(this.get("image"))
			}, e.prototype.message = function () {
				return this.blogPost() || this.tumblrTitle() ? "<strong class='j-title'>" + this.get("message") + "</strong> " + this.get("excerpt") : this.get("excerpt") ? this.get("excerpt") : this.get("message")
			}, e.prototype.fullMessage = function () {
				return this.blogPost() || this.tumblrTitle() ? "<strong class='j-title'>" + this.get("message") + "</strong> " + this.get("description") : this.get("message")
			}, e.prototype.stripped = function () {
				return null != this.get("unformatted_message") ? this.get("unformatted_message").replace(/<(?:.|\n)*?>/gm, " ").replace(this.emojiRegex, "") : ""
			}, e.prototype.emojiRegex = /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, e.prototype.status = function () {
				return encodeURIComponent(this.stripped())
			}, e.prototype.twitterStatus = function () {
				return this.stripped().length <= 140 ? this.status() : encodeURIComponent(this.stripped().substring(0, 137) + "...")
			}, e.prototype.shouldIncludeLink = function () {
				return (this.twitterStatus() + this.currentUrl).length <= 140
			}, e.prototype.currentUrl = function () {
				return window.location.href
			}, e.prototype.replyIntent = function () {
				return "https://twitter.com/intent/tweet?in_reply_to=" + this.get("external_id")
			}, e.prototype.retweetIntent = function () {
				return "https://twitter.com/intent/retweet?tweet_id=" + this.get("external_id")
			}, e.prototype.likeIntent = function () {
				return "https://twitter.com/intent/like?tweet_id=" + this.get("external_id")
			}, e.prototype.relations = [{
				type: JuicerBackbone.One,
				key: "source",
				relatedModel: "Juicer.Models.Source"
			}], e
		}(JuicerBackbone.AssociatedModel)
	}.call(this),
	function () {
		var n, i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		n = ["Facebook", "Instagram", "Pinterest", "Spotify", "Tumblr", "Twitter", "YouTube"], Juicer.Models.Source = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.urlRoot = "/api/sources", e.prototype.toJSON = function () {
				return {
					source: _u.clone(this.attributes)
				}
			}, e.prototype.source = function () {
				return this.get("source")
			}, e.prototype.termType = function () {
				return this.get("term_type")
			}, e.prototype.lowerSource = function () {
				return this.source().toLowerCase()
			}, e.prototype.allowed = function () {
				return null != this.get("allowed") ? this.get("allowed") : ""
			}, e.prototype.disallowed = function () {
				return null != this.get("disallowed") ? this.get("disallowed") : ""
			}, e.prototype.fetchedFacebookPosters = [], e.prototype.title = function () {
				switch (this.source()) {
					case "Blog":
						return "Add an RSS feed";
					case "Facebook":
						return "Add a Facebook business page";
					case "Flickr":
						return "Add a Flickr user's photos";
					case "Giphy":
						return "Add a Giphy search term";
					case "Hashtag":
						return "Choose a type of hashtag";
					case "Instagram":
						return "Import Instagram user posts";
					case "LinkedIn":
						return "Add a LinkedIn company";
					case "Pinterest":
						return "Add a Pinterest user's pins";
					case "Slack":
						return "Add a Slack channel";
					case "Soundcloud":
						return "Add a Soundcloud account";
					case "Spotify":
						return "Add a Spotify musical artist";
					case "Tumblr":
						return "Add a Tumblr blog";
					case "Twitter":
						return "Add a Twitter account";
					case "Vimeo":
						return "Add a Vimeo user's videos";
					case "Yelp":
						return "Add a Yelp Business's Reviews";
					case "YouTube":
						return "Add a YouTube channel"
				}
			}, e.prototype.label = function () {
				switch (this.source()) {
					case "Blog":
						return "RSS Feed URL: ";
					case "Facebook":
						return "https://www.facebook.com/";
					case "Flickr":
						return "https://www.flickr.com/photos/";
					case "Giphy":
						return "#";
					case "Instagram":
						return "https://www.instagram.com/";
					case "LinkedIn":
						return "https://www.linkedin.com/company/";
					case "Pinterest":
						return "https://www.pinterest.com/";
					case "Slack":
						return "#";
					case "Soundcloud":
						return "https://soundcloud.com/";
					case "Spotify":
						return "https://spotify.com/artist/";
					case "Twitter":
						return "@";
					case "Vimeo":
						return "http://vimeo.com/";
					case "Yelp":
						return "http://www.yelp.com/biz/";
					case "YouTube":
						return "https://www.youtube.com/user/"
				}
			}, e.prototype.options = function () {
				var t, e, n, i, r, s, o;
				if (o = [], "Twitter" === this.source()) {
					for (i = [], e = [], n = 0, r = (t = "hashtag" === this.get("term_type") ? ["retweets"] : ["retweets", "replies"]).length; n < r; n++) s = t[n], this.get("options") && -1 !== this.get("options").indexOf(s) ? i.push(s) : e.push(s);
					0 < i.length && o.push("including: " + i.join(", ")), 0 < e.length && o.push("excluding: " + e.join(", "))
				}
				return o
			}, e.prototype.placeholder = function () {
				switch (this.source()) {
					case "Blog":
						return "RSS or Atom or FeedBurner URL";
					case "Facebook":
						return "Facebook Page Vanity URL";
					case "Flickr":
						return "Flickr Username";
					case "Giphy":
						return "Search Term";
					case "Instagram":
						return "Instagram Username";
					case "LinkedIn":
						return "LinkedIn Company ID Number";
					case "Pinterest":
						return "Pinterest Username";
					case "Slack":
						return "Slack Channel Name";
					case "Soundcloud":
						return "Soundcloud Username";
					case "Spotify":
						return "Artist Name";
					case "Tumblr":
						return "Tumblr Username";
					case "Twitter":
						return "Twitter Username";
					case "Vimeo":
						return "Vimeo Username";
					case "Yelp":
						return "Business Name URL";
					case "YouTube":
						return "YouTube Username or Channel ID"
				}
			}, e.prototype.typeSymbol = function () {
				return "hashtag" === this.get("term_type") ? "#" : "location" === this.get("term_type") ? "\u25c9" : "@"
			}, e.prototype.displayTerm = function () {
				var t;
				return this.get("name") && (t = this.get("name")), t || (t = this.get("term")), t
			}, e.prototype.displayName = function () {
				return "" + this.typeSymbol() + this.displayTerm()
			}, e.prototype.hashtags = function () {
				return _u.contains(this.hashtagSupporters, this.source())
			}, e.prototype.needsLogin = function () {
				return _u.contains(this.requiresLogin, this.source())
			}, e.prototype.manual = function () {
				return _u.contains(Juicer.Constants.SOURCES_WHERE_POSTS_CAN_BE_ADDED_MANUALLY, this.source())
			}, e.prototype.hashtagSupporters = n, e.prototype.requiresLogin = ["Facebook", "Instagram", "LinkedIn", "Slack", "Spotify", "Twitter"], e.prototype.alternateNames = ["location", "group"], e.prototype.filterClass = function (t, e, n) {
				var i, r, s;
				return null == e && (e = null), null == n && (n = !1), r = s = "j-" + this.lowerSource().replace(/@|#/, ""), n || (r += " " + s + "-bg"), n && (r += " " + s + "-text " + s + "-hover j-social-icon"), this.all() && (r = "all j-social-icon"), i = r, "Grouped Terms" === t && (i += " grouped"), e && (i += " highlight"), i
			}, e.prototype.all = function () {
				return "all" === this.lowerSource()
			}, e.prototype.filter = function (t) {
				if (this.all()) return null;
				switch (t) {
					case "Social Type":
						return this.source();
					case "Social Account":
						return this.get("id");
					case "Grouped Terms":
						return this.get("term")
				}
			}, e.prototype.filterDisplay = function (t) {
				if (this.all()) return "All";
				switch (t) {
					case "Social Type":
						return this.source();
					case "Social Account":
					case "Grouped Terms":
						return this.displayName()
				}
			}, e.prototype.usernameExample = function () {
				return this.usernameExamples[this.lowerSource()]
			}, e.prototype.usernameExamples = {
				facebook: {
					name: "REI",
					link: "https://www.facebook.com/rei",
					formattedLink: "https://www.facebook.com/<span class='example-link-highlight'>rei</span>"
				},
				twitter: {
					name: "Adult Swim",
					link: "https://twitter.com/adultswim",
					formattedLink: "https://twitter.com/<span class='example-link-highlight'>adultswim</span>"
				},
				instagram: {
					name: "Humans of New York",
					link: "https://www.instagram.com/humansofny",
					formattedLink: "https://www.instagram.com/<span class='example-link-highlight'>humansofny</span>"
				},
				youtube: {
					name: "CGP Grey",
					link: "https://www.youtube.com/user/CGPGrey",
					formattedLink: "https://www.youtube.com/user/<span class='example-link-highlight'>CGPGrey</span>"
				},
				tumblr: {
					name: "A Well Traveled Woman",
					link: "http://awelltraveledwoman.tumblr.com",
					formattedLink: "http://<span class='example-link-highlight'>awelltraveledwoman</span>.tumblr.com"
				},
				pinterest: {
					name: "Joy Cho / Oh Joy!",
					link: "https://www.pinterest.com/ohjoy",
					formattedLink: "https://www.pinterest.com/<span class='example-link-highlight'>ohjoy</span>"
				},
				blog: {
					name: "Wired",
					link: "https://www.wired.com/feed/rss",
					formattedLink: "<span class='example-link-highlight'>https://www.wired.com/feed/rss</span>"
				},
				soundcloud: {
					name: "Pitchform",
					link: "https://soundcloud.com/pitchfork",
					formattedLink: "https://soundcloud.com/<span class='example-link-highlight'>pitchfork</span>"
				},
				spotify: {
					name: "Radiohead",
					link: "https://www.spotify.com/artist/Radiohead",
					formattedLink: "https://www.spotify.com/artist/<span class='example-link-highlight'>Radiohead</span>"
				},
				linkedin: {
					name: "Juicer",
					link: "https://www.linkedin.com/company/juicer",
					formattedLink: "https://www.linkedin.com/company/<span class='example-link-highlight'>juicer</span>"
				},
				flickr: {
					name: "Stephan G\xfcrtler",
					link: "https://www.flickr.com/photos/stephanna-g",
					formattedLink: "https://www.flickr.com/photos/<span class='example-link-highlight'>stephanna-g</span>"
				},
				vimeo: {
					name: "Hiro Murai",
					link: "https://vimeo.com/hiromurai",
					formattedLink: "https://vimeo.com/<span class='example-link-highlight'>hiromurai</span>"
				},
				yelp: {
					name: "Microsoft",
					link: "https://www.yelp.com/biz/microsoft-mountain-view",
					formattedLink: "https://www.yelp.com/biz/<span class='example-link-highlight'>microsoft-mountain-view</span>"
				}
			}, e
		}(JuicerBackbone.AssociatedModel)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.User = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.relations = [{
				type: JuicerBackbone.Many,
				key: "feeds",
				relatedModel: "Juicer.Models.Feed"
			}], e
		}(JuicerBackbone.AssociatedModel)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.FeedValidation = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.validation = {
				name: {
					required: !0
				}
			}, e
		}(JuicerBackbone.Model)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.UserUpdateValidation = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.initialize = function (t) {
				return this.email = t.email, this.noPassword = t.noPassword
			}, e.prototype.validation = {
				email: {
					required: !0
				},
				current_password: {
					required: function () {
						return !this.noPassword && this.email !== this.get("email")
					},
					minLength: 8
				},
				password: {
					minLength: 8,
					required: !1
				},
				current_password_two: {
					minLength: 8,
					required: function () {
						return !!this.get("password")
					}
				}
			}, e
		}(JuicerBackbone.Model)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Models.UserValidation = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.validation = {
				email: {
					required: !0,
					pattern: "email"
				},
				password: {
					required: !0,
					minLength: 8
				}
			}, e
		}(JuicerBackbone.Model)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Collections.FacebookResults = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.initialize = function (t) {
				return this.type = {
					groups: "groups",
					username: "pages",
					reviews: "reviews"
				}[t.type]
			}, e.prototype.url = function () {
				return "/api/facebook_results/" + this.type
			}, e
		}(JuicerBackbone.Collection)
	}.call(this),
	function () {
		var e = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Collections.Posts = function (t) {
			function i() {
				return i.__super__.constructor.apply(this, arguments)
			}
			return e(i, t), i.prototype.paginatingAttributes = ["current_page", "limit_value"], i.prototype.model = Juicer.Models.Post, i.prototype.parse = function (e) {
				var n;
				return _u.each(this.paginatingAttributes, (n = this, function (t) {
					return n[t] = e[t]
				})), i.__super__.parse.call(this, e.items)
			}, i
		}(JuicerBackbone.Collection)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Collections.SocialAccounts = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.url = "/api/social_accounts", e.prototype.socialAccount = function (t) {
				return this.findWhere({
					provider: t
				})
			}, e
		}(JuicerBackbone.Collection)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Collections.Users = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.model = Juicer.Models.User, e.prototype.url = "/api/users", e
		}(JuicerBackbone.Collection)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.AdminDowngrade = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST.admin_downgrade, e.prototype.initialize = function (t) {
				return this.userId = t.userId, this.csrf = $('meta[name="csrf-token"]').attr("content")
			}, e.prototype.events = {
				click: "openOverlay"
			}, e.prototype.openOverlay = function (t) {
				var e;
				return t.preventDefault(), e = $(t.target).attr("href"), this.overlay = new Juicer.Views.Overlay({
					content: this.template({
						userId: this.userId,
						reasons: this.reasons,
						csrf: this.csrf,
						action: e
					}),
					element: "body",
					width: "50%"
				}), this.overlay.render()
			}, e.prototype.reasons = ["Temporary campaign/event is over", "Switching to another service", "Too expensive", "Too difficult to use", "They had technical issues", "Not satisfied with the support team", "Other"], e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.AdminUsers = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.events = {
				"click .toggle-favorite": "toggleFavorite"
			}, e.prototype.toggleFavorite = function (t) {
				var e, n;
				return t.preventDefault(), n = (e = $(t.target)).data("id"), jQuery.get("/admin/users/" + n + "/favorite"), "\u2605" === e.html() ? e.html("\u2606") : e.html("\u2605")
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.AnalyticsDateRange = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST.analytics_date_range, e.prototype.events = {
				"click .date-range": "openDateRangeOverlay"
			}, e.prototype.openDateRangeOverlay = function (t) {
				var e, n;
				return console.log("open"), n = $(t.target), e = this.template({
					start: n.data("start"),
					end: n.data("end")
				}), this.overlay = new Juicer.Views.Overlay({
					content: e,
					element: this.el,
					width: "50%"
				}), this.overlay.render()
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.BrokenImage = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.initialize = function (t) {
				return null == t && (t = {}), this.feed = t.feed, this.model = this.feed, this.handleBrokenImages()
			}, e.prototype.handleBrokenImages = function () {
				var n, i, e;
				return this.$("img.j-content-image").on("error", (n = this, function (t) {
					var e;
					if (0 < (e = jQuery(t.target).parents(".feed-item")).length) return n.handleBrokenImage(e)
				})), this.$("img.j-content-image").on("load", (i = this, function (t) {
					var e, n;
					if (n = jQuery(t.target), t.target.naturalWidth < 20) return e = n.parents(".feed-item"), i.handleBrokenImage(e)
				})), this.$(".j-poster img").on("error", (e = this, function (t) {
					return console.log("Hiding broken profile image."), "polaroid" === e.feed.get("css") ? (jQuery(t.target).parents(".j-post-container").addClass("no-poster"), jQuery(t.target).parents(".j-poster").hide()) : jQuery(t.target).hide()
				})), this.$("img.j-content-image").removeClass("j-content-image")
			}, e.prototype.handleBrokenImage = function (t) {
				if (!this.feed.get("photos") || !this.feed.get("isOnFeedsDashboard")) return 0 < t.find(".j-message").length && this.feed.get("isOnFeedsDashboard") ? (t.removeClass("image-post").addClass("words"), t.find(".j-image").hide(), console.log("Juicer: post with id " + t.data("id") + " has a broken image. Converting to a text post.")) : (t.hide(), console.log("Juicer: post with id " + t.data("id") + " has a broken image. Hiding it."))
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Churn = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST.churn, e.prototype.initialize = function () {
				return null != this.el && (this.overlay = new Juicer.Views.Overlay({
					content: this.template(),
					element: this.el,
					width: "50%"
				}), this.overlay.render())
			}, e.prototype.events = {
				"click .delete": "closeOverlay"
			}, e.prototype.closeOverlay = function () {
				return this.overlay.removeView()
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.BlogShow = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.el = window, e.prototype.initialize = function () {
				return this.loaded = !1, this.triggerPoint = $("#disqus_thread").offset().top
			}, e.prototype.events = function () {
				return {
					scroll: "lazyLoadDisqus"
				}
			}, e.prototype.lazyLoadDisqus = _u.debounce(function () {
				return this.checkScroll()
			}, 300), e.prototype.checkScroll = function () {
				if (this.scrollPoint() > this.triggerPoint && !this.loaded) return this.loadDisqus()
			}, e.prototype.loadDisqus = function () {
				var t, e;
				return this.loaded = !0, t = "juicerio", (e = document.createElement("script")).type = "text/javascript", e.async = !0, e.src = "//" + t + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e)
			}, e.prototype.scrollPoint = function () {
				return this.$el.scrollTop() + this.$el.height()
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.DocsSidebar = function (t) {
			function e() {
				return this.determineLeft = n(this.determineLeft, this), this.checkSidebar = n(this.checkSidebar, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.el = window, e.prototype.initialize = function () {
				return this.sidebar = jQuery(".docs-sidebar"), this.sibling = jQuery(".docs-content"), this.sidebarFooter = !1, this.sidebarHeight = this.sidebar.height(), this.$el.on("scroll", this.checkSidebar), this.$el.on("resize", _u.throttle(this.determineLeft, 100)), this.topPadding = 20, this.offset = this.sidebar.offset().top - this.topPadding, this.checkSidebar()
			}, e.prototype.checkSidebar = function () {
				return this.scrolledToBottom() ? (this.sidebarFooter || this.sidebar.css(this.absolute()), this.sidebarFooter = !0) : (this.scrollPoint() ? this.sidebar.css(this.fixed()) : this.sidebar.removeAttr("style"), this.sidebarFooter = !1)
			}, e.prototype.scrollPoint = function () {
				return this.offset <= this.$el.scrollTop()
			}, e.prototype.scrolledToBottom = function () {
				return this.$el.scrollTop() >= $(document).height() - this.$el.height() - $(".footer").height() - (this.$el.height() - this.sidebarHeight)
			}, e.prototype.fixed = function () {
				return {
					position: "fixed",
					top: this.topPadding,
					left: this.sidebar.offset().left
				}
			}, e.prototype.absolute = function () {
				return {
					position: "absolute",
					left: 0,
					bottom: 0,
					top: "auto"
				}
			}, e.prototype.determineLeft = function () {
				return !!this.scrollPoint() && this.sidebar.css({
					left: this.sibling.offset().left
				})
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.DowngradeOverlay = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST.downgrade_overlay, e.prototype.initialize = function () {
				return !!this.$el.data("downgrade-at") && (this.plan = this.$el.data("plan"), this.downgradeAt = this.$el.data("downgrade-at"), this.overlay = new Juicer.Views.Overlay({
					content: this.template({
						plan: this.plan,
						downgradeAt: this.downgradeAt
					}),
					element: this.el,
					width: "50%"
				}), this.overlay.render())
			}, e.prototype.events = {
				"click .delete": "closeOverlay"
			}, e.prototype.closeOverlay = function () {
				return this.overlay.removeView()
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Calculator = function (t) {
			function e() {
				return this.updateValues = n(this.updateValues, this), this.render = n(this.render, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST["enterprise/calculator"], e.prototype.initialize = function () {
				return this.model = new Juicer.Models.Estimate, this.model.on("change", this.updateValues), this.render()
			}, e.prototype.render = function () {
				return this.$el.html(this.template({
					model: this.model
				}))
			}, e.prototype.updateValues = function () {
				return this.$(".calculator-sources").html(this.model.sources()), this.$(".calculator-frequency").html(this.model.frequencyInWords()), this.$(".calculator-price").html(this.model.priceString()), this.$(".calculator-price-label").html(this.model.priceLabel())
			}, e.prototype.events = {
				"change input": "updateModel",
				"input input": "updateModel"
			}, e.prototype.updateModel = function (t) {
				var e;
				return e = $(t.target), this.model.set(e.data("attribute"), e.val())
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Enterprise = function (t) {
			function e() {
				return this.close = n(this.close, this), this.append = n(this.append, this), this.render = n(this.render, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST["enterprise/show"], e.prototype.initialize = function (t) {
				return this.model = new Juicer.Models.Enterprise({
					slug: t.slug
				}), this.model.on("sync", this.render), this.model.fetch({
					error: function () {
						return alert("Something went wrong. Please try again.")
					}
				})
			}, e.prototype.render = function () {
				return 1 < this.model.get("current_page") && this.model.get("new_feeds") ? this.append() : (this.$el.html(this.template({
					model: this.model
				})), this.renderFeeds(this.model.get("feeds")))
			}, e.prototype.renderFeeds = function (t) {
				return this.feeds = new Juicer.Views.EnterpriseFeeds({
					el: "ul.feeds",
					collection: t,
					model: this.model
				}).render()
			}, e.prototype.append = function () {
				return this.feeds.append()
			}, e.prototype.events = {
				"keyup input[type=search]": _u.debounce(function (t) {
					return this.search(t)
				}, 500),
				"search input[type=search]": "search"
			}, e.prototype.search = function (t) {
				return t.preventDefault(), this.model.query = $(t.target).val(), this.model.get("feeds"), this.model.fetch()
			}, e.prototype.close = function () {
				return this.model.off("sync"), this.feeds.close()
			}, e
		}(JuicerBackbone.View), Juicer.Views.EnterpriseFeeds = function (t) {
			function e() {
				return this.close = n(this.close, this), this.loadNextPage = n(this.loadNextPage, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.render = function () {
				return this.addToSubViews(this.collection.models), this.model.moreFeeds() && this.addLoadMore(), this.$el.html(this.subviews), this
			}, e.prototype.addToSubViews = function (t) {
				return this.subviews || (this.subviews = []), _u.each(t, (n = this, function (t) {
					var e;
					return e = new Juicer.Views.EnterpriseFeed({
						model: t,
						account: n.model
					}).render(), n.subviews.push(e.el)
				}));
				var n
			}, e.prototype.addLoadMore = function () {
				return this.loadMore = new Juicer.Views.EnterpriseLoadMore, this.loadMore.on("next:page:clicked", this.loadNextPage), this.loadMore.render(), this.subviews.push(this.loadMore.el)
			}, e.prototype.removeLoadMore = function () {
				var t;
				return this.loadMore.off("next:page:clicked"), t = this.subviews.indexOf(this.loadMore.el), this.subviews.splice(t, 1), this.loadMore.remove(), t
			}, e.prototype.loadNextPage = function () {
				return this.model.nextPage(), this.model.fetch()
			}, e.prototype.append = function () {
				var t;
				return t = this.removeLoadMore(), this.addToSubViews(this.model.get("new_feeds").models), this.model.moreFeeds() && this.addLoadMore(), this.$el.append(this.subviews.slice(t))
			}, e.prototype.close = function () {
				return _u.each(this.subviews, function (t) {
					return t.remove()
				}), this.loadMore && this.loadMore.off("next:page:clicked"), this.$el.empty().off(), this.stopListening(), this
			}, e
		}(JuicerBackbone.View), Juicer.Views.EnterpriseFeed = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST["enterprise/feed"], e.prototype.createAssignmentForm = JST["enterprise/create_assignment_form"], e.prototype.tagName = "li", e.prototype.className = "border bg-white p-25 relative mb-20 tal", e.prototype.initialize = function (t) {
				return this.account = t.account
			}, e.prototype.render = function () {
				return this.$el.html(this.template({
					model: this.model,
					assignments: this.model.get("assignments").models,
					sources: this.model.get("sources").models,
					account: this.account
				})), this
			}, e.prototype.events = {
				"click .delete-assignment": "deleteAssignment",
				"click .add-assignment": "openAssignmentForm",
				"click .fetch-all": "fetchAllPosts",
				"submit .new-assignment": "createAssignment"
			}, e.prototype.deleteAssignment = function (t) {
				var e;
				if (t.preventDefault(), e = $(t.target).parents(".enterprise-user-assignment"), Juicer.Helpers.confirm("Are you sure you want to remove this user from this feed?")) return new Juicer.Models.Assignment({
					id: $(t.target).data("id")
				}).destroy({
					success: function () {
						return e.remove()
					},
					error: function () {
						return alert("Something went wrong!")
					}
				})
			}, e.prototype.openAssignmentForm = function () {
				return new Juicer.Views.Overlay({
					content: this.createAssignmentForm({
						model: this.model,
						csrf: this.csrf,
						account: this.account
					}),
					width: "35%",
					element: this.el
				}).render()
			}, e.prototype.createAssignment = function (t) {
				var e, n;
				return t.preventDefault(), !!(e = $(t.target).serializeHash()).email && (this.assignment = new Juicer.Models.Assignment(e), this.assignment.save(null, {
					success: (n = this, function () {
						return n.model.get("assignments").add(n.assignment), n.render()
					}),
					error: function () {
						return alert("Something went wrong!")
					}
				}))
			}, e.prototype.fetchAllPosts = function (t) {
				return !!Juicer.Helpers.confirm("Fetching all posts for this feed can take 10+ minutes. Please be patient and check back later.") && (t.preventDefault(), this.model.fetchAll(), $(t.target).replaceWith("Fetching all posts."))
			}, e.prototype.close = function () {
				return this.$el.remove()
			}, e
		}(JuicerBackbone.View), Juicer.Views.EnterpriseLoadMore = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.tagName = "a", e.prototype.className = "load-more j-button mt-30", e.prototype.render = function () {
				return this.$el.text("Load More Feeds"), this
			}, e.prototype.events = {
				click: "triggerClick"
			}, e.prototype.triggerClick = function () {
				return this.trigger("next:page:clicked")
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.EnterpriseAdmin = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST["enterprise/admin"], e.prototype.tagName = "li", e.prototype.className = "enterprise-user", e.prototype.initialize = function (t) {
				return this.account = t.account, this.index = t.index
			}, e.prototype.render = function () {
				return this.$el.html(this.template({
					model: this.model,
					account: this.account,
					index: this.index
				}))
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.EnterpriseUser = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST["enterprise/user"], e.prototype.tagName = "li", e.prototype.className = "bg-white border mb-25", e.prototype.initialize = function (t) {
				return this.account = t.account
			}, e.prototype.render = function () {
				return this.$el.html(this.template({
					model: this.model,
					account: this.account
				}))
			}, e.prototype.events = {
				"click .delete-assignment": "deleteAssignment"
			}, e.prototype.deleteAssignment = function (t) {
				var e;
				if (t.preventDefault(), e = $(t.target).parents(".enterprise-user-assignment"), Juicer.Helpers.confirm("Are you sure you want to remove this user from this feed?")) return new Juicer.Models.Assignment({
					id: $(t.target).data("id")
				}).destroy({
					success: function () {
						return e.remove()
					},
					error: function () {
						return alert("Something went wrong!")
					}
				})
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.EnterpriseUsers = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST["enterprise/users"], e.prototype.inviteAdminForm = JST["enterprise/invite_admin"], e.prototype.initialize = function (t) {
				return this.model = new Juicer.Models.EnterpriseUsers({
					slug: t.slug
				}), this.model.fetch({
					success: (e = this, function () {
						return e.render()
					}),
					error: function () {
						return alert("uh oh something went wrong")
					}
				});
				var e
			}, e.prototype.render = function () {
				return this.$el.html(this.template({
					model: this.model
				})), this.renderAdmins(), this.renderUsers()
			}, e.prototype.renderAdmins = function () {
				var n, i;
				return n = [], _u.each(this.model.get("admins").models, (i = this, function (t, e) {
					return n.push(new Juicer.Views.EnterpriseAdmin({
						model: t,
						account: i.model,
						index: e
					}).render())
				})), this.$(".enterprise-admins").html(n)
			}, e.prototype.renderUsers = function () {
				var t, e;
				return t = _u.map(this.model.get("users").models, (e = this, function (t) {
					return new Juicer.Views.EnterpriseUser({
						model: t,
						account: e.model
					}).render()
				})), this.$(".enterprise-users").html(t)
			}, e.prototype.events = {
				"click a.new-enterprise-admin": "openNewAdminOverlay"
			}, e.prototype.openNewAdminOverlay = function (t) {
				return t.preventDefault(), this.csrf = $('meta[name="csrf-token"]').attr("content"), new Juicer.Views.Overlay({
					content: this.inviteAdminForm({
						model: this.model,
						csrf: this.csrf
					}),
					width: "35%"
				}).render()
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.EnterpriseWhiteLabel = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST["enterprise/white_label"], e.prototype.initialize = function (t) {
				return this.model = new Juicer.Models.Enterprise({
					slug: t.slug
				}), this.model.fetch({
					success: (e = this, function () {
						return e.render()
					}),
					error: function () {
						return alert("uh oh something went wrong")
					}
				});
				var e
			}, e.prototype.render = function () {
				return this.$el.html(this.template({
					model: this.model
				}))
			}, e.prototype.events = {
				"submit .white-label-url": "updateAccount"
			}, e.prototype.updateAccount = function (t) {
				var e, n, i;
				return t.preventDefault(), (n = $(t.target)).find("input[type=submit]").attr("disabled", "disabled").val("Loading..."), e = JuicerBackbone.Syphon.serialize(n), this.model.set(e), this.model.save(null, {
					success: (i = this, function () {
						return i.render()
					})
				})
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Errors = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST.errors, e.prototype.initialize = function (t) {
				var e;
				try {
					this.errors = $.parseJSON(t.errors.responseText).errors
				} catch (n) {
					n,
					e = (t && t.errors && t.errors.statusText || "").match(/(timeout|unavailable)/i) ? 'The request timed out. Please try again by pressing "Create Source" below.' : "An unspecified error occurred.",
					this.errors = {
						errorMessage: [e]
					}
				}
				return this.$(".errors, .j-loading, .please-wait").remove(), this.$("input[type=submit]").show(), this.$el.prepend(this.template({
					errors: this.errors
				}))
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty,
			s = [].indexOf || function (t) {
				for (var e = 0, n = this.length; e < n; e++)
					if (e in this && this[e] === t) return e;
				return -1
			};
		Juicer.Views.Feed = function (t) {
			function e() {
				return this.reRender = n(this.reRender, this), this.stopVideoAndResumeJuicerSlider = n(this.stopVideoAndResumeJuicerSlider, this), this.stopVideo = n(this.stopVideo, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST.feed, e.prototype.referral = JST["partials/_referral"], e.prototype.loading = JST["partials/_loading"], e.prototype.trackedPlans = ["large", "enterprise", "campaign", "custom"], e.prototype.permittedOptions = ["feedId", "gutter", "per", "page", "pages", "overlay", "interval", "filter", "startingAt", "endingAt", "search", "truncate", "equal", "style", "after", "columns"], e.prototype.initialize = function (t) {
				return this.userOptions = _u.pick(this.$el.data(), this.permittedOptions), this.userOptions = this.setDefaultOptions(this.userOptions), this.showLoader(!1, !0), this.isOnFeedsDashboard = t.isOnFeedsDashboard || !1, this.model = t.model || this.newModel(), this.tracked = !1, this.model.on("new-posts", this.reRender), this.model.on("showLoader", (e = this, function () {
					return e.showLoader(!0)
				}));
				var e
			}, e.prototype.setDefaultOptions = function (t) {
				var e, n;
				n = void 0;
				try {
					n = new URLSearchParams(window.location.search).get("feed_style"), n = 0 <= Juicer.Constants.FEED_CLASSES.indexOf(n) && n
				} catch (i) {
					e = i, console.error(e), n = null
				}
				return t.slug = t.feedId, t.css = n || t.style, t.per || (t.per = 100), t.page || (t.page = 1), null != t.overlay && (t.overlay = !!t.overlay), t
			}, e.prototype.newModel = function () {
				var t;
				return t = ["slug", "per", "page", "filter", "startingAt", "endingAt", "search", "css", "truncate"], new Juicer.Models.Feed(_u.pick(this.userOptions, t))
			}, e.prototype.events = function () {
				return {
					"click li.feed-item": "triggerEvent",
					"click ul.j-filters li": "filterFeed",
					"click ul.j-display-filters li": "filterFeed",
					"click .j-paginate": "appendNextPage"
				}
			}, e.prototype.render = function () {
				var t;
				return null != this.model.get("posts") ? this.renderFeed() : this.model.fetch({
					success: (t = this, function () {
						return t.renderFeed()
					}),
					error: function () {
						return console.log("Juicer Problem")
					}
				}), this
			}, e.prototype.renderFeed = function () {
				return this.hideLoader(), this.setUserOptionsFromModel(), this.model.paid() || this.addJuicerAds(), this.setDimensions(), this.determineBrowser(), this.model.widget() ? this.renderWidget() : this.model.slider() ? this.renderSlider() : this.model.livingWall() ? this.renderLivingWall() : this.renderFeedList(), this.setClass(), this.model.hasInterval() || this.handleBrokenImages(), this.$el.addClass("loaded"), this.shouldTrackAnalytics() && this.trackPageView(), this.runAfter("load"), this
			}, e.prototype.setUserOptionsFromModel = function () {
				var e;
				return _u.each(this.modelAttrs, (e = this, function (t) {
					if (null == e.userOptions[t] && 0 !== e.userOptions[t]) return e.userOptions[t] = e.model.get(t)
				})), null == this.userOptions.gutter && (this.userOptions.gutter = this.defaultGutter()), this.userOptions
			}, e.prototype.modelAttrs = ["columns", "interval", "overlay"], e.prototype.defaultGutter = function () {
				return this.noGutter() ? 0 : 20
			}, e.prototype.noGutter = function () {
				return _u.contains(["image-grid", "hip", "living-wall"], this.model.get("css"))
			}, e.prototype.determineBrowser = function () {
				var t, e;
				return t = navigator.userAgent.match(/MSIE|Trident|Edge/) ? "j-ie" : "j-modern", e = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i) ? "j-mobile" : "j-desktop", this.$el.addClass(t).addClass(e)
			}, e.prototype.runAfter = function (t) {
				return null == t && (t = "load"), this.afterFunction = new Function("event", this.userOptions.after), this.afterFunction(t)
			}, e.prototype.showLoader = function (t, e) {
				return null == t && (t = !1), null == e && (e = !1), this.$el.append(this.loading({
					container: t,
					wrapper: e
				}))
			}, e.prototype.hideLoader = function () {
				return this.$(".j-loading-container, .j-loading-wrapper, .j-loading").remove()
			}, e.prototype.renderWidget = function () {
				return this.widget = new Juicer.Views.Widget(this.feedOptions())
			}, e.prototype.renderSlider = function () {
				return this.handleReferral(), this.slider = new Juicer.Views.Slider(this.feedOptions()).render(), this.slider.on("slide", (t = this, function () {
					return t.stopCurrentlyPlaying()
				}));
				var t
			}, e.prototype.renderLivingWall = function () {
				return this.livingWall = new Juicer.Views.LivingWall(this.feedOptions()).render(), this.handleReferral()
			}, e.prototype.feedOptions = function () {
				return {
					columns: this.userOptions.columns,
					el: this.el,
					equal: this.userOptions.equal,
					gutter: this.userOptions.gutter,
					interval: this.userOptions.interval,
					isOnFeedsDashboard: this.isOnFeedsDashboard,
					model: this.model
				}
			}, e.prototype.renderFeedList = function () {
				return this.$el.append(this.template({
					isOnFeedsDashboard: this.isOnFeedsDashboard,
					feed: this.model,
					filter: this.currentFilter()
				})), this.handleReferral(), this.infiniteScroll = new Juicer.Views.InfiniteScroll({
					container: this.$el,
					isOnFeedsDashboard: this.isOnFeedsDashboard,
					model: this.model,
					pages: this.userOptions.pages,
					template: JST.infinite_scroll
				}), this.model.isGrid() && this.setupGrid(), this.model.classic() && this.setGutterOnClassic(), this.infiniteScroll.on("paginate", (t = this, function () {
					return t.runAfter("paginate"), null != t.lazyLoad && t.lazyLoad.checkImages(), t.handleBrokenImages()
				}));
				var t
			}, e.prototype.handleBrokenImages = function () {
				return new Juicer.Views.BrokenImage({
					el: this.el,
					feed: this.model
				})
			}, e.prototype.currentFilter = function () {
				return null != this.model && null != this.model.filter ? this.model.filter : this.userOptions.filter
			}, e.prototype.setDimensions = function () {
				if (this.$el.removeAttr("style"), this.dimensions["max-width"] = this.$el.data("width") || this.model.get("width") || this.model.defaultHeight(), this.dimensions["max-height"] = this.$el.data("height") || this.model.get("height") || this.model.defaultWidth(), !this.model.slider()) return this.$el.css(this.dimensions)
			}, e.prototype.dimensions = {
				"max-width": null,
				"max-height": null
			}, e.prototype.addJuicerAds = function () {
				var t, e, i;
				if (t = this.model.get("posts").length, 0 < (e = Math.floor(t / 10))) return _u(e).times((i = this, function (t) {
					var e, n;
					return e = 10 * (t + 1), n = new Juicer.Models.JuicerAd, i.model.get("posts").add(n, {
						at: e
					})
				}))
			}, e.prototype.setupGrid = function () {
				var t, e, n;
				if ((e = Math.floor(this.$el.outerWidth() / this.userOptions.columns)) < (t = 2 < window.devicePixelRatio ? 225 : 200) && (e = t), this.$el.gridalicious({
						animate: !0,
						selector: ".feed-item",
						width: e,
						gutter: this.userOptions.gutter,
						columns: this.userOptions.columns,
						animationOptions: {
							queue: !0,
							speed: 100,
							duration: 300,
							complete: (n = this, function () {
								return null == n.infiniteScroll || (n.infiniteScroll.shouldShowLoadMore() ? void 0 : n.infiniteScroll.removeLoadMore())
							})
						}
					}), this.model.get("lazy_load")) return this.lazyLoad = new Juicer.Views.LazyLoad({
					model: this.model,
					view: this
				})
			}, e.prototype.setGutterOnClassic = function () {
				var t, e;
				return t = "2%", null == this.userOptions.gutter && (e = t), this.$(".feed-item").css("margin-bottom", e)
			}, e.prototype.appendNextPage = function (t) {
				return null == t && (t = null), t && t.preventDefault(), this.$(".j-paginate").replaceWith(this.loading({
					inFeed: !0
				})), this.infiniteScroll.nextPage()
			}, e.prototype.setClass = function () {
				if (this.$el.removeClass(Juicer.Constants.FEED_CLASSES.join(" ")), this.$el.removeClass(this.cssClasses), this.$el.addClass(this.model.cssClass()), this.model.get("photos")) return this.$el.addClass("photos-only")
			}, e.prototype.cssClasses = "photo photos-only juicer-widget gridalicious slick-initialized slick-slider modern ie colored-icons hover-images", e.prototype.handleReferral = function () {
				return this.model.paid() || this.isOnFeedsDashboard || 0 < this.$el.find("h1.referral").length || this.$el.prepend(this.referral()), this.model.paid() && this.$el.find("h1.referral").remove(), this.$el.find("a[href*='www.juicer.io']").attr("href", "https://www.juicer.io?referrer=" + this.model.get("slug"))
			}, e.prototype.trackPageView = function () {
				if (!this.tracked) return new Juicer.Models.PageView({
					feed_id: this.model.get("id")
				}).save(), this.tracked = !0
			}, e.prototype.onJuicerDomain = function () {
				return !window.location.href.match("/iframe") && _u.contains(["www.juicer.io", "staging.juicer.io", "localhost:3000"], window.location.host)
			}, e.prototype.shouldTrackAnalytics = function () {
				var t;
				return !this.onJuicerDomain() && (t = this.model.get("plan"), 0 <= s.call(this.trackedPlans, t))
			}, e.prototype.triggerEvent = function (t) {
				var e, n, i;
				if (i = jQuery(t.target), this.shouldTrackAnalytics() && this.trackClick(i), i.hasClass("delete")) return t.preventDefault(), this.deletePost(i);
				if (i.hasClass("sticky")) return t.preventDefault(), this.toggleSticky(i, "stick");
				if (i.hasClass("unstick")) return t.preventDefault(), this.toggleSticky(i, "un-stick");
				if (i.hasClass("edit")) return new Juicer.Views.PostEdit({
					id: i.parents("ul.actions").data("id"),
					model: this.model
				}).render();
				if (i.hasClass("j-image") && 0 < i.parents("li.j-video").length && !this.model.get("video_overlay")) return t.preventDefault(), this.model.hasInterval() && this.userOptions.overlay ? (this.stopCurrentlyPlaying(), this.openOverlay({
					target: i
				})) : this.playVideo(i, i.parents("li.j-video"));
				if (i.hasClass("j-gallery-arrow")) return t.preventDefault(), new Juicer.Views.Gallery({
					target: i,
					el: this.el,
					model: this.model
				});
				if (0 < i.parents(".j-twitter-intents").length) return t.preventDefault(), this.handleTwitterIntent(i);
				if (0 < i.parents(".feed-item.j-twitter").length) {
					if (!(i.is("a") || 0 < i.parents("a").length)) return e = i.parents(".feed-item").data("id"), n = this.model.get("posts").findWhere({
						id: e
					}), window.open(n.link(), "_blank")
				} else if (this.userOptions.overlay && !i.hasClass(".feed-item.juicer") && 0 < !i.parents(".feed-item.juicer").length && 0 < !i.parents(".feed-item.j-twitter").length) return t.preventDefault(), this.stopCurrentlyPlaying(), this.openOverlay({
					target: i
				})
			}, e.prototype.trackClick = function (t) {
				return t = t.is("li.feed-item") ? t : t.parents("li.feed-item"), new Juicer.Models.Click({
					feed_id: this.model.get("id"),
					post_id: t.data("id")
				}).save()
			}, e.prototype.openOverlay = function (t) {
				var e;
				return this.postOverlay = new Juicer.Views.PostOverlay({
					target: t.target,
					model: this.model
				}), this.postOverlay.on("render", (e = this, function () {
					return e.runAfter("overlay")
				})), this.postOverlay.render()
			}, e.prototype.deletePost = function (t) {
				var e;
				return !!Juicer.Helpers.confirm("Are you sure you want to delete this post?") && (t = t.parents("ul.actions"), e = new Juicer.Models.Post({
					id: t.data("id")
				}), t.parents(".feed-item").remove(), e.destroy())
			}, e.prototype.toggleSticky = function (t, e) {
				var n, i, r;
				return null == e && (e = "stick"), !!Juicer.Helpers.confirm("Are you sure you want to " + e + " this post?") && (t = t.parents("ul.actions"), i = new Juicer.Models.Post({
					id: t.data("id")
				}), n = {
					success: (r = this, function (t) {
						return r.model.set(t, {
							parse: !0
						}), r.model.trigger("action")
					}),
					error: function () {
						return alert("Something went wrong.")
					}
				}, "stick" === e ? i.stick(n) : i.unstick(n))
			}, e.prototype.openPopupOnError = function (t, e) {
				return this.hasVideoLoadingErrorOccurred ? (this.hasVideoLoadingErrorOccurred = !1, window.open(t)) : 0 < e ? setTimeout((n = this, function () {
					return n.openPopupOnError(t, e - 1)
				}), 100) : void 0;
				var n
			}, e.prototype.playVideo = function (t, e) {
				return (t = t.is("a.j-image") ? t : t.parents("a.j-image")).hasClass("playing") ? this.stopVideoAndResumeJuicerSlider(t) : (this.stopCurrentlyPlaying(), this.slider && this.slider.stop(), t.addClass("playing"), t.html(this.embedVideo(t.data("external-id"), e, t.data("video-url"))), setTimeout((i = this, function () {
					return i.openPopupOnError($(t).attr("href"), 29)
				}), 100), $(t).find("video source").on("error", (n = this, function () {
					return n.hasVideoLoadingErrorOccurred = !0, n.stopVideoAndResumeJuicerSlider(t), console.log("broken video in feed, stopping playback and redirecting to target url")
				})), null != this.slider ? this.slider.$el.slick("slickPause") : void 0);
				var n, i
			}, e.prototype.stopVideo = function (t) {
				if (t.removeClass("playing"), t.html("<img src='" + t.data("image") + "' style='width:100%;display:block;' />"), null != this.slider) return this.slider.$el.slick("slickPlay")
			}, e.prototype.stopVideoAndResumeJuicerSlider = function (t) {
				if (this.stopVideo(t), this.slider) return this.slider.play()
			}, e.prototype.embedVideo = function (t, e, n) {
				var i;
				return null == n && (n = null), "tumblr" === (i = e.data("source")) && (n = this.parseTumblrVideo(e, n)), JST["partials/video/_" + i + "_embed"]({
					id: t,
					video: n
				})
			}, e.prototype.parseTumblrVideo = function (t, e) {
				var n, i;
				return (n = jQuery(jQuery.parseHTML(e))).removeAttr("id class width height poster preload data-crt-video data-crt-options"), n.attr("src") && (i = n.attr("src") + "&autoplay=1", n.attr("src", i)), window.setTimeout(function () {
					return t.find("video")[0].play()
				}, 500), n[0].outerHTML
			}, e.prototype.stopCurrentlyPlaying = function () {
				return _u.each(this.$(".playing"), (e = this, function (t) {
					return e.stopVideo(jQuery(t))
				}));
				var e
			}, e.prototype.handleTwitterIntent = function (t) {
				var e, n, i, r, s, o;
				return r = 550, e = 420, s = screen.height, o = screen.width, i = 0, n = Math.round(o / 2 - r / 2), e < s && (i = Math.round(s / 2 - e / 2)), window.open(t.attr("href"), "intent", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + r + ",height=" + e + ",top=" + i + ",left=" + n)
			}, e.prototype.filterFeed = function (t) {
				var e, n;
				return t.preventDefault(), (e = jQuery(t.target)).attr("data-filter"), e.attr("class").replace("selected", "").replace(" ", ""), this.model.filter !== e.data("filter") && (this.model.filter = e.data("filter"), this.filter = e.data("filter"), this.model.resetPage(), this.model.fetch({
					success: (n = this, function () {
						return n.$el.empty(), n.infiniteScroll && n.infiniteScroll.close(), n.render(), n.delegateEvents()
					})
				}))
			}, e.prototype.close = function () {
				return this.unbindChildren(), this.$el.removeClass("j-initialized"), this.model.off("new-posts"), this.model.off("showLoader"), this
			}, e.prototype.unbindChildren = function () {
				return null != this.widget && this.widget.close(), null != this.livingWall && this.livingWall.close(), null != this.infiniteScroll && this.infiniteScroll.close(), null != this.lazyLoad && this.lazyLoad.close(), null != this.slider && this.slider.off("slide"), this.$el.empty().off(), this.stopListening()
			}, e.prototype.reRender = function () {
				return this.unbindChildren(), this.render(), this.delegateEvents()
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Analytics = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST["feeds/analytics"], e.prototype.overlay = JST["feeds/analytics_overlay"], e.prototype.events = {
				"click .launch": "openAnalyticsOverlay"
			}, e.prototype.openAnalyticsOverlay = function (t) {
				return t.preventDefault(), this.feed.get("analytics_allowed?") ? window.location = "/analytics/" + this.feed.get("slug") : new Juicer.Views.Overlay({
					content: this.overlay({
						feed: this.feed
					}),
					element: this.el
				}).render()
			}, e
		}(Juicer.Views.SubViewSlide)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Design = function (t) {
			function e() {
				return this.afterCssParsing = n(this.afterCssParsing, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST["feeds/design"], e.prototype.colorPicker = JST["feeds/color_picker"], e.prototype.cssOverlay = JST["feeds/css_overlay"], e.prototype.title = "Custom Design", e.prototype.events = {
				"click .feed-color": "showColorPicker",
				"change .color-input": "updateColor",
				"input .hex-input": "updateColor",
				"click .save-style": "saveStyle",
				"click .reset-style": "resetStyle",
				"click .customize-css": "openCustomCssOverlay",
				"submit .css-form": "submitCssForm"
			}, e.prototype.showColorPicker = function (t) {
				var e, n;
				return (n = $(t.target)).hasClass("feed-color") || (n = n.parents(".feed-color")), this.$(".color-fields").remove(), e = n.data("color"), n.after(this.colorPicker({
					color: this.feed.getColor(e),
					pattern: this.pattern,
					colorAttr: e
				}))
			}, e.prototype.pattern = "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$", e.prototype.updateColor = function (t) {
				var e, n, i, r;
				return !!(r = (i = $(t.target)).val()).match(this.pattern) && (n = i.hasClass("hex-input") ? ".color-input" : ".hex-input", this.$(n).val(r), e = i.parents(".color-fields").data("color"), this.$(".color-example, .feed-color[data-color='" + e + "'] .color-picker-circle").css({
					backgroundColor: r
				}), this.updateModel(e, r))
			}, e.prototype.updateModel = function (t, e) {
				return this.feed.updateColor(t, e)
			}, e.prototype.saveStyle = function (t) {
				return this.feed.save(null, {
					success: (e = this, function () {
						return e.notifySuccess($(t.target))
					}),
					error: function () {
						return alert("Sorry your design didn't save properly. Please try again.")
					}
				});
				var e
			}, e.prototype.resetStyle = function () {
				if (confirm("Are you sure you want to set your feed custom styles back to default?")) return this.feed.resetColors(), this.feed.save(null, {
					success: (t = this, function () {
						return t.feed.trigger("action"), t.render()
					})
				});
				var t
			}, e.prototype.notifySuccess = function (t) {
				return t.text("Saved!"), setTimeout(function () {
					return t.text("Save Custom Style")
				}, 3e3)
			}, e.prototype.openCustomCssOverlay = function () {
				return this.overlay = new Juicer.Views.Overlay({
					content: this.cssOverlay({
						feed: this.feed
					}),
					element: this.el,
					width: "50%"
				}), this.overlay.render()
			}, e.prototype.submitCssForm = function (t) {
				var e;
				return t.preventDefault(), e = $(t.target).serializeHash(), $.parsecss(e.css, this.afterCssParsing)
			}, e.prototype.afterCssParsing = function (t) {
				return this.feed.set("custom_css", this.stringifyCss(t)), this.feed.save(null, {
					success: (e = this, function () {
						return e.overlay.removeView(), e.feed.trigger("action")
					}),
					error: function () {
						return alert("Something went wrong")
					}
				});
				var e
			}, e.prototype.stringifyCss = function (t) {
				var n;
				return n = "", _u.each(t, function (t, e) {
					return n += e + " {\n", _u.each(t, function (t, e) {
						return n += "  " + e + ": " + t + ";\n"
					}), n += "}\n\n"
				}), n
			}, e
		}(Juicer.Views.SubView)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Embed = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.embed = JST["feeds/embed_code"], e.prototype.template = JST["feeds/embed"], e.prototype.wordpress = JST["feeds/wordpress"], e.prototype.iframe = JST["feeds/iframe"], e.prototype.menu = JST["feeds/embed_menu"], e.prototype.title = "Embed in your Site", e.prototype.initialize = function () {
				return e.__super__.initialize.apply(this, arguments), this.currentlySelected = "site"
			}, e.prototype.embedOptions = [{
				value: "site",
				label: "Standard Website"
			}, {
				value: "wordpress",
				label: "Wordpress Site"
			}, {
				value: "iframe",
				label: "iframe"
			}], e.prototype.events = {
				"change .embed-menu": "switchEmbed",
				"focus textarea": "highlightField"
			}, e.prototype.switchEmbed = function (t) {
				return this.currentlySelected = $(t.target).val(), this.renderTemplate(), this.renderTitle()
			}, e.prototype.renderTemplate = function () {
				return this.renderContent(), this.renderMenu()
			}, e.prototype.renderContent = function () {
				switch (this.currentlySelected) {
					case "wordpress":
						return this.showWordPress();
					case "iframe":
						return this.showIframe();
					default:
						return this.showEmbed()
				}
			}, e.prototype.renderMenu = function () {
				return this.$el.prepend(this.menu({
					embedOptions: this.embedOptions,
					currentlySelected: this.currentlySelected
				}))
			}, e.prototype.javascriptPath = function () {
				return this.assetPath("embed.js")
			}, e.prototype.stylesheetPath = function () {
				return this.assetPath("embed.css")
			}, e.prototype.assetPath = function (t) {
				return Juicer.Constants.ASSET_PATH + "/" + t
			}, e.prototype.showEmbed = function () {
				var t;
				return t = (t = this.embed({
					feed: this.feed,
					javascript: this.javascriptPath(),
					stylesheet: this.stylesheetPath()
				})).replace(/<br \/>/g, "\n"), this.$el.html(this.template({
					embed: t,
					feed: this.feed
				}))
			}, e.prototype.showWordPress = function () {
				return this.$el.html(this.wordpress({
					feed: this.feed
				}))
			}, e.prototype.showIframe = function () {
				var t, e, n;
				return t = this.feed.get("height") || 1e3, n = this.feed.get("width") || 1e3, 1e3 === t && this.feed.slider() && (t = 300), e = "<iframe src='https://www.juicer.io/api/feeds/" + this.feed.get("slug") + "/iframe' frameborder='0' width='" + n + "' height='" + t + "' style='display:block;margin:0 auto;'></iframe>", this.$el.html(this.iframe({
					iframe: e
				}))
			}, e.prototype.highlightField = function (t) {
				var e;
				if (e !== $(t.target)) return e = $(t.target), setTimeout(function () {
					return e.select()
				}, 50)
			}, e
		}(Juicer.Views.SubView)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Features = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST["feeds/features"], e
		}(Juicer.Views.SubViewSlide)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Hub = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST["feeds/hub"], e
		}(Juicer.Views.SubViewSlide)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Moderate = function (t) {
			function e() {
				return this.pollForRevalidating = n(this.pollForRevalidating, this), this.revalidatingPoll = n(this.revalidatingPoll, this), this.closeOverlay = n(this.closeOverlay, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST["feeds/moderate"], e.prototype.revalidateOverlay = JST["feeds/revalidate_overlay"], e.prototype.title = "Moderate and Filter", e.prototype.initialize = function () {
				return e.__super__.initialize.apply(this, arguments), this.initialAttributes = _u.pick(this.feed.attributes, "lazy_load", "css")
			}, e.prototype.render = function () {
				return e.__super__.render.apply(this, arguments), this.toggleFilterBlocker()
			}, e.prototype.events = {
				"submit .filters": "openOverlay",
				"click .moderate-confirm": "submitConfirmation",
				"click .moderated": "viewModeratedPosts",
				"click .public": "showPublic",
				"change input#queue": "toggleAndSubmit"
			}, e.prototype.showPublic = function (t) {
				return this.fetchFeed(), $(".moderation-nav .active").removeClass("active"), $(t.target).addClass("active")
			}, e.prototype.viewModeratedPosts = function (t) {
				return t.preventDefault(), $(window).unbind("scroll"), this.renderModeratedPosts()
			}, e.prototype.renderModeratedPosts = function () {
				return this.moderated = new Juicer.Models.Moderated({
					slug: this.feed.get("slug")
				}), $(".moderation-nav .active").removeClass("active"), $(".moderation-nav .moderated").addClass("active"), this.moderated.fetch({
					success: (t = this, function () {
						return t.feedView && t.feedView.close(), new Juicer.Views.Moderated({
							el: "ul.juicer-feed",
							model: t.moderated
						}).render()
					}),
					error: function () {
						return alert("Something went wrong pulling in your moderated posts.")
					}
				});
				var t
			}, e.prototype.openOverlay = function (t) {
				var e;
				return t.preventDefault(), e = $(t.target).serializeHash().feed, this.overlay = new Juicer.Views.Overlay({
					content: this.revalidateOverlay({
						data: e
					}),
					element: this.el,
					width: "50%"
				}), this.overlay.render()
			}, e.prototype.closeOverlay = function () {
				return this.overlay.removeView()
			}, e.prototype.submitConfirmation = function (t) {
				var e, n;
				return t.preventDefault(), e = (n = $(t.target)).parents("form").serializeHash(), n.data("revalidate") ? (n.parents(".submits").html("<div class='j-loading'>Loading...</div><div class='mt-15 fifteen tc-gray'>Applying filter settings to existing posts. This can take a while. Please hold.</div>"), e.revalidating = !0, this.updateFilters(e, this.revalidatingPoll)) : (n.parents(".submits").html("<div class='j-loading'>Loading...</div>"), this.updateFilters(e, this.closeOverlay))
			}, e.prototype.updateFilters = function (t, e) {
				return this.feed.set(t), this.feed.save(null, {
					success: function () {
						return e()
					},
					error: function () {
						return alert("Something went wrong!")
					}
				})
			}, e.prototype.revalidatingPoll = function () {
				return setTimeout(this.pollForRevalidating, 5e3)
			}, e.prototype.pollForRevalidating = function () {
				return this.feed.fetch({
					success: (t = this, function () {
						return t.feed.get("revalidating") ? t.revalidatingPoll() : (t.closeOverlay(), t.feed.trigger("action"))
					}),
					error: function () {
						return alert("Something happened with polling. Please refresh page.")
					}
				});
				var t
			}, e.prototype.toggleAndSubmit = function () {
				if (this.toggleFilterBlocker(), this.queueChecked()) return this.$("form").trigger("submit")
			}, e.prototype.toggleFilterBlocker = function () {
				var t;
				return t = this.$(".filter-blocker"), this.queueChecked() ? t.show() : t.hide()
			}, e.prototype.queueChecked = function () {
				return this.$("#queue").is(":checked")
			}, e.prototype.close = function (t) {
				if (null == t && (t = null), null != t && t.preventDefault(), $("li.selected").removeClass("selected"), e.__super__.close.apply(this, arguments), null != this.moderated) return this.fetchFeed()
			}, e.prototype.fetchFeed = function () {
				return this.feed.set(this.initialAttributes), this.feed.moderated ? window.location = "/feeds/" + this.feed.get("slug") : this.feed.fetch({
					success: (t = this, function () {
						return t.feed.trigger("action")
					})
				});
				var t
			}, e
		}(Juicer.Views.SubView)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Settings = function (t) {
			function e() {
				return this.reRender = n(this.reRender, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST["feeds/settings"], e.prototype.title = "Feed Settings", e.prototype.events = {
				"input input.columns": "updateColumns",
				"input input.interval": "updateInterval",
				"input input.width": "updateDimensions",
				"input input.height": "updateDimensions",
				"change input[type=checkbox]": "updateCheckbox",
				"change .css": "updateStyle",
				"change .order": "updateOrder",
				"change .filter_setting": "updateFilter",
				"focus input[type=number]": "highlightField"
			}, e.prototype.render = function () {
				return e.__super__.render.apply(this, arguments), this.toggleSettings(), this.feed.on("change:css", this.reRender)
			}, e.prototype.renderTemplate = function () {
				return this.$el.html(this.template({
					feed: this.feed,
					checkboxes: this.checkboxes
				}))
			}, e.prototype.reRender = function () {
				return this.$el.html(this.template({
					feed: this.feed,
					checkboxes: this.checkboxes
				})), this.renderTitle(), this.toggleSettings()
			}, e.prototype.toggleSettings = function () {
				if (this.feed.hasInterval() && this.showInterval(), this.feed.hasInterval() || this.showFilter(), this.feed.hasColumns()) return this.showColumns()
			}, e.prototype.showInterval = function () {
				return this.$(".interval").show()
			}, e.prototype.showFilter = function () {
				return this.$(".filter_setting").show()
			}, e.prototype.showColumns = function () {
				return this.$(".columns").show()
			}, e.prototype.checkboxes = [{
				attr: "colored_icons",
				label: "Color in social network icons"
			}, {
				attr: "photos",
				label: "Only show posts with images"
			}, {
				attr: "videos",
				label: "Only show posts with videos"
			}, {
				attr: "lazy_load",
				label: "Lazy-load images",
				tooltip: "Won't load images until they are scrolled to on your site. This will save on bandwidth and decrease page load time. Only use if Juicer feed is below the fold."
			}, {
				attr: "overlay",
				label: "Open overlay on post click",
				tooltip: "With this box checked, when you click on a post it will open in an overlay view with the post larger and sharing icons. Otherwise it will link directly to the post."
			}, {
				attr: "video_overlay",
				label: "Only play videos in overlay",
				tooltip: "With this box checked, videos will open in an overlay and play. If not checked, the videos will play inline in the feed."
			}, {
				attr: "infinite_scroll",
				label: "Infinite Scroll",
				tooltip: 'If you scroll to the bottom of your Juicer feed, automatically load in more posts. If not, you\'ll see a "Load More" button instead'
			}, {
				attr: "poll",
				label: "Auto-Refresh for Live Events",
				tooltip: "Refreshes the feed automatically when new posts are pulled in. Great for using on a display at a live event."
			}], e.prototype.updateColumns = function (t) {
				var e, n;
				if (0 < (e = (n = $(t.target).val()).length) && e < 2) return this.feed.set("columns", n), this.saveAndRender()
			}, e.prototype.updateInterval = function (t) {
				var e, n;
				if (3 < (e = (n = $(t.target).val()).length) && e < 10 || "0" === n) return this.feed.set("interval", n), this.saveAndRender()
			}, e.prototype.updateDimensions = function (t) {
				var e, n, i, r;
				if (r = (i = $(t.target)).val(), e = i.attr("class"), 2 < (n = r.length) && n < 5 && 99 < r && r < 5001 || "" === r) return this.feed.set(e, r), this.saveAndRender()
			}, e.prototype.updateCheckbox = function (t) {
				var e, n;
				return n = (e = $(t.target)).is(":checked") ? "1" : "0", this.feed.set(e.data("attribute"), n), this.saveAndRender()
			}, e.prototype.updateStyle = function (t) {
				return this.feed.set("css", $(t.target).val()), this.saveAndRender()
			}, e.prototype.updateOrder = function (t) {
				return this.feed.set("order", $(t.target).val()), this.saveAndRender()
			}, e.prototype.updateFilter = function (t) {
				return this.feed.set("display_filter", $(t.target).val()), this.saveAndRender()
			}, e.prototype.saveAndRender = function () {
				return this.feed.trigger("showLoader"), this.feed.save(null, {
					success: (t = this, function () {
						return t.feed.trigger("action")
					})
				});
				var t
			}, e.prototype.highlightField = function (t) {
				var e;
				if (e !== $(t.target)) return e = $(t.target), setTimeout(function () {
					return e.select()
				}, 50)
			}, e
		}(Juicer.Views.SubView)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Sources = function (t) {
			function e() {
				return this.reRender = n(this.reRender, this), this.sort = n(this.sort, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST["feeds/sources"], e.prototype.title = "Social Media Sources", e.prototype.render = function (t) {
				if (e.__super__.render.apply(this, arguments), jQuery(".juicer-feed").hasClass("j-modern")) return sortable(".source-list", {
					items: ".existing-source",
					forcePlaceholderSize: !0
				})[0].addEventListener("sortupdate", this.sort)
			}, e.prototype.events = {
				"click .delete": "removeSource",
				"click .source-submenu-item": "openSourceOverlay",
				"click .rename": "openSourceEditOverlay",
				"click .moderate": "openSourceModerateOverlay",
				"submit #manual_post": "addPostManually",
				"submit .source-update": "updateSource",
				"click .existing-source": "toggleSubMenu",
				"click .js-add-source-submenu": "openSourceForm"
			}, e.prototype.removeSource = function (t) {
				var n, i, r;
				if (t.preventDefault(), i = $(t.target), Juicer.Helpers.confirm("Are you sure you want to delete this source? This will PERMANENTLY delete your posts from your Juicer Feed. If you plan to re-add this source there is NO GUARANTEE we will be able to pull all your posts back in, so do at your own risk.")) return n = i.data("id"), new Juicer.Models.Source({
					id: n
				}).destroy({
					success: (r = this, function (t, e) {
						return r.feed.set(e, {
							parse: !0
						}), $(".existing-source[data-id='" + n + "']").remove(), i.parents(".source-submenu").remove(), r.feed.trigger("action")
					}),
					error: function () {
						return alert("uh oh, something went wrong.")
					}
				})
			}, e.prototype.openSourceForm = function () {
				return this.trigger("openSourceForm", this)
			}, e.prototype.openSourceOverlay = function (t) {
				var e, n;
				return t.preventDefault(), n = $(t.target), e = this.feed.get("sources").findWhere({
					id: n.data("id")
				}), this.overlay = new Juicer.Views.Overlay({
					content: JST["sources/" + n.data("template")]({
						source: e,
						feed: this.feed
					}),
					width: "50%",
					element: this.el
				}), this.overlay.render()
			}, e.prototype.addPostManually = function (t) {
				var e, n, i;
				return t.preventDefault(), (n = $(t.target)).find("ul.errors").remove(), e = n.serializeHash(), this.post = new Juicer.Models.Post(e), this.post.save(null, {
					success: (i = this, function (t, e) {
						return i.feed.set(e, {
							parse: !0
						}), i.reRender(), i.feed.trigger("action")
					}),
					error: function (t, e) {
						return new Juicer.Views.Errors({
							el: n,
							errors: e
						})
					}
				})
			}, e.prototype.updateSource = function (t) {
				var e, n;
				return t.preventDefault(), e = $(t.target).serializeHash(), this.source = new Juicer.Models.Source(e), this.source.save(null, {
					success: (n = this, function (t, e) {
						return n.feed.set(e, {
							parse: !0
						}), n.reRender(), n.feed.trigger("action")
					}),
					error: function () {
						return alert("Something went wrong.")
					}
				})
			}, e.prototype.sort = function (t) {
				var e;
				return e = _u.map($(t.target).find(".existing-source"), function (t) {
					return $(t).data("id")
				}), this.feed.set({
					source_ids: e
				}), this.saveAndRender()
			}, e.prototype.reRender = function () {
				return this.sidebarView.renderSidebar()
			}, e.prototype.toggleSubMenu = function (t) {
				var e;
				return (e = $(t.target)).hasClass("existing-source") || (e = e.parents(".existing-source")), e.next(".source-submenu").slideToggle(), e.toggleClass("open")
			}, e.prototype.saveAndRender = function () {
				return this.feed.trigger("showLoader"), this.feed.save(null, {
					success: (t = this, function () {
						return t.feed.set({
							source_ids: null
						}), t.feed.trigger("action")
					})
				});
				var t
			}, e
		}(Juicer.Views.SubView)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Synced = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST["feeds/synced"], e
		}(Juicer.Views.SubViewSlide)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.ChurnForm = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.namespace = "churn", e.prototype.createModel = function () {
				return new JuicerBackbone.Model
			}, e
		}(Juicer.Views.FormView)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.FeedForm = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.namespace = "feed", e.prototype.createModel = function () {
				return new Juicer.Models.FeedValidation
			}, e
		}(Juicer.Views.FormView)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.UserForm = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.namespace = "user", e.prototype.createModel = function () {
				return new Juicer.Models.UserValidation
			}, e
		}(Juicer.Views.FormView)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.UserUpdateForm = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.namespace = "user", e.prototype.createModel = function () {
				var t;
				return t = {
					email: $("#user_email").val(),
					noPassword: $("#user_password").length < 1
				}, new Juicer.Models.UserUpdateValidation(t)
			}, e
		}(Juicer.Views.FormView)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Gallery = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.initialize = function (t) {
				var e, n, i, r, s, o, a, l;
				return e = (r = (l = t.target).parents(".j-gallery")).data("id"), o = this.model.get("posts").findWhere({
					id: e
				}), a = (n = r.find(".j-image img")).attr("src"), -1 === (i = (s = o.get("additional_photos")).indexOf(a)) && (i = 0), l.hasClass("j-gallery-next") ? i += 1 : l.hasClass("j-gallery-previous") && (i -= 1), i >= s.length && (i = 0), i < 0 && (i = s.length - 1), n.attr("src", s[i])
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.GdprOverlay = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST.gdpr_form, e.prototype.initialize = function () {
				return this.overlay = new Juicer.Views.Overlay({
					content: this.template(),
					element: this.el,
					width: "50%"
				}), this.overlay.render()
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Graph = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.initialize = function () {
				var a, t, l, e;
				return e = 655, t = 463, d3.scale.category20(), a = d3.layout.force().linkDistance(10).linkStrength(2).size([e, t]), l = d3.select(this.el).append("svg").attr("width", e).attr("height", t), d3.json("/graph.json", function (t, e) {
					var r, n, s, i, o;
					o = e.nodes.slice(), s = [], r = [], e.links.forEach(function (t) {
						var e, n, i;
						n = o[t.source], i = o[t.target], e = {}, o.push(e), s.push({
							source: n,
							target: e
						}, {
							source: e,
							target: i
						}), r.push([n, e, i])
					}), a.nodes(o).links(s).start(), n = l.selectAll(".link").data(r).enter().append("path").attr("class", "link"), (i = l.selectAll(".node").data(e.nodes).enter().append("circle").attr("class", "node").attr("r", 5).call(a.drag)).append("title").text(function (t) {
						return t.name
					}), a.on("tick", function () {
						n.attr("d", function (t) {
							return "M" + t[0].x + "," + t[0].y + "S" + t[1].x + "," + t[1].y + " " + t[2].x + "," + t[2].y
						}), i.attr("transform", function (t) {
							return "translate(" + t.x + "," + t.y + ")"
						})
					})
				})
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Home = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.initialize = function () {
				return this.$("input").placeholder(), new Juicer.Views.HomeSlider({
					el: ".js-thisIsJuicer"
				}), new Juicer.Views.Graph({
					el: ".js-graph-nodes"
				})
			}, e.prototype.events = {
				"click .js-learnMore": "scrollDown",
				"click .show": "renderExample",
				"change select": "reRenderFeed",
				"click .hide-feed": "hideFeed"
			}, e.prototype.scrollDown = function (t) {
				var e;
				return t.preventDefault(), e = this.$("#this-is-juicer").offset().top, $("html,body").animate({
					scrollTop: e
				}, {
					easing: "swing",
					duration: 500
				})
			}, e.prototype.renderExample = function (t) {
				var e, n;
				return t.preventDefault(), (e = $(t.target)).html("Loading..."), this.model = new Juicer.Models.Feed({
					slug: "juicer",
					per: 16,
					order: "random"
				}), this.model.fetch({
					success: (n = this, function () {
						return n.renderFeed(), $(".style-picker").css("display", "inline-block"), $(".hide-feed").show(), e.hide()
					}),
					error: function () {
						return console.log("Example did not load!")
					}
				})
			}, e.prototype.reRenderFeed = function (t) {
				var e, n;
				return this.$(".juicer-feed").remove(), this.$(".js-juicer-example .container-fluid").append("<ul class='juicer-feed' data-pages='1'></ul>"), n = $(t.target).val(), e = this.map(n), this.model.set(e), this.renderFeed()
			}, e.prototype.renderFeed = function () {
				return new Juicer.Views.Feed({
					el: ".juicer-feed",
					model: this.model
				}).render()
			}, e.prototype.hideFeed = function (t) {
				return t.preventDefault(), this.$(".juicer-feed").html(""), $(".style-picker").hide(), $(t.target).hide(), this.$(".show").show().html("Show me an example feed!")
			}, e.prototype.map = function (t) {
				switch (t) {
					case "classic":
						return {
							css: "classic",
							photos: !1
						};
					case "white":
						return {
							css: "white",
							photos: !1
						};
					case "widget":
						return {
							css: "widget",
							photos: !1
						};
					case "colored-icons":
						return {
							css: "colored-icons",
							photos: !1
						};
					case "gray":
						return {
							css: "gray",
							photos: !1
						};
					case "slider":
						return {
							css: "slider",
							photos: !0
						};
					case "user":
						return {
							css: "user",
							photos: !1
						};
					case "hip":
						return {
							css: "hip",
							photos: !1
						};
					case "living-wall":
						return {
							css: "living-wall",
							photos: !1
						};
					case "modern":
						return {
							css: "modern",
							photos: !1
						};
					case "polaroid":
						return {
							css: "polaroid",
							photos: !1
						};
					case "night":
						return {
							css: "night",
							photos: !1
						};
					default:
						return {
							css: "image-grid",
							photos: !0
						}
				}
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.HomeSlider = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.item = ".explainer-list-item", e.prototype.initialize = function () {
				return this.activate(this.$(this.item).first())
			}, e.prototype.events = {
				"mouseenter .explainer-list-item": "toggleSlider",
				"click .explainer-list-item": "toggleSlider"
			}, e.prototype.toggleSlider = function (t) {
				var e;
				if ((e = $(t.target)).is(this.item) || (e = e.parents(this.item)), !e.hasClass("active")) return this.activate(e)
			}, e.prototype.activate = function (t) {
				var e, n;
				return n = t.data("slide"), this.$(".explainer-list-item.active").removeClass("active"), t.addClass("active"), (e = this.$(".slider-images ." + n)).attr("src") ? this.slide(e) : this.loadImage(e)
			}, e.prototype.slide = function (t) {
				return this.$(".slider-images .active").removeClass("active"), t.addClass("active")
			}, e.prototype.loadImage = function (t) {
				var e;
				return (e = t[0]).src = e.dataset.src, e.srcset = e.dataset.srcset, this.slide(t)
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.InfiniteScroll = function (t) {
			function e() {
				return this.checkForPagination = n(this.checkForPagination, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.el = function () {
				return this.model.hasHeight() ? "ul.juicer-feed" : window
			}, e.prototype.initialize = function (t) {
				if (this.template = t.template || JST["partials/_moderated_posts"], this.container = t.container, this.isOnFeedsDashboard = t.isOnFeedsDashboard || !1, this.posts = this.model.get("posts"), this.pages = _u.min([t.pages, 1e3]), this.stopped = this.pages < 2 || this.limitReached(), this.shouldInfinitelyScroll()) return this.$el.on("scroll", _u.debounce(this.checkForPagination, 300))
			}, e.prototype.limitReached = function () {
				return this.lessThanLimit() || this.setPagesLimit()
			}, e.prototype.lessThanLimit = function () {
				return this.posts.length < this.posts.limit_value
			}, e.prototype.setPagesLimit = function () {
				return this.posts.current_page >= this.pages
			}, e.prototype.removeLoadMore = function () {
				return jQuery(".j-paginate").remove()
			}, e.prototype.checkForPagination = function () {
				if (this.scrollPoint() > this.triggerPoint() && !this.stopped) return this.nextPage()
			}, e.prototype.shouldInfinitelyScroll = function () {
				return this.model.get("infinite_scroll") && !this.stopped
			}, e.prototype.shouldShowLoadMore = function () {
				return !this.model.get("infinite_scroll") && !this.stopped
			}, e.prototype.nextPage = function () {
				return this.stop(), this.model.nextPage(), this.model.fetch({
					remove: !1,
					success: (n = this, function (t, e) {
						return n.appendPosts(e), n.trigger("paginate")
					}),
					error: function () {
						return console.log("Juicer Infinite Scroll Problem.")
					}
				});
				var n
			}, e.prototype.appendPosts = function (t) {
				var e, n;
				if (jQuery(".j-loading, .j-loading-wrapper").remove(), n = new Juicer.Models.Feed(t, {
						parse: !0
					}), this.posts = n.get("posts"), 0 < this.posts.length && (e = jQuery(this.template({
						isOnFeedsDashboard: this.isOnFeedsDashboard,
						feed: n
					}))), this.model.isGrid() ? this.container.gridalicious("append", e) : this.container.append(e), this.limitReached() || this.start(), !this.shouldShowLoadMore()) return this.removeLoadMore()
			}, e.prototype.scrollPoint = function () {
				return this.$el.scrollTop() + 2 * this.$el.outerHeight()
			}, e.prototype.triggerPoint = function () {
				return this.model.hasHeight() ? this.container.prop("scrollHeight") : this.container.offset().top + this.container.outerHeight()
			}, e.prototype.start = function () {
				return this.stopped = !1
			}, e.prototype.stop = function () {
				return this.stopped = !0
			}, e.prototype.close = function () {
				return this.$el.empty().off(), this.model.resetPage(), this.stopListening(), this
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.LazyLoad = function (t) {
			function e() {
				return this.checkImages = n(this.checkImages, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.el = window, e.prototype.initialize = function (t) {
				return this.view = t.view, this.$el.on("scroll", _u.debounce(this.checkImages, _u.random(250, 350))), this.model.hasHeight() && this.feed().on("scroll", _u.debounce(this.checkImages, _u.random(250, 350))), this.checkImages()
			}, e.prototype.checkImages = function () {
				return _u.each(this.view.$el.find("img[data-lazy]:not([src])"), (e = this, function (t) {
					if ((t = jQuery(t)).offset().top < e.scrollPoint(e.$el) && t.attr("src", t.data("lazy")), e.model.hasHeight() && t.offset().top < e.scrollPoint(e.feed())) return t.attr("src", t.data("lazy"))
				}));
				var e
			}, e.prototype.scrollPoint = function (t) {
				return t.scrollTop() + t.height() + 500
			}, e.prototype.feed = function () {
				return jQuery("ul.juicer-feed")
			}, e.prototype.close = function () {
				return this.$el.off("scroll"), this.feed().off("scroll")
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.LivingWall = function (t) {
			function e() {
				return this.rotatePost = n(this.rotatePost, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST["partials/feeds/_wall"], e.prototype.customCss = JST["partials/_custom_styles"], e.prototype.initialize = function (t) {
				return this.columns = t.columns, this.equal = t.equal, this.gutter = t.gutter, this.interval = t.interval, this.isOnFeedsDashboard = t.isOnFeedsDashboard, 0 === this.interval && (this.interval = 5e7), this.defaultColumns = this.columns, this.gutter || (this.gutter = 0), this.setSizes(), jQuery(window).on("resize", _u.debounce((e = this, function () {
					return e.resize()
				}), 300));
				var e
			}, e.prototype.setSizes = function () {
				var t;
				return this.handleResponsiveColumns(), t = this.gutter * (2 * this.columns - 1), this.width = this.$el.width() - t, this.small = this.width / (2 * this.columns), this.$el.hasClass("j-ie") && (this.small = Math.floor(this.small - this.columns - 1)), this.large = 2 * this.small + this.gutter, this.retryTimes = 0
			}, e.prototype.handleResponsiveColumns = function () {
				return this.windowWidth = this.$el.width(), this.windowWidth < 400 ? this.columns = 1 : this.windowWidth < 600 ? this.columns = 2 : this.windowWidth < 900 ? this.columns = 3 : this.columns = this.defaultColumns
			}, e.prototype.render = function () {
				var t, e, n, i, r, s;
				return t = 8 * this.columns, this.setLargeCount(), this.smallCount = t - 4 * this.largeCount, this.total = this.largeCount + this.smallCount, n = _u.map(this.initialPosts(), (i = this, function (t) {
					return i.renderPost(t)
				})), e = _u.sample(n, this.largeCount), _u.each(e, (r = this, function (t) {
					return t.addClass("j-large"), r.setDimensions(t)
				})), _u.each(n, (s = this, function (t) {
					return !t.hasClass("j-large") && (t.addClass("j-small"), s.setDimensions(t))
				})), this.$el.append(this.customCss({
					feed: this.model
				})), this.$el.append(n), this.$el.packery(this.packeryOptions()), this.handleInterval(), this.ensureProperSize(), this
			}, e.prototype.resize = function () {
				if (this.$el.outerWidth() !== this.windowWidth) return this.reRender()
			}, e.prototype.reRender = function () {
				return this.setSizes(), this.render()
			}, e.prototype.setLargeCount = function () {
				return this.largeCount = this.equal ? 0 : this.columns % 2 != 0 ? this.columns - 1 : this.columns
			}, e.prototype.packeryOptions = function () {
				return {
					gutter: this.gutter,
					itemSelector: ".feed-item",
					resize: !1
				}
			}, e.prototype.handleInterval = function () {
				var t, e;
				return document.hidden || this.startInterval(), jQuery(document).on("show", (t = this, function () {
					return t.startInterval()
				})), jQuery(document).on("hide", (e = this, function () {
					return e.stopInterval()
				}))
			}, e.prototype.startInterval = function () {
				if (null == this.id) return this.id = setInterval(this.rotatePost, this.interval)
			}, e.prototype.stopInterval = function () {
				return null != this.id && window.clearInterval(this.id), this.id = null
			}, e.prototype.ensureProperSize = function () {
				var t, e, n;
				return !(9 < this.retryTimes) && (n = 3 * this.gutter, t = 4 * this.small, Math.floor(t) - n <= (e = this.$el.height()) && e <= Math.ceil(t) + n ? void 0 : (this.retryTimes++, this.close(), this.render()))
			}, e.prototype.renderPost = function (e) {
				return e = jQuery(this.template({
					isOnFeedsDashboard: this.isOnFeedsDashboard,
					post: e
				})), imagesLoaded(e[0], function () {
					var t;
					if ((t = e.find("img")).width() > t.height()) return t.addClass("landscape")
				}), e
			}, e.prototype.initialPosts = function () {
				var t;
				return t = this.total - 1, this.posts().slice(0, +t + 1 || 9e9)
			}, e.prototype.nextPost = function () {
				return this.total++, this.total >= this.posts().length && (this.model.pollingAllowed() && this.model.fetchNewPosts(!1), this.total = 0), this.posts()[this.total]
			}, e.prototype.posts = function () {
				var t;
				return t = this.model.get("posts").models, t = _u.filter(t, function (t) {
					return "Twitter" !== t.sourceType() && "YouTube" !== t.sourceType()
				})
			}, e.prototype.randomPost = function () {
				return jQuery(_u.sample(this.$(".feed-item").not(".j-sticky")))
			}, e.prototype.setDimensions = function (t) {
				return t.hasClass("j-small") ? this.small : this.large, t.css({
					width: this.size(t),
					height: this.size(t)
				})
			}, e.prototype.rotatePost = function () {
				var t, e, n;
				return n = this.randomPost(), (t = this.nextPost()).stickied() && (t = this.nextPost()), e = this.renderPost(t), this.cloneStyle(n, e)
			}, e.prototype.cloneStyle = function (t, e) {
				var n, i, r, s, o, a, l;
				return e.addClass(t.hasClass("j-small") ? "j-small" : "j-large"), this.setDimensions(e), i = {
					top: l = this.size(t),
					left: l
				}, n = this.merge(this.vectorMap(), i, "*"), r = a = t.position(), s = this.merge(a, n, "-"), o = this.merge(a, n, "+"), e.css(_u.extend(s, this.underCss)), t.css(this.underCss), t.before(e), window.setTimeout(function () {
					return t.css(o), e.css(r), window.setTimeout(function () {
						return t.remove(), e.css({
							zIndex: 2
						})
					}, 500)
				}, 100)
			}, e.prototype.size = function (t) {
				return t.hasClass("j-small") ? this.small : this.large
			}, e.prototype.merge = function (e, n, i) {
				var r;
				return null == i && (i = "+"), r = {}, _u.each(_u.keys(e), function (t) {
					return "+" === i ? r[t] = e[t] + n[t] : "*" === i ? r[t] = e[t] * n[t] : "-" === i ? r[t] = e[t] - n[t] : void 0
				}), r
			}, e.prototype.vectorMap = function () {
				var t, e;
				return e = _u.sample([-1, 1]), {
					top: (t = _u.shuffle([e, 0]))[0],
					left: t[1]
				}
			}, e.prototype.underCss = {
				zIndex: 1
			}, e.prototype.close = function () {
				return this.stopInterval(), this.$el.empty(), this.$el.packery("destroy"), jQuery(document).off("show hide"), this.stopListening(), this
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Moderated = function (t) {
			function e() {
				return this.reRender = n(this.reRender, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST.moderated, e.prototype.loading = JST["partials/_loading"], e.prototype.upgradeToCampaign = JST["campaign/upgrade_to_campaign"], e.prototype.events = {
				"click ul.j-filters li": "filterFeed",
				"click ul.j-display-filters li": "filterFeed",
				"click .approve": "restorePost",
				"click .reject": "rejectPost",
				"click .j-paginate": "appendNextPage",
				"click .bulk-moderate": "bulkModerate"
			}, e.prototype.render = function () {
				var t;
				return this.model.set({
					lazy_load: !1,
					css: "modern"
				}), this.$el.css({
					maxWidth: "none",
					maxHeight: "none"
				}), this.startInfiniteScroll(), this.$el.html(this.template({
					feed: this.model,
					menuItems: this.menuItems()
				})), (t = Math.floor(this.$el.outerWidth() / 3)) < 200 && (t = 200), this.model.on("new-posts", this.reRender), !(this.model.get("posts").models.length < 1) && (this.$el.removeClass(Juicer.Constants.FEED_CLASSES.join(" ")), this.$el.addClass("modern"), this.$el.gridalicious({
					selector: ".feed-item",
					width: t,
					gutter: this.gutter
				}), null == this.infiniteScroll || (this.infiniteScroll.shouldShowLoadMore() ? void 0 : this.infiniteScroll.removeLoadMore()))
			}, e.prototype.startInfiniteScroll = function () {
				return this.model.resetPage(), this.infiniteScroll = new Juicer.Views.InfiniteScroll({
					container: this.$el,
					model: this.model
				})
			}, e.prototype.appendNextPage = function (t) {
				return t.preventDefault(), this.$(".j-paginate").replaceWith(this.loading()), this.infiniteScroll.nextPage()
			}, e.prototype.restorePost = function (t) {
				return this.hidePost(t, "Approving...").restore()
			}, e.prototype.rejectPost = function (t) {
				return this.hidePost(t, "Rejecting...").reject()
			}, e.prototype.hidePost = function (t, e, n) {
				var i, r;
				return null == n && (n = !0), t.preventDefault(), null != e && $(t.target).html(e), r = $(t.target).parents(".actions"), i = this.fetchPost(r.data("id")), n && r.parents(".feed-item").hide().remove(), i
			}, e.prototype.fetchPost = function (t) {
				return this.model.get("posts").findWhere({
					id: t
				})
			}, e.prototype.filterFeed = function (t) {
				var e, n;
				return t.preventDefault(), (e = jQuery(t.target)).attr("data-filter"), e.parents("ul"), this.model.filter = e.data("filter"), this.model.resetPage(), this.model.fetch({
					success: (n = this, function () {
						return n.reRender()
					})
				})
			}, e.prototype.bulkModerate = function (t) {
				var e, n;
				if (n = (
						e = null != $(t.target).data("approve")) ? "approve" : "reject", Juicer.Helpers.confirm("Are you sure you want to " + n + " all of these posts?")) return this.$(".bulk-moderate-nav").html("<div class='j-loading'>Loading...</div>"), this.model.bulkModerate(e, this.model.filter), setTimeout(function () {
					return location.reload()
				}, 1e4)
			}, e.prototype.unbindChildren = function () {
				return this.$el.empty().off(), this.infiniteScroll && this.infiniteScroll.close(), this.model.off("new-posts", this.reRender), this.stopListening()
			}, e.prototype.reRender = function () {
				return this.unbindChildren(), this.render(), this.delegateEvents()
			}, e.prototype.menuItems = function () {
				var t;
				return t = this.baseMenuItems, t = this.allMenu.concat(t)
			}, e.prototype.baseMenuItems = [{
				filter: "Filter",
				title: "Text Filtered"
			}, {
				filter: "Profanity",
				title: "Profanity"
			}, {
				filter: "User",
				title: "Manually Deleted"
			}, {
				filter: "Queue",
				title: "Moderation Queue"
			}, {
				filter: "Similarity",
				title: "Duplicate Posts"
			}, {
				filter: "Rejected",
				title: "Rejected"
			}], e.prototype.allMenu = [{
				filter: void 0,
				title: "All"
			}], e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Nav = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.events = {
				"click .js-Header_burgerMenu": "toggleMenuOpen",
				"click .sidebar-toggle": "toggleSidebarOpen"
			}, e.prototype.toggleMenuOpen = function () {
				var t;
				return $(".main-container").removeClass("open-right").toggleClass("open-left"), (t = $(".side-nav")).hasClass("opened") ? t.toggleClass("opened") : setTimeout(function () {
					return t.toggleClass("opened")
				}, 200)
			}, e.prototype.toggleSidebarOpen = function () {
				return $(".main-container").removeClass("open-left").toggleClass("open-right")
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.NewFeed = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST.new_feed, e.prototype.initialize = function () {
				return this.socialAccounts = new Juicer.Collections.SocialAccounts, this.socialAccounts.fetch({
					success: (t = this, function () {
						return t.sourceForm = new Juicer.Views.SourceForm({
							el: t.el,
							socialAccounts: t.socialAccounts
						}), t.sourceForm.on("create", t.nextPage, t), t.render(), new Juicer.Views.OverlayReopener({
							model: t.feed,
							sourceForm: t.sourceForm
						}).render(t.el)
					}),
					error: function () {
						return alert("Something went wrong while fetching your connected social accounts")
					}
				});
				var t
			}, e.prototype.render = function () {
				return this.$el.html(this.template())
			}, e.prototype.nextPage = function (t) {
				return window.location = "/feeds/" + t.get("slug")
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Overlay = function (t) {
			function e() {
				return this.handleKeypress = n(this.handleKeypress, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.className = "j-overlay", e.prototype.template = JST.overlay, e.prototype.initialize = function (t) {
				return this.element = t.element || "body", this.content = t.content, this.width = t.width, this.close = !1 !== t.close, jQuery(document).bind("keydown", this.handleKeypress)
			}, e.prototype.render = function () {
				return this.$el.html(this.template({
					content: this.content,
					close: this.close
				})), jQuery(this.element).children(".j-overlay") && jQuery(this.element).children(".j-overlay").remove(), jQuery(this.element).append(this.el), jQuery(".j-overlay-content").css({
					width: this.width
				}).focus(), this.handleBrokenImages(), this
			}, e.prototype.events = function () {
				return {
					"click .j-close": "closeOverlay",
					click: "removeOverlay",
					"click .j-navigate a": "triggerNavigate",
					"click a.share": "openPopup",
					"click .j-gallery-arrow": "gallery"
				}
			}, e.prototype.gallery = function (t) {
				return t.preventDefault(), this.trigger("trigger:gallery", jQuery(t.target))
			}, e.prototype.removeOverlay = function (t) {
				var e;
				if (!((e = jQuery(t.target)).hasClass("j-overlay-content") || 0 < e.parents(".j-overlay-content").length)) return this.removeView()
			}, e.prototype.closeOverlay = function (t) {
				return t.preventDefault(), this.removeView()
			}, e.prototype.removeView = function () {
				return this.trigger("close"), this.unbind(), this.remove(), this.$(".j-overlay").remove(), jQuery(this.element).find(".j-overlay").remove(), jQuery(document).unbind("keydown", this.handleKeypress)
			}, e.prototype.triggerNavigate = function (t) {
				return t.preventDefault(), this.trigger("trigger:navigate", jQuery(t.target).data("post-id"))
			}, e.prototype.openPopup = function (t) {
				var e;
				return t.preventDefault(), e = jQuery(t.target), window.open(e.attr("href"), "pop", "width=600, height=400, scrollbars=no")
			}, e.prototype.handleKeypress = function (t) {
				switch (t.keyCode) {
					case 37:
						return this.$(".j-previous").click();
					case 39:
						return this.$(".j-next").click();
					case 27:
						return this.closeOverlay(t)
				}
			}, e.prototype.handleBrokenImages = function () {
				return this.$(".j-poster img").on("error", function (t) {
					return console.log("hiding broken profile image in overlay."), $(t.target).hide()
				}), this.$("img.j-content-image").on("error", function (t) {
					var e;
					if (0 < (e = jQuery(t.target).parents(".image")).length) return console.log("Hiding broken image in overlay."), e.hide()
				}), this.$("video source").on("error", function (t) {
					var e, n, i;
					return i = $(t.target).parents(".instagram-wrapper, .twitter-wrapper, .video-wrapper"), n = $(t.target).parents("video").first(), (e = i.children(".j-video-fallback").first()).length ? (console.log("converting broken video in overlay to thumbnail"), n.hide(), e.children("img").each(function (t, e) {
						if (!$(e).attr("src") && $(e).attr("data-lazy")) return $(e).attr("src", $(e).attr("data-lazy"))
					}), e.show()) : (console.log("hiding broken video in overlay"), i.hide())
				})
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.OverlayReopener = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.el = window, e.prototype.storageKey = "juicer_overlay_open", e.prototype.initialize = function (t) {
				return null == t && (t = {}), this.sourceForm = t.sourceForm, this.sidebarView = t.sidebarView, this.reopened = !1
			}, e.prototype.render = function (t) {
				return this.overlayShouldReopen() && (null == this.sourceForm && (this.sourceForm = new Juicer.Views.SourceForm({
					el: t,
					feed: this.model
				})), this.sourceForm.openOverlay(this.get()), null != this.sidebarView && this.sourceForm.on("create", this.sidebarView.renderSidebar), this.clear(), this.reopened = !0), this
			}, e.prototype.overlayShouldReopen = function () {
				return !!this.get()
			}, e.prototype.get = function () {
				var t;
				return t = this.el.localStorage.getItem(this.storageKey), JSON.parse(t)
			}, e.prototype.set = function (t) {
				var e;
				return e = JSON.stringify(t), this.el.localStorage.setItem(this.storageKey, e)
			}, e.prototype.clear = function () {
				return this.el.localStorage.setItem(this.storageKey, null)
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Payment = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.initialize = function () {
				return this.toggleYear()
			}, e.prototype.events = {
				"change #year": "toggleYear"
			}, e.prototype.toggleYear = function () {
				var t, e, n, i, r;
				return i = this.$("#year"), n = $("[data-price]"), e = $(".simple-plan-monthly"), t = n.data("price"), i.is(":checked") ? (r = Math.ceil(12 * t - 12 * t * .1), n.html("$" + r), e.html("/ yr")) : (n.html("$" + t), e.html("/ mo"))
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Plans = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST.plan_change, e.prototype.events = {
				"click [data-plan]": "openNewPlanOverlay"
			}, e.prototype.openNewPlanOverlay = function (t) {
				var e, n;
				return t.preventDefault(), e = $(t.target), this.model = new Juicer.Models.Plan, this.model.fetch({
					data: {
						plan: e.data("plan")
					},
					success: (n = this, function () {
						return n.csrf = $('meta[name="csrf-token"]').attr("content"), n.overlay = new Juicer.Views.Overlay({
							content: n.template({
								model: n.model,
								csrf: n.csrf
							}),
							element: n.el,
							width: "50%"
						}), n.overlay.render()
					})
				})
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.PostEdit = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST.post_edit, e.prototype.message = JST["partials/_message"], e.prototype.className = "j-overlay", e.prototype.initialize = function (t) {
				return this.setPost(t)
			}, e.prototype.setPost = function (t) {
				var e;
				return e = this.model.get("posts"), this.post = e.get(t.id)
			}, e.prototype.render = function () {
				return this.overlay = new Juicer.Views.Overlay({
					content: this.template({
						post: this.post,
						feed: this.model
					}),
					width: "50%",
					el: this.el
				}), this.overlay.render()
			}, e.prototype.events = function () {
				return {
					"input textarea": "updatePreview",
					"submit form": "savePost"
				}
			}, e.prototype.updatePreview = function (t) {
				return this.post.set("edit", $(t.target).val()), this.$(".message-container").html(this.message({
					post: this.post
				}))
			}, e.prototype.savePost = function (t) {
				return t.preventDefault(), this.post.save(null, {
					success: (n = this, function (t, e) {
						return n.overlay.removeView(), n.model.set(e, {
							parse: !0
						}), n.model.trigger("action")
					}),
					error: function () {
						return alert("Something went wrong. Please try again.")
					}
				});
				var n
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.PostOverlay = function (t) {
			function e() {
				return this.cycleGallery = n(this.cycleGallery, this), this.navigateOverlay = n(this.navigateOverlay, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST.post_overlay, e.prototype.initialize = function (t) {
				return this.model = t.model, this.setPost(t.target)
			}, e.prototype.triggers = function () {
				return {
					"click a.next": "navigateOverlay",
					"click a.previous": "navigateOverlay"
				}
			}, e.prototype.setPost = function (t) {
				var e;
				return e = (t = t.is("li.feed-item") ? t : t.parents("li.feed-item")).data("id"), this.assignPosts(e)
			}, e.prototype.assignPosts = function (t) {
				var e, n, i, r;
				if (i = this.model.get("posts"), this.post = i.get(t), n = (e = i.indexOf(this.post)) + 1 < i.length ? e + 1 : 0, r = 0 <= e - 1 ? e - 1 : i.length - 1, this.next = i.at(n), "Juicer" === this.next.sourceType() && (this.next = i.at(n + 1)), this.previous = i.at(r), "Juicer" === this.previous.sourceType()) return this.previous = i.at(r - 1)
			}, e.prototype.render = function () {
				return this.overlay = new Juicer.Views.Overlay({
					element: "body",
					content: this.template({
						post: this.post,
						next: this.next,
						previous: this.previous,
						feed: this.model
					}),
					width: "75%"
				}), this.overlay.on("trigger:navigate", this.navigateOverlay), this.overlay.on("trigger:gallery", this.cycleGallery), this.overlay.render(), this.trigger("render", this)
			}, e.prototype.navigateOverlay = function (t) {
				return this.overlay.removeView(), this.assignPosts(t), this.render()
			}, e.prototype.cycleGallery = function (t) {
				return new Juicer.Views.Gallery({
					target: t,
					el: this.el,
					model: this.model
				})
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.SideNav = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.events = {
				"click li#collapseable": "toggleOtherFeeds"
			}, e.prototype.toggleOtherFeeds = function (t) {
				var e, n;
				return t.preventDefault(), (e = (n = $(t.target)).next()).is(":visible") ? (e.slideUp(), n.removeClass("selected")) : (e.slideDown(), n.addClass("selected"))
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Sidebar = function (t) {
			function e() {
				return this.openSourceFormFromSources = n(this.openSourceFormFromSources, this), this.closeSubView = n(this.closeSubView, this), this.openSubView = n(this.openSubView, this), this.openNewSource = n(this.openNewSource, this), this.reRenderCss = n(this.reRenderCss, this), this.reRender = n(this.reRender, this), this.render = n(this.render, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST.sidebar, e.prototype.nameEdit = JST["feeds/feed_name_edit"], e.prototype.newSource = JST["feeds/new_source"], e.prototype.initialize = function (t) {
				var e, n;
				return this.renderedFromModerationUrl = t.renderedFromModerationUrl, this.renderedFromModerationUrl ? this.model = new Juicer.Models.Moderated({
					slug: t.slug
				}) : this.model = new Juicer.Models.Feed({
					isOnFeedsDashboard: !0,
					slug: t.slug,
					starting_at: t.starting_at
				}), this.model.fetch({
					success: (n = this, function () {
						if (n.hideLoader(), n.renderSidebar(), null == n.reopener || !n.reopener.reopened) return n.setupNewSources()
					}),
					error: (e = this, function () {
						return e.hideLoader(), alert("Sorry something is going wrong.")
					})
				}), this.model.on("action", this.reRender, this), this.model.once("sync", this.initialRender, this), this.model.on("update:colors", this.reRenderCss, this)
			}, e.prototype.initialRender = function () {
				return this.render(!0)
			}, e.prototype.render = function (t) {
				if (null == t && (t = !1), 1 === this.model.get("posts").current_page) return this.renderedFromModerationUrl && t ? this.renderModeration() : this.feed = new Juicer.Views.Feed({
					el: ".juicer-feed",
					isOnFeedsDashboard: !0,
					model: this.model
				}).render()
			}, e.prototype.reRender = function () {
				return null != this.feed && this.feed.close(), null != this.overlay && this.overlay.removeView(), null != this.sourcesView && this.sourcesView.reRender(), this.sourcesView = null, this.subView = null, this.render()
			}, e.prototype.reRenderCss = function () {
				return 0 < jQuery(".juicer-custom-styles").length ? jQuery(".juicer-custom-styles").html("<style>" + this.model.customStyles() + "</style>") : jQuery(".juicer-feed").prepend("<div class='juicer-custom-styles'><style>" + this.model.customStyles() + "</style></div>")
			}, e.prototype.renderSidebar = function () {
				if (this.$el.html(this.template({
						feed: this.model
					})), this.reopener = new Juicer.Views.OverlayReopener({
						model: this.model,
						sidebarView: this
					}).render(this.el), this.model.get("expired_social_accounts")) return this.$("#social_accounts").addClass("alert-menu-item").prop("title", "One of your connected Social Accounts has expired. Please refresh it to make sure all of your posts get pulled in.")
			}, e.prototype.hideLoader = function () {
				return jQuery(".loading-overlay").fadeOut()
			}, e.prototype.setupNewSources = function () {
				return this.sourceForm = new Juicer.Views.SourceForm({
					feed: this.model,
					el: this.el,
					socialAccounts: this.model.get("social_accounts")
				}), this.sourceForm.on("create", this.reRender)
			}, e.prototype.renderModeration = function () {
				if (this.renderSubView(this.viewMap.moderate, this.$("#moderate")), this.subView) return this.subView.renderModeratedPosts()
			}, e.prototype.events = function () {
				return {
					"click .js-feed-name-edit": "renderFeedNameEdit",
					"submit .js-feed-name-edit-form": "updateFeedName",
					"click .add-source": "openNewSource",
					"click .menu-item": "openSubView",
					"change #slug_update": "toggleSlugWarning"
				}
			}, e.prototype.openNewSource = function () {
				return this.overlay = new Juicer.Views.Overlay({
					content: this.newSource(),
					width: "85%",
					element: this.el
				}), Juicer.overlay = this.overlay, this.overlay.render()
			}, e.prototype.openSubView = function (t) {
				var e, n;
				if ("social_accounts" !== (e = $(t.currentTarget)).prop("id")) return t.preventDefault(), n = this.viewMap[e.prop("id")], this.renderSubView(n, e)
			}, e.prototype.closeSubView = function () {
				return this.subView = null
			}, e.prototype.renderSubView = function (t, e) {
				if ((this.subView && this.subView.$target.prop("id")) !== e.prop("id")) return this.subView && this.subView.close(), this.subView = new t({
					feed: this.model,
					$target: e,
					sidebarView: this,
					feedView: this.feed
				}), this.subView.on("openSourceForm", this.openSourceFormFromSources), this.subView.render()
			}, e.prototype.openSourceFormFromSources = function (t) {
				return this.sourcesView = t, this.openNewSource()
			}, e.prototype.viewMap = {
				analytics: Juicer.Views.Analytics,
				design: Juicer.Views.Design,
				embed: Juicer.Views.Embed,
				features: Juicer.Views.Features,
				hub: Juicer.Views.Hub,
				moderate: Juicer.Views.Moderate,
				settings: Juicer.Views.Settings,
				sources: Juicer.Views.Sources,
				synced: Juicer.Views.Synced
			}, e.prototype.renderFeedNameEdit = function (t) {
				return t.preventDefault(), this.overlay = new Juicer.Views.Overlay({
					content: this.nameEdit({
						feed: this.model
					}),
					element: this.el,
					width: "50%"
				}), this.overlay.render()
			}, e.prototype.updateFeedName = function (t) {
				var e;
				return t.preventDefault(), e = $(t.target).serializeHash(), this.model.set(e), this.model.save(null, {
					success: function (t, e) {
						return window.location = "/feeds/" + e.slug
					}
				})
			}, e.prototype.toggleSlugWarning = function () {
				return this.$(".slug-warning").toggle()
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Slider = function (t) {
			function e() {
				return this.setFeedItemHeight = n(this.setFeedItemHeight, this), this.beforeChange = n(this.beforeChange, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST.feed, e.prototype.initialize = function (t) {
				return this.columns = t.columns, this.interval = t.interval, this.isOnFeedsDashboard = t.isOnFeedsDashboard, this.slidesToShow = this.columns
			}, e.prototype.render = function () {
				var t, e, n;
				return this.$el.append(this.template({
					isOnFeedsDashboard: this.isOnFeedsDashboard,
					feed: this.model
				})), t = this.model.get("height") || 300, this.$("a.j-image img, li.words, .slick-track").css({
					height: t
				}), this.$el.slick(this.sliderSettings()), this.$el.on("beforeChange", this.beforeChange), this.$el.on("afterChange", (e = this, function () {
					return e.trigger("slide")
				})), window.imagesLoaded(this.$el, this.setFeedItemHeight), this.$el.hasClass("j-ie") && this.setBackgroundImages(), jQuery(window).on("resize", _u.debounce((n = this, function () {
					return n.setFeedItemHeight()
				}), 300)), this
			}, e.prototype.beforeChange = function (t, e, n, i) {
				if (0 === i && this.model.pollingAllowed()) return this.model.fetchNewPosts(!1)
			}, e.prototype.sliderSettings = function () {
				return jQuery.extend(this.sliderDefaults(), {
					responsive: this.breakpoints()
				})
			}, e.prototype.breakpoints = function () {
				return _u.map(this.breakpointArray, (e = this, function (t) {
					return {
						breakpoint: t[0],
						settings: {
							slidesToShow: _u.min([t[1], e.slidesToShow]),
							slidesToScroll: _u.min([t[1], e.slidesToShow])
						}
					}
				}));
				var e
			}, e.prototype.breakpointArray = [
				[1700, 6],
				[1450, 5],
				[1024, 4],
				[960, 3],
				[786, 2],
				[480, 1]
			], e.prototype.sliderDefaults = function () {
				return {
					slidesToShow: this.slidesToShow,
					autoplay: 0 !== this.interval,
					autoplaySpeed: this.interval,
					slidesToScroll: this.slidesToShow,
					slide: "li",
					adaptiveHeight: 0 === !this.$("a.j-images").length,
					cssEase: "ease",
					pauseOnHover: !0
				}
			}, e.prototype.setBackgroundImages = function () {
				return _u.each(this.$("[data-image]"), function (t) {
					var e;
					return (e = jQuery(t)).css("background-image", "url('" + e.data("image") + "')")
				})
			}, e.prototype.setFeedItemHeight = function (t) {
				var e;
				return _u.each(this.$("a.j-image img"), function (t) {
					if (t.width > t.height) return jQuery(t).addClass("j-landscape")
				}), e = this.model.get("height") || 300, this.$("a.j-image img, li.words, .slick-track").css({
					height: e
				}), !this.model.get("lazy_load") && (null != t && _u.each(t.images, function (t) {
					var e;
					if (!t.isLoaded) return e = (t = $(t.img)).parents(".feed-item"), console.log("Juicer: post with id " + e.data("id") + " has a broken image. Converting to a text post."), e.removeClass("image-post").removeClass("j-video").addClass("words"), t.parents(".j-image").remove()
				}))
			}, e.prototype.stop = function () {
				return this.$el.slick("stop")
			}, e.prototype.play = function () {
				return this.$el.slick("play")
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.SourceForm = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.template = JST.source_form, e.prototype.pleaseWait = JST.please_wait, e.prototype.twitterUnavailableForSmallPlan = JST["sources/twitter_unavailable_for_small_plan"], e.prototype.initialize = function (t) {
				var e;
				return this.feed = t.feed, this.feed ? this.currentPlanName = this.feed.get("plan") : (new Juicer.Models.Plan).fetch({
					success: (e = this, function (t) {
						return e.currentPlanName = t.get("plan")
					})
				}), this.socialAccounts = t.socialAccounts ? t.socialAccounts : this.feed.get("social_accounts"), this.rendered = !1, this.submitting = !1
			}, e.prototype.events = function () {
				return {
					"click .add-a-hashtag li": "openHashtag",
					"click .js-source": "handleOverlay",
					"submit .source-form": "createSource",
					"click .source-type": "redrawOverlay",
					"click a.social-account": "setOverlayStorage",
					"click .search-result": "submitSearchResult"
				}
			}, e.prototype.handleOverlay = function (t, e) {
				var n, i;
				return null == e && (e = "username"), (i = $(t.target)).hasClass("j-social-icon") || (i = i.parents(".j-social-icon")), n = i.data("type"), this.openOverlay({
					type: e,
					source: n
				})
			}, e.prototype.openOverlay = function (t) {
				return this.type = t.type, this.source = t.source, (!this.feed || this.feed && this.feed.get("more_sources_allowed?")) && "LinkedIn" === this.source ? juicer_cljs.linkedin.modal_switch.show({
					feed_id: null != this.feed ? this.feed.get("id") : null
				}) : (!this.feed || this.feed && this.feed.get("more_sources_allowed?")) && ("Instagram-Business" === this.source || "Instagram" === this.source && "hashtag" === this.type) ? juicer_cljs.instagram_business.modal_switch.show({
					feed_id: null != this.feed ? this.feed.get("id") : null
				}) : (!this.feed || this.feed && this.feed.get("more_sources_allowed?")) && "Instagram" === this.source && "username" === this.type ? juicer_cljs.instagram_basic_display.modal_switch.show({
					feed_id: null != this.feed ? this.feed.get("id") : null
				}) : "Twitter" === this.source && "small" === this.currentPlanName ? new Juicer.Views.Overlay({
					content: this.twitterUnavailableForSmallPlan(),
					element: this.el,
					width: "50%"
				}).render() : (this.model = new Juicer.Models.Source({
					source: this.source
				}), this.renderOverlay())
			}, e.prototype.openHashtag = function (t) {
				return this.handleOverlay(t, "hashtag")
			}, e.prototype.drawTemplate = function () {
				return this.template({
					source: this.model,
					feed: this.feed,
					type: this.type,
					results: this.results,
					socialAccounts: this.socialAccounts
				})
			}, e.prototype.renderOverlay = function () {
				if (this.overlay = new Juicer.Views.Overlay({
						content: this.drawTemplate(),
						element: this.el,
						width: "50%",
						close: !0
					}), this.overlay.render(), this.resultsNeedFetching()) return this.fetchResults(this.type)
			}, e.prototype.resultsNeedFetching = function () {
				var t;
				return t = this.socialAccounts.socialAccount("facebook"), "Facebook" === this.source && t && _u.contains(["username", "groups", "reviews"], this.type) && this.rendered !== this.type
			}, e.prototype.redrawOverlay = function (t) {
				return t.preventDefault(), this.type = $(t.target).data("type"), this.overlay.removeView(), this.renderOverlay()
			}, e.prototype.fetchResults = function (t) {
				return null == t && (t = "groups"), this.results = new Juicer.Collections.FacebookResults({
					type: t
				}), this.results.fetch({
					success: (e = this, function () {
						return e.rendered = e.type, e.renderOverlay()
					}),
					error: function () {
						if (confirm("Something went wrong. Hit okay to go to the social accounts page and reset your Facebook token.")) return window.location = "/social-accounts"
					}
				});
				var e
			}, e.prototype.createSource = function (t) {
				var e, n;
				if (t.preventDefault(), !this.submitting) return this.submitting = !0, (e = $(t.target)).find("input[type=submit]").hide(), e.append("<div class='j-loading'>Loading...</div>"), this.timeout = setTimeout((n = this, function () {
					return e.append(n.pleaseWait())
				}), 5e3), e.find("ul.errors").remove(), this.submitSource(e.serializeHash())
			}, e.prototype.submitSource = function (t) {
				return this.model.set(t), this.model.save(null, {
					success: (i = this, function (t, e) {
						return i.submitting = !1, i.feedObject().set(e, {
							parse: !0
						}), i.feed.trigger("action"), i.timeout && window.clearInterval(i.timeout), i.trigger("create", i.feed)
					}),
					error: (n = this, function (t, e) {
						return n.submitting = !1, n.timeout && window.clearInterval(n.timeout), new Juicer.Views.Errors({
							el: n.$("form"),
							errors: e
						}), n.$(".source-form-example").show()
					})
				});
				var n, i
			}, e.prototype.feedObject = function () {
				return this.feed || (this.feed = new Juicer.Models.Feed)
			}, e.prototype.submitSearchResult = function (t) {
				var e;
				return t.preventDefault(), e = $(t.target), this.$(".result-term").val(e.data("id")), this.$(".result-name").val(e.data("name")), e.parents("form").trigger("submit")
			}, e.prototype.setOverlayStorage = function (t) {
				return t.preventDefault(), (new Juicer.Views.OverlayReopener).set({
					type: this.type,
					source: this.source
				}), window.location = jQuery(t.target).attr("href")
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.UserAccount = function (t) {
			function e() {
				return e.__super__.constructor.apply(this, arguments)
			}
			return n(e, t), e.prototype.initialize = function () {
				return this.toggleDigest()
			}, e.prototype.events = {
				"change input[type=checkbox]": "toggleDigest"
			}, e.prototype.toggleDigest = function () {
				var t, e;
				return e = this.$("#user_digest"), t = this.$(".digest-label"), this.$("input[type=checkbox]").is(":checked") ? (e.removeAttr("disabled"), t.removeClass("disabled")) : (e.attr("disabled", "disabled"), t.addClass("disabled"), e.val("Never"))
			}, e
		}(JuicerBackbone.View)
	}.call(this),
	function () {
		var n = function (t, e) {
				return function () {
					return t.apply(e, arguments)
				}
			},
			i = function (t, e) {
				function n() {
					this.constructor = t
				}
				for (var i in e) r.call(e, i) && (t[i] = e[i]);
				return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
			},
			r = {}.hasOwnProperty;
		Juicer.Views.Widget = function (t) {
			function e() {
				return this.addPost = n(this.addPost, this), this.showNextPost = n(this.showNextPost, this), this.setPosts = n(this.setPosts, this), e.__super__.constructor.apply(this, arguments)
			}
			return i(e, t), e.prototype.template = JST.widget, e.prototype.card = JST["partials/_widget_card"], e.prototype.referral = JST["partials/_referral"], e.prototype.customCss = JST["partials/_custom_styles"], e.prototype.initialize = function (t) {
				return this.interval = t.interval, this.isOnFeedsDashboard = t.isOnFeedsDashboard, this.index = 0, this.setPosts(), this.render(), 5e3 !== this.model.get("interval") && 5e3 === this.interval && (this.interval = this.model.get("interval")), 0 === this.interval && (this.interval = 5e7), (window.juicerWidget = this).id = setInterval(this.showNextPost, this.interval)
			}, e.prototype.setPosts = function () {
				return this.posts = this.model.get("posts").models
			}, e.prototype.render = function () {
				return this.$el.append(this.template({
					first: this.posts[this.index],
					isOnFeedsDashboard: this.isOnFeedsDashboard,
					second: this.posts[this.index + 1]
				})), this.container = this.$(".flip-container"), this.handleReferral(), this.$el.append(this.customCss({
					feed: this.model
				}))
			}, e.prototype.showNextPost = function () {
				if (this.container.toggleClass("flip"), setTimeout(this.addPost, 600), this.index++, this.index >= this.posts.length - 1) return this.model.pollingAllowed() && this.model.fetchNewPosts(!1), this.index = -1
			}, e.prototype.addPost = function () {
				return this.element().html(this.card({
					isOnFeedsDashboard: this.isOnFeedsDashboard,
					post: this.posts[this.index + 1],
					truncate: this.truncate
				}))
			}, e.prototype.element = function () {
				return this.container.hasClass("flip") ? this.$(".front") : this.$(".back")
			}, e.prototype.other = function () {
				return this.element().siblings()
			}, e.prototype.handleReferral = function () {
				if (this.model.paid() || this.isOnFeedsDashboard || 0 < this.$el.find("h1.referral").length || this.$el.append(this.referral()), this.model.paid()) return this.$el.find("h1.referral").remove()
			}, e.prototype.close = function () {
				return null != this.id && window.clearInterval(this.id), this.$el.empty().off(), this.stopListening(), this
			}, e
		}(JuicerBackbone.View)
	}.call(this), Juicer.Constants = {}, Juicer.Constants.API_ROOT = "//www.juicer.io", (navigator.userAgent.match(/MSIE 9/) || navigator.userAgent.match(/MSIE 8/) || "file:" === window.location.protocol) && (Juicer.Constants.API_ROOT = "https:" + Juicer.Constants.API_ROOT), Juicer.Constants.ASSET_PATH = "https://assets.juicer.io", Juicer.Constants.BASE_URL = "https://www.juicer.io", Juicer.Constants.CACHE_BUSTER = "i think this is now getting cached on cloudflare", Juicer.Constants.FACEBOOK_APP_ID = "731223346944897", Juicer.Constants.FEED_CLASSES = ["modern", "night", "polaroid", "image-grid", "widget", "slider", "hip", "living-wall"], Juicer.Constants.HELP_CENTER_URL = "http://help.juicer.io/hc/en-us", Juicer.Constants.MINIMUM_ENTERPRISE_FEE_IN_DOLLARS = 199, Juicer.Constants.PAID_PLANS = ["medium", "large", "enterprise", "custom", "campaign", "archive"], Juicer.Constants.SOURCES_WHERE_POSTS_CAN_BE_ADDED_MANUALLY = ["Facebook", "Soundcloud", "Tumblr", "Twitter", "Vimeo", "YouTube"], Juicer.Constants.STRIPE_PUBLISHABLE_KEY = "pk_live_O4R3D1OryggCLZEsquEjTNBW";