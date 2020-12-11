/*
 * @Author: 左太宇
 * @Date: 2020-12-11 12:24:27
 * @LastEditTime: 2020-12-11 12:25:42
 * @LastEditors: 左太宇
 * @message: 
 */

import { onMounted, ref } from "vue";

export default function useTodos() {
    const todos = ref([]);
    // 添加 todo
    const addTodo = (todo) => todos.value.push(todo);
  
    // 获取远程 todos
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const rawTodos = await response.json();
      todos.value = rawTodos.map((todo) => ({
        id: todo.id,
        content: todo.title,
        completed: todo.completed,
      }));
    };
    
    // 生命周期页面加载完成
    onMounted(() => {
      fetchTodos();
    });
  
    return {
      todos,
      addTodo,
    };
  }