var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "90",
        "ok": "89",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "377",
        "ok": "377",
        "ko": "94"
    },
    "meanResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "94"
    },
    "standardDeviation": {
        "total": "55",
        "ok": "55",
        "ko": "0"
    },
    "percentiles1": {
        "total": "93",
        "ok": "93",
        "ko": "94"
    },
    "percentiles2": {
        "total": "114",
        "ok": "114",
        "ko": "94"
    },
    "percentiles3": {
        "total": "126",
        "ok": "126",
        "ko": "94"
    },
    "percentiles4": {
        "total": "160",
        "ok": "162",
        "ko": "94"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 89,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.525",
        "ok": "1.508",
        "ko": "0.017"
    }
},
contents: {
"req_add-user-c2208": {
        type: "REQUEST",
        name: "Add User",
path: "Add User",
pathFormatted: "req_add-user-c2208",
stats: {
    "name": "Add User",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "377",
        "ok": "377",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "126",
        "ok": "126",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles1": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "percentiles2": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "percentiles3": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles4": {
        "total": "306",
        "ok": "306",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 30,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.508",
        "ok": "0.508",
        "ko": "-"
    }
}
    },"req_get-single-user-27e62": {
        type: "REQUEST",
        name: "Get Single User",
path: "Get Single User",
pathFormatted: "req_get-single-user-27e62",
stats: {
    "name": "Get Single User",
    "numberOfRequests": {
        "total": "60",
        "ok": "59",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "94"
    },
    "maxResponseTime": {
        "total": "118",
        "ok": "118",
        "ko": "94"
    },
    "meanResponseTime": {
        "total": "54",
        "ok": "54",
        "ko": "94"
    },
    "standardDeviation": {
        "total": "41",
        "ok": "41",
        "ko": "0"
    },
    "percentiles1": {
        "total": "52",
        "ok": "17",
        "ko": "94"
    },
    "percentiles2": {
        "total": "93",
        "ok": "93",
        "ko": "94"
    },
    "percentiles3": {
        "total": "103",
        "ok": "103",
        "ko": "94"
    },
    "percentiles4": {
        "total": "110",
        "ok": "110",
        "ko": "94"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 59,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.017",
        "ok": "1",
        "ko": "0.017"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
