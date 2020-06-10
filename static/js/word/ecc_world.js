var ecc_world=echarts.init(document.getElementById("left"),"vintage");
var ecc_world_option={
    title:{left:"center",top:"top"},
    tooltip:{trigger:"item",},
    visualMap:{
        type:"piecewise",
        pieces:[
            {min:10000,max:100000000,label:">=10000",color:"#550101"},
            {min:1000,max:9999,label:"1000-9999",color:"#a92919"},
            {min:500,max:999,label:"500-999",color:"#af4e41"},
            {min:100,max:499,label:"100-499",color:"#ee7263"},
            {min:10,max:99,label:"10-99",color:"#f5bba7"},
            {min:1,max:9,label:"1-9",color:"#fdf2d5"},
            {min:0,max:0,label:"无确证",color:"#fefefe"},
        ],
        color:["#E0022B","#E09107","#A3E00B"]
    },
    series:[
        {
            name:"累计确诊人数",
            type:"map",
            mapType:"world",
            roam:true,
            itemStyle:{emphasis:{areaColor:"#c7fffd",label:{show:true}}},
            data:[

            ],
            nameMap:{
                'Singapore Rep.':'新加坡',
                'Dominican Rep.':'多米尼加',
                'Palestine':'巴勒斯坦',
                'Bahamas':'巴哈马',
                'Timor-Leste':'东帝汶',
                'Afghanistan':'阿富汗',
                'Guinea-Bissau':'几内亚比绍',
                "C??te d'Ivoire":'科特迪瓦',
                // "C((?=[\x21-\x7e]+)[^A-Za-z0-9])x21-\x7e]+)[^A-Za-z0-9]).te d'lvoire":"科特迪瓦",
                'Siachen Glacier':'锡亚琴冰川',
                "Br. Indian Ocean Ter.":'英属印度洋领土',
                'Angola':'安哥拉',
                'Albania':'阿尔巴尼亚',
                'United Arab Emirates':'阿拉伯联合酋长国',
                'Argentina':'阿根廷',
                'Armenia':'亚美尼亚',
                'French Southern and Antarctic Lands':'法属南半球和南极领地',
                'Australia':'澳大利亚',
                'Austria':'奥地利',
                'Azerbaijan':'阿塞拜疆',
                'Burundi':'布隆迪',
                'Belgium':'比利时',
                'Benin':'贝宁',
                'Burkina Faso':'布基纳法索',
                'Bangladesh':'孟加拉国',
                'Bulgaria':'保加利亚',
                'The Bahamas':'巴哈马',
                'Bosnia and Herz.':'波斯尼亚和黑塞哥维那',
                'Belarus':'白俄罗斯',
                'Belize':'伯利兹',
                'Bermuda':'百慕大',
                'Bolivia':'玻利维亚',
                'Brazil':'巴西',
                'Brunei':'文莱',
                'Bhutan':'不丹',
                'Botswana':'博茨瓦纳',
                'Central African Rep.':'中非共和国',
                'Canada':'加拿大',
                'Switzerland':'瑞士',
                'Chile':'智利',
                'China':'中国',
                'Ivory Coast':'象牙海岸',
                'Cameroon':'喀麦隆',
                // 'Dem. Rep. Congo':'刚果民主共和国',
                'Congo':"刚果（布）",
                "Dem. Rep. Congo":"刚果（金）",
                'Colombia':'哥伦比亚',
                'Costa Rica':'哥斯达黎加',
                'Cuba':'古巴',
                'N. Cyprus':'北塞浦路斯',
                'Cyprus':'塞浦路斯',
                'Czech Rep.':'捷克',
                'Germany':'德国',
                'Djibouti':'吉布提',
                'Denmark':'丹麦',
                'Algeria':'阿尔及利亚',
                'Ecuador':'厄瓜多尔',
                'Egypt':'埃及',
                'Eritrea':'厄立特里亚',
                'Spain':'西班牙',
                'Estonia':'爱沙尼亚',
                'Ethiopia':'埃塞俄比亚',
                'Finland':'芬兰',
                'Fiji':'斐',
                'Falkland Islands':'福克兰群岛',
                'France':'法国',
                'Gabon':'加蓬',
                'United Kingdom':'英国',
                'Georgia':'格鲁吉亚',
                'Ghana':'加纳',
                'Guinea':'几内亚',
                'Gambia':'冈比亚',
                'Guinea Bissau':'几内亚比绍',
                'Eq. Guinea':'赤道几内亚',
                'Greece':'希腊',
                'Greenland':'格陵兰',
                'Guatemala':'危地马拉',
                'French Guiana':'法属圭亚那',
                'Guyana':'圭亚那',
                'Honduras':'洪都拉斯',
                'Croatia':'克罗地亚',
                'Haiti':'海地',
                'Hungary':'匈牙利',
                'Indonesia':'印度尼西亚',
                'India':'印度',
                'Ireland':'爱尔兰',
                'Iran':'伊朗',
                'Iraq':'伊拉克',
                'Iceland':'冰岛',
                'Israel':'以色列',
                'Italy':'意大利',
                'Jamaica':'牙买加',
                'Jordan':'约旦',
                'Japan':'日本',
                // 'Japan':'日本本土',
                'Kazakhstan':'哈萨克斯坦',
                'Kenya':'肯尼亚',
                'Kyrgyzstan':'吉尔吉斯斯坦',
                'Cambodia':'柬埔寨',
                'Korea':'韩国',
                'Kosovo':'科索沃',
                'Kuwait':'科威特',
                'Lao PDR':'老挝',
                'Lebanon':'黎巴嫩',
                'Liberia':'利比里亚',
                'Libya':'利比亚',
                'Sri Lanka':'斯里兰卡',
                'Lesotho':'莱索托',
                'Lithuania':'立陶宛',
                'Luxembourg':'卢森堡',
                'Latvia':'拉脱维亚',
                'Morocco':'摩洛哥',
                'Moldova':'摩尔多瓦',
                'Madagascar':'马达加斯加',
                'Mexico':'墨西哥',
                'Macedonia':'北马其顿',
                'Mali':'马里',
                'Myanmar':'缅甸',
                'Montenegro':'黑山',
                'Mongolia':'蒙古国',
                'Mozambique':'莫桑比克',
                'Mauritania':'毛里塔尼亚',
                'Malawi':'马拉维',
                'Malaysia':'马来西亚',
                'Namibia':'纳米比亚',
                'New Caledonia':'新喀里多尼亚',
                'Niger':'尼日尔',
                'Nigeria':'尼日利亚',
                'Nicaragua':'尼加拉瓜',
                'Netherlands':'荷兰',
                'Norway':'挪威',
                'Nepal':'尼泊尔',
                'New Zealand':'新西兰',
                'Oman':'阿曼',
                'Pakistan':'巴基斯坦',
                'Panama':'巴拿马',
                'Peru':'秘鲁',
                'Philippines':'菲律宾',
                'Papua New Guinea':'巴布亚新几内亚',
                'Poland':'波兰',
                'Puerto Rico':'波多黎各',
                'Dem. Rep. Korea':'朝鲜',
                'Portugal':'葡萄牙',
                'Paraguay':'巴拉圭',
                'Qatar':'卡塔尔',
                'Romania':'罗马尼亚',
                'Russia':'俄罗斯',
                'Rwanda':'卢旺达',
                'W. Sahara':'西撒哈拉',
                'Saudi Arabia':'沙特阿拉伯',
                'Sudan':'苏丹',
                'S. Sudan':'南苏丹',
                'Senegal':'塞内加尔',
                'Solomon Is.':'所罗门群岛',
                'Sierra Leone':'塞拉利昂',
                'El Salvador':'萨尔瓦多',
                'Somaliland':'索马里兰',
                'Somalia':'索马里',
                'Serbia':'塞尔维亚',
                'Suriname':'苏里南',
                'Slovakia':'斯洛伐克',
                'Slovenia':'斯洛文尼亚',
                'Sweden':'瑞典',
                'Swaziland':'斯威士兰',
                'Syria':'叙利亚',
                'Chad':'乍得',
                'Togo':'多哥',
                'Thailand':'泰国',
                'Tajikistan':'塔吉克斯坦',
                'Turkmenistan':'土库曼斯坦',
                'East Timor':'东帝汶',
                'Trinidad and Tobago':'特里尼达和多巴哥',
                'Tunisia':'突尼斯',
                'Turkey':'土耳其',
                'Tanzania':'坦桑尼亚',
                'Uganda':'乌干达',
                'Ukraine':'乌克兰',
                'Uruguay':'乌拉圭',
                'United States':'美国',
                'Uzbekistan':'乌兹别克斯坦',
                'Venezuela':'委内瑞拉',
                'Vietnam':'越南',
                'Vanuatu':'瓦努阿图',
                'West Bank':'西岸',
                'Yemen':'也门',
                'South Africa':'南非',
                'Zambia':'赞比亚',
                'Zimbabwe':'津巴布韦',
                "Liechtenstein":"列支敦士登",
                "Andorra":"安道尔公国",
            }
            // nameMap:{
            //     "Canada":"加拿大","Turkmenistan":"土库曼斯坦","Saint Helena":"圣赫勒拿","Lao PDR":"老挝","Lithuania":"立陶宛","Cambodia":"柬埔寨",
            //     "Ethiopia":"埃塞俄比亚","Faeroe Is.":"法罗群岛","Swaziland":"斯威士兰","Palestine":"巴勒斯坦","Belize":"伯利兹","Argentina":"阿根廷",
            //     "Bolivia":"玻利维亚","Cameroon":"喀麦隆","Burkina Faso":"布基纳法索","Aland":"奥兰群岛","Bahrain":"巴林","Saudi Arabia":"沙特阿拉伯",
            //     "Fr. Polynesia":"法属波利尼西亚","Cape Verde":"佛得角","W. Sahara":"西撒哈拉","Slovenia":"斯洛文尼亚","Guatemala":"危地马拉",
            //     "Guinea":"几内亚","Dem. Rep. Congo":"刚果（金）","Germany":"德国","Spain":"西班牙","Liberia":"利比里亚","Netherlands":"荷兰",
            //     "Jamaica":"牙买加","Solomon Is.":"所罗门群岛","Oman":"阿曼","Tanzania":"坦桑尼亚","Costa Rica":"哥斯达黎加","Isle of Man":"曼岛",
            //     "Gabon":"加蓬","Niue":"纽埃","Bahamas":"巴哈马","New Zealand":"新西兰","Yemen":"也门","Jersey":"泽西岛","Pakistan":"巴基斯坦",
            //     "Albania":"阿尔巴尼亚","Samoa":"萨摩亚","Czech Rep.":"捷克","United Arab Emirates":"阿拉伯联合酋长国","Guam":"关岛","India":"印度",
            //     "Azerbaijan":"阿塞拜疆","N. Mariana Is.":"北马里亚纳群岛","Lesotho":"莱索托","Kenya":"肯尼亚","Belarus":"白俄罗斯","Tajikistan":"塔吉克斯坦",
            //     "Turkey":"土耳其","Afghanistan":"阿富汗","Bangladesh":"孟加拉国","Mauritania":"毛里塔尼亚","Dem. Rep. Korea":"朝鲜","Saint Lucia":"圣卢西亚",
            //     "Br. Indian Ocean Ter.":"英属印度洋领地","Mongolia":"蒙古","France":"法国","Cura?ao":"库拉索岛","S. Sudan":"南苏丹","Rwanda":"卢旺达",
            //     "Slovakia":"斯洛伐克","Somalia":"索马里","Peru":"秘鲁","Vanuatu":"瓦努阿图","Norway":"挪威","Malawi":"马拉维","Benin":"贝宁",
            //     "St. Vin. and Gren.":"圣文森特和格林纳丁斯","Korea":"韩国","Singapore":"新加坡","Montenegro":"黑山共和国","Cayman Is.":"开曼群岛","Togo":"多哥",
            //     "China":"中国","Heard I. and McDonald Is.":"赫德岛和麦克唐纳群岛","Armenia":"亚美尼亚","Falkland Is.":"马尔维纳斯群岛（福克兰）","Ukraine":"乌克兰",
            //     "Ghana":"加纳","Tonga":"汤加","Finland":"芬兰","Libya":"利比亚","Dominican Rep.":"多米尼加","Indonesia":"印度尼西亚","Mauritius":"毛里求斯",
            //     "Eq. Guinea":"赤道几内亚","Sweden":"瑞典","Vietnam":"越南","Mali":"马里","Russia":"俄罗斯","Bulgaria":"保加利亚","United States":"美国",
            //     "Romania":"罗马尼亚","Angola":"安哥拉","Chad":"乍得","South Africa":"南非","Fiji":"斐济","Liechtenstein":"列支敦士登","Malaysia":"马来西亚",
            //     "Austria":"奥地利","Mozambique":"莫桑比克","Uganda":"乌干达","Japan":"日本","Niger":"尼日尔","Brazil":"巴西","Kuwait":"科威特","Panama":"巴拿马",
            //     "Guyana":"圭亚那","Madagascar":"马达加斯加","Luxembourg":"卢森堡","American Samoa":"美属萨摩亚","Andorra":"安道尔","Ireland":"爱尔兰","Italy":"意大利",
            //     "Nigeria":"尼日利亚","Turks and Caicos Is.":"特克斯和凯科斯群岛","Ecuador":"厄瓜多尔","U.S. Virgin Is.":"美属维尔京群岛","Brunei":"文莱","Australia":"澳大利亚","Iran":"伊朗","Algeria":"阿尔及利亚","El Salvador":"萨尔瓦多","C?te d'Ivoire":"科特迪瓦","Chile":"智利","Puerto Rico":"波多黎各","Belgium":"比利时","Thailand":"泰国","Haiti":"海地","Iraq":"伊拉克","S?o Tomé and Principe":"圣多美和普林西比","Sierra Leone":"塞拉利昂","Georgia":"格鲁吉亚","Denmark":"丹麦","Philippines":"菲律宾","S. Geo. and S. Sandw. Is.":"南乔治亚岛和南桑威奇群岛","Moldova":"摩尔多瓦","Morocco":"摩洛哥","Namibia":"纳米比亚","Malta":"马耳他","Guinea-Bissau":"几内亚比绍","Kiribati":"基里巴斯","Switzerland":"瑞士","Grenada":"格林纳达","Seychelles":"塞舌尔","Portugal":"葡萄牙","Estonia":"爱沙尼亚","Uruguay":"乌拉圭","Antigua and Barb.":"安提瓜和巴布达","Lebanon":"黎巴嫩","Uzbekistan":"乌兹别克斯坦","Tunisia":"突尼斯","Djibouti":"吉布提","Greenland":"格陵兰岛","Timor-Leste":"东帝汶","Dominica":"多米尼克","Colombia":"哥伦比亚","Burundi":"布隆迪","Bosnia and Herz.":"波斯尼亚和黑塞哥维那","Cyprus":"塞浦路斯","Barbados":"巴巴多斯","Qatar":"卡塔尔","Palau":"帕劳","Bhutan":"不丹","Sudan":"苏丹","Nepal":"尼泊尔","Micronesia":"密克罗尼西亚","Bermuda":"百慕大","Suriname":"苏里南","Venezuela":"委内瑞拉","Israel":"以色列","St. Pierre and Miquelon":"圣皮埃尔和密克隆群岛","Central African Rep.":"中非共和国","Iceland":"冰岛","Zambia":"赞比亚","Senegal":"塞内加尔","Papua New Guinea":"巴布亚新几内亚","Trinidad and Tobago":"特立尼达和多巴哥","Zimbabwe":"津巴布韦","Jordan":"约旦","Gambia":"冈比亚","Kazakhstan":"哈萨克斯坦","Poland":"波兰","Eritrea":"厄立特里亚","Kyrgyzstan":"吉尔吉斯斯坦","Montserrat":"蒙特塞拉特","New Caledonia":"新喀里多尼亚","Macedonia":"马其顿","Paraguay":"巴拉圭","Latvia":"拉脱维亚","Hungary":"匈牙利","Syria":"叙利亚","Honduras":"洪都拉斯","Myanmar":"缅甸","Mexico":"墨西哥","Egypt":"埃及","Nicaragua":"尼加拉瓜","Cuba":"古巴","Serbia":"塞尔维亚","Comoros":"科摩罗","United Kingdom":"英国","Fr. S. Antarctic Lands":"南极洲","Congo":"刚果（布）","Greece":"希腊","Sri Lanka":"斯里兰卡","Croatia":"克罗地亚","Botswana":"博茨瓦纳","Siachen Glacier":"锡亚琴冰川地区"
            // }
        }
    ]
};
ecc_world.setOption(ecc_world_option);