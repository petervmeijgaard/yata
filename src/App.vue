<template>
  <div class="app">
    <div class="intro">
      <h1
        class="title"
        title="Yet Another Todo App"
      >
        📝 YATA
      </h1>
    </div>
    <form
      class="todo-form"
      @submit.prevent="onSubmit"
    >
      <div class="input-group">
        <input
          class="text-input"
          type="text"
          ref="newTodo"
          :value="newTodo"
          @input="onInput"
          placeholder="Get stuff done today!"
        />
        <button
          class="input-addon"
          type="submit"
          :disabled="newTodo === ''"
        >
          <i class="fas fa-plus fa-fw"></i>
        </button>
      </div>
    </form>
    <hr class="divider"/>
    <transition-group
      tag="ul"
      class="todos"
      name="fade"
    >
      <li
        class="todo"
        v-for="todo in todos"
        :key="todo.id"
      >
        <label class="checkbox">
          <input
            type="checkbox"
            :checked="todo.checked"
            @change="onCheck(todo)"
          >
          <span class="checkmark"/>
        </label>
        <div
          v-if="!todo.editMode"
          class="todo-content"
          :class="{ '--checked': todo.checked }"
          @dblclick="onDoubleClick(todo)"
        >
          {{ todo.content }}
        </div>
        <form
          class="edit-todo-form"
          v-else
          @submit.prevent="onUpdate(todo)"
        >
          <input
            class="edit-todo-input"
            :class="{ '--checked': todo.checked }"
            :value="todo.content"
            @input="onEdit($event, todo)"
            @blur="onUpdate(todo)"
          >
        </form>
        <div class="todo-actions">
          <button
            v-if="!todo.editMode"
            class="todo-action"
            @click="onDoubleClick(todo)"
          >
            <i class="fas fa-pen fa-fw"/>
          </button>
          <button
            v-else
            class="todo-action"
            @click="onUpdate(todo)"
          >
            <i class="fas fa-save fa-fw"/>
          </button>
          <button
            class="todo-action --danger"
            @click="onRemove(todo)"
          >
            <i class="fas fa-trash fa-fw"/>
          </button>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'App',

  data: () => ({
    newTodo: '',
    todos: [],
  }),

  mounted() {
    this.$keyListeners = (event) => {
      if (event.key === 'n' && (event.altKey)) {
        this.$refs.newTodo.focus();
      }

      if (event.key === 'Escape') {
        this.$refs.newTodo.blur();
      }
    };

    document.addEventListener('keydown', this.$keyListeners.bind(this));
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.$keyListeners);
  },

  methods: {
    onSubmit() {
      if (this.newTodo === '') {
        return;
      }

      this.todos.unshift({
        id: uuidv4(),
        content: this.newTodo,
        checked: false,
        editMode: false,
      });

      this.newTodo = '';
    },

    onInput(event) {
      this.newTodo = event.target.value;
    },

    onCheck(todo) {
      this.todos = this.todos.map((item) => (
        item.id === todo.id ? { ...item, checked: !item.checked } : item
      ));
    },

    onRemove(todo) {
      this.todos = this.todos.filter((item) => item.id !== todo.id);
    },

    onEdit(event, todo) {
      this.todos = this.todos.map((item) => (
        todo.id === item.id ? { ...item, content: event.target.value } : item
      ));
    },

    onUpdate(todo) {
      if (todo.content === '') {
        this.onRemove(todo);

        return;
      }

      this.todos = this.todos.map((item) => (
        item.id === todo.id ? { ...item, editMode: false } : item
      ));
    },

    onDoubleClick(todo) {
      this.todos = this.todos.map((item) => (
        item.id === todo.id ? { ...item, editMode: true } : item
      ));
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html, body {
  font-size: 16px;
  font-family: Roboto, Arial, sans-serif;
}

body {
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
}

.app {
  padding: 2rem;
  min-height: 100vh;
  background-color: #e6f7ff;
}

.intro {
  display: flex;
}

.title {
  font-size: 2rem;
  color: #0af;
  padding: 2rem 0;
  font-weight: bold;
}

.todo-form {
  display: flex;
  flex: 1;
}

.input-group {
  display: flex;
  border-radius: .5rem;
  border: 1px solid #bfe6ff;
  overflow: hidden;
  flex: 1;
  background-color: #fff;
  align-items: center;
}

.text-input {
  font-size: 1.25rem;
  padding: 1rem;
  display: inline-flex;
  background-color: #fff;
  flex: 1;
  min-width: 0;
}

.input-addon {
  display: inline-flex;
  padding: 0 1rem;
  font-size: 1.25rem;
  color: #fff;
  background-color: #0af;
  border: 0;
  height: 100%;
  align-items: center;
  transition: background-color ease-in-out 250ms, color ease-in-out 250ms;
  flex: 0;

  &[disabled] {
    color: #666666;
    background-color: #e6e6e6;

    &:hover {
      cursor: not-allowed;
      background-color: #e6e6e6;
    }
  }

  &:hover {
    background-color: #1ab2ff;
  }
}

.divider {
  height: 1px;
  background-color: #0af;
  border: 0;
  margin: 2rem 0;
}

.todos {
  display: flex;
  flex-direction: column;
}

.todo {
  background-color: #fff;
  display: flex;
  margin-top: .25rem;
  border: 1px solid #bfe6ff;
  padding: 1rem;
  align-items: center;

  &:first-child {
    margin-top: 0;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }

  &:last-child {
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
  }
}

.todo-content {
  font-size: 1.25rem;
  text-decoration: line-through;
  text-decoration-color: transparent;
  color: #002640;
  display: flex;
  padding: .5rem 0;
  flex: 1;
  word-break: break-all;
  transition: color ease-in-out 250ms, text-decoration-color ease-in-out 250ms;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  &.--checked {
    color: #607880;
    text-decoration-color: #607880;
  }
}

.todo-actions {
  display: flex;
  margin-left: .5rem;
}

.todo-action {
  padding: .5rem;
  border-radius: .25rem;
  background-color: #bfe6ff;
  color: #007fbf;
  transition: background-color ease-in-out 250ms;
  margin-left: .5rem;

  &.--danger {
    color: #bf1900;
    background-color: #ffc8bf;

    &:hover {
      background-color: #f2bcb3;
    }
  }

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    background-color: #b3ddf2;
  }
}

// Checkbox
.checkbox {
  display: block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: .5rem;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ .checkmark {
    background-color: #e6f5ff;
    border-color: #e6f5ff;

    &::after {
      color: #e6f5ff;
    }
  }

  input:checked ~ .checkmark {
    background-color: #0af;
    border-color: #0af;
  }

  input:checked ~ .checkmark::after {
    color: #fff;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 100%;
    background-color: #fff;
    border: 1px solid #bfe6ff;
    transition: background-color ease-in-out 250ms, border-color ease-in-out 250ms;

    &::after {
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      color: #fff;
      content: "\f00c";
      position: absolute;
      top: 0.375rem;
      left: 0.375rem;
      font-size: .75rem;
      line-height: .75rem;
      transition: color ease-in-out 250ms;
    }
  }
}

.edit-todo-form {
  display: flex;
  flex: 1;
  min-width: 0;
}

.edit-todo-input {
  font-size: 1.25rem;
  text-decoration: line-through;
  text-decoration-color: transparent;
  color: #002640;
  display: flex;
  flex: 1;
  border-top: 1px solid transparent;
  border-bottom: 1px dashed #0af;
  padding: .5rem 0;
  transition: color ease-in-out 250ms, text-decoration-color ease-in-out 250ms;
  min-width: 0;

  &.--checked {
    color: #607880;
    text-decoration-color: #607880;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 250ms;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
