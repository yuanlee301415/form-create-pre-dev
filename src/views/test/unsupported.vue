<template>
    <div>
      <form-create v-model="fApi" :rule="rule" :option="option" :value.sync="value"></form-create>
    </div>
</template>

<script>
  import Unsupported from '@/components/FC/Unsupported'
  import formCreate from '@form-create/element-ui'
  formCreate.component('FcUnsupported', Unsupported)

  export default {
    name: 'Import',
    components: {
      FormCreate: formCreate.$form()
    },
    data() {
      return  {
        //实例对象
        fApi: {},
        //表单数据
        value: {},
        //表单生成规则
        rule: [
          {
            type: 'input',
            field: 'goods_name',
            title: '商品名称'
          },
          {
            type: 'datePicker',
            field: 'created_at',
            title: '创建时间'
          },
          {
            type: 'fc-unsupported',
            field: 'unsupported',
            title: '不支持的数据类型'
          }
        ],
        //组件参数配置
        option: {
          form: {
            /**
             * 设置控件整体尺寸
             */
            size: 'small',
          },
          //表单提交事件
          onSubmit: function (formData) {
            alert(JSON.stringify(formData))
          }
        }
      }

    }
  }
</script>
