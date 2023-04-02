/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa8434d92a7de62b5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'bc472e5521b62e828697f526b77932ff',

  PROVINCE: '广西',
  CITY: '南宁',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小天依',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'olldg58ytcDi7texZU0B3_njpQKg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      //useTemplateId: 'k9mZ14aShO7LCgvL7UM8Kej8gfUw3UGE5YEGX9laOgs',
      useTemplateId: 'yP6wWzUFdqok-svME-H5-ZNamsAiO0ipsMgPqQGPHqw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-13',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2003', date: '02-20',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2003', date: '03-13',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '03-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-10' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  //CALLBACK_TEMPLATE_ID: 'k9mZ14aShO7LCgvL7UM8Kej8gfUw3UGE5YEGX9laOgs',
  CALLBACK_TEMPLATE_ID: 'yP6wWzUFdqok-svME-H5-ZNamsAiO0ipsMgPqQGPHqw',

  CALLBACK_USERS: [
    {
      name: '郭硕',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'olldg58ytcDi7texZU0B3_njpQKg',
    }
  ],

}

module.exports = USER_CONFIG

