import { db } from "./db.mjs"

export async function getAll(req , res){
    try {
        const data = await db.many("SELECT * FROM planets")
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ msg : 'Errore nel caricamento dei dati' })
    }
}

export async function getOne( req , res ){
    try {
        const { id } = req.params
        const onePlanet = await db.one("SELECT * FROM planets WHERE id=$1" , Number(id))
        res.status(200).json(onePlanet)
    } catch (error) {
        res.status(404).json({ msg : 'planet not found' })
    }
}

export async function deletePlanet(req , res){
    try {
        const { id } = req.params
        await db.none("DELETE FROM planets where id=$1" , Number(id))
        res.status(200).json({ msg : `Planet with id:${id} deleted` })    
    } catch (error) {
        res.status(400).json({ msg : 'Error'})
    }
}

export async function modifyPlanet(req , res){
    try {
        const { id } = req.params
        const { name } = req.body
        await db.none("UPDATE planets SET name=$2 WHERE id=$1" , [Number(id) , name])
        res.status(200).json({ msg : 'pianeta modificato' })
    } catch (error) {
        res.status(400).json({ msg : 'Error'})
    }
}

export async function createPlanet(req , res){
    try {
        const { name } = req.body
        await db.none("INSERT INTO planets (name) VALUES ($1)" , name)
        res.status(201).json({ msg : 'Planet created' })
    } catch (error) {
        res.status(400).json({ msg : 'Error'})
    }
}

export async function uploadFile(req ,res){
    try {
        const { id } = req.params
        const fileName = req.file.path
        if(fileName){
            await db.none("UPDATE planets SET file=$2 WHERE id=$1" , [Number(id) , fileName])
            res.status(201).json({ msg : 'file added' })
        }
    } catch (error) {
        res.status(400).json({ msg : 'Error'})
    }
}