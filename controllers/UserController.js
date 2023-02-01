import User from "../models/UserModel.js";

// export const getData = async (req, res) => {
//     try {
//         const response = await User.findAll();
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// // method untuk mengambil data satu persatu melalui id
// export const getDataById = async (req, res) => {
//     try {
//         const response = await User.findOne({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// // method untuk created data user
// export const createData = async (req, res) => {
//     try {
//         // data user.create (data yg diambil dari body)
//         await User.create(req.body);
//         // parsing data .json lalu kirim message 'user created'
//         res.status(201).json({ msg: "Solution Created" });
//     } catch (error) {
//         console.log(error.message);
//     }
// };

// --------------------------- mongodb

export const getData = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getDataById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const saveData = async (req, res) => {
    const user = new User(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
