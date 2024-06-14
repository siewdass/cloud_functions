import { Collection, createConnection } from 'mongoose'

/*export class Database {
	db
	async connect( url ) {
		this.db = createConnection( url )
	}
	async find( collection ) {
		await this.db.collection( collection ).find().toArray()
	}
}*/

export async function Database( database, { body }, res ) {

	try {
		const project = await database.Project.findOne( { name: body.project } ) 
		if ( !project ) throw `project ${ body.project } not exist.` 

		const db = createConnection( `mongodb://localhost:27017/${body.project}?authSource=admin` )

		let values 

		if ( body.database == true ) {
			values = ( await db.listCollections( ) ).map( ( { name } ) => ( { name } ) )
		} else {
      const collection = db.collection('user');
      values = await collection.find({}).toArray();
			console.log(values)
		}


		db.close( )

		res.json( { tables: values } )

	} catch ( error ) {
		
		console.error( error )
		res.json( { error } )

	}

}