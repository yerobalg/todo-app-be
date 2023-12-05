const BASE_URL =
    `${process.env.REACT_APP_API_URL || "http://localhost:8080"}/api`;

export async function getAllTasks() {
    const url = `${BASE_URL}/tasks`;
    const response = await fetch(url);
    return await response.json();
}

export async function createTask(data) {
    const url = `${BASE_URL}/task`;
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: data }),
    });
    const res = await response.json();
    return res;
}

export async function deleteTask(taskId) {
    const url = `${BASE_URL}/task/${taskId}`;
    const response = await fetch(url, { method: "DELETE" });
    return await response.json();
}

export async function editTask(data) {
    const url = `${BASE_URL}/task`;
    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: data }),
    });
    return await response.json();
}

export async function getZone() {
    const url = `${BASE_URL}/zone`;
    const response = await fetch(url);
    return await response.json();
}
