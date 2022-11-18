import Mock from 'mockjs';
import banner from './banners.json'
import floor from './floors.json'
// webapck默认对外暴露，图片、json 数据格式




Mock.mock('/mock/banner',{
    code:200,
    data:banner
});

Mock.mock('/mock/floor',{
    code:200,
    data:floor
});


