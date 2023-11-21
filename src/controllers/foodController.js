import foodService from "../services/foodService";

let getTopChefHome = async (req, res) => {

    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let respose = await foodService.getTopChefHome(+limit);
        return res.status(200).json(respose);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server'
        })
    }
}
module.exports = {
    getTopChefHome: getTopChefHome,
}