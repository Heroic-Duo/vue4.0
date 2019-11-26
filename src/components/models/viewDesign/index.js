import {
    Rate,
    Poptip,
    Page,
    Button,
    Table,
    Menu,
    Row,
    Col,
    Icon,
    Input,
    InputNumber,
    Select,
    Option,
    MenuItem,
    MenuGroup,
    Submenu,
    Radio,
    RadioGroup,
    BackTop,
    Card,
    Layout,
    Cascader,
    LoadingBar,
    Form,
    FormItem,
    Message,
    DatePicker,
    TimePicker,
    CheckboxGroup,
    Checkbox,
    Upload
} from 'view-design'

const viewDesign= {
    install: function(Vue) {
        Vue.component('Rate', Rate)
        Vue.component('Poptip', Poptip)
        Vue.component('Page', Page)
        Vue.component('Button', Button)
        Vue.component('Table', Table)
        Vue.component('Menu', Menu)
        Vue.component('Submenu', Submenu)
        Vue.component('MenuGroup', MenuGroup)
        Vue.component('MenuItem', MenuItem)
        Vue.component('Row', Row)
        Vue.component('Col', Col)
        Vue.component('Icon', Icon)
        Vue.component('Input', Input)
        Vue.component('InputNumber', InputNumber)
        Vue.component('Select', Select)
        Vue.component('Option', Option)
        Vue.component('Radio', Radio)
        Vue.component('RadioGroup', RadioGroup)
        Vue.component('BackTop', BackTop)
        Vue.component('Card', Card)
        Vue.component('Layout', Layout)
        Vue.component('Cascader', Cascader)
        Vue.component('Form', Form)
        Vue.component('FormItem', FormItem)
         Vue.component('DatePicker', DatePicker)
        Vue.component('Upload', Upload)
        Vue.component('TimePicker', TimePicker)
        Vue.component('Checkbox', Checkbox)
        Vue.component('CheckboxGroup', CheckboxGroup)


        Vue.prototype.$LoadingBar = LoadingBar
        Vue.prototype.$Message = Message
    }

}

export default viewDesign