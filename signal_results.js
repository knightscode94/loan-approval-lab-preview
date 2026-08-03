window.SIGNAL_RESULTS = {
  "metadata": {
    "generated_at_utc": "2026-07-31T13:45:13.358636+00:00",
    "random_state": 42,
    "python": "3.12.10",
    "scikit_learn": "1.8.0",
    "pandas": "3.0.1",
    "search_iterations_per_study": 6
  },
  "studies": [
    {
      "id": "requirements",
      "title": "AI job-requirement prevalence",
      "type": "regression",
      "target": "requirements_target",
      "business_question": "Can prior observed prevalence and job-market segment estimate the next reported share of listings requiring each AI skill tier?",
      "business_use": "Support directional workforce-planning and segment monitoring, not hiring quotas or claims about an entire labour market.",
      "primary_metric": "Root mean squared error (RMSE)",
      "relative_metric_label": "sMAPE",
      "source_file": "ai-requirements-index.csv",
      "runtime_seconds": 20.67,
      "dataset": {
        "rows": 2097,
        "columns": 8,
        "features_used": 7,
        "missing_total": 0,
        "duplicate_rows": 0,
        "missing_by_column": {
          "total_listings": 0,
          "days_since_start": 0,
          "lag_pct_1": 0,
          "trailing_pct_3": 0,
          "category": 0,
          "seniority": 0,
          "tier": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "total_listings",
            "count": 222,
            "rate": 0.10586552217453506,
            "minimum": 1.0,
            "maximum": 11337.0,
            "clip_low": 1.0,
            "clip_high": 5773.399999999997
          },
          {
            "feature": "days_since_start",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 125.0,
            "clip_low": 0.0,
            "clip_high": 116.0
          },
          {
            "feature": "lag_pct_1",
            "count": 177,
            "rate": 0.0844062947067239,
            "minimum": 0.0,
            "maximum": 100.0,
            "clip_low": 0.0,
            "clip_high": 100.0
          },
          {
            "feature": "trailing_pct_3",
            "count": 187,
            "rate": 0.08917501192179304,
            "minimum": 0.0,
            "maximum": 100.0,
            "clip_low": 0.0,
            "clip_high": 96.776
          }
        ],
        "categories": {
          "category": [
            {
              "value": "engineering",
              "count": 360
            },
            {
              "value": "devops",
              "count": 354
            },
            {
              "value": "product",
              "count": 351
            },
            {
              "value": "data",
              "count": 345
            },
            {
              "value": "security",
              "count": 345
            },
            {
              "value": "ai",
              "count": 342
            }
          ],
          "seniority": [
            {
              "value": "all",
              "count": 540
            },
            {
              "value": "mid",
              "count": 540
            },
            {
              "value": "senior",
              "count": 540
            },
            {
              "value": "entry",
              "count": 477
            }
          ],
          "tier": [
            {
              "value": "any_ai",
              "count": 699
            },
            {
              "value": "genai",
              "count": 699
            },
            {
              "value": "ml",
              "count": 699
            }
          ]
        },
        "target_summary": {
          "minimum": 0.0,
          "maximum": 100.0,
          "mean": 18.73376251788269,
          "median": 10.9,
          "std": 22.183052528274853
        },
        "unit": "percentage_points"
      },
      "audit_interpretation": "The published pct differs from 100 × listings_with_ai / total_listings only by rounding. Lag features are shifted within segment before the chronological split, preventing future values from entering earlier rows.",
      "split": {
        "train": {
          "rows": 1449,
          "rate": 0.6909871244635193
        },
        "validation": {
          "rows": 288,
          "rate": 0.13733905579399142
        },
        "test": {
          "rows": 360,
          "rate": 0.17167381974248927
        },
        "strategy": "Chronological 70/15/15 split by snapshot period"
      },
      "preparation": {
        "numeric_features": [
          "total_listings",
          "days_since_start",
          "lag_pct_1",
          "trailing_pct_3"
        ],
        "categorical_features": [
          "category",
          "seniority",
          "tier"
        ],
        "excluded_features": [
          "listings_with_ai",
          "required_count",
          "snapshot_date"
        ],
        "feature_selection": "The percentage numerator fields are excluded because listings_with_ai / total_listings directly defines pct. Only prior-period percentages, segment labels, time, and contemporaneous denominator size are retained.",
        "steps": [
          "Construct lag features from prior periods only",
          "Median/mode imputation",
          "Train-learned 1st to 99th percentile clipping",
          "One-hot encoding",
          "Standard scaling"
        ]
      },
      "comparison": [
        {
          "model": "Median baseline",
          "rmse": 13.66783912653675,
          "mae": 12.605208333333334,
          "r2": -0.5735504324804144,
          "mape": 1.1476028147977975
        },
        {
          "model": "Ridge regression",
          "rmse": 2.8779044251835773,
          "mae": 2.546071919644002,
          "r2": 0.9302356288664198,
          "mape": 0.9795723588049943
        },
        {
          "model": "Random forest",
          "rmse": 1.3426453458205418,
          "mae": 0.7196297598575173,
          "r2": 0.9848153924724793,
          "mape": 0.3400134018415321
        },
        {
          "model": "Histogram gradient boosting",
          "rmse": 0.9997310995557799,
          "mae": 0.6089536238760468,
          "r2": 0.9915812550129709,
          "mape": 0.36608806521063064
        }
      ],
      "selection": {
        "model": "Histogram gradient boosting",
        "reason": "Lowest validation RMSE; MAE used as a tie-breaker."
      },
      "tuning": {
        "method": "RandomizedSearchCV",
        "iterations": 6,
        "folds": 5,
        "scoring": "negative RMSE",
        "parameter_space": {
          "learning_rate": [
            0.03,
            0.05,
            0.08,
            0.12
          ],
          "max_iter": [
            160,
            220,
            320
          ],
          "max_leaf_nodes": [
            15,
            31,
            63
          ],
          "min_samples_leaf": [
            8,
            15,
            25,
            40
          ],
          "l2_regularization": [
            0.0,
            0.1,
            1.0,
            5.0
          ],
          "max_depth": [
            null,
            3,
            5
          ]
        },
        "best_parameters": {
          "min_samples_leaf": 40,
          "max_leaf_nodes": 15,
          "max_iter": 220,
          "max_depth": null,
          "learning_rate": 0.08,
          "l2_regularization": 1.0
        },
        "best_cv_score": 7.719023559439708,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 7.719023559439708,
            "std_cv_score": 1.7635738429338768,
            "train_score": 5.129424372046941,
            "parameters": {
              "min_samples_leaf": 40,
              "max_leaf_nodes": 15,
              "max_iter": 220,
              "max_depth": null,
              "learning_rate": 0.08,
              "l2_regularization": 1.0
            }
          },
          {
            "rank": 2,
            "mean_cv_score": 7.9945404498205574,
            "std_cv_score": 1.9755932406186394,
            "train_score": 5.663859924080391,
            "parameters": {
              "min_samples_leaf": 25,
              "max_leaf_nodes": 63,
              "max_iter": 160,
              "max_depth": 3,
              "learning_rate": 0.08,
              "l2_regularization": 1.0
            }
          },
          {
            "rank": 3,
            "mean_cv_score": 8.010514718487794,
            "std_cv_score": 2.0693578778406585,
            "train_score": 5.309142864975211,
            "parameters": {
              "min_samples_leaf": 25,
              "max_leaf_nodes": 15,
              "max_iter": 220,
              "max_depth": 3,
              "learning_rate": 0.08,
              "l2_regularization": 1.0
            }
          },
          {
            "rank": 4,
            "mean_cv_score": 8.08870058987485,
            "std_cv_score": 1.8048610960136864,
            "train_score": 6.420203781943135,
            "parameters": {
              "min_samples_leaf": 40,
              "max_leaf_nodes": 31,
              "max_iter": 220,
              "max_depth": 3,
              "learning_rate": 0.05,
              "l2_regularization": 5.0
            }
          },
          {
            "rank": 5,
            "mean_cv_score": 8.261707794554034,
            "std_cv_score": 2.445216537775544,
            "train_score": 3.581874072026274,
            "parameters": {
              "min_samples_leaf": 25,
              "max_leaf_nodes": 63,
              "max_iter": 320,
              "max_depth": 5,
              "learning_rate": 0.12,
              "l2_regularization": 1.0
            }
          },
          {
            "rank": 6,
            "mean_cv_score": 8.686286630451141,
            "std_cv_score": 2.411925450383727,
            "train_score": 1.855810369376232,
            "parameters": {
              "min_samples_leaf": 8,
              "max_leaf_nodes": 63,
              "max_iter": 320,
              "max_depth": 5,
              "learning_rate": 0.12,
              "l2_regularization": 0.1
            }
          }
        ],
        "tuned_validation_metrics": {
          "rmse": 1.6928379323777827,
          "mae": 0.9901375186052574,
          "r2": 0.9758614202529676,
          "mape": 0.41023703924148386
        }
      },
      "test": {
        "metrics": {
          "rmse": 1.0831141552227923,
          "mae": 0.5437461934624642,
          "r2": 0.9904822243544521,
          "mape": 0.30972911034175904
        },
        "feature_importance": [
          {
            "feature": "lag_pct_1",
            "importance_mean": 7.991586778306751,
            "importance_std": 0.13409513888905672
          },
          {
            "feature": "trailing_pct_3",
            "importance_mean": 5.167454237012207,
            "importance_std": 0.14244791005282162
          },
          {
            "feature": "category",
            "importance_mean": 1.6059139231703237,
            "importance_std": 0.06976436575758992
          },
          {
            "feature": "total_listings",
            "importance_mean": 0.435139771810523,
            "importance_std": 0.05616663393469054
          },
          {
            "feature": "seniority",
            "importance_mean": 0.2243420527163041,
            "importance_std": 0.029784374649614722
          },
          {
            "feature": "tier",
            "importance_mean": 0.21074472327883412,
            "importance_std": 0.035749168645153095
          },
          {
            "feature": "days_since_start",
            "importance_mean": 0.0,
            "importance_std": 0.0
          }
        ],
        "prediction_sample": [
          {
            "actual": 6.5,
            "predicted": 6.421653622893849
          },
          {
            "actual": 1.9,
            "predicted": 2.2561723461052905
          },
          {
            "actual": 2.6,
            "predicted": 2.586829484643561
          },
          {
            "actual": 1.9,
            "predicted": 2.075408298866983
          },
          {
            "actual": 6.3,
            "predicted": 5.715589354803539
          },
          {
            "actual": 4.6,
            "predicted": 4.765470059183621
          },
          {
            "actual": 3.0,
            "predicted": 2.8409930580988285
          },
          {
            "actual": 3.2,
            "predicted": 3.1832367441715608
          },
          {
            "actual": 3.4,
            "predicted": 3.899147850064917
          },
          {
            "actual": 3.0,
            "predicted": 2.9851385877409164
          },
          {
            "actual": 4.7,
            "predicted": 4.765470059183621
          },
          {
            "actual": 4.6,
            "predicted": 4.4238877407495085
          },
          {
            "actual": 0.0,
            "predicted": 0.43715782884044396
          },
          {
            "actual": 33.6,
            "predicted": 33.54519442234063
          },
          {
            "actual": 17.9,
            "predicted": 17.181379960905414
          },
          {
            "actual": 0.0,
            "predicted": 0.6052862782868317
          },
          {
            "actual": 4.2,
            "predicted": 3.6386591950068
          },
          {
            "actual": 0.0,
            "predicted": -0.12191547967295725
          },
          {
            "actual": 33.6,
            "predicted": 23.87821835761863
          },
          {
            "actual": 9.4,
            "predicted": 9.484829841133687
          },
          {
            "actual": 11.2,
            "predicted": 10.948823233418132
          },
          {
            "actual": 1.6,
            "predicted": 1.4196566094254053
          },
          {
            "actual": 4.0,
            "predicted": 4.160462205960627
          },
          {
            "actual": 11.1,
            "predicted": 10.948823233418132
          },
          {
            "actual": 9.2,
            "predicted": 9.233568924042928
          },
          {
            "actual": 2.3,
            "predicted": 1.7253301498262352
          },
          {
            "actual": 2.2,
            "predicted": 2.4298990677931465
          },
          {
            "actual": 2.4,
            "predicted": 1.4334419180871847
          },
          {
            "actual": 10.8,
            "predicted": 10.515513701484764
          },
          {
            "actual": 40.2,
            "predicted": 40.02354106376824
          },
          {
            "actual": 4.3,
            "predicted": 4.656203638926455
          },
          {
            "actual": 0.0,
            "predicted": -0.11002620938958717
          },
          {
            "actual": 0.0,
            "predicted": -0.5262026985886237
          },
          {
            "actual": 4.4,
            "predicted": 4.656203638926455
          },
          {
            "actual": 6.5,
            "predicted": 6.421653622893849
          },
          {
            "actual": 9.4,
            "predicted": 9.632023375483369
          },
          {
            "actual": 6.2,
            "predicted": 5.715589354803539
          },
          {
            "actual": 6.3,
            "predicted": 6.421653622893849
          },
          {
            "actual": 9.5,
            "predicted": 9.233568924042928
          },
          {
            "actual": 7.2,
            "predicted": 7.559580490221186
          },
          {
            "actual": 1.7,
            "predicted": 1.521319402658728
          },
          {
            "actual": 0.0,
            "predicted": 0.4107897104385354
          },
          {
            "actual": 7.5,
            "predicted": 7.825678389872243
          },
          {
            "actual": 38.5,
            "predicted": 40.21153951392639
          },
          {
            "actual": 1.7,
            "predicted": 1.9590086355339071
          },
          {
            "actual": 6.4,
            "predicted": 5.715589354803539
          },
          {
            "actual": 9.3,
            "predicted": 9.369136628985697
          },
          {
            "actual": 14.0,
            "predicted": 14.135412179054397
          },
          {
            "actual": 6.5,
            "predicted": 6.065835788195488
          },
          {
            "actual": 0.0,
            "predicted": 0.8053408480335488
          },
          {
            "actual": 2.5,
            "predicted": 2.941914723235621
          },
          {
            "actual": 2.3,
            "predicted": 2.1553609791728947
          },
          {
            "actual": 0.0,
            "predicted": -0.255860032198256
          },
          {
            "actual": 40.1,
            "predicted": 40.32084342661335
          },
          {
            "actual": 3.6,
            "predicted": 3.6581211952821207
          },
          {
            "actual": 7.8,
            "predicted": 7.825678389872243
          },
          {
            "actual": 11.2,
            "predicted": 10.667311715955204
          },
          {
            "actual": 0.0,
            "predicted": 0.6438085323352576
          },
          {
            "actual": 3.0,
            "predicted": 3.1832367441715608
          },
          {
            "actual": 6.9,
            "predicted": 7.421406708794508
          },
          {
            "actual": 0.0,
            "predicted": 0.07482583633274112
          },
          {
            "actual": 8.7,
            "predicted": 8.183548271213644
          },
          {
            "actual": 0.0,
            "predicted": -0.007026593526456901
          },
          {
            "actual": 10.6,
            "predicted": 10.326313722507209
          },
          {
            "actual": 7.3,
            "predicted": 7.6949599349856195
          },
          {
            "actual": 7.8,
            "predicted": 7.834986352859524
          },
          {
            "actual": 35.1,
            "predicted": 25.015319952379436
          },
          {
            "actual": 2.3,
            "predicted": 2.1553609791728947
          },
          {
            "actual": 0.0,
            "predicted": -0.11002620938958717
          },
          {
            "actual": 1.5,
            "predicted": 1.4196566094254053
          },
          {
            "actual": 3.6,
            "predicted": 3.378497145888818
          },
          {
            "actual": 1.7,
            "predicted": 1.8584141260190803
          },
          {
            "actual": 4.6,
            "predicted": 4.4238877407495085
          },
          {
            "actual": 0.0,
            "predicted": 0.9061143526305442
          },
          {
            "actual": 8.2,
            "predicted": 7.834986352859524
          },
          {
            "actual": 4.2,
            "predicted": 4.279373614263849
          },
          {
            "actual": 0.0,
            "predicted": -0.5262026985886237
          },
          {
            "actual": 0.0,
            "predicted": 0.3644967837344237
          },
          {
            "actual": 9.5,
            "predicted": 9.74069488331689
          },
          {
            "actual": 2.2,
            "predicted": 2.4298990677931465
          },
          {
            "actual": 1.2,
            "predicted": 0.9745064838312179
          },
          {
            "actual": 7.5,
            "predicted": 7.637877530036071
          },
          {
            "actual": 8.7,
            "predicted": 8.042279064323907
          },
          {
            "actual": 5.7,
            "predicted": 4.615926385000781
          },
          {
            "actual": 4.3,
            "predicted": 4.4238877407495085
          },
          {
            "actual": 2.4,
            "predicted": 2.524735451681105
          },
          {
            "actual": 5.6,
            "predicted": 6.093040822187344
          },
          {
            "actual": 10.7,
            "predicted": 9.845157221856864
          },
          {
            "actual": 1.8,
            "predicted": 2.027707593764846
          },
          {
            "actual": 3.9,
            "predicted": 4.508741852167801
          },
          {
            "actual": 4.5,
            "predicted": 4.4238877407495085
          },
          {
            "actual": 14.4,
            "predicted": 14.117501388223795
          },
          {
            "actual": 1.4,
            "predicted": 0.7812350404294403
          },
          {
            "actual": 7.3,
            "predicted": 7.559580490221186
          },
          {
            "actual": 7.3,
            "predicted": 7.768595984922694
          },
          {
            "actual": 2.8,
            "predicted": 3.412341239747451
          },
          {
            "actual": 35.0,
            "predicted": 38.60631592519165
          },
          {
            "actual": 4.3,
            "predicted": 4.6733528873624595
          },
          {
            "actual": 7.5,
            "predicted": 8.034067972927604
          },
          {
            "actual": 3.0,
            "predicted": 2.9851385877409164
          },
          {
            "actual": 2.8,
            "predicted": 2.379358311806626
          },
          {
            "actual": 9.2,
            "predicted": 9.233568924042928
          },
          {
            "actual": 0.0,
            "predicted": 0.5789181598849232
          },
          {
            "actual": 33.1,
            "predicted": 26.58998397796142
          },
          {
            "actual": 13.4,
            "predicted": 12.31897228438642
          },
          {
            "actual": 0.0,
            "predicted": 0.9061143526305442
          },
          {
            "actual": 11.2,
            "predicted": 10.797025218947692
          },
          {
            "actual": 8.6,
            "predicted": 8.270739165031246
          },
          {
            "actual": 0.0,
            "predicted": -0.3803688757799548
          },
          {
            "actual": 1.5,
            "predicted": 1.4196566094254053
          },
          {
            "actual": 20.4,
            "predicted": 20.993895303300135
          },
          {
            "actual": 7.4,
            "predicted": 7.825678389872243
          },
          {
            "actual": 6.5,
            "predicted": 6.421653622893849
          },
          {
            "actual": 2.7,
            "predicted": 2.7775086629110795
          },
          {
            "actual": 0.0,
            "predicted": 0.07482583633274112
          },
          {
            "actual": 6.3,
            "predicted": 6.065835788195488
          },
          {
            "actual": 3.8,
            "predicted": 7.2095206961508165
          },
          {
            "actual": 2.1,
            "predicted": 1.7888145450139843
          },
          {
            "actual": 1.7,
            "predicted": 1.9710558795045383
          },
          {
            "actual": 2.8,
            "predicted": 2.7775086629110795
          },
          {
            "actual": 6.9,
            "predicted": 6.582202974771357
          },
          {
            "actual": 13.7,
            "predicted": 12.427960629856607
          },
          {
            "actual": 2.2,
            "predicted": 2.4298990677931465
          },
          {
            "actual": 3.1,
            "predicted": 3.3748612903636213
          },
          {
            "actual": 7.2,
            "predicted": 7.970041783492846
          },
          {
            "actual": 1.2,
            "predicted": 0.9745064838312179
          },
          {
            "actual": 46.7,
            "predicted": 46.29732447552709
          },
          {
            "actual": 0.5,
            "predicted": 0.2146967621989366
          },
          {
            "actual": 3.2,
            "predicted": 2.6948776300756068
          },
          {
            "actual": 46.3,
            "predicted": 45.55097275242744
          },
          {
            "actual": 1.6,
            "predicted": 1.8584141260190803
          },
          {
            "actual": 21.7,
            "predicted": 20.321151376272343
          },
          {
            "actual": 6.7,
            "predicted": 6.421653622893849
          },
          {
            "actual": 0.5,
            "predicted": 0.2146967621989366
          },
          {
            "actual": 34.3,
            "predicted": 34.043049483564374
          },
          {
            "actual": 7.5,
            "predicted": 8.034067972927604
          },
          {
            "actual": 1.8,
            "predicted": 2.027707593764846
          },
          {
            "actual": 0.0,
            "predicted": 0.6052862782868317
          },
          {
            "actual": 28.8,
            "predicted": 28.70020577958783
          },
          {
            "actual": 0.8,
            "predicted": 0.6472175511410835
          },
          {
            "actual": 5.6,
            "predicted": 6.093040822187344
          },
          {
            "actual": 6.3,
            "predicted": 6.260843821523927
          },
          {
            "actual": 0.0,
            "predicted": 0.43233709846854496
          },
          {
            "actual": 7.7,
            "predicted": 7.768595984922694
          },
          {
            "actual": 3.2,
            "predicted": 3.1832367441715608
          },
          {
            "actual": 2.0,
            "predicted": 2.2561723461052905
          },
          {
            "actual": 45.1,
            "predicted": 45.55097275242744
          },
          {
            "actual": 7.3,
            "predicted": 7.559580490221186
          },
          {
            "actual": 21.1,
            "predicted": 20.15439698553949
          },
          {
            "actual": 4.0,
            "predicted": 4.508741852167801
          },
          {
            "actual": 0.0,
            "predicted": 0.6052862782868317
          },
          {
            "actual": 3.9,
            "predicted": 4.160462205960627
          },
          {
            "actual": 3.0,
            "predicted": 3.3748612903636213
          },
          {
            "actual": 2.3,
            "predicted": 2.1553609791728947
          },
          {
            "actual": 1.5,
            "predicted": 1.4196566094254053
          },
          {
            "actual": 3.3,
            "predicted": 2.683574101102146
          },
          {
            "actual": 8.0,
            "predicted": 7.834986352859524
          },
          {
            "actual": 2.1,
            "predicted": 2.4298990677931465
          },
          {
            "actual": 2.2,
            "predicted": 1.7253301498262352
          },
          {
            "actual": 4.6,
            "predicted": 4.765470059183621
          },
          {
            "actual": 6.4,
            "predicted": 6.611090254915876
          },
          {
            "actual": 0.0,
            "predicted": 0.6438085323352576
          },
          {
            "actual": 1.2,
            "predicted": 0.9745064838312179
          },
          {
            "actual": 8.7,
            "predicted": 8.270739165031246
          },
          {
            "actual": 2.3,
            "predicted": 1.7937044524409014
          },
          {
            "actual": 3.8,
            "predicted": 7.2095206961508165
          },
          {
            "actual": 3.1,
            "predicted": 2.4967794736449624
          },
          {
            "actual": 0.0,
            "predicted": 0.43715782884044396
          },
          {
            "actual": 1.8,
            "predicted": 2.2561723461052905
          },
          {
            "actual": 0.5,
            "predicted": 0.5837331559533346
          },
          {
            "actual": 28.7,
            "predicted": 28.70020577958783
          },
          {
            "actual": 8.0,
            "predicted": 7.834986352859524
          },
          {
            "actual": 7.4,
            "predicted": 7.690298945107809
          },
          {
            "actual": 7.4,
            "predicted": 7.421406708794508
          },
          {
            "actual": 21.5,
            "predicted": 20.15439698553949
          },
          {
            "actual": 0.5,
            "predicted": 0.32186584128330803
          },
          {
            "actual": 3.6,
            "predicted": 3.378497145888818
          },
          {
            "actual": 8.3,
            "predicted": 7.9550881705063095
          },
          {
            "actual": 0.0,
            "predicted": -0.3803688757799548
          },
          {
            "actual": 19.4,
            "predicted": 18.371201698151687
          },
          {
            "actual": 3.4,
            "predicted": 3.899147850064917
          },
          {
            "actual": 2.4,
            "predicted": 2.586829484643561
          },
          {
            "actual": 4.7,
            "predicted": 4.536223946904738
          },
          {
            "actual": 0.0,
            "predicted": 0.3644967837344237
          },
          {
            "actual": 34.1,
            "predicted": 33.54519442234063
          },
          {
            "actual": 10.5,
            "predicted": 10.326313722507209
          },
          {
            "actual": 8.5,
            "predicted": 7.9550881705063095
          },
          {
            "actual": 2.5,
            "predicted": 2.586829484643561
          },
          {
            "actual": 2.2,
            "predicted": 2.0582107979619844
          },
          {
            "actual": 5.6,
            "predicted": 6.093040822187344
          },
          {
            "actual": 4.3,
            "predicted": 4.015489219669404
          },
          {
            "actual": 0.0,
            "predicted": 0.9061143526305442
          },
          {
            "actual": 2.3,
            "predicted": 1.9022689339516603
          },
          {
            "actual": 0.0,
            "predicted": 0.6438085323352576
          },
          {
            "actual": 9.7,
            "predicted": 9.74069488331689
          },
          {
            "actual": 35.3,
            "predicted": 33.23926991635574
          },
          {
            "actual": 40.5,
            "predicted": 39.42389963518727
          },
          {
            "actual": 1.3,
            "predicted": 0.8251778356839594
          },
          {
            "actual": 3.3,
            "predicted": 3.450502900252363
          },
          {
            "actual": 8.2,
            "predicted": 7.9550881705063095
          },
          {
            "actual": 2.7,
            "predicted": 2.7775086629110795
          },
          {
            "actual": 0.0,
            "predicted": 0.9061143526305442
          },
          {
            "actual": 0.5,
            "predicted": 0.2146967621989366
          },
          {
            "actual": 3.6,
            "predicted": 4.178771899458221
          },
          {
            "actual": 1.8,
            "predicted": 2.2561723461052905
          },
          {
            "actual": 10.4,
            "predicted": 9.608256537777171
          },
          {
            "actual": 1.8,
            "predicted": 1.9590086355339071
          },
          {
            "actual": 18.7,
            "predicted": 17.076497011017107
          },
          {
            "actual": 19.3,
            "predicted": 18.371201698151687
          },
          {
            "actual": 4.4,
            "predicted": 7.2095206961508165
          },
          {
            "actual": 6.4,
            "predicted": 6.065835788195488
          },
          {
            "actual": 40.2,
            "predicted": 39.42389963518727
          },
          {
            "actual": 2.8,
            "predicted": 2.6556002119698654
          },
          {
            "actual": 10.6,
            "predicted": 9.608256537777171
          },
          {
            "actual": 1.2,
            "predicted": 0.9745064838312179
          },
          {
            "actual": 4.3,
            "predicted": 7.6164784533398375
          },
          {
            "actual": 0.0,
            "predicted": 0.6052862782868317
          },
          {
            "actual": 4.7,
            "predicted": 4.4238877407495085
          },
          {
            "actual": 0.0,
            "predicted": 0.6438085323352576
          },
          {
            "actual": 4.4,
            "predicted": 4.536223946904738
          },
          {
            "actual": 10.9,
            "predicted": 9.979044445496703
          },
          {
            "actual": 1.6,
            "predicted": 1.4829508409157208
          },
          {
            "actual": 0.0,
            "predicted": -0.255860032198256
          },
          {
            "actual": 0.0,
            "predicted": 0.7538115306505097
          },
          {
            "actual": 21.3,
            "predicted": 19.964524735123238
          },
          {
            "actual": 42.3,
            "predicted": 41.705640521129396
          },
          {
            "actual": 8.6,
            "predicted": 8.270739165031246
          },
          {
            "actual": 3.7,
            "predicted": 3.0188895534126443
          },
          {
            "actual": 1.8,
            "predicted": 1.8237906905784975
          },
          {
            "actual": 0.5,
            "predicted": 0.5640034703031034
          },
          {
            "actual": 4.5,
            "predicted": 4.015489219669404
          },
          {
            "actual": 33.3,
            "predicted": 34.043049483564374
          },
          {
            "actual": 34.6,
            "predicted": 31.883554212715524
          },
          {
            "actual": 19.5,
            "predicted": 18.163916689063633
          },
          {
            "actual": 2.6,
            "predicted": 2.941914723235621
          },
          {
            "actual": 1.5,
            "predicted": 1.4293244179008455
          },
          {
            "actual": 5.5,
            "predicted": 6.037132112870988
          },
          {
            "actual": 11.4,
            "predicted": 10.948823233418132
          },
          {
            "actual": 11.0,
            "predicted": 10.781093977087474
          },
          {
            "actual": 1.7,
            "predicted": 2.027707593764846
          },
          {
            "actual": 3.6,
            "predicted": 1.096584281699194
          },
          {
            "actual": 2.4,
            "predicted": 2.1265851005766514
          },
          {
            "actual": 3.4,
            "predicted": 3.278065542058921
          },
          {
            "actual": 3.1,
            "predicted": 4.280286011741417
          },
          {
            "actual": 1.8,
            "predicted": 1.4207248931439007
          },
          {
            "actual": 2.2,
            "predicted": 2.4298990677931465
          },
          {
            "actual": 7.6,
            "predicted": 8.034067972927604
          },
          {
            "actual": 47.1,
            "predicted": 46.29732447552709
          },
          {
            "actual": 29.2,
            "predicted": 28.70020577958783
          },
          {
            "actual": 7.4,
            "predicted": 7.8393233286062225
          },
          {
            "actual": 7.0,
            "predicted": 6.582202974771357
          },
          {
            "actual": 10.9,
            "predicted": 10.661645774183263
          },
          {
            "actual": 4.6,
            "predicted": 4.536223946904738
          },
          {
            "actual": 17.9,
            "predicted": 17.076497011017107
          },
          {
            "actual": 9.4,
            "predicted": 9.773818266728943
          },
          {
            "actual": 6.9,
            "predicted": 7.8393233286062225
          },
          {
            "actual": 1.2,
            "predicted": 0.9745064838312179
          },
          {
            "actual": 18.1,
            "predicted": 17.076497011017107
          },
          {
            "actual": 10.1,
            "predicted": 9.499268192306985
          },
          {
            "actual": 1.5,
            "predicted": 1.4196566094254053
          },
          {
            "actual": 7.5,
            "predicted": 7.903349518040984
          },
          {
            "actual": 10.9,
            "predicted": 10.781093977087474
          },
          {
            "actual": 3.5,
            "predicted": 3.899147850064917
          },
          {
            "actual": 4.0,
            "predicted": 4.160462205960627
          },
          {
            "actual": 19.1,
            "predicted": 18.371201698151687
          },
          {
            "actual": 3.8,
            "predicted": 4.160462205960627
          },
          {
            "actual": 1.5,
            "predicted": 1.4829508409157208
          },
          {
            "actual": 1.5,
            "predicted": 1.477025123002983
          },
          {
            "actual": 33.1,
            "predicted": 30.487540283647952
          },
          {
            "actual": 5.5,
            "predicted": 6.037132112870988
          },
          {
            "actual": 0.4,
            "predicted": 0.5837331559533346
          },
          {
            "actual": 18.7,
            "predicted": 17.076497011017107
          },
          {
            "actual": 32.9,
            "predicted": 34.66134572281614
          },
          {
            "actual": 3.5,
            "predicted": 3.378497145888818
          },
          {
            "actual": 40.2,
            "predicted": 39.192671281016466
          },
          {
            "actual": 0.0,
            "predicted": 0.6174404139333491
          },
          {
            "actual": 2.5,
            "predicted": 2.1886791335391074
          },
          {
            "actual": 29.0,
            "predicted": 27.4541116747642
          },
          {
            "actual": 2.6,
            "predicted": 2.941914723235621
          },
          {
            "actual": 21.9,
            "predicted": 20.41836334576049
          }
        ],
        "residual_bins": [
          {
            "actual": 0.08979591836734695,
            "mean_residual": -0.2357316120167397,
            "mae": 0.4118601124806795,
            "count": 49
          },
          {
            "actual": 1.5756097560975613,
            "mean_residual": -0.011970969384070997,
            "mae": 0.20168852470668905,
            "count": 41
          },
          {
            "actual": 2.5833333333333335,
            "mean_residual": -0.010789706050006722,
            "mae": 0.2901812538371977,
            "count": 48
          },
          {
            "actual": 3.7295454545454545,
            "mean_residual": -0.20433525033652078,
            "mae": 0.6423666409284495,
            "count": 44
          },
          {
            "actual": 5.465116279069767,
            "mean_residual": -0.0013426393386169117,
            "mae": 0.37364054501946276,
            "count": 43
          },
          {
            "actual": 7.686666666666667,
            "mean_residual": -0.0844499701825954,
            "mae": 0.3314180228816931,
            "count": 45
          },
          {
            "actual": 12.640000000000002,
            "mean_residual": 0.4911357015582384,
            "mae": 0.5482220477547991,
            "count": 45
          },
          {
            "actual": 35.08222222222222,
            "mean_residual": 0.9149226184517667,
            "mae": 1.543446124943184,
            "count": 45
          }
        ]
      },
      "interpretation": "The sealed test explains 99.0% of target variance with RMSE 1.08 in the target's displayed units.",
      "limitations": [
        "The data covers only 31 snapshots from March to July 2026.",
        "Search/listing collection methodology and platform coverage are not documented in the file.",
        "The rapid switch from weekly to daily snapshots may change error dependence and apparent sample size.",
        "Forecasts assume segment definitions and measurement rules remain stable."
      ]
    },
    {
      "id": "benchmarks",
      "title": "Unseen-model benchmark regression",
      "type": "regression",
      "target": "benchmarks_target",
      "business_question": "Can release timing, organization, and benchmark identity estimate normalized performance for entirely held-out AI models?",
      "business_use": "Support portfolio-level benchmark gap analysis; never substitute predicted scores for an actual evaluation run.",
      "primary_metric": "Root mean squared error (RMSE)",
      "relative_metric_label": "sMAPE",
      "source_file": "benchmark_scores.csv",
      "runtime_seconds": 14.66,
      "dataset": {
        "rows": 1276,
        "columns": 6,
        "features_used": 5,
        "missing_total": 0,
        "duplicate_rows": 5,
        "missing_by_column": {
          "release_year": 0,
          "release_month": 0,
          "months_since_2020": 0,
          "organization": 0,
          "benchmark": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "release_year",
            "count": 0,
            "rate": 0.0,
            "minimum": 2020.0,
            "maximum": 2026.0,
            "clip_low": 2020.0,
            "clip_high": 2026.0
          },
          {
            "feature": "release_month",
            "count": 0,
            "rate": 0.0,
            "minimum": 1.0,
            "maximum": 12.0,
            "clip_low": 1.0,
            "clip_high": 12.0
          },
          {
            "feature": "months_since_2020",
            "count": 42,
            "rate": 0.032915360501567396,
            "minimum": 1.0,
            "maximum": 76.0,
            "clip_low": 4.800000000000001,
            "clip_high": 75.0
          }
        ],
        "categories": {
          "organization": [
            {
              "value": "Anthropic",
              "count": 242
            },
            {
              "value": "OpenAI",
              "count": 224
            },
            {
              "value": "Meta",
              "count": 183
            },
            {
              "value": "Google",
              "count": 174
            },
            {
              "value": "DeepSeek",
              "count": 90
            },
            {
              "value": "Mistral",
              "count": 87
            },
            {
              "value": "Alibaba",
              "count": 79
            },
            {
              "value": "xAI",
              "count": 59
            },
            {
              "value": "DeepMind",
              "count": 21
            },
            {
              "value": "TII",
              "count": 17
            },
            {
              "value": "Microsoft",
              "count": 15
            },
            {
              "value": "Inflection",
              "count": 10
            },
            {
              "value": "LMSYS",
              "count": 9
            },
            {
              "value": "Stanford",
              "count": 9
            },
            {
              "value": "01.AI",
              "count": 9
            },
            {
              "value": "BigScience",
              "count": 8
            },
            {
              "value": "Yandex",
              "count": 7
            },
            {
              "value": "AI21",
              "count": 6
            },
            {
              "value": "Microsoft+NVIDIA",
              "count": 6
            },
            {
              "value": "BAAI",
              "count": 6
            },
            {
              "value": "Baidu",
              "count": 6
            },
            {
              "value": "Naver",
              "count": 6
            },
            {
              "value": "Salesforce",
              "count": 3
            }
          ],
          "benchmark": [
            {
              "value": "MMLU",
              "count": 113
            },
            {
              "value": "HellaSwag",
              "count": 113
            },
            {
              "value": "ARC-Challenge",
              "count": 113
            },
            {
              "value": "HumanEval",
              "count": 107
            },
            {
              "value": "GSM8K",
              "count": 107
            },
            {
              "value": "MATH",
              "count": 107
            },
            {
              "value": "TruthfulQA",
              "count": 98
            },
            {
              "value": "BBH",
              "count": 92
            },
            {
              "value": "GPQA Diamond",
              "count": 80
            },
            {
              "value": "Chatbot Arena ELO",
              "count": 71
            },
            {
              "value": "MMLU-Pro",
              "count": 66
            },
            {
              "value": "LiveCodeBench",
              "count": 53
            },
            {
              "value": "MMMU",
              "count": 52
            },
            {
              "value": "AIME 2024",
              "count": 52
            },
            {
              "value": "SWE-Bench Verified",
              "count": 52
            }
          ]
        },
        "target_summary": {
          "minimum": 3.25,
          "maximum": 100.0,
          "mean": 73.35925548589341,
          "median": 79.875,
          "std": 22.812457848559912
        },
        "unit": "score_points"
      },
      "audit_interpretation": "score_pct equals 100 × score / max_score up to rounding. The model-grouped holdout prevents other benchmark rows from the same named model leaking into test.",
      "split": {
        "train": {
          "rows": 891,
          "rate": 0.6982758620689655
        },
        "validation": {
          "rows": 198,
          "rate": 0.15517241379310345
        },
        "test": {
          "rows": 187,
          "rate": 0.14655172413793102
        },
        "strategy": "Model-grouped 70/15/15 split"
      },
      "preparation": {
        "numeric_features": [
          "release_year",
          "release_month",
          "months_since_2020"
        ],
        "categorical_features": [
          "organization",
          "benchmark"
        ],
        "excluded_features": [
          "score",
          "max_score",
          "score_pct formula",
          "model_id",
          "model_name",
          "benchmark_type"
        ],
        "feature_selection": "Raw score and max_score are excluded because they exactly calculate score_pct. Model ID and name are excluded, and every row for one model stays in a single partition.",
        "steps": [
          "Median/mode imputation",
          "Train-learned 1st to 99th percentile clipping",
          "One-hot encoding",
          "Standard scaling"
        ]
      },
      "comparison": [
        {
          "model": "Median baseline",
          "rmse": 22.18668378495843,
          "mae": 16.872626262626262,
          "r2": -0.0554793698531062,
          "mape": 0.2509079387314869
        },
        {
          "model": "Ridge regression",
          "rmse": 11.527501822496284,
          "mae": 9.20779643428069,
          "r2": 0.7150718482647354,
          "mape": 0.14251768381237684
        },
        {
          "model": "Random forest",
          "rmse": 5.649256023675699,
          "mae": 4.119782845629517,
          "r2": 0.931569852432227,
          "mape": 0.07097458450330171
        },
        {
          "model": "Histogram gradient boosting",
          "rmse": 6.269608504808544,
          "mae": 4.431194694480114,
          "r2": 0.9157158701349494,
          "mape": 0.07252101682076408
        }
      ],
      "selection": {
        "model": "Random forest",
        "reason": "Lowest validation RMSE; MAE used as a tie-breaker."
      },
      "tuning": {
        "method": "RandomizedSearchCV",
        "iterations": 6,
        "folds": 5,
        "scoring": "negative RMSE",
        "parameter_space": {
          "n_estimators": [
            250,
            400,
            600
          ],
          "max_depth": [
            8,
            12,
            18,
            null
          ],
          "min_samples_leaf": [
            1,
            2,
            4,
            8
          ],
          "max_features": [
            "sqrt",
            0.5,
            0.8,
            1.0
          ]
        },
        "best_parameters": {
          "n_estimators": 400,
          "min_samples_leaf": 2,
          "max_features": 1.0,
          "max_depth": 18
        },
        "best_cv_score": 5.400592326652532,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 5.400592326652532,
            "std_cv_score": 0.19321386739583007,
            "train_score": 3.6003847559858,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 2,
              "max_features": 1.0,
              "max_depth": 18
            }
          },
          {
            "rank": 2,
            "mean_cv_score": 5.459628531854605,
            "std_cv_score": 0.36632373996123957,
            "train_score": 3.90874173674802,
            "parameters": {
              "n_estimators": 600,
              "min_samples_leaf": 2,
              "max_features": 0.5,
              "max_depth": 18
            }
          },
          {
            "rank": 3,
            "mean_cv_score": 5.721440952031136,
            "std_cv_score": 0.21841292888384597,
            "train_score": 4.436910340957779,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 2,
              "max_features": 0.8,
              "max_depth": 12
            }
          },
          {
            "rank": 4,
            "mean_cv_score": 8.367916523250372,
            "std_cv_score": 0.5193573504892631,
            "train_score": 7.6747842562204,
            "parameters": {
              "n_estimators": 600,
              "min_samples_leaf": 8,
              "max_features": 1.0,
              "max_depth": 18
            }
          },
          {
            "rank": 5,
            "mean_cv_score": 8.974632598903328,
            "std_cv_score": 0.7548660602496566,
            "train_score": 8.236455767966522,
            "parameters": {
              "n_estimators": 250,
              "min_samples_leaf": 8,
              "max_features": 0.8,
              "max_depth": null
            }
          },
          {
            "rank": 6,
            "mean_cv_score": 11.154516033539934,
            "std_cv_score": 1.2690477489891088,
            "train_score": 10.690946091359125,
            "parameters": {
              "n_estimators": 250,
              "min_samples_leaf": 8,
              "max_features": 1.0,
              "max_depth": 8
            }
          }
        ],
        "tuned_validation_metrics": {
          "rmse": 5.937017474749736,
          "mae": 4.224443996197867,
          "r2": 0.9244209173626361,
          "mape": 0.0728561429278048
        }
      },
      "test": {
        "metrics": {
          "rmse": 4.942715327364874,
          "mae": 3.7090311081021596,
          "r2": 0.9566876134925344,
          "mape": 0.07414734419731168
        },
        "feature_importance": [
          {
            "feature": "benchmark",
            "importance_mean": 25.831386613312045,
            "importance_std": 1.1985221469995377
          },
          {
            "feature": "months_since_2020",
            "importance_mean": 12.492489465597318,
            "importance_std": 0.793783175139618
          },
          {
            "feature": "release_year",
            "importance_mean": 4.315137946356639,
            "importance_std": 0.1796831003804277
          },
          {
            "feature": "organization",
            "importance_mean": 0.2652552742419066,
            "importance_std": 0.06476750247591953
          },
          {
            "feature": "release_month",
            "importance_mean": 0.11735547171963034,
            "importance_std": 0.05826998169587254
          }
        ],
        "prediction_sample": [
          {
            "actual": 39.5,
            "predicted": 44.16576340975546
          },
          {
            "actual": 92.34,
            "predicted": 90.82874687316333
          },
          {
            "actual": 75.76,
            "predicted": 79.04344449884105
          },
          {
            "actual": 80.99,
            "predicted": 80.01109767873876
          },
          {
            "actual": 85.67,
            "predicted": 87.26783544851159
          },
          {
            "actual": 35.94,
            "predicted": 40.94394548701307
          },
          {
            "actual": 94.08,
            "predicted": 84.39437143939385
          },
          {
            "actual": 98.0,
            "predicted": 95.85487049659756
          },
          {
            "actual": 87.2,
            "predicted": 88.44338508627821
          },
          {
            "actual": 34.86,
            "predicted": 34.77261247564936
          },
          {
            "actual": 89.96,
            "predicted": 90.73414545634924
          },
          {
            "actual": 50.4,
            "predicted": 53.707937192460264
          },
          {
            "actual": 89.9,
            "predicted": 89.89007479166658
          },
          {
            "actual": 93.7,
            "predicted": 94.05314096681606
          },
          {
            "actual": 94.98,
            "predicted": 87.08853590542003
          },
          {
            "actual": 93.96,
            "predicted": 94.10841069098636
          },
          {
            "actual": 97.7,
            "predicted": 93.64179322168411
          },
          {
            "actual": 93.26,
            "predicted": 94.14011738129933
          },
          {
            "actual": 50.32,
            "predicted": 62.164729177489214
          },
          {
            "actual": 69.39,
            "predicted": 66.3318564529221
          },
          {
            "actual": 62.23,
            "predicted": 54.990452645759106
          },
          {
            "actual": 77.3,
            "predicted": 77.43716986381672
          },
          {
            "actual": 69.1,
            "predicted": 76.26929386828446
          },
          {
            "actual": 63.54,
            "predicted": 53.205572058982646
          },
          {
            "actual": 30.88,
            "predicted": 37.207775284992785
          },
          {
            "actual": 82.48,
            "predicted": 85.64759413888895
          },
          {
            "actual": 92.93,
            "predicted": 93.85102407738103
          },
          {
            "actual": 81.32,
            "predicted": 79.81911139955358
          },
          {
            "actual": 44.47,
            "predicted": 46.757570165850304
          },
          {
            "actual": 79.11,
            "predicted": 78.86147594249017
          },
          {
            "actual": 20.45,
            "predicted": 28.382167182539703
          },
          {
            "actual": 86.59,
            "predicted": 90.29322507824303
          },
          {
            "actual": 13.99,
            "predicted": 18.828920347222223
          },
          {
            "actual": 78.63,
            "predicted": 85.02953964674694
          },
          {
            "actual": 88.19,
            "predicted": 91.18955543639548
          },
          {
            "actual": 95.12,
            "predicted": 95.72098232878254
          },
          {
            "actual": 48.31,
            "predicted": 44.90209308827138
          },
          {
            "actual": 89.11,
            "predicted": 92.3324992212662
          },
          {
            "actual": 86.35,
            "predicted": 80.57682943181818
          },
          {
            "actual": 86.69,
            "predicted": 88.48234206108711
          },
          {
            "actual": 92.98,
            "predicted": 97.9906594465168
          },
          {
            "actual": 58.52,
            "predicted": 60.89545052229225
          },
          {
            "actual": 67.44,
            "predicted": 70.92749230880231
          },
          {
            "actual": 82.31,
            "predicted": 85.62223937890525
          },
          {
            "actual": 95.0,
            "predicted": 94.71157848664572
          },
          {
            "actual": 80.92,
            "predicted": 81.23666431141157
          },
          {
            "actual": 60.34,
            "predicted": 56.05413925638329
          },
          {
            "actual": 56.74,
            "predicted": 63.030633732795
          },
          {
            "actual": 28.29,
            "predicted": 29.6180385515873
          },
          {
            "actual": 25.06,
            "predicted": 30.0975699206349
          },
          {
            "actual": 98.74,
            "predicted": 96.75707397386859
          },
          {
            "actual": 67.58,
            "predicted": 66.70518141611453
          },
          {
            "actual": 97.01,
            "predicted": 96.07026171122094
          },
          {
            "actual": 25.22,
            "predicted": 24.056187721722722
          },
          {
            "actual": 77.94,
            "predicted": 77.69346386071327
          },
          {
            "actual": 96.15,
            "predicted": 96.30551559214159
          },
          {
            "actual": 70.9,
            "predicted": 71.74978719780219
          },
          {
            "actual": 85.91,
            "predicted": 86.60329788100366
          },
          {
            "actual": 74.91,
            "predicted": 62.53079000641922
          },
          {
            "actual": 82.79,
            "predicted": 83.53763536634989
          },
          {
            "actual": 93.03,
            "predicted": 93.34529441276736
          },
          {
            "actual": 61.46,
            "predicted": 72.82656357843132
          },
          {
            "actual": 80.88,
            "predicted": 82.49270952496728
          },
          {
            "actual": 56.54,
            "predicted": 67.22429391922331
          },
          {
            "actual": 84.84,
            "predicted": 84.0617234196614
          },
          {
            "actual": 54.45,
            "predicted": 50.94373562500001
          },
          {
            "actual": 58.11,
            "predicted": 71.96179814484121
          },
          {
            "actual": 77.96,
            "predicted": 67.80476422619051
          },
          {
            "actual": 92.43,
            "predicted": 95.13322428391056
          },
          {
            "actual": 64.72,
            "predicted": 60.827962866150855
          },
          {
            "actual": 32.83,
            "predicted": 34.632327070707106
          },
          {
            "actual": 88.66,
            "predicted": 93.80557550792199
          },
          {
            "actual": 97.06,
            "predicted": 91.67378866304216
          },
          {
            "actual": 55.08,
            "predicted": 54.51586544101736
          },
          {
            "actual": 76.1,
            "predicted": 78.16161081342273
          },
          {
            "actual": 10.12,
            "predicted": 15.329690827922088
          },
          {
            "actual": 96.4,
            "predicted": 97.20680040897942
          },
          {
            "actual": 66.47,
            "predicted": 69.26576977456567
          },
          {
            "actual": 95.0,
            "predicted": 94.87852620338808
          },
          {
            "actual": 79.6,
            "predicted": 79.20751803398186
          },
          {
            "actual": 82.9,
            "predicted": 87.59304479828039
          },
          {
            "actual": 95.55,
            "predicted": 87.61102351881796
          },
          {
            "actual": 29.08,
            "predicted": 33.650776441197706
          },
          {
            "actual": 97.76,
            "predicted": 92.24125843870293
          },
          {
            "actual": 93.96,
            "predicted": 93.7595172027278
          },
          {
            "actual": 70.7,
            "predicted": 68.96503071556918
          },
          {
            "actual": 77.56,
            "predicted": 77.12814344246031
          },
          {
            "actual": 55.84,
            "predicted": 61.670363307619155
          },
          {
            "actual": 5.7,
            "predicted": 23.125483035714318
          },
          {
            "actual": 58.71,
            "predicted": 54.229542103174616
          },
          {
            "actual": 61.34,
            "predicted": 66.63838107471318
          },
          {
            "actual": 89.95,
            "predicted": 86.78968504328999
          },
          {
            "actual": 72.69,
            "predicted": 78.04137699404765
          },
          {
            "actual": 87.58,
            "predicted": 82.9060440873016
          },
          {
            "actual": 9.34,
            "predicted": 7.602787738095243
          },
          {
            "actual": 47.53,
            "predicted": 46.6178524756932
          },
          {
            "actual": 51.7,
            "predicted": 63.31944521915587
          },
          {
            "actual": 24.1,
            "predicted": 37.620059221681096
          },
          {
            "actual": 94.7,
            "predicted": 96.44161471001011
          },
          {
            "actual": 85.95,
            "predicted": 82.55396330125367
          },
          {
            "actual": 67.98,
            "predicted": 67.90444674131021
          },
          {
            "actual": 71.79,
            "predicted": 65.89311430014423
          },
          {
            "actual": 97.59,
            "predicted": 96.69849851251873
          },
          {
            "actual": 78.32,
            "predicted": 77.66643472293124
          },
          {
            "actual": 88.37,
            "predicted": 89.86373642716336
          },
          {
            "actual": 23.81,
            "predicted": 27.078505098998217
          },
          {
            "actual": 90.44,
            "predicted": 89.13790101962663
          },
          {
            "actual": 89.48,
            "predicted": 85.41708215705441
          },
          {
            "actual": 63.26,
            "predicted": 70.90482506944437
          },
          {
            "actual": 78.72,
            "predicted": 91.05332960974087
          },
          {
            "actual": 84.98,
            "predicted": 79.44795176685244
          },
          {
            "actual": 85.91,
            "predicted": 87.75679362103183
          },
          {
            "actual": 76.28,
            "predicted": 65.29745630620046
          },
          {
            "actual": 89.16,
            "predicted": 94.65229765318307
          },
          {
            "actual": 99.0,
            "predicted": 97.40302480790037
          },
          {
            "actual": 52.03,
            "predicted": 57.9411905357143
          },
          {
            "actual": 92.9,
            "predicted": 95.80878801852958
          },
          {
            "actual": 78.71,
            "predicted": 78.32119814905452
          },
          {
            "actual": 63.86,
            "predicted": 67.54057457038411
          },
          {
            "actual": 59.95,
            "predicted": 55.21398581038483
          },
          {
            "actual": 99.0,
            "predicted": 94.8300746376228
          },
          {
            "actual": 98.0,
            "predicted": 96.1500581093806
          },
          {
            "actual": 64.38,
            "predicted": 56.42156361077882
          },
          {
            "actual": 24.08,
            "predicted": 31.117693018578606
          },
          {
            "actual": 87.14,
            "predicted": 84.37078023721092
          },
          {
            "actual": 85.26,
            "predicted": 83.28819680385284
          },
          {
            "actual": 15.49,
            "predicted": 21.21694136904759
          },
          {
            "actual": 61.66,
            "predicted": 58.97067083333337
          },
          {
            "actual": 96.81,
            "predicted": 93.6933941867602
          },
          {
            "actual": 54.43,
            "predicted": 65.15358082341275
          },
          {
            "actual": 80.08,
            "predicted": 88.08399743055556
          },
          {
            "actual": 55.53,
            "predicted": 59.43153973124095
          },
          {
            "actual": 76.75,
            "predicted": 78.45027359604484
          },
          {
            "actual": 94.99,
            "predicted": 98.4692577378607
          },
          {
            "actual": 88.43,
            "predicted": 83.41434068593897
          },
          {
            "actual": 89.38,
            "predicted": 86.94033812584983
          },
          {
            "actual": 30.65,
            "predicted": 25.495689216269874
          },
          {
            "actual": 86.29,
            "predicted": 88.76582126737235
          },
          {
            "actual": 95.43,
            "predicted": 96.12494883231986
          },
          {
            "actual": 95.85,
            "predicted": 95.08425984767709
          },
          {
            "actual": 49.43,
            "predicted": 51.34355431547627
          },
          {
            "actual": 98.0,
            "predicted": 96.91088889471649
          },
          {
            "actual": 62.62,
            "predicted": 67.11714311548127
          },
          {
            "actual": 76.5,
            "predicted": 79.50813209095976
          },
          {
            "actual": 36.82,
            "predicted": 32.436410976731594
          },
          {
            "actual": 72.26,
            "predicted": 74.2213669642858
          },
          {
            "actual": 68.68,
            "predicted": 66.06371717261898
          },
          {
            "actual": 28.39,
            "predicted": 26.3378346005384
          },
          {
            "actual": 90.91,
            "predicted": 93.48103265872534
          },
          {
            "actual": 56.16,
            "predicted": 53.69616412935744
          },
          {
            "actual": 96.44,
            "predicted": 96.38141746392256
          },
          {
            "actual": 45.18,
            "predicted": 47.22837967261908
          },
          {
            "actual": 45.36,
            "predicted": 44.24397099709864
          },
          {
            "actual": 46.13,
            "predicted": 49.188144741161594
          },
          {
            "actual": 92.93,
            "predicted": 94.04112290613237
          },
          {
            "actual": 98.0,
            "predicted": 92.20543715638534
          },
          {
            "actual": 13.47,
            "predicted": 21.875475188492068
          },
          {
            "actual": 98.0,
            "predicted": 96.57747222758958
          },
          {
            "actual": 95.56,
            "predicted": 95.87976276873475
          },
          {
            "actual": 87.16,
            "predicted": 79.6798931299491
          },
          {
            "actual": 81.92,
            "predicted": 81.2179399404762
          },
          {
            "actual": 92.01,
            "predicted": 92.52544501431292
          },
          {
            "actual": 71.67,
            "predicted": 79.48747000864748
          },
          {
            "actual": 70.78,
            "predicted": 75.28346396825397
          },
          {
            "actual": 84.43,
            "predicted": 79.28178180944563
          },
          {
            "actual": 97.75,
            "predicted": 98.49692259108939
          },
          {
            "actual": 95.0,
            "predicted": 93.87098240668435
          },
          {
            "actual": 84.02,
            "predicted": 75.69706079441382
          },
          {
            "actual": 93.1,
            "predicted": 91.16770030941771
          },
          {
            "actual": 75.92,
            "predicted": 84.0587938313102
          },
          {
            "actual": 75.86,
            "predicted": 80.17966941663511
          },
          {
            "actual": 91.27,
            "predicted": 92.29492366307177
          },
          {
            "actual": 50.47,
            "predicted": 46.99257691729322
          },
          {
            "actual": 84.71,
            "predicted": 89.18417207341274
          },
          {
            "actual": 58.51,
            "predicted": 55.22275965605302
          },
          {
            "actual": 94.18,
            "predicted": 92.26449382665942
          },
          {
            "actual": 70.41,
            "predicted": 69.18727488667575
          },
          {
            "actual": 27.92,
            "predicted": 27.38256038690474
          },
          {
            "actual": 98.49,
            "predicted": 93.93490802279665
          },
          {
            "actual": 89.49,
            "predicted": 89.93159009642588
          },
          {
            "actual": 85.15,
            "predicted": 80.6523241330653
          },
          {
            "actual": 88.27,
            "predicted": 90.14482191529726
          },
          {
            "actual": 10.53,
            "predicted": 18.86948806006493
          },
          {
            "actual": 35.76,
            "predicted": 44.395968298477825
          },
          {
            "actual": 46.47,
            "predicted": 45.4354944940184
          },
          {
            "actual": 69.02,
            "predicted": 66.77051379153215
          },
          {
            "actual": 68.33,
            "predicted": 69.67312026150927
          }
        ],
        "residual_bins": [
          {
            "actual": 23.86583333333333,
            "mean_residual": -4.137287813365979,
            "mae": 5.39694755370665,
            "count": 24
          },
          {
            "actual": 50.87739130434782,
            "mean_residual": -3.541594663328886,
            "mae": 4.974833518307178,
            "count": 23
          },
          {
            "actual": 63.89999999999999,
            "mean_residual": 0.22003816928327624,
            "mae": 4.538178529623122,
            "count": 23
          },
          {
            "actual": 74.79541666666667,
            "mean_residual": -0.09923441500396901,
            "mae": 4.0284404925639015,
            "count": 24
          },
          {
            "actual": 82.82173913043479,
            "mean_residual": -0.5532824045909382,
            "mae": 3.168397037414242,
            "count": 23
          },
          {
            "actual": 88.24956521739132,
            "mean_residual": 0.40974229487204145,
            "mae": 3.07574187808797,
            "count": 23
          },
          {
            "actual": 93.46260869565216,
            "mean_residual": 0.04310832079041011,
            "mae": 2.1025914484704344,
            "count": 23
          },
          {
            "actual": 97.22541666666666,
            "mean_residual": 2.0814818161144935,
            "mae": 2.35855952628512,
            "count": 24
          }
        ]
      },
      "interpretation": "The sealed test explains 95.7% of target variance with RMSE 4.94 in the target's displayed units.",
      "limitations": [
        "Benchmark scores may come from differing prompts, harness versions, contamination controls, and reporting conventions.",
        "Organization and release date are coarse proxies for model capability.",
        "New organizations or benchmark formats may be poorly represented after one-hot encoding.",
        "Predicted values are unsuitable for rankings or vendor claims without primary-source verification."
      ]
    },
    {
      "id": "cyber",
      "title": "Malicious network-event classification",
      "type": "classification",
      "target": "Malicious",
      "business_question": "Can basic connection telemetry rank network events by the probability of being labelled malicious?",
      "business_use": "Use scores for analyst triage in a sandbox; never auto-block traffic without calibrated costs, richer context, and security review.",
      "primary_metric": "Average precision",
      "source_file": "cybersecurity_network_logs.csv",
      "runtime_seconds": 64.91,
      "dataset": {
        "rows": 25000,
        "columns": 6,
        "features_used": 5,
        "missing_total": 0,
        "duplicate_rows": 0,
        "missing_by_column": {
          "protocol": 0,
          "packet_size_bytes": 0,
          "connection_duration_ms": 0,
          "failed_logins": 0,
          "geo_distance_km": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "packet_size_bytes",
            "count": 1662,
            "rate": 0.06648,
            "minimum": 0.0,
            "maximum": 10032.0,
            "clip_low": 5.0,
            "clip_high": 6079.079999999987
          },
          {
            "feature": "connection_duration_ms",
            "count": 1213,
            "rate": 0.04852,
            "minimum": 0.0,
            "maximum": 1213.0,
            "clip_low": 1.0,
            "clip_high": 447.0099999999984
          },
          {
            "feature": "failed_logins",
            "count": 3085,
            "rate": 0.1234,
            "minimum": 0.0,
            "maximum": 16.0,
            "clip_low": 0.0,
            "clip_high": 7.0
          },
          {
            "feature": "geo_distance_km",
            "count": 1650,
            "rate": 0.066,
            "minimum": 0.0,
            "maximum": 8661.0,
            "clip_low": 5.0,
            "clip_high": 5887.039999999994
          }
        ],
        "categories": {
          "protocol": [
            {
              "value": "TCP",
              "count": 17518
            },
            {
              "value": "UDP",
              "count": 5055
            },
            {
              "value": "ICMP",
              "count": 2427
            }
          ]
        },
        "target_summary": {
          "minimum": 0.0,
          "maximum": 1.0,
          "mean": 0.04988,
          "median": 0.0,
          "std": 0.2177013581842204
        },
        "target_counts": {
          "Benign": 23753,
          "Malicious": 1247
        },
        "positive_label": "Malicious",
        "negative_label": "Benign",
        "positive_rate": 0.04988
      },
      "audit_interpretation": "Only 4.99% of events are malicious, so average precision is more informative than raw accuracy. Failed logins and extreme packet/geographic values separate the synthetic classes strongly but not perfectly.",
      "split": {
        "train": {
          "rows": 17500,
          "rate": 0.7
        },
        "validation": {
          "rows": 3750,
          "rate": 0.15
        },
        "test": {
          "rows": 3750,
          "rate": 0.15
        },
        "strategy": "Stratified random 70/15/15 split"
      },
      "preparation": {
        "numeric_features": [
          "packet_size_bytes",
          "connection_duration_ms",
          "failed_logins",
          "geo_distance_km"
        ],
        "categorical_features": [
          "protocol"
        ],
        "excluded_features": [],
        "feature_selection": "All five pre-label telemetry fields are retained. No identifiers, timestamps, payload contents, or post-investigation fields are present.",
        "steps": [
          "Target ambiguity filtering",
          "Median/mode imputation",
          "Train-learned 1st to 99th percentile clipping",
          "One-hot encoding",
          "Standard scaling"
        ]
      },
      "comparison": [
        {
          "model": "Dummy baseline",
          "accuracy": 0.9501333333333334,
          "balanced_accuracy": 0.5,
          "precision": 0.0,
          "recall": 0.0,
          "f1": 0.0,
          "roc_auc": 0.5,
          "average_precision": 0.04986666666666666,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 3563,
            "fp": 0,
            "fn": 187,
            "tp": 0
          }
        },
        {
          "model": "Logistic regression",
          "accuracy": 0.9829333333333333,
          "balanced_accuracy": 0.9454164234009375,
          "precision": 0.786046511627907,
          "recall": 0.9037433155080213,
          "f1": 0.8407960199004975,
          "roc_auc": 0.9605436745157073,
          "average_precision": 0.9203092601065845,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 3517,
            "fp": 46,
            "fn": 18,
            "tp": 169
          }
        },
        {
          "model": "Random forest",
          "accuracy": 0.9928,
          "balanced_accuracy": 0.9506086771197138,
          "precision": 0.949438202247191,
          "recall": 0.9037433155080213,
          "f1": 0.9260273972602739,
          "roc_auc": 0.9566144014312279,
          "average_precision": 0.9217716647591324,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 3554,
            "fp": 9,
            "fn": 18,
            "tp": 169
          }
        },
        {
          "model": "Histogram gradient boosting",
          "accuracy": 0.9917333333333334,
          "balanced_accuracy": 0.9500473523933595,
          "precision": 0.9285714285714286,
          "recall": 0.9037433155080213,
          "f1": 0.9159891598915989,
          "roc_auc": 0.9563592538283396,
          "average_precision": 0.9184573909813746,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 3550,
            "fp": 13,
            "fn": 18,
            "tp": 169
          }
        }
      ],
      "selection": {
        "model": "Random forest",
        "reason": "Highest validation average precision; ROC AUC used as a tie-breaker."
      },
      "tuning": {
        "method": "RandomizedSearchCV",
        "iterations": 6,
        "folds": 5,
        "scoring": "average_precision",
        "parameter_space": {
          "n_estimators": [
            250,
            400,
            600
          ],
          "max_depth": [
            8,
            12,
            16,
            null
          ],
          "min_samples_leaf": [
            2,
            5,
            10,
            20
          ],
          "max_features": [
            "sqrt",
            0.5,
            0.8
          ]
        },
        "best_parameters": {
          "n_estimators": 600,
          "min_samples_leaf": 10,
          "max_features": 0.5,
          "max_depth": 12
        },
        "best_cv_score": 0.9316662643786662,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 0.9316662643786662,
            "std_cv_score": 0.02899920355525458,
            "train_score": 0.9879936219340602,
            "parameters": {
              "n_estimators": 600,
              "min_samples_leaf": 10,
              "max_features": 0.5,
              "max_depth": 12
            }
          },
          {
            "rank": 2,
            "mean_cv_score": 0.9316634015376692,
            "std_cv_score": 0.02927338753779837,
            "train_score": 0.9739717976516594,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 10,
              "max_features": 0.5,
              "max_depth": 8
            }
          },
          {
            "rank": 3,
            "mean_cv_score": 0.9308480187822561,
            "std_cv_score": 0.031258865841158535,
            "train_score": 0.9870120936660525,
            "parameters": {
              "n_estimators": 250,
              "min_samples_leaf": 2,
              "max_features": 0.5,
              "max_depth": 8
            }
          },
          {
            "rank": 4,
            "mean_cv_score": 0.9304570050371254,
            "std_cv_score": 0.028403857240767858,
            "train_score": 0.9822351760147686,
            "parameters": {
              "n_estimators": 250,
              "min_samples_leaf": 20,
              "max_features": "sqrt",
              "max_depth": null
            }
          },
          {
            "rank": 5,
            "mean_cv_score": 0.9302276158236558,
            "std_cv_score": 0.028303136453972724,
            "train_score": 0.9812077947801658,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 20,
              "max_features": "sqrt",
              "max_depth": 16
            }
          },
          {
            "rank": 6,
            "mean_cv_score": 0.9297833414799731,
            "std_cv_score": 0.030526232015831177,
            "train_score": 0.998684448446512,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 2,
              "max_features": 0.8,
              "max_depth": 16
            }
          }
        ],
        "selected_threshold": 0.825,
        "threshold_candidates": [
          {
            "threshold": 0.1,
            "precision": 0.5150602409638554,
            "recall": 0.9144385026737968,
            "f1": 0.6589595375722543
          },
          {
            "threshold": 0.15000000000000002,
            "precision": 0.74235807860262,
            "recall": 0.9090909090909091,
            "f1": 0.8173076923076923
          },
          {
            "threshold": 0.2,
            "precision": 0.821256038647343,
            "recall": 0.9090909090909091,
            "f1": 0.8629441624365483
          },
          {
            "threshold": 0.25,
            "precision": 0.8629441624365483,
            "recall": 0.9090909090909091,
            "f1": 0.8854166666666666
          },
          {
            "threshold": 0.30000000000000004,
            "precision": 0.8802083333333334,
            "recall": 0.9037433155080213,
            "f1": 0.8918205804749341
          },
          {
            "threshold": 0.35,
            "precision": 0.9086021505376344,
            "recall": 0.9037433155080213,
            "f1": 0.9061662198391421
          },
          {
            "threshold": 0.4,
            "precision": 0.9234972677595629,
            "recall": 0.9037433155080213,
            "f1": 0.9135135135135135
          },
          {
            "threshold": 0.45000000000000007,
            "precision": 0.949438202247191,
            "recall": 0.9037433155080213,
            "f1": 0.9260273972602739
          },
          {
            "threshold": 0.5,
            "precision": 0.949438202247191,
            "recall": 0.9037433155080213,
            "f1": 0.9260273972602739
          },
          {
            "threshold": 0.55,
            "precision": 0.9548022598870056,
            "recall": 0.9037433155080213,
            "f1": 0.9285714285714286
          },
          {
            "threshold": 0.6,
            "precision": 0.9548022598870056,
            "recall": 0.9037433155080213,
            "f1": 0.9285714285714286
          },
          {
            "threshold": 0.65,
            "precision": 0.9657142857142857,
            "recall": 0.9037433155080213,
            "f1": 0.9337016574585635
          },
          {
            "threshold": 0.7,
            "precision": 0.9657142857142857,
            "recall": 0.9037433155080213,
            "f1": 0.9337016574585635
          },
          {
            "threshold": 0.75,
            "precision": 0.9657142857142857,
            "recall": 0.9037433155080213,
            "f1": 0.9337016574585635
          },
          {
            "threshold": 0.8,
            "precision": 0.9712643678160919,
            "recall": 0.9037433155080213,
            "f1": 0.9362880886426593
          },
          {
            "threshold": 0.825,
            "precision": 0.9825581395348837,
            "recall": 0.9037433155080213,
            "f1": 0.9415041782729805
          },
          {
            "threshold": 0.85,
            "precision": 0.9824561403508771,
            "recall": 0.8983957219251337,
            "f1": 0.9385474860335196
          },
          {
            "threshold": 0.9,
            "precision": 0.9880239520958084,
            "recall": 0.8823529411764706,
            "f1": 0.9322033898305084
          }
        ]
      },
      "test": {
        "metrics": {
          "accuracy": 0.996,
          "balanced_accuracy": 0.9700269105677635,
          "precision": 0.9777777777777777,
          "recall": 0.9411764705882353,
          "f1": 0.9591280653950953,
          "roc_auc": 0.9722144260454673,
          "average_precision": 0.9531092578580495,
          "threshold": 0.825,
          "confusion_matrix": {
            "tn": 3559,
            "fp": 4,
            "fn": 11,
            "tp": 176
          }
        },
        "roc_curve": [
          {
            "x": 0.0,
            "y": 0.0
          },
          {
            "x": 0.0,
            "y": 0.03208556149732621
          },
          {
            "x": 0.0,
            "y": 0.0427807486631016
          },
          {
            "x": 0.0,
            "y": 0.10160427807486631
          },
          {
            "x": 0.0,
            "y": 0.11229946524064172
          },
          {
            "x": 0.0,
            "y": 0.5989304812834224
          },
          {
            "x": 0.000280662363177098,
            "y": 0.5989304812834224
          },
          {
            "x": 0.000280662363177098,
            "y": 0.839572192513369
          },
          {
            "x": 0.000561324726354196,
            "y": 0.839572192513369
          },
          {
            "x": 0.000561324726354196,
            "y": 0.893048128342246
          },
          {
            "x": 0.0008419870895312938,
            "y": 0.893048128342246
          },
          {
            "x": 0.0008419870895312938,
            "y": 0.93048128342246
          },
          {
            "x": 0.001122649452708392,
            "y": 0.93048128342246
          },
          {
            "x": 0.001122649452708392,
            "y": 0.9518716577540107
          },
          {
            "x": 0.20909346056693798,
            "y": 0.9518716577540107
          },
          {
            "x": 0.20909346056693798,
            "y": 0.9572192513368984
          },
          {
            "x": 0.3118158854897558,
            "y": 0.9572192513368984
          },
          {
            "x": 0.3118158854897558,
            "y": 0.9625668449197861
          },
          {
            "x": 0.33090092618579847,
            "y": 0.9625668449197861
          },
          {
            "x": 0.33090092618579847,
            "y": 0.9679144385026738
          },
          {
            "x": 0.4142576480493966,
            "y": 0.9679144385026738
          },
          {
            "x": 0.4142576480493966,
            "y": 0.9732620320855615
          },
          {
            "x": 0.41453831041257366,
            "y": 0.9732620320855615
          },
          {
            "x": 0.4150996351389279,
            "y": 0.9732620320855615
          },
          {
            "x": 0.5464496211058097,
            "y": 0.9732620320855615
          },
          {
            "x": 0.5464496211058097,
            "y": 0.9786096256684492
          },
          {
            "x": 0.7788380578164468,
            "y": 0.9786096256684492
          },
          {
            "x": 0.7788380578164468,
            "y": 0.983957219251337
          },
          {
            "x": 0.8102722424922818,
            "y": 0.983957219251337
          },
          {
            "x": 0.8102722424922818,
            "y": 0.9893048128342246
          },
          {
            "x": 0.8571428571428571,
            "y": 0.9893048128342246
          },
          {
            "x": 0.8571428571428571,
            "y": 0.9946524064171123
          },
          {
            "x": 0.9085040696042661,
            "y": 0.9946524064171123
          },
          {
            "x": 0.9085040696042661,
            "y": 1.0
          },
          {
            "x": 0.9831602582093741,
            "y": 1.0
          },
          {
            "x": 0.9837215829357283,
            "y": 1.0
          },
          {
            "x": 1.0,
            "y": 1.0
          }
        ],
        "precision_recall_curve": [
          {
            "x": 0.0,
            "y": 1.0
          },
          {
            "x": 0.23529411764705882,
            "y": 1.0
          },
          {
            "x": 0.4385026737967914,
            "y": 1.0
          },
          {
            "x": 0.6363636363636364,
            "y": 0.9916666666666667
          },
          {
            "x": 0.839572192513369,
            "y": 0.9936708860759493
          },
          {
            "x": 0.9518716577540107,
            "y": 0.9128205128205128
          },
          {
            "x": 0.9518716577540107,
            "y": 0.7639484978540773
          },
          {
            "x": 0.9518716577540107,
            "y": 0.6568265682656826
          },
          {
            "x": 0.9518716577540107,
            "y": 0.5760517799352751
          },
          {
            "x": 0.9518716577540107,
            "y": 0.5129682997118156
          },
          {
            "x": 0.9518716577540107,
            "y": 0.4635416666666667
          },
          {
            "x": 0.9518716577540107,
            "y": 0.4218009478672986
          },
          {
            "x": 0.9518716577540107,
            "y": 0.3869565217391304
          },
          {
            "x": 0.9518716577540107,
            "y": 0.357429718875502
          },
          {
            "x": 0.9518716577540107,
            "y": 0.332089552238806
          },
          {
            "x": 0.9518716577540107,
            "y": 0.3106457242582897
          },
          {
            "x": 0.9518716577540107,
            "y": 0.29132569558101473
          },
          {
            "x": 0.9518716577540107,
            "y": 0.27426810477657937
          },
          {
            "x": 0.9518716577540107,
            "y": 0.2590975254730713
          },
          {
            "x": 0.9518716577540107,
            "y": 0.24585635359116023
          },
          {
            "x": 0.9518716577540107,
            "y": 0.2335958005249344
          },
          {
            "x": 0.9518716577540107,
            "y": 0.2225
          },
          {
            "x": 0.9518716577540107,
            "y": 0.21241050119331742
          },
          {
            "x": 0.9518716577540107,
            "y": 0.20319634703196346
          },
          {
            "x": 0.9518716577540107,
            "y": 0.1949616648411829
          },
          {
            "x": 0.9572192513368984,
            "y": 0.1882229232386961
          },
          {
            "x": 0.9572192513368984,
            "y": 0.18099089989888775
          },
          {
            "x": 0.9572192513368984,
            "y": 0.17429406037000975
          },
          {
            "x": 0.9572192513368984,
            "y": 0.168075117370892
          },
          {
            "x": 0.9572192513368984,
            "y": 0.16243194192377494
          },
          {
            "x": 0.9572192513368984,
            "y": 0.1570175438596491
          },
          {
            "x": 0.9572192513368984,
            "y": 0.15195246179966043
          },
          {
            "x": 0.9572192513368984,
            "y": 0.14720394736842105
          },
          {
            "x": 0.9572192513368984,
            "y": 0.14274322169059012
          },
          {
            "x": 0.9625668449197861,
            "y": 0.139426800929512
          },
          {
            "x": 0.9625668449197861,
            "y": 0.13544018058690746
          },
          {
            "x": 0.9679144385026738,
            "y": 0.1324067300658376
          },
          {
            "x": 0.9679144385026738,
            "y": 0.1288256227758007
          },
          {
            "x": 0.9679144385026738,
            "y": 0.12552011095700416
          },
          {
            "x": 0.9679144385026738,
            "y": 0.1222972972972973
          },
          {
            "x": 0.9679144385026738,
            "y": 0.11923583662714098
          },
          {
            "x": 0.9679144385026738,
            "y": 0.11632390745501285
          },
          {
            "x": 0.9679144385026738,
            "y": 0.11355081555834379
          },
          {
            "x": 0.9679144385026738,
            "y": 0.11097486204782342
          },
          {
            "x": 0.9732620320855615,
            "y": 0.1089820359281437
          },
          {
            "x": 0.9732620320855615,
            "y": 0.10655737704918032
          },
          {
            "x": 0.9732620320855615,
            "y": 0.10423825887743414
          },
          {
            "x": 0.9732620320855615,
            "y": 0.10201793721973094
          },
          {
            "x": 0.9732620320855615,
            "y": 0.09994508511806699
          },
          {
            "x": 0.9732620320855615,
            "y": 0.0979020979020979
          },
          {
            "x": 0.9732620320855615,
            "y": 0.0959409594095941
          },
          {
            "x": 0.9732620320855615,
            "y": 0.09405684754521963
          },
          {
            "x": 0.9732620320855615,
            "y": 0.0922920892494929
          },
          {
            "x": 0.9732620320855615,
            "y": 0.09054726368159204
          },
          {
            "x": 0.9732620320855615,
            "y": 0.0888671875
          },
          {
            "x": 0.9732620320855615,
            "y": 0.087248322147651
          },
          {
            "x": 0.9732620320855615,
            "y": 0.0856873822975518
          },
          {
            "x": 0.9786096256684492,
            "y": 0.08468301712170291
          },
          {
            "x": 0.9786096256684492,
            "y": 0.08321964529331514
          },
          {
            "x": 0.9786096256684492,
            "y": 0.08180599016540009
          },
          {
            "x": 0.9786096256684492,
            "y": 0.08043956043956044
          },
          {
            "x": 0.9786096256684492,
            "y": 0.07911802853437094
          },
          {
            "x": 0.9786096256684492,
            "y": 0.07787234042553191
          },
          {
            "x": 0.9786096256684492,
            "y": 0.07663316582914573
          },
          {
            "x": 0.9786096256684492,
            "y": 0.0754328112118714
          },
          {
            "x": 0.9786096256684492,
            "y": 0.07426948051948051
          },
          {
            "x": 0.9786096256684492,
            "y": 0.07314148681055156
          },
          {
            "x": 0.9786096256684492,
            "y": 0.07207562032296179
          },
          {
            "x": 0.9786096256684492,
            "y": 0.0710128055878929
          },
          {
            "x": 0.9786096256684492,
            "y": 0.06998087954110899
          },
          {
            "x": 0.9786096256684492,
            "y": 0.06897851488880513
          },
          {
            "x": 0.9786096256684492,
            "y": 0.06802973977695168
          },
          {
            "x": 0.9786096256684492,
            "y": 0.06708211143695014
          },
          {
            "x": 0.9786096256684492,
            "y": 0.06616052060737528
          },
          {
            "x": 0.9786096256684492,
            "y": 0.06526390870185449
          },
          {
            "x": 0.9786096256684492,
            "y": 0.06439127375087966
          },
          {
            "x": 0.9786096256684492,
            "y": 0.06356373740882251
          },
          {
            "x": 0.9786096256684492,
            "y": 0.06273568735001714
          },
          {
            "x": 0.9786096256684492,
            "y": 0.06192893401015229
          },
          {
            "x": 0.983957219251337,
            "y": 0.061476779151353154
          },
          {
            "x": 0.983957219251337,
            "y": 0.06070603761134939
          },
          {
            "x": 0.983957219251337,
            "y": 0.05997392438070404
          },
          {
            "x": 0.9893048128342246,
            "y": 0.05956213779781069
          },
          {
            "x": 0.9893048128342246,
            "y": 0.058842239185750635
          },
          {
            "x": 0.9893048128342246,
            "y": 0.05813953488372093
          },
          {
            "x": 0.9893048128342246,
            "y": 0.05747126436781609
          },
          {
            "x": 0.9946524064171123,
            "y": 0.05710776788455634
          },
          {
            "x": 0.9946524064171123,
            "y": 0.056449165402124434
          },
          {
            "x": 0.9946524064171123,
            "y": 0.0558055805580558
          },
          {
            "x": 0.9946524064171123,
            "y": 0.055176505487985764
          },
          {
            "x": 0.9946524064171123,
            "y": 0.05457746478873239
          },
          {
            "x": 1.0,
            "y": 0.0542658154381892
          },
          {
            "x": 1.0,
            "y": 0.05367393800229621
          },
          {
            "x": 1.0,
            "y": 0.05309483248154458
          },
          {
            "x": 1.0,
            "y": 0.05252808988764045
          },
          {
            "x": 1.0,
            "y": 0.05198776758409786
          },
          {
            "x": 1.0,
            "y": 0.05144429160935351
          },
          {
            "x": 1.0,
            "y": 0.05091206098557038
          },
          {
            "x": 1.0,
            "y": 0.05037715517241379
          },
          {
            "x": 1.0,
            "y": 0.04986666666666666
          }
        ],
        "feature_importance": [
          {
            "feature": "packet_size_bytes",
            "importance_mean": 0.26783719507720144,
            "importance_std": 0.007895253175303379
          },
          {
            "feature": "failed_logins",
            "importance_mean": 0.2419133243027742,
            "importance_std": 0.0034969062929374834
          },
          {
            "feature": "geo_distance_km",
            "importance_mean": 0.22615113085833155,
            "importance_std": 0.009993599555229504
          },
          {
            "feature": "protocol",
            "importance_mean": -0.0004375477062293909,
            "importance_std": 0.00024350316000539362
          },
          {
            "feature": "connection_duration_ms",
            "importance_mean": -0.003674248858348911,
            "importance_std": 0.0020966948726023646
          }
        ]
      },
      "interpretation": "Average precision is 0.953 against a 0.050 prevalence baseline; this measures ranking on the held-out records, not causality.",
      "limitations": [
        "The generation process appears synthetic and may encode unusually clean attack signatures.",
        "No timestamps, IPs, ports, payload indicators, asset criticality, or incident outcomes are provided.",
        "Random splitting cannot test campaign, host, or temporal drift.",
        "A production detector needs calibrated alert-volume targets and adversarial/red-team validation."
      ]
    },
    {
      "id": "popularity",
      "title": "AI search-popularity forecasting",
      "type": "regression",
      "target": "popularity_target",
      "business_question": "Can prior search volume, country, brand, and month forecast the next monthly AI-brand search count?",
      "business_use": "Support directional content and market-interest planning, not market share, product usage, or revenue claims.",
      "primary_metric": "Root mean squared error (RMSE)",
      "relative_metric_label": "sMAPE",
      "source_file": "popularity-ai-monthly.csv",
      "runtime_seconds": 20.81,
      "dataset": {
        "rows": 2860,
        "columns": 6,
        "features_used": 5,
        "missing_total": 0,
        "duplicate_rows": 0,
        "missing_by_column": {
          "lag_searches_1": 0,
          "trailing_searches_3": 0,
          "month_index": 0,
          "country_code": 0,
          "brand": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "lag_searches_1",
            "count": 456,
            "rate": 0.15944055944055943,
            "minimum": 90.0,
            "maximum": 226000000.0,
            "clip_low": 210.0,
            "clip_high": 83100000.0
          },
          {
            "feature": "trailing_searches_3",
            "count": 431,
            "rate": 0.1506993006993007,
            "minimum": 90.0,
            "maximum": 212333333.33333334,
            "clip_low": 210.63333333333333,
            "clip_high": 77491599.99999984
          },
          {
            "feature": "month_index",
            "count": 0,
            "rate": 0.0,
            "minimum": 7.0,
            "maximum": 17.0,
            "clip_low": 7.0,
            "clip_high": 13.0
          }
        ],
        "categories": {
          "country_code": [
            {
              "value": "AU",
              "count": 143
            },
            {
              "value": "BR",
              "count": 143
            },
            {
              "value": "CA",
              "count": 143
            },
            {
              "value": "DE",
              "count": 143
            },
            {
              "value": "ES",
              "count": 143
            },
            {
              "value": "FR",
              "count": 143
            },
            {
              "value": "GB",
              "count": 143
            },
            {
              "value": "ID",
              "count": 143
            },
            {
              "value": "IN",
              "count": 143
            },
            {
              "value": "IT",
              "count": 143
            },
            {
              "value": "JP",
              "count": 143
            },
            {
              "value": "KR",
              "count": 143
            },
            {
              "value": "MX",
              "count": 143
            },
            {
              "value": "NL",
              "count": 143
            },
            {
              "value": "PL",
              "count": 143
            },
            {
              "value": "SA",
              "count": 143
            },
            {
              "value": "SG",
              "count": 143
            },
            {
              "value": "TR",
              "count": 143
            },
            {
              "value": "US",
              "count": 143
            },
            {
              "value": "VN",
              "count": 143
            }
          ],
          "brand": [
            {
              "value": "ChatGPT",
              "count": 220
            },
            {
              "value": "Claude",
              "count": 220
            },
            {
              "value": "Copilot",
              "count": 220
            },
            {
              "value": "DeepSeek",
              "count": 220
            },
            {
              "value": "Doubao",
              "count": 220
            },
            {
              "value": "Gemini",
              "count": 220
            },
            {
              "value": "GitHub Copilot",
              "count": 220
            },
            {
              "value": "Grok",
              "count": 220
            },
            {
              "value": "Meta AI",
              "count": 220
            },
            {
              "value": "Midjourney",
              "count": 220
            },
            {
              "value": "Mistral",
              "count": 220
            },
            {
              "value": "Perplexity",
              "count": 220
            },
            {
              "value": "Qwen",
              "count": 220
            }
          ]
        },
        "target_summary": {
          "minimum": 90.0,
          "maximum": 277000000.0,
          "mean": 3513683.3776223776,
          "median": 90500.0,
          "std": 17311667.552381914
        },
        "unit": "count"
      },
      "audit_interpretation": "All 260 country-brand series contain 12 complete months. Search counts span 90 to 277 million, so targets are log-transformed inside each estimator while final errors remain on the original count scale.",
      "split": {
        "train": {
          "rows": 1820,
          "rate": 0.6363636363636364
        },
        "validation": {
          "rows": 520,
          "rate": 0.18181818181818182
        },
        "test": {
          "rows": 520,
          "rate": 0.18181818181818182
        },
        "strategy": "Chronological 70/15/15 split by snapshot period"
      },
      "preparation": {
        "numeric_features": [
          "lag_searches_1",
          "trailing_searches_3",
          "month_index"
        ],
        "categorical_features": [
          "country_code",
          "brand"
        ],
        "excluded_features": [
          "snapshot",
          "category",
          "country",
          "vendor",
          "year_month raw string"
        ],
        "feature_selection": "Country name and vendor duplicate country_code and brand mappings; constant snapshot/category fields are removed. Lag and rolling features use only earlier months within each country-brand series.",
        "steps": [
          "Construct lag features from prior periods only",
          "Median/mode imputation",
          "Train-learned 1st to 99th percentile clipping",
          "One-hot encoding",
          "Standard scaling",
          "Log1p target transform inside each estimator"
        ]
      },
      "comparison": [
        {
          "model": "Median baseline",
          "rmse": 17128656.456101667,
          "mae": 3478167.519230769,
          "r2": -0.041732169176546874,
          "mape": 1.303519188790535
        },
        {
          "model": "Ridge regression",
          "rmse": 22847250.33359758,
          "mae": 2903681.0284352223,
          "r2": -0.8534349922949851,
          "mape": 0.5514130917619571
        },
        {
          "model": "Random forest",
          "rmse": 2566983.3483578693,
          "mae": 493152.67220557784,
          "r2": 0.9766032475167238,
          "mape": 0.26212837778953013
        },
        {
          "model": "Histogram gradient boosting",
          "rmse": 3152948.63594197,
          "mae": 590871.3289242191,
          "r2": 0.9647025550732563,
          "mape": 0.2775156247789679
        }
      ],
      "selection": {
        "model": "Random forest",
        "reason": "Lowest validation RMSE; MAE used as a tie-breaker."
      },
      "tuning": {
        "method": "RandomizedSearchCV",
        "iterations": 6,
        "folds": 5,
        "scoring": "negative RMSE",
        "parameter_space": {
          "n_estimators": [
            250,
            400,
            600
          ],
          "max_depth": [
            8,
            12,
            18,
            null
          ],
          "min_samples_leaf": [
            1,
            2,
            4,
            8
          ],
          "max_features": [
            "sqrt",
            0.5,
            0.8,
            1.0
          ]
        },
        "best_parameters": {
          "n_estimators": 600,
          "min_samples_leaf": 2,
          "max_features": 0.5,
          "max_depth": 18
        },
        "best_cv_score": 5291294.772738127,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 5291294.772738127,
            "std_cv_score": 3932447.9207095737,
            "train_score": 4967227.1954049,
            "parameters": {
              "n_estimators": 600,
              "min_samples_leaf": 2,
              "max_features": 0.5,
              "max_depth": 18
            }
          },
          {
            "rank": 2,
            "mean_cv_score": 5531601.75230292,
            "std_cv_score": 3619353.8292374653,
            "train_score": 4625012.287662536,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 2,
              "max_features": 0.8,
              "max_depth": 12
            }
          },
          {
            "rank": 3,
            "mean_cv_score": 6240978.652412702,
            "std_cv_score": 3487952.804635292,
            "train_score": 4512686.084875125,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 2,
              "max_features": 1.0,
              "max_depth": 18
            }
          },
          {
            "rank": 4,
            "mean_cv_score": 9292441.946730454,
            "std_cv_score": 3885454.043193701,
            "train_score": 8818927.440308087,
            "parameters": {
              "n_estimators": 250,
              "min_samples_leaf": 8,
              "max_features": 0.8,
              "max_depth": null
            }
          },
          {
            "rank": 5,
            "mean_cv_score": 9404557.231577849,
            "std_cv_score": 3631674.225789852,
            "train_score": 8665404.85231154,
            "parameters": {
              "n_estimators": 600,
              "min_samples_leaf": 8,
              "max_features": 1.0,
              "max_depth": 18
            }
          },
          {
            "rank": 6,
            "mean_cv_score": 9429195.805493902,
            "std_cv_score": 3670924.421263598,
            "train_score": 8702352.639254002,
            "parameters": {
              "n_estimators": 250,
              "min_samples_leaf": 8,
              "max_features": 1.0,
              "max_depth": 8
            }
          }
        ],
        "tuned_validation_metrics": {
          "rmse": 2339284.75735783,
          "mae": 445210.454277021,
          "r2": 0.9805698720868978,
          "mape": 0.26480246069813446
        }
      },
      "test": {
        "metrics": {
          "rmse": 4199323.466823394,
          "mae": 565240.1024438374,
          "r2": 0.953426960764928,
          "mape": 0.21073370105351594
        },
        "feature_importance": [
          {
            "feature": "lag_searches_1",
            "importance_mean": 14421923.402163824,
            "importance_std": 1235216.579717732
          },
          {
            "feature": "trailing_searches_3",
            "importance_mean": 14220668.143626548,
            "importance_std": 1208860.0437229867
          },
          {
            "feature": "brand",
            "importance_mean": 7864408.219202687,
            "importance_std": 643822.3017625952
          },
          {
            "feature": "country_code",
            "importance_mean": 5462068.504082794,
            "importance_std": 1076496.9776759618
          },
          {
            "feature": "month_index",
            "importance_mean": 1.0865430037180583e-09,
            "importance_std": 1.2514271072264992e-09
          }
        ],
        "prediction_sample": [
          {
            "actual": 201000.0,
            "predicted": 341878.5789065199
          },
          {
            "actual": 18100.0,
            "predicted": 26113.56916534232
          },
          {
            "actual": 368000.0,
            "predicted": 525927.9749764845
          },
          {
            "actual": 1830000.0,
            "predicted": 2073495.0157595167
          },
          {
            "actual": 22200.0,
            "predicted": 23558.235831576465
          },
          {
            "actual": 390.0,
            "predicted": 663.971005386639
          },
          {
            "actual": 74000.0,
            "predicted": 83159.73943582994
          },
          {
            "actual": 1000000.0,
            "predicted": 1258257.145631116
          },
          {
            "actual": 368000.0,
            "predicted": 255838.9466976533
          },
          {
            "actual": 201000.0,
            "predicted": 281091.65118617465
          },
          {
            "actual": 110000.0,
            "predicted": 164512.5858452396
          },
          {
            "actual": 22200.0,
            "predicted": 19826.48616253706
          },
          {
            "actual": 9900.0,
            "predicted": 9941.099589272415
          },
          {
            "actual": 246000.0,
            "predicted": 336080.65455566865
          },
          {
            "actual": 30400000.0,
            "predicted": 32613626.120556246
          },
          {
            "actual": 1000000.0,
            "predicted": 895510.7851613407
          },
          {
            "actual": 33100.0,
            "predicted": 39194.551307069276
          },
          {
            "actual": 12100.0,
            "predicted": 10818.018056638219
          },
          {
            "actual": 40500.0,
            "predicted": 61050.3530187577
          },
          {
            "actual": 9900.0,
            "predicted": 14066.605008261362
          },
          {
            "actual": 22200.0,
            "predicted": 23514.147614952934
          },
          {
            "actual": 201000.0,
            "predicted": 274017.39405061747
          },
          {
            "actual": 1830000.0,
            "predicted": 1635153.5255743284
          },
          {
            "actual": 550000.0,
            "predicted": 475379.59802372893
          },
          {
            "actual": 1220000.0,
            "predicted": 1478425.8139155495
          },
          {
            "actual": 14800.0,
            "predicted": 16909.267021549153
          },
          {
            "actual": 1830000.0,
            "predicted": 2234160.6718838043
          },
          {
            "actual": 1830000.0,
            "predicted": 1372293.992530381
          },
          {
            "actual": 2400.0,
            "predicted": 1880.4876446808532
          },
          {
            "actual": 368000.0,
            "predicted": 302020.25256506616
          },
          {
            "actual": 550000.0,
            "predicted": 816182.0615404584
          },
          {
            "actual": 246000.0,
            "predicted": 297607.24785084126
          },
          {
            "actual": 40500.0,
            "predicted": 49008.03256219709
          },
          {
            "actual": 12100.0,
            "predicted": 14844.107484037799
          },
          {
            "actual": 3600.0,
            "predicted": 4267.575988850282
          },
          {
            "actual": 9900.0,
            "predicted": 18604.062652262295
          },
          {
            "actual": 110000.0,
            "predicted": 107131.60953041694
          },
          {
            "actual": 301000.0,
            "predicted": 263401.49427259003
          },
          {
            "actual": 45500000.0,
            "predicted": 34528698.57504172
          },
          {
            "actual": 68000000.0,
            "predicted": 36650501.81587063
          },
          {
            "actual": 823000.0,
            "predicted": 894408.1634683228
          },
          {
            "actual": 37200000.0,
            "predicted": 34002665.446655676
          },
          {
            "actual": 590.0,
            "predicted": 503.4851353438035
          },
          {
            "actual": 450000.0,
            "predicted": 499459.94752320554
          },
          {
            "actual": 165000.0,
            "predicted": 303208.268256046
          },
          {
            "actual": 3600.0,
            "predicted": 3727.236015875248
          },
          {
            "actual": 135000.0,
            "predicted": 151031.68815955427
          },
          {
            "actual": 673000.0,
            "predicted": 1307715.1476542922
          },
          {
            "actual": 1830000.0,
            "predicted": 1620238.4845866829
          },
          {
            "actual": 2400.0,
            "predicted": 3274.2337095136068
          },
          {
            "actual": 110000.0,
            "predicted": 85907.01568666172
          },
          {
            "actual": 74000.0,
            "predicted": 61918.451085285444
          },
          {
            "actual": 246000.0,
            "predicted": 246824.010521426
          },
          {
            "actual": 60500.0,
            "predicted": 42056.35363754275
          },
          {
            "actual": 33100.0,
            "predicted": 35027.087160356896
          },
          {
            "actual": 277000000.0,
            "predicted": 196845350.18849778
          },
          {
            "actual": 390.0,
            "predicted": 672.4822695251147
          },
          {
            "actual": 12100.0,
            "predicted": 14893.492280761602
          },
          {
            "actual": 4400.0,
            "predicted": 4383.801651684989
          },
          {
            "actual": 18100.0,
            "predicted": 17441.4421963123
          },
          {
            "actual": 74000.0,
            "predicted": 57052.518786742505
          },
          {
            "actual": 74000.0,
            "predicted": 119787.95624857463
          },
          {
            "actual": 368000.0,
            "predicted": 392858.702451151
          },
          {
            "actual": 1900.0,
            "predicted": 2289.1446521584517
          },
          {
            "actual": 14800.0,
            "predicted": 17346.87839786462
          },
          {
            "actual": 8100.0,
            "predicted": 7797.986126615769
          },
          {
            "actual": 22200.0,
            "predicted": 25938.543634402246
          },
          {
            "actual": 49500.0,
            "predicted": 49170.87394078373
          },
          {
            "actual": 246000.0,
            "predicted": 310191.60922190244
          },
          {
            "actual": 14800.0,
            "predicted": 16970.829907350464
          },
          {
            "actual": 673000.0,
            "predicted": 883716.3952008276
          },
          {
            "actual": 2900.0,
            "predicted": 3742.2330826421457
          },
          {
            "actual": 33100.0,
            "predicted": 30000.60460848748
          },
          {
            "actual": 74000.0,
            "predicted": 72458.41945537199
          },
          {
            "actual": 368000.0,
            "predicted": 482727.19261640357
          },
          {
            "actual": 201000.0,
            "predicted": 348423.3765217468
          },
          {
            "actual": 1220000.0,
            "predicted": 1311353.0738773788
          },
          {
            "actual": 33100.0,
            "predicted": 34483.922349732566
          },
          {
            "actual": 22200.0,
            "predicted": 16565.049841975466
          },
          {
            "actual": 2740000.0,
            "predicted": 3063905.4533923673
          },
          {
            "actual": 368000.0,
            "predicted": 396949.00283207744
          },
          {
            "actual": 6120000.0,
            "predicted": 7629662.2187864715
          },
          {
            "actual": 110000.0,
            "predicted": 124052.608655656
          },
          {
            "actual": 165000.0,
            "predicted": 194674.24099492803
          },
          {
            "actual": 201000.0,
            "predicted": 210691.63489741372
          },
          {
            "actual": 18100.0,
            "predicted": 16228.524057639162
          },
          {
            "actual": 18100.0,
            "predicted": 23857.69861254127
          },
          {
            "actual": 480.0,
            "predicted": 797.1181583302953
          },
          {
            "actual": 550000.0,
            "predicted": 758564.0082302332
          },
          {
            "actual": 3350000.0,
            "predicted": 3507779.2654844904
          },
          {
            "actual": 368000.0,
            "predicted": 477715.4624102689
          },
          {
            "actual": 673000.0,
            "predicted": 822207.4670211048
          },
          {
            "actual": 2900.0,
            "predicted": 3710.5164452258673
          },
          {
            "actual": 27100.0,
            "predicted": 25491.50391178361
          },
          {
            "actual": 30400000.0,
            "predicted": 29113924.687568165
          },
          {
            "actual": 7480000.0,
            "predicted": 4103990.1484533153
          },
          {
            "actual": 4400.0,
            "predicted": 4383.801651684989
          },
          {
            "actual": 1500000.0,
            "predicted": 2356418.8705248088
          },
          {
            "actual": 55600000.0,
            "predicted": 34629992.01529355
          },
          {
            "actual": 823000.0,
            "predicted": 857525.0513134894
          },
          {
            "actual": 450000.0,
            "predicted": 560694.3576733663
          },
          {
            "actual": 12100.0,
            "predicted": 17852.327883155638
          },
          {
            "actual": 27100.0,
            "predicted": 30914.894527675628
          },
          {
            "actual": 27100.0,
            "predicted": 33231.71228010733
          },
          {
            "actual": 246000.0,
            "predicted": 276352.5992887222
          },
          {
            "actual": 12100.0,
            "predicted": 19964.532823840364
          },
          {
            "actual": 3600.0,
            "predicted": 4099.468476307539
          },
          {
            "actual": 246000.0,
            "predicted": 273237.26706537494
          },
          {
            "actual": 2400.0,
            "predicted": 2928.4487275361503
          },
          {
            "actual": 3600.0,
            "predicted": 3290.424265497317
          },
          {
            "actual": 3600.0,
            "predicted": 5518.650611890665
          },
          {
            "actual": 480.0,
            "predicted": 800.4951247428841
          },
          {
            "actual": 1500000.0,
            "predicted": 2170328.675838815
          },
          {
            "actual": 673000.0,
            "predicted": 619098.4757129834
          },
          {
            "actual": 6120000.0,
            "predicted": 12521511.58660874
          },
          {
            "actual": 2240000.0,
            "predicted": 2977140.38357195
          },
          {
            "actual": 110000.0,
            "predicted": 147372.46566141007
          },
          {
            "actual": 30400000.0,
            "predicted": 30607596.643980592
          },
          {
            "actual": 550000.0,
            "predicted": 685026.7526297126
          },
          {
            "actual": 22200.0,
            "predicted": 24522.756501995023
          },
          {
            "actual": 22200.0,
            "predicted": 23709.914409588673
          },
          {
            "actual": 246000.0,
            "predicted": 276352.5992887222
          },
          {
            "actual": 246000.0,
            "predicted": 297424.4405515308
          },
          {
            "actual": 8100.0,
            "predicted": 15965.053085005315
          },
          {
            "actual": 40500.0,
            "predicted": 42553.180855537845
          },
          {
            "actual": 1220000.0,
            "predicted": 1159388.5411863893
          },
          {
            "actual": 37200000.0,
            "predicted": 34506907.654605284
          },
          {
            "actual": 9900.0,
            "predicted": 12699.79772448779
          },
          {
            "actual": 74000.0,
            "predicted": 102888.57309683002
          },
          {
            "actual": 3350000.0,
            "predicted": 3251644.1841192017
          },
          {
            "actual": 49500.0,
            "predicted": 41483.288098812656
          },
          {
            "actual": 2240000.0,
            "predicted": 2571233.3044244032
          },
          {
            "actual": 301000.0,
            "predicted": 250307.53927236635
          },
          {
            "actual": 9900.0,
            "predicted": 13122.095616990044
          },
          {
            "actual": 165000.0,
            "predicted": 287249.9819255281
          },
          {
            "actual": 301000.0,
            "predicted": 305635.120593002
          },
          {
            "actual": 1600.0,
            "predicted": 2288.1546624765033
          },
          {
            "actual": 90500.0,
            "predicted": 85963.31289257655
          },
          {
            "actual": 1500000.0,
            "predicted": 1234201.3029703612
          },
          {
            "actual": 24900000.0,
            "predicted": 24903326.48182684
          },
          {
            "actual": 18100.0,
            "predicted": 30215.370404894624
          },
          {
            "actual": 90500.0,
            "predicted": 107131.60953041694
          },
          {
            "actual": 22200.0,
            "predicted": 21640.017191786173
          },
          {
            "actual": 4400.0,
            "predicted": 6259.970954289205
          },
          {
            "actual": 1830000.0,
            "predicted": 2015718.8820740401
          },
          {
            "actual": 110000.0,
            "predicted": 132840.8426178005
          },
          {
            "actual": 18100.0,
            "predicted": 25389.09535840991
          },
          {
            "actual": 368000.0,
            "predicted": 401034.2925825413
          },
          {
            "actual": 246000.0,
            "predicted": 311409.1756306176
          },
          {
            "actual": 368000.0,
            "predicted": 436949.5333740846
          },
          {
            "actual": 1300.0,
            "predicted": 1089.4679412829532
          },
          {
            "actual": 30400000.0,
            "predicted": 29464405.779032134
          },
          {
            "actual": 550000.0,
            "predicted": 628293.2515701372
          },
          {
            "actual": 1300.0,
            "predicted": 1105.937656262073
          },
          {
            "actual": 1830000.0,
            "predicted": 2034080.681895664
          },
          {
            "actual": 301000.0,
            "predicted": 309793.7764826831
          },
          {
            "actual": 110000.0,
            "predicted": 151911.60128724418
          },
          {
            "actual": 165000.0,
            "predicted": 254995.59599579076
          },
          {
            "actual": 14800.0,
            "predicted": 16774.16838435928
          },
          {
            "actual": 30400000.0,
            "predicted": 30905729.307003483
          },
          {
            "actual": 1830000.0,
            "predicted": 2366179.365265575
          },
          {
            "actual": 49500.0,
            "predicted": 67283.30677335378
          },
          {
            "actual": 90500.0,
            "predicted": 134321.9901318539
          },
          {
            "actual": 49500.0,
            "predicted": 52927.47431664124
          },
          {
            "actual": 1500000.0,
            "predicted": 1841213.1075694563
          },
          {
            "actual": 1220000.0,
            "predicted": 1780475.8926039033
          },
          {
            "actual": 165000.0,
            "predicted": 216413.11503376413
          },
          {
            "actual": 1830000.0,
            "predicted": 1760932.1524440837
          },
          {
            "actual": 2400.0,
            "predicted": 2384.8279304519956
          },
          {
            "actual": 3350000.0,
            "predicted": 3244319.238135434
          },
          {
            "actual": 301000.0,
            "predicted": 274148.31492913014
          },
          {
            "actual": 1220000.0,
            "predicted": 908595.1587048497
          },
          {
            "actual": 30400000.0,
            "predicted": 29113924.687568165
          },
          {
            "actual": 3350000.0,
            "predicted": 3184761.254665557
          },
          {
            "actual": 74000.0,
            "predicted": 92365.14021053676
          },
          {
            "actual": 368000.0,
            "predicted": 420325.9555399533
          },
          {
            "actual": 550000.0,
            "predicted": 502314.6852780036
          },
          {
            "actual": 246000.0,
            "predicted": 273237.26706537494
          },
          {
            "actual": 3600.0,
            "predicted": 4355.220622492421
          },
          {
            "actual": 2400.0,
            "predicted": 2783.1308584297185
          },
          {
            "actual": 301000.0,
            "predicted": 447920.31344180857
          },
          {
            "actual": 110000.0,
            "predicted": 107367.17856549927
          },
          {
            "actual": 135000.0,
            "predicted": 194674.24099492803
          },
          {
            "actual": 27100.0,
            "predicted": 37342.68952021193
          },
          {
            "actual": 1000000.0,
            "predicted": 916816.1206548684
          },
          {
            "actual": 18100.0,
            "predicted": 28727.00206239631
          },
          {
            "actual": 12100.0,
            "predicted": 16216.442125399115
          },
          {
            "actual": 14800.0,
            "predicted": 16422.073769799335
          },
          {
            "actual": 14800.0,
            "predicted": 17036.31457234932
          },
          {
            "actual": 550000.0,
            "predicted": 754003.7116809752
          },
          {
            "actual": 110000.0,
            "predicted": 87809.75840618006
          },
          {
            "actual": 1830000.0,
            "predicted": 1222360.6330327597
          },
          {
            "actual": 201000.0,
            "predicted": 328045.30067994556
          },
          {
            "actual": 368000.0,
            "predicted": 314087.66588206834
          },
          {
            "actual": 40500.0,
            "predicted": 42679.72740840882
          },
          {
            "actual": 450000.0,
            "predicted": 632642.500843331
          },
          {
            "actual": 3350000.0,
            "predicted": 3917580.395632316
          },
          {
            "actual": 74000.0,
            "predicted": 97877.47062727183
          },
          {
            "actual": 450000.0,
            "predicted": 618015.5060862288
          },
          {
            "actual": 5400.0,
            "predicted": 8228.11057156262
          },
          {
            "actual": 4090000.0,
            "predicted": 3851198.6559473993
          },
          {
            "actual": 2900.0,
            "predicted": 3138.603328209797
          },
          {
            "actual": 12100.0,
            "predicted": 11740.788224104856
          },
          {
            "actual": 74000.0,
            "predicted": 95157.96520449306
          },
          {
            "actual": 27100.0,
            "predicted": 25055.69190829695
          },
          {
            "actual": 1220000.0,
            "predicted": 1032112.891167855
          },
          {
            "actual": 60500.0,
            "predicted": 74263.72685224235
          },
          {
            "actual": 450000.0,
            "predicted": 417557.74394680967
          },
          {
            "actual": 165000.0,
            "predicted": 237065.22347314275
          },
          {
            "actual": 3350000.0,
            "predicted": 3572734.7709913594
          },
          {
            "actual": 673000.0,
            "predicted": 874780.2040436409
          },
          {
            "actual": 12100.0,
            "predicted": 17095.24522867434
          },
          {
            "actual": 450000.0,
            "predicted": 398249.24173114
          },
          {
            "actual": 1220000.0,
            "predicted": 918926.7807006813
          },
          {
            "actual": 8100.0,
            "predicted": 11455.597684408682
          },
          {
            "actual": 49500.0,
            "predicted": 35621.54107692813
          },
          {
            "actual": 9900.0,
            "predicted": 15412.786469153076
          },
          {
            "actual": 110000.0,
            "predicted": 146686.73717283332
          },
          {
            "actual": 12100.0,
            "predicted": 7509.6172914071485
          },
          {
            "actual": 2900.0,
            "predicted": 4313.864152255287
          },
          {
            "actual": 480.0,
            "predicted": 690.5664217823501
          },
          {
            "actual": 22200.0,
            "predicted": 22275.718605612823
          },
          {
            "actual": 165000.0,
            "predicted": 297903.8227244594
          },
          {
            "actual": 8100.0,
            "predicted": 9648.48010138871
          },
          {
            "actual": 33100.0,
            "predicted": 28870.266847730487
          },
          {
            "actual": 1220000.0,
            "predicted": 1444372.72895143
          },
          {
            "actual": 18100.0,
            "predicted": 14295.633316486736
          },
          {
            "actual": 12100.0,
            "predicted": 21176.54402435286
          },
          {
            "actual": 14800.0,
            "predicted": 12386.615474191702
          },
          {
            "actual": 74000.0,
            "predicted": 42035.20524769881
          },
          {
            "actual": 110000.0,
            "predicted": 75355.34532978846
          },
          {
            "actual": 8100.0,
            "predicted": 9479.642725476797
          },
          {
            "actual": 60500.0,
            "predicted": 39907.153522011264
          },
          {
            "actual": 22200.0,
            "predicted": 17785.995230148244
          },
          {
            "actual": 2900.0,
            "predicted": 2883.138013233778
          },
          {
            "actual": 33100.0,
            "predicted": 36352.37977634299
          },
          {
            "actual": 135000.0,
            "predicted": 147372.46566141007
          },
          {
            "actual": 135000.0,
            "predicted": 204282.9923005273
          },
          {
            "actual": 550000.0,
            "predicted": 632993.7960417302
          },
          {
            "actual": 74000.0,
            "predicted": 87727.41342554124
          },
          {
            "actual": 18100.0,
            "predicted": 5156.5394127695145
          },
          {
            "actual": 368000.0,
            "predicted": 333774.6269505877
          },
          {
            "actual": 6120000.0,
            "predicted": 7629662.2187864715
          },
          {
            "actual": 18100.0,
            "predicted": 20783.79229438642
          },
          {
            "actual": 550000.0,
            "predicted": 605064.4248243942
          },
          {
            "actual": 1500000.0,
            "predicted": 928513.5531250134
          },
          {
            "actual": 673000.0,
            "predicted": 855972.4240911566
          },
          {
            "actual": 550000.0,
            "predicted": 776528.617875591
          },
          {
            "actual": 33100.0,
            "predicted": 29386.652581884333
          },
          {
            "actual": 27100.0,
            "predicted": 20790.316591342955
          },
          {
            "actual": 201000.0,
            "predicted": 238868.50172636085
          },
          {
            "actual": 1830000.0,
            "predicted": 2075638.5458730701
          },
          {
            "actual": 673000.0,
            "predicted": 939303.0453581612
          },
          {
            "actual": 30400000.0,
            "predicted": 29464405.779032134
          },
          {
            "actual": 27100.0,
            "predicted": 25153.61498556118
          },
          {
            "actual": 450000.0,
            "predicted": 560204.9834500769
          },
          {
            "actual": 37200000.0,
            "predicted": 34002665.446655676
          },
          {
            "actual": 1830000.0,
            "predicted": 2679154.880884222
          },
          {
            "actual": 246000.0,
            "predicted": 302396.7357131669
          },
          {
            "actual": 246000.0,
            "predicted": 334839.5045096223
          },
          {
            "actual": 7480000.0,
            "predicted": 5453857.961737686
          },
          {
            "actual": 1900.0,
            "predicted": 3290.040780204453
          },
          {
            "actual": 2400.0,
            "predicted": 2081.4541996658127
          },
          {
            "actual": 49500.0,
            "predicted": 65601.20003245582
          },
          {
            "actual": 673000.0,
            "predicted": 603133.2023041486
          },
          {
            "actual": 40500.0,
            "predicted": 42463.61389136384
          },
          {
            "actual": 60500.0,
            "predicted": 78017.49971840953
          },
          {
            "actual": 33100.0,
            "predicted": 42441.649904236605
          },
          {
            "actual": 246000.0,
            "predicted": 313748.27213869436
          },
          {
            "actual": 40500.0,
            "predicted": 37390.68752667331
          },
          {
            "actual": 368000.0,
            "predicted": 401034.2925825413
          },
          {
            "actual": 40500.0,
            "predicted": 40234.7085575715
          },
          {
            "actual": 135000.0,
            "predicted": 110938.95987804278
          },
          {
            "actual": 27100.0,
            "predicted": 34821.74519595467
          },
          {
            "actual": 1000000.0,
            "predicted": 1252293.7865818632
          },
          {
            "actual": 301000.0,
            "predicted": 312827.24876969145
          },
          {
            "actual": 18100.0,
            "predicted": 13272.738794895738
          },
          {
            "actual": 40500.0,
            "predicted": 48257.81435911897
          },
          {
            "actual": 823000.0,
            "predicted": 789548.6618995065
          },
          {
            "actual": 5400.0,
            "predicted": 7377.461323710126
          }
        ],
        "residual_bins": [
          {
            "actual": 3324.027777777778,
            "mean_residual": -818.8381478802195,
            "mae": 1040.6880689836128,
            "count": 72
          },
          {
            "actual": 14346.551724137931,
            "mean_residual": -2741.0746836926473,
            "mae": 3904.1367722277046,
            "count": 58
          },
          {
            "actual": 30783.75,
            "mean_residual": -2896.6303817740454,
            "mae": 5228.137152633045,
            "count": 80
          },
          {
            "actual": 77232.75862068965,
            "mean_residual": -9462.57944664114,
            "mae": 18861.985691656544,
            "count": 58
          },
          {
            "actual": 223651.51515151514,
            "mean_residual": -52808.498315128134,
            "mae": 62173.80327395522,
            "count": 66
          },
          {
            "actual": 518136.36363636365,
            "mean_residual": -134283.82899890043,
            "mae": 155489.22993363175,
            "count": 66
          },
          {
            "actual": 1373490.9090909092,
            "mean_residual": -65893.28382880185,
            "mae": 299241.30134567904,
            "count": 55
          },
          {
            "actual": 29559846.153846152,
            "mean_residual": 2921705.3454161454,
            "mae": 4019803.167523071,
            "count": 65
          }
        ]
      },
      "interpretation": "The sealed test explains 95.3% of target variance with RMSE 4,199,323.47 in the target's displayed units.",
      "limitations": [
        "Only twelve monthly observations exist per country-brand series.",
        "Search volume is an interest proxy, not active users, satisfaction, adoption, or revenue.",
        "Search-engine coverage, keyword definitions, and normalization methodology are not documented.",
        "Major launches can create shocks that lag-based models cannot anticipate."
      ]
    }
  ]
};
