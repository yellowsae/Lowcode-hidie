/**
 * @description: 图标组件
 * @Author: yellowsea
 */
import { Icon } from 'vant';
import { createEditorColorProp } from '../../../visual-editor/visual-editor.props';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorInputProp,
  createEditorSwitchProp,
  createEditorInputNumberProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

export default {
  key: 'icon',
  moduleName: 'baseWidgets',
  label: '图标',
  resize: {
    width: true,
    height: true,
  },
  preview: () => <Icon name="chat-o" size={'20px'} />,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();

    return () => (
      <div style={styles}>
        <Icon size={props.size} {...props} ref={(el) => registerRef(el, block._vid)} />
      </div>
    );
  },
  props: {
    name: createEditorInputProp({ label: '图标名称或图片链接', defaultValue: 'chat-o' }),
    dot: createEditorSwitchProp({ label: '是否显示为小红点' }),
    badge: createEditorInputProp({ label: '徽标内容' }),
    color: createEditorColorProp({ label: '图标颜色' }),
    size: createEditorInputNumberProp({ label: '图标大小，默认单位为px', defaultValue: 30 }),
  },
  events: [{ label: '点击图标时触发', value: 'click' }],
} as VisualEditorComponent;
