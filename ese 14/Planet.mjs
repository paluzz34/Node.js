import Joi from 'joi'

let planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    }
]

export const getAll = (req , res) => {
    res.status(200).json(planets)
}

export const getOneByID = (req , res) => {
    const {id} = req.params
    const planet = planets.find(p => p.id === Number(id))
    res.status(200).json(planet)    
}

const schema = Joi.object({
    id : Joi.number().integer().required() ,
    name : Joi.string().required()
})

export const create = (req , res) => {
    const {id , name} = req.body
    const newPlanet = {id , name}
    const validate = schema.validate(newPlanet)
    const planet = planets.find(p => p.id === Number(id))
    if(planet || validate.error){
        res.status(400).json({msg : 'Error during planet creation'})
    } else {
        planets = [...planets , newPlanet]
        res.status(201).json({msg : 'Planet added successfully'})
    }
}

export const updateByID = (req , res) => {
    const { id } = req.params
    const { name } = req.body
    planets = planets.map((p) => (p.id === Number(id) ? {...p , name} : p))
    res.status(200).json({ msg : "Planet updated"})
}

export const deleteByID = (req, res) => {
    const { id } = req.params
    planets = planets.filter((p) => (p.id !== Number(id)))
    res.status(200).json({ msg : 'Planet deleted!' })
}