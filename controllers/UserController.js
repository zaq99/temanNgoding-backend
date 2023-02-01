import User from "../models/UserModel.js";

export const getData = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

// method untuk mengambil data satu persatu melalui id
export const getDataById = async (req, res) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

// method untuk created data user
export const createData = async (req, res) => {
    try {
        // data user.create (data yg diambil dari body)
        await User.create(req.body);
        // parsing data .json lalu kirim message 'user created'
        res.status(201).json({ msg: "Solution Created" });
    } catch (error) {
        console.log(error.message);
    }
};
