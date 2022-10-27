import { chart } from "/js/chart.js";
import colors from '../config/colors.json' assert {type: 'json'};
import config from '../config/chart.json' assert {type: 'json'};
import data from '../data/dataSets.json' assert {type: 'json'};
import labels from '../data/labels.json' assert {type: 'json'};

(() => chart("chart", config, data, labels, colors))();
