<template>
  <div>
    <page-header-wrapper :title="false" content="ceshi">
      <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="需代理的内网端口">
                <a-input v-model="form.intranetPort" placeholder="需代理的内网端口" allow-clear />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <a-button type="primary" @click="submit"> 提交</a-button>
      </a-card>
    </page-header-wrapper>
  </div>
</template>

<script>
import { createPenetrate } from '@/api/client'
export default {
  data() {
    return {
      form: {
        intranetPort: null,
      },
    }
  },
  methods: {
    submit() {
      createPenetrate().then((res) => {
        console.log(res)
      })
    },
  },
}
</script>

<style></style>
