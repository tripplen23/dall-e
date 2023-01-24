import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js'

// Make sure the environment variable are indeed getting populated
dotenv.config(); 

const router = express.Router();

export default router;