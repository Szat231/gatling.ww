var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "787",
        "ok": "787",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "450",
        "ok": "450",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "337",
        "ok": "337",
        "ko": "-"
    },
    "percentiles1": {
        "total": "450",
        "ok": "450",
        "ko": "-"
    },
    "percentiles2": {
        "total": "619",
        "ok": "619",
        "ko": "-"
    },
    "percentiles3": {
        "total": "753",
        "ok": "753",
        "ko": "-"
    },
    "percentiles4": {
        "total": "780",
        "ok": "780",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
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
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_login-user-8c446": {
        type: "REQUEST",
        name: "login user",
path: "login user",
pathFormatted: "req_login-user-8c446",
stats: {
    "name": "login user",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "787",
        "ok": "787",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "787",
        "ok": "787",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "787",
        "ok": "787",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "787",
        "ok": "787",
        "ko": "-"
    },
    "percentiles2": {
        "total": "787",
        "ok": "787",
        "ko": "-"
    },
    "percentiles3": {
        "total": "787",
        "ok": "787",
        "ko": "-"
    },
    "percentiles4": {
        "total": "787",
        "ok": "787",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
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
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_choose-role-86a19": {
        type: "REQUEST",
        name: "choose role",
path: "choose role",
pathFormatted: "req_choose-role-86a19",
stats: {
    "name": "choose role",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "percentiles2": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "percentiles3": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "percentiles4": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
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
        "total": "1",
        "ok": "1",
        "ko": "-"
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
