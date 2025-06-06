import { m } from "./chunk-4BMEZGHF-Bo7Lw3Zg-VPv0jNBt.js";
import { e } from "./chunk-XZIHB7SX-BpJ6eI-3-rAghqn91.js";
import { E as Nc, _ as p, c as dt, C as go, D as Jt, F as D1, l as D$1, b as Jm, a as ty, g as ry, s as ey, o as iy, p as ay, j as Hr$1, x as Qm, u as ge, B as sy } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { u as uy } from "./radar-MK3ICKWK-Dci9lSdR-4pP8dac_.js";
import { L as Li } from "./helper-7WMIPux3-FiO_G2IV.js";
import "./main-zTjO05wq.js";
import "./copy-BS31ARP0-eab1H3tb.js";
import "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
import "./_basePickBy-sC4qhKfT-S0M4lzcJ.js";
import "./clone-CawhnH1Z-cPfa3Ped.js";
var u = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
}, yr = Nc.gitGraph, z = /* @__PURE__ */ p(() => go({
  ...yr,
  ...Jt().gitGraph
}), "getConfig"), i = new e(() => {
  const t = z(), r = t.mainBranchName, a = t.mainBranchOrder;
  return {
    mainBranchName: r,
    commits: /* @__PURE__ */ new Map(),
    head: null,
    branchConfig: /* @__PURE__ */ new Map([[r, { name: r, order: a }]]),
    branches: /* @__PURE__ */ new Map([[r, null]]),
    currBranch: r,
    direction: "LR",
    seq: 0,
    options: {}
  };
});
function j() {
  return D1({ length: 7 });
}
p(j, "getID");
function N(t, r) {
  const a = /* @__PURE__ */ Object.create(null);
  return t.reduce((s, e2) => {
    const n = r(e2);
    return a[n] || (a[n] = true, s.push(e2)), s;
  }, []);
}
p(N, "uniqBy");
var xr = /* @__PURE__ */ p(function(t) {
  i.records.direction = t;
}, "setDirection"), ur = /* @__PURE__ */ p(function(t) {
  D$1.debug("options str", t), t = t == null ? void 0 : t.trim(), t = t || "{}";
  try {
    i.records.options = JSON.parse(t);
  } catch (r) {
    D$1.error("error while parsing gitGraph options", r.message);
  }
}, "setOptions"), pr = /* @__PURE__ */ p(function() {
  return i.records.options;
}, "getOptions"), br = /* @__PURE__ */ p(function(t) {
  let r = t.msg, a = t.id;
  const s = t.type;
  let e2 = t.tags;
  D$1.info("commit", r, a, s, e2), D$1.debug("Entering commit:", r, a, s, e2);
  const n = z();
  a = Hr$1.sanitizeText(a, n), r = Hr$1.sanitizeText(r, n), e2 = e2 == null ? void 0 : e2.map((o) => Hr$1.sanitizeText(o, n));
  const c = {
    id: a || i.records.seq + "-" + j(),
    message: r,
    seq: i.records.seq++,
    type: s ?? u.NORMAL,
    tags: e2 ?? [],
    parents: i.records.head == null ? [] : [i.records.head.id],
    branch: i.records.currBranch
  };
  i.records.head = c, D$1.info("main branch", n.mainBranchName), i.records.commits.set(c.id, c), i.records.branches.set(i.records.currBranch, c.id), D$1.debug("in pushCommit " + c.id);
}, "commit"), mr = /* @__PURE__ */ p(function(t) {
  let r = t.name;
  const a = t.order;
  if (r = Hr$1.sanitizeText(r, z()), i.records.branches.has(r))
    throw new Error(
      `Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`
    );
  i.records.branches.set(r, i.records.head != null ? i.records.head.id : null), i.records.branchConfig.set(r, { name: r, order: a }), _(r), D$1.debug("in createBranch");
}, "branch"), wr = /* @__PURE__ */ p((t) => {
  let r = t.branch, a = t.id;
  const s = t.type, e2 = t.tags, n = z();
  r = Hr$1.sanitizeText(r, n), a && (a = Hr$1.sanitizeText(a, n));
  const c = i.records.branches.get(i.records.currBranch), o = i.records.branches.get(r), $ = c ? i.records.commits.get(c) : void 0, l = o ? i.records.commits.get(o) : void 0;
  if ($ && l && $.branch === r)
    throw new Error(`Cannot merge branch '${r}' into itself.`);
  if (i.records.currBranch === r) {
    const d = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
    throw d.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ["branch abc"]
    }, d;
  }
  if ($ === void 0 || !$) {
    const d = new Error(
      `Incorrect usage of "merge". Current branch (${i.records.currBranch})has no commits`
    );
    throw d.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ["commit"]
    }, d;
  }
  if (!i.records.branches.has(r)) {
    const d = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + r + ") does not exist"
    );
    throw d.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: [`branch ${r}`]
    }, d;
  }
  if (l === void 0 || !l) {
    const d = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + r + ") has no commits"
    );
    throw d.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ['"commit"']
    }, d;
  }
  if ($ === l) {
    const d = new Error('Incorrect usage of "merge". Both branches have same head');
    throw d.hash = {
      text: `merge ${r}`,
      token: `merge ${r}`,
      expected: ["branch abc"]
    }, d;
  }
  if (a && i.records.commits.has(a)) {
    const d = new Error(
      'Incorrect usage of "merge". Commit with id:' + a + " already exists, use different custom Id"
    );
    throw d.hash = {
      text: `merge ${r} ${a} ${s} ${e2 == null ? void 0 : e2.join(" ")}`,
      token: `merge ${r} ${a} ${s} ${e2 == null ? void 0 : e2.join(" ")}`,
      expected: [
        `merge ${r} ${a}_UNIQUE ${s} ${e2 == null ? void 0 : e2.join(" ")}`
      ]
    }, d;
  }
  const f = o || "", g = {
    id: a || `${i.records.seq}-${j()}`,
    message: `merged branch ${r} into ${i.records.currBranch}`,
    seq: i.records.seq++,
    parents: i.records.head == null ? [] : [i.records.head.id, f],
    branch: i.records.currBranch,
    type: u.MERGE,
    customType: s,
    customId: !!a,
    tags: e2 ?? []
  };
  i.records.head = g, i.records.commits.set(g.id, g), i.records.branches.set(i.records.currBranch, g.id), D$1.debug(i.records.branches), D$1.debug("in mergeBranch");
}, "merge"), vr = /* @__PURE__ */ p(function(t) {
  let r = t.id, a = t.targetId, s = t.tags, e2 = t.parent;
  D$1.debug("Entering cherryPick:", r, a, s);
  const n = z();
  if (r = Hr$1.sanitizeText(r, n), a = Hr$1.sanitizeText(a, n), s = s == null ? void 0 : s.map(($) => Hr$1.sanitizeText($, n)), e2 = Hr$1.sanitizeText(e2, n), !r || !i.records.commits.has(r)) {
    const $ = new Error(
      'Incorrect usage of "cherryPick". Source commit id should exist and provided'
    );
    throw $.hash = {
      text: `cherryPick ${r} ${a}`,
      token: `cherryPick ${r} ${a}`,
      expected: ["cherry-pick abc"]
    }, $;
  }
  const c = i.records.commits.get(r);
  if (c === void 0 || !c)
    throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
  if (e2 && !(Array.isArray(c.parents) && c.parents.includes(e2)))
    throw new Error(
      "Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit."
    );
  const o = c.branch;
  if (c.type === u.MERGE && !e2)
    throw new Error(
      "Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified."
    );
  if (!a || !i.records.commits.has(a)) {
    if (o === i.records.currBranch) {
      const g = new Error(
        'Incorrect usage of "cherryPick". Source commit is already on current branch'
      );
      throw g.hash = {
        text: `cherryPick ${r} ${a}`,
        token: `cherryPick ${r} ${a}`,
        expected: ["cherry-pick abc"]
      }, g;
    }
    const $ = i.records.branches.get(i.records.currBranch);
    if ($ === void 0 || !$) {
      const g = new Error(
        `Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`
      );
      throw g.hash = {
        text: `cherryPick ${r} ${a}`,
        token: `cherryPick ${r} ${a}`,
        expected: ["cherry-pick abc"]
      }, g;
    }
    const l = i.records.commits.get($);
    if (l === void 0 || !l) {
      const g = new Error(
        `Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`
      );
      throw g.hash = {
        text: `cherryPick ${r} ${a}`,
        token: `cherryPick ${r} ${a}`,
        expected: ["cherry-pick abc"]
      }, g;
    }
    const f = {
      id: i.records.seq + "-" + j(),
      message: `cherry-picked ${c == null ? void 0 : c.message} into ${i.records.currBranch}`,
      seq: i.records.seq++,
      parents: i.records.head == null ? [] : [i.records.head.id, c.id],
      branch: i.records.currBranch,
      type: u.CHERRY_PICK,
      tags: s ? s.filter(Boolean) : [
        `cherry-pick:${c.id}${c.type === u.MERGE ? `|parent:${e2}` : ""}`
      ]
    };
    i.records.head = f, i.records.commits.set(f.id, f), i.records.branches.set(i.records.currBranch, f.id), D$1.debug(i.records.branches), D$1.debug("in cherryPick");
  }
}, "cherryPick"), _ = /* @__PURE__ */ p(function(t) {
  if (t = Hr$1.sanitizeText(t, z()), i.records.branches.has(t)) {
    i.records.currBranch = t;
    const r = i.records.branches.get(i.records.currBranch);
    r === void 0 || !r ? i.records.head = null : i.records.head = i.records.commits.get(r) ?? null;
  } else {
    const r = new Error(
      `Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`
    );
    throw r.hash = {
      text: `checkout ${t}`,
      token: `checkout ${t}`,
      expected: [`branch ${t}`]
    }, r;
  }
}, "checkout");
function A(t, r, a) {
  const s = t.indexOf(r);
  s === -1 ? t.push(a) : t.splice(s, 1, a);
}
p(A, "upsert");
function D(t) {
  const r = t.reduce((e2, n) => e2.seq > n.seq ? e2 : n, t[0]);
  let a = "";
  t.forEach(function(e2) {
    e2 === r ? a += "	*" : a += "	|";
  });
  const s = [a, r.id, r.seq];
  for (const e2 in i.records.branches)
    i.records.branches.get(e2) === r.id && s.push(e2);
  if (D$1.debug(s.join(" ")), r.parents && r.parents.length == 2 && r.parents[0] && r.parents[1]) {
    const e2 = i.records.commits.get(r.parents[0]);
    A(t, r, e2), r.parents[1] && t.push(i.records.commits.get(r.parents[1]));
  } else {
    if (r.parents.length == 0)
      return;
    if (r.parents[0]) {
      const e2 = i.records.commits.get(r.parents[0]);
      A(t, r, e2);
    }
  }
  t = N(t, (e2) => e2.id), D(t);
}
p(D, "prettyPrintCommitHistory");
var Cr = /* @__PURE__ */ p(function() {
  D$1.debug(i.records.commits);
  const t = V()[0];
  D([t]);
}, "prettyPrint"), Er = /* @__PURE__ */ p(function() {
  i.reset(), Qm();
}, "clear"), Br = /* @__PURE__ */ p(function() {
  return [...i.records.branchConfig.values()].map((r, a) => r.order !== null && r.order !== void 0 ? r : {
    ...r,
    order: parseFloat(`0.${a}`)
  }).sort((r, a) => (r.order ?? 0) - (a.order ?? 0)).map(({ name: r }) => ({ name: r }));
}, "getBranchesAsObjArray"), kr = /* @__PURE__ */ p(function() {
  return i.records.branches;
}, "getBranches"), Lr = /* @__PURE__ */ p(function() {
  return i.records.commits;
}, "getCommits"), V = /* @__PURE__ */ p(function() {
  const t = [...i.records.commits.values()];
  return t.forEach(function(r) {
    D$1.debug(r.id);
  }), t.sort((r, a) => r.seq - a.seq), t;
}, "getCommitsArray"), Tr = /* @__PURE__ */ p(function() {
  return i.records.currBranch;
}, "getCurrentBranch"), Mr = /* @__PURE__ */ p(function() {
  return i.records.direction;
}, "getDirection"), Rr = /* @__PURE__ */ p(function() {
  return i.records.head;
}, "getHead"), X = {
  commitType: u,
  getConfig: z,
  setDirection: xr,
  setOptions: ur,
  getOptions: pr,
  commit: br,
  branch: mr,
  merge: wr,
  cherryPick: vr,
  checkout: _,
  //reset,
  prettyPrint: Cr,
  clear: Er,
  getBranchesAsObjArray: Br,
  getBranches: kr,
  getCommits: Lr,
  getCommitsArray: V,
  getCurrentBranch: Tr,
  getDirection: Mr,
  getHead: Rr,
  setAccTitle: Jm,
  getAccTitle: ty,
  getAccDescription: ry,
  setAccDescription: ey,
  setDiagramTitle: iy,
  getDiagramTitle: ay
}, Ir = /* @__PURE__ */ p((t, r) => {
  m(t, r), t.dir && r.setDirection(t.dir);
  for (const a of t.statements)
    qr(a, r);
}, "populate"), qr = /* @__PURE__ */ p((t, r) => {
  const s = {
    Commit: /* @__PURE__ */ p((e2) => r.commit(Or(e2)), "Commit"),
    Branch: /* @__PURE__ */ p((e2) => r.branch(zr(e2)), "Branch"),
    Merge: /* @__PURE__ */ p((e2) => r.merge(Gr(e2)), "Merge"),
    Checkout: /* @__PURE__ */ p((e2) => r.checkout(Hr(e2)), "Checkout"),
    CherryPicking: /* @__PURE__ */ p((e2) => r.cherryPick(Pr(e2)), "CherryPicking")
  }[t.$type];
  s ? s(t) : D$1.error(`Unknown statement type: ${t.$type}`);
}, "parseStatement"), Or = /* @__PURE__ */ p((t) => ({
  id: t.id,
  msg: t.message ?? "",
  type: t.type !== void 0 ? u[t.type] : u.NORMAL,
  tags: t.tags ?? void 0
}), "parseCommit"), zr = /* @__PURE__ */ p((t) => ({
  name: t.name,
  order: t.order ?? 0
}), "parseBranch"), Gr = /* @__PURE__ */ p((t) => ({
  branch: t.branch,
  id: t.id ?? "",
  type: t.type !== void 0 ? u[t.type] : void 0,
  tags: t.tags ?? void 0
}), "parseMerge"), Hr = /* @__PURE__ */ p((t) => t.branch, "parseCheckout"), Pr = /* @__PURE__ */ p((t) => {
  var a;
  return {
    id: t.id,
    targetId: "",
    tags: ((a = t.tags) == null ? void 0 : a.length) === 0 ? void 0 : t.tags,
    parent: t.parent
  };
}, "parseCherryPicking"), Wr = {
  parse: /* @__PURE__ */ p(async (t) => {
    const r = await uy("gitGraph", t);
    D$1.debug(r), Ir(r, X);
  }, "parse")
}, S = dt(), b = S == null ? void 0 : S.gitGraph, R = 10, I = 40, k = 4, L = 2, O = 8, C = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), P = 30, G = /* @__PURE__ */ new Map(), W = [], M = 0, x = "LR", jr = /* @__PURE__ */ p(() => {
  C.clear(), E.clear(), G.clear(), M = 0, W = [], x = "LR";
}, "clear"), J = /* @__PURE__ */ p((t) => {
  const r = document.createElementNS("http://www.w3.org/2000/svg", "text");
  return (typeof t == "string" ? t.split(/\\n|\n|<br\s*\/?>/gi) : t).forEach((s) => {
    const e2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    e2.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), e2.setAttribute("dy", "1em"), e2.setAttribute("x", "0"), e2.setAttribute("class", "row"), e2.textContent = s.trim(), r.appendChild(e2);
  }), r;
}, "drawText"), Q = /* @__PURE__ */ p((t) => {
  let r, a, s;
  return x === "BT" ? (a = /* @__PURE__ */ p((e2, n) => e2 <= n, "comparisonFunc"), s = 1 / 0) : (a = /* @__PURE__ */ p((e2, n) => e2 >= n, "comparisonFunc"), s = 0), t.forEach((e2) => {
    var c, o;
    const n = x === "TB" || x == "BT" ? (c = E.get(e2)) == null ? void 0 : c.y : (o = E.get(e2)) == null ? void 0 : o.x;
    n !== void 0 && a(n, s) && (r = e2, s = n);
  }), r;
}, "findClosestParent"), Sr = /* @__PURE__ */ p((t) => {
  let r = "", a = 1 / 0;
  return t.forEach((s) => {
    const e2 = E.get(s).y;
    e2 <= a && (r = s, a = e2);
  }), r || void 0;
}, "findClosestParentBT"), Ar = /* @__PURE__ */ p((t, r, a) => {
  let s = a, e2 = a;
  const n = [];
  t.forEach((c) => {
    const o = r.get(c);
    if (!o)
      throw new Error(`Commit not found for key ${c}`);
    o.parents.length ? (s = Yr(o), e2 = Math.max(s, e2)) : n.push(o), Kr(o, s);
  }), s = e2, n.forEach((c) => {
    Nr(c, s, a);
  }), t.forEach((c) => {
    const o = r.get(c);
    if (o != null && o.parents.length) {
      const $ = Sr(o.parents);
      s = E.get($).y - I, s <= e2 && (e2 = s);
      const l = C.get(o.branch).pos, f = s - R;
      E.set(o.id, { x: l, y: f });
    }
  });
}, "setParallelBTPos"), Dr = /* @__PURE__ */ p((t) => {
  var s;
  const r = Q(t.parents.filter((e2) => e2 !== null));
  if (!r)
    throw new Error(`Closest parent not found for commit ${t.id}`);
  const a = (s = E.get(r)) == null ? void 0 : s.y;
  if (a === void 0)
    throw new Error(`Closest parent position not found for commit ${t.id}`);
  return a;
}, "findClosestParentPos"), Yr = /* @__PURE__ */ p((t) => Dr(t) + I, "calculateCommitPosition"), Kr = /* @__PURE__ */ p((t, r) => {
  const a = C.get(t.branch);
  if (!a)
    throw new Error(`Branch not found for commit ${t.id}`);
  const s = a.pos, e2 = r + R;
  return E.set(t.id, { x: s, y: e2 }), { x: s, y: e2 };
}, "setCommitPosition"), Nr = /* @__PURE__ */ p((t, r, a) => {
  const s = C.get(t.branch);
  if (!s)
    throw new Error(`Branch not found for commit ${t.id}`);
  const e2 = r + a, n = s.pos;
  E.set(t.id, { x: n, y: e2 });
}, "setRootPosition"), _r = /* @__PURE__ */ p((t, r, a, s, e2, n) => {
  if (n === u.HIGHLIGHT)
    t.append("rect").attr("x", a.x - 10).attr("y", a.y - 10).attr("width", 20).attr("height", 20).attr(
      "class",
      `commit ${r.id} commit-highlight${e2 % O} ${s}-outer`
    ), t.append("rect").attr("x", a.x - 6).attr("y", a.y - 6).attr("width", 12).attr("height", 12).attr(
      "class",
      `commit ${r.id} commit${e2 % O} ${s}-inner`
    );
  else if (n === u.CHERRY_PICK)
    t.append("circle").attr("cx", a.x).attr("cy", a.y).attr("r", 10).attr("class", `commit ${r.id} ${s}`), t.append("circle").attr("cx", a.x - 3).attr("cy", a.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${s}`), t.append("circle").attr("cx", a.x + 3).attr("cy", a.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${s}`), t.append("line").attr("x1", a.x + 3).attr("y1", a.y + 1).attr("x2", a.x).attr("y2", a.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${s}`), t.append("line").attr("x1", a.x - 3).attr("y1", a.y + 1).attr("x2", a.x).attr("y2", a.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${s}`);
  else {
    const c = t.append("circle");
    if (c.attr("cx", a.x), c.attr("cy", a.y), c.attr("r", r.type === u.MERGE ? 9 : 10), c.attr("class", `commit ${r.id} commit${e2 % O}`), n === u.MERGE) {
      const o = t.append("circle");
      o.attr("cx", a.x), o.attr("cy", a.y), o.attr("r", 6), o.attr(
        "class",
        `commit ${s} ${r.id} commit${e2 % O}`
      );
    }
    n === u.REVERSE && t.append("path").attr(
      "d",
      `M ${a.x - 5},${a.y - 5}L${a.x + 5},${a.y + 5}M${a.x - 5},${a.y + 5}L${a.x + 5},${a.y - 5}`
    ).attr("class", `commit ${s} ${r.id} commit${e2 % O}`);
  }
}, "drawCommitBullet"), Vr = /* @__PURE__ */ p((t, r, a, s) => {
  var e2;
  if (r.type !== u.CHERRY_PICK && (r.customId && r.type === u.MERGE || r.type !== u.MERGE) && (b != null && b.showCommitLabel)) {
    const n = t.append("g"), c = n.insert("rect").attr("class", "commit-label-bkg"), o = n.append("text").attr("x", s).attr("y", a.y + 25).attr("class", "commit-label").text(r.id), $ = (e2 = o.node()) == null ? void 0 : e2.getBBox();
    if ($ && (c.attr("x", a.posWithOffset - $.width / 2 - L).attr("y", a.y + 13.5).attr("width", $.width + 2 * L).attr("height", $.height + 2 * L), x === "TB" || x === "BT" ? (c.attr("x", a.x - ($.width + 4 * k + 5)).attr("y", a.y - 12), o.attr("x", a.x - ($.width + 4 * k)).attr("y", a.y + $.height - 12)) : o.attr("x", a.posWithOffset - $.width / 2), b.rotateCommitLabel))
      if (x === "TB" || x === "BT")
        o.attr(
          "transform",
          "rotate(-45, " + a.x + ", " + a.y + ")"
        ), c.attr(
          "transform",
          "rotate(-45, " + a.x + ", " + a.y + ")"
        );
      else {
        const l = -7.5 - ($.width + 10) / 25 * 9.5, f = 10 + $.width / 25 * 8.5;
        n.attr(
          "transform",
          "translate(" + l + ", " + f + ") rotate(-45, " + s + ", " + a.y + ")"
        );
      }
  }
}, "drawCommitLabel"), Xr = /* @__PURE__ */ p((t, r, a, s) => {
  var e2;
  if (r.tags.length > 0) {
    let n = 0, c = 0, o = 0;
    const $ = [];
    for (const l of r.tags.reverse()) {
      const f = t.insert("polygon"), g = t.append("circle"), d = t.append("text").attr("y", a.y - 16 - n).attr("class", "tag-label").text(l), y = (e2 = d.node()) == null ? void 0 : e2.getBBox();
      if (!y)
        throw new Error("Tag bbox not found");
      c = Math.max(c, y.width), o = Math.max(o, y.height), d.attr("x", a.posWithOffset - y.width / 2), $.push({
        tag: d,
        hole: g,
        rect: f,
        yOffset: n
      }), n += 20;
    }
    for (const { tag: l, hole: f, rect: g, yOffset: d } of $) {
      const y = o / 2, p2 = a.y - 19.2 - d;
      if (g.attr("class", "tag-label-bkg").attr(
        "points",
        `
      ${s - c / 2 - k / 2},${p2 + L}  
      ${s - c / 2 - k / 2},${p2 - L}
      ${a.posWithOffset - c / 2 - k},${p2 - y - L}
      ${a.posWithOffset + c / 2 + k},${p2 - y - L}
      ${a.posWithOffset + c / 2 + k},${p2 + y + L}
      ${a.posWithOffset - c / 2 - k},${p2 + y + L}`
      ), f.attr("cy", p2).attr("cx", s - c / 2 + k / 2).attr("r", 1.5).attr("class", "tag-hole"), x === "TB" || x === "BT") {
        const m2 = s + d;
        g.attr("class", "tag-label-bkg").attr(
          "points",
          `
        ${a.x},${m2 + 2}
        ${a.x},${m2 - 2}
        ${a.x + R},${m2 - y - 2}
        ${a.x + R + c + 4},${m2 - y - 2}
        ${a.x + R + c + 4},${m2 + y + 2}
        ${a.x + R},${m2 + y + 2}`
        ).attr("transform", "translate(12,12) rotate(45, " + a.x + "," + s + ")"), f.attr("cx", a.x + k / 2).attr("cy", m2).attr("transform", "translate(12,12) rotate(45, " + a.x + "," + s + ")"), l.attr("x", a.x + 5).attr("y", m2 + 3).attr("transform", "translate(14,14) rotate(45, " + a.x + "," + s + ")");
      }
    }
  }
}, "drawCommitTags"), Jr = /* @__PURE__ */ p((t) => {
  switch (t.customType ?? t.type) {
    case u.NORMAL:
      return "commit-normal";
    case u.REVERSE:
      return "commit-reverse";
    case u.HIGHLIGHT:
      return "commit-highlight";
    case u.MERGE:
      return "commit-merge";
    case u.CHERRY_PICK:
      return "commit-cherry-pick";
    default:
      return "commit-normal";
  }
}, "getCommitClassType"), Qr = /* @__PURE__ */ p((t, r, a, s) => {
  const e2 = { x: 0, y: 0 };
  if (t.parents.length > 0) {
    const n = Q(t.parents);
    if (n) {
      const c = s.get(n) ?? e2;
      return r === "TB" ? c.y + I : r === "BT" ? (s.get(t.id) ?? e2).y - I : c.x + I;
    }
  } else
    return r === "TB" ? P : r === "BT" ? (s.get(t.id) ?? e2).y - I : 0;
  return 0;
}, "calculatePosition"), Zr = /* @__PURE__ */ p((t, r, a) => {
  var c, o;
  const s = x === "BT" && a ? r : r + R, e2 = x === "TB" || x === "BT" ? s : (c = C.get(t.branch)) == null ? void 0 : c.pos, n = x === "TB" || x === "BT" ? (o = C.get(t.branch)) == null ? void 0 : o.pos : s;
  if (n === void 0 || e2 === void 0)
    throw new Error(`Position were undefined for commit ${t.id}`);
  return { x: n, y: e2, posWithOffset: s };
}, "getCommitPosition"), K = /* @__PURE__ */ p((t, r, a) => {
  if (!b)
    throw new Error("GitGraph config not found");
  const s = t.append("g").attr("class", "commit-bullets"), e2 = t.append("g").attr("class", "commit-labels");
  let n = x === "TB" || x === "BT" ? P : 0;
  const c = [...r.keys()], o = (b == null ? void 0 : b.parallelCommits) ?? false, $ = /* @__PURE__ */ p((f, g) => {
    var p2, m2;
    const d = (p2 = r.get(f)) == null ? void 0 : p2.seq, y = (m2 = r.get(g)) == null ? void 0 : m2.seq;
    return d !== void 0 && y !== void 0 ? d - y : 0;
  }, "sortKeys");
  let l = c.sort($);
  x === "BT" && (o && Ar(l, r, n), l = l.reverse()), l.forEach((f) => {
    var y;
    const g = r.get(f);
    if (!g)
      throw new Error(`Commit not found for key ${f}`);
    o && (n = Qr(g, x, n, E));
    const d = Zr(g, n, o);
    if (a) {
      const p2 = Jr(g), m2 = g.customType ?? g.type, q = ((y = C.get(g.branch)) == null ? void 0 : y.index) ?? 0;
      _r(s, g, d, p2, q, m2), Vr(e2, g, d, n), Xr(e2, g, d, n);
    }
    x === "TB" || x === "BT" ? E.set(g.id, { x: d.x, y: d.posWithOffset }) : E.set(g.id, { x: d.posWithOffset, y: d.y }), n = x === "BT" && o ? n + I : n + I + R, n > M && (M = n);
  });
}, "drawCommits"), Fr = /* @__PURE__ */ p((t, r, a, s, e2) => {
  const c = (x === "TB" || x === "BT" ? a.x < s.x : a.y < s.y) ? r.branch : t.branch, o = /* @__PURE__ */ p((l) => l.branch === c, "isOnBranchToGetCurve"), $ = /* @__PURE__ */ p((l) => l.seq > t.seq && l.seq < r.seq, "isBetweenCommits");
  return [...e2.values()].some((l) => $(l) && o(l));
}, "shouldRerouteArrow"), H = /* @__PURE__ */ p((t, r, a = 0) => {
  const s = t + Math.abs(t - r) / 2;
  if (a > 5)
    return s;
  if (W.every((c) => Math.abs(c - s) >= 10))
    return W.push(s), s;
  const n = Math.abs(t - r);
  return H(t, r - n / 5, a + 1);
}, "findLane"), Ur = /* @__PURE__ */ p((t, r, a, s) => {
  var y, p2, m2, q, Y;
  const e2 = E.get(r.id), n = E.get(a.id);
  if (e2 === void 0 || n === void 0)
    throw new Error(`Commit positions not found for commits ${r.id} and ${a.id}`);
  const c = Fr(r, a, e2, n, s);
  let o = "", $ = "", l = 0, f = 0, g = (y = C.get(a.branch)) == null ? void 0 : y.index;
  a.type === u.MERGE && r.id !== a.parents[0] && (g = (p2 = C.get(r.branch)) == null ? void 0 : p2.index);
  let d;
  if (c) {
    o = "A 10 10, 0, 0, 0,", $ = "A 10 10, 0, 0, 1,", l = 10, f = 10;
    const T = e2.y < n.y ? H(e2.y, n.y) : H(n.y, e2.y), v = e2.x < n.x ? H(e2.x, n.x) : H(n.x, e2.x);
    x === "TB" ? e2.x < n.x ? d = `M ${e2.x} ${e2.y} L ${v - l} ${e2.y} ${$} ${v} ${e2.y + f} L ${v} ${n.y - l} ${o} ${v + f} ${n.y} L ${n.x} ${n.y}` : (g = (m2 = C.get(r.branch)) == null ? void 0 : m2.index, d = `M ${e2.x} ${e2.y} L ${v + l} ${e2.y} ${o} ${v} ${e2.y + f} L ${v} ${n.y - l} ${$} ${v - f} ${n.y} L ${n.x} ${n.y}`) : x === "BT" ? e2.x < n.x ? d = `M ${e2.x} ${e2.y} L ${v - l} ${e2.y} ${o} ${v} ${e2.y - f} L ${v} ${n.y + l} ${$} ${v + f} ${n.y} L ${n.x} ${n.y}` : (g = (q = C.get(r.branch)) == null ? void 0 : q.index, d = `M ${e2.x} ${e2.y} L ${v + l} ${e2.y} ${$} ${v} ${e2.y - f} L ${v} ${n.y + l} ${o} ${v - f} ${n.y} L ${n.x} ${n.y}`) : e2.y < n.y ? d = `M ${e2.x} ${e2.y} L ${e2.x} ${T - l} ${o} ${e2.x + f} ${T} L ${n.x - l} ${T} ${$} ${n.x} ${T + f} L ${n.x} ${n.y}` : (g = (Y = C.get(r.branch)) == null ? void 0 : Y.index, d = `M ${e2.x} ${e2.y} L ${e2.x} ${T + l} ${$} ${e2.x + f} ${T} L ${n.x - l} ${T} ${o} ${n.x} ${T - f} L ${n.x} ${n.y}`);
  } else
    o = "A 20 20, 0, 0, 0,", $ = "A 20 20, 0, 0, 1,", l = 20, f = 20, x === "TB" ? (e2.x < n.x && (a.type === u.MERGE && r.id !== a.parents[0] ? d = `M ${e2.x} ${e2.y} L ${e2.x} ${n.y - l} ${o} ${e2.x + f} ${n.y} L ${n.x} ${n.y}` : d = `M ${e2.x} ${e2.y} L ${n.x - l} ${e2.y} ${$} ${n.x} ${e2.y + f} L ${n.x} ${n.y}`), e2.x > n.x && (o = "A 20 20, 0, 0, 0,", $ = "A 20 20, 0, 0, 1,", l = 20, f = 20, a.type === u.MERGE && r.id !== a.parents[0] ? d = `M ${e2.x} ${e2.y} L ${e2.x} ${n.y - l} ${$} ${e2.x - f} ${n.y} L ${n.x} ${n.y}` : d = `M ${e2.x} ${e2.y} L ${n.x + l} ${e2.y} ${o} ${n.x} ${e2.y + f} L ${n.x} ${n.y}`), e2.x === n.x && (d = `M ${e2.x} ${e2.y} L ${n.x} ${n.y}`)) : x === "BT" ? (e2.x < n.x && (a.type === u.MERGE && r.id !== a.parents[0] ? d = `M ${e2.x} ${e2.y} L ${e2.x} ${n.y + l} ${$} ${e2.x + f} ${n.y} L ${n.x} ${n.y}` : d = `M ${e2.x} ${e2.y} L ${n.x - l} ${e2.y} ${o} ${n.x} ${e2.y - f} L ${n.x} ${n.y}`), e2.x > n.x && (o = "A 20 20, 0, 0, 0,", $ = "A 20 20, 0, 0, 1,", l = 20, f = 20, a.type === u.MERGE && r.id !== a.parents[0] ? d = `M ${e2.x} ${e2.y} L ${e2.x} ${n.y + l} ${o} ${e2.x - f} ${n.y} L ${n.x} ${n.y}` : d = `M ${e2.x} ${e2.y} L ${n.x - l} ${e2.y} ${o} ${n.x} ${e2.y - f} L ${n.x} ${n.y}`), e2.x === n.x && (d = `M ${e2.x} ${e2.y} L ${n.x} ${n.y}`)) : (e2.y < n.y && (a.type === u.MERGE && r.id !== a.parents[0] ? d = `M ${e2.x} ${e2.y} L ${n.x - l} ${e2.y} ${$} ${n.x} ${e2.y + f} L ${n.x} ${n.y}` : d = `M ${e2.x} ${e2.y} L ${e2.x} ${n.y - l} ${o} ${e2.x + f} ${n.y} L ${n.x} ${n.y}`), e2.y > n.y && (a.type === u.MERGE && r.id !== a.parents[0] ? d = `M ${e2.x} ${e2.y} L ${n.x - l} ${e2.y} ${o} ${n.x} ${e2.y - f} L ${n.x} ${n.y}` : d = `M ${e2.x} ${e2.y} L ${e2.x} ${n.y + l} ${$} ${e2.x + f} ${n.y} L ${n.x} ${n.y}`), e2.y === n.y && (d = `M ${e2.x} ${e2.y} L ${n.x} ${n.y}`));
  if (d === void 0)
    throw new Error("Line definition not found");
  t.append("path").attr("d", d).attr("class", "arrow arrow" + g % O);
}, "drawArrow"), re = /* @__PURE__ */ p((t, r) => {
  const a = t.append("g").attr("class", "commit-arrows");
  [...r.keys()].forEach((s) => {
    const e2 = r.get(s);
    e2.parents && e2.parents.length > 0 && e2.parents.forEach((n) => {
      Ur(a, r.get(n), e2, r);
    });
  });
}, "drawArrows"), ee = /* @__PURE__ */ p((t, r) => {
  const a = t.append("g");
  r.forEach((s, e2) => {
    var p2;
    const n = e2 % O, c = (p2 = C.get(s.name)) == null ? void 0 : p2.pos;
    if (c === void 0)
      throw new Error(`Position not found for branch ${s.name}`);
    const o = a.append("line");
    o.attr("x1", 0), o.attr("y1", c), o.attr("x2", M), o.attr("y2", c), o.attr("class", "branch branch" + n), x === "TB" ? (o.attr("y1", P), o.attr("x1", c), o.attr("y2", M), o.attr("x2", c)) : x === "BT" && (o.attr("y1", M), o.attr("x1", c), o.attr("y2", P), o.attr("x2", c)), W.push(c);
    const $ = s.name, l = J($), f = a.insert("rect"), d = a.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + n);
    d.node().appendChild(l);
    const y = l.getBBox();
    f.attr("class", "branchLabelBkg label" + n).attr("rx", 4).attr("ry", 4).attr("x", -y.width - 4 - ((b == null ? void 0 : b.rotateCommitLabel) === true ? 30 : 0)).attr("y", -y.height / 2 + 8).attr("width", y.width + 18).attr("height", y.height + 4), d.attr(
      "transform",
      "translate(" + (-y.width - 14 - ((b == null ? void 0 : b.rotateCommitLabel) === true ? 30 : 0)) + ", " + (c - y.height / 2 - 1) + ")"
    ), x === "TB" ? (f.attr("x", c - y.width / 2 - 10).attr("y", 0), d.attr("transform", "translate(" + (c - y.width / 2 - 5) + ", 0)")) : x === "BT" ? (f.attr("x", c - y.width / 2 - 10).attr("y", M), d.attr("transform", "translate(" + (c - y.width / 2 - 5) + ", " + M + ")")) : f.attr("transform", "translate(-19, " + (c - y.height / 2) + ")");
  });
}, "drawBranches"), te = /* @__PURE__ */ p(function(t, r, a, s, e2) {
  return C.set(t, { pos: r, index: a }), r += 50 + (e2 ? 40 : 0) + (x === "TB" || x === "BT" ? s.width / 2 : 0), r;
}, "setBranchPosition"), ae = /* @__PURE__ */ p(function(t, r, a, s) {
  if (jr(), D$1.debug("in gitgraph renderer", t + `
`, "id:", r, a), !b)
    throw new Error("GitGraph config not found");
  const e2 = b.rotateCommitLabel ?? false, n = s.db;
  G = n.getCommits();
  const c = n.getBranchesAsObjArray();
  x = n.getDirection();
  const o = Li(`[id="${r}"]`);
  let $ = 0;
  c.forEach((l, f) => {
    var q;
    const g = J(l.name), d = o.append("g"), y = d.insert("g").attr("class", "branchLabel"), p2 = y.insert("g").attr("class", "label branch-label");
    (q = p2.node()) == null || q.appendChild(g);
    const m2 = g.getBBox();
    $ = te(l.name, $, f, m2, e2), p2.remove(), y.remove(), d.remove();
  }), K(o, G, false), b.showBranches && ee(o, c), re(o, G), K(o, G, true), ge.insertTitle(
    o,
    "gitTitleText",
    b.titleTopMargin ?? 0,
    n.getDiagramTitle()
  ), sy(
    void 0,
    o,
    b.diagramPadding,
    b.useMaxWidth
  );
}, "draw"), ne = {
  draw: ae
}, se = /* @__PURE__ */ p((t) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(
  (r) => `
        .branch-label${r} { fill: ${t["gitBranchLabel" + r]}; }
        .commit${r} { stroke: ${t["git" + r]}; fill: ${t["git" + r]}; }
        .commit-highlight${r} { stroke: ${t["gitInv" + r]}; fill: ${t["gitInv" + r]}; }
        .label${r}  { fill: ${t["git" + r]}; }
        .arrow${r} { stroke: ${t["git" + r]}; }
        `
).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`, "getStyles"), oe = se, $e = {
  parser: Wr,
  db: X,
  renderer: ne,
  styles: oe
};
export {
  $e as diagram
};
