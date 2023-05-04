import { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';

const modules = import.meta.globEager('./*/index.tsx');
console.log(modules, 'modules');
const components: Record<string, VisualEditorComponent> = {};

Object.entries(modules).forEach(([key, module]) => {
  const name = key.replace(/\.\/(.*)\/index\.(tsx|vue)/, '$1');
  components[name] = module?.default || module;
});

// 打印出来的结果
console.log(components, 'base-widgets');
export default components;
