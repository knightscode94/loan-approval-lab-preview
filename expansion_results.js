window.EXPANSION_RESULTS = {
  "metadata": {
    "generated_at_utc": "2026-07-31T13:21:03.678891+00:00",
    "random_state": 42,
    "python": "3.12.10",
    "scikit_learn": "1.8.0",
    "pandas": "3.0.1",
    "search_iterations_per_study": 6
  },
  "studies": [
    {
      "id": "mtg",
      "title": "Magic card rarity classification",
      "type": "classification",
      "target": "Rare / Mythic",
      "business_question": "Can printed card mechanics identify standard cards assigned Rare or Mythic rarity rather than Common or Uncommon?",
      "business_use": "Support set-design audits and rarity consistency review; never infer secondary-market value from rarity probability.",
      "primary_metric": "Average precision",
      "source_file": "all_mtg_cards.csv",
      "runtime_seconds": 336.11,
      "dataset": {
        "rows": 93243,
        "columns": 12,
        "features_used": 11,
        "missing_total": 190951,
        "duplicate_rows": 83896,
        "missing_by_column": {
          "cmc": 0,
          "power": 49692,
          "toughness": 49518,
          "loyalty": 91741,
          "color_count": 0,
          "identity_count": 0,
          "subtype_count": 0,
          "is_legendary": 0,
          "layout": 0,
          "card_family": 0,
          "colour_identity": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "cmc",
            "count": 1728,
            "rate": 0.018532222257971107,
            "minimum": 0.0,
            "maximum": 1000000.0,
            "clip_low": 0.0,
            "clip_high": 8.0
          },
          {
            "feature": "power",
            "count": 791,
            "rate": 0.008483210535911542,
            "minimum": -1.0,
            "maximum": 99.0,
            "clip_low": 0.0,
            "clip_high": 8.0
          },
          {
            "feature": "toughness",
            "count": 849,
            "rate": 0.009105241144107332,
            "minimum": -1.0,
            "maximum": 99.0,
            "clip_low": 0.0,
            "clip_high": 8.0
          },
          {
            "feature": "loyalty",
            "count": 1,
            "rate": 1.0724665658548094e-05,
            "minimum": 0.0,
            "maximum": 20.0,
            "clip_low": 2.0,
            "clip_high": 7.0
          },
          {
            "feature": "color_count",
            "count": 31916,
            "rate": 0.342288429158221,
            "minimum": 0.0,
            "maximum": 5.0,
            "clip_low": 0.0,
            "clip_high": 3.0
          },
          {
            "feature": "identity_count",
            "count": 27492,
            "rate": 0.29484250828480424,
            "minimum": 0.0,
            "maximum": 5.0,
            "clip_low": 0.0,
            "clip_high": 3.0
          },
          {
            "feature": "subtype_count",
            "count": 0,
            "rate": 0.0,
            "minimum": 0.0,
            "maximum": 4.0,
            "clip_low": 0.0,
            "clip_high": 3.0
          },
          {
            "feature": "is_legendary",
            "count": 12013,
            "rate": 0.12883540855613826,
            "minimum": 0.0,
            "maximum": 1.0,
            "clip_low": 0.0,
            "clip_high": 1.0
          }
        ],
        "categories": {
          "layout": [
            {
              "value": "normal",
              "count": 88472
            },
            {
              "value": "transform",
              "count": 1714
            },
            {
              "value": "adventure",
              "count": 662
            },
            {
              "value": "modal_dfc",
              "count": 546
            },
            {
              "value": "split",
              "count": 352
            },
            {
              "value": "planar",
              "count": 269
            },
            {
              "value": "saga",
              "count": 258
            },
            {
              "value": "aftermath",
              "count": 190
            },
            {
              "value": "mutate",
              "count": 148
            },
            {
              "value": "vanguard",
              "count": 119
            },
            {
              "value": "reversible_card",
              "count": 94
            },
            {
              "value": "flip",
              "count": 84
            },
            {
              "value": "scheme",
              "count": 70
            },
            {
              "value": "leveler",
              "count": 59
            },
            {
              "value": "meld",
              "count": 51
            },
            {
              "value": "prototype",
              "count": 44
            },
            {
              "value": "class",
              "count": 37
            },
            {
              "value": "host",
              "count": 30
            },
            {
              "value": "case",
              "count": 26
            },
            {
              "value": "augment",
              "count": 18
            }
          ],
          "card_family": [
            {
              "value": "Creature",
              "count": 31726
            },
            {
              "value": "Sorcery",
              "count": 10071
            },
            {
              "value": "Instant",
              "count": 10016
            },
            {
              "value": "Legendary Creature",
              "count": 8617
            },
            {
              "value": "Enchantment",
              "count": 8454
            },
            {
              "value": "Artifact",
              "count": 6633
            },
            {
              "value": "Land",
              "count": 5946
            },
            {
              "value": "Basic Land",
              "count": 4158
            },
            {
              "value": "Artifact Creature",
              "count": 2642
            },
            {
              "value": "Legendary Planeswalker",
              "count": 1521
            },
            {
              "value": "Legendary Artifact",
              "count": 741
            },
            {
              "value": "Enchantment Creature",
              "count": 341
            },
            {
              "value": "Legendary Land",
              "count": 340
            },
            {
              "value": "Legendary Artifact Creature",
              "count": 268
            },
            {
              "value": "Legendary Enchantment",
              "count": 251
            },
            {
              "value": "Plane",
              "count": 244
            },
            {
              "value": "Legendary Enchantment Creature",
              "count": 187
            },
            {
              "value": "Vanguard",
              "count": 119
            },
            {
              "value": "Artifact Land",
              "count": 110
            },
            {
              "value": "Snow Creature",
              "count": 98
            },
            {
              "value": "World Enchantment",
              "count": 60
            },
            {
              "value": "Basic Snow Land",
              "count": 59
            },
            {
              "value": "Scheme",
              "count": 58
            },
            {
              "value": "Battle",
              "count": 52
            },
            {
              "value": "Tribal Instant",
              "count": 51
            },
            {
              "value": "Stickers",
              "count": 48
            },
            {
              "value": "Tribal Enchantment",
              "count": 41
            },
            {
              "value": "Snow Land",
              "count": 39
            },
            {
              "value": "Tribal Sorcery",
              "count": 35
            },
            {
              "value": "Conspiracy",
              "count": 27
            },
            {
              "value": "Phenomenon",
              "count": 25
            },
            {
              "value": "Host Creature",
              "count": 24
            },
            {
              "value": "Legendary Sorcery",
              "count": 23
            },
            {
              "value": "Snow Sorcery",
              "count": 22
            },
            {
              "value": "Legendary Enchantment Artifact",
              "count": 18
            },
            {
              "value": "Legendary Snow Creature",
              "count": 18
            },
            {
              "value": "Hero",
              "count": 16
            },
            {
              "value": "Snow Artifact",
              "count": 14
            },
            {
              "value": "Ongoing Scheme",
              "count": 12
            },
            {
              "value": "Legendary Snow Land",
              "count": 10
            },
            {
              "value": "Snow Enchantment",
              "count": 9
            },
            {
              "value": "Snow Artifact Creature",
              "count": 8
            },
            {
              "value": "Tribal Artifact",
              "count": 8
            },
            {
              "value": "Summon",
              "count": 7
            },
            {
              "value": "Enchantment Land",
              "count": 7
            },
            {
              "value": "Land Creature",
              "count": 7
            },
            {
              "value": "Snow Instant",
              "count": 7
            },
            {
              "value": "Legendary Artifact Land",
              "count": 6
            },
            {
              "value": "Host Artifact Creature",
              "count": 6
            },
            {
              "value": "Legendary Instant",
              "count": 5
            },
            {
              "value": "Hero Artifact",
              "count": 5
            },
            {
              "value": "Instant Creature",
              "count": 4
            },
            {
              "value": "Legendary Snow Artifact",
              "count": 4
            },
            {
              "value": "Legendary Snow Enchantment",
              "count": 3
            },
            {
              "value": "Summon Dragon",
              "count": 3
            },
            {
              "value": "Summon Wolf",
              "count": 2
            },
            {
              "value": "Elemental Instant",
              "count": 2
            },
            {
              "value": "Planeswalker",
              "count": 2
            },
            {
              "value": "Kindred Enchantment",
              "count": 2
            },
            {
              "value": "Summon Jaguar",
              "count": 2
            },
            {
              "value": "Artifact Enchantment",
              "count": 2
            },
            {
              "value": "Summon Goblin",
              "count": 1
            },
            {
              "value": "Summon Knights",
              "count": 1
            },
            {
              "value": "Summon Legend",
              "count": 1
            },
            {
              "value": "Legendary Universewalker",
              "count": 1
            },
            {
              "value": "Scariest Creature You'll Ever See",
              "count": 1
            },
            {
              "value": "Eaturecray",
              "count": 1
            },
            {
              "value": "instant",
              "count": 1
            }
          ],
          "colour_identity": [
            {
              "value": "['G']",
              "count": 13461
            },
            {
              "value": "['B']",
              "count": 13219
            },
            {
              "value": "['W']",
              "count": 13089
            },
            {
              "value": "['R']",
              "count": 13060
            },
            {
              "value": "['U']",
              "count": 12922
            },
            {
              "value": "Colourless",
              "count": 10384
            },
            {
              "value": "['B', 'U']",
              "count": 1525
            },
            {
              "value": "['U', 'W']",
              "count": 1504
            },
            {
              "value": "['G', 'W']",
              "count": 1496
            },
            {
              "value": "['B', 'R']",
              "count": 1473
            },
            {
              "value": "['G', 'R']",
              "count": 1425
            },
            {
              "value": "['R', 'W']",
              "count": 1398
            },
            {
              "value": "['G', 'U']",
              "count": 1349
            },
            {
              "value": "['R', 'U']",
              "count": 1321
            },
            {
              "value": "['B', 'W']",
              "count": 1305
            },
            {
              "value": "['B', 'G']",
              "count": 1291
            },
            {
              "value": "['B', 'G', 'R', 'U', 'W']",
              "count": 397
            },
            {
              "value": "['B', 'R', 'U']",
              "count": 397
            },
            {
              "value": "['G', 'R', 'W']",
              "count": 339
            },
            {
              "value": "['B', 'U', 'W']",
              "count": 293
            },
            {
              "value": "['G', 'U', 'W']",
              "count": 281
            },
            {
              "value": "['B', 'G', 'R']",
              "count": 270
            },
            {
              "value": "['B', 'R', 'W']",
              "count": 212
            },
            {
              "value": "['B', 'G', 'U']",
              "count": 206
            },
            {
              "value": "['R', 'U', 'W']",
              "count": 202
            },
            {
              "value": "['B', 'G', 'W']",
              "count": 180
            },
            {
              "value": "['G', 'R', 'U']",
              "count": 177
            },
            {
              "value": "['B', 'G', 'U', 'W']",
              "count": 23
            },
            {
              "value": "['G', 'R', 'U', 'W']",
              "count": 21
            },
            {
              "value": "['B', 'R', 'U', 'W']",
              "count": 9
            },
            {
              "value": "['B', 'G', 'R', 'W']",
              "count": 7
            },
            {
              "value": "['B', 'G', 'R', 'U']",
              "count": 7
            }
          ]
        },
        "target_summary": {
          "minimum": 0.0,
          "maximum": 1.0,
          "mean": 0.45895134219190714,
          "median": 0.0,
          "std": 0.49831483102166524
        },
        "target_counts": {
          "Common / Uncommon": 50449,
          "Rare / Mythic": 42794
        },
        "positive_label": "Rare / Mythic",
        "negative_label": "Common / Uncommon",
        "positive_rate": 0.45895134219190714
      },
      "audit_interpretation": "Special and Bonus rarities are excluded as semantically ambiguous. Reprints create repeated designs, so name-grouping prevents the same named card crossing partitions.",
      "split": {
        "train": {
          "rows": 65468,
          "rate": 0.7021224113338267
        },
        "validation": {
          "rows": 13940,
          "rate": 0.14950183928016045
        },
        "test": {
          "rows": 13835,
          "rate": 0.1483757493860129
        },
        "strategy": "Name-grouped 70/15/15 split"
      },
      "preparation": {
        "numeric_features": [
          "cmc",
          "power",
          "toughness",
          "loyalty",
          "color_count",
          "identity_count",
          "subtype_count",
          "is_legendary"
        ],
        "categorical_features": [
          "layout",
          "card_family",
          "colour_identity"
        ],
        "excluded_features": [
          "name",
          "set",
          "number",
          "IDs",
          "artist",
          "text"
        ],
        "feature_selection": "Uses compact mechanical attributes only. Card name, set, collector number, IDs, artist, flavour, and rules text are excluded; all printings of one named card remain in one partition.",
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
          "accuracy": 0.5530846484935438,
          "balanced_accuracy": 0.5,
          "precision": 0.0,
          "recall": 0.0,
          "f1": 0.0,
          "roc_auc": 0.5,
          "average_precision": 0.4469153515064562,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 7710,
            "fp": 0,
            "fn": 6230,
            "tp": 0
          }
        },
        {
          "model": "Logistic regression",
          "accuracy": 0.6941176470588235,
          "balanced_accuracy": 0.6903993687712482,
          "precision": 0.6585483870967742,
          "recall": 0.6553772070626003,
          "f1": 0.6569589702333065,
          "roc_auc": 0.7625790649403642,
          "average_precision": 0.7473237567142995,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 5593,
            "fp": 2117,
            "fn": 2147,
            "tp": 4083
          }
        },
        {
          "model": "Random forest",
          "accuracy": 0.7162123385939742,
          "balanced_accuracy": 0.7071843908288624,
          "precision": 0.7075575027382256,
          "recall": 0.6221508828250402,
          "f1": 0.6621113768363512,
          "roc_auc": 0.7847564398032199,
          "average_precision": 0.7670155457454386,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 6108,
            "fp": 1602,
            "fn": 2354,
            "tp": 3876
          }
        },
        {
          "model": "Histogram gradient boosting",
          "accuracy": 0.7258249641319943,
          "balanced_accuracy": 0.7189401935740414,
          "precision": 0.7096830372692442,
          "recall": 0.6540930979133226,
          "f1": 0.6807550952221851,
          "roc_auc": 0.7977344675464729,
          "average_precision": 0.7862684509553955,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 6043,
            "fp": 1667,
            "fn": 2155,
            "tp": 4075
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
        "best_cv_score": 0.8013684826403104,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 0.8013684826403104,
            "std_cv_score": 0.007262966009664062,
            "train_score": 0.8264469983836615,
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
            "mean_cv_score": 0.7922577093125891,
            "std_cv_score": 0.006927737432965832,
            "train_score": 0.8099442261907314,
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
            "rank": 3,
            "mean_cv_score": 0.789168357100489,
            "std_cv_score": 0.008931712560707671,
            "train_score": 0.8063918831954002,
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
            "mean_cv_score": 0.7882003460472521,
            "std_cv_score": 0.008167799897314509,
            "train_score": 0.8041813925115566,
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
            "mean_cv_score": 0.7842639267683752,
            "std_cv_score": 0.010493938368467416,
            "train_score": 0.7984801562148782,
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
            "rank": 6,
            "mean_cv_score": 0.778953452720246,
            "std_cv_score": 0.011143660015784972,
            "train_score": 0.792020044018153,
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
        "selected_threshold": 0.43500000000000005,
        "threshold_candidates": [
          {
            "threshold": 0.1,
            "precision": 0.47465827061895255,
            "recall": 0.9921348314606742,
            "f1": 0.6421151049241637
          },
          {
            "threshold": 0.15000000000000002,
            "precision": 0.4840839424663994,
            "recall": 0.9886035313001605,
            "f1": 0.6499234949612198
          },
          {
            "threshold": 0.2,
            "precision": 0.49686354378818737,
            "recall": 0.9789727126805778,
            "f1": 0.6591731964333963
          },
          {
            "threshold": 0.25,
            "precision": 0.5280441469151438,
            "recall": 0.9369181380417335,
            "f1": 0.6754223559361259
          },
          {
            "threshold": 0.30000000000000004,
            "precision": 0.5592836558254426,
            "recall": 0.8722311396468699,
            "f1": 0.6815502320331117
          },
          {
            "threshold": 0.35,
            "precision": 0.5991790414101171,
            "recall": 0.7966292134831461,
            "f1": 0.6839385378626059
          },
          {
            "threshold": 0.4,
            "precision": 0.6508247134470226,
            "recall": 0.7473515248796148,
            "f1": 0.6957561267184699
          },
          {
            "threshold": 0.43500000000000005,
            "precision": 0.6821538461538461,
            "recall": 0.7117174959871589,
            "f1": 0.6966221523959152
          },
          {
            "threshold": 0.45000000000000007,
            "precision": 0.6923325784535749,
            "recall": 0.6869983948635634,
            "f1": 0.6896551724137931
          },
          {
            "threshold": 0.5,
            "precision": 0.7125853316996325,
            "recall": 0.6534510433386838,
            "f1": 0.6817382567194172
          },
          {
            "threshold": 0.55,
            "precision": 0.7579012600702334,
            "recall": 0.5889245585874799,
            "f1": 0.662812754042092
          },
          {
            "threshold": 0.6,
            "precision": 0.7911227154046997,
            "recall": 0.534991974317817,
            "f1": 0.638322321172077
          },
          {
            "threshold": 0.65,
            "precision": 0.8103357817418678,
            "recall": 0.4958266452648475,
            "f1": 0.6152160924118701
          },
          {
            "threshold": 0.7,
            "precision": 0.8402016009487103,
            "recall": 0.4548956661316212,
            "f1": 0.5902322190981985
          },
          {
            "threshold": 0.75,
            "precision": 0.8644518272425249,
            "recall": 0.4176565008025682,
            "f1": 0.5632034632034632
          },
          {
            "threshold": 0.8,
            "precision": 0.900398406374502,
            "recall": 0.36276083467094705,
            "f1": 0.517162471395881
          },
          {
            "threshold": 0.85,
            "precision": 0.9212435233160622,
            "recall": 0.2853932584269663,
            "f1": 0.4357843137254902
          },
          {
            "threshold": 0.9,
            "precision": 0.9454042847270214,
            "recall": 0.21958266452648476,
            "f1": 0.3563892145369285
          }
        ]
      },
      "test": {
        "metrics": {
          "accuracy": 0.7165160823997109,
          "balanced_accuracy": 0.7158173682133689,
          "precision": 0.6747006447651213,
          "recall": 0.7090997095837367,
          "f1": 0.6914726242920075,
          "roc_auc": 0.7926577116898704,
          "average_precision": 0.7801081777940445,
          "threshold": 0.43500000000000005,
          "confusion_matrix": {
            "tn": 5518,
            "fp": 2119,
            "fn": 1803,
            "tp": 4395
          }
        },
        "roc_curve": [
          {
            "x": 0.0,
            "y": 0.0
          },
          {
            "x": 0.0,
            "y": 0.012584704743465635
          },
          {
            "x": 0.0,
            "y": 0.023878670538883512
          },
          {
            "x": 0.0,
            "y": 0.04049693449499839
          },
          {
            "x": 0.0,
            "y": 0.05469506292352372
          },
          {
            "x": 0.0018331805682859762,
            "y": 0.06340755082284608
          },
          {
            "x": 0.0018331805682859762,
            "y": 0.0803484995159729
          },
          {
            "x": 0.0023569464449391124,
            "y": 0.09454662794449822
          },
          {
            "x": 0.002487887914102396,
            "y": 0.10971281058405938
          },
          {
            "x": 0.002749770852428964,
            "y": 0.12584704743465633
          },
          {
            "x": 0.0034044781982453844,
            "y": 0.13875443691513392
          },
          {
            "x": 0.0048448343590415084,
            "y": 0.1537592771861891
          },
          {
            "x": 0.005368600235694645,
            "y": 0.17102291061632785
          },
          {
            "x": 0.006154249050674349,
            "y": 0.18231687641174574
          },
          {
            "x": 0.007070839334817337,
            "y": 0.19441755404969344
          },
          {
            "x": 0.009558727248919733,
            "y": 0.2070022587931591
          },
          {
            "x": 0.011260966348042425,
            "y": 0.22039367537915455
          },
          {
            "x": 0.013879795731308105,
            "y": 0.23330106485963215
          },
          {
            "x": 0.017022390991226922,
            "y": 0.24604711197160375
          },
          {
            "x": 0.018724630090349612,
            "y": 0.26556953856082605
          },
          {
            "x": 0.019903103312819168,
            "y": 0.2791222975153275
          },
          {
            "x": 0.02186722535026843,
            "y": 0.2902549209422394
          },
          {
            "x": 0.02343852298022784,
            "y": 0.30138754436915133
          },
          {
            "x": 0.02736676705512636,
            "y": 0.308325266214908
          },
          {
            "x": 0.028545240277595915,
            "y": 0.32203936753791546
          },
          {
            "x": 0.0319497184758413,
            "y": 0.3302678283317199
          },
          {
            "x": 0.0344376063899437,
            "y": 0.3447886414972572
          },
          {
            "x": 0.037318318711535944,
            "y": 0.35785737334624074
          },
          {
            "x": 0.04190127013225088,
            "y": 0.3675379154565989
          },
          {
            "x": 0.05001964122037449,
            "y": 0.3814133591481123
          },
          {
            "x": 0.05787612937017153,
            "y": 0.4015811552113585
          },
          {
            "x": 0.06010213434594736,
            "y": 0.41142303969022265
          },
          {
            "x": 0.06481602723582558,
            "y": 0.41836076153597934
          },
          {
            "x": 0.07777923268299071,
            "y": 0.43788318812520166
          },
          {
            "x": 0.08065994500458296,
            "y": 0.45014520813165537
          },
          {
            "x": 0.08786172580856358,
            "y": 0.46353662471765084
          },
          {
            "x": 0.09558727248919732,
            "y": 0.4804775734107777
          },
          {
            "x": 0.09925363362576928,
            "y": 0.4914488544691836
          },
          {
            "x": 0.11090742438130156,
            "y": 0.5061310100032268
          },
          {
            "x": 0.11850202959277203,
            "y": 0.5235559858018716
          },
          {
            "x": 0.12596569333507923,
            "y": 0.5380767989674088
          },
          {
            "x": 0.1390598402514076,
            "y": 0.5569538560826073
          },
          {
            "x": 0.14390467461044912,
            "y": 0.5663117134559535
          },
          {
            "x": 0.1507136310069399,
            "y": 0.5751855437237818
          },
          {
            "x": 0.1580463532800838,
            "y": 0.58486608583414
          },
          {
            "x": 0.16249836323163547,
            "y": 0.5892223297838012
          },
          {
            "x": 0.17009296844310592,
            "y": 0.5927718618909326
          },
          {
            "x": 0.1753306272096373,
            "y": 0.5982575024201355
          },
          {
            "x": 0.17912792981537254,
            "y": 0.6055179090029041
          },
          {
            "x": 0.20439963336388633,
            "y": 0.6471442400774443
          },
          {
            "x": 0.2130417703286631,
            "y": 0.6569861245563084
          },
          {
            "x": 0.2177556632185413,
            "y": 0.6626331074540174
          },
          {
            "x": 0.22377897080005238,
            "y": 0.6644078735075831
          },
          {
            "x": 0.23438522980227838,
            "y": 0.6710229106163278
          },
          {
            "x": 0.2442058399895247,
            "y": 0.6792513714101323
          },
          {
            "x": 0.26437082624067043,
            "y": 0.6876411745724427
          },
          {
            "x": 0.2688228361922221,
            "y": 0.6999031945788964
          },
          {
            "x": 0.2748461437737331,
            "y": 0.707647628267183
          },
          {
            "x": 0.28859499803587796,
            "y": 0.7174895127460471
          },
          {
            "x": 0.29422548120989916,
            "y": 0.7266860277508874
          },
          {
            "x": 0.3047007987429619,
            "y": 0.7376573088092934
          },
          {
            "x": 0.3136048186460652,
            "y": 0.7445950306550501
          },
          {
            "x": 0.32460390205578105,
            "y": 0.7518554372378187
          },
          {
            "x": 0.3316747413905984,
            "y": 0.755243626976444
          },
          {
            "x": 0.3466020688752128,
            "y": 0.7597612132946112
          },
          {
            "x": 0.37475448474531886,
            "y": 0.7763794772507261
          },
          {
            "x": 0.37789708000523764,
            "y": 0.7834785414649887
          },
          {
            "x": 0.38928898782244337,
            "y": 0.7912229751532752
          },
          {
            "x": 0.4056566714678539,
            "y": 0.7983220393675379
          },
          {
            "x": 0.4209768233599581,
            "y": 0.8060664730558245
          },
          {
            "x": 0.42621448212648944,
            "y": 0.8105840593739916
          },
          {
            "x": 0.4438915804635328,
            "y": 0.8196192320103259
          },
          {
            "x": 0.4660206887521278,
            "y": 0.8370442078089706
          },
          {
            "x": 0.4817336650517219,
            "y": 0.8434979025492094
          },
          {
            "x": 0.5021605342411942,
            "y": 0.8539851565020975
          },
          {
            "x": 0.5231111693073196,
            "y": 0.8686673120361407
          },
          {
            "x": 0.5341102527170355,
            "y": 0.8781865117779929
          },
          {
            "x": 0.5491685216708131,
            "y": 0.8848015488867377
          },
          {
            "x": 0.556894068351447,
            "y": 0.8878670538883511
          },
          {
            "x": 0.5724761031818777,
            "y": 0.8909325588899645
          },
          {
            "x": 0.5792850595783685,
            "y": 0.8949661181026137
          },
          {
            "x": 0.6021998166819432,
            "y": 0.8983543078412392
          },
          {
            "x": 0.615032080659945,
            "y": 0.9051306873184899
          },
          {
            "x": 0.6348042425036009,
            "y": 0.9099709583736689
          },
          {
            "x": 0.646850857666623,
            "y": 0.914972571797354
          },
          {
            "x": 0.6535288725939505,
            "y": 0.9178767344304615
          },
          {
            "x": 0.6654445462878094,
            "y": 0.9232010325911585
          },
          {
            "x": 0.6770983370433417,
            "y": 0.9277186189093256
          },
          {
            "x": 0.7030247479376719,
            "y": 0.9328815747015167
          },
          {
            "x": 0.7288202173628389,
            "y": 0.9435301710229106
          },
          {
            "x": 0.7366767055126359,
            "y": 0.946595676024524
          },
          {
            "x": 0.7457116668849024,
            "y": 0.9501452081316554
          },
          {
            "x": 0.7810658635589891,
            "y": 0.9582123265569539
          },
          {
            "x": 0.8076469817991357,
            "y": 0.9691836076153598
          },
          {
            "x": 0.8179913578630352,
            "y": 0.9716037431429493
          },
          {
            "x": 0.844179651695692,
            "y": 0.9757986447241046
          },
          {
            "x": 0.8571428571428571,
            "y": 0.9795095191997418
          },
          {
            "x": 0.8694513552442058,
            "y": 0.984188447886415
          },
          {
            "x": 0.88477150713631,
            "y": 0.9901581155211359
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
            "x": 0.011777992900935785,
            "y": 1.0
          },
          {
            "x": 0.022749273959341725,
            "y": 1.0
          },
          {
            "x": 0.04017424975798645,
            "y": 1.0
          },
          {
            "x": 0.05469506292352372,
            "y": 1.0
          },
          {
            "x": 0.06340755082284608,
            "y": 0.9656019656019657
          },
          {
            "x": 0.07631494030332366,
            "y": 0.971252566735113
          },
          {
            "x": 0.0898676992578251,
            "y": 0.9686956521739131
          },
          {
            "x": 0.1058405937399161,
            "y": 0.9718518518518519
          },
          {
            "x": 0.12245885769603097,
            "y": 0.9755784061696658
          },
          {
            "x": 0.13536624717650855,
            "y": 0.9699421965317919
          },
          {
            "x": 0.15246853823814133,
            "y": 0.9672466734902764
          },
          {
            "x": 0.16957082929977413,
            "y": 0.9624542124542125
          },
          {
            "x": 0.17957405614714425,
            "y": 0.9603106125970664
          },
          {
            "x": 0.19264278799612777,
            "y": 0.9567307692307693
          },
          {
            "x": 0.20538883510809938,
            "y": 0.9464684014869889
          },
          {
            "x": 0.2186189093255889,
            "y": 0.9403192227619709
          },
          {
            "x": 0.23313972249112616,
            "y": 0.9316569954867827
          },
          {
            "x": 0.24588576960309777,
            "y": 0.9219600725952813
          },
          {
            "x": 0.2628267182962246,
            "y": 0.9193002257336343
          },
          {
            "x": 0.2791222975153275,
            "y": 0.9192348565356004
          },
          {
            "x": 0.2902549209422394,
            "y": 0.9150559511698881
          },
          {
            "x": 0.3017102291061633,
            "y": 0.9113060428849903
          },
          {
            "x": 0.30913197805743786,
            "y": 0.9012229539040452
          },
          {
            "x": 0.32316876411745726,
            "y": 0.9002247191011236
          },
          {
            "x": 0.3333333333333333,
            "y": 0.8943722943722944
          },
          {
            "x": 0.34979025492094223,
            "y": 0.8899835796387521
          },
          {
            "x": 0.3597934817683124,
            "y": 0.8852719333068678
          },
          {
            "x": 0.37108744756373024,
            "y": 0.8768585589020206
          },
          {
            "x": 0.3827040980961601,
            "y": 0.8606676342525399
          },
          {
            "x": 0.40383994837044207,
            "y": 0.8487622923024755
          },
          {
            "x": 0.41287512100677637,
            "y": 0.8453914767096135
          },
          {
            "x": 0.43304291707002257,
            "y": 0.8243243243243243
          },
          {
            "x": 0.4398192965472733,
            "y": 0.8203430634968402
          },
          {
            "x": 0.4506292352371733,
            "y": 0.8171445289643066
          },
          {
            "x": 0.46515004840271057,
            "y": 0.808695652173913
          },
          {
            "x": 0.4849951597289448,
            "y": 0.8020277481323372
          },
          {
            "x": 0.49564375605033884,
            "y": 0.7923652308485942
          },
          {
            "x": 0.5074217489512746,
            "y": 0.786053486628343
          },
          {
            "x": 0.5287189415940626,
            "y": 0.7796811801094456
          },
          {
            "x": 0.5522749273959342,
            "y": 0.7664576802507836
          },
          {
            "x": 0.5596966763472088,
            "y": 0.7632563256325633
          },
          {
            "x": 0.5687318489835431,
            "y": 0.7587171760654327
          },
          {
            "x": 0.5829299774120684,
            "y": 0.7530220925385578
          },
          {
            "x": 0.5868021942562117,
            "y": 0.749433340201937
          },
          {
            "x": 0.5900290416263311,
            "y": 0.744351719926725
          },
          {
            "x": 0.5942239432074863,
            "y": 0.735423322683706
          },
          {
            "x": 0.6016456921587608,
            "y": 0.733477576711251
          },
          {
            "x": 0.622297515327525,
            "y": 0.7275985663082437
          },
          {
            "x": 0.6544046466602129,
            "y": 0.7147136563876652
          },
          {
            "x": 0.6610196837689577,
            "y": 0.713266016713092
          },
          {
            "x": 0.6629557921910294,
            "y": 0.7083261506636787
          },
          {
            "x": 0.6674733785091965,
            "y": 0.7001184633609748
          },
          {
            "x": 0.6766698935140368,
            "y": 0.694831013916501
          },
          {
            "x": 0.6813488222007099,
            "y": 0.6925221384060347
          },
          {
            "x": 0.6889319135204904,
            "y": 0.6779930136551287
          },
          {
            "x": 0.7013552758954501,
            "y": 0.6784766661464023
          },
          {
            "x": 0.7084543401097129,
            "y": 0.6756424065240806
          },
          {
            "x": 0.7199096482736367,
            "y": 0.666965620328849
          },
          {
            "x": 0.7297515327525008,
            "y": 0.664756025867137
          },
          {
            "x": 0.7412068409164246,
            "y": 0.6602471974705375
          },
          {
            "x": 0.7471765085511455,
            "y": 0.6570658342792282
          },
          {
            "x": 0.7518554372378187,
            "y": 0.6520218273401427
          },
          {
            "x": 0.7578251048725395,
            "y": 0.6477727210039994
          },
          {
            "x": 0.7741206840916425,
            "y": 0.6287511466387106
          },
          {
            "x": 0.7797676669893514,
            "y": 0.6269295628486184
          },
          {
            "x": 0.7894482090997096,
            "y": 0.6236298750955901
          },
          {
            "x": 0.7949338496289126,
            "y": 0.6218604064117127
          },
          {
            "x": 0.7999354630525977,
            "y": 0.6120987654320987
          },
          {
            "x": 0.8092933204259438,
            "y": 0.6078526417838099
          },
          {
            "x": 0.8168764117457245,
            "y": 0.6030252501191044
          },
          {
            "x": 0.8307518554372378,
            "y": 0.5945040988338529
          },
          {
            "x": 0.8410777670216198,
            "y": 0.5900396151669496
          },
          {
            "x": 0.8515650209745079,
            "y": 0.5851441241685145
          },
          {
            "x": 0.8646337528234914,
            "y": 0.5786632113162725
          },
          {
            "x": 0.8749596644078735,
            "y": 0.5730740779879531
          },
          {
            "x": 0.883349467570184,
            "y": 0.5671811871956904
          },
          {
            "x": 0.8873830267828332,
            "y": 0.5644499178981938
          },
          {
            "x": 0.8907712165214585,
            "y": 0.5594285135272064
          },
          {
            "x": 0.8946434333656018,
            "y": 0.5568387226350673
          },
          {
            "x": 0.8975475959987093,
            "y": 0.5486734391951869
          },
          {
            "x": 0.9038399483704421,
            "y": 0.5440419539671749
          },
          {
            "x": 0.909809616005163,
            "y": 0.538535001432528
          },
          {
            "x": 0.9122297515327525,
            "y": 0.5356195528609322
          },
          {
            "x": 0.9161019683768957,
            "y": 0.5327453556014261
          },
          {
            "x": 0.9220716360116167,
            "y": 0.5305914028409618
          },
          {
            "x": 0.9249757986447241,
            "y": 0.5291185971389017
          },
          {
            "x": 0.930945466279445,
            "y": 0.5237835875090777
          },
          {
            "x": 0.9390125847047435,
            "y": 0.5142705664045242
          },
          {
            "x": 0.9449822523394643,
            "y": 0.5114390499476074
          },
          {
            "x": 0.9488544691836076,
            "y": 0.5095304106740599
          },
          {
            "x": 0.952565343659245,
            "y": 0.5028104241185488
          },
          {
            "x": 0.9645046789286866,
            "y": 0.4961819389110226
          },
          {
            "x": 0.9707970313004195,
            "y": 0.49275243632790106
          },
          {
            "x": 0.9725717973539851,
            "y": 0.4879391290270358
          },
          {
            "x": 0.9782187802516941,
            "y": 0.48279980888676544
          },
          {
            "x": 0.9811229428848015,
            "y": 0.4810537141048968
          },
          {
            "x": 0.9848338173604388,
            "y": 0.4781825303564434
          },
          {
            "x": 0.9901581155211359,
            "y": 0.4757364341085271
          },
          {
            "x": 1.0,
            "y": 0.4479942175641489
          }
        ],
        "feature_importance": [
          {
            "feature": "is_legendary",
            "importance_mean": 0.15393854120288025,
            "importance_std": 0.003961894400336175
          },
          {
            "feature": "cmc",
            "importance_mean": 0.08516520140554257,
            "importance_std": 0.0011474953840518555
          },
          {
            "feature": "card_family",
            "importance_mean": 0.05827252988063211,
            "importance_std": 0.0010053138359812793
          },
          {
            "feature": "subtype_count",
            "importance_mean": 0.03615418490510197,
            "importance_std": 0.0009207853146412697
          },
          {
            "feature": "power",
            "importance_mean": 0.03268425762865537,
            "importance_std": 0.001125661798989509
          },
          {
            "feature": "color_count",
            "importance_mean": 0.027739402621354325,
            "importance_std": 0.001702115599499586
          },
          {
            "feature": "toughness",
            "importance_mean": 0.020520894312722138,
            "importance_std": 0.0013235712969960549
          },
          {
            "feature": "identity_count",
            "importance_mean": 0.017948917292318567,
            "importance_std": 0.0008716868353003998
          },
          {
            "feature": "layout",
            "importance_mean": 0.017478133358128728,
            "importance_std": 0.0023941701747039234
          },
          {
            "feature": "colour_identity",
            "importance_mean": 0.010043189541359798,
            "importance_std": 0.0006613581847351713
          },
          {
            "feature": "loyalty",
            "importance_mean": 0.0,
            "importance_std": 0.0
          }
        ]
      },
      "interpretation": "Average precision is 0.780 against a 0.459 prevalence baseline; this measures ranking on the held-out records, not causality.",
      "limitations": [
        "Rarity is a publisher design decision, not an objective property of a card.",
        "The dataset contains repeated printings and historic design eras; grouping by name limits but does not remove franchise-era dependence.",
        "Rules text is excluded to avoid memorisation, so nuanced mechanics are intentionally missing.",
        "Performance cannot be interpreted as card strength, playability, collectability, or financial value."
      ]
    },
    {
      "id": "nba",
      "title": "NBA 2K20 salary regression",
      "type": "regression",
      "target": "salary_usd",
      "business_question": "Can game rating, roster context, physical profile, age, and draft history estimate a player's listed NBA salary?",
      "business_use": "Use as an explanatory roster-cost benchmark, not for contract negotiation or player valuation.",
      "primary_metric": "Root mean squared error (RMSE)",
      "source_file": "nba2k20-full.csv",
      "runtime_seconds": 35.5,
      "dataset": {
        "rows": 429,
        "columns": 11,
        "features_used": 10,
        "missing_total": 90,
        "duplicate_rows": 0,
        "missing_by_column": {
          "rating": 0,
          "height_m": 0,
          "weight_kg": 0,
          "age_in_2020": 0,
          "draft_year": 0,
          "draft_peak": 67,
          "position": 0,
          "team": 23,
          "country": 0,
          "draft_round": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "rating",
            "count": 13,
            "rate": 0.030303030303030304,
            "minimum": 67.0,
            "maximum": 97.0,
            "clip_low": 68.0,
            "clip_high": 94.01999999999998
          },
          {
            "feature": "height_m",
            "count": 0,
            "rate": 0.0,
            "minimum": 1.75,
            "maximum": 2.24,
            "clip_low": 1.8297,
            "clip_high": 2.13
          },
          {
            "feature": "weight_kg",
            "count": 3,
            "rate": 0.006993006993006993,
            "minimum": 77.1,
            "maximum": 131.5,
            "clip_low": 79.4,
            "clip_high": 120.22299999999998
          },
          {
            "feature": "age_in_2020",
            "count": 1,
            "rate": 0.002331002331002331,
            "minimum": 20.0,
            "maximum": 40.0,
            "clip_low": 20.0,
            "clip_high": 36.0
          },
          {
            "feature": "draft_year",
            "count": 6,
            "rate": 0.013986013986013986,
            "minimum": 2001.0,
            "maximum": 2019.0,
            "clip_low": 2004.99,
            "clip_high": 2019.0
          },
          {
            "feature": "draft_peak",
            "count": 0,
            "rate": 0.0,
            "minimum": 1.0,
            "maximum": 60.0,
            "clip_low": 1.0,
            "clip_high": 56.47000000000003
          }
        ],
        "categories": {
          "position": [
            {
              "value": "G",
              "count": 169
            },
            {
              "value": "F",
              "count": 138
            },
            {
              "value": "C",
              "count": 48
            },
            {
              "value": "F-C",
              "count": 36
            },
            {
              "value": "G-F",
              "count": 19
            },
            {
              "value": "F-G",
              "count": 13
            },
            {
              "value": "C-F",
              "count": 6
            }
          ],
          "team": [
            {
              "value": "nan",
              "count": 23
            },
            {
              "value": "Milwaukee Bucks",
              "count": 17
            },
            {
              "value": "Phoenix Suns",
              "count": 16
            },
            {
              "value": "Los Angeles Lakers",
              "count": 15
            },
            {
              "value": "Dallas Mavericks",
              "count": 15
            },
            {
              "value": "Indiana Pacers",
              "count": 15
            },
            {
              "value": "New Orleans Pelicans",
              "count": 15
            },
            {
              "value": "Orlando Magic",
              "count": 15
            },
            {
              "value": "Chicago Bulls",
              "count": 15
            },
            {
              "value": "New York Knicks",
              "count": 15
            },
            {
              "value": "Los Angeles Clippers",
              "count": 14
            },
            {
              "value": "Brooklyn Nets",
              "count": 14
            },
            {
              "value": "Philadelphia 76ers",
              "count": 14
            },
            {
              "value": "Detroit Pistons",
              "count": 14
            },
            {
              "value": "Boston Celtics",
              "count": 14
            },
            {
              "value": "San Antonio Spurs",
              "count": 14
            },
            {
              "value": "Sacramento Kings",
              "count": 14
            },
            {
              "value": "Houston Rockets",
              "count": 13
            },
            {
              "value": "Denver Nuggets",
              "count": 13
            },
            {
              "value": "Minnesota Timberwolves",
              "count": 13
            },
            {
              "value": "Washington Wizards",
              "count": 13
            },
            {
              "value": "Toronto Raptors",
              "count": 13
            },
            {
              "value": "Oklahoma City Thunder",
              "count": 13
            },
            {
              "value": "Memphis Grizzlies",
              "count": 13
            },
            {
              "value": "Portland Trail Blazers",
              "count": 12
            },
            {
              "value": "Miami Heat",
              "count": 12
            },
            {
              "value": "Utah Jazz",
              "count": 12
            },
            {
              "value": "Cleveland Cavaliers",
              "count": 12
            },
            {
              "value": "Atlanta Hawks",
              "count": 12
            },
            {
              "value": "Charlotte Hornets",
              "count": 10
            },
            {
              "value": "Golden State Warriors",
              "count": 9
            }
          ],
          "country": [
            {
              "value": "USA",
              "count": 323
            },
            {
              "value": "Canada",
              "count": 15
            },
            {
              "value": "Australia",
              "count": 9
            },
            {
              "value": "France",
              "count": 8
            },
            {
              "value": "Croatia",
              "count": 6
            },
            {
              "value": "Spain",
              "count": 6
            },
            {
              "value": "Germany",
              "count": 6
            },
            {
              "value": "Serbia",
              "count": 5
            },
            {
              "value": "Italy",
              "count": 4
            },
            {
              "value": "Turkey",
              "count": 4
            },
            {
              "value": "Greece",
              "count": 3
            },
            {
              "value": "Latvia",
              "count": 3
            },
            {
              "value": "Nigeria",
              "count": 3
            },
            {
              "value": "Cameroon",
              "count": 2
            },
            {
              "value": "Slovenia",
              "count": 2
            },
            {
              "value": "The Bahamas",
              "count": 2
            },
            {
              "value": "Bosnia and Herzegovina",
              "count": 2
            },
            {
              "value": "Lithuania",
              "count": 2
            },
            {
              "value": "Ukraine",
              "count": 2
            },
            {
              "value": "Democratic Republic of the Congo",
              "count": 2
            },
            {
              "value": "Brazil",
              "count": 2
            },
            {
              "value": "Montenegro",
              "count": 1
            },
            {
              "value": "Switzerland",
              "count": 1
            },
            {
              "value": "Dominican Republic",
              "count": 1
            },
            {
              "value": "Finland",
              "count": 1
            },
            {
              "value": "New Zealand",
              "count": 1
            },
            {
              "value": "Philippines",
              "count": 1
            },
            {
              "value": "Austria",
              "count": 1
            },
            {
              "value": "Puerto Rico",
              "count": 1
            },
            {
              "value": "Senegal",
              "count": 1
            },
            {
              "value": "Czech",
              "count": 1
            },
            {
              "value": "Mali",
              "count": 1
            },
            {
              "value": "Israel",
              "count": 1
            },
            {
              "value": "Japan",
              "count": 1
            },
            {
              "value": "United Kingdom",
              "count": 1
            },
            {
              "value": "Georgia",
              "count": 1
            },
            {
              "value": "Angola",
              "count": 1
            },
            {
              "value": "Haiti",
              "count": 1
            },
            {
              "value": "Egypt",
              "count": 1
            }
          ],
          "draft_round": [
            {
              "value": "1",
              "count": 257
            },
            {
              "value": "2",
              "count": 105
            },
            {
              "value": "Undrafted",
              "count": 67
            }
          ]
        },
        "target_summary": {
          "minimum": 50000.0,
          "maximum": 40231758.0,
          "mean": 8530080.272727273,
          "median": 4380120.0,
          "std": 9218059.122524183
        }
      },
      "audit_interpretation": "The table has 429 unique players and no missing salary values. Salaries are strongly right-skewed, so RMSE exposes costly star-contract misses while MAE shows typical error.",
      "split": {
        "train": {
          "rows": 300,
          "rate": 0.6993006993006993
        },
        "validation": {
          "rows": 64,
          "rate": 0.14918414918414918
        },
        "test": {
          "rows": 65,
          "rate": 0.15151515151515152
        },
        "strategy": "Seeded random 70/15/15 split"
      },
      "preparation": {
        "numeric_features": [
          "rating",
          "height_m",
          "weight_kg",
          "age_in_2020",
          "draft_year",
          "draft_peak"
        ],
        "categorical_features": [
          "position",
          "team",
          "country",
          "draft_round"
        ],
        "excluded_features": [
          "full_name",
          "jersey",
          "college"
        ],
        "feature_selection": "Player name and jersey number are excluded identifiers. Salary is parsed from currency text; height, weight, age, and draft peak are converted to numeric measures.",
        "steps": [
          "Parse currency and physical units",
          "Derive age at 2020 season",
          "Median/mode imputation",
          "Train-learned 1st to 99th percentile clipping",
          "One-hot encoding",
          "Standard scaling"
        ]
      },
      "comparison": [
        {
          "model": "Median baseline",
          "rmse": 10447230.60161687,
          "mae": 6847221.390625,
          "r2": -0.2674363622091762,
          "mape": 2.2806252655577985
        },
        {
          "model": "Ridge regression",
          "rmse": 6668794.443463359,
          "mae": 5169957.408017572,
          "r2": 0.483561676177922,
          "mape": 2.448663973492654
        },
        {
          "model": "Random forest",
          "rmse": 5771345.202827816,
          "mae": 4029943.4509354597,
          "r2": 0.6132076250588876,
          "mape": 1.3100001386946825
        },
        {
          "model": "Histogram gradient boosting",
          "rmse": 6109153.848859902,
          "mae": 4533471.867999166,
          "r2": 0.5666029756138828,
          "mape": 1.4564989533283923
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
        "best_cv_score": 4811514.872582481,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 4811514.872582481,
            "std_cv_score": 420155.1523363944,
            "train_score": 2507225.003008074,
            "parameters": {
              "n_estimators": 600,
              "min_samples_leaf": 2,
              "max_features": 0.5,
              "max_depth": 18
            }
          },
          {
            "rank": 2,
            "mean_cv_score": 4868734.451152699,
            "std_cv_score": 350718.35558117926,
            "train_score": 4004130.2916728007,
            "parameters": {
              "n_estimators": 250,
              "min_samples_leaf": 8,
              "max_features": 0.8,
              "max_depth": null
            }
          },
          {
            "rank": 3,
            "mean_cv_score": 4888289.320125716,
            "std_cv_score": 383322.8039834969,
            "train_score": 2414321.1497135204,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 2,
              "max_features": 0.8,
              "max_depth": 12
            }
          },
          {
            "rank": 4,
            "mean_cv_score": 4974587.42572712,
            "std_cv_score": 434928.7046591225,
            "train_score": 4075756.6303394074,
            "parameters": {
              "n_estimators": 600,
              "min_samples_leaf": 8,
              "max_features": 1.0,
              "max_depth": 18
            }
          },
          {
            "rank": 5,
            "mean_cv_score": 4975009.951584091,
            "std_cv_score": 434924.66200984566,
            "train_score": 4065683.4821534017,
            "parameters": {
              "n_estimators": 250,
              "min_samples_leaf": 8,
              "max_features": 1.0,
              "max_depth": 8
            }
          },
          {
            "rank": 6,
            "mean_cv_score": 4981659.1675568605,
            "std_cv_score": 405632.11589994986,
            "train_score": 2415514.82698278,
            "parameters": {
              "n_estimators": 400,
              "min_samples_leaf": 2,
              "max_features": 1.0,
              "max_depth": 18
            }
          }
        ],
        "tuned_validation_metrics": {
          "rmse": 5384869.168803393,
          "mae": 3864421.8043475496,
          "r2": 0.6632759681285334,
          "mape": 1.273771445044689
        }
      },
      "test": {
        "metrics": {
          "rmse": 5407813.066099275,
          "mae": 3342563.9409393677,
          "r2": 0.7549994018593283,
          "mape": 1.3206752694511539
        },
        "feature_importance": [
          {
            "feature": "rating",
            "importance_mean": 4499945.18785667,
            "importance_std": 467828.99077733286
          },
          {
            "feature": "draft_year",
            "importance_mean": 1751674.0945365885,
            "importance_std": 303604.847235415
          },
          {
            "feature": "age_in_2020",
            "importance_mean": 447259.0869606424,
            "importance_std": 106243.68035212866
          },
          {
            "feature": "weight_kg",
            "importance_mean": 166027.6987304253,
            "importance_std": 60005.981751340165
          },
          {
            "feature": "draft_peak",
            "importance_mean": 159617.13549089865,
            "importance_std": 84083.05898178839
          },
          {
            "feature": "position",
            "importance_mean": 87850.92762946028,
            "importance_std": 25057.6832881048
          },
          {
            "feature": "draft_round",
            "importance_mean": 76136.16852962319,
            "importance_std": 57511.35943600237
          },
          {
            "feature": "team",
            "importance_mean": -2006.8948683783722,
            "importance_std": 23425.48754709648
          },
          {
            "feature": "country",
            "importance_mean": -19910.86935012446,
            "importance_std": 23171.650224352234
          },
          {
            "feature": "height_m",
            "importance_mean": -23747.49973506077,
            "importance_std": 18311.753353326727
          }
        ],
        "prediction_sample": [
          {
            "actual": 1000000.0,
            "predicted": 1095793.5062848122
          },
          {
            "actual": 21000000.0,
            "predicted": 28871123.96955731
          },
          {
            "actual": 2475840.0,
            "predicted": 2241812.762045634
          },
          {
            "actual": 79568.0,
            "predicted": 1715192.7363670627
          },
          {
            "actual": 16896552.0,
            "predicted": 21003443.94408598
          },
          {
            "actual": 33005556.0,
            "predicted": 31016043.906557247
          },
          {
            "actual": 1416852.0,
            "predicted": 1240551.9912440486
          },
          {
            "actual": 18000000.0,
            "predicted": 13041029.962483466
          },
          {
            "actual": 1416852.0,
            "predicted": 1237879.9638526158
          },
          {
            "actual": 4240200.0,
            "predicted": 3800362.4562561917
          },
          {
            "actual": 1618520.0,
            "predicted": 1888032.1147149482
          },
          {
            "actual": 15349400.0,
            "predicted": 6017023.073996495
          },
          {
            "actual": 8349039.0,
            "predicted": 12079672.829484787
          },
          {
            "actual": 2816760.0,
            "predicted": 3051652.0094232815
          },
          {
            "actual": 2500000.0,
            "predicted": 4175744.2953251554
          },
          {
            "actual": 11454546.0,
            "predicted": 12561557.27578968
          },
          {
            "actual": 8719320.0,
            "predicted": 7591079.351827386
          },
          {
            "actual": 27093018.0,
            "predicted": 15058090.76564887
          },
          {
            "actual": 9607500.0,
            "predicted": 6540722.253256209
          },
          {
            "actual": 16229213.0,
            "predicted": 8241748.554429232
          },
          {
            "actual": 1416852.0,
            "predicted": 1745154.669716931
          },
          {
            "actual": 1620564.0,
            "predicted": 5481311.092879282
          },
          {
            "actual": 40231758.0,
            "predicted": 32609437.47171533
          },
          {
            "actual": 3500000.0,
            "predicted": 6580185.09214484
          },
          {
            "actual": 37436858.0,
            "predicted": 30032843.002049707
          },
          {
            "actual": 1618520.0,
            "predicted": 1795734.995673281
          },
          {
            "actual": 7000000.0,
            "predicted": 8996857.8392314
          },
          {
            "actual": 1618520.0,
            "predicted": 3256801.354777119
          },
          {
            "actual": 1445697.0,
            "predicted": 4176082.926058261
          },
          {
            "actual": 11011234.0,
            "predicted": 6987312.207208334
          },
          {
            "actual": 27739975.0,
            "predicted": 30785237.658147182
          },
          {
            "actual": 1416852.0,
            "predicted": 1618567.3183888886
          },
          {
            "actual": 13290395.0,
            "predicted": 5722669.036831348
          },
          {
            "actual": 4767000.0,
            "predicted": 9003745.992021155
          },
          {
            "actual": 6392760.0,
            "predicted": 8827257.471024474
          },
          {
            "actual": 27556959.0,
            "predicted": 27682349.36798612
          },
          {
            "actual": 3500000.0,
            "predicted": 28041038.402669735
          },
          {
            "actual": 2321735.0,
            "predicted": 4124413.9375251327
          },
          {
            "actual": 4161000.0,
            "predicted": 3907624.645241825
          },
          {
            "actual": 10740740.0,
            "predicted": 8923494.938898142
          },
          {
            "actual": 16000000.0,
            "predicted": 17298565.172605217
          },
          {
            "actual": 1588231.0,
            "predicted": 1674472.9958671245
          },
          {
            "actual": 3529554.0,
            "predicted": 6293813.884287951
          },
          {
            "actual": 1995120.0,
            "predicted": 2738798.7083436744
          },
          {
            "actual": 4862040.0,
            "predicted": 4428885.377964587
          },
          {
            "actual": 33296296.0,
            "predicted": 24675132.540526144
          },
          {
            "actual": 4469160.0,
            "predicted": 4091949.1579384916
          },
          {
            "actual": 522738.0,
            "predicted": 1451907.909421898
          },
          {
            "actual": 79568.0,
            "predicted": 2884111.0010403446
          },
          {
            "actual": 5697600.0,
            "predicted": 5417082.389932543
          },
          {
            "actual": 1416852.0,
            "predicted": 1360551.2392279943
          },
          {
            "actual": 1962360.0,
            "predicted": 1657267.3488855814
          },
          {
            "actual": 24147727.0,
            "predicted": 14536126.984970344
          },
          {
            "actual": 8000000.0,
            "predicted": 3970583.161331408
          },
          {
            "actual": 25565217.0,
            "predicted": 11132772.721929234
          },
          {
            "actual": 1618520.0,
            "predicted": 1821123.708636244
          },
          {
            "actual": 34449964.0,
            "predicted": 30010838.643746126
          },
          {
            "actual": 2033160.0,
            "predicted": 1815224.5840846559
          },
          {
            "actual": 13333334.0,
            "predicted": 5881409.508318378
          },
          {
            "actual": 9881598.0,
            "predicted": 14667609.770066855
          },
          {
            "actual": 25595700.0,
            "predicted": 16415104.209553566
          },
          {
            "actual": 1416852.0,
            "predicted": 1319834.699174604
          },
          {
            "actual": 898310.0,
            "predicted": 1098531.7120692644
          },
          {
            "actual": 27504630.0,
            "predicted": 25084727.824282832
          },
          {
            "actual": 4767000.0,
            "predicted": 5122417.23485209
          }
        ],
        "residual_bins": [
          {
            "actual": 1007390.5454545454,
            "mean_residual": -516980.0678898604,
            "mae": 609450.9963445399,
            "count": 11
          },
          {
            "actual": 1584668.0,
            "mean_residual": -850706.682621163,
            "mae": 850706.682621163,
            "count": 6
          },
          {
            "actual": 2215692.375,
            "mean_residual": -945085.7173140497,
            "mae": 1134349.543560082,
            "count": 8
          },
          {
            "actual": 4116739.25,
            "mean_residual": -4238402.858176535,
            "mae": 4506008.793317407,
            "count": 8
          },
          {
            "actual": 7328532.375,
            "mean_residual": 97014.79074340081,
            "mae": 2137512.075678566,
            "count": 8
          },
          {
            "actual": 12632655.875,
            "mean_residual": 2875200.7520356937,
            "mae": 4673097.806651132,
            "count": 8
          },
          {
            "actual": 21815928.375,
            "mean_residual": 5778498.235917749,
            "mae": 8773002.214328572,
            "count": 8
          },
          {
            "actual": 32652749.5,
            "mean_residual": 3665673.1981236637,
            "mae": 4458336.454656989,
            "count": 8
          }
        ]
      },
      "interpretation": "The sealed test RMSE is $5,407,813 and MAE is $3,342,564; the gap reflects the influence of star-level salary outliers.",
      "limitations": [
        "Only 429 players are available, so team and country categories can be thin.",
        "The data is tied to the NBA 2K20 season and does not represent current ratings, rosters, or contracts.",
        "Salary depends on contract timing, cap rules, tenure, performance, and negotiation variables absent here.",
        "Random splitting tests similar-season players, not future seasons or unseen labour-market regimes."
      ]
    },
    {
      "id": "forza",
      "title": "Forza premium-car classification",
      "type": "classification",
      "target": "500k+ credits",
      "business_question": "Can performance specifications, class, drivetrain, and acquisition source identify cars priced at 500,000 credits or more?",
      "business_use": "Support collection planning and price-tier browsing inside this historic game snapshot, not real-world vehicle pricing.",
      "primary_metric": "Average precision",
      "source_file": "Forza_Horizon_Cars.csv",
      "runtime_seconds": 23.19,
      "dataset": {
        "rows": 539,
        "columns": 17,
        "features_used": 16,
        "missing_total": 1608,
        "duplicate_rows": 0,
        "missing_by_column": {
          "stock_rating": 1,
          "speed": 1,
          "handling": 1,
          "acceleration": 1,
          "launch": 1,
          "braking": 1,
          "offroad": 1,
          "top_speed": 399,
          "0_60_mph": 399,
          "0_100_mph": 402,
          "g_force": 399,
          "horse_power": 0,
          "weight_lbs": 0,
          "model_type": 0,
          "drive_type": 2,
          "car_source": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "stock_rating",
            "count": 18,
            "rate": 0.03339517625231911,
            "minimum": 100.0,
            "maximum": 998.0,
            "clip_low": 100.0,
            "clip_high": 998.0
          },
          {
            "feature": "speed",
            "count": 3,
            "rate": 0.0055658627087198514,
            "minimum": 1.2,
            "maximum": 10.0,
            "clip_low": 2.576,
            "clip_high": 9.672000000000002
          },
          {
            "feature": "handling",
            "count": 0,
            "rate": 0.0,
            "minimum": 2.7,
            "maximum": 10.0,
            "clip_low": 2.976,
            "clip_high": 10.0
          },
          {
            "feature": "acceleration",
            "count": 0,
            "rate": 0.0,
            "minimum": 1.0,
            "maximum": 10.0,
            "clip_low": 1.576,
            "clip_high": 10.0
          },
          {
            "feature": "launch",
            "count": 0,
            "rate": 0.0,
            "minimum": 1.1,
            "maximum": 10.0,
            "clip_low": 1.776,
            "clip_high": 10.0
          },
          {
            "feature": "braking",
            "count": 0,
            "rate": 0.0,
            "minimum": 1.8,
            "maximum": 10.0,
            "clip_low": 1.8,
            "clip_high": 10.0
          },
          {
            "feature": "offroad",
            "count": 74,
            "rate": 0.137291280148423,
            "minimum": 2.9,
            "maximum": 10.0,
            "clip_low": 3.676,
            "clip_high": 10.0
          },
          {
            "feature": "top_speed",
            "count": 5,
            "rate": 0.00927643784786642,
            "minimum": 0.0,
            "maximum": 275.4,
            "clip_low": 0.0,
            "clip_high": 267.8929999999999
          },
          {
            "feature": "0_60_mph",
            "count": 6,
            "rate": 0.011131725417439703,
            "minimum": 1.9,
            "maximum": 30.1,
            "clip_low": 2.3009999999999997,
            "clip_high": 20.850999999999974
          },
          {
            "feature": "0_100_mph",
            "count": 5,
            "rate": 0.00927643784786642,
            "minimum": 3.1,
            "maximum": 50.0,
            "clip_low": 4.696,
            "clip_high": 40.19999999999996
          },
          {
            "feature": "g_force",
            "count": 8,
            "rate": 0.014842300556586271,
            "minimum": 0.63,
            "maximum": 1.77,
            "clip_low": 0.6803,
            "clip_high": 1.7696999999999998
          },
          {
            "feature": "horse_power",
            "count": 19,
            "rate": 0.03525046382189239,
            "minimum": 0.0,
            "maximum": 1973.0,
            "clip_low": 39.76,
            "clip_high": 1484.0400000000002
          },
          {
            "feature": "weight_lbs",
            "count": 31,
            "rate": 0.0575139146567718,
            "minimum": 311.0,
            "maximum": 15432.0,
            "clip_low": 1403.48,
            "clip_high": 7010.56
          }
        ],
        "categories": {
          "model_type": [
            {
              "value": "RETRO SPORTS CARS",
              "count": 36
            },
            {
              "value": "TRACK TOYS",
              "count": 32
            },
            {
              "value": "RETRO SUPERCARS",
              "count": 30
            },
            {
              "value": "HYPERCARS",
              "count": 27
            },
            {
              "value": "MODERN SUPERCARS",
              "count": 26
            },
            {
              "value": "SUPER SALOONS",
              "count": 26
            },
            {
              "value": "EXTREME TRACK TOYS",
              "count": 23
            },
            {
              "value": "CLASSIC MUSCLE",
              "count": 22
            },
            {
              "value": "PICK-UP & 4X4'S",
              "count": 22
            },
            {
              "value": "DRIFT CARS",
              "count": 22
            },
            {
              "value": "MODERN SPORTS CARS",
              "count": 21
            },
            {
              "value": "RALLY MONSTERS",
              "count": 18
            },
            {
              "value": "SPORTS UTILITY HEROES",
              "count": 16
            },
            {
              "value": "RETRO HOT HATCH",
              "count": 14
            },
            {
              "value": "RETRO SALOONS",
              "count": 14
            },
            {
              "value": "CLASSIC RACERS",
              "count": 14
            },
            {
              "value": "RARE CLASSICS",
              "count": 13
            },
            {
              "value": "UNLIMITED OFFROAD",
              "count": 12
            },
            {
              "value": "SUPER GT",
              "count": 12
            },
            {
              "value": "MODERN MUSCLE",
              "count": 12
            },
            {
              "value": "CULT CARS",
              "count": 11
            },
            {
              "value": "SUPER HOT HATCH",
              "count": 11
            },
            {
              "value": "CLASSIC SPORTS CARS",
              "count": 11
            },
            {
              "value": "RETRO RALLY",
              "count": 10
            },
            {
              "value": "RETRO MUSCLE",
              "count": 10
            },
            {
              "value": "MODERN RALLY",
              "count": 10
            },
            {
              "value": "CLASSIC RALLY",
              "count": 9
            },
            {
              "value": "HOT HATCH",
              "count": 9
            },
            {
              "value": "RODS AND CUSTOMS",
              "count": 9
            },
            {
              "value": "UNLIMITED BUGGIES",
              "count": 6
            },
            {
              "value": "GT CARS",
              "count": 6
            },
            {
              "value": "VINTAGE RACERS",
              "count": 6
            },
            {
              "value": "OFFROAD",
              "count": 5
            },
            {
              "value": "VANS AND UTILITY",
              "count": 4
            },
            {
              "value": "UTV'S",
              "count": 3
            },
            {
              "value": "TRUCKS",
              "count": 2
            },
            {
              "value": "CULT CLASSICS",
              "count": 2
            },
            {
              "value": "BUGGIES",
              "count": 2
            },
            {
              "value": "info_not_found",
              "count": 1
            }
          ],
          "drive_type": [
            {
              "value": "RWD",
              "count": 348
            },
            {
              "value": "AWD",
              "count": 157
            },
            {
              "value": "FWD",
              "count": 32
            },
            {
              "value": "nan",
              "count": 2
            }
          ],
          "car_source": [
            {
              "value": "Autoshow",
              "count": 431
            },
            {
              "value": "Wheelspin",
              "count": 48
            },
            {
              "value": "Season Event",
              "count": 21
            },
            {
              "value": "Barn",
              "count": 13
            },
            {
              "value": "Car Collection",
              "count": 9
            },
            {
              "value": "Accolade",
              "count": 5
            },
            {
              "value": "Mastery Tree",
              "count": 5
            },
            {
              "value": "Other",
              "count": 4
            },
            {
              "value": "This info will be available soon",
              "count": 3
            }
          ]
        },
        "target_summary": {
          "minimum": 0.0,
          "maximum": 1.0,
          "mean": 0.24304267161410018,
          "median": 0.0,
          "std": 0.42931909870202756
        },
        "target_counts": {
          "Under 500k": 408,
          "500k+ credits": 131
        },
        "positive_label": "500k+ credits",
        "negative_label": "Under 500k",
        "positive_rate": 0.24304267161410018
      },
      "audit_interpretation": "Fourteen zero-price records remain in the lower-price class because zero is a valid recorded value. Several measured driving fields are unavailable for most cars and are handled by in-pipeline imputation.",
      "split": {
        "train": {
          "rows": 377,
          "rate": 0.699443413729128
        },
        "validation": {
          "rows": 81,
          "rate": 0.150278293135436
        },
        "test": {
          "rows": 81,
          "rate": 0.150278293135436
        },
        "strategy": "Stratified random 70/15/15 split"
      },
      "preparation": {
        "numeric_features": [
          "stock_rating",
          "speed",
          "handling",
          "acceleration",
          "launch",
          "braking",
          "offroad",
          "top_speed",
          "0_60_mph",
          "0_100_mph",
          "g_force",
          "horse_power",
          "weight_lbs"
        ],
        "categorical_features": [
          "model_type",
          "drive_type",
          "car_source"
        ],
        "excluded_features": [
          "Name_and_model",
          "Car_Image",
          "In_Game_Price",
          "car_source_1",
          "car_source_2"
        ],
        "feature_selection": "Car name and image URL are excluded identifiers. Formatted specification strings are parsed into numeric values; redundant source columns and raw price are excluded.",
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
          "accuracy": 0.7530864197530864,
          "balanced_accuracy": 0.5,
          "precision": 0.0,
          "recall": 0.0,
          "f1": 0.0,
          "roc_auc": 0.5,
          "average_precision": 0.24691358024691357,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 61,
            "fp": 0,
            "fn": 20,
            "tp": 0
          }
        },
        {
          "model": "Logistic regression",
          "accuracy": 0.8395061728395061,
          "balanced_accuracy": 0.8094262295081966,
          "precision": 0.6521739130434783,
          "recall": 0.75,
          "f1": 0.6976744186046512,
          "roc_auc": 0.8942622950819672,
          "average_precision": 0.7422564527334264,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 53,
            "fp": 8,
            "fn": 5,
            "tp": 15
          }
        },
        {
          "model": "Random forest",
          "accuracy": 0.7530864197530864,
          "balanced_accuracy": 0.6848360655737705,
          "precision": 0.5,
          "recall": 0.55,
          "f1": 0.5238095238095238,
          "roc_auc": 0.8385245901639344,
          "average_precision": 0.6579517179403505,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 50,
            "fp": 11,
            "fn": 9,
            "tp": 11
          }
        },
        {
          "model": "Histogram gradient boosting",
          "accuracy": 0.7777777777777778,
          "balanced_accuracy": 0.7348360655737705,
          "precision": 0.5416666666666666,
          "recall": 0.65,
          "f1": 0.5909090909090909,
          "roc_auc": 0.8278688524590163,
          "average_precision": 0.6681678757238299,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 50,
            "fp": 11,
            "fn": 7,
            "tp": 13
          }
        }
      ],
      "selection": {
        "model": "Logistic regression",
        "reason": "Highest validation average precision; ROC AUC used as a tie-breaker."
      },
      "tuning": {
        "method": "RandomizedSearchCV",
        "iterations": 6,
        "folds": 5,
        "scoring": "average_precision",
        "parameter_space": {
          "C": [
            0.01,
            0.03,
            0.1,
            0.3,
            1.0,
            3.0,
            10.0
          ],
          "class_weight": [
            null,
            "balanced"
          ]
        },
        "best_parameters": {
          "class_weight": null,
          "C": 10.0
        },
        "best_cv_score": 0.8053161560748574,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 0.8053161560748574,
            "std_cv_score": 0.04720839034040901,
            "train_score": 0.9227414604424385,
            "parameters": {
              "class_weight": null,
              "C": 10.0
            }
          },
          {
            "rank": 2,
            "mean_cv_score": 0.7943852512161831,
            "std_cv_score": 0.042944075133829515,
            "train_score": 0.8965107298854041,
            "parameters": {
              "class_weight": "balanced",
              "C": 3.0
            }
          },
          {
            "rank": 3,
            "mean_cv_score": 0.7902735424144999,
            "std_cv_score": 0.04168209194774858,
            "train_score": 0.868271805634496,
            "parameters": {
              "class_weight": "balanced",
              "C": 1.0
            }
          },
          {
            "rank": 4,
            "mean_cv_score": 0.7898042415572882,
            "std_cv_score": 0.04310543466305239,
            "train_score": 0.8705277835816375,
            "parameters": {
              "class_weight": null,
              "C": 1.0
            }
          },
          {
            "rank": 5,
            "mean_cv_score": 0.7417602931306463,
            "std_cv_score": 0.04913034823365876,
            "train_score": 0.7891120013149306,
            "parameters": {
              "class_weight": "balanced",
              "C": 0.1
            }
          },
          {
            "rank": 6,
            "mean_cv_score": 0.697071865836385,
            "std_cv_score": 0.06602788232881451,
            "train_score": 0.7153297143275201,
            "parameters": {
              "class_weight": null,
              "C": 0.01
            }
          }
        ],
        "selected_threshold": 0.48,
        "threshold_candidates": [
          {
            "threshold": 0.1,
            "precision": 0.5625,
            "recall": 0.9,
            "f1": 0.6923076923076923
          },
          {
            "threshold": 0.15000000000000002,
            "precision": 0.5714285714285714,
            "recall": 0.8,
            "f1": 0.6666666666666666
          },
          {
            "threshold": 0.2,
            "precision": 0.6,
            "recall": 0.75,
            "f1": 0.6666666666666666
          },
          {
            "threshold": 0.25,
            "precision": 0.6521739130434783,
            "recall": 0.75,
            "f1": 0.6976744186046512
          },
          {
            "threshold": 0.30000000000000004,
            "precision": 0.6818181818181818,
            "recall": 0.75,
            "f1": 0.7142857142857143
          },
          {
            "threshold": 0.35,
            "precision": 0.6818181818181818,
            "recall": 0.75,
            "f1": 0.7142857142857143
          },
          {
            "threshold": 0.4,
            "precision": 0.6666666666666666,
            "recall": 0.7,
            "f1": 0.6829268292682927
          },
          {
            "threshold": 0.45000000000000007,
            "precision": 0.6666666666666666,
            "recall": 0.7,
            "f1": 0.6829268292682927
          },
          {
            "threshold": 0.48,
            "precision": 0.7777777777777778,
            "recall": 0.7,
            "f1": 0.7368421052631579
          },
          {
            "threshold": 0.5,
            "precision": 0.7777777777777778,
            "recall": 0.7,
            "f1": 0.7368421052631579
          },
          {
            "threshold": 0.55,
            "precision": 0.7777777777777778,
            "recall": 0.7,
            "f1": 0.7368421052631579
          },
          {
            "threshold": 0.6,
            "precision": 0.7777777777777778,
            "recall": 0.7,
            "f1": 0.7368421052631579
          },
          {
            "threshold": 0.65,
            "precision": 0.75,
            "recall": 0.6,
            "f1": 0.6666666666666666
          },
          {
            "threshold": 0.7,
            "precision": 0.75,
            "recall": 0.6,
            "f1": 0.6666666666666666
          },
          {
            "threshold": 0.75,
            "precision": 0.75,
            "recall": 0.6,
            "f1": 0.6666666666666666
          },
          {
            "threshold": 0.8,
            "precision": 0.7142857142857143,
            "recall": 0.5,
            "f1": 0.5882352941176471
          },
          {
            "threshold": 0.85,
            "precision": 0.8181818181818182,
            "recall": 0.45,
            "f1": 0.5806451612903226
          },
          {
            "threshold": 0.9,
            "precision": 0.8,
            "recall": 0.4,
            "f1": 0.5333333333333333
          }
        ]
      },
      "test": {
        "metrics": {
          "accuracy": 0.8148148148148148,
          "balanced_accuracy": 0.7512733446519524,
          "precision": 0.6,
          "recall": 0.631578947368421,
          "f1": 0.6153846153846154,
          "roc_auc": 0.865025466893039,
          "average_precision": 0.6699744260259668,
          "threshold": 0.48,
          "confusion_matrix": {
            "tn": 54,
            "fp": 8,
            "fn": 7,
            "tp": 12
          }
        },
        "roc_curve": [
          {
            "x": 0.0,
            "y": 0.0
          },
          {
            "x": 0.0,
            "y": 0.05263157894736842
          },
          {
            "x": 0.016129032258064516,
            "y": 0.05263157894736842
          },
          {
            "x": 0.016129032258064516,
            "y": 0.21052631578947367
          },
          {
            "x": 0.03225806451612903,
            "y": 0.21052631578947367
          },
          {
            "x": 0.03225806451612903,
            "y": 0.42105263157894735
          },
          {
            "x": 0.04838709677419355,
            "y": 0.42105263157894735
          },
          {
            "x": 0.04838709677419355,
            "y": 0.47368421052631576
          },
          {
            "x": 0.06451612903225806,
            "y": 0.47368421052631576
          },
          {
            "x": 0.06451612903225806,
            "y": 0.631578947368421
          },
          {
            "x": 0.12903225806451613,
            "y": 0.631578947368421
          },
          {
            "x": 0.12903225806451613,
            "y": 0.6842105263157895
          },
          {
            "x": 0.14516129032258066,
            "y": 0.6842105263157895
          },
          {
            "x": 0.14516129032258066,
            "y": 0.7368421052631579
          },
          {
            "x": 0.20967741935483872,
            "y": 0.7368421052631579
          },
          {
            "x": 0.20967741935483872,
            "y": 0.8421052631578947
          },
          {
            "x": 0.27419354838709675,
            "y": 0.8421052631578947
          },
          {
            "x": 0.27419354838709675,
            "y": 0.8947368421052632
          },
          {
            "x": 0.3870967741935484,
            "y": 0.8947368421052632
          },
          {
            "x": 0.3870967741935484,
            "y": 0.9473684210526315
          },
          {
            "x": 0.7903225806451613,
            "y": 0.9473684210526315
          },
          {
            "x": 0.7903225806451613,
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
            "x": 0.05263157894736842,
            "y": 1.0
          },
          {
            "x": 0.05263157894736842,
            "y": 0.5
          },
          {
            "x": 0.10526315789473684,
            "y": 0.6666666666666666
          },
          {
            "x": 0.15789473684210525,
            "y": 0.75
          },
          {
            "x": 0.21052631578947367,
            "y": 0.8
          },
          {
            "x": 0.21052631578947367,
            "y": 0.6666666666666666
          },
          {
            "x": 0.2631578947368421,
            "y": 0.7142857142857143
          },
          {
            "x": 0.3157894736842105,
            "y": 0.75
          },
          {
            "x": 0.3684210526315789,
            "y": 0.7777777777777778
          },
          {
            "x": 0.42105263157894735,
            "y": 0.8
          },
          {
            "x": 0.42105263157894735,
            "y": 0.7272727272727273
          },
          {
            "x": 0.47368421052631576,
            "y": 0.75
          },
          {
            "x": 0.47368421052631576,
            "y": 0.6923076923076923
          },
          {
            "x": 0.5263157894736842,
            "y": 0.7142857142857143
          },
          {
            "x": 0.5789473684210527,
            "y": 0.7333333333333333
          },
          {
            "x": 0.631578947368421,
            "y": 0.75
          },
          {
            "x": 0.631578947368421,
            "y": 0.7058823529411765
          },
          {
            "x": 0.631578947368421,
            "y": 0.6666666666666666
          },
          {
            "x": 0.631578947368421,
            "y": 0.631578947368421
          },
          {
            "x": 0.631578947368421,
            "y": 0.6
          },
          {
            "x": 0.6842105263157895,
            "y": 0.6190476190476191
          },
          {
            "x": 0.6842105263157895,
            "y": 0.5909090909090909
          },
          {
            "x": 0.7368421052631579,
            "y": 0.6086956521739131
          },
          {
            "x": 0.7368421052631579,
            "y": 0.5833333333333334
          },
          {
            "x": 0.7368421052631579,
            "y": 0.56
          },
          {
            "x": 0.7368421052631579,
            "y": 0.5384615384615384
          },
          {
            "x": 0.7368421052631579,
            "y": 0.5185185185185185
          },
          {
            "x": 0.7894736842105263,
            "y": 0.5357142857142857
          },
          {
            "x": 0.8421052631578947,
            "y": 0.5517241379310345
          },
          {
            "x": 0.8421052631578947,
            "y": 0.5333333333333333
          },
          {
            "x": 0.8421052631578947,
            "y": 0.5161290322580645
          },
          {
            "x": 0.8421052631578947,
            "y": 0.5
          },
          {
            "x": 0.8421052631578947,
            "y": 0.48484848484848486
          },
          {
            "x": 0.8947368421052632,
            "y": 0.5
          },
          {
            "x": 0.8947368421052632,
            "y": 0.4857142857142857
          },
          {
            "x": 0.8947368421052632,
            "y": 0.4722222222222222
          },
          {
            "x": 0.8947368421052632,
            "y": 0.4594594594594595
          },
          {
            "x": 0.8947368421052632,
            "y": 0.4473684210526316
          },
          {
            "x": 0.8947368421052632,
            "y": 0.4358974358974359
          },
          {
            "x": 0.8947368421052632,
            "y": 0.425
          },
          {
            "x": 0.8947368421052632,
            "y": 0.4146341463414634
          },
          {
            "x": 0.9473684210526315,
            "y": 0.42857142857142855
          },
          {
            "x": 0.9473684210526315,
            "y": 0.4186046511627907
          },
          {
            "x": 0.9473684210526315,
            "y": 0.4090909090909091
          },
          {
            "x": 0.9473684210526315,
            "y": 0.4
          },
          {
            "x": 0.9473684210526315,
            "y": 0.391304347826087
          },
          {
            "x": 0.9473684210526315,
            "y": 0.3829787234042553
          },
          {
            "x": 0.9473684210526315,
            "y": 0.375
          },
          {
            "x": 0.9473684210526315,
            "y": 0.3673469387755102
          },
          {
            "x": 0.9473684210526315,
            "y": 0.36
          },
          {
            "x": 0.9473684210526315,
            "y": 0.35294117647058826
          },
          {
            "x": 0.9473684210526315,
            "y": 0.34615384615384615
          },
          {
            "x": 0.9473684210526315,
            "y": 0.33962264150943394
          },
          {
            "x": 0.9473684210526315,
            "y": 0.3333333333333333
          },
          {
            "x": 0.9473684210526315,
            "y": 0.32727272727272727
          },
          {
            "x": 0.9473684210526315,
            "y": 0.32142857142857145
          },
          {
            "x": 0.9473684210526315,
            "y": 0.3157894736842105
          },
          {
            "x": 0.9473684210526315,
            "y": 0.3103448275862069
          },
          {
            "x": 0.9473684210526315,
            "y": 0.3050847457627119
          },
          {
            "x": 0.9473684210526315,
            "y": 0.3
          },
          {
            "x": 0.9473684210526315,
            "y": 0.29508196721311475
          },
          {
            "x": 0.9473684210526315,
            "y": 0.2903225806451613
          },
          {
            "x": 0.9473684210526315,
            "y": 0.2857142857142857
          },
          {
            "x": 0.9473684210526315,
            "y": 0.28125
          },
          {
            "x": 0.9473684210526315,
            "y": 0.27692307692307694
          },
          {
            "x": 0.9473684210526315,
            "y": 0.2727272727272727
          },
          {
            "x": 0.9473684210526315,
            "y": 0.26865671641791045
          },
          {
            "x": 1.0,
            "y": 0.27941176470588236
          },
          {
            "x": 1.0,
            "y": 0.2753623188405797
          },
          {
            "x": 1.0,
            "y": 0.2714285714285714
          },
          {
            "x": 1.0,
            "y": 0.2676056338028169
          },
          {
            "x": 1.0,
            "y": 0.2638888888888889
          },
          {
            "x": 1.0,
            "y": 0.2602739726027397
          },
          {
            "x": 1.0,
            "y": 0.25675675675675674
          },
          {
            "x": 1.0,
            "y": 0.25333333333333335
          },
          {
            "x": 1.0,
            "y": 0.25
          },
          {
            "x": 1.0,
            "y": 0.24675324675324675
          },
          {
            "x": 1.0,
            "y": 0.24358974358974358
          },
          {
            "x": 1.0,
            "y": 0.24050632911392406
          },
          {
            "x": 1.0,
            "y": 0.2375
          },
          {
            "x": 1.0,
            "y": 0.2345679012345679
          }
        ],
        "feature_importance": [
          {
            "feature": "model_type",
            "importance_mean": 0.21756325472421367,
            "importance_std": 0.04297644783826025
          },
          {
            "feature": "braking",
            "importance_mean": 0.09537028092575422,
            "importance_std": 0.05463453051107353
          },
          {
            "feature": "horse_power",
            "importance_mean": 0.07467923436066723,
            "importance_std": 0.05083181298135761
          },
          {
            "feature": "stock_rating",
            "importance_mean": 0.05976764789521302,
            "importance_std": 0.06338445220183773
          },
          {
            "feature": "0_60_mph",
            "importance_mean": 0.020463162659770273,
            "importance_std": 0.010608726888507398
          },
          {
            "feature": "drive_type",
            "importance_mean": 0.019637684523216403,
            "importance_std": 0.014035133680576913
          },
          {
            "feature": "launch",
            "importance_mean": 0.005229109703682899,
            "importance_std": 0.005827036187248396
          },
          {
            "feature": "weight_lbs",
            "importance_mean": 0.0035480221145807733,
            "importance_std": 0.005425594396738392
          },
          {
            "feature": "acceleration",
            "importance_mean": 0.0034177903527928266,
            "importance_std": 0.006023396175431203
          },
          {
            "feature": "0_100_mph",
            "importance_mean": 0.0022189648543929352,
            "importance_std": 0.01592968792724264
          },
          {
            "feature": "offroad",
            "importance_mean": 0.00033855272867838737,
            "importance_std": 0.00021502406970114746
          },
          {
            "feature": "top_speed",
            "importance_mean": 0.0,
            "importance_std": 0.0
          },
          {
            "feature": "speed",
            "importance_mean": -0.0028791738635079445,
            "importance_std": 0.03572127687599248
          },
          {
            "feature": "g_force",
            "importance_mean": -0.00963915099757312,
            "importance_std": 0.017492035102416932
          },
          {
            "feature": "handling",
            "importance_mean": -0.015495488457166584,
            "importance_std": 0.02272355219998794
          },
          {
            "feature": "car_source",
            "importance_mean": -0.02955794645448484,
            "importance_std": 0.036256628294077
          }
        ]
      },
      "interpretation": "Average precision is 0.670 against a 0.243 prevalence baseline; this measures ranking on the held-out records, not causality.",
      "limitations": [
        "The 500,000-credit threshold is a declared prototype choice, not an official game category.",
        "Prices and availability can change with game updates, events, and editions.",
        "Some performance fields are missing for roughly three quarters of records.",
        "Random splitting cannot test later downloadable content or game-version drift."
      ]
    },
    {
      "id": "dino",
      "title": "Dinosaur diet classification",
      "type": "classification",
      "target": "Herbivore",
      "business_question": "Can morphology, locomotion, period, geography, and discovery context distinguish herbivores from non-herbivores?",
      "business_use": "Use as an educational morphology exercise and a flag for expert review, never as a substitute for palaeontological evidence.",
      "primary_metric": "Average precision",
      "source_file": "dinoDatasetCSV.csv",
      "runtime_seconds": 36.29,
      "dataset": {
        "rows": 1527,
        "columns": 9,
        "features_used": 8,
        "missing_total": 115,
        "duplicate_rows": 154,
        "missing_by_column": {
          "length_m": 31,
          "weight_kg": 30,
          "height_m": 24,
          "first_discovered_year": 30,
          "locomotion": 0,
          "geological_period": 0,
          "lived_in": 0,
          "intelligence_level": 0,
          "target": 0
        },
        "outliers_iqr": [
          {
            "feature": "length_m",
            "count": 64,
            "rate": 0.04191224623444663,
            "minimum": 0.3,
            "maximum": 37.0,
            "clip_low": 0.5,
            "clip_high": 27.569999999999936
          },
          {
            "feature": "weight_kg",
            "count": 170,
            "rate": 0.11132940406024885,
            "minimum": 0.1,
            "maximum": 75000.0,
            "clip_low": 0.38,
            "clip_high": 35000.0
          },
          {
            "feature": "height_m",
            "count": 50,
            "rate": 0.03274394237066143,
            "minimum": 0.1,
            "maximum": 12.0,
            "clip_low": 0.25,
            "clip_high": 7.259999999999991
          },
          {
            "feature": "first_discovered_year",
            "count": 226,
            "rate": 0.14800261951538965,
            "minimum": 1808.0,
            "maximum": 2023.0,
            "clip_low": 1818.0,
            "clip_high": 2021.0
          }
        ],
        "categories": {
          "locomotion": [
            {
              "value": "Bipedal",
              "count": 912
            },
            {
              "value": "Quadrupedal",
              "count": 594
            },
            {
              "value": "Mixed",
              "count": 13
            },
            {
              "value": "Unknown",
              "count": 5
            },
            {
              "value": "Aquatic",
              "count": 3
            }
          ],
          "geological_period": [
            {
              "value": "Late Cretaceous",
              "count": 654
            },
            {
              "value": "Late Jurassic",
              "count": 205
            },
            {
              "value": "Early Cretaceous",
              "count": 105
            },
            {
              "value": "Early Jurassic",
              "count": 86
            },
            {
              "value": "Late Triassic",
              "count": 47
            },
            {
              "value": "Late Cretaceous (Maastrichtian)",
              "count": 46
            },
            {
              "value": "Late Cretaceous (Campanian)",
              "count": 45
            },
            {
              "value": "Jurassic",
              "count": 45
            },
            {
              "value": "Middle Jurassic",
              "count": 36
            },
            {
              "value": "Cretaceous",
              "count": 26
            },
            {
              "value": "Early Cretaceous (Aptian)",
              "count": 24
            },
            {
              "value": "Early Cretaceous (Barremian)",
              "count": 18
            },
            {
              "value": "Late Cretaceous (Cenomanian)",
              "count": 16
            },
            {
              "value": "Late Jurassic (Kimmeridgian)",
              "count": 15
            },
            {
              "value": "Late Jurassic (Oxfordian)",
              "count": 13
            },
            {
              "value": "Late Cretaceous (Campanian to Maastrichtian)",
              "count": 11
            },
            {
              "value": "Late Cretaceous (Turonian)",
              "count": 7
            },
            {
              "value": "Triassic (Norian)",
              "count": 7
            },
            {
              "value": "Middle Jurassic (Bathonian)",
              "count": 7
            },
            {
              "value": "Late Jurassic (Tithonian)",
              "count": 7
            },
            {
              "value": "Early Cretaceous (Barremian to Aptian)",
              "count": 6
            },
            {
              "value": "Early Cretaceous (Albian)",
              "count": 6
            },
            {
              "value": "Late Triassic (Norian)",
              "count": 6
            },
            {
              "value": "Cretaceous (Cenomanian)",
              "count": 6
            },
            {
              "value": "Triassic",
              "count": 5
            },
            {
              "value": "Late Cretaceous (Santonian)",
              "count": 5
            },
            {
              "value": "Early Cretaceous (Valanginian)",
              "count": 5
            },
            {
              "value": "Early Cretaceous (Aptian to Albian)",
              "count": 4
            },
            {
              "value": "Jurassic (Oxfordian)",
              "count": 4
            },
            {
              "value": "Early Jurassic (Hettangian)",
              "count": 4
            },
            {
              "value": "Late Triassic (Carnian)",
              "count": 4
            },
            {
              "value": "Late Jurassic (Kimmeridgian to Tithonian)",
              "count": 3
            },
            {
              "value": "Late Cretaceous (Santonian to Campanian)",
              "count": 3
            },
            {
              "value": "Jurassic (?)",
              "count": 3
            },
            {
              "value": "Early Jurassic (Sinemurian)",
              "count": 2
            },
            {
              "value": "Early Jurassic (Sinemurian to Pliensbachian)",
              "count": 2
            },
            {
              "value": "Late Cretaceous (Cenomanian to Turonian)",
              "count": 2
            },
            {
              "value": "Middle Jurassic (Bajocian)",
              "count": 2
            },
            {
              "value": "Early Jurassic (Toarcian)",
              "count": 2
            },
            {
              "value": "?",
              "count": 2
            },
            {
              "value": "Early Triassic",
              "count": 2
            },
            {
              "value": "Late Triassic?",
              "count": 1
            },
            {
              "value": "Late Triassic to Early Jurassic",
              "count": 1
            },
            {
              "value": "Mid Cretaceous",
              "count": 1
            },
            {
              "value": "Late Jurassic or Early Cretaceous (uncertain)",
              "count": 1
            },
            {
              "value": "Triassic (Carnian)",
              "count": 1
            },
            {
              "value": "Triassic (Early Jurassic boundary)",
              "count": 1
            },
            {
              "value": "Middle Jurassic (Bathonian to Callovian)",
              "count": 1
            },
            {
              "value": "Cretaceous (Albian)",
              "count": 1
            },
            {
              "value": "Late Cretaceous (Turonian to Coniacian)",
              "count": 1
            },
            {
              "value": "Early Jurassic (Pliensbachian to Toarcian)",
              "count": 1
            },
            {
              "value": "Middle Jurassic (Callovian)",
              "count": 1
            },
            {
              "value": "Late Triassic (Rhaetian)",
              "count": 1
            },
            {
              "value": "Late Jurassic to Late Cretaceous",
              "count": 1
            },
            {
              "value": "Middle Jurassic (Bajocian to Bathonian)",
              "count": 1
            },
            {
              "value": "Late Cretaceous (disputed)",
              "count": 1
            },
            {
              "value": "Middle Jurassic (Aalenian to Bajocian)",
              "count": 1
            },
            {
              "value": "Jurassic (Tithonian)",
              "count": 1
            },
            {
              "value": "Middle Cretaceous (Turonian)",
              "count": 1
            },
            {
              "value": "Jurassic (Toarcian?)",
              "count": 1
            },
            {
              "value": "Cretaceous (unspecified)",
              "count": 1
            },
            {
              "value": "Jurassic (Oxfordian?)",
              "count": 1
            },
            {
              "value": "Early Cretaceous (Berriasian)",
              "count": 1
            },
            {
              "value": "Cretaceous (Campanian)",
              "count": 1
            },
            {
              "value": "Middle Jurassic (Aalenian to Bathonian)",
              "count": 1
            },
            {
              "value": "Triassic (Anisian)",
              "count": 1
            },
            {
              "value": "Early Jurassic (Hettangian to Sinemurian)",
              "count": 1
            },
            {
              "value": "Early to Middle Triassic",
              "count": 1
            },
            {
              "value": "Middle Cretaceous",
              "count": 1
            },
            {
              "value": "Early/Mid Triassic",
              "count": 1
            }
          ],
          "lived_in": [
            {
              "value": "North America",
              "count": 252
            },
            {
              "value": "Asia",
              "count": 233
            },
            {
              "value": "South America",
              "count": 152
            },
            {
              "value": "Europe",
              "count": 131
            },
            {
              "value": "Asia (China)",
              "count": 114
            },
            {
              "value": "Argentina",
              "count": 75
            },
            {
              "value": "China",
              "count": 53
            },
            {
              "value": "USA",
              "count": 45
            },
            {
              "value": "Africa",
              "count": 38
            },
            {
              "value": "South America (Argentina)",
              "count": 31
            },
            {
              "value": "Asia (Mongolia)",
              "count": 27
            },
            {
              "value": "Europe (England)",
              "count": 23
            },
            {
              "value": "France",
              "count": 21
            },
            {
              "value": "Canada",
              "count": 20
            },
            {
              "value": "Asia (India)",
              "count": 17
            },
            {
              "value": "Mongolia",
              "count": 16
            },
            {
              "value": "Europe (Spain)",
              "count": 12
            },
            {
              "value": "Africa (South Africa)",
              "count": 10
            },
            {
              "value": "Australia",
              "count": 9
            },
            {
              "value": "North America (Utah, USA)",
              "count": 9
            },
            {
              "value": "Europe (Portugal)",
              "count": 9
            },
            {
              "value": "Asia (Russia)",
              "count": 7
            },
            {
              "value": "North America (USA)",
              "count": 6
            },
            {
              "value": "Asia (Japan)",
              "count": 6
            },
            {
              "value": "South America (Brazil)",
              "count": 6
            },
            {
              "value": "North America (New Mexico, USA)",
              "count": 6
            },
            {
              "value": "North America (Texas, USA)",
              "count": 6
            },
            {
              "value": "Asia (Kazakhstan)",
              "count": 6
            },
            {
              "value": "North America (Montana, USA)",
              "count": 6
            },
            {
              "value": "North America (Wyoming, USA)",
              "count": 5
            },
            {
              "value": "North America (Colorado, USA)",
              "count": 5
            },
            {
              "value": "North America (Canada)",
              "count": 5
            },
            {
              "value": "Europe (France)",
              "count": 5
            },
            {
              "value": "North America (Alberta, Canada)",
              "count": 5
            },
            {
              "value": "Europe (UK)",
              "count": 5
            },
            {
              "value": "Africa (Niger)",
              "count": 4
            },
            {
              "value": "Africa (Morocco)",
              "count": 4
            },
            {
              "value": "Antarctica",
              "count": 4
            },
            {
              "value": "North America (South Dakota, USA)",
              "count": 4
            },
            {
              "value": "Africa (Tanzania)",
              "count": 4
            },
            {
              "value": "Asia (Pakistan)",
              "count": 4
            },
            {
              "value": "Europe (Germany)",
              "count": 4
            },
            {
              "value": "Asia (Thailand)",
              "count": 4
            },
            {
              "value": "Oceania",
              "count": 4
            },
            {
              "value": "South Africa",
              "count": 3
            },
            {
              "value": "North America (Alberta)",
              "count": 3
            },
            {
              "value": "Europe (Romania)",
              "count": 3
            },
            {
              "value": "Asia (Uzbekistan)",
              "count": 3
            },
            {
              "value": "Global",
              "count": 3
            },
            {
              "value": "Madagascar",
              "count": 3
            },
            {
              "value": "Niger",
              "count": 2
            },
            {
              "value": "Spain",
              "count": 2
            },
            {
              "value": "England",
              "count": 2
            },
            {
              "value": "North Africa",
              "count": 2
            },
            {
              "value": "Brazil",
              "count": 2
            },
            {
              "value": "Morocco",
              "count": 2
            },
            {
              "value": "Europe (Hungary)",
              "count": 2
            },
            {
              "value": "North America (California, USA)",
              "count": 2
            },
            {
              "value": "North America (Alabama, USA)",
              "count": 2
            },
            {
              "value": "Africa (Madagascar)",
              "count": 2
            },
            {
              "value": "Asia (China, Mongolia)",
              "count": 2
            },
            {
              "value": "South America (Chile)",
              "count": 2
            },
            {
              "value": "North America (Canada, USA)",
              "count": 2
            },
            {
              "value": "North America (New Jersey, USA)",
              "count": 2
            },
            {
              "value": "Australia (Victoria)",
              "count": 2
            },
            {
              "value": "Australia (New South Wales)",
              "count": 2
            },
            {
              "value": "Europe (Croatia)",
              "count": 2
            },
            {
              "value": "Asia (Korea)",
              "count": 2
            },
            {
              "value": "Mexico",
              "count": 1
            },
            {
              "value": "UK",
              "count": 1
            },
            {
              "value": "Kyrgyzstan",
              "count": 1
            },
            {
              "value": "Lesotho",
              "count": 1
            },
            {
              "value": "USA (California)",
              "count": 1
            },
            {
              "value": "USA (Montana)",
              "count": 1
            },
            {
              "value": "India",
              "count": 1
            },
            {
              "value": "Montana, USA",
              "count": 1
            },
            {
              "value": "Mongolia / Canada",
              "count": 1
            },
            {
              "value": "USA (Montana/Wyoming)",
              "count": 1
            },
            {
              "value": "USA (Oklahoma)",
              "count": 1
            },
            {
              "value": "USA (Arizona)",
              "count": 1
            },
            {
              "value": "Germany",
              "count": 1
            },
            {
              "value": "Africa (England)",
              "count": 1
            },
            {
              "value": "Northern Alaska, USA",
              "count": 1
            },
            {
              "value": "South Korea",
              "count": 1
            },
            {
              "value": "Uzbekistan",
              "count": 1
            },
            {
              "value": "Zimbabwe",
              "count": 1
            },
            {
              "value": "Romania",
              "count": 1
            },
            {
              "value": "Portugal",
              "count": 1
            },
            {
              "value": "United States (New Mexico)",
              "count": 1
            },
            {
              "value": "North America (Montana, Utah)",
              "count": 1
            },
            {
              "value": "North America (Oklahoma, Texas)",
              "count": 1
            },
            {
              "value": "Canada (Alberta)",
              "count": 1
            },
            {
              "value": "Northern Africa (Egypt, Niger)",
              "count": 1
            },
            {
              "value": "Argentina, Brazil",
              "count": 1
            },
            {
              "value": "Mali",
              "count": 1
            },
            {
              "value": "Texas, USA",
              "count": 1
            },
            {
              "value": "New Mexico, USA",
              "count": 1
            },
            {
              "value": "Kazakhstan",
              "count": 1
            },
            {
              "value": "North America (Alaska)",
              "count": 1
            },
            {
              "value": "Europe (Portugal or UK)",
              "count": 1
            },
            {
              "value": "Asia (Inner Mongolia, China)",
              "count": 1
            },
            {
              "value": "Africa (Angola)",
              "count": 1
            },
            {
              "value": "North America (Arkansas, USA)",
              "count": 1
            },
            {
              "value": "Asia (Uzbekistan, Mongolia)",
              "count": 1
            },
            {
              "value": "North America (Maryland, USA)",
              "count": 1
            },
            {
              "value": "Africa (Egypt)",
              "count": 1
            },
            {
              "value": "Europe (Netherlands)",
              "count": 1
            },
            {
              "value": "Europe (England, France)",
              "count": 1
            },
            {
              "value": "Europe (Czech Republic)",
              "count": 1
            },
            {
              "value": "North America (Arizona, USA)",
              "count": 1
            },
            {
              "value": "Europe (France, Spain)",
              "count": 1
            },
            {
              "value": "North America (Washington, D.C., USA)",
              "count": 1
            },
            {
              "value": "Global (mainly Laurasia)",
              "count": 1
            },
            {
              "value": "North America (USA, Canada, Mexico)",
              "count": 1
            },
            {
              "value": "Africa (Algeria)",
              "count": 1
            },
            {
              "value": "North America (Kansas, USA)",
              "count": 1
            },
            {
              "value": "North America (Mexico)",
              "count": 1
            },
            {
              "value": "Europe (Belgium)",
              "count": 1
            },
            {
              "value": "Australia (Queensland)",
              "count": 1
            },
            {
              "value": "Europe (Wales, UK)",
              "count": 1
            },
            {
              "value": "Europe (Denmark)",
              "count": 1
            },
            {
              "value": "Europe (Portugal, Spain)",
              "count": 1
            },
            {
              "value": "Asia (Kyrgyzstan)",
              "count": 1
            },
            {
              "value": "Antarctica (Mount Kirkpatrick)",
              "count": 1
            },
            {
              "value": "Asia (Laos)",
              "count": 1
            },
            {
              "value": "Asia (Brazil)",
              "count": 1
            },
            {
              "value": "Asia (Europe)",
              "count": 1
            },
            {
              "value": "Oceania (Australia)",
              "count": 1
            },
            {
              "value": "?",
              "count": 1
            }
          ],
          "intelligence_level": [
            {
              "value": "Medium",
              "count": 773
            },
            {
              "value": "Low",
              "count": 260
            },
            {
              "value": "Unknown",
              "count": 185
            },
            {
              "value": "Small",
              "count": 117
            },
            {
              "value": "Large",
              "count": 102
            },
            {
              "value": "High",
              "count": 75
            },
            {
              "value": "Tiny",
              "count": 5
            },
            {
              "value": "Huge",
              "count": 3
            },
            {
              "value": "Very Large",
              "count": 2
            },
            {
              "value": "?",
              "count": 2
            },
            {
              "value": "Possibly medium",
              "count": 1
            },
            {
              "value": "Very small",
              "count": 1
            },
            {
              "value": "Very large",
              "count": 1
            }
          ]
        },
        "target_summary": {
          "minimum": 0.0,
          "maximum": 1.0,
          "mean": 0.6358873608382449,
          "median": 1.0,
          "std": 0.48133808456774957
        },
        "target_counts": {
          "Carnivore / Omnivore": 556,
          "Herbivore": 971
        },
        "positive_label": "Herbivore",
        "negative_label": "Carnivore / Omnivore",
        "positive_rate": 0.6358873608382449
      },
      "audit_interpretation": "Fifteen ambiguous or malformed diet rows are excluded. Locomotion variants are collapsed into five broad categories; numeric missingness is retained for pipeline imputation.",
      "split": {
        "train": {
          "rows": 1068,
          "rate": 0.6994106090373281
        },
        "validation": {
          "rows": 229,
          "rate": 0.14996725605762934
        },
        "test": {
          "rows": 230,
          "rate": 0.15062213490504256
        },
        "strategy": "Stratified random 70/15/15 split"
      },
      "preparation": {
        "numeric_features": [
          "length_m",
          "weight_kg",
          "height_m",
          "first_discovered_year"
        ],
        "categorical_features": [
          "locomotion",
          "geological_period",
          "lived_in",
          "intelligence_level"
        ],
        "excluded_features": [
          "scientific_name",
          "common_name",
          "meaning",
          "behavior_notes",
          "notable_features",
          "source_link",
          "row_index"
        ],
        "feature_selection": "Only structured physical and contextual fields are retained. Names, meanings, behaviour notes, notable features, source URLs, and row index are excluded because text may state or strongly reveal diet.",
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
          "accuracy": 0.6375545851528385,
          "balanced_accuracy": 0.5,
          "precision": 0.6375545851528385,
          "recall": 1.0,
          "f1": 0.7786666666666666,
          "roc_auc": 0.5,
          "average_precision": 0.6375545851528385,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 0,
            "fp": 83,
            "fn": 0,
            "tp": 146
          }
        },
        {
          "model": "Logistic regression",
          "accuracy": 0.7860262008733624,
          "balanced_accuracy": 0.8165951477141442,
          "precision": 0.944954128440367,
          "recall": 0.7054794520547946,
          "f1": 0.807843137254902,
          "roc_auc": 0.9052648951972273,
          "average_precision": 0.953340755046342,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 77,
            "fp": 6,
            "fn": 43,
            "tp": 103
          }
        },
        {
          "model": "Random forest",
          "accuracy": 0.8034934497816594,
          "balanced_accuracy": 0.8380920944050173,
          "precision": 0.9719626168224299,
          "recall": 0.7123287671232876,
          "f1": 0.8221343873517787,
          "roc_auc": 0.914342300709688,
          "average_precision": 0.956855503968918,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 80,
            "fp": 3,
            "fn": 42,
            "tp": 104
          }
        },
        {
          "model": "Histogram gradient boosting",
          "accuracy": 0.8820960698689956,
          "balanced_accuracy": 0.878940419211091,
          "precision": 0.9219858156028369,
          "recall": 0.8904109589041096,
          "f1": 0.9059233449477352,
          "roc_auc": 0.9558508004621225,
          "average_precision": 0.977465246059868,
          "threshold": 0.5,
          "confusion_matrix": {
            "tn": 72,
            "fp": 11,
            "fn": 16,
            "tp": 130
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
        "best_cv_score": 0.9702153727323151,
        "top_results": [
          {
            "rank": 1,
            "mean_cv_score": 0.9702153727323151,
            "std_cv_score": 0.0029083629365392323,
            "train_score": 0.9911453933885441,
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
            "mean_cv_score": 0.9690036642328849,
            "std_cv_score": 0.003745849132211732,
            "train_score": 0.9877255975497988,
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
            "mean_cv_score": 0.9681098093722958,
            "std_cv_score": 0.0024330193370876315,
            "train_score": 0.9922000014060239,
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
            "mean_cv_score": 0.9670013135510945,
            "std_cv_score": 0.0028102422435393455,
            "train_score": 0.9894776574837121,
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
            "mean_cv_score": 0.9666547535983703,
            "std_cv_score": 0.0034513277630588836,
            "train_score": 0.9852431478161006,
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
            "rank": 6,
            "mean_cv_score": 0.9661634834001523,
            "std_cv_score": 0.0015609668729116065,
            "train_score": 0.9978817220613063,
            "parameters": {
              "min_samples_leaf": 40,
              "max_leaf_nodes": 63,
              "max_iter": 300,
              "max_depth": 6,
              "learning_rate": 0.12,
              "l2_regularization": 5.0
            }
          }
        ],
        "selected_threshold": 0.24000000000000002,
        "threshold_candidates": [
          {
            "threshold": 0.1,
            "precision": 0.7712765957446809,
            "recall": 0.9931506849315068,
            "f1": 0.8682634730538922
          },
          {
            "threshold": 0.15000000000000002,
            "precision": 0.8135593220338984,
            "recall": 0.9863013698630136,
            "f1": 0.891640866873065
          },
          {
            "threshold": 0.2,
            "precision": 0.8641975308641975,
            "recall": 0.958904109589041,
            "f1": 0.9090909090909091
          },
          {
            "threshold": 0.24000000000000002,
            "precision": 0.9013157894736842,
            "recall": 0.9383561643835616,
            "f1": 0.9194630872483222
          },
          {
            "threshold": 0.25,
            "precision": 0.9006622516556292,
            "recall": 0.9315068493150684,
            "f1": 0.9158249158249159
          },
          {
            "threshold": 0.30000000000000004,
            "precision": 0.9236111111111112,
            "recall": 0.910958904109589,
            "f1": 0.9172413793103448
          },
          {
            "threshold": 0.35,
            "precision": 0.9285714285714286,
            "recall": 0.8904109589041096,
            "f1": 0.9090909090909091
          },
          {
            "threshold": 0.4,
            "precision": 0.9328358208955224,
            "recall": 0.8561643835616438,
            "f1": 0.8928571428571429
          },
          {
            "threshold": 0.45000000000000007,
            "precision": 0.9465648854961832,
            "recall": 0.8493150684931506,
            "f1": 0.8953068592057761
          },
          {
            "threshold": 0.5,
            "precision": 0.9606299212598425,
            "recall": 0.8356164383561644,
            "f1": 0.8937728937728938
          },
          {
            "threshold": 0.55,
            "precision": 0.975609756097561,
            "recall": 0.821917808219178,
            "f1": 0.8921933085501859
          },
          {
            "threshold": 0.6,
            "precision": 0.9834710743801653,
            "recall": 0.815068493150685,
            "f1": 0.8913857677902621
          },
          {
            "threshold": 0.65,
            "precision": 0.9829059829059829,
            "recall": 0.7876712328767124,
            "f1": 0.8745247148288974
          },
          {
            "threshold": 0.7,
            "precision": 0.9824561403508771,
            "recall": 0.7671232876712328,
            "f1": 0.8615384615384616
          },
          {
            "threshold": 0.75,
            "precision": 1.0,
            "recall": 0.726027397260274,
            "f1": 0.8412698412698413
          },
          {
            "threshold": 0.8,
            "precision": 1.0,
            "recall": 0.6917808219178082,
            "f1": 0.8178137651821862
          },
          {
            "threshold": 0.85,
            "precision": 1.0,
            "recall": 0.678082191780822,
            "f1": 0.8081632653061225
          },
          {
            "threshold": 0.9,
            "precision": 1.0,
            "recall": 0.6643835616438356,
            "f1": 0.7983539094650206
          }
        ]
      },
      "test": {
        "metrics": {
          "accuracy": 0.8478260869565217,
          "balanced_accuracy": 0.814416177429876,
          "precision": 0.8404907975460123,
          "recall": 0.9383561643835616,
          "f1": 0.8867313915857605,
          "roc_auc": 0.9449608610567515,
          "average_precision": 0.970842932726659,
          "threshold": 0.24000000000000002,
          "confusion_matrix": {
            "tn": 58,
            "fp": 26,
            "fn": 9,
            "tp": 137
          }
        },
        "roc_curve": [
          {
            "x": 0.0,
            "y": 0.0
          },
          {
            "x": 0.0,
            "y": 0.02054794520547945
          },
          {
            "x": 0.0,
            "y": 0.0547945205479452
          },
          {
            "x": 0.0,
            "y": 0.07534246575342465
          },
          {
            "x": 0.0,
            "y": 0.08904109589041095
          },
          {
            "x": 0.0,
            "y": 0.10273972602739725
          },
          {
            "x": 0.0,
            "y": 0.13013698630136986
          },
          {
            "x": 0.0,
            "y": 0.14383561643835616
          },
          {
            "x": 0.0,
            "y": 0.1643835616438356
          },
          {
            "x": 0.0,
            "y": 0.2328767123287671
          },
          {
            "x": 0.0,
            "y": 0.2465753424657534
          },
          {
            "x": 0.0,
            "y": 0.589041095890411
          },
          {
            "x": 0.0,
            "y": 0.6027397260273972
          },
          {
            "x": 0.0,
            "y": 0.6232876712328768
          },
          {
            "x": 0.0,
            "y": 0.684931506849315
          },
          {
            "x": 0.011904761904761904,
            "y": 0.684931506849315
          },
          {
            "x": 0.011904761904761904,
            "y": 0.6917808219178082
          },
          {
            "x": 0.023809523809523808,
            "y": 0.6917808219178082
          },
          {
            "x": 0.023809523809523808,
            "y": 0.7328767123287672
          },
          {
            "x": 0.05952380952380952,
            "y": 0.7328767123287672
          },
          {
            "x": 0.05952380952380952,
            "y": 0.7671232876712328
          },
          {
            "x": 0.07142857142857142,
            "y": 0.7671232876712328
          },
          {
            "x": 0.07142857142857142,
            "y": 0.773972602739726
          },
          {
            "x": 0.08333333333333333,
            "y": 0.773972602739726
          },
          {
            "x": 0.08333333333333333,
            "y": 0.821917808219178
          },
          {
            "x": 0.09523809523809523,
            "y": 0.821917808219178
          },
          {
            "x": 0.09523809523809523,
            "y": 0.8561643835616438
          },
          {
            "x": 0.13095238095238096,
            "y": 0.8561643835616438
          },
          {
            "x": 0.13095238095238096,
            "y": 0.8698630136986302
          },
          {
            "x": 0.14285714285714285,
            "y": 0.8698630136986302
          },
          {
            "x": 0.14285714285714285,
            "y": 0.8767123287671232
          },
          {
            "x": 0.15476190476190477,
            "y": 0.8767123287671232
          },
          {
            "x": 0.15476190476190477,
            "y": 0.8972602739726028
          },
          {
            "x": 0.17857142857142858,
            "y": 0.8972602739726028
          },
          {
            "x": 0.17857142857142858,
            "y": 0.910958904109589
          },
          {
            "x": 0.21428571428571427,
            "y": 0.910958904109589
          },
          {
            "x": 0.21428571428571427,
            "y": 0.9178082191780822
          },
          {
            "x": 0.2261904761904762,
            "y": 0.9178082191780822
          },
          {
            "x": 0.2261904761904762,
            "y": 0.9246575342465754
          },
          {
            "x": 0.27380952380952384,
            "y": 0.9246575342465754
          },
          {
            "x": 0.27380952380952384,
            "y": 0.9315068493150684
          },
          {
            "x": 0.2857142857142857,
            "y": 0.9315068493150684
          },
          {
            "x": 0.2857142857142857,
            "y": 0.9383561643835616
          },
          {
            "x": 0.30952380952380953,
            "y": 0.9383561643835616
          },
          {
            "x": 0.30952380952380953,
            "y": 0.9452054794520548
          },
          {
            "x": 0.3333333333333333,
            "y": 0.9452054794520548
          },
          {
            "x": 0.3333333333333333,
            "y": 0.958904109589041
          },
          {
            "x": 0.34523809523809523,
            "y": 0.958904109589041
          },
          {
            "x": 0.34523809523809523,
            "y": 0.9657534246575342
          },
          {
            "x": 0.36904761904761907,
            "y": 0.9657534246575342
          },
          {
            "x": 0.36904761904761907,
            "y": 0.9726027397260274
          },
          {
            "x": 0.4523809523809524,
            "y": 0.9726027397260274
          },
          {
            "x": 0.4523809523809524,
            "y": 0.9794520547945206
          },
          {
            "x": 0.5476190476190477,
            "y": 0.9794520547945206
          },
          {
            "x": 0.5476190476190477,
            "y": 0.9863013698630136
          },
          {
            "x": 0.6785714285714286,
            "y": 0.9863013698630136
          },
          {
            "x": 0.7261904761904762,
            "y": 0.9863013698630136
          },
          {
            "x": 0.7261904761904762,
            "y": 0.9931506849315068
          },
          {
            "x": 0.8095238095238095,
            "y": 0.9931506849315068
          },
          {
            "x": 0.8095238095238095,
            "y": 1.0
          },
          {
            "x": 0.8452380952380952,
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
            "x": 0.0273972602739726,
            "y": 1.0
          },
          {
            "x": 0.0410958904109589,
            "y": 1.0
          },
          {
            "x": 0.0547945205479452,
            "y": 1.0
          },
          {
            "x": 0.08904109589041095,
            "y": 1.0
          },
          {
            "x": 0.10273972602739725,
            "y": 1.0
          },
          {
            "x": 0.136986301369863,
            "y": 1.0
          },
          {
            "x": 0.1643835616438356,
            "y": 1.0
          },
          {
            "x": 0.18493150684931506,
            "y": 1.0
          },
          {
            "x": 0.19863013698630136,
            "y": 1.0
          },
          {
            "x": 0.21232876712328766,
            "y": 1.0
          },
          {
            "x": 0.22602739726027396,
            "y": 1.0
          },
          {
            "x": 0.2465753424657534,
            "y": 1.0
          },
          {
            "x": 0.2602739726027397,
            "y": 1.0
          },
          {
            "x": 0.273972602739726,
            "y": 1.0
          },
          {
            "x": 0.2876712328767123,
            "y": 1.0
          },
          {
            "x": 0.3082191780821918,
            "y": 1.0
          },
          {
            "x": 0.3219178082191781,
            "y": 1.0
          },
          {
            "x": 0.3356164383561644,
            "y": 1.0
          },
          {
            "x": 0.3493150684931507,
            "y": 1.0
          },
          {
            "x": 0.363013698630137,
            "y": 1.0
          },
          {
            "x": 0.3767123287671233,
            "y": 1.0
          },
          {
            "x": 0.3904109589041096,
            "y": 1.0
          },
          {
            "x": 0.410958904109589,
            "y": 1.0
          },
          {
            "x": 0.4246575342465753,
            "y": 1.0
          },
          {
            "x": 0.4383561643835616,
            "y": 1.0
          },
          {
            "x": 0.4520547945205479,
            "y": 1.0
          },
          {
            "x": 0.4657534246575342,
            "y": 1.0
          },
          {
            "x": 0.4794520547945205,
            "y": 1.0
          },
          {
            "x": 0.4931506849315068,
            "y": 1.0
          },
          {
            "x": 0.5068493150684932,
            "y": 1.0
          },
          {
            "x": 0.5273972602739726,
            "y": 1.0
          },
          {
            "x": 0.541095890410959,
            "y": 1.0
          },
          {
            "x": 0.5547945205479452,
            "y": 1.0
          },
          {
            "x": 0.5684931506849316,
            "y": 1.0
          },
          {
            "x": 0.5821917808219178,
            "y": 1.0
          },
          {
            "x": 0.6027397260273972,
            "y": 1.0
          },
          {
            "x": 0.6301369863013698,
            "y": 1.0
          },
          {
            "x": 0.6438356164383562,
            "y": 1.0
          },
          {
            "x": 0.6643835616438356,
            "y": 1.0
          },
          {
            "x": 0.678082191780822,
            "y": 1.0
          },
          {
            "x": 0.684931506849315,
            "y": 0.9900990099009901
          },
          {
            "x": 0.6917808219178082,
            "y": 0.9805825242718447
          },
          {
            "x": 0.7054794520547946,
            "y": 0.9809523809523809
          },
          {
            "x": 0.7191780821917808,
            "y": 0.9813084112149533
          },
          {
            "x": 0.7328767123287672,
            "y": 0.981651376146789
          },
          {
            "x": 0.7328767123287672,
            "y": 0.9553571428571429
          },
          {
            "x": 0.7465753424657534,
            "y": 0.956140350877193
          },
          {
            "x": 0.7602739726027398,
            "y": 0.9568965517241379
          },
          {
            "x": 0.7671232876712328,
            "y": 0.9491525423728814
          },
          {
            "x": 0.773972602739726,
            "y": 0.9416666666666667
          },
          {
            "x": 0.7876712328767124,
            "y": 0.9426229508196722
          },
          {
            "x": 0.8013698630136986,
            "y": 0.9435483870967742
          },
          {
            "x": 0.815068493150685,
            "y": 0.9444444444444444
          },
          {
            "x": 0.8287671232876712,
            "y": 0.937984496124031
          },
          {
            "x": 0.8424657534246576,
            "y": 0.9389312977099237
          },
          {
            "x": 0.8561643835616438,
            "y": 0.9398496240601504
          },
          {
            "x": 0.8561643835616438,
            "y": 0.9259259259259259
          },
          {
            "x": 0.863013698630137,
            "y": 0.9197080291970803
          },
          {
            "x": 0.8698630136986302,
            "y": 0.9136690647482014
          },
          {
            "x": 0.8767123287671232,
            "y": 0.9078014184397163
          },
          {
            "x": 0.8972602739726028,
            "y": 0.9097222222222222
          },
          {
            "x": 0.8972602739726028,
            "y": 0.8972602739726028
          },
          {
            "x": 0.910958904109589,
            "y": 0.8986486486486487
          },
          {
            "x": 0.910958904109589,
            "y": 0.8866666666666667
          },
          {
            "x": 0.9178082191780822,
            "y": 0.881578947368421
          },
          {
            "x": 0.9246575342465754,
            "y": 0.8766233766233766
          },
          {
            "x": 0.9246575342465754,
            "y": 0.8653846153846154
          },
          {
            "x": 0.9246575342465754,
            "y": 0.8544303797468354
          },
          {
            "x": 0.9383561643835616,
            "y": 0.8509316770186336
          },
          {
            "x": 0.9383561643835616,
            "y": 0.8404907975460123
          },
          {
            "x": 0.9452054794520548,
            "y": 0.8363636363636363
          },
          {
            "x": 0.952054794520548,
            "y": 0.8323353293413174
          },
          {
            "x": 0.958904109589041,
            "y": 0.8284023668639053
          },
          {
            "x": 0.9657534246575342,
            "y": 0.8245614035087719
          },
          {
            "x": 0.9726027397260274,
            "y": 0.8208092485549133
          },
          {
            "x": 0.9726027397260274,
            "y": 0.8114285714285714
          },
          {
            "x": 0.9726027397260274,
            "y": 0.797752808988764
          },
          {
            "x": 0.9726027397260274,
            "y": 0.7888888888888889
          },
          {
            "x": 0.9794520547945206,
            "y": 0.7857142857142857
          },
          {
            "x": 0.9794520547945206,
            "y": 0.7771739130434783
          },
          {
            "x": 0.9794520547945206,
            "y": 0.7688172043010753
          },
          {
            "x": 0.9794520547945206,
            "y": 0.7606382978723404
          },
          {
            "x": 0.9863013698630136,
            "y": 0.7578947368421053
          },
          {
            "x": 0.9863013698630136,
            "y": 0.7461139896373057
          },
          {
            "x": 0.9863013698630136,
            "y": 0.7384615384615385
          },
          {
            "x": 0.9863013698630136,
            "y": 0.7309644670050761
          },
          {
            "x": 0.9863013698630136,
            "y": 0.7236180904522613
          },
          {
            "x": 0.9863013698630136,
            "y": 0.7164179104477612
          },
          {
            "x": 0.9931506849315068,
            "y": 0.7038834951456311
          },
          {
            "x": 0.9931506849315068,
            "y": 0.6971153846153846
          },
          {
            "x": 0.9931506849315068,
            "y": 0.6904761904761905
          },
          {
            "x": 0.9931506849315068,
            "y": 0.6807511737089202
          },
          {
            "x": 1.0,
            "y": 0.6728110599078341
          },
          {
            "x": 1.0,
            "y": 0.6666666666666666
          },
          {
            "x": 1.0,
            "y": 0.6606334841628959
          },
          {
            "x": 1.0,
            "y": 0.6547085201793722
          },
          {
            "x": 1.0,
            "y": 0.6488888888888888
          },
          {
            "x": 1.0,
            "y": 0.6431718061674009
          },
          {
            "x": 1.0,
            "y": 0.6347826086956522
          }
        ],
        "feature_importance": [
          {
            "feature": "locomotion",
            "importance_mean": 0.1620598673433896,
            "importance_std": 0.011296851351477092
          },
          {
            "feature": "weight_kg",
            "importance_mean": 0.0623003662417258,
            "importance_std": 0.0058654383971418755
          },
          {
            "feature": "intelligence_level",
            "importance_mean": 0.023484449799507784,
            "importance_std": 0.004338260393573954
          },
          {
            "feature": "height_m",
            "importance_mean": 0.016092754502663814,
            "importance_std": 0.0030192207306965818
          },
          {
            "feature": "length_m",
            "importance_mean": 0.014659953043330176,
            "importance_std": 0.004564947829706101
          },
          {
            "feature": "geological_period",
            "importance_mean": 0.012744875885967899,
            "importance_std": 0.0017530926889668715
          },
          {
            "feature": "lived_in",
            "importance_mean": 0.0030155316904791063,
            "importance_std": 0.00036216427146839924
          },
          {
            "feature": "first_discovered_year",
            "importance_mean": 0.0022661523020238994,
            "importance_std": 0.0007049959378801243
          }
        ]
      },
      "interpretation": "Average precision is 0.971 against a 0.636 prevalence baseline; this measures ranking on the held-out records, not causality.",
      "limitations": [
        "Diet labels reflect scientific interpretation and may change with new fossil evidence.",
        "The observations are species records, not independent random samples from all dinosaurs.",
        "Geography and period may encode collection and documentation biases.",
        "A binary herbivore split simplifies omnivory, disputed diets, and ecological nuance."
      ]
    }
  ]
};
