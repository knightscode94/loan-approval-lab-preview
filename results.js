window.LOAN_RESULTS = {
  "metadata": {
    "title": "Loan approval classification lab",
    "generated_at_utc": "2026-07-31T10:17:47.144415+00:00",
    "random_state": 42,
    "runtime_seconds": 122.19,
    "python": "3.12.10",
    "scikit_learn": "1.8.0",
    "pandas": "3.0.1",
    "source_file": "loan_data.csv",
    "synthetic_source": true
  },
  "problem": {
    "target": "loan_status",
    "positive_class": "1 = approved",
    "negative_class": "0 = rejected",
    "primary_selection_metric": "Average precision (PR-AUC)",
    "selection_reason": "Approval is the 22.2% minority class, so PR-AUC measures useful ranking without being inflated by true negatives.",
    "decision_scope": "Prototype decision support only; not validated for real lending or autonomous decisions."
  },
  "dataset": {
    "rows": 45000,
    "columns": 14,
    "predictors_used": 12,
    "target_counts": {
      "0": 35000,
      "1": 10000
    },
    "target_rates": {
      "0": 0.7777777777777778,
      "1": 0.2222222222222222
    },
    "missing_total": 0,
    "duplicate_rows": 0,
    "missing_by_column": {
      "person_age": 0,
      "person_gender": 0,
      "person_education": 0,
      "person_income": 0,
      "person_emp_exp": 0,
      "person_home_ownership": 0,
      "loan_amnt": 0,
      "loan_intent": 0,
      "loan_int_rate": 0,
      "loan_percent_income": 0,
      "cb_person_cred_hist_length": 0,
      "credit_score": 0,
      "previous_loan_defaults_on_file": 0,
      "loan_status": 0
    },
    "outliers_iqr": [
      {
        "feature": "person_age",
        "count": 2188,
        "rate": 0.04862222222222222,
        "minimum": 20.0,
        "maximum": 144.0,
        "clip_low": 21.0,
        "clip_high": 48.0
      },
      {
        "feature": "person_income",
        "count": 2218,
        "rate": 0.04928888888888889,
        "minimum": 8000.0,
        "maximum": 7200766.0,
        "clip_low": 17833.64,
        "clip_high": 277017.82999999984
      },
      {
        "feature": "person_emp_exp",
        "count": 1724,
        "rate": 0.03831111111111111,
        "minimum": 0.0,
        "maximum": 125.0,
        "clip_low": 0.0,
        "clip_high": 26.0
      },
      {
        "feature": "loan_amnt",
        "count": 2348,
        "rate": 0.052177777777777774,
        "minimum": 500.0,
        "maximum": 35000.0,
        "clip_low": 1198.97,
        "clip_high": 28883.17999999981
      },
      {
        "feature": "loan_int_rate",
        "count": 124,
        "rate": 0.0027555555555555554,
        "minimum": 5.42,
        "maximum": 20.0,
        "clip_low": 5.42,
        "clip_high": 18.25
      },
      {
        "feature": "loan_percent_income",
        "count": 744,
        "rate": 0.016533333333333334,
        "minimum": 0.0,
        "maximum": 0.66,
        "clip_low": 0.02,
        "clip_high": 0.4
      },
      {
        "feature": "cb_person_cred_hist_length",
        "count": 1366,
        "rate": 0.030355555555555556,
        "minimum": 2.0,
        "maximum": 30.0,
        "clip_low": 2.0,
        "clip_high": 17.0
      },
      {
        "feature": "credit_score",
        "count": 467,
        "rate": 0.010377777777777777,
        "minimum": 390.0,
        "maximum": 850.0,
        "clip_low": 498.0,
        "clip_high": 723.0
      }
    ],
    "category_rates": {
      "person_education": [
        {
          "value": "Bachelor",
          "count": 13399,
          "approval_rate": 0.22524068960370178
        },
        {
          "value": "Associate",
          "count": 12028,
          "approval_rate": 0.22031925507149983
        },
        {
          "value": "High School",
          "count": 11972,
          "approval_rate": 0.223103909121283
        },
        {
          "value": "Master",
          "count": 6980,
          "approval_rate": 0.21762177650429798
        },
        {
          "value": "Doctorate",
          "count": 621,
          "approval_rate": 0.2286634460547504
        }
      ],
      "person_home_ownership": [
        {
          "value": "RENT",
          "count": 23443,
          "approval_rate": 0.3239773066587041
        },
        {
          "value": "MORTGAGE",
          "count": 18489,
          "approval_rate": 0.11596084158148089
        },
        {
          "value": "OWN",
          "count": 2951,
          "approval_rate": 0.07522873602168756
        },
        {
          "value": "OTHER",
          "count": 117,
          "approval_rate": 0.3333333333333333
        }
      ],
      "loan_intent": [
        {
          "value": "EDUCATION",
          "count": 9153,
          "approval_rate": 0.16956189227575658
        },
        {
          "value": "MEDICAL",
          "count": 8548,
          "approval_rate": 0.2781937295273748
        },
        {
          "value": "VENTURE",
          "count": 7819,
          "approval_rate": 0.144263972374984
        },
        {
          "value": "PERSONAL",
          "count": 7552,
          "approval_rate": 0.20140360169491525
        },
        {
          "value": "DEBTCONSOLIDATION",
          "count": 7145,
          "approval_rate": 0.3027291812456263
        },
        {
          "value": "HOMEIMPROVEMENT",
          "count": 4783,
          "approval_rate": 0.2630148442400167
        }
      ],
      "previous_loan_defaults_on_file": [
        {
          "value": "Yes",
          "count": 22858,
          "approval_rate": 0.0
        },
        {
          "value": "No",
          "count": 22142,
          "approval_rate": 0.45163038569234937
        }
      ],
      "person_gender": [
        {
          "value": "male",
          "count": 24841,
          "approval_rate": 0.22201199629644539
        },
        {
          "value": "female",
          "count": 20159,
          "approval_rate": 0.22248127387271194
        }
      ]
    },
    "numeric_summary": {
      "person_age": {
        "mean": 27.76417777777778,
        "median": 26.0,
        "std": 6.045108211348459,
        "min": 20.0,
        "max": 144.0
      },
      "person_income": {
        "mean": 80319.05322222222,
        "median": 67048.0,
        "std": 80422.49863189524,
        "min": 8000.0,
        "max": 7200766.0
      },
      "person_emp_exp": {
        "mean": 5.410333333333333,
        "median": 4.0,
        "std": 6.0635320865745586,
        "min": 0.0,
        "max": 125.0
      },
      "loan_amnt": {
        "mean": 9583.157555555556,
        "median": 8000.0,
        "std": 6314.886690541196,
        "min": 500.0,
        "max": 35000.0
      },
      "loan_int_rate": {
        "mean": 11.006605777777779,
        "median": 11.01,
        "std": 2.978808280225381,
        "min": 5.42,
        "max": 20.0
      },
      "loan_percent_income": {
        "mean": 0.1397248888888889,
        "median": 0.12,
        "std": 0.08721230801404041,
        "min": 0.0,
        "max": 0.66
      },
      "cb_person_cred_hist_length": {
        "mean": 5.8674888888888885,
        "median": 4.0,
        "std": 3.8797018451618497,
        "min": 2.0,
        "max": 30.0
      },
      "credit_score": {
        "mean": 632.6087555555556,
        "median": 640.0,
        "std": 50.435865000742275,
        "min": 390.0,
        "max": 850.0
      }
    }
  },
  "split": {
    "strategy": "Two-stage stratified random split",
    "train": {
      "rows": 31500,
      "rate": 0.7,
      "positive_rate": 0.2222222222222222
    },
    "validation": {
      "rows": 6750,
      "rate": 0.15,
      "positive_rate": 0.2222222222222222
    },
    "test": {
      "rows": 6750,
      "rate": 0.15,
      "positive_rate": 0.2222222222222222
    }
  },
  "preparation": {
    "model_features": [
      "person_age",
      "person_income",
      "person_emp_exp",
      "loan_amnt",
      "loan_int_rate",
      "loan_percent_income",
      "cb_person_cred_hist_length",
      "credit_score",
      "person_education",
      "person_home_ownership",
      "loan_intent",
      "previous_loan_defaults_on_file"
    ],
    "audit_only_features": [
      "person_gender"
    ],
    "numeric_pipeline": [
      "Median imputation",
      "1st to 99th percentile clipping learned on training data",
      "StandardScaler"
    ],
    "categorical_pipeline": [
      "Most-frequent imputation",
      "OneHotEncoder with unknown-category handling"
    ],
    "feature_selection": "All non-target fields retained except gender, which is excluded from modelling and used only for subgroup auditing.",
    "leakage_controls": [
      "Split before fitting all transformations",
      "Preprocessing and estimator are one scikit-learn Pipeline",
      "Hyperparameter search uses training folds only",
      "Threshold selected on validation data",
      "Test set opened once for final evaluation"
    ]
  },
  "validation_comparison": [
    {
      "model": "Dummy baseline",
      "accuracy": 0.7777777777777778,
      "balanced_accuracy": 0.5,
      "precision": 0.0,
      "recall": 0.0,
      "f1": 0.0,
      "roc_auc": 0.5,
      "average_precision": 0.2222222222222222,
      "brier": 0.2222222222222222,
      "threshold": 0.5,
      "confusion_matrix": {
        "tn": 5250,
        "fp": 0,
        "fn": 1500,
        "tp": 0
      }
    },
    {
      "model": "Logistic regression",
      "accuracy": 0.8637037037037038,
      "balanced_accuracy": 0.8828571428571428,
      "precision": 0.6335174953959485,
      "recall": 0.9173333333333333,
      "f1": 0.7494553376906318,
      "roc_auc": 0.9545230476190476,
      "average_precision": 0.8591261746456778,
      "brier": 0.09180624949633599,
      "threshold": 0.5,
      "confusion_matrix": {
        "tn": 4454,
        "fp": 796,
        "fn": 124,
        "tp": 1376
      }
    },
    {
      "model": "Random forest",
      "accuracy": 0.9094814814814814,
      "balanced_accuracy": 0.8996666666666666,
      "precision": 0.7529880478087649,
      "recall": 0.882,
      "f1": 0.8124040528093337,
      "roc_auc": 0.9730347936507936,
      "average_precision": 0.9254152279141816,
      "brier": 0.06293630025220173,
      "threshold": 0.5,
      "confusion_matrix": {
        "tn": 4816,
        "fp": 434,
        "fn": 177,
        "tp": 1323
      }
    },
    {
      "model": "Histogram gradient boosting",
      "accuracy": 0.9154074074074074,
      "balanced_accuracy": 0.9125238095238095,
      "precision": 0.7590630228667038,
      "recall": 0.9073333333333333,
      "f1": 0.826601882781658,
      "roc_auc": 0.9779851428571429,
      "average_precision": 0.9377223149554968,
      "brier": 0.05811245617791639,
      "threshold": 0.5,
      "confusion_matrix": {
        "tn": 4818,
        "fp": 432,
        "fn": 139,
        "tp": 1361
      }
    }
  ],
  "selection": {
    "selected_model": "Histogram gradient boosting",
    "basis": "Highest validation average precision; ROC-AUC used only as a tie-breaker.",
    "tuned_validation_metrics": {
      "accuracy": 0.9268148148148149,
      "balanced_accuracy": 0.9072380952380952,
      "precision": 0.8124223602484472,
      "recall": 0.872,
      "f1": 0.8411575562700965,
      "roc_auc": 0.9772425396825397,
      "average_precision": 0.9363166614203288,
      "brier": 0.06051997327252186,
      "threshold": 0.615,
      "confusion_matrix": {
        "tn": 4948,
        "fp": 302,
        "fn": 192,
        "tp": 1308
      }
    }
  },
  "tuning": {
    "method": "RandomizedSearchCV",
    "iterations": 16,
    "folds": 5,
    "scoring": "average_precision",
    "parameter_space": {
      "learning_rate": [
        0.03,
        0.05,
        0.08,
        0.12
      ],
      "max_iter": [
        150,
        220,
        300,
        400
      ],
      "max_leaf_nodes": [
        15,
        31,
        63
      ],
      "min_samples_leaf": [
        10,
        20,
        40,
        80
      ],
      "l2_regularization": [
        0.0,
        0.1,
        1.0,
        5.0
      ],
      "max_depth": [
        null,
        4,
        6,
        8
      ]
    },
    "best_parameters": {
      "min_samples_leaf": 40,
      "max_leaf_nodes": 31,
      "max_iter": 400,
      "max_depth": 6,
      "learning_rate": 0.12,
      "l2_regularization": 0.1
    },
    "best_cv_average_precision": 0.936885742791779,
    "top_results": [
      {
        "rank": 1,
        "mean_cv_average_precision": 0.936885742791779,
        "std_cv_average_precision": 0.004389665454979194,
        "mean_train_average_precision": 0.9713341986256555,
        "parameters": {
          "min_samples_leaf": 40,
          "max_leaf_nodes": 31,
          "max_iter": 400,
          "max_depth": 6,
          "learning_rate": 0.12,
          "l2_regularization": 0.1
        }
      },
      {
        "rank": 2,
        "mean_cv_average_precision": 0.9368552769796255,
        "std_cv_average_precision": 0.004682870778955003,
        "mean_train_average_precision": 0.9683617434835039,
        "parameters": {
          "min_samples_leaf": 40,
          "max_leaf_nodes": 31,
          "max_iter": 400,
          "max_depth": 6,
          "learning_rate": 0.05,
          "l2_regularization": 0.0
        }
      },
      {
        "rank": 3,
        "mean_cv_average_precision": 0.9367212412459507,
        "std_cv_average_precision": 0.005078199295072206,
        "mean_train_average_precision": 0.9634136030729932,
        "parameters": {
          "min_samples_leaf": 80,
          "max_leaf_nodes": 15,
          "max_iter": 400,
          "max_depth": null,
          "learning_rate": 0.12,
          "l2_regularization": 5.0
        }
      },
      {
        "rank": 4,
        "mean_cv_average_precision": 0.936720387640824,
        "std_cv_average_precision": 0.004891493290759471,
        "mean_train_average_precision": 0.9689714592809701,
        "parameters": {
          "min_samples_leaf": 40,
          "max_leaf_nodes": 63,
          "max_iter": 400,
          "max_depth": 6,
          "learning_rate": 0.08,
          "l2_regularization": 0.1
        }
      },
      {
        "rank": 5,
        "mean_cv_average_precision": 0.9353634706441412,
        "std_cv_average_precision": 0.004821758787006667,
        "mean_train_average_precision": 0.977726071504373,
        "parameters": {
          "min_samples_leaf": 80,
          "max_leaf_nodes": 63,
          "max_iter": 220,
          "max_depth": null,
          "learning_rate": 0.12,
          "l2_regularization": 1.0
        }
      },
      {
        "rank": 6,
        "mean_cv_average_precision": 0.9352447634163408,
        "std_cv_average_precision": 0.004834902330209767,
        "mean_train_average_precision": 0.9566634275431005,
        "parameters": {
          "min_samples_leaf": 80,
          "max_leaf_nodes": 15,
          "max_iter": 400,
          "max_depth": 6,
          "learning_rate": 0.05,
          "l2_regularization": 0.1
        }
      },
      {
        "rank": 7,
        "mean_cv_average_precision": 0.9345705901206621,
        "std_cv_average_precision": 0.005347968745853735,
        "mean_train_average_precision": 0.955603206984051,
        "parameters": {
          "min_samples_leaf": 40,
          "max_leaf_nodes": 63,
          "max_iter": 300,
          "max_depth": 4,
          "learning_rate": 0.08,
          "l2_regularization": 0.0
        }
      },
      {
        "rank": 8,
        "mean_cv_average_precision": 0.9344675085848999,
        "std_cv_average_precision": 0.0063279039420967055,
        "mean_train_average_precision": 0.9564036744303228,
        "parameters": {
          "min_samples_leaf": 40,
          "max_leaf_nodes": 15,
          "max_iter": 400,
          "max_depth": 4,
          "learning_rate": 0.08,
          "l2_regularization": 0.1
        }
      },
      {
        "rank": 9,
        "mean_cv_average_precision": 0.9339796395149825,
        "std_cv_average_precision": 0.00553514628113694,
        "mean_train_average_precision": 0.9541976170507617,
        "parameters": {
          "min_samples_leaf": 40,
          "max_leaf_nodes": 15,
          "max_iter": 300,
          "max_depth": 8,
          "learning_rate": 0.05,
          "l2_regularization": 0.1
        }
      },
      {
        "rank": 10,
        "mean_cv_average_precision": 0.9321222106358501,
        "std_cv_average_precision": 0.004782799953567525,
        "mean_train_average_precision": 0.9482885485127104,
        "parameters": {
          "min_samples_leaf": 20,
          "max_leaf_nodes": 63,
          "max_iter": 150,
          "max_depth": 4,
          "learning_rate": 0.12,
          "l2_regularization": 1.0
        }
      }
    ],
    "threshold_candidates": [
      {
        "threshold": 0.1,
        "precision": 0.5259076489249207,
        "recall": 0.9946666666666667,
        "f1": 0.68803320267466
      },
      {
        "threshold": 0.15000000000000002,
        "precision": 0.5491863905325444,
        "recall": 0.99,
        "f1": 0.7064700285442436
      },
      {
        "threshold": 0.2,
        "precision": 0.5737005430566331,
        "recall": 0.986,
        "f1": 0.7253555664541442
      },
      {
        "threshold": 0.25,
        "precision": 0.5967479674796748,
        "recall": 0.9786666666666667,
        "f1": 0.7414141414141414
      },
      {
        "threshold": 0.30000000000000004,
        "precision": 0.6244616709732989,
        "recall": 0.9666666666666667,
        "f1": 0.7587650444793302
      },
      {
        "threshold": 0.35,
        "precision": 0.6506133575647433,
        "recall": 0.9546666666666667,
        "f1": 0.7738449067819508
      },
      {
        "threshold": 0.4,
        "precision": 0.6783485357657225,
        "recall": 0.942,
        "f1": 0.7887245325146526
      },
      {
        "threshold": 0.45000000000000007,
        "precision": 0.7104325699745547,
        "recall": 0.9306666666666666,
        "f1": 0.8057720057720058
      },
      {
        "threshold": 0.5,
        "precision": 0.7376344086021506,
        "recall": 0.9146666666666666,
        "f1": 0.8166666666666667
      },
      {
        "threshold": 0.55,
        "precision": 0.7708213670304422,
        "recall": 0.8946666666666667,
        "f1": 0.828139463128664
      },
      {
        "threshold": 0.6,
        "precision": 0.8044144696505211,
        "recall": 0.8746666666666667,
        "f1": 0.83807090386458
      },
      {
        "threshold": 0.615,
        "precision": 0.8124223602484472,
        "recall": 0.872,
        "f1": 0.8411575562700965
      },
      {
        "threshold": 0.65,
        "precision": 0.834983498349835,
        "recall": 0.8433333333333334,
        "f1": 0.8391376451077943
      },
      {
        "threshold": 0.7,
        "precision": 0.8638928067700987,
        "recall": 0.8166666666666667,
        "f1": 0.8396161754626457
      },
      {
        "threshold": 0.75,
        "precision": 0.8894817073170732,
        "recall": 0.778,
        "f1": 0.8300142247510669
      },
      {
        "threshold": 0.8,
        "precision": 0.921161825726141,
        "recall": 0.74,
        "f1": 0.8207024029574861
      },
      {
        "threshold": 0.85,
        "precision": 0.9472743521000894,
        "recall": 0.7066666666666667,
        "f1": 0.8094692630775105
      },
      {
        "threshold": 0.9,
        "precision": 0.9703264094955489,
        "recall": 0.654,
        "f1": 0.7813620071684588
      }
    ],
    "selected_threshold": 0.615
  },
  "test": {
    "metrics": {
      "accuracy": 0.9251851851851852,
      "balanced_accuracy": 0.9,
      "precision": 0.8170809432759719,
      "recall": 0.8546666666666667,
      "f1": 0.8354512870641903,
      "roc_auc": 0.9767631746031747,
      "average_precision": 0.9346190047552273,
      "brier": 0.06043131495405385,
      "threshold": 0.615,
      "confusion_matrix": {
        "tn": 4963,
        "fp": 287,
        "fn": 218,
        "tp": 1282
      }
    },
    "roc_curve": [
      {
        "x": 0.0,
        "y": 0.0
      },
      {
        "x": 0.000381,
        "y": 0.458667
      },
      {
        "x": 0.000952,
        "y": 0.480667
      },
      {
        "x": 0.001333,
        "y": 0.538
      },
      {
        "x": 0.001905,
        "y": 0.554667
      },
      {
        "x": 0.002476,
        "y": 0.575333
      },
      {
        "x": 0.003048,
        "y": 0.586
      },
      {
        "x": 0.003619,
        "y": 0.61
      },
      {
        "x": 0.004,
        "y": 0.626
      },
      {
        "x": 0.004571,
        "y": 0.634667
      },
      {
        "x": 0.005524,
        "y": 0.639333
      },
      {
        "x": 0.006286,
        "y": 0.656667
      },
      {
        "x": 0.006667,
        "y": 0.662667
      },
      {
        "x": 0.007429,
        "y": 0.672667
      },
      {
        "x": 0.00819,
        "y": 0.678667
      },
      {
        "x": 0.008762,
        "y": 0.688667
      },
      {
        "x": 0.009333,
        "y": 0.693333
      },
      {
        "x": 0.009905,
        "y": 0.698667
      },
      {
        "x": 0.010667,
        "y": 0.71
      },
      {
        "x": 0.011429,
        "y": 0.714
      },
      {
        "x": 0.01219,
        "y": 0.718667
      },
      {
        "x": 0.012952,
        "y": 0.724667
      },
      {
        "x": 0.013714,
        "y": 0.729333
      },
      {
        "x": 0.014667,
        "y": 0.742
      },
      {
        "x": 0.015619,
        "y": 0.743333
      },
      {
        "x": 0.016762,
        "y": 0.75
      },
      {
        "x": 0.017524,
        "y": 0.753333
      },
      {
        "x": 0.018476,
        "y": 0.758667
      },
      {
        "x": 0.019238,
        "y": 0.760667
      },
      {
        "x": 0.02019,
        "y": 0.763333
      },
      {
        "x": 0.021714,
        "y": 0.767333
      },
      {
        "x": 0.022476,
        "y": 0.774667
      },
      {
        "x": 0.023619,
        "y": 0.778
      },
      {
        "x": 0.024381,
        "y": 0.782667
      },
      {
        "x": 0.025905,
        "y": 0.784667
      },
      {
        "x": 0.026476,
        "y": 0.787333
      },
      {
        "x": 0.028381,
        "y": 0.793333
      },
      {
        "x": 0.029143,
        "y": 0.799333
      },
      {
        "x": 0.030476,
        "y": 0.800667
      },
      {
        "x": 0.031048,
        "y": 0.802667
      },
      {
        "x": 0.033714,
        "y": 0.806667
      },
      {
        "x": 0.034095,
        "y": 0.808667
      },
      {
        "x": 0.035619,
        "y": 0.810667
      },
      {
        "x": 0.038286,
        "y": 0.814
      },
      {
        "x": 0.039238,
        "y": 0.816
      },
      {
        "x": 0.040952,
        "y": 0.82
      },
      {
        "x": 0.042476,
        "y": 0.824667
      },
      {
        "x": 0.044571,
        "y": 0.829333
      },
      {
        "x": 0.045905,
        "y": 0.830667
      },
      {
        "x": 0.046476,
        "y": 0.832667
      },
      {
        "x": 0.046857,
        "y": 0.836667
      },
      {
        "x": 0.048571,
        "y": 0.84
      },
      {
        "x": 0.050857,
        "y": 0.841333
      },
      {
        "x": 0.052571,
        "y": 0.845333
      },
      {
        "x": 0.053143,
        "y": 0.849333
      },
      {
        "x": 0.053714,
        "y": 0.852
      },
      {
        "x": 0.05581,
        "y": 0.856
      },
      {
        "x": 0.057905,
        "y": 0.857333
      },
      {
        "x": 0.060381,
        "y": 0.86
      },
      {
        "x": 0.060762,
        "y": 0.864
      },
      {
        "x": 0.062857,
        "y": 0.868667
      },
      {
        "x": 0.064952,
        "y": 0.870667
      },
      {
        "x": 0.066476,
        "y": 0.874667
      },
      {
        "x": 0.068,
        "y": 0.876667
      },
      {
        "x": 0.069905,
        "y": 0.878667
      },
      {
        "x": 0.071429,
        "y": 0.880667
      },
      {
        "x": 0.072,
        "y": 0.882
      },
      {
        "x": 0.074095,
        "y": 0.884
      },
      {
        "x": 0.075619,
        "y": 0.886
      },
      {
        "x": 0.076952,
        "y": 0.888667
      },
      {
        "x": 0.077714,
        "y": 0.890667
      },
      {
        "x": 0.078667,
        "y": 0.892667
      },
      {
        "x": 0.081143,
        "y": 0.895333
      },
      {
        "x": 0.082857,
        "y": 0.897333
      },
      {
        "x": 0.084,
        "y": 0.9
      },
      {
        "x": 0.08819,
        "y": 0.902667
      },
      {
        "x": 0.091238,
        "y": 0.905333
      },
      {
        "x": 0.094286,
        "y": 0.908667
      },
      {
        "x": 0.094667,
        "y": 0.911333
      },
      {
        "x": 0.098286,
        "y": 0.914
      },
      {
        "x": 0.099619,
        "y": 0.917333
      },
      {
        "x": 0.102667,
        "y": 0.919333
      },
      {
        "x": 0.105905,
        "y": 0.922
      },
      {
        "x": 0.106476,
        "y": 0.924
      },
      {
        "x": 0.108,
        "y": 0.926
      },
      {
        "x": 0.109333,
        "y": 0.928
      },
      {
        "x": 0.114095,
        "y": 0.93
      },
      {
        "x": 0.116571,
        "y": 0.932
      },
      {
        "x": 0.121524,
        "y": 0.934
      },
      {
        "x": 0.126476,
        "y": 0.936
      },
      {
        "x": 0.129714,
        "y": 0.938
      },
      {
        "x": 0.131619,
        "y": 0.94
      },
      {
        "x": 0.134857,
        "y": 0.942
      },
      {
        "x": 0.136762,
        "y": 0.944667
      },
      {
        "x": 0.13981,
        "y": 0.948
      },
      {
        "x": 0.142476,
        "y": 0.949333
      },
      {
        "x": 0.146667,
        "y": 0.952
      },
      {
        "x": 0.148571,
        "y": 0.954
      },
      {
        "x": 0.154476,
        "y": 0.956
      },
      {
        "x": 0.156,
        "y": 0.957333
      },
      {
        "x": 0.159429,
        "y": 0.959333
      },
      {
        "x": 0.166857,
        "y": 0.962
      },
      {
        "x": 0.168571,
        "y": 0.964
      },
      {
        "x": 0.171238,
        "y": 0.966
      },
      {
        "x": 0.173905,
        "y": 0.967333
      },
      {
        "x": 0.174857,
        "y": 0.969333
      },
      {
        "x": 0.175238,
        "y": 0.971333
      },
      {
        "x": 0.17981,
        "y": 0.973333
      },
      {
        "x": 0.183619,
        "y": 0.975333
      },
      {
        "x": 0.185333,
        "y": 0.976667
      },
      {
        "x": 0.191238,
        "y": 0.978667
      },
      {
        "x": 0.192762,
        "y": 0.983333
      },
      {
        "x": 0.196,
        "y": 0.985333
      },
      {
        "x": 0.200762,
        "y": 0.986667
      },
      {
        "x": 0.210286,
        "y": 0.988667
      },
      {
        "x": 0.212571,
        "y": 0.990667
      },
      {
        "x": 0.220381,
        "y": 0.992667
      },
      {
        "x": 0.233905,
        "y": 0.994667
      },
      {
        "x": 0.246476,
        "y": 0.996
      },
      {
        "x": 0.265333,
        "y": 0.998
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
        "x": 0.037333,
        "y": 1.0
      },
      {
        "x": 0.074667,
        "y": 1.0
      },
      {
        "x": 0.112,
        "y": 1.0
      },
      {
        "x": 0.15,
        "y": 1.0
      },
      {
        "x": 0.187333,
        "y": 1.0
      },
      {
        "x": 0.224667,
        "y": 1.0
      },
      {
        "x": 0.262,
        "y": 1.0
      },
      {
        "x": 0.3,
        "y": 1.0
      },
      {
        "x": 0.337333,
        "y": 1.0
      },
      {
        "x": 0.374667,
        "y": 1.0
      },
      {
        "x": 0.412,
        "y": 1.0
      },
      {
        "x": 0.449333,
        "y": 0.998519
      },
      {
        "x": 0.484,
        "y": 0.99316
      },
      {
        "x": 0.52,
        "y": 0.991105
      },
      {
        "x": 0.554667,
        "y": 0.986951
      },
      {
        "x": 0.589333,
        "y": 0.982222
      },
      {
        "x": 0.623333,
        "y": 0.978033
      },
      {
        "x": 0.654,
        "y": 0.969368
      },
      {
        "x": 0.682667,
        "y": 0.958801
      },
      {
        "x": 0.711333,
        "y": 0.948444
      },
      {
        "x": 0.736,
        "y": 0.934801
      },
      {
        "x": 0.759333,
        "y": 0.920776
      },
      {
        "x": 0.778,
        "y": 0.902552
      },
      {
        "x": 0.798,
        "y": 0.886667
      },
      {
        "x": 0.810667,
        "y": 0.864865
      },
      {
        "x": 0.824667,
        "y": 0.846101
      },
      {
        "x": 0.84,
        "y": 0.83004
      },
      {
        "x": 0.854667,
        "y": 0.813968
      },
      {
        "x": 0.867333,
        "y": 0.79767
      },
      {
        "x": 0.878667,
        "y": 0.781269
      },
      {
        "x": 0.89,
        "y": 0.765921
      },
      {
        "x": 0.9,
        "y": 0.75
      },
      {
        "x": 0.908667,
        "y": 0.734375
      },
      {
        "x": 0.919333,
        "y": 0.721234
      },
      {
        "x": 0.928667,
        "y": 0.707825
      },
      {
        "x": 0.933333,
        "y": 0.691358
      },
      {
        "x": 0.936667,
        "y": 0.675156
      },
      {
        "x": 0.944667,
        "y": 0.663079
      },
      {
        "x": 0.951333,
        "y": 0.650707
      },
      {
        "x": 0.957333,
        "y": 0.638222
      },
      {
        "x": 0.962,
        "y": 0.625759
      },
      {
        "x": 0.967333,
        "y": 0.61431
      },
      {
        "x": 0.974667,
        "y": 0.604632
      },
      {
        "x": 0.980667,
        "y": 0.594343
      },
      {
        "x": 0.986,
        "y": 0.584354
      },
      {
        "x": 0.988667,
        "y": 0.573251
      },
      {
        "x": 0.992,
        "y": 0.562997
      },
      {
        "x": 0.994,
        "y": 0.552222
      },
      {
        "x": 0.994667,
        "y": 0.541364
      },
      {
        "x": 0.996667,
        "y": 0.53165
      },
      {
        "x": 0.997333,
        "y": 0.521618
      },
      {
        "x": 0.998667,
        "y": 0.512137
      },
      {
        "x": 0.998667,
        "y": 0.502516
      },
      {
        "x": 0.999333,
        "y": 0.493579
      },
      {
        "x": 0.999333,
        "y": 0.484643
      },
      {
        "x": 0.999333,
        "y": 0.475873
      },
      {
        "x": 0.999333,
        "y": 0.467561
      },
      {
        "x": 1.0,
        "y": 0.459841
      },
      {
        "x": 1.0,
        "y": 0.45208
      },
      {
        "x": 1.0,
        "y": 0.444444
      },
      {
        "x": 1.0,
        "y": 0.43719
      },
      {
        "x": 1.0,
        "y": 0.430169
      },
      {
        "x": 1.0,
        "y": 0.42337
      },
      {
        "x": 1.0,
        "y": 0.416667
      },
      {
        "x": 1.0,
        "y": 0.410284
      },
      {
        "x": 1.0,
        "y": 0.404095
      },
      {
        "x": 1.0,
        "y": 0.398089
      },
      {
        "x": 1.0,
        "y": 0.392157
      },
      {
        "x": 1.0,
        "y": 0.386498
      },
      {
        "x": 1.0,
        "y": 0.381001
      },
      {
        "x": 1.0,
        "y": 0.375657
      },
      {
        "x": 1.0,
        "y": 0.37037
      },
      {
        "x": 1.0,
        "y": 0.365319
      },
      {
        "x": 1.0,
        "y": 0.360404
      },
      {
        "x": 1.0,
        "y": 0.355619
      },
      {
        "x": 1.0,
        "y": 0.350877
      },
      {
        "x": 1.0,
        "y": 0.34634
      },
      {
        "x": 1.0,
        "y": 0.341919
      },
      {
        "x": 1.0,
        "y": 0.33761
      },
      {
        "x": 1.0,
        "y": 0.333333
      },
      {
        "x": 1.0,
        "y": 0.329236
      },
      {
        "x": 1.0,
        "y": 0.325239
      },
      {
        "x": 1.0,
        "y": 0.321337
      },
      {
        "x": 1.0,
        "y": 0.31746
      },
      {
        "x": 1.0,
        "y": 0.313742
      },
      {
        "x": 1.0,
        "y": 0.31011
      },
      {
        "x": 1.0,
        "y": 0.30656
      },
      {
        "x": 1.0,
        "y": 0.30303
      },
      {
        "x": 1.0,
        "y": 0.29964
      },
      {
        "x": 1.0,
        "y": 0.296326
      },
      {
        "x": 1.0,
        "y": 0.293083
      },
      {
        "x": 1.0,
        "y": 0.289855
      },
      {
        "x": 1.0,
        "y": 0.286752
      },
      {
        "x": 1.0,
        "y": 0.283715
      },
      {
        "x": 1.0,
        "y": 0.280741
      },
      {
        "x": 1.0,
        "y": 0.277778
      },
      {
        "x": 1.0,
        "y": 0.274927
      },
      {
        "x": 1.0,
        "y": 0.272134
      },
      {
        "x": 1.0,
        "y": 0.269397
      },
      {
        "x": 1.0,
        "y": 0.266667
      },
      {
        "x": 1.0,
        "y": 0.264038
      },
      {
        "x": 1.0,
        "y": 0.261461
      },
      {
        "x": 1.0,
        "y": 0.258933
      },
      {
        "x": 1.0,
        "y": 0.25641
      },
      {
        "x": 1.0,
        "y": 0.253979
      },
      {
        "x": 1.0,
        "y": 0.251593
      },
      {
        "x": 1.0,
        "y": 0.249252
      },
      {
        "x": 1.0,
        "y": 0.246914
      },
      {
        "x": 1.0,
        "y": 0.244658
      },
      {
        "x": 1.0,
        "y": 0.242444
      },
      {
        "x": 1.0,
        "y": 0.240269
      },
      {
        "x": 1.0,
        "y": 0.238095
      },
      {
        "x": 1.0,
        "y": 0.235997
      },
      {
        "x": 1.0,
        "y": 0.233936
      },
      {
        "x": 1.0,
        "y": 0.231911
      },
      {
        "x": 1.0,
        "y": 0.229885
      },
      {
        "x": 1.0,
        "y": 0.227929
      },
      {
        "x": 1.0,
        "y": 0.226006
      },
      {
        "x": 1.0,
        "y": 0.224115
      },
      {
        "x": 1.0,
        "y": 0.222222
      }
    ],
    "feature_importance": [
      {
        "feature": "previous_loan_defaults_on_file",
        "importance_mean": 0.38266577560578086,
        "importance_std": 0.008496282844384376
      },
      {
        "feature": "loan_percent_income",
        "importance_mean": 0.1656610812435409,
        "importance_std": 0.007388417944391416
      },
      {
        "feature": "loan_int_rate",
        "importance_mean": 0.09594921681780672,
        "importance_std": 0.003410719040514637
      },
      {
        "feature": "person_home_ownership",
        "importance_mean": 0.08688150410180343,
        "importance_std": 0.004448541839785362
      },
      {
        "feature": "person_income",
        "importance_mean": 0.08465678510940551,
        "importance_std": 0.002171797082537719
      },
      {
        "feature": "loan_intent",
        "importance_mean": 0.03102701205504846,
        "importance_std": 0.0024060183540702247
      },
      {
        "feature": "credit_score",
        "importance_mean": 0.014184995843102247,
        "importance_std": 0.000951814329619748
      },
      {
        "feature": "loan_amnt",
        "importance_mean": 0.0037523444221386204,
        "importance_std": 0.0005521920849451533
      },
      {
        "feature": "person_age",
        "importance_mean": 0.0014233642494994453,
        "importance_std": 0.0004710203832307217
      },
      {
        "feature": "cb_person_cred_hist_length",
        "importance_mean": 0.000707905971567932,
        "importance_std": 0.00039940505046179997
      },
      {
        "feature": "person_emp_exp",
        "importance_mean": 0.0004294178644893426,
        "importance_std": 0.00028068285572454085
      },
      {
        "feature": "person_education",
        "importance_mean": -6.494551050806319e-05,
        "importance_std": 0.0001908958252599136
      }
    ],
    "subgroup_audit": {
      "gender": [
        {
          "group": "female",
          "n": 2949,
          "actual_approval_rate": 0.22210918955578163,
          "predicted_approval_rate": 0.23296032553407936,
          "precision": 0.8093158660844251,
          "recall": 0.8488549618320611
        },
        {
          "group": "male",
          "n": 3801,
          "actual_approval_rate": 0.22230991844251513,
          "predicted_approval_rate": 0.23204419889502761,
          "precision": 0.8231292517006803,
          "recall": 0.8591715976331361
        }
      ],
      "age_band": [
        {
          "group": "20 to 24",
          "n": 2401,
          "actual_approval_rate": 0.23740108288213244,
          "predicted_approval_rate": 0.256143273635985,
          "precision": 0.8276422764227642,
          "recall": 0.8929824561403509
        },
        {
          "group": "25 to 29",
          "n": 2448,
          "actual_approval_rate": 0.21446078431372548,
          "predicted_approval_rate": 0.23284313725490197,
          "precision": 0.7859649122807018,
          "recall": 0.8533333333333334
        },
        {
          "group": "30 to 39",
          "n": 1564,
          "actual_approval_rate": 0.21163682864450128,
          "predicted_approval_rate": 0.20140664961636828,
          "precision": 0.8444444444444444,
          "recall": 0.8036253776435045
        },
        {
          "group": "40+",
          "n": 337,
          "actual_approval_rate": 0.2195845697329377,
          "predicted_approval_rate": 0.20474777448071216,
          "precision": 0.855072463768116,
          "recall": 0.7972972972972973
        }
      ]
    }
  },
  "limitations": [
    "The dataset is synthetic and was expanded with SMOTENC; results do not establish real-world generalisation.",
    "The target records historical/simulated approvals, not repayment outcomes, so the model may reproduce an existing policy rather than credit risk.",
    "A random split cannot test drift across time, geography, products, or economic conditions.",
    "Subgroup metrics are descriptive checks, not a legal fairness assessment; small groups and omitted protected attributes limit conclusions.",
    "Probability calibration and cost-sensitive thresholds require business loss estimates and prospective validation before use."
  ]
};
