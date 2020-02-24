// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        /* 轮播的list */
        list: [
            {
                "link": "",
                "imgSrc": "https://i0.hdslb.com/bfs/archive/bf2aa1f18ccae9ecae4cb666417f75da951ee2f4.jpg@480w_300h.webp"
            }, {
                "link": "",
                "imgSrc": "https://i0.hdslb.com/bfs/archive/8860d7a57a9b1992c112ee56a35444cfc445108b.jpg@480w_300h.webp"
            }, {
                "link": "",
                "imgSrc": "https://i0.hdslb.com/bfs/archive/82232bca677f06d69734159653cf29db82ff5d9c.png@480w_300h.webp"
            }, {
                "link": "",
                "imgSrc": "https://i0.hdslb.com/bfs/archive/28d93d03968baa475a2c3982640736a66b4405c3.jpg@480w_300h.webp"
            }],
        /* 视频卡片的list */
        vcartlist: [
            {
                id: 1,
                name: "复仇者联盟",
                img: "https://tse4-mm.cn.bing.net/th/id/OIP.wE2Ycq9iZzqfVTysZQ6_5wHaEu?w=283&h=177&c=7&o=5&pid=1.7"
            }, {
                id: 2,
                name: "大圣归来",
                img: "https://tse3-mm.cn.bing.net/th/id/OIP.n0u1e9XNZJKRfTX3baftcQHaFB?w=198&h=134&c=7&o=5&pid=1.7"
            },
            {
                id: 3,
                name: "复仇者联盟",
                img: "https://tse4-mm.cn.bing.net/th/id/OIP.wE2Ycq9iZzqfVTysZQ6_5wHaEu?w=283&h=177&c=7&o=5&pid=1.7"
            }, {
                id: 4,
                name: "大圣归来",
                img: "https://tse3-mm.cn.bing.net/th/id/OIP.n0u1e9XNZJKRfTX3baftcQHaFB?w=198&h=134&c=7&o=5&pid=1.7"
            }

        ],
        /* 导航条数据 */
        navlist: [
            {
                "key": 0,
                "id": "19000104",
                "name": "分类",
                "date": "12-6",
                "edit": false,
                "dateArr": [
                    {
                        "id": "19000104",
                        "date": "12-09",
                        "fraction": "100",
                        "edit": "false",
                        "index": "0",
                        "key": "0"
                    },
                    {
                        "id": "19000104",
                        "date": "12-10",
                        "fraction": "98",
                        "edit": "false",
                        "index": "1",
                        "key": "1"
                    },
                    {
                        "id": "19000104",
                        "date": "12-11",
                        "fraction": "100",
                        "edit": "false",
                        "index": "2",
                        "key": "2"
                    },
                    {
                        "id": "19000104",
                        "date": "12-13",
                        "fraction": "100",
                        "edit": "false",
                        "index": "3",
                        "key": "3"
                    },
                    {
                        "id": "19000104",
                        "date": "12-16",
                        "fraction": "100",
                        "edit": "false",
                        "index": "4",
                        "key": "4"
                    },
                    {
                        "id": "19000104",
                        "date": "12-17",
                        "fraction": "110",
                        "edit": "false",
                        "index": "5",
                        "key": "5"
                    },
                    {
                        "id": "19000104",
                        "date": "12-18",
                        "fraction": "100",
                        "edit": "false",
                        "index": "6",
                        "key": "6"
                    },
                    {
                        "id": "19000104",
                        "date": "12-19",
                        "fraction": "110",
                        "edit": "false",
                        "index": "7",
                        "key": "7"
                    },
                    {
                        "id": "19000104",
                        "date": "12-20",
                        "fraction": "120",
                        "edit": "false",
                        "index": "8",
                        "key": "8"
                    },
                    {
                        "id": "19000104",
                        "date": "12-23",
                        "fraction": "95",
                        "edit": "false",
                        "index": "9",
                        "key": "9"
                    },
                    {
                        "id": "19000104",
                        "date": "12-24",
                        "fraction": "100",
                        "edit": "false",
                        "index": "10",
                        "key": "10"
                    }
                ],
                "totalScore": 1133,
                "average": 103,
                "grade": "KING"
            },
            {
                "key": 1,
                "id": "19000192",
                "name": "科幻",
                "date": "12-6",
                "edit": false,
                "dateArr": [
                    {
                        "id": "19000192",
                        "date": "12-09",
                        "fraction": "60",
                        "edit": "false",
                        "index": "2",
                        "key": "2"
                    },
                    {
                        "id": "19000192",
                        "date": "12-10",
                        "fraction": "100",
                        "edit": "false",
                        "index": "3",
                        "key": "3"
                    },
                    {
                        "id": "19000192",
                        "date": "12-11",
                        "fraction": "100",
                        "edit": "false",
                        "index": "4",
                        "key": "4"
                    },
                    {
                        "id": "19000192",
                        "date": "12-13",
                        "fraction": "98",
                        "edit": "false",
                        "index": "5",
                        "key": "5"
                    },
                    {
                        "id": "19000192",
                        "date": "12-16",
                        "fraction": "100",
                        "edit": "false",
                        "index": "6",
                        "key": "6"
                    },
                    {
                        "id": "19000192",
                        "date": "12-17",
                        "fraction": "100",
                        "edit": "false",
                        "index": "7",
                        "key": "7"
                    },
                    {
                        "id": "19000192",
                        "date": "12-18",
                        "fraction": "100",
                        "edit": "false",
                        "index": "8",
                        "key": "8"
                    },
                    {
                        "id": "19000192",
                        "date": "12-19",
                        "fraction": "90",
                        "edit": "false",
                        "index": "9",
                        "key": "9"
                    },
                    {
                        "id": "19000192",
                        "date": "12-23",
                        "fraction": "80",
                        "edit": "false",
                        "index": "10",
                        "key": "10"
                    },
                    {
                        "id": "19000192",
                        "date": "12-24",
                        "fraction": "95",
                        "edit": "false",
                        "index": "11",
                        "key": "11"
                    }
                ],
                "totalScore": 923,
                "average": 92,
                "grade": "学神"
            },
            {
                "key": 2,
                "id": "19000216",
                "name": "动作",
                "date": "12-6",
                "edit": false,
                "dateArr": [
                    {
                        "id": "19000216",
                        "date": "12-09",
                        "fraction": "120",
                        "edit": "false",
                        "index": "3",
                        "key": "3"
                    },
                    {
                        "id": "19000216",
                        "date": "12-10",
                        "fraction": "100",
                        "edit": "false",
                        "index": "4",
                        "key": "4"
                    },
                    {
                        "id": "19000216",
                        "date": "12-11",
                        "fraction": "100",
                        "edit": "false",
                        "index": "5",
                        "key": "5"
                    },
                    {
                        "id": "19000216",
                        "date": "12-13",
                        "fraction": "98",
                        "edit": "false",
                        "index": "6",
                        "key": "6"
                    },
                    {
                        "id": "19000216",
                        "date": "12-16",
                        "fraction": "100",
                        "edit": "false",
                        "index": "7",
                        "key": "7"
                    },
                    {
                        "id": "19000216",
                        "date": "12-17",
                        "fraction": "100",
                        "edit": "false",
                        "index": "8",
                        "key": "8"
                    },
                    {
                        "id": "19000216",
                        "date": "12-18",
                        "fraction": "130",
                        "edit": "false",
                        "index": "9",
                        "key": "9"
                    },
                    {
                        "id": "19000216",
                        "date": "12-19",
                        "fraction": "95",
                        "edit": "false",
                        "index": "10",
                        "key": "10"
                    },
                    {
                        "id": "19000216",
                        "date": "12-20",
                        "fraction": "90",
                        "edit": "false",
                        "index": "11",
                        "key": "11"
                    },
                    {
                        "id": "19000216",
                        "date": "12-23",
                        "fraction": "120",
                        "edit": "false",
                        "index": "12",
                        "key": "12"
                    },
                    {
                        "id": "19000216",
                        "date": "12-24",
                        "fraction": "95",
                        "edit": "false",
                        "index": "13",
                        "key": "13"
                    }
                ],
                "totalScore": 1148,
                "average": 104,
                "grade": "KING"
            },
            {
                "key": 3,
                "id": "19000217",
                "name": "喜剧",
                "date": "12-6",
                "edit": false,
                "dateArr": [
                    {
                        "id": "19000217",
                        "date": "12-09",
                        "fraction": "80",
                        "edit": "false",
                        "index": "4",
                        "key": "4"
                    },
                    {
                        "id": "19000217",
                        "date": "12-10",
                        "fraction": "100",
                        "edit": "false",
                        "index": "5",
                        "key": "5"
                    },
                    {
                        "id": "19000217",
                        "date": "12-11",
                        "fraction": "90",
                        "edit": "false",
                        "index": "6",
                        "key": "6"
                    },
                    {
                        "id": "19000217",
                        "date": "12-13",
                        "fraction": "100",
                        "edit": "false",
                        "index": "7",
                        "key": "7"
                    },
                    {
                        "id": "19000217",
                        "date": "12-16",
                        "fraction": "80",
                        "edit": "false",
                        "index": "8",
                        "key": "8"
                    },
                    {
                        "id": "19000217",
                        "date": "12-17",
                        "fraction": "100",
                        "edit": "false",
                        "index": "9",
                        "key": "9"
                    },
                    {
                        "id": "19000217",
                        "date": "12-18",
                        "fraction": "100",
                        "edit": "false",
                        "index": "10",
                        "key": "10"
                    },
                    {
                        "id": "19000217",
                        "date": "12-19",
                        "fraction": "100",
                        "edit": "false",
                        "index": "11",
                        "key": "11"
                    },
                    {
                        "id": "19000217",
                        "date": "12-20",
                        "fraction": "90",
                        "edit": "false",
                        "index": "12",
                        "key": "12"
                    },
                    {
                        "id": "19000217",
                        "date": "12-23",
                        "fraction": "0",
                        "edit": "false",
                        "index": "13",
                        "key": "13"
                    },
                    {
                        "id": "19000217",
                        "date": "12-24",
                        "fraction": "90",
                        "edit": "false",
                        "index": "14",
                        "key": "14"
                    }
                ],
                "totalScore": 930,
                "average": 85,
                "grade": "学霸"
            },
            {
                "key": 4,
                "id": "19000253",
                "name": "动画",
                "date": "12-6",
                "edit": false,
                "dateArr": [
                    {
                        "id": "19000253",
                        "date": "12-09",
                        "fraction": "120",
                        "edit": "false",
                        "index": "5",
                        "key": "5"
                    },
                    {
                        "id": "19000253",
                        "date": "12-10",
                        "fraction": "150",
                        "edit": "false",
                        "index": "6",
                        "key": "6"
                    },
                    {
                        "id": "19000253",
                        "date": "12-11",
                        "fraction": "160",
                        "edit": "false",
                        "index": "7",
                        "key": "7"
                    },
                    {
                        "id": "19000253",
                        "date": "12-13",
                        "fraction": "100",
                        "edit": "false",
                        "index": "8",
                        "key": "8"
                    },
                    {
                        "id": "19000253",
                        "date": "12-16",
                        "fraction": "100",
                        "edit": "false",
                        "index": "9",
                        "key": "9"
                    },
                    {
                        "id": "19000253",
                        "date": "12-17",
                        "fraction": "110",
                        "edit": "false",
                        "index": "10",
                        "key": "10"
                    },
                    {
                        "id": "19000253",
                        "date": "12-18",
                        "fraction": "110",
                        "edit": "false",
                        "index": "11",
                        "key": "11"
                    },
                    {
                        "id": "19000253",
                        "date": "12-19",
                        "fraction": "95",
                        "edit": "false",
                        "index": "12",
                        "key": "12"
                    },
                    {
                        "id": "19000253",
                        "date": "12-20",
                        "fraction": "120",
                        "edit": "false",
                        "index": "13",
                        "key": "13"
                    },
                    {
                        "id": "19000253",
                        "date": "12-23",
                        "fraction": "120",
                        "edit": "false",
                        "index": "14",
                        "key": "14"
                    },
                    {
                        "id": "19000253",
                        "date": "12-24",
                        "fraction": "100",
                        "edit": "false",
                        "index": "15",
                        "key": "15"
                    }
                ],
                "totalScore": 1285,
                "average": 117,
                "grade": "KING"
            },
            {
                "key": 5,
                "id": "19000361",
                "name": "动漫",
                "date": "12-6",
                "edit": false,
                "dateArr": [
                    {
                        "id": "19000361",
                        "date": "12-09",
                        "fraction": "98",
                        "edit": "false",
                        "index": "6",
                        "key": "6"
                    },
                    {
                        "id": "19000361",
                        "date": "12-10",
                        "fraction": "90",
                        "edit": "false",
                        "index": "7",
                        "key": "7"
                    },
                    {
                        "id": "19000361",
                        "date": "12-11",
                        "fraction": "90",
                        "edit": "false",
                        "index": "8",
                        "key": "8"
                    },
                    {
                        "id": "19000361",
                        "date": "12-13",
                        "fraction": "100",
                        "edit": "false",
                        "index": "9",
                        "key": "9"
                    },
                    {
                        "id": "19000361",
                        "date": "12-16",
                        "fraction": "80",
                        "edit": "false",
                        "index": "10",
                        "key": "10"
                    },
                    {
                        "id": "19000361",
                        "date": "12-17",
                        "fraction": "100",
                        "edit": "false",
                        "index": "11",
                        "key": "11"
                    },
                    {
                        "id": "19000361",
                        "date": "12-18",
                        "fraction": "100",
                        "edit": "false",
                        "index": "12",
                        "key": "12"
                    },
                    {
                        "id": "19000361",
                        "date": "12-19",
                        "fraction": "100",
                        "edit": "false",
                        "index": "13",
                        "key": "13"
                    },
                    {
                        "id": "19000361",
                        "date": "12-20",
                        "fraction": "80",
                        "edit": "false",
                        "index": "14",
                        "key": "14"
                    },
                    {
                        "id": "19000361",
                        "date": "12-23",
                        "fraction": "100",
                        "edit": "false",
                        "index": "15",
                        "key": "15"
                    },
                    {
                        "id": "19000361",
                        "date": "12-24",
                        "fraction": "100",
                        "edit": "false",
                        "index": "16",
                        "key": "16"
                    }
                ],
                "totalScore": 1038,
                "average": 94,
                "grade": "学神"
            },
            {
                "key": 6,
                "id": "19000381",
                "name": "剧情",
                "date": "12-6",
                "edit": false,
                "dateArr": [
                    {
                        "id": "19000381",
                        "date": "12-09",
                        "fraction": "100",
                        "edit": "false",
                        "index": "7",
                        "key": "7"
                    },
                    {
                        "id": "19000381",
                        "date": "12-10",
                        "fraction": "100",
                        "edit": "false",
                        "index": "8",
                        "key": "8"
                    },
                    {
                        "id": "19000381",
                        "date": "12-11",
                        "fraction": "100",
                        "edit": "false",
                        "index": "9",
                        "key": "9"
                    },
                    {
                        "id": "19000381",
                        "date": "12-13",
                        "fraction": "98",
                        "edit": "false",
                        "index": "10",
                        "key": "10"
                    },
                    {
                        "id": "19000381",
                        "date": "12-16",
                        "fraction": "80",
                        "edit": "false",
                        "index": "11",
                        "key": "11"
                    },
                    {
                        "id": "19000381",
                        "date": "12-17",
                        "fraction": "90",
                        "edit": "false",
                        "index": "12",
                        "key": "12"
                    },
                    {
                        "id": "19000381",
                        "date": "12-18",
                        "fraction": "90",
                        "edit": "false",
                        "index": "13",
                        "key": "13"
                    },
                    {
                        "id": "19000381",
                        "date": "12-19",
                        "fraction": "100",
                        "edit": "false",
                        "index": "14",
                        "key": "14"
                    },
                    {
                        "id": "19000381",
                        "date": "12-20",
                        "fraction": "90",
                        "edit": "false",
                        "index": "15",
                        "key": "15"
                    },
                    {
                        "id": "19000381",
                        "date": "12-23",
                        "fraction": "110",
                        "edit": "false",
                        "index": "16",
                        "key": "16"
                    },
                    {
                        "id": "19000381",
                        "date": "12-24",
                        "fraction": "100",
                        "edit": "false",
                        "index": "17",
                        "key": "17"
                    }
                ],
                "totalScore": 1058,
                "average": 96,
                "grade": "举人"
            },
            {
                "key": 7,
                "id": "19000398",
                "name": "记录",
                "date": "12-6",
                "edit": false,
                "dateArr": [
                    {
                        "id": "19000398",
                        "date": "12-09",
                        "fraction": "98",
                        "edit": "false",
                        "index": "8",
                        "key": "8"
                    },
                    {
                        "id": "19000398",
                        "date": "12-10",
                        "fraction": "100",
                        "edit": "false",
                        "index": "9",
                        "key": "9"
                    },
                    {
                        "id": "19000398",
                        "date": "12-11",
                        "fraction": "95",
                        "edit": "false",
                        "index": "10",
                        "key": "10"
                    },
                    {
                        "id": "19000398",
                        "date": "12-13",
                        "fraction": "100",
                        "edit": "false",
                        "index": "11",
                        "key": "11"
                    },
                    {
                        "id": "19000398",
                        "date": "12-16",
                        "fraction": "80",
                        "edit": "false",
                        "index": "12",
                        "key": "12"
                    },
                    {
                        "id": "19000398",
                        "date": "12-17",
                        "fraction": "90",
                        "edit": "false",
                        "index": "13",
                        "key": "13"
                    },
                    {
                        "id": "19000398",
                        "date": "12-18",
                        "fraction": "100",
                        "edit": "false",
                        "index": "14",
                        "key": "14"
                    },
                    {
                        "id": "19000398",
                        "date": "12-19",
                        "fraction": "90",
                        "edit": "false",
                        "index": "15",
                        "key": "15"
                    },
                    {
                        "id": "19000398",
                        "date": "12-20",
                        "fraction": "70",
                        "edit": "false",
                        "index": "16",
                        "key": "16"
                    },
                    {
                        "id": "19000398",
                        "date": "12-23",
                        "fraction": "100",
                        "edit": "false",
                        "index": "17",
                        "key": "17"
                    },
                    {
                        "id": "19000398",
                        "date": "12-24",
                        "fraction": "100",
                        "edit": "false",
                        "index": "18",
                        "key": "18"
                    },
                    {
                        "id": "19000398",
                        "date": "12-25",
                        "fraction": "95",
                        "edit": "false",
                        "index": "19",
                        "key": "19"
                    }
                ],
                "totalScore": 1118,
                "average": 93,
                "grade": "学神"
            },
            {
                "key": 8,
                "id": "18000319",
                "name": "爱情",
                "date": "12-6",
                "edit": false,
                "dateArr": [
                    {
                        "id": "18000319",
                        "date": "12-20",
                        "fraction": "0",
                        "edit": "false",
                        "index": "9",
                        "key": "9"
                    },
                    {
                        "id": "18000319",
                        "date": "12-23",
                        "fraction": "0",
                        "edit": "false",
                        "index": "10",
                        "key": "10"
                    }
                ],
                "totalScore": 0,
                "average": 0,
                "grade": "小白"
            },
            {
                "key": 27,
                "id": "18000310",
                "name": "其他",
                "date": "12-6",
                "edit": false,
                "dateArr": [
                    {
                        "id": "18000310",
                        "date": "12-09",
                        "fraction": "85",
                        "edit": "false",
                        "index": "28",
                        "key": "28"
                    },
                    {
                        "id": "18000310",
                        "date": "12-10",
                        "fraction": "70",
                        "edit": "false",
                        "index": "29",
                        "key": "29"
                    },
                    {
                        "id": "18000310",
                        "date": "12-13",
                        "fraction": "0",
                        "edit": "false",
                        "index": "30",
                        "key": "30"
                    },
                    {
                        "id": "18000310",
                        "date": "12-16",
                        "fraction": "70",
                        "edit": "false",
                        "index": "31",
                        "key": "31"
                    },
                    {
                        "id": "18000310",
                        "date": "12-17",
                        "fraction": "100",
                        "edit": "false",
                        "index": "32",
                        "key": "32"
                    },
                    {
                        "id": "18000310",
                        "date": "12-18",
                        "fraction": "70",
                        "edit": "false",
                        "index": "33",
                        "key": "33"
                    },
                    {
                        "id": "18000310",
                        "date": "12-19",
                        "fraction": "80",
                        "edit": "false",
                        "index": "34",
                        "key": "34"
                    },
                    {
                        "id": "18000310",
                        "date": "12-20",
                        "fraction": "80",
                        "edit": "false",
                        "index": "35",
                        "key": "35"
                    },
                    {
                        "id": "18000310",
                        "date": "12-23",
                        "fraction": "90",
                        "edit": "false",
                        "index": "36",
                        "key": "36"
                    },
                    {
                        "id": "18000310",
                        "date": "12-24",
                        "fraction": "80",
                        "edit": "false",
                        "index": "37",
                        "key": "37"
                    },
                    {
                        "id": "18000310",
                        "date": "12-25",
                        "fraction": "60",
                        "edit": "false",
                        "index": "38",
                        "key": "38"
                    }
                ],
                "totalScore": 785,
                "average": 71,
                "grade": "B+"
            }
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})