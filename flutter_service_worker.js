'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "212bfcbea8e74247b1f6206fafc6592f",
".git/config": "e4c87d6eb632b98650ba3994a4d67fe1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6bbadaa35bdec2cc501eb3ce0fcfa1e2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d01a10fe4af21f1c2c5e67671c42c17f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da06e7ec1bb47af6071bfd362e38a607",
".git/logs/refs/heads/master": "ca938a27a92295246b0fff3c9c50bbd0",
".git/logs/refs/remotes/origin/master": "9be47040afa7685481d60a4b14741e0c",
".git/objects/00/6d6901b25ba3e8a0f5d5251ad039944ef26b22": "6a6f897a0c81fa0536c5826eafd565af",
".git/objects/00/f85b47985bad80d225264559011b1f50b22d78": "5268162acb7f969c941508d5ad2e25c3",
".git/objects/01/0f685c0bba1ed13ad9a493e31280be7ad225d9": "2b02890489582277432b610a297c1adc",
".git/objects/02/952a7928719d6c1cfc39eaaf4329b35fcdc775": "fd93b4ad6ef918354c67ea01484be118",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/02/e1fd7a18392dc1c572c074b5ca592a75740107": "897be90d0e44b5771437163b60a64d2d",
".git/objects/05/cbc7e4e6166ee44077407e52226b31b12573b9": "29babb0dfe2b89f7d0477f3a67da4d89",
".git/objects/08/c219309bdc2ead555e462ad8d42712b02b4272": "61fcce0b2abde9ecffb7226a849aa37a",
".git/objects/0c/4b6e0c5300d668e884b6d5ee27d9fc3808e1a3": "5555f41d0ab9fb207c615e855eba1c0a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/350fea6cfb97a7e22989f03d2b93742106c4e9": "16ef0bc5db7e8bfc935e8465e050958e",
".git/objects/0e/086bc172a8c4eec9ebff6f8318b8c3137a8718": "77cd91e0a3e232314d5b3313128496aa",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/0f/3d263bb1569caba94eb4adddbc0fac5eabaf06": "bee891338163e0338f3fe6d1cc145af7",
".git/objects/10/3d7d231fea8b5a99575581b1f1bedbb0e542a5": "df7854f8e381795e0a4637c94499a69f",
".git/objects/10/d3ce298633b30c96babb323cbdb623ff105942": "0a1d6510ff80f513a5a4822eccc9d177",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/13/14552a9b66156cd5334374b12913c8da08d822": "e2fcaaad988154904397de4a0aaffe15",
".git/objects/13/b5ec58cd3828a03e90823b8d935559fc085002": "3c9fa5dcec759137ec930f01067b6b1e",
".git/objects/17/bc2daa62f41d94751b90c2816f245bc8f8461e": "3113a9bffa2aa2e3ed28a0af0d6706e4",
".git/objects/1c/c251a2927df52e313c8e03cf25d4f398f6809c": "61ae18370faecba6e966c98a5c97b341",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/20/f891465ac1e5ba9970ca282006c4d32c1b5494": "cd9e84d8643e682daf07003b4db699bd",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/aede5b17f642f99d65ad234133dc180ac8009d": "dd9775cdaeb9c0ab36b5a84974fe442b",
".git/objects/23/fcd5a1b5bd022f2a94d1b8e46ae0bf1370f260": "5411ab4360dcc2516742e1afb66182f3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/b1c187de996eeda58621be86a776b6660725b9": "b200fd34c3e4be97166ae8a79a0d5bff",
".git/objects/26/c7d97dd765f0f2030cfcfeed6fa8fa101d6c72": "e4336567bfa07f46bbae134644e97192",
".git/objects/26/fa4959feb0cb160579b4ec6fd3bc8390ecaf26": "56fad33d4b623633fc0a21457f5d9ba2",
".git/objects/27/58b29b33eab25fe8a0cd53c437093655779b31": "b3a24fc2217f9d411d7938c5ed9814c5",
".git/objects/28/b89010ea211c95fa71501a1b3c8e45f004c7bd": "9f30cdd60e8512e5ad00f6499b946858",
".git/objects/28/caf32480a6e96833067dfcf87ed72f7d765b91": "d3808eabdf88a182ed3eb08361086e5d",
".git/objects/29/f64fc5bb5af668a8265f7846dd928b8b20fa9c": "257b7bd9927716b00eee57fd8db82feb",
".git/objects/2a/cce62fe7aa4020c97ca59edd8a570f3d7a4a01": "66aa6b84352b053b2df6f93c17a152aa",
".git/objects/2b/2ed31d21a056952681937f4f8dd6c43877413b": "7011c97fcf017827a42866f4a38fb0dd",
".git/objects/2b/54ef268bad4ac4b0b656db7a3db61459d4b6da": "fcd815bb791a64e767e7b13e15fa22bd",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/e031f77fe526a66d3678b2b84daea6596a481c": "c7ddef336f8c9903f9edf6a334f06228",
".git/objects/2f/7efbeab578c8042531ea7908ee8ffd7589fe46": "aa9408a44a7560b833dd793a6cb10ddd",
".git/objects/2f/f1e6a2550fb4ab765f3b533c7f24a742a0d5c0": "2092aabcedbd66d06e139b268a063db3",
".git/objects/31/4d5619496905d1f98680d4a349f370d5b0ad0d": "18679860d19a96b14e04d4b929b77d6c",
".git/objects/33/d728dbd03d70a0302e45f2681cefb76afc90e1": "8402cef8f4bbbc53cd5086bc519ba8c7",
".git/objects/35/d0190c24356a61ef4accec45f4696742a33fd1": "3e4d18de7b7f3dfaa99c0312f643fc89",
".git/objects/36/ecc74a64a22a5d52530154f362411c758196bb": "7edceb2cdbe27fbe1c6e19bef017edef",
".git/objects/38/0e755ba112b3f0679fa720ac268da661e77b88": "a35ca6b376cfad1c544bbacb25cfbabb",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/ba84bd1cb50836387400399b16d5f7eb99e5b9": "8df80da7bd5145e8ba28270dd78c1ac9",
".git/objects/3e/0712cdace3755a99651a680ffa0594e0de5097": "249095b782efd7fc5038c0762296ade1",
".git/objects/3e/cc8c1a25e83e38c48e84f30222c578249ef033": "40d417b88c2167bde3f4ccc5e65399c9",
".git/objects/3f/f2f3ffa9f60b68b14be94a28618ec52140a30e": "156fc877ee4d0313480c38dc0f774045",
".git/objects/42/9626ba76b0523d257396e372bd2e6702023302": "ed366ce95207a658645daff08cc666b0",
".git/objects/44/556bd9daa9b6b29ec1e7cc12b63a68067714b7": "16cf7a96f99ca9c3c56dfebfe6153b12",
".git/objects/46/29c32d0c27a87f1d40a9834177960df58d7716": "ab22a1c17a4380245dafcc0a1bcdafb4",
".git/objects/46/d7b9a2faa23930badbf9ef667ddfd2a7ac83df": "4429c3d7ecd269197a7d66aebb5ccb0b",
".git/objects/48/64e62b6f11a5ef1be827fc937de87b8c4e82d6": "e0672b8b9ea0a36e070e5d6cf04b2125",
".git/objects/48/f720d0c525c309a0dec43210b9de015a271dbd": "b0ab3dfbaa4f05ddb159ae70f600791e",
".git/objects/4a/49fd8da41be4b01785464e68bdd3b6ab2ff422": "ff628c36d75a2795074f1c25a00de0ff",
".git/objects/4a/e34c035e41c6ecb23655200b4b761e8d7d809d": "f6fefc0e2d15a8d7cbeb1ccc6b873be0",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/7905310b05afe2341e3be912270f37f03d0da5": "e9b76551b22c8631a47c3a2ff569abcd",
".git/objects/50/7f6bcd026ca447940c8d2849e1b8cf46f16725": "114542c4d57d61de9dbfc2cfc29cdb19",
".git/objects/51/1c59a3e1316018d427b5478d230db90cd4b54b": "54dae029cef36510023b3bdeb108d9bd",
".git/objects/51/232f40970c82be0478840676fe824946640d41": "ea722a0d31e75069861d869c58f840e3",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/176cfde65ce8d1320d8de481c45e38c105d42d": "aed1537c95621b853a3756fcd0ca7092",
".git/objects/54/4888920d2ea0dfabf5fc49cc629621ca52eb84": "24e4cff4336f3da2d128e2e1f1db6969",
".git/objects/56/16a877939e679c56737860158a157c2cbae5e5": "d7ccc27ac781fb82b4905e7a44079cd2",
".git/objects/56/d652d4504b787e89ab9c6208d41b520b22f445": "848b80c5f5e0e8402004acb031feb7cf",
".git/objects/57/349b5a1537acf8858198f29aa90b54b1dbc597": "71a8ee7e8ebf336fd84797702f0110c3",
".git/objects/59/df256a3943e138301c79aedd23e2e08275060c": "aee90aad2e22c78a8d88241d1d8ea54f",
".git/objects/5c/8c6c0cd15f4a463d779cb2da1eb86cb2cf4995": "2e158829b97a6aef157af05ba54e455e",
".git/objects/5c/dcbc4e503502ae3b02824dc21d28d68e1d3c1c": "2f4c64274c1accd8f9e76292221add66",
".git/objects/5f/186f2c451937f7f24621641145e190931eeb8f": "cd78739474922c0bdf152c2982a88faa",
".git/objects/60/9c4112beba880964a468bc0760f3f15dbae648": "de1da48bc7b111f885e829802c2213ea",
".git/objects/62/a11d14c5a7c8c9d2611d947b57804467c5f5c7": "2e2224c1f1e3c98f4a8e1772fde6d8a6",
".git/objects/63/4df6848966188bb84069a7600a3d7d70d79ce7": "8c52674593da2a4a42680753f331db1e",
".git/objects/63/8a2266b4b80f27fca05892c3a8bff11ecbfe0f": "1bd855f2d1470083e0d09aeff9caba9d",
".git/objects/66/e633c079641825ad291be1d6115cee230e7eec": "fc98bbac31b38d3563341b9aae635783",
".git/objects/67/4c67b8d9654c2be3621493f5c395ac7fd922b6": "93df1c79b1176aa812a2c1e418251f3c",
".git/objects/6b/a127a010f884efa4f584be95a7519b37c9c167": "d2c91f57089f85f1c7e6aba3fd4157c0",
".git/objects/6c/be08f6c53a035084addaa344670ce95a73bf4b": "37cf772cfe1fb34b44b21ec1ef3ff6bc",
".git/objects/6d/28e235188b0bb292b39e30ec218b77d493e3f4": "4a701934c17fb808a958cfe877b312b3",
".git/objects/6e/d12ca1ac22b14bbef8d5ef7d2a6a8d9b2efd4c": "86cc8a690ed2f3544e08370765b85d13",
".git/objects/71/aff0fc0dbe734ff887230333c229db4daff28c": "afd919b923ea5c33101f20cd04b1852e",
".git/objects/71/fa5eaf7ee1b8c5ad6ee9197816523f64207618": "7b8197452bdedc430ee7e0af20d530a2",
".git/objects/74/eed29867132221aaf7392e2dc92f3d0446fce5": "0e1b1b69134e79ccb040ab1aeb05446e",
".git/objects/75/456872e50b4a2fb0571fc02bdec45c8baa4da1": "3cba954cb54548f092fd4152889b189f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/3361294d3a9c63df42b8f32149ef1220d13a4c": "b95aed70ac327fbc65874307dec611a5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/859698c262fa2498515d2a381753b19c987be7": "52e6f2df87c2a0b6a8d728095bd6e079",
".git/objects/7a/ae987277335619eb5b740b39039ac0891404dd": "0aa48f780b5ab7c2992155dfb56adc1d",
".git/objects/7b/9986445776635b2831ce887da4ea03ef27bb1a": "4699413aafa67f771d2fbf7c7376132f",
".git/objects/7b/e25da0093ed203bde4b7d19e7f56b7eb0bf51f": "c919a7307c5701df434663bd28f56bc1",
".git/objects/7b/edc73de5beac972c9133b882f7708aba88d34f": "fa22884ef35d1ffd345288a58e35cec6",
".git/objects/80/530fc62f331ef3a8e46df5924fee968a81f709": "b960f8f38f317bb2802054e57c7c7268",
".git/objects/80/694a1e3dd970055248ec8e2ade9b2f15d16194": "8662867c6bdda0a56d2ffcbf9e4ad204",
".git/objects/80/e99dfc280a854af129439770fec34ed8daa0b8": "d1514cc97e09f51d34b063a8d1b45936",
".git/objects/81/6208a7839359b3695acd55d155b491066c1caf": "5a813a0e7ca019be6eb435ee706c3fc2",
".git/objects/85/c675e60c02aadb8fed0a7dd5506b67d419b9ca": "511e5eadbbdddab713298d321b831a36",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/052175ca2b56adab9e96bf4ccea91d3f9521b7": "634ab6e64d9fc8e6695594e15a55719d",
".git/objects/89/973e35db064e2f6900e4c47cad75094f9850e9": "7cc4cd4f6b10cff4680187f6df160ef5",
".git/objects/89/e0f274ddabfee4f24d6cf9c19c4260746b7d39": "cd3c89af1627e112924a16d986928978",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8c/154d4f2cb28031316a20f65c3d5e2ea7428e74": "91886682c17be1abfba22ef470c3f78e",
".git/objects/93/2824e02aa84ee54c7d965b41075afcedae9110": "5b9953f52b0b8d0818613ff21107fb0e",
".git/objects/95/882806e46505e9be668adc3d0232980ad7aa23": "ec405b0965e9502e2d5904485e78a96e",
".git/objects/95/b635a9cdf7b329dd5ec846a3f5e6b401e78906": "b06e0b7fb3d7d7ebbff0a0aa88c9e6bc",
".git/objects/97/6d0eed592df75523a1c8dbb52aecb7c2fa0fbe": "eeecf83d5d5c45d625d26062d392b30c",
".git/objects/98/c80b3ebd1d3f91fcecfccfb57859de67adfbae": "f9b1d1577a7b219898ecc40da42c07ac",
".git/objects/99/aeb4f7540401e634e1978184466f3ea74d8051": "3732e76c656aec13f955300f914b8499",
".git/objects/9a/67125bfea3df6fb241ea30d39feda71277f860": "d608f1c20025b8f130e518a3a2b2367d",
".git/objects/9a/740c17876127d0f4b3f2ba7d57450aca74a553": "3240af13307019d6d3789054aeab1f37",
".git/objects/9b/436e1ebf70c6af096203f14ee4a5712031a6e0": "647b9d6a6fc41cdf1be2c6a59f6457e2",
".git/objects/9f/4e2bb5ee62156a10bbf8417632d18f37b6d30d": "1da922899e37e8b78094b16ec34ff837",
".git/objects/9f/dc67365135d2cc5d0a661e1943c60ef0166064": "0ee8d4ad7a53f5ced4bab96b607b9fba",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/6e88d60a6385ef3585a2213ed7e399921c0242": "47293a7e774e96d699a8e36713e88adc",
".git/objects/a2/b8bafb798cd28de519ac0c83b0c09cdf6a91e6": "90f9ac0a552295156fa72ca8000e5837",
".git/objects/a4/78746e53aabd5c29e312681f318db0b62169b5": "a7084082c98966ec6dc610c38f2bc542",
".git/objects/a4/fdd7566260b1be425103b131ce45cd146ec5c6": "3dbfce2344eaf4ee47f593b46539c0d1",
".git/objects/a6/a984556875f9bef74923acd809d2a4e268a568": "ff2e46f027e2781ad43988717f535890",
".git/objects/a6/b3ae0673e43ecb6ae6c3be8f222213a56d28a8": "76ccb6e13494b73ea33001724dfd8129",
".git/objects/a7/e370623f70d5c9026c56553ee0d3e6d92ec1cc": "fe15c74e589f028941be80a7bb81c43e",
".git/objects/a8/7cdcfda093ac990a6773d716c021976220e087": "508ccadd32d6172e6431083dc415d032",
".git/objects/a9/c252feb03b7b5a7225e4de0a3f3d13ad83a372": "b99baa0e0cbbd872951e50b71c97420f",
".git/objects/a9/d68f87548db620d66e07b4ae246975cee2533f": "18e49ccbe567a7219552f03b5707d79e",
".git/objects/aa/e4fbc04a07cd05859a2514d29ce0b5519e50b9": "58c88e523a21a36d21c94711a06250e8",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/e2931b61b6173cf150239a60dab2e05b5716b8": "727dce760bc1ccacf4d34744b43d7b9a",
".git/objects/ad/b02acb237b00de3cec021cd6e04614c56979e6": "628a4c014e4e72f436042e97df3ca854",
".git/objects/ae/e204d026f30947c8a3c924b244e93e4ff1b6c5": "a8be8251845df6e1e1482b1af8171140",
".git/objects/af/3d96673601b3f1bc781192dcaed3fa10988cf4": "14b74bffea7d939cb574fc24e06b7f48",
".git/objects/b0/6a8ba7faec88ab05c4891ed267a9d109163598": "c7faccd2588b20323ad9df4a04065168",
".git/objects/b0/959e2bf63898df82fcd3bbb043e85a86d157cc": "2f434ed48302aa327895fa96aac026c6",
".git/objects/b0/e25906b7ff402cb776c5cafcd1eca000885816": "43217acedb8f60e2b37cf1bc8c7c3158",
".git/objects/b3/9b279643e4727353355d7c295cc8ba1ef0c0b2": "17b48a05eabeb42cb9bfd43bf7118d36",
".git/objects/b4/587db048aa292ffd43244543a1bea4c0900afe": "7a491cf8f4cca37349a406d7f0185d64",
".git/objects/b5/007e0855241e1f72eb13f01693b9a07dcb9501": "ad7fc9c67c8e8819d8e2f7d78bb51e0b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/1ff62a29a3111f7c7a62fe05abc8e234aa2fa9": "fae114decf3b881b00ff456f6d0bc3c1",
".git/objects/bc/39bbf9ffe39b94ff6e0c7d940e68f1f470a320": "b96a968bf7d155deec5567602b042b7d",
".git/objects/bf/cd047c5060555bb2214677bed2b1473d07b322": "d0c4ab6ad58a13e56ec20106e04d4f0e",
".git/objects/c0/aa69dd4b3e2fc0b645f9717ae01dc8e5fd73c9": "17f2e1a84baf4b1e39ffcae76245a521",
".git/objects/c0/de2929b5ad784e984c2ca02a5804b7650333ae": "eed7bb42dc8a5b8d4056a8b340842f99",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/1a74707ac32594bdd834cf7a6363bf6745feb6": "dcd545feed6ad3d853815c127597ce2a",
".git/objects/c6/c79ee6195995a6564518a16f0283799953d648": "8102cb06fe19e8958ef5e61d517c8659",
".git/objects/c6/f4636d4a3eba04e460e572d6a68517eb0770d3": "29395f83d1f1646c225b3f5003e2f2dc",
".git/objects/c8/fd806f1e74527f1545384d4a0126523fed4e0f": "6b3f41f6862092c756381f2852696a18",
".git/objects/c9/9eae7a30b3c0335955bcba52deb7cac88f8b6d": "28c88b9d75ab360149544c2dff43cce4",
".git/objects/c9/b8596a5632c8e367b5d6607b24f506d149866d": "694b7d3ce19d0d89c08ddafd01be59fe",
".git/objects/c9/e4035cd3088f95e16becc850d4e52e42a940f7": "1c060869b7a12537615bd20656b1e74d",
".git/objects/ca/fc2312363b44a1bc22da5e4997701dd6ee9510": "d2b86ba9e89284197ba1915f78420531",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d1/9e5a71ae44cde0f7359ed6812b23643d1947e9": "8345fa1411b85fd6195126495e2365d1",
".git/objects/d1/fce3538787abd7a1ba92f80bca32be95c44e61": "2c39374ccf75204b485012698a08dc16",
".git/objects/d4/365f3403d9fc5b52fc61d764bd41b630a3da46": "b2f5712a94de0c738d6fbacdcb8e354f",
".git/objects/d5/59867ae50c8bdc97eb982176541256206a0c07": "2e84d88394dcf8fff125f95785752b16",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0f78e647212bb7366fdcb20763bd2db77a3790": "d63051c0faf1afd87fd294616b0f1783",
".git/objects/d9/33a668919623bbacd8c4d03327368ca750328b": "20fafd892c0f31cca75a7ef68b6ff721",
".git/objects/d9/ffa99e05cf554775cc7908676b51cf1e2066d6": "d8b7c485204735bbeb485f4f085bf52c",
".git/objects/dc/4160c3c9b2cb298c9cd3f2d365294f6b227c0f": "5f6abbbede0767b3e3bb97b3b81c9fd2",
".git/objects/df/3959ac69291f9bbbffba40408813b080908625": "a062b6f64150177daee8211a9f4a531b",
".git/objects/df/89b35fbefce75498f5e8a00ecb821a8dddb62d": "d87d82e734890bf6ccd67738b1531a6f",
".git/objects/e0/be6ba296a4d8a9e48bd7262873d48fcf3b03c4": "3a0b52aba4985867e2525082c9c7f2ea",
".git/objects/e4/9d6bdac6d140a96678ccb7e310fa334af3cc14": "a03137b3c568cfa30031d358bc763793",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/19bd21c4bf40f6797bca5d191003a6207e3768": "5c6376de840c9f2f133e17d50f2179cc",
".git/objects/e7/090dffe7d563a4dc7af05d85e99a4afb1c0307": "3ad4d3c11d88e0cb6354abc43062dd02",
".git/objects/e7/efaf992caa49f1296a395146ad7c40c851a0d2": "7e6fbb58b7f70880ecb0eeeb60f50651",
".git/objects/e8/5b92b4dd558b87aa112f88c8d118d56539734f": "ba85910b520d37b506d28e9f91ed4d2c",
".git/objects/e8/a6192d08ebceffff4a65254f88d5a66e70a16e": "c66b2b243272b4c1d2d2114f7b89087d",
".git/objects/e9/43353fd4081ee5b0355431ea7ef36680170f84": "6a9d5807758857d400a99dcbf03fbbf5",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/74cf1f1a340a0b68fb6046699a8375c8655460": "2f3f21c95067f8fc376fce5ba2c2ce93",
".git/objects/eb/896d78082dde0f0654a88ac6a620c5d7507d1e": "994f403c605dd54ab97c4dd53bf0ffce",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bffc2f55e816ab3dd1d0e530ab768028a30691": "9374091a7d4eca90dcf6d68d976ea1ca",
".git/objects/ed/4a46b8ec2dfcb024b517278f903d424f5fcdcc": "306a48910511fe8ffdd6783910123e65",
".git/objects/ed/b059a3f877cb87a82f5798cb63f5f8a37e6757": "57b6135f01a56f62f8a47dd675809635",
".git/objects/f2/1d2aa35c7a5bed3338d596ca998a84f7d37670": "d22b4433a49125c2ec15dc42956a755b",
".git/objects/f5/8a902cf0883ff599ebcfc1e3a1b9137a77d7d8": "320820e5d5cdf9faefce109d2ac82d04",
".git/objects/f6/c7717548551e22f9a5290b6b706394c8d22baf": "0a14a4f4cd9e13f3551d2fc0aaa30a42",
".git/objects/f6/da0f2b8737278141360a700986f68f95605144": "bb7b7a35fb01251ce19e9a3cbd7132ce",
".git/objects/f7/1ce48ac4f2019545f694bc83dc2ed2d85fb33d": "1504a789063537e694b77afc2db9618f",
".git/objects/f7/d71d0e81a50d9b93f52c20f7e2001dc5f2adb5": "9c1fbc1d88af753ee954ade5a3796692",
".git/objects/f8/62c9072ab08263deeea6b2f176d2bc11ca0e23": "d3dc8458a2eeeb96096f60bf15fcfbcf",
".git/objects/f8/d97bb7127603ca94abe7ba37b8dc11352f9269": "d0343b9fc19cd927b8fe4b61f30d8eaf",
".git/objects/fa/0e9c7666586a7e4cf96acd544d8d586ae0259d": "ea969be5e7e8c8f9c55f063ff0e28de3",
".git/objects/fa/b1cafda5113b04913087dc4d1d5e148c3aa383": "f0d77ec14885e9549aa1e485a2e1dffc",
".git/objects/ff/3f360326a4087b09db1df0d9fa41d57b74e2ca": "675ac8e6fd681464affccfeafa0e832f",
".git/ORIG_HEAD": "ead0bcf4cb2d4ae74ed9139e81c11105",
".git/refs/heads/master": "ead0bcf4cb2d4ae74ed9139e81c11105",
".git/refs/remotes/origin/master": "ead0bcf4cb2d4ae74ed9139e81c11105",
"assets/AssetManifest.json": "1125ea11b57f6bb934aa584ba45b8256",
"assets/assets/Icons/Angle%2520down.svg": "24e10127668681c0e4e450129c221002",
"assets/assets/Icons/Angle%2520right.svg": "12a8fca11166d4b938ecb487ed675861",
"assets/assets/Icons/Download.svg": "817f412b5e1f162104e27c3b30c1cbb5",
"assets/assets/Icons/Edit.svg": "3a821516ae6575e54a8f4571428def33",
"assets/assets/Icons/File.svg": "f63ad9bd9ce54acf20da563fcea393c5",
"assets/assets/Icons/Inbox.svg": "55037f7401b91fe121e7c0da38cfbc45",
"assets/assets/Icons/Markup%2520filled.svg": "9cc473548e2b123fdd5a1bdc39fd8a8f",
"assets/assets/Icons/Markup.svg": "493194a8ca3f74ca22471f5d22ffd6e4",
"assets/assets/Icons/More%2520vertical.svg": "0d6074af7ec3da1f66981dc82db30765",
"assets/assets/Icons/Paperclip.svg": "8c48aa4e178a10207bcf33d874ac0891",
"assets/assets/Icons/Plus.svg": "510ee85e1e0b58e1e1c4a91693371262",
"assets/assets/Icons/Printer.svg": "aa659bcf41e77bd85e31bc04fe72758f",
"assets/assets/Icons/Reply%2520all.svg": "842631184315ab916bc3f6641d20b1b1",
"assets/assets/Icons/Reply.svg": "236fd99c7fe9ce272fcae64a6e1cd5d5",
"assets/assets/Icons/Search.svg": "9e1d9a247f0a1f63cb6bd8fbf3a226bd",
"assets/assets/Icons/Send.svg": "04c5fe1e6dfff59a73e19164e0fae753",
"assets/assets/Icons/Sort.svg": "641b1bdd5979607dbea036ef11cf4579",
"assets/assets/Icons/Transfer.svg": "9ee3410c0a5d84562d70153890d4ee69",
"assets/assets/Icons/Trash.svg": "defdd2c6bdd89a609dc50b000030c7d3",
"assets/assets/images/Img_0.png": "afbe6d2666c4766da1192ed32c81e379",
"assets/assets/images/Img_1.png": "8737b19ca2018ab533c0ea38926d307d",
"assets/assets/images/Img_2.png": "50bf76bfe52288249408bfe76af6c02d",
"assets/assets/images/Logo%2520Outlook.png": "b30d7f8d436a715920f5766a8f4f590c",
"assets/assets/images/profile.png": "057d526daa4cfcbadc8e574c2dfbaa28",
"assets/assets/images/user_1.png": "b27e4014918be9067acf17512520f699",
"assets/assets/images/user_2.png": "7eccb0a70693054530486c9faf4a27dd",
"assets/assets/images/user_3.png": "4175bf553052bdd6e1f3e93b71aab1b5",
"assets/assets/images/user_4.png": "bc10492e902061e17e16fd406be2c328",
"assets/assets/images/user_5.png": "8e98aa502e33de2e867686b60507a8c7",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "7e0ab6c1c8ba47831de710ee669aaea3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "91291d2c2582caa2dfc329626a0cc09f",
"/": "91291d2c2582caa2dfc329626a0cc09f",
"main.dart.js": "4c583523597439bf948ad235b03df0dd",
"manifest.json": "807b58909da715972c83c476479536dd",
"version.json": "467986965633b468ff2eb504a4a70375",
"_config.yml": "d88166bbeaf9421921db9fb119080112"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
