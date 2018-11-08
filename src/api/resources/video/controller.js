import { generateControllers } from '../../modules/controllers/generateResource';
import VideoModel from './model';
import Request from 'request';

const model = new VideoModel();

const getSRT = ( req, res, next ) => {
  // Handle error cases
  if ( !req.esDoc ) return next( new Error( `Document not found with UUID: ${req.params.uuid}` ) );
  const srt = model.getSRT( req );
  if ( !srt ) return next( new Error( `SRT (${req.params.md5}) not found for UUID: ${req.params.uuid}` ) );

  res.header( 'Content-Type', 'application/octet-stream' );
  res.header( 'Content-Disposition', `attachment; filename=${srt.filename.toLowerCase()}` );
  Request.get( srt.srcUrl ).pipe( res );
};

export default generateControllers(
  model,
  { getSRT }
);

/*
  NOTE: Generic controller methods can be overidden:
    const getDocumentById = ( req, res, next ) => {
    res.json( { prop: 'example' } );
  };
  export default generateControllers( new VideoModel(), { getDocumentById } );
*/
