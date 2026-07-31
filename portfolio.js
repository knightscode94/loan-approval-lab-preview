(() => {
  "use strict";
  const portfolio = window.PORTFOLIO_RESULTS;
  const expansion = window.EXPANSION_RESULTS;
  const loan = window.LOAN_RESULTS;
  if (!portfolio || !expansion || !loan) return;
  const esc = (value) => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
  const label = value => String(value).replaceAll("_", " ").replace(/\b\w/g, c => c.toUpperCase());
  const dec = (value, digits = 3) => Number(value).toFixed(digits);
  const pct = (value, digits = 1) => `${(Number(value) * 100).toFixed(digits)}%`;
  const num = value => Number(value).toLocaleString("en-GB");
  const money = (value, digits = 0) => `$${Number(value).toLocaleString("en-US", {maximumFractionDigits: digits})}`;
  const allStudies = [...portfolio.studies, ...expansion.studies];
  const studies = Object.fromEntries(allStudies.map(study => [study.id, study]));

  function activateTab(name, updateHash = true) {
    const target = document.querySelector(`[data-tab-panel="${name}"]`);
    if (!target) return;
    document.querySelectorAll("[data-tab-panel]").forEach(panel => { panel.hidden = panel !== target; });
    document.querySelectorAll("[data-tab-target]").forEach(button => {
      if (button.getAttribute("role") === "tab") button.setAttribute("aria-selected", String(button.dataset.tabTarget === name));
    });
    if (updateHash) history.replaceState(null, "", `#tab-${name}`);
    window.scrollTo({top: 0, behavior: "auto"});
  }
  document.querySelectorAll("[data-tab-target]").forEach(control => control.addEventListener("click", event => {
    event.preventDefault(); activateTab(control.dataset.tabTarget);
  }));
  const initial = location.hash.startsWith("#tab-") ? location.hash.slice(5) : "overview";
  activateTab(initial, false);

  function svg(width, height, content, aria) {
    return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(aria)}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
  }
  function bars(rows, options = {}) {
    const width = 760, rowHeight = options.rowHeight || 38, left = options.left || 200, top = 16, right = 65;
    const height = top + rows.length * rowHeight + 20, max = options.max || Math.max(...rows.map(row => row.value), .001), available = width-left-right;
    const content = rows.map((row, index) => {
      const y = top + index * rowHeight, size = Math.max(1, row.value / max * available);
      return `<text x="${left-10}" y="${y+17}" text-anchor="end" font-size="11" fill="#52615f">${esc(row.label)}</text><rect x="${left}" y="${y}" width="${size}" height="23" rx="4" fill="${row.color || "#1e6559"}"/><text x="${Math.min(left+size+7,width-45)}" y="${y+16}" font-size="11" font-weight="700" fill="#172a2a">${esc(options.format ? options.format(row.value) : dec(row.value))}</text>`;
    }).join("");
    return svg(width, height, content, options.aria || "Horizontal bar chart");
  }
  function multiModelChart(study) {
    const classification = study.type === "classification";
    const rows = study.comparison.map(item => ({
      label: item.model,
      value: classification ? item.average_precision : item.rmse,
      color: item.model === study.selection.model ? "#eb6b3d" : item.model.includes("baseline") || item.model.includes("Baseline") ? "#a9afab" : "#1e6559"
    }));
    return bars(rows, {left:220, max:Math.max(...rows.map(row=>row.value))*1.12, format:value=>classification?dec(value):money(value), aria:`${study.title} model comparison`});
  }
  function importanceChart(study) {
    const rows = study.test.feature_importance.slice(0,10).map(item => ({label:label(item.feature),value:Math.max(0,item.importance_mean)}));
    return bars(rows, {left:230,rowHeight:34,max:Math.max(...rows.map(row=>row.value),.001)*1.1,format:value=>study.type==="regression"?money(value):dec(value,3),aria:`${study.title} permutation importance`});
  }
  function lineChart(series, aria) {
    const width=760,height=300,left=48,right=18,top=18,bottom=46,iw=width-left-right,ih=height-top-bottom;
    let content="";
    [0,.25,.5,.75,1].forEach(value=>{const x=left+value*iw,y=top+(1-value)*ih;content+=`<line x1="${left}" y1="${y}" x2="${width-right}" y2="${y}" stroke="#d8d7cf"/><text x="${left-8}" y="${y+4}" text-anchor="end" font-size="9" fill="#657270">${value.toFixed(2)}</text><text x="${x}" y="${height-20}" text-anchor="middle" font-size="9" fill="#657270">${value.toFixed(2)}</text>`});
    series.forEach((item,index)=>{const points=item.points.map(point=>`${left+point.x*iw},${top+(1-point.y)*ih}`).join(" ");content+=`<polyline points="${points}" fill="none" stroke="${item.color}" stroke-width="3"/>`;content+=`<rect x="${left+index*180}" y="${height-8}" width="11" height="4" fill="${item.color}"/><text x="${left+16+index*180}" y="${height-3}" font-size="10" fill="#52615f">${esc(item.name)}</text>`});
    return svg(width,height,content,aria);
  }
  function scatterChart(points, aria) {
    const width=760,height=330,left=70,right=25,top=20,bottom=55;
    const values=points.flatMap(point=>[point.actual,point.predicted]), min=Math.min(...values),max=Math.max(...values),span=max-min||1,iw=width-left-right,ih=height-top-bottom;
    const x=value=>left+(value-min)/span*iw, y=value=>top+(1-(value-min)/span)*ih;
    let content=`<line x1="${x(min)}" y1="${y(min)}" x2="${x(max)}" y2="${y(max)}" stroke="#eb6b3d" stroke-width="2" stroke-dasharray="7 5"/>`;
    points.forEach(point=>{content+=`<circle cx="${x(point.actual)}" cy="${y(point.predicted)}" r="2.8" fill="#1e6559" fill-opacity=".45"/>`});
    for(let i=0;i<=4;i++){const value=min+span*i/4;content+=`<text x="${x(value)}" y="${height-25}" text-anchor="middle" font-size="9" fill="#657270">${Math.round(value).toLocaleString()}</text><text x="${left-10}" y="${y(value)+3}" text-anchor="end" font-size="9" fill="#657270">${Math.round(value).toLocaleString()}</text>`}
    content+=`<text x="${left+iw/2}" y="${height-5}" text-anchor="middle" font-size="10" fill="#52615f">Actual</text><text x="13" y="${top+ih/2}" text-anchor="middle" font-size="10" fill="#52615f" transform="rotate(-90 13 ${top+ih/2})">Predicted</text>`;
    return svg(width,height,content,aria);
  }
  function residualChart(study) {
    const rows=study.test.residual_bins.map(item=>({label:study.id==="housing"?money(item.actual):money(item.actual),value:item.mae}));
    return bars(rows,{left:120,rowHeight:34,max:Math.max(...rows.map(row=>row.value))*1.15,format:value=>money(value),aria:`${study.title} error by target band`});
  }

  const overviewItems = [
    {id:"loan",title:"Loan approval",type:"Classification",model:loan.selection.selected_model,score:loan.test.metrics.average_precision,scoreLabel:"Average precision",display:dec(loan.test.metrics.average_precision),note:"Strong synthetic holdout; approval labels are not repayment outcomes.",tone:"strong"},
    ...allStudies.map(study => study.type === "classification" ? {id:study.id,title:study.title,type:"Classification",model:study.selection.model,score:study.test.metrics.average_precision,scoreLabel:"Average precision",display:dec(study.test.metrics.average_precision),note:`Prevalence ${dec(study.dataset.positive_rate)} · ROC–AUC ${dec(study.test.metrics.roc_auc)}`,tone:study.test.metrics.average_precision-study.dataset.positive_rate>.08?"strong":"warning"} : {id:study.id,title:study.title,type:"Regression",model:study.selection.model,score:study.test.metrics.r2,scoreLabel:"Test R²",display:dec(study.test.metrics.r2),note:`RMSE ${money(study.test.metrics.rmse)} · MAE ${money(study.test.metrics.mae)}`,tone:"strong"})
  ];
  document.getElementById("portfolio-cards").innerHTML=overviewItems.map((item,index)=>`<button class="portfolio-card is-${item.tone}" data-open-study="${item.id}" type="button"><div><span class="card-number">STUDY ${String(index+1).padStart(2,"0")} · ${esc(item.type)}</span><h3>${esc(item.title)}</h3><p>${esc(item.model)}<br>${esc(item.note)}</p></div><div class="card-score"><strong>${esc(item.display)}</strong><span>${esc(item.scoreLabel)}</span></div></button>`).join("");
  document.querySelectorAll("[data-open-study]").forEach(button=>button.addEventListener("click",()=>activateTab(button.dataset.openStudy)));
  document.getElementById("overview-matrix").innerHTML=`<table><caption>Method and evidence matrix</caption><thead><tr><th>Study</th><th>Task</th><th>Rows</th><th>Selected model</th><th>Primary test result</th><th>Critical boundary</th></tr></thead><tbody>${overviewItems.map(item=>{const study=studies[item.id];const rows=item.id==="loan"?loan.dataset.rows:study.dataset.rows;const boundary=item.id==="loan"?"Synthetic approval policy, not credit outcome":study.limitations[0];return `<tr><td>${esc(item.title)}</td><td>${esc(item.type)}</td><td>${num(rows)}</td><td>${esc(item.model)}</td><td>${esc(item.display)} ${esc(item.scoreLabel)}</td><td>${esc(boundary)}</td></tr>`}).join("")}</tbody></table>`;

  function metricCells(study) {
    const metrics=study.test.metrics;
    if(study.type==="classification") return `<div><span>Average precision</span><strong>${dec(metrics.average_precision)}</strong><small>baseline ${dec(study.dataset.positive_rate)}</small></div><div><span>ROC–AUC</span><strong>${dec(metrics.roc_auc)}</strong><small>0.5 = chance</small></div><div><span>F1</span><strong>${dec(metrics.f1)}</strong><small>threshold ${dec(metrics.threshold)}</small></div><div><span>Balanced accuracy</span><strong>${dec(metrics.balanced_accuracy)}</strong><small>equal class weight</small></div>`;
    return `<div><span>RMSE</span><strong>${money(metrics.rmse)}</strong><small>penalises large errors</small></div><div><span>MAE</span><strong>${money(metrics.mae)}</strong><small>typical absolute error</small></div><div><span>R²</span><strong>${dec(metrics.r2)}</strong><small>variance explained</small></div><div><span>MAPE</span><strong>${pct(metrics.mape)}</strong><small>relative error</small></div>`;
  }
  function comparisonTable(study) {
    const classification=study.type==="classification";
    const headers=classification?["Model","Avg precision","ROC–AUC","F1","Precision","Recall"]:["Model","RMSE","MAE","R²","MAPE"];
    const rows=study.comparison.map(item=>`<tr class="${item.model===study.selection.model?"selected":""}"><td>${esc(item.model)}</td>${classification?`<td>${dec(item.average_precision)}</td><td>${dec(item.roc_auc)}</td><td>${dec(item.f1)}</td><td>${dec(item.precision)}</td><td>${dec(item.recall)}</td>`:`<td>${money(item.rmse)}</td><td>${money(item.mae)}</td><td>${dec(item.r2)}</td><td>${pct(item.mape)}</td>`}</tr>`).join("");
    return `<div class="table-wrap generic-table"><table><thead><tr>${headers.map(header=>`<th>${esc(header)}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }
  function evaluationVisuals(study) {
    if(study.type==="classification") {
      const matrix=study.test.metrics.confusion_matrix;
      const curve=lineChart([{name:`ROC · ${dec(study.test.metrics.roc_auc)}`,color:"#183f3a",points:study.test.roc_curve},{name:`PR · ${dec(study.test.metrics.average_precision)}`,color:"#eb6b3d",points:study.test.precision_recall_curve}],`${study.title} curves`);
      return `<div class="study-two"><div class="study-panel"><h3>Confusion matrix</h3><div class="mini-confusion"><div class="good"><strong>${num(matrix.tn)}</strong><span>True negative</span></div><div class="bad"><strong>${num(matrix.fp)}</strong><span>False positive</span></div><div class="bad"><strong>${num(matrix.fn)}</strong><span>False negative</span></div><div class="good"><strong>${num(matrix.tp)}</strong><span>True positive</span></div></div></div><div class="study-panel"><h3>ROC & precision–recall curves</h3><div class="generic-chart">${curve}</div></div></div>`;
    }
    return `<div class="study-two"><div class="study-panel"><h3>Actual vs predicted</h3><p>The dashed diagonal is perfect agreement.</p><div class="generic-chart">${scatterChart(study.test.prediction_sample,`${study.title} actual versus predicted`)}</div></div><div class="study-panel"><h3>Error by target band</h3><p>Mean absolute error across eight equally populated target bands.</p><div class="generic-chart">${residualChart(study)}</div></div></div>`;
  }
  function renderStudy(study) {
    const classification=study.type==="classification", primary=classification?dec(study.test.metrics.average_precision):money(study.test.metrics.rmse), primaryLabel=classification?"test average precision":"test RMSE";
    const leakage=study.leakage?`<div class="leakage-alert"><span>LEAKAGE</span><div><h3>${esc(study.leakage.rule)} gives ${pct(study.leakage.rule_accuracy,0)} accuracy</h3><p>${esc(study.leakage.finding)} The report excludes <code>${esc(study.leakage.feature)}</code> from every fitted model.</p></div></div>`:"";
    const positiveCount=classification?study.dataset.target_counts[study.dataset.positive_label||"High"]:0;
    const targetSummary=classification?`<div><span>Positive class</span><strong>${pct(study.dataset.positive_rate)}</strong><small>${num(positiveCount)} ${esc(study.dataset.positive_label||"high")} records</small></div>`:`<div><span>Target median</span><strong>${money(study.dataset.target_summary.median)}</strong><small>range ${money(study.dataset.target_summary.minimum)}–${money(study.dataset.target_summary.maximum)}</small></div>`;
    const bestParams=Object.entries(study.tuning.best_parameters).map(([key,value])=>`<span>${esc(label(key))}: ${esc(value)}</span>`).join("");
    const cvScore=classification?dec(study.tuning.best_cv_score):money(study.tuning.best_cv_score);
    return `<section class="study-hero"><div><p class="eyebrow">${classification?"Classification":"Regression"} study · sealed test</p><h1>${esc(study.title)}</h1><p class="lede">${esc(study.business_question)}</p><div class="study-badges"><span>${num(study.dataset.rows)} rows</span><span>${study.dataset.features_used} model features</span><span>Seed ${portfolio.metadata.random_state}</span></div></div><aside class="study-verdict"><span>Selected model</span><h2>${esc(study.selection.model)}</h2><strong>${esc(primary)}</strong><small>${esc(primaryLabel)}</small></aside></section>
    <div class="study-body">
      <section class="study-stage"><div class="stage-head"><span>01</span><div><p class="eyebrow">Problem & approach</p><h2>Define the decision before the model</h2></div></div><p class="stage-copy">${esc(study.business_question)} This is framed as supervised ${study.type}, with <code>${esc(study.target)}</code> as the target and ${esc(study.primary_metric)} as the primary selection metric.</p>${leakage}<div class="study-two"><div class="study-panel"><h3>Business use</h3><p>${esc(study.business_use||(classification?"Use probability-ranked records for planning and review—not as a guarantee.":study.id==="housing"?"Support district-level planning and valuation review—not individual property appraisal.":"Support budgeting and anomaly review while retaining domain judgement."))}</p></div><div class="study-panel"><h3>Candidate families</h3><p>${classification?"Dummy prior, logistic regression, random forest, and histogram gradient boosting.":"Median baseline, ridge regression, random forest, and histogram gradient boosting."}</p></div></div></section>
      <section class="study-stage"><div class="stage-head"><span>02</span><div><p class="eyebrow">Data audit</p><h2>Know what the table can support</h2></div></div><div class="fact-grid"><div><span>Rows</span><strong>${num(study.dataset.rows)}</strong><small>model-ready records</small></div><div><span>Missing cells</span><strong>${num(study.dataset.missing_total)}</strong><small>handled in-pipeline</small></div><div><span>Duplicates</span><strong>${num(study.dataset.duplicate_rows)}</strong><small>model-field duplicates</small></div>${targetSummary}</div><div class="study-two"><div class="study-panel"><h3>Largest IQR outlier rates</h3><div class="generic-chart">${bars([...study.dataset.outliers_iqr].sort((a,b)=>b.rate-a.rate).slice(0,6).map(item=>({label:label(item.feature),value:item.rate})),{left:190,format:value=>pct(value),max:Math.max(...study.dataset.outliers_iqr.map(item=>item.rate),.01)*1.1})}</div></div><div class="study-panel"><h3>Audit interpretation</h3><p>${esc(study.audit_interpretation||(study.id==="bmw"?"No missing values or duplicates. The decisive issue is the target's deterministic dependence on realised volume.":study.id==="housing"?"207 bedroom counts are missing and the target is capped at $500,001. Aggregate count features are strongly right-skewed.":"No missing rows or duplicates were found. Source spelling errors were standardised without changing values."))}</p></div></div></section>
      <section class="study-stage"><div class="stage-head"><span>03</span><div><p class="eyebrow">Preparation & partition</p><h2>Fit transformations on training data only</h2></div></div><p class="stage-copy">${esc(study.preparation.feature_selection)}</p><div class="study-two"><div class="study-panel"><h3>Included features</h3><div class="feature-chips">${[...study.preparation.numeric_features,...study.preparation.categorical_features].map(feature=>`<span>${esc(feature)}</span>`).join("")}${(study.preparation.excluded_features||[]).map(feature=>`<span class="excluded">${esc(feature)}</span>`).join("")}</div></div><div class="study-panel"><h3>Pipeline</h3><ol>${study.preparation.steps.map(step=>`<li>${esc(step)}</li>`).join("")}</ol></div></div><div class="fact-grid"><div><span>Train</span><strong>${num(study.split.train.rows)}</strong><small>${pct(study.split.train.rate,0)} · fit</small></div><div><span>Validation</span><strong>${num(study.split.validation.rows)}</strong><small>${pct(study.split.validation.rate,0)} · select</small></div><div><span>Test</span><strong>${num(study.split.test.rows)}</strong><small>${pct(study.split.test.rate,0)} · open once</small></div><div><span>Strategy</span><strong>${study.split.strategy.includes("group")?"Grouped":classification?"Stratified":"Seeded"}</strong><small>fixed random state</small></div></div></section>
      <section class="study-stage"><div class="stage-head"><span>04</span><div><p class="eyebrow">Model selection</p><h2>Compare before optimising</h2></div></div><p class="stage-copy">Every candidate uses identical rows and preprocessing. <strong>${esc(study.selection.model)}</strong> was selected because ${esc(study.selection.reason.toLowerCase())}</p><div class="study-panel"><h3>Validation comparison</h3><div class="generic-chart">${multiModelChart(study)}</div>${comparisonTable(study)}</div></section>
      <section class="study-stage"><div class="stage-head"><span>05</span><div><p class="eyebrow">Hyperparameter tuning</p><h2>Search training folds, not the test set</h2></div></div><div class="fact-grid"><div><span>Method</span><strong>Random search</strong><small>structured parameter ranges</small></div><div><span>Configurations</span><strong>${study.tuning.iterations}</strong><small>candidate settings</small></div><div><span>Cross-validation</span><strong>5 folds</strong><small>training partition only</small></div><div><span>Best CV score</span><strong>${esc(cvScore)}</strong><small>${esc(study.tuning.scoring)}</small></div></div><div class="study-two"><div class="study-panel"><h3>Winning parameters</h3><div class="parameter-grid">${bestParams}</div></div><div class="model-note"><strong>Trade-off</strong><p>${classification?"Regularisation, leaf size, and tree complexity balance fit against variance. The validation threshold trades precision for recall after ranking quality is selected.":"Tree depth, leaf size, learning rate, and regularisation balance local fit against generalisation. The final setting is refit on train + validation only after selection."}</p></div></div></section>
      <section class="study-stage"><div class="stage-head"><span>06</span><div><p class="eyebrow">Sealed-test evaluation</p><h2>The result that counts</h2></div></div><div class="evaluation-grid">${metricCells(study)}</div>${evaluationVisuals(study)}<div class="study-panel"><h3>Permutation importance</h3><p>Drop in the primary score when one raw feature is shuffled. Association is not causation.</p><div class="generic-chart">${importanceChart(study)}</div></div>${study.interpretation?`<p class="note"><strong>Interpretation:</strong> ${esc(study.interpretation)}</p>`:""}</section>
      <section class="study-stage"><div class="stage-head"><span>!</span><div><p class="eyebrow">Limitations & next evidence</p><h2>What this result cannot claim</h2></div></div><div class="study-limitations">${study.limitations.map((text,index)=>`<div><span>LIMIT ${String(index+1).padStart(2,"0")}</span><p>${esc(text)}</p></div>`).join("")}</div></section>
    </div>`;
  }
  allStudies.forEach(study => { document.getElementById(`study-${study.id}`).innerHTML=renderStudy(study); });
})();
