import Tag from '../Tag';
import Todo from '../Todo';
import Todos from '../Todos';

export const getTagTemplate = (tag: Tag): string =>
  `<li class="todos-tag" data-tag-id="${tag.id}">${tag.name}
                            <button id="deleteTag">
                              <i class="fas fa-minus"></i></i>
                            </button>
                        </li>`;

export const getTodoTemplate = (todo: Todo): string =>
  `<li class="todos-todo" data-todo-id="${todo.id}">
                    <input class="toggle" type="checkbox">
                    <label class="todo__name">[${todo.category || 'NONE'}]
                    ${todo.content}</label>
                    ${
                      todo.tags &&
                      todo.tags
                        .map((tag: Tag) => `${getTagTemplate(tag)}`)
                        .join('')
                    }               
                    <button class="todo__delete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </li>
                <div class="todo__divider"></div>
            `;

export const initialTemplate: string = `<section class="list">
        <header class="header">
          <span>Todos List</span>
          <span id="delete-all-todo" class="delete-btn">Delete All</span>
        </header>
        <div ></div>
        <ul class="todos">
        </ul>
        <footer class="footer">
          <input
            type="text"
            id="new-todo-content"
            class="footer__input"
            placeholder="Todo"
          />
          <input
            type="text"
            id="new-todo-category"
            class="footer__input"
            placeholder="category"
          />
          <div class="col-2">
            <input
              type="text"
              id="new-todo-tag"
              class="footer__input"
              placeholder="Tags"
            />
            <button id="addTag" class="footer__input">
              <i class="fas fa-plus"></i>
            </button>
          </div>

          <ul id="new-todo-tags" class="footer__text"></ul>
          <button type="submit" id="addTodoBtn" class="footer__button">
            ADD TODO
          </button>
        </footer>
      </section>`;
