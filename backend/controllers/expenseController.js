const xlsx = require("xlsx");
const Expense = require("../models/Expense");
const fs = require('fs');

//add expense in database
exports.addExpense = async (req, res) => {
  const userId = req.user.id;
  try {
    const { icon, category, amount, date } = req.body;

    if (!icon || !category || !amount) {
      return res.status(400).json({ message: "All fields are required." }); // ✅ add return
    }

    const newExpense = new Expense({
      userId,
      icon,
      category,
      amount,
      date: new Date(date),
    });

    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error", error: error.message }); // cleaned message
  }
};


//get all expense data from database
exports.getAllExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server Error." });
  }
};

//delete expense data from database
exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findOneAndDelete(req.params.id);
    res.status(200).json({ message: "Income Data deleted Successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server Error." });
  }
};

//download expense data in excel format
exports.downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });

    // Prepare data for excel with properly formatted dates
    const data = expense.map((item) => ({
      Category: item.category,
      Amount: item.amount,

      Date: item.date.toISOString().split('T')[0],
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);

    // Optional: Set column widths for better visibility
    ws['!cols'] = [
      { wch: 20 },
      { wch: 15 }, 
      { wch: 15 }  
    ];

    xlsx.utils.book_append_sheet(wb, ws, "Expense");
    
    // Generate a unique filename with timestamp
    const filename = `expense_details_${Date.now()}.xlsx`;
    
    xlsx.writeFile(wb, filename);
    res.download(filename, () => {
      // Optional: Delete the file after download completes
      fs.unlinkSync(filename);
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server Error." });
  }
};
