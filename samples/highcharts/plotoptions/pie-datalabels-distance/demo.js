$(function () {
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        
        plotOptions: {
            pie: {
                dataLabels: {
                    distance: -30,
                    color: 'white'
                }
            }
        },
        
        series: [{
            data: [
                ['Firefox',   44.2],
                ['IE7',       26.6],
                ['IE6',       20],
                ['Chrome',    3.1],
                ['Other',    5.4]
            ]
        }]
    });
});