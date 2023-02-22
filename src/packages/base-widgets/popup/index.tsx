/**
 * @author: Yellowsae
 */
import { ref } from 'vue';
import { Popup, Button, Cell } from 'vant';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorSwitchProp,
  createEditorInputProp,
  createEditorSelectProp,
  createEditorInputNumberProp,
} from '@/visual-editor/visual-editor.props';

export default {
  key: 'popup',
  moduleName: 'baseWidgets',
  label: '弹出层',
  preview: () => <Button type={'default'}>弹出层</Button>,
  render({ props, styles }) {
    const show = ref(false);
    const RenderPopup = () => (
      <div>
        <Cell
          title="弹出层"
          isLink
          onClick={() => {
            show.value = !show.value;
          }}
        />
        <Popup
          onClick-overlay={() => {
            show.value = false;
          }}
          round
          position="bottom"
          style="height: 30%"
          show={show.value}
        >
          <div style="padding: 8px 16px">
            <p>弹出层内容</p>
          </div>
        </Popup>
      </div>
    );
    return () => (
      <div style={styles}>
        <RenderPopup {...props} />
      </div>
    );
  },
  props: {
    show: createEditorSwitchProp({ label: '是否显示', defaultValue: false }),
    round: createEditorSwitchProp({ label: '是否圆角', defaultValue: false }),
    position: createEditorSelectProp({
      label: '弹出位置',
      options: [
        { label: '上', value: 'top' },
        { label: '下', value: 'bottom' },
        { label: '左', value: 'left' },
        { label: '右', value: 'right' },
      ],
      defaultValue: 'bottom',
    }),
    overlay: createEditorSwitchProp({ label: '是否显示遮罩层', defaultValue: true }),
    duration: createEditorInputNumberProp({ label: '动画时长(ms)', defaultValue: 300 }),
    lockScroll: createEditorSwitchProp({ label: '是否锁定背景滚动', defaultValue: true }),
    LazyRender: createEditorSwitchProp({ label: '是否延迟渲染', defaultValue: true }),
    closeOnPopstate: createEditorSwitchProp({ label: '是否在页面回退时关闭', defaultValue: true }),
    closeOnClickOverlay: createEditorSwitchProp({
      label: '是否在点击遮罩层后关闭',
      defaultValue: true,
    }),
    closeIconPosition: createEditorSelectProp({
      label: '关闭图标位置',
      options: [
        { label: '上', value: 'top' },
        { label: '下', value: 'bottom' },
        { label: '左', value: 'left' },
        { label: '右', value: 'right' },
      ],
      defaultValue: 'top',
    }),
    transition: createEditorInputProp({ label: '自定义动画名称' }),
    teleport: createEditorInputProp({ label: '自定义插槽名称' }),
  },
} as VisualEditorComponent;
