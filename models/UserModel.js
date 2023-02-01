// models ini berupa struktur table bagaimana data kita nanti tersimpan di database
import mongoose from "mongoose";

const User = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bahasa: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        required: true,
    },
    penyebab: {
        type: String,
        required: true,
    },
    solusi: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Data", User);
