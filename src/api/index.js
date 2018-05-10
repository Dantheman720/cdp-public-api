import { Router } from 'express';
import apiErrorHandler from './modules/errorHandler';
import { whitelist } from '../api/modules/utils';
import { cleanTempFilesCtrl, cleanTempFilesErrorCtrl } from '../middleware/cleanTempFiles';

import adminRoutes from './admin/routes';
import searchRoutes from './search/routes';
import videoRoutes from './resources/video/routes';
import postRoutes from './resources/post/routes';
import courseRoutes from './resources/course/routes';
import languageRoutes from './resources/language/routes';
import taxonomyRoutes from './resources/taxonomy/routes';
import ownerRoutes from './resources/owner/routes';
import zipRoutes from './tasks/zip/routes';

const router = new Router();

// admin routes
router.use( '/admin', whitelist, adminRoutes );

// search -- /v1/search, etc., v1 comes from app.use in index.js
router.use( '/search', searchRoutes );

// resources
router.use( '/video', whitelist, videoRoutes );
router.use( '/post', whitelist, postRoutes );
router.use( '/course', whitelist, courseRoutes );
router.use( '/language', whitelist, languageRoutes );
router.use( '/taxonomy', whitelist, taxonomyRoutes );
router.use( '/owner', whitelist, ownerRoutes );
router.use( '/zip', zipRoutes );

router.use( cleanTempFilesCtrl );

// Catch all errors
router.use( cleanTempFilesErrorCtrl );
router.use( apiErrorHandler );

export default router;
