import tempFiles from '../services/tempfiles';

export const cleanTempFilesErrorCtrl = ( err, req, res, next ) => {
  if ( !req.indexed ) console.warn( 'REQUEST IS NOT INDEXED' );
  tempFiles.deleteTempFiles( req.requestId );
  if ( err ) return next( err );
  next();
};

export const cleanTempFilesCtrl = ( req, res, next ) => {
  if ( !req.indexed ) console.warn( 'REQUEST IS NOT INDEXED' );
  tempFiles.deleteTempFiles( req.requestId );
  next();
};
