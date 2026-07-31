(() => {
  "use strict";
  const r = window.LOAN_RESULTS;
  if (!r) {
    document.body.innerHTML = "<main><h1>Results unavailable</h1><p>Run analysis/train.py to generate web/results.js.</p></main>";
    return;
  }
  const $ = (id) => document.getElementById(id);
  const pct = (n, digits = 1) => `${(n * 100).toFixed(digits)}%`;
  const dec = (n, digits = 3) => Number(n).toFixed(digits);
  const num = (n) => Number(n).toLocaleString("en-GB");
  const set = (id, value) => { if ($(id)) $(id).textContent = value; };
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  const label = (value) => String(value).replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const m = r.test.metrics;
  set("selected-model", r.selection.selected_model);
  set("selection-title", r.selection.selected_model);
  set("hero-ap", dec(m.average_precision));
  set("hero-summary", `${pct(m.recall)} recall and ${pct(m.precision)} precision on ${num(r.split.test.rows)} sealed test applications.`);
  set("metric-roc", dec(m.roc_auc)); set("metric-f1", dec(m.f1)); set("metric-recall", pct(m.recall)); set("metric-test-n", num(r.split.test.rows));
  set("data-rows", num(r.dataset.rows)); set("missing-total", num(r.dataset.missing_total)); set("duplicate-total", num(r.dataset.duplicate_rows));
  set("tuning-iterations", `${r.tuning.iterations} × 5`); set("best-cv-score", dec(r.tuning.best_cv_average_precision));
  set("threshold-inline", dec(r.tuning.selected_threshold));
  set("test-ap", dec(m.average_precision)); set("test-roc", dec(m.roc_auc)); set("test-f1", dec(m.f1)); set("test-balanced", dec(m.balanced_accuracy)); set("test-brier", dec(m.brier));
  set("tp-copy", `${num(m.confusion_matrix.tp)} true approvals`); set("fp-copy", `${num(m.confusion_matrix.fp)} false approvals`); set("fn-copy", `${num(m.confusion_matrix.fn)} missed approvals`);
  set("meta-seed", r.metadata.random_state); set("meta-sklearn", r.metadata.scikit_learn); set("meta-generated", new Date(r.metadata.generated_at_utc).toLocaleString("en-GB")); set("meta-runtime", `${r.metadata.runtime_seconds}s`);

  const bestParams = JSON.stringify(r.tuning.best_parameters, null, 2);
  set("best-params", bestParams);
  $("print-report").addEventListener("click", () => window.print());
  $("copy-params").addEventListener("click", async (event) => {
    try { await navigator.clipboard.writeText(bestParams); event.currentTarget.textContent = "Copied"; }
    catch { event.currentTarget.textContent = "Select text to copy"; }
  });

  function svg(width, height, content, aria) {
    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(aria)}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
  }
  function barChart(rows, options = {}) {
    const width = 760, rowH = options.rowHeight || 42, left = options.left || 180, right = 60, top = 20;
    const height = top + rows.length * rowH + 25;
    const max = options.max || Math.max(...rows.map((x) => x.value), 0.001);
    const available = width - left - right;
    const content = rows.map((row, i) => {
      const y = top + i * rowH, barW = Math.max(1, row.value / max * available);
      return `<text x="${left - 10}" y="${y + 17}" text-anchor="end" font-size="12" fill="#52615f">${esc(row.label)}</text><rect x="${left}" y="${y}" width="${barW}" height="24" rx="4" fill="${row.color || "#1e6559"}"/><text x="${Math.min(left + barW + 8, width - 38)}" y="${y + 17}" font-size="12" font-weight="700" fill="#172a2a">${esc(options.format ? options.format(row.value) : dec(row.value))}</text>`;
    }).join("");
    return svg(width, height, content, options.aria || "Horizontal bar chart");
  }

  const approved = r.dataset.target_counts["1"], rejected = r.dataset.target_counts["0"], total = approved + rejected;
  const radius = 68, circumference = 2 * Math.PI * radius, approvedArc = approved / total * circumference;
  $("class-balance-chart").innerHTML = svg(420, 225, `<g transform="translate(110 112) rotate(-90)"><circle r="${radius}" fill="none" stroke="#d9ddd7" stroke-width="28"/><circle r="${radius}" fill="none" stroke="#eb6b3d" stroke-width="28" stroke-dasharray="${approvedArc} ${circumference-approvedArc}"/></g><text x="110" y="105" text-anchor="middle" font-size="28" font-weight="800" fill="#172a2a">${pct(approved/total)}</text><text x="110" y="126" text-anchor="middle" font-size="11" fill="#657270">approved</text><rect x="220" y="68" width="11" height="11" rx="2" fill="#eb6b3d"/><text x="240" y="78" font-size="12" fill="#172a2a">Approved · ${num(approved)}</text><rect x="220" y="104" width="11" height="11" rx="2" fill="#d9ddd7"/><text x="240" y="114" font-size="12" fill="#172a2a">Rejected · ${num(rejected)}</text>`, "Approval class balance");
  const outlierRows = [...r.dataset.outliers_iqr].sort((a,b) => b.rate-a.rate).slice(0,6).map(x => ({label: label(x.feature), value:x.rate, color:x.feature === "person_age" || x.feature === "person_emp_exp" ? "#eb6b3d" : "#1e6559"}));
  $("outlier-chart").innerHTML = barChart(outlierRows, {max:Math.max(...outlierRows.map(x=>x.value)) * 1.18, left:185, format:(v)=>pct(v), aria:"IQR outlier rate by feature"});

  $("split-chart").innerHTML = ["train","validation","test"].map((key) => { const x=r.split[key]; return `<div class="split-segment split-${key}"><div><span>${key}</span><strong>${num(x.rows)}</strong></div><small>${pct(x.rate,0)}</small></div>`; }).join("");

  const metricColours = {"average_precision":"#183f3a","roc_auc":"#1e6559","f1":"#eb6b3d"};
  function groupedModelChart() {
    const width=820,height=360,left=170,top=32,bottom=65,innerW=width-left-25,innerH=height-top-bottom;
    const models=r.validation_comparison, keys=["average_precision","roc_auc","f1"], groupH=innerH/models.length, barH=12;
    let c="";
    [0,.25,.5,.75,1].forEach(v=>{const x=left+v*innerW;c+=`<line x1="${x}" y1="${top-8}" x2="${x}" y2="${height-bottom+8}" stroke="#d8d7cf"/><text x="${x}" y="${height-28}" text-anchor="middle" font-size="10" fill="#657270">${v.toFixed(2)}</text>`});
    models.forEach((model,i)=>{const y=top+i*groupH;c+=`<text x="${left-12}" y="${y+24}" text-anchor="end" font-size="11" fill="#172a2a">${esc(model.model)}</text>`;keys.forEach((key,j)=>{c+=`<rect x="${left}" y="${y+j*(barH+3)}" width="${model[key]*innerW}" height="${barH}" rx="3" fill="${metricColours[key]}"/>`})});
    keys.forEach((key,j)=>{c+=`<rect x="${left+j*175}" y="${height-12}" width="10" height="10" rx="2" fill="${metricColours[key]}"/><text x="${left+15+j*175}" y="${height-3}" font-size="10" fill="#52615f">${label(key)}</text>`});
    return svg(width,height,c,"Validation metric comparison across models");
  }
  $("model-chart").innerHTML=groupedModelChart();
  $("model-table").querySelector("tbody").innerHTML=r.validation_comparison.map(x=>`<tr class="${x.model===r.selection.selected_model?"winner":""}"><td>${esc(x.model)}</td><td>${dec(x.average_precision)}</td><td>${dec(x.roc_auc)}</td><td>${dec(x.f1)}</td><td>${dec(x.precision)}</td><td>${dec(x.recall)}</td><td>${dec(x.balanced_accuracy)}</td></tr>`).join("");

  $("parameter-space").innerHTML=Object.entries(r.tuning.parameter_space).map(([key,values])=>`<span>${esc(label(key))}: ${esc(values.join(" · "))}</span>`).join("");
  $("tuning-table").querySelector("tbody").innerHTML=r.tuning.top_results.slice(0,6).map(x=>`<tr><td>${x.rank}</td><td>${dec(x.mean_cv_average_precision,4)}</td><td>±${dec(x.std_cv_average_precision,4)}</td><td>${dec(x.mean_train_average_precision-x.mean_cv_average_precision,4)}</td><td title="${esc(JSON.stringify(x.parameters))}">${esc(Object.entries(x.parameters).map(([k,v])=>`${k}=${v}`).join(", "))}</td></tr>`).join("");

  function lineChart(series, aria) {
    const width=800,height=330,left=55,right=20,top=20,bottom=50,iw=width-left-right,ih=height-top-bottom;
    let c="";[0,.25,.5,.75,1].forEach(v=>{const y=top+(1-v)*ih,x=left+v*iw;c+=`<line x1="${left}" y1="${y}" x2="${width-right}" y2="${y}" stroke="#d8d7cf"/><text x="${left-10}" y="${y+4}" text-anchor="end" font-size="10" fill="#657270">${v.toFixed(2)}</text><text x="${x}" y="${height-22}" text-anchor="middle" font-size="10" fill="#657270">${v.toFixed(2)}</text>`});
    series.forEach((s,idx)=>{const points=s.points.map(p=>`${left+p.x*iw},${top+(1-p.y)*ih}`).join(" ");c+=`<polyline points="${points}" fill="none" stroke="${s.color}" stroke-width="3" stroke-linejoin="round"/>`;c+=`<rect x="${left+idx*170}" y="${height-10}" width="11" height="4" fill="${s.color}"/><text x="${left+17+idx*170}" y="${height-5}" font-size="10" fill="#52615f">${esc(s.name)}</text>`});
    return svg(width,height,c,aria);
  }
  const thresholdSeries=["precision","recall","f1"].map((key,i)=>({name:label(key),color:["#183f3a","#eb6b3d","#1e6559"][i],points:r.tuning.threshold_candidates.map(x=>({x:x.threshold,y:x[key]}))}));
  $("threshold-chart").innerHTML=lineChart(thresholdSeries,"Precision recall and F1 across decision thresholds");

  const cm=m.confusion_matrix;
  $("confusion-chart").innerHTML=`<div></div><div class="axis">Predicted reject</div><div class="axis">Predicted approve</div><div class="axis">Actual reject</div><div class="cell good"><span><strong>${num(cm.tn)}</strong><small>true rejects</small></span></div><div class="cell bad"><span><strong>${num(cm.fp)}</strong><small>false approvals</small></span></div><div class="axis">Actual approve</div><div class="cell bad"><span><strong>${num(cm.fn)}</strong><small>missed approvals</small></span></div><div class="cell good"><span><strong>${num(cm.tp)}</strong><small>true approvals</small></span></div>`;
  $("curve-chart").innerHTML=lineChart([{name:`ROC · ${dec(m.roc_auc)}`,color:"#183f3a",points:r.test.roc_curve},{name:`PR · ${dec(m.average_precision)}`,color:"#eb6b3d",points:r.test.precision_recall_curve}],"ROC and precision recall curves");

  const importanceRows=r.test.feature_importance.slice(0,10).map(x=>({label:label(x.feature),value:Math.max(0,x.importance_mean),color:x.importance_mean<0?"#9da6a4":"#1e6559"}));
  $("importance-chart").innerHTML=barChart(importanceRows,{max:Math.max(...importanceRows.map(x=>x.value))*1.12,left:245,rowHeight:36,format:(v)=>dec(v,3),aria:"Permutation feature importance"});

  $("fairness-table").querySelector("tbody").innerHTML=r.test.subgroup_audit.gender.map(x=>`<tr><td>${esc(label(x.group))}</td><td>${num(x.n)}</td><td>${pct(x.actual_approval_rate)}</td><td>${pct(x.predicted_approval_rate)}</td><td>${pct(x.precision)}</td><td>${pct(x.recall)}</td></tr>`).join("");
  $("limitations-list").innerHTML=r.limitations.map((text,i)=>`<div><span>LIMIT ${String(i+1).padStart(2,"0")}</span><p>${esc(text)}</p></div>`).join("");
})();
