import { DefineComponent } from 'vue';

const modules = import.meta.globEager('./*/index.(tsx|vue)');

const components: Record<string, DefineComponent> = {};

console.log(modules, '起航');
// 注册侧边栏组件   -  页面 - 数据源 - 基本组件 - 容器组件
for (const path in modules) {
  const comp = modules[path].default;
  components[comp.name || path.split('/')[1]] = comp;
}
console.log('left-aside components:', components);

export default components;
