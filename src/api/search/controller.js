import client from '../../services/elasticsearch';
import * as validate from '../modules/validate';

// TODO: implement multisearch query
const multiSearch = async ( req, res ) => {
  console.log( `EXECUTE msearch ${res}` );
};

const singleSearch = async ( req, res ) => {
  let data = {
    options: {
      ignoreUnavailable: true,
      allowNoIndices: true,
      requestCache: true
    },
    error: {}
  };

  data = validate.stringOrStringArray(
    {
      q: req.body.query,
      _sourceExclude: req.body.exclude,
      _sourceInclude: req.body.include,
      type: req.body.type,
      index: req.body.index,
      sort: req.body.sort
    },
    data
  );

  if ( req.body.body ) {
    data = validate.jsonString( { body: req.body.body }, data );
  }

  data = validate.number(
    {
      from: req.body.from,
      size: req.body.size
    },
    data
  );

  if ( Object.keys( data.error ).length > 0 ) {
    return res.status( 400 ).json( {
      error: true,
      message: data.error
    } );
  }

  try {
    res.json( await client.search( data.options ).then( esResponse => esResponse ) );
  } catch ( err ) {
    // const message = JSON.parse( err.response ).error.caused_by.reason;
    const message = JSON.parse( err.response ).error.reason;
    return res.status( 400 ).json( {
      error: true,
      message
    } );
  }
};

export const search = async ( req, res ) => {
  if ( req.query.m ) {
    return multiSearch( req, res );
  }
  return singleSearch( req, res );
};
