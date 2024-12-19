import express from 'express';
import { addDoctor,allDoctors,loginAdmin,appointmentsAdmin, appointmentCancel,adminDashboard} from "../controllers/adminController.js";
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { changeAvailablity } from '../controllers/doctorController.js';

const  adminRoute = express.Router()

adminRoute.post('/add-doctor',upload.single('image'),addDoctor)
adminRoute.post('/login',loginAdmin)
adminRoute.post('/all-doctors',allDoctors)
adminRoute.post('/change-availability',changeAvailablity)
adminRoute.get('/appointments',appointmentsAdmin)
adminRoute.post('/cancel-appointment',appointmentCancel)
adminRoute.get('/dashboard',adminDashboard)

export default adminRoute
