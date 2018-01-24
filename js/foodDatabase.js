var useless = ['vegetable','sweet','sour','spicy','barbecue','ailment','micronutrient','condiment','pasture','carbohydrate','protein','salt','tenderloin','sirloin','dairy product','meat product','hay','straw','herb','jug','kettle','bottle','platter','cinnamon','grub','grass','feast','goody','aliment','meat','spork','fork','spoon','knife','citrus','salad','sandwich','beverage'];

var fruits = ['banana','cherry','grapes','strawberry','blueberry','raspberry','blackberry','peach','plum','prune','raisin'];
var yellow = ['bread', 'dough', 'cheese', 'pasta', 'rice', 'gouda', 'cheddar', 'mozzarella', 'cottage cheese', 'pepperjack cheese']
//Here is the format 
//food['apple'] = [(calories),(fat),(protein),(category),(affiliate url),(Title),(Image URL)]
//food['apple'] = [15,30,20]
var food = {};
food['bacon'] = [130,10,9,'everything','https://www.amazon.com/gp/product/B011Q34VWM/ref=as_li_tl?ie=UTF8&tag=sharethefresh-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B011Q34VWM&linkId=144ae5ce7d36b1e9ae51764865706b05','Organic Prairie, Mighty Beef Bar, Organic 100% Grass-Fed Beef, Paleo, Gluten Free, Uncured Bacon and Apple, 1 Ounce, Pack of 12','https://images-na.ssl-images-amazon.com/images/I/41U2vp72ohL.jpg','Organic'];
food['roast beef'] = [130,8,14,'savory','http://amzn.to/2BUyICz','USDA Certified Organic Grass-Fed Boneless Prime Rib Roast','https://images-na.ssl-images-amazon.com/images/I/51ueiE7t%2BkL.jpg'];
food['chicken breast'] = [120,2.6,23,'savory','http://amzn.to/2iUBzUI','H.F.s Outstanding All Natural Skinless Boneless Chicken Breast 40 Ounce','https://images-na.ssl-images-amazon.com/images/I/41%2BAsk49niL.jpg'];
food['milk'] = [149,7.9,7.7,'dairy','https://www.amazon.com/gp/product/B00032G1S0/ref=as_li_tl?ie=UTF8&tag=sharethefresh-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00032G1S0&linkId=855d42c6df3a74f6f7017084e8d2a2fe','Tuscan Dairy Whole Vitamin D Milk, Gallon, 128 oz','https://images-na.ssl-images-amazon.com/images/I/41wKKumJtUL.jpg'];
food['sausage'] = [94,7.9,5.4,'savory','http://amzn.to/2iUCwfK','Natural Hog Casings for Sausage by Oversea Casing','https://images-na.ssl-images-amazon.com/images/I/5169dIOkVhL.jpg'];
food['almond milk'] = [60,2.5,1,'dairy','http://amzn.to/2iRw0WQ','Silk Almond Milk, Unsweetened Vanilla, 32 Fluid Ounce (Pack of 6)','https://images-na.ssl-images-amazon.com/images/I/51aZdvopBhL.jpg'];
food['tuna'] = [180,12,22,'savory','http://amzn.to/2AcIf7n','StarKist Chunk Light Tuna in Water, 5 Ounce Cans Pack of 8','https://images-na.ssl-images-amazon.com/images/I/51sB9NGKikL.jpg'];
food['steak'] = [398,36,16.3,'savory','http://amzn.to/2B7giRV','USDA Choice Ribeye Steaks - 12 oz','https://images-na.ssl-images-amazon.com/images/I/41z1of0gHhL.jpg'];
food['cheese'] = [399,33,24.8,'everything','http://amzn.to/2iSQjmX','Cabot Bar Extra Sharp Cheddar, 8 oz','https://images-na.ssl-images-amazon.com/images/I/41sR2ROA7ZL.jpg'];
food['tomato']= [18,0,1,'vegetable','http://amzn.to/2BEUXQI','Explore Cuisine Organic Chickpea High in Protein Fusilli Pasta 2 lbs','https://images-na.ssl-images-amazon.com/images/I/51JdCVr-bCL.jpg'];
food['onion']= [40,0.8,1,'vegetable','http://amzn.to/2AIvXmR','Raw Food Central Curt’s Classic Onion Rings 100% Organic NON GMO Gluten Free Vegan (1.5 oz. ) 43 g.','https://images-na.ssl-images-amazon.com/images/I/51cgL%2BMnHCL.jpg'];
food['carrot']= [6.9,0.2,0.7,'vegetable','http://amzn.to/2AIENRo','Imagine Organic Free Range Chicken Broth, Low Sodium, 32 Fl Oz (Packaging May Vary) ','https://images-na.ssl-images-amazon.com/images/I/41erqBbXhnL.jpg'];
food['avocado']= [321,4.3,4,'vegetable','http://amzn.to/2CHPo10','Zoe Organic Extra Virgin Olive Oil, 25.5 FL. OZ. tins (Pack of 2)','https://images-na.ssl-images-amazon.com/images/I/51O995m7eJL.jpg'];
food['green pepper']= [23.8,0.2,1,'sour','http://amzn.to/2FgRMxb','Back to the Roots Organic Mushroom Farm (Packaging May Vary)','https://images-na.ssl-images-amazon.com/images/I/41ObzbuqvkL.jpg'];
food['garlic']= [4.5,0,0.2,'everything','http://amzn.to/2Fjw9wb','No Yolks Kosher Extra Broad Pasta, 12 oz','https://images-na.ssl-images-amazon.com/images/I/51q7ElD3fZL.jpg'];
food['salt']= [0,0,0,'everything','http://amzn.to/2Fkr1Z2','McCormick Table Ground Black Pepper, 16 oz ','https://images-na.ssl-images-amazon.com/images/I/51fXeVBh2FL.jpg'];
food['rice']= [130,0,2,'everything','http://amzn.to/2m9nEvf','Lundberg Sprouted Brown Basmati Rice, 16 Ounce','https://images-na.ssl-images-amazon.com/images/I/51xnK1R9QQL.jpg'];
food['bread']= [95.2,1.2,2,'everything','','',''];
food['cucumber']= [34,0.4,1.7,'vegetable','http://amzn.to/2CTJ0b5','Simply Organic Dill Weed Cut & Sifted Certified Organic, 0.81-Ounce Container','https://images-na.ssl-images-amazon.com/images/I/414fWPyeSWL.jpg'];
food['spaghetti']= [105,0.4,3.7,'everything','http://amzn.to/2DbmI1h','Prego Pizza Sauce, Traditional, 14 Ounce','https://images-na.ssl-images-amazon.com/images/I/51t%2BuOiHyPL.jpg'];
food['potato']= [284,0.3,7.5,'vegetable','http://amzn.to/2CGEqZI','Himalayan Pink Salt Grass-Fed Ghee Butter by 4th & Heart, 9 Ounce, Pasture Raised, Non-GMO, Lactose Free, Certified Paleo','https://images-na.ssl-images-amazon.com/images/I/51m21-ekNDL.jpg'];
food['parsley']= [1,0,0.1,'vegetable','http://amzn.to/2CRzzbk','McCormick Basil Leaves, 5 oz ','https://images-na.ssl-images-amazon.com/images/I/41EsvNyp4OL.jpg'];
food['vinegar']= [21,0,0,'sour','http://amzn.to/2CFvJPb','Bragg USDA Gluten Free Organic Raw Apple Cider Vinegar, With the Mother 16 ounces','https://images-na.ssl-images-amazon.com/images/I/41YD1RYsUOL.jpg'];
//food['pepper']= [16,0.2,0.7,'everything'];
food['lemon']= [22,0.3,1.3,'sour','http://amzn.to/2FgiuGl','Realemon 100% Lemon Juice, 2.5 oz','https://images-na.ssl-images-amazon.com/images/I/51jusb0N%2BIL.jpg'];
food['peas']= [26,0.1,1.8,'vegetable','http://amzn.to/2CHU8nk','Food to Live Green Peas Whole (Green Vatana) (2.5 Pounds)','https://images-na.ssl-images-amazon.com/images/I/511muLWUooL.jpg'];
food['broccoli']= [31,0.3,2.6,'vegetable','http://amzn.to/2CWeKLV','McCormick Golden Dipt Lemon Butter Dill Sauce, 8.4 oz (Case of 6)','https://images-na.ssl-images-amazon.com/images/I/41-F4RD0ebL.jpg'];
food['lettuce']= [5,0.1,0.5,'vegetable','http://amzn.to/2CVbu4d','Iceberg Lettuce','https://images-na.ssl-images-amazon.com/images/I/41CGtIyWgML.jpg'];
food['egg']= [72,4.8,6.3,'savory','http://amzn.to/2Da01uo','Nishiki Premium Rice, Medium Grain, 15-Pound Bag','https://images-na.ssl-images-amazon.com/images/I/51dg9myYLWL.jpg'];
food['corn']= [88,1.4,3.3,'vegetable','http://amzn.to/2FgkWg1','Realemon 100% Lemon Juice, 2.5 oz','https://images-na.ssl-images-amazon.com/images/I/51jusb0N%2BIL.jpg'];
food['pickle']= [7,0.1,0.2,'sour','http://amzn.to/2DliFC9','Pickle Juice Extra Strength Shots, 2.5 oz, 12 pack','https://images-na.ssl-images-amazon.com/images/I/51qvillwjQL.jpg'];
food['eggplant']= [137,1,5.4,'vegetable','http://amzn.to/2rhImin','Tasty Bite Indian Entrée, Punjab Eggplant, 10 Ounce (Pack of 6)','https://images-na.ssl-images-amazon.com/images/I/51MpDJw8s6L.jpg'];
food['olive oil']= [119,13.5,0,'everything','http://amzn.to/2rbBVNL','Zoe Organic Extra Virgin Olive Oil, 25.5 FL. OZ. tins (Pack of 2)','https://images-na.ssl-images-amazon.com/images/I/51O995m7eJL.jpg'];
food['olive']= [155,14.4,1.1,'vegetable','http://amzn.to/2DmV1VW','	Organic Extra Virgin Olive Oil by Sky Organics 17oz- 100% Pure, Greek, Cold Pressed, Unfiltered, Non-GMO EVOO- For Cooking, Baking, Hair & Skin moisturizing- Award Winning Best USDA Organic Olive Oil','https://images-na.ssl-images-amazon.com/images/I/41oTpsV9hyL.jpg'];
food['red pepper']= [38,3.6,0.3,'sour','http://amzn.to/2Do3IiV','McCormick Crushed Red Pepper, 13 oz','https://images-na.ssl-images-amazon.com/images/I/51UJ%2BXd31aL.jpg'];
food['pepper']= [31,0,1,'sour','http://amzn.to/2FKtdZJ','Secret Aardvark Habanero Sauce, 8 fl oz','https://images-na.ssl-images-amazon.com/images/I/41VxDh0JYvL.jpg'];
food['dough']= [57,1.1,1.3,'everything','http://amzn.to/2Da2Nz2','Tiptree Sweet Tip Raspberry Preserve, 12 Ounce Jar','https://images-na.ssl-images-amazon.com/images/I/51sBl%2BOYPSL.jpg'];
food['spinach']= [7,0.1,0.9,'vegetable','http://amzn.to/2CQf1jB','Montchevre, Goat Feta, 7 oz','https://images-na.ssl-images-amazon.com/images/I/31g9DP3-8iL.jpg'];
food['banana']=[105,0.4,1.3,'sweet','http://amzn.to/2D8BFAC','Barnana Organic Chewy Banana Bites, Original, 3.5 Ounce','https://images-na.ssl-images-amazon.com/images/I/51dIm0xxt1L.jpg'];
food['cabbage']=[19,0.1,1.4,'vegetable','http://amzn.to/2rgegvy','Miso Soup with Spinach, Cabbage & Carrots, Freeze Dried Instant Soup Cubes, VEGAN NON-GMO GLUTEN FREE, 6 oz Servings (Pack of 4)','https://images-na.ssl-images-amazon.com/images/I/51bwyZx6itL.jpg'];
food['pineapple']=[73,0.2,0.9,'sour','http://amzn.to/2DkwAbt','Native Forest Organic Pineapple Chunks, 14-Ounce Cans (Pack of 6)','https://images-na.ssl-images-amazon.com/images/I/51nvArXBMJL.jpg'];
food['cauliflower']=[25,0.3,2,'vegetable','http://amzn.to/2FGXKI7','Califlour Foods Gluten Free, Low Carb Cauliflower Original Italian Pizza Crusts - 1 Box - (2 Total Crusts Per Box)','https://images-na.ssl-images-amazon.com/images/I/511dTUYRIwL.jpg'];
food['asparagus']=[3,0.1,0.9,'vegetable','http://amzn.to/2FHDdmJ','Asparagus Powder 1.0 oz. (28g) - Organic Eco Friendly Gifts! - Eco-Spices!','https://images-na.ssl-images-amazon.com/images/I/51HCH0pmwxL.jpg'];
food['legume']=[50,0,0,'vegetable','http://amzn.to/2l0kmgW]','Nishiki Premium Rice, Medium Grain, 15-Pound Bag','https://images-na.ssl-images-amazon.com/images/I/51dg9myYLWL.jpg', 'Paired'];
//Here is the format 
//food['apple'] = [(calories),(fat),(protein),(category),(affiliate url),(Title),(Image URL)]
//food['apple'] = [15,30,20]
food['courgette']=[18,0,0,'vegetable','http://amzn.to/2iTKaqo','Green Courgette BOLOGNESE 10 Heirloom Organic Vegetable Garden Seeds','https://images-na.ssl-images-amazon.com/images/I/61IwgJ9yuRL.jpg'];
food['peanut butter']=[97,8.7,3.9,'condiment','http://amzn.to/2iTt247','Cascadian Farm, Organic Spread Strawberry, 10 oz','https://images-na.ssl-images-amazon.com/images/I/51TEXaNbDJL.jpg'];
food['chocolate']=[64,3.5,0.9,'sweet', 'http://amzn.to/2BA73Lf','Ferrero Rocher Hazelnut Chocolates, 48 Count, 21.2 oz','https://images-na.ssl-images-amazon.com/images/I/61qVDP4hZXL.jpg'];
food['yogurt']=[113,9,5,'dairy','http://amzn.to/2C7F7v1','Bear Naked Granola, Honey Almond Protein, 11.2 oz','https://images-na.ssl-images-amazon.com/images/I/51izikKOPfL.jpg'];
food['cereal']=[387,2,19,'sweet','http://amzn.to/2nQTYqP','Smart Start Antioxidants Cereal','https://images-na.ssl-images-amazon.com/images/I/51Q6cD0BQYL.jpg'];
food['muesli']=[289,4.2,8.2,'everything','http://amzn.to/2kpaeKv','Bobs Red Mill Old Country Style Muesli Cereal','https://images-na.ssl-images-amazon.com/images/I/51YYecXi5AL.jpg'];
food['peanut']=[161,13.5,7.1,'everything','http://amzn.to/2BbLlN0','Signature Trail Mix, Peanuts, M and M Candies, Raisins, Almonds and Cashews, 4 Pound','https://images-na.ssl-images-amazon.com/images/I/517I5P8LS6L.jpg'];
food['tea']=[1,0,0,'everything','http://amzn.to/2l1Ev6d','Twinings Tea Bags Sampler Assortment - 40ct with By The Cup Honey Stix','https://images-na.ssl-images-amazon.com/images/I/51hQX%2Bs7gRL.jpg'];
food['beer']=[103,0,0.8,'sour','http://amzn.to/2C4RRCC','Realime 100% Lime Juice, 15 oz (2 PACK)','https://images-na.ssl-images-amazon.com/images/I/51HSgF2U9SL.jpg'];
food['candy']=[208,9.5,2.8,'sweet','http://amzn.to/2BB4Fnv','YumEarth Organic Lollipops, Assorted Flavors, 50 Lollipops','https://images-na.ssl-images-amazon.com/images/I/51xjGgHCEyL.jpg'];
food['cake']=[121,4.4,1.7,'sweet','http://amzn.to/2l3qOnd','Arrowhead Mills Organic Chocolate Cake Mix','https://images-na.ssl-images-amazon.com/images/I/51X4D9MauXL.jpg'];
food['cookie']=[147,6.6,1.7,'sweet','http://amzn.to/2B6tPJr','Kirkland Signature European Cookies with Belgian Chocolate, 49.4 Ounce','https://images-na.ssl-images-amazon.com/images/I/51w5mSKVykL.jpg'];
food['spices']=[16,0.5,0.4,'everything','http://amzn.to/2knPdQh','Lawrys Garlic Salt With Parsley, 33 oz','https://images-na.ssl-images-amazon.com/images/I/41QleyojfBL.jpg'];
food['meat']=[256,15.9,26.2,'savory','http://amzn.to/2l06Dqi','Peter Luger Steak Sauce by Gourmet-Food, 12.6 fl oz','https://images-na.ssl-images-amazon.com/images/I/41zIctTTBoL.jpg'];
food['juice']=[117,0.4,1.7,'sour','http://amzn.to/2B5PBgy','Tropicana 100% Juice 3-Flavor Fruit Blend Variety Pack, 10 Fl Oz, Bottles, (Pack of 24)','https://images-na.ssl-images-amazon.com/images/I/517g6CSUU6L.jpg'];
food['cider']=[50,0,0,'sour','http://amzn.to/2BevWvi','Austin Cookies and Crackers Variety Pack, 45 Count','https://images-na.ssl-images-amazon.com/images/I/51zYIgmy6gL.jpg'];
food['butter']=[102,11.5,0.1,'dairy','http://amzn.to/2B9bwU8','Aunt Millies Healthy Goodness Light Potato Bread','https://images-na.ssl-images-amazon.com/images/I/51EwIZq-uFL.jpg'];
food['turkey']=[36,0.3,3.6,'savory','http://amzn.to/2z2Dgbs','McCormick Turkey Gravy Mix, 0.87 oz','https://images-na.ssl-images-amazon.com/images/I/51Q2wgt4dxL.jpg'];
food['tuna']=[31,0.1,6.9,'savory','http://amzn.to/2kmFRnY','Schar Gluten Free Table Crackers, 7.4 Ounce (Pack of 3)','https://images-na.ssl-images-amazon.com/images/I/51OpH3l5B1L.jpg'];
food['salmon']=[36,1.2,5.88,'savory','http://amzn.to/2BF4c3m','Camellia Brand - Red Kidney Beans, Dry Bean (1 pound bag)','https://images-na.ssl-images-amazon.com/images/I/41IuJvYSkKL.jpg'];
food['hake']=[80,1,16,'savory','http://amzn.to/2BA9LQV','Red Boat Premium Fish Sauce, 500 ml (17 oz.)','https://images-na.ssl-images-amazon.com/images/I/41qF6quww6L.jpg'];
food['oysters']=[69,2,9,'savory','http://amzn.to/2z2HxM3','Lee Kum Kee Panda Brand Oyster Sauce (18 oz.) (Pack of 2)','https://images-na.ssl-images-amazon.com/images/I/41GUWMQc3GL.jpg'];
food['mussels']=[146,3.8,20.2,'savory','http://amzn.to/2BCUEWJ','Vigo Mussels In Marinade Sauce (Pack of 3)','https://images-na.ssl-images-amazon.com/images/I/51riWmeyGVL.jpg'];
food['clams']=[62.5,0.5,10.5,'savory','http://amzn.to/2l0afJ1','Progresso White Clam Sauce With Garlic & Herb, 15 oz Cans (Pack of 6)','https://images-na.ssl-images-amazon.com/images/I/51G3qzO2J0L.jpg'];
food['shrimp']=[128,1.7,26.1,'savory','http://amzn.to/2C7Qjb8','Terry Hos Yum Yum Hot Steakhouse Steak/Shrimp Sauce, 16 Ounce','https://images-na.ssl-images-amazon.com/images/I/419H8hyMa1L.jpg'];
food['lobster']=[116,1.1,24.8,'savory','http://amzn.to/2BVbLzc','Better Than Bouillon Base, Lobster, 8 Ounce','https://images-na.ssl-images-amazon.com/images/I/61vQY8cEj8L.jpg'];
food['caviar']=[75,5.1,7,'savory','http://amzn.to/2C6kGhU','Season Black Capelin Caviar from Iceland, 3.5-Ounce Glass Jars (Pack of 4)','https://images-na.ssl-images-amazon.com/images/I/51ZAz54LRpL.jpg'];
food['garlic bread']=[151,7.1,3.6,'everything','http://amzn.to/2BAdwWx','Chef Shamy Garlic Butter, Parmesan Basil, 10 Ounce (Pack of 2)','https://images-na.ssl-images-amazon.com/images/I/51M05B5Ap9L.jpg'];
food['calamari']=[150,0,8,'savory','http://amzn.to/2B7dWCw','Minors Sauce, Sweet Chili, 4.7 lbs','https://images-na.ssl-images-amazon.com/images/I/41TjAS99oKL.jpg'];
food['squid']=[150,6.4,15.2,'savory','http://amzn.to/2BeYwMW','Squid Brand Fish Sauce, 24 Ounce','https://images-na.ssl-images-amazon.com/images/I/31aCENOewBL.jpg'];
food['chowder']=[186,5.4,5.3,'savory','http://amzn.to/2B8SVYj','Campbells Chunky Soup, New England Clam Chowder, 15.25 Ounce (Pack of 8)','https://images-na.ssl-images-amazon.com/images/I/51tsTBBvBOL.jpg'];
food['fries']=[301,14,4,'everything','http://amzn.to/2BEckBq','Heinz, Tomato Ketchup, 14oz Squeeze Bottle (Pack of 2)','https://images-na.ssl-images-amazon.com/images/I/61cRiV2HG4L.jpg'];
food['chicken burger']=[350,17.6,14.8,'savory','http://amzn.to/2Be5j9W','Red Robin Original Blend Signature Seasoning, 4 Ounce','https://images-na.ssl-images-amazon.com/images/I/41G6e6KA%2BiL.jpg'];
food['bread bun']=[250,6,7,'everything','http://amzn.to/2Ae7TZw','Sweet Baby Rays Honey Mustard Dipping Sauce (Pack of 2) 14 oz Bottles','https://images-na.ssl-images-amazon.com/images/I/512sMskIvcL.jpg'];
food['bread roll']=[151,3,6.9,'everything','http://amzn.to/2C3w0vg','Himalayan Pink Salt Grass-Fed Ghee Butter by 4th & Heart, 9 Ounce, Pasture Raised, Non-GMO, Lactose Free, Certified Paleo','https://images-na.ssl-images-amazon.com/images/I/51m21-ekNDL.jpg'];
food['hot dog']=[316,28,11,'savory','http://amzn.to/2iUOYw2','Applegate Organic Uncured Beef Hot Dogs','https://images-na.ssl-images-amazon.com/images/I/61Bt7xxbz8L.jpg'];
//food['vienna']=[230,19,10,'savory','http://amzn.to/2Aboygp','STOPLIGHT BELL PEPPERS GREEN, RED & YELLOW LARGE FRESH FRUIT PRODUCE VEGETABLES EACH','https://images-na.ssl-images-amazon.com/images/I/41CmPoae-jL.jpg'];
food['potato chips']=[151,9.6,1.7,'everything','http://amzn.to/2B8cBv9','IZZE Sparkling Juice, 4 Flavor Variety Pack','https://images-na.ssl-images-amazon.com/images/I/61SjbV-ukOL.jpg'];
food['corn chips']=[141,6.3,1.8,'everything','http://amzn.to/2BBXVWe','Zevia Zero Calorie Soda, Rainbow Variety Pack, Naturally Sweetened Soda, (24) 12 Ounce Cans','https://images-na.ssl-images-amazon.com/images/I/514HXafUVEL.jpg'];
food['salsa']=[75,0.4,4,'sour','http://amzn.to/2AfmxzT','Garden of Eatin, Blue Chips, No Salt Added, 8.1 oz','https://images-na.ssl-images-amazon.com/images/I/51QhANpT4pL.jpg'];
food['guacamole']=[150,13,2,'everything','http://amzn.to/2FeuJmV','Anna and Sarah Organic Coconut Chips Flakes 3 Lbs in Resealable Bag','https://images-na.ssl-images-amazon.com/images/I/41k4ZEh-FDL.jpg'];
food['sour cream']=[136,11,4,'dairy','http://amzn.to/2EpwiwZ','Hidden Valley Dips Mix, Fiesta Ranch 1.1 Oz Packets (Pack of 6) ','https://images-na.ssl-images-amazon.com/images/I/61txxXK82tL.jpg'];
food['hummus']=[27,1.3,0.8,'everything','http://amzn.to/2mdqkrM','Kettle Brand Organic Potato Chips, Sea Salt, 5-Ounce Bags (Pack of 15) ','https://images-na.ssl-images-amazon.com/images/I/5151fWoNRaL.jpg'];
food['ginger']=[5,0,0.1,'sour','http://amzn.to/2CK4gMs','Taylors of Harrogate Classic Tea Variety Box, 48 Count','https://images-na.ssl-images-amazon.com/images/I/41R2U6aeODL.jpg'];
food['chicken curry']=[313,22,20,'savory','http://amzn.to/2EnLZVD','Explore Cuisine Organic Chickpea High in Protein Fusilli Pasta 2 lbs ','https://images-na.ssl-images-amazon.com/images/I/51JdCVr-bCL.jpg'];
food['noodles']=[108,0,2,'savory','http://amzn.to/2CGhda2','Muir Glen Organic Tomato Sauce, No Sugar Added, 15 Ounce Can (Pack of 12) ','https://images-na.ssl-images-amazon.com/images/I/51rVGgMogDL.jpg'];
food['lasagna']=[500,8,23,'everything','http://amzn.to/2mblUkP','Bertolli Alfredo Sauce with Aged Parmesan Cheese, 15 oz ','https://images-na.ssl-images-amazon.com/images/I/418oCSIsWyL.jpg'];
food['baked potato']=[281,0.4,6.3,'vegetable','http://amzn.to/2CISwtk','Sour Cream Starter Culture ','https://images-na.ssl-images-amazon.com/images/I/51uU9yEiyJL.jpg'];
food['toast']=[75,1,3.1,'everything','http://amzn.to/2qDxyKS','Nutiva Organic Coconut Manna, 15 Ounce (Pack of 2) ','https://images-na.ssl-images-amazon.com/images/I/51cW3nK0y5L.jpg'];
food['radish']=[18,0,1,'vegetable','http://amzn.to/2FiQDWa','Lundberg Family Farms Risotto Butternut Squash, 5.8 oz ','https://images-na.ssl-images-amazon.com/images/I/51TfWRdiBrL.jpg'];
food['chives']=[1,0,0,'vegetable','http://amzn.to/2CHWp1C','Nishiki Premium Rice, Medium Grain, 15-Pound Bag ','https://images-na.ssl-images-amazon.com/images/I/51dg9myYLWL.jpg'];
food['green onion']=[3,0.1,0.1,'vegetable','http://amzn.to/2CTnouB','Spice World, ORGANIC GARLIC - LARGE Container - 32 OZ ','https://images-na.ssl-images-amazon.com/images/I/51sjIw2-JbL.jpg'];
food['red onion']=[42,0,1,'vegetable','http://amzn.to/2Fjz1JN','Atomic Horseradish - Extra Hot - "2 Pack" - (6 Oz Jars) ','https://images-na.ssl-images-amazon.com/images/I/51ltbwBUOOL.jpg'];
food['creamer']=[70,2,0,'dairy','http://amzn.to/2CGiUEq','Kicking Horse Coffee, Kick Ass, Dark Roast, Ground, 10 Ounce ','https://images-na.ssl-images-amazon.com/images/I/41GrBp1YFAL.jpg'];
food['honey']=[64,0,0.1,'sweet','http://amzn.to/2AIesD2',' 	Traditional Medicinals Organic Hibiscus Tea, 16 Tea Bags ','https://images-na.ssl-images-amazon.com/images/I/51ZVpyaJAmL.jpg'];
food['syrup']=[56,0,0,'sweet','http://amzn.to/2CIseay','Bobs Red Mill Organic Buckwheat Flour, 22-ounce (Pack of 4) ','https://images-na.ssl-images-amazon.com/images/I/51Q2b3gJy9L.jpg'];
food['pancake']=[482,2.1,17.9,'sweet','http://amzn.to/2CHk3eV','Butternut Mountain Farm Organic Vermont Maple Syrup, 100% Pure Grade A Dark Robust (formerly Grade B), 12oz','https://images-na.ssl-images-amazon.com/images/I/41fs--d%2B3dL.jpg'];
food['burrito']=[332,13.4,10,'savory','http://amzn.to/2m92FIK','Raw Wraps Spinach- Gluten & Soy Free, Vegan & Raw, Paleo (Quinoa Seeds) ','https://images-na.ssl-images-amazon.com/images/I/6147jHtYxaL.jpg'];
food['taco shell']=[60,2.1,0.8,'everything','http://amzn.to/2AHQQid','Garden of Eatin Yellow Corn Taco Kit, 12 Count ','https://images-na.ssl-images-amazon.com/images/I/51H7qYQhpbL.jpg'];
food['tortilla']=[52,0.7,1.4,'everything','http://amzn.to/2qIB6LZ','Taco Bell Diablo Sauce, 7.5 oz (Pack of 2) ','https://images-na.ssl-images-amazon.com/images/I/41AxAUUz99L.jpg'];
food['hot sauce']=[5,0,0,'condiment','http://amzn.to/2Eo2d0Z','Veggicopia Dips, Variety Pack in 2.5oz Single Serving Cups (Pack of 12), No Refrigeration Required, Includes Original Hummus, Roasted Red Pepper Hummus, Edamame Dip ','https://images-na.ssl-images-amazon.com/images/I/61yi3DX8UIL.jpg'];
food['ham']=[28,0.9,4.6,'savory','http://amzn.to/2FfPmPB','http://amzn.to/2FfPmPB','https://images-na.ssl-images-amazon.com/images/I/51dYVz-rGaL.jpg'];
food['mustard']=[9,0.5,0.6,'condiment','http://amzn.to/2CHdcln','Primal Kitchen - Avocado Oil Mayo, Gluten and Dairy Free, Whole30 and Paleo Approved (12 oz) ','https://images-na.ssl-images-amazon.com/images/I/4190c7L9KUL.jpg'];
food['mayonaise']=[37,3.2,0.1,'condiment','http://amzn.to/2AGo1lX','Chef Paul Prudhommes Magic Seasoning Blends Magic 4-Pack, Qty. Four 2-ounce bottles ','https://images-na.ssl-images-amazon.com/images/I/51KBGMELBzL.jpg'];
food['mushroom']=[22,0.3,3,'vegetable','http://amzn.to/2m9gNSx','Beef Bone Broth by Kettle & Fire - 100 Percent Grass-fed, Organic, Collagen-rich Beef Bone Broth 2-Pack ','https://images-na.ssl-images-amazon.com/images/I/514p0j%2BqprL.jpg'];
food['mince meat']=[116,18,0,'savory','http://amzn.to/2FgW1c7','Ocean Spray Reduced Sugar Craisins Dried Cranberries, 43 oz. ','https://images-na.ssl-images-amazon.com/images/I/51H0vr7WbTL.jpg'];
food['corn beef']=[71,5.4,5.2,'savory','http://amzn.to/2maUiws','All Natural Fennel Salami- Nitrate Free/Gluten Free (Finocchiona) ','https://images-na.ssl-images-amazon.com/images/I/618Ecd2YjWL.jpg'];
food['waffle']=[100,3.4,2.3,'everything','http://amzn.to/2CW8On7','Annies Organic Cereal, Cocoa Bunnies, Oat, Corn, Rice Cereal, 10.0 Ounce ','https://images-na.ssl-images-amazon.com/images/I/618h1LGq6nL.jpg'];
food['muffin']=[162,6.2,3.7,'sweet','http://amzn.to/2CYHmEU','Krusteaz Gluten Free Blueberry Muffin Mix, 15.7-Ounce Box ','https://images-na.ssl-images-amazon.com/images/I/51DgE5HAOHL.jpg'];
food['cupcake']=[180,7,0,'sweet','http://amzn.to/2FhK5Hh','Wholesome Sweeteners, Inc., Organic, Vanilla Frosting, 12.5 oz (354 g)(PACK 1) ','https://images-na.ssl-images-amazon.com/images/I/519eSgwKQyL.jpg'];
food['cabbage']=[19,0.1,1.4,'vegetable','http://amzn.to/2CXFVFY','Hengstenberg Red Cabbage with Apple, German Style, 24-Ounce Jar ','https://images-na.ssl-images-amazon.com/images/I/51IuRh2HHGL.jpg'];
food['pecan nut']=[342,35,4.5,'everything','http://amzn.to/2DaPDlg','Planters Pecans, Roasted & Salted, 7.25 Ounce Canister','https://images-na.ssl-images-amazon.com/images/I/51dpg-hIprL.jpg'];
food['almond']=[193,16.7,7,'everything','http://amzn.to/2DhPoID','Blue Diamond Almonds, Low Sodium Lightly Salted, 25 Ounce','https://images-na.ssl-images-amazon.com/images/I/51B9rpibMTL.jpg'];
food['cashew']=[553,44,18,'everything','http://amzn.to/2DCfEuQ','Planters Deluxe Whole Cashew Nuts, 1 LB 2.25 OZ','https://images-na.ssl-images-amazon.com/images/I/51dJWGt5g7L.jpg'];
food['ranch']=[74,7.8,0.2,'everything','http://amzn.to/2FL6Kfq','Just Ranch, Non-GMO, 12oz','https://images-na.ssl-images-amazon.com/images/I/41MrpEMGTdL.jpg'];
food['salad dressing']=[35,3.1,0.1,'everything','http://amzn.to/2D8VXtr','Wish-Bone Salad Dressing, Italian, 15 Ounce','https://images-na.ssl-images-amazon.com/images/I/51FaDOK5TAL.jpg'];
food['cherry']=[87,0.3,1.5,'sweet','http://amzn.to/2Dlhqmt','Kirkland Signature Dried Cherries 20 Ounce','https://images-na.ssl-images-amazon.com/images/I/51Ro34veqpL.jpg'];
food['grapes']=[62,0.3,0.6,'sweet','http://amzn.to/2DkgKh5','Welchs 100% Juice, Concord Grape, No Sugar added, 10 Ounce On the Go Bottles (Pack of 24)','https://images-na.ssl-images-amazon.com/images/I/61EfBxKxLLL.jpg'];
food['strawberry']=[46,0,1,'sweet','http://amzn.to/2DnTDCg','Peter Rabbit Organics, Organic Strawberry and Banana 100% Pure Fruit Snack, 4.0-Ounces Pouches, (Pack of 10)','https://images-na.ssl-images-amazon.com/images/I/41JIGXs5TkL.jpg'];
food['blueberry']=[84,0.5,1.1,'sweet','http://amzn.to/2Dl9rWt','Earths Best Organic Stage 2, Blueberry & Banana Breakfast, 4 Ounce Pouch (Pack of 12) (Packaging May Vary)','https://images-na.ssl-images-amazon.com/images/I/51rXsKwqpZL.jpg'];
food['raspberry']=[64,0.8,1.5,'sweet','http://amzn.to/2DDe3VM','Traditional Medicinals Organic Raspberry Leaf Tea, 16 Tea Bags (Pack of 6)','https://images-na.ssl-images-amazon.com/images/I/61HEyw273KL.jpg'];
food['blackberry']=[62,0.7,2,'sweet','http://amzn.to/2Dbayof','Plum Organics Mighty 4, Organic Toddler Food, Apple, Blackberry, Purple Carrot, Greek Yogurt, Oat and Quinoa,6 count, 4 Ounce Pouch (Pack of 12)','https://images-na.ssl-images-amazon.com/images/I/41Z0ZZR-6CL.jpg'];
food['peach']=[59,0.4,1.4,'sweet','http://amzn.to/2mBrnBP','Core Organic Fruit Infused Beverage, Peach Mango, 18 Fl Oz (Pack of 12)','https://images-na.ssl-images-amazon.com/images/I/41VCMTdMCqL.jpg'];
food['plum']=[30,0.2,0.5,'sweet','http://amzn.to/2DjydpY','Plum Organics Stage 2, Organic Baby Food, Fruit and Veggie Variety Pack, 4 ounce pouch (Pack of 18)','https://images-na.ssl-images-amazon.com/images/I/511RxqE5TUL.jpg'];
food['prune']=[160,2,3,'sweet','http://amzn.to/2rc9QWy','Happy Tot Organic Stage 4 Super Foods Bananas Peaches Prunes & Coconut + Super Chia 4.22 Ounce, Non-GMO, Gluten Free, 3g of Fiber, Excellent source of vitamins A & C (Pack of 16)','https://images-na.ssl-images-amazon.com/images/I/51Ozsq28i-L.jpg'];
food['raisin']=[296,1,3,'sweet','http://amzn.to/2B5TOx7','Sun Maid Organic Raisins, 64 Ounce','https://images-na.ssl-images-amazon.com/images/I/511hHyCyGxL.jpg'];
food['gouda']=[101,7.8,7.1,'everything','http://amzn.to/2DC93AL','Kraft Cheese Spread, Pimento, 5-Ounce (Pack of 6)','https://images-na.ssl-images-amazon.com/images/I/51IHoRVWYjL.jpg'];
food['cheddar']=[115,9.6,6.8,'everything','http://amzn.to/2D7Ma6Z','Annies Organic Macaroni and Cheese, Shells & Aged Cheddar Mac and Cheese, 6 oz Box (Pack of 12)','https://images-na.ssl-images-amazon.com/images/I/51o3iFuPt%2BL.jpg'];
food['cottage cheese']=[183,5.1,23,'everything','http://amzn.to/2mBPqR9','LOVOUS 100% Unbleached Cheesecloth Ultra-Fine Grade 50 Butter Muslin Perfect for Cooking, Nut milk Filter, Cheese Making, Broth Strainer, Muslin Bag 2 Sq Yards/ 18 SQ Feet','https://images-na.ssl-images-amazon.com/images/I/51LZXS95fOL.jpg'];
food['cream cheese']=[50,5,0.9,'dairy','http://amzn.to/2Dgvtuc','Trident Wild Alaskan Smoked Sockeye Salmon - 567g/20 Oz','https://images-na.ssl-images-amazon.com/images/I/51qzSCIQsaL.jpg'];
food['pepperjack cheese']=[106,8.6,6.9,'everything','http://amzn.to/2Dh0RsO','Whisps Cheese Crisps 3 Pack Assortment (2.12oz) Cheddar, Parmesan & Asiago/Pepperjack','https://images-na.ssl-images-amazon.com/images/I/51vQhpOXZBL.jpg'];
food['mozzarella']=[90,7,6.1,'everything','http://amzn.to/2B7v4nY','Teeny Tiny Spice Co. of Vermont Organic Zaatar, 2.8 Oz','https://images-na.ssl-images-amazon.com/images/I/514%2BmuzuE8L.jpg'];


