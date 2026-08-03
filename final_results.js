window.FINAL_RESULTS = {
  "metadata": {
    "generated_at_utc": "2026-07-31T14:12:11.178052+00:00",
    "random_state": 42,
    "python": "3.12.10",
    "scikit_learn": "1.8.0",
    "pandas": "3.0.1",
    "search_iterations_per_study": 6
  },
  "studies": [
    {
      "id": "sickle",
      "title": "Sickle-cell admission classification",
      "type": "classification",
      "target": "Admitted",
      "business_question": "Can structured information available at a sickle-cell visit rank the supplied admission label for entirely held-out patients?",
      "business_use": "Educational analysis of a supplied label only. It must not guide admission, discharge, pain treatment, or clinical prioritisation.",
      "primary_metric": "Average precision",
      "source_file": "sickle_cell_clinical_notes.csv",
      "runtime_seconds": 30.83,
      "dataset": {
        "rows": 75016,
        "columns": 10,
        "features_used": 9,
        "missing_total": 0,
        "duplicate_rows": 0,
        "missing_by_column": {
          "pain_intensity": 0,
          "hemoglobin": 0,
          "oxygen_saturation": 0,
          "visit_year": 0,
          "visit_month": 0,
          "facility_type": 0,
          "pain_type": 0,
          "location": 0,
          "gender": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "pain_intensity",
            "count": 0,
            "rate": 0.0,
            "minimum": 1.0,
            "maximum": 10.0,
            "clip_low": 1.0,
            "clip_high": 10.0
          },
          {
            "feature": "hemoglobin",
            "count": 0,
            "rate": 0.0,
            "minimum": 6.5,
            "maximum": 11.0,
            "clip_low": 6.5,
            "clip_high": 11.0
          },
          {
            "feature": "oxygen_saturation",
            "count": 0,
            "rate": 0.0,
            "minimum": 88.0,
            "maximum": 100.0,
            "clip_low": 88.0,
            "clip_high": 100.0
          },
          {
            "feature": "visit_year",
            "count": 0,
            "rate": 0.0,
            "minimum": 1976.0,
            "maximum": 2049.0,
            "clip_low": 1981.0,
            "clip_high": 2043.0
          },
          {
            "feature": "visit_month",
            "count": 0,
            "rate": 0.0,
            "minimum": 1.0,
            "maximum": 12.0,
            "clip_low": 1.0,
            "clip_high": 12.0
          }
        ],
        "categories": {
          "facility_type": [
            {
              "value": "Outpatient",
              "count": 19139
            },
            {
              "value": "Urgent Care",
              "count": 18960
            },
            {
              "value": "ER",
              "count": 18500
            },
            {
              "value": "Clinic",
              "count": 18417
            }
          ],
          "pain_type": [
            {
              "value": "Chest Pain",
              "count": 22528
            },
            {
              "value": "Back Pain",
              "count": 15135
            },
            {
              "value": "Leg Pain",
              "count": 14942
            },
            {
              "value": "Full-Body Pain",
              "count": 7514
            },
            {
              "value": "No Pain",
              "count": 7485
            },
            {
              "value": "Headache",
              "count": 7412
            }
          ],
          "location": [
            {
              "value": "Staten Island",
              "count": 15150
            },
            {
              "value": "Bronx",
              "count": 15085
            },
            {
              "value": "Manhattan",
              "count": 15036
            },
            {
              "value": "Queens",
              "count": 15004
            },
            {
              "value": "Brooklyn",
              "count": 14741
            }
          ],
          "gender": [
            {
              "value": "Male",
              "count": 38085
            },
            {
              "value": "Female",
              "count": 36931
            }
          ]
        },
        "target_summary": {
          "minimum": 0.0,
          "maximum": 1.0,
          "mean": 0.500533219579823,
          "median": 1.0,
          "std": 0.5000030483305972
        },
        "target_counts": {
          "Not admitted": 37468,
          "Admitted": 37548
        },
        "positive_label": "Admitted",
        "negative_label": "Not admitted",
        "positive_rate": 0.500533219579823
      },
      "audit_interpretation": "The dataset contains 75,016 visits across 5,000 patients with an almost perfectly balanced target. Structured severity measures have nearly identical class means, so weak performance would be an important finding rather than a tuning failure.",
      "split": {
        "train": {
          "rows": 52541,
          "rate": 0.7003972485869682
        },
        "validation": {
          "rows": 11231,
          "rate": 0.1497147275247947
        },
        "test": {
          "rows": 11244,
          "rate": 0.1498880238882372
        },
        "strategy": "Name-grouped 70/15/15 split"
      },
      "preparation": {
        "numeric_features": [
          "pain_intensity",
          "hemoglobin",
          "oxygen_saturation",
          "visit_year",
          "visit_month"
        ],
        "categorical_features": [
          "facility_type",
          "pain_type",
          "location",
          "gender"
        ],
        "excluded_features": [
          "patient_id",
          "clinical_note",
          "dob",
          "diagnosis_date"
        ],
        "feature_selection": "Patient IDs enforce grouped partitions but never enter the model. Free-text notes, dates of birth, and diagnosis dates are excluded because they contain sensitive, inconsistent, or disposition-adjacent information.",
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
          "accuracy": 0.49951028403525954,
          "balanced_accuracy": 0.5,
          "precision": 0.49951028403525954,
          "recall": 1.0,
          "f1": 0.6662312214239059,
          "roc_auc": 0.5,
          "average_precision": 0.49951028403525954,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 0,
            "fp": 5621,
            "fn": 0,
            "tp": 5610
          }
        },
        {
          "model": "Logistic regression",
          "accuracy": 0.49131867153414654,
          "balanced_accuracy": 0.491312166211441,
          "precision": 0.4907056487998556,
          "recall": 0.48467023172905527,
          "f1": 0.48766926733028426,
          "roc_auc": 0.4936109845274009,
          "average_precision": 0.4937021442055728,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 2799,
            "fp": 2822,
            "fn": 2891,
            "tp": 2719
          }
        },
        {
          "model": "Random forest",
          "accuracy": 0.49363369245837413,
          "balanced_accuracy": 0.4936331194993564,
          "precision": 0.49313603137814227,
          "recall": 0.493048128342246,
          "f1": 0.49309207594259735,
          "roc_auc": 0.49307375163356415,
          "average_precision": 0.4960703481998378,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 2778,
            "fp": 2843,
            "fn": 2844,
            "tp": 2766
          }
        },
        {
          "model": "Histogram gradient boosting",
          "accuracy": 0.49719526311103196,
          "balanced_accuracy": 0.49716434519013086,
          "precision": 0.4964835582588861,
          "recall": 0.4655971479500891,
          "f1": 0.4805445681170086,
          "roc_auc": 0.4972516165981846,
          "average_precision": 0.4987573349017132,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 2972,
            "fp": 2649,
            "fn": 2998,
            "tp": 2612
          }
        }
      ],
      "selection": {
        "model": "Histogram gradient boosting",
        "reason": "Highest validation average precision; ROC AUC used as a tie-breaker."
      },
      "tuning": {
        "method": "RandomizedSearchCV",
        "iterations": 6,
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
            300
          ],
          "max_leaf_nodes": [
            15,
            31,
            63
          ],
          "min_samples_leaf": [
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
            6
          ]
        },
        "best_parameters": {
          "min_samples_leaf": 20,
          "max_leaf_nodes": 15,
          "max_iter": 300,
          "max_depth": 6,
          "learning_rate": 0.03,
          "l2_regularization": 5.0
        },
        "best_cv_score": 0.5009164973365259,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 0.5009164973365259,
            "std_cv_score": 0.0051966853921101945,
            "train_score": 0.5340343328236337,
            "parameters": {
              "min_samples_leaf": 20,
              "max_leaf_nodes": 15,
              "max_iter": 300,
              "max_depth": 6,
              "learning_rate": 0.03,
              "l2_regularization": 5.0
            }
          },
          {
            "rank": 2,
            "mean_cv_score": 0.5007748926255265,
            "std_cv_score": 0.005779322024417269,
            "train_score": 0.5409392936225571,
            "parameters": {
              "min_samples_leaf": 20,
              "max_leaf_nodes": 63,
              "max_iter": 220,
              "max_depth": 4,
              "learning_rate": 0.05,
              "l2_regularization": 5.0
            }
          },
          {
            "rank": 3,
            "mean_cv_score": 0.5000650184472106,
            "std_cv_score": 0.004655983889976881,
            "train_score": 0.5415765544225155,
            "parameters": {
              "min_samples_leaf": 40,
              "max_leaf_nodes": 15,
              "max_iter": 300,
              "max_depth": 6,
              "learning_rate": 0.05,
              "l2_regularization": 5.0
            }
          },
          {
            "rank": 4,
            "mean_cv_score": 0.4998035209023028,
            "std_cv_score": 0.005322265885732983,
            "train_score": 0.5430990143092757,
            "parameters": {
              "min_samples_leaf": 80,
              "max_leaf_nodes": 31,
              "max_iter": 300,
              "max_depth": 4,
              "learning_rate": 0.08,
              "l2_regularization": 1.0
            }
          },
          {
            "rank": 5,
            "mean_cv_score": 0.498915340543116,
            "std_cv_score": 0.0046025573125494535,
            "train_score": 0.5816462688097465,
            "parameters": {
              "min_samples_leaf": 40,
              "max_leaf_nodes": 63,
              "max_iter": 300,
              "max_depth": 6,
              "learning_rate": 0.12,
              "l2_regularization": 5.0
            }
          },
          {
            "rank": 6,
            "mean_cv_score": 0.498395038891855,
            "std_cv_score": 0.005000346293048552,
            "train_score": 0.5598179944243799,
            "parameters": {
              "min_samples_leaf": 80,
              "max_leaf_nodes": 31,
              "max_iter": 300,
              "max_depth": 6,
              "learning_rate": 0.05,
              "l2_regularization": 5.0
            }
          }
        ],
        "selected_threshold": 0.1,
        "threshold_candidates": [
          {
            "threshold": 0.1,
            "precision": 0.49951028403525954,
            "recall": 1.0,
            "f1": 0.6662312214239059
          },
          {
            "threshold": 0.15000000000000002,
            "precision": 0.49951028403525954,
            "recall": 1.0,
            "f1": 0.6662312214239059
          },
          {
            "threshold": 0.2,
            "precision": 0.49951028403525954,
            "recall": 1.0,
            "f1": 0.6662312214239059
          },
          {
            "threshold": 0.25,
            "precision": 0.49951028403525954,
            "recall": 1.0,
            "f1": 0.6662312214239059
          },
          {
            "threshold": 0.30000000000000004,
            "precision": 0.49951028403525954,
            "recall": 1.0,
            "f1": 0.6662312214239059
          },
          {
            "threshold": 0.35,
            "precision": 0.49951028403525954,
            "recall": 1.0,
            "f1": 0.6662312214239059
          },
          {
            "threshold": 0.4,
            "precision": 0.49951028403525954,
            "recall": 1.0,
            "f1": 0.6662312214239059
          },
          {
            "threshold": 0.45000000000000007,
            "precision": 0.49951028403525954,
            "recall": 1.0,
            "f1": 0.6662312214239059
          },
          {
            "threshold": 0.5,
            "precision": 0.4919431279620853,
            "recall": 0.3700534759358289,
            "f1": 0.4223804679552391
          },
          {
            "threshold": 0.55,
            "precision": 0.0,
            "recall": 0.0,
            "f1": 0.0
          },
          {
            "threshold": 0.6,
            "precision": 0.0,
            "recall": 0.0,
            "f1": 0.0
          },
          {
            "threshold": 0.65,
            "precision": 0.0,
            "recall": 0.0,
            "f1": 0.0
          },
          {
            "threshold": 0.7,
            "precision": 0.0,
            "recall": 0.0,
            "f1": 0.0
          },
          {
            "threshold": 0.75,
            "precision": 0.0,
            "recall": 0.0,
            "f1": 0.0
          },
          {
            "threshold": 0.8,
            "precision": 0.0,
            "recall": 0.0,
            "f1": 0.0
          },
          {
            "threshold": 0.85,
            "precision": 0.0,
            "recall": 0.0,
            "f1": 0.0
          },
          {
            "threshold": 0.9,
            "precision": 0.0,
            "recall": 0.0,
            "f1": 0.0
          }
        ]
      },
      "test": {
        "metrics": {
          "accuracy": 0.5029348986125933,
          "balanced_accuracy": 0.5,
          "precision": 0.5029348986125933,
          "recall": 1.0,
          "f1": 0.6692703710278715,
          "roc_auc": 0.491684246512388,
          "average_precision": 0.5023632005694336,
          "threshold": 0.1,
          "confusion_matrix": {
            "tn": 0,
            "fp": 5589,
            "fn": 0,
            "tp": 5655
          }
        },
        "roc_curve": [
          {
            "x": 0.0,
            "y": 0.0
          },
          {
            "x": 0.0026838432635534087,
            "y": 0.005481874447391689
          },
          {
            "x": 0.006799069601001968,
            "y": 0.009195402298850575
          },
          {
            "x": 0.012703524780819467,
            "y": 0.014677276746242264
          },
          {
            "x": 0.016281982465557343,
            "y": 0.019451812555260833
          },
          {
            "x": 0.019860440150295224,
            "y": 0.0242263483642794
          },
          {
            "x": 0.023617820719269995,
            "y": 0.028293545534924844
          },
          {
            "x": 0.02755412417248166,
            "y": 0.03218390804597701
          },
          {
            "x": 0.033637502236536054,
            "y": 0.03731211317418214
          },
          {
            "x": 0.040078726069064236,
            "y": 0.04155614500442087
          },
          {
            "x": 0.04741456432277688,
            "y": 0.05004420866489832
          },
          {
            "x": 0.05296117373412059,
            "y": 0.05623342175066313
          },
          {
            "x": 0.05618178565038468,
            "y": 0.06153846153846154
          },
          {
            "x": 0.06315977813562354,
            "y": 0.0680813439434129
          },
          {
            "x": 0.0704956163893362,
            "y": 0.0735632183908046
          },
          {
            "x": 0.08140991232778673,
            "y": 0.08222811671087533
          },
          {
            "x": 0.08588298443370908,
            "y": 0.08647214854111406
          },
          {
            "x": 0.09518697441402756,
            "y": 0.09637488947833775
          },
          {
            "x": 0.10109142959384505,
            "y": 0.1004420866489832
          },
          {
            "x": 0.10878511361603149,
            "y": 0.1068081343943413
          },
          {
            "x": 0.12345679012345678,
            "y": 0.12219274977895668
          },
          {
            "x": 0.1282877079978529,
            "y": 0.12891246684350133
          },
          {
            "x": 0.1350867775988549,
            "y": 0.13492484526967286
          },
          {
            "x": 0.14439076757917338,
            "y": 0.14412024756852343
          },
          {
            "x": 0.15136876006441224,
            "y": 0.15366931918656057
          },
          {
            "x": 0.16299874753981033,
            "y": 0.16534040671971706
          },
          {
            "x": 0.18590087672213276,
            "y": 0.18320070733863839
          },
          {
            "x": 0.20039363034532118,
            "y": 0.19876215738284703
          },
          {
            "x": 0.20468777956700662,
            "y": 0.2054818744473917
          },
          {
            "x": 0.21184469493648236,
            "y": 0.21220159151193635
          },
          {
            "x": 0.23868312757201646,
            "y": 0.2358974358974359
          },
          {
            "x": 0.24512435140454464,
            "y": 0.24261715296198055
          },
          {
            "x": 0.2533548040794418,
            "y": 0.25251989389920426
          },
          {
            "x": 0.2902129182322419,
            "y": 0.28558797524314766
          },
          {
            "x": 0.2970119878332439,
            "y": 0.2917771883289125
          },
          {
            "x": 0.30309536589729824,
            "y": 0.29743589743589743
          },
          {
            "x": 0.30864197530864196,
            "y": 0.3041556145004421
          },
          {
            "x": 0.3277867239219896,
            "y": 0.3193633952254642
          },
          {
            "x": 0.33279656468062263,
            "y": 0.32625994694960214
          },
          {
            "x": 0.3401324029343353,
            "y": 0.3358090185676393
          },
          {
            "x": 0.3535516192521023,
            "y": 0.3480106100795756
          },
          {
            "x": 0.36482376095902663,
            "y": 0.36038903625110524
          },
          {
            "x": 0.3771694399713723,
            "y": 0.3736516357206012
          },
          {
            "x": 0.3837895866881374,
            "y": 0.37948717948717947
          },
          {
            "x": 0.3961352657004831,
            "y": 0.39345711759504864
          },
          {
            "x": 0.4104490964394346,
            "y": 0.4053050397877984
          },
          {
            "x": 0.416532474503489,
            "y": 0.4093722369584439
          },
          {
            "x": 0.4303095365897298,
            "y": 0.4194518125552608
          },
          {
            "x": 0.4360350688853104,
            "y": 0.424580017683466
          },
          {
            "x": 0.4521381284666309,
            "y": 0.43784261715296197
          },
          {
            "x": 0.4693147253533727,
            "y": 0.45340406719717063
          },
          {
            "x": 0.48828055108248347,
            "y": 0.474447391688771
          },
          {
            "x": 0.49400608337806406,
            "y": 0.4804597701149425
          },
          {
            "x": 0.5167292896761496,
            "y": 0.503448275862069
          },
          {
            "x": 0.5263911254249418,
            "y": 0.5122900088417329
          },
          {
            "x": 0.5449991053855788,
            "y": 0.5285587975243148
          },
          {
            "x": 0.5517981749865808,
            "y": 0.5363395225464191
          },
          {
            "x": 0.5600286276614779,
            "y": 0.54447391688771
          },
          {
            "x": 0.5806047593487207,
            "y": 0.5626878868258178
          },
          {
            "x": 0.5854356772231168,
            "y": 0.5683465959328028
          },
          {
            "x": 0.5972445875827518,
            "y": 0.5794871794871795
          },
          {
            "x": 0.613884415816783,
            "y": 0.5945181255526083
          },
          {
            "x": 0.6367865449991054,
            "y": 0.6178603006189213
          },
          {
            "x": 0.6584362139917695,
            "y": 0.637842617152962
          },
          {
            "x": 0.6623725174449813,
            "y": 0.6417329796640141
          },
          {
            "x": 0.6734657362676686,
            "y": 0.6574712643678161
          },
          {
            "x": 0.6911791018071212,
            "y": 0.6726790450928382
          },
          {
            "x": 0.7062086240830202,
            "y": 0.6910698496905393
          },
          {
            "x": 0.7146179996421542,
            "y": 0.6983200707338638
          },
          {
            "x": 0.7582751833959563,
            "y": 0.7451812555260832
          },
          {
            "x": 0.7752728573984613,
            "y": 0.7600353669319186
          },
          {
            "x": 0.7822508498837001,
            "y": 0.7664014146772767
          },
          {
            "x": 0.7924494542852031,
            "y": 0.7761273209549071
          },
          {
            "x": 0.8067632850241546,
            "y": 0.7952254641909814
          },
          {
            "x": 0.8158883521202361,
            "y": 0.8040671971706455
          },
          {
            "x": 0.8239398819108964,
            "y": 0.8102564102564103
          },
          {
            "x": 0.8409375559134014,
            "y": 0.8309460654288241
          },
          {
            "x": 0.8563249239577742,
            "y": 0.8438549955791335
          },
          {
            "x": 0.8622293791375917,
            "y": 0.8512820512820513
          },
          {
            "x": 0.8713544462336733,
            "y": 0.8580017683465959
          },
          {
            "x": 0.8981928788692074,
            "y": 0.8870026525198939
          },
          {
            "x": 0.9051708713544462,
            "y": 0.8953138815207781
          },
          {
            "x": 0.9135802469135802,
            "y": 0.9029177718832891
          },
          {
            "x": 0.919126856324924,
            "y": 0.9069849690539346
          },
          {
            "x": 0.9252102343889783,
            "y": 0.9135278514588859
          },
          {
            "x": 0.9284308463052424,
            "y": 0.9193633952254642
          },
          {
            "x": 0.9382716049382716,
            "y": 0.9306808134394341
          },
          {
            "x": 0.9411343710860619,
            "y": 0.9363395225464191
          },
          {
            "x": 0.9454285203077474,
            "y": 0.943236074270557
          },
          {
            "x": 0.9499015924136697,
            "y": 0.9483642793987621
          },
          {
            "x": 0.9541957416353551,
            "y": 0.9536693191865606
          },
          {
            "x": 0.9597423510466989,
            "y": 0.9593280282935456
          },
          {
            "x": 0.9654678833422795,
            "y": 0.9642793987621574
          },
          {
            "x": 0.9690463410270174,
            "y": 0.9695844385499558
          },
          {
            "x": 0.9731615673644659,
            "y": 0.9729442970822281
          },
          {
            "x": 0.9788870996600465,
            "y": 0.978603006189213
          },
          {
            "x": 0.9838969404186796,
            "y": 0.9824933687002653
          },
          {
            "x": 0.9899803184827339,
            "y": 0.9899204244031831
          },
          {
            "x": 0.9964215423152621,
            "y": 0.9939876215738285
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
            "x": 0.003713527851458886,
            "y": 0.65625
          },
          {
            "x": 0.007250221043324492,
            "y": 0.5857142857142857
          },
          {
            "x": 0.010610079575596816,
            "y": 0.5357142857142857
          },
          {
            "x": 0.015561450044208665,
            "y": 0.546583850931677
          },
          {
            "x": 0.01892130857648099,
            "y": 0.5487179487179488
          },
          {
            "x": 0.021927497789566756,
            "y": 0.5367965367965368
          },
          {
            "x": 0.026702033598585324,
            "y": 0.5490909090909091
          },
          {
            "x": 0.030592396109637487,
            "y": 0.540625
          },
          {
            "x": 0.036251105216622455,
            "y": 0.5324675324675324
          },
          {
            "x": 0.040318302387267906,
            "y": 0.5205479452054794
          },
          {
            "x": 0.04509283819628647,
            "y": 0.5141129032258065
          },
          {
            "x": 0.05534924845269673,
            "y": 0.5173553719008265
          },
          {
            "x": 0.05994694960212202,
            "y": 0.522342064714946
          },
          {
            "x": 0.06737400530503979,
            "y": 0.5269709543568465
          },
          {
            "x": 0.07144120247568524,
            "y": 0.5172855313700384
          },
          {
            "x": 0.078868258178603,
            "y": 0.5102974828375286
          },
          {
            "x": 0.08381962864721486,
            "y": 0.5053304904051172
          },
          {
            "x": 0.08859416445623342,
            "y": 0.506572295247725
          },
          {
            "x": 0.0986737400530504,
            "y": 0.5040650406504065
          },
          {
            "x": 0.10344827586206896,
            "y": 0.5038759689922481
          },
          {
            "x": 0.11352785145888594,
            "y": 0.4984472049689441
          },
          {
            "x": 0.1237842617152962,
            "y": 0.5007153075822603
          },
          {
            "x": 0.13050397877984085,
            "y": 0.502724795640327
          },
          {
            "x": 0.13669319186560566,
            "y": 0.5006476683937824
          },
          {
            "x": 0.14765694076038904,
            "y": 0.5030120481927711
          },
          {
            "x": 0.15915119363395225,
            "y": 0.5047672462142456
          },
          {
            "x": 0.1775419982316534,
            "y": 0.5025025025025025
          },
          {
            "x": 0.1982316534040672,
            "y": 0.5006699419383653
          },
          {
            "x": 0.20565870910698497,
            "y": 0.5041179020372778
          },
          {
            "x": 0.22015915119363394,
            "y": 0.5032336297493937
          },
          {
            "x": 0.23908045977011494,
            "y": 0.5003700962250185
          },
          {
            "x": 0.24456233421750664,
            "y": 0.49981929887965304
          },
          {
            "x": 0.2549955791335102,
            "y": 0.5017397355601948
          },
          {
            "x": 0.28717948717948716,
            "y": 0.4989247311827957
          },
          {
            "x": 0.29442970822281167,
            "y": 0.49850299401197606
          },
          {
            "x": 0.3004420866489832,
            "y": 0.497510980966325
          },
          {
            "x": 0.3092838196286472,
            "y": 0.4967338824197671
          },
          {
            "x": 0.32360742705570295,
            "y": 0.49741777656972
          },
          {
            "x": 0.33121131741821397,
            "y": 0.49853606601011446
          },
          {
            "x": 0.3389920424403183,
            "y": 0.5001304461257501
          },
          {
            "x": 0.35915119363395226,
            "y": 0.4996309963099631
          },
          {
            "x": 0.3649867374005305,
            "y": 0.5006063545961679
          },
          {
            "x": 0.3748894783377542,
            "y": 0.49952874646559847
          },
          {
            "x": 0.3837312113174182,
            "y": 0.5009233610341643
          },
          {
            "x": 0.4,
            "y": 0.5004424778761062
          },
          {
            "x": 0.40778072502210433,
            "y": 0.49956672443674177
          },
          {
            "x": 0.41662245800176834,
            "y": 0.4963134611333474
          },
          {
            "x": 0.42139699381078694,
            "y": 0.4970796829370046
          },
          {
            "x": 0.43642793987621575,
            "y": 0.49478748997594224
          },
          {
            "x": 0.4519893899204244,
            "y": 0.4942951073293367
          },
          {
            "x": 0.4740937223695844,
            "y": 0.4958387275753653
          },
          {
            "x": 0.4802829354553492,
            "y": 0.4959824689554419
          },
          {
            "x": 0.5043324491600354,
            "y": 0.49660456207557024
          },
          {
            "x": 0.5119363395225465,
            "y": 0.49631407509000514
          },
          {
            "x": 0.5285587975243148,
            "y": 0.4952775476387738
          },
          {
            "x": 0.5370468611847922,
            "y": 0.4961607580460709
          },
          {
            "x": 0.5519009725906278,
            "y": 0.4952396064741352
          },
          {
            "x": 0.5642793987621574,
            "y": 0.4954199658438131
          },
          {
            "x": 0.5752431476569407,
            "y": 0.4952801461632156
          },
          {
            "x": 0.5826702033598585,
            "y": 0.4952652938523974
          },
          {
            "x": 0.598762157382847,
            "y": 0.4954638571846649
          },
          {
            "x": 0.627763041556145,
            "y": 0.49525669642857145
          },
          {
            "x": 0.6389036251105217,
            "y": 0.49499931497465405
          },
          {
            "x": 0.6528735632183909,
            "y": 0.4961031980650363
          },
          {
            "x": 0.659946949602122,
            "y": 0.4968051118210863
          },
          {
            "x": 0.6774535809018568,
            "y": 0.49688715953307394
          },
          {
            "x": 0.6947833775419983,
            "y": 0.49721589471019995
          },
          {
            "x": 0.7032714412024756,
            "y": 0.49743589743589745
          },
          {
            "x": 0.7596816976127321,
            "y": 0.49791376912378305
          },
          {
            "x": 0.7662245800176835,
            "y": 0.4977599080987938
          },
          {
            "x": 0.7761273209549071,
            "y": 0.4977319119981855
          },
          {
            "x": 0.7973474801061008,
            "y": 0.49905921416712784
          },
          {
            "x": 0.8040671971706455,
            "y": 0.49928626331393433
          },
          {
            "x": 0.8111405835543767,
            "y": 0.498912334130955
          },
          {
            "x": 0.8309460654288241,
            "y": 0.49994680285136717
          },
          {
            "x": 0.8438549955791335,
            "y": 0.49937212222687316
          },
          {
            "x": 0.8512820512820513,
            "y": 0.4997404754489775
          },
          {
            "x": 0.8583554376657825,
            "y": 0.49897203947368424
          },
          {
            "x": 0.8882404951370468,
            "y": 0.49965184522033224
          },
          {
            "x": 0.8961980548187445,
            "y": 0.5004443566702873
          },
          {
            "x": 0.9029177718832891,
            "y": 0.5
          },
          {
            "x": 0.9073386383731211,
            "y": 0.4996591683708248
          },
          {
            "x": 0.9117595048629531,
            "y": 0.49941882991088726
          },
          {
            "x": 0.9175950486295313,
            "y": 0.5000481834827021
          },
          {
            "x": 0.928028293545535,
            "y": 0.5010023866348449
          },
          {
            "x": 0.9342175066312998,
            "y": 0.5012809564474808
          },
          {
            "x": 0.9418213969938107,
            "y": 0.502168583820479
          },
          {
            "x": 0.9474801061007958,
            "y": 0.5023909985935302
          },
          {
            "x": 0.9527851458885942,
            "y": 0.5027995520716685
          },
          {
            "x": 0.9580901856763926,
            "y": 0.5031107809453059
          },
          {
            "x": 0.9626878868258179,
            "y": 0.5026313359800573
          },
          {
            "x": 0.9676392572944297,
            "y": 0.502987406930784
          },
          {
            "x": 0.9715296198054819,
            "y": 0.5029293299157818
          },
          {
            "x": 0.9759504862953139,
            "y": 0.5027785369408764
          },
          {
            "x": 0.9805481874447391,
            "y": 0.5028566246485898
          },
          {
            "x": 0.9856763925729443,
            "y": 0.5026149684400361
          },
          {
            "x": 0.9916887709991158,
            "y": 0.5027341999103541
          },
          {
            "x": 0.9961096374889479,
            "y": 0.5024081341419907
          },
          {
            "x": 1.0,
            "y": 0.5029348986125933
          }
        ],
        "feature_importance": [
          {
            "feature": "oxygen_saturation",
            "importance_mean": 0.002539620142015142,
            "importance_std": 0.0006163893054543201
          },
          {
            "feature": "visit_year",
            "importance_mean": 0.0008611871117077396,
            "importance_std": 0.0019193248122205463
          },
          {
            "feature": "gender",
            "importance_mean": 0.00027399512375936297,
            "importance_std": 0.0003692785762129754
          },
          {
            "feature": "location",
            "importance_mean": -9.40203568723097e-05,
            "importance_std": 0.001633928090550975
          },
          {
            "feature": "pain_intensity",
            "importance_mean": -9.871505497185962e-05,
            "importance_std": 0.002498569827862221
          },
          {
            "feature": "visit_month",
            "importance_mean": -0.00010048224656739047,
            "importance_std": 0.0010989420934602004
          },
          {
            "feature": "pain_type",
            "importance_mean": -0.0002198936140334895,
            "importance_std": 0.00204134882239735
          },
          {
            "feature": "facility_type",
            "importance_mean": -0.0020389926218706833,
            "importance_std": 0.0021049253615436315
          },
          {
            "feature": "hemoglobin",
            "importance_mean": -0.00319511661106911,
            "importance_std": 0.001372233472909894
          }
        ]
      },
      "interpretation": "Average precision is 0.502 against a 0.501 prevalence baseline; this measures ranking on the held-out records, not causality.",
      "limitations": [
        "The data appears synthetic and includes internally inconsistent age information in notes versus dates of birth.",
        "Admission labels are not accompanied by policy, outcomes, clinician rationale, or site-specific practice context.",
        "The note text contains disposition-like language and is intentionally excluded.",
        "No clinical deployment is appropriate without representative real data, external validation, calibration, safety review, and clinician governance."
      ]
    },
    {
      "id": "blood",
      "title": "Blood-cell anomaly classification",
      "type": "classification",
      "target": "Anomaly",
      "business_question": "Can morphology, colour, laboratory context, and acquisition metadata distinguish anomalous from normal blood-cell records?",
      "business_use": "Educational image-feature triage experiment only; never diagnose disease or replace microscopy review by qualified laboratory professionals.",
      "primary_metric": "Average precision",
      "source_file": "blood_cell_anomaly_detection.csv",
      "runtime_seconds": 16.4,
      "dataset": {
        "rows": 5880,
        "columns": 30,
        "features_used": 29,
        "missing_total": 0,
        "duplicate_rows": 0,
        "missing_by_column": {
          "cell_diameter_um": 0,
          "nucleus_area_pct": 0,
          "chromatin_density": 0,
          "cytoplasm_ratio": 0,
          "circularity": 0,
          "eccentricity": 0,
          "granularity_score": 0,
          "lobularity_score": 0,
          "membrane_smoothness": 0,
          "cell_area_px": 0,
          "perimeter_px": 0,
          "mean_r": 0,
          "mean_g": 0,
          "mean_b": 0,
          "stain_intensity": 0,
          "wbc_count_per_ul": 0,
          "rbc_count_millions_per_ul": 0,
          "hemoglobin_g_dl": 0,
          "hematocrit_pct": 0,
          "platelet_count_per_ul": 0,
          "mcv_fl": 0,
          "mchc_g_dl": 0,
          "patient_age_group": 0,
          "patient_sex": 0,
          "dataset_source": 0,
          "staining_protocol": 0,
          "microscope_model": 0,
          "magnification_x": 0,
          "image_resolution_px": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "cell_diameter_um",
            "count": 1,
            "rate": 0.00017006802721088434,
            "minimum": 1.0,
            "maximum": 21.18,
            "clip_low": 2.11,
            "clip_high": 17.867
          },
          {
            "feature": "nucleus_area_pct",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 99.0,
            "clip_low": 0.0,
            "clip_high": 92.5
          },
          {
            "feature": "chromatin_density",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 1.0,
            "clip_low": 0.0,
            "clip_high": 0.9078499999999999
          },
          {
            "feature": "cytoplasm_ratio",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.05,
            "maximum": 1.0,
            "clip_low": 0.078,
            "clip_high": 1.0
          },
          {
            "feature": "circularity",
            "count": 394,
            "rate": 0.06700680272108843,
            "minimum": 0.1,
            "maximum": 1.0,
            "clip_low": 0.2543,
            "clip_high": 0.988
          },
          {
            "feature": "eccentricity",
            "count": 304,
            "rate": 0.05170068027210884,
            "minimum": 0.0,
            "maximum": 0.99,
            "clip_low": 0.06715,
            "clip_high": 0.939
          },
          {
            "feature": "granularity_score",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 6.0,
            "clip_low": 0.14,
            "clip_high": 5.32
          },
          {
            "feature": "lobularity_score",
            "count": 271,
            "rate": 0.04608843537414966,
            "minimum": 1.0,
            "maximum": 7.2,
            "clip_low": 1.0,
            "clip_high": 6.0
          },
          {
            "feature": "membrane_smoothness",
            "count": 100,
            "rate": 0.017006802721088437,
            "minimum": 0.29,
            "maximum": 1.0,
            "clip_low": 0.54145,
            "clip_high": 0.997
          },
          {
            "feature": "cell_area_px",
            "count": 4,
            "rate": 0.0006802721088435374,
            "minimum": 10.0,
            "maximum": 901.0,
            "clip_low": 18.0,
            "clip_high": 731.8499999999999
          },
          {
            "feature": "perimeter_px",
            "count": 7,
            "rate": 0.0011904761904761906,
            "minimum": 8.0,
            "maximum": 128.0,
            "clip_low": 14.0,
            "clip_high": 111.0
          },
          {
            "feature": "mean_r",
            "count": 32,
            "rate": 0.005442176870748299,
            "minimum": 123.0,
            "maximum": 255.0,
            "clip_low": 165.0,
            "clip_high": 252.0
          },
          {
            "feature": "mean_g",
            "count": 8,
            "rate": 0.0013605442176870747,
            "minimum": 89.0,
            "maximum": 218.0,
            "clip_low": 107.0,
            "clip_high": 188.0
          },
          {
            "feature": "mean_b",
            "count": 0,
            "rate": 0.0,
            "minimum": 94.0,
            "maximum": 244.0,
            "clip_low": 109.0,
            "clip_high": 224.0
          },
          {
            "feature": "stain_intensity",
            "count": 3,
            "rate": 0.0005102040816326531,
            "minimum": 0.307,
            "maximum": 1.0,
            "clip_low": 0.40430000000000005,
            "clip_high": 0.8578499999999999
          },
          {
            "feature": "wbc_count_per_ul",
            "count": 23,
            "rate": 0.0039115646258503405,
            "minimum": 1000.0,
            "maximum": 16855.0,
            "clip_low": 1247.85,
            "clip_high": 12506.85
          },
          {
            "feature": "rbc_count_millions_per_ul",
            "count": 43,
            "rate": 0.007312925170068027,
            "minimum": 2.11,
            "maximum": 7.0,
            "clip_low": 2.8815,
            "clip_high": 6.68
          },
          {
            "feature": "hemoglobin_g_dl",
            "count": 39,
            "rate": 0.0066326530612244895,
            "minimum": 5.4,
            "maximum": 20.0,
            "clip_low": 8.8,
            "clip_high": 18.3
          },
          {
            "feature": "hematocrit_pct",
            "count": 34,
            "rate": 0.005782312925170068,
            "minimum": 20.3,
            "maximum": 60.0,
            "clip_low": 28.415,
            "clip_high": 53.28499999999999
          },
          {
            "feature": "platelet_count_per_ul",
            "count": 25,
            "rate": 0.004251700680272109,
            "minimum": 20000.0,
            "maximum": 543084.0,
            "clip_low": 68115.55,
            "clip_high": 433981.69999999995
          },
          {
            "feature": "mcv_fl",
            "count": 32,
            "rate": 0.005442176870748299,
            "minimum": 60.0,
            "maximum": 120.0,
            "clip_low": 65.1,
            "clip_high": 111.58499999999998
          },
          {
            "feature": "mchc_g_dl",
            "count": 35,
            "rate": 0.005952380952380952,
            "minimum": 28.0,
            "maximum": 38.0,
            "clip_low": 30.1,
            "clip_high": 36.9
          }
        ],
        "categories": {
          "patient_age_group": [
            {
              "value": "Adult",
              "count": 3276
            },
            {
              "value": "Elderly",
              "count": 1455
            },
            {
              "value": "Pediatric",
              "count": 1149
            }
          ],
          "patient_sex": [
            {
              "value": "F",
              "count": 2966
            },
            {
              "value": "M",
              "count": 2914
            }
          ],
          "dataset_source": [
            {
              "value": "PBC_Dataset",
              "count": 2351
            },
            {
              "value": "Raabin_WBC",
              "count": 2089
            },
            {
              "value": "CytoData",
              "count": 1440
            }
          ],
          "staining_protocol": [
            {
              "value": "Giemsa",
              "count": 2627
            },
            {
              "value": "Wright",
              "count": 2086
            },
            {
              "value": "May_Grunwald_Giemsa",
              "count": 1167
            }
          ],
          "microscope_model": [
            {
              "value": "Olympus_BX51",
              "count": 2398
            },
            {
              "value": "Leica_DM2000",
              "count": 2059
            },
            {
              "value": "Zeiss_Axio",
              "count": 1423
            }
          ],
          "magnification_x": [
            {
              "value": "100",
              "count": 2947
            },
            {
              "value": "60",
              "count": 1745
            },
            {
              "value": "40",
              "count": 1188
            }
          ],
          "image_resolution_px": [
            {
              "value": "224",
              "count": 1506
            },
            {
              "value": "256",
              "count": 1473
            },
            {
              "value": "360",
              "count": 1465
            },
            {
              "value": "512",
              "count": 1436
            }
          ]
        },
        "target_summary": {
          "minimum": 0.0,
          "maximum": 1.0,
          "mean": 0.3197278911564626,
          "median": 0.0,
          "std": 0.46641072371399867
        },
        "target_counts": {
          "Normal": 4000,
          "Anomaly": 1880
        },
        "positive_label": "Anomaly",
        "negative_label": "Normal",
        "positive_rate": 0.3197278911564626
      },
      "audit_interpretation": "The existing anomaly score almost perfectly separates the label and is therefore excluded. The retained acquisition fields are audited because staining and microscope differences may create shortcuts unrelated to biology.",
      "split": {
        "train": {
          "rows": 4116,
          "rate": 0.7
        },
        "validation": {
          "rows": 882,
          "rate": 0.15
        },
        "test": {
          "rows": 882,
          "rate": 0.15
        },
        "strategy": "Stratified random 70/15/15 split"
      },
      "preparation": {
        "numeric_features": [
          "cell_diameter_um",
          "nucleus_area_pct",
          "chromatin_density",
          "cytoplasm_ratio",
          "circularity",
          "eccentricity",
          "granularity_score",
          "lobularity_score",
          "membrane_smoothness",
          "cell_area_px",
          "perimeter_px",
          "mean_r",
          "mean_g",
          "mean_b",
          "stain_intensity",
          "wbc_count_per_ul",
          "rbc_count_millions_per_ul",
          "hemoglobin_g_dl",
          "hematocrit_pct",
          "platelet_count_per_ul",
          "mcv_fl",
          "mchc_g_dl"
        ],
        "categorical_features": [
          "patient_age_group",
          "patient_sex",
          "dataset_source",
          "staining_protocol",
          "microscope_model",
          "magnification_x",
          "image_resolution_px"
        ],
        "excluded_features": [
          "cell_id",
          "cell_type",
          "disease_category",
          "cytodiffusion_anomaly_score",
          "cytodiffusion_classification_confidence",
          "labeller_confidence_score"
        ],
        "feature_selection": "Cell type, disease category, existing detector score/confidence, and labeller confidence are excluded as label or post-labelling leakage. The model uses measured morphology, colour, laboratory, and acquisition fields only.",
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
          "accuracy": 0.6802721088435374,
          "balanced_accuracy": 0.5,
          "precision": 0.0,
          "recall": 0.0,
          "f1": 0.0,
          "roc_auc": 0.5,
          "average_precision": 0.3197278911564626,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 600,
            "fp": 0,
            "fn": 282,
            "tp": 0
          }
        },
        {
          "model": "Logistic regression",
          "accuracy": 0.7857142857142857,
          "balanced_accuracy": 0.7748404255319149,
          "precision": 0.6422018348623854,
          "recall": 0.7446808510638298,
          "f1": 0.6896551724137931,
          "roc_auc": 0.8643144208037825,
          "average_precision": 0.8104849756509436,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 483,
            "fp": 117,
            "fn": 72,
            "tp": 210
          }
        },
        {
          "model": "Random forest",
          "accuracy": 0.9739229024943311,
          "balanced_accuracy": 0.9601595744680851,
          "precision": 0.9961685823754789,
          "recall": 0.9219858156028369,
          "f1": 0.9576427255985267,
          "roc_auc": 0.9964657210401892,
          "average_precision": 0.9944171748161975,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 599,
            "fp": 1,
            "fn": 22,
            "tp": 260
          }
        },
        {
          "model": "Histogram gradient boosting",
          "accuracy": 0.9773242630385488,
          "balanced_accuracy": 0.9682978723404255,
          "precision": 0.9851851851851852,
          "recall": 0.9432624113475178,
          "f1": 0.9637681159420289,
          "roc_auc": 0.9978132387706856,
          "average_precision": 0.996035177192214,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 596,
            "fp": 4,
            "fn": 16,
            "tp": 266
          }
        }
      ],
      "selection": {
        "model": "Histogram gradient boosting",
        "reason": "Highest validation average precision; ROC AUC used as a tie-breaker."
      },
      "tuning": {
        "method": "RandomizedSearchCV",
        "iterations": 6,
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
            300
          ],
          "max_leaf_nodes": [
            15,
            31,
            63
          ],
          "min_samples_leaf": [
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
            6
          ]
        },
        "best_parameters": {
          "min_samples_leaf": 40,
          "max_leaf_nodes": 63,
          "max_iter": 300,
          "max_depth": 6,
          "learning_rate": 0.12,
          "l2_regularization": 5.0
        },
        "best_cv_score": 0.9873487445174657,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 0.9873487445174657,
            "std_cv_score": 0.0017657856090405697,
            "train_score": 1.0,
            "parameters": {
              "min_samples_leaf": 40,
              "max_leaf_nodes": 63,
              "max_iter": 300,
              "max_depth": 6,
              "learning_rate": 0.12,
              "l2_regularization": 5.0
            }
          },
          {
            "rank": 2,
            "mean_cv_score": 0.986061885417994,
            "std_cv_score": 0.0015730725799744734,
            "train_score": 0.9999029476504624,
            "parameters": {
              "min_samples_leaf": 40,
              "max_leaf_nodes": 15,
              "max_iter": 300,
              "max_depth": 6,
              "learning_rate": 0.05,
              "l2_regularization": 5.0
            }
          },
          {
            "rank": 3,
            "mean_cv_score": 0.9855958354046601,
            "std_cv_score": 0.0024398737230143246,
            "train_score": 0.9998734897761044,
            "parameters": {
              "min_samples_leaf": 80,
              "max_leaf_nodes": 31,
              "max_iter": 300,
              "max_depth": 6,
              "learning_rate": 0.05,
              "l2_regularization": 5.0
            }
          },
          {
            "rank": 4,
            "mean_cv_score": 0.9852215991887998,
            "std_cv_score": 0.0023256845335608268,
            "train_score": 0.9991475290601761,
            "parameters": {
              "min_samples_leaf": 20,
              "max_leaf_nodes": 15,
              "max_iter": 300,
              "max_depth": 6,
              "learning_rate": 0.03,
              "l2_regularization": 5.0
            }
          },
          {
            "rank": 5,
            "mean_cv_score": 0.9843348520660994,
            "std_cv_score": 0.0032288458788305874,
            "train_score": 0.9999212960975589,
            "parameters": {
              "min_samples_leaf": 80,
              "max_leaf_nodes": 31,
              "max_iter": 300,
              "max_depth": 4,
              "learning_rate": 0.08,
              "l2_regularization": 1.0
            }
          },
          {
            "rank": 6,
            "mean_cv_score": 0.9835804391362657,
            "std_cv_score": 0.0028727596826495635,
            "train_score": 0.9974951298741785,
            "parameters": {
              "min_samples_leaf": 20,
              "max_leaf_nodes": 63,
              "max_iter": 220,
              "max_depth": 4,
              "learning_rate": 0.05,
              "l2_regularization": 5.0
            }
          }
        ],
        "selected_threshold": 0.595,
        "threshold_candidates": [
          {
            "threshold": 0.1,
            "precision": 0.9022801302931596,
            "recall": 0.9822695035460993,
            "f1": 0.9405772495755518
          },
          {
            "threshold": 0.15000000000000002,
            "precision": 0.9326599326599326,
            "recall": 0.9822695035460993,
            "f1": 0.9568221070811744
          },
          {
            "threshold": 0.2,
            "precision": 0.9452054794520548,
            "recall": 0.9787234042553191,
            "f1": 0.9616724738675958
          },
          {
            "threshold": 0.25,
            "precision": 0.9548611111111112,
            "recall": 0.975177304964539,
            "f1": 0.9649122807017544
          },
          {
            "threshold": 0.30000000000000004,
            "precision": 0.9578947368421052,
            "recall": 0.9680851063829787,
            "f1": 0.9629629629629629
          },
          {
            "threshold": 0.35,
            "precision": 0.9609929078014184,
            "recall": 0.9609929078014184,
            "f1": 0.9609929078014184
          },
          {
            "threshold": 0.4,
            "precision": 0.9746376811594203,
            "recall": 0.9539007092198581,
            "f1": 0.96415770609319
          },
          {
            "threshold": 0.45000000000000007,
            "precision": 0.9817518248175182,
            "recall": 0.9539007092198581,
            "f1": 0.9676258992805755
          },
          {
            "threshold": 0.5,
            "precision": 0.9816849816849816,
            "recall": 0.950354609929078,
            "f1": 0.9657657657657658
          },
          {
            "threshold": 0.55,
            "precision": 0.9888888888888889,
            "recall": 0.9468085106382979,
            "f1": 0.967391304347826
          },
          {
            "threshold": 0.595,
            "precision": 0.9962546816479401,
            "recall": 0.9432624113475178,
            "f1": 0.9690346083788707
          },
          {
            "threshold": 0.6,
            "precision": 0.9962546816479401,
            "recall": 0.9432624113475178,
            "f1": 0.9690346083788707
          },
          {
            "threshold": 0.65,
            "precision": 0.9962121212121212,
            "recall": 0.9326241134751773,
            "f1": 0.9633699633699634
          },
          {
            "threshold": 0.7,
            "precision": 1.0,
            "recall": 0.9326241134751773,
            "f1": 0.9651376146788991
          },
          {
            "threshold": 0.75,
            "precision": 1.0,
            "recall": 0.9290780141843972,
            "f1": 0.9632352941176471
          },
          {
            "threshold": 0.8,
            "precision": 1.0,
            "recall": 0.925531914893617,
            "f1": 0.9613259668508287
          },
          {
            "threshold": 0.85,
            "precision": 1.0,
            "recall": 0.9113475177304965,
            "f1": 0.9536178107606679
          },
          {
            "threshold": 0.9,
            "precision": 1.0,
            "recall": 0.900709219858156,
            "f1": 0.9477611940298507
          }
        ]
      },
      "test": {
        "metrics": {
          "accuracy": 0.9807256235827665,
          "balanced_accuracy": 0.9736170212765958,
          "precision": 0.9853479853479854,
          "recall": 0.9539007092198581,
          "f1": 0.9693693693693693,
          "roc_auc": 0.9984338061465721,
          "average_precision": 0.9968836220947112,
          "threshold": 0.595,
          "confusion_matrix": {
            "tn": 596,
            "fp": 4,
            "fn": 13,
            "tp": 269
          }
        },
        "roc_curve": [
          {
            "x": 0.0,
            "y": 0.0
          },
          {
            "x": 0.0,
            "y": 0.0035460992907801418
          },
          {
            "x": 0.0,
            "y": 0.875886524822695
          },
          {
            "x": 0.0016666666666666668,
            "y": 0.875886524822695
          },
          {
            "x": 0.0016666666666666668,
            "y": 0.8865248226950354
          },
          {
            "x": 0.0033333333333333335,
            "y": 0.8865248226950354
          },
          {
            "x": 0.0033333333333333335,
            "y": 0.9184397163120568
          },
          {
            "x": 0.005,
            "y": 0.9184397163120568
          },
          {
            "x": 0.005,
            "y": 0.950354609929078
          },
          {
            "x": 0.006666666666666667,
            "y": 0.950354609929078
          },
          {
            "x": 0.006666666666666667,
            "y": 0.9574468085106383
          },
          {
            "x": 0.008333333333333333,
            "y": 0.9574468085106383
          },
          {
            "x": 0.008333333333333333,
            "y": 0.9680851063829787
          },
          {
            "x": 0.013333333333333334,
            "y": 0.9680851063829787
          },
          {
            "x": 0.013333333333333334,
            "y": 0.975177304964539
          },
          {
            "x": 0.015,
            "y": 0.975177304964539
          },
          {
            "x": 0.015,
            "y": 0.9822695035460993
          },
          {
            "x": 0.023333333333333334,
            "y": 0.9822695035460993
          },
          {
            "x": 0.023333333333333334,
            "y": 0.9858156028368794
          },
          {
            "x": 0.025,
            "y": 0.9858156028368794
          },
          {
            "x": 0.025,
            "y": 0.9893617021276596
          },
          {
            "x": 0.03666666666666667,
            "y": 0.9893617021276596
          },
          {
            "x": 0.03666666666666667,
            "y": 0.9929078014184397
          },
          {
            "x": 0.065,
            "y": 0.9929078014184397
          },
          {
            "x": 0.065,
            "y": 0.9964539007092199
          },
          {
            "x": 0.11666666666666667,
            "y": 0.9964539007092199
          },
          {
            "x": 0.11666666666666667,
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
            "x": 0.028368794326241134,
            "y": 1.0
          },
          {
            "x": 0.06028368794326241,
            "y": 1.0
          },
          {
            "x": 0.09219858156028368,
            "y": 1.0
          },
          {
            "x": 0.12411347517730496,
            "y": 1.0
          },
          {
            "x": 0.15602836879432624,
            "y": 1.0
          },
          {
            "x": 0.1879432624113475,
            "y": 1.0
          },
          {
            "x": 0.2198581560283688,
            "y": 1.0
          },
          {
            "x": 0.25177304964539005,
            "y": 1.0
          },
          {
            "x": 0.28368794326241137,
            "y": 1.0
          },
          {
            "x": 0.31560283687943264,
            "y": 1.0
          },
          {
            "x": 0.34397163120567376,
            "y": 1.0
          },
          {
            "x": 0.375886524822695,
            "y": 1.0
          },
          {
            "x": 0.4078014184397163,
            "y": 1.0
          },
          {
            "x": 0.4397163120567376,
            "y": 1.0
          },
          {
            "x": 0.4716312056737589,
            "y": 1.0
          },
          {
            "x": 0.5035460992907801,
            "y": 1.0
          },
          {
            "x": 0.5354609929078015,
            "y": 1.0
          },
          {
            "x": 0.5673758865248227,
            "y": 1.0
          },
          {
            "x": 0.599290780141844,
            "y": 1.0
          },
          {
            "x": 0.6312056737588653,
            "y": 1.0
          },
          {
            "x": 0.6631205673758865,
            "y": 1.0
          },
          {
            "x": 0.6914893617021277,
            "y": 1.0
          },
          {
            "x": 0.723404255319149,
            "y": 1.0
          },
          {
            "x": 0.7553191489361702,
            "y": 1.0
          },
          {
            "x": 0.7872340425531915,
            "y": 1.0
          },
          {
            "x": 0.8191489361702128,
            "y": 1.0
          },
          {
            "x": 0.851063829787234,
            "y": 1.0
          },
          {
            "x": 0.8794326241134752,
            "y": 0.9959839357429718
          },
          {
            "x": 0.9078014184397163,
            "y": 0.9922480620155039
          },
          {
            "x": 0.9361702127659575,
            "y": 0.9887640449438202
          },
          {
            "x": 0.9609929078014184,
            "y": 0.9818840579710145
          },
          {
            "x": 0.9787234042553191,
            "y": 0.968421052631579
          },
          {
            "x": 0.9893617021276596,
            "y": 0.9489795918367347
          },
          {
            "x": 0.9929078014184397,
            "y": 0.9271523178807947
          },
          {
            "x": 0.9929078014184397,
            "y": 0.9003215434083601
          },
          {
            "x": 0.9964539007092199,
            "y": 0.878125
          },
          {
            "x": 0.9964539007092199,
            "y": 0.8541033434650456
          },
          {
            "x": 0.9964539007092199,
            "y": 0.8313609467455622
          },
          {
            "x": 0.9964539007092199,
            "y": 0.8097982708933718
          },
          {
            "x": 1.0,
            "y": 0.7921348314606742
          },
          {
            "x": 1.0,
            "y": 0.7726027397260274
          },
          {
            "x": 1.0,
            "y": 0.7540106951871658
          },
          {
            "x": 1.0,
            "y": 0.7362924281984334
          },
          {
            "x": 1.0,
            "y": 0.7212276214833759
          },
          {
            "x": 1.0,
            "y": 0.705
          },
          {
            "x": 1.0,
            "y": 0.6894865525672371
          },
          {
            "x": 1.0,
            "y": 0.6746411483253588
          },
          {
            "x": 1.0,
            "y": 0.6604215456674473
          },
          {
            "x": 1.0,
            "y": 0.6467889908256881
          },
          {
            "x": 1.0,
            "y": 0.6337078651685393
          },
          {
            "x": 1.0,
            "y": 0.6211453744493393
          },
          {
            "x": 1.0,
            "y": 0.6090712742980562
          },
          {
            "x": 1.0,
            "y": 0.597457627118644
          },
          {
            "x": 1.0,
            "y": 0.5862785862785863
          },
          {
            "x": 1.0,
            "y": 0.5766871165644172
          },
          {
            "x": 1.0,
            "y": 0.5662650602409639
          },
          {
            "x": 1.0,
            "y": 0.5562130177514792
          },
          {
            "x": 1.0,
            "y": 0.5465116279069767
          },
          {
            "x": 1.0,
            "y": 0.5371428571428571
          },
          {
            "x": 1.0,
            "y": 0.5280898876404494
          },
          {
            "x": 1.0,
            "y": 0.5193370165745856
          },
          {
            "x": 1.0,
            "y": 0.5108695652173914
          },
          {
            "x": 1.0,
            "y": 0.5026737967914439
          },
          {
            "x": 1.0,
            "y": 0.49473684210526314
          },
          {
            "x": 1.0,
            "y": 0.48704663212435234
          },
          {
            "x": 1.0,
            "y": 0.47959183673469385
          },
          {
            "x": 1.0,
            "y": 0.47315436241610737
          },
          {
            "x": 1.0,
            "y": 0.46611570247933887
          },
          {
            "x": 1.0,
            "y": 0.4592833876221498
          },
          {
            "x": 1.0,
            "y": 0.45264847512038525
          },
          {
            "x": 1.0,
            "y": 0.4462025316455696
          },
          {
            "x": 1.0,
            "y": 0.43993759750390016
          },
          {
            "x": 1.0,
            "y": 0.4338461538461538
          },
          {
            "x": 1.0,
            "y": 0.4279210925644917
          },
          {
            "x": 1.0,
            "y": 0.4221556886227545
          },
          {
            "x": 1.0,
            "y": 0.41654357459379615
          },
          {
            "x": 1.0,
            "y": 0.4116788321167883
          },
          {
            "x": 1.0,
            "y": 0.40634005763688763
          },
          {
            "x": 1.0,
            "y": 0.4011379800853485
          },
          {
            "x": 1.0,
            "y": 0.3960674157303371
          },
          {
            "x": 1.0,
            "y": 0.391123439667129
          },
          {
            "x": 1.0,
            "y": 0.3863013698630137
          },
          {
            "x": 1.0,
            "y": 0.38159675236806495
          },
          {
            "x": 1.0,
            "y": 0.3770053475935829
          },
          {
            "x": 1.0,
            "y": 0.3725231175693527
          },
          {
            "x": 1.0,
            "y": 0.3681462140992167
          },
          {
            "x": 1.0,
            "y": 0.3638709677419355
          },
          {
            "x": 1.0,
            "y": 0.36015325670498083
          },
          {
            "x": 1.0,
            "y": 0.3560606060606061
          },
          {
            "x": 1.0,
            "y": 0.352059925093633
          },
          {
            "x": 1.0,
            "y": 0.34814814814814815
          },
          {
            "x": 1.0,
            "y": 0.3443223443223443
          },
          {
            "x": 1.0,
            "y": 0.34057971014492755
          },
          {
            "x": 1.0,
            "y": 0.33691756272401435
          },
          {
            "x": 1.0,
            "y": 0.3333333333333333
          },
          {
            "x": 1.0,
            "y": 0.3298245614035088
          },
          {
            "x": 1.0,
            "y": 0.3263888888888889
          },
          {
            "x": 1.0,
            "y": 0.3230240549828179
          },
          {
            "x": 1.0,
            "y": 0.3197278911564626
          }
        ],
        "feature_importance": [
          {
            "feature": "granularity_score",
            "importance_mean": 0.05656717744277573,
            "importance_std": 0.0046329504041070875
          },
          {
            "feature": "lobularity_score",
            "importance_mean": 0.05233877247065527,
            "importance_std": 0.0014435851717691604
          },
          {
            "feature": "circularity",
            "importance_mean": 0.031094435117593244,
            "importance_std": 0.007839199563064133
          },
          {
            "feature": "cell_diameter_um",
            "importance_mean": 0.027313348983636854,
            "importance_std": 0.0019538933678625225
          },
          {
            "feature": "cell_area_px",
            "importance_mean": 0.017062580637724922,
            "importance_std": 0.002398804827870277
          },
          {
            "feature": "chromatin_density",
            "importance_mean": 0.01210235088628811,
            "importance_std": 0.0005037804542481083
          },
          {
            "feature": "eccentricity",
            "importance_mean": 0.008292451354828978,
            "importance_std": 0.003639648059552811
          },
          {
            "feature": "membrane_smoothness",
            "importance_mean": 0.003904232128561308,
            "importance_std": 0.0004231816990043686
          },
          {
            "feature": "cytoplasm_ratio",
            "importance_mean": 0.0034324324595104427,
            "importance_std": 0.0011162107207934784
          },
          {
            "feature": "perimeter_px",
            "importance_mean": 0.0034004729391468314,
            "importance_std": 0.0006268707649405909
          },
          {
            "feature": "nucleus_area_pct",
            "importance_mean": 0.0031755469828182448,
            "importance_std": 0.0008610812562292214
          },
          {
            "feature": "stain_intensity",
            "importance_mean": 0.0015584804104792904,
            "importance_std": 0.0007110516661440107
          },
          {
            "feature": "mean_g",
            "importance_mean": 0.0008433573244308878,
            "importance_std": 0.0003029855077205271
          },
          {
            "feature": "mean_r",
            "importance_mean": 0.0007808025843165645,
            "importance_std": 0.00028759796330040874
          },
          {
            "feature": "mcv_fl",
            "importance_mean": 0.0005199415429282539,
            "importance_std": 0.00010349382030243331
          },
          {
            "feature": "mean_b",
            "importance_mean": 0.00040876339126638683,
            "importance_std": 0.00019723908721700363
          },
          {
            "feature": "wbc_count_per_ul",
            "importance_mean": 0.00034980628646694156,
            "importance_std": 0.00018276473393382845
          },
          {
            "feature": "platelet_count_per_ul",
            "importance_mean": 0.0002638676590951683,
            "importance_std": 0.0002138161963180164
          },
          {
            "feature": "mchc_g_dl",
            "importance_mean": 0.00023807682597265512,
            "importance_std": 4.8850881067286954e-05
          },
          {
            "feature": "image_resolution_px",
            "importance_mean": 0.00017016006473774548,
            "importance_std": 0.00014324224709990813
          },
          {
            "feature": "rbc_count_millions_per_ul",
            "importance_mean": 4.171799827840106e-05,
            "importance_std": 0.00010913598444876122
          },
          {
            "feature": "staining_protocol",
            "importance_mean": 4.038790295576855e-05,
            "importance_std": 0.00012220485100575864
          },
          {
            "feature": "hemoglobin_g_dl",
            "importance_mean": 3.46099900044583e-05,
            "importance_std": 0.00016482797509996959
          },
          {
            "feature": "patient_age_group",
            "importance_mean": 3.027047011947004e-05,
            "importance_std": 1.475067891901468e-05
          },
          {
            "feature": "microscope_model",
            "importance_mean": 2.7316865714832606e-05,
            "importance_std": 3.556023599518746e-05
          },
          {
            "feature": "dataset_source",
            "importance_mean": 1.5187650299258726e-05,
            "importance_std": 8.092723149484996e-05
          },
          {
            "feature": "patient_sex",
            "importance_mean": 0.0,
            "importance_std": 0.0
          },
          {
            "feature": "magnification_x",
            "importance_mean": -5.318917219812591e-05,
            "importance_std": 5.4896780381966876e-05
          },
          {
            "feature": "hematocrit_pct",
            "importance_mean": -0.0003477676095008375,
            "importance_std": 0.00018429142245988218
          }
        ]
      },
      "interpretation": "Average precision is 0.997 against a 0.320 prevalence baseline; this measures ranking on the held-out records, not causality.",
      "limitations": [
        "The dataset source, sampling frame, patient independence, and image-feature extraction process are not documented here.",
        "Cells may be correlated within patients, but no patient identifier is supplied for grouped validation.",
        "Acquisition metadata can encode dataset-specific shortcuts and limit external transfer.",
        "Clinical use requires image-level quality review, external multi-site validation, calibration, subgroup analysis, and regulated laboratory governance."
      ]
    },
    {
      "id": "fifa",
      "title": "FIFA match-rating reconstruction",
      "type": "regression",
      "target": "fifa_target",
      "business_question": "Can raw match actions, workload, context, and player profile reconstruct the supplied player rating on entirely held-out matches?",
      "business_use": "Audit consistency between raw event statistics and the supplied rating; do not use predictions for selection, contracts, betting, or real tournament claims.",
      "primary_metric": "Root mean squared error (RMSE)",
      "relative_metric_label": "sMAPE",
      "source_file": "fifa_world_cup_2026_player_performance.csv",
      "runtime_seconds": 112.28,
      "dataset": {
        "rows": 54600,
        "columns": 53,
        "features_used": 52,
        "missing_total": 0,
        "duplicate_rows": 0,
        "missing_by_column": {
          "age": 0,
          "height_cm": 0,
          "weight_kg": 0,
          "market_value_eur": 0,
          "goals_team": 0,
          "goals_opponent": 0,
          "minutes_played": 0,
          "goals": 0,
          "assists": 0,
          "shots": 0,
          "shots_on_target": 0,
          "expected_goals_xg": 0,
          "expected_assists_xa": 0,
          "key_passes": 0,
          "successful_passes": 0,
          "total_passes": 0,
          "pass_accuracy": 0,
          "dribbles_attempted": 0,
          "successful_dribbles": 0,
          "crosses": 0,
          "successful_crosses": 0,
          "tackles": 0,
          "interceptions": 0,
          "clearances": 0,
          "blocks": 0,
          "aerial_duels_won": 0,
          "aerial_duels_lost": 0,
          "recoveries": 0,
          "defensive_actions": 0,
          "fouls_committed": 0,
          "fouls_suffered": 0,
          "yellow_cards": 0,
          "red_cards": 0,
          "offsides": 0,
          "saves": 0,
          "save_percentage": 0,
          "punches": 0,
          "clean_sheet": 0,
          "goals_conceded": 0,
          "penalty_saves": 0,
          "distance_covered_km": 0,
          "sprint_distance_km": 0,
          "top_speed_kmh": 0,
          "accelerations": 0,
          "decelerations": 0,
          "stamina_score": 0,
          "position": 0,
          "preferred_foot": 0,
          "team": 0,
          "opponent_team": 0,
          "tournament_stage": 0,
          "match_result": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "age",
            "count": 38,
            "rate": 0.000695970695970696,
            "minimum": 17.0,
            "maximum": 39.0,
            "clip_low": 18.0,
            "clip_high": 36.0
          },
          {
            "feature": "height_cm",
            "count": 253,
            "rate": 0.004633699633699633,
            "minimum": 163.0,
            "maximum": 200.0,
            "clip_low": 167.0,
            "clip_high": 195.0
          },
          {
            "feature": "weight_kg",
            "count": 282,
            "rate": 0.005164835164835165,
            "minimum": 65.0,
            "maximum": 87.0,
            "clip_low": 66.0,
            "clip_high": 84.0
          },
          {
            "feature": "market_value_eur",
            "count": 5254,
            "rate": 0.09622710622710623,
            "minimum": 528822.0,
            "maximum": 200000000.0,
            "clip_low": 1185011.0,
            "clip_high": 138466809.0
          },
          {
            "feature": "goals_team",
            "count": 182,
            "rate": 0.0033333333333333335,
            "minimum": 0.0,
            "maximum": 7.0,
            "clip_low": 0.0,
            "clip_high": 5.0
          },
          {
            "feature": "goals_opponent",
            "count": 182,
            "rate": 0.0033333333333333335,
            "minimum": 0.0,
            "maximum": 7.0,
            "clip_low": 0.0,
            "clip_high": 5.0
          },
          {
            "feature": "minutes_played",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 90.0,
            "clip_low": 0.0,
            "clip_high": 90.0
          },
          {
            "feature": "goals",
            "count": 2743,
            "rate": 0.05023809523809524,
            "minimum": 0.0,
            "maximum": 4.0,
            "clip_low": 0.0,
            "clip_high": 1.0
          },
          {
            "feature": "assists",
            "count": 2664,
            "rate": 0.04879120879120879,
            "minimum": 0.0,
            "maximum": 3.0,
            "clip_low": 0.0,
            "clip_high": 1.0
          },
          {
            "feature": "shots",
            "count": 2555,
            "rate": 0.046794871794871795,
            "minimum": 0.0,
            "maximum": 11.0,
            "clip_low": 0.0,
            "clip_high": 4.0
          },
          {
            "feature": "shots_on_target",
            "count": 2316,
            "rate": 0.042417582417582415,
            "minimum": 0.0,
            "maximum": 5.0,
            "clip_low": 0.0,
            "clip_high": 1.0
          },
          {
            "feature": "expected_goals_xg",
            "count": 9567,
            "rate": 0.1752197802197802,
            "minimum": 0.0,
            "maximum": 2.31,
            "clip_low": 0.0,
            "clip_high": 0.34
          },
          {
            "feature": "expected_assists_xa",
            "count": 11060,
            "rate": 0.20256410256410257,
            "minimum": 0.0,
            "maximum": 2.2,
            "clip_low": 0.0,
            "clip_high": 0.36
          },
          {
            "feature": "key_passes",
            "count": 2576,
            "rate": 0.04717948717948718,
            "minimum": 0.0,
            "maximum": 8.0,
            "clip_low": 0.0,
            "clip_high": 4.0
          },
          {
            "feature": "successful_passes",
            "count": 866,
            "rate": 0.01586080586080586,
            "minimum": 0.0,
            "maximum": 97.0,
            "clip_low": 0.0,
            "clip_high": 72.0
          },
          {
            "feature": "total_passes",
            "count": 754,
            "rate": 0.01380952380952381,
            "minimum": 0.0,
            "maximum": 100.0,
            "clip_low": 0.0,
            "clip_high": 87.0
          },
          {
            "feature": "pass_accuracy",
            "count": 720,
            "rate": 0.013186813186813187,
            "minimum": 0.42,
            "maximum": 0.97,
            "clip_low": 0.6,
            "clip_high": 0.96
          },
          {
            "feature": "dribbles_attempted",
            "count": 4234,
            "rate": 0.07754578754578755,
            "minimum": 0.0,
            "maximum": 10.0,
            "clip_low": 0.0,
            "clip_high": 5.0
          },
          {
            "feature": "successful_dribbles",
            "count": 6596,
            "rate": 0.12080586080586081,
            "minimum": 0.0,
            "maximum": 6.0,
            "clip_low": 0.0,
            "clip_high": 2.0
          },
          {
            "feature": "crosses",
            "count": 2210,
            "rate": 0.04047619047619048,
            "minimum": 0.0,
            "maximum": 8.0,
            "clip_low": 0.0,
            "clip_high": 4.0
          },
          {
            "feature": "successful_crosses",
            "count": 993,
            "rate": 0.018186813186813186,
            "minimum": 0.0,
            "maximum": 2.0,
            "clip_low": 0.0,
            "clip_high": 1.0
          },
          {
            "feature": "tackles",
            "count": 6540,
            "rate": 0.11978021978021978,
            "minimum": 0.0,
            "maximum": 8.0,
            "clip_low": 0.0,
            "clip_high": 6.0
          },
          {
            "feature": "interceptions",
            "count": 4379,
            "rate": 0.0802014652014652,
            "minimum": 0.0,
            "maximum": 7.0,
            "clip_low": 0.0,
            "clip_high": 5.0
          },
          {
            "feature": "clearances",
            "count": 6706,
            "rate": 0.12282051282051282,
            "minimum": 0.0,
            "maximum": 12.0,
            "clip_low": 0.0,
            "clip_high": 7.0
          },
          {
            "feature": "blocks",
            "count": 9346,
            "rate": 0.17117216117216116,
            "minimum": 0.0,
            "maximum": 4.0,
            "clip_low": 0.0,
            "clip_high": 2.0
          },
          {
            "feature": "aerial_duels_won",
            "count": 5222,
            "rate": 0.09564102564102564,
            "minimum": 0.0,
            "maximum": 7.0,
            "clip_low": 0.0,
            "clip_high": 5.0
          },
          {
            "feature": "aerial_duels_lost",
            "count": 1184,
            "rate": 0.021684981684981685,
            "minimum": 0.0,
            "maximum": 5.0,
            "clip_low": 0.0,
            "clip_high": 3.0
          },
          {
            "feature": "recoveries",
            "count": 2922,
            "rate": 0.05351648351648352,
            "minimum": 0.0,
            "maximum": 12.0,
            "clip_low": 0.0,
            "clip_high": 8.0
          },
          {
            "feature": "defensive_actions",
            "count": 2819,
            "rate": 0.05163003663003663,
            "minimum": 0.0,
            "maximum": 23.0,
            "clip_low": 0.0,
            "clip_high": 15.0
          },
          {
            "feature": "fouls_committed",
            "count": 1512,
            "rate": 0.027692307692307693,
            "minimum": 0.0,
            "maximum": 5.0,
            "clip_low": 0.0,
            "clip_high": 3.0
          },
          {
            "feature": "fouls_suffered",
            "count": 13065,
            "rate": 0.2392857142857143,
            "minimum": 0.0,
            "maximum": 4.0,
            "clip_low": 0.0,
            "clip_high": 3.0
          },
          {
            "feature": "yellow_cards",
            "count": 5346,
            "rate": 0.09791208791208791,
            "minimum": 0.0,
            "maximum": 1.0,
            "clip_low": 0.0,
            "clip_high": 1.0
          },
          {
            "feature": "red_cards",
            "count": 306,
            "rate": 0.005604395604395605,
            "minimum": 0.0,
            "maximum": 1.0,
            "clip_low": 0.0,
            "clip_high": 0.0
          },
          {
            "feature": "offsides",
            "count": 4231,
            "rate": 0.0774908424908425,
            "minimum": 0.0,
            "maximum": 4.0,
            "clip_low": 0.0,
            "clip_high": 1.0
          },
          {
            "feature": "saves",
            "count": 2005,
            "rate": 0.03672161172161172,
            "minimum": 0.0,
            "maximum": 11.0,
            "clip_low": 0.0,
            "clip_high": 4.0
          },
          {
            "feature": "save_percentage",
            "count": 2005,
            "rate": 0.03672161172161172,
            "minimum": 0.0,
            "maximum": 1.0,
            "clip_low": 0.0,
            "clip_high": 0.78
          },
          {
            "feature": "punches",
            "count": 1029,
            "rate": 0.018846153846153846,
            "minimum": 0.0,
            "maximum": 3.0,
            "clip_low": 0.0,
            "clip_high": 1.0
          },
          {
            "feature": "clean_sheet",
            "count": 501,
            "rate": 0.009175824175824175,
            "minimum": 0.0,
            "maximum": 1.0,
            "clip_low": 0.0,
            "clip_high": 0.0
          },
          {
            "feature": "goals_conceded",
            "count": 1508,
            "rate": 0.02761904761904762,
            "minimum": 0.0,
            "maximum": 7.0,
            "clip_low": 0.0,
            "clip_high": 2.0
          },
          {
            "feature": "penalty_saves",
            "count": 182,
            "rate": 0.0033333333333333335,
            "minimum": 0.0,
            "maximum": 1.0,
            "clip_low": 0.0,
            "clip_high": 0.0
          },
          {
            "feature": "distance_covered_km",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 14.0,
            "clip_low": 0.0,
            "clip_high": 11.8
          },
          {
            "feature": "sprint_distance_km",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 2.0,
            "clip_low": 0.0,
            "clip_high": 1.5
          },
          {
            "feature": "top_speed_kmh",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 37.0,
            "clip_low": 0.0,
            "clip_high": 36.6
          },
          {
            "feature": "accelerations",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 44.0,
            "clip_low": 0.0,
            "clip_high": 33.0
          },
          {
            "feature": "decelerations",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 40.0,
            "clip_low": 0.0,
            "clip_high": 29.0
          },
          {
            "feature": "stamina_score",
            "count": 255,
            "rate": 0.00467032967032967,
            "minimum": 50.0,
            "maximum": 99.0,
            "clip_low": 54.919,
            "clip_high": 99.0
          }
        ],
        "categories": {
          "position": [
            {
              "value": "Defender",
              "count": 18900
            },
            {
              "value": "Midfielder",
              "count": 16800
            },
            {
              "value": "Forward",
              "count": 12600
            },
            {
              "value": "Goalkeeper",
              "count": 6300
            }
          ],
          "preferred_foot": [
            {
              "value": "Right",
              "count": 40656
            },
            {
              "value": "Left",
              "count": 13944
            }
          ],
          "team": [
            {
              "value": "Qatar",
              "count": 1716
            },
            {
              "value": "Jamaica",
              "count": 1534
            },
            {
              "value": "Morocco",
              "count": 1430
            },
            {
              "value": "Netherlands",
              "count": 1404
            },
            {
              "value": "Italy",
              "count": 1378
            },
            {
              "value": "Saudi Arabia",
              "count": 1352
            },
            {
              "value": "Belgium",
              "count": 1326
            },
            {
              "value": "Turkey",
              "count": 1300
            },
            {
              "value": "Scotland",
              "count": 1274
            },
            {
              "value": "Croatia",
              "count": 1274
            },
            {
              "value": "Peru",
              "count": 1248
            },
            {
              "value": "Canada",
              "count": 1248
            },
            {
              "value": "Panama",
              "count": 1222
            },
            {
              "value": "Ecuador",
              "count": 1222
            },
            {
              "value": "Australia",
              "count": 1222
            },
            {
              "value": "Tunisia",
              "count": 1222
            },
            {
              "value": "Colombia",
              "count": 1196
            },
            {
              "value": "Costa Rica",
              "count": 1196
            },
            {
              "value": "Spain",
              "count": 1170
            },
            {
              "value": "Brazil",
              "count": 1170
            },
            {
              "value": "Ghana",
              "count": 1170
            },
            {
              "value": "Egypt",
              "count": 1170
            },
            {
              "value": "Uruguay",
              "count": 1170
            },
            {
              "value": "Cameroon",
              "count": 1144
            },
            {
              "value": "Uzbekistan",
              "count": 1144
            },
            {
              "value": "England",
              "count": 1144
            },
            {
              "value": "Denmark",
              "count": 1118
            },
            {
              "value": "Portugal",
              "count": 1118
            },
            {
              "value": "Serbia",
              "count": 1092
            },
            {
              "value": "Algeria",
              "count": 1066
            },
            {
              "value": "Iraq",
              "count": 1066
            },
            {
              "value": "Nigeria",
              "count": 1040
            },
            {
              "value": "Mexico",
              "count": 1040
            },
            {
              "value": "Poland",
              "count": 1014
            },
            {
              "value": "Senegal",
              "count": 988
            },
            {
              "value": "Ukraine",
              "count": 988
            },
            {
              "value": "Iran",
              "count": 988
            },
            {
              "value": "United States",
              "count": 988
            },
            {
              "value": "Chile",
              "count": 962
            },
            {
              "value": "Sweden",
              "count": 936
            },
            {
              "value": "Japan",
              "count": 936
            },
            {
              "value": "South Africa",
              "count": 910
            },
            {
              "value": "Switzerland",
              "count": 910
            },
            {
              "value": "France",
              "count": 884
            },
            {
              "value": "South Korea",
              "count": 884
            },
            {
              "value": "Germany",
              "count": 884
            },
            {
              "value": "Argentina",
              "count": 884
            },
            {
              "value": "Austria",
              "count": 858
            }
          ],
          "opponent_team": [
            {
              "value": "Qatar",
              "count": 1716
            },
            {
              "value": "Jamaica",
              "count": 1534
            },
            {
              "value": "Morocco",
              "count": 1430
            },
            {
              "value": "Netherlands",
              "count": 1404
            },
            {
              "value": "Italy",
              "count": 1378
            },
            {
              "value": "Saudi Arabia",
              "count": 1352
            },
            {
              "value": "Belgium",
              "count": 1326
            },
            {
              "value": "Turkey",
              "count": 1300
            },
            {
              "value": "Scotland",
              "count": 1274
            },
            {
              "value": "Croatia",
              "count": 1274
            },
            {
              "value": "Peru",
              "count": 1248
            },
            {
              "value": "Canada",
              "count": 1248
            },
            {
              "value": "Panama",
              "count": 1222
            },
            {
              "value": "Ecuador",
              "count": 1222
            },
            {
              "value": "Australia",
              "count": 1222
            },
            {
              "value": "Tunisia",
              "count": 1222
            },
            {
              "value": "Colombia",
              "count": 1196
            },
            {
              "value": "Costa Rica",
              "count": 1196
            },
            {
              "value": "Spain",
              "count": 1170
            },
            {
              "value": "Brazil",
              "count": 1170
            },
            {
              "value": "Ghana",
              "count": 1170
            },
            {
              "value": "Egypt",
              "count": 1170
            },
            {
              "value": "Uruguay",
              "count": 1170
            },
            {
              "value": "Cameroon",
              "count": 1144
            },
            {
              "value": "Uzbekistan",
              "count": 1144
            },
            {
              "value": "England",
              "count": 1144
            },
            {
              "value": "Denmark",
              "count": 1118
            },
            {
              "value": "Portugal",
              "count": 1118
            },
            {
              "value": "Serbia",
              "count": 1092
            },
            {
              "value": "Algeria",
              "count": 1066
            },
            {
              "value": "Iraq",
              "count": 1066
            },
            {
              "value": "Nigeria",
              "count": 1040
            },
            {
              "value": "Mexico",
              "count": 1040
            },
            {
              "value": "Poland",
              "count": 1014
            },
            {
              "value": "Senegal",
              "count": 988
            },
            {
              "value": "Ukraine",
              "count": 988
            },
            {
              "value": "Iran",
              "count": 988
            },
            {
              "value": "United States",
              "count": 988
            },
            {
              "value": "Chile",
              "count": 962
            },
            {
              "value": "Sweden",
              "count": 936
            },
            {
              "value": "Japan",
              "count": 936
            },
            {
              "value": "South Africa",
              "count": 910
            },
            {
              "value": "Switzerland",
              "count": 910
            },
            {
              "value": "France",
              "count": 884
            },
            {
              "value": "South Korea",
              "count": 884
            },
            {
              "value": "Germany",
              "count": 884
            },
            {
              "value": "Argentina",
              "count": 884
            },
            {
              "value": "Austria",
              "count": 858
            }
          ],
          "tournament_stage": [
            {
              "value": "Group Stage",
              "count": 30056
            },
            {
              "value": "Round of 32",
              "count": 9256
            },
            {
              "value": "Round of 16",
              "count": 6552
            },
            {
              "value": "Quarter Finals",
              "count": 4368
            },
            {
              "value": "Semi Finals",
              "count": 2184
            },
            {
              "value": "Third Place Match",
              "count": 1092
            },
            {
              "value": "Final",
              "count": 1092
            }
          ],
          "match_result": [
            {
              "value": "W",
              "count": 20124
            },
            {
              "value": "L",
              "count": 20124
            },
            {
              "value": "D",
              "count": 14352
            }
          ]
        },
        "target_summary": {
          "minimum": 0.0,
          "maximum": 9.4,
          "mean": 3.634699633699633,
          "median": 5.5,
          "std": 3.155845780518055
        },
        "unit": "score_points"
      },
      "audit_interpretation": "performance_score and tournament_rating correlate above 0.99 with player_rating and are excluded. Zero-minute/zero-rating records remain because they are part of the supplied match table and make the target distribution strongly bimodal.",
      "split": {
        "train": {
          "rows": 38220,
          "rate": 0.7
        },
        "validation": {
          "rows": 8164,
          "rate": 0.14952380952380953
        },
        "test": {
          "rows": 8216,
          "rate": 0.15047619047619049
        },
        "strategy": "Model-grouped 70/15/15 split"
      },
      "preparation": {
        "numeric_features": [
          "age",
          "height_cm",
          "weight_kg",
          "market_value_eur",
          "goals_team",
          "goals_opponent",
          "minutes_played",
          "goals",
          "assists",
          "shots",
          "shots_on_target",
          "expected_goals_xg",
          "expected_assists_xa",
          "key_passes",
          "successful_passes",
          "total_passes",
          "pass_accuracy",
          "dribbles_attempted",
          "successful_dribbles",
          "crosses",
          "successful_crosses",
          "tackles",
          "interceptions",
          "clearances",
          "blocks",
          "aerial_duels_won",
          "aerial_duels_lost",
          "recoveries",
          "defensive_actions",
          "fouls_committed",
          "fouls_suffered",
          "yellow_cards",
          "red_cards",
          "offsides",
          "saves",
          "save_percentage",
          "punches",
          "clean_sheet",
          "goals_conceded",
          "penalty_saves",
          "distance_covered_km",
          "sprint_distance_km",
          "top_speed_kmh",
          "accelerations",
          "decelerations",
          "stamina_score"
        ],
        "categorical_features": [
          "position",
          "preferred_foot",
          "team",
          "opponent_team",
          "tournament_stage",
          "match_result"
        ],
        "excluded_features": [
          "player_id",
          "player_name",
          "match_id",
          "performance_score",
          "offensive_contribution",
          "defensive_contribution",
          "possession_impact",
          "pressure_resistance",
          "creativity_score",
          "consistency_score",
          "clutch_performance_score",
          "tournament totals",
          "tournament_rating"
        ],
        "feature_selection": "Player identity and every supplied composite/cumulative score are excluded. Match IDs create grouped partitions but do not enter the model; only profile, context, raw actions, and physical workload are retained.",
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
          "rmse": 3.6564601907990983,
          "mae": 2.8225624693777562,
          "r2": -0.3425021006864446,
          "mape": 0.9234578773610377
        },
        {
          "model": "Ridge regression",
          "rmse": 0.5686851267337002,
          "mae": 0.3792948260023885,
          "r2": 0.9675259081341001,
          "mape": 0.8937005106571093
        },
        {
          "model": "Random forest",
          "rmse": 0.4775748680190978,
          "mae": 0.2902282885987805,
          "r2": 0.9770978526958052,
          "mape": 0.04649157953655181
        },
        {
          "model": "Histogram gradient boosting",
          "rmse": 0.4774410603361473,
          "mae": 0.29207548457327165,
          "r2": 0.9771106844177598,
          "mape": 0.8855256568603006
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
          "min_samples_leaf": 25,
          "max_leaf_nodes": 15,
          "max_iter": 220,
          "max_depth": 3,
          "learning_rate": 0.08,
          "l2_regularization": 1.0
        },
        "best_cv_score": 0.4785791294674988,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 0.4785791294674988,
            "std_cv_score": 0.002742561892847236,
            "train_score": 0.4665367025621675,
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
            "rank": 2,
            "mean_cv_score": 0.47859015591140774,
            "std_cv_score": 0.0032738092698395326,
            "train_score": 0.4589437161489768,
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
            "rank": 3,
            "mean_cv_score": 0.4787161612422281,
            "std_cv_score": 0.002791534557712964,
            "train_score": 0.4685918430759222,
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
            "rank": 4,
            "mean_cv_score": 0.47901307907760043,
            "std_cv_score": 0.0029792711216756677,
            "train_score": 0.470993928076326,
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
            "mean_cv_score": 0.47920656779484005,
            "std_cv_score": 0.002642297550896465,
            "train_score": 0.45107226519307353,
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
            "mean_cv_score": 0.47957069691987203,
            "std_cv_score": 0.0037588447967557104,
            "train_score": 0.4500725928295702,
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
          "rmse": 0.4791401284811677,
          "mae": 0.2932815179843691,
          "r2": 0.9769474822553484,
          "mape": 0.8857069135807354
        }
      },
      "test": {
        "metrics": {
          "rmse": 0.4754913758961304,
          "mae": 0.29243716363957056,
          "r2": 0.9772932644419835,
          "mape": 0.894018975867258
        },
        "feature_importance": [
          {
            "feature": "minutes_played",
            "importance_mean": 3.7606294121848407,
            "importance_std": 0.014154452806112888
          },
          {
            "feature": "market_value_eur",
            "importance_mean": 0.0803772846975992,
            "importance_std": 0.00330020853540414
          },
          {
            "feature": "total_passes",
            "importance_mean": 0.022755345815799456,
            "importance_std": 0.0015090008749187426
          },
          {
            "feature": "goals",
            "importance_mean": 0.00848601582531409,
            "importance_std": 0.0008729471423014519
          },
          {
            "feature": "match_result",
            "importance_mean": 0.005424291830771005,
            "importance_std": 0.000847934045596703
          },
          {
            "feature": "top_speed_kmh",
            "importance_mean": 0.0051453903259449,
            "importance_std": 0.00019790824106760907
          },
          {
            "feature": "assists",
            "importance_mean": 0.0047435053546706725,
            "importance_std": 0.0005521855145549706
          },
          {
            "feature": "successful_passes",
            "importance_mean": 0.0025388341116463855,
            "importance_std": 0.0003183366040973531
          },
          {
            "feature": "recoveries",
            "importance_mean": 0.0023872222127548637,
            "importance_std": 0.0003150331239955341
          },
          {
            "feature": "fouls_committed",
            "importance_mean": 0.0022666974267450124,
            "importance_std": 0.0005205543644853297
          },
          {
            "feature": "distance_covered_km",
            "importance_mean": 0.0015582183847106617,
            "importance_std": 0.0003262358427219003
          },
          {
            "feature": "position",
            "importance_mean": 0.0011614619083164617,
            "importance_std": 0.0001764583977099827
          },
          {
            "feature": "save_percentage",
            "importance_mean": 0.0009866078512157834,
            "importance_std": 0.00014381029303666803
          },
          {
            "feature": "stamina_score",
            "importance_mean": 0.0007119292739091917,
            "importance_std": 0.00022537706931971625
          },
          {
            "feature": "team",
            "importance_mean": 0.00032785770100995926,
            "importance_std": 0.00027973023271122644
          },
          {
            "feature": "dribbles_attempted",
            "importance_mean": 0.00017753714136857038,
            "importance_std": 6.541585197605131e-05
          },
          {
            "feature": "defensive_actions",
            "importance_mean": 0.00015241077151167035,
            "importance_std": 5.86206683520441e-05
          },
          {
            "feature": "shots",
            "importance_mean": 0.00014838690980896926,
            "importance_std": 0.0001309203908794749
          },
          {
            "feature": "age",
            "importance_mean": 0.0001224300612183334,
            "importance_std": 5.6705421549527436e-05
          },
          {
            "feature": "expected_goals_xg",
            "importance_mean": 7.42447427552843e-05,
            "importance_std": 5.582330816034873e-05
          },
          {
            "feature": "shots_on_target",
            "importance_mean": 6.825096846144185e-05,
            "importance_std": 6.609332118951123e-05
          },
          {
            "feature": "successful_crosses",
            "importance_mean": 6.576350355253872e-05,
            "importance_std": 3.6772039983969755e-05
          },
          {
            "feature": "clearances",
            "importance_mean": 5.631728558183613e-05,
            "importance_std": 7.385270083693032e-05
          },
          {
            "feature": "height_cm",
            "importance_mean": 3.909758334081729e-05,
            "importance_std": 7.858094677779024e-05
          },
          {
            "feature": "interceptions",
            "importance_mean": 3.770725882840109e-05,
            "importance_std": 4.2430147128312163e-05
          },
          {
            "feature": "pass_accuracy",
            "importance_mean": 2.9300250839997544e-05,
            "importance_std": 2.8084348549696003e-05
          },
          {
            "feature": "yellow_cards",
            "importance_mean": 2.684093862612147e-05,
            "importance_std": 1.4235469947103124e-05
          },
          {
            "feature": "goals_team",
            "importance_mean": 1.9592287852347272e-05,
            "importance_std": 1.6159133688608807e-05
          },
          {
            "feature": "accelerations",
            "importance_mean": 6.004009295725495e-06,
            "importance_std": 0.00011455632479720033
          },
          {
            "feature": "crosses",
            "importance_mean": 2.1433421605413874e-06,
            "importance_std": 3.1881439721953085e-05
          },
          {
            "feature": "fouls_suffered",
            "importance_mean": 1.138983531684401e-06,
            "importance_std": 4.0322579045893677e-05
          },
          {
            "feature": "aerial_duels_lost",
            "importance_mean": 3.9535072912655345e-07,
            "importance_std": 1.583368991773371e-05
          },
          {
            "feature": "red_cards",
            "importance_mean": 0.0,
            "importance_std": 0.0
          },
          {
            "feature": "offsides",
            "importance_mean": 0.0,
            "importance_std": 0.0
          },
          {
            "feature": "clean_sheet",
            "importance_mean": 0.0,
            "importance_std": 0.0
          },
          {
            "feature": "penalty_saves",
            "importance_mean": 0.0,
            "importance_std": 0.0
          },
          {
            "feature": "preferred_foot",
            "importance_mean": 0.0,
            "importance_std": 0.0
          },
          {
            "feature": "weight_kg",
            "importance_mean": -2.8376110862982085e-06,
            "importance_std": 8.43115151426229e-05
          },
          {
            "feature": "punches",
            "importance_mean": -4.868521270055363e-06,
            "importance_std": 1.095111338674856e-05
          },
          {
            "feature": "sprint_distance_km",
            "importance_mean": -7.151103130348391e-06,
            "importance_std": 5.369441578965193e-05
          },
          {
            "feature": "blocks",
            "importance_mean": -1.3004128871831519e-05,
            "importance_std": 2.162356160415098e-05
          },
          {
            "feature": "successful_dribbles",
            "importance_mean": -1.5707267445726664e-05,
            "importance_std": 2.787629703719062e-05
          },
          {
            "feature": "goals_conceded",
            "importance_mean": -1.6904907513807615e-05,
            "importance_std": 4.86889946320573e-06
          },
          {
            "feature": "expected_assists_xa",
            "importance_mean": -1.7381892717882597e-05,
            "importance_std": 7.45332885696301e-05
          },
          {
            "feature": "decelerations",
            "importance_mean": -1.778973084947307e-05,
            "importance_std": 4.2093724017970406e-05
          },
          {
            "feature": "aerial_duels_won",
            "importance_mean": -2.1216129506488695e-05,
            "importance_std": 1.8133747376389723e-05
          },
          {
            "feature": "opponent_team",
            "importance_mean": -2.8065338269026945e-05,
            "importance_std": 4.804214386620852e-05
          },
          {
            "feature": "goals_opponent",
            "importance_mean": -3.9650392359730224e-05,
            "importance_std": 7.274810461382017e-05
          },
          {
            "feature": "tournament_stage",
            "importance_mean": -4.014023567950701e-05,
            "importance_std": 7.983222630943277e-05
          },
          {
            "feature": "saves",
            "importance_mean": -4.9006794511863294e-05,
            "importance_std": 6.615770174207623e-05
          },
          {
            "feature": "key_passes",
            "importance_mean": -5.290050840193553e-05,
            "importance_std": 3.348539224007741e-05
          },
          {
            "feature": "tackles",
            "importance_mean": -0.00013203276713064094,
            "importance_std": 1.649288047511209e-05
          }
        ],
        "prediction_sample": [
          {
            "actual": 0.0,
            "predicted": -0.009386799078163506
          },
          {
            "actual": 6.5,
            "predicted": 6.254165295932592
          },
          {
            "actual": 6.7,
            "predicted": 5.768815609449907
          },
          {
            "actual": 8.1,
            "predicted": 6.251827920080279
          },
          {
            "actual": 4.9,
            "predicted": 5.923104309666983
          },
          {
            "actual": 6.8,
            "predicted": 6.069700626768149
          },
          {
            "actual": 6.0,
            "predicted": 5.8052938596006225
          },
          {
            "actual": 6.5,
            "predicted": 6.07427766976301
          },
          {
            "actual": 5.8,
            "predicted": 6.24377338502319
          },
          {
            "actual": 0.0,
            "predicted": -0.00048119505673104246
          },
          {
            "actual": 5.9,
            "predicted": 6.009693211703644
          },
          {
            "actual": 0.0,
            "predicted": -0.015223053988217142
          },
          {
            "actual": 6.0,
            "predicted": 5.997638097865163
          },
          {
            "actual": 6.4,
            "predicted": 6.287731202468246
          },
          {
            "actual": 7.4,
            "predicted": 6.904519079807412
          },
          {
            "actual": 5.5,
            "predicted": 6.078097626420576
          },
          {
            "actual": 0.0,
            "predicted": 0.0025023208945595564
          },
          {
            "actual": 0.0,
            "predicted": 0.02134995715242664
          },
          {
            "actual": 5.5,
            "predicted": 6.233347181428539
          },
          {
            "actual": 0.0,
            "predicted": 0.004409736903636455
          },
          {
            "actual": 5.1,
            "predicted": 5.98045201363592
          },
          {
            "actual": 0.0,
            "predicted": -0.004628410442595762
          },
          {
            "actual": 0.0,
            "predicted": -0.006234633642480409
          },
          {
            "actual": 4.6,
            "predicted": 5.9097135405913255
          },
          {
            "actual": 0.0,
            "predicted": -0.00336110247427125
          },
          {
            "actual": 0.0,
            "predicted": -0.0012826133870529398
          },
          {
            "actual": 0.0,
            "predicted": 0.006598291879415039
          },
          {
            "actual": 5.8,
            "predicted": 6.271112462926623
          },
          {
            "actual": 6.4,
            "predicted": 6.0226511400882625
          },
          {
            "actual": 0.0,
            "predicted": 0.008539171967584356
          },
          {
            "actual": 5.7,
            "predicted": 6.040020106930131
          },
          {
            "actual": 0.0,
            "predicted": 0.0072347054793367475
          },
          {
            "actual": 0.0,
            "predicted": 0.00016681218319809782
          },
          {
            "actual": 0.0,
            "predicted": -0.0023386618416451916
          },
          {
            "actual": 0.0,
            "predicted": -0.00492960218268425
          },
          {
            "actual": 7.5,
            "predicted": 6.5534584808993115
          },
          {
            "actual": 6.5,
            "predicted": 6.3001766038833695
          },
          {
            "actual": 7.6,
            "predicted": 6.689739498640939
          },
          {
            "actual": 6.8,
            "predicted": 6.569862666082984
          },
          {
            "actual": 5.7,
            "predicted": 6.280169793242335
          },
          {
            "actual": 0.0,
            "predicted": -0.002514355002807068
          },
          {
            "actual": 0.0,
            "predicted": 0.005524903252941886
          },
          {
            "actual": 5.9,
            "predicted": 5.8208620456116655
          },
          {
            "actual": 0.0,
            "predicted": -0.014811921310402607
          },
          {
            "actual": 6.7,
            "predicted": 6.1541439773720725
          },
          {
            "actual": 0.0,
            "predicted": -0.00823438805981582
          },
          {
            "actual": 6.8,
            "predicted": 6.267348609619469
          },
          {
            "actual": 5.3,
            "predicted": 5.81885679321994
          },
          {
            "actual": 5.4,
            "predicted": 5.661819964103238
          },
          {
            "actual": 7.2,
            "predicted": 6.915950847922301
          },
          {
            "actual": 0.0,
            "predicted": 0.0020652083784437857
          },
          {
            "actual": 0.0,
            "predicted": -0.003865987895535507
          },
          {
            "actual": 7.9,
            "predicted": 7.2541999884375405
          },
          {
            "actual": 6.2,
            "predicted": 6.012233673089188
          },
          {
            "actual": 0.0,
            "predicted": 0.004222825128708436
          },
          {
            "actual": 7.0,
            "predicted": 6.165799942192964
          },
          {
            "actual": 7.3,
            "predicted": 6.090428439846013
          },
          {
            "actual": 0.0,
            "predicted": 0.0068077188471193425
          },
          {
            "actual": 7.2,
            "predicted": 6.741973142788825
          },
          {
            "actual": 8.2,
            "predicted": 7.0900582749016685
          },
          {
            "actual": 5.4,
            "predicted": 6.104178405604069
          },
          {
            "actual": 0.0,
            "predicted": 0.021289373800190386
          },
          {
            "actual": 7.4,
            "predicted": 6.434831790229955
          },
          {
            "actual": 0.0,
            "predicted": -0.0010634651604949992
          },
          {
            "actual": 0.0,
            "predicted": 0.006007084529322776
          },
          {
            "actual": 6.0,
            "predicted": 6.036434217005279
          },
          {
            "actual": 4.9,
            "predicted": 5.789549385486032
          },
          {
            "actual": 0.0,
            "predicted": 0.003070432381631131
          },
          {
            "actual": 5.8,
            "predicted": 5.924302034903814
          },
          {
            "actual": 6.7,
            "predicted": 6.879332929713496
          },
          {
            "actual": 0.0,
            "predicted": 0.007343472325165658
          },
          {
            "actual": 0.0,
            "predicted": 0.004409736903636455
          },
          {
            "actual": 5.8,
            "predicted": 6.37375819680654
          },
          {
            "actual": 5.3,
            "predicted": 5.862357837282262
          },
          {
            "actual": 5.6,
            "predicted": 5.877558633928206
          },
          {
            "actual": 5.9,
            "predicted": 5.689981456580257
          },
          {
            "actual": 6.0,
            "predicted": 6.486563576257897
          },
          {
            "actual": 0.0,
            "predicted": 0.006886370469852086
          },
          {
            "actual": 0.0,
            "predicted": -0.0039191808622749055
          },
          {
            "actual": 0.0,
            "predicted": 0.003070432381631131
          },
          {
            "actual": 6.6,
            "predicted": 6.656099284190666
          },
          {
            "actual": 6.6,
            "predicted": 6.788478862919059
          },
          {
            "actual": 5.6,
            "predicted": 5.852864208010913
          },
          {
            "actual": 5.6,
            "predicted": 5.742527151108776
          },
          {
            "actual": 0.0,
            "predicted": 0.00016681218319809782
          },
          {
            "actual": 0.0,
            "predicted": 0.0024340187817094208
          },
          {
            "actual": 6.8,
            "predicted": 6.59919824755267
          },
          {
            "actual": 0.0,
            "predicted": -0.0009937519287951159
          },
          {
            "actual": 5.5,
            "predicted": 5.86050564893738
          },
          {
            "actual": 0.0,
            "predicted": 0.007343472325165658
          },
          {
            "actual": 0.0,
            "predicted": -0.003346751902098855
          },
          {
            "actual": 6.4,
            "predicted": 6.0385936069765185
          },
          {
            "actual": 6.1,
            "predicted": 6.371355781541641
          },
          {
            "actual": 6.6,
            "predicted": 6.083313215755907
          },
          {
            "actual": 7.0,
            "predicted": 6.0016911065428085
          },
          {
            "actual": 7.8,
            "predicted": 7.033528806153916
          },
          {
            "actual": 0.0,
            "predicted": -0.002185585491206187
          },
          {
            "actual": 6.1,
            "predicted": 6.000019504147236
          },
          {
            "actual": 0.0,
            "predicted": -0.0008425505770659102
          },
          {
            "actual": 0.0,
            "predicted": 0.0016871544881818666
          },
          {
            "actual": 0.0,
            "predicted": -0.004562054851181498
          },
          {
            "actual": 6.9,
            "predicted": 6.189815746240396
          },
          {
            "actual": 6.7,
            "predicted": 6.505133538529851
          },
          {
            "actual": 6.7,
            "predicted": 6.014600457737741
          },
          {
            "actual": 0.0,
            "predicted": -0.002935665928041801
          },
          {
            "actual": 6.6,
            "predicted": 6.595436698581499
          },
          {
            "actual": 6.9,
            "predicted": 6.817126127808259
          },
          {
            "actual": 6.4,
            "predicted": 6.154793262875215
          },
          {
            "actual": 6.7,
            "predicted": 6.855682688488061
          },
          {
            "actual": 5.8,
            "predicted": 5.972750513721774
          },
          {
            "actual": 0.0,
            "predicted": 0.006666593992265175
          },
          {
            "actual": 5.2,
            "predicted": 6.180018184044064
          },
          {
            "actual": 0.0,
            "predicted": -0.017078077031099138
          },
          {
            "actual": 6.9,
            "predicted": 6.77368480871511
          },
          {
            "actual": 5.8,
            "predicted": 6.149442327669094
          },
          {
            "actual": 0.0,
            "predicted": 0.0050137924945329055
          },
          {
            "actual": 5.9,
            "predicted": 6.365938682426905
          },
          {
            "actual": 5.3,
            "predicted": 5.98572475471834
          },
          {
            "actual": 6.0,
            "predicted": 5.765819237347024
          },
          {
            "actual": 0.0,
            "predicted": -0.0009937519287951159
          },
          {
            "actual": 5.6,
            "predicted": 6.270994988337686
          },
          {
            "actual": 0.0,
            "predicted": 0.01029316819998423
          },
          {
            "actual": 7.0,
            "predicted": 6.370393208148842
          },
          {
            "actual": 0.0,
            "predicted": 0.0018982653036631056
          },
          {
            "actual": 5.6,
            "predicted": 5.781887185893148
          },
          {
            "actual": 0.0,
            "predicted": 0.007034956207655885
          },
          {
            "actual": 0.0,
            "predicted": 0.0018982653036631056
          },
          {
            "actual": 5.6,
            "predicted": 6.187294136715913
          },
          {
            "actual": 5.4,
            "predicted": 5.847018871635654
          },
          {
            "actual": 0.0,
            "predicted": 0.004789567501164806
          },
          {
            "actual": 0.0,
            "predicted": -0.012959928196075702
          },
          {
            "actual": 5.7,
            "predicted": 6.151884205801339
          },
          {
            "actual": 6.4,
            "predicted": 5.9001244264817965
          },
          {
            "actual": 0.0,
            "predicted": -0.00424580812327208
          },
          {
            "actual": 7.7,
            "predicted": 6.372392380981323
          },
          {
            "actual": 6.3,
            "predicted": 5.986082003855583
          },
          {
            "actual": 5.6,
            "predicted": 6.1880734126774
          },
          {
            "actual": 7.1,
            "predicted": 7.179182676531688
          },
          {
            "actual": 6.3,
            "predicted": 5.993474447255135
          },
          {
            "actual": 0.0,
            "predicted": -0.012855484797330253
          },
          {
            "actual": 6.5,
            "predicted": 6.372323686164002
          },
          {
            "actual": 5.6,
            "predicted": 5.869826570198215
          },
          {
            "actual": 0.0,
            "predicted": 0.0036744879725275816
          },
          {
            "actual": 7.0,
            "predicted": 7.016971061825247
          },
          {
            "actual": 0.0,
            "predicted": -0.012313866941216958
          },
          {
            "actual": 0.0,
            "predicted": 0.00907492544563067
          },
          {
            "actual": 0.0,
            "predicted": -0.014754816966468373
          },
          {
            "actual": 0.0,
            "predicted": -0.0005459071558204392
          },
          {
            "actual": 0.0,
            "predicted": -0.006552509577814789
          },
          {
            "actual": 6.8,
            "predicted": 6.854421804708624
          },
          {
            "actual": 7.0,
            "predicted": 6.805600674035877
          },
          {
            "actual": 0.0,
            "predicted": -0.005412700508872021
          },
          {
            "actual": 6.3,
            "predicted": 6.7682401612878005
          },
          {
            "actual": 0.0,
            "predicted": 0.001687210330312675
          },
          {
            "actual": 6.9,
            "predicted": 6.253875503678523
          },
          {
            "actual": 7.3,
            "predicted": 6.672764421776826
          },
          {
            "actual": 6.6,
            "predicted": 6.617243430275748
          },
          {
            "actual": 6.2,
            "predicted": 6.030725921525256
          },
          {
            "actual": 5.7,
            "predicted": 6.0460539283657
          },
          {
            "actual": 5.8,
            "predicted": 6.414834850015677
          },
          {
            "actual": 6.1,
            "predicted": 5.885477015464025
          },
          {
            "actual": 5.3,
            "predicted": 6.07040458026479
          },
          {
            "actual": 6.6,
            "predicted": 6.015062437670402
          },
          {
            "actual": 7.9,
            "predicted": 7.033402105041268
          },
          {
            "actual": 5.7,
            "predicted": 6.505353261786926
          },
          {
            "actual": 6.1,
            "predicted": 6.769156596484229
          },
          {
            "actual": 4.9,
            "predicted": 5.810645754854833
          },
          {
            "actual": 5.3,
            "predicted": 5.824942741859852
          },
          {
            "actual": 5.3,
            "predicted": 6.745460751992195
          },
          {
            "actual": 5.2,
            "predicted": 5.886360920072741
          },
          {
            "actual": 7.1,
            "predicted": 6.970570142025647
          },
          {
            "actual": 5.4,
            "predicted": 5.8540912100858655
          },
          {
            "actual": 0.0,
            "predicted": 0.007636174708843576
          },
          {
            "actual": 6.0,
            "predicted": 6.171241095618512
          },
          {
            "actual": 5.9,
            "predicted": 5.922669023045304
          },
          {
            "actual": 6.6,
            "predicted": 6.217327477497621
          },
          {
            "actual": 0.0,
            "predicted": 0.0024340187817094208
          },
          {
            "actual": 7.0,
            "predicted": 7.1400271842431255
          },
          {
            "actual": 0.0,
            "predicted": 0.006879100194911674
          },
          {
            "actual": 6.9,
            "predicted": 6.069605423815336
          },
          {
            "actual": 6.4,
            "predicted": 6.321468380364707
          },
          {
            "actual": 0.0,
            "predicted": -0.01321989016554444
          },
          {
            "actual": 6.5,
            "predicted": 6.4476130857150125
          },
          {
            "actual": 5.4,
            "predicted": 5.930309571311371
          },
          {
            "actual": 6.3,
            "predicted": 6.300558217811883
          },
          {
            "actual": 5.2,
            "predicted": 6.273753987986152
          },
          {
            "actual": 6.3,
            "predicted": 6.334548563879123
          },
          {
            "actual": 7.6,
            "predicted": 7.186615348268738
          },
          {
            "actual": 5.5,
            "predicted": 6.63191976608638
          },
          {
            "actual": 5.8,
            "predicted": 6.9412371166568105
          },
          {
            "actual": 6.5,
            "predicted": 5.997684598004265
          },
          {
            "actual": 6.3,
            "predicted": 5.801029828238717
          },
          {
            "actual": 0.0,
            "predicted": 0.005599199893535899
          },
          {
            "actual": 4.5,
            "predicted": 6.0602155586001105
          },
          {
            "actual": 0.0,
            "predicted": -0.0030501084808533833
          },
          {
            "actual": 0.0,
            "predicted": -0.010358281555298892
          },
          {
            "actual": 0.0,
            "predicted": 0.0010372114547777568
          },
          {
            "actual": 0.0,
            "predicted": -0.007608706467600836
          },
          {
            "actual": 6.2,
            "predicted": 6.030792266910204
          },
          {
            "actual": 6.3,
            "predicted": 6.28971087278892
          },
          {
            "actual": 7.0,
            "predicted": 6.297857428353883
          },
          {
            "actual": 0.0,
            "predicted": 0.010500493608966625
          },
          {
            "actual": 0.0,
            "predicted": -0.002174584824130828
          },
          {
            "actual": 6.4,
            "predicted": 6.404398504275877
          },
          {
            "actual": 5.6,
            "predicted": 5.900206312089741
          },
          {
            "actual": 0.0,
            "predicted": 0.0025023208945595564
          },
          {
            "actual": 5.4,
            "predicted": 6.319700862231928
          },
          {
            "actual": 0.0,
            "predicted": -0.0008333800531814816
          },
          {
            "actual": 0.0,
            "predicted": -0.004075833204978481
          },
          {
            "actual": 0.0,
            "predicted": -0.0040808469698169255
          },
          {
            "actual": 6.8,
            "predicted": 6.252401844917673
          },
          {
            "actual": 0.0,
            "predicted": 0.009689112609087778
          },
          {
            "actual": 0.0,
            "predicted": 0.006128895102278604
          },
          {
            "actual": 6.1,
            "predicted": 6.189123411113576
          },
          {
            "actual": 4.7,
            "predicted": 6.061690768111019
          },
          {
            "actual": 6.3,
            "predicted": 5.939368536799723
          },
          {
            "actual": 0.0,
            "predicted": -0.006226942490649599
          },
          {
            "actual": 7.2,
            "predicted": 6.552645887092037
          },
          {
            "actual": 0.0,
            "predicted": -0.00823438805981582
          },
          {
            "actual": 0.0,
            "predicted": 0.02489552206776558
          },
          {
            "actual": 0.0,
            "predicted": -0.011451308723867301
          },
          {
            "actual": 6.4,
            "predicted": 6.309558894211452
          },
          {
            "actual": 0.0,
            "predicted": 0.059111607047719644
          },
          {
            "actual": 6.2,
            "predicted": 5.928984904825986
          },
          {
            "actual": 0.0,
            "predicted": 0.008539171967584356
          },
          {
            "actual": 7.3,
            "predicted": 6.115970372662303
          },
          {
            "actual": 0.0,
            "predicted": -0.015242819368501382
          },
          {
            "actual": 6.2,
            "predicted": 5.919589697374792
          },
          {
            "actual": 5.9,
            "predicted": 6.350861820286816
          },
          {
            "actual": 5.4,
            "predicted": 5.876073196235909
          },
          {
            "actual": 5.4,
            "predicted": 5.921396478796015
          },
          {
            "actual": 6.1,
            "predicted": 6.282056183908241
          },
          {
            "actual": 6.1,
            "predicted": 6.10412924804493
          },
          {
            "actual": 6.2,
            "predicted": 5.875173462104847
          },
          {
            "actual": 0.0,
            "predicted": 0.004993654879392169
          },
          {
            "actual": 6.0,
            "predicted": 5.94801540444227
          },
          {
            "actual": 6.3,
            "predicted": 6.490635518369371
          },
          {
            "actual": 0.0,
            "predicted": -0.002249903586472775
          },
          {
            "actual": 6.4,
            "predicted": 6.6277837008824125
          },
          {
            "actual": 0.0,
            "predicted": 0.0015460296333276937
          },
          {
            "actual": 7.9,
            "predicted": 7.194861020157428
          },
          {
            "actual": 0.0,
            "predicted": -0.0030501084808533833
          },
          {
            "actual": 0.0,
            "predicted": -0.006629743094132959
          },
          {
            "actual": 6.2,
            "predicted": 6.548529164376934
          },
          {
            "actual": 0.0,
            "predicted": -0.0033577525691742107
          },
          {
            "actual": 5.4,
            "predicted": 6.034401879653573
          },
          {
            "actual": 0.0,
            "predicted": 0.00735038661452956
          },
          {
            "actual": 0.0,
            "predicted": 0.014915799391107066
          },
          {
            "actual": 5.5,
            "predicted": 6.119480759749715
          },
          {
            "actual": 6.7,
            "predicted": 6.736090134963574
          },
          {
            "actual": 5.5,
            "predicted": 6.0124753584984765
          },
          {
            "actual": 6.8,
            "predicted": 6.795130748147876
          },
          {
            "actual": 6.0,
            "predicted": 5.758940013654579
          },
          {
            "actual": 0.0,
            "predicted": 0.01484675149560605
          },
          {
            "actual": 6.6,
            "predicted": 6.679662502177651
          },
          {
            "actual": 0.0,
            "predicted": 0.003209414985881591
          },
          {
            "actual": 7.6,
            "predicted": 6.675254909671676
          },
          {
            "actual": 0.0,
            "predicted": -0.0012826133870529398
          },
          {
            "actual": 7.5,
            "predicted": 7.051141210606321
          },
          {
            "actual": 5.2,
            "predicted": 6.357702980995212
          },
          {
            "actual": 5.8,
            "predicted": 5.987927485547169
          },
          {
            "actual": 6.0,
            "predicted": 5.886667652779322
          },
          {
            "actual": 6.0,
            "predicted": 6.138128839206313
          },
          {
            "actual": 4.9,
            "predicted": 6.3062018554125725
          },
          {
            "actual": 0.0,
            "predicted": -0.02382752665419557
          },
          {
            "actual": 5.9,
            "predicted": 6.239955813117718
          },
          {
            "actual": 0.0,
            "predicted": 0.009486778755481741
          },
          {
            "actual": 7.0,
            "predicted": 7.009136546390841
          },
          {
            "actual": 5.8,
            "predicted": 6.037737010308344
          },
          {
            "actual": 6.7,
            "predicted": 6.71740788874777
          },
          {
            "actual": 7.7,
            "predicted": 6.912652098168356
          },
          {
            "actual": 0.0,
            "predicted": -0.0025740036975309194
          },
          {
            "actual": 7.7,
            "predicted": 6.790790903928606
          },
          {
            "actual": 0.0,
            "predicted": 0.015567471077178988
          },
          {
            "actual": 0.0,
            "predicted": -0.012920009755869495
          },
          {
            "actual": 6.5,
            "predicted": 5.701081330424144
          },
          {
            "actual": 6.7,
            "predicted": 5.9593237408305155
          },
          {
            "actual": 0.0,
            "predicted": 0.0024340187817094208
          },
          {
            "actual": 6.6,
            "predicted": 6.6432905338610375
          },
          {
            "actual": 0.0,
            "predicted": 0.0025023208945595564
          }
        ],
        "residual_bins": [
          {
            "actual": 0.929794762915782,
            "mean_residual": -0.15373230735209642,
            "mae": 0.15772340841048607,
            "count": 4239
          },
          {
            "actual": 5.812380952380952,
            "mean_residual": -0.3212032913661062,
            "mae": 0.3429814182137857,
            "count": 1050
          },
          {
            "actual": 6.251564076690211,
            "mean_residual": 0.029902507257863115,
            "mae": 0.26531949491868134,
            "count": 991
          },
          {
            "actual": 6.6868081180811805,
            "mean_residual": 0.33514065510730184,
            "mae": 0.42389155942830786,
            "count": 1084
          },
          {
            "actual": 7.36537558685446,
            "mean_residual": 0.7517273593246205,
            "mae": 0.764687381691886,
            "count": 852
          }
        ]
      },
      "interpretation": "The sealed test explains 97.7% of target variance with RMSE 0.48 in the target's displayed units.",
      "limitations": [
        "The file describes a future 2026 tournament as of the project date and therefore appears simulated, not observed match evidence.",
        "Rating reconstruction is post-match scoring, not prediction of future player performance.",
        "Raw event definitions and the rating-generation formula are not documented.",
        "Grouped matches reduce shared-context leakage but cannot establish transfer to real tournaments, providers, or players."
      ]
    },
    {
      "id": "chess",
      "title": "Chess decisive-result classification",
      "type": "classification",
      "target": "White win",
      "business_question": "Can pre-game ratings, time control, and early opening family rank whether White wins a decisive online chess game?",
      "business_use": "Use as an educational probability exercise for decisive games, not for fair-play enforcement, matchmaking, or betting.",
      "primary_metric": "Average precision",
      "source_file": "games.csv",
      "runtime_seconds": 343.69,
      "dataset": {
        "rows": 18711,
        "columns": 10,
        "features_used": 9,
        "missing_total": 0,
        "duplicate_rows": 540,
        "missing_by_column": {
          "white_rating": 0,
          "black_rating": 0,
          "rating_difference": 0,
          "mean_rating": 0,
          "base_minutes": 0,
          "increment_seconds": 0,
          "opening_ply": 0,
          "rated": 0,
          "opening_eco": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "white_rating",
            "count": 123,
            "rate": 0.006573673240339907,
            "minimum": 784.0,
            "maximum": 2700.0,
            "clip_low": 982.96,
            "clip_high": 2298.039999999999
          },
          {
            "feature": "black_rating",
            "count": 91,
            "rate": 0.004863449307893753,
            "minimum": 789.0,
            "maximum": 2723.0,
            "clip_low": 973.0,
            "clip_high": 2286.0
          },
          {
            "feature": "rating_difference",
            "count": 1435,
            "rate": 0.07669285447063225,
            "minimum": -1605.0,
            "maximum": 1499.0,
            "clip_low": -697.04,
            "clip_high": 717.0
          },
          {
            "feature": "mean_rating",
            "count": 53,
            "rate": 0.0028325583881139435,
            "minimum": 816.5,
            "maximum": 2448.0,
            "clip_low": 1054.0,
            "clip_high": 2217.5
          },
          {
            "feature": "base_minutes",
            "count": 1579,
            "rate": 0.08438886216663995,
            "minimum": 0.0,
            "maximum": 180.0,
            "clip_low": 3.0,
            "clip_high": 90.0
          },
          {
            "feature": "increment_seconds",
            "count": 749,
            "rate": 0.040029928918817806,
            "minimum": 0.0,
            "maximum": 180.0,
            "clip_low": 0.0,
            "clip_high": 45.0
          },
          {
            "feature": "opening_ply",
            "count": 816,
            "rate": 0.043610710277376945,
            "minimum": 1.0,
            "maximum": 28.0,
            "clip_low": 1.0,
            "clip_high": 13.0
          }
        ],
        "categories": {
          "rated": [
            {
              "value": "True",
              "count": 15117
            },
            {
              "value": "False",
              "count": 3594
            }
          ],
          "opening_eco": [
            {
              "value": "A00",
              "count": 954
            },
            {
              "value": "C00",
              "count": 787
            },
            {
              "value": "D00",
              "count": 684
            },
            {
              "value": "B01",
              "count": 681
            },
            {
              "value": "C41",
              "count": 643
            },
            {
              "value": "C20",
              "count": 642
            },
            {
              "value": "A40",
              "count": 592
            },
            {
              "value": "B00",
              "count": 578
            },
            {
              "value": "B20",
              "count": 534
            },
            {
              "value": "C50",
              "count": 487
            },
            {
              "value": "C40",
              "count": 426
            },
            {
              "value": "D02",
              "count": 408
            },
            {
              "value": "C44",
              "count": 360
            },
            {
              "value": "C42",
              "count": 307
            },
            {
              "value": "C55",
              "count": 288
            },
            {
              "value": "B07",
              "count": 285
            },
            {
              "value": "C45",
              "count": 263
            },
            {
              "value": "C02",
              "count": 256
            },
            {
              "value": "C46",
              "count": 251
            },
            {
              "value": "A04",
              "count": 250
            },
            {
              "value": "A45",
              "count": 235
            },
            {
              "value": "B21",
              "count": 222
            },
            {
              "value": "B30",
              "count": 214
            },
            {
              "value": "B50",
              "count": 212
            },
            {
              "value": "D20",
              "count": 199
            },
            {
              "value": "B10",
              "count": 183
            },
            {
              "value": "B06",
              "count": 166
            },
            {
              "value": "C21",
              "count": 166
            },
            {
              "value": "D06",
              "count": 165
            },
            {
              "value": "B12",
              "count": 152
            },
            {
              "value": "A01",
              "count": 152
            },
            {
              "value": "B02",
              "count": 147
            },
            {
              "value": "C23",
              "count": 147
            },
            {
              "value": "C01",
              "count": 144
            },
            {
              "value": "D30",
              "count": 140
            },
            {
              "value": "C62",
              "count": 130
            },
            {
              "value": "A10",
              "count": 123
            },
            {
              "value": "A06",
              "count": 116
            },
            {
              "value": "C57",
              "count": 115
            },
            {
              "value": "B32",
              "count": 115
            },
            {
              "value": "B40",
              "count": 114
            },
            {
              "value": "C24",
              "count": 106
            },
            {
              "value": "C60",
              "count": 103
            },
            {
              "value": "C65",
              "count": 101
            },
            {
              "value": "D10",
              "count": 100
            },
            {
              "value": "B23",
              "count": 99
            },
            {
              "value": "B90",
              "count": 97
            },
            {
              "value": "A20",
              "count": 96
            },
            {
              "value": "B22",
              "count": 93
            },
            {
              "value": "C68",
              "count": 89
            },
            {
              "value": "C30",
              "count": 86
            },
            {
              "value": "D01",
              "count": 84
            },
            {
              "value": "C53",
              "count": 79
            },
            {
              "value": "C22",
              "count": 77
            },
            {
              "value": "B13",
              "count": 76
            },
            {
              "value": "C48",
              "count": 75
            },
            {
              "value": "A41",
              "count": 74
            },
            {
              "value": "E20",
              "count": 74
            },
            {
              "value": "A02",
              "count": 74
            },
            {
              "value": "A46",
              "count": 72
            },
            {
              "value": "B54",
              "count": 72
            },
            {
              "value": "C34",
              "count": 72
            },
            {
              "value": "D31",
              "count": 71
            },
            {
              "value": "A43",
              "count": 70
            },
            {
              "value": "A03",
              "count": 68
            },
            {
              "value": "D35",
              "count": 67
            },
            {
              "value": "B27",
              "count": 63
            },
            {
              "value": "C70",
              "count": 63
            },
            {
              "value": "C26",
              "count": 62
            },
            {
              "value": "A21",
              "count": 59
            },
            {
              "value": "A15",
              "count": 58
            },
            {
              "value": "E61",
              "count": 55
            },
            {
              "value": "C64",
              "count": 53
            },
            {
              "value": "A22",
              "count": 53
            },
            {
              "value": "A80",
              "count": 51
            },
            {
              "value": "C47",
              "count": 51
            },
            {
              "value": "C10",
              "count": 50
            },
            {
              "value": "B25",
              "count": 50
            },
            {
              "value": "E00",
              "count": 46
            },
            {
              "value": "A13",
              "count": 46
            },
            {
              "value": "B33",
              "count": 46
            },
            {
              "value": "C77",
              "count": 43
            },
            {
              "value": "D07",
              "count": 42
            },
            {
              "value": "D15",
              "count": 42
            },
            {
              "value": "D04",
              "count": 40
            },
            {
              "value": "B08",
              "count": 39
            },
            {
              "value": "C11",
              "count": 36
            },
            {
              "value": "A30",
              "count": 36
            },
            {
              "value": "D11",
              "count": 36
            },
            {
              "value": "C61",
              "count": 35
            },
            {
              "value": "C27",
              "count": 35
            },
            {
              "value": "C54",
              "count": 34
            },
            {
              "value": "B57",
              "count": 33
            },
            {
              "value": "B52",
              "count": 32
            },
            {
              "value": "B34",
              "count": 32
            },
            {
              "value": "B11",
              "count": 30
            },
            {
              "value": "B15",
              "count": 30
            },
            {
              "value": "A08",
              "count": 29
            },
            {
              "value": "D08",
              "count": 29
            },
            {
              "value": "E90",
              "count": 29
            },
            {
              "value": "A48",
              "count": 29
            },
            {
              "value": "B18",
              "count": 28
            },
            {
              "value": "C78",
              "count": 28
            },
            {
              "value": "A49",
              "count": 28
            },
            {
              "value": "B43",
              "count": 28
            },
            {
              "value": "D05",
              "count": 28
            },
            {
              "value": "B56",
              "count": 28
            },
            {
              "value": "C25",
              "count": 28
            },
            {
              "value": "A85",
              "count": 28
            },
            {
              "value": "C58",
              "count": 27
            },
            {
              "value": "C67",
              "count": 27
            },
            {
              "value": "C66",
              "count": 27
            },
            {
              "value": "A07",
              "count": 26
            },
            {
              "value": "D43",
              "count": 26
            },
            {
              "value": "A84",
              "count": 26
            },
            {
              "value": "C33",
              "count": 25
            },
            {
              "value": "A52",
              "count": 24
            },
            {
              "value": "D37",
              "count": 24
            },
            {
              "value": "C51",
              "count": 24
            },
            {
              "value": "D45",
              "count": 24
            },
            {
              "value": "D21",
              "count": 23
            },
            {
              "value": "D32",
              "count": 23
            },
            {
              "value": "B28",
              "count": 23
            },
            {
              "value": "A25",
              "count": 22
            },
            {
              "value": "A16",
              "count": 22
            },
            {
              "value": "D12",
              "count": 22
            },
            {
              "value": "B03",
              "count": 21
            },
            {
              "value": "A34",
              "count": 21
            },
            {
              "value": "C69",
              "count": 20
            },
            {
              "value": "A11",
              "count": 20
            },
            {
              "value": "B53",
              "count": 20
            },
            {
              "value": "A50",
              "count": 20
            },
            {
              "value": "B29",
              "count": 19
            },
            {
              "value": "A28",
              "count": 19
            },
            {
              "value": "E60",
              "count": 19
            },
            {
              "value": "B72",
              "count": 19
            },
            {
              "value": "E10",
              "count": 18
            },
            {
              "value": "C28",
              "count": 18
            },
            {
              "value": "A42",
              "count": 18
            },
            {
              "value": "B94",
              "count": 18
            },
            {
              "value": "B70",
              "count": 18
            },
            {
              "value": "C88",
              "count": 17
            },
            {
              "value": "B09",
              "count": 17
            },
            {
              "value": "B45",
              "count": 17
            },
            {
              "value": "E76",
              "count": 17
            },
            {
              "value": "A09",
              "count": 16
            },
            {
              "value": "D50",
              "count": 16
            },
            {
              "value": "C15",
              "count": 16
            },
            {
              "value": "D53",
              "count": 16
            },
            {
              "value": "D55",
              "count": 16
            },
            {
              "value": "D03",
              "count": 15
            },
            {
              "value": "C07",
              "count": 15
            },
            {
              "value": "D94",
              "count": 15
            },
            {
              "value": "E77",
              "count": 15
            },
            {
              "value": "B44",
              "count": 15
            },
            {
              "value": "A53",
              "count": 15
            },
            {
              "value": "D85",
              "count": 15
            },
            {
              "value": "C43",
              "count": 15
            },
            {
              "value": "B80",
              "count": 15
            },
            {
              "value": "B51",
              "count": 14
            },
            {
              "value": "B31",
              "count": 14
            },
            {
              "value": "C03",
              "count": 13
            },
            {
              "value": "C05",
              "count": 13
            },
            {
              "value": "E12",
              "count": 13
            },
            {
              "value": "A57",
              "count": 13
            },
            {
              "value": "C18",
              "count": 12
            },
            {
              "value": "A05",
              "count": 12
            },
            {
              "value": "B36",
              "count": 12
            },
            {
              "value": "A35",
              "count": 12
            },
            {
              "value": "B46",
              "count": 12
            },
            {
              "value": "B92",
              "count": 12
            },
            {
              "value": "E15",
              "count": 12
            },
            {
              "value": "A56",
              "count": 11
            },
            {
              "value": "C37",
              "count": 11
            },
            {
              "value": "A27",
              "count": 11
            },
            {
              "value": "B84",
              "count": 11
            },
            {
              "value": "C31",
              "count": 11
            },
            {
              "value": "B35",
              "count": 10
            },
            {
              "value": "C14",
              "count": 10
            },
            {
              "value": "E70",
              "count": 10
            },
            {
              "value": "C36",
              "count": 10
            },
            {
              "value": "B77",
              "count": 9
            },
            {
              "value": "D80",
              "count": 9
            },
            {
              "value": "B41",
              "count": 9
            },
            {
              "value": "A51",
              "count": 9
            },
            {
              "value": "E32",
              "count": 9
            },
            {
              "value": "B24",
              "count": 8
            },
            {
              "value": "D46",
              "count": 8
            },
            {
              "value": "C59",
              "count": 8
            },
            {
              "value": "D25",
              "count": 8
            },
            {
              "value": "E24",
              "count": 8
            },
            {
              "value": "D44",
              "count": 8
            },
            {
              "value": "A17",
              "count": 8
            },
            {
              "value": "C17",
              "count": 8
            },
            {
              "value": "B76",
              "count": 7
            },
            {
              "value": "D41",
              "count": 7
            },
            {
              "value": "E11",
              "count": 7
            },
            {
              "value": "E21",
              "count": 7
            },
            {
              "value": "C49",
              "count": 7
            },
            {
              "value": "E71",
              "count": 7
            },
            {
              "value": "A29",
              "count": 7
            },
            {
              "value": "C52",
              "count": 7
            },
            {
              "value": "B86",
              "count": 7
            },
            {
              "value": "B42",
              "count": 7
            },
            {
              "value": "E81",
              "count": 7
            },
            {
              "value": "C80",
              "count": 7
            },
            {
              "value": "A36",
              "count": 7
            },
            {
              "value": "A44",
              "count": 7
            },
            {
              "value": "B19",
              "count": 7
            },
            {
              "value": "A70",
              "count": 7
            },
            {
              "value": "D17",
              "count": 6
            },
            {
              "value": "B17",
              "count": 6
            },
            {
              "value": "B38",
              "count": 6
            },
            {
              "value": "C91",
              "count": 6
            },
            {
              "value": "E14",
              "count": 6
            },
            {
              "value": "E34",
              "count": 6
            },
            {
              "value": "C72",
              "count": 6
            },
            {
              "value": "D60",
              "count": 6
            },
            {
              "value": "A38",
              "count": 6
            },
            {
              "value": "B93",
              "count": 6
            },
            {
              "value": "E91",
              "count": 6
            },
            {
              "value": "D51",
              "count": 6
            },
            {
              "value": "A58",
              "count": 6
            },
            {
              "value": "C89",
              "count": 6
            },
            {
              "value": "E94",
              "count": 6
            },
            {
              "value": "E80",
              "count": 6
            },
            {
              "value": "A18",
              "count": 6
            },
            {
              "value": "D52",
              "count": 6
            },
            {
              "value": "C79",
              "count": 5
            },
            {
              "value": "B95",
              "count": 5
            },
            {
              "value": "D26",
              "count": 5
            },
            {
              "value": "E73",
              "count": 5
            },
            {
              "value": "C16",
              "count": 5
            },
            {
              "value": "B78",
              "count": 5
            },
            {
              "value": "A54",
              "count": 5
            },
            {
              "value": "E67",
              "count": 5
            },
            {
              "value": "C06",
              "count": 5
            },
            {
              "value": "A47",
              "count": 4
            },
            {
              "value": "B96",
              "count": 4
            },
            {
              "value": "B05",
              "count": 4
            },
            {
              "value": "E17",
              "count": 4
            },
            {
              "value": "B87",
              "count": 4
            },
            {
              "value": "B14",
              "count": 4
            },
            {
              "value": "B88",
              "count": 4
            },
            {
              "value": "B04",
              "count": 4
            },
            {
              "value": "E30",
              "count": 4
            },
            {
              "value": "B98",
              "count": 4
            },
            {
              "value": "D24",
              "count": 4
            },
            {
              "value": "A60",
              "count": 4
            },
            {
              "value": "C35",
              "count": 4
            },
            {
              "value": "E51",
              "count": 4
            },
            {
              "value": "E38",
              "count": 4
            },
            {
              "value": "E50",
              "count": 4
            },
            {
              "value": "D40",
              "count": 4
            },
            {
              "value": "C63",
              "count": 4
            },
            {
              "value": "D34",
              "count": 4
            },
            {
              "value": "D91",
              "count": 4
            },
            {
              "value": "C71",
              "count": 4
            },
            {
              "value": "D90",
              "count": 4
            },
            {
              "value": "E59",
              "count": 3
            },
            {
              "value": "C12",
              "count": 3
            },
            {
              "value": "C56",
              "count": 3
            },
            {
              "value": "B75",
              "count": 3
            },
            {
              "value": "A39",
              "count": 3
            },
            {
              "value": "E01",
              "count": 3
            },
            {
              "value": "C84",
              "count": 3
            },
            {
              "value": "E16",
              "count": 3
            },
            {
              "value": "E54",
              "count": 3
            },
            {
              "value": "D87",
              "count": 3
            },
            {
              "value": "C39",
              "count": 3
            },
            {
              "value": "E40",
              "count": 3
            },
            {
              "value": "D14",
              "count": 3
            },
            {
              "value": "C13",
              "count": 3
            },
            {
              "value": "E56",
              "count": 3
            },
            {
              "value": "A82",
              "count": 3
            },
            {
              "value": "C08",
              "count": 3
            },
            {
              "value": "D57",
              "count": 3
            },
            {
              "value": "A81",
              "count": 3
            },
            {
              "value": "E87",
              "count": 3
            },
            {
              "value": "B48",
              "count": 3
            },
            {
              "value": "E88",
              "count": 3
            },
            {
              "value": "A31",
              "count": 2
            },
            {
              "value": "D92",
              "count": 2
            },
            {
              "value": "A65",
              "count": 2
            },
            {
              "value": "C29",
              "count": 2
            },
            {
              "value": "D70",
              "count": 2
            },
            {
              "value": "D93",
              "count": 2
            },
            {
              "value": "C74",
              "count": 2
            },
            {
              "value": "B91",
              "count": 2
            },
            {
              "value": "B71",
              "count": 2
            },
            {
              "value": "C81",
              "count": 2
            },
            {
              "value": "E53",
              "count": 2
            },
            {
              "value": "B81",
              "count": 2
            },
            {
              "value": "E64",
              "count": 2
            },
            {
              "value": "D74",
              "count": 2
            },
            {
              "value": "E06",
              "count": 2
            },
            {
              "value": "B47",
              "count": 2
            },
            {
              "value": "B82",
              "count": 2
            },
            {
              "value": "C38",
              "count": 2
            },
            {
              "value": "C92",
              "count": 2
            },
            {
              "value": "D38",
              "count": 2
            },
            {
              "value": "A83",
              "count": 2
            },
            {
              "value": "A12",
              "count": 2
            },
            {
              "value": "E98",
              "count": 2
            },
            {
              "value": "E97",
              "count": 2
            },
            {
              "value": "B39",
              "count": 2
            },
            {
              "value": "B73",
              "count": 2
            },
            {
              "value": "D18",
              "count": 2
            },
            {
              "value": "E92",
              "count": 2
            },
            {
              "value": "A91",
              "count": 2
            },
            {
              "value": "C04",
              "count": 2
            },
            {
              "value": "E68",
              "count": 2
            },
            {
              "value": "A73",
              "count": 1
            },
            {
              "value": "A67",
              "count": 1
            },
            {
              "value": "A99",
              "count": 1
            },
            {
              "value": "D48",
              "count": 1
            },
            {
              "value": "E44",
              "count": 1
            },
            {
              "value": "D56",
              "count": 1
            },
            {
              "value": "A33",
              "count": 1
            },
            {
              "value": "B74",
              "count": 1
            },
            {
              "value": "A97",
              "count": 1
            },
            {
              "value": "C83",
              "count": 1
            },
            {
              "value": "E33",
              "count": 1
            },
            {
              "value": "E47",
              "count": 1
            },
            {
              "value": "E42",
              "count": 1
            },
            {
              "value": "B58",
              "count": 1
            },
            {
              "value": "A59",
              "count": 1
            },
            {
              "value": "D47",
              "count": 1
            },
            {
              "value": "D81",
              "count": 1
            },
            {
              "value": "A23",
              "count": 1
            },
            {
              "value": "B83",
              "count": 1
            },
            {
              "value": "C09",
              "count": 1
            },
            {
              "value": "E95",
              "count": 1
            },
            {
              "value": "D58",
              "count": 1
            },
            {
              "value": "D78",
              "count": 1
            },
            {
              "value": "E18",
              "count": 1
            },
            {
              "value": "D95",
              "count": 1
            },
            {
              "value": "D22",
              "count": 1
            },
            {
              "value": "E52",
              "count": 1
            },
            {
              "value": "E46",
              "count": 1
            },
            {
              "value": "A24",
              "count": 1
            },
            {
              "value": "D59",
              "count": 1
            },
            {
              "value": "A89",
              "count": 1
            },
            {
              "value": "D16",
              "count": 1
            },
            {
              "value": "B60",
              "count": 1
            },
            {
              "value": "A14",
              "count": 1
            },
            {
              "value": "E63",
              "count": 1
            },
            {
              "value": "E03",
              "count": 1
            },
            {
              "value": "D82",
              "count": 1
            },
            {
              "value": "D86",
              "count": 1
            },
            {
              "value": "D13",
              "count": 1
            },
            {
              "value": "D36",
              "count": 1
            },
            {
              "value": "B62",
              "count": 1
            },
            {
              "value": "D76",
              "count": 1
            },
            {
              "value": "D77",
              "count": 1
            },
            {
              "value": "C90",
              "count": 1
            },
            {
              "value": "E35",
              "count": 1
            },
            {
              "value": "E48",
              "count": 1
            },
            {
              "value": "D19",
              "count": 1
            }
          ]
        },
        "target_summary": {
          "minimum": 0.0,
          "maximum": 1.0,
          "mean": 0.5233285233285233,
          "median": 1.0,
          "std": 0.4994688306098593
        },
        "target_counts": {
          "Black win": 8919,
          "White win": 9792
        },
        "positive_label": "White win",
        "negative_label": "Black win",
        "positive_rate": 0.5233285233285233
      },
      "audit_interpretation": "After removing exact duplicate rows and draws, the target is moderately balanced. Rating difference is valid pre-game signal; moves and victory status would reveal the outcome and are excluded.",
      "split": {
        "train": {
          "rows": 13097,
          "rate": 0.6999625888514778
        },
        "validation": {
          "rows": 2807,
          "rate": 0.15001870557426114
        },
        "test": {
          "rows": 2807,
          "rate": 0.15001870557426114
        },
        "strategy": "Stratified random 70/15/15 split"
      },
      "preparation": {
        "numeric_features": [
          "white_rating",
          "black_rating",
          "rating_difference",
          "mean_rating",
          "base_minutes",
          "increment_seconds",
          "opening_ply"
        ],
        "categorical_features": [
          "rated",
          "opening_eco"
        ],
        "excluded_features": [
          "id",
          "white_id",
          "black_id",
          "moves",
          "turns",
          "victory_status",
          "last_move_at",
          "created_at",
          "opening_name"
        ],
        "feature_selection": "Draws are outside this binary prototype. Game/player IDs, full moves, turn count, finish time, and victory status are excluded; opening ECO is retained as early-game context.",
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
          "accuracy": 0.5233345208407553,
          "balanced_accuracy": 0.5,
          "precision": 0.5233345208407553,
          "recall": 1.0,
          "f1": 0.6870907390084191,
          "roc_auc": 0.5,
          "average_precision": 0.5233345208407553,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 0,
            "fp": 1338,
            "fn": 0,
            "tp": 1469
          }
        },
        {
          "model": "Logistic regression",
          "accuracy": 0.6451727823298896,
          "balanced_accuracy": 0.6451647450397401,
          "precision": 0.6661981728742095,
          "recall": 0.6453369639210347,
          "f1": 0.6556016597510373,
          "roc_auc": 0.7156821444888432,
          "average_precision": 0.7242350630013304,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 863,
            "fp": 475,
            "fn": 521,
            "tp": 948
          }
        },
        {
          "model": "Random forest",
          "accuracy": 0.6473102956893481,
          "balanced_accuracy": 0.6494396908302222,
          "precision": 0.684942084942085,
          "recall": 0.6038121170864533,
          "f1": 0.6418234442836469,
          "roc_auc": 0.7253559105418306,
          "average_precision": 0.7382545575478705,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 930,
            "fp": 408,
            "fn": 582,
            "tp": 887
          }
        },
        {
          "model": "Histogram gradient boosting",
          "accuracy": 0.6473102956893481,
          "balanced_accuracy": 0.6474068975061078,
          "precision": 0.6690190543401553,
          "recall": 0.6453369639210347,
          "f1": 0.656964656964657,
          "roc_auc": 0.7210702805666891,
          "average_precision": 0.7319036111017141,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 869,
            "fp": 469,
            "fn": 521,
            "tp": 948
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
          "n_estimators": 250,
          "min_samples_leaf": 2,
          "max_features": 0.5,
          "max_depth": 8
        },
        "best_cv_score": 0.7297029542221751,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 0.7297029542221751,
            "std_cv_score": 0.007015671147845564,
            "train_score": 0.7973866364981366,
            "parameters": {
              "n_estimators": 250,
              "min_samples_leaf": 2,
              "max_features": 0.5,
              "max_depth": 8
            }
          },
          {
            "rank": 2,
            "mean_cv_score": 0.7277105216295773,
            "std_cv_score": 0.0064456454138562096,
            "train_score": 0.7857085390503691,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 10,
              "max_features": 0.5,
              "max_depth": 8
            }
          },
          {
            "rank": 3,
            "mean_cv_score": 0.7246668336361367,
            "std_cv_score": 0.011579106464450081,
            "train_score": 0.7541342568417871,
            "parameters": {
              "n_estimators": 250,
              "min_samples_leaf": 20,
              "max_features": "sqrt",
              "max_depth": null
            }
          },
          {
            "rank": 4,
            "mean_cv_score": 0.724150425284597,
            "std_cv_score": 0.005554865370135199,
            "train_score": 0.8366745933076846,
            "parameters": {
              "n_estimators": 600,
              "min_samples_leaf": 10,
              "max_features": 0.5,
              "max_depth": 12
            }
          },
          {
            "rank": 5,
            "mean_cv_score": 0.7239291870492433,
            "std_cv_score": 0.006707059064228001,
            "train_score": 0.9571676038087846,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 2,
              "max_features": 0.8,
              "max_depth": 16
            }
          },
          {
            "rank": 6,
            "mean_cv_score": 0.7228077048764072,
            "std_cv_score": 0.011784795766335319,
            "train_score": 0.752304323687312,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 20,
              "max_features": "sqrt",
              "max_depth": 16
            }
          }
        ],
        "selected_threshold": 0.335,
        "threshold_candidates": [
          {
            "threshold": 0.1,
            "precision": 0.5267120831839369,
            "recall": 1.0,
            "f1": 0.6899953029591357
          },
          {
            "threshold": 0.15000000000000002,
            "precision": 0.5372203887055372,
            "recall": 0.9972770592239619,
            "f1": 0.6982840800762631
          },
          {
            "threshold": 0.2,
            "precision": 0.5466918714555765,
            "recall": 0.9843430905377808,
            "f1": 0.7029654837141468
          },
          {
            "threshold": 0.25,
            "precision": 0.5662410215482842,
            "recall": 0.9659632402995235,
            "f1": 0.7139622641509434
          },
          {
            "threshold": 0.30000000000000004,
            "precision": 0.5877342419080068,
            "recall": 0.9394145677331518,
            "f1": 0.7230809536285041
          },
          {
            "threshold": 0.335,
            "precision": 0.6017977528089887,
            "recall": 0.911504424778761,
            "f1": 0.7249593936112615
          },
          {
            "threshold": 0.35,
            "precision": 0.6057824690224873,
            "recall": 0.89857045609258,
            "f1": 0.7236842105263158
          },
          {
            "threshold": 0.4,
            "precision": 0.6181818181818182,
            "recall": 0.8563648740639891,
            "f1": 0.7180365296803652
          },
          {
            "threshold": 0.45000000000000007,
            "precision": 0.6366090712742981,
            "recall": 0.8025867937372362,
            "f1": 0.7100271002710027
          },
          {
            "threshold": 0.5,
            "precision": 0.6961628817541112,
            "recall": 0.6051735874744725,
            "f1": 0.6474872541879096
          },
          {
            "threshold": 0.55,
            "precision": 0.7314285714285714,
            "recall": 0.5228046289993192,
            "f1": 0.6097657800714569
          },
          {
            "threshold": 0.6,
            "precision": 0.7590361445783133,
            "recall": 0.42886317222600406,
            "f1": 0.548064375815572
          },
          {
            "threshold": 0.65,
            "precision": 0.7980295566502463,
            "recall": 0.33083730428863173,
            "f1": 0.46775745909528393
          },
          {
            "threshold": 0.7,
            "precision": 0.8141414141414142,
            "recall": 0.2743362831858407,
            "f1": 0.4103869653767821
          },
          {
            "threshold": 0.75,
            "precision": 0.8430232558139535,
            "recall": 0.1974132062627638,
            "f1": 0.31991174848317705
          },
          {
            "threshold": 0.8,
            "precision": 0.8672985781990521,
            "recall": 0.12457454050374404,
            "f1": 0.21785714285714286
          },
          {
            "threshold": 0.85,
            "precision": 0.9015151515151515,
            "recall": 0.08100748808713411,
            "f1": 0.1486570893191755
          },
          {
            "threshold": 0.9,
            "precision": 0.8875,
            "recall": 0.04833219877467665,
            "f1": 0.09167204648160103
          }
        ]
      },
      "test": {
        "metrics": {
          "accuracy": 0.6387602422515141,
          "balanced_accuracy": 0.6253417667164244,
          "precision": 0.6021553659631792,
          "recall": 0.9128658951667801,
          "f1": 0.7256493506493507,
          "roc_auc": 0.732864602889207,
          "average_precision": 0.7477219837503833,
          "threshold": 0.335,
          "confusion_matrix": {
            "tn": 452,
            "fp": 886,
            "fn": 128,
            "tp": 1341
          }
        },
        "roc_curve": [
          {
            "x": 0.0,
            "y": 0.0
          },
          {
            "x": 0.0037369207772795215,
            "y": 0.02450646698434309
          },
          {
            "x": 0.008221225710014948,
            "y": 0.07556160653505786
          },
          {
            "x": 0.013452914798206279,
            "y": 0.11640571817562968
          },
          {
            "x": 0.017937219730941704,
            "y": 0.1484002722940776
          },
          {
            "x": 0.025411061285500747,
            "y": 0.16678012253233493
          },
          {
            "x": 0.030642750373692077,
            "y": 0.19196732471068753
          },
          {
            "x": 0.03587443946188341,
            "y": 0.21034717494894487
          },
          {
            "x": 0.04035874439461883,
            "y": 0.23008849557522124
          },
          {
            "x": 0.04484304932735426,
            "y": 0.24438393464942137
          },
          {
            "x": 0.04932735426008968,
            "y": 0.2586793737236215
          },
          {
            "x": 0.05455904334828102,
            "y": 0.27297481279782165
          },
          {
            "x": 0.06053811659192825,
            "y": 0.28046289993192647
          },
          {
            "x": 0.06726457399103139,
            "y": 0.292716133424098
          },
          {
            "x": 0.07399103139013453,
            "y": 0.31041524846834584
          },
          {
            "x": 0.08071748878923767,
            "y": 0.3206262763784888
          },
          {
            "x": 0.08744394618834081,
            "y": 0.33968686181075564
          },
          {
            "x": 0.09417040358744394,
            "y": 0.35534377127297484
          },
          {
            "x": 0.10239162929745889,
            "y": 0.359428182437032
          },
          {
            "x": 0.10986547085201794,
            "y": 0.36963921034717495
          },
          {
            "x": 0.11509715994020926,
            "y": 0.38393464942137506
          },
          {
            "x": 0.12257100149476831,
            "y": 0.39414567733151806
          },
          {
            "x": 0.13228699551569506,
            "y": 0.4016337644656229
          },
          {
            "x": 0.13901345291479822,
            "y": 0.41252552756977534
          },
          {
            "x": 0.14648729446935724,
            "y": 0.426140231449966
          },
          {
            "x": 0.1517189835575486,
            "y": 0.4397549353301566
          },
          {
            "x": 0.16068759342301944,
            "y": 0.45268890401633766
          },
          {
            "x": 0.16741405082212257,
            "y": 0.46698434309053777
          },
          {
            "x": 0.1726457399103139,
            "y": 0.47991831177671884
          },
          {
            "x": 0.18236173393124067,
            "y": 0.48876786929884275
          },
          {
            "x": 0.1898355754857997,
            "y": 0.49693669162695714
          },
          {
            "x": 0.19730941704035873,
            "y": 0.5091899251191286
          },
          {
            "x": 0.2062780269058296,
            "y": 0.517358747447243
          },
          {
            "x": 0.21449925261584454,
            "y": 0.5268890401633765
          },
          {
            "x": 0.22122571001494767,
            "y": 0.5343771272974813
          },
          {
            "x": 0.22869955156950672,
            "y": 0.5452688904016337
          },
          {
            "x": 0.242152466367713,
            "y": 0.5568413886997958
          },
          {
            "x": 0.24962630792227206,
            "y": 0.5697753573859768
          },
          {
            "x": 0.2600896860986547,
            "y": 0.5759019741320627
          },
          {
            "x": 0.26681614349775784,
            "y": 0.5799863852961198
          },
          {
            "x": 0.2742899850523169,
            "y": 0.5847515316541865
          },
          {
            "x": 0.2802690582959641,
            "y": 0.5908781484002723
          },
          {
            "x": 0.28475336322869954,
            "y": 0.5997277059223962
          },
          {
            "x": 0.28998505231689087,
            "y": 0.6085772634445201
          },
          {
            "x": 0.29596412556053814,
            "y": 0.6153846153846154
          },
          {
            "x": 0.30194319880418535,
            "y": 0.6235534377127298
          },
          {
            "x": 0.3086696562032885,
            "y": 0.6337644656228727
          },
          {
            "x": 0.32585949177877427,
            "y": 0.6460176991150443
          },
          {
            "x": 0.3325859491778774,
            "y": 0.6569094622191968
          },
          {
            "x": 0.34080717488789236,
            "y": 0.6664397549353301
          },
          {
            "x": 0.3482810164424514,
            "y": 0.6746085772634445
          },
          {
            "x": 0.3579970104633782,
            "y": 0.6807351940095303
          },
          {
            "x": 0.36696562032884905,
            "y": 0.6916269571136828
          },
          {
            "x": 0.3759342301943199,
            "y": 0.7004765146358066
          },
          {
            "x": 0.3811659192825112,
            "y": 0.7066031313818925
          },
          {
            "x": 0.38938714499252614,
            "y": 0.7127297481279782
          },
          {
            "x": 0.398355754857997,
            "y": 0.717494894486045
          },
          {
            "x": 0.4080717488789238,
            "y": 0.7263444520081688
          },
          {
            "x": 0.41778774289985054,
            "y": 0.7311095983662356
          },
          {
            "x": 0.4252615844544096,
            "y": 0.7392784206943499
          },
          {
            "x": 0.43871449925261585,
            "y": 0.7460857726344452
          },
          {
            "x": 0.45067264573991034,
            "y": 0.7535738597685501
          },
          {
            "x": 0.4581464872944694,
            "y": 0.7631041524846834
          },
          {
            "x": 0.4633781763826607,
            "y": 0.7726344452008169
          },
          {
            "x": 0.47384155455904337,
            "y": 0.7814840027229408
          },
          {
            "x": 0.4828101644245142,
            "y": 0.7862491490810075
          },
          {
            "x": 0.4910313901345291,
            "y": 0.7937372362151123
          },
          {
            "x": 0.5007473841554559,
            "y": 0.7991831177671885
          },
          {
            "x": 0.5097159940209267,
            "y": 0.8093941456773315
          },
          {
            "x": 0.5201793721973094,
            "y": 0.8162014976174268
          },
          {
            "x": 0.5336322869955157,
            "y": 0.8257317903335603
          },
          {
            "x": 0.5411061285500748,
            "y": 0.8339006126616746
          },
          {
            "x": 0.547085201793722,
            "y": 0.8434309053778081
          },
          {
            "x": 0.5560538116591929,
            "y": 0.853641933287951
          },
          {
            "x": 0.5672645739910314,
            "y": 0.8590878148400273
          },
          {
            "x": 0.5874439461883408,
            "y": 0.8645336963921034
          },
          {
            "x": 0.5964125560538116,
            "y": 0.8706603131381893
          },
          {
            "x": 0.600896860986547,
            "y": 0.8761061946902655
          },
          {
            "x": 0.609118086696562,
            "y": 0.8835942818243703
          },
          {
            "x": 0.6165919282511211,
            "y": 0.8897208985704561
          },
          {
            "x": 0.6285500747384155,
            "y": 0.89857045609258
          },
          {
            "x": 0.6420029895366218,
            "y": 0.9046970728386657
          },
          {
            "x": 0.6599402092675636,
            "y": 0.910142954390742
          },
          {
            "x": 0.6696562032884903,
            "y": 0.9149081007488087
          },
          {
            "x": 0.680119581464873,
            "y": 0.9189925119128659
          },
          {
            "x": 0.7062780269058296,
            "y": 0.9237576582709326
          },
          {
            "x": 0.7197309417040358,
            "y": 0.9305650102110279
          },
          {
            "x": 0.7376681614349776,
            "y": 0.9366916269571137
          },
          {
            "x": 0.7511210762331838,
            "y": 0.9441797140912185
          },
          {
            "x": 0.7668161434977578,
            "y": 0.9489448604492853
          },
          {
            "x": 0.7877428998505231,
            "y": 0.9543907420013614
          },
          {
            "x": 0.7944693572496263,
            "y": 0.9591558883594282
          },
          {
            "x": 0.8176382660687593,
            "y": 0.9659632402995235
          },
          {
            "x": 0.8303437967115097,
            "y": 0.9734513274336283
          },
          {
            "x": 0.8415545590433483,
            "y": 0.9775357385976855
          },
          {
            "x": 0.8550074738415545,
            "y": 0.9829816201497618
          },
          {
            "x": 0.8796711509715994,
            "y": 0.9870660313138189
          },
          {
            "x": 0.9237668161434978,
            "y": 0.9918311776718857
          },
          {
            "x": 0.9641255605381166,
            "y": 0.9959155888359428
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
            "x": 0.01701837985023826,
            "y": 0.8928571428571429
          },
          {
            "x": 0.03471749489448604,
            "y": 0.8947368421052632
          },
          {
            "x": 0.051735874744724304,
            "y": 0.8941176470588236
          },
          {
            "x": 0.07011572498298162,
            "y": 0.911504424778761
          },
          {
            "x": 0.08917631041524847,
            "y": 0.9225352112676056
          },
          {
            "x": 0.10483321987746766,
            "y": 0.9058823529411765
          },
          {
            "x": 0.12253233492171545,
            "y": 0.9090909090909091
          },
          {
            "x": 0.13886997957794417,
            "y": 0.9026548672566371
          },
          {
            "x": 0.15452688904016337,
            "y": 0.8901960784313725
          },
          {
            "x": 0.1688223281143635,
            "y": 0.8763250883392226
          },
          {
            "x": 0.18515997277059223,
            "y": 0.8745980707395499
          },
          {
            "x": 0.20149761742682096,
            "y": 0.8731563421828908
          },
          {
            "x": 0.21443158611300203,
            "y": 0.8583106267029973
          },
          {
            "x": 0.2314499659632403,
            "y": 0.8585858585858586
          },
          {
            "x": 0.24642614023144996,
            "y": 0.8537735849056604
          },
          {
            "x": 0.2614023144996596,
            "y": 0.8495575221238938
          },
          {
            "x": 0.2756977535738598,
            "y": 0.84375
          },
          {
            "x": 0.28727025187202176,
            "y": 0.8290766208251473
          },
          {
            "x": 0.3008849557522124,
            "y": 0.8230912476722533
          },
          {
            "x": 0.3151803948264125,
            "y": 0.8194690265486726
          },
          {
            "x": 0.3287950987066031,
            "y": 0.8145025295109612
          },
          {
            "x": 0.3430905377808033,
            "y": 0.8115942028985508
          },
          {
            "x": 0.35602450646698436,
            "y": 0.8046153846153846
          },
          {
            "x": 0.3662355343771273,
            "y": 0.7935103244837758
          },
          {
            "x": 0.37848876786929886,
            "y": 0.7864214992927864
          },
          {
            "x": 0.39006126616746084,
            "y": 0.7795918367346939
          },
          {
            "x": 0.40095302927161336,
            "y": 0.7709424083769634
          },
          {
            "x": 0.41252552756977534,
            "y": 0.7651515151515151
          },
          {
            "x": 0.4247787610619469,
            "y": 0.7609756097560976
          },
          {
            "x": 0.4397549353301566,
            "y": 0.7608951707891637
          },
          {
            "x": 0.45268890401633766,
            "y": 0.758266818700114
          },
          {
            "x": 0.46426140231449964,
            "y": 0.7527593818984547
          },
          {
            "x": 0.4785568413886998,
            "y": 0.7526766595289079
          },
          {
            "x": 0.48876786929884275,
            "y": 0.7455867082035307
          },
          {
            "x": 0.5003403675970047,
            "y": 0.7416750756811302
          },
          {
            "x": 0.5112321307011573,
            "y": 0.7362745098039216
          },
          {
            "x": 0.5228046289993192,
            "y": 0.7321258341277407
          },
          {
            "x": 0.5330156569094622,
            "y": 0.7270194986072424
          },
          {
            "x": 0.5445881552076243,
            "y": 0.7239819004524887
          },
          {
            "x": 0.5541184479237576,
            "y": 0.7184466019417476
          },
          {
            "x": 0.5650102110279102,
            "y": 0.7142857142857143
          },
          {
            "x": 0.5752212389380531,
            "y": 0.709487825356843
          },
          {
            "x": 0.582709326072158,
            "y": 0.7022149302707137
          },
          {
            "x": 0.5936010891763104,
            "y": 0.6992782678428228
          },
          {
            "x": 0.6058543226684819,
            "y": 0.6974921630094044
          },
          {
            "x": 0.6181075561606535,
            "y": 0.696319018404908
          },
          {
            "x": 0.628999319264806,
            "y": 0.6936936936936937
          },
          {
            "x": 0.6371681415929203,
            "y": 0.6882352941176471
          },
          {
            "x": 0.6473791695030633,
            "y": 0.6846652267818575
          },
          {
            "x": 0.6603131381892444,
            "y": 0.6840620592383639
          },
          {
            "x": 0.6698434309053778,
            "y": 0.6804979253112033
          },
          {
            "x": 0.6780122532334921,
            "y": 0.6757123473541384
          },
          {
            "x": 0.6902654867256637,
            "y": 0.6750998668442078
          },
          {
            "x": 0.7004765146358066,
            "y": 0.6721097322011756
          },
          {
            "x": 0.7100068073519401,
            "y": 0.6685897435897435
          },
          {
            "x": 0.717494894486045,
            "y": 0.663727959697733
          },
          {
            "x": 0.7263444520081688,
            "y": 0.6602722772277227
          },
          {
            "x": 0.7351940095302927,
            "y": 0.6565349544072948
          },
          {
            "x": 0.7447243022464262,
            "y": 0.6535244922341696
          },
          {
            "x": 0.7522123893805309,
            "y": 0.6492361927144535
          },
          {
            "x": 0.7610619469026548,
            "y": 0.6462427745664739
          },
          {
            "x": 0.7733151803948264,
            "y": 0.646188850967008
          },
          {
            "x": 0.7835262083049693,
            "y": 0.6440962506994964
          },
          {
            "x": 0.7903335602450646,
            "y": 0.6396694214876033
          },
          {
            "x": 0.7985023825731791,
            "y": 0.636462289744981
          },
          {
            "x": 0.8093941456773315,
            "y": 0.635489043292357
          },
          {
            "x": 0.8182437031994554,
            "y": 0.6326315789473684
          },
          {
            "x": 0.8270932607215793,
            "y": 0.6298600311041991
          },
          {
            "x": 0.8366235534377128,
            "y": 0.6280020439448135
          },
          {
            "x": 0.8481960517358748,
            "y": 0.6277078085642317
          },
          {
            "x": 0.8570456092579987,
            "y": 0.6254346746150025
          },
          {
            "x": 0.8624914908100749,
            "y": 0.6204701273261508
          },
          {
            "x": 0.8686181075561606,
            "y": 0.6164251207729469
          },
          {
            "x": 0.8781484002722941,
            "y": 0.6148713060057197
          },
          {
            "x": 0.8883594281824371,
            "y": 0.6138287864534336
          },
          {
            "x": 0.8965282505105514,
            "y": 0.6114206128133705
          },
          {
            "x": 0.9033356024506467,
            "y": 0.6076007326007326
          },
          {
            "x": 0.910142954390742,
            "y": 0.6041572525982829
          },
          {
            "x": 0.9155888359428183,
            "y": 0.6001784917447568
          },
          {
            "x": 0.9210347174948945,
            "y": 0.5962979286029088
          },
          {
            "x": 0.9237576582709326,
            "y": 0.5905134899912968
          },
          {
            "x": 0.9292035398230089,
            "y": 0.5868443680137575
          },
          {
            "x": 0.9346494213750851,
            "y": 0.5832625318606627
          },
          {
            "x": 0.9414567733151804,
            "y": 0.5806045340050378
          },
          {
            "x": 0.9469026548672567,
            "y": 0.5771784232365145
          },
          {
            "x": 0.9516678012253234,
            "y": 0.5729508196721311
          },
          {
            "x": 0.9577944179714091,
            "y": 0.570097244732577
          },
          {
            "x": 0.9632402995234853,
            "y": 0.5669070512820513
          },
          {
            "x": 0.9673247106875426,
            "y": 0.5629952456418383
          },
          {
            "x": 0.9761742682096665,
            "y": 0.5616921269095182
          },
          {
            "x": 0.9816201497617427,
            "y": 0.5586981790003874
          },
          {
            "x": 0.9857045609257998,
            "y": 0.5550019164430816
          },
          {
            "x": 0.988427501701838,
            "y": 0.5506257110352674
          },
          {
            "x": 0.9904697072838666,
            "y": 0.5459662288930581
          },
          {
            "x": 0.9918311776718857,
            "y": 0.5408314773570898
          },
          {
            "x": 0.9938733832539143,
            "y": 0.5363703159441587
          },
          {
            "x": 0.9952348536419333,
            "y": 0.5316363636363637
          },
          {
            "x": 0.998638529611981,
            "y": 0.5280777537796977
          },
          {
            "x": 1.0,
            "y": 0.5233345208407553
          }
        ],
        "feature_importance": [
          {
            "feature": "rating_difference",
            "importance_mean": 0.17893307680763304,
            "importance_std": 0.01572404141900389
          },
          {
            "feature": "black_rating",
            "importance_mean": 0.014555071414542542,
            "importance_std": 0.002245351835284776
          },
          {
            "feature": "white_rating",
            "importance_mean": 0.009746666950345984,
            "importance_std": 0.0032241086985697375
          },
          {
            "feature": "mean_rating",
            "importance_mean": 0.001884161975281018,
            "importance_std": 0.0008646829298360728
          },
          {
            "feature": "rated",
            "importance_mean": 0.001595994412792845,
            "importance_std": 0.0006731255551666358
          },
          {
            "feature": "opening_eco",
            "importance_mean": 0.0013118530104067883,
            "importance_std": 0.001010351829225809
          },
          {
            "feature": "increment_seconds",
            "importance_mean": 0.0007120044924136815,
            "importance_std": 0.0005109221710634258
          },
          {
            "feature": "base_minutes",
            "importance_mean": -5.190700734974962e-05,
            "importance_std": 0.000579011889869739
          },
          {
            "feature": "opening_ply",
            "importance_mean": -0.0006826298078936865,
            "importance_std": 0.0010265385750412655
          }
        ]
      },
      "interpretation": "Average precision is 0.748 against a 0.523 prevalence baseline; this measures ranking on the held-out records, not causality.",
      "limitations": [
        "Removing draws changes the question and prevents three-outcome interpretation.",
        "Repeated players can occur across random partitions even though identity fields are excluded.",
        "Opening ECO is known only after initial moves, so this is early-game rather than strictly pre-game prediction.",
        "Online platform population, time-control mix, and historical period may not generalise."
      ]
    }
  ]
};
