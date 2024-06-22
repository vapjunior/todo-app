import http from "../ApiTodo";

class TaskDataService {
    getAll() {
        return http.get("/tasks");
    }

    create(data) {
        return http.post("/tasks", data);
    }

    delete(task) {
        return http.delete(`/tasks/${task}`);
    }
}

export default new TaskDataService();