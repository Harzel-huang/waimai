import Mock from 'mockjs'
import data from '../mockjs/data.json'
// 商品列表接口
Mock.mock('http://goods.com', {code:0,data:data.goods })

// 评价信息接口
Mock.mock('http://ratings.com', {code:0,data:data.ratings })

// 商家信息接口
Mock.mock('http://info.com', {code:0,data:data.info })
