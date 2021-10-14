import express from 'express';

const userRouter = express.Router();

userRouter.get('/usertest', (req, res) => {
  res.send('User send data successfully')
})

export default userRouter;