import React, {useState,useEffect,useRef} from 'react';
import DatePicker from 'react-datepicker';

function TaskForm(){
    const statusOptions =['Pending','Completed','InProgress'];
    const priorities =['High','Medium','Low']
const [task,setTask]= useState({
    title: '',
    description: '',
    dueDate: new Date(),
    status: '',
    priority: '',
    assignedTo: '',
    tags: '',
    attachments: [],
    reminders: new Date(),
    additionalNotes: '', 
});
const formRef = useRef(null)
const handleDateChange=(date, field)=>{
    setTask((prevTask) => ({
        ...prevTask,
        [field]: date,
      }));
}
const handleChange=(e)=>{
const {name,value}=e.target;
setTask((prevTask)=>({
    ...prevTask,
    [name]:value
}))
}
const handleSubmit=async (e)=>{
e.preventDefault();
console.log("form",task)
try {
    // Make API call to post task data
    const response = await fetch('http://localhost:4200/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    if (response.ok) {
      console.log('Task added successfully!');
     formRef.current.reset()
    } else {
      console.error('Failed to add task');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
return(
  <div className="container d-flex align-items-center justify-content-center vh-100">
  <form ref={formRef} onSubmit={handleSubmit} className="border p-4">
    <h3 className="mb-4">Task Form</h3>

    <div className="mb-3">
      <label htmlFor="title" className="form-label">
        Title
      </label>
      <input
        id="title"
        type="text"
        name="title"
        value={task.title}
        required
        onChange={handleChange}
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="description" className="form-label">
        Description
      </label>
      <input
        id="description"
        type="text"
        name="description"
        value={task.description}
        required
        onChange={handleChange}
        className="form-control"
      />
    </div>

    <div className="mb-3">
  <label htmlFor="dueDate" className="form-label">
    Due Date
  </label>
  <div className="input-group">
    <DatePicker
      id="dueDate"
      name="dueDate"
      selected={task.dueDate}
      onChange={(date) => handleDateChange(date, 'dueDate')}
      className="form-control"
    />
    <div className="input-group-append">
      <span className="input-group-text">
        <i className="bi bi-calendar"></i>
      </span>
    </div>
  </div>
</div>


    <div className="mb-3">
      <label htmlFor="status" className="form-label">
        Status
      </label>
      <select
        id="status"
        name="status"
        onChange={handleChange}
        value={task.status}
        className="form-control"
      >
        <option value="Status">Select Status</option>
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>

    <div className="mb-3">
      <label htmlFor="priority" className="form-label">
        Priority
      </label>
      <select
        id="priority"
        name="priority"
        onChange={handleChange}
        value={task.priority}
        className="form-control"
      >
        <option value="Priority">Select Priority</option>
        {priorities.map((priority) => (
          <option key={priority} value={priority}>
            {priority}
          </option>
        ))}
      </select>
    </div>

    <div className="mb-3">
      <label htmlFor="assignedTo" className="form-label">
        Assigned To
      </label>
      <input
        id="assignedTo"
        type="text"
        name="assignedTo"
        value={task.assignedTo}
        required
        onChange={handleChange}
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">
        Tags
      </label>
      <input
        id="tags"
        type="text"
        name="tags"
        value={task.tags}
        required
        onChange={handleChange}
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="attachments" className="form-label">
        Attachments
      </label>
      <input
        id="attachments"
        type="text"
        name="attachments"
        value={task.attachments}
        required
        onChange={handleChange}
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="reminders" className="form-label">
        Reminders
      </label>
      <DatePicker
        id="reminders"
        name="reminders"
        selected={task.reminders}
        onChange={(date) => handleDateChange(date, 'reminders')}
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="additionalNotes" className="form-label">
        Additional Notes
      </label>
      <input
        id="additionalNotes"
        type="text"
        name="additionalNotes"
        value={task.additionalNotes}
        required
        onChange={handleChange}
        className="form-control"
      />
    </div>

    <div className="mb-3">
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </div>
  </form>
</div>

)
}
export default TaskForm;

//mongodb+srv://soumyaat21:4iCKNJbwg26fRuKc@cluster1.c4qojn3.mongodb.net/
//Mahesh2104.