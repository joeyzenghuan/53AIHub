import { E as Nc, _ as p, aE as I0, aD as P0, o as iy, p as ay, b as Jm, a as ty, s as ey, g as ry, c as dt, l as D, x as Qm, G as GC, T as Xm, ag as He$1, aC as Ka } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { m } from "./chunk-4BMEZGHF-Bo7Lw3Zg-VPv0jNBt.js";
import { e } from "./chunk-XZIHB7SX-BpJ6eI-3-rAghqn91.js";
import { u as uy } from "./radar-MK3ICKWK-Dci9lSdR-4pP8dac_.js";
import { J as Jt } from "./cytoscape.esm-Swd9B-1A-ug9Omo3W.js";
import { E as E0 } from "./main-zTjO05wq.js";
import { L as Li } from "./helper-7WMIPux3-FiO_G2IV.js";
import "./copy-BS31ARP0-eab1H3tb.js";
import "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
import "./_basePickBy-sC4qhKfT-S0M4lzcJ.js";
import "./clone-CawhnH1Z-cPfa3Ped.js";
var le = { exports: {} }, fe = { exports: {} }, ce = { exports: {} }, cr = ce.exports, xe;
function ur() {
  return xe || (xe = 1, function(C, U) {
    (function(G, L) {
      C.exports = L();
    })(cr, function() {
      return (
        /******/
        function(A) {
          var G = {};
          function L(u) {
            if (G[u])
              return G[u].exports;
            var l = G[u] = {
              /******/
              i: u,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            return A[u].call(l.exports, l, l.exports, L), l.l = true, l.exports;
          }
          return L.m = A, L.c = G, L.i = function(u) {
            return u;
          }, L.d = function(u, l, a) {
            L.o(u, l) || Object.defineProperty(u, l, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: a
              /******/
            });
          }, L.n = function(u) {
            var l = u && u.__esModule ? (
              /******/
              function() {
                return u.default;
              }
            ) : (
              /******/
              function() {
                return u;
              }
            );
            return L.d(l, "a", l), l;
          }, L.o = function(u, l) {
            return Object.prototype.hasOwnProperty.call(u, l);
          }, L.p = "", L(L.s = 28);
        }([
          /* 0 */
          /***/
          function(A, G, L) {
            function u() {
            }
            u.QUALITY = 1, u.DEFAULT_CREATE_BENDS_AS_NEEDED = false, u.DEFAULT_INCREMENTAL = false, u.DEFAULT_ANIMATION_ON_LAYOUT = true, u.DEFAULT_ANIMATION_DURING_LAYOUT = false, u.DEFAULT_ANIMATION_PERIOD = 50, u.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false, u.DEFAULT_GRAPH_MARGIN = 15, u.NODE_DIMENSIONS_INCLUDE_LABELS = false, u.SIMPLE_NODE_SIZE = 40, u.SIMPLE_NODE_HALF_SIZE = u.SIMPLE_NODE_SIZE / 2, u.EMPTY_COMPOUND_NODE_SIZE = 40, u.MIN_EDGE_LENGTH = 1, u.WORLD_BOUNDARY = 1e6, u.INITIAL_WORLD_BOUNDARY = u.WORLD_BOUNDARY / 1e3, u.WORLD_CENTER_X = 1200, u.WORLD_CENTER_Y = 900, A.exports = u;
          },
          /* 1 */
          /***/
          function(A, G, L) {
            var u = L(2), l = L(8), a = L(9);
            function r(f, i, g) {
              u.call(this, g), this.isOverlapingSourceAndTarget = false, this.vGraphObject = g, this.bendpoints = [], this.source = f, this.target = i;
            }
            r.prototype = Object.create(u.prototype);
            for (var e2 in u)
              r[e2] = u[e2];
            r.prototype.getSource = function() {
              return this.source;
            }, r.prototype.getTarget = function() {
              return this.target;
            }, r.prototype.isInterGraph = function() {
              return this.isInterGraph;
            }, r.prototype.getLength = function() {
              return this.length;
            }, r.prototype.isOverlapingSourceAndTarget = function() {
              return this.isOverlapingSourceAndTarget;
            }, r.prototype.getBendpoints = function() {
              return this.bendpoints;
            }, r.prototype.getLca = function() {
              return this.lca;
            }, r.prototype.getSourceInLca = function() {
              return this.sourceInLca;
            }, r.prototype.getTargetInLca = function() {
              return this.targetInLca;
            }, r.prototype.getOtherEnd = function(f) {
              if (this.source === f)
                return this.target;
              if (this.target === f)
                return this.source;
              throw "Node is not incident with this edge";
            }, r.prototype.getOtherEndInGraph = function(f, i) {
              for (var g = this.getOtherEnd(f), t = i.getGraphManager().getRoot(); ; ) {
                if (g.getOwner() == i)
                  return g;
                if (g.getOwner() == t)
                  break;
                g = g.getOwner().getParent();
              }
              return null;
            }, r.prototype.updateLength = function() {
              var f = new Array(4);
              this.isOverlapingSourceAndTarget = l.getIntersection(this.target.getRect(), this.source.getRect(), f), this.isOverlapingSourceAndTarget || (this.lengthX = f[0] - f[2], this.lengthY = f[1] - f[3], Math.abs(this.lengthX) < 1 && (this.lengthX = a.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = a.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
            }, r.prototype.updateLengthSimple = function() {
              this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = a.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = a.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
            }, A.exports = r;
          },
          /* 2 */
          /***/
          function(A, G, L) {
            function u(l) {
              this.vGraphObject = l;
            }
            A.exports = u;
          },
          /* 3 */
          /***/
          function(A, G, L) {
            var u = L(2), l = L(10), a = L(13), r = L(0), e2 = L(16), f = L(5);
            function i(t, s, o, c) {
              o == null && c == null && (c = s), u.call(this, c), t.graphManager != null && (t = t.graphManager), this.estimatedSize = l.MIN_VALUE, this.inclusionTreeDepth = l.MAX_VALUE, this.vGraphObject = c, this.edges = [], this.graphManager = t, o != null && s != null ? this.rect = new a(s.x, s.y, o.width, o.height) : this.rect = new a();
            }
            i.prototype = Object.create(u.prototype);
            for (var g in u)
              i[g] = u[g];
            i.prototype.getEdges = function() {
              return this.edges;
            }, i.prototype.getChild = function() {
              return this.child;
            }, i.prototype.getOwner = function() {
              return this.owner;
            }, i.prototype.getWidth = function() {
              return this.rect.width;
            }, i.prototype.setWidth = function(t) {
              this.rect.width = t;
            }, i.prototype.getHeight = function() {
              return this.rect.height;
            }, i.prototype.setHeight = function(t) {
              this.rect.height = t;
            }, i.prototype.getCenterX = function() {
              return this.rect.x + this.rect.width / 2;
            }, i.prototype.getCenterY = function() {
              return this.rect.y + this.rect.height / 2;
            }, i.prototype.getCenter = function() {
              return new f(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
            }, i.prototype.getLocation = function() {
              return new f(this.rect.x, this.rect.y);
            }, i.prototype.getRect = function() {
              return this.rect;
            }, i.prototype.getDiagonal = function() {
              return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
            }, i.prototype.getHalfTheDiagonal = function() {
              return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
            }, i.prototype.setRect = function(t, s) {
              this.rect.x = t.x, this.rect.y = t.y, this.rect.width = s.width, this.rect.height = s.height;
            }, i.prototype.setCenter = function(t, s) {
              this.rect.x = t - this.rect.width / 2, this.rect.y = s - this.rect.height / 2;
            }, i.prototype.setLocation = function(t, s) {
              this.rect.x = t, this.rect.y = s;
            }, i.prototype.moveBy = function(t, s) {
              this.rect.x += t, this.rect.y += s;
            }, i.prototype.getEdgeListToNode = function(t) {
              var s = [], o = this;
              return o.edges.forEach(function(c) {
                if (c.target == t) {
                  if (c.source != o)
                    throw "Incorrect edge source!";
                  s.push(c);
                }
              }), s;
            }, i.prototype.getEdgesBetween = function(t) {
              var s = [], o = this;
              return o.edges.forEach(function(c) {
                if (!(c.source == o || c.target == o))
                  throw "Incorrect edge source and/or target";
                (c.target == t || c.source == t) && s.push(c);
              }), s;
            }, i.prototype.getNeighborsList = function() {
              var t = /* @__PURE__ */ new Set(), s = this;
              return s.edges.forEach(function(o) {
                if (o.source == s)
                  t.add(o.target);
                else {
                  if (o.target != s)
                    throw "Incorrect incidency!";
                  t.add(o.source);
                }
              }), t;
            }, i.prototype.withChildren = function() {
              var t = /* @__PURE__ */ new Set(), s, o;
              if (t.add(this), this.child != null)
                for (var c = this.child.getNodes(), h = 0; h < c.length; h++)
                  s = c[h], o = s.withChildren(), o.forEach(function(T) {
                    t.add(T);
                  });
              return t;
            }, i.prototype.getNoOfChildren = function() {
              var t = 0, s;
              if (this.child == null)
                t = 1;
              else
                for (var o = this.child.getNodes(), c = 0; c < o.length; c++)
                  s = o[c], t += s.getNoOfChildren();
              return t == 0 && (t = 1), t;
            }, i.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == l.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, i.prototype.calcEstimatedSize = function() {
              return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
            }, i.prototype.scatter = function() {
              var t, s, o = -r.INITIAL_WORLD_BOUNDARY, c = r.INITIAL_WORLD_BOUNDARY;
              t = r.WORLD_CENTER_X + e2.nextDouble() * (c - o) + o;
              var h = -r.INITIAL_WORLD_BOUNDARY, T = r.INITIAL_WORLD_BOUNDARY;
              s = r.WORLD_CENTER_Y + e2.nextDouble() * (T - h) + h, this.rect.x = t, this.rect.y = s;
            }, i.prototype.updateBounds = function() {
              if (this.getChild() == null)
                throw "assert failed";
              if (this.getChild().getNodes().length != 0) {
                var t = this.getChild();
                if (t.updateBounds(true), this.rect.x = t.getLeft(), this.rect.y = t.getTop(), this.setWidth(t.getRight() - t.getLeft()), this.setHeight(t.getBottom() - t.getTop()), r.NODE_DIMENSIONS_INCLUDE_LABELS) {
                  var s = t.getRight() - t.getLeft(), o = t.getBottom() - t.getTop();
                  this.labelWidth && (this.labelPosHorizontal == "left" ? (this.rect.x -= this.labelWidth, this.setWidth(s + this.labelWidth)) : this.labelPosHorizontal == "center" && this.labelWidth > s ? (this.rect.x -= (this.labelWidth - s) / 2, this.setWidth(this.labelWidth)) : this.labelPosHorizontal == "right" && this.setWidth(s + this.labelWidth)), this.labelHeight && (this.labelPosVertical == "top" ? (this.rect.y -= this.labelHeight, this.setHeight(o + this.labelHeight)) : this.labelPosVertical == "center" && this.labelHeight > o ? (this.rect.y -= (this.labelHeight - o) / 2, this.setHeight(this.labelHeight)) : this.labelPosVertical == "bottom" && this.setHeight(o + this.labelHeight));
                }
              }
            }, i.prototype.getInclusionTreeDepth = function() {
              if (this.inclusionTreeDepth == l.MAX_VALUE)
                throw "assert failed";
              return this.inclusionTreeDepth;
            }, i.prototype.transform = function(t) {
              var s = this.rect.x;
              s > r.WORLD_BOUNDARY ? s = r.WORLD_BOUNDARY : s < -r.WORLD_BOUNDARY && (s = -r.WORLD_BOUNDARY);
              var o = this.rect.y;
              o > r.WORLD_BOUNDARY ? o = r.WORLD_BOUNDARY : o < -r.WORLD_BOUNDARY && (o = -r.WORLD_BOUNDARY);
              var c = new f(s, o), h = t.inverseTransformPoint(c);
              this.setLocation(h.x, h.y);
            }, i.prototype.getLeft = function() {
              return this.rect.x;
            }, i.prototype.getRight = function() {
              return this.rect.x + this.rect.width;
            }, i.prototype.getTop = function() {
              return this.rect.y;
            }, i.prototype.getBottom = function() {
              return this.rect.y + this.rect.height;
            }, i.prototype.getParent = function() {
              return this.owner == null ? null : this.owner.getParent();
            }, A.exports = i;
          },
          /* 4 */
          /***/
          function(A, G, L) {
            var u = L(0);
            function l() {
            }
            for (var a in u)
              l[a] = u[a];
            l.MAX_ITERATIONS = 2500, l.DEFAULT_EDGE_LENGTH = 50, l.DEFAULT_SPRING_STRENGTH = 0.45, l.DEFAULT_REPULSION_STRENGTH = 4500, l.DEFAULT_GRAVITY_STRENGTH = 0.4, l.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, l.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, l.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, l.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true, l.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true, l.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, l.COOLING_ADAPTATION_FACTOR = 0.33, l.ADAPTATION_LOWER_NODE_LIMIT = 1e3, l.ADAPTATION_UPPER_NODE_LIMIT = 5e3, l.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, l.MAX_NODE_DISPLACEMENT = l.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, l.MIN_REPULSION_DIST = l.DEFAULT_EDGE_LENGTH / 10, l.CONVERGENCE_CHECK_PERIOD = 100, l.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, l.MIN_EDGE_LENGTH = 1, l.GRID_CALCULATION_CHECK_PERIOD = 10, A.exports = l;
          },
          /* 5 */
          /***/
          function(A, G, L) {
            function u(l, a) {
              l == null && a == null ? (this.x = 0, this.y = 0) : (this.x = l, this.y = a);
            }
            u.prototype.getX = function() {
              return this.x;
            }, u.prototype.getY = function() {
              return this.y;
            }, u.prototype.setX = function(l) {
              this.x = l;
            }, u.prototype.setY = function(l) {
              this.y = l;
            }, u.prototype.getDifference = function(l) {
              return new DimensionD(this.x - l.x, this.y - l.y);
            }, u.prototype.getCopy = function() {
              return new u(this.x, this.y);
            }, u.prototype.translate = function(l) {
              return this.x += l.width, this.y += l.height, this;
            }, A.exports = u;
          },
          /* 6 */
          /***/
          function(A, G, L) {
            var u = L(2), l = L(10), a = L(0), r = L(7), e2 = L(3), f = L(1), i = L(13), g = L(12), t = L(11);
            function s(c, h, T) {
              u.call(this, T), this.estimatedSize = l.MIN_VALUE, this.margin = a.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = false, this.parent = c, h != null && h instanceof r ? this.graphManager = h : h != null && h instanceof Layout && (this.graphManager = h.graphManager);
            }
            s.prototype = Object.create(u.prototype);
            for (var o in u)
              s[o] = u[o];
            s.prototype.getNodes = function() {
              return this.nodes;
            }, s.prototype.getEdges = function() {
              return this.edges;
            }, s.prototype.getGraphManager = function() {
              return this.graphManager;
            }, s.prototype.getParent = function() {
              return this.parent;
            }, s.prototype.getLeft = function() {
              return this.left;
            }, s.prototype.getRight = function() {
              return this.right;
            }, s.prototype.getTop = function() {
              return this.top;
            }, s.prototype.getBottom = function() {
              return this.bottom;
            }, s.prototype.isConnected = function() {
              return this.isConnected;
            }, s.prototype.add = function(c, h, T) {
              if (h == null && T == null) {
                var v = c;
                if (this.graphManager == null)
                  throw "Graph has no graph mgr!";
                if (this.getNodes().indexOf(v) > -1)
                  throw "Node already in graph!";
                return v.owner = this, this.getNodes().push(v), v;
              } else {
                var d = c;
                if (!(this.getNodes().indexOf(h) > -1 && this.getNodes().indexOf(T) > -1))
                  throw "Source or target not in graph!";
                if (!(h.owner == T.owner && h.owner == this))
                  throw "Both owners must be this graph!";
                return h.owner != T.owner ? null : (d.source = h, d.target = T, d.isInterGraph = false, this.getEdges().push(d), h.edges.push(d), T != h && T.edges.push(d), d);
              }
            }, s.prototype.remove = function(c) {
              var h = c;
              if (c instanceof e2) {
                if (h == null)
                  throw "Node is null!";
                if (!(h.owner != null && h.owner == this))
                  throw "Owner graph is invalid!";
                if (this.graphManager == null)
                  throw "Owner graph manager is invalid!";
                for (var T = h.edges.slice(), v, d = T.length, N = 0; N < d; N++)
                  v = T[N], v.isInterGraph ? this.graphManager.remove(v) : v.source.owner.remove(v);
                var S = this.nodes.indexOf(h);
                if (S == -1)
                  throw "Node not in owner node list!";
                this.nodes.splice(S, 1);
              } else if (c instanceof f) {
                var v = c;
                if (v == null)
                  throw "Edge is null!";
                if (!(v.source != null && v.target != null))
                  throw "Source and/or target is null!";
                if (!(v.source.owner != null && v.target.owner != null && v.source.owner == this && v.target.owner == this))
                  throw "Source and/or target owner is invalid!";
                var M = v.source.edges.indexOf(v), P = v.target.edges.indexOf(v);
                if (!(M > -1 && P > -1))
                  throw "Source and/or target doesn't know this edge!";
                v.source.edges.splice(M, 1), v.target != v.source && v.target.edges.splice(P, 1);
                var S = v.source.owner.getEdges().indexOf(v);
                if (S == -1)
                  throw "Not in owner's edge list!";
                v.source.owner.getEdges().splice(S, 1);
              }
            }, s.prototype.updateLeftTop = function() {
              for (var c = l.MAX_VALUE, h = l.MAX_VALUE, T, v, d, N = this.getNodes(), S = N.length, M = 0; M < S; M++) {
                var P = N[M];
                T = P.getTop(), v = P.getLeft(), c > T && (c = T), h > v && (h = v);
              }
              return c == l.MAX_VALUE ? null : (N[0].getParent().paddingLeft != null ? d = N[0].getParent().paddingLeft : d = this.margin, this.left = h - d, this.top = c - d, new g(this.left, this.top));
            }, s.prototype.updateBounds = function(c) {
              for (var h = l.MAX_VALUE, T = -l.MAX_VALUE, v = l.MAX_VALUE, d = -l.MAX_VALUE, N, S, M, P, K, X = this.nodes, k = X.length, D2 = 0; D2 < k; D2++) {
                var rt = X[D2];
                c && rt.child != null && rt.updateBounds(), N = rt.getLeft(), S = rt.getRight(), M = rt.getTop(), P = rt.getBottom(), h > N && (h = N), T < S && (T = S), v > M && (v = M), d < P && (d = P);
              }
              var n = new i(h, v, T - h, d - v);
              h == l.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), X[0].getParent().paddingLeft != null ? K = X[0].getParent().paddingLeft : K = this.margin, this.left = n.x - K, this.right = n.x + n.width + K, this.top = n.y - K, this.bottom = n.y + n.height + K;
            }, s.calculateBounds = function(c) {
              for (var h = l.MAX_VALUE, T = -l.MAX_VALUE, v = l.MAX_VALUE, d = -l.MAX_VALUE, N, S, M, P, K = c.length, X = 0; X < K; X++) {
                var k = c[X];
                N = k.getLeft(), S = k.getRight(), M = k.getTop(), P = k.getBottom(), h > N && (h = N), T < S && (T = S), v > M && (v = M), d < P && (d = P);
              }
              var D2 = new i(h, v, T - h, d - v);
              return D2;
            }, s.prototype.getInclusionTreeDepth = function() {
              return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
            }, s.prototype.getEstimatedSize = function() {
              if (this.estimatedSize == l.MIN_VALUE)
                throw "assert failed";
              return this.estimatedSize;
            }, s.prototype.calcEstimatedSize = function() {
              for (var c = 0, h = this.nodes, T = h.length, v = 0; v < T; v++) {
                var d = h[v];
                c += d.calcEstimatedSize();
              }
              return c == 0 ? this.estimatedSize = a.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = c / Math.sqrt(this.nodes.length), this.estimatedSize;
            }, s.prototype.updateConnected = function() {
              var c = this;
              if (this.nodes.length == 0) {
                this.isConnected = true;
                return;
              }
              var h = new t(), T = /* @__PURE__ */ new Set(), v = this.nodes[0], d, N, S = v.withChildren();
              for (S.forEach(function(D2) {
                h.push(D2), T.add(D2);
              }); h.length !== 0; ) {
                v = h.shift(), d = v.getEdges();
                for (var M = d.length, P = 0; P < M; P++) {
                  var K = d[P];
                  if (N = K.getOtherEndInGraph(v, this), N != null && !T.has(N)) {
                    var X = N.withChildren();
                    X.forEach(function(D2) {
                      h.push(D2), T.add(D2);
                    });
                  }
                }
              }
              if (this.isConnected = false, T.size >= this.nodes.length) {
                var k = 0;
                T.forEach(function(D2) {
                  D2.owner == c && k++;
                }), k == this.nodes.length && (this.isConnected = true);
              }
            }, A.exports = s;
          },
          /* 7 */
          /***/
          function(A, G, L) {
            var u, l = L(1);
            function a(r) {
              u = L(6), this.layout = r, this.graphs = [], this.edges = [];
            }
            a.prototype.addRoot = function() {
              var r = this.layout.newGraph(), e2 = this.layout.newNode(null), f = this.add(r, e2);
              return this.setRootGraph(f), this.rootGraph;
            }, a.prototype.add = function(r, e2, f, i, g) {
              if (f == null && i == null && g == null) {
                if (r == null)
                  throw "Graph is null!";
                if (e2 == null)
                  throw "Parent node is null!";
                if (this.graphs.indexOf(r) > -1)
                  throw "Graph already in this graph mgr!";
                if (this.graphs.push(r), r.parent != null)
                  throw "Already has a parent!";
                if (e2.child != null)
                  throw "Already has a child!";
                return r.parent = e2, e2.child = r, r;
              } else {
                g = f, i = e2, f = r;
                var t = i.getOwner(), s = g.getOwner();
                if (!(t != null && t.getGraphManager() == this))
                  throw "Source not in this graph mgr!";
                if (!(s != null && s.getGraphManager() == this))
                  throw "Target not in this graph mgr!";
                if (t == s)
                  return f.isInterGraph = false, t.add(f, i, g);
                if (f.isInterGraph = true, f.source = i, f.target = g, this.edges.indexOf(f) > -1)
                  throw "Edge already in inter-graph edge list!";
                if (this.edges.push(f), !(f.source != null && f.target != null))
                  throw "Edge source and/or target is null!";
                if (!(f.source.edges.indexOf(f) == -1 && f.target.edges.indexOf(f) == -1))
                  throw "Edge already in source and/or target incidency list!";
                return f.source.edges.push(f), f.target.edges.push(f), f;
              }
            }, a.prototype.remove = function(r) {
              if (r instanceof u) {
                var e2 = r;
                if (e2.getGraphManager() != this)
                  throw "Graph not in this graph mgr";
                if (!(e2 == this.rootGraph || e2.parent != null && e2.parent.graphManager == this))
                  throw "Invalid parent node!";
                var f = [];
                f = f.concat(e2.getEdges());
                for (var i, g = f.length, t = 0; t < g; t++)
                  i = f[t], e2.remove(i);
                var s = [];
                s = s.concat(e2.getNodes());
                var o;
                g = s.length;
                for (var t = 0; t < g; t++)
                  o = s[t], e2.remove(o);
                e2 == this.rootGraph && this.setRootGraph(null);
                var c = this.graphs.indexOf(e2);
                this.graphs.splice(c, 1), e2.parent = null;
              } else if (r instanceof l) {
                if (i = r, i == null)
                  throw "Edge is null!";
                if (!i.isInterGraph)
                  throw "Not an inter-graph edge!";
                if (!(i.source != null && i.target != null))
                  throw "Source and/or target is null!";
                if (!(i.source.edges.indexOf(i) != -1 && i.target.edges.indexOf(i) != -1))
                  throw "Source and/or target doesn't know this edge!";
                var c = i.source.edges.indexOf(i);
                if (i.source.edges.splice(c, 1), c = i.target.edges.indexOf(i), i.target.edges.splice(c, 1), !(i.source.owner != null && i.source.owner.getGraphManager() != null))
                  throw "Edge owner graph or owner graph manager is null!";
                if (i.source.owner.getGraphManager().edges.indexOf(i) == -1)
                  throw "Not in owner graph manager's edge list!";
                var c = i.source.owner.getGraphManager().edges.indexOf(i);
                i.source.owner.getGraphManager().edges.splice(c, 1);
              }
            }, a.prototype.updateBounds = function() {
              this.rootGraph.updateBounds(true);
            }, a.prototype.getGraphs = function() {
              return this.graphs;
            }, a.prototype.getAllNodes = function() {
              if (this.allNodes == null) {
                for (var r = [], e2 = this.getGraphs(), f = e2.length, i = 0; i < f; i++)
                  r = r.concat(e2[i].getNodes());
                this.allNodes = r;
              }
              return this.allNodes;
            }, a.prototype.resetAllNodes = function() {
              this.allNodes = null;
            }, a.prototype.resetAllEdges = function() {
              this.allEdges = null;
            }, a.prototype.resetAllNodesToApplyGravitation = function() {
              this.allNodesToApplyGravitation = null;
            }, a.prototype.getAllEdges = function() {
              if (this.allEdges == null) {
                var r = [], e2 = this.getGraphs();
                e2.length;
                for (var f = 0; f < e2.length; f++)
                  r = r.concat(e2[f].getEdges());
                r = r.concat(this.edges), this.allEdges = r;
              }
              return this.allEdges;
            }, a.prototype.getAllNodesToApplyGravitation = function() {
              return this.allNodesToApplyGravitation;
            }, a.prototype.setAllNodesToApplyGravitation = function(r) {
              if (this.allNodesToApplyGravitation != null)
                throw "assert failed";
              this.allNodesToApplyGravitation = r;
            }, a.prototype.getRoot = function() {
              return this.rootGraph;
            }, a.prototype.setRootGraph = function(r) {
              if (r.getGraphManager() != this)
                throw "Root not in this graph mgr!";
              this.rootGraph = r, r.parent == null && (r.parent = this.layout.newNode("Root node"));
            }, a.prototype.getLayout = function() {
              return this.layout;
            }, a.prototype.isOneAncestorOfOther = function(r, e2) {
              if (!(r != null && e2 != null))
                throw "assert failed";
              if (r == e2)
                return true;
              var f = r.getOwner(), i;
              do {
                if (i = f.getParent(), i == null)
                  break;
                if (i == e2)
                  return true;
                if (f = i.getOwner(), f == null)
                  break;
              } while (true);
              f = e2.getOwner();
              do {
                if (i = f.getParent(), i == null)
                  break;
                if (i == r)
                  return true;
                if (f = i.getOwner(), f == null)
                  break;
              } while (true);
              return false;
            }, a.prototype.calcLowestCommonAncestors = function() {
              for (var r, e2, f, i, g, t = this.getAllEdges(), s = t.length, o = 0; o < s; o++) {
                if (r = t[o], e2 = r.source, f = r.target, r.lca = null, r.sourceInLca = e2, r.targetInLca = f, e2 == f) {
                  r.lca = e2.getOwner();
                  continue;
                }
                for (i = e2.getOwner(); r.lca == null; ) {
                  for (r.targetInLca = f, g = f.getOwner(); r.lca == null; ) {
                    if (g == i) {
                      r.lca = g;
                      break;
                    }
                    if (g == this.rootGraph)
                      break;
                    if (r.lca != null)
                      throw "assert failed";
                    r.targetInLca = g.getParent(), g = r.targetInLca.getOwner();
                  }
                  if (i == this.rootGraph)
                    break;
                  r.lca == null && (r.sourceInLca = i.getParent(), i = r.sourceInLca.getOwner());
                }
                if (r.lca == null)
                  throw "assert failed";
              }
            }, a.prototype.calcLowestCommonAncestor = function(r, e2) {
              if (r == e2)
                return r.getOwner();
              var f = r.getOwner();
              do {
                if (f == null)
                  break;
                var i = e2.getOwner();
                do {
                  if (i == null)
                    break;
                  if (i == f)
                    return i;
                  i = i.getParent().getOwner();
                } while (true);
                f = f.getParent().getOwner();
              } while (true);
              return f;
            }, a.prototype.calcInclusionTreeDepths = function(r, e2) {
              r == null && e2 == null && (r = this.rootGraph, e2 = 1);
              for (var f, i = r.getNodes(), g = i.length, t = 0; t < g; t++)
                f = i[t], f.inclusionTreeDepth = e2, f.child != null && this.calcInclusionTreeDepths(f.child, e2 + 1);
            }, a.prototype.includesInvalidEdge = function() {
              for (var r, e2 = [], f = this.edges.length, i = 0; i < f; i++)
                r = this.edges[i], this.isOneAncestorOfOther(r.source, r.target) && e2.push(r);
              for (var i = 0; i < e2.length; i++)
                this.remove(e2[i]);
              return false;
            }, A.exports = a;
          },
          /* 8 */
          /***/
          function(A, G, L) {
            var u = L(12);
            function l() {
            }
            l.calcSeparationAmount = function(a, r, e2, f) {
              if (!a.intersects(r))
                throw "assert failed";
              var i = new Array(2);
              this.decideDirectionsForOverlappingNodes(a, r, i), e2[0] = Math.min(a.getRight(), r.getRight()) - Math.max(a.x, r.x), e2[1] = Math.min(a.getBottom(), r.getBottom()) - Math.max(a.y, r.y), a.getX() <= r.getX() && a.getRight() >= r.getRight() ? e2[0] += Math.min(r.getX() - a.getX(), a.getRight() - r.getRight()) : r.getX() <= a.getX() && r.getRight() >= a.getRight() && (e2[0] += Math.min(a.getX() - r.getX(), r.getRight() - a.getRight())), a.getY() <= r.getY() && a.getBottom() >= r.getBottom() ? e2[1] += Math.min(r.getY() - a.getY(), a.getBottom() - r.getBottom()) : r.getY() <= a.getY() && r.getBottom() >= a.getBottom() && (e2[1] += Math.min(a.getY() - r.getY(), r.getBottom() - a.getBottom()));
              var g = Math.abs((r.getCenterY() - a.getCenterY()) / (r.getCenterX() - a.getCenterX()));
              r.getCenterY() === a.getCenterY() && r.getCenterX() === a.getCenterX() && (g = 1);
              var t = g * e2[0], s = e2[1] / g;
              e2[0] < s ? s = e2[0] : t = e2[1], e2[0] = -1 * i[0] * (s / 2 + f), e2[1] = -1 * i[1] * (t / 2 + f);
            }, l.decideDirectionsForOverlappingNodes = function(a, r, e2) {
              a.getCenterX() < r.getCenterX() ? e2[0] = -1 : e2[0] = 1, a.getCenterY() < r.getCenterY() ? e2[1] = -1 : e2[1] = 1;
            }, l.getIntersection2 = function(a, r, e2) {
              var f = a.getCenterX(), i = a.getCenterY(), g = r.getCenterX(), t = r.getCenterY();
              if (a.intersects(r))
                return e2[0] = f, e2[1] = i, e2[2] = g, e2[3] = t, true;
              var s = a.getX(), o = a.getY(), c = a.getRight(), h = a.getX(), T = a.getBottom(), v = a.getRight(), d = a.getWidthHalf(), N = a.getHeightHalf(), S = r.getX(), M = r.getY(), P = r.getRight(), K = r.getX(), X = r.getBottom(), k = r.getRight(), D2 = r.getWidthHalf(), rt = r.getHeightHalf(), n = false, m2 = false;
              if (f === g) {
                if (i > t)
                  return e2[0] = f, e2[1] = o, e2[2] = g, e2[3] = X, false;
                if (i < t)
                  return e2[0] = f, e2[1] = T, e2[2] = g, e2[3] = M, false;
              } else if (i === t) {
                if (f > g)
                  return e2[0] = s, e2[1] = i, e2[2] = P, e2[3] = t, false;
                if (f < g)
                  return e2[0] = c, e2[1] = i, e2[2] = S, e2[3] = t, false;
              } else {
                var p2 = a.height / a.width, E = r.height / r.width, y = (t - i) / (g - f), I = void 0, w = void 0, R = void 0, W = void 0, x = void 0, q = void 0;
                if (-p2 === y ? f > g ? (e2[0] = h, e2[1] = T, n = true) : (e2[0] = c, e2[1] = o, n = true) : p2 === y && (f > g ? (e2[0] = s, e2[1] = o, n = true) : (e2[0] = v, e2[1] = T, n = true)), -E === y ? g > f ? (e2[2] = K, e2[3] = X, m2 = true) : (e2[2] = P, e2[3] = M, m2 = true) : E === y && (g > f ? (e2[2] = S, e2[3] = M, m2 = true) : (e2[2] = k, e2[3] = X, m2 = true)), n && m2)
                  return false;
                if (f > g ? i > t ? (I = this.getCardinalDirection(p2, y, 4), w = this.getCardinalDirection(E, y, 2)) : (I = this.getCardinalDirection(-p2, y, 3), w = this.getCardinalDirection(-E, y, 1)) : i > t ? (I = this.getCardinalDirection(-p2, y, 1), w = this.getCardinalDirection(-E, y, 3)) : (I = this.getCardinalDirection(p2, y, 2), w = this.getCardinalDirection(E, y, 4)), !n)
                  switch (I) {
                    case 1:
                      W = o, R = f + -N / y, e2[0] = R, e2[1] = W;
                      break;
                    case 2:
                      R = v, W = i + d * y, e2[0] = R, e2[1] = W;
                      break;
                    case 3:
                      W = T, R = f + N / y, e2[0] = R, e2[1] = W;
                      break;
                    case 4:
                      R = h, W = i + -d * y, e2[0] = R, e2[1] = W;
                      break;
                  }
                if (!m2)
                  switch (w) {
                    case 1:
                      q = M, x = g + -rt / y, e2[2] = x, e2[3] = q;
                      break;
                    case 2:
                      x = k, q = t + D2 * y, e2[2] = x, e2[3] = q;
                      break;
                    case 3:
                      q = X, x = g + rt / y, e2[2] = x, e2[3] = q;
                      break;
                    case 4:
                      x = K, q = t + -D2 * y, e2[2] = x, e2[3] = q;
                      break;
                  }
              }
              return false;
            }, l.getCardinalDirection = function(a, r, e2) {
              return a > r ? e2 : 1 + e2 % 4;
            }, l.getIntersection = function(a, r, e2, f) {
              if (f == null)
                return this.getIntersection2(a, r, e2);
              var i = a.x, g = a.y, t = r.x, s = r.y, o = e2.x, c = e2.y, h = f.x, T = f.y, v = void 0, d = void 0, N = void 0, S = void 0, M = void 0, P = void 0, K = void 0, X = void 0, k = void 0;
              return N = s - g, M = i - t, K = t * g - i * s, S = T - c, P = o - h, X = h * c - o * T, k = N * P - S * M, k === 0 ? null : (v = (M * X - P * K) / k, d = (S * K - N * X) / k, new u(v, d));
            }, l.angleOfVector = function(a, r, e2, f) {
              var i = void 0;
              return a !== e2 ? (i = Math.atan((f - r) / (e2 - a)), e2 < a ? i += Math.PI : f < r && (i += this.TWO_PI)) : f < r ? i = this.ONE_AND_HALF_PI : i = this.HALF_PI, i;
            }, l.doIntersect = function(a, r, e2, f) {
              var i = a.x, g = a.y, t = r.x, s = r.y, o = e2.x, c = e2.y, h = f.x, T = f.y, v = (t - i) * (T - c) - (h - o) * (s - g);
              if (v === 0)
                return false;
              var d = ((T - c) * (h - i) + (o - h) * (T - g)) / v, N = ((g - s) * (h - i) + (t - i) * (T - g)) / v;
              return 0 < d && d < 1 && 0 < N && N < 1;
            }, l.findCircleLineIntersections = function(a, r, e2, f, i, g, t) {
              var s = (e2 - a) * (e2 - a) + (f - r) * (f - r), o = 2 * ((a - i) * (e2 - a) + (r - g) * (f - r)), c = (a - i) * (a - i) + (r - g) * (r - g) - t * t, h = o * o - 4 * s * c;
              if (h >= 0) {
                var T = (-o + Math.sqrt(o * o - 4 * s * c)) / (2 * s), v = (-o - Math.sqrt(o * o - 4 * s * c)) / (2 * s), d = null;
                return T >= 0 && T <= 1 ? [T] : v >= 0 && v <= 1 ? [v] : d;
              } else
                return null;
            }, l.HALF_PI = 0.5 * Math.PI, l.ONE_AND_HALF_PI = 1.5 * Math.PI, l.TWO_PI = 2 * Math.PI, l.THREE_PI = 3 * Math.PI, A.exports = l;
          },
          /* 9 */
          /***/
          function(A, G, L) {
            function u() {
            }
            u.sign = function(l) {
              return l > 0 ? 1 : l < 0 ? -1 : 0;
            }, u.floor = function(l) {
              return l < 0 ? Math.ceil(l) : Math.floor(l);
            }, u.ceil = function(l) {
              return l < 0 ? Math.floor(l) : Math.ceil(l);
            }, A.exports = u;
          },
          /* 10 */
          /***/
          function(A, G, L) {
            function u() {
            }
            u.MAX_VALUE = 2147483647, u.MIN_VALUE = -2147483648, A.exports = u;
          },
          /* 11 */
          /***/
          function(A, G, L) {
            var u = /* @__PURE__ */ function() {
              function i(g, t) {
                for (var s = 0; s < t.length; s++) {
                  var o = t[s];
                  o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(g, o.key, o);
                }
              }
              return function(g, t, s) {
                return t && i(g.prototype, t), s && i(g, s), g;
              };
            }();
            function l(i, g) {
              if (!(i instanceof g))
                throw new TypeError("Cannot call a class as a function");
            }
            var a = function(g) {
              return { value: g, next: null, prev: null };
            }, r = function(g, t, s, o) {
              return g !== null ? g.next = t : o.head = t, s !== null ? s.prev = t : o.tail = t, t.prev = g, t.next = s, o.length++, t;
            }, e2 = function(g, t) {
              var s = g.prev, o = g.next;
              return s !== null ? s.next = o : t.head = o, o !== null ? o.prev = s : t.tail = s, g.prev = g.next = null, t.length--, g;
            }, f = function() {
              function i(g) {
                var t = this;
                l(this, i), this.length = 0, this.head = null, this.tail = null, g != null && g.forEach(function(s) {
                  return t.push(s);
                });
              }
              return u(i, [{
                key: "size",
                value: function() {
                  return this.length;
                }
              }, {
                key: "insertBefore",
                value: function(t, s) {
                  return r(s.prev, a(t), s, this);
                }
              }, {
                key: "insertAfter",
                value: function(t, s) {
                  return r(s, a(t), s.next, this);
                }
              }, {
                key: "insertNodeBefore",
                value: function(t, s) {
                  return r(s.prev, t, s, this);
                }
              }, {
                key: "insertNodeAfter",
                value: function(t, s) {
                  return r(s, t, s.next, this);
                }
              }, {
                key: "push",
                value: function(t) {
                  return r(this.tail, a(t), null, this);
                }
              }, {
                key: "unshift",
                value: function(t) {
                  return r(null, a(t), this.head, this);
                }
              }, {
                key: "remove",
                value: function(t) {
                  return e2(t, this);
                }
              }, {
                key: "pop",
                value: function() {
                  return e2(this.tail, this).value;
                }
              }, {
                key: "popNode",
                value: function() {
                  return e2(this.tail, this);
                }
              }, {
                key: "shift",
                value: function() {
                  return e2(this.head, this).value;
                }
              }, {
                key: "shiftNode",
                value: function() {
                  return e2(this.head, this);
                }
              }, {
                key: "get_object_at",
                value: function(t) {
                  if (t <= this.length()) {
                    for (var s = 1, o = this.head; s < t; )
                      o = o.next, s++;
                    return o.value;
                  }
                }
              }, {
                key: "set_object_at",
                value: function(t, s) {
                  if (t <= this.length()) {
                    for (var o = 1, c = this.head; o < t; )
                      c = c.next, o++;
                    c.value = s;
                  }
                }
              }]), i;
            }();
            A.exports = f;
          },
          /* 12 */
          /***/
          function(A, G, L) {
            function u(l, a, r) {
              this.x = null, this.y = null, l == null && a == null && r == null ? (this.x = 0, this.y = 0) : typeof l == "number" && typeof a == "number" && r == null ? (this.x = l, this.y = a) : l.constructor.name == "Point" && a == null && r == null && (r = l, this.x = r.x, this.y = r.y);
            }
            u.prototype.getX = function() {
              return this.x;
            }, u.prototype.getY = function() {
              return this.y;
            }, u.prototype.getLocation = function() {
              return new u(this.x, this.y);
            }, u.prototype.setLocation = function(l, a, r) {
              l.constructor.name == "Point" && a == null && r == null ? (r = l, this.setLocation(r.x, r.y)) : typeof l == "number" && typeof a == "number" && r == null && (parseInt(l) == l && parseInt(a) == a ? this.move(l, a) : (this.x = Math.floor(l + 0.5), this.y = Math.floor(a + 0.5)));
            }, u.prototype.move = function(l, a) {
              this.x = l, this.y = a;
            }, u.prototype.translate = function(l, a) {
              this.x += l, this.y += a;
            }, u.prototype.equals = function(l) {
              if (l.constructor.name == "Point") {
                var a = l;
                return this.x == a.x && this.y == a.y;
              }
              return this == l;
            }, u.prototype.toString = function() {
              return new u().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
            }, A.exports = u;
          },
          /* 13 */
          /***/
          function(A, G, L) {
            function u(l, a, r, e2) {
              this.x = 0, this.y = 0, this.width = 0, this.height = 0, l != null && a != null && r != null && e2 != null && (this.x = l, this.y = a, this.width = r, this.height = e2);
            }
            u.prototype.getX = function() {
              return this.x;
            }, u.prototype.setX = function(l) {
              this.x = l;
            }, u.prototype.getY = function() {
              return this.y;
            }, u.prototype.setY = function(l) {
              this.y = l;
            }, u.prototype.getWidth = function() {
              return this.width;
            }, u.prototype.setWidth = function(l) {
              this.width = l;
            }, u.prototype.getHeight = function() {
              return this.height;
            }, u.prototype.setHeight = function(l) {
              this.height = l;
            }, u.prototype.getRight = function() {
              return this.x + this.width;
            }, u.prototype.getBottom = function() {
              return this.y + this.height;
            }, u.prototype.intersects = function(l) {
              return !(this.getRight() < l.x || this.getBottom() < l.y || l.getRight() < this.x || l.getBottom() < this.y);
            }, u.prototype.getCenterX = function() {
              return this.x + this.width / 2;
            }, u.prototype.getMinX = function() {
              return this.getX();
            }, u.prototype.getMaxX = function() {
              return this.getX() + this.width;
            }, u.prototype.getCenterY = function() {
              return this.y + this.height / 2;
            }, u.prototype.getMinY = function() {
              return this.getY();
            }, u.prototype.getMaxY = function() {
              return this.getY() + this.height;
            }, u.prototype.getWidthHalf = function() {
              return this.width / 2;
            }, u.prototype.getHeightHalf = function() {
              return this.height / 2;
            }, A.exports = u;
          },
          /* 14 */
          /***/
          function(A, G, L) {
            var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
              return typeof a;
            } : function(a) {
              return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
            };
            function l() {
            }
            l.lastID = 0, l.createID = function(a) {
              return l.isPrimitive(a) ? a : (a.uniqueID != null || (a.uniqueID = l.getString(), l.lastID++), a.uniqueID);
            }, l.getString = function(a) {
              return a == null && (a = l.lastID), "Object#" + a;
            }, l.isPrimitive = function(a) {
              var r = typeof a > "u" ? "undefined" : u(a);
              return a == null || r != "object" && r != "function";
            }, A.exports = l;
          },
          /* 15 */
          /***/
          function(A, G, L) {
            function u(o) {
              if (Array.isArray(o)) {
                for (var c = 0, h = Array(o.length); c < o.length; c++)
                  h[c] = o[c];
                return h;
              } else
                return Array.from(o);
            }
            var l = L(0), a = L(7), r = L(3), e2 = L(1), f = L(6), i = L(5), g = L(17), t = L(29);
            function s(o) {
              t.call(this), this.layoutQuality = l.QUALITY, this.createBendsAsNeeded = l.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = l.DEFAULT_INCREMENTAL, this.animationOnLayout = l.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = l.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = l.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = l.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new a(this), this.isLayoutFinished = false, this.isSubLayout = false, this.isRemoteUse = false, o != null && (this.isRemoteUse = o);
            }
            s.RANDOM_SEED = 1, s.prototype = Object.create(t.prototype), s.prototype.getGraphManager = function() {
              return this.graphManager;
            }, s.prototype.getAllNodes = function() {
              return this.graphManager.getAllNodes();
            }, s.prototype.getAllEdges = function() {
              return this.graphManager.getAllEdges();
            }, s.prototype.getAllNodesToApplyGravitation = function() {
              return this.graphManager.getAllNodesToApplyGravitation();
            }, s.prototype.newGraphManager = function() {
              var o = new a(this);
              return this.graphManager = o, o;
            }, s.prototype.newGraph = function(o) {
              return new f(null, this.graphManager, o);
            }, s.prototype.newNode = function(o) {
              return new r(this.graphManager, o);
            }, s.prototype.newEdge = function(o) {
              return new e2(null, null, o);
            }, s.prototype.checkLayoutSuccess = function() {
              return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
            }, s.prototype.runLayout = function() {
              this.isLayoutFinished = false, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
              var o;
              return this.checkLayoutSuccess() ? o = false : o = this.layout(), l.ANIMATE === "during" ? false : (o && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = true, o);
            }, s.prototype.doPostLayout = function() {
              this.incremental || this.transform(), this.update();
            }, s.prototype.update2 = function() {
              if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
                for (var o = this.graphManager.getAllEdges(), c = 0; c < o.length; c++)
                  o[c];
                for (var h = this.graphManager.getRoot().getNodes(), c = 0; c < h.length; c++)
                  h[c];
                this.update(this.graphManager.getRoot());
              }
            }, s.prototype.update = function(o) {
              if (o == null)
                this.update2();
              else if (o instanceof r) {
                var c = o;
                if (c.getChild() != null)
                  for (var h = c.getChild().getNodes(), T = 0; T < h.length; T++)
                    update(h[T]);
                if (c.vGraphObject != null) {
                  var v = c.vGraphObject;
                  v.update(c);
                }
              } else if (o instanceof e2) {
                var d = o;
                if (d.vGraphObject != null) {
                  var N = d.vGraphObject;
                  N.update(d);
                }
              } else if (o instanceof f) {
                var S = o;
                if (S.vGraphObject != null) {
                  var M = S.vGraphObject;
                  M.update(S);
                }
              }
            }, s.prototype.initParameters = function() {
              this.isSubLayout || (this.layoutQuality = l.QUALITY, this.animationDuringLayout = l.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = l.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = l.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = l.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = l.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = l.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = false);
            }, s.prototype.transform = function(o) {
              if (o == null)
                this.transform(new i(0, 0));
              else {
                var c = new g(), h = this.graphManager.getRoot().updateLeftTop();
                if (h != null) {
                  c.setWorldOrgX(o.x), c.setWorldOrgY(o.y), c.setDeviceOrgX(h.x), c.setDeviceOrgY(h.y);
                  for (var T = this.getAllNodes(), v, d = 0; d < T.length; d++)
                    v = T[d], v.transform(c);
                }
              }
            }, s.prototype.positionNodesRandomly = function(o) {
              if (o == null)
                this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(true);
              else
                for (var c, h, T = o.getNodes(), v = 0; v < T.length; v++)
                  c = T[v], h = c.getChild(), h == null || h.getNodes().length == 0 ? c.scatter() : (this.positionNodesRandomly(h), c.updateBounds());
            }, s.prototype.getFlatForest = function() {
              for (var o = [], c = true, h = this.graphManager.getRoot().getNodes(), T = true, v = 0; v < h.length; v++)
                h[v].getChild() != null && (T = false);
              if (!T)
                return o;
              var d = /* @__PURE__ */ new Set(), N = [], S = /* @__PURE__ */ new Map(), M = [];
              for (M = M.concat(h); M.length > 0 && c; ) {
                for (N.push(M[0]); N.length > 0 && c; ) {
                  var P = N[0];
                  N.splice(0, 1), d.add(P);
                  for (var K = P.getEdges(), v = 0; v < K.length; v++) {
                    var X = K[v].getOtherEnd(P);
                    if (S.get(P) != X)
                      if (!d.has(X))
                        N.push(X), S.set(X, P);
                      else {
                        c = false;
                        break;
                      }
                  }
                }
                if (!c)
                  o = [];
                else {
                  var k = [].concat(u(d));
                  o.push(k);
                  for (var v = 0; v < k.length; v++) {
                    var D2 = k[v], rt = M.indexOf(D2);
                    rt > -1 && M.splice(rt, 1);
                  }
                  d = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map();
                }
              }
              return o;
            }, s.prototype.createDummyNodesForBendpoints = function(o) {
              for (var c = [], h = o.source, T = this.graphManager.calcLowestCommonAncestor(o.source, o.target), v = 0; v < o.bendpoints.length; v++) {
                var d = this.newNode(null);
                d.setRect(new Point(0, 0), new Dimension(1, 1)), T.add(d);
                var N = this.newEdge(null);
                this.graphManager.add(N, h, d), c.add(d), h = d;
              }
              var N = this.newEdge(null);
              return this.graphManager.add(N, h, o.target), this.edgeToDummyNodes.set(o, c), o.isInterGraph() ? this.graphManager.remove(o) : T.remove(o), c;
            }, s.prototype.createBendpointsFromDummyNodes = function() {
              var o = [];
              o = o.concat(this.graphManager.getAllEdges()), o = [].concat(u(this.edgeToDummyNodes.keys())).concat(o);
              for (var c = 0; c < o.length; c++) {
                var h = o[c];
                if (h.bendpoints.length > 0) {
                  for (var T = this.edgeToDummyNodes.get(h), v = 0; v < T.length; v++) {
                    var d = T[v], N = new i(d.getCenterX(), d.getCenterY()), S = h.bendpoints.get(v);
                    S.x = N.x, S.y = N.y, d.getOwner().remove(d);
                  }
                  this.graphManager.add(h, h.source, h.target);
                }
              }
            }, s.transform = function(o, c, h, T) {
              if (h != null && T != null) {
                var v = c;
                if (o <= 50) {
                  var d = c / h;
                  v -= (c - d) / 50 * (50 - o);
                } else {
                  var N = c * T;
                  v += (N - c) / 50 * (o - 50);
                }
                return v;
              } else {
                var S, M;
                return o <= 50 ? (S = 9 * c / 500, M = c / 10) : (S = 9 * c / 50, M = -8 * c), S * o + M;
              }
            }, s.findCenterOfTree = function(o) {
              var c = [];
              c = c.concat(o);
              var h = [], T = /* @__PURE__ */ new Map(), v = false, d = null;
              (c.length == 1 || c.length == 2) && (v = true, d = c[0]);
              for (var N = 0; N < c.length; N++) {
                var S = c[N], M = S.getNeighborsList().size;
                T.set(S, S.getNeighborsList().size), M == 1 && h.push(S);
              }
              var P = [];
              for (P = P.concat(h); !v; ) {
                var K = [];
                K = K.concat(P), P = [];
                for (var N = 0; N < c.length; N++) {
                  var S = c[N], X = c.indexOf(S);
                  X >= 0 && c.splice(X, 1);
                  var k = S.getNeighborsList();
                  k.forEach(function(n) {
                    if (h.indexOf(n) < 0) {
                      var m2 = T.get(n), p2 = m2 - 1;
                      p2 == 1 && P.push(n), T.set(n, p2);
                    }
                  });
                }
                h = h.concat(P), (c.length == 1 || c.length == 2) && (v = true, d = c[0]);
              }
              return d;
            }, s.prototype.setGraphManager = function(o) {
              this.graphManager = o;
            }, A.exports = s;
          },
          /* 16 */
          /***/
          function(A, G, L) {
            function u() {
            }
            u.seed = 1, u.x = 0, u.nextDouble = function() {
              return u.x = Math.sin(u.seed++) * 1e4, u.x - Math.floor(u.x);
            }, A.exports = u;
          },
          /* 17 */
          /***/
          function(A, G, L) {
            var u = L(5);
            function l(a, r) {
              this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
            }
            l.prototype.getWorldOrgX = function() {
              return this.lworldOrgX;
            }, l.prototype.setWorldOrgX = function(a) {
              this.lworldOrgX = a;
            }, l.prototype.getWorldOrgY = function() {
              return this.lworldOrgY;
            }, l.prototype.setWorldOrgY = function(a) {
              this.lworldOrgY = a;
            }, l.prototype.getWorldExtX = function() {
              return this.lworldExtX;
            }, l.prototype.setWorldExtX = function(a) {
              this.lworldExtX = a;
            }, l.prototype.getWorldExtY = function() {
              return this.lworldExtY;
            }, l.prototype.setWorldExtY = function(a) {
              this.lworldExtY = a;
            }, l.prototype.getDeviceOrgX = function() {
              return this.ldeviceOrgX;
            }, l.prototype.setDeviceOrgX = function(a) {
              this.ldeviceOrgX = a;
            }, l.prototype.getDeviceOrgY = function() {
              return this.ldeviceOrgY;
            }, l.prototype.setDeviceOrgY = function(a) {
              this.ldeviceOrgY = a;
            }, l.prototype.getDeviceExtX = function() {
              return this.ldeviceExtX;
            }, l.prototype.setDeviceExtX = function(a) {
              this.ldeviceExtX = a;
            }, l.prototype.getDeviceExtY = function() {
              return this.ldeviceExtY;
            }, l.prototype.setDeviceExtY = function(a) {
              this.ldeviceExtY = a;
            }, l.prototype.transformX = function(a) {
              var r = 0, e2 = this.lworldExtX;
              return e2 != 0 && (r = this.ldeviceOrgX + (a - this.lworldOrgX) * this.ldeviceExtX / e2), r;
            }, l.prototype.transformY = function(a) {
              var r = 0, e2 = this.lworldExtY;
              return e2 != 0 && (r = this.ldeviceOrgY + (a - this.lworldOrgY) * this.ldeviceExtY / e2), r;
            }, l.prototype.inverseTransformX = function(a) {
              var r = 0, e2 = this.ldeviceExtX;
              return e2 != 0 && (r = this.lworldOrgX + (a - this.ldeviceOrgX) * this.lworldExtX / e2), r;
            }, l.prototype.inverseTransformY = function(a) {
              var r = 0, e2 = this.ldeviceExtY;
              return e2 != 0 && (r = this.lworldOrgY + (a - this.ldeviceOrgY) * this.lworldExtY / e2), r;
            }, l.prototype.inverseTransformPoint = function(a) {
              var r = new u(this.inverseTransformX(a.x), this.inverseTransformY(a.y));
              return r;
            }, A.exports = l;
          },
          /* 18 */
          /***/
          function(A, G, L) {
            function u(t) {
              if (Array.isArray(t)) {
                for (var s = 0, o = Array(t.length); s < t.length; s++)
                  o[s] = t[s];
                return o;
              } else
                return Array.from(t);
            }
            var l = L(15), a = L(4), r = L(0), e2 = L(8), f = L(9);
            function i() {
              l.call(this), this.useSmartIdealEdgeLengthCalculation = a.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = a.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = a.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = a.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = a.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = a.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = a.MAX_ITERATIONS;
            }
            i.prototype = Object.create(l.prototype);
            for (var g in l)
              i[g] = l[g];
            i.prototype.initParameters = function() {
              l.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = a.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
            }, i.prototype.calcIdealEdgeLengths = function() {
              for (var t, s, o, c, h, T, v, d = this.getGraphManager().getAllEdges(), N = 0; N < d.length; N++)
                t = d[N], s = t.idealLength, t.isInterGraph && (c = t.getSource(), h = t.getTarget(), T = t.getSourceInLca().getEstimatedSize(), v = t.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (t.idealLength += T + v - 2 * r.SIMPLE_NODE_SIZE), o = t.getLca().getInclusionTreeDepth(), t.idealLength += s * a.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (c.getInclusionTreeDepth() + h.getInclusionTreeDepth() - 2 * o));
            }, i.prototype.initSpringEmbedder = function() {
              var t = this.getAllNodes().length;
              this.incremental ? (t > a.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * a.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (t - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - a.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (t > a.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(a.COOLING_ADAPTATION_FACTOR, 1 - (t - a.ADAPTATION_LOWER_NODE_LIMIT) / (a.ADAPTATION_UPPER_NODE_LIMIT - a.ADAPTATION_LOWER_NODE_LIMIT) * (1 - a.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = a.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.displacementThresholdPerNode = 3 * a.DEFAULT_EDGE_LENGTH / 100, this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
            }, i.prototype.calcSpringForces = function() {
              for (var t = this.getAllEdges(), s, o = 0; o < t.length; o++)
                s = t[o], this.calcSpringForce(s, s.idealLength);
            }, i.prototype.calcRepulsionForces = function() {
              var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, o, c, h, T, v = this.getAllNodes(), d;
              if (this.useFRGridVariant)
                for (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && t && this.updateGrid(), d = /* @__PURE__ */ new Set(), o = 0; o < v.length; o++)
                  h = v[o], this.calculateRepulsionForceOfANode(h, d, t, s), d.add(h);
              else
                for (o = 0; o < v.length; o++)
                  for (h = v[o], c = o + 1; c < v.length; c++)
                    T = v[c], h.getOwner() == T.getOwner() && this.calcRepulsionForce(h, T);
            }, i.prototype.calcGravitationalForces = function() {
              for (var t, s = this.getAllNodesToApplyGravitation(), o = 0; o < s.length; o++)
                t = s[o], this.calcGravitationalForce(t);
            }, i.prototype.moveNodes = function() {
              for (var t = this.getAllNodes(), s, o = 0; o < t.length; o++)
                s = t[o], s.move();
            }, i.prototype.calcSpringForce = function(t, s) {
              var o = t.getSource(), c = t.getTarget(), h, T, v, d;
              if (this.uniformLeafNodeSizes && o.getChild() == null && c.getChild() == null)
                t.updateLengthSimple();
              else if (t.updateLength(), t.isOverlapingSourceAndTarget)
                return;
              h = t.getLength(), h != 0 && (T = t.edgeElasticity * (h - s), v = T * (t.lengthX / h), d = T * (t.lengthY / h), o.springForceX += v, o.springForceY += d, c.springForceX -= v, c.springForceY -= d);
            }, i.prototype.calcRepulsionForce = function(t, s) {
              var o = t.getRect(), c = s.getRect(), h = new Array(2), T = new Array(4), v, d, N, S, M, P, K;
              if (o.intersects(c)) {
                e2.calcSeparationAmount(o, c, h, a.DEFAULT_EDGE_LENGTH / 2), P = 2 * h[0], K = 2 * h[1];
                var X = t.noOfChildren * s.noOfChildren / (t.noOfChildren + s.noOfChildren);
                t.repulsionForceX -= X * P, t.repulsionForceY -= X * K, s.repulsionForceX += X * P, s.repulsionForceY += X * K;
              } else
                this.uniformLeafNodeSizes && t.getChild() == null && s.getChild() == null ? (v = c.getCenterX() - o.getCenterX(), d = c.getCenterY() - o.getCenterY()) : (e2.getIntersection(o, c, T), v = T[2] - T[0], d = T[3] - T[1]), Math.abs(v) < a.MIN_REPULSION_DIST && (v = f.sign(v) * a.MIN_REPULSION_DIST), Math.abs(d) < a.MIN_REPULSION_DIST && (d = f.sign(d) * a.MIN_REPULSION_DIST), N = v * v + d * d, S = Math.sqrt(N), M = (t.nodeRepulsion / 2 + s.nodeRepulsion / 2) * t.noOfChildren * s.noOfChildren / N, P = M * v / S, K = M * d / S, t.repulsionForceX -= P, t.repulsionForceY -= K, s.repulsionForceX += P, s.repulsionForceY += K;
            }, i.prototype.calcGravitationalForce = function(t) {
              var s, o, c, h, T, v, d, N;
              s = t.getOwner(), o = (s.getRight() + s.getLeft()) / 2, c = (s.getTop() + s.getBottom()) / 2, h = t.getCenterX() - o, T = t.getCenterY() - c, v = Math.abs(h) + t.getWidth() / 2, d = Math.abs(T) + t.getHeight() / 2, t.getOwner() == this.graphManager.getRoot() ? (N = s.getEstimatedSize() * this.gravityRangeFactor, (v > N || d > N) && (t.gravitationForceX = -this.gravityConstant * h, t.gravitationForceY = -this.gravityConstant * T)) : (N = s.getEstimatedSize() * this.compoundGravityRangeFactor, (v > N || d > N) && (t.gravitationForceX = -this.gravityConstant * h * this.compoundGravityConstant, t.gravitationForceY = -this.gravityConstant * T * this.compoundGravityConstant));
            }, i.prototype.isConverged = function() {
              var t, s = false;
              return this.totalIterations > this.maxIterations / 3 && (s = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), t = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, t || s;
            }, i.prototype.animate = function() {
              this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
            }, i.prototype.calcNoOfChildrenForAllNodes = function() {
              for (var t, s = this.graphManager.getAllNodes(), o = 0; o < s.length; o++)
                t = s[o], t.noOfChildren = t.getNoOfChildren();
            }, i.prototype.calcGrid = function(t) {
              var s = 0, o = 0;
              s = parseInt(Math.ceil((t.getRight() - t.getLeft()) / this.repulsionRange)), o = parseInt(Math.ceil((t.getBottom() - t.getTop()) / this.repulsionRange));
              for (var c = new Array(s), h = 0; h < s; h++)
                c[h] = new Array(o);
              for (var h = 0; h < s; h++)
                for (var T = 0; T < o; T++)
                  c[h][T] = new Array();
              return c;
            }, i.prototype.addNodeToGrid = function(t, s, o) {
              var c = 0, h = 0, T = 0, v = 0;
              c = parseInt(Math.floor((t.getRect().x - s) / this.repulsionRange)), h = parseInt(Math.floor((t.getRect().width + t.getRect().x - s) / this.repulsionRange)), T = parseInt(Math.floor((t.getRect().y - o) / this.repulsionRange)), v = parseInt(Math.floor((t.getRect().height + t.getRect().y - o) / this.repulsionRange));
              for (var d = c; d <= h; d++)
                for (var N = T; N <= v; N++)
                  this.grid[d][N].push(t), t.setGridCoordinates(c, h, T, v);
            }, i.prototype.updateGrid = function() {
              var t, s, o = this.getAllNodes();
              for (this.grid = this.calcGrid(this.graphManager.getRoot()), t = 0; t < o.length; t++)
                s = o[t], this.addNodeToGrid(s, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
            }, i.prototype.calculateRepulsionForceOfANode = function(t, s, o, c) {
              if (this.totalIterations % a.GRID_CALCULATION_CHECK_PERIOD == 1 && o || c) {
                var h = /* @__PURE__ */ new Set();
                t.surrounding = new Array();
                for (var T, v = this.grid, d = t.startX - 1; d < t.finishX + 2; d++)
                  for (var N = t.startY - 1; N < t.finishY + 2; N++)
                    if (!(d < 0 || N < 0 || d >= v.length || N >= v[0].length)) {
                      for (var S = 0; S < v[d][N].length; S++)
                        if (T = v[d][N][S], !(t.getOwner() != T.getOwner() || t == T) && !s.has(T) && !h.has(T)) {
                          var M = Math.abs(t.getCenterX() - T.getCenterX()) - (t.getWidth() / 2 + T.getWidth() / 2), P = Math.abs(t.getCenterY() - T.getCenterY()) - (t.getHeight() / 2 + T.getHeight() / 2);
                          M <= this.repulsionRange && P <= this.repulsionRange && h.add(T);
                        }
                    }
                t.surrounding = [].concat(u(h));
              }
              for (d = 0; d < t.surrounding.length; d++)
                this.calcRepulsionForce(t, t.surrounding[d]);
            }, i.prototype.calcRepulsionRange = function() {
              return 0;
            }, A.exports = i;
          },
          /* 19 */
          /***/
          function(A, G, L) {
            var u = L(1), l = L(4);
            function a(e2, f, i) {
              u.call(this, e2, f, i), this.idealLength = l.DEFAULT_EDGE_LENGTH, this.edgeElasticity = l.DEFAULT_SPRING_STRENGTH;
            }
            a.prototype = Object.create(u.prototype);
            for (var r in u)
              a[r] = u[r];
            A.exports = a;
          },
          /* 20 */
          /***/
          function(A, G, L) {
            var u = L(3), l = L(4);
            function a(e2, f, i, g) {
              u.call(this, e2, f, i, g), this.nodeRepulsion = l.DEFAULT_REPULSION_STRENGTH, this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
            }
            a.prototype = Object.create(u.prototype);
            for (var r in u)
              a[r] = u[r];
            a.prototype.setGridCoordinates = function(e2, f, i, g) {
              this.startX = e2, this.finishX = f, this.startY = i, this.finishY = g;
            }, A.exports = a;
          },
          /* 21 */
          /***/
          function(A, G, L) {
            function u(l, a) {
              this.width = 0, this.height = 0, l !== null && a !== null && (this.height = a, this.width = l);
            }
            u.prototype.getWidth = function() {
              return this.width;
            }, u.prototype.setWidth = function(l) {
              this.width = l;
            }, u.prototype.getHeight = function() {
              return this.height;
            }, u.prototype.setHeight = function(l) {
              this.height = l;
            }, A.exports = u;
          },
          /* 22 */
          /***/
          function(A, G, L) {
            var u = L(14);
            function l() {
              this.map = {}, this.keys = [];
            }
            l.prototype.put = function(a, r) {
              var e2 = u.createID(a);
              this.contains(e2) || (this.map[e2] = r, this.keys.push(a));
            }, l.prototype.contains = function(a) {
              return u.createID(a), this.map[a] != null;
            }, l.prototype.get = function(a) {
              var r = u.createID(a);
              return this.map[r];
            }, l.prototype.keySet = function() {
              return this.keys;
            }, A.exports = l;
          },
          /* 23 */
          /***/
          function(A, G, L) {
            var u = L(14);
            function l() {
              this.set = {};
            }
            l.prototype.add = function(a) {
              var r = u.createID(a);
              this.contains(r) || (this.set[r] = a);
            }, l.prototype.remove = function(a) {
              delete this.set[u.createID(a)];
            }, l.prototype.clear = function() {
              this.set = {};
            }, l.prototype.contains = function(a) {
              return this.set[u.createID(a)] == a;
            }, l.prototype.isEmpty = function() {
              return this.size() === 0;
            }, l.prototype.size = function() {
              return Object.keys(this.set).length;
            }, l.prototype.addAllTo = function(a) {
              for (var r = Object.keys(this.set), e2 = r.length, f = 0; f < e2; f++)
                a.push(this.set[r[f]]);
            }, l.prototype.size = function() {
              return Object.keys(this.set).length;
            }, l.prototype.addAll = function(a) {
              for (var r = a.length, e2 = 0; e2 < r; e2++) {
                var f = a[e2];
                this.add(f);
              }
            }, A.exports = l;
          },
          /* 24 */
          /***/
          function(A, G, L) {
            function u() {
            }
            u.multMat = function(l, a) {
              for (var r = [], e2 = 0; e2 < l.length; e2++) {
                r[e2] = [];
                for (var f = 0; f < a[0].length; f++) {
                  r[e2][f] = 0;
                  for (var i = 0; i < l[0].length; i++)
                    r[e2][f] += l[e2][i] * a[i][f];
                }
              }
              return r;
            }, u.transpose = function(l) {
              for (var a = [], r = 0; r < l[0].length; r++) {
                a[r] = [];
                for (var e2 = 0; e2 < l.length; e2++)
                  a[r][e2] = l[e2][r];
              }
              return a;
            }, u.multCons = function(l, a) {
              for (var r = [], e2 = 0; e2 < l.length; e2++)
                r[e2] = l[e2] * a;
              return r;
            }, u.minusOp = function(l, a) {
              for (var r = [], e2 = 0; e2 < l.length; e2++)
                r[e2] = l[e2] - a[e2];
              return r;
            }, u.dotProduct = function(l, a) {
              for (var r = 0, e2 = 0; e2 < l.length; e2++)
                r += l[e2] * a[e2];
              return r;
            }, u.mag = function(l) {
              return Math.sqrt(this.dotProduct(l, l));
            }, u.normalize = function(l) {
              for (var a = [], r = this.mag(l), e2 = 0; e2 < l.length; e2++)
                a[e2] = l[e2] / r;
              return a;
            }, u.multGamma = function(l) {
              for (var a = [], r = 0, e2 = 0; e2 < l.length; e2++)
                r += l[e2];
              r *= -1 / l.length;
              for (var f = 0; f < l.length; f++)
                a[f] = r + l[f];
              return a;
            }, u.multL = function(l, a, r) {
              for (var e2 = [], f = [], i = [], g = 0; g < a[0].length; g++) {
                for (var t = 0, s = 0; s < a.length; s++)
                  t += -0.5 * a[s][g] * l[s];
                f[g] = t;
              }
              for (var o = 0; o < r.length; o++) {
                for (var c = 0, h = 0; h < r.length; h++)
                  c += r[o][h] * f[h];
                i[o] = c;
              }
              for (var T = 0; T < a.length; T++) {
                for (var v = 0, d = 0; d < a[0].length; d++)
                  v += a[T][d] * i[d];
                e2[T] = v;
              }
              return e2;
            }, A.exports = u;
          },
          /* 25 */
          /***/
          function(A, G, L) {
            var u = /* @__PURE__ */ function() {
              function e2(f, i) {
                for (var g = 0; g < i.length; g++) {
                  var t = i[g];
                  t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(f, t.key, t);
                }
              }
              return function(f, i, g) {
                return i && e2(f.prototype, i), g && e2(f, g), f;
              };
            }();
            function l(e2, f) {
              if (!(e2 instanceof f))
                throw new TypeError("Cannot call a class as a function");
            }
            var a = L(11), r = function() {
              function e2(f, i) {
                l(this, e2), (i !== null || i !== void 0) && (this.compareFunction = this._defaultCompareFunction);
                var g = void 0;
                f instanceof a ? g = f.size() : g = f.length, this._quicksort(f, 0, g - 1);
              }
              return u(e2, [{
                key: "_quicksort",
                value: function(i, g, t) {
                  if (g < t) {
                    var s = this._partition(i, g, t);
                    this._quicksort(i, g, s), this._quicksort(i, s + 1, t);
                  }
                }
              }, {
                key: "_partition",
                value: function(i, g, t) {
                  for (var s = this._get(i, g), o = g, c = t; ; ) {
                    for (; this.compareFunction(s, this._get(i, c)); )
                      c--;
                    for (; this.compareFunction(this._get(i, o), s); )
                      o++;
                    if (o < c)
                      this._swap(i, o, c), o++, c--;
                    else
                      return c;
                  }
                }
              }, {
                key: "_get",
                value: function(i, g) {
                  return i instanceof a ? i.get_object_at(g) : i[g];
                }
              }, {
                key: "_set",
                value: function(i, g, t) {
                  i instanceof a ? i.set_object_at(g, t) : i[g] = t;
                }
              }, {
                key: "_swap",
                value: function(i, g, t) {
                  var s = this._get(i, g);
                  this._set(i, g, this._get(i, t)), this._set(i, t, s);
                }
              }, {
                key: "_defaultCompareFunction",
                value: function(i, g) {
                  return g > i;
                }
              }]), e2;
            }();
            A.exports = r;
          },
          /* 26 */
          /***/
          function(A, G, L) {
            function u() {
            }
            u.svd = function(l) {
              this.U = null, this.V = null, this.s = null, this.m = 0, this.n = 0, this.m = l.length, this.n = l[0].length;
              var a = Math.min(this.m, this.n);
              this.s = function(Nt) {
                for (var Mt = []; Nt-- > 0; )
                  Mt.push(0);
                return Mt;
              }(Math.min(this.m + 1, this.n)), this.U = function(Nt) {
                var Mt = function Zt(Gt) {
                  if (Gt.length == 0)
                    return 0;
                  for (var $t = [], Ft = 0; Ft < Gt[0]; Ft++)
                    $t.push(Zt(Gt.slice(1)));
                  return $t;
                };
                return Mt(Nt);
              }([this.m, a]), this.V = function(Nt) {
                var Mt = function Zt(Gt) {
                  if (Gt.length == 0)
                    return 0;
                  for (var $t = [], Ft = 0; Ft < Gt[0]; Ft++)
                    $t.push(Zt(Gt.slice(1)));
                  return $t;
                };
                return Mt(Nt);
              }([this.n, this.n]);
              for (var r = function(Nt) {
                for (var Mt = []; Nt-- > 0; )
                  Mt.push(0);
                return Mt;
              }(this.n), e2 = function(Nt) {
                for (var Mt = []; Nt-- > 0; )
                  Mt.push(0);
                return Mt;
              }(this.m), f = true, i = Math.min(this.m - 1, this.n), g = Math.max(0, Math.min(this.n - 2, this.m)), t = 0; t < Math.max(i, g); t++) {
                if (t < i) {
                  this.s[t] = 0;
                  for (var s = t; s < this.m; s++)
                    this.s[t] = u.hypot(this.s[t], l[s][t]);
                  if (this.s[t] !== 0) {
                    l[t][t] < 0 && (this.s[t] = -this.s[t]);
                    for (var o = t; o < this.m; o++)
                      l[o][t] /= this.s[t];
                    l[t][t] += 1;
                  }
                  this.s[t] = -this.s[t];
                }
                for (var c = t + 1; c < this.n; c++) {
                  if (/* @__PURE__ */ function(Nt, Mt) {
                    return Nt && Mt;
                  }(t < i, this.s[t] !== 0)) {
                    for (var h = 0, T = t; T < this.m; T++)
                      h += l[T][t] * l[T][c];
                    h = -h / l[t][t];
                    for (var v = t; v < this.m; v++)
                      l[v][c] += h * l[v][t];
                  }
                  r[c] = l[t][c];
                }
                if (/* @__PURE__ */ function(Nt, Mt) {
                  return Mt;
                }(f, t < i))
                  for (var d = t; d < this.m; d++)
                    this.U[d][t] = l[d][t];
                if (t < g) {
                  r[t] = 0;
                  for (var N = t + 1; N < this.n; N++)
                    r[t] = u.hypot(r[t], r[N]);
                  if (r[t] !== 0) {
                    r[t + 1] < 0 && (r[t] = -r[t]);
                    for (var S = t + 1; S < this.n; S++)
                      r[S] /= r[t];
                    r[t + 1] += 1;
                  }
                  if (r[t] = -r[t], /* @__PURE__ */ function(Nt, Mt) {
                    return Nt && Mt;
                  }(t + 1 < this.m, r[t] !== 0)) {
                    for (var M = t + 1; M < this.m; M++)
                      e2[M] = 0;
                    for (var P = t + 1; P < this.n; P++)
                      for (var K = t + 1; K < this.m; K++)
                        e2[K] += r[P] * l[K][P];
                    for (var X = t + 1; X < this.n; X++)
                      for (var k = -r[X] / r[t + 1], D2 = t + 1; D2 < this.m; D2++)
                        l[D2][X] += k * e2[D2];
                  }
                  for (var rt = t + 1; rt < this.n; rt++)
                    this.V[rt][t] = r[rt];
                }
              }
              var n = Math.min(this.n, this.m + 1);
              i < this.n && (this.s[i] = l[i][i]), this.m < n && (this.s[n - 1] = 0), g + 1 < n && (r[g] = l[g][n - 1]), r[n - 1] = 0;
              {
                for (var m2 = i; m2 < a; m2++) {
                  for (var p2 = 0; p2 < this.m; p2++)
                    this.U[p2][m2] = 0;
                  this.U[m2][m2] = 1;
                }
                for (var E = i - 1; E >= 0; E--)
                  if (this.s[E] !== 0) {
                    for (var y = E + 1; y < a; y++) {
                      for (var I = 0, w = E; w < this.m; w++)
                        I += this.U[w][E] * this.U[w][y];
                      I = -I / this.U[E][E];
                      for (var R = E; R < this.m; R++)
                        this.U[R][y] += I * this.U[R][E];
                    }
                    for (var W = E; W < this.m; W++)
                      this.U[W][E] = -this.U[W][E];
                    this.U[E][E] = 1 + this.U[E][E];
                    for (var x = 0; x < E - 1; x++)
                      this.U[x][E] = 0;
                  } else {
                    for (var q = 0; q < this.m; q++)
                      this.U[q][E] = 0;
                    this.U[E][E] = 1;
                  }
              }
              for (var V = this.n - 1; V >= 0; V--) {
                if (/* @__PURE__ */ function(Nt, Mt) {
                  return Nt && Mt;
                }(V < g, r[V] !== 0))
                  for (var Y = V + 1; Y < a; Y++) {
                    for (var et = 0, z = V + 1; z < this.n; z++)
                      et += this.V[z][V] * this.V[z][Y];
                    et = -et / this.V[V + 1][V];
                    for (var O = V + 1; O < this.n; O++)
                      this.V[O][Y] += et * this.V[O][V];
                  }
                for (var H = 0; H < this.n; H++)
                  this.V[H][V] = 0;
                this.V[V][V] = 1;
              }
              for (var B = n - 1, _ = Math.pow(2, -52), lt = Math.pow(2, -966); n > 0; ) {
                var J = void 0, Rt = void 0;
                for (J = n - 2; J >= -1 && J !== -1; J--)
                  if (Math.abs(r[J]) <= lt + _ * (Math.abs(this.s[J]) + Math.abs(this.s[J + 1]))) {
                    r[J] = 0;
                    break;
                  }
                if (J === n - 2)
                  Rt = 4;
                else {
                  var Lt = void 0;
                  for (Lt = n - 1; Lt >= J && Lt !== J; Lt--) {
                    var vt = (Lt !== n ? Math.abs(r[Lt]) : 0) + (Lt !== J + 1 ? Math.abs(r[Lt - 1]) : 0);
                    if (Math.abs(this.s[Lt]) <= lt + _ * vt) {
                      this.s[Lt] = 0;
                      break;
                    }
                  }
                  Lt === J ? Rt = 3 : Lt === n - 1 ? Rt = 1 : (Rt = 2, J = Lt);
                }
                switch (J++, Rt) {
                  case 1:
                    {
                      var it = r[n - 2];
                      r[n - 2] = 0;
                      for (var gt = n - 2; gt >= J; gt--) {
                        var Tt = u.hypot(this.s[gt], it), At = this.s[gt] / Tt, Dt = it / Tt;
                        this.s[gt] = Tt, gt !== J && (it = -Dt * r[gt - 1], r[gt - 1] = At * r[gt - 1]);
                        for (var mt = 0; mt < this.n; mt++)
                          Tt = At * this.V[mt][gt] + Dt * this.V[mt][n - 1], this.V[mt][n - 1] = -Dt * this.V[mt][gt] + At * this.V[mt][n - 1], this.V[mt][gt] = Tt;
                      }
                    }
                    break;
                  case 2:
                    {
                      var xt = r[J - 1];
                      r[J - 1] = 0;
                      for (var St = J; St < n; St++) {
                        var Vt = u.hypot(this.s[St], xt), Xt = this.s[St] / Vt, Ut = xt / Vt;
                        this.s[St] = Vt, xt = -Ut * r[St], r[St] = Xt * r[St];
                        for (var bt = 0; bt < this.m; bt++)
                          Vt = Xt * this.U[bt][St] + Ut * this.U[bt][J - 1], this.U[bt][J - 1] = -Ut * this.U[bt][St] + Xt * this.U[bt][J - 1], this.U[bt][St] = Vt;
                      }
                    }
                    break;
                  case 3:
                    {
                      var Ht = Math.max(Math.max(Math.max(Math.max(Math.abs(this.s[n - 1]), Math.abs(this.s[n - 2])), Math.abs(r[n - 2])), Math.abs(this.s[J])), Math.abs(r[J])), Bt = this.s[n - 1] / Ht, F = this.s[n - 2] / Ht, b = r[n - 2] / Ht, $ = this.s[J] / Ht, Q = r[J] / Ht, Z = ((F + Bt) * (F - Bt) + b * b) / 2, at = Bt * b * (Bt * b), ut = 0;
                      /* @__PURE__ */ (function(Nt, Mt) {
                        return Nt || Mt;
                      })(Z !== 0, at !== 0) && (ut = Math.sqrt(Z * Z + at), Z < 0 && (ut = -ut), ut = at / (Z + ut));
                      for (var ot = ($ + Bt) * ($ - Bt) + ut, tt = $ * Q, j = J; j < n - 1; j++) {
                        var dt2 = u.hypot(ot, tt), wt = ot / dt2, yt = tt / dt2;
                        j !== J && (r[j - 1] = dt2), ot = wt * this.s[j] + yt * r[j], r[j] = wt * r[j] - yt * this.s[j], tt = yt * this.s[j + 1], this.s[j + 1] = wt * this.s[j + 1];
                        for (var It = 0; It < this.n; It++)
                          dt2 = wt * this.V[It][j] + yt * this.V[It][j + 1], this.V[It][j + 1] = -yt * this.V[It][j] + wt * this.V[It][j + 1], this.V[It][j] = dt2;
                        if (dt2 = u.hypot(ot, tt), wt = ot / dt2, yt = tt / dt2, this.s[j] = dt2, ot = wt * r[j] + yt * this.s[j + 1], this.s[j + 1] = -yt * r[j] + wt * this.s[j + 1], tt = yt * r[j + 1], r[j + 1] = wt * r[j + 1], j < this.m - 1)
                          for (var ft = 0; ft < this.m; ft++)
                            dt2 = wt * this.U[ft][j] + yt * this.U[ft][j + 1], this.U[ft][j + 1] = -yt * this.U[ft][j] + wt * this.U[ft][j + 1], this.U[ft][j] = dt2;
                      }
                      r[n - 2] = ot;
                    }
                    break;
                  case 4:
                    {
                      if (this.s[J] <= 0) {
                        this.s[J] = this.s[J] < 0 ? -this.s[J] : 0;
                        for (var st = 0; st <= B; st++)
                          this.V[st][J] = -this.V[st][J];
                      }
                      for (; J < B && !(this.s[J] >= this.s[J + 1]); ) {
                        var Ct = this.s[J];
                        if (this.s[J] = this.s[J + 1], this.s[J + 1] = Ct, J < this.n - 1)
                          for (var ct = 0; ct < this.n; ct++)
                            Ct = this.V[ct][J + 1], this.V[ct][J + 1] = this.V[ct][J], this.V[ct][J] = Ct;
                        if (J < this.m - 1)
                          for (var ht = 0; ht < this.m; ht++)
                            Ct = this.U[ht][J + 1], this.U[ht][J + 1] = this.U[ht][J], this.U[ht][J] = Ct;
                        J++;
                      }
                      n--;
                    }
                    break;
                }
              }
              var Wt = { U: this.U, V: this.V, S: this.s };
              return Wt;
            }, u.hypot = function(l, a) {
              var r = void 0;
              return Math.abs(l) > Math.abs(a) ? (r = a / l, r = Math.abs(l) * Math.sqrt(1 + r * r)) : a != 0 ? (r = l / a, r = Math.abs(a) * Math.sqrt(1 + r * r)) : r = 0, r;
            }, A.exports = u;
          },
          /* 27 */
          /***/
          function(A, G, L) {
            var u = /* @__PURE__ */ function() {
              function r(e2, f) {
                for (var i = 0; i < f.length; i++) {
                  var g = f[i];
                  g.enumerable = g.enumerable || false, g.configurable = true, "value" in g && (g.writable = true), Object.defineProperty(e2, g.key, g);
                }
              }
              return function(e2, f, i) {
                return f && r(e2.prototype, f), i && r(e2, i), e2;
              };
            }();
            function l(r, e2) {
              if (!(r instanceof e2))
                throw new TypeError("Cannot call a class as a function");
            }
            var a = function() {
              function r(e2, f) {
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, t = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
                l(this, r), this.sequence1 = e2, this.sequence2 = f, this.match_score = i, this.mismatch_penalty = g, this.gap_penalty = t, this.iMax = e2.length + 1, this.jMax = f.length + 1, this.grid = new Array(this.iMax);
                for (var s = 0; s < this.iMax; s++) {
                  this.grid[s] = new Array(this.jMax);
                  for (var o = 0; o < this.jMax; o++)
                    this.grid[s][o] = 0;
                }
                this.tracebackGrid = new Array(this.iMax);
                for (var c = 0; c < this.iMax; c++) {
                  this.tracebackGrid[c] = new Array(this.jMax);
                  for (var h = 0; h < this.jMax; h++)
                    this.tracebackGrid[c][h] = [null, null, null];
                }
                this.alignments = [], this.score = -1, this.computeGrids();
              }
              return u(r, [{
                key: "getScore",
                value: function() {
                  return this.score;
                }
              }, {
                key: "getAlignments",
                value: function() {
                  return this.alignments;
                }
                // Main dynamic programming procedure
              }, {
                key: "computeGrids",
                value: function() {
                  for (var f = 1; f < this.jMax; f++)
                    this.grid[0][f] = this.grid[0][f - 1] + this.gap_penalty, this.tracebackGrid[0][f] = [false, false, true];
                  for (var i = 1; i < this.iMax; i++)
                    this.grid[i][0] = this.grid[i - 1][0] + this.gap_penalty, this.tracebackGrid[i][0] = [false, true, false];
                  for (var g = 1; g < this.iMax; g++)
                    for (var t = 1; t < this.jMax; t++) {
                      var s = void 0;
                      this.sequence1[g - 1] === this.sequence2[t - 1] ? s = this.grid[g - 1][t - 1] + this.match_score : s = this.grid[g - 1][t - 1] + this.mismatch_penalty;
                      var o = this.grid[g - 1][t] + this.gap_penalty, c = this.grid[g][t - 1] + this.gap_penalty, h = [s, o, c], T = this.arrayAllMaxIndexes(h);
                      this.grid[g][t] = h[T[0]], this.tracebackGrid[g][t] = [T.includes(0), T.includes(1), T.includes(2)];
                    }
                  this.score = this.grid[this.iMax - 1][this.jMax - 1];
                }
                // Gets all possible valid sequence combinations
              }, {
                key: "alignmentTraceback",
                value: function() {
                  var f = [];
                  for (f.push({
                    pos: [this.sequence1.length, this.sequence2.length],
                    seq1: "",
                    seq2: ""
                  }); f[0]; ) {
                    var i = f[0], g = this.tracebackGrid[i.pos[0]][i.pos[1]];
                    g[0] && f.push({
                      pos: [i.pos[0] - 1, i.pos[1] - 1],
                      seq1: this.sequence1[i.pos[0] - 1] + i.seq1,
                      seq2: this.sequence2[i.pos[1] - 1] + i.seq2
                    }), g[1] && f.push({
                      pos: [i.pos[0] - 1, i.pos[1]],
                      seq1: this.sequence1[i.pos[0] - 1] + i.seq1,
                      seq2: "-" + i.seq2
                    }), g[2] && f.push({
                      pos: [i.pos[0], i.pos[1] - 1],
                      seq1: "-" + i.seq1,
                      seq2: this.sequence2[i.pos[1] - 1] + i.seq2
                    }), i.pos[0] === 0 && i.pos[1] === 0 && this.alignments.push({
                      sequence1: i.seq1,
                      sequence2: i.seq2
                    }), f.shift();
                  }
                  return this.alignments;
                }
                // Helper Functions
              }, {
                key: "getAllIndexes",
                value: function(f, i) {
                  for (var g = [], t = -1; (t = f.indexOf(i, t + 1)) !== -1; )
                    g.push(t);
                  return g;
                }
              }, {
                key: "arrayAllMaxIndexes",
                value: function(f) {
                  return this.getAllIndexes(f, Math.max.apply(null, f));
                }
              }]), r;
            }();
            A.exports = a;
          },
          /* 28 */
          /***/
          function(A, G, L) {
            var u = function() {
            };
            u.FDLayout = L(18), u.FDLayoutConstants = L(4), u.FDLayoutEdge = L(19), u.FDLayoutNode = L(20), u.DimensionD = L(21), u.HashMap = L(22), u.HashSet = L(23), u.IGeometry = L(8), u.IMath = L(9), u.Integer = L(10), u.Point = L(12), u.PointD = L(5), u.RandomSeed = L(16), u.RectangleD = L(13), u.Transform = L(17), u.UniqueIDGeneretor = L(14), u.Quicksort = L(25), u.LinkedList = L(11), u.LGraphObject = L(2), u.LGraph = L(6), u.LEdge = L(1), u.LGraphManager = L(7), u.LNode = L(3), u.Layout = L(15), u.LayoutConstants = L(0), u.NeedlemanWunsch = L(27), u.Matrix = L(24), u.SVD = L(26), A.exports = u;
          },
          /* 29 */
          /***/
          function(A, G, L) {
            function u() {
              this.listeners = [];
            }
            var l = u.prototype;
            l.addListener = function(a, r) {
              this.listeners.push({
                event: a,
                callback: r
              });
            }, l.removeListener = function(a, r) {
              for (var e2 = this.listeners.length; e2 >= 0; e2--) {
                var f = this.listeners[e2];
                f.event === a && f.callback === r && this.listeners.splice(e2, 1);
              }
            }, l.emit = function(a, r) {
              for (var e2 = 0; e2 < this.listeners.length; e2++) {
                var f = this.listeners[e2];
                a === f.event && f.callback(r);
              }
            }, A.exports = u;
          }
          /******/
        ])
      );
    });
  }(ce)), ce.exports;
}
var gr = fe.exports, Ie;
function dr() {
  return Ie || (Ie = 1, function(C, U) {
    (function(G, L) {
      C.exports = L(ur());
    })(gr, function(A) {
      return (
        /******/
        (() => {
          var G = {
            /***/
            45: (
              /***/
              (a, r, e2) => {
                var f = {};
                f.layoutBase = e2(551), f.CoSEConstants = e2(806), f.CoSEEdge = e2(767), f.CoSEGraph = e2(880), f.CoSEGraphManager = e2(578), f.CoSELayout = e2(765), f.CoSENode = e2(991), f.ConstraintHandler = e2(902), a.exports = f;
              }
            ),
            /***/
            806: (
              /***/
              (a, r, e2) => {
                var f = e2(551).FDLayoutConstants;
                function i() {
                }
                for (var g in f)
                  i[g] = f[g];
                i.DEFAULT_USE_MULTI_LEVEL_SCALING = false, i.DEFAULT_RADIAL_SEPARATION = f.DEFAULT_EDGE_LENGTH, i.DEFAULT_COMPONENT_SEPERATION = 60, i.TILE = true, i.TILING_PADDING_VERTICAL = 10, i.TILING_PADDING_HORIZONTAL = 10, i.TRANSFORM_ON_CONSTRAINT_HANDLING = true, i.ENFORCE_CONSTRAINTS = true, i.APPLY_LAYOUT = true, i.RELAX_MOVEMENT_ON_CONSTRAINTS = true, i.TREE_REDUCTION_ON_INCREMENTAL = true, i.PURE_INCREMENTAL = i.DEFAULT_INCREMENTAL, a.exports = i;
              }
            ),
            /***/
            767: (
              /***/
              (a, r, e2) => {
                var f = e2(551).FDLayoutEdge;
                function i(t, s, o) {
                  f.call(this, t, s, o);
                }
                i.prototype = Object.create(f.prototype);
                for (var g in f)
                  i[g] = f[g];
                a.exports = i;
              }
            ),
            /***/
            880: (
              /***/
              (a, r, e2) => {
                var f = e2(551).LGraph;
                function i(t, s, o) {
                  f.call(this, t, s, o);
                }
                i.prototype = Object.create(f.prototype);
                for (var g in f)
                  i[g] = f[g];
                a.exports = i;
              }
            ),
            /***/
            578: (
              /***/
              (a, r, e2) => {
                var f = e2(551).LGraphManager;
                function i(t) {
                  f.call(this, t);
                }
                i.prototype = Object.create(f.prototype);
                for (var g in f)
                  i[g] = f[g];
                a.exports = i;
              }
            ),
            /***/
            765: (
              /***/
              (a, r, e2) => {
                var f = e2(551).FDLayout, i = e2(578), g = e2(880), t = e2(991), s = e2(767), o = e2(806), c = e2(902), h = e2(551).FDLayoutConstants, T = e2(551).LayoutConstants, v = e2(551).Point, d = e2(551).PointD, N = e2(551).DimensionD, S = e2(551).Layout, M = e2(551).Integer, P = e2(551).IGeometry, K = e2(551).LGraph, X = e2(551).Transform, k = e2(551).LinkedList;
                function D2() {
                  f.call(this), this.toBeTiled = {}, this.constraints = {};
                }
                D2.prototype = Object.create(f.prototype);
                for (var rt in f)
                  D2[rt] = f[rt];
                D2.prototype.newGraphManager = function() {
                  var n = new i(this);
                  return this.graphManager = n, n;
                }, D2.prototype.newGraph = function(n) {
                  return new g(null, this.graphManager, n);
                }, D2.prototype.newNode = function(n) {
                  return new t(this.graphManager, n);
                }, D2.prototype.newEdge = function(n) {
                  return new s(null, null, n);
                }, D2.prototype.initParameters = function() {
                  f.prototype.initParameters.call(this, arguments), this.isSubLayout || (o.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = o.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = o.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.gravityConstant = h.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = h.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = h.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = h.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = false, this.isGrowthFinished = false);
                }, D2.prototype.initSpringEmbedder = function() {
                  f.prototype.initSpringEmbedder.call(this), this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / h.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = 0.04, this.coolingAdjuster = 1;
                }, D2.prototype.layout = function() {
                  var n = T.DEFAULT_CREATE_BENDS_AS_NEEDED;
                  return n && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
                }, D2.prototype.classicLayout = function() {
                  if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
                    if (o.TREE_REDUCTION_ON_INCREMENTAL) {
                      this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                      var m2 = new Set(this.getAllNodes()), p2 = this.nodesWithGravity.filter(function(I) {
                        return m2.has(I);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(p2);
                    }
                  } else {
                    var n = this.getFlatForest();
                    if (n.length > 0)
                      this.positionNodesRadially(n);
                    else {
                      this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                      var m2 = new Set(this.getAllNodes()), p2 = this.nodesWithGravity.filter(function(E) {
                        return m2.has(E);
                      });
                      this.graphManager.setAllNodesToApplyGravitation(p2), this.positionNodesRandomly();
                    }
                  }
                  return Object.keys(this.constraints).length > 0 && (c.handleConstraints(this), this.initConstraintVariables()), this.initSpringEmbedder(), o.APPLY_LAYOUT && this.runSpringEmbedder(), true;
                }, D2.prototype.tick = function() {
                  if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
                    if (this.prunedNodesAll.length > 0)
                      this.isTreeGrowing = true;
                    else
                      return true;
                  if (this.totalIterations % h.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
                    if (this.isConverged())
                      if (this.prunedNodesAll.length > 0)
                        this.isTreeGrowing = true;
                      else
                        return true;
                    this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
                  }
                  if (this.isTreeGrowing) {
                    if (this.growTreeIterations % 10 == 0)
                      if (this.prunedNodesAll.length > 0) {
                        this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                        var n = new Set(this.getAllNodes()), m2 = this.nodesWithGravity.filter(function(y) {
                          return n.has(y);
                        });
                        this.graphManager.setAllNodesToApplyGravitation(m2), this.graphManager.updateBounds(), this.updateGrid(), o.PURE_INCREMENTAL ? this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 : this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                      } else
                        this.isTreeGrowing = false, this.isGrowthFinished = true;
                    this.growTreeIterations++;
                  }
                  if (this.isGrowthFinished) {
                    if (this.isConverged())
                      return true;
                    this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), o.PURE_INCREMENTAL ? this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL / 2 * ((100 - this.afterGrowthIterations) / 100) : this.coolingFactor = h.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
                  }
                  var p2 = !this.isTreeGrowing && !this.isGrowthFinished, E = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
                  return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(p2, E), this.calcGravitationalForces(), this.moveNodes(), this.animate(), false;
                }, D2.prototype.getPositionsData = function() {
                  for (var n = this.graphManager.getAllNodes(), m2 = {}, p2 = 0; p2 < n.length; p2++) {
                    var E = n[p2].rect, y = n[p2].id;
                    m2[y] = {
                      id: y,
                      x: E.getCenterX(),
                      y: E.getCenterY(),
                      w: E.width,
                      h: E.height
                    };
                  }
                  return m2;
                }, D2.prototype.runSpringEmbedder = function() {
                  this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
                  var n = false;
                  if (h.ANIMATE === "during")
                    this.emit("layoutstarted");
                  else {
                    for (; !n; )
                      n = this.tick();
                    this.graphManager.updateBounds();
                  }
                }, D2.prototype.moveNodes = function() {
                  for (var n = this.getAllNodes(), m2, p2 = 0; p2 < n.length; p2++)
                    m2 = n[p2], m2.calculateDisplacement();
                  Object.keys(this.constraints).length > 0 && this.updateDisplacements();
                  for (var p2 = 0; p2 < n.length; p2++)
                    m2 = n[p2], m2.move();
                }, D2.prototype.initConstraintVariables = function() {
                  var n = this;
                  this.idToNodeMap = /* @__PURE__ */ new Map(), this.fixedNodeSet = /* @__PURE__ */ new Set();
                  for (var m2 = this.graphManager.getAllNodes(), p2 = 0; p2 < m2.length; p2++) {
                    var E = m2[p2];
                    this.idToNodeMap.set(E.id, E);
                  }
                  var y = function O(H) {
                    for (var B = H.getChild().getNodes(), _, lt = 0, J = 0; J < B.length; J++)
                      _ = B[J], _.getChild() == null ? n.fixedNodeSet.has(_.id) && (lt += 100) : lt += O(_);
                    return lt;
                  };
                  if (this.constraints.fixedNodeConstraint) {
                    this.constraints.fixedNodeConstraint.forEach(function(B) {
                      n.fixedNodeSet.add(B.nodeId);
                    });
                    for (var m2 = this.graphManager.getAllNodes(), E, p2 = 0; p2 < m2.length; p2++)
                      if (E = m2[p2], E.getChild() != null) {
                        var I = y(E);
                        I > 0 && (E.fixedNodeWeight = I);
                      }
                  }
                  if (this.constraints.relativePlacementConstraint) {
                    var w = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
                    if (this.dummyToNodeForVerticalAlignment = /* @__PURE__ */ new Map(), this.dummyToNodeForHorizontalAlignment = /* @__PURE__ */ new Map(), this.fixedNodesOnHorizontal = /* @__PURE__ */ new Set(), this.fixedNodesOnVertical = /* @__PURE__ */ new Set(), this.fixedNodeSet.forEach(function(O) {
                      n.fixedNodesOnHorizontal.add(O), n.fixedNodesOnVertical.add(O);
                    }), this.constraints.alignmentConstraint) {
                      if (this.constraints.alignmentConstraint.vertical)
                        for (var W = this.constraints.alignmentConstraint.vertical, p2 = 0; p2 < W.length; p2++)
                          this.dummyToNodeForVerticalAlignment.set("dummy" + p2, []), W[p2].forEach(function(H) {
                            w.set(H, "dummy" + p2), n.dummyToNodeForVerticalAlignment.get("dummy" + p2).push(H), n.fixedNodeSet.has(H) && n.fixedNodesOnHorizontal.add("dummy" + p2);
                          });
                      if (this.constraints.alignmentConstraint.horizontal)
                        for (var x = this.constraints.alignmentConstraint.horizontal, p2 = 0; p2 < x.length; p2++)
                          this.dummyToNodeForHorizontalAlignment.set("dummy" + p2, []), x[p2].forEach(function(H) {
                            R.set(H, "dummy" + p2), n.dummyToNodeForHorizontalAlignment.get("dummy" + p2).push(H), n.fixedNodeSet.has(H) && n.fixedNodesOnVertical.add("dummy" + p2);
                          });
                    }
                    if (o.RELAX_MOVEMENT_ON_CONSTRAINTS)
                      this.shuffle = function(O) {
                        var H, B, _;
                        for (_ = O.length - 1; _ >= 2 * O.length / 3; _--)
                          H = Math.floor(Math.random() * (_ + 1)), B = O[_], O[_] = O[H], O[H] = B;
                        return O;
                      }, this.nodesInRelativeHorizontal = [], this.nodesInRelativeVertical = [], this.nodeToRelativeConstraintMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToRelativeConstraintMapVertical = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapHorizontal = /* @__PURE__ */ new Map(), this.nodeToTempPositionMapVertical = /* @__PURE__ */ new Map(), this.constraints.relativePlacementConstraint.forEach(function(O) {
                        if (O.left) {
                          var H = w.has(O.left) ? w.get(O.left) : O.left, B = w.has(O.right) ? w.get(O.right) : O.right;
                          n.nodesInRelativeHorizontal.includes(H) || (n.nodesInRelativeHorizontal.push(H), n.nodeToRelativeConstraintMapHorizontal.set(H, []), n.dummyToNodeForVerticalAlignment.has(H) ? n.nodeToTempPositionMapHorizontal.set(H, n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get(H)[0]).getCenterX()) : n.nodeToTempPositionMapHorizontal.set(H, n.idToNodeMap.get(H).getCenterX())), n.nodesInRelativeHorizontal.includes(B) || (n.nodesInRelativeHorizontal.push(B), n.nodeToRelativeConstraintMapHorizontal.set(B, []), n.dummyToNodeForVerticalAlignment.has(B) ? n.nodeToTempPositionMapHorizontal.set(B, n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get(B)[0]).getCenterX()) : n.nodeToTempPositionMapHorizontal.set(B, n.idToNodeMap.get(B).getCenterX())), n.nodeToRelativeConstraintMapHorizontal.get(H).push({ right: B, gap: O.gap }), n.nodeToRelativeConstraintMapHorizontal.get(B).push({ left: H, gap: O.gap });
                        } else {
                          var _ = R.has(O.top) ? R.get(O.top) : O.top, lt = R.has(O.bottom) ? R.get(O.bottom) : O.bottom;
                          n.nodesInRelativeVertical.includes(_) || (n.nodesInRelativeVertical.push(_), n.nodeToRelativeConstraintMapVertical.set(_, []), n.dummyToNodeForHorizontalAlignment.has(_) ? n.nodeToTempPositionMapVertical.set(_, n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(_)[0]).getCenterY()) : n.nodeToTempPositionMapVertical.set(_, n.idToNodeMap.get(_).getCenterY())), n.nodesInRelativeVertical.includes(lt) || (n.nodesInRelativeVertical.push(lt), n.nodeToRelativeConstraintMapVertical.set(lt, []), n.dummyToNodeForHorizontalAlignment.has(lt) ? n.nodeToTempPositionMapVertical.set(lt, n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(lt)[0]).getCenterY()) : n.nodeToTempPositionMapVertical.set(lt, n.idToNodeMap.get(lt).getCenterY())), n.nodeToRelativeConstraintMapVertical.get(_).push({ bottom: lt, gap: O.gap }), n.nodeToRelativeConstraintMapVertical.get(lt).push({ top: _, gap: O.gap });
                        }
                      });
                    else {
                      var q = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
                      this.constraints.relativePlacementConstraint.forEach(function(O) {
                        if (O.left) {
                          var H = w.has(O.left) ? w.get(O.left) : O.left, B = w.has(O.right) ? w.get(O.right) : O.right;
                          q.has(H) ? q.get(H).push(B) : q.set(H, [B]), q.has(B) ? q.get(B).push(H) : q.set(B, [H]);
                        } else {
                          var _ = R.has(O.top) ? R.get(O.top) : O.top, lt = R.has(O.bottom) ? R.get(O.bottom) : O.bottom;
                          V.has(_) ? V.get(_).push(lt) : V.set(_, [lt]), V.has(lt) ? V.get(lt).push(_) : V.set(lt, [_]);
                        }
                      });
                      var Y = function(H, B) {
                        var _ = [], lt = [], J = new k(), Rt = /* @__PURE__ */ new Set(), Lt = 0;
                        return H.forEach(function(vt, it) {
                          if (!Rt.has(it)) {
                            _[Lt] = [], lt[Lt] = false;
                            var gt = it;
                            for (J.push(gt), Rt.add(gt), _[Lt].push(gt); J.length != 0; ) {
                              gt = J.shift(), B.has(gt) && (lt[Lt] = true);
                              var Tt = H.get(gt);
                              Tt.forEach(function(At) {
                                Rt.has(At) || (J.push(At), Rt.add(At), _[Lt].push(At));
                              });
                            }
                            Lt++;
                          }
                        }), { components: _, isFixed: lt };
                      }, et = Y(q, n.fixedNodesOnHorizontal);
                      this.componentsOnHorizontal = et.components, this.fixedComponentsOnHorizontal = et.isFixed;
                      var z = Y(V, n.fixedNodesOnVertical);
                      this.componentsOnVertical = z.components, this.fixedComponentsOnVertical = z.isFixed;
                    }
                  }
                }, D2.prototype.updateDisplacements = function() {
                  var n = this;
                  if (this.constraints.fixedNodeConstraint && this.constraints.fixedNodeConstraint.forEach(function(z) {
                    var O = n.idToNodeMap.get(z.nodeId);
                    O.displacementX = 0, O.displacementY = 0;
                  }), this.constraints.alignmentConstraint) {
                    if (this.constraints.alignmentConstraint.vertical)
                      for (var m2 = this.constraints.alignmentConstraint.vertical, p2 = 0; p2 < m2.length; p2++) {
                        for (var E = 0, y = 0; y < m2[p2].length; y++) {
                          if (this.fixedNodeSet.has(m2[p2][y])) {
                            E = 0;
                            break;
                          }
                          E += this.idToNodeMap.get(m2[p2][y]).displacementX;
                        }
                        for (var I = E / m2[p2].length, y = 0; y < m2[p2].length; y++)
                          this.idToNodeMap.get(m2[p2][y]).displacementX = I;
                      }
                    if (this.constraints.alignmentConstraint.horizontal)
                      for (var w = this.constraints.alignmentConstraint.horizontal, p2 = 0; p2 < w.length; p2++) {
                        for (var R = 0, y = 0; y < w[p2].length; y++) {
                          if (this.fixedNodeSet.has(w[p2][y])) {
                            R = 0;
                            break;
                          }
                          R += this.idToNodeMap.get(w[p2][y]).displacementY;
                        }
                        for (var W = R / w[p2].length, y = 0; y < w[p2].length; y++)
                          this.idToNodeMap.get(w[p2][y]).displacementY = W;
                      }
                  }
                  if (this.constraints.relativePlacementConstraint)
                    if (o.RELAX_MOVEMENT_ON_CONSTRAINTS)
                      this.totalIterations % 10 == 0 && (this.shuffle(this.nodesInRelativeHorizontal), this.shuffle(this.nodesInRelativeVertical)), this.nodesInRelativeHorizontal.forEach(function(z) {
                        if (!n.fixedNodesOnHorizontal.has(z)) {
                          var O = 0;
                          n.dummyToNodeForVerticalAlignment.has(z) ? O = n.idToNodeMap.get(n.dummyToNodeForVerticalAlignment.get(z)[0]).displacementX : O = n.idToNodeMap.get(z).displacementX, n.nodeToRelativeConstraintMapHorizontal.get(z).forEach(function(H) {
                            if (H.right) {
                              var B = n.nodeToTempPositionMapHorizontal.get(H.right) - n.nodeToTempPositionMapHorizontal.get(z) - O;
                              B < H.gap && (O -= H.gap - B);
                            } else {
                              var B = n.nodeToTempPositionMapHorizontal.get(z) - n.nodeToTempPositionMapHorizontal.get(H.left) + O;
                              B < H.gap && (O += H.gap - B);
                            }
                          }), n.nodeToTempPositionMapHorizontal.set(z, n.nodeToTempPositionMapHorizontal.get(z) + O), n.dummyToNodeForVerticalAlignment.has(z) ? n.dummyToNodeForVerticalAlignment.get(z).forEach(function(H) {
                            n.idToNodeMap.get(H).displacementX = O;
                          }) : n.idToNodeMap.get(z).displacementX = O;
                        }
                      }), this.nodesInRelativeVertical.forEach(function(z) {
                        if (!n.fixedNodesOnHorizontal.has(z)) {
                          var O = 0;
                          n.dummyToNodeForHorizontalAlignment.has(z) ? O = n.idToNodeMap.get(n.dummyToNodeForHorizontalAlignment.get(z)[0]).displacementY : O = n.idToNodeMap.get(z).displacementY, n.nodeToRelativeConstraintMapVertical.get(z).forEach(function(H) {
                            if (H.bottom) {
                              var B = n.nodeToTempPositionMapVertical.get(H.bottom) - n.nodeToTempPositionMapVertical.get(z) - O;
                              B < H.gap && (O -= H.gap - B);
                            } else {
                              var B = n.nodeToTempPositionMapVertical.get(z) - n.nodeToTempPositionMapVertical.get(H.top) + O;
                              B < H.gap && (O += H.gap - B);
                            }
                          }), n.nodeToTempPositionMapVertical.set(z, n.nodeToTempPositionMapVertical.get(z) + O), n.dummyToNodeForHorizontalAlignment.has(z) ? n.dummyToNodeForHorizontalAlignment.get(z).forEach(function(H) {
                            n.idToNodeMap.get(H).displacementY = O;
                          }) : n.idToNodeMap.get(z).displacementY = O;
                        }
                      });
                    else {
                      for (var p2 = 0; p2 < this.componentsOnHorizontal.length; p2++) {
                        var x = this.componentsOnHorizontal[p2];
                        if (this.fixedComponentsOnHorizontal[p2])
                          for (var y = 0; y < x.length; y++)
                            this.dummyToNodeForVerticalAlignment.has(x[y]) ? this.dummyToNodeForVerticalAlignment.get(x[y]).forEach(function(H) {
                              n.idToNodeMap.get(H).displacementX = 0;
                            }) : this.idToNodeMap.get(x[y]).displacementX = 0;
                        else {
                          for (var q = 0, V = 0, y = 0; y < x.length; y++)
                            if (this.dummyToNodeForVerticalAlignment.has(x[y])) {
                              var Y = this.dummyToNodeForVerticalAlignment.get(x[y]);
                              q += Y.length * this.idToNodeMap.get(Y[0]).displacementX, V += Y.length;
                            } else
                              q += this.idToNodeMap.get(x[y]).displacementX, V++;
                          for (var et = q / V, y = 0; y < x.length; y++)
                            this.dummyToNodeForVerticalAlignment.has(x[y]) ? this.dummyToNodeForVerticalAlignment.get(x[y]).forEach(function(H) {
                              n.idToNodeMap.get(H).displacementX = et;
                            }) : this.idToNodeMap.get(x[y]).displacementX = et;
                        }
                      }
                      for (var p2 = 0; p2 < this.componentsOnVertical.length; p2++) {
                        var x = this.componentsOnVertical[p2];
                        if (this.fixedComponentsOnVertical[p2])
                          for (var y = 0; y < x.length; y++)
                            this.dummyToNodeForHorizontalAlignment.has(x[y]) ? this.dummyToNodeForHorizontalAlignment.get(x[y]).forEach(function(B) {
                              n.idToNodeMap.get(B).displacementY = 0;
                            }) : this.idToNodeMap.get(x[y]).displacementY = 0;
                        else {
                          for (var q = 0, V = 0, y = 0; y < x.length; y++)
                            if (this.dummyToNodeForHorizontalAlignment.has(x[y])) {
                              var Y = this.dummyToNodeForHorizontalAlignment.get(x[y]);
                              q += Y.length * this.idToNodeMap.get(Y[0]).displacementY, V += Y.length;
                            } else
                              q += this.idToNodeMap.get(x[y]).displacementY, V++;
                          for (var et = q / V, y = 0; y < x.length; y++)
                            this.dummyToNodeForHorizontalAlignment.has(x[y]) ? this.dummyToNodeForHorizontalAlignment.get(x[y]).forEach(function(J) {
                              n.idToNodeMap.get(J).displacementY = et;
                            }) : this.idToNodeMap.get(x[y]).displacementY = et;
                        }
                      }
                    }
                }, D2.prototype.calculateNodesToApplyGravitationTo = function() {
                  var n = [], m2, p2 = this.graphManager.getGraphs(), E = p2.length, y;
                  for (y = 0; y < E; y++)
                    m2 = p2[y], m2.updateConnected(), m2.isConnected || (n = n.concat(m2.getNodes()));
                  return n;
                }, D2.prototype.createBendpoints = function() {
                  var n = [];
                  n = n.concat(this.graphManager.getAllEdges());
                  var m2 = /* @__PURE__ */ new Set(), p2;
                  for (p2 = 0; p2 < n.length; p2++) {
                    var E = n[p2];
                    if (!m2.has(E)) {
                      var y = E.getSource(), I = E.getTarget();
                      if (y == I)
                        E.getBendpoints().push(new d()), E.getBendpoints().push(new d()), this.createDummyNodesForBendpoints(E), m2.add(E);
                      else {
                        var w = [];
                        if (w = w.concat(y.getEdgeListToNode(I)), w = w.concat(I.getEdgeListToNode(y)), !m2.has(w[0])) {
                          if (w.length > 1) {
                            var R;
                            for (R = 0; R < w.length; R++) {
                              var W = w[R];
                              W.getBendpoints().push(new d()), this.createDummyNodesForBendpoints(W);
                            }
                          }
                          w.forEach(function(x) {
                            m2.add(x);
                          });
                        }
                      }
                    }
                    if (m2.size == n.length)
                      break;
                  }
                }, D2.prototype.positionNodesRadially = function(n) {
                  for (var m2 = new v(0, 0), p2 = Math.ceil(Math.sqrt(n.length)), E = 0, y = 0, I = 0, w = new d(0, 0), R = 0; R < n.length; R++) {
                    R % p2 == 0 && (I = 0, y = E, R != 0 && (y += o.DEFAULT_COMPONENT_SEPERATION), E = 0);
                    var W = n[R], x = S.findCenterOfTree(W);
                    m2.x = I, m2.y = y, w = D2.radialLayout(W, x, m2), w.y > E && (E = Math.floor(w.y)), I = Math.floor(w.x + o.DEFAULT_COMPONENT_SEPERATION);
                  }
                  this.transform(new d(T.WORLD_CENTER_X - w.x / 2, T.WORLD_CENTER_Y - w.y / 2));
                }, D2.radialLayout = function(n, m2, p2) {
                  var E = Math.max(this.maxDiagonalInTree(n), o.DEFAULT_RADIAL_SEPARATION);
                  D2.branchRadialLayout(m2, null, 0, 359, 0, E);
                  var y = K.calculateBounds(n), I = new X();
                  I.setDeviceOrgX(y.getMinX()), I.setDeviceOrgY(y.getMinY()), I.setWorldOrgX(p2.x), I.setWorldOrgY(p2.y);
                  for (var w = 0; w < n.length; w++) {
                    var R = n[w];
                    R.transform(I);
                  }
                  var W = new d(y.getMaxX(), y.getMaxY());
                  return I.inverseTransformPoint(W);
                }, D2.branchRadialLayout = function(n, m2, p2, E, y, I) {
                  var w = (E - p2 + 1) / 2;
                  w < 0 && (w += 180);
                  var R = (w + p2) % 360, W = R * P.TWO_PI / 360, x = y * Math.cos(W), q = y * Math.sin(W);
                  n.setCenter(x, q);
                  var V = [];
                  V = V.concat(n.getEdges());
                  var Y = V.length;
                  m2 != null && Y--;
                  for (var et = 0, z = V.length, O, H = n.getEdgesBetween(m2); H.length > 1; ) {
                    var B = H[0];
                    H.splice(0, 1);
                    var _ = V.indexOf(B);
                    _ >= 0 && V.splice(_, 1), z--, Y--;
                  }
                  m2 != null ? O = (V.indexOf(H[0]) + 1) % z : O = 0;
                  for (var lt = Math.abs(E - p2) / Y, J = O; et != Y; J = ++J % z) {
                    var Rt = V[J].getOtherEnd(n);
                    if (Rt != m2) {
                      var Lt = (p2 + et * lt) % 360, vt = (Lt + lt) % 360;
                      D2.branchRadialLayout(Rt, n, Lt, vt, y + I, I), et++;
                    }
                  }
                }, D2.maxDiagonalInTree = function(n) {
                  for (var m2 = M.MIN_VALUE, p2 = 0; p2 < n.length; p2++) {
                    var E = n[p2], y = E.getDiagonal();
                    y > m2 && (m2 = y);
                  }
                  return m2;
                }, D2.prototype.calcRepulsionRange = function() {
                  return 2 * (this.level + 1) * this.idealEdgeLength;
                }, D2.prototype.groupZeroDegreeMembers = function() {
                  var n = this, m2 = {};
                  this.memberGroups = {}, this.idToDummyNode = {};
                  for (var p2 = [], E = this.graphManager.getAllNodes(), y = 0; y < E.length; y++) {
                    var I = E[y], w = I.getParent();
                    this.getNodeDegreeWithChildren(I) === 0 && (w.id == null || !this.getToBeTiled(w)) && p2.push(I);
                  }
                  for (var y = 0; y < p2.length; y++) {
                    var I = p2[y], R = I.getParent().id;
                    typeof m2[R] > "u" && (m2[R] = []), m2[R] = m2[R].concat(I);
                  }
                  Object.keys(m2).forEach(function(W) {
                    if (m2[W].length > 1) {
                      var x = "DummyCompound_" + W;
                      n.memberGroups[x] = m2[W];
                      var q = m2[W][0].getParent(), V = new t(n.graphManager);
                      V.id = x, V.paddingLeft = q.paddingLeft || 0, V.paddingRight = q.paddingRight || 0, V.paddingBottom = q.paddingBottom || 0, V.paddingTop = q.paddingTop || 0, n.idToDummyNode[x] = V;
                      var Y = n.getGraphManager().add(n.newGraph(), V), et = q.getChild();
                      et.add(V);
                      for (var z = 0; z < m2[W].length; z++) {
                        var O = m2[W][z];
                        et.remove(O), Y.add(O);
                      }
                    }
                  });
                }, D2.prototype.clearCompounds = function() {
                  var n = {}, m2 = {};
                  this.performDFSOnCompounds();
                  for (var p2 = 0; p2 < this.compoundOrder.length; p2++)
                    m2[this.compoundOrder[p2].id] = this.compoundOrder[p2], n[this.compoundOrder[p2].id] = [].concat(this.compoundOrder[p2].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[p2].getChild()), this.compoundOrder[p2].child = null;
                  this.graphManager.resetAllNodes(), this.tileCompoundMembers(n, m2);
                }, D2.prototype.clearZeroDegreeMembers = function() {
                  var n = this, m2 = this.tiledZeroDegreePack = [];
                  Object.keys(this.memberGroups).forEach(function(p2) {
                    var E = n.idToDummyNode[p2];
                    if (m2[p2] = n.tileNodes(n.memberGroups[p2], E.paddingLeft + E.paddingRight), E.rect.width = m2[p2].width, E.rect.height = m2[p2].height, E.setCenter(m2[p2].centerX, m2[p2].centerY), E.labelMarginLeft = 0, E.labelMarginTop = 0, o.NODE_DIMENSIONS_INCLUDE_LABELS) {
                      var y = E.rect.width, I = E.rect.height;
                      E.labelWidth && (E.labelPosHorizontal == "left" ? (E.rect.x -= E.labelWidth, E.setWidth(y + E.labelWidth), E.labelMarginLeft = E.labelWidth) : E.labelPosHorizontal == "center" && E.labelWidth > y ? (E.rect.x -= (E.labelWidth - y) / 2, E.setWidth(E.labelWidth), E.labelMarginLeft = (E.labelWidth - y) / 2) : E.labelPosHorizontal == "right" && E.setWidth(y + E.labelWidth)), E.labelHeight && (E.labelPosVertical == "top" ? (E.rect.y -= E.labelHeight, E.setHeight(I + E.labelHeight), E.labelMarginTop = E.labelHeight) : E.labelPosVertical == "center" && E.labelHeight > I ? (E.rect.y -= (E.labelHeight - I) / 2, E.setHeight(E.labelHeight), E.labelMarginTop = (E.labelHeight - I) / 2) : E.labelPosVertical == "bottom" && E.setHeight(I + E.labelHeight));
                    }
                  });
                }, D2.prototype.repopulateCompounds = function() {
                  for (var n = this.compoundOrder.length - 1; n >= 0; n--) {
                    var m2 = this.compoundOrder[n], p2 = m2.id, E = m2.paddingLeft, y = m2.paddingTop, I = m2.labelMarginLeft, w = m2.labelMarginTop;
                    this.adjustLocations(this.tiledMemberPack[p2], m2.rect.x, m2.rect.y, E, y, I, w);
                  }
                }, D2.prototype.repopulateZeroDegreeMembers = function() {
                  var n = this, m2 = this.tiledZeroDegreePack;
                  Object.keys(m2).forEach(function(p2) {
                    var E = n.idToDummyNode[p2], y = E.paddingLeft, I = E.paddingTop, w = E.labelMarginLeft, R = E.labelMarginTop;
                    n.adjustLocations(m2[p2], E.rect.x, E.rect.y, y, I, w, R);
                  });
                }, D2.prototype.getToBeTiled = function(n) {
                  var m2 = n.id;
                  if (this.toBeTiled[m2] != null)
                    return this.toBeTiled[m2];
                  var p2 = n.getChild();
                  if (p2 == null)
                    return this.toBeTiled[m2] = false, false;
                  for (var E = p2.getNodes(), y = 0; y < E.length; y++) {
                    var I = E[y];
                    if (this.getNodeDegree(I) > 0)
                      return this.toBeTiled[m2] = false, false;
                    if (I.getChild() == null) {
                      this.toBeTiled[I.id] = false;
                      continue;
                    }
                    if (!this.getToBeTiled(I))
                      return this.toBeTiled[m2] = false, false;
                  }
                  return this.toBeTiled[m2] = true, true;
                }, D2.prototype.getNodeDegree = function(n) {
                  n.id;
                  for (var m2 = n.getEdges(), p2 = 0, E = 0; E < m2.length; E++) {
                    var y = m2[E];
                    y.getSource().id !== y.getTarget().id && (p2 = p2 + 1);
                  }
                  return p2;
                }, D2.prototype.getNodeDegreeWithChildren = function(n) {
                  var m2 = this.getNodeDegree(n);
                  if (n.getChild() == null)
                    return m2;
                  for (var p2 = n.getChild().getNodes(), E = 0; E < p2.length; E++) {
                    var y = p2[E];
                    m2 += this.getNodeDegreeWithChildren(y);
                  }
                  return m2;
                }, D2.prototype.performDFSOnCompounds = function() {
                  this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
                }, D2.prototype.fillCompexOrderByDFS = function(n) {
                  for (var m2 = 0; m2 < n.length; m2++) {
                    var p2 = n[m2];
                    p2.getChild() != null && this.fillCompexOrderByDFS(p2.getChild().getNodes()), this.getToBeTiled(p2) && this.compoundOrder.push(p2);
                  }
                }, D2.prototype.adjustLocations = function(n, m2, p2, E, y, I, w) {
                  m2 += E + I, p2 += y + w;
                  for (var R = m2, W = 0; W < n.rows.length; W++) {
                    var x = n.rows[W];
                    m2 = R;
                    for (var q = 0, V = 0; V < x.length; V++) {
                      var Y = x[V];
                      Y.rect.x = m2, Y.rect.y = p2, m2 += Y.rect.width + n.horizontalPadding, Y.rect.height > q && (q = Y.rect.height);
                    }
                    p2 += q + n.verticalPadding;
                  }
                }, D2.prototype.tileCompoundMembers = function(n, m2) {
                  var p2 = this;
                  this.tiledMemberPack = [], Object.keys(n).forEach(function(E) {
                    var y = m2[E];
                    if (p2.tiledMemberPack[E] = p2.tileNodes(n[E], y.paddingLeft + y.paddingRight), y.rect.width = p2.tiledMemberPack[E].width, y.rect.height = p2.tiledMemberPack[E].height, y.setCenter(p2.tiledMemberPack[E].centerX, p2.tiledMemberPack[E].centerY), y.labelMarginLeft = 0, y.labelMarginTop = 0, o.NODE_DIMENSIONS_INCLUDE_LABELS) {
                      var I = y.rect.width, w = y.rect.height;
                      y.labelWidth && (y.labelPosHorizontal == "left" ? (y.rect.x -= y.labelWidth, y.setWidth(I + y.labelWidth), y.labelMarginLeft = y.labelWidth) : y.labelPosHorizontal == "center" && y.labelWidth > I ? (y.rect.x -= (y.labelWidth - I) / 2, y.setWidth(y.labelWidth), y.labelMarginLeft = (y.labelWidth - I) / 2) : y.labelPosHorizontal == "right" && y.setWidth(I + y.labelWidth)), y.labelHeight && (y.labelPosVertical == "top" ? (y.rect.y -= y.labelHeight, y.setHeight(w + y.labelHeight), y.labelMarginTop = y.labelHeight) : y.labelPosVertical == "center" && y.labelHeight > w ? (y.rect.y -= (y.labelHeight - w) / 2, y.setHeight(y.labelHeight), y.labelMarginTop = (y.labelHeight - w) / 2) : y.labelPosVertical == "bottom" && y.setHeight(w + y.labelHeight));
                    }
                  });
                }, D2.prototype.tileNodes = function(n, m2) {
                  var p2 = this.tileNodesByFavoringDim(n, m2, true), E = this.tileNodesByFavoringDim(n, m2, false), y = this.getOrgRatio(p2), I = this.getOrgRatio(E), w;
                  return I < y ? w = E : w = p2, w;
                }, D2.prototype.getOrgRatio = function(n) {
                  var m2 = n.width, p2 = n.height, E = m2 / p2;
                  return E < 1 && (E = 1 / E), E;
                }, D2.prototype.calcIdealRowWidth = function(n, m2) {
                  var p2 = o.TILING_PADDING_VERTICAL, E = o.TILING_PADDING_HORIZONTAL, y = n.length, I = 0, w = 0, R = 0;
                  n.forEach(function(z) {
                    I += z.getWidth(), w += z.getHeight(), z.getWidth() > R && (R = z.getWidth());
                  });
                  var W = I / y, x = w / y, q = Math.pow(p2 - E, 2) + 4 * (W + E) * (x + p2) * y, V = (E - p2 + Math.sqrt(q)) / (2 * (W + E)), Y;
                  m2 ? (Y = Math.ceil(V), Y == V && Y++) : Y = Math.floor(V);
                  var et = Y * (W + E) - E;
                  return R > et && (et = R), et += E * 2, et;
                }, D2.prototype.tileNodesByFavoringDim = function(n, m2, p2) {
                  var E = o.TILING_PADDING_VERTICAL, y = o.TILING_PADDING_HORIZONTAL, I = o.TILING_COMPARE_BY, w = {
                    rows: [],
                    rowWidth: [],
                    rowHeight: [],
                    width: 0,
                    height: m2,
                    // assume minHeight equals to minWidth
                    verticalPadding: E,
                    horizontalPadding: y,
                    centerX: 0,
                    centerY: 0
                  };
                  I && (w.idealRowWidth = this.calcIdealRowWidth(n, p2));
                  var R = function(O) {
                    return O.rect.width * O.rect.height;
                  }, W = function(O, H) {
                    return R(H) - R(O);
                  };
                  n.sort(function(z, O) {
                    var H = W;
                    return w.idealRowWidth ? (H = I, H(z.id, O.id)) : H(z, O);
                  });
                  for (var x = 0, q = 0, V = 0; V < n.length; V++) {
                    var Y = n[V];
                    x += Y.getCenterX(), q += Y.getCenterY();
                  }
                  w.centerX = x / n.length, w.centerY = q / n.length;
                  for (var V = 0; V < n.length; V++) {
                    var Y = n[V];
                    if (w.rows.length == 0)
                      this.insertNodeToRow(w, Y, 0, m2);
                    else if (this.canAddHorizontal(w, Y.rect.width, Y.rect.height)) {
                      var et = w.rows.length - 1;
                      w.idealRowWidth || (et = this.getShortestRowIndex(w)), this.insertNodeToRow(w, Y, et, m2);
                    } else
                      this.insertNodeToRow(w, Y, w.rows.length, m2);
                    this.shiftToLastRow(w);
                  }
                  return w;
                }, D2.prototype.insertNodeToRow = function(n, m2, p2, E) {
                  var y = E;
                  if (p2 == n.rows.length) {
                    var I = [];
                    n.rows.push(I), n.rowWidth.push(y), n.rowHeight.push(0);
                  }
                  var w = n.rowWidth[p2] + m2.rect.width;
                  n.rows[p2].length > 0 && (w += n.horizontalPadding), n.rowWidth[p2] = w, n.width < w && (n.width = w);
                  var R = m2.rect.height;
                  p2 > 0 && (R += n.verticalPadding);
                  var W = 0;
                  R > n.rowHeight[p2] && (W = n.rowHeight[p2], n.rowHeight[p2] = R, W = n.rowHeight[p2] - W), n.height += W, n.rows[p2].push(m2);
                }, D2.prototype.getShortestRowIndex = function(n) {
                  for (var m2 = -1, p2 = Number.MAX_VALUE, E = 0; E < n.rows.length; E++)
                    n.rowWidth[E] < p2 && (m2 = E, p2 = n.rowWidth[E]);
                  return m2;
                }, D2.prototype.getLongestRowIndex = function(n) {
                  for (var m2 = -1, p2 = Number.MIN_VALUE, E = 0; E < n.rows.length; E++)
                    n.rowWidth[E] > p2 && (m2 = E, p2 = n.rowWidth[E]);
                  return m2;
                }, D2.prototype.canAddHorizontal = function(n, m2, p2) {
                  if (n.idealRowWidth) {
                    var E = n.rows.length - 1, y = n.rowWidth[E];
                    return y + m2 + n.horizontalPadding <= n.idealRowWidth;
                  }
                  var I = this.getShortestRowIndex(n);
                  if (I < 0)
                    return true;
                  var w = n.rowWidth[I];
                  if (w + n.horizontalPadding + m2 <= n.width)
                    return true;
                  var R = 0;
                  n.rowHeight[I] < p2 && I > 0 && (R = p2 + n.verticalPadding - n.rowHeight[I]);
                  var W;
                  n.width - w >= m2 + n.horizontalPadding ? W = (n.height + R) / (w + m2 + n.horizontalPadding) : W = (n.height + R) / n.width, R = p2 + n.verticalPadding;
                  var x;
                  return n.width < m2 ? x = (n.height + R) / m2 : x = (n.height + R) / n.width, x < 1 && (x = 1 / x), W < 1 && (W = 1 / W), W < x;
                }, D2.prototype.shiftToLastRow = function(n) {
                  var m2 = this.getLongestRowIndex(n), p2 = n.rowWidth.length - 1, E = n.rows[m2], y = E[E.length - 1], I = y.width + n.horizontalPadding;
                  if (n.width - n.rowWidth[p2] > I && m2 != p2) {
                    E.splice(-1, 1), n.rows[p2].push(y), n.rowWidth[m2] = n.rowWidth[m2] - I, n.rowWidth[p2] = n.rowWidth[p2] + I, n.width = n.rowWidth[instance.getLongestRowIndex(n)];
                    for (var w = Number.MIN_VALUE, R = 0; R < E.length; R++)
                      E[R].height > w && (w = E[R].height);
                    m2 > 0 && (w += n.verticalPadding);
                    var W = n.rowHeight[m2] + n.rowHeight[p2];
                    n.rowHeight[m2] = w, n.rowHeight[p2] < y.height + n.verticalPadding && (n.rowHeight[p2] = y.height + n.verticalPadding);
                    var x = n.rowHeight[m2] + n.rowHeight[p2];
                    n.height += x - W, this.shiftToLastRow(n);
                  }
                }, D2.prototype.tilingPreLayout = function() {
                  o.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
                }, D2.prototype.tilingPostLayout = function() {
                  o.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
                }, D2.prototype.reduceTrees = function() {
                  for (var n = [], m2 = true, p2; m2; ) {
                    var E = this.graphManager.getAllNodes(), y = [];
                    m2 = false;
                    for (var I = 0; I < E.length; I++)
                      if (p2 = E[I], p2.getEdges().length == 1 && !p2.getEdges()[0].isInterGraph && p2.getChild() == null) {
                        if (o.PURE_INCREMENTAL) {
                          var w = p2.getEdges()[0].getOtherEnd(p2), R = new N(p2.getCenterX() - w.getCenterX(), p2.getCenterY() - w.getCenterY());
                          y.push([p2, p2.getEdges()[0], p2.getOwner(), R]);
                        } else
                          y.push([p2, p2.getEdges()[0], p2.getOwner()]);
                        m2 = true;
                      }
                    if (m2 == true) {
                      for (var W = [], x = 0; x < y.length; x++)
                        y[x][0].getEdges().length == 1 && (W.push(y[x]), y[x][0].getOwner().remove(y[x][0]));
                      n.push(W), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                    }
                  }
                  this.prunedNodesAll = n;
                }, D2.prototype.growTree = function(n) {
                  for (var m2 = n.length, p2 = n[m2 - 1], E, y = 0; y < p2.length; y++)
                    E = p2[y], this.findPlaceforPrunedNode(E), E[2].add(E[0]), E[2].add(E[1], E[1].source, E[1].target);
                  n.splice(n.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
                }, D2.prototype.findPlaceforPrunedNode = function(n) {
                  var m2, p2, E = n[0];
                  if (E == n[1].source ? p2 = n[1].target : p2 = n[1].source, o.PURE_INCREMENTAL)
                    E.setCenter(p2.getCenterX() + n[3].getWidth(), p2.getCenterY() + n[3].getHeight());
                  else {
                    var y = p2.startX, I = p2.finishX, w = p2.startY, R = p2.finishY, W = 0, x = 0, q = 0, V = 0, Y = [W, q, x, V];
                    if (w > 0)
                      for (var et = y; et <= I; et++)
                        Y[0] += this.grid[et][w - 1].length + this.grid[et][w].length - 1;
                    if (I < this.grid.length - 1)
                      for (var et = w; et <= R; et++)
                        Y[1] += this.grid[I + 1][et].length + this.grid[I][et].length - 1;
                    if (R < this.grid[0].length - 1)
                      for (var et = y; et <= I; et++)
                        Y[2] += this.grid[et][R + 1].length + this.grid[et][R].length - 1;
                    if (y > 0)
                      for (var et = w; et <= R; et++)
                        Y[3] += this.grid[y - 1][et].length + this.grid[y][et].length - 1;
                    for (var z = M.MAX_VALUE, O, H, B = 0; B < Y.length; B++)
                      Y[B] < z ? (z = Y[B], O = 1, H = B) : Y[B] == z && O++;
                    if (O == 3 && z == 0)
                      Y[0] == 0 && Y[1] == 0 && Y[2] == 0 ? m2 = 1 : Y[0] == 0 && Y[1] == 0 && Y[3] == 0 ? m2 = 0 : Y[0] == 0 && Y[2] == 0 && Y[3] == 0 ? m2 = 3 : Y[1] == 0 && Y[2] == 0 && Y[3] == 0 && (m2 = 2);
                    else if (O == 2 && z == 0) {
                      var _ = Math.floor(Math.random() * 2);
                      Y[0] == 0 && Y[1] == 0 ? _ == 0 ? m2 = 0 : m2 = 1 : Y[0] == 0 && Y[2] == 0 ? _ == 0 ? m2 = 0 : m2 = 2 : Y[0] == 0 && Y[3] == 0 ? _ == 0 ? m2 = 0 : m2 = 3 : Y[1] == 0 && Y[2] == 0 ? _ == 0 ? m2 = 1 : m2 = 2 : Y[1] == 0 && Y[3] == 0 ? _ == 0 ? m2 = 1 : m2 = 3 : _ == 0 ? m2 = 2 : m2 = 3;
                    } else if (O == 4 && z == 0) {
                      var _ = Math.floor(Math.random() * 4);
                      m2 = _;
                    } else
                      m2 = H;
                    m2 == 0 ? E.setCenter(p2.getCenterX(), p2.getCenterY() - p2.getHeight() / 2 - h.DEFAULT_EDGE_LENGTH - E.getHeight() / 2) : m2 == 1 ? E.setCenter(p2.getCenterX() + p2.getWidth() / 2 + h.DEFAULT_EDGE_LENGTH + E.getWidth() / 2, p2.getCenterY()) : m2 == 2 ? E.setCenter(p2.getCenterX(), p2.getCenterY() + p2.getHeight() / 2 + h.DEFAULT_EDGE_LENGTH + E.getHeight() / 2) : E.setCenter(p2.getCenterX() - p2.getWidth() / 2 - h.DEFAULT_EDGE_LENGTH - E.getWidth() / 2, p2.getCenterY());
                  }
                }, a.exports = D2;
              }
            ),
            /***/
            991: (
              /***/
              (a, r, e2) => {
                var f = e2(551).FDLayoutNode, i = e2(551).IMath;
                function g(s, o, c, h) {
                  f.call(this, s, o, c, h);
                }
                g.prototype = Object.create(f.prototype);
                for (var t in f)
                  g[t] = f[t];
                g.prototype.calculateDisplacement = function() {
                  var s = this.graphManager.getLayout();
                  this.getChild() != null && this.fixedNodeWeight ? (this.displacementX += s.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.fixedNodeWeight, this.displacementY += s.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.fixedNodeWeight) : (this.displacementX += s.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY += s.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren), Math.abs(this.displacementX) > s.coolingFactor * s.maxNodeDisplacement && (this.displacementX = s.coolingFactor * s.maxNodeDisplacement * i.sign(this.displacementX)), Math.abs(this.displacementY) > s.coolingFactor * s.maxNodeDisplacement && (this.displacementY = s.coolingFactor * s.maxNodeDisplacement * i.sign(this.displacementY)), this.child && this.child.getNodes().length > 0 && this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
                }, g.prototype.propogateDisplacementToChildren = function(s, o) {
                  for (var c = this.getChild().getNodes(), h, T = 0; T < c.length; T++)
                    h = c[T], h.getChild() == null ? (h.displacementX += s, h.displacementY += o) : h.propogateDisplacementToChildren(s, o);
                }, g.prototype.move = function() {
                  var s = this.graphManager.getLayout();
                  (this.child == null || this.child.getNodes().length == 0) && (this.moveBy(this.displacementX, this.displacementY), s.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY)), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
                }, g.prototype.setPred1 = function(s) {
                  this.pred1 = s;
                }, g.prototype.getPred1 = function() {
                  return pred1;
                }, g.prototype.getPred2 = function() {
                  return pred2;
                }, g.prototype.setNext = function(s) {
                  this.next = s;
                }, g.prototype.getNext = function() {
                  return next;
                }, g.prototype.setProcessed = function(s) {
                  this.processed = s;
                }, g.prototype.isProcessed = function() {
                  return processed;
                }, a.exports = g;
              }
            ),
            /***/
            902: (
              /***/
              (a, r, e2) => {
                function f(c) {
                  if (Array.isArray(c)) {
                    for (var h = 0, T = Array(c.length); h < c.length; h++)
                      T[h] = c[h];
                    return T;
                  } else
                    return Array.from(c);
                }
                var i = e2(806), g = e2(551).LinkedList, t = e2(551).Matrix, s = e2(551).SVD;
                function o() {
                }
                o.handleConstraints = function(c) {
                  var h = {};
                  h.fixedNodeConstraint = c.constraints.fixedNodeConstraint, h.alignmentConstraint = c.constraints.alignmentConstraint, h.relativePlacementConstraint = c.constraints.relativePlacementConstraint;
                  for (var T = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), d = [], N = [], S = c.getAllNodes(), M = 0, P = 0; P < S.length; P++) {
                    var K = S[P];
                    K.getChild() == null && (v.set(K.id, M++), d.push(K.getCenterX()), N.push(K.getCenterY()), T.set(K.id, K));
                  }
                  h.relativePlacementConstraint && h.relativePlacementConstraint.forEach(function(F) {
                    !F.gap && F.gap != 0 && (F.left ? F.gap = i.DEFAULT_EDGE_LENGTH + T.get(F.left).getWidth() / 2 + T.get(F.right).getWidth() / 2 : F.gap = i.DEFAULT_EDGE_LENGTH + T.get(F.top).getHeight() / 2 + T.get(F.bottom).getHeight() / 2);
                  });
                  var X = function(b, $) {
                    return { x: b.x - $.x, y: b.y - $.y };
                  }, k = function(b) {
                    var $ = 0, Q = 0;
                    return b.forEach(function(Z) {
                      $ += d[v.get(Z)], Q += N[v.get(Z)];
                    }), { x: $ / b.size, y: Q / b.size };
                  }, D2 = function(b, $, Q, Z, at) {
                    function ut(ft, st) {
                      var Ct = new Set(ft), ct = true, ht = false, Wt = void 0;
                      try {
                        for (var Nt = st[Symbol.iterator](), Mt; !(ct = (Mt = Nt.next()).done); ct = true) {
                          var Zt = Mt.value;
                          Ct.add(Zt);
                        }
                      } catch (Gt) {
                        ht = true, Wt = Gt;
                      } finally {
                        try {
                          !ct && Nt.return && Nt.return();
                        } finally {
                          if (ht)
                            throw Wt;
                        }
                      }
                      return Ct;
                    }
                    var ot = /* @__PURE__ */ new Map();
                    b.forEach(function(ft, st) {
                      ot.set(st, 0);
                    }), b.forEach(function(ft, st) {
                      ft.forEach(function(Ct) {
                        ot.set(Ct.id, ot.get(Ct.id) + 1);
                      });
                    });
                    var tt = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), dt2 = new g();
                    ot.forEach(function(ft, st) {
                      ft == 0 ? (dt2.push(st), Q || ($ == "horizontal" ? tt.set(st, v.has(st) ? d[v.get(st)] : Z.get(st)) : tt.set(st, v.has(st) ? N[v.get(st)] : Z.get(st)))) : tt.set(st, Number.NEGATIVE_INFINITY), Q && j.set(st, /* @__PURE__ */ new Set([st]));
                    }), Q && at.forEach(function(ft) {
                      var st = [];
                      if (ft.forEach(function(ht) {
                        Q.has(ht) && st.push(ht);
                      }), st.length > 0) {
                        var Ct = 0;
                        st.forEach(function(ht) {
                          $ == "horizontal" ? (tt.set(ht, v.has(ht) ? d[v.get(ht)] : Z.get(ht)), Ct += tt.get(ht)) : (tt.set(ht, v.has(ht) ? N[v.get(ht)] : Z.get(ht)), Ct += tt.get(ht));
                        }), Ct = Ct / st.length, ft.forEach(function(ht) {
                          Q.has(ht) || tt.set(ht, Ct);
                        });
                      } else {
                        var ct = 0;
                        ft.forEach(function(ht) {
                          $ == "horizontal" ? ct += v.has(ht) ? d[v.get(ht)] : Z.get(ht) : ct += v.has(ht) ? N[v.get(ht)] : Z.get(ht);
                        }), ct = ct / ft.length, ft.forEach(function(ht) {
                          tt.set(ht, ct);
                        });
                      }
                    });
                    for (var wt = function() {
                      var st = dt2.shift(), Ct = b.get(st);
                      Ct.forEach(function(ct) {
                        if (tt.get(ct.id) < tt.get(st) + ct.gap)
                          if (Q && Q.has(ct.id)) {
                            var ht = void 0;
                            if ($ == "horizontal" ? ht = v.has(ct.id) ? d[v.get(ct.id)] : Z.get(ct.id) : ht = v.has(ct.id) ? N[v.get(ct.id)] : Z.get(ct.id), tt.set(ct.id, ht), ht < tt.get(st) + ct.gap) {
                              var Wt = tt.get(st) + ct.gap - ht;
                              j.get(st).forEach(function(Nt) {
                                tt.set(Nt, tt.get(Nt) - Wt);
                              });
                            }
                          } else
                            tt.set(ct.id, tt.get(st) + ct.gap);
                        ot.set(ct.id, ot.get(ct.id) - 1), ot.get(ct.id) == 0 && dt2.push(ct.id), Q && j.set(ct.id, ut(j.get(st), j.get(ct.id)));
                      });
                    }; dt2.length != 0; )
                      wt();
                    if (Q) {
                      var yt = /* @__PURE__ */ new Set();
                      b.forEach(function(ft, st) {
                        ft.length == 0 && yt.add(st);
                      });
                      var It = [];
                      j.forEach(function(ft, st) {
                        if (yt.has(st)) {
                          var Ct = false, ct = true, ht = false, Wt = void 0;
                          try {
                            for (var Nt = ft[Symbol.iterator](), Mt; !(ct = (Mt = Nt.next()).done); ct = true) {
                              var Zt = Mt.value;
                              Q.has(Zt) && (Ct = true);
                            }
                          } catch (Ft) {
                            ht = true, Wt = Ft;
                          } finally {
                            try {
                              !ct && Nt.return && Nt.return();
                            } finally {
                              if (ht)
                                throw Wt;
                            }
                          }
                          if (!Ct) {
                            var Gt = false, $t = void 0;
                            It.forEach(function(Ft, qt) {
                              Ft.has([].concat(f(ft))[0]) && (Gt = true, $t = qt);
                            }), Gt ? ft.forEach(function(Ft) {
                              It[$t].add(Ft);
                            }) : It.push(new Set(ft));
                          }
                        }
                      }), It.forEach(function(ft, st) {
                        var Ct = Number.POSITIVE_INFINITY, ct = Number.POSITIVE_INFINITY, ht = Number.NEGATIVE_INFINITY, Wt = Number.NEGATIVE_INFINITY, Nt = true, Mt = false, Zt = void 0;
                        try {
                          for (var Gt = ft[Symbol.iterator](), $t; !(Nt = ($t = Gt.next()).done); Nt = true) {
                            var Ft = $t.value, qt = void 0;
                            $ == "horizontal" ? qt = v.has(Ft) ? d[v.get(Ft)] : Z.get(Ft) : qt = v.has(Ft) ? N[v.get(Ft)] : Z.get(Ft);
                            var _t = tt.get(Ft);
                            qt < Ct && (Ct = qt), qt > ht && (ht = qt), _t < ct && (ct = _t), _t > Wt && (Wt = _t);
                          }
                        } catch (ie) {
                          Mt = true, Zt = ie;
                        } finally {
                          try {
                            !Nt && Gt.return && Gt.return();
                          } finally {
                            if (Mt)
                              throw Zt;
                          }
                        }
                        var de = (Ct + ht) / 2 - (ct + Wt) / 2, Kt = true, te = false, ee = void 0;
                        try {
                          for (var jt = ft[Symbol.iterator](), se; !(Kt = (se = jt.next()).done); Kt = true) {
                            var re = se.value;
                            tt.set(re, tt.get(re) + de);
                          }
                        } catch (ie) {
                          te = true, ee = ie;
                        } finally {
                          try {
                            !Kt && jt.return && jt.return();
                          } finally {
                            if (te)
                              throw ee;
                          }
                        }
                      });
                    }
                    return tt;
                  }, rt = function(b) {
                    var $ = 0, Q = 0, Z = 0, at = 0;
                    if (b.forEach(function(j) {
                      j.left ? d[v.get(j.left)] - d[v.get(j.right)] >= 0 ? $++ : Q++ : N[v.get(j.top)] - N[v.get(j.bottom)] >= 0 ? Z++ : at++;
                    }), $ > Q && Z > at)
                      for (var ut = 0; ut < v.size; ut++)
                        d[ut] = -1 * d[ut], N[ut] = -1 * N[ut];
                    else if ($ > Q)
                      for (var ot = 0; ot < v.size; ot++)
                        d[ot] = -1 * d[ot];
                    else if (Z > at)
                      for (var tt = 0; tt < v.size; tt++)
                        N[tt] = -1 * N[tt];
                  }, n = function(b) {
                    var $ = [], Q = new g(), Z = /* @__PURE__ */ new Set(), at = 0;
                    return b.forEach(function(ut, ot) {
                      if (!Z.has(ot)) {
                        $[at] = [];
                        var tt = ot;
                        for (Q.push(tt), Z.add(tt), $[at].push(tt); Q.length != 0; ) {
                          tt = Q.shift();
                          var j = b.get(tt);
                          j.forEach(function(dt2) {
                            Z.has(dt2.id) || (Q.push(dt2.id), Z.add(dt2.id), $[at].push(dt2.id));
                          });
                        }
                        at++;
                      }
                    }), $;
                  }, m2 = function(b) {
                    var $ = /* @__PURE__ */ new Map();
                    return b.forEach(function(Q, Z) {
                      $.set(Z, []);
                    }), b.forEach(function(Q, Z) {
                      Q.forEach(function(at) {
                        $.get(Z).push(at), $.get(at.id).push({ id: Z, gap: at.gap, direction: at.direction });
                      });
                    }), $;
                  }, p2 = function(b) {
                    var $ = /* @__PURE__ */ new Map();
                    return b.forEach(function(Q, Z) {
                      $.set(Z, []);
                    }), b.forEach(function(Q, Z) {
                      Q.forEach(function(at) {
                        $.get(at.id).push({ id: Z, gap: at.gap, direction: at.direction });
                      });
                    }), $;
                  }, E = [], y = [], I = false, w = false, R = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), q = [];
                  if (h.fixedNodeConstraint && h.fixedNodeConstraint.forEach(function(F) {
                    R.add(F.nodeId);
                  }), h.relativePlacementConstraint && (h.relativePlacementConstraint.forEach(function(F) {
                    F.left ? (W.has(F.left) ? W.get(F.left).push({ id: F.right, gap: F.gap, direction: "horizontal" }) : W.set(F.left, [{ id: F.right, gap: F.gap, direction: "horizontal" }]), W.has(F.right) || W.set(F.right, [])) : (W.has(F.top) ? W.get(F.top).push({ id: F.bottom, gap: F.gap, direction: "vertical" }) : W.set(F.top, [{ id: F.bottom, gap: F.gap, direction: "vertical" }]), W.has(F.bottom) || W.set(F.bottom, []));
                  }), x = m2(W), q = n(x)), i.TRANSFORM_ON_CONSTRAINT_HANDLING) {
                    if (h.fixedNodeConstraint && h.fixedNodeConstraint.length > 1)
                      h.fixedNodeConstraint.forEach(function(F, b) {
                        E[b] = [F.position.x, F.position.y], y[b] = [d[v.get(F.nodeId)], N[v.get(F.nodeId)]];
                      }), I = true;
                    else if (h.alignmentConstraint)
                      (function() {
                        var F = 0;
                        if (h.alignmentConstraint.vertical) {
                          for (var b = h.alignmentConstraint.vertical, $ = function(tt) {
                            var j = /* @__PURE__ */ new Set();
                            b[tt].forEach(function(yt) {
                              j.add(yt);
                            });
                            var dt2 = new Set([].concat(f(j)).filter(function(yt) {
                              return R.has(yt);
                            })), wt = void 0;
                            dt2.size > 0 ? wt = d[v.get(dt2.values().next().value)] : wt = k(j).x, b[tt].forEach(function(yt) {
                              E[F] = [wt, N[v.get(yt)]], y[F] = [d[v.get(yt)], N[v.get(yt)]], F++;
                            });
                          }, Q = 0; Q < b.length; Q++)
                            $(Q);
                          I = true;
                        }
                        if (h.alignmentConstraint.horizontal) {
                          for (var Z = h.alignmentConstraint.horizontal, at = function(tt) {
                            var j = /* @__PURE__ */ new Set();
                            Z[tt].forEach(function(yt) {
                              j.add(yt);
                            });
                            var dt2 = new Set([].concat(f(j)).filter(function(yt) {
                              return R.has(yt);
                            })), wt = void 0;
                            dt2.size > 0 ? wt = d[v.get(dt2.values().next().value)] : wt = k(j).y, Z[tt].forEach(function(yt) {
                              E[F] = [d[v.get(yt)], wt], y[F] = [d[v.get(yt)], N[v.get(yt)]], F++;
                            });
                          }, ut = 0; ut < Z.length; ut++)
                            at(ut);
                          I = true;
                        }
                        h.relativePlacementConstraint && (w = true);
                      })();
                    else if (h.relativePlacementConstraint) {
                      for (var V = 0, Y = 0, et = 0; et < q.length; et++)
                        q[et].length > V && (V = q[et].length, Y = et);
                      if (V < x.size / 2)
                        rt(h.relativePlacementConstraint), I = false, w = false;
                      else {
                        var z = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), H = [];
                        q[Y].forEach(function(F) {
                          W.get(F).forEach(function(b) {
                            b.direction == "horizontal" ? (z.has(F) ? z.get(F).push(b) : z.set(F, [b]), z.has(b.id) || z.set(b.id, []), H.push({ left: F, right: b.id })) : (O.has(F) ? O.get(F).push(b) : O.set(F, [b]), O.has(b.id) || O.set(b.id, []), H.push({ top: F, bottom: b.id }));
                          });
                        }), rt(H), w = false;
                        var B = D2(z, "horizontal"), _ = D2(O, "vertical");
                        q[Y].forEach(function(F, b) {
                          y[b] = [d[v.get(F)], N[v.get(F)]], E[b] = [], B.has(F) ? E[b][0] = B.get(F) : E[b][0] = d[v.get(F)], _.has(F) ? E[b][1] = _.get(F) : E[b][1] = N[v.get(F)];
                        }), I = true;
                      }
                    }
                    if (I) {
                      for (var lt = void 0, J = t.transpose(E), Rt = t.transpose(y), Lt = 0; Lt < J.length; Lt++)
                        J[Lt] = t.multGamma(J[Lt]), Rt[Lt] = t.multGamma(Rt[Lt]);
                      var vt = t.multMat(J, t.transpose(Rt)), it = s.svd(vt);
                      lt = t.multMat(it.V, t.transpose(it.U));
                      for (var gt = 0; gt < v.size; gt++) {
                        var Tt = [d[gt], N[gt]], At = [lt[0][0], lt[1][0]], Dt = [lt[0][1], lt[1][1]];
                        d[gt] = t.dotProduct(Tt, At), N[gt] = t.dotProduct(Tt, Dt);
                      }
                      w && rt(h.relativePlacementConstraint);
                    }
                  }
                  if (i.ENFORCE_CONSTRAINTS) {
                    if (h.fixedNodeConstraint && h.fixedNodeConstraint.length > 0) {
                      var mt = { x: 0, y: 0 };
                      h.fixedNodeConstraint.forEach(function(F, b) {
                        var $ = { x: d[v.get(F.nodeId)], y: N[v.get(F.nodeId)] }, Q = F.position, Z = X(Q, $);
                        mt.x += Z.x, mt.y += Z.y;
                      }), mt.x /= h.fixedNodeConstraint.length, mt.y /= h.fixedNodeConstraint.length, d.forEach(function(F, b) {
                        d[b] += mt.x;
                      }), N.forEach(function(F, b) {
                        N[b] += mt.y;
                      }), h.fixedNodeConstraint.forEach(function(F) {
                        d[v.get(F.nodeId)] = F.position.x, N[v.get(F.nodeId)] = F.position.y;
                      });
                    }
                    if (h.alignmentConstraint) {
                      if (h.alignmentConstraint.vertical)
                        for (var xt = h.alignmentConstraint.vertical, St = function(b) {
                          var $ = /* @__PURE__ */ new Set();
                          xt[b].forEach(function(at) {
                            $.add(at);
                          });
                          var Q = new Set([].concat(f($)).filter(function(at) {
                            return R.has(at);
                          })), Z = void 0;
                          Q.size > 0 ? Z = d[v.get(Q.values().next().value)] : Z = k($).x, $.forEach(function(at) {
                            R.has(at) || (d[v.get(at)] = Z);
                          });
                        }, Vt = 0; Vt < xt.length; Vt++)
                          St(Vt);
                      if (h.alignmentConstraint.horizontal)
                        for (var Xt = h.alignmentConstraint.horizontal, Ut = function(b) {
                          var $ = /* @__PURE__ */ new Set();
                          Xt[b].forEach(function(at) {
                            $.add(at);
                          });
                          var Q = new Set([].concat(f($)).filter(function(at) {
                            return R.has(at);
                          })), Z = void 0;
                          Q.size > 0 ? Z = N[v.get(Q.values().next().value)] : Z = k($).y, $.forEach(function(at) {
                            R.has(at) || (N[v.get(at)] = Z);
                          });
                        }, bt = 0; bt < Xt.length; bt++)
                          Ut(bt);
                    }
                    h.relativePlacementConstraint && function() {
                      var F = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Set(), ot = /* @__PURE__ */ new Set();
                      if (R.forEach(function(Yt) {
                        ut.add(Yt), ot.add(Yt);
                      }), h.alignmentConstraint) {
                        if (h.alignmentConstraint.vertical)
                          for (var tt = h.alignmentConstraint.vertical, j = function(Et) {
                            $.set("dummy" + Et, []), tt[Et].forEach(function(Ot) {
                              F.set(Ot, "dummy" + Et), $.get("dummy" + Et).push(Ot), R.has(Ot) && ut.add("dummy" + Et);
                            }), Z.set("dummy" + Et, d[v.get(tt[Et][0])]);
                          }, dt2 = 0; dt2 < tt.length; dt2++)
                            j(dt2);
                        if (h.alignmentConstraint.horizontal)
                          for (var wt = h.alignmentConstraint.horizontal, yt = function(Et) {
                            Q.set("dummy" + Et, []), wt[Et].forEach(function(Ot) {
                              b.set(Ot, "dummy" + Et), Q.get("dummy" + Et).push(Ot), R.has(Ot) && ot.add("dummy" + Et);
                            }), at.set("dummy" + Et, N[v.get(wt[Et][0])]);
                          }, It = 0; It < wt.length; It++)
                            yt(It);
                      }
                      var ft = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), Ct = function(Et) {
                        W.get(Et).forEach(function(Ot) {
                          var Jt2 = void 0, kt = void 0;
                          Ot.direction == "horizontal" ? (Jt2 = F.get(Et) ? F.get(Et) : Et, F.get(Ot.id) ? kt = { id: F.get(Ot.id), gap: Ot.gap, direction: Ot.direction } : kt = Ot, ft.has(Jt2) ? ft.get(Jt2).push(kt) : ft.set(Jt2, [kt]), ft.has(kt.id) || ft.set(kt.id, [])) : (Jt2 = b.get(Et) ? b.get(Et) : Et, b.get(Ot.id) ? kt = { id: b.get(Ot.id), gap: Ot.gap, direction: Ot.direction } : kt = Ot, st.has(Jt2) ? st.get(Jt2).push(kt) : st.set(Jt2, [kt]), st.has(kt.id) || st.set(kt.id, []));
                        });
                      }, ct = true, ht = false, Wt = void 0;
                      try {
                        for (var Nt = W.keys()[Symbol.iterator](), Mt; !(ct = (Mt = Nt.next()).done); ct = true) {
                          var Zt = Mt.value;
                          Ct(Zt);
                        }
                      } catch (Yt) {
                        ht = true, Wt = Yt;
                      } finally {
                        try {
                          !ct && Nt.return && Nt.return();
                        } finally {
                          if (ht)
                            throw Wt;
                        }
                      }
                      var Gt = m2(ft), $t = m2(st), Ft = n(Gt), qt = n($t), _t = p2(ft), de = p2(st), Kt = [], te = [];
                      Ft.forEach(function(Yt, Et) {
                        Kt[Et] = [], Yt.forEach(function(Ot) {
                          _t.get(Ot).length == 0 && Kt[Et].push(Ot);
                        });
                      }), qt.forEach(function(Yt, Et) {
                        te[Et] = [], Yt.forEach(function(Ot) {
                          de.get(Ot).length == 0 && te[Et].push(Ot);
                        });
                      });
                      var ee = D2(ft, "horizontal", ut, Z, Kt), jt = D2(st, "vertical", ot, at, te), se = function(Et) {
                        $.get(Et) ? $.get(Et).forEach(function(Ot) {
                          d[v.get(Ot)] = ee.get(Et);
                        }) : d[v.get(Et)] = ee.get(Et);
                      }, re = true, ie = false, Me = void 0;
                      try {
                        for (var ve = ee.keys()[Symbol.iterator](), Ae; !(re = (Ae = ve.next()).done); re = true) {
                          var pe = Ae.value;
                          se(pe);
                        }
                      } catch (Yt) {
                        ie = true, Me = Yt;
                      } finally {
                        try {
                          !re && ve.return && ve.return();
                        } finally {
                          if (ie)
                            throw Me;
                        }
                      }
                      var ke = function(Et) {
                        Q.get(Et) ? Q.get(Et).forEach(function(Ot) {
                          N[v.get(Ot)] = jt.get(Et);
                        }) : N[v.get(Et)] = jt.get(Et);
                      }, ye = true, we = false, Oe = void 0;
                      try {
                        for (var Ee = jt.keys()[Symbol.iterator](), De; !(ye = (De = Ee.next()).done); ye = true) {
                          var pe = De.value;
                          ke(pe);
                        }
                      } catch (Yt) {
                        we = true, Oe = Yt;
                      } finally {
                        try {
                          !ye && Ee.return && Ee.return();
                        } finally {
                          if (we)
                            throw Oe;
                        }
                      }
                    }();
                  }
                  for (var Ht = 0; Ht < S.length; Ht++) {
                    var Bt = S[Ht];
                    Bt.getChild() == null && Bt.setCenter(d[v.get(Bt.id)], N[v.get(Bt.id)]);
                  }
                }, a.exports = o;
              }
            ),
            /***/
            551: (
              /***/
              (a) => {
                a.exports = A;
              }
            )
            /******/
          }, L = {};
          function u(a) {
            var r = L[a];
            if (r !== void 0)
              return r.exports;
            var e2 = L[a] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return G[a](e2, e2.exports, u), e2.exports;
          }
          var l = u(45);
          return l;
        })()
      );
    });
  }(fe)), fe.exports;
}
var vr = le.exports, Re;
function pr() {
  return Re || (Re = 1, function(C, U) {
    (function(G, L) {
      C.exports = L(dr());
    })(vr, function(A) {
      return (
        /******/
        (() => {
          var G = {
            /***/
            658: (
              /***/
              (a) => {
                a.exports = Object.assign != null ? Object.assign.bind(Object) : function(r) {
                  for (var e2 = arguments.length, f = Array(e2 > 1 ? e2 - 1 : 0), i = 1; i < e2; i++)
                    f[i - 1] = arguments[i];
                  return f.forEach(function(g) {
                    Object.keys(g).forEach(function(t) {
                      return r[t] = g[t];
                    });
                  }), r;
                };
              }
            ),
            /***/
            548: (
              /***/
              (a, r, e2) => {
                var f = /* @__PURE__ */ function() {
                  function t(s, o) {
                    var c = [], h = true, T = false, v = void 0;
                    try {
                      for (var d = s[Symbol.iterator](), N; !(h = (N = d.next()).done) && (c.push(N.value), !(o && c.length === o)); h = true)
                        ;
                    } catch (S) {
                      T = true, v = S;
                    } finally {
                      try {
                        !h && d.return && d.return();
                      } finally {
                        if (T)
                          throw v;
                      }
                    }
                    return c;
                  }
                  return function(s, o) {
                    if (Array.isArray(s))
                      return s;
                    if (Symbol.iterator in Object(s))
                      return t(s, o);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                  };
                }(), i = e2(140).layoutBase.LinkedList, g = {};
                g.getTopMostNodes = function(t) {
                  for (var s = {}, o = 0; o < t.length; o++)
                    s[t[o].id()] = true;
                  var c = t.filter(function(h, T) {
                    typeof h == "number" && (h = T);
                    for (var v = h.parent()[0]; v != null; ) {
                      if (s[v.id()])
                        return false;
                      v = v.parent()[0];
                    }
                    return true;
                  });
                  return c;
                }, g.connectComponents = function(t, s, o, c) {
                  var h = new i(), T = /* @__PURE__ */ new Set(), v = [], d = void 0, N = void 0, S = void 0, M = false, P = 1, K = [], X = [], k = function() {
                    var rt = t.collection();
                    X.push(rt);
                    var n = o[0], m2 = t.collection();
                    m2.merge(n).merge(n.descendants().intersection(s)), v.push(n), m2.forEach(function(y) {
                      h.push(y), T.add(y), rt.merge(y);
                    });
                    for (var p2 = function() {
                      n = h.shift();
                      var I = t.collection();
                      n.neighborhood().nodes().forEach(function(x) {
                        s.intersection(n.edgesWith(x)).length > 0 && I.merge(x);
                      });
                      for (var w = 0; w < I.length; w++) {
                        var R = I[w];
                        if (d = o.intersection(R.union(R.ancestors())), d != null && !T.has(d[0])) {
                          var W = d.union(d.descendants());
                          W.forEach(function(x) {
                            h.push(x), T.add(x), rt.merge(x), o.has(x) && v.push(x);
                          });
                        }
                      }
                    }; h.length != 0; )
                      p2();
                    if (rt.forEach(function(y) {
                      s.intersection(y.connectedEdges()).forEach(function(I) {
                        rt.has(I.source()) && rt.has(I.target()) && rt.merge(I);
                      });
                    }), v.length == o.length && (M = true), !M || M && P > 1) {
                      N = v[0], S = N.connectedEdges().length, v.forEach(function(y) {
                        y.connectedEdges().length < S && (S = y.connectedEdges().length, N = y);
                      }), K.push(N.id());
                      var E = t.collection();
                      E.merge(v[0]), v.forEach(function(y) {
                        E.merge(y);
                      }), v = [], o = o.difference(E), P++;
                    }
                  };
                  do
                    k();
                  while (!M);
                  return c && K.length > 0 && c.set("dummy" + (c.size + 1), K), X;
                }, g.relocateComponent = function(t, s, o) {
                  if (!o.fixedNodeConstraint) {
                    var c = Number.POSITIVE_INFINITY, h = Number.NEGATIVE_INFINITY, T = Number.POSITIVE_INFINITY, v = Number.NEGATIVE_INFINITY;
                    if (o.quality == "draft") {
                      var d = true, N = false, S = void 0;
                      try {
                        for (var M = s.nodeIndexes[Symbol.iterator](), P; !(d = (P = M.next()).done); d = true) {
                          var K = P.value, X = f(K, 2), k = X[0], D2 = X[1], rt = o.cy.getElementById(k);
                          if (rt) {
                            var n = rt.boundingBox(), m2 = s.xCoords[D2] - n.w / 2, p2 = s.xCoords[D2] + n.w / 2, E = s.yCoords[D2] - n.h / 2, y = s.yCoords[D2] + n.h / 2;
                            m2 < c && (c = m2), p2 > h && (h = p2), E < T && (T = E), y > v && (v = y);
                          }
                        }
                      } catch (x) {
                        N = true, S = x;
                      } finally {
                        try {
                          !d && M.return && M.return();
                        } finally {
                          if (N)
                            throw S;
                        }
                      }
                      var I = t.x - (h + c) / 2, w = t.y - (v + T) / 2;
                      s.xCoords = s.xCoords.map(function(x) {
                        return x + I;
                      }), s.yCoords = s.yCoords.map(function(x) {
                        return x + w;
                      });
                    } else {
                      Object.keys(s).forEach(function(x) {
                        var q = s[x], V = q.getRect().x, Y = q.getRect().x + q.getRect().width, et = q.getRect().y, z = q.getRect().y + q.getRect().height;
                        V < c && (c = V), Y > h && (h = Y), et < T && (T = et), z > v && (v = z);
                      });
                      var R = t.x - (h + c) / 2, W = t.y - (v + T) / 2;
                      Object.keys(s).forEach(function(x) {
                        var q = s[x];
                        q.setCenter(q.getCenterX() + R, q.getCenterY() + W);
                      });
                    }
                  }
                }, g.calcBoundingBox = function(t, s, o, c) {
                  for (var h = Number.MAX_SAFE_INTEGER, T = Number.MIN_SAFE_INTEGER, v = Number.MAX_SAFE_INTEGER, d = Number.MIN_SAFE_INTEGER, N = void 0, S = void 0, M = void 0, P = void 0, K = t.descendants().not(":parent"), X = K.length, k = 0; k < X; k++) {
                    var D2 = K[k];
                    N = s[c.get(D2.id())] - D2.width() / 2, S = s[c.get(D2.id())] + D2.width() / 2, M = o[c.get(D2.id())] - D2.height() / 2, P = o[c.get(D2.id())] + D2.height() / 2, h > N && (h = N), T < S && (T = S), v > M && (v = M), d < P && (d = P);
                  }
                  var rt = {};
                  return rt.topLeftX = h, rt.topLeftY = v, rt.width = T - h, rt.height = d - v, rt;
                }, g.calcParentsWithoutChildren = function(t, s) {
                  var o = t.collection();
                  return s.nodes(":parent").forEach(function(c) {
                    var h = false;
                    c.children().forEach(function(T) {
                      T.css("display") != "none" && (h = true);
                    }), h || o.merge(c);
                  }), o;
                }, a.exports = g;
              }
            ),
            /***/
            816: (
              /***/
              (a, r, e2) => {
                var f = e2(548), i = e2(140).CoSELayout, g = e2(140).CoSENode, t = e2(140).layoutBase.PointD, s = e2(140).layoutBase.DimensionD, o = e2(140).layoutBase.LayoutConstants, c = e2(140).layoutBase.FDLayoutConstants, h = e2(140).CoSEConstants, T = function(d, N) {
                  var S = d.cy, M = d.eles, P = M.nodes(), K = M.edges(), X = void 0, k = void 0, D2 = void 0, rt = {};
                  d.randomize && (X = N.nodeIndexes, k = N.xCoords, D2 = N.yCoords);
                  var n = function(x) {
                    return typeof x == "function";
                  }, m2 = function(x, q) {
                    return n(x) ? x(q) : x;
                  }, p2 = f.calcParentsWithoutChildren(S, M), E = function W(x, q, V, Y) {
                    for (var et = q.length, z = 0; z < et; z++) {
                      var O = q[z], H = null;
                      O.intersection(p2).length == 0 && (H = O.children());
                      var B = void 0, _ = O.layoutDimensions({
                        nodeDimensionsIncludeLabels: Y.nodeDimensionsIncludeLabels
                      });
                      if (O.outerWidth() != null && O.outerHeight() != null)
                        if (Y.randomize)
                          if (!O.isParent())
                            B = x.add(new g(V.graphManager, new t(k[X.get(O.id())] - _.w / 2, D2[X.get(O.id())] - _.h / 2), new s(parseFloat(_.w), parseFloat(_.h))));
                          else {
                            var lt = f.calcBoundingBox(O, k, D2, X);
                            O.intersection(p2).length == 0 ? B = x.add(new g(V.graphManager, new t(lt.topLeftX, lt.topLeftY), new s(lt.width, lt.height))) : B = x.add(new g(V.graphManager, new t(lt.topLeftX, lt.topLeftY), new s(parseFloat(_.w), parseFloat(_.h))));
                          }
                        else
                          B = x.add(new g(V.graphManager, new t(O.position("x") - _.w / 2, O.position("y") - _.h / 2), new s(parseFloat(_.w), parseFloat(_.h))));
                      else
                        B = x.add(new g(this.graphManager));
                      if (B.id = O.data("id"), B.nodeRepulsion = m2(Y.nodeRepulsion, O), B.paddingLeft = parseInt(O.css("padding")), B.paddingTop = parseInt(O.css("padding")), B.paddingRight = parseInt(O.css("padding")), B.paddingBottom = parseInt(O.css("padding")), Y.nodeDimensionsIncludeLabels && (B.labelWidth = O.boundingBox({ includeLabels: true, includeNodes: false, includeOverlays: false }).w, B.labelHeight = O.boundingBox({ includeLabels: true, includeNodes: false, includeOverlays: false }).h, B.labelPosVertical = O.css("text-valign"), B.labelPosHorizontal = O.css("text-halign")), rt[O.data("id")] = B, isNaN(B.rect.x) && (B.rect.x = 0), isNaN(B.rect.y) && (B.rect.y = 0), H != null && H.length > 0) {
                        var J = void 0;
                        J = V.getGraphManager().add(V.newGraph(), B), W(J, H, V, Y);
                      }
                    }
                  }, y = function(x, q, V) {
                    for (var Y = 0, et = 0, z = 0; z < V.length; z++) {
                      var O = V[z], H = rt[O.data("source")], B = rt[O.data("target")];
                      if (H && B && H !== B && H.getEdgesBetween(B).length == 0) {
                        var _ = q.add(x.newEdge(), H, B);
                        _.id = O.id(), _.idealLength = m2(d.idealEdgeLength, O), _.edgeElasticity = m2(d.edgeElasticity, O), Y += _.idealLength, et++;
                      }
                    }
                    d.idealEdgeLength != null && (et > 0 ? h.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = Y / et : n(d.idealEdgeLength) ? h.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = 50 : h.DEFAULT_EDGE_LENGTH = c.DEFAULT_EDGE_LENGTH = d.idealEdgeLength, h.MIN_REPULSION_DIST = c.MIN_REPULSION_DIST = c.DEFAULT_EDGE_LENGTH / 10, h.DEFAULT_RADIAL_SEPARATION = c.DEFAULT_EDGE_LENGTH);
                  }, I = function(x, q) {
                    q.fixedNodeConstraint && (x.constraints.fixedNodeConstraint = q.fixedNodeConstraint), q.alignmentConstraint && (x.constraints.alignmentConstraint = q.alignmentConstraint), q.relativePlacementConstraint && (x.constraints.relativePlacementConstraint = q.relativePlacementConstraint);
                  };
                  d.nestingFactor != null && (h.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = c.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = d.nestingFactor), d.gravity != null && (h.DEFAULT_GRAVITY_STRENGTH = c.DEFAULT_GRAVITY_STRENGTH = d.gravity), d.numIter != null && (h.MAX_ITERATIONS = c.MAX_ITERATIONS = d.numIter), d.gravityRange != null && (h.DEFAULT_GRAVITY_RANGE_FACTOR = c.DEFAULT_GRAVITY_RANGE_FACTOR = d.gravityRange), d.gravityCompound != null && (h.DEFAULT_COMPOUND_GRAVITY_STRENGTH = c.DEFAULT_COMPOUND_GRAVITY_STRENGTH = d.gravityCompound), d.gravityRangeCompound != null && (h.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = c.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = d.gravityRangeCompound), d.initialEnergyOnIncremental != null && (h.DEFAULT_COOLING_FACTOR_INCREMENTAL = c.DEFAULT_COOLING_FACTOR_INCREMENTAL = d.initialEnergyOnIncremental), d.tilingCompareBy != null && (h.TILING_COMPARE_BY = d.tilingCompareBy), d.quality == "proof" ? o.QUALITY = 2 : o.QUALITY = 0, h.NODE_DIMENSIONS_INCLUDE_LABELS = c.NODE_DIMENSIONS_INCLUDE_LABELS = o.NODE_DIMENSIONS_INCLUDE_LABELS = d.nodeDimensionsIncludeLabels, h.DEFAULT_INCREMENTAL = c.DEFAULT_INCREMENTAL = o.DEFAULT_INCREMENTAL = !d.randomize, h.ANIMATE = c.ANIMATE = o.ANIMATE = d.animate, h.TILE = d.tile, h.TILING_PADDING_VERTICAL = typeof d.tilingPaddingVertical == "function" ? d.tilingPaddingVertical.call() : d.tilingPaddingVertical, h.TILING_PADDING_HORIZONTAL = typeof d.tilingPaddingHorizontal == "function" ? d.tilingPaddingHorizontal.call() : d.tilingPaddingHorizontal, h.DEFAULT_INCREMENTAL = c.DEFAULT_INCREMENTAL = o.DEFAULT_INCREMENTAL = true, h.PURE_INCREMENTAL = !d.randomize, o.DEFAULT_UNIFORM_LEAF_NODE_SIZES = d.uniformNodeDimensions, d.step == "transformed" && (h.TRANSFORM_ON_CONSTRAINT_HANDLING = true, h.ENFORCE_CONSTRAINTS = false, h.APPLY_LAYOUT = false), d.step == "enforced" && (h.TRANSFORM_ON_CONSTRAINT_HANDLING = false, h.ENFORCE_CONSTRAINTS = true, h.APPLY_LAYOUT = false), d.step == "cose" && (h.TRANSFORM_ON_CONSTRAINT_HANDLING = false, h.ENFORCE_CONSTRAINTS = false, h.APPLY_LAYOUT = true), d.step == "all" && (d.randomize ? h.TRANSFORM_ON_CONSTRAINT_HANDLING = true : h.TRANSFORM_ON_CONSTRAINT_HANDLING = false, h.ENFORCE_CONSTRAINTS = true, h.APPLY_LAYOUT = true), d.fixedNodeConstraint || d.alignmentConstraint || d.relativePlacementConstraint ? h.TREE_REDUCTION_ON_INCREMENTAL = false : h.TREE_REDUCTION_ON_INCREMENTAL = true;
                  var w = new i(), R = w.newGraphManager();
                  return E(R.addRoot(), f.getTopMostNodes(P), w, d), y(w, R, K), I(w, d), w.runLayout(), rt;
                };
                a.exports = { coseLayout: T };
              }
            ),
            /***/
            212: (
              /***/
              (a, r, e2) => {
                var f = /* @__PURE__ */ function() {
                  function d(N, S) {
                    for (var M = 0; M < S.length; M++) {
                      var P = S[M];
                      P.enumerable = P.enumerable || false, P.configurable = true, "value" in P && (P.writable = true), Object.defineProperty(N, P.key, P);
                    }
                  }
                  return function(N, S, M) {
                    return S && d(N.prototype, S), M && d(N, M), N;
                  };
                }();
                function i(d, N) {
                  if (!(d instanceof N))
                    throw new TypeError("Cannot call a class as a function");
                }
                var g = e2(658), t = e2(548), s = e2(657), o = s.spectralLayout, c = e2(816), h = c.coseLayout, T = Object.freeze({
                  // 'draft', 'default' or 'proof' 
                  // - 'draft' only applies spectral layout 
                  // - 'default' improves the quality with subsequent CoSE layout (fast cooling rate)
                  // - 'proof' improves the quality with subsequent CoSE layout (slow cooling rate) 
                  quality: "default",
                  // Use random node positions at beginning of layout
                  // if this is set to false, then quality option must be "proof"
                  randomize: true,
                  // Whether or not to animate the layout
                  animate: true,
                  // Duration of animation in ms, if enabled
                  animationDuration: 1e3,
                  // Easing of animation, if enabled
                  animationEasing: void 0,
                  // Fit the viewport to the repositioned nodes
                  fit: true,
                  // Padding around layout
                  padding: 30,
                  // Whether to include labels in node dimensions. Valid in "proof" quality
                  nodeDimensionsIncludeLabels: false,
                  // Whether or not simple nodes (non-compound nodes) are of uniform dimensions
                  uniformNodeDimensions: false,
                  // Whether to pack disconnected components - valid only if randomize: true
                  packComponents: true,
                  // Layout step - all, transformed, enforced, cose - for debug purpose only
                  step: "all",
                  /* spectral layout options */
                  // False for random, true for greedy
                  samplingType: true,
                  // Sample size to construct distance matrix
                  sampleSize: 25,
                  // Separation amount between nodes
                  nodeSeparation: 75,
                  // Power iteration tolerance
                  piTol: 1e-7,
                  /* CoSE layout options */
                  // Node repulsion (non overlapping) multiplier
                  nodeRepulsion: function(N) {
                    return 4500;
                  },
                  // Ideal edge (non nested) length
                  idealEdgeLength: function(N) {
                    return 50;
                  },
                  // Divisor to compute edge forces
                  edgeElasticity: function(N) {
                    return 0.45;
                  },
                  // Nesting factor (multiplier) to compute ideal edge length for nested edges
                  nestingFactor: 0.1,
                  // Gravity force (constant)
                  gravity: 0.25,
                  // Maximum number of iterations to perform
                  numIter: 2500,
                  // For enabling tiling
                  tile: true,
                  // The function that specifies the criteria for comparing nodes while sorting them during tiling operation.
                  // Takes the node id as a parameter and the default tiling operation is perfomed when this option is not set.
                  tilingCompareBy: void 0,
                  // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
                  tilingPaddingVertical: 10,
                  // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
                  tilingPaddingHorizontal: 10,
                  // Gravity range (constant) for compounds
                  gravityRangeCompound: 1.5,
                  // Gravity force (constant) for compounds
                  gravityCompound: 1,
                  // Gravity range (constant)
                  gravityRange: 3.8,
                  // Initial cooling factor for incremental layout  
                  initialEnergyOnIncremental: 0.3,
                  /* constraint options */
                  // Fix required nodes to predefined positions
                  // [{nodeId: 'n1', position: {x: 100, y: 200}, {...}]
                  fixedNodeConstraint: void 0,
                  // Align required nodes in vertical/horizontal direction
                  // {vertical: [['n1', 'n2')], ['n3', 'n4']], horizontal: ['n2', 'n4']}
                  alignmentConstraint: void 0,
                  // Place two nodes relatively in vertical/horizontal direction 
                  // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}]
                  relativePlacementConstraint: void 0,
                  /* layout event callbacks */
                  ready: function() {
                  },
                  // on layoutready
                  stop: function() {
                  }
                  // on layoutstop
                }), v = function() {
                  function d(N) {
                    i(this, d), this.options = g({}, T, N);
                  }
                  return f(d, [{
                    key: "run",
                    value: function() {
                      var S = this, M = this.options, P = M.cy, K = M.eles, X = [], k = [], D2 = void 0, rt = [];
                      M.fixedNodeConstraint && (!Array.isArray(M.fixedNodeConstraint) || M.fixedNodeConstraint.length == 0) && (M.fixedNodeConstraint = void 0), M.alignmentConstraint && (M.alignmentConstraint.vertical && (!Array.isArray(M.alignmentConstraint.vertical) || M.alignmentConstraint.vertical.length == 0) && (M.alignmentConstraint.vertical = void 0), M.alignmentConstraint.horizontal && (!Array.isArray(M.alignmentConstraint.horizontal) || M.alignmentConstraint.horizontal.length == 0) && (M.alignmentConstraint.horizontal = void 0)), M.relativePlacementConstraint && (!Array.isArray(M.relativePlacementConstraint) || M.relativePlacementConstraint.length == 0) && (M.relativePlacementConstraint = void 0);
                      var n = M.fixedNodeConstraint || M.alignmentConstraint || M.relativePlacementConstraint;
                      n && (M.tile = false, M.packComponents = false);
                      var m2 = void 0, p2 = false;
                      if (P.layoutUtilities && M.packComponents && (m2 = P.layoutUtilities("get"), m2 || (m2 = P.layoutUtilities()), p2 = true), K.nodes().length > 0)
                        if (p2) {
                          var I = t.getTopMostNodes(M.eles.nodes());
                          if (D2 = t.connectComponents(P, M.eles, I), D2.forEach(function(vt) {
                            var it = vt.boundingBox();
                            rt.push({ x: it.x1 + it.w / 2, y: it.y1 + it.h / 2 });
                          }), M.randomize && D2.forEach(function(vt) {
                            M.eles = vt, X.push(o(M));
                          }), M.quality == "default" || M.quality == "proof") {
                            var w = P.collection();
                            if (M.tile) {
                              var R = /* @__PURE__ */ new Map(), W = [], x = [], q = 0, V = { nodeIndexes: R, xCoords: W, yCoords: x }, Y = [];
                              if (D2.forEach(function(vt, it) {
                                vt.edges().length == 0 && (vt.nodes().forEach(function(gt, Tt) {
                                  w.merge(vt.nodes()[Tt]), gt.isParent() || (V.nodeIndexes.set(vt.nodes()[Tt].id(), q++), V.xCoords.push(vt.nodes()[0].position().x), V.yCoords.push(vt.nodes()[0].position().y));
                                }), Y.push(it));
                              }), w.length > 1) {
                                var et = w.boundingBox();
                                rt.push({ x: et.x1 + et.w / 2, y: et.y1 + et.h / 2 }), D2.push(w), X.push(V);
                                for (var z = Y.length - 1; z >= 0; z--)
                                  D2.splice(Y[z], 1), X.splice(Y[z], 1), rt.splice(Y[z], 1);
                              }
                            }
                            D2.forEach(function(vt, it) {
                              M.eles = vt, k.push(h(M, X[it])), t.relocateComponent(rt[it], k[it], M);
                            });
                          } else
                            D2.forEach(function(vt, it) {
                              t.relocateComponent(rt[it], X[it], M);
                            });
                          var O = /* @__PURE__ */ new Set();
                          if (D2.length > 1) {
                            var H = [], B = K.filter(function(vt) {
                              return vt.css("display") == "none";
                            });
                            D2.forEach(function(vt, it) {
                              var gt = void 0;
                              if (M.quality == "draft" && (gt = X[it].nodeIndexes), vt.nodes().not(B).length > 0) {
                                var Tt = {};
                                Tt.edges = [], Tt.nodes = [];
                                var At = void 0;
                                vt.nodes().not(B).forEach(function(Dt) {
                                  if (M.quality == "draft")
                                    if (!Dt.isParent())
                                      At = gt.get(Dt.id()), Tt.nodes.push({ x: X[it].xCoords[At] - Dt.boundingbox().w / 2, y: X[it].yCoords[At] - Dt.boundingbox().h / 2, width: Dt.boundingbox().w, height: Dt.boundingbox().h });
                                    else {
                                      var mt = t.calcBoundingBox(Dt, X[it].xCoords, X[it].yCoords, gt);
                                      Tt.nodes.push({ x: mt.topLeftX, y: mt.topLeftY, width: mt.width, height: mt.height });
                                    }
                                  else
                                    k[it][Dt.id()] && Tt.nodes.push({ x: k[it][Dt.id()].getLeft(), y: k[it][Dt.id()].getTop(), width: k[it][Dt.id()].getWidth(), height: k[it][Dt.id()].getHeight() });
                                }), vt.edges().forEach(function(Dt) {
                                  var mt = Dt.source(), xt = Dt.target();
                                  if (mt.css("display") != "none" && xt.css("display") != "none")
                                    if (M.quality == "draft") {
                                      var St = gt.get(mt.id()), Vt = gt.get(xt.id()), Xt = [], Ut = [];
                                      if (mt.isParent()) {
                                        var bt = t.calcBoundingBox(mt, X[it].xCoords, X[it].yCoords, gt);
                                        Xt.push(bt.topLeftX + bt.width / 2), Xt.push(bt.topLeftY + bt.height / 2);
                                      } else
                                        Xt.push(X[it].xCoords[St]), Xt.push(X[it].yCoords[St]);
                                      if (xt.isParent()) {
                                        var Ht = t.calcBoundingBox(xt, X[it].xCoords, X[it].yCoords, gt);
                                        Ut.push(Ht.topLeftX + Ht.width / 2), Ut.push(Ht.topLeftY + Ht.height / 2);
                                      } else
                                        Ut.push(X[it].xCoords[Vt]), Ut.push(X[it].yCoords[Vt]);
                                      Tt.edges.push({ startX: Xt[0], startY: Xt[1], endX: Ut[0], endY: Ut[1] });
                                    } else
                                      k[it][mt.id()] && k[it][xt.id()] && Tt.edges.push({ startX: k[it][mt.id()].getCenterX(), startY: k[it][mt.id()].getCenterY(), endX: k[it][xt.id()].getCenterX(), endY: k[it][xt.id()].getCenterY() });
                                }), Tt.nodes.length > 0 && (H.push(Tt), O.add(it));
                              }
                            });
                            var _ = m2.packComponents(H, M.randomize).shifts;
                            if (M.quality == "draft")
                              X.forEach(function(vt, it) {
                                var gt = vt.xCoords.map(function(At) {
                                  return At + _[it].dx;
                                }), Tt = vt.yCoords.map(function(At) {
                                  return At + _[it].dy;
                                });
                                vt.xCoords = gt, vt.yCoords = Tt;
                              });
                            else {
                              var lt = 0;
                              O.forEach(function(vt) {
                                Object.keys(k[vt]).forEach(function(it) {
                                  var gt = k[vt][it];
                                  gt.setCenter(gt.getCenterX() + _[lt].dx, gt.getCenterY() + _[lt].dy);
                                }), lt++;
                              });
                            }
                          }
                        } else {
                          var E = M.eles.boundingBox();
                          if (rt.push({ x: E.x1 + E.w / 2, y: E.y1 + E.h / 2 }), M.randomize) {
                            var y = o(M);
                            X.push(y);
                          }
                          M.quality == "default" || M.quality == "proof" ? (k.push(h(M, X[0])), t.relocateComponent(rt[0], k[0], M)) : t.relocateComponent(rt[0], X[0], M);
                        }
                      var J = function(it, gt) {
                        if (M.quality == "default" || M.quality == "proof") {
                          typeof it == "number" && (it = gt);
                          var Tt = void 0, At = void 0, Dt = it.data("id");
                          return k.forEach(function(xt) {
                            Dt in xt && (Tt = { x: xt[Dt].getRect().getCenterX(), y: xt[Dt].getRect().getCenterY() }, At = xt[Dt]);
                          }), M.nodeDimensionsIncludeLabels && (At.labelWidth && (At.labelPosHorizontal == "left" ? Tt.x += At.labelWidth / 2 : At.labelPosHorizontal == "right" && (Tt.x -= At.labelWidth / 2)), At.labelHeight && (At.labelPosVertical == "top" ? Tt.y += At.labelHeight / 2 : At.labelPosVertical == "bottom" && (Tt.y -= At.labelHeight / 2))), Tt == null && (Tt = { x: it.position("x"), y: it.position("y") }), {
                            x: Tt.x,
                            y: Tt.y
                          };
                        } else {
                          var mt = void 0;
                          return X.forEach(function(xt) {
                            var St = xt.nodeIndexes.get(it.id());
                            St != null && (mt = { x: xt.xCoords[St], y: xt.yCoords[St] });
                          }), mt == null && (mt = { x: it.position("x"), y: it.position("y") }), {
                            x: mt.x,
                            y: mt.y
                          };
                        }
                      };
                      if (M.quality == "default" || M.quality == "proof" || M.randomize) {
                        var Rt = t.calcParentsWithoutChildren(P, K), Lt = K.filter(function(vt) {
                          return vt.css("display") == "none";
                        });
                        M.eles = K.not(Lt), K.nodes().not(":parent").not(Lt).layoutPositions(S, M, J), Rt.length > 0 && Rt.forEach(function(vt) {
                          vt.position(J(vt));
                        });
                      } else
                        console.log("If randomize option is set to false, then quality option must be 'default' or 'proof'.");
                    }
                  }]), d;
                }();
                a.exports = v;
              }
            ),
            /***/
            657: (
              /***/
              (a, r, e2) => {
                var f = e2(548), i = e2(140).layoutBase.Matrix, g = e2(140).layoutBase.SVD, t = function(o) {
                  var c = o.cy, h = o.eles, T = h.nodes(), v = h.nodes(":parent"), d = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), M = [], P = [], K = [], X = [], k = [], D2 = [], rt = [], n = [], m2 = void 0, p2 = 1e8, E = 1e-9, y = o.piTol, I = o.samplingType, w = o.nodeSeparation, R = void 0, W = function() {
                    for (var b = 0, $ = 0, Q = false; $ < R; ) {
                      b = Math.floor(Math.random() * m2), Q = false;
                      for (var Z = 0; Z < $; Z++)
                        if (X[Z] == b) {
                          Q = true;
                          break;
                        }
                      if (!Q)
                        X[$] = b, $++;
                      else
                        continue;
                    }
                  }, x = function(b, $, Q) {
                    for (var Z = [], at = 0, ut = 0, ot = 0, tt = void 0, j = [], dt2 = 0, wt = 1, yt = 0; yt < m2; yt++)
                      j[yt] = p2;
                    for (Z[ut] = b, j[b] = 0; ut >= at; ) {
                      ot = Z[at++];
                      for (var It = M[ot], ft = 0; ft < It.length; ft++)
                        tt = N.get(It[ft]), j[tt] == p2 && (j[tt] = j[ot] + 1, Z[++ut] = tt);
                      D2[ot][$] = j[ot] * w;
                    }
                    if (Q) {
                      for (var st = 0; st < m2; st++)
                        D2[st][$] < k[st] && (k[st] = D2[st][$]);
                      for (var Ct = 0; Ct < m2; Ct++)
                        k[Ct] > dt2 && (dt2 = k[Ct], wt = Ct);
                    }
                    return wt;
                  }, q = function(b) {
                    var $ = void 0;
                    if (b) {
                      $ = Math.floor(Math.random() * m2);
                      for (var Z = 0; Z < m2; Z++)
                        k[Z] = p2;
                      for (var at = 0; at < R; at++)
                        X[at] = $, $ = x($, at, b);
                    } else {
                      W();
                      for (var Q = 0; Q < R; Q++)
                        x(X[Q], Q, b);
                    }
                    for (var ut = 0; ut < m2; ut++)
                      for (var ot = 0; ot < R; ot++)
                        D2[ut][ot] *= D2[ut][ot];
                    for (var tt = 0; tt < R; tt++)
                      rt[tt] = [];
                    for (var j = 0; j < R; j++)
                      for (var dt2 = 0; dt2 < R; dt2++)
                        rt[j][dt2] = D2[X[dt2]][j];
                  }, V = function() {
                    for (var b = g.svd(rt), $ = b.S, Q = b.U, Z = b.V, at = $[0] * $[0] * $[0], ut = [], ot = 0; ot < R; ot++) {
                      ut[ot] = [];
                      for (var tt = 0; tt < R; tt++)
                        ut[ot][tt] = 0, ot == tt && (ut[ot][tt] = $[ot] / ($[ot] * $[ot] + at / ($[ot] * $[ot])));
                    }
                    n = i.multMat(i.multMat(Z, ut), i.transpose(Q));
                  }, Y = function() {
                    for (var b = void 0, $ = void 0, Q = [], Z = [], at = [], ut = [], ot = 0; ot < m2; ot++)
                      Q[ot] = Math.random(), Z[ot] = Math.random();
                    Q = i.normalize(Q), Z = i.normalize(Z);
                    for (var tt = E, j = E, dt2 = void 0; ; ) {
                      for (var wt = 0; wt < m2; wt++)
                        at[wt] = Q[wt];
                      if (Q = i.multGamma(i.multL(i.multGamma(at), D2, n)), b = i.dotProduct(at, Q), Q = i.normalize(Q), tt = i.dotProduct(at, Q), dt2 = Math.abs(tt / j), dt2 <= 1 + y && dt2 >= 1)
                        break;
                      j = tt;
                    }
                    for (var yt = 0; yt < m2; yt++)
                      at[yt] = Q[yt];
                    for (j = E; ; ) {
                      for (var It = 0; It < m2; It++)
                        ut[It] = Z[It];
                      if (ut = i.minusOp(ut, i.multCons(at, i.dotProduct(at, ut))), Z = i.multGamma(i.multL(i.multGamma(ut), D2, n)), $ = i.dotProduct(ut, Z), Z = i.normalize(Z), tt = i.dotProduct(ut, Z), dt2 = Math.abs(tt / j), dt2 <= 1 + y && dt2 >= 1)
                        break;
                      j = tt;
                    }
                    for (var ft = 0; ft < m2; ft++)
                      ut[ft] = Z[ft];
                    P = i.multCons(at, Math.sqrt(Math.abs(b))), K = i.multCons(ut, Math.sqrt(Math.abs($)));
                  };
                  f.connectComponents(c, h, f.getTopMostNodes(T), d), v.forEach(function(F) {
                    f.connectComponents(c, h, f.getTopMostNodes(F.descendants().intersection(h)), d);
                  });
                  for (var et = 0, z = 0; z < T.length; z++)
                    T[z].isParent() || N.set(T[z].id(), et++);
                  var O = true, H = false, B = void 0;
                  try {
                    for (var _ = d.keys()[Symbol.iterator](), lt; !(O = (lt = _.next()).done); O = true) {
                      var J = lt.value;
                      N.set(J, et++);
                    }
                  } catch (F) {
                    H = true, B = F;
                  } finally {
                    try {
                      !O && _.return && _.return();
                    } finally {
                      if (H)
                        throw B;
                    }
                  }
                  for (var Rt = 0; Rt < N.size; Rt++)
                    M[Rt] = [];
                  v.forEach(function(F) {
                    for (var b = F.children().intersection(h); b.nodes(":childless").length == 0; )
                      b = b.nodes()[0].children().intersection(h);
                    var $ = 0, Q = b.nodes(":childless")[0].connectedEdges().length;
                    b.nodes(":childless").forEach(function(Z, at) {
                      Z.connectedEdges().length < Q && (Q = Z.connectedEdges().length, $ = at);
                    }), S.set(F.id(), b.nodes(":childless")[$].id());
                  }), T.forEach(function(F) {
                    var b = void 0;
                    F.isParent() ? b = N.get(S.get(F.id())) : b = N.get(F.id()), F.neighborhood().nodes().forEach(function($) {
                      h.intersection(F.edgesWith($)).length > 0 && ($.isParent() ? M[b].push(S.get($.id())) : M[b].push($.id()));
                    });
                  });
                  var Lt = function(b) {
                    var $ = N.get(b), Q = void 0;
                    d.get(b).forEach(function(Z) {
                      c.getElementById(Z).isParent() ? Q = S.get(Z) : Q = Z, M[$].push(Q), M[N.get(Q)].push(b);
                    });
                  }, vt = true, it = false, gt = void 0;
                  try {
                    for (var Tt = d.keys()[Symbol.iterator](), At; !(vt = (At = Tt.next()).done); vt = true) {
                      var Dt = At.value;
                      Lt(Dt);
                    }
                  } catch (F) {
                    it = true, gt = F;
                  } finally {
                    try {
                      !vt && Tt.return && Tt.return();
                    } finally {
                      if (it)
                        throw gt;
                    }
                  }
                  m2 = N.size;
                  var mt = void 0;
                  if (m2 > 2) {
                    R = m2 < o.sampleSize ? m2 : o.sampleSize;
                    for (var xt = 0; xt < m2; xt++)
                      D2[xt] = [];
                    for (var St = 0; St < R; St++)
                      n[St] = [];
                    return o.quality == "draft" || o.step == "all" ? (q(I), V(), Y(), mt = { nodeIndexes: N, xCoords: P, yCoords: K }) : (N.forEach(function(F, b) {
                      P.push(c.getElementById(b).position("x")), K.push(c.getElementById(b).position("y"));
                    }), mt = { nodeIndexes: N, xCoords: P, yCoords: K }), mt;
                  } else {
                    var Vt = N.keys(), Xt = c.getElementById(Vt.next().value), Ut = Xt.position(), bt = Xt.outerWidth();
                    if (P.push(Ut.x), K.push(Ut.y), m2 == 2) {
                      var Ht = c.getElementById(Vt.next().value), Bt = Ht.outerWidth();
                      P.push(Ut.x + bt / 2 + Bt / 2 + o.idealEdgeLength), K.push(Ut.y);
                    }
                    return mt = { nodeIndexes: N, xCoords: P, yCoords: K }, mt;
                  }
                };
                a.exports = { spectralLayout: t };
              }
            ),
            /***/
            579: (
              /***/
              (a, r, e2) => {
                var f = e2(212), i = function(t) {
                  t && t("layout", "fcose", f);
                };
                typeof cytoscape < "u" && i(cytoscape), a.exports = i;
              }
            ),
            /***/
            140: (
              /***/
              (a) => {
                a.exports = A;
              }
            )
            /******/
          }, L = {};
          function u(a) {
            var r = L[a];
            if (r !== void 0)
              return r.exports;
            var e2 = L[a] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            return G[a](e2, e2.exports, u), e2.exports;
          }
          var l = u(579);
          return l;
        })()
      );
    });
  }(le)), le.exports;
}
var yr = pr();
const Er = /* @__PURE__ */ E0(yr);
var Se = {
  L: "left",
  R: "right",
  T: "top",
  B: "bottom"
}, Fe = {
  L: /* @__PURE__ */ p((C) => `${C},${C / 2} 0,${C} 0,0`, "L"),
  R: /* @__PURE__ */ p((C) => `0,${C / 2} ${C},0 ${C},${C}`, "R"),
  T: /* @__PURE__ */ p((C) => `0,0 ${C},0 ${C / 2},${C}`, "T"),
  B: /* @__PURE__ */ p((C) => `${C / 2},0 ${C},${C} 0,${C}`, "B")
}, he = {
  L: /* @__PURE__ */ p((C, U) => C - U + 2, "L"),
  R: /* @__PURE__ */ p((C, U) => C - 2, "R"),
  T: /* @__PURE__ */ p((C, U) => C - U + 2, "T"),
  B: /* @__PURE__ */ p((C, U) => C - 2, "B")
}, mr = /* @__PURE__ */ p(function(C) {
  return zt(C) ? C === "L" ? "R" : "L" : C === "T" ? "B" : "T";
}, "getOppositeArchitectureDirection"), be = /* @__PURE__ */ p(function(C) {
  const U = C;
  return U === "L" || U === "R" || U === "T" || U === "B";
}, "isArchitectureDirection"), zt = /* @__PURE__ */ p(function(C) {
  const U = C;
  return U === "L" || U === "R";
}, "isArchitectureDirectionX"), Qt = /* @__PURE__ */ p(function(C) {
  const U = C;
  return U === "T" || U === "B";
}, "isArchitectureDirectionY"), Ce = /* @__PURE__ */ p(function(C, U) {
  const A = zt(C) && Qt(U), G = Qt(C) && zt(U);
  return A || G;
}, "isArchitectureDirectionXY"), Tr = /* @__PURE__ */ p(function(C) {
  const U = C[0], A = C[1], G = zt(U) && Qt(A), L = Qt(U) && zt(A);
  return G || L;
}, "isArchitecturePairXY"), Nr = /* @__PURE__ */ p(function(C) {
  return C !== "LL" && C !== "RR" && C !== "TT" && C !== "BB";
}, "isValidArchitectureDirectionPair"), Te = /* @__PURE__ */ p(function(C, U) {
  const A = `${C}${U}`;
  return Nr(A) ? A : void 0;
}, "getArchitectureDirectionPair"), Lr = /* @__PURE__ */ p(function([C, U], A) {
  const G = A[0], L = A[1];
  return zt(G) ? Qt(L) ? [C + (G === "L" ? -1 : 1), U + (L === "T" ? 1 : -1)] : [C + (G === "L" ? -1 : 1), U] : zt(L) ? [C + (L === "L" ? 1 : -1), U + (G === "T" ? 1 : -1)] : [C, U + (G === "T" ? 1 : -1)];
}, "shiftPositionByArchitectureDirectionPair"), Cr = /* @__PURE__ */ p(function(C) {
  return C === "LT" || C === "TL" ? [1, 1] : C === "BL" || C === "LB" ? [1, -1] : C === "BR" || C === "RB" ? [-1, -1] : [-1, 1];
}, "getArchitectureDirectionXYFactors"), Mr = /* @__PURE__ */ p(function(C, U) {
  return Ce(C, U) ? "bend" : zt(C) ? "horizontal" : "vertical";
}, "getArchitectureDirectionAlignment"), Ar = /* @__PURE__ */ p(function(C) {
  return C.type === "service";
}, "isArchitectureService"), wr = /* @__PURE__ */ p(function(C) {
  return C.type === "junction";
}, "isArchitectureJunction"), Ue = /* @__PURE__ */ p((C) => C.data(), "edgeData"), ne = /* @__PURE__ */ p((C) => C.data(), "nodeData"), Ye = Nc.architecture, pt = new e(() => ({
  nodes: {},
  groups: {},
  edges: [],
  registeredIds: {},
  config: Ye,
  dataStructures: void 0,
  elements: {}
})), Or = /* @__PURE__ */ p(() => {
  pt.reset(), Qm();
}, "clear"), Dr = /* @__PURE__ */ p(function({
  id: C,
  icon: U,
  in: A,
  title: G,
  iconText: L
}) {
  if (pt.records.registeredIds[C] !== void 0)
    throw new Error(
      `The service id [${C}] is already in use by another ${pt.records.registeredIds[C]}`
    );
  if (A !== void 0) {
    if (C === A)
      throw new Error(`The service [${C}] cannot be placed within itself`);
    if (pt.records.registeredIds[A] === void 0)
      throw new Error(
        `The service [${C}]'s parent does not exist. Please make sure the parent is created before this service`
      );
    if (pt.records.registeredIds[A] === "node")
      throw new Error(`The service [${C}]'s parent is not a group`);
  }
  pt.records.registeredIds[C] = "node", pt.records.nodes[C] = {
    id: C,
    type: "service",
    icon: U,
    iconText: L,
    title: G,
    edges: [],
    in: A
  };
}, "addService"), xr = /* @__PURE__ */ p(() => Object.values(pt.records.nodes).filter(Ar), "getServices"), Ir = /* @__PURE__ */ p(function({ id: C, in: U }) {
  pt.records.registeredIds[C] = "node", pt.records.nodes[C] = {
    id: C,
    type: "junction",
    edges: [],
    in: U
  };
}, "addJunction"), Rr = /* @__PURE__ */ p(() => Object.values(pt.records.nodes).filter(wr), "getJunctions"), Sr = /* @__PURE__ */ p(() => Object.values(pt.records.nodes), "getNodes"), Ne = /* @__PURE__ */ p((C) => pt.records.nodes[C], "getNode"), Fr = /* @__PURE__ */ p(function({ id: C, icon: U, in: A, title: G }) {
  if (pt.records.registeredIds[C] !== void 0)
    throw new Error(
      `The group id [${C}] is already in use by another ${pt.records.registeredIds[C]}`
    );
  if (A !== void 0) {
    if (C === A)
      throw new Error(`The group [${C}] cannot be placed within itself`);
    if (pt.records.registeredIds[A] === void 0)
      throw new Error(
        `The group [${C}]'s parent does not exist. Please make sure the parent is created before this group`
      );
    if (pt.records.registeredIds[A] === "node")
      throw new Error(`The group [${C}]'s parent is not a group`);
  }
  pt.records.registeredIds[C] = "group", pt.records.groups[C] = {
    id: C,
    icon: U,
    title: G,
    in: A
  };
}, "addGroup"), br = /* @__PURE__ */ p(() => Object.values(pt.records.groups), "getGroups"), Pr = /* @__PURE__ */ p(function({
  lhsId: C,
  rhsId: U,
  lhsDir: A,
  rhsDir: G,
  lhsInto: L,
  rhsInto: u,
  lhsGroup: l,
  rhsGroup: a,
  title: r
}) {
  if (!be(A))
    throw new Error(
      `Invalid direction given for left hand side of edge ${C}--${U}. Expected (L,R,T,B) got ${A}`
    );
  if (!be(G))
    throw new Error(
      `Invalid direction given for right hand side of edge ${C}--${U}. Expected (L,R,T,B) got ${G}`
    );
  if (pt.records.nodes[C] === void 0 && pt.records.groups[C] === void 0)
    throw new Error(
      `The left-hand id [${C}] does not yet exist. Please create the service/group before declaring an edge to it.`
    );
  if (pt.records.nodes[U] === void 0 && pt.records.groups[C] === void 0)
    throw new Error(
      `The right-hand id [${U}] does not yet exist. Please create the service/group before declaring an edge to it.`
    );
  const e2 = pt.records.nodes[C].in, f = pt.records.nodes[U].in;
  if (l && e2 && f && e2 == f)
    throw new Error(
      `The left-hand id [${C}] is modified to traverse the group boundary, but the edge does not pass through two groups.`
    );
  if (a && e2 && f && e2 == f)
    throw new Error(
      `The right-hand id [${U}] is modified to traverse the group boundary, but the edge does not pass through two groups.`
    );
  const i = {
    lhsId: C,
    lhsDir: A,
    lhsInto: L,
    lhsGroup: l,
    rhsId: U,
    rhsDir: G,
    rhsInto: u,
    rhsGroup: a,
    title: r
  };
  pt.records.edges.push(i), pt.records.nodes[C] && pt.records.nodes[U] && (pt.records.nodes[C].edges.push(pt.records.edges[pt.records.edges.length - 1]), pt.records.nodes[U].edges.push(pt.records.edges[pt.records.edges.length - 1]));
}, "addEdge"), Gr = /* @__PURE__ */ p(() => pt.records.edges, "getEdges"), Ur = /* @__PURE__ */ p(() => {
  if (pt.records.dataStructures === void 0) {
    const C = {}, U = Object.entries(pt.records.nodes).reduce((a, [r, e2]) => (a[r] = e2.edges.reduce((f, i) => {
      var s, o;
      const g = (s = Ne(i.lhsId)) == null ? void 0 : s.in, t = (o = Ne(i.rhsId)) == null ? void 0 : o.in;
      if (g && t && g !== t) {
        const c = Mr(i.lhsDir, i.rhsDir);
        c !== "bend" && (C[g] ?? (C[g] = {}), C[g][t] = c, C[t] ?? (C[t] = {}), C[t][g] = c);
      }
      if (i.lhsId === r) {
        const c = Te(i.lhsDir, i.rhsDir);
        c && (f[c] = i.rhsId);
      } else {
        const c = Te(i.rhsDir, i.lhsDir);
        c && (f[c] = i.lhsId);
      }
      return f;
    }, {}), a), {}), A = Object.keys(U)[0], G = { [A]: 1 }, L = Object.keys(U).reduce(
      (a, r) => r === A ? a : { ...a, [r]: 1 },
      {}
    ), u = /* @__PURE__ */ p((a) => {
      const r = { [a]: [0, 0] }, e2 = [a];
      for (; e2.length > 0; ) {
        const f = e2.shift();
        if (f) {
          G[f] = 1, delete L[f];
          const i = U[f], [g, t] = r[f];
          Object.entries(i).forEach(([s, o]) => {
            G[o] || (r[o] = Lr(
              [g, t],
              s
            ), e2.push(o));
          });
        }
      }
      return r;
    }, "BFS"), l = [u(A)];
    for (; Object.keys(L).length > 0; )
      l.push(u(Object.keys(L)[0]));
    pt.records.dataStructures = {
      adjList: U,
      spatialMaps: l,
      groupAlignments: C
    };
  }
  return pt.records.dataStructures;
}, "getDataStructures"), Yr = /* @__PURE__ */ p((C, U) => {
  pt.records.elements[C] = U;
}, "setElementForId"), Xr = /* @__PURE__ */ p((C) => pt.records.elements[C], "getElementById"), ue = {
  clear: Or,
  setDiagramTitle: iy,
  getDiagramTitle: ay,
  setAccTitle: Jm,
  getAccTitle: ty,
  setAccDescription: ey,
  getAccDescription: ry,
  addService: Dr,
  getServices: xr,
  addJunction: Ir,
  getJunctions: Rr,
  getNodes: Sr,
  getNode: Ne,
  addGroup: Fr,
  getGroups: br,
  addEdge: Pr,
  getEdges: Gr,
  setElementForId: Yr,
  getElementById: Xr,
  getDataStructures: Ur
};
function Pt(C) {
  const U = dt().architecture;
  return U != null && U[C] ? U[C] : Ye[C];
}
p(Pt, "getConfigField");
var Hr = /* @__PURE__ */ p((C, U) => {
  m(C, U), C.groups.map(U.addGroup), C.services.map((A) => U.addService({ ...A, type: "service" })), C.junctions.map((A) => U.addJunction({ ...A, type: "junction" })), C.edges.map(U.addEdge);
}, "populateDb"), Wr = {
  parse: /* @__PURE__ */ p(async (C) => {
    const U = await uy("architecture", C);
    D.debug(U), Hr(U, ue);
  }, "parse")
}, Vr = /* @__PURE__ */ p((C) => `
  .edge {
    stroke-width: ${C.archEdgeWidth};
    stroke: ${C.archEdgeColor};
    fill: none;
  }

  .arrow {
    fill: ${C.archEdgeArrowColor};
  }

  .node-bkg {
    fill: none;
    stroke: ${C.archGroupBorderColor};
    stroke-width: ${C.archGroupBorderWidth};
    stroke-dasharray: 8;
  }
  .node-icon-text {
    display: flex; 
    align-items: center;
  }
  
  .node-icon-text > div {
    color: #fff;
    margin: 1px;
    height: fit-content;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`, "getStyles"), zr = Vr, ae = /* @__PURE__ */ p((C) => `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${C}</g>`, "wrapIcon"), oe = {
  prefix: "mermaid-architecture",
  height: 80,
  width: 80,
  icons: {
    database: {
      body: ae(
        '<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    server: {
      body: ae(
        '<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>'
      )
    },
    disk: {
      body: ae(
        '<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>'
      )
    },
    internet: {
      body: ae(
        '<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    cloud: {
      body: ae(
        '<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      )
    },
    unknown: I0,
    blank: {
      body: ae("")
    }
  }
}, Br = /* @__PURE__ */ p(async function(C, U) {
  const A = Pt("padding"), G = Pt("iconSize"), L = G / 2, u = G / 6, l = u / 2;
  await Promise.all(
    U.edges().map(async (a) => {
      var P, K;
      const {
        source: r,
        sourceDir: e2,
        sourceArrow: f,
        sourceGroup: i,
        target: g,
        targetDir: t,
        targetArrow: s,
        targetGroup: o,
        label: c
      } = Ue(a);
      let { x: h, y: T } = a[0].sourceEndpoint();
      const { x: v, y: d } = a[0].midpoint();
      let { x: N, y: S } = a[0].targetEndpoint();
      const M = A + 4;
      if (i && (zt(e2) ? h += e2 === "L" ? -M : M : T += e2 === "T" ? -M : M + 18), o && (zt(t) ? N += t === "L" ? -M : M : S += t === "T" ? -M : M + 18), !i && ((P = ue.getNode(r)) == null ? void 0 : P.type) === "junction" && (zt(e2) ? h += e2 === "L" ? L : -L : T += e2 === "T" ? L : -L), !o && ((K = ue.getNode(g)) == null ? void 0 : K.type) === "junction" && (zt(t) ? N += t === "L" ? L : -L : S += t === "T" ? L : -L), a[0]._private.rscratch) {
        const X = C.insert("g");
        if (X.insert("path").attr("d", `M ${h},${T} L ${v},${d} L${N},${S} `).attr("class", "edge"), f) {
          const k = zt(e2) ? he[e2](h, u) : h - l, D2 = Qt(e2) ? he[e2](T, u) : T - l;
          X.insert("polygon").attr("points", Fe[e2](u)).attr("transform", `translate(${k},${D2})`).attr("class", "arrow");
        }
        if (s) {
          const k = zt(t) ? he[t](N, u) : N - l, D2 = Qt(t) ? he[t](S, u) : S - l;
          X.insert("polygon").attr("points", Fe[t](u)).attr("transform", `translate(${k},${D2})`).attr("class", "arrow");
        }
        if (c) {
          const k = Ce(e2, t) ? "XY" : zt(e2) ? "X" : "Y";
          let D2 = 0;
          k === "X" ? D2 = Math.abs(h - N) : k === "Y" ? D2 = Math.abs(T - S) / 1.5 : D2 = Math.abs(h - N) / 2;
          const rt = X.append("g");
          if (await He$1(
            rt,
            c,
            {
              useHtmlLabels: false,
              width: D2,
              classes: "architecture-service-label"
            },
            dt()
          ), rt.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), k === "X")
            rt.attr("transform", "translate(" + v + ", " + d + ")");
          else if (k === "Y")
            rt.attr("transform", "translate(" + v + ", " + d + ") rotate(-90)");
          else if (k === "XY") {
            const n = Te(e2, t);
            if (n && Tr(n)) {
              const m2 = rt.node().getBoundingClientRect(), [p2, E] = Cr(n);
              rt.attr("dominant-baseline", "auto").attr("transform", `rotate(${-1 * p2 * E * 45})`);
              const y = rt.node().getBoundingClientRect();
              rt.attr(
                "transform",
                `
                translate(${v}, ${d - m2.height / 2})
                translate(${p2 * y.width / 2}, ${E * y.height / 2})
                rotate(${-1 * p2 * E * 45}, 0, ${m2.height / 2})
              `
              );
            }
          }
        }
      }
    })
  );
}, "drawEdges"), $r = /* @__PURE__ */ p(async function(C, U) {
  const G = Pt("padding") * 0.75, L = Pt("fontSize"), l = Pt("iconSize") / 2;
  await Promise.all(
    U.nodes().map(async (a) => {
      const r = ne(a);
      if (r.type === "group") {
        const { h: e2, w: f, x1: i, y1: g } = a.boundingBox();
        C.append("rect").attr("x", i + l).attr("y", g + l).attr("width", f).attr("height", e2).attr("class", "node-bkg");
        const t = C.append("g");
        let s = i, o = g;
        if (r.icon) {
          const c = t.append("g");
          c.html(
            `<g>${await Ka(r.icon, { height: G, width: G, fallbackPrefix: oe.prefix })}</g>`
          ), c.attr(
            "transform",
            "translate(" + (s + l + 1) + ", " + (o + l + 1) + ")"
          ), s += G, o += L / 2 - 1 - 2;
        }
        if (r.label) {
          const c = t.append("g");
          await He$1(
            c,
            r.label,
            {
              useHtmlLabels: false,
              width: f,
              classes: "architecture-service-label"
            },
            dt()
          ), c.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "start").attr("text-anchor", "start"), c.attr(
            "transform",
            "translate(" + (s + l + 4) + ", " + (o + l + 2) + ")"
          );
        }
      }
    })
  );
}, "drawGroups"), Zr = /* @__PURE__ */ p(async function(C, U, A) {
  for (const G of A) {
    const L = U.append("g"), u = Pt("iconSize");
    if (G.title) {
      const e2 = L.append("g");
      await He$1(
        e2,
        G.title,
        {
          useHtmlLabels: false,
          width: u * 1.5,
          classes: "architecture-service-label"
        },
        dt()
      ), e2.attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle"), e2.attr("transform", "translate(" + u / 2 + ", " + u + ")");
    }
    const l = L.append("g");
    if (G.icon)
      l.html(
        `<g>${await Ka(G.icon, { height: u, width: u, fallbackPrefix: oe.prefix })}</g>`
      );
    else if (G.iconText) {
      l.html(
        `<g>${await Ka("blank", { height: u, width: u, fallbackPrefix: oe.prefix })}</g>`
      );
      const i = l.append("g").append("foreignObject").attr("width", u).attr("height", u).append("div").attr("class", "node-icon-text").attr("style", `height: ${u}px;`).append("div").html(G.iconText), g = parseInt(
        window.getComputedStyle(i.node(), null).getPropertyValue("font-size").replace(/\D/g, "")
      ) ?? 16;
      i.attr("style", `-webkit-line-clamp: ${Math.floor((u - 2) / g)};`);
    } else
      l.append("path").attr("class", "node-bkg").attr("id", "node-" + G.id).attr(
        "d",
        `M0 ${u} v${-u} q0,-5 5,-5 h${u} q5,0 5,5 v${u} H0 Z`
      );
    L.attr("class", "architecture-service");
    const { width: a, height: r } = L._groups[0][0].getBBox();
    G.width = a, G.height = r, C.setElementForId(G.id, L);
  }
  return 0;
}, "drawServices"), kr = /* @__PURE__ */ p(function(C, U, A) {
  A.forEach((G) => {
    const L = U.append("g"), u = Pt("iconSize");
    L.append("g").append("rect").attr("id", "node-" + G.id).attr("fill-opacity", "0").attr("width", u).attr("height", u), L.attr("class", "architecture-junction");
    const { width: a, height: r } = L._groups[0][0].getBBox();
    L.width = a, L.height = r, C.setElementForId(G.id, L);
  });
}, "drawJunctions");
P0([
  {
    name: oe.prefix,
    icons: oe
  }
]);
Jt.use(Er);
function Xe(C, U) {
  C.forEach((A) => {
    U.add({
      group: "nodes",
      data: {
        type: "service",
        id: A.id,
        icon: A.icon,
        label: A.title,
        parent: A.in,
        width: Pt("iconSize"),
        height: Pt("iconSize")
      },
      classes: "node-service"
    });
  });
}
p(Xe, "addServices");
function He(C, U) {
  C.forEach((A) => {
    U.add({
      group: "nodes",
      data: {
        type: "junction",
        id: A.id,
        parent: A.in,
        width: Pt("iconSize"),
        height: Pt("iconSize")
      },
      classes: "node-junction"
    });
  });
}
p(He, "addJunctions");
function We(C, U) {
  U.nodes().map((A) => {
    const G = ne(A);
    if (G.type === "group")
      return;
    G.x = A.position().x, G.y = A.position().y, C.getElementById(G.id).attr("transform", "translate(" + (G.x || 0) + "," + (G.y || 0) + ")");
  });
}
p(We, "positionNodes");
function Ve(C, U) {
  C.forEach((A) => {
    U.add({
      group: "nodes",
      data: {
        type: "group",
        id: A.id,
        icon: A.icon,
        label: A.title,
        parent: A.in
      },
      classes: "node-group"
    });
  });
}
p(Ve, "addGroups");
function ze(C, U) {
  C.forEach((A) => {
    const { lhsId: G, rhsId: L, lhsInto: u, lhsGroup: l, rhsInto: a, lhsDir: r, rhsDir: e2, rhsGroup: f, title: i } = A, g = Ce(A.lhsDir, A.rhsDir) ? "segments" : "straight", t = {
      id: `${G}-${L}`,
      label: i,
      source: G,
      sourceDir: r,
      sourceArrow: u,
      sourceGroup: l,
      sourceEndpoint: r === "L" ? "0 50%" : r === "R" ? "100% 50%" : r === "T" ? "50% 0" : "50% 100%",
      target: L,
      targetDir: e2,
      targetArrow: a,
      targetGroup: f,
      targetEndpoint: e2 === "L" ? "0 50%" : e2 === "R" ? "100% 50%" : e2 === "T" ? "50% 0" : "50% 100%"
    };
    U.add({
      group: "edges",
      data: t,
      classes: g
    });
  });
}
p(ze, "addEdges");
function Be(C, U, A) {
  const G = /* @__PURE__ */ p((a, r) => Object.entries(a).reduce(
    (e2, [f, i]) => {
      var s;
      let g = 0;
      const t = Object.entries(i);
      if (t.length === 1)
        return e2[f] = t[0][1], e2;
      for (let o = 0; o < t.length - 1; o++)
        for (let c = o + 1; c < t.length; c++) {
          const [h, T] = t[o], [v, d] = t[c];
          if (((s = A[h]) == null ? void 0 : s[v]) === r)
            e2[f] ?? (e2[f] = []), e2[f] = [...e2[f], ...T, ...d];
          else if (h === "default" || v === "default")
            e2[f] ?? (e2[f] = []), e2[f] = [...e2[f], ...T, ...d];
          else {
            const S = `${f}-${g++}`;
            e2[S] = T;
            const M = `${f}-${g++}`;
            e2[M] = d;
          }
        }
      return e2;
    },
    {}
  ), "flattenAlignments"), L = U.map((a) => {
    const r = {}, e2 = {};
    return Object.entries(a).forEach(([f, [i, g]]) => {
      var s, o, c;
      const t = ((s = C.getNode(f)) == null ? void 0 : s.in) ?? "default";
      r[g] ?? (r[g] = {}), (o = r[g])[t] ?? (o[t] = []), r[g][t].push(f), e2[i] ?? (e2[i] = {}), (c = e2[i])[t] ?? (c[t] = []), e2[i][t].push(f);
    }), {
      horiz: Object.values(G(r, "horizontal")).filter(
        (f) => f.length > 1
      ),
      vert: Object.values(G(e2, "vertical")).filter(
        (f) => f.length > 1
      )
    };
  }), [u, l] = L.reduce(
    ([a, r], { horiz: e2, vert: f }) => [
      [...a, ...e2],
      [...r, ...f]
    ],
    [[], []]
  );
  return {
    horizontal: u,
    vertical: l
  };
}
p(Be, "getAlignments");
function $e(C) {
  const U = [], A = /* @__PURE__ */ p((L) => `${L[0]},${L[1]}`, "posToStr"), G = /* @__PURE__ */ p((L) => L.split(",").map((u) => parseInt(u)), "strToPos");
  return C.forEach((L) => {
    const u = Object.fromEntries(
      Object.entries(L).map(([e2, f]) => [A(f), e2])
    ), l = [A([0, 0])], a = {}, r = {
      L: [-1, 0],
      R: [1, 0],
      T: [0, 1],
      B: [0, -1]
    };
    for (; l.length > 0; ) {
      const e2 = l.shift();
      if (e2) {
        a[e2] = 1;
        const f = u[e2];
        if (f) {
          const i = G(e2);
          Object.entries(r).forEach(([g, t]) => {
            const s = A([i[0] + t[0], i[1] + t[1]]), o = u[s];
            o && !a[s] && (l.push(s), U.push({
              [Se[g]]: o,
              [Se[mr(g)]]: f,
              gap: 1.5 * Pt("iconSize")
            }));
          });
        }
      }
    }
  }), U;
}
p($e, "getRelativeConstraints");
function Ze(C, U, A, G, L, { spatialMaps: u, groupAlignments: l }) {
  return new Promise((a) => {
    const r = Li("body").append("div").attr("id", "cy").attr("style", "display:none"), e2 = Jt({
      container: document.getElementById("cy"),
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "straight",
            label: "data(label)",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        },
        {
          selector: "edge.segments",
          style: {
            "curve-style": "segments",
            "segment-weights": "0",
            "segment-distances": [0.5],
            // @ts-ignore Incorrect library types
            "edge-distances": "endpoints",
            "source-endpoint": "data(sourceEndpoint)",
            "target-endpoint": "data(targetEndpoint)"
          }
        },
        {
          selector: "node",
          style: {
            // @ts-ignore Incorrect library types
            "compound-sizing-wrt-labels": "include"
          }
        },
        {
          selector: "node[label]",
          style: {
            "text-valign": "bottom",
            "text-halign": "center",
            "font-size": `${Pt("fontSize")}px`
          }
        },
        {
          selector: ".node-service",
          style: {
            label: "data(label)",
            width: "data(width)",
            height: "data(height)"
          }
        },
        {
          selector: ".node-junction",
          style: {
            width: "data(width)",
            height: "data(height)"
          }
        },
        {
          selector: ".node-group",
          style: {
            // @ts-ignore Incorrect library types
            padding: `${Pt("padding")}px`
          }
        }
      ]
    });
    r.remove(), Ve(A, e2), Xe(C, e2), He(U, e2), ze(G, e2);
    const f = Be(L, u, l), i = $e(u), g = e2.layout({
      name: "fcose",
      quality: "proof",
      styleEnabled: false,
      animate: false,
      nodeDimensionsIncludeLabels: false,
      // Adjust the edge parameters if it passes through the border of a group
      // Hacky fix for: https://github.com/iVis-at-Bilkent/cytoscape.js-fcose/issues/67
      idealEdgeLength(t) {
        const [s, o] = t.connectedNodes(), { parent: c } = ne(s), { parent: h } = ne(o);
        return c === h ? 1.5 * Pt("iconSize") : 0.5 * Pt("iconSize");
      },
      edgeElasticity(t) {
        const [s, o] = t.connectedNodes(), { parent: c } = ne(s), { parent: h } = ne(o);
        return c === h ? 0.45 : 1e-3;
      },
      alignmentConstraint: f,
      relativePlacementConstraint: i
    });
    g.one("layoutstop", () => {
      var s;
      function t(o, c, h, T) {
        let v, d;
        const { x: N, y: S } = o, { x: M, y: P } = c;
        d = (T - S + (N - h) * (S - P) / (N - M)) / Math.sqrt(1 + Math.pow((S - P) / (N - M), 2)), v = Math.sqrt(Math.pow(T - S, 2) + Math.pow(h - N, 2) - Math.pow(d, 2));
        const K = Math.sqrt(Math.pow(M - N, 2) + Math.pow(P - S, 2));
        v = v / K;
        let X = (M - N) * (T - S) - (P - S) * (h - N);
        switch (true) {
          case X >= 0:
            X = 1;
            break;
          case X < 0:
            X = -1;
            break;
        }
        let k = (M - N) * (h - N) + (P - S) * (T - S);
        switch (true) {
          case k >= 0:
            k = 1;
            break;
          case k < 0:
            k = -1;
            break;
        }
        return d = Math.abs(d) * X, v = v * k, {
          distances: d,
          weights: v
        };
      }
      p(t, "getSegmentWeights"), e2.startBatch();
      for (const o of Object.values(e2.edges()))
        if ((s = o.data) != null && s.call(o)) {
          const { x: c, y: h } = o.source().position(), { x: T, y: v } = o.target().position();
          if (c !== T && h !== v) {
            const d = o.sourceEndpoint(), N = o.targetEndpoint(), { sourceDir: S } = Ue(o), [M, P] = Qt(S) ? [d.x, N.y] : [N.x, d.y], { weights: K, distances: X } = t(d, N, M, P);
            o.style("segment-distances", X), o.style("segment-weights", K);
          }
        }
      e2.endBatch(), g.run();
    }), g.run(), e2.ready((t) => {
      D.info("Ready", t), a(e2);
    });
  });
}
p(Ze, "layoutArchitecture");
var qr = /* @__PURE__ */ p(async (C, U, A, G) => {
  const L = G.db, u = L.getServices(), l = L.getJunctions(), a = L.getGroups(), r = L.getEdges(), e2 = L.getDataStructures(), f = GC(U), i = f.append("g");
  i.attr("class", "architecture-edges");
  const g = f.append("g");
  g.attr("class", "architecture-services");
  const t = f.append("g");
  t.attr("class", "architecture-groups"), await Zr(L, g, u), kr(L, g, l);
  const s = await Ze(u, l, a, r, L, e2);
  await Br(i, s), await $r(t, s), We(L, s), Xm(void 0, f, Pt("padding"), Pt("useMaxWidth"));
}, "draw"), Jr = { draw: qr }, ii = {
  parser: Wr,
  db: ue,
  renderer: Jr,
  styles: zr
};
export {
  ii as diagram
};
