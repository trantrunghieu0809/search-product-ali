var app = angular.module('myApp', ['angular-table', 'ngJsonExportExcel']);
app.controller('controller', function($scope, $http) {

    $url = "https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.listPromotionProduct/96623?";

    $scope.categories = [
        {
            "name_2": "Apparel Accessories",
            "id_2": 200000297
        },
        {
            "name": "__________ Apparel & Accessories",
            "id": 3
        },
        {
            "name": "__________ Costumes & Accessories",
            "id": 200000663
        },
        {
            "name": "__________ Men's Clothing",
            "id": 200000343
        },
        {
            "name": "__________ Novelty & Special Use",
            "id": 200000532
        },
        {
            "name": "__________ Sportswears",
            "id": 200003274
        },
        {
            "name": "__________ Women's Clothing",
            "id": 200000345
        },
        {
            "name": "__________ World Apparel",
            "id": 200000666
        },
        {
            "name_2": "Auto Replacement Parts",
            "id_2": 200000212
        },
        {
            "name": "__________ Automobiles & Motorcycles",
            "id": 34
        },
        {
            "name": "__________ Car Electronics",
            "id": 200000285
        },
        {
            "name": "__________ Exterior Accessories",
            "id": 200003427
        },
        {
            "name": "__________ Interior Accessories",
            "id": 200003411
        },
        {
            "name": "__________ Motorcycle Accessories & Parts",
            "id": 200000242
        },
        {
            "name": "__________ Other Vehicle Parts & Accessories",
            "id": 200004043
        },
        {
            "name": "__________ Roadway Safety",
            "id": 3015
        },
        {
            "name": "__________ Tools, Maintenance & Care",
            "id": 200000258
        },
        {
            "name_2": "Bath & Shower",
            "id_2": 200001288
        },
        {
            "name": "__________ Beauty & Health",
            "id": 66
        },
        {
            "name": "__________ Fragrances & Deodorants",
            "id": 200001221
        },
        {
            "name": "__________ Hair Care & Styling",
            "id": 200001168
        },
        {
            "name": "__________ Health Care",
            "id": 200001355
        },
        {
            "name": "__________ Makeup",
            "id": 660103
        },
        {
            "name": "__________ Nail Art & Tools",
            "id": 200001147
        },
        {
            "name": "__________ Oral Hygiene",
            "id": 3305
        },
        {
            "name": "__________ Sanitary Paper",
            "id": 1513
        },
        {
            "name": "__________ Sex Products",
            "id": 200001508
        },
        {
            "name": "__________ Shaving & Hair Removal",
            "id": 660302
        },
        {
            "name": "__________ Skin Care",
            "id": 3306
        },
        {
            "name": "__________ Skin Care Tool",
            "id": 100000616
        },
        {
            "name": "__________ Tattoo & Body Art",
            "id": 200001976
        },
        {
            "name": "__________ Tools & Accessories",
            "id": 200001187
        },
        {
            "name_2": "Art",
            "id_2": 200004644
        },
        {
            "name": "__________ Books for Local Russian",
            "id": 200004360
        },
        {
            "name": "__________ Business Literature",
            "id": 200004968
        },
        {
            "name": "__________ Calendars. Diaries. Non-Text Editions",
            "id": 200004801
        },
        {
            "name": "__________ Children's Literature",
            "id": 200004451
        },
        {
            "name": "__________ Culture & The Arts",
            "id": 200004937
        },
        {
            "name": "__________ Educational Literature. Education. Pedagogy",
            "id": 200004810
        },
        {
            "name": "__________ Engineering And Science",
            "id": 200004578
        },
        {
            "name": "__________ Fiction",
            "id": 200004854
        },
        {
            "name": "__________ Foreign Languages. Teaching. Reading",
            "id": 200004593
        },
        {
            "name": "__________ Gift Editions",
            "id": 200004631
        },
        {
            "name": "__________ Home. Leisure. Family.",
            "id": 200004688
        },
        {
            "name": "__________ Humanities & Social Sciences",
            "id": 200004377
        },
        {
            "name": "__________ Informatics. Programming. Internet",
            "id": 200004361
        },
        {
            "name": "__________ Legal Literature",
            "id": 200005012
        },
        {
            "name": "__________ Medicine & Health",
            "id": 200004916
        },
        {
            "name": "__________ References. Encyclopedia. Dictionaries",
            "id": 200004652
        },
        {
            "name": "__________ Religion. Religious Science. Esoterics",
            "id": 200004552
        },
        {
            "name": "__________ Tourism. Sport",
            "id": 200005055
        },
        {
            "name_2": "Computer Components",
            "id_2": 200001076
        },
        {
            "name": "__________ Computer & Office",
            "id": 7
        },
        {
            "name": "__________ Computer Peripherals",
            "id": 200001081
        },
        {
            "name": "__________ DIY Computer",
            "id": 200048142
        },
        {
            "name": "__________ External Storage",
            "id": 200001074
        },
        {
            "name": "__________ Laptop Accessories",
            "id": 200001083
        },
        {
            "name": "__________ Laptops & Netbooks",
            "id": 200002303
        },
        {
            "name": "__________ Memory Cards & Accessories",
            "id": 200004265
        },
        {
            "name": "__________ Networking",
            "id": 200001077
        },
        {
            "name": "__________ Office Electronics",
            "id": 200003782
        },
        {
            "name": "__________ Tablets & PDAs Accessories",
            "id": 200001085
        },
        {
            "name_2": "Boards",
            "id_2": 100005320
        },
        {
            "name": "__________ Home Improvement",
            "id": 13
        },
        {
            "name": "__________ Ceilings",
            "id": 100007099
        },
        {
            "name": "__________ Curtain Walls & Accessories",
            "id": 100005265
        },
        {
            "name": "__________ Doors, Gates & Windows",
            "id": 100007064
        },
        {
            "name": "__________ Earthwork Products",
            "id": 100005281
        },
        {
            "name": "__________ Fireplaces,Stoves",
            "id": 100007067
        },
        {
            "name": "__________ Flooring & Accessories",
            "id": 100006266
        },
        {
            "name": "__________ Functional Material",
            "id": 200001751
        },
        {
            "name": "__________ Garden Landscaping & Decking",
            "id": 12504
        },
        {
            "name": "__________ Kitchen & Bath Fixtures",
            "id": 100006265
        },
        {
            "name": "__________ Ladders & Scaffoldings",
            "id": 1330
        },
        {
            "name": "__________ Landscaping Stone",
            "id": 131211
        },
        {
            "name": "__________ Metal Building Materials",
            "id": 200001382
        },
        {
            "name": "__________ Plastic Building Materials",
            "id": 100005310
        },
        {
            "name": "__________ Quarry Stone & Slabs",
            "id": 1312
        },
        {
            "name": "__________ Stairs & Stair Parts",
            "id": 100007071
        },
        {
            "name": "__________ Stone Carvings and Sculptures",
            "id": 131207
        },
        {
            "name": "__________ Tiles & Accessories",
            "id": 100006285
        },
        {
            "name": "__________ Timber",
            "id": 100005335
        },
        {
            "name_2": "Accessories& Parts",
            "id_2": 629
        },
        {
            "name": "__________ Consumer Electronics",
            "id": 44
        },
        {
            "name": "__________ Camera & Photo",
            "id": 100000305
        },
        {
            "name": "__________ DIY Parts",
            "id": 200003314
        },
        {
            "name": "__________ Electronic Cigarettes",
            "id": 200003561
        },
        {
            "name": "__________ Games & Accessories",
            "id": 100000310
        },
        {
            "name": "__________ Home Audio & Video Equipments",
            "id": 100000308
        },
        {
            "name": "__________ Portable Audio & Video",
            "id": 100000306
        },
        {
            "name": "__________ Portable HiFi",
            "id": 200003869
        },
        {
            "name": "__________ Power Source",
            "id": 200003319
        },
        {
            "name": "__________ Smart Electronics",
            "id": 200003803
        },
        {
            "name_2": "Connectors & Terminals",
            "id_2": 14190406
        },
        {
            "name": "__________ Electrical Equipment & Supplies",
            "id": 5
        },
        {
            "name": "__________ Generators",
            "id": 141902
        },
        {
            "name": "__________ Power Supplies",
            "id": 141911
        },
        {
            "name": "__________ Switches",
            "id": 141906
        },
        {
            "name": "__________ Wires, Cables & Cable Assemblies",
            "id": 141904
        },
        {
            "name": "__________ Wiring Accessories",
            "id": 14190403
        },
        {
            "name_2": "Active Components",
            "id_2": 4001
        },
        {
            "name": "__________ Electronic Components & Supplies",
            "id": 502
        },
        {
            "name": "__________ Electronic Accessories & Supplies",
            "id": 4003
        },
        {
            "name": "__________ Optoelectronic Displays",
            "id": 4004
        },
        {
            "name": "__________ Passive Components",
            "id": 4005
        },
        {
            "name_2": "Tea",
            "id_2": 100007269
        },
        {
            "name": "__________ Food",
            "id": 2
        },
        {
            "name_2": "Children Furniture",
            "id_2": 100003019
        },
        {
            "name": "__________ Furniture",
            "id": 1503
        },
        {
            "name": "__________ Commercial Furniture",
            "id": 150301
        },
        {
            "name": "__________ Furniture Parts",
            "id": 3708
        },
        {
            "name": "__________ Home Furniture",
            "id": 150303
        },
        {
            "name": "__________ Outdoor Furniture",
            "id": 150302
        },
        {
            "name_2": "Accessory & Tools",
            "id_2": 200001481
        },
        {
            "name": "__________ Hair & Accessories",
            "id": 200003655
        },
        {
            "name": "__________ Blended Hair",
            "id": 200003436
        },
        {
            "name": "__________ Certified Human Hair",
            "id": 200003656
        },
        {
            "name": "__________ Feather Hair",
            "id": 200003435
        },
        {
            "name": "__________ Synthetic Hair",
            "id": 200003434
        },
        {
            "name_2": "Adhesives & Sealers",
            "id_2": 200001757
        },
        {
            "name": "__________ Hardware",
            "id": 42
        },
        {
            "name": "__________ Door Hardware",
            "id": 200001770
        },
        {
            "name": "__________ Fasteners",
            "id": 1459
        },
        {
            "name": "__________ Furniture Hardware",
            "id": 150306
        },
        {
            "name": "__________ Windows Hardware",
            "id": 153803
        },
        {
            "name_2": "Arts,Crafts & Sewing",
            "id_2": 200003937
        },
        {
            "name": "__________ Home & Garden",
            "id": 15
        },
        {
            "name": "__________ Bathroom Products",
            "id": 100003467
        },
        {
            "name": "__________ Collectibles",
            "id": 200003998
        },
        {
            "name": "__________ Festive & Party Supplies",
            "id": 100001824
        },
        {
            "name": "__________ Garden Supplies",
            "id": 125
        },
        {
            "name": "__________ Home Decor",
            "id": 3710
        },
        {
            "name": "__________ Home Storage & Organization",
            "id": 1541
        },
        {
            "name": "__________ Home Textile",
            "id": 405
        },
        {
            "name": "__________ House Ornamentation",
            "id": 200003767
        },
        {
            "name": "__________ Household Cleaning Tools & Accessories",
            "id": 1514
        },
        {
            "name": "__________ Household Merchandises",
            "id": 200033149
        },
        {
            "name": "__________ Kitchen,Dining & bar",
            "id": 200000920
        },
        {
            "name": "__________ Pet Products",
            "id": 100006664
        },
        {
            "name_2": "Air Conditioning Appliances",
            "id_2": 100000037
        },
        {
            "name": "__________ Home Appliances",
            "id": 6
        },
        {
            "name": "__________ Cleaning Appliances",
            "id": 100000038
        },
        {
            "name": "__________ Home Appliance Parts",
            "id": 100000039
        },
        {
            "name": "__________ Home Heaters",
            "id": 100000040
        },
        {
            "name": "__________ Kitchen Appliances",
            "id": 100000041
        },
        {
            "name": "__________ Laundry Appliances",
            "id": 100000042
        },
        {
            "name": "__________ Refrigerators & Freezers",
            "id": 100000136
        },
        {
            "name": "__________ Water Heaters",
            "id": 100000043
        },
        {
            "name": "__________ Water Treatment Appliances",
            "id": 100000044
        },
        {
            "name_2": "Machinery",
            "id_2": 43
        },
        {
            "name": "__________ Industry & Business",
            "id": 200001996
        },
        {
            "name": "__________ Mechanical Parts & Fabrication Services",
            "id": 41
        },
        {
            "name": "__________ Packaging & Shipping",
            "id": 23
        },
        {
            "name": "__________ Printing Materials",
            "id": 100005067
        },
        {
            "name": "__________ Rubber & Plastics",
            "id": 80
        },
        {
            "name": "__________ Service Equipment",
            "id": 2829
        },
        {
            "name_2": "Fashion Jewelry",
            "id_2": 1509
        },
        {
            "name": "__________ Jewelry & Accessories",
            "id": 36
        },
        {
            "name": "__________ Fine Jewelry",
            "id": 200001680
        },
        {
            "name_2": "Commercial Lighting",
            "id_2": 200001493
        },
        {
            "name": "__________ Lights & Lighting",
            "id": 39
        },
        {
            "name": "__________ Indoor Lighting",
            "id": 1504
        },
        {
            "name": "__________ LED Lighting",
            "id": 390501
        },
        {
            "name": "__________ Lighting Accessories",
            "id": 530
        },
        {
            "name": "__________ Lighting Bulbs & Tubes",
            "id": 150402
        },
        {
            "name": "__________ Outdoor Lighting",
            "id": 150401
        },
        {
            "name": "__________ Portable Lighting",
            "id": 390503
        },
        {
            "name": "__________ Professional Light",
            "id": 200001704
        },
        {
            "name_2": "Leisure Bags",
            "id_2": 3806
        },
        {
            "name": "__________ Luggage & Bags",
            "id": 1524
        },
        {
            "name": "__________ Luggage & Travel Bags",
            "id": 152404
        },
        {
            "name": "__________ Special Purpose Bags",
            "id": 3805
        },
        {
            "name": "__________ Wallets & Holders",
            "id": 3803
        },
        {
            "name_2": "Activity & Gear",
            "id_2": 200002039
        },
        {
            "name": "__________ Mother & Kids",
            "id": 1501
        },
        {
            "name": "__________ Baby Care",
            "id": 200001330
        },
        {
            "name": "__________ Baby Clothing",
            "id": 310
        },
        {
            "name": "__________ Baby Shoes",
            "id": 200000937
        },
        {
            "name": "__________ Bedding",
            "id": 100003020
        },
        {
            "name": "__________ Children's Clothing",
            "id": 311
        },
        {
            "name": "__________ Children's Shoes",
            "id": 200000947
        },
        {
            "name": "__________ Feeding",
            "id": 200002038
        },
        {
            "name": "__________ Maternity",
            "id": 200000500
        },
        {
            "name": "__________ Safety",
            "id": 200002006
        },
        {
            "name_2": "Calendars,Planner & Cards",
            "id_2": 200001562
        },
        {
            "name": "__________ Office & School Supplies",
            "id": 21
        },
        {
            "name": "__________ Correction Supplies",
            "id": 100003125
        },
        {
            "name": "__________ Cutting Supplies",
            "id": 100003131
        },
        {
            "name": "__________ Desk Accessories & Organizer",
            "id": 211106
        },
        {
            "name": "__________ Labels, Indexes & Stamps",
            "id": 200001561
        },
        {
            "name": "__________ Notebooks & Writing Pads",
            "id": 100003155
        },
        {
            "name": "__________ Office Adhesives & Tapes",
            "id": 100003134
        },
        {
            "name": "__________ Office Binding Supplies",
            "id": 100003129
        },
        {
            "name": "__________ Office Furniture",
            "id": 150304
        },
        {
            "name": "__________ Painting Supplies",
            "id": 211111
        },
        {
            "name": "__________ Paper",
            "id": 2112
        },
        {
            "name": "__________ Pens, Pencils & Writing Supplies",
            "id": 200001743
        },
        {
            "name": "__________ Presentation Boards",
            "id": 212002
        },
        {
            "name": "__________ School & Educational Supplies",
            "id": 100003135
        },
        {
            "name_2": "Communication Equipment",
            "id_2": 100001204
        },
        {
            "name": "__________ Phones & Telecommunications",
            "id": 509
        },
        {
            "name": "__________ Mobile Phone Accessories & Parts",
            "id": 100001205
        },
        {
            "name": "__________ Telephones & Accessories",
            "id": 100001202
        },
        {
            "name_2": "Access Control",
            "id_2": 3030
        },
        {
            "name": "__________ Security & Protection",
            "id": 30
        },
        {
            "name": "__________ Door Intercom",
            "id": 200004310
        },
        {
            "name": "__________ Fire Protection",
            "id": 3009
        },
        {
            "name": "__________ Security Alarm",
            "id": 200004311
        },
        {
            "name": "__________ Smart Card System",
            "id": 200004309
        },
        {
            "name": "__________ Video Surveillance",
            "id": 3011
        },
        {
            "name": "__________ Workplace Safety Supplies",
            "id": 3007
        },
        {
            "name_2": "Shoe Accessories",
            "id_2": 32210
        },
        {
            "name": "__________ Shoes",
            "id": 322
        },
        {
            "name_2": "Baseball",
            "id_2": 200003646
        },
        {
            "name": "__________ Sports & Entertainment",
            "id": 18
        },
        {
            "name": "__________ Camping & Hiking",
            "id": 100005529
        },
        {
            "name": "__________ Cheerleading & Souvenirs",
            "id": 200003539
        },
        {
            "name": "__________ Cycling",
            "id": 200003500
        },
        {
            "name": "__________ Entertainment",
            "id": 200003538
        },
        {
            "name": "__________ Fishing",
            "id": 100005537
        },
        {
            "name": "__________ Fitness & Body Building",
            "id": 100005371
        },
        {
            "name": "__________ Golf",
            "id": 100005360
        },
        {
            "name": "__________ Hockey",
            "id": 200000554
        },
        {
            "name": "__________ Horse Riding",
            "id": 100005551
        },
        {
            "name": "__________ Hunting",
            "id": 100005563
        },
        {
            "name": "__________ Musical Instruments",
            "id": 100005481
        },
        {
            "name": "__________ Other Sports & Entertainment Product",
            "id": 200004194
        },
        {
            "name": "__________ Racquet Sports",
            "id": 200003540
        },
        {
            "name": "__________ Roller,Skateboard &Scooters",
            "id": 200003541
        },
        {
            "name": "__________ Rugby",
            "id": 200003545
        },
        {
            "name": "__________ Shooting",
            "id": 100005571
        },
        {
            "name": "__________ Skiing & Snowboarding",
            "id": 200003543
        },
        {
            "name": "__________ Sneakers",
            "id": 200000950
        },
        {
            "name": "__________ Sport Bags",
            "id": 200046142
        },
        {
            "name": "__________ Sportswear & Accessories",
            "id": 301
        },
        {
            "name": "__________ Water Sports",
            "id": 100005657
        },
        {
            "name_2": "Construction Tools",
            "id_2": 142016
        },
        {
            "name": "__________ Tools",
            "id": 1420
        },
        {
            "name": "__________ Hand Tools",
            "id": 142003
        },
        {
            "name": "__________ Lifting Tools",
            "id": 100007498
        },
        {
            "name": "__________ Measurement & Analysis Instruments",
            "id": 1537
        },
        {
            "name": "__________ Power Tools",
            "id": 1417
        },
        {
            "name": "__________ Tool Sets",
            "id": 200003955
        },
        {
            "name": "__________ Tools Packaging",
            "id": 100007485
        },
        {
            "name_2": "Baby Toys",
            "id_2": 100001698
        },
        {
            "name": "__________ Toys & Hobbies",
            "id": 26
        },
        {
            "name": "__________ Classic Toys",
            "id": 100001715
        },
        {
            "name": "__________ Dolls & Stuffed Toys",
            "id": 200001725
        },
        {
            "name": "__________ Electronic Toys",
            "id": 200001388
        },
        {
            "name": "__________ Learning & Education",
            "id": 100001714
        },
        {
            "name": "__________ Models & Building Toy",
            "id": 200001383
        },
        {
            "name": "__________ Novelty & Gag Toys",
            "id": 200001384
        },
        {
            "name": "__________ Outdoor Fun & Sports",
            "id": 100001719
        },
        {
            "name": "__________ Puzzles & Magic Cubes",
            "id": 200001726
        },
        {
            "name": "__________ Remote Control",
            "id": 200001385
        },
        {
            "name_2": "Ctrip",
            "id_2": 200003674
        },
        {
            "name": "__________ Travel and Coupon Services",
            "id": 200003498
        },
        {
            "name": "__________ Rentals",
            "id": 200003510
        },
        {
            "name": "__________ Russia Coupon Service",
            "id": 200004351
        },
        {
            "name": "__________ Travel Discount Coupons",
            "id": 200003501
            
        },
        {
            "name": "__________ Travel Products",
            "id": 200003518
            
        },
        {
            "name_2": "Watches Accessories",
            "id_2": 200000121
        },
        {
            "name": "__________ Watches",
            "id": 1511
        },
        {
            "name_2": "Special Occasion Dresses",
            "id_2": 200000749
        },
        {
            "name": "__________ Weddings & Events",
            "id": 320
        },
        {
            "name": "__________ Wedding Accessories",
            "id": 100005787
        },
        {
            "name": "__________ Wedding Party Dress",
            "id": 200000410
        }
    ];

    $scope.products = [];

    $scope.config = {
        itemsPerPage: 20,
        fillLastPage: true
    };

    $scope.params = {
        pageNo: 1,
        categoryId: null,
        keywords: '',
        volumeFrom: 0,
        volumeTo: 200,
        pageSize: 40,
        originalPriceFrom: 0,
        originalPriceTo: 15,
        numProductsMax: 1000
    };

    $scope.formDisabled = function() {
        return !!$scope.params.keywords || !!$scope.params.categoryId
    };

    $scope.submit = function() {
        $_url = 'pageNo='+ $scope.params.pageNo + '&categoryId='+ $scope.params.categoryId + '&keywords='+ $scope.params.keywords + '&volumeFrom='+ $scope.params.volumeFrom + '&volumeTo='+ $scope.params.volumeTo + '&pageSize='+ $scope.params.pageSize + '&originalPriceFrom=1&originalPriceTo=15&fields=productUrl,imageUrl,productId,allImageUrls,productTitle,originalPrice,salePrice,evaluateScore,volume,packageType';

        $http({
            method: 'GET',
            url: $url + $_url
        }).then(function successCallback(response) {
            var data = response.data.result;
            $scope.products = data.products;

            //getFreight(data.products);
        }, function errorCallback(response) {

        });
    };

    function getFreight(products) {
        angular.forEach(products, function(product) {
            $http({
                method: 'GET',
                url: "https://freight.aliexpress.com/ajaxFreightCalculateService.htm?callback=jQuery18304105555735913331_1542082591571&f=d&productid=" + product.productId +"&count=1&minPrice=51.02&maxPrice=54.93&currencyCode=USD&transactionCurrencyCode=USD&sendGoodsCountry=&country=US&province=&city=&abVersion=1&_=1542084501683"
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallback(response) {
                console.log(response);
            });
        });
    }
});