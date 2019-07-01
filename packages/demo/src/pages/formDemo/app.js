import { h, Component } from 'preact'
import { XCenterView } from '@ruiyun/preact-layout-suite'
import Button from '@ruiyun/preact-button'
import Form from '@ruiyun/preact-form'
import Line from '@ruiyun/preact-line'
import {
  FormTextInput,
  FormActionSheetInput,
  FormNumberInput,
  FormPickerInput,
  FormSwitchInput
} from '@ruiyun/preact-m-form-component'

import { required, range } from '../../components/Validate'
import SalaryInput from './components/salaryInput'

const phoneCheck = async phoneNum => {
  const p = new Promise(resolve => {
    setTimeout(resolve, 3000)
  })
  await p
  if (phoneNum === '13020271611') {
    return null
  }
  return '手机号不存在'
}

const cityOptions = [
  '上海',
  '东莞',
  '东营',
  '中山',
  '乌鲁木齐',
  '佛山',
  '佳木斯',
  '保定',
  '兰州',
  '内江',
  '北京',
  '南京',
  '南宁',
  '南昌',
  '南通',
  '台州',
  '合肥',
  '哈尔滨',
  '唐山',
  '嘉兴',
  '大连',
  '天津',
  '太原',
  '威海',
  '宁波',
  '广州',
  '徐州',
  '惠州',
  '成都',
  '无锡',
  '杭州',
  '武汉',
  '沈阳',
  '济南',
  '深圳',
  '湖州',
  '潍坊',
  '玉溪',
  '珠海',
  '石家庄',
  '福州',
  '绍兴',
  '芜湖',
  '苏州',
  '西安',
  '贵阳',
  '郑州',
  '重庆',
  '金华',
  '银川',
  '长春',
  '长沙'
]

const regionOptions = [
  '北京市',
  '天津市',
  '上海市',
  '重庆市',
  '河北省',
  '山西省',
  '辽宁省',
  '吉林省',
  '黑龙江省',
  '江苏省',
  '浙江省',
  '安徽省',
  '福建省',
  '江西省',
  '山东省',
  '河南省',
  '湖北省',
  '湖南省',
  '广东省',
  '海南省',
  '四川省',
  '贵州省',
  '云南省',
  '陕西省',
  '甘肃省',
  '青海省',
  '台湾省',
  '内蒙古自治区',
  '广西壮族自治区',
  '西藏自治区',
  '宁夏回族自治区',
  '新疆维吾尔自治区',
  '香港特别行政区',
  '澳门特别行政区'
]

export default class FormDemo extends Component {
  state = {
    name: 'wenjun'
  }
  onReset = () => {
    this.form.init({
      ad: true
    })
  }
  onSubmit = () => {
    this.form.validate(
      formData => {
        console.log('formData', formData)
      },
      errors => {
        console.log('error', errors)
      }
    )
  }
  componentDidMount () {
    this.form.init({
      ad: true
    })
  }
  render () {
    return (
      <div>
        <Form ref={form => (this.form = form)}>
          <Form.Field label='姓名' field='name' validate={[required]}>
            <FormTextInput required maxLength={3} placeholder='请输入姓名' />
          </Form.Field>
          <Line />
          <Form.Field label='年龄' field='age' validate={[range(0, 150)]}>
            <FormNumberInput limit={3} placeholder='请输入年龄' />
          </Form.Field>
          <Line />
          <Form.Field label='籍贯' field='region' validate={[required]}>
            <FormPickerInput
              required
              title='请选择'
              placeholder='请选择你的籍贯'
              options={regionOptions}
            />
          </Form.Field>
          <Line />
          <Form.Field
            label='手机号'
            field='phone'
            validate={[required, phoneCheck]}
          >
            <FormNumberInput required limit={11} placeholder='请输入手机号' />
          </Form.Field>
          <Line />
          <Form.Field label='接受职位信息推送' field='ad'>
            <FormSwitchInput />
          </Form.Field>
          <Line />

          <Form.Fragment namespace='apply'>
            <Form.Field label='申请的职位' field='role'>
              <FormActionSheetInput
                placeholder='请选择你期望的职位'
                options={['开发工程师', '测试工程师', '运营专员', '产品经理']}
              />
            </Form.Field>
            <Line />
            <Form.Field
              label='期望的薪资'
              field='salary'
              validate={[range(0, 30)]}
              link={{ role: 'apply.role' }}
            >
              <SalaryInput placeholder='请输入期望的薪资' />
            </Form.Field>
            <Line />
            <Form.Field label='期望工作城市' field='city' validate={[required]}>
              <FormPickerInput
                placeholder='请选择期望的工作的城市'
                options={cityOptions}
                mode={3}
              />
            </Form.Field>
            <Line />
          </Form.Fragment>
          <XCenterView height={200}>
            <Button
              onClick={this.onReset}
              style={{ boxShadow: '0px 8px 8px 0px rgba(0,0,0,0.1)' }}
              color='#e42506'
              padding={[10, 30, 10, 30]}
            >
              重置
            </Button>
            <Button
              onClick={this.onSubmit}
              style={{ boxShadow: '0px 8px 8px 0px rgba(0,0,0,0.1)' }}
              color='#5581fa'
              padding={[10, 30, 10, 30]}
            >
              提交
            </Button>
          </XCenterView>
        </Form>
      </div>
    )
  }
}
