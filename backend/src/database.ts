import { createConnection } from 'mongoose'

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
		console.log(body.project)
		//const project = await database.Project.findOne( { name: body.project } ) 
		//if ( !project ) throw `project ${ body.project } not exist.` 

		const db = createConnection( `mongodb://localhost:27017/${body.project}?authSource=admin` )
		console.log(await db.listCollections())
		res.json( { tables: await db.listCollections() } )

	} catch ( error ) {
		
		console.error( error )
		res.json( { error } )

	}

}