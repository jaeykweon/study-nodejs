require("dotenv").config();	// https://www.daleseo.com/js-dotenv/
const axios = require('axios');
const {log} = require('./utils/log');;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const UTEKO_ID = process.env.UTEKO_ID;


const apiFunction = async (promise) => {
	return await promise
}

const getChannels = (channelId) => {
	return axios.get('https://www.googleapis.com/youtube/v3/playlists', {
		params : {
			'key': GOOGLE_API_KEY,
			'channelId' : channelId,
			'part' : "snippet",
		}
	}).then(
		(res)=> log(JSON.stringify(res.data, null, 4))
	)
}

apiFunction(getChannels(UTEKO_ID));


// // RESULT
// {
// 	"kind": "youtube#playlistListResponse",
// 	"etag": "jCaqURshCUjFL_HAsA32_gFw4_M",
// 	"nextPageToken": "CAUQAA",
// 	"pageInfo": {
// 			"totalResults": 13,
// 			"resultsPerPage": 5
// 	},
// 	"items": [
// 			{
// 					"kind": "youtube#playlist",
// 					"etag": "Eig7F_c6bWurgL8yxPCDrhLG3nA",
// 					"id": "PLgXGHBqgT2Ttcttvjy5_4GacLPcs6iM-s",
// 					"snippet": {
// 							"publishedAt": "2021-11-11T14:15:14Z",
// 							"channelId": "UC-mOekGSesms0agFntnQang",
// 							"title": "우아콘2021, 우아한형제들의 기술 컨퍼런스",
// 							"description": "3일간의 라이브 토크 콘서트와 22개 발표영상을 확인하세요!",
// 							"thumbnails": {
// 									"default": {
// 											"url": "https://i.ytimg.com/vi/j9PKmtbt9lc/default.jpg",
// 											"width": 120,
// 											"height": 90
// 									},
// 									"medium": {
// 											"url": "https://i.ytimg.com/vi/j9PKmtbt9lc/mqdefault.jpg",
// 											"width": 320,
// 											"height": 180
// 									},
// 									"high": {
// 											"url": "https://i.ytimg.com/vi/j9PKmtbt9lc/hqdefault.jpg",
// 											"width": 480,
// 											"height": 360
// 									},
// 									"standard": {
// 											"url": "https://i.ytimg.com/vi/j9PKmtbt9lc/sddefault.jpg",
// 											"width": 640,
// 											"height": 480
// 									},
// 									"maxres": {
// 											"url": "https://i.ytimg.com/vi/j9PKmtbt9lc/maxresdefault.jpg",
// 											"width": 1280,
// 											"height": 720
// 									}
// 							},
// 							"channelTitle": "우아한Tech",
// 							"localized": {
// 									"title": "우아콘2021, 우아한형제들의 기술 컨퍼런스",
// 									"description": "3일간의 라이브 토크 콘서트와 22개 발표영상을 확인하세요!"
// 							}
// 					}
// 			},
// 			{
// 					"kind": "youtube#playlist",
// 					"etag": "QM6Z_krkxbPrcraO92pjcy_UtXo",
// 					"id": "PLgXGHBqgT2TvTdV_GRsLchckuFWbb5rJV",
// 					"snippet": {
// 							"publishedAt": "2021-11-02T07:15:58Z",
// 							"channelId": "UC-mOekGSesms0agFntnQang",
// 							"title": "우아한Tech 요즘 소식",
// 							"description": "",
// 							"thumbnails": {
// 									"default": {
// 											"url": "https://i.ytimg.com/vi/dqeOE7mdf3Q/default.jpg",
// 											"width": 120,
// 											"height": 90
// 									},
// 									"medium": {
// 											"url": "https://i.ytimg.com/vi/dqeOE7mdf3Q/mqdefault.jpg",
// 											"width": 320,
// 											"height": 180
// 									},
// 									"high": {
// 											"url": "https://i.ytimg.com/vi/dqeOE7mdf3Q/hqdefault.jpg",
// 											"width": 480,
// 											"height": 360
// 									},
// 									"standard": {
// 											"url": "https://i.ytimg.com/vi/dqeOE7mdf3Q/sddefault.jpg",
// 											"width": 640,
// 											"height": 480
// 									},
// 									"maxres": {
// 											"url": "https://i.ytimg.com/vi/dqeOE7mdf3Q/maxresdefault.jpg",
// 											"width": 1280,
// 											"height": 720
// 									}
// 							},
// 							"channelTitle": "우아한Tech",
// 							"localized": {
// 									"title": "우아한Tech 요즘 소식",
// 									"description": ""
// 							}
// 					}
// 			},
// 			{
// 					"kind": "youtube#playlist",
// 					"etag": "KwjuJw2i6wNAH2xJn0hnOjceNWQ",
// 					"id": "PLgXGHBqgT2TvgvtgKtDMYsypqvHBughr1",
// 					"snippet": {
// 							"publishedAt": "2021-06-01T11:13:28Z",
// 							"channelId": "UC-mOekGSesms0agFntnQang",
// 							"title": "#우아한인터뷰",
// 							"description": "",
// 							"thumbnails": {
// 									"default": {
// 											"url": "https://i.ytimg.com/vi/5tMgQGSMeQo/default.jpg",
// 											"width": 120,
// 											"height": 90
// 									},
// 									"medium": {
// 											"url": "https://i.ytimg.com/vi/5tMgQGSMeQo/mqdefault.jpg",
// 											"width": 320,
// 											"height": 180
// 									},
// 									"high": {
// 											"url": "https://i.ytimg.com/vi/5tMgQGSMeQo/hqdefault.jpg",
// 											"width": 480,
// 											"height": 360
// 									},
// 									"standard": {
// 											"url": "https://i.ytimg.com/vi/5tMgQGSMeQo/sddefault.jpg",
// 											"width": 640,
// 											"height": 480
// 									},
// 									"maxres": {
// 											"url": "https://i.ytimg.com/vi/5tMgQGSMeQo/maxresdefault.jpg",
// 											"width": 1280,
// 											"height": 720
// 									}
// 							},
// 							"channelTitle": "우아한Tech",
// 							"localized": {
// 									"title": "#우아한인터뷰",
// 									"description": ""
// 							}
// 					}
// 			},
// 			{
// 					"kind": "youtube#playlist",
// 					"etag": "EP87PCOMLWVgsJTBaS16eaAZVVg",
// 					"id": "PLgXGHBqgT2TuFNlBkBRqf57__Z5IKfo8U",
// 					"snippet": {
// 							"publishedAt": "2020-12-14T12:57:43Z",
// 							"channelId": "UC-mOekGSesms0agFntnQang",
// 							"title": "우아콘 2020: 클라우드 마이그레이션을 향한 여정!",
// 							"description": "",
// 							"thumbnails": {
// 									"default": {
// 											"url": "https://i.ytimg.com/vi/3ynQeAZpk4Y/default.jpg",
// 											"width": 120,
// 											"height": 90
// 									},
// 									"medium": {
// 											"url": "https://i.ytimg.com/vi/3ynQeAZpk4Y/mqdefault.jpg",
// 											"width": 320,
// 											"height": 180
// 									},
// 									"high": {
// 											"url": "https://i.ytimg.com/vi/3ynQeAZpk4Y/hqdefault.jpg",
// 											"width": 480,
// 											"height": 360
// 									},
// 									"standard": {
// 											"url": "https://i.ytimg.com/vi/3ynQeAZpk4Y/sddefault.jpg",
// 											"width": 640,
// 											"height": 480
// 									},
// 									"maxres": {
// 											"url": "https://i.ytimg.com/vi/3ynQeAZpk4Y/maxresdefault.jpg",
// 											"width": 1280,
// 											"height": 720
// 									}
// 							},
// 							"channelTitle": "우아한Tech",
// 							"localized": {
// 									"title": "우아콘 2020: 클라우드 마이그레이션을 향한 여정!",
// 									"description": ""
// 							}
// 					}
// 			},
// 			{
// 					"kind": "youtube#playlist",
// 					"etag": "EkowlXmpNImdDPjXRsMNvFT1Luw",
// 					"id": "PLgXGHBqgT2Ttg33EyCS4YilQhadzU2H3h",
// 					"snippet": {
// 							"publishedAt": "2020-09-21T07:53:15Z",
// 							"channelId": "UC-mOekGSesms0agFntnQang",
// 							"title": "우아한Tech 외부활동",
// 							"description": "",
// 							"thumbnails": {
// 									"default": {
// 											"url": "https://i.ytimg.com/vi/l1w6-BL-0Ms/default.jpg",
// 											"width": 120,
// 											"height": 90
// 									},
// 									"medium": {
// 											"url": "https://i.ytimg.com/vi/l1w6-BL-0Ms/mqdefault.jpg",
// 											"width": 320,
// 											"height": 180
// 									},
// 									"high": {
// 											"url": "https://i.ytimg.com/vi/l1w6-BL-0Ms/hqdefault.jpg",
// 											"width": 480,
// 											"height": 360
// 									},
// 									"standard": {
// 											"url": "https://i.ytimg.com/vi/l1w6-BL-0Ms/sddefault.jpg",
// 											"width": 640,
// 											"height": 480
// 									},
// 									"maxres": {
// 											"url": "https://i.ytimg.com/vi/l1w6-BL-0Ms/maxresdefault.jpg",
// 											"width": 1280,
// 											"height": 720
// 									}
// 							},
// 							"channelTitle": "우아한Tech",
// 							"localized": {
// 									"title": "우아한Tech 외부활동",
// 									"description": ""
// 							}
// 					}
// 			}
// 	]
// }