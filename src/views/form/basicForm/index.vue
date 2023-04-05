<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <page-header-wrapper :title="false" :content="$t('form.basic-form.basic.description')">
    <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
      <a-form @submit="handleSubmit" :form="form" method="post">
        <a-form-item
          :label="$t('form.basic-form.title.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
        >
          <a-input v-decorator="['name']" name="name" :placeholder="$t('请给隧道起个名字')" />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.date.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
        >
          <a-range-picker name="buildTime" style="width: 100%" v-decorator="['buildTime']" />
        </a-form-item>
        <a-form-item
          :label="$t('内网地址')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
        >
          <a-textarea rows="1" v-decorator="['inAddress']" />
        </a-form-item>
        <a-form-item
          :label="$t('内网端口')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
        >
          <a-textarea rows="1" v-decorator="['inPort']" />
        </a-form-item>
        <a-form-item
          :label="$t('外网地址')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
        >
          <a-textarea rows="1" v-decorator="['outAddress']" />
        </a-form-item>
        <a-form-item
          :label="$t('form.basic-form.public.label')"
          :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
          :wrapperCol="{ lg: { span: 10 }, sm: { span: 17 } }"
          :required="false"
          :help="$t('form.basic-form.label.help')"
        >
          <a-radio-group v-decorator="['target', { initialValue: 1 }]">
            <a-radio :value="1">{{ $t('form.basic-form.radio.public') }}</a-radio>
            <a-radio :value="2">{{ $t('form.basic-form.radio.partially-public') }}</a-radio>
            <a-radio :value="3">{{ $t('form.basic-form.radio.private') }}</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center">
          <a-button htmlType="submit" type="primary">{{ $t('form.basic-form.form.submit') }}</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { createPenetrate } from '@/api/client'
export default {
  name: 'BaseForm',
  data() {
    return {
      form: this.$form.createForm(this),
      name: '',
      inAddress: '',
      inPort: Number,
      outAddress: '',
    }
  },
  methods: {
    // handler
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        // if (!err) {
        //   console.log('Received values of form: ', values)
        // }
        // let param = new URLSearchParams()
        // let inaddress = this.form.getFieldValue('inAddress')
        // let inport = this.form.getFieldValue('inPort')
        // let outaddress = this.form.getFieldValue('outAddress')
        // let name = this.form.getFieldValue('name')
        // param.append('inPort', inport)
        // param.append('inaddress', inaddress)
        // param.append('outaddress', outaddress)
        // param.append('name', name)
        // this.$http.post('http://localhost:1998/form/base-form', param).then((response) => {
        //   alert('提交成功')
        // })
        createPenetrate({}).then((res) => {})
      })
    },
  },
}
</script>
