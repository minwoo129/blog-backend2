import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String], // 배열
    publishedDate: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', PostSchema);
export default Post;