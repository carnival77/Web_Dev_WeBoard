var express = require('express')
var router = express.Router()
var mongojs = require('mongojs')
var db = mongojs(
  // 'mongodb://arjunaraneta123:arjunaraneta123@ds119732.mlab.com:19732/mongotask',
  'mongodb://localhost:27017/local',
  ['tasks']
)

// Get All Tasks
router.get('/tasks', function(req, res, next) {
  db.tasks.find({}, { _id: 1, title: 1 }, function(err, tasks) {
    if (err) {
      res.send(err)
    }

    var data = []
    Object.keys(tasks).forEach(function(key) {
      var val = tasks[key]
      data.push([val.title, val._id])
    })
    //res.json(tasks);
    //res.send(tasks);
    res.send(data)
  })
})

// Get Single Task
router.get('/task/:id', function(req, res, next) {
  db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(
    err,
    task
  ) {
    if (err) {
      res.send(err)
    }
    res.json(task)
  })
})

//Save Task
router.post('/task', function(req, res) {
  var task = req.body
  if (!task.title) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    db.tasks.save(task, function(err, task) {
      if (err) {
        res.send(err)
      }
      res.json(task)
    })
  }
})

// Delete Task
router.delete('/task/:id', function(req, res) {
  db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function(
    err,
    task
  ) {
    if (err) {
      res.send(err)
    }
    res.json(task)
  })
})

// Update Task
router.put('/task/:id', function(req, res, next) {
  var task = req.body
  var updTask = {}

  if (task.isDone) {
    updTask.isDone = task.isDone
  }

  if (task.title) {
    updTask.title = task.title
  }

  if (!updTask) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    db.tasks.update(
      { _id: mongojs.ObjectId(req.params.id) },
      updTask,
      {},
      function(err, task) {
        if (err) {
          res.send(err)
        }
        res.json(task)
      }
    )
  }
})

module.exports = router


// const express = require("express");
// const router = express.Router();
// const Board = require("../schemas/board");

// router.post("/delete", async (req, res) => {
//   try {
//     await Board.remove({
//       _id: req.body._id
//     });
//     res.json({ message: true });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

// router.post("/update", async (req, res) => {
//   try {
//     await Board.update(
//       { _id: req.body._id },
//       {
//         $set: {
//           title: req.body.title,
//           content: req.body.content
//         }
//       }
//     );
//     res.json({ message: "게시글이 수정 되었습니다." });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

// router.post("/write", async (req, res) => {
//   try {
//     let obj;

//     obj = {
//       writer: req.body._id,
//       title: req.body.title,
//       content: req.body.content
//     };

//     const board = new Board(obj);
//     await board.save();
//     res.json({ message: "게시글이 업로드 되었습니다." });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

// router.post("/getBoardList", async (req, res) => {
//   try {
//     const _id = req.body._id;
//     const board = await Board.find({ writer: _id }, null, {
//       sort: { createdAt: -1 }
//     });
//     res.json({ list: board });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

// router.post("/detail", async (req, res) => {
//   try {
//     const _id = req.body._id;
//     const board = await Board.find({ _id });
//     res.json({ board });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: false });
//   }
// });

// module.exports = router;
