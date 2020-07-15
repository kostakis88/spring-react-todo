package com.kostas.rest.webservices.demo.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "kostas", "Learn Java", new Date(), false));
        todos.add(new Todo(++idCounter, "kostas", "Learn JavaScript", new Date(), false));
        todos.add(new Todo(++idCounter, "kostas", "Learn React", new Date(), false));
        todos.add(new Todo(++idCounter, "kostas", "Learn TypeScript", new Date(), false));
        todos.add(new Todo(++idCounter, "kostas", "Learn Spring Boot", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo save(Todo todo) {
        if (todo.getId() == -1 || todo.getId() == 0) {
            todo.setId((long) ++idCounter);
        } else {
            deleteById(todo.getId());
        }
        todos.add(todo);
        return todo;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);

        if (todo==null) return null;

        if (todos.remove(todo)) {
            return todo;
        }

        return null;
    }

    public Todo findById(long id) {
        for (Todo todo:todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }

}
