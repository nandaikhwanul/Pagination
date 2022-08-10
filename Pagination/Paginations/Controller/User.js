import Page from "../Models/UserModel.js";
import {Op} from "sequelize";

export const getUsers = async(req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 1000;
    const search = req.query.search_query || "";
    const offset = limit.page;
    const totalBaris = await Page.count({
        where:{
            [Op.or]: [{name:{
                [Op.like]: '%'+search+'%'
            }}, {email:{
                [Op.like]: '%'+search+'%'
            }}]
        }
    });
    const totalPage = Math.ceil(totalBaris / limit);
    const result = await Page.findAll ({
        where:{
            [Op.or]: [{name:{
                [Op.like]: '%'+search+'%'
            }}, {email:{
                [Op.like]: '%'+search+'%'
            }}]
        },
        offset: offset,
        limit: limit,
        order:[
            ['id', 'DESC']
        ]
    });
    res.json({
        result: result,
        page: page,
        limit: limit,
        totalBaris: totalBaris,
        totalPage: totalPage
    });
    
}