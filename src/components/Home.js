import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header'
import { Tasks } from './Tasks'
import CreateTask from './CreateTask'
import { getAllTasks, deleteTask, getZone } from '../services/TaskService'

function Home() {

    const [tasks, setTasks] = useState([])
    const [numberOfTasks, setNumberOfTasks] = useState([])
    const [isTaskEdited, setTaskEdited] = useState(false)
    const [zone, setZone] = useState("")

    useEffect(() => {
        getAllTasks().then(tasks => {
            console.log(tasks)
            setTasks(tasks)
        });
    }, [numberOfTasks, isTaskEdited])

    useEffect(() => {
        getZone().then(zone => {
            setZone(zone.zone)
        });
    }, [])

    function delTask(taskId) {
        deleteTask(taskId).then(response => {
            console.log(response)
            setNumberOfTasks(numberOfTasks - 1)
        });
    }

    function taskCreated() {
        setNumberOfTasks(numberOfTasks + 1)
    }

    function taskEdited(res) {
        setTaskEdited(res)
    }

    return (
        <div className="App">
            <Header zone={zone}></Header>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-12">
                        <CreateTask taskCreated={taskCreated}></CreateTask>
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                <Tasks tasks={tasks} deleteTask={delTask} taskEdited={taskEdited}></Tasks>
            </div>
        </div>
    );
}

export default Home;
