import { product } from "../models/products.mjs"

export const createProducts = async (req, res) => {

    const data = await req?.body
    const newProducts = new product(data)
    const resp = await newProducts.save()

    return res.status(200).json({ messager: 'El producto se ha creado' })
}

export const getProducts = async (req, res) => {

    try {
        const getProduct = await product.find()
        return res.status(200).json({ messager: getProduct })
    } catch (error) {
        console.log(error);
    }

}
export const getProduct = async (req, res) => {

    const { id } = await req.params
    const getData = await product.findOne({ _id: id })

    return res.status(200).json({ messager: getData })

}