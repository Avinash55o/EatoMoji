import {Router} from 'express';
import { signIn, signup } from '../controllers/auth.controller.js';
import { listFood } from '../controllers/food.controller.js';
import { listMood } from '../controllers/mood.controller.js';
import { foodSuggestion } from '../controllers/suggestions.controller.js';
import userProfile from '../controllers/userProfile.controller.js';
const router=Router();

//auth
router.post('/auth/signup',signup)
router.post('/auth/signin',signIn)
router.get('/auth/user',userProfile)

//for me
router.get('/moods', listMood)
router.get('/foods', listFood)

//suggestions
router.get('/suggestions/:mood_id', foodSuggestion)


export default router;