import express from 'express'
import  {doctorList, loginDoctor,appointmnetsDoctor,appintmentComplete,appintmentCancel,doctorDashboard,doctorProfile,updateDoctorProfile} from  '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmnetsDoctor)
doctorRouter.post('/complete-appointment',authDoctor,appintmentComplete)
doctorRouter.post('/cancel-appointment',authDoctor,appintmentCancel)
doctorRouter.get('/dashboard',authDoctor,doctorDashboard)
doctorRouter.get('/profile',authDoctor,doctorProfile)
doctorRouter.post('/update-profile',authDoctor,updateDoctorProfile)


export default doctorRouter