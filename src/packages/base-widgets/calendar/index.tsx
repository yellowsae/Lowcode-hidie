/**
 * @Author: yellowsae
 * @Date: 2023-02-22 09:20:00
 */
import { Calendar, Button } from 'vant';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorInputProp, // 生成输入框
  createEditorSelectProp, // 生成下拉框
  createEditorSwitchProp, // 生成开关
  createEditorColorProp, // 生成颜色选择器
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

export default {
  key: 'calendar',
  moduleName: 'baseWidgets',
  label: '表单项类型 - 日历',
  preview: () => <Button type={'default'}>📅</Button>,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();
    return () => (
      <div {...props} ref={(el) => registerRef(el, block._vid)} style={styles}>
        <Calendar
          showConfirm={props.showConfirm}
          style="height: 400px"
          poppable={false}
          title={props.title}
          color={props.color}
          type={props.type}
          defaultDate={new Date()}
        />
      </div>
    );
  },
  resize: {
    height: true,
    width: true,
  },
  events: [
    { label: '点击按钮，且按钮状态不为加载或禁用时触发', value: 'click' },
    { label: '开始触摸按钮时触发', value: 'touchstart' },
  ],
  props: {
    title: createEditorInputProp({ label: '日历标题', defaultValue: '日期选择' }),
    type: createEditorSelectProp({
      label: '日历类型',
      options: [
        {
          label: '选择单个日期',
          value: 'single',
        },
        {
          label: '选择多个日期',
          value: 'multiple',
        },
        {
          label: '选择日期范围',
          value: 'range',
        },
      ],
      defaultValue: 'single',
    }),
    color: createEditorColorProp({ label: '日历颜色', defaultValue: '#1989fa' }),
    showConfirm: createEditorSwitchProp({
      label: '显示确认按钮',
      defaultValue: false,
    }),
    minDate: createEditorInputProp({ label: '最小日期', defaultValue: new Date() }),
    maxDate: createEditorInputProp({ label: '最大日期', defaultValue: new Date() }),
    formatter: createEditorInputProp({ label: '日期格式化函数' }),
  },
} as VisualEditorComponent;
