import Mock from 'mockjs'

Mock.setup({
  timeout: 500
})
// 登陆请求
Mock.mock('/login', 'post', Options => {
  if (Options.body === 'username=C00000&password=2') {
    return {
      'data': {
        token: 'qwertyuiop'
      },
      'meta': {
        msg: '登陆成功',
        status: 200
      }
    }
  } else {
    return {
      'meta': {
        msg: '等登失败',
        status: 404
      }
    }
  }
})

// 左侧列表请求
Mock.mock('/menulist', 'get', Options => {
  return {
    'data': [{
      'id': 101,
      'title': '首页',
      'path': 'home',
      'children': [
        {
          'id': 110,
          'title': '预开票',
          'path': '预开票',
          'children': []
        },
        {
          'id': 111,
          'title': '制品单',
          'path': '制品单',
          'children': []
        },
        {
          'id': 112,
          'title': '设备单',
          'path': '设备单',
          'children': []
        }
      ]
    },
    {
      'id': 102,
      'title': '新建',
      'path': '新建',
      'children': [{
        'id': 103,
        'title': '新建制品单',
        'path': '新建制品单',
        'children': []
      },
      {
        'id': 104,
        'title': '新建设备单',
        'path': '新建设备单',
        'children': []
      },
      {
        'id': 105,
        'title': '新建关联单',
        'path': '新建关联单',
        'children': []
      }
      ]
    },
    {
      'id': 106,
      'title': '制品指示确认',
      'path': '制品指示确认',
      'children': []
    },
    {
      'id': 107,
      'title': '异常单查询',
      'path': '异常单查询',
      'children': []
    },
    {
      'id': 108,
      'title': '高级查询',
      'path': 'highquery',
      'children': [{
        'id': 109,
        'title': '制品异常分析',
        'path': '制品异常分析',
        'children': []
      },
      {
        'id': 122,
        'title': '设备异常分析',
        'path': '设备异常分析',
        'children': []
      },
      {
        'id': 123,
        'title': '票据关联',
        'path': '票据关联',
        'children': []
      },
      {
        'id': 124,
        'title': '品名查LOT',
        'path': '品名查LOT',
        'children': []
      },
      {
        'id': 125,
        'title': 'LOT查异常',
        'path': 'LOT查异常',
        'children': []
      },
      {
        'id': 126,
        'title': '开票数统计',
        'path': '开票数统计',
        'children': []
      },
      {
        'id': 127,
        'title': '故障时间统计',
        'path': '故障时间统计',
        'children': []
      },
      {
        'id': 128,
        'title': '异常名称查票据',
        'path': '异常名称查票据',
        'children': []
      }

      ]
    }
    ],
    'mate': {
      status: 200
    }
  }
})

export default Mock
