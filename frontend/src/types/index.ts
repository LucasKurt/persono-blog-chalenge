export type Post = {
    id: String,
    title: String,
    author: String,
    body: String,
    category: String,
    createdAt: Date,
    updatedAt: Date
}

export type PostError = {
    fieldName: String,
    message: String,
}