Highcharts.chart('rc1bubble', {
    chart: {
        type: 'packedbubble',
        height: '70%',
        with: '100%',
        marginTop: 0,
        marginBottom: 10,
        // backgroundColor:'transparent',
    },
    title: {
        text: '',
        style: {
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#333',
            backgroundColor: 'yellow',
        }
    },
    tooltip: {
        enabled: true,
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.y}字 <br/>',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 20,
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        floating: true,
        x: 0,
        y: 0,
        itemMarginTop: 5,
        itemMarginBottom: 5,
        itemStyle: {
            fontSize: '14px',
        },
    },
    plotOptions: {
        packedbubble: {
            minSize: '10%',
            maxSize: '70%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.004,
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            },
            point: {
                events: {
                    click: function () {
                        document.getElementById('rc2inner').innerHTML =
                            '<iframe src="' +
                            this.link +
                            '" style="width:100%;height:100%;"></iframe>' +
                            '<button id="closeBtn" style="position:absolute;left:0;top:0;"><span class="iconfont icon-guanbi" style="font-size: 30px"></button>'
                            + '<button onclick="history.back()" style="position:absolute;top:0px;right:15px;"><span class="iconfont icon-anniu_jiantouxiangzuo_o" style="font-size:33px;font-weight:600"></span></button>';
                        document
                            .getElementById('closeBtn')
                            .addEventListener('click', function () {
                                document.getElementById('rc2inner').innerHTML =
                                    `
                                    <div class="rc2card" style="margin-left: 0;">
                                    <img src="./images/C1.png" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card">
                                    <img src="./images/C2.png" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card">
                                    <img src="./images/C3.png" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card">
                                    <img src="./images/C4.png" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card" style="margin-left: 0;">
                                    <img src="./images/C5.png" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card">
                                    <img src="./images/C6.png" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card">
                                    <img src="./images/C7.png" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card">
                                    <img src="./images/C8.png" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card" style="margin-left: 0;">
                                    <img src="./images/C9.png" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card">
                                    <img src="./images/C10.jpg" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card">
                                    <img src="./images/C11.jpg" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="rc2card">
                                    <img src="./images/C12.jpg" alt="">
                                    <div class="card-info">
                                        <span>Category</span>
                                        <h1>Article Title</h1>
                                        <p>Article Description</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>`;
                            });
                    },
                },
            },
        },
    },
    series: [{
        name: 'C语言笔记',
        data: [{
            name: 'C 简介',
            value: 992,
            link: './essay/C语言笔记/C 简介.html',
        }, {
            name: 'C 环境设置',
            value: 830,
            link: './essay/C语言笔记/C 环境设置.html',
        },
        {
            name: "C 程序结构",
            value: 517,
            link: './essay/C语言笔记/C 程序结构.html',
        }]
    }, {
        name: 'JavaScript笔记',
        data: [{
            name: "JS 介绍",
            value: 1512,
            link: './essay/JavaScript笔记/JS 介绍.html',
        },
        {
            name: "JS 用法",
            value: 835,
            link: './essay/JavaScript笔记/JS 用法.html',
        }]
    }, {
        name: 'Python笔记',
        data: [{
            name: "A",
            value: 400
        },
        {
            name: "B",
            value: 600
        },
        {
            name: "C",
            value: 900
        }]
    }, {
        name: 'Java笔记',
        data: [{
            name: "D",
            value: 1000,
            link: './essay/interesting/飞翔小鸟源代码.html'
        },
        {
            name: "J",
            value: 1200
        }]
    }, {
        name: '生活随笔',
        data: [{
            name: "E",
            value: 200
        },
        {
            name: "F",
            value: 50
        }
        ]
    }, {
        name: 'C++笔记',
        data: [{
            name: "G",
            value: 2000,
            link: 'http://www.bilibili.com'
        },
        {
            name: "H",
            value: 666
        },
        {
            name: "I",
            value: 100
        }]
    }]
});