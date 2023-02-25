import { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';

const modules = import.meta.globEager('./*/index.tsx');
// 组件库类型
const components: Record<string, VisualEditorComponent> = {};

// 循环 所有的组件 并且导出， 方便后续使用
Object.keys(modules).forEach((key: string) => {
  const name = key.replace(/\.\/(.*)\/index\.(tsx|vue)/, '$1');
  components[name] = modules[key]?.default || modules[key];
});

console.log(components, 'container-component');
export default components;
