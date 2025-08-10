const MongoTask = require('../models/taskSchema');
const MongoUser = require('../models/userSchema');
exports.createTask = async (req, res) => {
    try {
        const { title, description, userId } = req.body;
        if (!title || !description || !userId) {
            return res.status(400).json({ message: 'Title, description, and userId are required' });
        }
        const user = await MongoUser.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const newTask = new MongoTask({ title, description, userId });
        await newTask.save();
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await MongoTask.find().populate('userId', 'fullName email');
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getTaskById = async (req, res) => {
    try {
        const task = await MongoTask.findById(req.params.id).populate('userId', 'fullName email');
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.updateTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        const task = await MongoTask.findByIdAndUpdate(
            req.params.id,
            { title, description, status },
            { new: true, runValidators: true }
        );
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.deleteTask = async (req, res) => {
    try {
        const task = await MongoTask.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.changeTaskStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const { id } = req.params;
        // Allowed statuses from schema
        const allowedStatuses = ['pending', 'completed'];
        if (!status || !allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: `Invalid status. Allowed values: ${allowedStatuses.join(', ')}`
            });
        }
        const task = await MongoTask.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task status updated successfully', task });
    } catch (error) {
        console.error('Error changing task status:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
